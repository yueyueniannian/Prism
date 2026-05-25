const areaConfigs = [
  {
    id: "multimodal-llm",
    title: "多模态大模型",
    keywords: ["多模态", "vlm", "vision language", "multimodal", "多模态大模型", "视觉语言"],
    subtitle: "视觉语言基座、文档理解、多模态代理与安全评测",
    tracks: [
      ["视觉指令跟随", "LLaVA", "MiniGPT", "InstructBLIP", "VILA", "ShareGPT4V", "LLaVA-NeXT", "Cambrian", "VILA-HD", "Video-LLaVA", "LLaVA-OneVision", "LLaVA-RLHF", "VisTutor"],
      ["文档图表理解", "LayoutLMv3", "Donut", "Pix2Struct", "Nougat", "DocVQA-RAG", "ChartQA-Pro", "Qwen2-VL-Doc", "Table-LLaVA", "MathVista-Doc", "OCRBench-Plus", "DocAgent", "FormMind"],
      ["多模态推理", "ScienceQA-CoT", "MM-CoT", "Visual-CoT", "ViperGPT", "LLaVA-Reasoner", "VStar", "MM-Search", "G-LLaVA", "ReasonVLM", "VLM-Verifier", "PuzzleVLM", "SceneChain"],
      ["视频理解", "VideoChat", "Video-LLaMA", "MovieChat", "VideoChatGPT", "TimeChat", "Video-LLava", "InternVideo2", "LongVideoBench", "StreamingVLM", "EgoThink", "VideoAgent", "TempoVLM"],
      ["多模态 Agent", "Visual Program", "HuggingGPT-V", "MM-ReAct", "ViperGPT-Agent", "CogAgent", "ScreenAgent", "WebVoyager-V", "AppAgent-V", "GUI-World", "EmbodiedVLM", "ToolVLM", "VisualPlanner"],
      ["安全与对齐", "MM-SafetyBench", "JailbreakVLM", "RedTeam-V", "VLGuard", "HallusionBench", "POPE", "MMHal-Bench", "SafeVLM", "GroundingGuard", "TrustVLM", "AuditVLM", "AlignmentLens"],
      ["压缩部署", "TinyLLaVA", "MobileVLM", "MoE-LLaVA", "LLaVA-Phi", "DistillVLM", "QuantVLM", "EdgeVLM", "LoRA-Vision", "CacheVLM", "SparseVLM", "ChipVLM", "NanoVLM"]
    ],
    directions: [
      { title: "文档多模态 Agent", score: "高", analysis: "图表、表格、长文档和工具调用能形成闭环，适合展示真实产品价值。" },
      { title: "多模态幻觉检测", score: "高", analysis: "和论文审计主题贴合，风险节点、证据链和可复现指标都容易讲清楚。" },
      { title: "端侧 VLM 部署", score: "中", analysis: "工程感强，但需要准备速度、显存和效果损失的对照数据。" }
    ]
  },
  {
    id: "rag",
    title: "RAG 与检索增强生成",
    keywords: ["rag", "检索增强", "retrieval", "知识库", "向量检索", "graphrag"],
    subtitle: "检索、重排、图谱组织、代理式问答与可信溯源",
    tracks: [
      ["基础检索管线", "BM25-RAG", "Dense-RAG", "Hybrid-RAG", "Chunk-RAG", "Metadata-RAG", "Window-RAG", "QueryRewrite", "Rerank-RAG", "Citation-RAG", "Eval-RAG", "Cache-RAG", "LeanRAG"],
      ["自适应检索", "Self-RAG", "Corrective-RAG", "Adaptive-RAG", "Speculative-RAG", "Rewrite-Retrieve", "Router-RAG", "Fallback-RAG", "CostAware-RAG", "Feedback-RAG", "Active-RAG", "PolicyRAG", "AutoRoute"],
      ["图结构知识", "EntityGraph-RAG", "GraphRAG", "Community-RAG", "Path-RAG", "KG-RAG", "Schema-RAG", "Triplet-RAG", "EvidenceGraph", "HybridGraphRAG", "TemporalGraphRAG", "CausalRAG", "AtlasRAG"],
      ["多跳问答", "Hotpot-RAG", "MultiHop-RAG", "IRCoT", "Decomp-RAG", "Plan-Retrieve", "Bridge-RAG", "Reason-Retrieve", "SubQ-RAG", "Verifier-RAG", "TraceRAG", "DeepSearchRAG", "ChainRAG"],
      ["Agentic RAG", "Toolformer-RAG", "ReAct-RAG", "Agentic-RAG", "WebRAG", "Browser-RAG", "CodeRAG", "DataAgent-RAG", "SQL-RAG", "Memory-RAG", "Workflow-RAG", "ResearchAgent", "OpsRAG"],
      ["可信与评测", "RAGAS", "ARES", "TruLens-RAG", "FaithfulnessBench", "ContextPrecision", "Attribution-RAG", "Grounded-RAG", "CitationGuard", "NoiseBench", "AdversarialRAG", "AuditRAG", "RAG-RiskMeter"],
      ["系统优化", "VectorDB-Tuning", "ANN-RAG", "QuantizedIndex", "Streaming-RAG", "BatchRAG", "GPU-Rerank", "Distill-Reranker", "TokenBudget-RAG", "WarmCache", "ShardRAG", "EdgeRAG", "FastGraphRAG"]
    ],
    directions: [
      { title: "企业知识库可信问答", score: "高", analysis: "需求稳定，指标可以覆盖召回、溯源、成本和幻觉率，demo 说服力强。" },
      { title: "GraphRAG + Agentic RAG", score: "高", analysis: "很适合做研究路线交叉演进展示，图谱视觉也更自然。" },
      { title: "检索成本优化", score: "中", analysis: "技术扎实，但黑客松展示需要把省 token 和延迟收益可视化。" }
    ]
  },
  {
    id: "diffusion",
    title: "扩散模型",
    keywords: ["扩散", "diffusion", "文生图", "图像生成", "视频生成", "stable diffusion"],
    subtitle: "图像生成、控制生成、视频扩散、少步采样与安全水印",
    tracks: [
      ["图像生成基座", "DDPM", "LatentDiffusion", "StableDiffusion", "SDXL", "PixArt", "DiT", "FLUX-Route", "RectifiedFlow", "MMDiT", "StyleAligned", "PromptFusion", "ImageForge"],
      ["控制生成", "ControlNet", "T2I-Adapter", "GLIGEN", "IP-Adapter", "InstantID", "BrushNet", "AnyDoor", "ControlNet-XL", "PoseControl", "LayoutControl", "Sketch2Image", "SceneControl"],
      ["编辑与一致性", "SDEdit", "Prompt2Prompt", "InstructPix2Pix", "NullTextInv", "DreamBooth", "TextualInversion", "MagicBrush", "ConsistentID", "PhotoMaker", "EditBench-Pro", "IdentityFlow", "EditGuard"],
      ["视频扩散", "VideoDiffusion", "ImagenVideo", "Make-A-Video", "AnimateDiff", "VideoCrafter", "ModelScopeT2V", "StableVideo", "OpenSora-Route", "WorldSimulator", "LongVideoDiff", "CineDiff", "MotionDirector"],
      ["3D 与世界模型", "DreamFusion", "Magic3D", "Zero123", "MVDream", "Wonder3D", "GaussianDreamer", "Text2Room", "SceneDiffuser", "DriveWorld", "EmbodiedDiff", "RobotDiffusion", "SimDiff"],
      ["加速蒸馏", "DDIM", "DPM-Solver", "LCM", "ConsistencyModel", "ProgressiveDistill", "SD-Turbo", "HyperSD", "RectifiedDistill", "OneStepDiff", "CacheDiffusion", "MobileDiffusion", "FastVideoDiff"],
      ["安全与版权", "SafeLatentDiff", "ConceptAblation", "WatermarkSD", "TreeRing", "C2PA-Diff", "GenImageDetect", "ModelFingerprint", "CopyrightBench", "NSFWGuard", "PromptShield", "AuditDiff", "TraceImage"]
    ],
    directions: [
      { title: "可控生成 + 版权溯源", score: "高", analysis: "展示直观，风险节点容易突出，能连接生成质量和可信治理。" },
      { title: "少步视频生成", score: "中", analysis: "效果强但资源敏感，适合 demo，不适合承诺完整复现。" },
      { title: "3D 世界模型", score: "低", analysis: "想象空间大，但评测、数据和算力门槛高，风险节点会明显增多。" }
    ]
  },
  {
    id: "gnn",
    title: "图神经网络",
    keywords: ["图神经网络", "gnn", "graph neural network", "图学习", "图表示学习", "graph transformer"],
    subtitle: "图表示学习、异构图、图 Transformer、图推荐与图基础模型",
    tracks: [
      ["经典图表示", "DeepWalk", "node2vec", "GCN", "GraphSAGE", "GAT", "GIN", "APPNP", "MixHop", "SIGN", "GraphSAINT", "ClusterGCN", "GraphGym"],
      ["异构与动态图", "metapath2vec", "HAN", "HGT", "RGCN", "DySAT", "TGAT", "TGN", "HeteroGraph", "TemporalHGT", "EventGNN", "StreamGNN", "LiveGraph"],
      ["图 Transformer", "Graphormer", "SAN", "GPS", "TokenGT", "GraphGPS", "Exphormer", "GraphViT", "GraphMamba", "NodeFormer", "EdgeFormer", "LongGraphFormer", "GraphMixer"],
      ["推荐与搜索", "PinSage", "LightGCN", "NGCF", "DGCF", "UltraGCN", "SGL", "SimGCL", "GraphRec", "BundleGNN", "SessionGNN", "SearchGNN", "AdsGraph"],
      ["知识图谱推理", "TransE", "RotatE", "CompGCN", "R-GCN-KG", "NBFNet", "GraIL", "KGT5", "KG-BERT", "RuleGNN", "PathReasoner", "KG-Agent", "FactGraph"],
      ["分子与科学图", "MPNN", "DimeNet", "SchNet", "SphereNet", "GemNet", "Equiformer", "GraphMVP", "MolCLR", "Uni-Mol", "ProteinGNN", "CatalystGraph", "BioGraphFM"],
      ["图基础模型", "GraphCL", "BGRL", "GPT-GNN", "GraphMAE", "GraphPrompt", "GLEM", "OpenGraph", "GraphGPT", "GraphFM", "GraphAgent", "GraphRAG-Link", "OmniGraph"]
    ],
    directions: [
      { title: "图基础模型 + RAG", score: "高", analysis: "可以把图学习和大模型检索自然合并，黑客松展示会更像知识图谱产品。" },
      { title: "动态图推荐", score: "中", analysis: "业务价值高，但需要有时间序列样例数据支撑。" },
      { title: "科学图建模", score: "中", analysis: "研究含金量高，不过非领域观众理解成本稍高。" }
    ]
  },
  {
    id: "reasoning",
    title: "推理模型",
    keywords: ["推理", "reasoning", "cot", "chain of thought", "长链推理", "数学推理", "test time"],
    subtitle: "链式思维、搜索式推理、验证器、测试时扩展与反思评测",
    tracks: [
      ["提示式推理", "CoT", "ZeroShot-CoT", "Self-Ask", "LeastToMost", "PlanSolve", "Program-of-Thought", "PAL", "AnalogicalPrompt", "ComplexCoT", "DecomposePrompt", "RationalePrompt", "PromptRoute"],
      ["采样与投票", "SelfConsistency", "DiverseCoT", "MajorityVote", "WeightedVote", "Best-of-N", "Debate", "MultiAgentVote", "ConfidenceVote", "PathEnsemble", "VerifierVote", "BudgetVote", "VoteRouter"],
      ["搜索式推理", "Tree-of-Thought", "Graph-of-Thought", "MCTS-Reasoning", "BeamSearch-CoT", "DFS-Reasoner", "AStar-Reasoning", "ProcessSearch", "StepBackSearch", "ProofSearch", "CodeSearchReason", "PlanTree", "SearchLM"],
      ["验证器与奖励", "ORM", "PRM", "OutcomeVerifier", "ProcessVerifier", "Math-Shepherd", "CriticModel", "StepVerifier", "RewardBench", "VerifierTuning", "ProofVerifier", "JudgeEnsemble", "RiskVerifier"],
      ["测试时扩展", "TestTimeCompute", "Reflexion", "Self-Refine", "RerankReasoning", "SpeculativeReason", "LongThought", "BudgetedReason", "AdaptiveCompute", "DeliberateDecode", "SlowThink", "ReasoningCache", "ComputePolicy"],
      ["代码与工具推理", "Toolformer", "ReAct", "MRKL", "ProgramAidedLM", "CodeInterpreter", "ToolBench", "API-Bank", "AgentBench", "ToolLLM", "CodeAgent", "DebugAgent", "ResearchCoder"],
      ["评测与安全", "GSM8K", "MATH", "BBH", "GPQA", "ARC-Challenge", "DROP", "HumanEval", "SWE-Bench", "TruthfulQA-Reason", "AdversarialMath", "ContaminationCheck", "ReasonAudit"]
    ],
    directions: [
      { title: "验证器驱动的可信推理", score: "高", analysis: "能解释每一步贡献，适合和论文审计里的证据链结合。" },
      { title: "测试时算力调度", score: "中", analysis: "概念热，但必须把收益和额外成本同时展示。" },
      { title: "多 Agent 推理", score: "低", analysis: "演示效果强，但变量太多，容易被质疑只是流程堆叠。" }
    ]
  }
];

