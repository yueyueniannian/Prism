const samplePaper = `Title: ReproBench: Improving Transformer Robustness with Structured Replay

Abstract
We propose ReproBench, a structured replay strategy for low-resource robustness training. Our code, training scripts, and processed datasets are publicly available at https://github.com/openai/openai-cookbook for research use. We evaluate on GLUE, ANLI, and two proprietary stress-test sets.

Method
We release preprocessing scripts, prompts, and full hyperparameter tables in Appendix A. Models are trained with batch size 32, learning rate 2e-5, weight decay 0.01, seed values {13, 17, 21}, and 3 random restarts on 8xA100 GPUs. We report mean and standard deviation across runs. We compare against 6 baselines and include ablation studies for replay ratio, memory size, and augmentation recipe.

Results
ReproBench improves average robustness by 2.3 points over the strongest baseline and 1.1 points over the prior state of the art. We report confidence intervals and paired t-tests with p < 0.05. Failure cases, ethical considerations, and limitations are discussed in Section 6. We provide a model card, Apache-2.0 license, and checkpoints.`;

const dimensionConfig = [
  { key: "reproducibility", label: "可复现性", shortLabel: "复现", color: "#0b7a75" },
  { key: "openSource", label: "是否开源", shortLabel: "开源", color: "#1b6ac9" },
  { key: "repoTruth", label: "开源真实性", shortLabel: "核验", color: "#c26a1b" },
  { key: "resultReason", label: "结果合理性", shortLabel: "结果", color: "#b24c2f" }
];

const dimensionMap = Object.fromEntries(dimensionConfig.map((item) => [item.key, item]));

const keywordSets = {
  dataset: ["dataset", "datasets", "data is available", "public dataset", "benchmark", "语料", "数据集", "公开数据"],
  code: ["github", "gitlab", "huggingface.co", "code is available", "open source", "source code", "代码开源", "开源地址", "仓库"],
  hyperparams: ["learning rate", "batch size", "weight decay", "dropout", "epoch", "epochs", "scheduler", "超参数", "学习率", "批大小", "训练轮数"],
  seeds: ["seed", "random seed", "随机种子", "multiple runs", "restarts", "3 runs", "5 runs", "mean and standard deviation", "std", "variance"],
  ablation: ["ablation", "remove", "without", "消融", "剔除", "模块贡献"],
  baseline: ["baseline", "prior work", "state-of-the-art", "sota", "compare against", "对比方法", "基线", "已有方法"],
  metrics: ["accuracy", "f1", "bleu", "rouge", "auc", "metric", "指标", "准确率", "召回率", "精确率"],
  significance: ["confidence interval", "confidence intervals", "p <", "statistical significance", "standard deviation", "std", "95% ci", "置信区间", "显著性", "方差"],
  limitations: ["limitation", "limitations", "failure case", "error analysis", "ethical", "threats to validity", "局限性", "失败案例", "误差分析", "伦理"],
  environment: ["gpu", "a100", "v100", "cuda", "pytorch", "tensorflow", "hardware", "环境", "显卡", "框架版本"],
  release: ["checkpoint", "model card", "demo", "release", "license", "apache-2.0", "mit license", "bsd", "权重", "模型卡", "许可证"],
  exaggeration: ["dramatically", "huge gain", "massive improvement", "breakthrough", "substantially better", "遥遥领先", "显著优于所有方法", "大幅领先"]
};

const elements = {
  paperInput: document.getElementById("paperInput"),
  analyzeBtn: document.getElementById("analyzeBtn"),
  exampleBtn: document.getElementById("exampleBtn"),
  clearBtn: document.getElementById("clearBtn"),
  fileInput: document.getElementById("fileInput"),
  dropZone: document.getElementById("dropZone"),
  fileMeta: document.getElementById("fileMeta"),
  importHint: document.getElementById("importHint"),
  networkStatus: document.getElementById("networkStatus"),
  analysisState: document.getElementById("analysisState"),
  headlineVerdict: document.getElementById("headlineVerdict"),
  headlineExplanation: document.getElementById("headlineExplanation"),
  scoreGrid: document.getElementById("scoreGrid"),
  evidenceList: document.getElementById("evidenceList"),
  evidenceCount: document.getElementById("evidenceCount"),
  repoStatus: document.getElementById("repoStatus"),
  repoDetails: document.getElementById("repoDetails"),
  paperView: document.getElementById("paperView"),
  legend: document.getElementById("legend"),
  paperSummary: document.getElementById("paperSummary"),
  innovationSummary: document.getElementById("innovationSummary"),
  reproductionGuide: document.getElementById("reproductionGuide")
};

let currentFileName = "";

