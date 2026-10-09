# 知识增量施工图（已覆盖代理 vs 上游最新版）

> 本文档回答：**AgentKit 覆盖的 282 个上游代理，相对上游最新版还缺哪些落地细节。**

> 方法：对每组对照，提取「上游正文中的技术实体」（反引号代码、驼峰标识符、版本号、工具/命令名，已剔除标题类大写噪音）与本地文件求差集，得到**上游独有技术实体**清单。


## 一、总体结论

| 指标 | 数值 |
|------|------|
| 参与分析的对照组 | 282（上游全量） |
| 上游独有技术实体合计 | **3435** |
| 平均每组缺口 | **12.2** 个技术实体 |
| 上游技术实体覆盖率中位数 | **43%** |
| v3.0 两轮补写成效（对齐口径 238 组） | **6679 → 2949（降 56%）** |
| 上游技术实体覆盖率中位数（对齐口径） | **6% → 39%** |
| 最大单组剩余缺口 | **29**（首轮为 91） |
| Δ ≥ 30 的对照组 | **0**（首轮为 52） |

**v3.0 已完成**：31 个缺失代理补建 + 4 个撞车漏建代理补建 + 5 例误配修正 + 7 个冗余去重 + **280+ 个已覆盖代理的知识增量补写**（分 5 轮、共 37 个并行工作单元）。
**结论**：已覆盖代理为「概念级重写版」，v3.0 已批量补入上游承载的具体落地细节（示例代码、命令行、API 签名、配置片段、量化阈值）；高缺口组已全部压到 Δ<30，剩余缺口以小颗粒术语与工具名为主，可作为持续迭代输入。

| 剩余增量规模 | 代理数 | 处理建议 |
|---------|-------|---------|
| Δ ≥ 20（中度） | 55 | 可再补一轮 API/阈值级细节 |
| Δ 10–19（轻度） | 96 | 补入关键术语与配置 |
| Δ 5–9（微量） | 87 | 可选微调 |
| Δ 0–4（基本对齐） | 44 | 无需处理 |

---


## 二、施工清单（按剩余缺口降序，全 282 组）


> 「上游独有技术实体」= **上游有、本地无**的具体技术点，可直接作为下一轮补写输入。


### 1. `frontend/ux-architect.md`  ·  Δ = 29  ·  上游覆盖率 63%

- 上游源：`design/design-ux-architect.md`
- 上游独有技术实体（29 个，列出前 20）：
  `LuxuryDeveloper`、`ProjectManager`、`ai/agents/architect.md`、`align-items`、`aria-hidden`、`aria-label`、`component-based`、`conflict-free`、`css/design-system.css`、`css/layout.css`、`developer-empathetic`、`foundation-focused`、`inline-flex`、`mobile-first`、`spec-accent`、`spec-dark-bg`、`spec-dark-border`、`spec-dark-secondary`、`spec-dark-text`、`spec-dark-text-muted`
  （其余 9 个见 `delta_final.json`）

### 2. `integration/api-platform-engineer.md`  ·  Δ = 29  ·  上游覆盖率 45%

- 上游源：`engineering/engineering-api-platform-engineer.md`
- 上游独有技术实体（29 个，列出前 20）：
  `OrderCreate`、`backward-compatibility-obsessed`、`contract-first`、`created_at`、`cross-cutting`、`curl`、`dateCreated`、`decade-long`、`developer-experience`、`double-charges`、`double-creates`、`double-sends`、`five-minute`、`getting-started`、`internal-platform`、`long-term`、`mid-integration`、`mid-request`、`self-diagnose`、`self-diagnosis`
  （其余 9 个见 `delta_final.json`）

### 3. `specialized/iot-fleet-engineer.md`  ·  Δ = 29  ·  上游覆盖率 45%

- 上游源：`engineering/engineering-iot-fleet-engineer.md`
- 上游独有技术实体（29 个，列出前 20）：
  `LoRa`、`apply-then-verify`、`auto-halt`、`auto-halts`、`auto-rollback`、`auto-rollback-capable`、`backward-compatible`、`batch-uploads`、`bricking-proof`、`certificate-rotation`、`check-ins`、`dual-bank`、`edge-aggregation`、`firmware-version`、`full-fleet`、`hardware-revision`、`healthy-check-in`、`highest-risk`、`intermittently-connected`、`last-known-good`
  （其余 9 个见 `delta_final.json`）

### 4. `devops/mobile-release-engineer.md`  ·  Δ = 29  ·  上游覆盖率 50%

- 上游源：`engineering/engineering-mobile-release-engineer.md`
- 上游独有技术实体（29 个，列出前 20）：
  `build-to-artifact`、`cherry-pick-to-release`、`crash-triaged`、`dark-launch`、`device-family`、`escaped-defect`、`fix-forward`、`git push`、`git revert`、`hand-edit`、`known-rejection`、`multi-hour`、`one-way`、`pre-checked`、`pre-submission`、`provisioning-profile`、`re-remembered`、`read-only`、`rejection-appeal`、`release-blocking`
  （其余 9 个见 `delta_final.json`）

### 5. `integration/search-relevance-engineer.md`  ·  Δ = 29  ·  上游覆盖率 57%

- 上游源：`engineering/engineering-search-relevance-engineer.md`
- 上游独有技术实体（29 个，列出前 20）：
  `alias-flip`、`click-model-derived`、`description`、`exact-match`、`expected-absence`、`function-score`、`hybrid-retrieval`、`incomparable-scores`、`judgment-driven`、`judgment-list`、`judgment-set`、`match_all`、`multi-field`、`my-embedding-model`、`position-bias-corrected`、`product-synonyms`、`query-log`、`query-template`、`re-mine`、`re-ranking`
  （其余 9 个见 `delta_final.json`）

### 6. `specialized/webassembly-engineer.md`  ·  Δ = 29  ·  上游覆盖率 50%

- 上游源：`engineering/engineering-webassembly-engineer.md`
- 上游独有技术实体（29 个，列出前 20）：
  `allocation-churning`、`battle-tested`、`benchmark-driven`、`boundary-light`、`cache-friendly`、`capability-scoped`、`churn-heavy`、`coarse-grained`、`cold-start`、`component-model`、`compute-bound`、`cross-origin`、`dead-code-eliminated`、`feature-availability`、`feature-detect`、`growth-cliff`、`hard-won`、`least-privilege`、`load-time`、`memory-growth`
  （其余 9 个见 `delta_final.json`）

### 7. `business/china-ecommerce-operator.md`  ·  Δ = 29  ·  上游覆盖率 22%

- 上游源：`marketing/marketing-china-ecommerce-operator.md`
- 上游独有技术实体（29 个，列出前 20）：
  `WeChat`、`add-to-cart`、`by-second`、`campaign-level`、`click-through`、`copy-paste`、`cross-platform`、`data-driven`、`data-specific`、`festival-campaign`、`high-conversion`、`higher-margin`、`image-text`、`in-house`、`in-platform`、`long-tail`、`lower-cost`、`mobile-readable`、`multi-million`、`one-time`
  （其余 9 个见 `delta_final.json`）

### 8. `business/weibo-strategist.md`  ·  Δ = 29  ·  上游覆盖率 28%

- 上游源：`marketing/marketing-weibo-strategist.md`
- 上游独有技术实体（29 个，列出前 20）：
  `brand-owned`、`check-ins`、`click-through`、`co-created`、`co-creation`、`co-hosting`、`cross-account`、`full-spectrum`、`high-engagement-potential`、`high-quality`、`image-text`、`in-feed`、`long-form`、`long-tail`、`mass-exposure`、`multi-account`、`next-quarter`、`private-domain`、`reshare-to-win`、`reverse-engineering`
  （其余 9 个见 `delta_final.json`）

### 9. `security/pentester.md`  ·  Δ = 29  ·  上游覆盖率 52%

- 上游源：`security/security-penetration-tester.md`
- 上游独有技术实体（29 个，列出前 20）：
  `AppleWebKit`、`PsExec`、`SqlException`、`SyntaxError`、`Win64`、`board-level`、`business-relevant`、`compromised-host`、`credential-leaks`、`dc2626`、`highest-impact`、`internet-facing`、`lowest-noise`、`multi-tier`、`non-technical`、`off-limits`、`open-ports`、`pattern-match`、`post-mortem`、`public-facing`
  （其余 9 个见 `delta_final.json`）

### 10. `frontend/ui-designer.md`  ·  Δ = 28  ·  上游覆盖率 64%

- 上游源：`design/design-ui-designer.md`
- 上游独有技术实体（28 个，列出前 20）：
  `accessibility-conscious`、`aesthetic-focused`、`align-items`、`background-color`、`color-primary-600`、`color-secondary-300`、`cross-platform`、`font-family`、`font-size`、`font-size-2xl`、`font-size-3xl`、`font-size-base`、`font-size-lg`、`font-size-sm`、`font-size-xl`、`grid-template-columns`、`justify-content`、`margin-left`、`margin-right`、`max-widths`
  （其余 8 个见 `delta_final.json`）

### 11. `business/livestream-commerce-coach.md`  ·  Δ = 28  ·  上游覆盖率 22%

- 上游源：`marketing/marketing-livestream-commerce-coach.md`
- 上游独有技术实体（28 个，列出前 20）：
  `LaiKa`、`TikTok`、`and-release`、`before-after`、`category-specific`、`data-driven`、`e-commerce`、`family-size`、`full-scope`、`line-by-line`、`livestream-exclusive`、`long-consideration`、`mid-to-high`、`million-yuan`、`month-over-month`、`off-script`、`on-air`、`over-rely`、`over-restrict`、`paid-vs-organic`
  （其余 8 个见 `delta_final.json`）

### 12. `database/database-reliability-engineer.md`  ·  Δ = 27  ·  上游覆盖率 54%

- 上游源：`engineering/engineering-database-reliability-engineer.md`
- 上游独有技术实体（27 个，列出前 20）：
  `'pending'`、`app-facing`、`billion-row`、`blocking-lock`、`connection-pool`、`data-loss`、`disaster-recovery`、`drill-driven`、`endpoint-repointing`、`game-day`、`in-time`、`just-saved`、`lagging-replica`、`lock_timeout`、`long-transaction`、`non-blocking`、`non-event`、`per-service`、`pool-sizing`、`query-tuning`
  （其余 7 个见 `delta_final.json`）

### 13. `specialized/drupal-shopping-cart.md`  ·  Δ = 27  ·  上游覆盖率 51%

- 上游源：`engineering/engineering-drupal-shopping-cart.md`
- 上游独有技术实体（27 个，列出前 20）：
  `CheckoutPaneInterface`、`bulk-generated`、`config:import/export`、`configuration-driven`、`double-charge`、`double-charges`、`double-discounting`、`double-processing`、`drop-off`、`half-second`、`hard-code`、`hard-coded`、`high-reliability`、`high-traffic`、`highest-traffic`、`jurisdiction-based`、`live-mode`、`multi-currency`、`multi-store`、`multi-warehouse`
  （其余 7 个见 `delta_final.json`）

### 14. `data-ai/multi-agent-systems-architect.md`  ·  Δ = 27  ·  上游覆盖率 48%

- 上游源：`engineering/engineering-multi-agent-systems-architect.md`
- 上游独有技术实体（27 个，列出前 20）：
  `claude-opus-4-6`、`cost-per-task`、`demo-skeptic`、`eval-driven`、`failure-mode`、`hardest-to-debug`、`high-blast-radius`、`highest-complexity`、`human-in-the-loop`、`instruction-following`、`least-privilege`、`low-confidence`、`mid-generation`、`multi-hop`、`non-negotiable`、`orchestrator-subagent`、`production-grade`、`production-ready`、`rubber-stamping`、`sha256`
  （其余 7 个见 `delta_final.json`）

### 15. `game-development/unreal-world-builder.md`  ·  Δ = 27  ·  上游覆盖率 43%

- 上游源：`game-development/unreal-engine/unreal-world-builder.md`
- 上游独有技术实体（27 个，列出前 20）：
  `ActorGrid`、`AlwaysLoaded`、`GlobalDensityMultiplier`、`MainGrid`、`MinForestSeparation`、`PlayerCampData`、`RoadExclusionEnabled`、`SnowLine`、`StaticMeshActor`、`UnrealWorldBuilder`、`WorldAlignedBlend`、`auto-blend`、`auto-conform`、`hitch-free`、`multi-layer`、`non-destructive`、`non-player`、`out-run`、`performance-accountable`、`pre-baked`
  （其余 7 个见 `delta_final.json`）

### 16. `business/global-podcast-strategist.md`  ·  Δ = 27  ·  上游覆盖率 55%

- 上游源：`marketing/marketing-global-podcast-strategist.md`
- 上游独有技术实体（27 个，列出前 20）：
  `brand-fit`、`co-hosted`、`cross-channel`、`de-risks`、`episode-level`、`episode-over-episode`、`feed-drop`、`follow-up`、`listener-benefit-forward`、`multi-channel`、`off-limits`、`one-page`、`one-size-fits-all`、`platform-by-platform`、`post-episode`、`post-interview`、`pre-interview`、`pre-production`、`pre-written`、`razor-sharp`
  （其余 7 个见 `delta_final.json`）

### 17. `business/sales-offer-lead-gen-strategist.md`  ·  Δ = 27  ·  上游覆盖率 32%

- 上游源：`sales/sales-offer-lead-gen-strategist.md`
- 上游独有技术实体（27 个，列出前 20）：
  `dial-up-able`、`done-for-you`、`done-with-you`、`experience-based`、`front-loaded`、`grand-slam`、`high-effort`、`high-ticket`、`higher-sophistication`、`how-to`、`micro-app`、`multi-channel`、`non-scalable`、`of-funnel`、`offer-buyer`、`problem-aware`、`problem-unaware`、`product-aware`、`reach-amplification`、`ready-made`
  （其余 7 个见 `delta_final.json`）

### 18. `specialized/government-digital-presales-consultant.md`  ·  Δ = 27  ·  上游覆盖率 7%

- 上游源：`specialized/government-digital-presales-consultant.md`
- 上游独有技术实体（27 个，列出前 20）：
  `BaoLanDe`、`TongTech`、`anti-corruption`、`auto-fill`、`below-cost`、`big-picture`、`cross-check`、`data-driven`、`decision-maker`、`decision-making`、`e-government`、`end-to-end`、`high-frequency`、`multi-level`、`multi-million-yuan`、`non-negotiable`、`one-network`、`over-interpretation`、`plain-spoken`、`point-by-point`
  （其余 7 个见 `delta_final.json`）

### 19. `specialized/healthcare-marketing-compliance.md`  ·  Δ = 27  ·  上游覆盖率 44%

- 上游源：`specialized/healthcare-marketing-compliance.md`
- 上游独有技术实体（27 个，列出前 20）：
  `TikTok`、`and-after`、`anxiety-inducing`、`company-wide`、`customer-facing`、`de-identified`、`follow-up`、`group-buy`、`healthcare-related`、`high-performing`、`medium-to-high-risk`、`non-compliant`、`non-negotiable`、`post-incident`、`post-procedure`、`post-treatment`、`pre-publication`、`public-facing`、`record-keeping`、`registration-approved`
  （其余 7 个见 `delta_final.json`）

### 20. `specialized/supply-chain-strategist.md`  ·  Δ = 27  ·  上游覆盖率 40%

- 上游源：`specialized/supply-chain-strategist.md`
- 上游独有技术实体（27 个，列出前 20）：
  `InventoryManager`、`InventoryParameters`、`SupplyChainDigitalization`、`SupplyChainRiskManager`、`SupplyChainStrategist`、`ValueError`、`anti-counterfeiting`、`cash-on-delivery`、`category-level`、`closed-loop`、`cost-conscious`、`cross-border`、`decision-making`、`e-procurement`、`export-oriented`、`full-category`、`gut-feel`、`hands-on`、`large-scale`、`lower-cost`
  （其余 7 个见 `delta_final.json`）

### 21. `specialized/lsp-index-engineer.md`  ·  Δ = 26  ·  上游覆盖率 38%

- 上游源：`specialized/lsp-index-engineer.md`
- 上游独有技术实体（26 个，列出前 20）：
  `AppController`、`BaseController`、`EdgeId`、`GraphBuilder`、`GraphDaemon`、`GraphDiff`、`GraphEdge`、`GraphNode`、`GraphResponse`、`LanguageClient`、`NavigationResponse`、`NodeId`、`ServerCapabilities`、`SymbolIndex`、`SystemStats`、`data-structure`、`file:${file}`、`high-performance`、`in-memory`、`performance-obsessed`
  （其余 6 个见 `delta_final.json`）

### 22. `devops/incident-response-commander.md`  ·  Δ = 25  ·  上游覆盖率 40%