const quickKeywords = ["多模态大模型", "RAG", "扩散模型", "图神经网络", "推理模型"];
const riskLabels = { low: "低", mid: "中", high: "高" };
const viewBox = { width: 1400, height: 820 };

const elements = {
  keywordInput: document.getElementById("keywordInput"),
  searchBtn: document.getElementById("searchBtn"),
  quickTags: document.getElementById("quickTags"),
  graphTitle: document.getElementById("graphTitle"),
  graphMeta: document.getElementById("graphMeta"),
  graphStats: document.getElementById("graphStats"),
  graphStage: document.getElementById("graphStage"),
  labelToggle: document.getElementById("labelToggle"),
  riskFilters: document.getElementById("riskFilters"),
  edgeLayer: document.getElementById("edgeLayer"),
  nodeLayer: document.getElementById("nodeLayer"),
  nodeDetails: document.getElementById("nodeDetails"),
  directionGrid: document.getElementById("directionGrid")
};

let currentArea = null;
let activeRisk = "all";
let selectedNodeId = "";
let showLabels = false;

function init() {
  initSplash();
  renderQuickTags();
  bindEvents();

  elements.keywordInput.value = "多模态大模型";
  renderArea(findArea("多模态大模型"));
}

function bindEvents() {
  elements.searchBtn.addEventListener("click", handleSearch);
  elements.keywordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

  elements.riskFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-risk]");
    if (!button) {
      return;
    }

    activeRisk = button.dataset.risk;
    elements.riskFilters.querySelectorAll(".risk-filter").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    applyGraphState();
  });

  elements.labelToggle.addEventListener("click", () => {
    showLabels = !showLabels;
    applyLabelMode();
  });
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
    return buildArea(areaConfigs[0]);
  }

  const exact = areaConfigs.find((area) =>
    area.keywords.some((item) => normalized.includes(item.toLowerCase()))
  );

  const fuzzy = areaConfigs.find((area) => area.title.toLowerCase().includes(normalized));
  return buildArea(exact || fuzzy || areaConfigs[0]);
}