function init() {
  updateNetworkStatus();
  renderLegend();
  window.addEventListener("online", updateNetworkStatus);
  window.addEventListener("offline", updateNetworkStatus);

  elements.analyzeBtn.addEventListener("click", handleAnalyze);
  elements.exampleBtn.addEventListener("click", () => {
    currentFileName = "sample-paper.txt";
    elements.fileMeta.textContent = "已载入示例文本";
    elements.importHint.textContent = "示例文本已填入，可直接分析。";
    elements.paperInput.value = samplePaper;
    handleAnalyze();
  });
  elements.clearBtn.addEventListener("click", clearAll);
  elements.fileInput.addEventListener("change", async (event) => {
    const [file] = event.target.files || [];
    if (file) {
      await importFile(file);
    }
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    elements.dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      elements.dropZone.classList.add("is-dragging");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    elements.dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      elements.dropZone.classList.remove("is-dragging");
    });
  });

  elements.dropZone.addEventListener("click", (event) => {
    if (event.target.closest(".file-picker")) {
      return;
    }
    elements.fileInput.click();
  });

  elements.dropZone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      elements.fileInput.click();
    }
  });

  elements.dropZone.addEventListener("drop", async (event) => {
    const [file] = event.dataTransfer?.files || [];
    if (file) {
      await importFile(file);
    }
  });
}

function updateNetworkStatus() {
  elements.networkStatus.textContent = navigator.onLine
    ? "当前浏览器在线，可解析 TXT / DOCX / PDF，并尝试 GitHub 仓库核验"
    : "当前浏览器离线，可解析 TXT；DOCX / PDF 解析与 GitHub 核验可能受限";
}

async function importFile(file) {
  setStatus("导入中");
  elements.fileMeta.textContent = `正在解析 ${file.name}`;
  currentFileName = file.name;

  try {
    const text = await parseFile(file);
    const cleaned = text.replace(/\u0000/g, "").trim();

    if (!cleaned) {
      throw new Error("文件已读取，但没有提取到可分析的正文。");
    }

    elements.paperInput.value = cleaned;
    elements.fileMeta.textContent = `已导入 ${file.name}`;
    elements.importHint.textContent = `已提取 ${cleaned.length} 个字符，可直接分析，也可以先在下方修正文案。`;
    setStatus("等待分析");
  } catch (error) {
    elements.fileMeta.textContent = `导入失败：${file.name}`;
    elements.importHint.textContent = error.message;
    setStatus("导入失败", true);
  }
}

async function parseFile(file) {
  const extension = getFileExtension(file.name);

  if (extension === "txt" || extension === "md") {
    return file.text();
  }

  if (extension === "docx") {
    if (!window.mammoth) {
      throw new Error("DOCX 解析器未加载。请联网后重新打开页面，或先转成 TXT。");
    }

    const buffer = await file.arrayBuffer();
    const result = await window.mammoth.extractRawText({ arrayBuffer: buffer });
    return result.value || "";
  }

  if (extension === "pdf") {
    if (!window.pdfjsLib) {
      throw new Error("PDF 解析器未加载。请联网后重新打开页面，或先转成 TXT。");
    }

    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

    const buffer = await file.arrayBuffer();
    const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise;
    const pages = [];

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      const text = content.items.map((item) => item.str).join(" ");
      pages.push(text);
    }

    return pages.join("\n\n");
  }

  if (extension === "doc") {
    throw new Error("旧版 .doc 文件无法稳定在纯前端解析。建议先另存为 .docx 或 .txt。");
  }

  throw new Error("当前仅支持导入 TXT、MD、DOCX、PDF。");
}

async function handleAnalyze() {
  const rawText = elements.paperInput.value.trim();
  if (!rawText) {
    setStatus("请输入论文文本", true);
    elements.headlineVerdict.textContent = "缺少输入";
    elements.headlineExplanation.textContent = "先导入 TXT、DOCX、PDF，或把提取后的正文放进编辑框。";
    renderPlaceholderScores();
    renderList(elements.evidenceList, [{ text: "未输入任何论文内容。" }]);
    elements.repoStatus.textContent = "未分析";
    elements.repoDetails.textContent = "等待输入。";
    renderInsights(buildEmptyInsights());
    renderPaperView([], new Map());
    return;
  }

  setStatus("分析中");
  const analysis = await analyzePaper(rawText);
  renderAnalysis(analysis);
}

