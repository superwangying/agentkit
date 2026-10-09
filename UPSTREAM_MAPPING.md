# AgentKit v3.0 × agency-agents 逐一对照与补齐记录

> 上游：`msitarzewski/agency-agents` @ `f99f6aa910`（提交日期 2026-10-07，MIT License）

> 方法：逐文件 front matter 解析 + 三级映射（slug 精确 → name 归一化 → 正文内容指纹），未命中的整批再逐条读取上游描述并做主题一致性扫描。**全流程零抽样、零猜测**。


## 一、结论总览

| 指标 | 数值 |
|------|------|
| 上游代理总数 | 282（18 个 division） |
| 精确同名映射 | 237 |
| 重命名映射（主题已覆盖，slug 不同） | 9 |
| v3.0 补齐（原缺失） | 35 |
| slug 撞车重映射修正 | 1 |
| 上游覆盖率 | **100%（282/282）** |
| v3.0 代理总数 | **463** |
| 本地自有代理（上游无） | 181 |

> **v3.0 = v2.0 的 435 个 − 4（同 slug 去重）− 3（同主题孪生去重）+ 35（上游缺失补齐）= 463**。


## 二、v3.0 补齐的 35 个上游代理

| # | 上游路径 | 名称 | v3.0 落位 |
|---|---------|------|----------|
| 1 | `engineering/engineering-ats-validator-architect.md` | ATS Validator Architect | `integration/ats-validator-architect.md` |
| 2 | `engineering/engineering-china-network-engineer.md` | China Network Engineer | `specialized/china-network-engineer.md` |
| 3 | `engineering/engineering-knowledge-graph-engineer.md` | Knowledge Graph Engineer | `data-ai/knowledge-graph-engineer.md` |
| 4 | `engineering/engineering-orgscript-engineer.md` | OrgScript Engineer | `specialized/orgscript-engineer.md` |
| 5 | `engineering/engineering-pdf-engine-architect.md` | PDF Engine Architect | `specialized/pdf-engine-architect.md` |
| 6 | `engineering/engineering-platform-engineer.md` | Platform Engineer | `devops/platform-engineer.md` |
| 7 | `engineering/engineering-section-508-specialist.md` | Section 508 Accessibility Specialist | `frontend/section-508-specialist.md` |
| 8 | `engineering/engineering-servicenow-developer-mentor.md` | ServiceNow Developer & Mentor | `integration/servicenow-developer-mentor.md` |
| 9 | `engineering/engineering-universal-document-compiler.md` | Universal Document Compiler | `specialized/universal-document-compiler.md` |
| 10 | `game-development/blender/blender-addon-engineer.md` | Blender Add-on Engineer | `game-development/blender-addon-engineer.md` |
| 11 | `game-development/godot/godot-gameplay-scripter.md` | Godot Gameplay Scripter | `game-development/godot-gameplay-scripter.md` |
| 12 | `game-development/godot/godot-multiplayer-engineer.md` | Godot Multiplayer Engineer | `game-development/godot-multiplayer-engineer.md` |
| 13 | `game-development/godot/godot-shader-developer.md` | Godot Shader Developer | `game-development/godot-shader-developer.md` |
| 14 | `game-development/roblox-studio/roblox-avatar-creator.md` | Roblox Avatar Creator | `game-development/roblox-avatar-creator.md` |
| 15 | `game-development/roblox-studio/roblox-experience-designer.md` | Roblox Experience Designer | `game-development/roblox-experience-designer.md` |
| 16 | `game-development/roblox-studio/roblox-systems-scripter.md` | Roblox Systems Scripter | `game-development/roblox-systems-scripter.md` |
| 17 | `game-development/unity/unity-architect.md` | Unity Architect | `game-development/unity-architect.md` |
| 18 | `game-development/unity/unity-editor-tool-developer.md` | Unity Editor Tool Developer | `game-development/unity-editor-tool-developer.md` |
| 19 | `game-development/unity/unity-multiplayer-engineer.md` | Unity Multiplayer Engineer | `game-development/unity-multiplayer-engineer.md` |
| 20 | `game-development/unity/unity-shader-graph-artist.md` | Unity Shader Graph Artist | `game-development/unity-shader-graph-artist.md` |
| 21 | `game-development/unreal-engine/unreal-multiplayer-architect.md` | Unreal Multiplayer Architect | `game-development/unreal-multiplayer-architect.md` |
| 22 | `game-development/unreal-engine/unreal-systems-engineer.md` | Unreal Systems Engineer | `game-development/unreal-systems-engineer.md` |
| 23 | `game-development/unreal-engine/unreal-technical-artist.md` | Unreal Technical Artist | `game-development/unreal-technical-artist.md` |
| 24 | `game-development/unreal-engine/unreal-world-builder.md` | Unreal World Builder | `game-development/unreal-world-builder.md` |
| 25 | `gis/gis-3d-scene-developer.md` | 3D & Scene Developer | `specialized/gis-3d-scene-developer.md` |
| 26 | `marketing/marketing-developer-community-builder.md` | Developer Community Builder | `business/developer-community-builder.md` |
| 27 | `product/product-dx-engineer.md` | DX Engineer | `business/dx-engineer.md` |
| 28 | `project-management/project-manager-senior.md` | Senior Project Manager | `business/project-manager-senior.md` |
| 29 | `research/research-synthesist.md` | Research Synthesist | `specialized/research-synthesist.md` |
| 30 | `security/security-ai-generated-code-auditor.md` | AI-Generated Code Security Auditor | `security/ai-generated-code-auditor.md` |
| 31 | `security/security-secrets-credential-engineer.md` | Secrets & Credential Hygiene Engineer | `security/secrets-credential-engineer.md` |
| 32 | `specialized/specialized-focus-music-architect.md` | Focus Music Architect | `specialized/focus-music-architect.md` |
| 33 | `specialized/specialized-master-plan-architect.md` | Master Plan Architect | `specialized/master-plan-architect.md` |
| 34 | `specialized/zk-steward.md` | ZK Steward | `specialized/zk-steward.md` |
| 35 | `testing/testing-workflow-optimizer.md` | Workflow Optimizer | `business/workflow-optimizer.md` |

> 其中 4 个（`zk-steward`、`orgscript-engineer`、`workflow-optimizer`、`project-manager-senior`）是**首轮 slug 撞车误配导致漏建**、经主题一致性核查后补建。


## 三、slug 撞车误配的修正（5 例）

以下 5 个上游代理，首轮按 slug 命中了**主题完全不同**的本地文件。v3.0 做了两步修正：① 把本地文件重命名为与其**真实主题**相符的 slug；② 按上游主题补建/重映射到正确的 slug。

