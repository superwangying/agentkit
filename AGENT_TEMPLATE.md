# AgentKit 代理模板规范

每个代理必须严格遵循以下模板，确保跨平台一致性。

> 当前版本：**v3.0.0** — 463 个代理 / 15 个分类

```markdown
---
name: <kebab-case-identifier>
category: <one-of-15-categories>
tags: [<relevant-tags>]
triggers: [<中文触发词至少 6 条>, <英文关键词 3-6 条>]
complexity: entry | intermediate | expert
version: 1.0
---

# <Display Name>

You are a <role definition> specializing in <domain> with deep knowledge of
<key-areas>.

## Purpose
<1-2 sentences: what this agent does and why it exists>

## Capabilities

### <Capability Category 1>
- <Specific capability>
- <Specific capability>

### <Capability Category 2>
- <Specific capability>
- <Specific capability>

（3-5 个能力类别，每类 4-6 项）

## Behavioral Traits
- <How this agent approaches problems>
- <Standards it enforces>
- <Preferences it defaults to>

（7-9 条）

## Response Approach
1. **<步骤名>**
   - <子项 3-5 条>
2. **<步骤名>**
   - <子项 3-5 条>
（共 5 步）
```

## 模板设计原则

- **YAML Front Matter**：机器可读，支持自动化索引和匹配
- **Purpose 单句定位**：让 AI 在 100 token 内理解角色
- **Capabilities 分层**：3-5 个能力类别，每类 4-6 项
- **Behavioral Traits**：7-9 条行为准则，确保输出一致性
- **Response Approach**：5 步标准流程，保证回答质量
- **triggers 双轨**：**必须同时包含中文触发词与英文关键词**，这是 AgentKit 区别于上游的核心特征
- **总长度控制**：每个代理 60-300 行，兼顾深度与 token 效率

## 硬性约束（`src/verify.js` 会校验）

1. front matter 六个字段齐全：`name` / `category` / `tags` / `triggers` / `complexity` / `version`
2. `complexity` ∈ {`entry`, `intermediate`, `expert`}
3. `triggers` 至少含 1 个中文触发词
4. 全文仅有 **1 个** `#` 一级标题
5. 二级标题**必须且仅能**是 `## Purpose`、`## Capabilities`、`## Behavioral Traits`、`## Response Approach`，顺序一致，不得改名、不得加 emoji
6. `name` 在全库唯一（不允许跨目录重名）
7. 提交前运行：`node src/verify.js`

## 15 大分类

| # | category | 分类 | 说明 |
|---|----------|------|------|
| 1 | `architecture` | 架构 | 系统 / 后端 / 数据库 / 云 / K8s / 前端架构师 |
| 2 | `languages` | 编程语言 | Python、JS/TS、Rust、Go、Java、Swift、C#、Zig 等 |
| 3 | `frameworks` | 框架 | React、Vue、Next.js、Django、FastAPI、Spring、Flutter 等 |
| 4 | `devops` | 运维 | Docker、K8s、Terraform、CI/CD、云平台、平台工程、SRE |
| 5 | `quality` | 质量保障 | 代码审查、测试自动化、性能/负载测试、无障碍审计 |
| 6 | `data-ai` | 数据与 AI | ML、数据科学、LLM 应用、RAG、微调、知识图谱、语音 AI |
| 7 | `database` | 数据库 | PostgreSQL、Redis、MongoDB、ES、GraphQL、GaussDB |
| 8 | `frontend` | 前端 | UI/UX、动画、WebGL、性能、SEO、PWA、无障碍 |
| 9 | `security` | 安全 | 渗透测试、AppSec、威胁建模、应急响应、合规 |
| 10 | `blockchain` | 区块链 | Solidity、Web3、DeFi、NFT、智能合约审计、ZK |
| 11 | `business` | 业务与运营 | PM、增长、营销、销售、付费媒体、财务、法务、客服 |
| 12 | `integration` | 集成与工具 | API 设计、Webhook、支付、认证、工作流、SDK |
| 13 | `game-development` | 游戏开发 | Blender、Godot、Roblox、Unity、Unreal 引擎专用 |
| 14 | `specialized` | 专项领域 | GIS、医疗、学术、法律、HR、建筑、XR、机器人 |
| 15 | `modernization` | 现代化改造 | 遗留迁移、云迁移、框架迁移、性能优化、架构演进 |

> 分类元数据（图标 / 品牌色 / 上游部门映射）见 [`divisions.json`](divisions.json)，这是分类的 SSOT。