function clearAll() {
  currentFileName = "";
  elements.fileInput.value = "";
  elements.paperInput.value = "";
  elements.fileMeta.textContent = "尚未导入文件";
  elements.importHint.textContent = "支持 TXT、DOCX、PDF；若是旧版 DOC，请先转成 DOCX。";
  setStatus("等待输入");
  elements.headlineVerdict.textContent = "尚未分析";
  elements.headlineExplanation.textContent = "导入论文后，这里会给出综合判断、原文高亮证据和仓库核验结果。";
  renderPlaceholderScores();
  renderList(elements.evidenceList, [{ text: "等待分析。" }]);
  elements.repoStatus.textContent = "未发现仓库链接";
  elements.repoDetails.textContent = "如果正文中出现 GitHub 仓库地址，这里会显示公开性、License、最近更新时间等核验信息。";
  elements.evidenceCount.textContent = "0 条";
  renderInsights(buildEmptyInsights());
  renderPaperView([], new Map());
}

async function analyzePaper(text) {
  const normalized = normalizeText(text);
  const blocks = splitIntoBlocks(text);
  const urls = extractUrls(text);
  const githubRepo = findGitHubRepo(urls);
  const highlightStore = new Map();

  const reproducibility = scoreReproducibility(normalized, blocks, highlightStore);
  const openSource = scoreOpenSource(normalized, blocks, urls, highlightStore);
  const resultReason = scoreResultReasonableness(normalized, text, blocks, highlightStore);
  const repoTruth = await scoreRepoTruth(normalized, blocks, githubRepo, highlightStore);

  const dimensions = {
    reproducibility,
    openSource,
    repoTruth,
    resultReason
  };

  const evidence = buildEvidenceList(highlightStore);
  const totalScore = Math.round(
    Object.values(dimensions).reduce((sum, item) => sum + item.score, 0) / dimensionConfig.length
  );

  return {
    dimensions,
    verdict: buildVerdict(totalScore, dimensions),
    evidence,
    repoInfo: repoTruth.repoInfo,
    insights: buildInsights(text, blocks, githubRepo, dimensions),
    blocks,
    highlightStore
  };
}

function scoreReproducibility(text, blocks, highlightStore) {
  let score = 18;
  const recommendations = [];

  const checks = [
    { set: "dataset", weight: 12, hit: "提到了数据集来源或 benchmark。", miss: "补充数据集来源、切分方式和访问路径。" },
    { set: "hyperparams", weight: 12, hit: "给出了超参数细节。", miss: "公开关键超参数，例如学习率、batch size、训练轮数。" },
    { set: "environment", weight: 8, hit: "描述了硬件或软件环境。", miss: "说明训练环境、框架版本和硬件配置。" },
    { set: "seeds", weight: 10, hit: "说明了随机种子、多次运行或方差。", miss: "报告随机种子和多次运行统计。" },
    { set: "ablation", weight: 10, hit: "包含消融或模块贡献分析。", miss: "增加消融实验，说明每个模块的真实贡献。" },
    { set: "baseline", weight: 8, hit: "给出了对比基线。", miss: "列出强基线并说明复现设置是否一致。" },
    { set: "limitations", weight: 8, hit: "讨论了局限性或失败案例。", miss: "补充失败案例与局限性分析。" },
    { set: "code", weight: 14, hit: "给出了代码或仓库线索。", miss: "补充代码仓库、推理脚本或补充材料地址。" }
  ];

  checks.forEach((check) => {
    const block = findBlockByKeywords(blocks, keywordSets[check.set]);
    if (block) {
      score += check.weight;
      addHighlight(highlightStore, block, "reproducibility", check.hit);
    } else {
      recommendations.push(check.miss);
    }
  });

  return {
    score: clamp(score),
    summary: describeBand(score, "复现性证据较强", "复现性信息偏少"),
    recommendations
  };
}

function scoreOpenSource(text, blocks, urls, highlightStore) {
  let score = 8;
  const recommendations = [];

  const codeBlock = findBlockByKeywords(blocks, keywordSets.code);
  if (codeBlock) {
    score += 30;
    addHighlight(highlightStore, codeBlock, "openSource", "文本明确提到了代码或开源声明。");
  } else {
    recommendations.push("如果已开源，明确写出代码地址和开放范围。");
  }

  if (urls.length > 0) {
    score += 28;
    const urlBlock = findBlockContainingText(blocks, urls[0]) || codeBlock || blocks[0];
    if (urlBlock) {
      addHighlight(highlightStore, urlBlock, "openSource", `提取到 ${urls.length} 个链接，可作为开源线索。`);
    }
  } else {
    recommendations.push("在正文、脚注或附录中加入可点击仓库链接。");
  }

  const releaseBlock = findBlockByKeywords(blocks, keywordSets.release);
  if (releaseBlock) {
    score += 18;
    addHighlight(highlightStore, releaseBlock, "openSource", "提到了权重、License、checkpoint 或模型卡。");
  } else {
    recommendations.push("补充 License、checkpoint 或 model card 信息。");
  }

  const datasetBlock = findBlockByKeywords(blocks, keywordSets.dataset);
  if (datasetBlock) {
    score += 10;
    addHighlight(highlightStore, datasetBlock, "openSource", "数据或 benchmark 也有公开线索。");
  }

  return {
    score: clamp(score),
    summary: describeBand(score, "开源信号较强", "开源信号偏弱"),
    recommendations
  };
}

