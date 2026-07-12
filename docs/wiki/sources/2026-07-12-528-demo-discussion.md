---
type: Source
title: 528 Demo 方向讨论 — DataHub + WrenAI 语义层建设方案
description: 与 Kimi 的深入讨论，关于 AI 辅助语义层建设的可行方案、DataHub 能力分析、开源工具全景调研
source_url: n/a
source_title: 528_demo方向讨论
source_author: Eason + Kimi
source_platform: 内部讨论
ingest_date: 2026-07-12
access_date: 2026-07-12
tags: [AI, 数据治理, 语义层, DataHub, WrenAI, 工作]
status: compiled
review_count: 0
last_review: 2026-07-12
next_review: 2026-07-13
---

# 528 Demo 方向讨论

## 核心发现

**市面上几乎没有"语义层建设平台"这个品类的开源产品**。所有工具都是语义层的消费者，不是生产者。

### 开源语义层工具全景

```
┌─────────────────────────────────────────────────────────────┐
│  WrenAI / Cube / MetricFlow / Vanna / Malloy / Superset      │
│                     ↓ 语义层的"消费者"                        │
│              （用户问数 → 查语义模型 → 生成SQL）              │
├─────────────────────────────────────────────────────────────┤
│                   缺少的：语义层"生产者"                       │
│    （AI识别语义 → 置信度评分 → 人工审核 → 发布语义资产）       │
└─────────────────────────────────────────────────────────────┘
```

## DataHub 能力分析

### 能做的（2025年底新增 AI 能力）
1. ✅ AI 自动生成字段描述（表级 + 列级）
2. ✅ AI 自动分类/打标签（敏感数据检测、词汇表术语提议）
3. ✅ AI 数据质量规则提议（Freshness/Volume/Drift）
4. ✅ Human-in-the-Loop 审核工作流（接受/编辑/拒绝）
5. ✅ 血缘关系图可视化
6. ✅ 词汇表管理（Glossary）

### 不能做的
1. ❌ 同义词/黑话自动发现
2. ❌ 多层语义抽象（L1-L5）
3. ❌ NL2SQL/ChatBI（需要配合 WrenAI 等工具）
4. ❌ 置信度评分机制

## Demo 策略建议

**三层组合拳**：

### 第一层：HTML汇报材料（重点）
- 用 CSS 动画模拟语义层建设全过程
- 数据资产扫描 → AI自动打标签 → 置信度评分 → 人工审核面板 → 发布语义资产

### 第二层：WrenAI（已有）
- 展示"有了语义层之后的效果"
- 只放 DWS+ADS（10张表）

### 第三层：PPT提及方向（长期）
- DataHub 作为元数据底座
- dbt MetricFlow 作为语义引擎
- 自研 Agent 层作为 AI 辅助建设（差异化）

## 关键结论

> "DataHub 做元数据治理很强，但缺乏同义词发现/多层语义抽象/置信度评分——这是我们要补的。"

## 关联

- [Kimi_Agent_AI原生数据治理](/projects/KimiAgentAIDataGovernance.md)
- [DataHub](/entities/DataHub.md)
- [WrenAI](/entities/WrenAI.md)

# Citations

- 来源: 第二大脑 / 0-Inbox/528_demo方向讨论.md
- 时间: 2026-05-28