function buildArea(config) {
  const nodes = [];
  const edges = [];
  const yearStart = 2017;
  const laneGap = 80 / (config.tracks.length - 1);
  const idCounts = new Map();

  config.tracks.forEach((track, trackIndex) => {
    const [trackName, ...papers] = track;
    const laneY = 10 + trackIndex * laneGap;

    papers.forEach((paperTitle, paperIndex) => {
      const year = yearStart + Math.min(8, Math.floor((paperIndex + trackIndex * 0.45) / 1.45));
      const xBase = 8 + paperIndex * 7.55;
      const x = clamp(xBase + wave(trackIndex, paperIndex, 1.8), 5.5, 94.5);
      const y = clamp(laneY + wave(paperIndex, trackIndex, 3.2), 6, 94);
      const risk = inferRisk(trackIndex, paperIndex, paperTitle);
      const metrics = buildMetrics(risk, trackIndex, paperIndex);
      const id = uniqueId(slugify(`${config.id}-${trackName}-${paperTitle}`), idCounts);

      nodes.push({
        id,
        title: paperTitle,
        year,
        track: trackName,
        role: roleFor(trackName, paperIndex),
        risk,
        riskScore: metrics.riskScore,
        openSource: openSourceFor(risk, paperIndex),
        reproducibility: reproducibilityFor(metrics.reproducibility),
        metrics,
        venue: venueFor(year, paperIndex, trackIndex),
        note: noteFor(config.title, trackName, risk, paperIndex),
        contribution: contributionFor(trackName, risk),
        limitation: limitationFor(risk, trackName),
        x,
        y
      });
    });
  });

  const trackNodes = groupBy(nodes, "track");
  Object.values(trackNodes).forEach((items) => {
    for (let index = 0; index < items.length - 1; index += 1) {
      edges.push({
        from: items[index].id,
        to: items[index + 1].id,
        type: "evolution",
        label: index % 3 === 1 ? "路线演进" : ""
      });
    }
  });

  const tracks = Object.keys(trackNodes);
  for (let index = 0; index < tracks.length - 1; index += 1) {
    const left = trackNodes[tracks[index]];
    const right = trackNodes[tracks[index + 1]];
    [2, 5, 8].forEach((paperIndex, bridgeIndex) => {
      edges.push({
        from: left[paperIndex].id,
        to: right[Math.min(right.length - 1, paperIndex + 1)].id,
        type: bridgeIndex === 1 ? "bridge" : "cross",
        label: bridgeIndex === 1 ? "交叉影响" : ""
      });
    });
  }

  const connectorNodes = buildConnectorNodes(config, tracks, trackNodes);
  connectorNodes.forEach((connector) => {
    nodes.push(connector);
    connector.links.forEach((targetId) => {
      edges.push({ from: connector.id, to: targetId, type: "bridge", label: connector.edgeLabel });
    });
  });

  return {
    id: config.id,
    title: config.title,
    subtitle: config.subtitle,
    nodes,
    edges,
    directions: config.directions
  };
}