- 上游源：`engineering/engineering-incident-response-commander.md`
- 上游独有技术实体（25 个，列出前 20）：
  `action-itemed`、`all-clear`、`backend-primary`、`blameless-by-default`、`capacity-related`、`checkout-api`、`communication-obsessed`、`customer-facing`、`deploy-related`、`e63946`、`eng-team`、`engineering-manager`、`follow-through`、`kubectl rollout history deployment/<service>`、`multi-level`、`multi-service`、`on-call-primary`、`on-call-secondary`、`payments-team`、`real-time`
  （其余 5 个见 `delta_final.json`）

### 23. `specialized/wordpress-shopping-cart.md`  ·  Δ = 25  ·  上游覆盖率 62%

- 上游源：`engineering/engineering-wordpress-shopping-cart.md`
- 上游独有技术实体（25 个，列出前 20）：
  `BigCommerce`、`block-based`、`cache-exclusion`、`child-theme`、`commerce-heavy`、`conversion-optimized`、`double-discounting`、`first-class`、`free-shipping`、`hard-coded`、`hook-driven`、`individual-use`、`line-item`、`location-based`、`over-limit`、`post-launch`、`revenue-aware`、`role-based`、`single-product`、`tax-inclusive`
  （其余 5 个见 `delta_final.json`）

### 24. `integration/payments-billing-engineer.md`  ·  Δ = 24  ·  上游覆盖率 52%

- 上游源：`engineering/engineering-payments-billing-engineer.md`
- 上游独有技术实体（24 个，列出前 20）：
  `PaymentIntent`、`TypeScript`、`WebhookInbox`、`application-owned`、`client-side`、`complete`、`distributed-systems`、`double-charge`、`double-click`、`failure-path`、`fulfillOrder`、`in-progress`、`line-item`、`log-and-ignore`、`on-call`、`one-time`、`past_due`、`payout-to-ledger`、`processing`、`processor-side`
  （其余 4 个见 `delta_final.json`）

### 25. `specialized/technical-writer.md`  ·  Δ = 24  ·  上游覆盖率 29%

- 上游源：`engineering/engineering-technical-writer.md`
- 上游独有技术实体（24 个，列出前 20）：
  `CreateOrderRequest`、`Error: ENOENT`、`GitHub`、`accuracy-first`、`developer-loved`、`documentation-first`、`empathy-driven`、`error.code`、`high-exit`、`line1`、`my-project`、`npx`、`number`、`open-source`、`pending`、`plugin-content-docs`、`rate-limits`、`reader-centric`、`retries`、`time-sensitive`
  （其余 4 个见 `delta_final.json`）

### 26. `game-development/roblox-experience-designer.md`  ·  Δ = 24  ·  上游覆盖率 55%

- 上游源：`game-development/roblox-studio/roblox-experience-designer.md`
- 上游独有技术实体（24 个，列出前 20）：
  `DailyRewardSystem`、`DataStoreService`、`ExtraLives`、`FirstPurchase`、`GetAsync`、`GetDataStore`、`GetService`、`OnboardingCompleted`、`PassManager`、`PromptGamePassPurchase`、`RemoteEvent`、`RobloxExperienceDesigner`、`ServerStorage`、`SessionEnd`、`SetAsync`、`first-buy`、`level-up`、`limited-time`、`monetization-ethical`、`platform-fluent`
  （其余 4 个见 `delta_final.json`）

### 27. `game-development/unity-architect.md`  ·  Δ = 24  ·  上游覆盖率 71%

- 上游源：`game-development/unity/unity-architect.md`
- 上游独有技术实体（24 个，列出前 20）：
  `BeginProperty`、`CustomPropertyDrawer`、`EndProperty`、`FloatVariableDrawer`、`GameEventListener`、`ItemDatabase : ScriptableObject`、`LabelField`、`ObjectField`、`OnEventRaised`、`RuntimeSetRegistrar`、`SerializedProperty`、`TransformRuntimeSet`、`UnityArchitect`、`UnityEvent`、`UpdateDisplay`、`anti-pattern`、`component-driven`、`designer-accessible`、`designer-empathetic`、`designer-facing`
  （其余 4 个见 `delta_final.json`）

### 28. `business/sales-coach.md`  ·  Δ = 24  ·  上游覆盖率 17%

- 上游源：`sales/sales-coach.md`
- 上游独有技术实体（24 个，列出前 20）：
  `agreed-upon`、`better-positioned`、`coaching-driven`、`deal-specific`、`early-stage`、`follow-up`、`front-loaded`、`highest-leverage`、`multi-threaded`、`nice-to-have`、`one-size-fits-all`、`over-forecast`、`portfolio-level`、`post-important-meeting`、`post-win`、`process-obsessed`、`ride-alongs`、`role-play`、`single-threaded`、`skill-based`
  （其余 4 个见 `delta_final.json`）

### 29. `specialized/hr-onboarding.md`  ·  Δ = 24  ·  上游覆盖率 40%

- 上游源：`specialized/hr-onboarding.md`
- 上游独有技术实体（24 个，列出前 20）：
  `audit-ready`、`company-observed`、`company-specific`、`day-to-day`、`decision-making`、`e-signatures`、`employer-provided`、`end-of-week`、`end-to-end`、`first-day-to-first`、`follow-up`、`fresh-eyes`、`go-to`、`in-person`、`long-term`、`mid-market`、`non-negotiable`、`open-door`、`out-of-pocket`、`post-onboarding`
  （其余 4 个见 `delta_final.json`）

### 30. `specialized/recruitment-specialist.md`  ·  Δ = 24  ·  上游覆盖率 51%

- 上游源：`specialized/recruitment-specialist.md`
- 上游独有技术实体（24 个，列出前 20）：
  `DingTalk`、`RecruitmentFunnelAnalyzer`、`RecruitmentSpecialist`、`TikTok`、`WeChat`、`WeCom`、`bi-monthly`、`end-to-end`、`first-month`、`full-cycle`、`full-funnel`、`full-spectrum`、`headhunter-oriented`、`high-quality`、`job-seeker`、`job-seeking`、`nice-to-haves`、`non-compete`、`one-on-one`、`pre-determined`
  （其余 4 个见 `delta_final.json`）

### 31. `specialized/developer-tooling-engineer.md`  ·  Δ = 23  ·  上游覆盖率 50%

- 上游源：`engineering/engineering-developer-tooling-engineer.md`
- 上游独有技术实体（23 个，列出前 20）：
  `--quiet`、`-v`、`command-line`、`copy-paste`、`developer-tooling`、`exit-code`、`exit-codes`、`hand-rolled`、`human-readable`、`jq`、`mytool auth request-role deploy:prod`、`mytool deploy start --env staging`、`mytool init`、`paved-road`、`pipe-safe`、`request-role`、`single-binary`、`sub-100ms`、`support-ticket`、`tired-engineer`
  （其余 3 个见 `delta_final.json`）

### 32. `business/cross-border-ecommerce.md`  ·  Δ = 23  ·  上游覆盖率 53%

- 上游源：`marketing/marketing-cross-border-ecommerce.md`
- 上游独有技术实体（23 个，列出前 20）：
  `anti-hijacking`、`by-state`、`compliance-rigorous`、`data-driven`、`high-performing`、`less-than-container`、`localization-first`、`low-price`、`marketplace-specific`、`mega-sale`、`mega-sales`、`merchant-fulfilled`、`native-speaker-quality`、`non-converting`、`non-negotiable`、`off-platform`、`platform-restricted`、`post-sales`、`quarter-over-quarter`、`razor-thin`
  （其余 3 个见 `delta_final.json`）

### 33. `security/agentic-identity-trust.md`  ·  Δ = 23  ·  上游覆盖率 36%

- 上游源：`specialized/agentic-identity-trust.md`
- 上游独有技术实体（23 个，列出前 20）：
  `AgentTrustScorer`、`DelegationLink`、`DelegationVerifier`、`EvidenceRecord`、`PeerVerification`、`PeerVerifier`、`VerificationResult`、`auditor-ready`、`caller-owned`、`evidence-based`、`evidence-obsessed`、`finance-agent-prod`、`high-stakes`、`human-in-the-loop`、`identity-graph-operator`、`identity-service-root`、`lock-in`、`re-issuance`、`real-world`、`security-first`
  （其余 3 个见 `delta_final.json`）

### 34. `specialized/hospitality-guest-services.md`  ·  Δ = 23  ·  上游覆盖率 30%

- 上游源：`specialized/hospitality-guest-services.md`
- 上游独有技术实体（23 个，列出前 20）：
  `WiFi`、`detail-oriented`、`first-time`、`five-star`、`guest-led`、`high-profile`、`high-value`、`in-house`、`in-person`、`mid-stay`、`multi-functional`、`multi-night`、`multi-property`、`non-member`、`non-negotiable`、`non-refundable`、`post-event`、`pre-assignment`、`pre-stay`、`same-day`
  （其余 3 个见 `delta_final.json`）

### 35. `quality/model-qa.md`  ·  Δ = 23  ·  上游覆盖率 36%

- 上游源：`specialized/specialized-model-qa.md`
- 上游独有技术实体（23 个，列出前 20）：
  `DataFrame`、`PartialDependenceDisplay`、`ValueError`、`audit-grade`、`chi-square`、`chi2`、`deep-dive`、`e-commerce`、`edge-case`、`evidence-based`、`evidence-driven`、`in-sample`、`multi-output`、`non-significant`、`open-ended`、`p-value`、`point-mass`、`post-deployment`、`re-estimation`、`segment-level`
  （其余 3 个见 `delta_final.json`）

### 36. `data-ai/statistician.md`  ·  Δ = 22  ·  上游覆盖率 21%

- 上游源：`academic/academic-statistician.md`
- 上游独有技术实体（22 个，列出前 20）：
  `analysis-plan`、`effect-size`、`forking-path`、`half-reported`、`in-differences`、`multiple-comparison`、`non-normality`、`non-significant`、`non-statistician`、`out-of-sample`、`over-read`、`p-value`、`peeking-safe`、`plain-spoken`、`pre-registered`、`pre-specify`、`pressure-tests`、`quasi-experimental`、`reverse-causation`、`sample-size`
  （其余 2 个见 `delta_final.json`）

### 37. `frontend/brand-guardian.md`  ·  Δ = 22  ·  上游覆盖率 18%

- 上游源：`design/design-brand-guardian.md`
- 上游独有技术实体（22 个，列出前 20）：
  `brand-accent`、`brand-font-accent`、`brand-font-primary`、`brand-font-secondary`、`brand-logo`、`brand-neutral-500`、`brand-neutral-900`、`brand-primary-dark`、`brand-primary-light`、`brand-secondary`、`brand-secondary-dark`、`brand-secondary-light`、`brand-space-lg`、`brand-space-md`、`brand-space-sm`、`brand-space-xl`、`built-in`、`cross-platform`、`decision-making`、`font-name`
  （其余 2 个见 `delta_final.json`）

### 38. `specialized/technical-artist.md`  ·  Δ = 22  ·  上游覆盖率 33%

- 上游源：`game-development/technical-artist.md`
- 上游独有技术实体（22 个，列出前 20）：
  `AlphaTest`、`RenderType`、`SubShader`、`TechnicalArtist`、`TransparentCutout`、`anti-aliasing`、`cross-engine`、`detail-obsessed`、`fast-moving`、`performance-vigilant`、`pipeline-builder`、`pipeline-related`、`platform-specific`、`pop-in`、`post-process`、`quality-tier`、`re-authoring`、`stripped-back`、`super-resolution`、`team-shared`
  （其余 2 个见 `delta_final.json`）

### 39. `business/private-domain-operator.md`  ·  Δ = 22  ·  上游覆盖率 39%

- 上游源：`marketing/marketing-private-domain-operator.md`
- 上游独有技术实体（22 个，列出前 20）：
  `after-sales`、`best-of`、`best-sellers`、`broad-based`、`check-in`、`cross-selling`、`data-driven`、`drop-off`、`follow-up`、`full-funnel`、`high-value`、`in-store`、`member-exclusive`、`million-user`、`opt-out`、`over-marketing`、`plug-ins`、`refer-a-friend`、`self-introduction`、`single-point`
  （其余 2 个见 `delta_final.json`）

### 40. `security/senior-secops.md`  ·  Δ = 22  ·  上游覆盖率 79%

- 上游源：`security/security-senior-secops.md`
- 上游独有技术实体（22 个，列出前 20）：
  `Access-Control-Allow-Credentials: true`、`Access-Control-Allow-Origin`、`Access-Control-Allow-Origin: *`、`CORS: origin '${origin}' not allowed`、`JavaScript`、`TypeScript`、`alg: none`、`copy-paste`、`copy-pasteable`、`cors()`、`full-application`、`in-depth`、`localStorage.setItem('token', ...)`、`low-severity`、`non-negotiable`、`os.getenv("X", "default")`、`production-ready`、`ready-to-use`、`sessionStorage.setItem('token', ...)`、`token=${accessToken}`
  （其余 2 个见 `delta_final.json`）

### 41. `specialized/legal-document-review.md`  ·  Δ = 22  ·  上游覆盖率 37%

- 上游源：`specialized/legal-document-review.md`
- 上游独有技术实体（22 个，列出前 20）：
  `aggressive-but-market`、`attorney-ready`、`carve-out`、`clause-level`、`client-facing`、`cross-border`、`deal-specific`、`equal-weight`、`fee-shifting`、`first-pass`、`high-priority`、`high-risk`、`highest-risk`、`legally-informed`、`multi-jurisdictional`、`must-fix`、`nice-to-fix`、`non-compliance`、`non-standard`、`one-page`
  （其余 2 个见 `delta_final.json`）

### 42. `specialized/workflow-architect.md`  ·  Δ = 22  ·  上游覆盖率 18%

- 上游源：`specialized/specialized-workflow-architect.md`
- 上游独有技术实体（22 个，列出前 20）：
  `DevOps`、`FAILURE(conflict)`、`FAILURE(timeout)`、`FAILURE(validation_error)`、`HandleFunc`、`POST /path`、`WORKFLOW-[kebab-case-name].md`、`abc123`、`account-deletion`、`as-code`、`branch-obsessed`、`build-ready`、`contract-minded`、`end-to-end`、`git log --oneline -10 -- path/to/file`、`highest-severity`、`kebab-case-name`、`order-checkout`、`payment-processing`、`user-facing`
  （其余 2 个见 `delta_final.json`）

### 43. `devops/platform-engineer.md`  ·  Δ = 21  ·  上游覆盖率 53%

- 上游源：`engineering/engineering-platform-engineer.md`
- 上游独有技术实体（21 个，列出前 20）：
  `CreateOpts`、`DataTier`、`DevEx`、`EstimatedDeployMinutes`、`ExactArgs`、`OwnerTeam`、`ServiceName`、`bespoke-service`、`by-service`、`data-tier`、`go-service`、`golden-paths`、`new-service`、`payment-service`、`payments-db`、`payments-events`、`payments-team`、`platform-cli`、`project-slug`、`spf13`
  （其余 1 个见 `delta_final.json`）

### 44. `specialized/wechat-mini-program-developer.md`  ·  Δ = 21  ·  上游覆盖率 38%

- 上游源：`engineering/engineering-wechat-mini-program-developer.md`
- 上游独有技术实体（21 个，列出前 20）：
  `${BASE_URL}${options.url}`、`/pages/product/product?id=${this.productId}`、`/products/${id}`、`Bearer ${token}`、`callback-based`、`content-commerce`、`dual-thread`、`e-commerce`、`ecosystem-aware`、`id=${this.productId}`、`in-app`、`marketing-pages`、`non-critical`、`price-display`、`product-card`、`re-trigger`、`real-device`、`super-app`、`to-open`、`user-center`
  （其余 1 个见 `delta_final.json`）

### 45. `business/fpa-analyst.md`  ·  Δ = 21  ·  上游覆盖率 32%

- 上游源：`finance/finance-fpa-analyst.md`
- 上游独有技术实体（21 个，列出前 20）：
  `OpEx`、`bottoms-up`、`drill-down`、`forward-looking`、`full-year`、`hand-holding`、`high-growth`、`high-impact`、`high-volume`、`higher-than-expected`、`pipeline-based`、`prior-year`、`re-forecast`、`re-forecasting`、`real-time`、`regression-based`、`risk-adjusted`、`self-identify`、`trade-off`、`trade-offs`
  （其余 1 个见 `delta_final.json`）

### 46. `specialized/medical-billing-coding-specialist.md`  ·  Δ = 21  ·  上游覆盖率 28%

- 上游源：`specialized/medical-billing-coding-specialist.md`
- 上游独有技术实体（21 个，列出前 20）：
  `above-referenced`、`auto-post`、`best-in-class`、`code-specific`、`deadline-aware`、`deadline-driven`、`employer-funded`、`first-level`、`follow-up`、`front-end`、`high-complexity`、`jurisdiction-specific`、`mid-size`、`non-negotiable`、`non-physician`、`peer-reviewed`、`plan-specific`、`real-time`、`second-level`、`self-referral`
  （其余 1 个见 `delta_final.json`）

