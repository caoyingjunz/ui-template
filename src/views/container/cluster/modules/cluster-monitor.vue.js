/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import ArtLineChart from '@/components/core/charts/art-line-chart/index.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const emit = defineEmits();
const visible = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
});
const activeTab = ref('cpu');
// 生成过去1小时的时间轴（每6分钟一个点，共10个点）
const timeLabels = computed(() => {
    const now = new Date();
    return Array.from({ length: 10 }, (_, i) => {
        const t = new Date(now.getTime() - (9 - i) * 6 * 60 * 1000);
        return `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}`;
    });
});
// 生成随机波动数据
function mockSeries(base, range) {
    return Array.from({ length: 10 }, () => Math.max(0, +(base + (Math.random() - 0.5) * range * 2).toFixed(1)));
}
const cpuMetrics = computed(() => [
    { title: 'CPU 总配置（核）', data: mockSeries(64, 0) },
    { title: 'CPU 利用率（%）', data: mockSeries(42, 15) },
    { title: 'CPU 使用量（核）', data: mockSeries(27, 10) },
    { title: 'CPU 请求量（核）', data: mockSeries(18, 8) }
]);
const memoryMetrics = computed(() => [
    { title: '内存总量（GB）', data: mockSeries(128, 0) },
    { title: '内存使用率（%）', data: mockSeries(58, 12) },
    { title: '内存使用量（GB）', data: mockSeries(74, 10) },
    { title: '内存请求量（GB）', data: mockSeries(50, 8) }
]);
const storageMetrics = computed(() => [
    { title: '存储总量（GB）', data: mockSeries(500, 0) },
    { title: '存储使用率（%）', data: mockSeries(35, 8) },
    { title: '磁盘读速率（MB/s）', data: mockSeries(120, 40) },
    { title: '磁盘写速率（MB/s）', data: mockSeries(80, 30) }
]);
const networkMetrics = computed(() => [
    { title: '网络入流量（Mbps）', data: mockSeries(200, 80) },
    { title: '网络出流量（Mbps）', data: mockSeries(150, 60) },
    { title: '网络包接收（pps）', data: mockSeries(3000, 800) },
    { title: '网络包发送（pps）', data: mockSeries(2500, 700) }
]);
const eventList = [
    { time: '2024-04-18 10:23:01', level: 'Normal', reason: 'Scheduled', message: '成功将 pod 调度到节点 node-01' },
    { time: '2024-04-18 10:22:45', level: 'Normal', reason: 'Pulling', message: '正在拉取镜像 nginx:1.25' },
    { time: '2024-04-18 10:21:30', level: 'Warning', reason: 'BackOff', message: 'Back-off restarting failed container' },
    { time: '2024-04-18 10:20:10', level: 'Normal', reason: 'Started', message: '容器 nginx 启动成功' },
    { time: '2024-04-18 10:18:55', level: 'Warning', reason: 'OOMKilling', message: '内存不足，容器被终止' },
    { time: '2024-04-18 10:15:22', level: 'Normal', reason: 'NodeReady', message: '节点 node-02 已就绪' }
];
// 切换集群时重置 tab
watch(() => props.cluster, () => { activeTab.value = 'cpu'; }); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    __typeEmits: {},
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElDrawer;
    /** @type { [typeof __VLS_components.ElDrawer, typeof __VLS_components.ElDrawer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.visible)), title: ((__VLS_ctx.cluster?.clusterName)), direction: ("rtl"), size: ("65%"), destroyOnClose: ((true)), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.visible)), title: ((__VLS_ctx.cluster?.clusterName)), direction: ("rtl"), size: ("65%"), destroyOnClose: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.ElTabs;
    /** @type { [typeof __VLS_components.ElTabs, typeof __VLS_components.ElTabs, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ modelValue: ((__VLS_ctx.activeTab)), ...{ class: ("monitor-tabs") }, }));
    const __VLS_9 = __VLS_8({ modelValue: ((__VLS_ctx.activeTab)), ...{ class: ("monitor-tabs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ label: ("CPU"), name: ("cpu"), }));
    const __VLS_15 = __VLS_14({ label: ("CPU"), name: ("cpu"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-grid") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.cpuMetrics))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.title)), ...{ class: ("chart-panel") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("panel-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("panel-title") }, });
        (item.title);
        // @ts-ignore
        [ArtLineChart,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(ArtLineChart, new ArtLineChart({ data: ((item.data)), xAxisData: ((__VLS_ctx.timeLabels)), showAreaColor: ((true)), smooth: ((true)), height: ("180px"), }));
        const __VLS_20 = __VLS_19({ data: ((item.data)), xAxisData: ((__VLS_ctx.timeLabels)), showAreaColor: ((true)), smooth: ((true)), height: ("180px"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    }
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ label: ("内存"), name: ("memory"), }));
    const __VLS_26 = __VLS_25({ label: ("内存"), name: ("memory"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-grid") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.memoryMetrics))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.title)), ...{ class: ("chart-panel") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("panel-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("panel-title") }, });
        (item.title);
        // @ts-ignore
        [ArtLineChart,];
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent(ArtLineChart, new ArtLineChart({ data: ((item.data)), xAxisData: ((__VLS_ctx.timeLabels)), showAreaColor: ((true)), smooth: ((true)), height: ("180px"), }));
        const __VLS_31 = __VLS_30({ data: ((item.data)), xAxisData: ((__VLS_ctx.timeLabels)), showAreaColor: ((true)), smooth: ((true)), height: ("180px"), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    }
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ label: ("存储"), name: ("storage"), }));
    const __VLS_37 = __VLS_36({ label: ("存储"), name: ("storage"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-grid") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.storageMetrics))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.title)), ...{ class: ("chart-panel") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("panel-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("panel-title") }, });
        (item.title);
        // @ts-ignore
        [ArtLineChart,];
        // @ts-ignore
        const __VLS_41 = __VLS_asFunctionalComponent(ArtLineChart, new ArtLineChart({ data: ((item.data)), xAxisData: ((__VLS_ctx.timeLabels)), showAreaColor: ((true)), smooth: ((true)), height: ("180px"), }));
        const __VLS_42 = __VLS_41({ data: ((item.data)), xAxisData: ((__VLS_ctx.timeLabels)), showAreaColor: ((true)), smooth: ((true)), height: ("180px"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    }
    __VLS_nonNullable(__VLS_40.slots).default;
    var __VLS_40;
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ label: ("网络"), name: ("network"), }));
    const __VLS_48 = __VLS_47({ label: ("网络"), name: ("network"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-grid") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.networkMetrics))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.title)), ...{ class: ("chart-panel") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("panel-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("panel-title") }, });
        (item.title);
        // @ts-ignore
        [ArtLineChart,];
        // @ts-ignore
        const __VLS_52 = __VLS_asFunctionalComponent(ArtLineChart, new ArtLineChart({ data: ((item.data)), xAxisData: ((__VLS_ctx.timeLabels)), showAreaColor: ((true)), smooth: ((true)), height: ("180px"), }));
        const __VLS_53 = __VLS_52({ data: ((item.data)), xAxisData: ((__VLS_ctx.timeLabels)), showAreaColor: ((true)), smooth: ((true)), height: ("180px"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    }
    __VLS_nonNullable(__VLS_51.slots).default;
    var __VLS_51;
    const __VLS_57 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ label: ("事件"), name: ("events"), }));
    const __VLS_59 = __VLS_58({ label: ("事件"), name: ("events"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    const __VLS_63 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.ElTable, ] } */
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ data: ((__VLS_ctx.eventList)), stripe: (true), ...{ style: ({}) }, }));
    const __VLS_65 = __VLS_64({ data: ((__VLS_ctx.eventList)), stripe: (true), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    const __VLS_69 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ prop: ("time"), label: ("时间"), width: ("180"), }));
    const __VLS_71 = __VLS_70({ prop: ("time"), label: ("时间"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    const __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ prop: ("level"), label: ("级别"), width: ("90"), }));
    const __VLS_77 = __VLS_76({ prop: ("level"), label: ("级别"), width: ("90"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_80.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_81 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ type: ((row.level === 'Warning' ? 'warning' : 'info')), size: ("small"), }));
        const __VLS_83 = __VLS_82({ type: ((row.level === 'Warning' ? 'warning' : 'info')), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
        (row.level);
        __VLS_nonNullable(__VLS_86.slots).default;
        var __VLS_86;
    }
    var __VLS_80;
    const __VLS_87 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ prop: ("reason"), label: ("原因"), width: ("150"), }));
    const __VLS_89 = __VLS_88({ prop: ("reason"), label: ("原因"), width: ("150"), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
    const __VLS_93 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({ prop: ("message"), label: ("消息"), }));
    const __VLS_95 = __VLS_94({ prop: ("message"), label: ("消息"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
    __VLS_nonNullable(__VLS_68.slots).default;
    var __VLS_68;
    __VLS_nonNullable(__VLS_62.slots).default;
    var __VLS_62;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['monitor-tabs'];
    __VLS_styleScopedClasses['chart-grid'];
    __VLS_styleScopedClasses['chart-panel'];
    __VLS_styleScopedClasses['panel-header'];
    __VLS_styleScopedClasses['panel-title'];
    __VLS_styleScopedClasses['chart-grid'];
    __VLS_styleScopedClasses['chart-panel'];
    __VLS_styleScopedClasses['panel-header'];
    __VLS_styleScopedClasses['panel-title'];
    __VLS_styleScopedClasses['chart-grid'];
    __VLS_styleScopedClasses['chart-panel'];
    __VLS_styleScopedClasses['panel-header'];
    __VLS_styleScopedClasses['panel-title'];
    __VLS_styleScopedClasses['chart-grid'];
    __VLS_styleScopedClasses['chart-panel'];
    __VLS_styleScopedClasses['panel-header'];
    __VLS_styleScopedClasses['panel-title'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ArtLineChart: ArtLineChart,
            visible: visible,
            activeTab: activeTab,
            timeLabels: timeLabels,
            cpuMetrics: cpuMetrics,
            memoryMetrics: memoryMetrics,
            storageMetrics: storageMetrics,
            networkMetrics: networkMetrics,
            eventList: eventList,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=cluster-monitor.vue.js.map