async function scoreRepoTruth(text, blocks, githubRepo, highlightStore) {
  let score = 14;
  const recommendations = [];
  let repoInfo = {
    status: "未发现 GitHub 链接",
    detail: "如果论文提供 GitHub 仓库，本页面会尝试在线核验。",
    badges: []
  };

  const codeBlock = findBlockByKeywords(blocks, keywordSets.code);
  if (!codeBlock) {
    return {
      score,
      summary: "没有足够的开源声明可供核验",
      recommendations: ["如果声称开源，给出具体仓库链接和发布日期。"],
      repoInfo
    };
  }

  if (!githubRepo) {
    score += 18;
    addHighlight(highlightStore, codeBlock, "repoTruth", "文中有开源声明，但缺少标准 GitHub 链接。");
    recommendations.push("给出标准 GitHub 仓库地址，便于外部核验。");
    repoInfo = {
      status: "发现开源声明，但没有 GitHub 仓库",
      detail: "当前前端可自动核验 GitHub 公共仓库；其他平台只能做文本一致性判断。",
      badges: [{ text: "仅文本判断", type: "warn" }]
    };

    return {
      score: clamp(score),
      summary: "只能做文本一致性判断",
      recommendations,
      repoInfo
    };
  }

  const repoBlock = findBlockContainingText(blocks, githubRepo.url) || codeBlock;
  addHighlight(
    highlightStore,
    repoBlock,
    "repoTruth",
    `检测到 GitHub 仓库：${githubRepo.owner}/${githubRepo.repo}。`
  );

  if (!navigator.onLine) {
    score += 26;
    recommendations.push("联网后可进一步核验仓库是否真实存在、是否公开以及最近更新时间。");
    repoInfo = {
      status: "浏览器离线",
      detail: `已识别仓库 ${githubRepo.owner}/${githubRepo.repo}，但当前离线，无法调用 GitHub API。`,
      badges: [{ text: "离线模式", type: "warn" }]
    };

    return {
      score: clamp(score),
      summary: "仓库已识别，但未完成在线核验",
      recommendations,
      repoInfo
    };
  }

  try {
    const repoData = await fetchGitHubRepo(githubRepo.owner, githubRepo.repo);
    const daysSincePush = daysBetween(repoData.pushed_at, new Date().toISOString());
    score += 46;
    addHighlight(highlightStore, repoBlock, "repoTruth", "GitHub API 返回了公开仓库元信息。");

    if (repoData.license?.spdx_id && repoData.license.spdx_id !== "NOASSERTION") {
      score += 10;
    } else {
      recommendations.push("仓库缺少清晰的 License，外部复现和复用边界不明确。");
    }

    if (daysSincePush <= 365) {
      score += 8;
    } else {
      recommendations.push("仓库长期未更新，建议检查是否能运行在当前依赖环境中。");
    }

    if (repoData.stargazers_count > 0 || repoData.forks_count > 0) {
      score += 6;
    }

    repoInfo = {
      status: "GitHub 核验成功",
      detail: `${repoData.full_name} 公开可见，Stars ${repoData.stargazers_count}，Forks ${repoData.forks_count}，最近推送 ${formatDate(repoData.pushed_at)}。`,
      badges: [
        { text: repoData.private ? "私有仓库" : "公开仓库", type: repoData.private ? "warn" : "ok" },
        { text: repoData.license?.spdx_id || "无 License", type: repoData.license?.spdx_id ? "ok" : "warn" },
        { text: repoData.archived ? "已归档" : "活跃", type: repoData.archived ? "warn" : "ok" }
      ]
    };
  } catch (error) {
    recommendations.push("GitHub 核验失败，建议检查链接是否有效、仓库是否公开或是否触发了 API 限流。");
    repoInfo = {
      status: "GitHub 核验失败",
      detail: `已识别仓库 ${githubRepo.owner}/${githubRepo.repo}，但未成功获取元信息：${error.message}`,
      badges: [{ text: "核验失败", type: "warn" }]
    };

    if (/404/.test(String(error.message))) {
      addHighlight(highlightStore, repoBlock, "repoTruth", "仓库链接无法通过 GitHub API 确认，真实性存疑。");
      score += 4;
    }
  }

  return {
    score: clamp(score),
    summary: describeBand(score, "仓库真实性证据较强", "仓库真实性证据不足"),
    recommendations,
    repoInfo
  };
}