| 上游代理 | 首轮误配到 | 本地文件真实主题 | v3.0 修正后 |
|---------|-----------|----------------|-----------|
| `specialized/zk-steward.md`（卢曼 Zettelkasten 知识库管家） | `blockchain/zk-steward.md` | 零知识证明管家 | 本地重命名 → `blockchain/zero-knowledge-steward.md`；上游补建 → `specialized/zk-steward.md` |
| `engineering/engineering-orgscript-engineer.md`（OrgScript 业务过程 DSL） | `specialized/orgscript-engineer.md` | Emacs Org-mode 生产力 | 本地重命名 → `specialized/emacs-org-mode-engineer.md`；上游补建 → `specialized/orgscript-engineer.md` |
| `testing/testing-workflow-optimizer.md`（业务流程优化/RPA） | `quality/workflow-optimizer.md` | 测试流程优化 | 本地重命名 → `quality/test-workflow-optimizer.md`；上游补建 → `business/workflow-optimizer.md` |
| `project-management/project-manager-senior.md`（规格→任务的技术 PM） | `business/project-manager-senior.md` | 项目群/PMO 管理 | 本地重命名 → `business/program-manager.md`；上游补建 → `business/project-manager-senior.md` |
| `gis/gis-qa-engineer.md`（GIS 数据质量） | `quality/qa-engineer.md` | 通用软件 QA | 重映射 → `quality/gis-qa-engineer.md`（该文件此前被误判为孤立项） |


## 四、去重的冗余代理（7 个）

**（1）同 slug 双份并存（4 组）**：v2.0 中同一 slug 在两个目录各存一份，内容不同。v3.0 保留结构化高质量版：

| 移除 | 保留 |
|------|------|
| `business/grant-writer.md` | `specialized/grant-writer.md` |
| `business/government-digital-presales-consultant.md` | `specialized/government-digital-presales-consultant.md` |
| `data-ai/data-consolidation-agent.md` | `specialized/data-consolidation-agent.md` |
| `data-ai/voice-ai-integration-engineer.md` | `specialized/voice-ai-integration-engineer.md` |

**（2）同主题孪生并存（3 组）**：v2.0 中以 `-specialized` 后缀复制出的一份，与正体主题完全重合（H1 相同）。v3.0 保留已同步的正体：

| 移除 | 保留 |
|------|------|
| `specialized/narrative-designer-specialized.md` | `specialized/narrative-designer.md` |
| `specialized/level-designer-specialized.md` | `specialized/level-designer.md` |
| `specialized/technical-artist-specialized.md` | `specialized/technical-artist.md` |


## 五、逐一对照表（上游 282 → AgentKit v3.0）