function buildConnectorNodes(config, tracks, trackNodes) {
  const connectors = [
    { title: "跨模态证据链", trackA: 0, trackB: 2, paper: 6, x: 54, y: 24, risk: "mid" },
    { title: "结构化知识桥", trackA: 1, trackB: 4, paper: 7, x: 63, y: 44, risk: "low" },
    { title: "Agent 工作流汇聚", trackA: 3, trackB: 4, paper: 9, x: 76, y: 57, risk: "mid" },
    { title: "高风险演示分支", trackA: 4, trackB: 5, paper: 10, x: 84, y: 70, risk: "high" },
    { title: "压缩部署转移", trackA: 0, trackB: 6, paper: 8, x: 72, y: 87, risk: "mid" },
    { title: "可信评测回流", trackA: 5, trackB: 2, paper: 5, x: 44, y: 64, risk: "low" },
    { title: "数据治理节点", trackA: 1, trackB: 5, paper: 4, x: 36, y: 38, risk: "mid" },
    { title: "评测污染预警", trackA: 5, trackB: 0, paper: 9, x: 67, y: 73, risk: "high" },
    { title: "基线复现锚点", trackA: 0, trackB: 3, paper: 3, x: 30, y: 19, risk: "low" },
    { title: "多跳推理转接", trackA: 2, trackB: 4, paper: 8, x: 71, y: 35, risk: "mid" },
    { title: "资源成本拐点", trackA: 3, trackB: 6, paper: 10, x: 89, y: 82, risk: "high" },
    { title: "轻量化部署桥", trackA: 6, trackB: 1, paper: 7, x: 58, y: 89, risk: "low" },
    { title: "开放生态支点", trackA: 0, trackB: 6, paper: 2, x: 24, y: 84, risk: "low" },
    { title: "场景迁移分叉", trackA: 2, trackB: 3, paper: 6, x: 55, y: 52, risk: "mid" },
    { title: "论文灌水雷达", trackA: 5, trackB: 4, paper: 11, x: 92, y: 66, risk: "high" },
    { title: "路线收敛节点", trackA: 1, trackB: 2, paper: 10, x: 83, y: 28, risk: "mid" }
  ];

  return connectors.map((item, index) => {
    const sourceTrack = tracks[item.trackA];
    const targetTrack = tracks[item.trackB];
    const source = trackNodes[sourceTrack][Math.min(item.paper, trackNodes[sourceTrack].length - 1)];
    const target = trackNodes[targetTrack][Math.min(item.paper + 1, trackNodes[targetTrack].length - 1)];
    const metrics = buildMetrics(item.risk, index + 2, item.paper);

    return {
      id: `${config.id}-connector-${index}`,
      title: item.title,
      year: 2024 + (index % 2),
      track: "交叉研究路线",
      role: `${sourceTrack} x ${targetTrack}`,
      risk: item.risk,
      riskScore: metrics.riskScore,
      openSource: openSourceFor(item.risk, index),
      reproducibility: reproducibilityFor(metrics.reproducibility),
      metrics,
      venue: "Demo Knowledge Route",
      note: `把“${sourceTrack}”与“${targetTrack}”连接成可解释的研究演进路径，适合展示路线交叉。`,
      contribution: "用于把不同论文族谱连成可追踪的研究路线，强调方法迁移、评测回流和工程落地。",
      limitation: limitationFor(item.risk, "交叉研究路线"),
      x: item.x,
      y: item.y,
      links: [source.id, target.id],
      edgeLabel: item.title
    };
  });
}

