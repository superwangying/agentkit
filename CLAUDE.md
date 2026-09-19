# AgentKit 专家系统 — Claude Code 自动加载配置
# v1.1 | 193个专业专家
# 
# 工作原理：Claude Code 读取本文件后，当对话中出现对应触发词时，
# 自动 @引用对应的专家文件，注入专家人格和知识上下文。

## 使用说明
# 1. 将本文件放在项目根目录（与 CLAUDE.md 同级）
# 2. 在 CLAUDE.md 中引用：@agentkit-triggers.md 或直接合并到 CLAUDE.md
# 3. 对话中提及触发词，专家自动激活

---

## 自动加载规则：触发词 → 专家文件

### ── 架构类 ─────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/architecture/api-architect.md
触发词: API架构, REST API设计, GraphQL设计, gRPC接口, API版本管理, Webhook设计, API网关, OpenAPI规范

当对话提到以下词时 → @agentkit/agents/architecture/architect-reviewer.md
触发词: 架构评审, 架构审查, ADR编写, 架构质量, 设计评审, 风险评估, 技术选型评审, 架构决策

当对话提到以下词时 → @agentkit/agents/architecture/backend-architect.md
触发词: 后端架构, 服务器架构, 高并发, 微服务后端, 业务逻辑架构

当对话提到以下词时 → @agentkit/agents/architecture/cloud-architect.md
触发词: 云架构, AWS架构, Azure架构, GCP设计, 多云架构, 云迁移, 云原生, 基础设施架构

当对话提到以下词时 → @agentkit/agents/architecture/data-pipeline-architect.md
触发词: 数据管道架构, ETL设计, 数据流处理, Kafka架构, Spark开发, 数据仓库设计, 实时数据处理, 数据湖架构

当对话提到以下词时 → @agentkit/agents/architecture/database-architect.md
触发词: 数据库架构, 数据建模, SQL优化, NoSQL选型, 数据一致性, 数据库性能

当对话提到以下词时 → @agentkit/agents/architecture/frontend-architect.md
触发词: 前端架构, Web架构, UI设计系统, 前端性能, 前端工程化, SPA架构

当对话提到以下词时 → @agentkit/agents/architecture/kubernetes-architect.md
触发词: Kubernetes架构, K8s设计, 容器编排, Service Mesh, 云原生架构

当对话提到以下词时 → @agentkit/agents/architecture/microservice-architect.md
触发词: 微服务架构, 分布式系统, 服务拆分, 服务网格, Saga模式, 事件驱动架构, 领域驱动设计

当对话提到以下词时 → @agentkit/agents/architecture/mobile-architect.md
触发词: 移动端架构, iOS架构, Android架构, 跨平台开发, React Native设计, Flutter架构

当对话提到以下词时 → @agentkit/agents/architecture/system-architect.md
触发词: 系统架构, 操作系统架构, 嵌入式系统, 实时系统, 固件设计, 硬件抽象层

---

### ── 编程语言 ────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/languages/python-pro.md
触发词: python, Python, django, flask, fastapi, pip, pytest, pandas, asyncio

当对话提到以下词时 → @agentkit/agents/languages/typescript-pro.md
触发词: TypeScript, TS, 类型系统, tsc, ts配置, interface, type alias, generics

当对话提到以下词时 → @agentkit/agents/languages/javascript-pro.md
触发词: JavaScript, JS, ES2024, node.js, nodejs, 前端JS, Promise, async/await

当对话提到以下词时 → @agentkit/agents/languages/rust-pro.md
触发词: Rust, rust开发, cargo, ownership, borrow checker, trait, lifetime

当对话提到以下词时 → @agentkit/agents/languages/go-pro.md
触发词: Go, golang, goroutine, channel, go mod, go build

当对话提到以下词时 → @agentkit/agents/languages/java-pro.md
触发词: Java, java开发, JVM, maven, gradle, JDK, java stream

当对话提到以下词时 → @agentkit/agents/languages/kotlin-pro.md
触发词: Kotlin, kotlin开发, android开发, kotlin协程, suspend

当对话提到以下词时 → @agentkit/agents/languages/swift-pro.md
触发词: Swift, iOS开发, macOS开发, SwiftUI, Combine, Xcode

