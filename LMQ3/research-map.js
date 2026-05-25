const researchAreas = [
  {
    id: "multimodal-llm",
    title: "多模态大模型",
    keywords: ["多模态", "vlm", "vision language", "multimodal", "多模态大模型", "视觉语言"],
    subtitle: "视觉语言、长上下文、多模态代理",
    nodes: [
      {
        id: "mplug-owl3",
        title: "mPLUG-Owl3",
        year: "2025",
        role: "多模态基座",
        openSource: "开源",
        reproducibility: "中",
        hypeRisk: "中",
        note: "强调统一感知与推理，适合作为通用 VLM 基座参考。",
        x: 18,
        y: 26
      },
      {
        id: "llava-next",
        title: "LLaVA-NeXT",
        year: "2024",
        role: "视觉指令跟随",
        openSource: "开源",
        reproducibility: "高",
        hypeRisk: "低",
        note: "工程复现资料相对成熟，经常作为多模态对照基线。",
        x: 54,
        y: 18
      },
      {
        id: "qwen2-vl",
        title: "Qwen2-VL",
        year: "2024",
        role: "长图文理解",
        openSource: "开源",
        reproducibility: "中",
        hypeRisk: "低",
        note: "文档、图表和 OCR 能力较强，适合研究复杂视觉输入。",
        x: 80,
        y: 34
      },
      {
        id: "internvl2",
        title: "InternVL2",
        year: "2024",
        role: "大规模视觉语言",
        openSource: "部分开源",
        reproducibility: "中",
        hypeRisk: "中",
        note: "常见于高性能榜单，但训练细节与资源门槛较高。",
        x: 36,
        y: 58
      },
      {
        id: "vila",
        title: "VILA",
        year: "2024",
        role: "高效部署路线",
        openSource: "开源",
        reproducibility: "高",
        hypeRisk: "低",
        note: "适合关注部署、效率和蒸馏路线的工作。",
        x: 70,
        y: 66
      }
    ],
    edges: [
      { from: "llava-next", to: "mplug-owl3", label: "指令跟随范式延展" },
      { from: "llava-next", to: "qwen2-vl", label: "长图文能力对照" },
      { from: "mplug-owl3", to: "internvl2", label: "高性能多模态路线" },
      { from: "internvl2", to: "vila", label: "效率与规模权衡" },
      { from: "qwen2-vl", to: "vila", label: "部署优化关联" }
    ],
    directions: [
      { title: "多模态 Agent", score: "高", analysis: "如果你关心图像理解走向工具使用和任务规划，这条线的延展性最好。" },
      { title: "文档理解与 OCR 增强", score: "高", analysis: "适合做表格、图表、长文档场景，工程价值直接，数据和评测也比较清楚。" },
      { title: "轻量化部署", score: "中", analysis: "更偏系统与优化，适合资源有限但想快速落地的路线。" }
    ]
  },
  {
    id: "rag",
    title: "RAG 与检索增强生成",
    keywords: ["rag", "检索增强", "retrieval", "知识库", "向量检索"],
    subtitle: "检索、重排、代理式问答、知识注入",
    nodes: [
      {
        id: "naive-rag",
        title: "Naive RAG Pipeline",
        year: "2023",
        role: "基础检索框架",
        openSource: "开源",
        reproducibility: "高",
        hypeRisk: "低",
        note: "作为入门与基线非常稳，利于比较各种增强模块的真实收益。",
        x: 18,
        y: 30
      },
      {
        id: "self-rag",
        title: "Self-RAG",
        year: "2024",
        role: "自反思检索",
        openSource: "部分开源",
        reproducibility: "中",
        hypeRisk: "中",
        note: "亮点是让模型决定何时检索，但训练与推理策略更复杂。",
        x: 46,
        y: 16
      },
      {
        id: "graph-rag",
        title: "GraphRAG",
        year: "2024",
        role: "图结构知识组织",
        openSource: "开源",
        reproducibility: "中",
        hypeRisk: "低",
        note: "适合长文档与企业知识库，重点在结构化组织而非纯向量召回。",
        x: 76,
        y: 28
      },
      {
        id: "adaptive-rag",
        title: "Adaptive-RAG",
        year: "2024",
        role: "按问题复杂度调度",
        openSource: "开源",
        reproducibility: "中",
        hypeRisk: "低",
        note: "用调度机制节约成本，适合研究延迟和收益的平衡。",
        x: 30,
        y: 60
      },
      {
        id: "agentic-rag",
        title: "Agentic RAG",
        year: "2025",
        role: "工具调用与多步检索",
        openSource: "部分开源",
        reproducibility: "低",
        hypeRisk: "中",
        note: "展示效果强，但很容易把收益混杂在工具链与提示工程里。",
        x: 68,
        y: 62
      }
    ],
    edges: [
      { from: "naive-rag", to: "self-rag", label: "检索触发机制升级" },
      { from: "naive-rag", to: "adaptive-rag", label: "成本控制路线" },
      { from: "self-rag", to: "agentic-rag", label: "自反思到多步代理" },
      { from: "graph-rag", to: "agentic-rag", label: "结构化知识联动" },
      { from: "adaptive-rag", to: "graph-rag", label: "检索策略对照" }
    ],
    directions: [
      { title: "企业知识库问答", score: "高", analysis: "需求稳定，评测边界清晰，容易做真实业务闭环。" },
      { title: "多跳检索与代理推理", score: "中", analysis: "新颖但变量多，容易把效果建立在复杂流程上，审稿时更容易被质疑灌水。" },
      { title: "检索成本优化", score: "高", analysis: "更容易产出扎实实验，尤其适合做 latency、token cost、召回收益分析。" }
    ]
  },
  {
    id: "diffusion",
    title: "扩散模型",
    keywords: ["扩散", "diffusion", "文生图", "图像生成", "视频生成"],
    subtitle: "文生图、视频扩散、控制生成、蒸馏加速",
    nodes: [
      {
        id: "stable-diffusion",
        title: "Stable Diffusion",
        year: "2022",
        role: "开放生成基座",
        openSource: "开源",
        reproducibility: "高",
        hypeRisk: "低",
        note: "基础生态最完整，适合做控制、编辑、蒸馏等增量研究。",
        x: 18,
        y: 26
      },
      {
        id: "sdxl",
        title: "SDXL",
        year: "2023",
        role: "高质量图像生成",
        openSource: "开源",
        reproducibility: "中",
        hypeRisk: "低",
        note: "常作为高质量图像生成基线，适合做质量与效率对比。",
        x: 48,
        y: 16
      },
      {
        id: "controlnet",
        title: "ControlNet",
        year: "2023",
        role: "条件控制生成",
        openSource: "开源",
        reproducibility: "高",
        hypeRisk: "低",
        note: "结构清晰、实验直观，是非常稳的研究切入点。",
        x: 76,
        y: 30
      },
      {
        id: "lcm",
        title: "LCM / Consistency Distillation",
        year: "2024",
        role: "少步采样加速",
        openSource: "开源",
        reproducibility: "中",
        hypeRisk: "中",
        note: "加速收益明显，但画质退化和稳定性必须报告清楚。",
        x: 30,
        y: 60
      },
      {
        id: "sora-like",
        title: "Video Diffusion Route",
        year: "2025",
        role: "视频扩散",
        openSource: "不开源",
        reproducibility: "低",
        hypeRisk: "高",
        note: "效果吸引人，但真实可复现性往往弱，容易堆资源和演示样例。",
        x: 68,
        y: 60
      }
    ],
    edges: [
      { from: "stable-diffusion", to: "sdxl", label: "高质量基座演化" },
      { from: "stable-diffusion", to: "controlnet", label: "条件控制路线" },
      { from: "sdxl", to: "lcm", label: "质量与速度权衡" },
      { from: "controlnet", to: "sora-like", label: "控制生成延展到视频" },
      { from: "lcm", to: "sora-like", label: "推理加速需求" }
    ],
    directions: [
      { title: "控制生成", score: "高", analysis: "任务边界明确、可视化强、易做定量评估，是最稳的路线之一。" },
      { title: "采样加速", score: "中", analysis: "适合偏工程优化，但要把画质损失和速度收益同时讲清楚。" },
      { title: "视频扩散", score: "低", analysis: "门槛高、资源重、容易偏 demo，若没有强资源和评测体系，不建议直接切入。" }
    ]
  },
  {
    id: "gnn",
    title: "图神经网络",
    keywords: ["图神经网络", "gnn", "graph neural network", "图学习", "图表示学习"],
    subtitle: "图表示学习、异构图、推荐系统、图推理",
    nodes: [
      {
        id: "gcn",
        title: "GCN",
        year: "2017",
        role: "经典基线",
        openSource: "开源",
        reproducibility: "高",
        hypeRisk: "低",
        note: "最适合作为对照起点，实验和实现都非常成熟。",
        x: 18,
        y: 28
      },
      {
        id: "graphsage",
        title: "GraphSAGE",
        year: "2017",
        role: "采样式图学习",
        openSource: "开源",
        reproducibility: "高",
        hypeRisk: "低",
        note: "可扩展性好，是工业图场景常见基线。",
        x: 48,
        y: 18
      },
      {
        id: "gat",
        title: "GAT",
        year: "2018",
        role: "注意力图网络",
        openSource: "开源",
        reproducibility: "高",
        hypeRisk: "低",
        note: "结构直观，但在一些大图上未必稳定占优。",
        x: 76,
        y: 30
      },
      {
        id: "hetero",
        title: "Heterogeneous GNN",
        year: "2023",
        role: "异构图建模",
        openSource: "部分开源",
        reproducibility: "中",
        hypeRisk: "中",
        note: "更贴近真实业务，但实验设置更复杂，容易造成对比不公平。",
        x: 30,
        y: 62
      },
      {
        id: "graph-transformer",
        title: "Graph Transformer",
        year: "2024",
        role: "Transformer 化图建模",
        openSource: "部分开源",
        reproducibility: "中",
        hypeRisk: "中",
        note: "新意强，但需要证明不是简单堆参数换收益。",
        x: 68,
        y: 60
      }
    ],
    edges: [
      { from: "gcn", to: "graphsage", label: "扩展到采样训练" },
      { from: "graphsage", to: "gat", label: "聚合机制升级" },
      { from: "gat", to: "graph-transformer", label: "注意力路线延展" },
      { from: "graphsage", to: "hetero", label: "工业图场景拓展" },
      { from: "hetero", to: "graph-transformer", label: "复杂结构建模" }
    ],
    directions: [
      { title: "图推荐系统", score: "高", analysis: "工业问题明确、实验指标稳，适合做结构建模与效率研究。" },
      { title: "异构图", score: "中", analysis: "问题有价值，但数据和实验设置稍复杂，需要控制变量。" },
      { title: "Graph Transformer", score: "中", analysis: "更前沿，但容易陷入参数更大带来收益的质疑。" }
    ]
  },
  {
    id: "reasoning",
    title: "推理模型",
    keywords: ["推理", "reasoning", "cot", "chain of thought", "长链推理", "数学推理"],
    subtitle: "链式思维、搜索式推理、验证器、测试时扩展",
    nodes: [
      {
        id: "cot",
        title: "Chain-of-Thought Prompting",
        year: "2022",
        role: "提示式推理",
        openSource: "开源",
        reproducibility: "高",
        hypeRisk: "低",
        note: "最基础的推理路线，用来对照后续复杂方法最合适。",
        x: 18,
        y: 30
      },
      {
        id: "self-consistency",
        title: "Self-Consistency",
        year: "2023",
        role: "多样本投票",
        openSource: "开源",
        reproducibility: "高",
        hypeRisk: "低",
        note: "简单有效，但成本提升需要和收益一起报告。",
        x: 48,
        y: 18
      },
      {
        id: "tree-search",
        title: "Tree / Search Reasoning",
        year: "2024",
        role: "搜索式推理",
        openSource: "部分开源",
        reproducibility: "中",
        hypeRisk: "中",
        note: "表现常常不错，但容易把工程搜索策略和模型能力混在一起。",
        x: 78,
        y: 32
      },
      {
        id: "verifier",
        title: "Verifier-Guided Reasoning",
        year: "2024",
        role: "验证器辅助",
        openSource: "部分开源",
        reproducibility: "中",
        hypeRisk: "中",
        note: "更适合数学和代码场景，需要单独度量验证器贡献。",
        x: 28,
        y: 60
      },
      {
        id: "test-time-scaling",
        title: "Test-Time Scaling",
        year: "2025",
        role: "推理时扩展",
        openSource: "不开源",
        reproducibility: "低",
        hypeRisk: "高",
        note: "概念上吸引人，但如果缺少充足 ablation，容易显得只是堆算力。",
        x: 68,
        y: 62
      }
    ],
    edges: [
      { from: "cot", to: "self-consistency", label: "从单路径到多路径" },
      { from: "self-consistency", to: "tree-search", label: "采样到搜索" },
      { from: "self-consistency", to: "verifier", label: "投票到验证" },
      { from: "tree-search", to: "test-time-scaling", label: "搜索扩展路线" },
      { from: "verifier", to: "test-time-scaling", label: "测试时增强" }
    ],
    directions: [
      { title: "验证器与奖励建模", score: "高", analysis: "更容易做出严谨的 ablation，也更容易解释性能来源。" },
      { title: "搜索式推理", score: "中", analysis: "看起来强，但必须切清楚搜索策略与模型本身的贡献。" },
      { title: "测试时扩展", score: "低", analysis: "没有强算力和规范评测时，很容易被质疑为资源堆砌。" }
    ]
  }
];

