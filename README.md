# AgentKit — 便携式435专业代理系统

> **在任何 AI 环境中即插即用的专业代理词典**

[![GitHub Stars](https://img.shields.io/github/stars/agentkit/agentkit?style=flat-square)](https://github.com/agentkit/agentkit)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Agent Count](https://img.shields.io/badge/Agents-435-green?style=flat-square)]()

## 核心定位

AgentKit 是一套**纯 Markdown 专业代理库**，可在任何 AI 环境（CLI / IDE / 桌面端 / Web）中即插即用。

### 与 wshobson/agents 的关键区别

| 维度 | wshobson/agents | AgentKit |
|------|-----------------|----------|
| 绑定平台 | Claude Code 专属 | **平台无关** |
| 安装方式 | 插件市场安装 | **复制/引用，无安装** |
| 使用场景 | 仅 Claude Code CLI | **任何 AI 环境** |
| 运行时依赖 | Claude Code runtime | **零依赖** |
| 代理格式 | .md + 插件框架 | **独立 .md 文件** |

**一句话**：wshobson/agents 是 Claude Code 的"插件生态"，AgentKit 是任何 AI 的"代理词典"。

---

## 快速开始

### 5秒上手

```bash
# 方式1：直接复制粘贴
cat agents/languages/python-pro.md

# 方式2：使用 CLI（Phase 3）
npx agentkit get python-pro | your-ai-cli

# 方式3：文件引用
# 在 CLAUDE.md / .cursorrules 中引用代理文件
```

详见 [QUICK_START.md](QUICK_START.md)

---

## 14大分类 × 435代理

| # | 分类 | 数量 | 说明 |
|---|------|------|------|
| 1 | **Architecture** | 14 | 架构师角色：后端、数据库、K8s、前端、安全、云、系统等 |
| 2 | **Blockchain** | 8 | 区块链：Solidity、Web3、DeFi、NFT、智能合约审计 |
| 3 | **Business** | 87 | 业务运营：PM、BA、增长黑客、财务分析、合规、营销增长等 |
| 4 | **Data & AI** | 29 | 数据与AI：ML、数据科学、LLM应用、RAG、微调、语音等 |
| 5 | **Database** | 12 | 数据库：PostgreSQL、Redis、MongoDB、ES、GraphQL等 |
| 6 | **DevOps** | 20 | 运维工具：Docker、K8s、Terraform、CI/CD、AWS/Azure/GCP等 |
| 7 | **Frameworks** | 20 | 框架专家：React、Vue、Next.js、Django、FastAPI、Spring等 |
| 8 | **Frontend** | 24 | 前端专项：UI/UX、动画、WebGL、性能、SEO、PWA等 |
| 9 | **Integration** | 18 | 集成工具：API设计、Webhook、支付、认证、工作流等 |
| 10 | **Languages** | 24 | 编程语言：Python、JS/TS、Rust、Go、Java、Swift、C#等 |
| 11 | **Modernization** | 14 | 现代化：遗留迁移、云迁移、性能优化、架构演进等 |
| 12 | **Quality** | 21 | 质量保障：代码审查、安全审计、测试自动化、性能测试等 |
| 13 | **Security** | 20 | 安全专家：渗透测试、密码学、威胁建模、应急响应等 |
| 14 | **Specialized** | 124 | 专项领域：GIS、医疗、游戏、IoT、嵌入式、机器人与科学计算等 |
| | **合计** | **435** | |

---

## 便携引用机制

AgentKit 的核心创新：**代理不再是插件，而是任何 AI 都可以读取的纯文本**。

### 引用方式矩阵

| 引用方式 | 适用场景 | 操作方法 |
|----------|----------|----------|
| **复制粘贴** | 所有环境 | 打开 .md，全选复制到对话 |
| **@引用** | IDE + CLI | 文件路径或快捷指令 |
| **System Prompt** | Web AI | 粘贴到 Custom Instructions |
| **文件包含** | Claude Code | @agents/xxx.md |
| **CLI 管道** | 终端 | `cat agents/xxx.md \| aicli` |
| **API 参数** | 自定义集成 | 作为 system 字段 |
| **拖拽导入** | 桌面 AI | 拖拽 .md 到对话框 |

### 典型场景

**VS Code + Cline/Continue**
```markdown
在 Cline/Continue 设置中添加 agents/ 目录
对话中输入 @python-pro，自动加载专家上下文
```

**ChatGPT / Claude Web**
```markdown
复制 agents/languages/python-pro.md 内容
粘贴到对话开头："请扮演以下角色：\n[粘贴内容]"
或添加到 Custom Instructions 作为持久角色
```

**Claude Code CLI**
```markdown
在 CLAUDE.md 中添加：
@agents/languages/python-pro.md
代理自动注入上下文
```

---

## 代理文件格式

每个代理是一个**完全自包含的 Markdown 文件**：

```markdown
---
name: python-pro
category: languages
tags: [python, backend, data-science, automation]
triggers: [python, flask, django, fastapi, pip, pytest, pandas]
complexity: expert
version: 1.0
---

# Python Pro

You are a Python expert specializing in Python 3.12+ with deep knowledge...

## Purpose
Provide expert-level Python development assistance...

## Capabilities

### Modern Python Features
- Structural pattern matching (match/case)
- Type hints & generics (PEP 695)
- Async/await patterns & asyncio

### Tooling & Environment
- uv / Poetry dependency management
- Ruff linting & formatting
- pytest with fixtures

## Behavioral Traits
- Always suggest the most idiomatic Python approach
- Prefer stdlib over third-party when practical
- Enforce type hints on all function signatures

## Response Approach
1. Analyze the task requirements
2. Identify the most Pythonic solution
3. Provide type-annotated, documented code
4. Include test cases when relevant
5. Note version-specific considerations
```

---

## 开发路线图

| Phase | 周期 | 任务 |
|-------|------|------|
| Phase 1 | 2周 | 核心建设：模板标准、目录结构、首批30个代理 |
| Phase 2 | 3周 | 代理填充：剩余154个代理、质量审核 |
| Phase 3+ | 持续 | 代理库扩充至 435 个专业代理（14 大分类） |
| Phase 3 | 1周 | 便携增强：CLI工具、IDE适配、npm包 |
| Phase 4 | 持续 | 生态扩展：社区贡献、多语言版本 |

---

## 参与贡献

欢迎提交 PR！

1. Fork 本仓库
2. 创建新代理（遵循 `AGENT_TEMPLATE.md` 格式）
3. 更新 `registry.json`
4. 提交 PR

---

## 许可证

MIT License - 详见 [LICENSE](LICENSE)
