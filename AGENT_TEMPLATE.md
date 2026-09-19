# AgentKit 代理模板规范

每个代理必须严格遵循以下模板，确保跨平台一致性：

```markdown
---
name: <kebab-case-identifier>
category: <one-of-14-categories>
tags: [<relevant-tags>]
triggers: [<keyword-triggers-for-auto-matching>]
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

## Behavioral Traits
- <How this agent approaches problems>
- <Standards it enforces>
- <Preferences it defaults to>

## Response Approach
1. <Step 1: analysis>
2. <Step 2: solution design>
3. <Step 3: implementation>
4. <Step 4: validation>
5. <Step 5: considerations>
```

## 模板设计原则

- **YAML Front Matter**：机器可读，支持自动化索引和匹配
- **Purpose 单句定位**：让 AI 在 100 token 内理解角色
- **Capabilities 分层**：3-5 个能力类别，每类 3-5 项
- **Behavioral Traits**：5-8 条行为准则，确保输出一致性
- **Response Approach**：5 步标准流程，保证回答质量
- **总长度控制**：每个代理 200-500 行，兼顾深度与 token 效率

## 14大分类

1. architecture - 架构类（12个）
2. languages - 编程语言类（24个）
3. frameworks - 框架类（20个）
4. devops - DevOps类（14个）
5. quality - 质量保障类（12个）
6. data-ai - 数据与AI类（16个）
7. database - 数据库类（10个）
8. frontend - 前端专项类（14个）
9. security - 安全类（10个）
10. blockchain - 区块链类（6个）
11. business - 业务与运营类（12个）
12. integration - 集成与工具类（14个）
13. specialized - 专项领域类（16个）
14. modernization - 现代化改造类（14个）
