<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  path: string
  title: string
}>()

const emit = defineEmits<{
  deleted: [path: string]
}>()

const confirming = ref(false)
const deleting = ref(false)
const error = ref('')

const backendBase = (() => {
  if (typeof window === 'undefined') return 'https://common-bears-kneel.loca.lt'
  // 优先用环境变量覆盖（生产构建时可设）
  // @ts-ignore
  return (window as any).__PKMS_BACKEND__ || 'https://common-bears-kneel.loca.lt'
})()

const startConfirm = () => {
  confirming.value = true
  error.value = ''
}

const cancel = () => {
  confirming.value = false
  error.value = ''
}

const doDelete = async () => {
  deleting.value = true
  error.value = ''
  try {
    const resp = await fetch(`${backendBase}/api/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: props.path,
        title: props.title,
      }),
    })
    if (!resp.ok) {
      const text = await resp.text()
      throw new Error(text || `HTTP ${resp.status}`)
    }
    const data = await resp.json()
    if (data.success) {
      emit('deleted', props.path)
      confirming.value = false
    } else {
      error.value = data.error || '删除失败'
    }
  } catch (e: any) {
    error.value = `无法连接到后端 (${backendBase})：${e.message || e}`
  } finally {
    deleting.value = false
  }
}
</script>

<template>
  <div class="delete-btn-wrapper">
    <button
      v-if="!confirming"
      class="delete-btn"
      @click="startConfirm"
      title="删除此内容"
    >
      🗑
    </button>
    <div v-else class="delete-confirm">
      <button
        class="delete-btn-confirm"
        :disabled="deleting"
        @click="doDelete"
      >
        {{ deleting ? '删除中...' : '确认删除' }}
      </button>
      <button class="delete-btn-cancel" :disabled="deleting" @click="cancel">
        取消
      </button>
      <div v-if="error" class="delete-error">{{ error }}</div>
    </div>
  </div>
</template>

<style scoped>
.delete-btn-wrapper {
  position: relative;
}

.delete-confirm {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
}

.delete-btn-confirm {
  background: #dc2626;
  color: white;
  border: 1px solid #dc2626;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
}

.delete-btn-confirm:hover:not(:disabled) {
  background: #b91c1c;
}

.delete-btn-cancel {
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
}

.delete-error {
  font-size: 11px;
  color: #dc2626;
  max-width: 200px;
  text-align: right;
}
</style>