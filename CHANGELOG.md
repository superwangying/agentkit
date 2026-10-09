# Changelog

本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

---

## [3.0.0] — 2026-10-08

### 主题：与上游 agency-agents 全量对齐

本次版本基于对 `msitarzewski/agency-agents@f99f6aa910`（2026-10-07，282 个代理 / 18 部门）
的**逐一对照审计**（非抽样），完成补齐、去重、修缺与结构升级。

### 新增

- **31 个代理补齐**，覆盖上游全部缺口：
  - Engineering（8）：`platform-engineer`、`knowledge-graph-engineer`、`pdf-engine-architect`、
    `ats-validator-architect`、`universal-document-compiler`、`servicenow-developer-mentor`、
    `china-network-engineer`、`section-508-specialist`
  - Game Development（15）：`blender-addon-engineer`、`godot-{gameplay-scripter,multiplayer-engineer,shader-developer}`、
    `roblox-{avatar-creator,experience-designer,systems-scripter}`、
    `unity-{architect,editor-tool-developer,multiplayer-engineer,shader-graph-artist}`、
    `unreal-{multiplayer-architect,systems-engineer,technical-artist,world-builder}`
  - 其他（8）：`gis-3d-scene-developer`、`ai-generated-code-auditor`、`secrets-credential-engineer`、
    `developer-community-builder`、`dx-engineer`、`research-synthesist`、`focus-music-architect`、`master-plan-architect`
- **4 个 slug 撞车漏建代理补齐**（主题一致性复核后发现首轮误判为"已覆盖"）：
  `zk-steward`（卢曼 Zettelkasten 知识库管家）、`orgscript-engineer`（OrgScript 业务过程 DSL）、
  `workflow-optimizer`（业务流程优化 / RPA）、`project-manager-senior`（规格→任务的 PM）。
- **新增第 15 个分类 `game-development`**（游戏开发）。
- **`strategy/` NEXUS 编排体系**：QUICKSTART、EXECUTIVE-BRIEF、nexus-strategy、
  7 阶段 playbook、4 场景 runbook、coordination 模板、runbooks.json。
- **`examples/` 6 个 workflow 示例**：startup-mvp、landing-page、book-chapter、with-memory、
  nexus-spatial-discovery。
- **`tools.json`**：17 种工具的安装契约（Claude Code / Codex / Gemini CLI / Copilot / Qwen / Cursor /
  opencode / Osaurus / Aider / Antigravity / Kimi / OpenClaw / Windsurf / Hermes / Vibe / ZCode / DSH）。
- **`divisions.json`**：15 分类元数据 SSOT（中文名 / 英文名 / emoji / Lucide 图标 / 品牌色 / 上游部门映射），
  并保留上游 18 部门的原始元数据供追溯。
- **`SECURITY.md`**、**`CONTRIBUTING_zh-CN.md`**、**`UPSTREAM_MAPPING.md`**、**`CHANGELOG.md`**。
- **`src/verify.js`**：格式与索引一致性校验脚本。

### 修复

- **去重 4 组冗余代理**（v2.0 中同一 slug 存在两个版本，导致 registry 记录丢失）：
  保留结构化高质量版，移除简版 —— `grant-writer`、`government-digital-presales-consultant`、
  `data-consolidation-agent`、`voice-ai-integration-engineer`。
- **去重 3 组同主题孪生代理**（v2.0 中以 `-specialized` 后缀复制出的一份，H1 与正体完全相同）：
  `narrative-designer-specialized`、`level-designer-specialized`、`technical-artist-specialized`。
- **修正 5 例 slug 撞车误配**（上游代理与本地文件**主题完全不同**）：
  - 本地重命名为真实主题 slug：`blockchain/zk-steward` → `zero-knowledge-steward`、
    `specialized/orgscript-engineer` → `emacs-org-mode-engineer`、
    `quality/workflow-optimizer` → `test-workflow-optimizer`、
    `business/project-manager-senior` → `program-manager`；
  - 上游主题另行落位：`specialized/zk-steward`、`specialized/orgscript-engineer`、
    `business/workflow-optimizer`、`business/project-manager-senior`；
  - `gis/gis-qa-engineer` 重映射至 `quality/gis-qa-engineer`（原被误配到通用 `quality/qa-engineer`）。