### 47. `specialized/organizational-psychologist.md`  ·  Δ = 21  ·  上游覆盖率 19%

- 上游源：`specialized/organizational-psychologist.md`
- 上游独有技术实体（21 个，列出前 20）：
  `after-hours`、`base-of-pyramid`、`check-ins`、`day-to-day`、`demands-resources`、`early-warning`、`energy-draining`、`evidence-disciplined`、`follow-through`、`full-utilized`、`go-to`、`high-performance`、`highest-value`、`psychological-safety`、`risk-taking`、`self-criticism`、`self-determination`、`self-managing`、`short-termism`、`top-of-pyramid`
  （其余 1 个见 `delta_final.json`）

### 48. `specialized/developer-advocate.md`  ·  Δ = 21  ·  上游覆盖率 38%

- 上游源：`specialized/specialized-developer-advocate.md`
- 上游独有技术实体（21 个，列出前 20）：
  `CodeSandbox`、`JavaScript`、`KubeCon`、`community-first`、`create-your-platform-app`、`drive-by`、`early-access`、`empathy-driven`、`first-response`、`follow-up`、`half-life`、`how-to`、`issue-number`、`live-coding`、`month-over-month`、`my-tracker`、`npm run dev`、`real-time`、`related-issue`、`server-sent`
  （其余 1 个见 `delta_final.json`）

### 49. `frontend/whimsy-injector.md`  ·  Δ = 20  ·  上游覆盖率 39%

- 上游源：`design/design-whimsy-injector.md`
- 上游独有技术实体（20 个，列出前 20）：
  `EasterEggManager`、`WhimsyAchievements`、`achievement-card`、`achievement-celebration`、`achievement-icon`、`animation-delay`、`background-position`、`background-size`、`border-radius`、`ease-in-out`、`floating-emoji`、`font-size`、`inline-flex`、`joy-focused`、`loading-whimsy`、`micro-interaction`、`nth-child`、`performance-conscious`、`primary-color`、`user-generated`

### 50. `frontend/frontend-developer.md`  ·  Δ = 20  ·  上游覆盖率 31%

- 上游源：`engineering/engineering-frontend-developer.md`
- 上游独有技术实体（20 个，列出前 20）：
  `DataTable`、`DataTableProps`、`WebAssembly`、`aria-label`、`bg-gray-50`、`border-b`、`cursor-pointer`、`end-to-end`、`flex-1`、`h-96`、`items-center`、`micro-frontend`、`micro-interactions`、`mobile-first`、`overflow-auto`、`performance-critical`、`performance-focused`、`px-4`、`py-2`、`user-centric`

### 51. `data-ai/rag-pipeline-engineer.md`  ·  Δ = 20  ·  上游覆盖率 63%

- 上游源：`engineering/engineering-rag-pipeline-engineer.md`
- 上游独有技术实体（20 个，列出前 20）：
  `AsyncSession`、`CrossEncoder`、`TypedDict`、`ValueError`、`anti-pattern`、`async-first`、`bulk-insert`、`ef_construction`、`eval-driven`、`full-text`、`high-concurrency`、`human-in-the-loop`、`low-latency`、`mobile-first`、`multi-step`、`post-retrieval`、`re-rankers`、`retrieval-augmented`、`sub-question`、`vibe-based`

### 52. `specialized/game-audio-engineer-specialized.md`  ·  Δ = 20  ·  上游覆盖率 51%

- 上游源：`game-development/game-audio-engineer.md`
- 上游独有技术实体（20 个，列出前 20）：
  `AudioManager`、`EventInstance`、`GameAudioEngineer`、`MonoBehaviour`、`SerializeField`、`SetMusicParameter`、`StartMusic`、`StopMusic`、`Vector3`、`audio-caused`、`dynamically-aware`、`first-person`、`low-end`、`off-the-shelf`、`one-shot`、`performance-conscious`、`platform-specific`、`raycast-driven`、`tempo-synced`、`world-space`

### 53. `business/podcast-strategist.md`  ·  Δ = 20  ·  上游覆盖率 59%

- 上游源：`marketing/marketing-podcast-strategist.md`
- 上游独有技术实体（20 个，列出前 20）：
  `cross-appearances`、`cross-promo`、`dead-air`、`follow-up`、`full-funnel`、`fully-listened`、`guest-driven`、`high-quality`、`in-person`、`non-public`、`non-treated`、`of-mouth`、`on-site`、`post-production`、`same-category`、`same-niche`、`surface-level`、`table-tapping`、`to-show`、`well-suited`

### 54. `specialized/customer-success-manager.md`  ·  Δ = 20  ·  上游覆盖率 38%

- 上游源：`specialized/customer-success-manager.md`
- 上游独有技术实体（20 个，列出前 20）：
  `action-oriented`、`category-red`、`data-driven`、`day-to-day`、`digital-led`、`end-to-end`、`executive-to-executive`、`follow-up`、`long-tail`、`long-term`、`mid-market`、`non-negotiable`、`non-renewal`、`over-tap`、`thank-you`、`to-day`、`to-sales`、`to-value`、`usage-based`、`voice-of-customer`

### 55. `quality/test-results-analyzer.md`  ·  Δ = 20  ·  上游覆盖率 29%

- 上游源：`testing/testing-test-results-analyzer.md`
- 上游独有技术实体（20 个，列出前 20）：
  `DataFrame`、`TestResultsAnalyzer`、`ValueError`、`_...`、`branches`、`decision-making`、`defect-prone`、`detail-oriented`、`follow-up`、`functions`、`high-level`、`insight-driven`、`long-term`、`project-specific`、`quality-focused`、`real-time`、`risk-based`、`stakeholder-specific`、`statements`、`utf-8`

### 56. `data-ai/ai-data-remediation-engineer.md`  ·  Δ = 19  ·  上游覆盖率 34%

- 上游源：`engineering/engineering-ai-data-remediation-engineer.md`
- 上游独有技术实体（19 个，列出前 19）：
  `"John Doe ID:101"`、`"Jon Doe ID:102"`、`DataFrame`、`DataLossException`、`PagerDuty`、`SentenceTransformer`、`Source == Success + Quarantine`、`ValueError`、`brute-force`、`lambda-only`、`non-negotiable`、`os`、`per-row`、`phi3`、`production-ready`、`self-hosted`、`sentence-transformers`、`tamper-evident`、`zero-data-loss`

### 57. `specialized/healthcare-innovation-strategist.md`  ·  Δ = 19  ·  上游覆盖率 27%

- 上游源：`healthcare/healthcare-innovation-strategist.md`
- 上游独有技术实体（19 个，列出前 19）：
  `audience-specific`、`audience-tested`、`decision-making`、`external-facing`、`follow-up`、`general-purpose`、`heads-down`、`large-scale`、`long-term`、`lower-cost`、`multi-market`、`non-clinician`、`oath-gated`、`peer-reviewed`、`post-hoc`、`state-of-play`、`system-level`、`to-peer`、`zero-cost`

### 58. `business/china-market-localization-strategist.md`  ·  Δ = 19  ·  上游覆盖率 44%

- 上游源：`marketing/marketing-china-market-localization-strategist.md`
- 上游独有技术实体（19 个，列出前 19）：
  `audience-platform`、`battle-tested`、`call-to-action`、`category-specific`、`content-comment`、`copy-paste`、`cross-post`、`de-escalation`、`execution-focused`、`high-leverage`、`high-priority`、`hyper-competitive`、`no-go`、`platform-native`、`platform-specific`、`precision-guided`、`re-engineering`、`real-time`、`trend-to-action`

### 59. `business/video-optimization-specialist.md`  ·  Δ = 19  ·  上游覆盖率 17%

- 上游源：`marketing/marketing-video-optimization-specialist.md`
- 上游独有技术实体（19 个，列出前 19）：
  `00:00`、`00:45`、`02:15`、`05:30`、`08:45`、`11:20`、`12:30`、`TikTok`、`channel-wide`、`cross-platform`、`first-30-second`、`high-converting`、`hyper-focused`、`tag1`、`tag2`、`tag3`、`top-performing`、`trend-conscious`、`views-to-subscribers`

### 60. `specialized/chief-financial-officer.md`  ·  Δ = 19  ·  上游覆盖率 30%

- 上游源：`specialized/chief-financial-officer.md`
- 上游独有技术实体（19 个，列出前 19）：
  `ExCo`、`buy-side`、`channel-stuffing`、`cross-sell`、`highest-value`、`in-line`、`investment-grade`、`near-term`、`off-balance-sheet`、`on-time`、`one-time`、`revenue-generating`、`risk-adjusted`、`sell-side`、`short-duration`、`tax-efficient`、`trade-off`、`trade-off-minded`、`trade-offs`

### 61. `specialized/ma-integration-manager.md`  ·  Δ = 19  ·  上游覆盖率 42%

- 上游源：`specialized/ma-integration-manager.md`
- 上游独有技术实体（19 个，列出前 19）：
  `ExCo`、`business-as-usual`、`business-critical`、`clock-driven`、`co-developed`、`culture-clash`、`customer-first`、`disruption-averse`、`flight-risk`、`go-live`、`no-go`、`one-time`、`open-ended`、`operating-model`、`re-filed`、`run-through`、`to-market`、`top-down`、`value-creating`

### 62. `specialized/resume-tailor.md`  ·  Δ = 19  ·  上游覆盖率 24%

- 上游源：`specialized/resume-tailor.md`
- 上游独有技术实体（19 个，列出前 19）：
  `ResumeTailor`、`achievement-based`、`background-check`、`candidate-side`、`credential-misrepresentation`、`evidence-based`、`job-match`、`job-search`、`keyword-stuff`、`low-value`、`must-have`、`nice-to-have`、`over-optimize`、`responsibility-based`、`role-relevant`、`role-specific`、`soft-skill`、`spelled-out`、`user-provided`

### 63. `specialized/email-intelligence-engineer.md`  ·  Δ = 18  ·  上游覆盖率 40%

- 上游源：`engineering/engineering-email-intelligence-engineer.md`
- 上游独有技术实体（18 个，列出前 18）：
  `), delimiter-based (`、`RuntimeError`、`ValueError`、`delimiter-based`、`entity-specific`、`failure-mode-aware`、`human-in-the-loop`、`infrastructure-minded`、`known-good`、`mid-thread`、`multi-conversation`、`one-pass`、`partition-based`、`query-relevant`、`reasoning-ready`、`relevance-based`、`tamper-evident`、`to-end`

### 64. `data-ai/knowledge-graph-engineer.md`  ·  Δ = 18  ·  上游覆盖率 81%

- 上游源：`engineering/engineering-knowledge-graph-engineer.md`
- 上游独有技术实体（18 个，列出前 18）：
  `(:Source)`、`all-pass`、`contested=true`、`created`、`cross-references`、`cross-refs`、`data-integrity`、`end-to-end`、`entity-relationship`、`fine-tune`、`graph-health`、`low-value`、`needs_review: true`、`one-line`、`over-extracted`、`re-extract`、`threshold-gate`、`well-corroborated`

### 65. `business/dx-engineer.md`  ·  Δ = 18  ·  上游覆盖率 60%

- 上游源：`product/product-dx-engineer.md`
- 上游独有技术实体（18 个，列出前 18）：
  `@required`、`NotFoundError`、`RateLimitError`、`client.messages.create()`、`client.setup()`、`copy-pasted`、`day-to-day`、`first-run`、`half-day`、`npm install`、`product-specific`、`rate-limits`、`request-body`、`setup()`、`thread_id`、`time-to-resolution`、`to-first`、`trailing-space`

### 66. `business/sales-account-strategist.md`  ·  Δ = 18  ·  上游覆盖率 33%

- 上游源：`sales/sales-account-strategist.md`
- 上游独有技术实体（18 个，列出前 18）：
  `LinkedIn`、`at-risk`、`backward-looking`、`cross-functionally`、`decision-making`、`forward-looking`、`in-product`、`multi-threaded`、`partner-influenced`、`post-expansion`、`post-sale`、`pressure-test`、`sales-led`、`self-serve`、`seven-figure`、`single-threaded`、`stakeholder-mapped`、`top-tier`

### 67. `specialized/corporate-training-designer.md`  ·  Δ = 18  ·  上游覆盖率 53%

- 上游源：`specialized/corporate-training-designer.md`
- 上游独有技术实体（18 个，列出前 18）：
  `ByteDance`、`first-month`、`full-employee`、`in-person`、`knowledge-management-oriented`、`level-up`、`micro-course`、`multi-dimensional`、`non-trainees`、`organization-level`、`pre-work`、`problem-solving`、`ramp-up`、`real-time`、`results-oriented`、`role-specific`、`single-session`、`time-to-launch`

### 68. `specialized/operations-manager.md`  ·  Δ = 18  ·  上游覆盖率 31%

- 上游源：`specialized/operations-manager.md`
- 上游独有技术实体（18 个，列出前 18）：
  `SharePoint`、`as-is`、`cause-effect`、`current-state`、`end-to-end`、`follow-up`、`high-level`、`high-risk`、`low-risk`、`make-vs`、`measurement-driven`、`non-bottleneck`、`non-value-added`、`post-change`、`process-driven`、`root-cause`、`short-term`、`small-scale`

### 69. `specialized/sales-outreach.md`  ·  Δ = 18  ·  上游覆盖率 31%

- 上游源：`specialized/sales-outreach.md`
- 上游独有技术实体（18 个，列出前 18）：
  `at-event`、`brush-off`、`door-open`、`follow-ups`、`high-value`、`micro-commitment`、`multi-touch`、`non-negotiable`、`persona-specific`、`post-event`、`pre-event`、`relationship-building`、`results-driven`、`six-figure`、`spray-and-pray`、`value-led`、`walk-away`、`well-researched`

### 70. `quality/accessibility-auditor.md`  ·  Δ = 18  ·  上游覆盖率 44%

- 上游源：`testing/testing-accessibility-auditor.md`
- 上游独有技术实体（18 个，列出前 18）：
  `AccessibilityAuditor`、`accessibility-specific`、`advocacy-driven`、`aria-label='Search'`、`automated-detectable`、`axe-core-tags`、`code-level`、`conformance-reqs`、`empathy-grounded`、`government-funded`、`manual-only`、`mouse-using`、`plain-language`、`re-audit`、`real-world`、`standards-obsessed`、`well-structured`、`well-supported`

### 71. `database/gaussdb-expert.md`  ·  Δ = 17  ·  上游覆盖率 68%

- 上游源：`engineering/engineering-gaussdb-expert.md`
- 上游独有技术实体（17 个，列出前 17）：
  `RoundRobin`、`append-heavy`、`auto-tuning`、`cloud-native`、`co-design`、`co-location`、`low-traffic`、`open-source`、`p2024`、`p2025`、`p2026`、`rarely-updated`、`round-trip`、`self-developed`、`session-level`、`table-level`、`well-chosen`

### 72. `specialized/minimal-change-engineer.md`  ·  Δ = 17  ·  上游覆盖率 43%

- 上游源：`engineering/engineering-minimal-change-engineer.md`
- 上游独有技术实体（17 个，列出前 17）：
  `--dry-run`、`DryRunStrategy`、`RunMode`、`RunModeContext`、`bug-fix`、`file1`、`file2`、`half-life`、`load-bearing`、`minimum-viable`、`one-line`、`over-architected`、`over-engineer`、`over-produce`、`paginatePosts`、`runMode`、`three-day`

### 73. `game-development/godot-multiplayer-engineer.md`  ·  Δ = 17  ·  上游覆盖率 71%

- 上游源：`game-development/godot/godot-multiplayer-engineer.md`
- 上游独有技术实体（17 个，列出前 17）：
  `GameWorld`、`GodotMultiplayerEngineer`、`NodePath`、`ReplicationConfig`、`SceneReplicationConfig`、`Vector2`、`auto-removes`、`auto-replicates`、`disconnect`、`gameplay-breaking`、`latency-honest`、`open-source`、`peer-to-peer`、`scene-architecture`、`server-authoritative`、`server-controlled`、`server-side`

### 74. `game-development/unreal-technical-artist.md`  ·  Δ = 17  ·  上游覆盖率 54%

- 上游源：`game-development/unreal-engine/unreal-technical-artist.md`
- 上游独有技术实体（17 个，列出前 17）：
  `AbsoluteWorldNormal`、`BlendWeights`、`DefaultLit`、`EnableRoadExclusion`、`GlobalDensityMultiplier`、`MinSeparationDistance`、`SampleTexture`、`UnrealTechnicalArtist`、`WorldPosition`、`art-to-engine`、`high-end`、`mid-range`、`multi-layered`、`multi-pass`、`performance-accountable`、`re-run`、`tooling-generous`