function renderArea(area, rawKeyword = "") {
  currentArea = area;
  selectedNodeId = area.nodes[Math.min(14, area.nodes.length - 1)].id;
  activeRisk = "all";
  resetFilterButtons();

  const activeKeyword = rawKeyword || area.title;
  const highRiskCount = area.nodes.filter((node) => node.risk === "high").length;
  elements.graphTitle.textContent = area.title;
  elements.graphMeta.textContent = `关键词“${activeKeyword}”匹配到 ${area.nodes.length} 个论文/路线节点，${area.edges.length} 条演进关系。副主题：${area.subtitle}。`;
  elements.graphStats.innerHTML = `
    <span>节点 ${area.nodes.length}</span>
    <span>关系 ${area.edges.length}</span>
    <span>高风险 ${highRiskCount}</span>
  `;

  renderEdges(area.nodes, area.edges);
  renderNodes(area.nodes);
  renderDirections(area.directions);
  renderNodeDetails(area.nodes.find((node) => node.id === selectedNodeId), area);
  applyLabelMode();
  applyGraphState();
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
    line.setAttribute("x1", percentToViewBox(source.x, viewBox.width));
    line.setAttribute("y1", percentToViewBox(source.y, viewBox.height));
    line.setAttribute("x2", percentToViewBox(target.x, viewBox.width));
    line.setAttribute("y2", percentToViewBox(target.y, viewBox.height));
    line.setAttribute("class", `edge-line ${edge.type || "cross"}`);
    line.dataset.from = edge.from;
    line.dataset.to = edge.to;
    elements.edgeLayer.appendChild(line);

    if (edge.label && edge.type === "bridge") {
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", (percentToViewBox(source.x, viewBox.width) + percentToViewBox(target.x, viewBox.width)) / 2);
      label.setAttribute("y", (percentToViewBox(source.y, viewBox.height) + percentToViewBox(target.y, viewBox.height)) / 2 - 8);
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("class", "edge-label");
      label.textContent = edge.label;
      elements.edgeLayer.appendChild(label);
    }
  });
}

