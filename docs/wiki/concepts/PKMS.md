---
type: Concept
title: PKMS (Personal Knowledge Management System)
description: 个人知识管理系统，基于 OKF 存储格式 + llmwiki 增量编译机制构建的知识库
source_url: n/a
source_title: n/a
source_platform: 内部
ingest_date: 2026-07-11
access_date: 2026-07-11
tags: [知识管理, PKMS, OKF, llmwiki, 方法论]
status: compiled
review_count: 0
last_review: 2026-07-11
next_review: 2026-07-12
---

# PKMS (Personal Knowledge Management System)

## 定义

PKMS 是**个人知识管理系统**，将知识从「收藏」升级为「编译」——不是保存原文，而是让 AI 理解、提炼、关联、维护，形成可复利增长的知识资产。

## 三层架构

```
Raw Sources（原始材料）      ← 用户丢进来的文章、笔记（只读，不可变）
      ↓
The Wiki（知识层）            ← LLM 理解、提炼、关联、维护（LLM 全权负责）
      ↑
The Schema（模式层）          ← AGENTS.md 定义规则
```

## 核心机制

### 1. Ingest（入库）
- 用户发送链接 + "加入知识库"
- LLM 读取内容 → 确认理解 → 写入 Raw → 编译 Wiki → 关联追问

### 2. Query（查询）
- 基于已编译知识回答，而非 RAG 检索
- 回答本身可存为新 wiki 页面

### 3. Review（复习）
- 间隔重复：1天 → 3天 → 7天 → 14天 → 30天
- LLM 主动提问，用户回忆

### 4. Lint（健康检查）
- 每周扫描：孤儿页、矛盾、过时、缺失链接

## 与 OKF 的关系

- OKF 提供**存储格式**（markdown + YAML frontmatter）
- PKMS 提供**工作流**（Ingest → Query → Review → Lint）

## 与 llmwiki 的关系

- llmwiki 提供**增量编译**理念
- PKMS 实现为具体的工作协议和目录结构

## 关联

- [OKF](/concepts/OKF.md) — 存储格式规范
- [llmwiki](/concepts/llmwiki.md) — 增量编译模式
- [DIKW](/concepts/DIKW.md) — 知识内化金字塔，PKMS 设计的底层框架
- [Eason](/entities/Eason.md) — 使用者
- [Andrew《90%的 Karpathy 同款知识库注定要吃灰》](/sources/2026-07-12-karpathy-zhishiku-huiche.md) — PKMS 设计的重要参考，AI 辅助 vs 人工思考的边界

# Citations

- 来源: AGENTS.md 规则定义
- 灵感: Karpathy llmwiki + Google OKF