const quickKeywords = ["多模态大模型", "RAG", "扩散模型", "图神经网络", "推理模型"];

const elements = {
  keywordInput: document.getElementById("keywordInput"),
  searchBtn: document.getElementById("searchBtn"),
  quickTags: document.getElementById("quickTags"),
  graphTitle: document.getElementById("graphTitle"),
  graphMeta: document.getElementById("graphMeta"),
  edgeLayer: document.getElementById("edgeLayer"),
  nodeLayer: document.getElementById("nodeLayer"),
  directionGrid: document.getElementById("directionGrid")
};

function init() {
  initSplash();
  renderQuickTags();
  elements.searchBtn.addEventListener("click", handleSearch);
  elements.keywordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

  elements.keywordInput.value = "多模态大模型";
  renderArea(findArea("多模态大模型"));
}

function renderQuickTags() {
  elements.quickTags.innerHTML = "";
  quickKeywords.forEach((keyword) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tag-btn";
    button.textContent = keyword;
    button.addEventListener("click", () => {
      elements.keywordInput.value = keyword;
      handleSearch();
    });
    elements.quickTags.appendChild(button);
  });
}

function handleSearch() {
  const keyword = elements.keywordInput.value.trim();
  const area = findArea(keyword);
  renderArea(area, keyword);
}