当对话提到以下词时 → @agentkit/agents/languages/csharp-pro.md
触发词: C#, csharp, dotnet, .NET, ASP.NET, Unity, LINQ

当对话提到以下词时 → @agentkit/agents/languages/cpp-pro.md
触发词: C++, cpp, cmake, STL, 内存管理, 指针, 模板元编程

当对话提到以下词时 → @agentkit/agents/languages/ruby-pro.md
触发词: Ruby, ruby开发, gem, rails, bundler

当对话提到以下词时 → @agentkit/agents/languages/php-pro.md
触发词: PHP, php开发, composer, WordPress, 面向对象PHP

当对话提到以下词时 → @agentkit/agents/languages/dart-pro.md
触发词: Dart, dart语言, pub.dev

当对话提到以下词时 → @agentkit/agents/languages/sql-pro.md
触发词: SQL, 数据库查询, 存储过程, 触发器, SQL优化, CTE

当对话提到以下词时 → @agentkit/agents/languages/bash-pro.md
触发词: bash, shell脚本, bash脚本, 终端自动化, 命令行脚本

当对话提到以下词时 → @agentkit/agents/languages/shell-scripting.md
触发词: Shell, zsh, fish shell, 脚本自动化, shebang

当对话提到以下词时 → @agentkit/agents/languages/scala-pro.md
触发词: Scala, akka, scala开发, 函数式Scala

当对话提到以下词时 → @agentkit/agents/languages/r-pro.md
触发词: R语言, ggplot2, tidyverse, R统计, dplyr, R分析

当对话提到以下词时 → @agentkit/agents/languages/julia-pro.md
触发词: Julia, julia语言, 科学计算Julia

当对话提到以下词时 → @agentkit/agents/languages/haskell-pro.md
触发词: Haskell, 函数式编程, monads, haskell类型系统

当对话提到以下词时 → @agentkit/agents/languages/elixir-pro.md
触发词: Elixir, Phoenix框架, OTP, erlang生态

当对话提到以下词时 → @agentkit/agents/languages/lua-pro.md
触发词: Lua, lua脚本, Lua游戏脚本

当对话提到以下词时 → @agentkit/agents/languages/perl-pro.md
触发词: Perl, perl脚本, 正则文本处理

当对话提到以下词时 → @agentkit/agents/languages/zig-pro.md
触发词: Zig, zig语言, 系统编程Zig

---

### ── 框架 ────────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/frameworks/react-pro.md
触发词: React, react组件, useState, useEffect, hooks, Redux, Zustand, React Query, JSX, TSX, Fiber, Concurrent Mode, React性能优化

当对话提到以下词时 → @agentkit/agents/frameworks/vue-pro.md
触发词: Vue, Vue3, Composition API, Options API, Pinia, Vuex, Vue Router, ref, reactive, computed, watch, Vuetify, Element Plus

当对话提到以下词时 → @agentkit/agents/frameworks/nextjs-pro.md
触发词: Next.js, NextJS, App Router, Server Components, SSR, SSG, ISR, getServerSideProps, NextAuth, Vercel, Turbopack

当对话提到以下词时 → @agentkit/agents/frameworks/nuxt-pro.md
触发词: Nuxt, Nuxt3, Nitro, useFetch, useAsyncData, Nuxt Modules, Nuxt Content

当对话提到以下词时 → @agentkit/agents/frameworks/fastapi-pro.md
触发词: FastAPI, Pydantic, OpenAPI, 异步API, Starlette, Uvicorn, FastAPI依赖注入

当对话提到以下词时 → @agentkit/agents/frameworks/django-pro.md
触发词: Django, DRF, Django ORM, Django Admin, Migrations, Celery, Django Channels

当对话提到以下词时 → @agentkit/agents/frameworks/flask-pro.md
触发词: Flask, Flask RESTful, Flask-SQLAlchemy, Jinja2, Flask Blueprints

当对话提到以下词时 → @agentkit/agents/frameworks/spring-pro.md
触发词: Spring, Spring Boot, Spring MVC, Spring Security, Spring Cloud, Spring Data JPA, Java后端

