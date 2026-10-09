# AgentKit v3.0 — 便携式 463 专业代理系统

> **在任何 AI 环境中即插即用的专业代理词典**

[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Agents](https://img.shields.io/badge/Agents-463-green?style=flat-square)]()
[![Categories](https://img.shields.io/badge/Categories-15-orange?style=flat-square)]()
[![Synced](https://img.shields.io/badge/Synced%20with-agency--agents%40f99f6aa-purple?style=flat-square)]()

## 核心定位

AgentKit 是一套**纯 Markdown 专业代理库**，可在任何 AI 环境（CLI / IDE / 桌面端 / Web / 移动端）中即插即用。零依赖、无需安装、复制即用。

## v3.0 更新要点

v3.0 基于对上游 [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)（`f99f6aa910`，2026-10-07）的**全量逐一对照审计**产出：

| 变更 | 说明 |
|------|------|
| **补齐 35 个缺失代理** | 上游 282 个代理逐条核对，补齐全部缺口（含 15 个游戏引擎专用角色；其中 4 个是 slug 撞车导致的漏建） |
| **新增游戏开发分类** | `game-development`：Blender / Godot / Roblox / Unity / Unreal 全套 |
| **修正 5 例 slug 撞车误配** | `zk-steward` / `orgscript-engineer` / `workflow-optimizer` / `project-manager-senior` / `gis-qa-engineer`：本地文件重命名为真实主题 slug，上游主题另行落位 |
| **去重 7 组冗余代理** | 4 组同 slug 双份并存 + 3 组同主题孪生（`-specialized` 复制件），保留高质量结构版 |
| **知识增量补写 280+ 个代理** | 把上游承载的具体落地细节（API/命令/配置/阈值）补入已覆盖代理，对齐口径缺口 6679 → 2949（**降 56%**），Δ ≥ 30 的重度缺口组清零 |
| **修复 41 个代理触发词** | 这些代理此前**只有英文关键词**，现补入中文触发词 |
| **修复 2 处结构缺陷** | `haskell-pro` 重复章节、`typescript-pro` 章节名缺空格 |
| **引入 NEXUS 编排体系** | `strategy/`：7 阶段 playbook + 4 场景 runbook + 协调模板 |
| **引入 17 工具适配契约** | `tools.json`：Claude Code / Codex / Gemini CLI / Cursor / Copilot 等 |
| **引入分类元数据 SSOT** | `divisions.json`：15 分类的图标、品牌色与上游部门映射 |
| **引入 6 个 workflow 示例** | `examples/`：MVP、落地页、书籍章节、记忆版、空间发现 |
| **重建索引** | `registry.json` 从 431 条修正为 **463 条**，与磁盘 1:1 一致 |

> 完整对照过程见 [UPSTREAM_MAPPING.md](UPSTREAM_MAPPING.md)；知识增量施工图见 [UPSTREAM_DELTA.md](UPSTREAM_DELTA.md) 与 [CHANGELOG.md](CHANGELOG.md)。

---

## 快速开始

```bash
# 方式 1：直接复制粘贴（任何 AI 环境）
cat agents/languages/python-pro.md

# 方式 2：CLI 检索与获取
npx agentkit find "python web api"
npx agentkit get python-pro | your-ai-cli

# 方式 3：IDE 文件引用（CLAUDE.md / .cursorrules 中引用代理文件）
```

详见 [QUICK_START.md](QUICK_START.md)

---

## 15 大分类 × 463 代理

| # | 分类 | 数量 | 说明 |
|---|------|------|------|
| 1 | **Architecture** 架构 | 14 | 后端/数据库/K8s/前端/安全/云/系统架构师 |
| 2 | **Languages** 编程语言 | 24 | Python、JS/TS、Rust、Go、Java、Swift、C#、Zig 等 |
| 3 | **Frameworks** 框架 | 20 | React、Vue、Next.js、Django、FastAPI、Spring、Flutter 等 |
| 4 | **DevOps** 运维 | 21 | Docker、K8s、Terraform、CI/CD、AWS/Azure/GCP、平台工程 |
| 5 | **Quality** 质量保障 | 21 | 代码审查、测试自动化、性能/负载测试、无障碍审计 |
| 6 | **Data & AI** 数据与 AI | 28 | ML、数据科学、LLM 应用、RAG、微调、知识图谱、语音 AI |
| 7 | **Database** 数据库 | 12 | PostgreSQL、Redis、MongoDB、ES、GraphQL、GaussDB |
| 8 | **Frontend** 前端 | 25 | UI/UX、动画、WebGL、性能、SEO、PWA、无障碍 508 |
| 9 | **Security** 安全 | 22 | 渗透测试、AppSec、威胁建模、应急响应、密钥治理、AI 代码审计 |
| 10 | **Blockchain** 区块链 | 8 | Solidity、Web3、DeFi、NFT、智能合约审计、ZK |
| 11 | **Business** 业务与运营 | 89 | PM、增长、营销、销售、付费媒体、财务、法务、客服、中国电商 |
| 12 | **Integration** 集成与工具 | 20 | API 设计、Webhook、支付、认证、工作流、ServiceNow、ATS |
| 13 | **Game Development** 游戏开发 | 15 | Blender、Godot、Roblox、Unity、Unreal 引擎专用角色 |
| 14 | **Specialized** 专项领域 | 130 | GIS、医疗、学术、法律、HR、建筑、XR、机器人、公文编译 |
| 15 | **Modernization** 现代化改造 | 14 | 遗留迁移、云迁移、框架迁移、性能优化、架构演进 |
| | **合计** | **463** | |

---

## NEXUS 编排体系（v3.0 新增）

单个代理解决单点问题；**NEXUS** 让多个代理按阶段协同交付完整项目。见 [strategy/](strategy/)：

| 模式 | 规模 | 适用 |
|------|------|------|
| **NEXUS-Full** | 全部代理 | 从零构建完整产品 |
| **NEXUS-Sprint** | 15–25 个代理 | 构建一个特性 / MVP |
| **NEXUS-Micro** | 5–10 个代理 | 单点任务（修 bug、营销 campaign、审计） |

包含 7 阶段 playbook（发现 → 策略 → 地基 → 构建 → 加固 → 上线 → 运营）、4 个场景 runbook、协调与交接模板。

---

## 多工具适配（v3.0 新增）

`tools.json` 定义了 **17 种工具**的安装契约，覆盖：

Claude Code · Codex · Gemini CLI · GitHub Copilot · Qwen Code · Cursor · opencode · Osaurus · Aider · Antigravity · Kimi · OpenClaw · Windsurf · Hermes · Mistral Vibe · ZCode · DeepSeek Harness

---

## 代理文件格式

每个代理是一个**完全自包含的 Markdown 文件**，六字段 front matter：

```markdown
---
name: python-pro
category: languages
tags: [python, backend, data-science, automation]
triggers: ["Python开发", "后端开发", ..., python, flask, django, fastapi]
complexity: expert
version: 1.0
---

# Python Pro

You are a Python expert specializing in Python 3.12+ ...

## Purpose
## Capabilities
## Behavioral Traits
## Response Approach
```

规范详见 [AGENT_TEMPLATE.md](AGENT_TEMPLATE.md)。

---

## 目录结构

```
agentkit-v3.0/
├── agents/               # 463 个代理（15 分类）
├── strategy/             # NEXUS 编排体系（playbooks / runbooks / coordination）
├── examples/             # 6 个 workflow 示例
├── scripts/              # 工具转换与校验脚本
├── src/cli.js            # CLI 工具
├── registry.json         # 代理注册表（463 条，SSOT）
├── agents-data.json/.js  # 前端消费的数据（15 分类）
├── divisions.json        # 分类元数据 SSOT（图标 / 品牌色 / 上游映射）
├── tools.json            # 17 种工具的安装契约
├── AGENT_TEMPLATE.md     # 代理模板规范
├── QUICK_START.md        # 快速上手
├── IDE_ADAPTERS.md       # IDE 适配指南
├── CLAUDE.md .cursorrules MOBILE_QUICK_CARDS.md
├── CONTRIBUTING.md / CONTRIBUTING_zh-CN.md
├── SECURITY.md
├── CHANGELOG.md
└── UPSTREAM_MAPPING.md   # 与上游的逐一对照表
└── UPSTREAM_DELTA.md     # 知识增量施工图（已覆盖代理 vs 上游）
```

---

## 与上游的关系

AgentKit 的英文代理知识源自 [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)（MIT），并做了结构性重构：

| 维度 | agency-agents | AgentKit |
|------|---------------|----------|
| 组织维度 | 18 个 division（部门制） | **15 个 category（技术域制）** |
| front matter | name / description / color / emoji / vibe | **name / category / tags / triggers / complexity / version** |
| 触发机制 | 自然语言激活 | **中文触发词 + 英文关键词双轨** |
| 索引 | divisions.json + tools.json | registry.json + agents-data（**1:1 校验**） |
| CLI | shell 转换器 | **Node CLI（9 命令）** |

AgentKit 额外收录 181 个自有代理（上游没有的技术域专家）。完整映射见 [UPSTREAM_MAPPING.md](UPSTREAM_MAPPING.md)。

---

## 参与贡献

1. Fork 本仓库
2. 新建代理，遵循 [AGENT_TEMPLATE.md](AGENT_TEMPLATE.md)
3. 运行 `node src/verify.js` 校验格式与索引一致性
4. 提交 PR

详见 [CONTRIBUTING_zh-CN.md](CONTRIBUTING_zh-CN.md)

---

## 许可证

MIT License — 详见 [LICENSE](LICENSE)