### 75. `business/agentic-search-optimizer.md`  ·  Δ = 17  ·  上游覆盖率 58%

- 上游源：`marketing/marketing-agentic-search-optimizer.md`
- 上游独有技术实体（17 个，列出前 17）：
  `<head>`、`<input type="date">`、`<label>`、`Booking failed: ${result.error}`、`JavaScript`、`agent-breaking`、`agent-hostile`、`anti-patterns`、`book-appointment`、`high-priority`、`highest-value`、`multi-step`、`navigator.mcpActions`、`non-semantic`、`placeholder-only`、`send-inquiry`、`user-state-dependent`

### 76. `business/kuaishou-strategist.md`  ·  Δ = 17  ·  上游覆盖率 32%

- 上游源：`marketing/marketing-kuaishou-strategist.md`
- 上游独有技术实体（17 个，列出前 17）：
  `WeChat`、`algorithm-dependent`、`creator-audience`、`creator-to-creator`、`cross-promotion`、`during-live`、`high-production`、`long-term`、`non-negotiable`、`one-off`、`per-product`、`post-purchase`、`results-oriented`、`six-figure`、`thank-you`、`to-earth`、`word-of-mouth`

### 77. `specialized/language-translator.md`  ·  Δ = 17  ·  上游覆盖率 0%

- 上游源：`specialized/language-translator.md`
- 上游独有技术实体（17 个，列出前 17）：
  `am-boo`、`code-switching`、`context-appropriate`、`culturally-aware`、`ee-oh`、`eh-mer`、`hee-koh`、`kah-kah`、`neh-seh`、`poh-lee`、`re-explain`、`reh-koh`、`see-ah`、`side-by-side`、`tone-appropriate`、`well-established`、`word-for-word`

### 78. `specialized/legal-billing-time-tracking.md`  ·  Δ = 17  ·  上游覆盖率 45%

- 上游源：`specialized/legal-billing-time-tracking.md`
- 上游独有技术实体（17 个，列出前 17）：
  `client-friendly`、`cost-shifting`、`e-discovery`、`ethically-grounded`、`firm-wide`、`long-term`、`mid-size`、`multi-jurisdictional`、`non-lawyer`、`non-lawyers`、`non-standard`、`of-day`、`out-of-scope`、`sign-off`、`state-specific`、`write-down`、`write-offs`

### 79. `specialized/loan-officer-assistant.md`  ·  Δ = 17  ·  上游覆盖率 39%

- 上游源：`specialized/loan-officer-assistant.md`
- 上游独有技术实体（17 个，列出前 17）：
  `ability-to-repay`、`borrower-friendly`、`cash-out`、`compliance-aware`、`detail-oriented`、`fall-out`、`government-issued`、`high-cost`、`non-conforming`、`post-closing`、`pre-qualification`、`re-submission`、`same-day`、`self-employment`、`short-term`、`speed-to-lead`、`tri-merge`

### 80. `specialized/retail-customer-returns.md`  ·  Δ = 17  ·  上游覆盖率 26%

- 上游源：`specialized/retail-customer-returns.md`
- 上游独有技术实体（17 个，列出前 17）：
  `PayPal`、`brick-and-mortar`、`customer-focused`、`de-escalate`、`drop-off`、`end-of-season`、`high-risk`、`non-resaleable`、`non-returnable`、`non-transferable`、`policy-savvy`、`post-holiday`、`post-return`、`price-matched`、`state-specific`、`third-party`、`to-stock`

### 81. `specialized/specialized-mcp-builder.md`  ·  Δ = 17  ·  上游覆盖率 51%

- 上游源：`specialized/specialized-mcp-builder.md`
- 上游独有技术实体（17 个，列出前 17）：
  `AsyncClient`、`Failed to search tickets: ${error.message}`、`copy-paste`、`free-text`、`get_deployment_status`、`github-server`、`issue-only`、`long-running`、`query1`、`real-world`、`search_orders_by_date`、`search_users`、`ticket-stats`、`tickets-server`、`tool-call`、`web-based`、`well-designed`

### 82. `specialized/study-abroad-advisor.md`  ·  Δ = 17  ·  上游覆盖率 35%

- 上游源：`specialized/study-abroad-advisor.md`
- 上游独有技术实体（17 个，列出前 17）：
  `career-switchers`、`cross-disciplinary`、`data-driven`、`end-to-end`、`highest-priority`、`impact-focused`、`long-term`、`low-tuition`、`multi-degree-level`、`multi-dimensional`、`post-admission`、`self-assessment`、`short-term`、`surface-level`、`third-party`、`three-tier`、`to-end`

### 83. `business/support-responder.md`  ·  Δ = 17  ·  上游覆盖率 15%

- 上游源：`support/support-support-responder.md`
- 上游独有技术实体（17 个，列出前 17）：
  `KnowledgeBaseManager`、`SupportAnalytics`、`at-risk`、`check-in`、`check-ins`、`cross-sell`、`cross-selling`、`customer-obsessed`、`follow-up`、`in-app`、`multi-channel`、`peer-to-peer`、`real-world`、`seven-day`、`solution-focused`、`value-based`、`zero-ticket`

### 84. `devops/devops-automator.md`  ·  Δ = 16  ·  上游覆盖率 56%

- 上游源：`engineering/engineering-devops-automator.md`
- 上游独有技术实体（16 个，列出前 16）：
  `AWS/ApplicationELB`、`GreaterThanThreshold`、`UserGuide`、`app-alb`、`app-high-cpu`、`app-instance`、`automation-focused`、`docker-security-scan`、`efficiency-driven`、`end-to-end`、`load-balancer`、`one-minute`、`reliability-oriented`、`runs-on`、`ubuntu-latest`、`zero-downtime`

### 85. `specialized/feishu-integration-developer.md`  ·  Δ = 16  ·  上游覆盖率 75%

- 上游源：`engineering/engineering-feishu-integration-developer.md`
- 上游独有技术实体（16 个，列出前 16）：
  `${process.env.BASE_URL}/callback/feishu`、`${process.env.FRONTEND_URL}/auth?token=${jwt}`、`&redirect_uri=${redirectUri}`、`&state=${state}`、`?app_id=${process.env.FEISHU_APP_ID}`、`Bearer ${userToken}`、`code`、`code != 0`、`enterprise-grade`、`experience-focused`、`feishu-integration`、`full-stack`、`high-level`、`low-level`、`message_id`、`security-conscious`

### 86. `devops/finops-engineer.md`  ·  Δ = 16  ·  上游覆盖率 47%

- 上游源：`engineering/engineering-finops-engineer.md`
- 上游独有技术实体（16 个，列出前 16）：
  `and-usage`、`committed-use`、`cost-only`、`data-transfer-aware`、`financial-operations`、`hidden-cost`、`lock-in`、`no-upfront`、`org-readiness`、`over-provisioned`、`over-provisioning`、`per-namespace`、`per-team`、`reserved-instance`、`risk-assessed`、`shared-cost`

### 87. `frontend/uswds-developer.md`  ·  Δ = 16  ·  上游覆盖率 83%

- 上游源：`engineering/engineering-uswds-developer.md`
- 上游独有技术实体（16 个，列出前 16）：
  `$theme-color-primary-dark`、`JavaScript`、`accessibility-later`、`accessibility-tested`、`brand-correct`、`by-default`、`changelog-reviewed`、`government-focused`、`hard-code`、`mobile-friendliness`、`multi-step`、`official-site`、`screen-reader`、`token-driven`、`token-to`、`upgrade-reviewed`

### 88. `game-development/roblox-avatar-creator.md`  ·  Δ = 16  ·  上游覆盖率 67%

- 上游源：`game-development/roblox-studio/roblox-avatar-creator.md`
- 上游独有技术实体（16 个，列出前 16）：
  `DataManager`、`FindFirstChildOfClass`、`FireServer`、`GetService`、`ItemPurchased`、`LocalPlayer`、`ReplicatedStorage`、`RobloxAvatarCreator`、`ServerStorage`、`co-marketing`、`creator-economically`、`cross-experience`、`experience-earned`、`experience-internal`、`platform-fluent`、`pre-check`

### 89. `business/sales-outbound-strategist.md`  ·  Δ = 16  ·  上游覆盖率 30%

- 上游源：`sales/sales-outbound-strategist.md`
- 上游独有技术实体（16 个，列出前 16）：
  `DevOps`、`account-level`、`account-specific`、`data-driven`、`event-based`、`go-to-market`、`half-life`、`high-converting`、`non-negotiable`、`persona-matched`、`referral-based`、`relevance-first`、`research-driven`、`role-based`、`spray-and-pray`、`to-meeting`

### 90. `specialized/change-management-consultant.md`  ·  Δ = 16  ·  上游覆盖率 27%

- 上游源：`specialized/change-management-consultant.md`
- 上游独有技术实体（16 个，列出前 16）：
  `all-hands`、`board-level`、`cross-functional`、`enterprise-wide`、`manager-led`、`mid-market`、`multi-year`、`non-negotiable`、`non-use`、`on-the-job`、`post-go-live`、`pre-change`、`problem-solving`、`role-specific`、`super-users`、`tip-of-the-week`

### 91. `specialized/healthcare-customer-service.md`  ·  Δ = 16  ·  上游覆盖率 16%

- 上游源：`specialized/healthcare-customer-service.md`
- 上游独有技术实体（16 个，列出前 16）：
  `cared-for`、`end-of-life`、`first-level`、`in-network`、`multi-payer`、`non-clinical`、`non-complex`、`out-of-network`、`out-of-pocket`、`plain-language`、`pre-collections`、`same-day`、`self-harm`、`solution-focused`、`step-by-step`、`third-party`

### 92. `specialized/it-service-manager.md`  ·  Δ = 15  ·  上游覆盖率 32%

- 上游源：`engineering/engineering-it-service-manager.md`
- 上游独有技术实体（15 个，列出前 15）：
  `action-oriented`、`auto-generated`、`back-end`、`by-step`、`developer-friendly`、`end-of-month`、`end-to-end`、`go-live`、`mid-market`、`out-of-the-box`、`post-mortem`、`self-inflicted`、`technology-oriented`、`user-facing`、`well-understood`

### 93. `data-ai/llm-post-training-engineer.md`  ·  Δ = 15  ·  上游覆盖率 55%

- 上游源：`engineering/engineering-llm-post-training-engineer.md`
- 上游独有技术实体（15 个，列出前 15）：
  `Artifacts to Preserve`、`Failure Classification`、`Next Minimal Test`、`Observed Evidence`、`collapsed-pair`、`expert-load`、`incident-specific`、`learning-rate`、`load-probe`、`non-goals`、`per-response`、`reward-exploitation`、`reward-function`、`scale-up`、`stage-scoped`

### 94. `specialized/rapid-prototyper.md`  ·  Δ = 15  ·  上游覆盖率 77%

- 上游源：`engineering/engineering-rapid-prototyper.md`
- 上游独有技术实体（15 个，列出前 15）：
  `as-a-service`、`efficiency-driven`、`full-stack`、`over-engineering`、`production-ready`、`proof-of-concept`、`rapid-prototype`、`real-time`、`speed-focused`、`time-to-working-prototype`、`to-production`、`ultra-fast`、`user-facing`、`validation-oriented`、`zero-config`

### 95. `business/bookkeeper-controller.md`  ·  Δ = 15  ·  上游覆盖率 40%

- 上游源：`finance/finance-bookkeeper-controller.md`
- 上游独有技术实体（15 个，列出前 15）：
  `auto-reversal`、`budget-vs-actual`、`cut-off`、`decision-making`、`high-volume`、`multi-currency`、`non-negotiable`、`one-time`、`over-month`、`record-keeping`、`right-of-use`、`roll-forward`、`roll-forwards`、`tie-out`、`time-sensitive`

### 96. `business/email-strategist.md`  ·  Δ = 15  ·  上游覆盖率 38%

- 上游源：`marketing/marketing-email-strategist.md`
- 上游独有技术实体（15 个，列出前 15）：
  `ActiveCampaign`、`HubSpot`、`MailerLite`、`SendGrid`、`behavior-triggered`、`copy-paste`、`end-to-end`、`follow-up`、`lead-gen`、`opt-in`、`rate-optimized`、`real-world`、`sequence-level`、`time-based`、`trigger-based`

### 97. `business/pr-communications-manager.md`  ·  Δ = 15  ·  上游覆盖率 38%

- 上游源：`marketing/marketing-pr-communications-manager.md`
- 上游独有技术实体（15 个，列出前 15）：
  `GlobeNewswire`、`TechCrunch`、`VentureBeat`、`before-external`、`fact-check`、`follow-up`、`front-page`、`high-stakes`、`non-negotiable`、`on-camera`、`pile-on`、`re-engagement`、`third-party`、`tier-one`、`top-tier`

### 98. `business/sales-pipeline-analyst.md`  ·  Δ = 15  ·  上游覆盖率 52%

- 上游源：`sales/sales-pipeline-analyst.md`
- 上游独有技术实体（15 个，列出前 15）：
  `cherry-picking`、`close-rate`、`deal-level`、`deal-scoring`、`early-stage`、`follow-up`、`gut-feel`、`high-potential`、`high-velocity`、`industry-specific`、`leading-to-lagging`、`mid-market`、`opinion-second`、`to-listen`、`well-qualified`

### 99. `specialized/spatial-metal-engineer.md`  ·  Δ = 15  ·  上游覆盖率 44%

- 上游源：`spatial-computing/macos-spatial-metal-engineer.md`
- 上游独有技术实体（15 个，列出前 15）：
  `CodeGraphImmersive`、`GestureState`、`GraphEdge`、`GraphNode`、`MemoryLayout`、`MetalGraphRenderer`、`SpatialInteractionHandler`、`VisionProCompositor`、`blazing-fast`、`float3`、`high-performance`、`metallic-blue`、`spatial-thinking`、`to-selection`、`vergence-accommodation`

### 100. `specialized/grant-writer.md`  ·  Δ = 15  ·  上游覆盖率 38%

- 上游源：`specialized/grant-writer.md`
- 上游独有技术实体（15 个，列出前 15）：
  `LinkedIn`、`compliance-intensive`、`equity-centered`、`highest-leverage`、`long-term`、`over-year`、`pass-through`、`peer-reviewed`、`relationship-building`、`relationship-driven`、`seven-figure`、`system-level`、`time-bound`、`to-invite`、`year-over-year`

### 101. `specialized/pricing-analyst.md`  ·  Δ = 15  ·  上游覆盖率 29%

- 上游源：`specialized/specialized-pricing-analyst.md`
- 上游独有技术实体（15 个，列出前 15）：
  `WebFetch`、`WebSearch`、`anti-patterns`、`cost-plus`、`data-backed`、`industry-specific`、`land-and-expand`、`margin-blind`、`multi-year`、`network-effect`、`next-best`、`non-negotiable`、`price-sensitive`、`price-to-win-rate`、`to-pay`

### 102. `business/legal-compliance.md`  ·  Δ = 15  ·  上游覆盖率 12%

- 上游源：`support/support-legal-compliance-checker.md`
- 上游独有技术实体（15 个，列出前 15）：
  `ContractReviewSystem`、`PrivacyPolicyGenerator`、`compliance-related`、`decision-making`、`ethically-driven`、`industry-specific`、`jurisdiction-specific`、`multi-jurisdictional`、`non-compliant`、`organization-wide`、`pci-dss`、`risk-aware`、`risk-balanced`、`role-specific`、`third-party`

### 103. `quality/tool-evaluator.md`  ·  Δ = 15  ·  上游覆盖率 12%

- 上游源：`testing/testing-tool-evaluator.md`
- 上游独有技术实体（15 个，列出前 15）：
  `DataFrame`、`EvaluationCriteria`、`RequestException`、`ToolEvaluator`、`ToolScoring`、`ValueError`、`break-even`、`cost-conscious`、`cost-performance`、`in-class`、`persona-based`、`re-evaluation`、`real-world`、`strategically-minded`、`user-focused`

### 104. `architecture/autonomous-optimization-architect.md`  ·  Δ = 14  ·  上游覆盖率 33%

- 上游源：`engineering/engineering-autonomous-optimization-architect.md`
- 上游独有技术实体（14 个，列出前 14）：
  `agency-agents`、`auto-routing`、`cost-per-execution`、`data-driven`、`fail-safe`、`five-second`、`hyper-vigilant`、`post-charge`、`rate-limits`、`self-improving`、`self-learning`、`self-modifying`、`shadow-tests`、`token-per-second`

### 105. `specialized/economy-designer.md`  ·  Δ = 14  ·  上游覆盖率 39%