当对话提到以下词时 → @agentkit/agents/frameworks/nestjs-pro.md
触发词: NestJS, Nest.js, NestJS模块, NestJS装饰器, NestJS微服务, NestJS GraphQL

当对话提到以下词时 → @agentkit/agents/frameworks/express-pro.md
触发词: Express, Express.js, Node.js后端, Express中间件, Express路由

当对话提到以下词时 → @agentkit/agents/frameworks/flutter-pro.md
触发词: Flutter, Dart, Flutter Widget, Riverpod, Provider, GetX, BLoC, Flutter状态管理

当对话提到以下词时 → @agentkit/agents/frameworks/react-native-pro.md
触发词: React Native, RN, Expo, React Navigation, TurboModules, Fabric, 新架构

当对话提到以下词时 → @agentkit/agents/frameworks/angular-pro.md
触发词: Angular, NgModule, RxJS, Observable, Signals, 依赖注入, Angular Material, Nx

当对话提到以下词时 → @agentkit/agents/frameworks/svelte-pro.md
触发词: Svelte, SvelteKit, Svelte5, Runes, $state, $derived, $effect

当对话提到以下词时 → @agentkit/agents/frameworks/tailwind-pro.md
触发词: Tailwind CSS, Tailwind, Utility-first CSS, Tailwind配置, Tailwind插件

当对话提到以下词时 → @agentkit/agents/frameworks/gin-pro.md
触发词: Gin, Gin框架, Golang Web, Go HTTP, Gin中间件

当对话提到以下词时 → @agentkit/agents/frameworks/actix-pro.md
触发词: Actix, Actix Web, Rust Web, Tokio, Rust异步

当对话提到以下词时 → @agentkit/agents/frameworks/laravel-pro.md
触发词: Laravel, Eloquent, Artisan, Blade模板, Livewire, Queues

当对话提到以下词时 → @agentkit/agents/frameworks/rails-pro.md
触发词: Rails, Ruby on Rails, ActiveRecord, Hotwire, Sidekiq, RSpec

当对话提到以下词时 → @agentkit/agents/frameworks/threejs-pro.md
触发词: Three.js, ThreeJS, WebGL, 3D Web, GLSL着色器, WebXR, 3D动画

---

### ── DevOps ──────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/devops/docker-pro.md
触发词: docker, Docker, 容器, 镜像, Dockerfile, docker-compose, 容器化

当对话提到以下词时 → @agentkit/agents/devops/kubernetes-ops.md
触发词: kubernetes, k8s, kubectl, helm, pod, deployment, ingress, namespace, 集群

当对话提到以下词时 → @agentkit/agents/devops/cicd-engineer.md
触发词: CI, CD, CICD, pipeline, jenkins, github-actions, gitlab-ci, 持续集成, 持续部署

当对话提到以下词时 → @agentkit/agents/devops/terraform-pro.md
触发词: terraform, IaC, infrastructure-as-code, hcl, terraform-apply

当对话提到以下词时 → @agentkit/agents/devops/aws-pro.md
触发词: aws, amazon-web-services, ec2, s3, lambda, ecs, eks, iam, rds, cloudwatch

当对话提到以下词时 → @agentkit/agents/devops/azure-pro.md
触发词: azure, microsoft-azure, app-service, aks, azure-functions, azure-devops

当对话提到以下词时 → @agentkit/agents/devops/gcp-pro.md
触发词: gcp, google-cloud-platform, gke, cloud-run, bigquery, cloud-functions

当对话提到以下词时 → @agentkit/agents/devops/monitoring-engineer.md
触发词: monitoring, observability, prometheus, grafana, alerting, 监控, 可观测性

当对话提到以下词时 → @agentkit/agents/devops/sre-engineer.md
触发词: sre, sli, slo, sla, error-budget, reliability, 可靠性工程

当对话提到以下词时 → @agentkit/agents/devops/ansible-pro.md
触发词: ansible, playbook, 配置管理, 自动化运维

当对话提到以下词时 → @agentkit/agents/devops/gitops-engineer.md
触发词: gitops, argocd, flux, 声明式运维

