/** 状态 Tag 统一色板（Element Plus ElTag 合法取值）：进行中蓝 / 完成绿 / 异常红 / 等待灰 / 告警橙 */
export type StatusTagType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

/** 任务状态（process）文案与 Tag 类型：0 等待 / 1 运行中 / 2 已完成 / 3 异常 */
export const TASK_STATUS_MAP: Record<number, { text: string; type: StatusTagType }> = {
  0: { text: '等待', type: 'info' },
  1: { text: '运行中', type: 'primary' },
  2: { text: '已完成', type: 'success' },
  3: { text: '异常', type: 'danger' }
}

export function taskStatusText(process: number): string {
  return TASK_STATUS_MAP[process]?.text ?? '未知'
}

export function taskStatusTagType(process: number): StatusTagType {
  return TASK_STATUS_MAP[process]?.type ?? 'info'
}
