---
type: Entity
title: DataHub
description: LinkedIn 开源的元数据目录/数据治理平台，2025年底升级为 AI Context Management Platform，新增 AI 自动打标 + HITL 审核工作流
source_url: https://datahubproject.io/
source_title: DataHub
source_author: LinkedIn
source_platform: 网页
ingest_date: 2026-07-12
access_date: 2026-07-12
tags: [工具, 数据治理, 元数据, AI, 开源]
status: compiled
review_count: 0
last_review: 2026-07-12
next_review: 2026-07-13
---

# DataHub

## 概述

DataHub 本质上是 **LinkedIn 开源的元数据目录/数据治理平台**。2025年底进行了一次重大转型——从"数据目录"升级为 **"AI Context Management Platform（AI上下文管理平台）"**。

## 三大核心能力层

```
┌─────────────────────────────────────────────┐
│  ③ AI Agent 交互层                           │
│  Ask DataHub + MCP Server + Context Kit     │
├─────────────────────────────────────────────┤
│  ② Context Intelligence 层（AI治理）          │
│  AI自动文档 + AI自动分类 + AI质量规则 + HITL  │
├─────────────────────────────────────────────┤
│  ① Context Store 层（元数据底座）              │
│  元数据 + 知识图谱 + Embedding + 血缘关系      │
└─────────────────────────────────────────────┘
```

## AI 能力（2025年底新增）

1. **AI 自动生成文档描述** — 表级 + 列级
2. **AI 自动分类/打标签** — 敏感数据检测、词汇表术语提议
3. **AI 数据质量规则提议** — Freshness/Volume/Drift
4. **Human-in-the-Loop 审核工作流** — 接受/编辑/拒绝
5. **OSI 标准参与**（2025.12加入）

## 局限

- 不能 NL2SQL/ChatBI（需配合 WrenAI 等工具）
- 不能同义词/黑话自动发现
- 不能多层语义抽象
- 不能置信度评分

## 关联

- [Kimi_Agent_AI原生数据治理](/projects/KimiAgentAIDataGovernance.md)
- [528 Demo 方向讨论](/sources/2026-07-12-528-demo-discussion.md)

# Citations

- 来源: 第二大脑 / 0-Inbox/528_demo方向讨论.md