当对话提到以下词时 → @agentkit/agents/devops/deployment-engineer.md
触发词: blue-green, canary, rolling-update, 灰度发布, 发布管理

当对话提到以下词时 → @agentkit/agents/devops/incident-response.md
触发词: incident, on-call, postmortem, outage, 事故响应, 故障排查

当对话提到以下词时 → @agentkit/agents/devops/infrastructure-pro.md
触发词: infrastructure, vpc, subnet, load-balancer, dns, cdn, 基础设施网络

---

### ── 数据与AI ─────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/data-ai/llm-app-developer.md
触发词: LLM app, LangChain, LlamaIndex, OpenAI API, chatbot, AI agent, function calling, generative AI

当对话提到以下词时 → @agentkit/agents/data-ai/rag-specialist.md
触发词: RAG, retrieval augmented generation, semantic search, vector search, chunking, reranking

当对话提到以下词时 → @agentkit/agents/data-ai/prompt-engineer.md
触发词: prompt engineering, system prompt, chain of thought, few-shot, structured output

当对话提到以下词时 → @agentkit/agents/data-ai/ml-engineer.md
触发词: machine learning, ML, model training, feature engineering, scikit-learn, XGBoost, LightGBM

当对话提到以下词时 → @agentkit/agents/data-ai/mlops-engineer.md
触发词: MLOps, model deployment, MLflow, Kubeflow, model monitoring, experiment tracking

当对话提到以下词时 → @agentkit/agents/data-ai/data-engineer.md
触发词: data engineering, ETL, data pipeline, data warehouse, Spark, Airflow, kafka, CDC

当对话提到以下词时 → @agentkit/agents/data-ai/data-scientist.md
触发词: data science, statistical analysis, A/B test, EDA, pandas, Jupyter notebook

当对话提到以下词时 → @agentkit/agents/data-ai/fine-tuning-specialist.md
触发词: fine-tuning, LoRA, QLoRA, RLHF, DPO, PEFT, SFT, LLM微调

当对话提到以下词时 → @agentkit/agents/data-ai/nlp-specialist.md
触发词: NLP, natural language processing, text classification, NER, sentiment analysis, Hugging Face

当对话提到以下词时 → @agentkit/agents/data-ai/computer-vision.md
触发词: computer vision, image classification, object detection, YOLO, OCR, OpenCV, CNN

当对话提到以下词时 → @agentkit/agents/data-ai/vector-db-specialist.md
触发词: vector database, Pinecone, Weaviate, Milvus, ChromaDB, Qdrant, FAISS, ANN

当对话提到以下词时 → @agentkit/agents/data-ai/analytics-engineer.md
触发词: analytics engineering, dbt, data modeling, BI, metrics layer, Looker, Tableau

当对话提到以下词时 → @agentkit/agents/data-ai/recommendation-engineer.md
触发词: recommendation system, collaborative filtering, CTR prediction, two-tower model, cold start

当对话提到以下词时 → @agentkit/agents/data-ai/reinforcement-learning.md
触发词: reinforcement learning, RL, PPO, SAC, DQN, policy gradient, reward design

当对话提到以下词时 → @agentkit/agents/data-ai/time-series-analyst.md
触发词: time series, forecasting, ARIMA, Prophet, anomaly detection, LSTM forecasting

当对话提到以下词时 → @agentkit/agents/data-ai/ai-safety-engineer.md
触发词: AI safety, AI ethics, responsible AI, bias detection, prompt injection, AI governance

---

### ── 数据库 ──────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/database/postgresql-pro.md
触发词: postgresql, pg, postgres, psql, pg_dump, pg索引, postgresql优化

当对话提到以下词时 → @agentkit/agents/database/mysql-pro.md
触发词: mysql, mariadb, innodb, mysql性能, 主从复制, 读写分离

当对话提到以下词时 → @agentkit/agents/database/redis-pro.md
触发词: redis, redis缓存, redis-cluster, pub/sub, redis持久化, rdb, aof

当对话提到以下词时 → @agentkit/agents/database/mongodb-pro.md
触发词: mongodb, mongo, nosql, mongodb性能, 分片集群, 文档数据库

当对话提到以下词时 → @agentkit/agents/database/elasticsearch-pro.md
触发词: elasticsearch, elastic, elk, 全文搜索, es集群, kibana, lucene