function renderNodes(nodes) {
  elements.nodeLayer.innerHTML = "";
  nodes.forEach((node) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `paper-node risk-${node.risk}`;
    card.style.left = `${node.x}%`;
    card.style.top = `${node.y}%`;
    card.dataset.nodeId = node.id;
    card.dataset.risk = node.risk;
    card.setAttribute("aria-label", `${node.title}，${riskLabels[node.risk]}风险`);

    card.innerHTML = `
      <h3>${escapeHtml(node.title)}</h3>
      <p class="node-meta">${node.year} · ${escapeHtml(node.track)}</p>
      <span class="node-score">${node.riskScore}</span>
    `;

    card.addEventListener("click", () => {
      selectedNodeId = node.id;
      renderNodeDetails(node, currentArea);
      applyGraphState();
    });

    elements.nodeLayer.appendChild(card);
  });
}

function renderNodeDetails(node, area) {
  if (!node) {
    elements.nodeDetails.innerHTML = `
      <div class="detail-empty">
        <p class="panel-kicker">Node Detail</p>
        <h2>选择一个节点</h2>
        <p>点击图谱中的论文节点，查看风险依据、复现指标、开源状态和关联研究路线。</p>
      </div>
    `;
    return;
  }

  const relatedNodes = relatedNodeTitles(node, area);
  const riskClass = `risk-${node.risk}`;
  elements.nodeDetails.innerHTML = `
    <div class="detail-title-row">
      <div>
        <p class="panel-kicker">Node Detail</p>
        <h2>${escapeHtml(node.title)}</h2>
      </div>
      <span class="risk-chip ${riskClass}">${riskLabels[node.risk]}风险</span>
    </div>
    <p class="detail-subtitle">${node.year} · ${escapeHtml(node.venue)} · ${escapeHtml(node.role)}</p>

    <div class="metric-grid">
      <div class="metric-card"><span>风险分</span><strong>${node.riskScore}/100</strong></div>
      <div class="metric-card"><span>复现度</span><strong>${node.metrics.reproducibility}%</strong></div>
      <div class="metric-card"><span>开源状态</span><strong>${escapeHtml(node.openSource)}</strong></div>
      <div class="metric-card"><span>基线完整</span><strong>${node.metrics.baseline}%</strong></div>
      <div class="metric-card"><span>数据透明</span><strong>${node.metrics.data}%</strong></div>
      <div class="metric-card"><span>实验充分</span><strong>${node.metrics.ablation}%</strong></div>
    </div>

    <section class="detail-section">
      <h3>节点定位</h3>
      <p>${escapeHtml(node.note)}</p>
    </section>

    <section class="detail-section">
      <h3>指标详情</h3>
      <ul class="detail-list">
        <li>复现难度：${escapeHtml(node.reproducibility)}，主要由代码可得性、超参细节和训练资源共同决定。</li>
        <li>方法新颖度：${node.metrics.novelty}%，证据完整度：${node.metrics.evidence}%。</li>
        <li>路线标签：${escapeHtml(node.track)}，可用于解释该方向从基线到系统化方案的演进。</li>
      </ul>
    </section>

    <section class="detail-section">
      <h3>风险依据</h3>
      <ul class="detail-list">
        ${riskReasons(node).map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}
      </ul>
    </section>

    <section class="detail-section">
      <h3>贡献与短板</h3>
      <p>${escapeHtml(node.contribution)}</p>
      <p>${escapeHtml(node.limitation)}</p>
    </section>

    <section class="detail-section">
      <h3>相邻节点</h3>
      <div class="related-list">
        ${relatedNodes.map((title) => `<span class="related-pill">${escapeHtml(title)}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderDirections(directions) {
  elements.directionGrid.innerHTML = "";
  directions.forEach((direction) => {
    const card = document.createElement("article");
    card.className = "direction-card";
    card.innerHTML = `
      <span class="recommend-pill ${scoreClass(direction.score)}">推荐度：${direction.score}</span>
      <h3>${escapeHtml(direction.title)}</h3>
      <p>${escapeHtml(direction.analysis)}</p>
    `;
    elements.directionGrid.appendChild(card);
  });
}

function applyGraphState() {
  if (!currentArea) {
    return;
  }

  const relatedIds = new Set([selectedNodeId]);
  currentArea.edges.forEach((edge) => {
    if (edge.from === selectedNodeId) {
      relatedIds.add(edge.to);
    }
    if (edge.to === selectedNodeId) {
      relatedIds.add(edge.from);
    }
  });

  elements.nodeLayer.querySelectorAll(".paper-node").forEach((nodeEl) => {
    const matchesRisk = activeRisk === "all" || nodeEl.dataset.risk === activeRisk;
    const isSelected = nodeEl.dataset.nodeId === selectedNodeId;
    nodeEl.classList.toggle("is-selected", isSelected);
    nodeEl.classList.toggle("is-dimmed", !matchesRisk);
  });

  elements.edgeLayer.querySelectorAll(".edge-line").forEach((edgeEl) => {
    const related = relatedIds.has(edgeEl.dataset.from) && relatedIds.has(edgeEl.dataset.to);
    const source = currentArea.nodes.find((node) => node.id === edgeEl.dataset.from);
    const target = currentArea.nodes.find((node) => node.id === edgeEl.dataset.to);
    const matchesRisk = activeRisk === "all" || source?.risk === activeRisk || target?.risk === activeRisk;
    edgeEl.classList.toggle("is-related", related);
    edgeEl.classList.toggle("is-dimmed", !matchesRisk);
  });
}

function resetFilterButtons() {
  elements.riskFilters.querySelectorAll(".risk-filter").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.risk === "all");
  });
}