- 上游源：`game-development/economy-designer.md`
- 上游独有技术实体（14 个，列出前 14）：
  `EconomyDesigner`、`agent-based`、`data-driven`、`dead-ends`、`gameplay-relevant`、`late-game`、`live-service`、`non-spenders`、`post-launch`、`simulation-first`、`single-player`、`spend-depth`、`telemetry-driven`、`value-driven`

### 106. `game-development/unity-shader-graph-artist.md`  ·  Δ = 14  ·  上游覆盖率 83%

- 上游源：`game-development/unity/unity-shader-graph-artist.md`
- 上游独有技术实体（14 个，列出前 14）：
  `Alpha Blend`、`Alpha Clipping`、`EdgeColor`、`EdgeWidth`、`UnityShaderGraphArtist`、`artist-authored`、`artist-empathetic`、`hand-coded`、`multi-pass`、`performance-requires`、`pipeline-aware`、`pre-pass`、`render-pipelines`、`version-controlled`

### 107. `business/bilibili-content-strategist.md`  ·  Δ = 14  ·  上游覆盖率 44%

- 上游源：`marketing/marketing-bilibili-content-strategist.md`
- 上游独有技术实体（14 个，列出前 14）：
  `click-through`、`community-driven`、`community-first`、`community-savvy`、`cross-platform`、`cross-pollination`、`curiosity-gap`、`high-effort`、`long-form`、`long-term`、`meme-fluent`、`one-off`、`platform-native`、`user-created`

### 108. `specialized/data-privacy-officer.md`  ·  Δ = 14  ·  上游覆盖率 36%

- 上游源：`specialized/data-privacy-officer.md`
- 上游独有技术实体（14 个，列出前 14）：
  `InfoSec`、`by-design`、`data-minimization`、`evidence-keeping`、`in-app`、`legitimate-interest-assessment`、`machine-readable`、`non-essential`、`non-sensitive`、`or-death`、`privacy-intrusive`、`semi-automated`、`sign-off`、`to-end`

### 109. `specialized/healthcare-aging-parent-care-companion.md`  ·  Δ = 14  ·  上游覆盖率 50%

- 上游源：`specialized/healthcare-aging-parent-care-companion.md`
- 上游独有技术实体（14 个，列出前 14）：
  `care-decision`、`check-in`、`day-to-day`、`de-escalate`、`decision-support`、`follow-ups`、`highest-risk`、`one-off`、`pharmacist-led`、`problem-solve`、`rehab-to-home`、`safety-critical`、`second-guessing`、`short-term`

### 110. `specialized/legal-client-intake.md`  ·  Δ = 14  ·  上游覆盖率 22%

- 上游源：`specialized/legal-client-intake.md`
- 上游独有技术实体（14 个，列出前 14）：
  `after-hours`、`area-specific`、`at-fault`、`attorney-client`、`consultation-to-retention`、`follow-up`、`high-volume`、`in-person`、`landlord-tenant`、`multi-language`、`pre-screening`、`referral-out`、`referred-out`、`time-sensitive`

### 111. `specialized/civil-engineer.md`  ·  Δ = 14  ·  上游覆盖率 42%

- 上游源：`specialized/specialized-civil-engineer.md`
- 上游独有技术实体（14 个，列出前 14）：
  `as-built`、`authority-having-jurisdiction`、`client-specified`、`code-compliant`、`country-specific`、`detail-oriented`、`earthquake-resistant`、`jurisdiction-specific`、`multi-standard`、`project-specific`、`rule-of-thumb`、`safety-conscious`、`steel-concrete`、`wind-swept`

### 112. `specialized/salesforce-architect.md`  ·  Δ = 14  ·  上游覆盖率 30%

- 上游源：`specialized/specialized-salesforce-architect.md`
- 上游独有技术实体（14 个，列出前 14）：
  `DataWeave`、`enterprise-scale`、`go-live`、`hands-on`、`limit-aware`、`multi-cloud`、`non-negotiable`、`opt-in`、`opt-out`、`org-specific`、`selector-service-domain`、`to-external`、`trade-offs`、`version-control`

### 113. `business/finance-tracker.md`  ·  Δ = 14  ·  上游覆盖率 18%

- 上游源：`support/support-finance-tracker.md`
- 上游独有技术实体（14 个，列出前 14）：
  `CashFlowManager`、`DataFrame`、`InvestmentAnalyzer`、`OverflowError`、`TypeError`、`ValueError`、`ZeroDivisionError`、`compliance-focused`、`cost-benefit`、`cost-cutting`、`risk-adjusted`、`risk-aware`、`short-term`、`strategic-thinking`

### 114. `quality/api-tester.md`  ·  Δ = 14  ·  上游覆盖率 18%

- 上游源：`testing/testing-api-tester.md`
- 上游独有技术实体（14 个，列出前 14）：
  `${baseURL}/auth/login`、`${baseURL}/users`、`Bearer ${authToken}`、`Bearer ${rateLimitToken}`、`RATE_LIMIT_TEST_TOKEN`、`automation-driven`、`high-risk`、`invalid-email`、`per-request`、`production-like`、`quality-obsessed`、`security-conscious`、`service-to-service`、`third-party`

### 115. `frontend/persona-walkthrough.md`  ·  Δ = 13  ·  上游覆盖率 32%

- 上游源：`design/design-persona-walkthrough.md`
- 上游独有技术实体（13 个，列出前 13）：
  `above-the-fold`、`academic-psychologist`、`academic/academic-psychologist.md`、`agency-router`、`anxious-attachment`、`design-ux-researcher`、`design/design-ux-researcher.md`、`drop-off`、`framework-grounded`、`fully-realized`、`non-obvious`、`scroll-triggered`、`think-aloud`

### 116. `frontend/ui-finish-gate-reviewer.md`  ·  Δ = 13  ·  上游覆盖率 28%

- 上游源：`design/design-ui-finish-gate-reviewer.md`
- 上游独有技术实体（13 个，列出前 13）：
  `component-library`、`design-system`、`equal-weight`、`evidence-led`、`high-risk`、`highest-frequency`、`long-label`、`one-paragraph`、`pre-ship`、`product-design`、`product-specific`、`table-heavy`、`three-card`

### 117. `business/aeo-foundations.md`  ·  Δ = 13  ·  上游覆盖率 41%

- 上游源：`marketing/marketing-aeo-foundations.md`
- 上游独有技术实体（13 个，列出前 13）：
  `DevOps`、`content-type`、`data-mcp-action`、`image-based`、`llms-txt`、`opt-in`、`opt-out`、`over-budget`、`pre-1`、`robots.txt`、`search-augmented`、`token-budgeted`、`zero-risk`

### 118. `business/zhihu-strategist.md`  ·  Δ = 13  ·  上游覆盖率 13%

- 上游源：`marketing/marketing-zhihu-strategist.md`
- 上游独有技术实体（13 个，列出前 13）：
  `corporate-speak`、`credibility-first`、`cross-promote`、`expertise-sharing`、`expertly-crafted`、`follower-chasing`、`high-impact`、`high-value`、`knowledge-driven`、`question-answering`、`real-time`、`real-world`、`top-performing`

### 119. `quality/performance-benchmarker.md`  ·  Δ = 13  ·  上游覆盖率 36%

- 上游源：`testing/testing-performance-benchmarker.md`
- 上游独有技术实体（13 个，列出前 13）：
  `${baseUrl}/api/auth/login`、`${baseUrl}/api/dashboard`、`Bearer ${token}`、`application-error`、`cost-benefit`、`cost-performance`、`dashboard-data`、`data-driven`、`high-impact`、`high-performance`、`metrics-focused`、`optimization-obsessed`、`user-perceived`

### 120. `specialized/pdf-engine-architect.md`  ·  Δ = 12  ·  上游覆盖率 92%

- 上游源：`engineering/engineering-pdf-engine-architect.md`
- 上游独有技术实体（12 个，列出前 12）：
  `[data-cv-interactive]`、`anti-rasterization`、`base64`、`calc(100% - 0.5px)`、`filter: drop-shadow`、`latency-obsessed`、`post-processing`、`print-color-adjust`、`scale(${scale})`、`security-hardened`、`transform: scale(zoomRatio)`、`zero-overflow`

### 121. `business/investment-researcher.md`  ·  Δ = 12  ·  上游覆盖率 43%

- 上游源：`finance/finance-investment-researcher.md`
- 上游独有技术实体（12 个，列出前 12）：
  `buy-side`、`data-driven`、`industry-specific`、`institutional-quality`、`macro-informed`、`one-time`、`related-party`、`risk-adjusted`、`spin-off`、`stress-test`、`sum-of-parts`、`well-defined`

### 122. `business/linkedin-content-creator.md`  ·  Δ = 12  ·  上游覆盖率 37%

- 上游源：`marketing/marketing-linkedin-content-creator.md`
- 上游独有技术实体（12 个，列出前 12）：
  `#hiring`、`#techrecruiting`、`content-warmed`、`cross-promotes`、`early-stage`、`emoji-only`、`high-engagement`、`highest-leverage`、`post-launch`、`reference-worthy`、`scroll-stopping`、`to-pipeline`

### 123. `business/xiaohongshu-specialist.md`  ·  Δ = 12  ·  上游覆盖率 40%

- 上游源：`marketing/marketing-xiaohongshu-specialist.md`
- 上游独有技术实体（12 个，列出前 12）：
  `brand-specific`、`community-first`、`cross-platform`、`macro-influencers`、`micro-content`、`trend-conscious`、`trend-driven`、`trend-forward`、`trend-participation`、`trend-relevant`、`trend-riding`、`user-generated`

### 124. `security/secrets-credential-engineer.md`  ·  Δ = 12  ·  上游覆盖率 70%

- 上游源：`security/security-secrets-credential-engineer.md`
- 上游独有技术实体（12 个，列出前 12）：
  `.env`、`app`、`app.*`、`database-secrets`、`db-credentials`、`follow-up`、`hard-coded`、`lifecycle-obsessed`、`public-vs-secret`、`secret-management`、`sql-grant`、`third-party`

### 125. `specialized/business-strategist.md`  ·  Δ = 12  ·  上游覆盖率 29%

- 上游源：`specialized/business-strategist.md`
- 上游独有技术实体（12 个，列出前 12）：
  `check-ins`、`decision-making`、`highest-priority`、`land-and-expand`、`mid-market`、`one-time`、`product-led`、`product-market`、`stress-test`、`stress-tests`、`to-market`、`well-executed`

### 126. `specialized/customer-service.md`  ·  Δ = 12  ·  上游覆盖率 29%

- 上游源：`specialized/customer-service.md`
- 上游独有技术实体（12 个，列出前 12）：
  `account-specific`、`channel-appropriate`、`follow-ups`、`high-quality`、`high-value`、`language-specific`、`link-based`、`multi-channel`、`non-advisory`、`non-clinical`、`public-facing`、`win-back`

### 127. `specialized/esg-sustainability-officer.md`  ·  Δ = 12  ·  上游覆盖率 54%

- 上游源：`specialized/esg-sustainability-officer.md`
- 上游独有技术实体（12 个，列出前 12）：
  `anti-greenwashing`、`de-risks`、`double-materiality`、`high-risk`、`industry-specific`、`modern-slavery`、`multi-framework`、`nature-based`、`of-life`、`rating-agency`、`time-bound`、`zero-emission`

### 128. `specialized/real-estate-buyer-seller.md`  ·  Δ = 12  ·  上游覆盖率 48%

- 上游源：`specialized/real-estate-buyer-seller.md`
- 上游独有技术实体（12 个，列出前 12）：
  `client-focused`、`fastest-growing`、`first-time`、`high-net-worth`、`market-savvy`、`move-in`、`multi-family`、`post-closing`、`pre-negotiated`、`stay-in-touch`、`to-sale`、`world-class`

### 129. `specialized/master-plan-architect.md`  ·  Δ = 12  ·  上游覆盖率 60%

- 上游源：`specialized/specialized-master-plan-architect.md`
- 上游独有技术实体（12 个，列出前 12）：
  `.go`、`.js`、`.md`、`.py`、`.sql`、`.ts`、`anti-scope-creep`、`blast-radius`、`file-editing`、`open-source`、`real-time`、`red-team`

### 130. `specialized/zk-steward.md`  ·  Δ = 12  ·  上游覆盖率 68%

- 上游源：`specialized/zk-steward.md`
- 上游独有技术实体（12 个，列出前 12）：
  `.cursor/skills/`、`YYYYMMDD_01_[Book_Title]_Execution_Plan.md`、`connection-obsessed`、`core-entry`、`cross-domain`、`file-and-network`、`in-one`、`memory/YYYY-MM-DD.md`、`plan-then-execute`、`skills/`、`validation-driven`、`zk-steward-companion`

### 131. `data-ai/prompt-engineer.md`  ·  Δ = 11  ·  上游覆盖率 59%

- 上游源：`engineering/engineering-prompt-engineer.md`
- 上游独有技术实体（11 个，列出前 11）：
  `context-window`、`cross-model`、`experimentally-minded`、`high-quality`、`injection-resistance`、`instruction-following`、`open-source`、`production-grade`、`re-run`、`role-confusion`、`role-locking`

### 132. `business/financial-analyst.md`  ·  Δ = 11  ·  上游覆盖率 56%

- 上游源：`finance/finance-financial-analyst.md`
- 上游独有技术实体（11 个，列出前 11）：
  `OpEx`、`board-ready`、`data-driven`、`decision-support`、`full-year`、`high-frequency`、`learning-enhanced`、`macro-sensitivity`、`multi-billion-dollar`、`non-finance`、`trade-offs`

### 133. `game-development/godot-shader-developer.md`  ·  Δ = 11  ·  上游覆盖率 80%

- 上游源：`game-development/godot/godot-shader-developer.md`
- 上游独有技术实体（11 个，列出前 11）：
  `GodotShaderDeveloper`、`RenderData`、`RenderingServer`、`artist-accessible`、`multi-stage`、`performance-accountable`、`pixel-art`、`precision-minded`、`vec2`、`vec3`、`vec4`

### 134. `specialized/gis-drone-reality-mapping.md`  ·  Δ = 11  ·  上游覆盖率 39%

- 上游源：`gis/gis-drone-reality-mapping.md`
- 上游独有技术实体（11 个，列出前 11）：
  `DroneRealityMapping`、`SenseFly`、`high-quality`、`industry-standard`、`line-of-sight`、`motion-blurred`、`over-smooth`、`process-driven`、`production-ready`、`real-time`、`weather-aware`

### 135. `business/wechat-official-account.md`  ·  Δ = 11  ·  上游覆盖率 15%

- 上游源：`marketing/marketing-wechat-official-account.md`
- 上游独有技术实体（11 个，列出前 11）：
  `calls-to-action`、`click-through`、`long-term`、`multi-format`、`post-purchase`、`relationship-building`、`self-service`、`subscriber-exclusive`、`top-performing`、`trend-responsive`、`user-generated`

### 136. `business/paid-media-programmatic-buyer.md`  ·  Δ = 11  ·  上游覆盖率 45%

- 上游源：`paid-media/paid-media-programmatic-buyer.md`
- 上游独有技术实体（11 个，列出前 11）：
  `WebFetch`、`WebSearch`、`audience-first`、`cross-channel`、`high-value`、`last-click`、`low-performing`、`mid-roll`、`multi-format`、`pre-roll`、`self-serve`

### 137. `business/behavioral-nudge-engine.md`  ·  Δ = 11  ·  上游覆盖率 35%

- 上游源：`product/product-behavioral-nudge-engine.md`
- 上游独有技术实体（11 个，列出前 11）：
  `UserPsyche`、`default-biases`、`follow-ups`、`friction-free`、`micro-sprint`、`micro-win`、`non-intrusive`、`off-ramps`、`time-boxing`、`tone-deaf`、`world-class`

### 138. `business/sprint-prioritizer.md`  ·  Δ = 11  ·  上游覆盖率 0%

- 上游源：`product/product-sprint-prioritizer.md`
- 上游独有技术实体（11 个，列出前 11）：
  `WebFetch`、`WebSearch`、`buy-in`、`data-driven`、`evidence-based`、`follow-up`、`person-months`、`risk-based`、`sign-off`、`sprint-to-sprint`、`year-over-year`

### 139. `business/studio-producer.md`  ·  Δ = 11  ·  上游覆盖率 8%

- 上游源：`project-management/project-management-studio-producer.md`
- 上游独有技术实体（11 个，列出前 11）：
  `business-focused`、`executive-level`、`high-level`、`high-performing`、`high-value`、`leadership-oriented`、`long-term`、`multi-project`、`next-generation`、`on-time`、`short-term`

### 140. `security/blockchain-security-auditor.md`  ·  Δ = 11  ·  上游覆盖率 88%