当对话提到以下词时 → @agentkit/agents/database/graphql-pro.md
触发词: graphql, apollo, resolver, n+1, federation, relay, graphql-api

当对话提到以下词时 → @agentkit/agents/database/supabase-pro.md
触发词: supabase, realtime数据库, supabase auth, postgrest, edge functions

当对话提到以下词时 → @agentkit/agents/database/database-designer.md
触发词: 数据库设计, erd图, 数据建模, schema设计, 数据库范式

当对话提到以下词时 → @agentkit/agents/database/database-migration.md
触发词: 数据库迁移, schema迁移, alembic, flyway, zero-downtime, 双写

当对话提到以下词时 → @agentkit/agents/database/database-optimizer.md
触发词: 数据库优化, SQL优化, 慢查询优化, 索引优化, 执行计划

---

### ── 前端专项 ─────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/frontend/web-performance.md
触发词: Web性能, core web vitals, lighthouse, LCP, FID, CLS, 性能优化, bundle优化

当对话提到以下词时 → @agentkit/agents/frontend/design-system.md
触发词: 设计系统, design system, 组件库, design tokens, component library

当对话提到以下词时 → @agentkit/agents/frontend/responsive-design.md
触发词: 响应式设计, mobile-first, media query, 自适应, 流体布局

当对话提到以下词时 → @agentkit/agents/frontend/accessibility-dev.md
触发词: 无障碍, accessibility, a11y, WCAG, ARIA, screen reader, 键盘导航

当对话提到以下词时 → @agentkit/agents/frontend/pwa-specialist.md
触发词: PWA, 渐进式Web应用, service worker, 离线应用, web app manifest

当对话提到以下词时 → @agentkit/agents/frontend/seo-specialist.md
触发词: SEO, 搜索引擎优化, meta tags, 结构化数据, sitemap, 搜索排名

当对话提到以下词时 → @agentkit/agents/frontend/i18n-specialist.md
触发词: 国际化, i18n, localization, 多语言, RTL

当对话提到以下词时 → @agentkit/agents/frontend/css-animations.md
触发词: CSS动画, css animation, @keyframes, transition, motion design

当对话提到以下词时 → @agentkit/agents/frontend/svg-animations.md
触发词: SVG动画, svg animation, GSAP SVG, morphing, Lottie, vector graphics

当对话提到以下词时 → @agentkit/agents/frontend/browser-extension-dev.md
触发词: 浏览器扩展, Chrome extension, content script, popup, background service worker

当对话提到以下词时 → @agentkit/agents/frontend/ui-designer.md
触发词: UI设计, 界面设计, 视觉设计, 配色方案, typography, Figma

当对话提到以下词时 → @agentkit/agents/frontend/ux-researcher.md
触发词: UX, 用户体验, 用户研究, usability, 用户访谈, 可用性测试

当对话提到以下词时 → @agentkit/agents/frontend/web-components.md
触发词: Web Components, Shadow DOM, Custom Elements, HTML Templates

当对话提到以下词时 → @agentkit/agents/frontend/webgl-developer.md
触发词: WebGL, 图形编程, shader, GPU渲染, canvas 3D

---

### ── 质量保障 ─────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/quality/code-reviewer.md
触发词: 代码审查, code review, PR review, 代码质量, 代码规范

当对话提到以下词时 → @agentkit/agents/quality/security-auditor.md
触发词: 安全审计, security audit, 漏洞扫描, SAST, DAST

当对话提到以下词时 → @agentkit/agents/quality/test-automator.md
触发词: 测试自动化, test automation, Selenium, Playwright, Cypress, E2E测试

当对话提到以下词时 → @agentkit/agents/quality/qa-engineer.md
触发词: QA, 测试工程师, 质量保障, 测试策略, 测试计划

当对话提到以下词时 → @agentkit/agents/quality/refactor-specialist.md
触发词: 重构, refactoring, 代码重构, 技术债务, clean code

当对话提到以下词时 → @agentkit/agents/quality/load-tester.md
触发词: 负载测试, load testing, k6, JMeter, 压测