function findArea(keyword) {
  const normalized = keyword.toLowerCase();
  if (!normalized) {
    return researchAreas[0];
  }

  const exact = researchAreas.find((area) =>
    area.keywords.some((item) => normalized.includes(item.toLowerCase()))
  );

  return exact || researchAreas.find((area) =>
    area.title.toLowerCase().includes(normalized)
  ) || researchAreas[0];
}

function renderArea(area, rawKeyword = "") {
  const activeKeyword = rawKeyword || area.title;
  elements.graphTitle.textContent = area.title;
  elements.graphMeta.textContent = `关键词“${activeKeyword}”匹配到 ${area.nodes.length} 篇代表论文，副主题：${area.subtitle}。`;

  renderEdges(area.nodes, area.edges);
  renderNodes(area.nodes);
  renderDirections(area.directions);
}

function renderEdges(nodes, edges) {
  elements.edgeLayer.innerHTML = "";
  const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]));

  edges.forEach((edge) => {
    const source = nodeMap[edge.from];
    const target = nodeMap[edge.to];
    if (!source || !target) {
      return;
    }

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", percentToViewBox(source.x, 1200));
    line.setAttribute("y1", percentToViewBox(source.y, 720));
    line.setAttribute("x2", percentToViewBox(target.x, 1200));
    line.setAttribute("y2", percentToViewBox(target.y, 720));
    line.setAttribute("class", "edge-line");
    elements.edgeLayer.appendChild(line);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", (percentToViewBox(source.x, 1200) + percentToViewBox(target.x, 1200)) / 2);
    label.setAttribute("y", (percentToViewBox(source.y, 720) + percentToViewBox(target.y, 720)) / 2 - 8);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("class", "edge-label");
    label.textContent = edge.label;
    elements.edgeLayer.appendChild(label);
  });
}

