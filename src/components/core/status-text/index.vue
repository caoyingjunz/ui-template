<!-- 状态展示统一组件：彩色实心图标 + 纯文字（无 Tag 背景） -->
<template>
  <span class="status-text">
    <span
      class="status-text__icon"
      :class="{ 'status-text__icon--spin': type === 'primary' }"
      :style="{ color: color, fontSize: `${size}px` }"
    >
      <ArtSvgIcon :icon="resolvedIcon" />
    </span>
    <span class="status-text__label">{{ text }}</span>
  </span>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { StatusTagType } from '@/utils/constants/status/task-status'

  defineOptions({ name: 'StatusText' })

  interface Props {
    /** 状态类型（对齐 StatusTagType 色板语义） */
    type: StatusTagType
    /** 状态文案 */
    text: string
    /** 图标尺寸（px），默认 16 */
    size?: number
    /** 覆盖默认图标 */
    icon?: string
  }

  const props = withDefaults(defineProps<Props>(), { size: 16 })

  /** 类型 → 默认图标（remix）：进行中 loader / 完成 勾圆 / 异常 叉圆 / 告警 警示 / 等待 时钟 */
  const DEFAULT_ICONS: Record<StatusTagType, string> = {
    primary: 'ri:loader-4-line',
    success: 'ri:checkbox-circle-fill',
    danger: 'ri:close-circle-fill',
    warning: 'ri:error-warning-fill',
    info: 'ri:time-line'
  }

  /** 类型 → 颜色（CSS 变量），文字保持默认色不随状态变色 */
  const COLORS: Record<StatusTagType, string> = {
    primary: 'var(--el-color-primary)',
    success: 'var(--el-color-success)',
    danger: 'var(--el-color-danger)',
    warning: 'var(--el-color-warning)',
    info: 'var(--el-color-info)'
  }

  const resolvedIcon = computed(() => props.icon ?? DEFAULT_ICONS[props.type])
  const color = computed(() => COLORS[props.type])
</script>

<style scoped>
  .status-text {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    /* 表格单元格内与同行文字垂直居中（inline-flex 默认按基线对齐会整体下沉） */
    vertical-align: middle;
  }

  /* iconify Icon 为渲染函数组件，scoped 属性无法可靠附加到其 svg 根节点（同 art-svg-icon 的已知限制），经 :deep 选中 */
  .status-text__icon {
    display: inline-flex;
    line-height: 0;
  }

  /* 进行中：图标旋转动画（仅图标，文字不转） */
  .status-text__icon--spin :deep(svg) {
    animation: status-text-spin 1s linear infinite;
  }

  @keyframes status-text-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
