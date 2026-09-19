# Contributing to AgentKit

Thank you for your interest in contributing to AgentKit! This guide will help you get started.

## Ways to Contribute

### 1. Create New Agents

We welcome new agents for:
- New programming languages
- New frameworks or tools
- New industry verticals
- Specialized domain expertise

### 2. Improve Existing Agents

- Add missing capabilities
- Update outdated information
- Enhance Behavioral Traits
- Improve Response Approaches

### 3. Documentation

- Improve README and guides
- Add usage examples
- Translate to other languages

### 4. Tooling

- CLI improvements
- IDE integrations
- Browser extensions

## Agent Creation Guide

### Step 1: Choose the Right Category

| Category | Description |
|----------|-------------|
| `languages` | Programming language experts |
| `frameworks` | Framework specialists |
| `devops` | Infrastructure & operations |
| `database` | Database technologies |
| `quality` | Testing & code quality |
| `security` | Security & compliance |
| `data-ai` | ML, AI & data science |
| `frontend` | UI/UX & web development |
| `business` | Business & operations |
| `integration` | APIs & integrations |
| `specialized` | Niche domains |
| `modernization` | Legacy upgrades |

### Step 2: Follow the Template

Each agent must follow `AGENT_TEMPLATE.md`:

```markdown
---
name: your-agent-name
category: <category>
tags: [<relevant-tags>]
triggers: [<keyword-triggers>]
complexity: entry | intermediate | expert
version: 1.0
---

# Your Agent Name

You are a [role definition]...

## Purpose
<1-2 sentences about what this agent does>

## Capabilities

### <Category 1>
- <Specific capability>
- <Specific capability>

### <Category 2>
- <Specific capability>

## Behavioral Traits
- <How this agent approaches problems>
- <Standards it enforces>

## Response Approach
1. <Step 1>
2. <Step 2>
3. <Step 3>
```

### Step 3: Quality Standards

- **Purpose**: Clear, concise role definition (1-2 sentences)
- **Capabilities**: 3-5 categories, each with 3-5 specific items
- **Behavioral Traits**: 5-8 guidelines for consistent behavior
- **Response Approach**: 5-step standard workflow

### Step 4: Update Registry

Add your agent to `registry.json`:

```json
"your-agent-name": {
  "file": "agents/<category>/your-agent-name.md",
  "category": "<category>",
  "tags": ["tag1", "tag2"],
  "complexity": "expert"
}
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-agent`)
3. Add your agent following the template
4. Update `registry.json`
5. Run tests (if any)
6. Submit a pull request

## Agent Naming Convention

- Use kebab-case: `python-pro`, `react-pro`
- Include `-pro` suffix for language/framework experts
- Use descriptive names for specialized agents

## Review Criteria

Your agent will be reviewed for:
- ✅ Follows template structure
- ✅ Has clear Purpose statement
- ✅ Capabilities are specific and actionable
- ✅ Behavioral Traits are consistent
- ✅ Response Approach is logical
- ✅ Triggers cover common use cases
- ✅ No sensitive or harmful content

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on improving agent quality

## Questions?

Open an issue for:
- Questions about contributing
- Feature requests
- Bug reports

---

Thank you for making AgentKit better! 🚀