function applyLabelMode() {
  elements.graphStage.classList.toggle("show-labels", showLabels);
  elements.labelToggle.classList.toggle("is-active", showLabels);
  elements.labelToggle.setAttribute("aria-pressed", String(showLabels));
  elements.labelToggle.textContent = showLabels ? "隐藏标题卡片" : "显示标题卡片";
}

function relatedNodeTitles(node, area) {
  const nodeMap = Object.fromEntries(area.nodes.map((item) => [item.id, item]));
  const titles = [];
  area.edges.forEach((edge) => {
    if (edge.from === node.id && nodeMap[edge.to]) {
      titles.push(nodeMap[edge.to].title);
    }
    if (edge.to === node.id && nodeMap[edge.from]) {
      titles.push(nodeMap[edge.from].title);
    }
  });
  return [...new Set(titles)].slice(0, 8);
}

function riskReasons(node) {
  if (node.risk === "low") {
    return [
      "代码或评测协议相对清晰，结果更容易被第三方复查。",
      "基线设置较完整，结论不依赖单一演示样例。",
      "风险主要来自数据域迁移和实际部署时的性能波动。"
    ];
  }

  if (node.risk === "mid") {
    return [
      "方法收益可能混合了数据、提示工程或工具链贡献，需要拆分 ablation。",
      "复现依赖中等规模资源，短时间内可验证但难完整重训。",
      "指标表现有展示价值，但需要补充失败案例和边界条件。"
    ];
  }

  return [
    "资源、数据或关键实现细节不充分，复现实验门槛较高。",
    "容易出现只展示亮眼样例、缺少稳定统计对照的问题。",
    "如果作为黑客松核心卖点，应把它定位为风险预警节点而不是确定结论。"
  ];
}