- **41 个代理补入中文触发词**（此前 `triggers` 仅有英文，不符合 AgentKit 规范）：
  `data-ai` 16 个、`modernization` 13 个、`quality` 12 个。
- **`languages/haskell-pro.md`**：移除重复的 `## Response Approach` 章节。
- **`languages/typescript-pro.md`**：`## BehavioralTraits` → `## Behavioral Traits`。
- **`registry.json` 与磁盘不一致**：v2.0 记录 431 条而磁盘有 435 个文件；v3.0 重建为
  **463 条并与磁盘 1:1 校验通过**。

### 知识增量补写（v3.0 核心工作量）

已覆盖代理是「概念级重写版」（同主题、自撰正文），而上游承载了大量**具体落地细节**
（示例代码、命令行、API 签名、配置片段、量化阈值）。v3.0 分 **5 轮、37 个并行工作单元**逐代理补写：

- **第一轮（4 轮 / 30 单元）**：批量覆盖 280+ 个已覆盖代理，对齐口径缺口 **6679 → 4183**；
- **第二轮（高缺口定向 / 7 单元）**：对 Δ ≥ 30 的 **52 个重度缺口组**逐点补写（PowerShell 取证
  cmdlet、CSP/CORS 片段、UE5 C++ / Unity Editor API、PDF 打印 CSS、Spark/Delta 类型、Playwright
  夹具等），全量缺口 **5288 → 3435（降 35%）**，**Δ ≥ 30 的对照组清零**，最大单组缺口 **91 → 29**；
- **最终成效**（对齐口径 238 组）：缺口 **6679 → 2949（降 56%）**，覆盖率中位数 **6% → 39%**，
  Δ ≤ 4 基本对齐的对照组 **44** 个；
- 补入内容严格限定为上游独有的技术实体，**只增不删、不改结构、不动 front matter**；
- 施工图见 [UPSTREAM_DELTA.md](UPSTREAM_DELTA.md)。

### 变更

- 代理总数 **435 → 463**，分类 **14 → 15**。
- `registry.json` / `agents-data.json` / `agents-data.js` 全部重建，新增 `upstream` 溯源字段。
- `README.md` 重写：新增 v3.0 变更说明、NEXUS 体系、多工具适配、目录结构与上游关系章节。
- `package.json`：版本 `2.0.0 → 3.0.0`，`files` 白名单补入 `strategy/`、`examples/`、`divisions.json`、
  `tools.json`。

### 审计结论

| 指标 | 数值 |
|------|------|
| 上游代理总数 | 282 |
| 已覆盖（精确同名） | 237 |
| 已覆盖（重命名映射） | 9 |
| slug 撞车重映射修正 | 1 |
| 真缺失（本次补齐） | 35（含 4 个撞车漏建） |
| 本地自有（上游无） | 181 |
| 覆盖率 | **100%**（上游 282 个已全部纳入） |
| v3.0 代理总数 | **463** |

> 逐一对照明细见 [UPSTREAM_MAPPING.md](UPSTREAM_MAPPING.md)，知识增量施工图见 [UPSTREAM_DELTA.md](UPSTREAM_DELTA.md)。

---

## [2.0.0]

- 代理库从 193 扩充至 435，分类 14 个。
- 引入上游 agency-agents 的业务向代理（营销 / 销售 / 付费媒体 / 客服 / GIS / 医疗等）并重分类。

## [1.1.0]

- 193 个专业代理，14 大分类。
- CLI 工具（9 命令）、IDE 适配配置（CLAUDE.md / .cursorrules / IDE_ADAPTERS.md）、npm 包配置。