- 上游源：`security/security-blockchain-security-auditor.md`
- 上游独有技术实体（11 个，列出前 11）：
  `agreed-upon`、`api-reference`、`front-running`、`line-by-line`、`off-by-one`、`pattern-match`、`protocol-defined`、`protocol-level`、`real-world`、`step-by-step`、`time-weighted`

### 141. `security/cloud-security-architect.md`  ·  Δ = 11  ·  上游覆盖率 88%

- 上游源：`security/security-cloud-security-architect.md`
- 上游独有技术实体（11 个，列出前 11）：
  `anti-patterns`、`built-in`、`cloud-specific`、`developer-friendly`、`industry-specific`、`non-negotiable`、`on-prem`、`real-time`、`security-focused`、`security-relevant`、`systems-thinker`

### 142. `specialized/identity-graph-operator.md`  ·  Δ = 11  ·  上游覆盖率 42%

- 上游源：`specialized/identity-graph-operator.md`
- 上游独有技术实体（11 个，列出前 11）：
  `IdentityMatcher`、`ValueError`、`counter-evidence`、`entity-type`、`evidence-based`、`field-by-field`、`multi-agent`、`real-world`、`source-specific`、`type-aware`、`vs-agent`

### 143. `specialized/personal-growth-mentor.md`  ·  Δ = 11  ·  上游覆盖率 15%

- 上游源：`specialized/personal-growth-mentor.md`
- 上游独有技术实体（11 个，列出前 11）：
  `check-ins`、`cross-domain`、`execution-oriented`、`follow-through`、`high-leverage`、`life-improvement`、`low-value`、`one-off`、`over-planning`、`self-image`、`self-sabotaging`

### 144. `specialized/specialized-korean-business-navigator.md`  ·  Δ = 11  ·  上游覆盖率 31%

- 上游源：`specialized/specialized-korean-business-navigator.md`
- 上游独有技术实体（11 个，列出前 11）：
  `follow-ups`、`hierarchy-aware`、`in-person`、`non-urgent`、`on-1`、`presentation-ready`、`relationship-first`、`semi-formal`、`title-based`、`well-timed`、`year-end`

### 145. `architecture/backend-architect.md`  ·  Δ = 10  ·  上游覆盖率 58%

- 上游源：`engineering/engineering-backend-architect.md`
- 上游独有技术实体（10 个，列出前 10）：
  `cost-effectively`、`event-driven`、`large-scale`、`lock-in`、`multi-layer`、`near-term`、`oauth2`、`reliability-obsessed`、`scalability-minded`、`security-focused`

### 146. `specialized/filament-optimization-specialist.md`  ·  Δ = 10  ·  上游覆盖率 82%

- 上游源：`engineering/engineering-filament-optimization-specialist.md`
- 上游独有技术实体（10 个，列出前 10）：
  `14:00 — Autorijden`、`anti-pattern`、`anti-patterns`、`by-side`、`human-readable`、`over-design`、`production-ready`、`self-explanatory`、`surface-level`、`user-focused`

### 147. `specialized/senior-developer.md`  ·  Δ = 10  ·  上游覆盖率 67%

- 上游源：`engineering/engineering-senior-developer.md`
- 上游独有技术实体（10 个，列出前 10）：
  `EngineeringSeniorDeveloper`、`detail-oriented`、`full-stack`、`innovation-driven`、`magnetic-element`、`micro-interactions`、`opacity-80`、`performance-focused`、`premium-navigation`、`wow-factor`

### 148. `specialized/narrative-designer.md`  ·  Δ = 10  ·  上游覆盖率 38%

- 上游源：`game-development/narrative-designer.md`
- 上游独有技术实体（10 个，列出前 10）：
  `NarrativeDesigner`、`franchise-defining`、`open-world`、`player-agency`、`pre-authored`、`prose-precise`、`real-world`、`systems-rigorous`、`world-build`、`world-coherence`

### 149. `security/incident-responder.md`  ·  Δ = 10  ·  上游覆盖率 91%

- 上游源：`security/security-incident-responder.md`
- 上游独有技术实体（10 个，列出前 10）：
  `ForEach`、`follow-through`、`hard-won`、`logged-on-users`、`non-vendor`、`pattern-match`、`post-mortems`、`pre-existing`、`real-world`、`recent-executables`

### 150. `specialized/accounts-payable-agent.md`  ·  Δ = 10  ·  上游覆盖率 9%

- 上游源：`specialized/accounts-payable-agent.md`
- 上游独有技术实体（10 个，列出前 10）：
  `AccountsPayable`、`Milestone: ${request.milestone}`、`audit-minded`、`auto-approve`、`human-defined`、`near-instant`、`one-time`、`time-and-materials`、`wrong-account`、`zero-tolerance`

### 151. `business/workflow-optimizer.md`  ·  Δ = 10  ·  上游覆盖率 38%

- 上游源：`testing/testing-workflow-optimizer.md`
- 上游独有技术实体（10 个，列出前 10）：
  `ValueError`、`WorkflowOptimizer`、`automation-oriented`、`data-driven`、`decision-making`、`employee-driven`、`enterprise-wide`、`process-related`、`rule-based`、`user-empathetic`

### 152. `frontend/visual-storyteller.md`  ·  Δ = 9  ·  上游覆盖率 31%

- 上游源：`design/design-visual-storyteller.md`
- 上游独有技术实体（9 个，列出前 9）：
  `audience-research`、`brand-guidelines`、`cross-platform`、`first-round`、`memory-bank`、`narrative-focused`、`platform-specific`、`post-production`、`text-only`

### 153. `specialized/embedded-firmware-engineer.md`  ·  Δ = 9  ·  上游覆盖率 73%

- 上游源：`engineering/engineering-embedded-firmware-engineer.md`
- 上游独有技术实体（9 个，列出前 9）：
  `__packed`、`bottom-up`、`configUSE_PREEMPTION`、`false`、`hardware-aware`、`nRF5`、`non-blocking`、`production-grade`、`project-specific`

### 154. `integration/servicenow-developer-mentor.md`  ·  Δ = 9  ·  上游覆盖率 81%

- 上游源：`engineering/engineering-servicenow-developer-mentor.md`
- 上游独有技术实体（9 个，列出前 9）：
  `GlideDateTime`、`after`、`after update`、`auto-set`、`before update`、`evidence-driven`、`first-class`、`gs.log`、`step-by-step`

### 155. `architecture/software-architect.md`  ·  Δ = 9  ·  上游覆盖率 31%

- 上游源：`engineering/engineering-software-architect.md`
- 上游独有技术实体（9 个，列出前 9）：
  `collection-like`、`decision-making`、`domain-focused`、`early-stage`、`pass-through`、`trade-off`、`trade-off-conscious`、`use-case`、`vendor-specific`

### 156. `business/tax-strategist.md`  ·  Δ = 9  ·  上游覆盖率 57%

- 上游源：`finance/finance-tax-strategist.md`
- 上游独有技术实体（9 个，列出前 9）：
  `country-by-country`、`multi-jurisdictional`、`non-compliance`、`non-negotiable`、`position-strength`、`pre-tax`、`short-term`、`split-off`、`well-documented`

### 157. `specialized/gis-cartography-designer.md`  ·  Δ = 9  ·  上游覆盖率 57%

- 上游源：`gis/gis-cartography-designer.md`
- 上游独有技术实体（9 个，列出前 9）：
  `CartographyDesigner`、`color-conscious`、`map-appropriate`、`multi-language`、`non-data-ink`、`real-time`、`sans-serif`、`typography-aware`、`well-designed`

### 158. `specialized/gis-web-gis-developer.md`  ·  Δ = 9  ·  上游覆盖率 36%

- 上游源：`gis/gis-web-gis-developer.md`
- 上游独有技术实体（9 个，列出前 9）：
  `MapLibre`、`auto-refresh`、`cross-browser`、`end-user`、`public-facing`、`tap-to-identify`、`time-aware`、`token-based`、`web-friendly`

### 159. `business/baidu-seo-specialist.md`  ·  Δ = 9  ·  上游覆盖率 18%

- 上游源：`marketing/marketing-baidu-seo-specialist.md`
- 上游独有技术实体（9 个，列出前 9）：
  `ByteDance`、`WeChat`、`cross-border`、`dialect-influenced`、`high-authority`、`how-to`、`question-intent`、`step-by-step`、`top-ranking`

### 160. `business/carousel-growth-engine.md`  ·  Δ = 9  ·  上游覆盖率 85%

- 上游源：`marketing/marketing-carousel-growth-engine.md`
- 上游独有技术实体（9 个，列出前 9）：
  `JavaScript`、`bestTimes`、`data-driven`、`long-term`、`mobile-first`、`niche-relevant`、`performance-based`、`text-only`、`to-feed`

### 161. `business/douyin-strategist.md`  ·  Δ = 9  ·  上游覆盖率 44%

- 上游源：`marketing/marketing-douyin-strategist.md`
- 上游独有技术实体（9 个，列出前 9）：
  `beat-synced`、`before-after`、`completion-rate`、`data-sharp`、`every-other-day`、`execution-first`、`full-funnel`、`high-completion-rate`、`question-based`

### 162. `business/instagram-curator.md`  ·  Δ = 9  ·  上游覆盖率 25%

- 上游源：`marketing/marketing-instagram-curator.md`
- 上游独有技术实体（9 个，列出前 9）：
  `call-to-action`、`conversion-focused`、`cross-promotion`、`micro-content`、`multi-format`、`platform-native`、`post-publication`、`scroll-stopping`、`the-scenes`

### 163. `business/x-twitter-intelligence-analyst.md`  ·  Δ = 9  ·  上游覆盖率 0%

- 上游源：`marketing/marketing-x-twitter-intelligence-analyst.md`
- 上游独有技术实体（9 个，列出前 9）：
  `BrandName`、`cross-account`、`decision-grade`、`evidence-backed`、`fast-moving`、`high-signal`、`single-source`、`threshold-based`、`user-approved`

### 164. `business/paid-media-tracking-specialist.md`  ·  Δ = 9  ·  上游覆盖率 53%

- 上游源：`paid-media/paid-media-tracking-specialist.md`
- 上游独有技术实体（9 个，列出前 9）：
  `DataLayer`、`WebFetch`、`WebSearch`、`client-side`、`cross-reference`、`cross-referencing`、`double-count`、`micro-conversions`、`platform-reported`

### 165. `business/trend-researcher.md`  ·  Δ = 9  ·  上游覆盖率 18%

- 上游源：`product/product-trend-researcher.md`
- 上游独有技术实体（9 个，列出前 9）：
  `WebFetch`、`WebSearch`、`bottom-up`、`cross-verification`、`data-driven`、`drill-down`、`fact-checking`、`go-to-market`、`real-time`

### 166. `security/ai-generated-code-auditor.md`  ·  Δ = 9  ·  上游覆盖率 84%

- 上游源：`security/security-ai-generated-code-auditor.md`
- 上游独有技术实体（9 个，列出前 9）：
  `"You are a bot. " + req.body.message`、`DevTools`、`PostHog`、`hard-won`、`local-first`、`publishable-vs-secret`、`re-scan`、`tool-calling`、`vibe-coded`

### 167. `specialized/terminal-integration-specialist.md`  ·  Δ = 9  ·  上游覆盖率 10%

- 上游源：`spatial-computing/terminal-integration-specialist.md`
- 上游独有技术实体（9 个，列出前 9）：
  `AppKit`、`GitHub`、`SwiftTerm`、`VoiceOver`、`application-specific`、`client-side`、`high-frequency`、`server-side`、`vt100`

### 168. `specialized/specialized-chief-of-staff.md`  ·  Δ = 9  ·  上游覆盖率 31%

- 上游源：`specialized/specialized-chief-of-staff.md`
- 上游独有技术实体（9 个，列出前 9）：
  `async-friendly`、`decision-maker`、`high-stakes`、`highest-value`、`in-app`、`low-value`、`one-pager`、`post-meeting`、`to-have`

### 169. `business/analytics-reporter.md`  ·  Δ = 9  ·  上游覆盖率 36%

- 上游源：`support/support-analytics-reporter.md`
- 上游独有技术实体（9 个，列出前 9）：
  `accuracy-focused`、`cost-benefit`、`cross-functional`、`drill-down`、`gut-feeling`、`high-value`、`insight-driven`、`per-row`、`real-time`

### 170. `business/executive-summary-generator.md`  ·  Δ = 9  ·  上游覆盖率 10%

- 上游源：`support/support-executive-summary-generator.md`
- 上游独有技术实体（9 个，列出前 9）：
  `McKinsey`、`action-oriented`、`consultant-grade`、`cross-functional`、`decision-makers`、`impact-focused`、`insight-focused`、`outcome-driven`、`top-down`

### 171. `quality/reality-checker.md`  ·  Δ = 9  ·  上游覆盖率 65%

- 上游源：`testing/testing-reality-checker.md`
- 上游独有技术实体（9 个，列出前 9）：
  `RealityIntegration`、`TestingRealityChecker`、`by-step`、`evidence-obsessed`、`fantasy-immune`、`integration-mobile`、`journey-step-2`、`professional-grade`、`system-wide`

### 172. `frontend/inclusive-visuals-specialist.md`  ·  Δ = 8  ·  上游覆盖率 20%

- 上游源：`design/design-inclusive-visuals-specialist.md`
- 上游独有技术实体（8 个，列出前 8）：
  `enterprise-wide`、`evidence-driven`、`hyper-saturated`、`motion-prompts`、`non-stereotypical`、`over-correction`、`sci-fi`、`stock-photo`

### 173. `data-ai/ai-engineer.md`  ·  Δ = 8  ·  上游覆盖率 58%

- 上游源：`engineering/engineering-ai-engineer.md`
- 上游独有技术实体（8 个，列出前 8）：
  `auto-scaling`、`cross-validation`、`data-driven`、`data-sources`、`ethically-conscious`、`memory-bank`、`performance-focused`、`privacy-preserving`

### 174. `specialized/level-designer.md`  ·  Δ = 8  ·  上游覆盖率 50%

- 上游源：`game-development/level-designer.md`
- 上游独有技术实体（8 个，列出前 8）：
  `LevelDesigner`、`advanced-player`、`gameplay-critical`、`pacing-obsessed`、`player-path`、`top-down`、`world-build`、`world-building`

### 175. `game-development/unreal-systems-engineer.md`  ·  Δ = 8  ·  上游覆盖率 93%

- 上游源：`game-development/unreal-engine/unreal-systems-engineer.md`
- 上游独有技术实体（8 个，列出前 8）：
  `engine-tick-level`、`experience-based`、`high-performance`、`low-frequency`、`mid-frame`、`network-replicated`、`shipping-quality`、`systems-thinker`

### 176. `data-ai/spatial-data-engineer.md`  ·  Δ = 8  ·  上游覆盖率 43%

- 上游源：`gis/gis-spatial-data-engineer.md`
- 上游独有技术实体（8 个，列出前 8）：
  `SpatialDataEngineer`、`automation-obsessed`、`city-scale`、`cross-border`、`format-agnostic`、`non-standard`、`one-off`、`production-ready`

### 177. `specialized/healthcare-clinical-evidence-agent.md`  ·  Δ = 8  ·  上游覆盖率 11%

- 上游源：`healthcare/healthcare-clinical-evidence-agent.md`
- 上游独有技术实体（8 个，列出前 8）：
  `external-facing`、`forward-looking`、`non-negotiable`、`of-care`、`patient-facing`、`peer-reviewed`、`sign-off`、`specialist-level`

### 178. `business/app-store-optimizer.md`  ·  Δ = 8  ·  上游覆盖率 27%

- 上游源：`marketing/marketing-app-store-optimizer.md`
- 上游独有技术实体（8 个，列出前 8）：
  `conversion-focused`、`decision-making`、`discoverability-oriented`、`high-opportunity`、`long-term`、`low-competition`、`over-month`、`results-obsessed`

### 179. `business/developer-community-builder.md`  ·  Δ = 8  ·  上游覆盖率 73%

- 上游源：`marketing/marketing-developer-community-builder.md`
- 上游独有技术实体（8 个，列出前 8）：
  `co-hosted`、`community-reported`、`de-escalation`、`low-risk`、`one-time`、`opt-in`、`question-resolved`、`step-by-step`

### 180. `business/reddit-community-builder.md`  ·  Δ = 8  ·  上游覆盖率 0%

- 上游源：`marketing/marketing-reddit-community-builder.md`
- 上游独有技术实体（8 个，列出前 8）：
  `brand-related`、`follow-up`、`high-performing`、`how-to`、`long-term`、`relationship-first`、`value-add`、`value-driven`

### 181. `business/tiktok-strategist.md`  ·  Δ = 8  ·  上游覆盖率 27%

- 上游源：`marketing/marketing-tiktok-strategist.md`
- 上游独有技术实体（8 个，列出前 8）：
  `YouTube`、`attention-grabbing`、`brand-related`、`call-to-action`、`click-through`、`data-driven`、`micro-content`、`mid-tier`

