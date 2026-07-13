# 知识库操作日志

> 按时间倒序排列。格式：`## YYYY-MM-DD` 下每项为 `* **动作**: 描述`

---

---

## 2026-07-13

* **抓取**: Datawhale 公众号《吹了几年的 AI 个人知识库，为什么还是那么难用？》→ 微信公众号完整提取
  - 工具: weixin-article-reader v1.1.0
  - 关键修复: 保留 `<img data-src>` 转 markdown 格式（4/4 图片 HTTP 200）、嵌套 div 精准截断（避免吃掉整页 JS）
  - 完整原文 569 行, 4 张图, ~8000 字
  - 原始位置: [[raw/articles/2026-07-13-datawhale-karpathy-knowledge-base-runtime]]
* **入库**: 原文归档到 raw/articles/ 和 inbox/
* **编译**: 创建 [[sources/2026-07-13-datawhale-karpathy-knowledge-base-runtime]]
  - 核心论点: AI 知识库是"运行时"问题，不是"存储检索"问题
  - 关键洞察: 四类方案对比 / 三层架构 / 四权分离 / 五个评估指标 / 主张 vs 段落
  - 危险案例: 上下文压缩把"不要执行任何动作"约束丢了
* **概念**: 新建 [[concepts/AI-Memory-Runtime]]
  - 三层架构图（运行时 / 知识 / 权限）
  - 四权分离表
  - 五个评估指标
  - 与 PKMS / Hermes / OpenClaw / Karpathy 的关系
* **复习**: 创建 2026-08-12 复习任务（间隔 30 天）
* **索引**: 更新总目录统计（概念 +1, 来源 +1, 待复习 +2）

---

## 2026-07-12

* **入库**: Andrew《90%的 Karpathy 同款知识库注定要吃灰》→ 来源页 + Raw 归档
  - 14 页小红书截图 OCR 转录
  - 核心概念: DIKW 模型、AI 知识库陷阱、思考三问法
  - 关联: PKMS 设计理念、AI 辅助思考边界
* **概念**: 新建 `concepts/DIKW.md`
* **索引**: 更新总目录统计（来源+1, 概念+1, 待复习+1）
* **复习**: 创建 2026-07-13 复习任务

## 2026-07-11

* **初始化**: 创建 PKMS 目录结构，定义 AGENTS.md 规则
* **协议**: 确定 OKF + llmwiki 混合模式
* **来源**: 支持网页、微信公众号、小红书、飞书文档
* **任务**: 创建 Daily Log 和 Review 定时任务
* **飞书同步**: 创建飞书云文档 https://e1ubxhexwu.feishu.cn/docx/YgP2d8vDJomOnhxHDiYc09LBnXd
* **inbox**: 丢入 Thinking Machines 文章《The Future Worth Building Is Human》（thinkingmachines.ai）
* **第二大脑迁移**: 从旧第二大脑系统迁移核心内容到 PKMS
  - 目标跟踪库 → 项目页（面试准备 + 学习 AI）
  - 旧 Wiki 规则 → LLM Wiki v3 概念页
  - 数据技能体系 → DataSkills 概念页
  - Kimi_Agent_AI原生数据治理 → 项目页
  - 528 Demo 讨论 → 来源页
  - DataHub / WrenAI → 实体页