当对话提到以下词时 → @agentkit/agents/quality/performance-tester.md
触发词: 性能测试, performance testing, benchmark, 基准测试

当对话提到以下词时 → @agentkit/agents/quality/linter-pro.md
触发词: linter, ESLint, Pylint, 代码风格, 静态分析

当对话提到以下词时 → @agentkit/agents/quality/api-tester.md
触发词: API测试, 接口测试, Postman, REST测试, API自动化测试

当对话提到以下词时 → @agentkit/agents/quality/dependency-auditor.md
触发词: 依赖审计, dependency audit, 依赖漏洞, npm audit

当对话提到以下词时 → @agentkit/agents/quality/accessibility-auditor.md
触发词: 无障碍审计, accessibility audit, WCAG合规检查

当对话提到以下词时 → @agentkit/agents/quality/compliance-auditor.md
触发词: 合规审计, compliance audit, 法规遵从, 合规检查

---

### ── 安全 ─────────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/security/security-architect.md
触发词: 安全架构, 威胁建模, 零信任, 纵深防御, 安全设计

当对话提到以下词时 → @agentkit/agents/security/pentester.md
触发词: 渗透测试, pentesting, pentest, 红队, CTF, 漏洞利用

当对话提到以下词时 → @agentkit/agents/security/appsec-engineer.md
触发词: 应用安全, appsec, OWASP Top 10

当对话提到以下词时 → @agentkit/agents/security/crypto-specialist.md
触发词: 密码学, cryptography, 加密, TLS, PKI, 数字签名, AES, RSA

当对话提到以下词时 → @agentkit/agents/security/identity-management.md
触发词: 身份管理, IAM, OAuth, OIDC, SSO, RBAC, LDAP

当对话提到以下词时 → @agentkit/agents/security/secure-coder.md
触发词: 安全编码, secure coding, 输入验证, SQL注入防御, XSS防御

当对话提到以下词时 → @agentkit/agents/security/threat-modeler.md
触发词: 威胁建模, STRIDE, 攻击面分析, 风险矩阵

当对话提到以下词时 → @agentkit/agents/security/network-security.md
触发词: 网络安全, network security, 防火墙, IDS, IPS, VPN

当对话提到以下词时 → @agentkit/agents/security/incident-forensics.md
触发词: 安全取证, incident forensics, 数字取证, 应急响应取证

当对话提到以下词时 → @agentkit/agents/security/compliance-officer.md
触发词: 合规官, GDPR合规, ISO 27001, SOC2, PCI DSS

---

### ── 集成 ─────────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/integration/auth-system.md
触发词: 认证系统, JWT, OAuth2, session, 权限系统, 登录系统

当对话提到以下词时 → @agentkit/agents/integration/payment-integrator.md
触发词: 支付集成, payment, Stripe, 微信支付, 支付宝, 支付系统

当对话提到以下词时 → @agentkit/agents/integration/api-designer.md
触发词: API设计, RESTful设计, API文档, API规范

当对话提到以下词时 → @agentkit/agents/integration/real-time-systems.md
触发词: 实时系统, real-time, WebSocket, SSE, 消息队列

当对话提到以下词时 → @agentkit/agents/integration/webhook-engineer.md
触发词: Webhook, HTTP回调, 事件推送, webhook开发

当对话提到以下词时 → @agentkit/agents/integration/mcp-specialist.md
触发词: MCP, Model Context Protocol, MCP工具, MCP服务器

当对话提到以下词时 → @agentkit/agents/integration/search-engineer.md
触发词: 搜索工程, 全文检索, 搜索排序, 搜索系统

当对话提到以下词时 → @agentkit/agents/integration/file-processing.md
触发词: 文件处理, 文件上传, 文件存储, 大文件处理

当对话提到以下词时 → @agentkit/agents/integration/email-system.md
触发词: 邮件系统, email system, SMTP, 邮件模板, 邮件服务

当对话提到以下词时 → @agentkit/agents/integration/notification-system.md
触发词: 通知系统, push notification, 消息推送, 通知服务

当对话提到以下词时 → @agentkit/agents/integration/sdk-designer.md
触发词: SDK设计, SDK开发, 开发者工具, API Client

