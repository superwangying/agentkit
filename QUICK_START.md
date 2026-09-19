# AgentKit 5分钟上手指南

> 无论你用的是什么 AI，AgentKit 都能在 5 分钟内为你所用。

---

## 场景1：VS Code + Cline / Continue

### Step 1：克隆仓库
```bash
git clone https://github.com/agentkit/agentkit.git
cd agentkit
```

### Step 2：配置 IDE
在 Cline 或 Continue 的设置中，将 `agents/` 目录添加为 Knowledge Base。

### Step 3：使用
在对话中输入 `@python-pro`，AI 自动加载 Python 专家上下文。

```
你：@python-pro 帮我写一个 FastAPI 接口
```

---

## 场景2：ChatGPT / Claude Web

### Step 1：复制代理
打开 `agents/languages/python-pro.md`，全选复制。

### Step 2：粘贴使用

**方式A：单次对话**
```
请扮演以下 Python 专家角色：

[粘贴 agents/languages/python-pro.md 的全部内容]

---

现在请帮我写一个异步的 FastAPI CRUD 接口。
```

**方式B：Custom Instructions（持久化）**
1. 打开 ChatGPT 设置 → Custom Instructions
2. 将代理内容粘贴到 "Additional instructions"
3. 每次对话自动获得 Python 专家视角

---

## 场景3：Claude Code CLI

### Step 1：引用代理
在项目根目录的 `CLAUDE.md` 中添加：
```markdown
# 当讨论以下主题时，自动加载对应代理

@agents/languages/python-pro.md
@agents/frameworks/fastapi-pro.md
@agents/quality/code-reviewer.md
```

### Step 2：自动注入
Claude Code 会根据对话内容自动引用相关代理。

---

## 场景4：自定义脚本

```python
import json

# 读取注册表
with open("registry.json") as f:
    registry = json.load(f)

# 根据关键词找代理
keyword = "rust web service"
matched = [info for name, info in registry["agents"].items()
           if keyword.lower() in " ".join(info["triggers"]).lower()]

# 加载代理内容
if matched:
    agent_file = matched[0]["file"]
    with open(f"agents/{agent_file}") as f:
        agent_content = f.read()

# 注入到 AI API
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": agent_content},
        {"role": "user", "content": "帮我写一个 Rust Web 服务"}
    ]
)
```

---

## 场景5：Terminal + 管道

### 使用 CLI（Phase 3 特性）
```bash
# 查找最匹配的代理
npx agentkit find "高性能 Web 服务"

# 输出代理内容，管道给 AI
npx agentkit get rust-pro | claude

# 列出某分类所有代理
npx agentkit list languages
```

### 手动管道
```bash
# Linux/macOS
cat agents/languages/rust-pro.md | your-ai-cli

# Windows PowerShell
Get-Content agents/languages/rust-pro.md | your-ai-cli
```

---

## registry.json 快速检索

```json
{
  "agents": {
    "python-pro": {
      "file": "agents/languages/python-pro.md",
      "category": "languages",
      "tags": ["python", "backend", "data-science"],
      "triggers": ["python", "flask", "django", "fastapi"]
    }
  }
}
```

**程序化使用示例：**
```javascript
// Node.js
const registry = require('./registry.json');
const agents = registry.agents;

// 根据触发词找代理
function findAgent(keyword) {
  return Object.entries(agents)
    .filter(([_, info]) => info.triggers.some(t => keyword.includes(t)))
    .map(([name, _]) => name);
}

console.log(findAgent("我想用 Rust 写 Web 服务"));
// ['rust-pro', 'actix-pro', 'backend-architect']
```

---

## 常见问题

### Q: 需要安装什么吗？
A: **不需要**。AgentKit 是纯 Markdown 文件，任何能读取文本的 AI 都可以使用。

### Q: 代理会不会过时？
A: 代理只包含**方法论和原则**，不依赖特定版本。只要技术方向不变，代理始终有效。

### Q: 可以修改代理内容吗？
A: 当然！AgentKit 采用 MIT 许可证，你可以 fork 后修改，或者提交 PR 给社区。

### Q: 如何贡献新代理？
A: 
1. 遵循 `AGENT_TEMPLATE.md` 格式
2. 放在对应的分类目录下
3. 更新 `registry.json`
4. 提交 PR

---

## 下一步

- 📖 阅读 [README.md](README.md) 了解完整功能
- 🔍 浏览 `agents/` 目录探索所有代理
- 🛠️ 等待 Phase 3 CLI 工具发布
- 🤝 加入社区贡献更多代理