function renderNodes(nodes) {
  elements.nodeLayer.innerHTML = "";
  nodes.forEach((node) => {
    const card = document.createElement("article");
    card.className = "paper-node";
    card.style.left = `${node.x}%`;
    card.style.top = `${node.y}%`;

    const riskClass = riskLevelClass(node.hypeRisk);
    const reproClass = reproLevelClass(node.reproducibility);

    card.innerHTML = `
      <h3>${node.title}</h3>
      <p class="node-meta">${node.year} · ${node.role}</p>
      <div class="node-badges">
        <span class="node-badge ${riskClass}">灌水风险：${node.hypeRisk}</span>
        <span class="node-badge open">开源：${node.openSource}</span>
        <span class="node-badge ${reproClass}">复现难度：${node.reproducibility}</span>
      </div>
      <p class="node-note">${node.note}</p>
    `;

    elements.nodeLayer.appendChild(card);
  });
}

function renderDirections(directions) {
  elements.directionGrid.innerHTML = "";
  directions.forEach((direction) => {
    const card = document.createElement("article");
    card.className = "direction-card";
    card.innerHTML = `
      <span class="recommend-pill ${scoreClass(direction.score)}">推荐度：${direction.score}</span>
      <h3>${direction.title}</h3>
      <p>${direction.analysis}</p>
    `;
    elements.directionGrid.appendChild(card);
  });
}

function percentToViewBox(value, max) {
  return (value / 100) * max;
}

function riskLevelClass(level) {
  if (level === "低") {
    return "low";
  }
  if (level === "中") {
    return "mid";
  }
  return "high";
}

function reproLevelClass(level) {
  if (level === "高") {
    return "low";
  }
  if (level === "中") {
    return "mid";
  }
  return "high";
}

function scoreClass(level) {
  if (level === "高") {
    return "high";
  }
  if (level === "中") {
    return "mid";
  }
  return "low";
}

function initSplash() {
  const splash = document.getElementById("splash");
  if (!splash) {
    return;
  }

  const transitionTime = 1800;
  const hideSplash = () => {
    splash.classList.add("hidden");
    window.setTimeout(() => {
      if (splash.parentNode) {
        splash.parentNode.removeChild(splash);
      }
    }, 600);
  };

  window.addEventListener("load", () => {
    window.setTimeout(hideSplash, transitionTime);
  }, { once: true });

  window.setTimeout(() => {
    if (document.readyState === "complete" && splash.parentNode) {
      hideSplash();
    }
  }, transitionTime + 800);
}

init();