当对话提到以下词时 → @agentkit/agents/integration/cli-designer.md
触发词: CLI工具设计, 命令行工具, CLI框架

当对话提到以下词时 → @agentkit/agents/integration/plugin-developer.md
触发词: 插件开发, plugin developer, 插件系统, 扩展系统

当对话提到以下词时 → @agentkit/agents/integration/workflow-automator.md
触发词: 工作流自动化, n8n, Zapier, 流程自动化

---

### ── 现代化 ──────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/modernization/legacy-migrator.md
触发词: 遗留迁移, 遗留系统改造, 旧系统迁移, legacy代码

当对话提到以下词时 → @agentkit/agents/modernization/framework-migrator.md
触发词: 框架迁移, Vue2到Vue3, React升级, 框架升级

当对话提到以下词时 → @agentkit/agents/modernization/cloud-migrator.md
触发词: 云迁移, 上云, lift-and-shift, 云原生改造

当对话提到以下词时 → @agentkit/agents/modernization/performance-optimizer.md
触发词: 系统性能优化, 应用提速, 性能瓶颈, 优化方案

当对话提到以下词时 → @agentkit/agents/modernization/security-upgrader.md
触发词: 安全升级, 安全加固, 漏洞修复, 安全改造

当对话提到以下词时 → @agentkit/agents/modernization/testing-modernizer.md
触发词: 测试现代化, 测试升级, 测试自动化改造

当对话提到以下词时 → @agentkit/agents/modernization/dependency-updater.md
触发词: 依赖升级, 依赖更新, 版本升级, 依赖管理

当对话提到以下词时 → @agentkit/agents/modernization/architecture-evolver.md
触发词: 架构演进, 架构升级, 渐进式迁移, 技术演进

当对话提到以下词时 → @agentkit/agents/modernization/devops-transformer.md
触发词: DevOps转型, DevOps改造, 敏捷转型

当对话提到以下词时 → @agentkit/agents/modernization/api-modernizer.md
触发词: API现代化, REST to GraphQL, API升级改造

当对话提到以下词时 → @agentkit/agents/modernization/database-migrator.md
触发词: 跨库迁移, 数据库升级, 数据库迁移现代化

当对话提到以下词时 → @agentkit/agents/modernization/codebase-modernizer.md
触发词: 代码库现代化, 代码升级, 遗留代码重写

当对话提到以下词时 → @agentkit/agents/modernization/config-modernizer.md
触发词: 配置现代化, 配置管理升级, 配置中心改造

当对话提到以下词时 → @agentkit/agents/modernization/documentation-upgrader.md
触发词: 文档升级, 文档现代化, 文档体系建设

---

### ── 商业运营 ─────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/business/product-manager.md
触发词: 产品经理, PRD, 产品路线图, 需求分析, 竞品分析, roadmap

当对话提到以下词时 → @agentkit/agents/business/business-analyst.md
触发词: 业务分析, 数据分析报表, 指标体系, 商业洞察, KPI设计

当对话提到以下词时 → @agentkit/agents/business/financial-analyst.md
触发词: 财务分析, 预算管理, P&L, 现金流, 财务建模

当对话提到以下词时 → @agentkit/agents/business/growth-hacker.md
触发词: 增长黑客, 用户增长, 裂变, Growth Hacking, 获客策略

当对话提到以下词时 → @agentkit/agents/business/marketing-automator.md
触发词: 营销自动化, Marketing Automation, CRM营销, 营销漏斗

当对话提到以下词时 → @agentkit/agents/business/content-strategist.md
触发词: 内容策略, 内容营销, 文案撰写, 社交媒体运营

当对话提到以下词时 → @agentkit/agents/business/customer-success.md
触发词: 客户成功, 客户留存, NPS, 续费, churn预防

当对话提到以下词时 → @agentkit/agents/business/documentation-writer.md
触发词: 文档工程师, 技术写作, API文档撰写, 知识库建设

当对话提到以下词时 → @agentkit/agents/business/legal-compliance.md
触发词: 法律合规, GDPR, 隐私政策, 合同审查, 风险管理

当对话提到以下词时 → @agentkit/agents/business/hr-tech-specialist.md
触发词: HR科技, 人力资源系统, HRIS, 绩效管理系统