function scoreResultReasonableness(text, originalText, blocks, highlightStore) {
  let score = 24;
  const recommendations = [];

  const baselineBlock = findBlockByKeywords(blocks, keywordSets.baseline);
  if (baselineBlock) {
    score += 18;
    addHighlight(highlightStore, baselineBlock, "resultReason", "结果对比了基线或已有方法。");
  } else {
    recommendations.push("补充与强基线的公平对比。");
  }

  const metricsBlock = findBlockByKeywords(blocks, keywordSets.metrics);
  if (metricsBlock) {
    score += 12;
    addHighlight(highlightStore, metricsBlock, "resultReason", "明确给出了评估指标。");
  } else {
    recommendations.push("说明使用了哪些评价指标以及为何选择它们。");
  }

  const significanceBlock = findBlockByKeywords(blocks, keywordSets.significance);
  if (significanceBlock) {
    score += 16;
    addHighlight(highlightStore, significanceBlock, "resultReason", "报告了方差、置信区间或显著性。");
  } else {
    recommendations.push("增加方差、置信区间或显著性检验，避免单次跑分误导。");
  }

  const limitationBlock = findBlockByKeywords(blocks, keywordSets.limitations);
  if (limitationBlock) {
    score += 10;
    addHighlight(highlightStore, limitationBlock, "resultReason", "作者承认了局限性或失败案例。");
  } else {
    recommendations.push("补充失败案例和负面结果，帮助判断是否存在选择性汇报。");
  }

  const improvementSignals = extractImprovementNumbers(originalText);
  if (improvementSignals.maxAbs <= 5) {
    score += 10;
    const resultBlock = significanceBlock || baselineBlock || blocks[0];
    if (resultBlock) {
      addHighlight(highlightStore, resultBlock, "resultReason", "报告的提升幅度看起来较克制。");
    }
  } else if (improvementSignals.maxAbs > 15 && !significanceBlock) {
    score -= 14;
    const resultBlock = baselineBlock || blocks[0];
    if (resultBlock) {
      addHighlight(highlightStore, resultBlock, "resultReason", "存在较大提升声明，但缺少足够统计支持。");
    }
    recommendations.push("如果提升很大，建议提供更强的显著性证据和误差分析。");
  }

  const hypeBlock = findBlockByKeywords(blocks, keywordSets.exaggeration);
  if (hypeBlock) {
    score -= 8;
    addHighlight(highlightStore, hypeBlock, "resultReason", "文本包含较强宣传性措辞。");
    recommendations.push("减少夸张表述，用更可核验的实验结果支撑结论。");
  }

  return {
    score: clamp(score),
    summary: describeBand(score, "结果论证相对稳健", "结果论证支撑不足"),
    recommendations
  };
}

function buildVerdict(totalScore, dimensions) {
  const weak = Object.entries(dimensions)
    .filter(([, item]) => item.score < 55)
    .map(([key]) => dimensionMap[key]?.label)
    .filter(Boolean);

  let title = "中等可信，需要人工复核";
  if (totalScore >= 80) {
    title = "整体可信度较高";
  } else if (totalScore < 55) {
    title = "风险较高，证据不足";
  }

  const explanation = weak.length > 0
    ? `综合分 ${totalScore}/100。薄弱项主要在：${weak.join("、")}。`
    : `综合分 ${totalScore}/100。四个维度都有较明确的文本支持。`;

  return { title, explanation };
}