| # | 上游路径 | 名称 | 映射性质 | v3.0 落位 |
|---|---------|------|---------|----------|
| | **【academic · Academic】** | | | |
| 1 | `academic/academic-anthropologist.md` | Anthropologist | 精确同名 | `specialized/anthropologist.md` |
| 2 | `academic/academic-geographer.md` | Geographer | 精确同名 | `specialized/geographer.md` |
| 3 | `academic/academic-historian.md` | Historian | 精确同名 | `specialized/historian.md` |
| 4 | `academic/academic-narratologist.md` | Narratologist | 精确同名 | `specialized/narratologist.md` |
| 5 | `academic/academic-psychologist.md` | Psychologist | 重命名 | `specialized/psychologist-academic.md` |
| 6 | `academic/academic-statistician.md` | Statistician | 精确同名 | `data-ai/statistician.md` |
| | **【design · Design】** | | | |
| 7 | `design/design-brand-guardian.md` | Brand Guardian | 精确同名 | `frontend/brand-guardian.md` |
| 8 | `design/design-image-prompt-engineer.md` | Image Prompt Engineer | 精确同名 | `frontend/image-prompt-engineer.md` |
| 9 | `design/design-inclusive-visuals-specialist.md` | Inclusive Visuals Specialist | 精确同名 | `frontend/inclusive-visuals-specialist.md` |
| 10 | `design/design-persona-walkthrough.md` | Persona Walkthrough Specialist | 精确同名 | `frontend/persona-walkthrough.md` |
| 11 | `design/design-ui-designer.md` | UI Designer | 精确同名 | `frontend/ui-designer.md` |
| 12 | `design/design-ui-finish-gate-reviewer.md` | UI Finish-Gate Reviewer | 精确同名 | `frontend/ui-finish-gate-reviewer.md` |
| 13 | `design/design-ux-architect.md` | UX Architect | 精确同名 | `frontend/ux-architect.md` |
| 14 | `design/design-ux-researcher.md` | UX Researcher | 精确同名 | `frontend/ux-researcher.md` |
| 15 | `design/design-visual-storyteller.md` | Visual Storyteller | 精确同名 | `frontend/visual-storyteller.md` |
| 16 | `design/design-whimsy-injector.md` | Whimsy Injector | 精确同名 | `frontend/whimsy-injector.md` |
| | **【engineering · Engineering】** | | | |
| 17 | `engineering/engineering-ai-data-remediation-engineer.md` | AI Data Remediation Engineer | 精确同名 | `data-ai/ai-data-remediation-engineer.md` |
| 18 | `engineering/engineering-ai-engineer.md` | AI Engineer | 精确同名 | `data-ai/ai-engineer.md` |
| 19 | `engineering/engineering-api-platform-engineer.md` | API Platform Engineer | 精确同名 | `integration/api-platform-engineer.md` |
| 20 | `engineering/engineering-ats-validator-architect.md` | ATS Validator Architect | **v3.0 补齐** | `integration/ats-validator-architect.md` |
| 21 | `engineering/engineering-autonomous-optimization-architect.md` | Autonomous Optimization Architect | 精确同名 | `architecture/autonomous-optimization-architect.md` |
| 22 | `engineering/engineering-backend-architect.md` | Backend Architect | 精确同名 | `architecture/backend-architect.md` |
| 23 | `engineering/engineering-china-network-engineer.md` | China Network Engineer | **v3.0 补齐** | `specialized/china-network-engineer.md` |
| 24 | `engineering/engineering-cms-developer.md` | CMS Developer | 精确同名 | `specialized/cms-developer.md` |
| 25 | `engineering/engineering-code-reviewer.md` | Code Reviewer | 精确同名 | `quality/code-reviewer.md` |
| 26 | `engineering/engineering-codebase-onboarding-engineer.md` | Codebase Onboarding Engineer | 精确同名 | `specialized/codebase-onboarding-engineer.md` |
| 27 | `engineering/engineering-data-engineer.md` | Data Engineer | 精确同名 | `data-ai/data-engineer.md` |
| 28 | `engineering/engineering-data-visualization-engineer.md` | Data Visualization Engineer | 精确同名 | `data-ai/data-visualization-engineer.md` |
| 29 | `engineering/engineering-database-optimizer.md` | Database Optimizer | 精确同名 | `database/database-optimizer.md` |
| 30 | `engineering/engineering-database-reliability-engineer.md` | Database Reliability Engineer | 精确同名 | `database/database-reliability-engineer.md` |
| 31 | `engineering/engineering-desktop-app-engineer.md` | Desktop App Engineer | 精确同名 | `specialized/desktop-app-engineer.md` |
| 32 | `engineering/engineering-developer-tooling-engineer.md` | Developer Tooling Engineer | 精确同名 | `specialized/developer-tooling-engineer.md` |
| 33 | `engineering/engineering-devops-automator.md` | DevOps Automator | 精确同名 | `devops/devops-automator.md` |
| 34 | `engineering/engineering-drupal-performance.md` | Drupal Performance Engineer | 精确同名 | `specialized/drupal-performance.md` |
| 35 | `engineering/engineering-drupal-shopping-cart.md` | Drupal Shopping Cart Engineer | 精确同名 | `specialized/drupal-shopping-cart.md` |
| 36 | `engineering/engineering-email-intelligence-engineer.md` | Email Intelligence Engineer | 精确同名 | `specialized/email-intelligence-engineer.md` |
| 37 | `engineering/engineering-embedded-firmware-engineer.md` | Embedded Firmware Engineer | 精确同名 | `specialized/embedded-firmware-engineer.md` |
| 38 | `engineering/engineering-feishu-integration-developer.md` | Feishu Integration Developer | 精确同名 | `specialized/feishu-integration-developer.md` |
| 39 | `engineering/engineering-filament-optimization-specialist.md` | Filament Optimization Specialist | 精确同名 | `specialized/filament-optimization-specialist.md` |
| 40 | `engineering/engineering-finops-engineer.md` | FinOps Engineer | 精确同名 | `devops/finops-engineer.md` |
| 41 | `engineering/engineering-frontend-developer.md` | Frontend Developer | 精确同名 | `frontend/frontend-developer.md` |
| 42 | `engineering/engineering-gaussdb-expert.md` | GaussDB Expert Engineer | 精确同名 | `database/gaussdb-expert.md` |
| 43 | `engineering/engineering-git-workflow-master.md` | Git Workflow Master | 精确同名 | `devops/git-workflow-master.md` |
| 44 | `engineering/engineering-i18n-engineer.md` | Internationalization Engineer | 重命名 | `frontend/i18n-specialist.md` |
| 45 | `engineering/engineering-identity-access-engineer.md` | Identity & Access Engineer | 精确同名 | `security/identity-access-engineer.md` |
| 46 | `engineering/engineering-incident-response-commander.md` | Incident Response Commander | 精确同名 | `devops/incident-response-commander.md` |
| 47 | `engineering/engineering-iot-fleet-engineer.md` | IoT Fleet Engineer | 精确同名 | `specialized/iot-fleet-engineer.md` |
| 48 | `engineering/engineering-it-service-manager.md` | IT Service Manager | 精确同名 | `specialized/it-service-manager.md` |
| 49 | `engineering/engineering-knowledge-graph-engineer.md` | Knowledge Graph Engineer | **v3.0 补齐** | `data-ai/knowledge-graph-engineer.md` |
| 50 | `engineering/engineering-llm-post-training-engineer.md` | LLM Post-Training Engineer | 精确同名 | `data-ai/llm-post-training-engineer.md` |
| 51 | `engineering/engineering-minimal-change-engineer.md` | Minimal Change Engineer | 精确同名 | `specialized/minimal-change-engineer.md` |
| 52 | `engineering/engineering-mobile-app-builder.md` | Mobile App Builder | 精确同名 | `specialized/mobile-app-builder.md` |
| 53 | `engineering/engineering-mobile-release-engineer.md` | Mobile Release Engineer | 精确同名 | `devops/mobile-release-engineer.md` |
| 54 | `engineering/engineering-multi-agent-systems-architect.md` | Multi-Agent Systems Architect | 精确同名 | `data-ai/multi-agent-systems-architect.md` |
| 55 | `engineering/engineering-network-engineer.md` | Network Engineer | 精确同名 | `specialized/network-engineer.md` |
| 56 | `engineering/engineering-orgscript-engineer.md` | OrgScript Engineer | **v3.0 补齐(撞车修正)** | `specialized/orgscript-engineer.md` |
| 57 | `engineering/engineering-payments-billing-engineer.md` | Payments & Billing Engineer | 精确同名 | `integration/payments-billing-engineer.md` |
| 58 | `engineering/engineering-pdf-engine-architect.md` | PDF Engine Architect | **v3.0 补齐** | `specialized/pdf-engine-architect.md` |
| 59 | `engineering/engineering-platform-engineer.md` | Platform Engineer | **v3.0 补齐** | `devops/platform-engineer.md` |
| 60 | `engineering/engineering-privacy-engineer.md` | Privacy Engineer | 精确同名 | `security/privacy-engineer.md` |
| 61 | `engineering/engineering-prompt-engineer.md` | Prompt Engineer | 精确同名 | `data-ai/prompt-engineer.md` |
| 62 | `engineering/engineering-rag-pipeline-engineer.md` | RAG Pipeline Engineer | 精确同名 | `data-ai/rag-pipeline-engineer.md` |
| 63 | `engineering/engineering-rapid-prototyper.md` | Rapid Prototyper | 精确同名 | `specialized/rapid-prototyper.md` |
| 64 | `engineering/engineering-realtime-collaboration-engineer.md` | Realtime Collaboration Engineer | 精确同名 | `integration/realtime-collaboration-engineer.md` |
| 65 | `engineering/engineering-rust-refactoring-specialist.md` | Rust Refactoring Specialist | 精确同名 | `quality/rust-refactoring-specialist.md` |
| 66 | `engineering/engineering-search-relevance-engineer.md` | Search Relevance Engineer | 精确同名 | `integration/search-relevance-engineer.md` |
| 67 | `engineering/engineering-section-508-specialist.md` | Section 508 Accessibility Specialist | **v3.0 补齐** | `frontend/section-508-specialist.md` |
| 68 | `engineering/engineering-senior-developer.md` | Senior Developer | 精确同名 | `specialized/senior-developer.md` |
| 69 | `engineering/engineering-servicenow-developer-mentor.md` | ServiceNow Developer & Mentor | **v3.0 补齐** | `integration/servicenow-developer-mentor.md` |
| 70 | `engineering/engineering-software-architect.md` | Software Architect | 精确同名 | `architecture/software-architect.md` |
| 71 | `engineering/engineering-solidity-smart-contract-engineer.md` | Solidity Smart Contract Engineer | 精确同名 | `blockchain/solidity-smart-contract-engineer.md` |
| 72 | `engineering/engineering-sre.md` | SRE (Site Reliability Engineer) | 重命名 | `devops/sre-engineer.md` |
| 73 | `engineering/engineering-technical-writer.md` | Technical Writer | 精确同名 | `specialized/technical-writer.md` |
| 74 | `engineering/engineering-universal-document-compiler.md` | Universal Document Compiler | **v3.0 补齐** | `specialized/universal-document-compiler.md` |
| 75 | `engineering/engineering-uswds-developer.md` | USWDS Developer | 精确同名 | `frontend/uswds-developer.md` |
| 76 | `engineering/engineering-video-streaming-engineer.md` | Video Streaming Engineer | 精确同名 | `specialized/video-streaming-engineer.md` |
| 77 | `engineering/engineering-voice-ai-integration-engineer.md` | Voice AI Integration Engineer | 精确同名 | `specialized/voice-ai-integration-engineer.md` |
| 78 | `engineering/engineering-webassembly-engineer.md` | WebAssembly Engineer | 精确同名 | `specialized/webassembly-engineer.md` |
| 79 | `engineering/engineering-wechat-mini-program-developer.md` | WeChat Mini Program Developer | 精确同名 | `specialized/wechat-mini-program-developer.md` |
| 80 | `engineering/engineering-wordpress-performance.md` | WordPress Performance Engineer | 精确同名 | `specialized/wordpress-performance.md` |
| 81 | `engineering/engineering-wordpress-shopping-cart.md` | WordPress Shopping Cart Engineer | 精确同名 | `specialized/wordpress-shopping-cart.md` |
| | **【finance · Finance】** | | | |
| 82 | `finance/finance-bookkeeper-controller.md` | Bookkeeper & Controller | 精确同名 | `business/bookkeeper-controller.md` |
| 83 | `finance/finance-financial-analyst.md` | Financial Analyst | 精确同名 | `business/financial-analyst.md` |
| 84 | `finance/finance-fpa-analyst.md` | FP&A Analyst | 精确同名 | `business/fpa-analyst.md` |
| 85 | `finance/finance-investment-researcher.md` | Investment Researcher | 精确同名 | `business/investment-researcher.md` |
| 86 | `finance/finance-tax-strategist.md` | Tax Strategist | 精确同名 | `business/tax-strategist.md` |
| | **【game-development · Game Development】** | | | |
| 87 | `game-development/blender/blender-addon-engineer.md` | Blender Add-on Engineer | **v3.0 补齐** | `game-development/blender-addon-engineer.md` |
| 88 | `game-development/economy-designer.md` | Economy Designer | 精确同名 | `specialized/economy-designer.md` |
| 89 | `game-development/game-audio-engineer.md` | Game Audio Engineer | 重命名 | `specialized/game-audio-engineer-specialized.md` |
| 90 | `game-development/game-designer.md` | Game Designer | 重命名 | `specialized/game-designer-specialized.md` |
| 91 | `game-development/godot/godot-gameplay-scripter.md` | Godot Gameplay Scripter | **v3.0 补齐** | `game-development/godot-gameplay-scripter.md` |
| 92 | `game-development/godot/godot-multiplayer-engineer.md` | Godot Multiplayer Engineer | **v3.0 补齐** | `game-development/godot-multiplayer-engineer.md` |
| 93 | `game-development/godot/godot-shader-developer.md` | Godot Shader Developer | **v3.0 补齐** | `game-development/godot-shader-developer.md` |
| 94 | `game-development/level-designer.md` | Level Designer | 精确同名 | `specialized/level-designer.md` |
| 95 | `game-development/narrative-designer.md` | Narrative Designer | 精确同名 | `specialized/narrative-designer.md` |
| 96 | `game-development/roblox-studio/roblox-avatar-creator.md` | Roblox Avatar Creator | **v3.0 补齐** | `game-development/roblox-avatar-creator.md` |
| 97 | `game-development/roblox-studio/roblox-experience-designer.md` | Roblox Experience Designer | **v3.0 补齐** | `game-development/roblox-experience-designer.md` |
| 98 | `game-development/roblox-studio/roblox-systems-scripter.md` | Roblox Systems Scripter | **v3.0 补齐** | `game-development/roblox-systems-scripter.md` |
| 99 | `game-development/technical-artist.md` | Technical Artist | 精确同名 | `specialized/technical-artist.md` |
| 100 | `game-development/unity/unity-architect.md` | Unity Architect | **v3.0 补齐** | `game-development/unity-architect.md` |
| 101 | `game-development/unity/unity-editor-tool-developer.md` | Unity Editor Tool Developer | **v3.0 补齐** | `game-development/unity-editor-tool-developer.md` |
| 102 | `game-development/unity/unity-multiplayer-engineer.md` | Unity Multiplayer Engineer | **v3.0 补齐** | `game-development/unity-multiplayer-engineer.md` |
| 103 | `game-development/unity/unity-shader-graph-artist.md` | Unity Shader Graph Artist | **v3.0 补齐** | `game-development/unity-shader-graph-artist.md` |
| 104 | `game-development/unreal-engine/unreal-multiplayer-architect.md` | Unreal Multiplayer Architect | **v3.0 补齐** | `game-development/unreal-multiplayer-architect.md` |
| 105 | `game-development/unreal-engine/unreal-systems-engineer.md` | Unreal Systems Engineer | **v3.0 补齐** | `game-development/unreal-systems-engineer.md` |
| 106 | `game-development/unreal-engine/unreal-technical-artist.md` | Unreal Technical Artist | **v3.0 补齐** | `game-development/unreal-technical-artist.md` |
| 107 | `game-development/unreal-engine/unreal-world-builder.md` | Unreal World Builder | **v3.0 补齐** | `game-development/unreal-world-builder.md` |
| | **【gis · GIS】** | | | |
| 108 | `gis/gis-3d-scene-developer.md` | 3D & Scene Developer | **v3.0 补齐** | `specialized/gis-3d-scene-developer.md` |
| 109 | `gis/gis-analyst.md` | GIS Analyst | 精确同名 | `specialized/gis-analyst.md` |
| 110 | `gis/gis-bim-specialist.md` | BIM/GIS Specialist | 精确同名 | `specialized/gis-bim-specialist.md` |
| 111 | `gis/gis-cartography-designer.md` | Cartography Designer | 精确同名 | `specialized/gis-cartography-designer.md` |
| 112 | `gis/gis-drone-reality-mapping.md` | Drone/Reality Mapping Specialist | 精确同名 | `specialized/gis-drone-reality-mapping.md` |
| 113 | `gis/gis-geoai-ml-engineer.md` | GeoAI/ML Engineer | 精确同名 | `data-ai/geoai-ml-engineer.md` |
| 114 | `gis/gis-geoprocessing-specialist.md` | Geoprocessing Specialist | 精确同名 | `specialized/gis-geoprocessing-specialist.md` |
| 115 | `gis/gis-qa-engineer.md` | GIS QA Engineer | 撞车重映射修正 | `quality/gis-qa-engineer.md` |
| 116 | `gis/gis-solution-engineer.md` | Solution Engineer | 精确同名 | `specialized/gis-solution-engineer.md` |
| 117 | `gis/gis-spatial-data-engineer.md` | Spatial Data Engineer | 精确同名 | `data-ai/spatial-data-engineer.md` |
| 118 | `gis/gis-spatial-data-scientist.md` | Spatial Data Scientist | 精确同名 | `data-ai/spatial-data-scientist.md` |
| 119 | `gis/gis-technical-consultant.md` | Technical Consultant | 精确同名 | `specialized/gis-technical-consultant.md` |
| 120 | `gis/gis-web-gis-developer.md` | Web GIS Developer | 精确同名 | `specialized/gis-web-gis-developer.md` |
| | **【healthcare · Healthcare】** | | | |
| 121 | `healthcare/healthcare-clinical-evidence-agent.md` | Clinical Evidence Agent | 精确同名 | `specialized/healthcare-clinical-evidence-agent.md` |
| 122 | `healthcare/healthcare-innovation-strategist.md` | Healthcare Innovation Strategist | 精确同名 | `specialized/healthcare-innovation-strategist.md` |
| 123 | `healthcare/healthcare-sovereign-health-systems-agent.md` | Sovereign Health Systems Agent | 精确同名 | `specialized/healthcare-sovereign-health-systems-agent.md` |
| | **【marketing · Marketing】** | | | |
| 124 | `marketing/marketing-aeo-foundations.md` | AEO Foundations Architect | 精确同名 | `business/aeo-foundations.md` |
| 125 | `marketing/marketing-agentic-search-optimizer.md` | Agentic Search Optimizer | 精确同名 | `business/agentic-search-optimizer.md` |
| 126 | `marketing/marketing-ai-citation-strategist.md` | AI Citation Strategist | 精确同名 | `business/ai-citation-strategist.md` |
| 127 | `marketing/marketing-app-store-optimizer.md` | App Store Optimizer | 精确同名 | `business/app-store-optimizer.md` |
| 128 | `marketing/marketing-baidu-seo-specialist.md` | Baidu SEO Specialist | 精确同名 | `business/baidu-seo-specialist.md` |
| 129 | `marketing/marketing-bilibili-content-strategist.md` | Bilibili Content Strategist | 精确同名 | `business/bilibili-content-strategist.md` |
| 130 | `marketing/marketing-book-co-author.md` | Book Co-Author | 精确同名 | `business/book-co-author.md` |
| 131 | `marketing/marketing-carousel-growth-engine.md` | Carousel Growth Engine | 精确同名 | `business/carousel-growth-engine.md` |
| 132 | `marketing/marketing-china-ecommerce-operator.md` | China E-Commerce Operator | 精确同名 | `business/china-ecommerce-operator.md` |
| 133 | `marketing/marketing-china-market-localization-strategist.md` | China Market Localization Strategist | 精确同名 | `business/china-market-localization-strategist.md` |
| 134 | `marketing/marketing-content-creator.md` | Content Creator | 重命名 | `business/content-creator-marketing.md` |
| 135 | `marketing/marketing-cross-border-ecommerce.md` | Cross-Border E-Commerce Specialist | 精确同名 | `business/cross-border-ecommerce.md` |
| 136 | `marketing/marketing-developer-community-builder.md` | Developer Community Builder | **v3.0 补齐** | `business/developer-community-builder.md` |
| 137 | `marketing/marketing-douyin-strategist.md` | Douyin Strategist | 精确同名 | `business/douyin-strategist.md` |
| 138 | `marketing/marketing-email-strategist.md` | Email Marketing Strategist | 精确同名 | `business/email-strategist.md` |
| 139 | `marketing/marketing-global-podcast-strategist.md` | Global Podcast Strategist | 精确同名 | `business/global-podcast-strategist.md` |
| 140 | `marketing/marketing-growth-hacker.md` | Growth Hacker | 精确同名 | `business/growth-hacker.md` |
| 141 | `marketing/marketing-instagram-curator.md` | Instagram Curator | 精确同名 | `business/instagram-curator.md` |
| 142 | `marketing/marketing-kuaishou-strategist.md` | Kuaishou Strategist | 精确同名 | `business/kuaishou-strategist.md` |
| 143 | `marketing/marketing-linkedin-content-creator.md` | LinkedIn Content Creator | 精确同名 | `business/linkedin-content-creator.md` |
| 144 | `marketing/marketing-livestream-commerce-coach.md` | Livestream Commerce Coach | 精确同名 | `business/livestream-commerce-coach.md` |
| 145 | `marketing/marketing-multi-platform-publisher.md` | Multi-Platform Publisher | 精确同名 | `business/multi-platform-publisher.md` |
| 146 | `marketing/marketing-podcast-strategist.md` | Podcast Strategist | 精确同名 | `business/podcast-strategist.md` |
| 147 | `marketing/marketing-pr-communications-manager.md` | PR & Communications Manager | 精确同名 | `business/pr-communications-manager.md` |
| 148 | `marketing/marketing-private-domain-operator.md` | Private Domain Operator | 精确同名 | `business/private-domain-operator.md` |
| 149 | `marketing/marketing-reddit-community-builder.md` | Reddit Community Builder | 精确同名 | `business/reddit-community-builder.md` |
| 150 | `marketing/marketing-seo-specialist.md` | SEO Specialist | 精确同名 | `frontend/seo-specialist.md` |
| 151 | `marketing/marketing-short-video-editing-coach.md` | Short-Video Editing Coach | 精确同名 | `business/short-video-editing-coach.md` |
| 152 | `marketing/marketing-social-media-strategist.md` | Social Media Strategist | 精确同名 | `business/social-media-strategist.md` |
| 153 | `marketing/marketing-tiktok-strategist.md` | TikTok Strategist | 精确同名 | `business/tiktok-strategist.md` |
| 154 | `marketing/marketing-twitter-engager.md` | Twitter Engager | 精确同名 | `business/twitter-engager.md` |
| 155 | `marketing/marketing-video-optimization-specialist.md` | Video Optimization Specialist | 精确同名 | `business/video-optimization-specialist.md` |
| 156 | `marketing/marketing-wechat-official-account.md` | WeChat Official Account Manager | 精确同名 | `business/wechat-official-account.md` |
| 157 | `marketing/marketing-weibo-strategist.md` | Weibo Strategist | 精确同名 | `business/weibo-strategist.md` |
| 158 | `marketing/marketing-x-twitter-intelligence-analyst.md` | X/Twitter Intelligence Analyst | 精确同名 | `business/x-twitter-intelligence-analyst.md` |
| 159 | `marketing/marketing-xiaohongshu-specialist.md` | Xiaohongshu Specialist | 精确同名 | `business/xiaohongshu-specialist.md` |
| 160 | `marketing/marketing-zhihu-strategist.md` | Zhihu Strategist | 精确同名 | `business/zhihu-strategist.md` |
| | **【paid-media · Paid Media】** | | | |
| 161 | `paid-media/paid-media-auditor.md` | Paid Media Auditor | 精确同名 | `business/paid-media-auditor.md` |
| 162 | `paid-media/paid-media-creative-strategist.md` | Ad Creative Strategist | 精确同名 | `business/paid-media-creative-strategist.md` |
| 163 | `paid-media/paid-media-paid-social-strategist.md` | Paid Social Strategist | 精确同名 | `business/paid-social-strategist.md` |
| 164 | `paid-media/paid-media-ppc-strategist.md` | PPC Campaign Strategist | 精确同名 | `business/ppc-strategist.md` |
| 165 | `paid-media/paid-media-programmatic-buyer.md` | Programmatic & Display Buyer | 精确同名 | `business/paid-media-programmatic-buyer.md` |
| 166 | `paid-media/paid-media-search-query-analyst.md` | Search Query Analyst | 精确同名 | `business/paid-media-search-query-analyst.md` |
| 167 | `paid-media/paid-media-tracking-specialist.md` | Tracking & Measurement Specialist | 精确同名 | `business/paid-media-tracking-specialist.md` |
| | **【product · Product】** | | | |
| 168 | `product/product-behavioral-nudge-engine.md` | Behavioral Nudge Engine | 精确同名 | `business/behavioral-nudge-engine.md` |
| 169 | `product/product-dx-engineer.md` | DX Engineer | **v3.0 补齐** | `business/dx-engineer.md` |
| 170 | `product/product-feedback-synthesizer.md` | Feedback Synthesizer | 精确同名 | `business/feedback-synthesizer.md` |
| 171 | `product/product-manager.md` | Product Manager | 精确同名 | `business/product-manager.md` |
| 172 | `product/product-sprint-prioritizer.md` | Sprint Prioritizer | 精确同名 | `business/sprint-prioritizer.md` |
| 173 | `product/product-trend-researcher.md` | Trend Researcher | 精确同名 | `business/trend-researcher.md` |
| | **【project-management · Project Management】** | | | |
| 174 | `project-management/project-management-experiment-tracker.md` | Experiment Tracker | 精确同名 | `business/experiment-tracker.md` |
| 175 | `project-management/project-management-jira-workflow-steward.md` | Jira Workflow Steward | 精确同名 | `business/jira-workflow-steward.md` |
| 176 | `project-management/project-management-meeting-notes-specialist.md` | Meeting Notes Specialist | 精确同名 | `business/meeting-notes-specialist.md` |
| 177 | `project-management/project-management-project-shepherd.md` | Project Shepherd | 精确同名 | `business/project-shepherd.md` |
| 178 | `project-management/project-management-studio-operations.md` | Studio Operations | 精确同名 | `business/studio-operations.md` |
| 179 | `project-management/project-management-studio-producer.md` | Studio Producer | 精确同名 | `business/studio-producer.md` |
| 180 | `project-management/project-manager-senior.md` | Senior Project Manager | **v3.0 补齐(撞车修正)** | `business/project-manager-senior.md` |
| | **【research · Research】** | | | |
| 181 | `research/research-synthesist.md` | Research Synthesist | **v3.0 补齐** | `specialized/research-synthesist.md` |
| | **【sales · Sales】** | | | |
| 182 | `sales/sales-account-strategist.md` | Account Strategist | 精确同名 | `business/sales-account-strategist.md` |
| 183 | `sales/sales-coach.md` | Sales Coach | 精确同名 | `business/sales-coach.md` |
| 184 | `sales/sales-deal-strategist.md` | Deal Strategist | 精确同名 | `business/sales-deal-strategist.md` |
| 185 | `sales/sales-discovery-coach.md` | Discovery Coach | 精确同名 | `business/sales-discovery-coach.md` |
| 186 | `sales/sales-engineer.md` | Sales Engineer | 精确同名 | `business/sales-engineer.md` |
| 187 | `sales/sales-offer-lead-gen-strategist.md` | Offer & Lead Gen Strategist | 精确同名 | `business/sales-offer-lead-gen-strategist.md` |
| 188 | `sales/sales-outbound-strategist.md` | Outbound Strategist | 精确同名 | `business/sales-outbound-strategist.md` |
| 189 | `sales/sales-pipeline-analyst.md` | Pipeline Analyst | 精确同名 | `business/sales-pipeline-analyst.md` |
| 190 | `sales/sales-proposal-strategist.md` | Proposal Strategist | 精确同名 | `business/sales-proposal-strategist.md` |
| | **【security · Security】** | | | |
| 191 | `security/security-ai-generated-code-auditor.md` | AI-Generated Code Security Auditor | **v3.0 补齐** | `security/ai-generated-code-auditor.md` |
| 192 | `security/security-appsec-engineer.md` | Application Security Engineer | 精确同名 | `security/appsec-engineer.md` |
| 193 | `security/security-architect.md` | Security Architect | 精确同名 | `security/security-architect.md` |
| 194 | `security/security-blockchain-security-auditor.md` | Blockchain Security Auditor | 精确同名 | `security/blockchain-security-auditor.md` |
| 195 | `security/security-cloud-security-architect.md` | Cloud Security Architect | 精确同名 | `security/cloud-security-architect.md` |
| 196 | `security/security-compliance-auditor.md` | Compliance Auditor | 精确同名 | `quality/compliance-auditor.md` |
| 197 | `security/security-incident-responder.md` | Incident Responder | 精确同名 | `security/incident-responder.md` |
| 198 | `security/security-penetration-tester.md` | Penetration Tester | 重命名 | `security/pentester.md` |
| 199 | `security/security-secrets-credential-engineer.md` | Secrets & Credential Hygiene Engineer | **v3.0 补齐** | `security/secrets-credential-engineer.md` |
| 200 | `security/security-senior-secops.md` | Senior SecOps Engineer | 精确同名 | `security/senior-secops.md` |
| 201 | `security/security-threat-detection-engineer.md` | Threat Detection Engineer | 精确同名 | `security/threat-detection-engineer.md` |
| 202 | `security/security-threat-intelligence-analyst.md` | Threat Intelligence Analyst | 精确同名 | `security/threat-intelligence-analyst.md` |
| | **【spatial-computing · Spatial Computing】** | | | |
| 203 | `spatial-computing/macos-spatial-metal-engineer.md` | macOS Spatial/Metal Engineer | 精确同名 | `specialized/spatial-metal-engineer.md` |
| 204 | `spatial-computing/terminal-integration-specialist.md` | Terminal Integration Specialist | 精确同名 | `specialized/terminal-integration-specialist.md` |
| 205 | `spatial-computing/visionos-spatial-engineer.md` | visionOS Spatial Engineer | 精确同名 | `specialized/visionos-spatial-engineer.md` |
| 206 | `spatial-computing/xr-cockpit-interaction-specialist.md` | XR Cockpit Interaction Specialist | 精确同名 | `specialized/xr-cockpit-interaction-specialist.md` |
| 207 | `spatial-computing/xr-immersive-developer.md` | XR Immersive Developer | 精确同名 | `specialized/xr-immersive-developer.md` |
| 208 | `spatial-computing/xr-interface-architect.md` | XR Interface Architect | 精确同名 | `specialized/xr-interface-architect.md` |
| | **【specialized · Specialized】** | | | |
| 209 | `specialized/accounts-payable-agent.md` | Accounts Payable Agent | 精确同名 | `specialized/accounts-payable-agent.md` |
| 210 | `specialized/agentic-identity-trust.md` | Agentic Identity & Trust Architect | 精确同名 | `security/agentic-identity-trust.md` |
| 211 | `specialized/agents-orchestrator.md` | Agents Orchestrator | 精确同名 | `data-ai/agents-orchestrator.md` |
| 212 | `specialized/automation-governance-architect.md` | Automation Governance Architect | 精确同名 | `architecture/automation-governance-architect.md` |
| 213 | `specialized/business-strategist.md` | Business Strategist | 精确同名 | `specialized/business-strategist.md` |
| 214 | `specialized/change-management-consultant.md` | Change Management Consultant | 精确同名 | `specialized/change-management-consultant.md` |
| 215 | `specialized/chief-financial-officer.md` | Chief Financial Officer | 精确同名 | `specialized/chief-financial-officer.md` |
| 216 | `specialized/corporate-training-designer.md` | Corporate Training Designer | 精确同名 | `specialized/corporate-training-designer.md` |
| 217 | `specialized/customer-service.md` | Customer Service | 精确同名 | `specialized/customer-service.md` |
| 218 | `specialized/customer-success-manager.md` | Customer Success Manager | 精确同名 | `specialized/customer-success-manager.md` |
| 219 | `specialized/data-consolidation-agent.md` | Data Consolidation Agent | 精确同名 | `specialized/data-consolidation-agent.md` |
| 220 | `specialized/data-privacy-officer.md` | Data Privacy Officer | 精确同名 | `specialized/data-privacy-officer.md` |
| 221 | `specialized/esg-sustainability-officer.md` | ESG & Sustainability Officer | 精确同名 | `specialized/esg-sustainability-officer.md` |
| 222 | `specialized/government-digital-presales-consultant.md` | Government Digital Presales Consultant | 精确同名 | `specialized/government-digital-presales-consultant.md` |
| 223 | `specialized/grant-writer.md` | Grant Writer | 精确同名 | `specialized/grant-writer.md` |
| 224 | `specialized/healthcare-aging-parent-care-companion.md` | Aging Parent Care Companion | 精确同名 | `specialized/healthcare-aging-parent-care-companion.md` |
| 225 | `specialized/healthcare-customer-service.md` | Healthcare Customer Service | 精确同名 | `specialized/healthcare-customer-service.md` |
| 226 | `specialized/healthcare-marketing-compliance.md` | Healthcare Marketing Compliance Specialist | 精确同名 | `specialized/healthcare-marketing-compliance.md` |
| 227 | `specialized/hospitality-guest-services.md` | Hospitality Guest Services | 精确同名 | `specialized/hospitality-guest-services.md` |
| 228 | `specialized/hr-onboarding.md` | HR Onboarding | 精确同名 | `specialized/hr-onboarding.md` |
| 229 | `specialized/identity-graph-operator.md` | Identity Graph Operator | 精确同名 | `specialized/identity-graph-operator.md` |
| 230 | `specialized/language-translator.md` | Language Translator | 精确同名 | `specialized/language-translator.md` |
| 231 | `specialized/legal-billing-time-tracking.md` | Legal Billing & Time Tracking | 精确同名 | `specialized/legal-billing-time-tracking.md` |
| 232 | `specialized/legal-client-intake.md` | Legal Client Intake | 精确同名 | `specialized/legal-client-intake.md` |
| 233 | `specialized/legal-document-review.md` | Legal Document Review | 精确同名 | `specialized/legal-document-review.md` |
| 234 | `specialized/loan-officer-assistant.md` | Loan Officer Assistant | 精确同名 | `specialized/loan-officer-assistant.md` |
| 235 | `specialized/lsp-index-engineer.md` | LSP/Index Engineer | 精确同名 | `specialized/lsp-index-engineer.md` |
| 236 | `specialized/ma-integration-manager.md` | M&A Integration Manager | 精确同名 | `specialized/ma-integration-manager.md` |
| 237 | `specialized/medical-billing-coding-specialist.md` | Medical Billing & Coding Specialist | 精确同名 | `specialized/medical-billing-coding-specialist.md` |
| 238 | `specialized/operations-manager.md` | Operations Manager | 精确同名 | `specialized/operations-manager.md` |
| 239 | `specialized/organizational-psychologist.md` | Organizational Psychologist | 精确同名 | `specialized/organizational-psychologist.md` |
| 240 | `specialized/personal-growth-mentor.md` | Personal Growth Mentor | 精确同名 | `specialized/personal-growth-mentor.md` |
| 241 | `specialized/real-estate-buyer-seller.md` | Real Estate Buyer & Seller | 精确同名 | `specialized/real-estate-buyer-seller.md` |
| 242 | `specialized/recruitment-specialist.md` | Recruitment Specialist | 精确同名 | `specialized/recruitment-specialist.md` |
| 243 | `specialized/report-distribution-agent.md` | Report Distribution Agent | 精确同名 | `specialized/report-distribution-agent.md` |
| 244 | `specialized/resume-tailor.md` | Resume Tailor | 精确同名 | `specialized/resume-tailor.md` |
| 245 | `specialized/retail-customer-returns.md` | Retail Customer Returns | 精确同名 | `specialized/retail-customer-returns.md` |
| 246 | `specialized/sales-data-extraction-agent.md` | Sales Data Extraction Agent | 精确同名 | `specialized/sales-data-extraction-agent.md` |
| 247 | `specialized/sales-outreach.md` | Sales Outreach | 精确同名 | `specialized/sales-outreach.md` |
| 248 | `specialized/specialized-chief-of-staff.md` | Chief of Staff | 精确同名 | `specialized/specialized-chief-of-staff.md` |
| 249 | `specialized/specialized-civil-engineer.md` | Civil Engineer | 精确同名 | `specialized/civil-engineer.md` |
| 250 | `specialized/specialized-codebase-archaeologist.md` | Codebase Archaeologist | 精确同名 | `specialized/specialized-codebase-archaeologist.md` |
| 251 | `specialized/specialized-cultural-intelligence-strategist.md` | Cultural Intelligence Strategist | 精确同名 | `specialized/cultural-intelligence-strategist.md` |
| 252 | `specialized/specialized-developer-advocate.md` | Developer Advocate | 精确同名 | `specialized/developer-advocate.md` |
| 253 | `specialized/specialized-document-generator.md` | Document Generator | 精确同名 | `specialized/specialized-document-generator.md` |
| 254 | `specialized/specialized-fedramp-rmf-compliance.md` | FedRAMP & RMF Compliance Engineer | 精确同名 | `security/fedramp-rmf-compliance.md` |
| 255 | `specialized/specialized-focus-music-architect.md` | Focus Music Architect | **v3.0 补齐** | `specialized/focus-music-architect.md` |
| 256 | `specialized/specialized-french-consulting-market.md` | French Consulting Market Navigator | 精确同名 | `specialized/specialized-french-consulting-market.md` |
| 257 | `specialized/specialized-korean-business-navigator.md` | Korean Business Navigator | 精确同名 | `specialized/specialized-korean-business-navigator.md` |
| 258 | `specialized/specialized-master-plan-architect.md` | Master Plan Architect | **v3.0 补齐** | `specialized/master-plan-architect.md` |
| 259 | `specialized/specialized-mcp-builder.md` | MCP Builder | 精确同名 | `specialized/specialized-mcp-builder.md` |
| 260 | `specialized/specialized-model-qa.md` | Model QA Specialist | 精确同名 | `quality/model-qa.md` |
| 261 | `specialized/specialized-pricing-analyst.md` | Pricing Analyst | 精确同名 | `specialized/pricing-analyst.md` |
| 262 | `specialized/specialized-salesforce-architect.md` | Salesforce Architect | 精确同名 | `specialized/salesforce-architect.md` |
| 263 | `specialized/specialized-strategy-duel-agent.md` | Strategy Duel Agent | 精确同名 | `specialized/strategy-duel-agent.md` |
| 264 | `specialized/specialized-workflow-architect.md` | Workflow Architect | 精确同名 | `specialized/workflow-architect.md` |
| 265 | `specialized/study-abroad-advisor.md` | Study Abroad Advisor | 精确同名 | `specialized/study-abroad-advisor.md` |
| 266 | `specialized/supply-chain-strategist.md` | Supply Chain Strategist | 精确同名 | `specialized/supply-chain-strategist.md` |
| 267 | `specialized/zk-steward.md` | ZK Steward | **v3.0 补齐(撞车修正)** | `specialized/zk-steward.md` |
| | **【support · Support】** | | | |
| 268 | `support/support-analytics-reporter.md` | Analytics Reporter | 精确同名 | `business/analytics-reporter.md` |
| 269 | `support/support-executive-summary-generator.md` | Executive Summary Generator | 精确同名 | `business/executive-summary-generator.md` |
| 270 | `support/support-finance-tracker.md` | Finance Tracker | 精确同名 | `business/finance-tracker.md` |
| 271 | `support/support-infrastructure-maintainer.md` | Infrastructure Maintainer | 精确同名 | `devops/infrastructure-maintainer.md` |
| 272 | `support/support-legal-compliance-checker.md` | Legal Compliance Checker | 重命名 | `business/legal-compliance.md` |
| 273 | `support/support-support-responder.md` | Support Responder | 精确同名 | `business/support-responder.md` |
| | **【testing · Testing】** | | | |
| 274 | `testing/testing-accessibility-auditor.md` | Accessibility Auditor | 精确同名 | `quality/accessibility-auditor.md` |
| 275 | `testing/testing-api-tester.md` | API Tester | 精确同名 | `quality/api-tester.md` |
| 276 | `testing/testing-evidence-collector.md` | Evidence Collector | 精确同名 | `quality/evidence-collector.md` |
| 277 | `testing/testing-performance-benchmarker.md` | Performance Benchmarker | 精确同名 | `quality/performance-benchmarker.md` |
| 278 | `testing/testing-reality-checker.md` | Reality Checker | 精确同名 | `quality/reality-checker.md` |
| 279 | `testing/testing-test-automation-engineer.md` | Test Automation Engineer | 重命名 | `quality/test-automator.md` |
| 280 | `testing/testing-test-results-analyzer.md` | Test Results Analyzer | 精确同名 | `quality/test-results-analyzer.md` |
| 281 | `testing/testing-tool-evaluator.md` | Tool Evaluator | 精确同名 | `quality/tool-evaluator.md` |
| 282 | `testing/testing-workflow-optimizer.md` | Workflow Optimizer | **v3.0 补齐(撞车修正)** | `business/workflow-optimizer.md` |