### 182. `business/twitter-engager.md`  ·  Δ = 8  ·  上游覆盖率 38%

- 上游源：`marketing/marketing-twitter-engager.md`
- 上游独有技术实体（8 个，列出前 8）：
  `co-hosts`、`community-driven`、`decision-making`、`fast-paced`、`information-rich`、`live-tweeting`、`problem-solving`、`the-scenes`

### 183. `business/paid-media-auditor.md`  ·  Δ = 8  ·  上游覆盖率 33%

- 上游源：`paid-media/paid-media-auditor.md`
- 上游独有技术实体（8 个，列出前 8）：
  `WebFetch`、`WebSearch`、`cross-domain`、`detail-obsessed`、`high-priority`、`multi-platform`、`performance-drop`、`surface-level`

### 184. `business/paid-media-search-query-analyst.md`  ·  Δ = 8  ·  上游覆盖率 64%

- 上游源：`paid-media/paid-media-search-query-analyst.md`
- 上游独有技术实体（8 个，列出前 8）：
  `WebFetch`、`WebSearch`、`one-time`、`over-month`、`query-sculpting`、`query-to-intent`、`signal-to-noise`、`waste-over-time`

### 185. `business/sales-deal-strategist.md`  ·  Δ = 8  ·  上游覆盖率 0%

- 上游源：`sales/sales-deal-strategist.md`
- 上游独有技术实体（8 个，列出前 8）：
  `at-risk`、`by-stage`、`decision-making`、`early-warning`、`multi-entity`、`multi-threaded`、`new-hire`、`title-matching`

### 186. `business/sales-engineer.md`  ·  Δ = 8  ·  上游覆盖率 11%

- 上游源：`sales/sales-engineer.md`
- 上游独有技术实体（8 个，列出前 8）：
  `counter-moves`、`deep-dive`、`fact-based`、`head-to-head`、`long-term`、`on-prem`、`pre-sales`、`to-end`

### 187. `architecture/automation-governance-architect.md`  ·  Δ = 8  ·  上游覆盖率 56%

- 上游源：`specialized/automation-governance-architect.md`
- 上游独有技术实体（8 个，列出前 8）：
  `PROD-CRM-LeadIntake-CreateRecord-v1.0`、`TEST-DMS-DocumentArchive-Upload-v0.4`、`fix2`、`high-value`、`human-controlled`、`low-value`、`operations-focused`、`platform-agnostic`

### 188. `specialized/cultural-intelligence-strategist.md`  ·  Δ = 8  ·  上游覆盖率 0%

- 上游源：`specialized/specialized-cultural-intelligence-strategist.md`
- 上游独有技术实体（8 个，列出前 8）：
  `anti-bias`、`copy-pasteable`、`end-user`、`multi-cultural`、`negative-prompt`、`non-core`、`right-to-left`、`tone-deaf`

### 189. `quality/evidence-collector.md`  ·  Δ = 8  ·  上游覆盖率 50%

- 上游源：`testing/testing-evidence-collector.md`
- 上游独有技术实体（8 个，列出前 8）：
  `accordion-0-after`、`accordion-0-before`、`ai/agents/qa.md`、`detail-oriented`、`evidence-obsessed`、`fantasy-allergic`、`form-empty`、`form-filled`

### 190. `specialized/narratologist.md`  ·  Δ = 7  ·  上游覆盖率 0%

- 上游源：`academic/academic-narratologist.md`
- 上游独有技术实体（7 个，列出前 7）：
  `McKee`、`disruption-based`、`framework-based`、`load-bearing`、`three-act`、`trade-offs`、`well-crafted`

### 191. `frontend/ux-researcher.md`  ·  Δ = 7  ·  上游覆盖率 22%

- 上游源：`design/design-ux-researcher.md`
- 上游独有技术实体（7 个，列出前 7）：
  `assumption-based`、`cross-cultural`、`decision-making`、`follow-up`、`note-taker`、`product-market`、`think-aloud`

### 192. `integration/ats-validator-architect.md`  ·  Δ = 7  ·  上游覆盖率 92%

- 上游源：`engineering/engineering-ats-validator-architect.md`
- 上游独有技术实体（7 个，列出前 7）：
  `\uE000-\uF8FF`、`black-box`、`dead-on-arrival`、`to-7`、`to-bottom`、`to-right`、`white-font`

### 193. `specialized/china-network-engineer.md`  ·  Δ = 7  ·  上游覆盖率 93%

- 上游源：`engineering/engineering-china-network-engineer.md`
- 上游独有技术实体（7 个，列出前 7）：
  `1/0/1`、`Ethernet0`、`Ethernet1`、`ip route`、`ip route-static`、`vlan batch`、`year-old`

### 194. `specialized/cms-developer.md`  ·  Δ = 7  ·  上游覆盖率 91%

- 上游源：`engineering/engineering-cms-developer.md`
- 上游独有技术实体（7 个，列出前 7）：
  `assistive-technology`、`battle-hardened`、`case-study`、`drush cim/cex`、`front-end`、`high-value`、`my-theme`

### 195. `specialized/universal-document-compiler.md`  ·  Δ = 7  ·  上游覆盖率 93%

- 上游源：`engineering/engineering-universal-document-compiler.md`
- 上游独有技术实体（7 个，列出前 7）：
  `. Bind a zero-overhead`、`and-drop`、`anti-dogmatic`、`bi-directional`、`human-intended`、`two-way`、`user-defined`

### 196. `data-ai/spatial-data-scientist.md`  ·  Δ = 7  ·  上游覆盖率 12%

- 上游源：`gis/gis-spatial-data-scientist.md`
- 上游独有技术实体（7 个，列出前 7）：
  `GeoPandas`、`PyTorch`、`SpatialDataScientist`、`hypothesis-driven`、`large-scale`、`scikit-learn`、`two-step`

### 197. `specialized/healthcare-sovereign-health-systems-agent.md`  ·  Δ = 7  ·  上游覆盖率 36%

- 上游源：`healthcare/healthcare-sovereign-health-systems-agent.md`
- 上游独有技术实体（7 个，列出前 7）：
  `co-authored`、`external-facing`、`in-country`、`jurisdiction-specific`、`mandate-holders`、`short-term`、`sovereign-level`

### 198. `business/paid-media-creative-strategist.md`  ·  Δ = 7  ·  上游覆盖率 22%

- 上游源：`paid-media/paid-media-creative-strategist.md`
- 上游独有技术实体（7 个，列出前 7）：
  `WebFetch`、`WebSearch`、`ad-level`、`ad-to-landing-page`、`geo-specific`、`hook-body`、`multi-variate`

### 199. `specialized/visionos-spatial-engineer.md`  ·  Δ = 7  ·  上游覆盖率 46%

- 上游源：`spatial-computing/visionos-spatial-engineer.md`
- 上游独有技术实体（7 个，列出前 7）：
  `WindowGroup`、`cross-platform`、`depth-aware`、`visionos-26-release-notes`、`visionos-release-notes`、`whats-new`、`wwdc2025`

### 200. `specialized/xr-cockpit-interaction-specialist.md`  ·  Δ = 7  ·  上游覆盖率 30%

- 上游源：`spatial-computing/xr-cockpit-interaction-specialist.md`
- 上游独有技术实体（7 个，列出前 7）：
  `cockpit-based`、`comfort-aware`、`fixed-perspective`、`high-presence`、`multi-input`、`physics-conscious`、`simulator-accurate`

### 201. `specialized/xr-immersive-developer.md`  ·  Δ = 7  ·  上游覆盖率 12%

- 上游源：`spatial-computing/xr-immersive-developer.md`
- 上游独有技术实体（7 个，列出前 7）：
  `HoloLens`、`browser-based`、`component-driven`、`cutting-edge`、`neon-cyan`、`performance-aware`、`real-time`

### 202. `specialized/sales-data-extraction-agent.md`  ·  Δ = 7  ·  上游覆盖率 0%

- 上游源：`specialized/sales-data-extraction-agent.md`
- 上游独有技术实体（7 个，列出前 7）：
  `.xls`、`.xlsx`、`revenue/sales/total_sales`、`row-level`、`units/qty/quantity`、`well-formatted`、`~$`

### 203. `frontend/image-prompt-engineer.md`  ·  Δ = 6  ·  上游覆盖率 14%

- 上游源：`design/design-image-prompt-engineer.md`
- 上游独有技术实体（6 个，列出前 6）：
  `avant-garde`、`eye-level`、`multi-prompt`、`narrative-driven`、`platform-specific`、`professional-quality`

### 204. `game-development/blender-addon-engineer.md`  ·  Δ = 6  ·  上游覆盖率 80%

- 上游源：`game-development/blender/blender-addon-engineer.md`
- 上游独有技术实体（6 个，列出前 6）：
  `BlenderAddonEngineer`、`artist-empathetic`、`asset-pipeline`、`automation-obsessed`、`engine-side`、`reliability-minded`

### 205. `specialized/game-designer-specialized.md`  ·  Δ = 6  ·  上游覆盖率 57%

- 上游源：`game-development/game-designer.md`
- 上游独有技术实体（6 个，列出前 6）：
  `GameDesigner`、`balance-obsessed`、`clarity-first`、`genre-hybrid`、`meta-progression`、`systems-thinker`

### 206. `game-development/unity-editor-tool-developer.md`  ·  Δ = 6  ·  上游覆盖率 94%

- 上游源：`game-development/unity/unity-editor-tool-developer.md`
- 上游独有技术实体（6 个，列出前 6）：
  `AssetDatabase.LoadAssetAtPath`、`compile-time`、`inspector-shown`、`pipeline-first`、`pre-build`、`user-hostile`

### 207. `game-development/unity-multiplayer-engineer.md`  ·  Δ = 6  ·  上游覆盖率 94%

- 上游源：`game-development/unity/unity-multiplayer-engineer.md`
- 上游独有技术实体（6 个，列出前 6）：
  `CreateLobby`、`UnityMultiplayerEngineer`、`cheat-vigilant`、`determinism-focused`、`game-state`、`reliability-obsessed`

### 208. `specialized/gis-analyst.md`  ·  Δ = 6  ·  上游覆盖率 40%

- 上游源：`gis/gis-analyst.md`
- 上游独有技术实体（6 个，列出前 6）：
  `detail-oriented`、`hands-on`、`legend-rich`、`publication-ready`、`spot-check`、`to-day`

### 209. `specialized/gis-bim-specialist.md`  ·  Δ = 6  ·  上游覆盖率 14%

- 上游源：`gis/gis-bim-specialist.md`
- 上游独有技术实体（6 个，列出前 6）：
  `ArcPy`、`building-scale`、`floor-aware`、`geographic-scale`、`open-source`、`real-world`

### 210. `business/ai-citation-strategist.md`  ·  Δ = 6  ·  上游覆盖率 40%

- 上游源：`marketing/marketing-ai-citation-strategist.md`
- 上游独有技术实体（6 个，列出前 6）：
  `feature-by-feature`、`feature-focused`、`next-round`、`non-deterministic`、`point-in-time`、`well-structured`

### 211. `business/content-creator-marketing.md`  ·  Δ = 6  ·  上游覆盖率 40%

- 上游源：`marketing/marketing-content-creator.md`
- 上游独有技术实体（6 个，列出前 6）：
  `WebFetch`、`WebSearch`、`audience-first`、`cross-platform`、`platform-specific`、`search-friendly`

### 212. `business/social-media-strategist.md`  ·  Δ = 6  ·  上游覆盖率 33%

- 上游源：`marketing/marketing-social-media-strategist.md`
- 上游独有技术实体（6 个，列出前 6）：
  `InMail`、`WebFetch`、`WebSearch`、`cross-platform`、`real-time`、`time-sensitive`

### 213. `business/paid-social-strategist.md`  ·  Δ = 6  ·  上游覆盖率 57%

- 上游源：`paid-media/paid-media-paid-social-strategist.md`
- 上游独有技术实体（6 个，列出前 6）：
  `WebFetch`、`WebSearch`、`cross-channel`、`double-counting`、`net-new`、`platform-specific`

### 214. `business/ppc-strategist.md`  ·  Δ = 6  ·  上游覆盖率 54%

- 上游源：`paid-media/paid-media-ppc-strategist.md`
- 上游独有技术实体（6 个，列出前 6）：
  `WebFetch`、`WebSearch`、`cross-platform`、`enterprise-scale`、`large-scale`、`platform-specific`

### 215. `business/studio-operations.md`  ·  Δ = 6  ·  上游覆盖率 0%

- 上游源：`project-management/project-management-studio-operations.md`
- 上游独有技术实体（6 个，列出前 6）：
  `day-to-day`、`detail-oriented`、`industry-specific`、`service-focused`、`service-oriented`、`step-by-step`

### 216. `specialized/xr-interface-architect.md`  ·  Δ = 6  ·  上游覆盖率 0%

- 上游源：`spatial-computing/xr-interface-architect.md`
- 上游独有技术实体（6 个，列出前 6）：
  `comfort-based`、`gaze-first`、`layout-conscious`、`neon-green`、`research-driven`、`sensory-aware`

### 217. `specialized/specialized-french-consulting-market.md`  ·  Δ = 6  ·  上游覆盖率 46%

- 上游源：`specialized/specialized-french-consulting-market.md`
- 上游独有技术实体（6 个，列出前 6）：
  `counter-arguments`、`go-live`、`in-person`、`mid-negotiation`、`on-site`、`year-end`

### 218. `specialized/psychologist-academic.md`  ·  Δ = 5  ·  上游覆盖率 29%

- 上游源：`academic/academic-psychologist.md`
- 上游独有技术实体（5 个，列出前 5）：
  `anxious-preoccupied`、`non-deterministic`、`people-pleasers`、`research-backed`、`self-help`

### 219. `database/database-optimizer.md`  ·  Δ = 5  ·  上游覆盖率 29%

- 上游源：`engineering/engineering-database-optimizer.md`
- 上游独有技术实体（5 个，列出前 5）：
  `PgBouncer`、`PlanetScale`、`performance-focused`、`supabase-js`、`transaction-pooler`

### 220. `specialized/network-engineer.md`  ·  Δ = 5  ·  上游覆盖率 94%

- 上游源：`engineering/engineering-network-engineer.md`
- 上游独有技术实体（5 个，列出前 5）：
  `GigabitEthernet1`、`packet-tracer input ... detailed`、`show`、`show configuration \| compare`、`show ip cef exact-route`

### 221. `game-development/godot-gameplay-scripter.md`  ·  Δ = 5  ·  上游覆盖率 95%

- 上游源：`game-development/godot/godot-gameplay-scripter.md`
- 上游独有技术实体（5 个，列出前 5）：
  `DiedEventHandler`、`signal-integrity`、`strict`、`strict mode`、`type-safety`

### 222. `game-development/unreal-multiplayer-architect.md`  ·  Δ = 5  ·  上游覆盖率 96%

- 上游源：`game-development/unreal-engine/unreal-multiplayer-architect.md`
- 上游独有技术实体（5 个，列出前 5）：
  `AttributeSet`、`ReplicationGraph`、`UFUNCTION(Server)`、`cheat-paranoid`、`latency-aware`

### 223. `specialized/gis-3d-scene-developer.md`  ·  Δ = 5  ·  上游覆盖率 62%

- 上游源：`gis/gis-3d-scene-developer.md`
- 上游独有技术实体（5 个，列出前 5）：
  `city-scale`、`detail-obsessed`、`performance-conscious`、`real-time`、`time-dynamic`

### 224. `specialized/gis-geoprocessing-specialist.md`  ·  Δ = 5  ·  上游覆盖率 62%

- 上游源：`gis/gis-geoprocessing-specialist.md`
- 上游独有技术实体（5 个，列出前 5）：
  `GeoprocessingSpecialist`、`anti-patterns`、`documentation-focused`、`non-programmers`、`one-off`

### 225. `specialized/gis-solution-engineer.md`  ·  Δ = 5  ·  上游覆盖率 64%

- 上游源：`gis/gis-solution-engineer.md`
- 上游独有技术实体（5 个，列出前 5）：
  `demo-obsessed`、`hands-on`、`pop-ups`、`production-ready`、`proof-of-concepts`

### 226. `specialized/gis-technical-consultant.md`  ·  Δ = 5  ·  上游覆盖率 17%

- 上游源：`gis/gis-technical-consultant.md`
- 上游独有技术实体（5 个，列出前 5）：
  `GeoPackage`、`business-fluent`、`end-to-end`、`open-source`、`vendor-neutral`

### 227. `business/book-co-author.md`  ·  Δ = 5  ·  上游覆盖率 29%