function buildInsights(text, blocks, githubRepo, dimensions) {
  if (!text || !blocks.length) {
    return buildEmptyInsights();
  }

  const abstractBlock = findBlockByKeywords(blocks, ["abstract", "摘要"]) || blocks[0];
  const methodBlock = findBlockByKeywords(blocks, ["method", "approach", "framework", "propose", "我们提出", "方法"]) || blocks[1] || blocks[0];
  const resultBlock = findBlockByKeywords(blocks, ["result", "results", "improve", "outperform", "实验", "结果", "提升"]) || blocks[2] || methodBlock;
  const ablationBlock = findBlockByKeywords(blocks, keywordSets.ablation);
  const baselineBlock = findBlockByKeywords(blocks, keywordSets.baseline);
  const datasetBlock = findBlockByKeywords(blocks, keywordSets.dataset);

  const paperSummary = compactSentence(
    abstractBlock?.text ||
    methodBlock?.text ||
    "文中没有明显摘要句，建议结合方法和实验段落人工确认论文主线。"
  );

  let innovationSummary = compactSentence(
    methodBlock?.text ||
    "当前未识别到明确的方法创新描述，可能需要查看方法章节标题和模块设计。"
  );

  if (ablationBlock && baselineBlock) {
    innovationSummary = `${innovationSummary} 同时文中还给出了对比基线与消融线索，说明创新点不只是口头声明。`;
  } else if (resultBlock && dimensions.resultReason.score >= 70) {
    innovationSummary = `${innovationSummary} 结果段还给出了相对稳健的实验支撑。`;
  }

  let reproductionGuide = "";
  if (githubRepo) {
    const datasetHint = datasetBlock
      ? "先按论文中的数据集或 benchmark 准备输入数据，"
      : "先确认论文依赖的数据来源与切分方式，";
    reproductionGuide = `${datasetHint}再进入 ${githubRepo.owner}/${githubRepo.repo} 查看 README、requirements、训练脚本和 checkpoint 下载说明；优先复现作者给出的主实验配置，再根据文中的超参数、随机种子和消融设置逐步补齐对照实验。`;
  } else {
    const environmentHint = dimensions.reproducibility.score >= 70
      ? "论文已经给出了一部分超参数和环境线索，"
      : "论文的复现线索不算完整，";
    reproductionGuide = `${environmentHint}建议先整理数据集、预处理、模型结构、训练环境和评测指标，再按“主实验 -> 强基线 -> 消融实验”的顺序搭建；如果文中没有源码，需要优先从方法图、伪代码和实验表格反推关键模块。`;
  }

  return {
    paperSummary,
    innovationSummary,
    reproductionGuide
  };
}

function buildEmptyInsights() {
  return {
    paperSummary: "导入并分析后，这里会给出论文做了什么、解决什么问题的简要概括。",
    innovationSummary: "这里会提炼方法创新、实验亮点或相对已有工作的主要变化。",
    reproductionGuide: "如果检测到代码仓库，会给出基于源码的简要复现路线；否则给出从数据、环境到实验设置的大致引导。"
  };
}

function renderAnalysis(analysis) {
  setStatus("分析完成");
  elements.headlineVerdict.textContent = analysis.verdict.title;
  elements.headlineExplanation.textContent = analysis.verdict.explanation;

  renderScores(analysis.dimensions);
  renderList(elements.evidenceList, analysis.evidence, true);
  elements.evidenceCount.textContent = `${analysis.evidence.length} 条`;
  renderInsights(analysis.insights);

  elements.repoStatus.textContent = analysis.repoInfo.status;
  elements.repoDetails.innerHTML = "";
  const detail = document.createElement("p");
  detail.textContent = analysis.repoInfo.detail;
  elements.repoDetails.appendChild(detail);

  if (analysis.repoInfo.badges?.length) {
    const badgeLine = document.createElement("div");
    badgeLine.className = "badge-line";
    analysis.repoInfo.badges.forEach((badgeData) => {
      const badge = document.createElement("span");
      badge.className = badgeData.type === "warn" ? "badge warn" : "badge";
      badge.textContent = badgeData.text;
      badgeLine.appendChild(badge);
    });
    elements.repoDetails.appendChild(badgeLine);
  }

  renderPaperView(analysis.blocks, analysis.highlightStore);
}

function renderInsights(insights) {
  elements.paperSummary.textContent = insights.paperSummary;
  elements.innovationSummary.textContent = insights.innovationSummary;
  elements.reproductionGuide.textContent = insights.reproductionGuide;
}

function renderScores(dimensions) {
  elements.scoreGrid.innerHTML = "";

  dimensionConfig.forEach((config) => {
    const item = dimensions[config.key];
    const card = document.createElement("article");
    card.className = `score-card dim-${config.key}`;
    card.innerHTML = `
      <div class="score-top">
        <h3>${config.label}</h3>
        <span class="score-value">${item.score}</span>
      </div>
      <div class="bar"><span style="width: ${item.score}%; background: ${config.color};"></span></div>
      <p class="score-copy">${item.summary}</p>
    `;
    elements.scoreGrid.appendChild(card);
  });
}

function renderPlaceholderScores() {
  elements.scoreGrid.innerHTML = `
    <article class="score-card placeholder-card">
      <p>结果将显示在这里。</p>
    </article>
  `;
}

function renderLegend() {
  elements.legend.innerHTML = "";
  dimensionConfig.forEach((dimension) => {
    const chip = document.createElement("span");
    chip.className = "legend-chip";
    chip.style.backgroundColor = hexToRgba(dimension.color, 0.12);
    chip.style.borderColor = hexToRgba(dimension.color, 0.24);
    chip.style.color = dimension.color;
    chip.textContent = dimension.label;
    elements.legend.appendChild(chip);
  });
}