当对话提到以下词时 → @agentkit/agents/business/operations-optimizer.md
触发词: 运营优化, 流程优化, 精益管理, 供应链管理

当对话提到以下词时 → @agentkit/agents/business/sales-optimizer.md
触发词: 销售优化, 销售漏斗, 销售策略, 管道管理

---

### ── 区块链 ──────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/blockchain/solidity-pro.md
触发词: solidity, 智能合约开发, erc20, gas优化, 合约升级, evm

当对话提到以下词时 → @agentkit/agents/blockchain/web3-developer.md
触发词: web3, dapp开发, 钱包连接, ethers, viem, wagmi, 合约交互

当对话提到以下词时 → @agentkit/agents/blockchain/smart-contract-auditor.md
触发词: 智能合约审计, 合约安全, 重入攻击, 形式化验证

当对话提到以下词时 → @agentkit/agents/blockchain/defi-engineer.md
触发词: defi, 去中心化金融, amm, 借贷协议, 流动性, 闪电贷

当对话提到以下词时 → @agentkit/agents/blockchain/nft-developer.md
触发词: nft, 数字藏品, erc721, erc1155, nft市场

当对话提到以下词时 → @agentkit/agents/blockchain/chain-developer.md
触发词: 公链开发, 联盟链, 共识算法, cosmos, substrate, rollup, l2

---

### ── 特殊领域 ─────────────────────────────────────────────────────

当对话提到以下词时 → @agentkit/agents/specialized/game-developer.md
触发词: 游戏开发, game dev, Unity, Unreal, 游戏引擎, 游戏物理

当对话提到以下词时 → @agentkit/agents/specialized/embedded-engineer.md
触发词: 嵌入式, embedded, 单片机, RTOS, 固件, MCU, ARM

当对话提到以下词时 → @agentkit/agents/specialized/iot-engineer.md
触发词: IoT, 物联网, MQTT, 传感器, 边缘计算, 嵌入式Linux

当对话提到以下词时 → @agentkit/agents/specialized/robotics-engineer.md
触发词: 机器人, robotics, ROS, 机械臂, 自动驾驶, 路径规划

当对话提到以下词时 → @agentkit/agents/specialized/compiler-engineer.md
触发词: 编译器, compiler, 解析器, AST, LLVM, 语言实现

当对话提到以下词时 → @agentkit/agents/specialized/graphics-programmer.md
触发词: 图形编程, graphics programming, OpenGL, Vulkan, DirectX

当对话提到以下词时 → @agentkit/agents/specialized/quant-developer.md
触发词: 量化开发, quant, 量化策略, 算法交易, 金融计算

当对话提到以下词时 → @agentkit/agents/specialized/scientific-computing.md
触发词: 科学计算, scientific computing, NumPy, SciPy, 数值方法

当对话提到以下词时 → @agentkit/agents/specialized/network-programmer.md
触发词: 网络编程, TCP/IP, socket, 协议栈, 网络协议开发

当对话提到以下词时 → @agentkit/agents/specialized/os-developer.md
触发词: 操作系统开发, OS开发, 内核开发, 驱动开发, 系统调用

当对话提到以下词时 → @agentkit/agents/specialized/audio-engineer.md
触发词: 音频工程, audio engineering, WebAudio API, 音频处理

当对话提到以下词时 → @agentkit/agents/specialized/video-engineer.md
触发词: 视频工程, video engineering, FFmpeg, 视频编码, 流媒体

当对话提到以下词时 → @agentkit/agents/specialized/healthcare-it.md
触发词: 医疗IT, healthcare IT, HL7, FHIR, 电子病历

当对话提到以下词时 → @agentkit/agents/specialized/gis-specialist.md
触发词: GIS, 地理信息系统, 地图开发, Mapbox, 空间数据

当对话提到以下词时 → @agentkit/agents/specialized/bioinformatics.md
触发词: 生物信息学, bioinformatics, 基因组学, 序列分析

当对话提到以下词时 → @agentkit/agents/specialized/edtech-developer.md
触发词: 教育科技, edtech, 在线教育, 学习系统, LMS