- 上游源：`marketing/marketing-book-co-author.md`
- 上游独有技术实体（5 个，列出前 5）：
  `Chapter 1 - Version 2 - ready for approval`、`business-book`、`first-person`、`long-form`、`open-ended`

### 228. `business/feedback-synthesizer.md`  ·  Δ = 5  ·  上游覆盖率 17%

- 上游源：`product/product-feedback-synthesizer.md`
- 上游独有技术实体（5 个，列出前 5）：
  `WebFetch`、`WebSearch`、`at-risk`、`data-driven`、`real-time`

### 229. `business/experiment-tracker.md`  ·  Δ = 5  ·  上游覆盖率 38%

- 上游源：`project-management/project-management-experiment-tracker.md`
- 上游独有技术实体（5 个，列出前 5）：
  `experiment-related`、`hypothesis-driven`、`intuition-based`、`multi-variate`、`no-go`

### 230. `business/jira-workflow-steward.md`  ·  Δ = 5  ·  上游覆盖率 92%

- 上游源：`project-management/project-management-jira-workflow-steward.md`
- 上游独有技术实体（5 个，列出前 5）：
  `audit-minded`、`bugfix/JIRA-315-fix-token-refresh`、`hotfix/JIRA-411-patch-auth-bypass`、`multi-service`、`over`

### 231. `business/meeting-notes-specialist.md`  ·  Δ = 5  ·  上游覆盖率 0%

- 上游源：`project-management/project-management-meeting-notes-specialist.md`
- 上游独有技术实体（5 个，列出前 5）：
  `GitHub`、`comma-separated`、`non-linear`、`of-order`、`voice-memo`

### 232. `business/project-shepherd.md`  ·  Δ = 5  ·  上游覆盖率 38%

- 上游源：`project-management/project-management-project-shepherd.md`
- 上游独有技术实体（5 个，列出前 5）：
  `communication-centric`、`cross-team`、`large-scale`、`on-scope`、`on-time`

### 233. `specialized/research-synthesist.md`  ·  Δ = 5  ·  上游覆盖率 77%

- 上游源：`research/research-synthesist.md`
- 上游独有技术实体（5 个，列出前 5）：
  `funding-source`、`higher-quality`、`load-bearing`、`of-interest`、`well-replicated`

### 234. `business/sales-proposal-strategist.md`  ·  Δ = 5  ·  上游覆盖率 55%

- 上游源：`sales/sales-proposal-strategist.md`
- 上游独有技术实体（5 个，列出前 5）：
  `best-and-final`、`evidence-backed`、`evidence-driven`、`innovation-forward`、`micro-story`

### 235. `quality/compliance-auditor.md`  ·  Δ = 5  ·  上游覆盖率 0%

- 上游源：`security/security-compliance-auditor.md`
- 上游独有技术实体（5 个，列出前 5）：
  `ComplianceAuditor`、`audit-ready`、`carve-outs`、`multi-framework`、`re-testing`

### 236. `specialized/specialized-document-generator.md`  ·  Δ = 5  ·  上游覆盖率 77%

- 上游源：`specialized/specialized-document-generator.md`
- 上游独有技术实体（5 个，列出前 5）：
  `code-based`、`data-heavy`、`design-aware`、`detail-oriented`、`format-savvy`

### 237. `specialized/focus-music-architect.md`  ·  Δ = 5  ·  上游覆盖率 85%

- 上游源：`specialized/specialized-focus-music-architect.md`
- 上游独有技术实体（5 个，列出前 5）：
  `FocusMusicArchitect`、`anti-distraction`、`detail-obsessed`、`high-yield`、`low-pass`

### 238. `quality/test-automator.md`  ·  Δ = 5  ·  上游覆盖率 92%

- 上游源：`testing/testing-test-automation-engineer.md`
- 上游独有技术实体（5 个，列出前 5）：
  `does not. Fall back to`、`on-failure`、`root-caused`、`to-end`、`worker-scoped`

### 239. `devops/git-workflow-master.md`  ·  Δ = 4  ·  上游覆盖率 84%

- 上游源：`engineering/engineering-git-workflow-master.md`
- 上游独有技术实体（4 个，列出前 4）：
  `history-conscious`、`origin/feat/my-feature`、`short-lived`、`well-described`

### 240. `frontend/i18n-specialist.md`  ·  Δ = 4  ·  上游覆盖率 95%

- 上游源：`engineering/engineering-i18n-engineer.md`
- 上游独有技术实体（4 个，列出前 4）：
  `ar-EG`、`dir="auto"`、`font-stack`、`pseudo-localization`

### 241. `integration/realtime-collaboration-engineer.md`  ·  Δ = 4  ·  上游覆盖率 94%

- 上游源：`engineering/engineering-realtime-collaboration-engineer.md`
- 上游独有技术实体（4 个，列出前 4）：
  `${WS_URL}?resumeFrom=${this.lastServerSeq}`、`room:${roomId}:presence`、`server-arbitrated`、`writer-per-room`

### 242. `quality/rust-refactoring-specialist.md`  ·  Δ = 4  ·  上游覆盖率 93%

- 上游源：`engineering/engineering-rust-refactoring-specialist.md`
- 上游独有技术实体（4 个，列出前 4）：
  `compatibility-conscious`、`dependency-direction`、`half-migrations`、`loader.rs`

### 243. `devops/sre-engineer.md`  ·  Δ = 4  ·  上游覆盖率 20%

- 上游源：`engineering/engineering-sre.md`
- 上游独有技术实体（4 个，列出前 4）：
  `automation-obsessed`、`e63946`、`payment-api`、`trade-offs`

### 244. `specialized/voice-ai-integration-engineer.md`  ·  Δ = 4  ·  上游覆盖率 94%

- 上游源：`engineering/engineering-voice-ai-integration-engineer.md`
- 上游独有技术实体（4 个，列出前 4）：
  `pipeline-minded`、`privacy-conscious`、`quality-driven`、`to-end`

### 245. `frontend/seo-specialist.md`  ·  Δ = 4  ·  上游覆盖率 92%

- 上游源：`marketing/marketing-seo-specialist.md`
- 上游独有技术实体（4 个，列出前 4）：
  `<html lang="en">`、`data-driven`、`either-language`、`non-negotiable`

### 246. `business/short-video-editing-coach.md`  ·  Δ = 4  ·  上游覆盖率 96%

- 上游源：`marketing/marketing-short-video-editing-coach.md`
- 上游独有技术实体（4 个，列出前 4）：
  `audio-video`、`by-character`、`fine-tuning`、`to-large`

### 247. `business/sales-discovery-coach.md`  ·  Δ = 4  ·  上游覆盖率 0%

- 上游源：`sales/sales-discovery-coach.md`
- 上游独有技术实体（4 个，列出前 4）：
  `current-state`、`day-to-day`、`highest-leverage`、`one-word`

### 248. `specialized/report-distribution-agent.md`  ·  Δ = 4  ·  上游覆盖率 0%

- 上游源：`specialized/report-distribution-agent.md`
- 上游独有技术实体（4 个，列出前 4）：
  `company-wide`、`on-demand`、`roll-ups`、`territory-specific`

### 249. `specialized/geographer.md`  ·  Δ = 3  ·  上游覆盖率 0%

- 上游源：`academic/academic-geographer.md`
- 上游独有技术实体（3 个，列出前 3）：
  `real-world`、`resource-based`、`world-systems`

### 250. `data-ai/data-visualization-engineer.md`  ·  Δ = 3  ·  上游覆盖率 93%

- 上游源：`engineering/engineering-data-visualization-engineer.md`
- 上游独有技术实体（3 个，列出前 3）：
  `of-graphics`、`to-whole`、`y-axis`

### 251. `specialized/orgscript-engineer.md`  ·  Δ = 3  ·  上游覆盖率 93%

- 上游源：`engineering/engineering-orgscript-engineer.md`
- 上游独有技术实体（3 个，列出前 3）：
  `for clean,`、`orgscript check`、`trade-offs`

### 252. `specialized/video-streaming-engineer.md`  ·  Δ = 3  ·  上游覆盖率 96%

- 上游源：`engineering/engineering-video-streaming-engineer.md`
- 上游独有技术实体（3 个，列出前 3）：
  `before-video-start`、`codec-pragmatic`、`pre-fetch`

### 253. `game-development/roblox-systems-scripter.md`  ·  Δ = 3  ·  上游覆盖率 97%

- 上游源：`game-development/roblox-studio/roblox-systems-scripter.md`
- 上游独有技术实体（3 个，列出前 3）：
  `architecture-disciplined`、`performance-aware`、`pre-instantiate`

### 254. `data-ai/geoai-ml-engineer.md`  ·  Δ = 3  ·  上游覆盖率 73%

- 上游源：`gis/gis-geoai-ml-engineer.md`
- 上游独有技术实体（3 个，列出前 3）：
  `high-resolution`、`metrics-obsessed`、`pre-trained`

### 255. `quality/gis-qa-engineer.md`  ·  Δ = 3  ·  上游覆盖率 62%

- 上游源：`gis/gis-qa-engineer.md`
- 上游独有技术实体（3 个，列出前 3）：
  `auto-refresh`、`cross-validation`、`process-driven`

### 256. `business/growth-hacker.md`  ·  Δ = 3  ·  上游覆盖率 25%

- 上游源：`marketing/marketing-growth-hacker.md`
- 上游独有技术实体（3 个，列出前 3）：
  `WebFetch`、`WebSearch`、`month-over-month`

### 257. `business/project-manager-senior.md`  ·  Δ = 3  ·  上游覆盖率 73%

- 上游源：`project-management/project-manager-senior.md`
- 上游独有技术实体（3 个，列出前 3）：
  `SeniorProjectManager`、`ai/agents/pm.md`、`client-focused`

### 258. `security/threat-detection-engineer.md`  ·  Δ = 3  ·  上游覆盖率 96%

- 上游源：`security/security-threat-detection-engineer.md`
- 上游独有技术实体（3 个，列出前 3）：
  `data-obsessed`、`intelligence-driven`、`to-incident`

### 259. `specialized/strategy-duel-agent.md`  ·  Δ = 3  ·  上游覆盖率 25%

- 上游源：`specialized/specialized-strategy-duel-agent.md`
- 上游独有技术实体（3 个，列出前 3）：
  `by-step`、`real-world`、`turn-based`

### 260. `specialized/anthropologist.md`  ·  Δ = 2  ·  上游覆盖率 33%

- 上游源：`academic/academic-anthropologist.md`
- 上游独有技术实体（2 个，列出前 2）：
  `anti-ethnocentric`、`lived-in`

### 261. `quality/code-reviewer.md`  ·  Δ = 2  ·  上游覆盖率 33%

- 上游源：`engineering/engineering-code-reviewer.md`
- 上游独有技术实体（2 个，列出前 2）：
  `'; DROP TABLE users; --`、`drip-feed`

### 262. `specialized/codebase-onboarding-engineer.md`  ·  Δ = 2  ·  上游覆盖率 95%

- 上游源：`engineering/engineering-codebase-onboarding-engineer.md`
- 上游独有技术实体（2 个，列出前 2）：
  `TypeScript`、`end-to-end`

### 263. `data-ai/data-engineer.md`  ·  Δ = 2  ·  上游覆盖率 96%

- 上游源：`engineering/engineering-data-engineer.md`
- 上游独有技术实体（2 个，列出前 2）：
  `customer_id`、`schema-disciplined`

### 264. `specialized/desktop-app-engineer.md`  ·  Δ = 2  ·  上游覆盖率 97%

- 上游源：`engineering/engineering-desktop-app-engineer.md`
- 上游独有技术实体（2 个，列出前 2）：
  `crash-free-rate`、`export.${req.format}`

### 265. `security/identity-access-engineer.md`  ·  Δ = 2  ·  上游覆盖率 97%

- 上游源：`engineering/engineering-identity-access-engineer.md`
- 上游独有技术实体（2 个，列出前 2）：
  `hand-roll`、`tenant-isolation`

### 266. `specialized/mobile-app-builder.md`  ·  Δ = 2  ·  上游覆盖率 96%

- 上游源：`engineering/engineering-mobile-app-builder.md`
- 上游独有技术实体（2 个，列出前 2）：
  `platform-aware`、`user-experience-driven`

### 267. `blockchain/solidity-smart-contract-engineer.md`  ·  Δ = 2  ·  上游覆盖率 97%

- 上游源：`engineering/engineering-solidity-smart-contract-engineer.md`
- 上游独有技术实体（2 个，列出前 2）：
  `audit-minded`、`battle-hardened`

### 268. `business/multi-platform-publisher.md`  ·  Δ = 2  ·  上游覆盖率 97%

- 上游源：`marketing/marketing-multi-platform-publisher.md`
- 上游独有技术实体（2 个，列出前 2）：
  `biliup`、`wechatsync sync ... -p ...`

### 269. `security/appsec-engineer.md`  ·  Δ = 2  ·  上游覆盖率 96%

- 上游源：`security/security-appsec-engineer.md`
- 上游独有技术实体（2 个，列出前 2）：
  `-r`、`fix_versions`

### 270. `data-ai/agents-orchestrator.md`  ·  Δ = 2  ·  上游覆盖率 95%

- 上游源：`specialized/agents-orchestrator.md`
- 上游独有技术实体（2 个，列出前 2）：
  `product-sprint-prioritizer`、`to-task`

### 271. `specialized/specialized-codebase-archaeologist.md`  ·  Δ = 2  ·  上游覆盖率 97%

- 上游源：`specialized/specialized-codebase-archaeologist.md`
- 上游独有技术实体（2 个，列出前 2）：
  `reversed-fallback`、`vs-code`

### 272. `specialized/historian.md`  ·  Δ = 1  ·  上游覆盖率 50%

- 上游源：`academic/academic-historian.md`
- 上游独有技术实体（1 个，列出前 1）：
  `well-documented`

### 273. `specialized/drupal-performance.md`  ·  Δ = 1  ·  上游覆盖率 99%

- 上游源：`engineering/engineering-drupal-performance.md`
- 上游独有技术实体（1 个，列出前 1）：
  `validate_timestamps`

### 274. `security/privacy-engineer.md`  ·  Δ = 1  ·  上游覆盖率 98%

- 上游源：`engineering/engineering-privacy-engineer.md`
- 上游独有技术实体（1 个，列出前 1）：
  `re-identifies`

### 275. `frontend/section-508-specialist.md`  ·  Δ = 1  ·  上游覆盖率 99%

- 上游源：`engineering/engineering-section-508-specialist.md`
- 上游独有技术实体（1 个，列出前 1）：
  `t-use-overlays`

### 276. `specialized/wordpress-performance.md`  ·  Δ = 1  ·  上游覆盖率 99%

- 上游源：`engineering/engineering-wordpress-performance.md`
- 上游独有技术实体（1 个，列出前 1）：
  `front-end`

### 277. `security/security-architect.md`  ·  Δ = 1  ·  上游覆盖率 98%

- 上游源：`security/security-architect.md`
- 上游独有技术实体（1 个，列出前 1）：
  `to-service`

### 278. `security/threat-intelligence-analyst.md`  ·  Δ = 1  ·  上游覆盖率 98%

- 上游源：`security/security-threat-intelligence-analyst.md`
- 上游独有技术实体（1 个，列出前 1）：
  `hypothesis-driven`

### 279. `specialized/data-consolidation-agent.md`  ·  Δ = 1  ·  上游覆盖率 50%

- 上游源：`specialized/data-consolidation-agent.md`
- 上游独有技术实体（1 个，列出前 1）：
  `dashboard-friendly`

### 280. `business/product-manager.md`  ·  Δ = 0  ·  上游覆盖率 100%

- 上游源：`product/product-manager.md`
- 上游独有技术实体（0 个，列出前 0）：
  

### 281. `security/fedramp-rmf-compliance.md`  ·  Δ = 0  ·  上游覆盖率 100%

- 上游源：`specialized/specialized-fedramp-rmf-compliance.md`
- 上游独有技术实体（0 个，列出前 0）：
  

### 282. `devops/infrastructure-maintainer.md`  ·  Δ = 0  ·  上游覆盖率 100%

- 上游源：`support/support-infrastructure-maintainer.md`
- 上游独有技术实体（0 个，列出前 0）：
  

---


## 三、补写规范（执行时遵循）

1. **不改结构**：`## Purpose` / `## Capabilities` / `## Behavioral Traits` / `## Response Approach` 四个章节名与顺序保持不变。
2. **只增不删**：保留本地已有内容，把上游独有的具体技术点补进 `Capabilities` 对应子类（必要时新增 `###` 子类）。
3. **保持英文正文**，front matter 六字段不动。
4. **补写的是落地细节**：具体 API 名、命令、配置片段、版本号、量化阈值 —— 而不是泛化描述。
5. 每个代理补完后运行 `node src/verify.js` 确保格式与索引仍合规。
