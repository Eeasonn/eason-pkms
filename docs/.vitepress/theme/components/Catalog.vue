<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import DeleteButton from './DeleteButton.vue'

// VitePress base path（与 config.mjs 一致）
const basePath = '/eason-pkms/'

interface CatalogItem {
  id: string
  category: string
  type: string
  type_label: string
  title: string
  description: string
  author?: string
  platform?: string
  url?: string
  tags?: string[]
  date?: string
  status?: string
  review_count?: number
  next_review?: string
  course?: string
  chapter?: string
  wiki_path: string
  filename: string
}

interface Catalog {
  generated_at: string
  total: number
  type_counts: Record<string, number>
  categories: Record<string, number>
  items: CatalogItem[]
}

const catalog = ref<Catalog | null>(null)
const activeFilter = ref<string>('all')
const activeCategory = ref<string>('all')
const loading = ref(true)
const error = ref<string>('')

onMounted(async () => {
  try {
    const url = `${basePath}catalog.json`
    const resp = await fetch(url)
    if (!resp.ok) {
      throw new Error(`HTTP ${resp.status} for ${url}`)
    }
    catalog.value = await resp.json()
  } catch (e) {
    error.value = '目录加载失败：' + String(e)
    console.error('Catalog load error:', e)
  } finally {
    loading.value = false
  }
})

const typeFilters = [
  { key: 'all', label: '全部' },
  { key: 'web', label: '🌐 网页' },
  { key: 'gzh', label: '📱 公众号' },
  { key: 'course', label: '📚 系列课程' },
  { key: 'note', label: '📝 内部笔记' },
  { key: 'concept', label: '💡 概念' },
  { key: 'entity', label: '🗂️ 实体' },
  { key: 'project', label: '🎯 项目' },
  { key: 'review', label: '📅 复习卡' },
]

const categoryFilters = [
  { key: 'all', label: '全部分类' },
  { key: 'sources', label: '来源' },
  { key: 'concepts', label: '概念' },
  { key: 'entities', label: '实体' },
  { key: 'projects', label: '项目' },
  { key: 'inbox', label: 'Inbox' },
  { key: 'review', label: '复习' },
]

const filteredItems = computed(() => {
  if (!catalog.value) return {}
  let items = catalog.value.items
  if (activeFilter.value !== 'all') {
    items = items.filter((i) => i.type === activeFilter.value)
  }
  if (activeCategory.value !== 'all') {
    items = items.filter((i) => i.category === activeCategory.value)
  }
  const grouped: Record<string, CatalogItem[]> = {}
  for (const item of items) {
    const key = item.type_label
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(item)
  }
  return grouped
})

const typeCountForFilter = (key: string) => {
  if (!catalog.value) return 0
  if (key === 'all') return catalog.value.total
  return catalog.value.type_counts[key] || 0
}

const handleDeleted = (deletedPath: string) => {
  if (!catalog.value) return
  catalog.value.items = catalog.value.items.filter(
    (i) => i.wiki_path !== deletedPath
  )
  catalog.value.total = catalog.value.items.length
  const counts: Record<string, number> = {}
  for (const item of catalog.value.items) {
    counts[item.type] = (counts[item.type] || 0) + 1
  }
  catalog.value.type_counts = counts
  const cats: Record<string, number> = {}
  for (const item of catalog.value.items) {
    cats[item.category] = (cats[item.category] || 0) + 1
  }
  catalog.value.categories = cats
}
</script>

<template>
  <div class="catalog-page">
    <div v-if="loading" class="empty-state">加载中...</div>
    <div v-else-if="error" class="empty-state" style="color: #dc2626;">
      {{ error }}
    </div>
    <template v-else-if="catalog">
      <div class="catalog-stats">
        <div>
          <span class="count">{{ catalog.total }}</span>
          <span class="label">总内容</span>
        </div>
        <div v-for="t in typeFilters.slice(1)" :key="t.key">
          <span class="count" :style="{ color: `var(--type-${t.key})` }">
            {{ typeCountForFilter(t.key) }}
          </span>
          <span class="label">{{ t.label.replace(/^.\s/, '') }}</span>
        </div>
      </div>

      <div class="catalog-filters">
        <button
          v-for="t in typeFilters"
          :key="t.key"
          class="filter-btn"
          :class="{ active: activeFilter === t.key }"
          @click="activeFilter = t.key"
        >
          {{ t.label }} ({{ typeCountForFilter(t.key) }})
        </button>
      </div>

      <div class="catalog-filters">
        <button
          v-for="c in categoryFilters"
          :key="c.key"
          class="filter-btn"
          :class="{ active: activeCategory === c.key }"
          @click="activeCategory = c.key"
        >
          {{ c.label }}
        </button>
      </div>

      <div v-if="Object.keys(filteredItems).length === 0" class="empty-state">
        当前筛选下没有内容
      </div>
      <div
        v-for="(items, typeLabel) in filteredItems"
        :key="typeLabel"
        class="catalog-section"
      >
        <h2>{{ typeLabel }} ({{ items.length }})</h2>
        <div
          v-for="item in items"
          :key="item.id"
          class="catalog-card"
          :class="`type-${item.type}`"
        >
          <div class="catalog-card-body">
            <div class="catalog-card-title">
              <a :href="`${basePath}${item.wiki_path}`">
                {{ item.title }}
              </a>
              <span v-if="item.course" class="type-badge type-course">
                {{ item.course }}
              </span>
            </div>
            <div v-if="item.description" class="catalog-card-desc">
              {{ item.description }}
            </div>
            <div class="catalog-card-meta">
              <span v-if="item.date">📅 {{ item.date }}</span>
              <span v-if="item.author">👤 {{ item.author }}</span>
              <span v-if="item.platform && item.platform !== 'n/a'">
                📍 {{ item.platform }}
              </span>
              <a
                v-if="item.url"
                :href="item.url"
                target="_blank"
                rel="noopener"
                style="color: var(--vp-c-brand-1);"
              >
                🔗 原文
              </a>
              <span v-if="item.review_count !== undefined && item.review_count > 0">
                🔁 已复习 {{ item.review_count }} 次
              </span>
            </div>
          </div>
          <div class="catalog-card-actions">
            <DeleteButton
              :path="item.wiki_path"
              :title="item.title"
              @deleted="handleDeleted(item.wiki_path)"
            />
          </div>
        </div>
      </div>

      <div
        style="margin-top: 32px; padding: 12px; background: var(--vp-c-bg-soft); border-radius: 8px; font-size: 12px; color: var(--vp-c-text-3);"
      >
        目录生成于 {{ catalog.generated_at }} · 由
        <code>PKMS/scripts/build_catalog.py</code> 自动构建
      </div>
    </template>
  </div>
</template>