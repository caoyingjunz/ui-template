import type { StatusTagType } from './task-status'

/** 镜像 Tag 同步状态枚举 */
export const IMAGE_TAG_STATUS_OPTIONS = [
  { label: '初始化中', value: 'Initializing' },
  { label: '同步中', value: 'Running' },
  { label: '已完成', value: 'Completed' },
  { label: '异常', value: 'Error' }
] as const

/** 镜像 Tag 同步状态文案 */
export const IMAGE_TAG_STATUS_TEXT: Record<string, string> = {
  Initializing: '初始化中',
  Running: '同步中',
  Completed: '已完成',
  Error: '异常'
}

export function imageTagStatusText(status: string): string {
  return IMAGE_TAG_STATUS_TEXT[status] ?? (status || '-')
}

/** 镜像 Tag 同步状态 Tag 类型：初始化中/同步中蓝（处理中类）/ 已完成绿 / 异常红 / 其它灰 */
export function imageTagStatusType(status: string): StatusTagType {
  if (status === 'Completed') return 'success'
  if (status === 'Error') return 'danger'
  if (status === 'Running') return 'primary'
  if (status === 'Initializing') return 'primary'
  return 'info'
}