## 六、本地自有代理（上游无，181 个）

| 分类 | 数量 |
|------|------|
| languages | 24 |
| frameworks | 20 |
| specialized | 18 |
| data-ai | 14 |
| integration | 14 |
| modernization | 14 |
| business | 13 |
| devops | 13 |
| architecture | 10 |
| frontend | 10 |
| database | 9 |
| quality | 8 |
| blockchain | 7 |
| security | 7 |

<details>
<summary>展开完整清单</summary>


**architecture**（10）：`api-architect`、`architect-reviewer`、`cloud-architect`、`data-pipeline-architect`、`database-architect`、`frontend-architect`、`kubernetes-architect`、`microservice-architect`、`mobile-architect`、`system-architect`


**blockchain**（7）：`chain-developer`、`defi-engineer`、`nft-developer`、`smart-contract-auditor`、`solidity-pro`、`web3-developer`、`zero-knowledge-steward`


**business**（13）：`business-analyst`、`chief-of-staff`、`content-strategist`、`customer-success`、`document-generator-business`、`documentation-writer`、`growth-hacker-marketing`、`hr-tech-specialist`、`marketing-automator`、`operations-optimizer`、`program-manager`、`sales-optimizer`、`seo-specialist-marketing`


**data-ai**（14）：`ai-safety-engineer`、`analytics-engineer`、`computer-vision`、`data-scientist`、`fine-tuning-specialist`、`llm-app-developer`、`ml-engineer`、`mlops-engineer`、`nlp-specialist`、`rag-specialist`、`recommendation-engineer`、`reinforcement-learning`、`time-series-analyst`、`vector-db-specialist`