function renderList(listElement, items, clickable = false) {
  listElement.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    if (!clickable) {
      li.textContent = item.text;
      listElement.appendChild(li);
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "evidence-item";
    button.dataset.target = item.anchorId;
    button.innerHTML = `
      <span class="evidence-tag">
        ${dimensionMap[item.dimensionKey].label}
      </span>
      <span class="evidence-main">
        <strong>${item.reason}</strong>
        <span>${item.excerpt}</span>
      </span>
    `;
    const tag = button.querySelector(".evidence-tag");
    if (tag) {
      const color = dimensionMap[item.dimensionKey].color;
      tag.style.backgroundColor = hexToRgba(color, 0.12);
      tag.style.borderColor = hexToRgba(color, 0.24);
      tag.style.color = color;
    }
    button.addEventListener("click", () => focusHighlight(item.anchorId));
    li.appendChild(button);
    listElement.appendChild(li);
  });
}

function renderPaperView(blocks, highlightStore) {
  elements.paperView.innerHTML = "";

  if (!blocks.length) {
    elements.paperView.textContent = "分析后，这里会显示与证据列表对应的原文高亮。";
    return;
  }

  const paragraphMap = new Map();
  blocks.forEach((block) => {
    if (!paragraphMap.has(block.paragraphIndex)) {
      paragraphMap.set(block.paragraphIndex, []);
    }
    paragraphMap.get(block.paragraphIndex).push(block);
  });

  [...paragraphMap.entries()].forEach(([, paragraphBlocks]) => {
    const paragraph = document.createElement("p");
    paragraph.className = "paper-paragraph";

    paragraphBlocks.forEach((block) => {
      const mark = document.createElement("span");
      mark.className = "paper-segment";
      mark.textContent = `${block.text} `;
      mark.id = `mark-${block.id}`;

      const dims = getBlockDimensions(highlightStore, block.id);
      if (dims.length) {
        const colors = dims.map((dimensionKey) => dimensionMap[dimensionKey].color);
        mark.classList.add("is-highlight");
        mark.style.setProperty("--highlight-bg", buildHighlightGradient(colors));
        mark.title = dims.map((dimensionKey) => dimensionMap[dimensionKey].label).join(" / ");

        const tags = document.createElement("span");
        tags.className = "mini-tags";
        dims.forEach((dimensionKey) => {
          const tag = document.createElement("span");
          tag.className = "mini-tag";
          tag.style.backgroundColor = hexToRgba(dimensionMap[dimensionKey].color, 0.12);
          tag.style.borderColor = hexToRgba(dimensionMap[dimensionKey].color, 0.24);
          tag.style.color = dimensionMap[dimensionKey].color;
          tag.textContent = dimensionMap[dimensionKey].shortLabel;
          tags.appendChild(tag);
        });
        mark.appendChild(tags);
      }

      paragraph.appendChild(mark);
    });

    elements.paperView.appendChild(paragraph);
  });
}

function focusHighlight(anchorId) {
  const target = document.getElementById(anchorId);
  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "center" });
  target.classList.add("flash-focus");
  window.setTimeout(() => target.classList.remove("flash-focus"), 1400);
}

function setStatus(text, isWarn = false) {
  elements.analysisState.textContent = text;
  elements.analysisState.style.background = isWarn ? "rgba(178, 76, 47, 0.12)" : "rgba(11, 122, 117, 0.12)";
  elements.analysisState.style.color = isWarn ? "#b24c2f" : "#0b7a75";
}

function splitIntoBlocks(text) {
  const paragraphs = text
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const blocks = [];
  paragraphs.forEach((paragraph, paragraphIndex) => {
    const parts = paragraph
      .split(/(?<=[。！？!?；;])\s*|(?<=\.)\s+(?=[A-Z0-9])/)
      .map((part) => part.trim())
      .filter(Boolean);

    parts.forEach((part, blockIndex) => {
      blocks.push({
        id: `p${paragraphIndex}-b${blockIndex}`,
        paragraphIndex,
        blockIndex,
        text: part,
        normalized: normalizeText(part)
      });
    });
  });

  return blocks.length
    ? blocks
    : [{ id: "p0-b0", paragraphIndex: 0, blockIndex: 0, text: text.trim(), normalized: normalizeText(text) }];
}

function findBlockByKeywords(blocks, keywords) {
  return blocks.find((block) => containsAny(block.normalized, keywords)) || null;
}

