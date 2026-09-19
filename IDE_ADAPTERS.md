# AgentKit IDE Adapters

This directory contains configuration files for popular AI-powered IDEs to integrate with AgentKit.

## Supported IDEs

### 1. Cursor

Add to `.cursorrules` in your project root:

```markdown
# AgentKit Integration
# When discussing these topics, automatically load the relevant agent context

## Languages
- @agentkit/agents/languages/python-pro.md
- @agentkit/agents/languages/typescript-pro.md
- @agentkit/agents/languages/rust-pro.md
- @agentkit/agents/languages/go-pro.md

## Frameworks
- @agentkit/agents/frameworks/react-pro.md
- @agentkit/agents/frameworks/vue-pro.md
- @agentkit/agents/frameworks/fastapi-pro.md

## Quality
- @agentkit/agents/quality/code-reviewer.md
- @agentkit/agents/quality/security-auditor.md

## DevOps
- @agentkit/agents/devops/docker-pro.md
- @agentkit/agents/devops/kubernetes-ops.md
```

### 2. Claude Code / Claude Desktop

Add to `CLAUDE.md` in your project root:

```markdown
# AgentKit Integration

When you need expert context for a task, reference the relevant AgentKit agent:

## Quick Reference
- Python: @agentkit/agents/languages/python-pro.md
- TypeScript: @agentkit/agents/languages/typescript-pro.md
- React: @agentkit/agents/frameworks/react-pro.md
- Database: @agentkit/agents/database/postgresql-pro.md
- Security: @agentkit/agents/security/security-architect.md
- DevOps: @agentkit/agents/devops/docker-pro.md

## Auto-Loading Rules
When I mention specific keywords, automatically load the relevant agent:
- "python", "django", "flask" → python-pro.md
- "react", "hooks", "jsx" → react-pro.md
- "docker", "container" → docker-pro.md
- "kubernetes", "k8s" → kubernetes-ops.md
```

### 3. Continue (VS Code / JetBrains)

Add to `.continue/config.json`:

```json
{
  "agents": [
    {
      "name": "AgentKit",
      "description": "Load AgentKit professional agents",
      "systemMessage": "You have access to AgentKit. When the user mentions specific technologies, load the relevant agent from the agents/ directory.",
      "tools": []
    }
  ],
  "embeddingsProvider": {
    "provider": "transformer.js"
  }
}
```

### 4. Cline / Roo Code

Configure the Knowledge Base path to include the AgentKit `agents/` directory.

### 5. GitHub Copilot

Add agent context to your `.github/copilot-instructions.md`:

```markdown
# AgentKit Reference

For specialized tasks, reference these AgentKit agents:

## Backend Development
- Python: @agentkit/agents/languages/python-pro.md
- Go: @agentkit/agents/languages/go-pro.md

## Frontend Development
- React: @agentkit/agents/frameworks/react-pro.md
- Vue: @agentkit/agents/frameworks/vue-pro.md

## Database
- PostgreSQL: @agentkit/agents/database/postgresql-pro.md
- Redis: @agentkit/agents/database/redis-pro.md
```

## Usage Examples

### Automatic Context Loading

Once configured, simply mention the technology and the IDE will automatically load the relevant agent:

```
You: "帮我用 FastAPI 写一个 CRUD 接口"
→ IDE loads: fastapi-pro.md + python-pro.md

You: "Review this Kubernetes deployment"
→ IDE loads: kubernetes-ops.md + docker-pro.md
```

### Manual Agent Selection

```
You: "@agentkit python-pro"
→ IDE loads the Python expert agent

You: "@agentkit security-auditor"
→ IDE loads the security auditor agent
```

## Setup Instructions

1. Clone AgentKit to a local directory:
   ```bash
   git clone https://github.com/agentkit/agentkit.git ~/agentkit
   ```

2. Configure your IDE to reference the `agents/` directory

3. Start using natural language to trigger agent loading

## Contributing

To add support for a new IDE, create a new markdown file in this directory with configuration instructions.