**database**（9）：`database-designer`、`database-migration`、`elasticsearch-pro`、`graphql-pro`、`mongodb-pro`、`mysql-pro`、`postgresql-pro`、`redis-pro`、`supabase-pro`


**devops**（13）：`ansible-pro`、`aws-pro`、`azure-pro`、`cicd-engineer`、`deployment-engineer`、`docker-pro`、`gcp-pro`、`gitops-engineer`、`incident-response`、`infrastructure-pro`、`kubernetes-ops`、`monitoring-engineer`、`terraform-pro`


**frameworks**（20）：`actix-pro`、`angular-pro`、`django-pro`、`express-pro`、`fastapi-pro`、`flask-pro`、`flutter-pro`、`gin-pro`、`laravel-pro`、`nestjs-pro`、`nextjs-pro`、`nuxt-pro`、`rails-pro`、`react-native-pro`、`react-pro`、`spring-pro`、`svelte-pro`、`tailwind-pro`、`threejs-pro`、`vue-pro`


**frontend**（10）：`accessibility-dev`、`browser-extension-dev`、`css-animations`、`design-system`、`pwa-specialist`、`responsive-design`、`svg-animations`、`web-components`、`web-performance`、`webgl-developer`


**integration**（14）：`api-designer`、`auth-system`、`cli-designer`、`email-system`、`file-processing`、`mcp-specialist`、`notification-system`、`payment-integrator`、`plugin-developer`、`real-time-systems`、`sdk-designer`、`search-engineer`、`webhook-engineer`、`workflow-automator`


