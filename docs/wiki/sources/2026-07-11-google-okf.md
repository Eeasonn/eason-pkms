---
type: Source
title: Google 发布 Open Knowledge Format (OKF) — 给 AI Agent 喂知识的标准格式
description: Google Cloud 团队开源的知识表示格式，基于 markdown + YAML frontmatter，旨在统一 AI 知识库的标准。与 Karpathy 的 llmwiki 理念互补。
source_url: https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf
source_title: knowledge-catalog/okf at main · GoogleCloudPlatform/knowledge-catalog
source_author: Google Cloud Platform
source_platform: 网页 (GitHub)
ingest_date: 2026-07-11
access_date: 2026-07-11
tags: [AI, 知识管理, OKF, 标准格式, Google, llmwiki]
status: compiled
review_count: 0
last_review: 2026-07-11
next_review: 2026-07-12
---

# Google OKF 核心要点

## 1. 是什么

Open Knowledge Format (OKF) 是 Google Cloud 团队开源的**知识表示格式规范**。定义了如何用 markdown 文件 + YAML frontmatter 来组织 AI 可消费的知识库。

## 2. 核心设计

- **最小约束**：只要求 type 字段，其余自由扩展
- **人类可读**：任何工程师可以用 `cat` 阅读
- **版本可控**：git 原生支持 diff/blame/review
- **无厂商锁定**：目录即 bundle，任意工具可读
- **渐进式披露**：index.md 目录 + 层级结构

## 3. 文件格式

```
path/to/bundle/
├── index.md              # 目录索引
├── log.md                # 更新日志
├── <concept>.md          # 知识单元（YAML frontmatter + markdown body）
└── <subdirectory>/
    └── ...
```

## 4. 与 llmwiki 的关系

- OKF = **存储格式**（怎么存）
- llmwiki = **工作模式**（怎么长）
- 两者互补：OKF 提供骨架，llmwiki 提供血肉

## 5. 对 Eason 的启发

- 用 OKF 规范作为个人知识库的存储标准
- 用 llmwiki 的增量编译机制维护知识内容
- 结合两者构建完整的 PKMS（Personal Knowledge Management System）

# Citations

[1] https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf
[2] https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing
