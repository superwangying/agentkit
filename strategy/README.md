# NEXUS 编排体系

> **Network of EXperts, Unified in Strategy** — 让 AgentKit 的 463 个专家按阶段协同交付完整项目，而不是一个个手动激活。

本目录收录多代理编排体系。单个 agent 解决单点问题；NEXUS 定义**谁在什么阶段做什么、交接物是什么、每个阶段如何验收质量**。

---

## 三种模式

| 我想… | 用哪个 | 涉及 agent | 周期 |
|-------|--------|-----------|------|
| 从零构建完整产品 | **NEXUS-Full** | 全部 | 12–24 周 |
| 构建一个特性 / MVP | **NEXUS-Sprint** | 15–25 个 | 2–6 周 |
| 做单点任务（修 bug、做 campaign、做审计） | **NEXUS-Micro** | 5–10 个 | 1–5 天 |

---

## 目录导航

| 路径 | 作用 |
|------|------|
| [`QUICKSTART.md`](QUICKSTART.md) | 5 分钟上手：三种模式的激活提示词模板 |
| [`EXECUTIVE-BRIEF.md`](EXECUTIVE-BRIEF.md) | 面向决策者的体系概览与价值说明 |
| [`nexus-strategy.md`](nexus-strategy.md) | 完整策略：代理分工矩阵、阶段契约、质量门 |
| [`playbooks/`](playbooks/) | **7 个阶段 playbook**，逐阶段执行手册 |
| [`runbooks/`](runbooks/) | **4 个场景 runbook**，端到端剧本 |
| [`coordination/`](coordination/) | 协调与交接模板 |
| [`runbooks.json`](runbooks.json) | runbook 索引（机器可读） |

### 7 个阶段 playbook

| 阶段 | 文件 | 交付 |
|------|------|------|
| 0 | [`phase-0-discovery.md`](playbooks/phase-0-discovery.md) | 需求发现与可行性 |
| 1 | [`phase-1-strategy.md`](playbooks/phase-1-strategy.md) | 策略与方案选型 |
| 2 | [`phase-2-foundation.md`](playbooks/phase-2-foundation.md) | 地基：架构、数据模型、脚手架 |
| 3 | [`phase-3-build.md`](playbooks/phase-3-build.md) | 构建：特性实现 |
| 4 | [`phase-4-hardening.md`](playbooks/phase-4-hardening.md) | 加固：测试、安全、性能 |
| 5 | [`phase-5-launch.md`](playbooks/phase-5-launch.md) | 上线：发布、观测、回滚预案 |
| 6 | [`phase-6-operate.md`](playbooks/phase-6-operate.md) | 运营：监控、迭代、增长 |

### 4 个场景 runbook

| 场景 | 文件 |
|------|------|
| 初创 MVP | [`runbooks/scenario-startup-mvp.md`](runbooks/scenario-startup-mvp.md) |
| 企业特性开发 | [`runbooks/scenario-enterprise-feature.md`](runbooks/scenario-enterprise-feature.md) |
| 营销 campaign | [`runbooks/scenario-marketing-campaign.md`](runbooks/scenario-marketing-campaign.md) |
| 事件响应 | [`runbooks/scenario-incident-response.md`](runbooks/scenario-incident-response.md) |

### 协调模板

- [`coordination/agent-activation-prompts.md`](coordination/agent-activation-prompts.md) — 各 agent 的标准激活提示词
- [`coordination/handoff-templates.md`](coordination/handoff-templates.md) — 阶段间交接模板

---

## 快速开始（NEXUS-Sprint 示例）

在任意 AI 环境（Claude Code / Cursor / ChatGPT 等）中，把对应 agent 的 `.md` 内容作为角色上下文注入，然后按下面的模板下达任务：

```
以 NEXUS-Sprint 模式编排本次开发。

项目：<项目名>
规格：<需求描述或链接>
约束：<技术栈 / 时间 / 团队>

按 strategy/playbooks/ 的阶段顺序推进：
  阶段 0 发现 → 阶段 1 策略 → 阶段 2 地基 → 阶段 3 构建
每完成一个阶段，按 coordination/handoff-templates.md 产出交接物，再进入下一阶段。
```

---

## 说明

本目录内容源自上游 [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)（MIT License），
保留英文原文以保证准确性。AgentKit 在其之上做了分类体系与索引的适配：

- 上游 18 个 division → AgentKit 15 个 category，映射关系见 [`../divisions.json`](../divisions.json)
- 上游 17 种工具的安装契约见 [`../tools.json`](../tools.json)