**languages**（24）：`bash-pro`、`cpp-pro`、`csharp-pro`、`dart-pro`、`elixir-pro`、`go-pro`、`haskell-pro`、`java-pro`、`javascript-pro`、`julia-pro`、`kotlin-pro`、`lua-pro`、`perl-pro`、`php-pro`、`python-pro`、`r-pro`、`ruby-pro`、`rust-pro`、`scala-pro`、`shell-scripting`、`sql-pro`、`swift-pro`、`typescript-pro`、`zig-pro`


**modernization**（14）：`api-modernizer`、`architecture-evolver`、`cloud-migrator`、`codebase-modernizer`、`config-modernizer`、`database-migrator`、`dependency-updater`、`devops-transformer`、`documentation-upgrader`、`framework-migrator`、`legacy-migrator`、`performance-optimizer`、`security-upgrader`、`testing-modernizer`


**quality**（8）：`dependency-auditor`、`linter-pro`、`load-tester`、`performance-tester`、`qa-engineer`、`refactor-specialist`、`security-auditor`、`test-workflow-optimizer`


**security**（7）：`compliance-officer`、`crypto-specialist`、`identity-management`、`incident-forensics`、`network-security`、`secure-coder`、`threat-modeler`


**specialized**（18）：`audio-engineer`、`bioinformatics`、`compiler-engineer`、`edtech-developer`、`emacs-org-mode-engineer`、`embedded-engineer`、`game-developer`、`gis-specialist`、`graphics-programmer`、`healthcare-it`、`iot-engineer`、`network-programmer`、`os-developer`、`quant-developer`、`robotics-engineer`、`scientific-computing`、`specialized-model-qa`、`video-engineer`


</details>


## 七、已知差异（不纳入本次同步）

- 已覆盖代理为**重写版**（同主题、自撰正文），上游的文本级修正在 v3.0 中以「知识增量补写」方式同步，见 `UPSTREAM_DELTA.md`。
- 上游的 `.github/` CI 工作流与 `scripts/` 回归测试未引入，AgentKit 使用独立的 `src/verify.js` 做格式与索引一致性校验。