function findBlockContainingText(blocks, target) {
  const normalizedTarget = normalizeText(target);
  return blocks.find((block) => block.normalized.includes(normalizedTarget)) || null;
}

function addHighlight(store, block, dimensionKey, reason) {
  if (!block) {
    return null;
  }

  const key = `${block.id}:${dimensionKey}`;
  if (!store.has(key)) {
    store.set(key, {
      key,
      blockId: block.id,
      dimensionKey,
      reasons: [reason],
      excerpt: block.text,
      paragraphIndex: block.paragraphIndex,
      blockIndex: block.blockIndex
    });
    return store.get(key);
  }

  const current = store.get(key);
  if (!current.reasons.includes(reason)) {
    current.reasons.push(reason);
  }
  return current;
}

function buildEvidenceList(highlightStore) {
  return [...highlightStore.values()]
    .map((item) => ({
      key: item.key,
      anchorId: `mark-${item.blockId}`,
      dimensionKey: item.dimensionKey,
      reason: item.reasons[0],
      excerpt: trimExcerpt(item.excerpt),
      paragraphIndex: item.paragraphIndex,
      blockIndex: item.blockIndex
    }))
    .sort((left, right) => {
      if (left.paragraphIndex !== right.paragraphIndex) {
        return left.paragraphIndex - right.paragraphIndex;
      }
      return left.blockIndex - right.blockIndex;
    })
    .slice(0, 14);
}

function getBlockDimensions(highlightStore, blockId) {
  return [...highlightStore.values()]
    .filter((item) => item.blockId === blockId)
    .map((item) => item.dimensionKey);
}

function buildHighlightGradient(colors) {
  if (colors.length === 1) {
    return `linear-gradient(180deg, transparent 0%, transparent 56%, ${hexToRgba(colors[0], 0.3)} 56%, ${hexToRgba(colors[0], 0.3)} 100%)`;
  }

  const step = 100 / colors.length;
  const stops = colors
    .map((color, index) => {
      const start = Math.round(index * step);
      const end = Math.round((index + 1) * step);
      const rgba = hexToRgba(color, 0.26);
      return `${rgba} ${start}%, ${rgba} ${end}%`;
    })
    .join(", ");

  return `linear-gradient(180deg, transparent 0%, transparent 48%, transparent 48%, transparent 56%), linear-gradient(90deg, ${stops})`;
}

function normalizeText(text) {
  return String(text).toLowerCase().replace(/\s+/g, " ").trim();
}

function extractUrls(text) {
  const matches = text.match(/https?:\/\/[^\s)]+/gi) || [];
  return dedupe(matches.map((url) => url.replace(/[.,;]$/, "")));
}

function findGitHubRepo(urls) {
  for (const url of urls) {
    const match = url.match(/github\.com\/([^/\s]+)\/([^/\s#?]+)/i);
    if (match) {
      return {
        owner: match[1],
        repo: match[2].replace(/\.git$/i, ""),
        url
      };
    }
  }
  return null;
}

async function fetchGitHubRepo(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: { Accept: "application/vnd.github+json" }
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}`);
  }

  return response.json();
}

function containsAny(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword.toLowerCase()));
}

function extractImprovementNumbers(text) {
  const matches = [...text.matchAll(/([+-]?\d+(?:\.\d+)?)\s*(?:points|point|%|个百分点)/gi)];
  const values = matches.map((match) => Math.abs(Number(match[1]))).filter((value) => !Number.isNaN(value));
  return { maxAbs: values.length ? Math.max(...values) : 0 };
}

function getFileExtension(fileName) {
  return fileName.split(".").pop()?.toLowerCase() || "";
}

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function describeBand(score, positive, negative) {
  if (score >= 80) {
    return `${positive}，整体证据比较完整。`;
  }
  if (score >= 60) {
    return `${positive}，但还存在补充空间。`;
  }
  return `${negative}，当前只能做保守判断。`;
}

function dedupe(items) {
  return [...new Set(items)];
}

function trimExcerpt(text) {
  const compact = text.replace(/\s+/g, " ").trim();
  return compact.length > 110 ? `${compact.slice(0, 110)}...` : compact;
}

function compactSentence(text) {
  const compact = String(text).replace(/\s+/g, " ").trim();
  return compact.length > 180 ? `${compact.slice(0, 180)}...` : compact;
}

function daysBetween(olderDate, newerDate) {
  const older = new Date(olderDate).getTime();
  const newer = new Date(newerDate).getTime();
  return Math.max(0, Math.round((newer - older) / (1000 * 60 * 60 * 24)));
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "未知";
  }
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const safeHex = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized;
  const value = Number.parseInt(safeHex, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

init();