function buildMetrics(risk, trackIndex, paperIndex) {
  const riskBase = { low: 26, mid: 55, high: 82 }[risk];
  const riskScore = clamp(Math.round(riskBase + wave(trackIndex, paperIndex, 9)), 12, 96);
  return {
    riskScore,
    reproducibility: Math.round(clamp(100 - riskScore + 12 + ((trackIndex + paperIndex) % 7), 28, 95)),
    baseline: Math.round(clamp(88 - riskScore * 0.42 + ((paperIndex * 5) % 17), 35, 94)),
    data: Math.round(clamp(91 - riskScore * 0.38 + ((trackIndex * 7) % 16), 30, 95)),
    ablation: Math.round(clamp(86 - riskScore * 0.34 + ((paperIndex * 3) % 18), 32, 96)),
    novelty: Math.round(clamp(52 + riskScore * 0.32 + ((trackIndex * 4) % 14), 45, 96)),
    evidence: Math.round(clamp(96 - riskScore * 0.45 + ((paperIndex * 2) % 15), 28, 94))
  };
}

function inferRisk(trackIndex, paperIndex, title) {
  const highHints = ["Video", "World", "Agent", "Simulator", "Long", "Sora", "Slow", "TestTime", "Jailbreak", "Adversarial", "OneStep"];
  const lowHints = ["GCN", "BM25", "DDPM", "CoT", "RAGAS", "ControlNet", "DeepWalk", "node2vec", "LLaVA", "Stable", "DPM"];
  if (highHints.some((hint) => title.toLowerCase().includes(hint.toLowerCase())) && paperIndex > 5) {
    return "high";
  }
  if (lowHints.some((hint) => title.toLowerCase().includes(hint.toLowerCase())) && paperIndex < 8) {
    return "low";
  }
  if ((paperIndex + trackIndex) % 7 === 0 || paperIndex >= 10) {
    return "high";
  }
  if ((paperIndex * 2 + trackIndex) % 5 <= 1) {
    return "low";
  }
  return "mid";
}

function openSourceFor(risk, index) {
  if (risk === "low") {
    return index % 4 === 0 ? "完整开源" : "开源";
  }
  if (risk === "mid") {
    return index % 3 === 0 ? "部分开源" : "代码待补充";
  }
  return index % 2 === 0 ? "不开源" : "仅模型/样例";
}

function reproducibilityFor(value) {
  if (value >= 76) {
    return "较易复现";
  }
  if (value >= 55) {
    return "中等复现";
  }
  return "复现困难";
}

function roleFor(trackName, index) {
  const roles = ["奠基基线", "结构改造", "训练策略", "系统集成", "评测扩展", "工程落地"];
  return `${trackName} · ${roles[index % roles.length]}`;
}

function venueFor(year, paperIndex, trackIndex) {
  const venues = ["ACL", "NeurIPS", "ICLR", "CVPR", "ICML", "KDD", "EMNLP", "arXiv"];
  return `${venues[(paperIndex + trackIndex) % venues.length]} ${year}`;
}

function noteFor(areaTitle, trackName, risk, index) {
  const style = {
    low: "结构和实验边界比较清楚，可作为这条路线的稳健基线。",
    mid: "有明显展示价值，但需要拆分模型、数据和流程贡献。",
    high: "概念吸引人，适合作为风险预警节点，重点观察复现材料和失败案例。"
  }[risk];
  return `${areaTitle}中的“${trackName}”节点，处在第 ${index + 1} 阶段。${style}`;
}

function contributionFor(trackName, risk) {
  if (risk === "low") {
    return `该节点为“${trackName}”提供稳定参照，适合承担基线、复现实验或评价协议角色。`;
  }
  if (risk === "mid") {
    return `该节点把“${trackName}”推进到更复杂的系统形态，适合展示路线交叉和工程化收益。`;
  }
  return `该节点代表“${trackName}”里的高热度分支，能制造展示冲击力，但更需要风险解释和证据约束。`;
}

function limitationFor(risk, trackName) {
  if (risk === "low") {
    return `短板是新意可能不够强，需要和后续“${trackName}”节点组合讲演进价值。`;
  }
  if (risk === "mid") {
    return "短板是变量较多，若没有 ablation，观众很难判断收益来自方法本身还是流程堆叠。";
  }
  return "短板是复现成本高、演示偏样例化，建议在展示时显式标注为高风险探索。";
}

function groupBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key];
    acc[value] = acc[value] || [];
    acc[value].push(item);
    return acc;
  }, {});
}

function uniqueId(base, idCounts) {
  const count = idCounts.get(base) || 0;
  idCounts.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-|-$/g, "");
}

function wave(a, b, scale) {
  return Math.sin(a * 1.73 + b * 0.91) * scale;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function percentToViewBox(value, max) {
  return (value / 100) * max;
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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function initSplash() {
  const splash = document.getElementById("splash");
  if (!splash) {
    return;
  }

  const transitionTime = 1000;
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
