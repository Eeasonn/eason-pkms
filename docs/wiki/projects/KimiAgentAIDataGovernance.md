---
type: Project
title: Kimi_Agent_AI原生数据治理
description: AI 原生数据治理平台 POC，核心命题：在零先验业务知识的前提下，AI 能否仅凭数仓元数据自动推断业务指标语义并搭建指标层
source_url: n/a
source_title: Kimi_Agent_AI原生数据治理 项目笔记
source_platform: 内部
ingest_date: 2026-07-12
access_date: 2026-07-12
tags: [AI, 数据治理, 华为, 工作, SemanticWeaver, ChatBI]
status: compiled
review_count: 0
last_review: 2026-07-12
next_review: 2026-07-13
---

# Kimi_Agent_AI原生数据治理

## 项目概述

**核心命题**：
> 在零先验业务知识的前提下，AI 能否仅凭数仓元数据（表名、列名、SQL 逻辑、注释）自动推断业务指标语义，并搭建可用的指标层？

**代码仓库**: `~/Documents/Projects/Kimi_Agent_AI原生数据治理/`

## 架构四层

```
消费层 (Streamlit/Superset/BI工具)
    ↓
指标服务层 (ChatBI Agent - Python FastAPI)
    ↓
指标编织层 (Semantic Weaver - AI 推断)
    ↓
元数据平台 (DataHub GMS + MySQL + Elasticsearch)
```

## 关键组件

### 1. Semantic Weaver
- 输入: DataHub 元数据（schema、SQL 逻辑、lineage）
- 输出: Cube.js schema 文件
- 核心约束: AI 仅使用元数据 —— 零设计文档、零预设业务知识

### 2. ChatBI Agent
- 自然语言查询 → SQL → 结果 + 解释
- 兼容 Cube.js JSON 格式
- 端口: 4000

### 3. DataHub 元数据平台
- 元数据采集、血缘图谱、搜索索引
- AI 自动打标 + HITL 审核工作流（2025年底新增）
- OSI 标准参与（2025.12加入）

## 关键决策

- 2026-05-21: 代码仓库移出 Obsidian vault
- 选择路径: 务实方案 — DataHub + WrenAI 组合拳

## 关联知识

- [DataHub](/entities/DataHub.md)
- [WrenAI](/entities/WrenAI.md)
- [语义层建设](/concepts/SemanticLayer.md)
- [数据技能体系](/concepts/DataSkills.md)

# Citations

- 来源: 第二大脑 / 1-Projects/Kimi_Agent_AI原生数据治理/
