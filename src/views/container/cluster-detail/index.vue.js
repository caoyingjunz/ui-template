import { ArrowLeft } from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'ClusterDetail' });
const router = useRouter();
const route = useRoute();
const id = Number(route.params.id);
const activeDetailTab = ref('overview');
function syncTabFromRoute() {
    const q = route.query.tab;
    const key = typeof q === 'string' ? q : Array.isArray(q) ? q[0] : '';
    if (key === 'alert' || key === 'logs') {
        activeDetailTab.value = key;
    }
    else {
        activeDetailTab.value = 'overview';
    }
}
function onDetailTabChange(name) {
    const n = String(name);
    if (n === 'overview') {
        router.replace({ path: route.path, query: {} });
    }
    else {
        router.replace({ path: route.path, query: { tab: n } });
    }
}
watch(() => route.query.tab, () => syncTabFromRoute(), { immediate: true });
const STATUS_CONFIG = {
    running: { type: 'success', text: '运行中' },
    error: { type: 'danger', text: '异常' },
    stopped: { type: 'info', text: '已停止' }
};
// 根据 id mock 集群数据
const cluster = {
    id,
    clusterName: `pixiu-cls-${String(id).padStart(2, '0')}`,
    version: ['v1.28.0', 'v1.27.3', 'v1.26.5'][id % 3],
    status: ['running', 'running', 'error', 'stopped'][id % 4],
    nodeCount: (id % 5) + 1,
    region: ['华北-北京', '华东-上海', '华南-广州'][id % 3],
    createTime: '2026-04-18 13:26:04'
};
const statusConfig = STATUS_CONFIG[cluster.status];
const infoCards = [
    { label: 'Kubernetes 版本', value: cluster.version },
    { label: '节点数', value: cluster.nodeCount },
    { label: '所在地域', value: cluster.region },
    { label: '创建时间', value: cluster.createTime }
];
// mock 节点列表
const nodes = Array.from({ length: cluster.nodeCount }, (_, i) => ({
    name: `node-${String(i + 1).padStart(2, '0')}.${cluster.clusterName}`,
    role: i === 0 ? 'Master' : 'Worker',
    status: i === 1 && cluster.status === 'error' ? 'NotReady' : 'Ready',
    ip: `192.168.${id}.${10 + i}`,
    os: 'Ubuntu 22.04',
    cpu: [4, 8, 16][i % 3],
    memory: [8, 16, 32][i % 3],
    joinTime: '2026-04-18 13:26:04'
})); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cluster-detail-page art-full-height") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("detail-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-left") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.ArrowLeft)), text: (true), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.ArrowLeft)), text: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.router.back();
        }
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElDivider;
    /** @type { [typeof __VLS_components.ElDivider, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ direction: ("vertical"), }));
    const __VLS_10 = __VLS_9({ direction: ("vertical"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("cluster-name") }, });
    (__VLS_ctx.cluster.clusterName);
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
    /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ type: ((__VLS_ctx.statusConfig.type)), ...{ class: ("ml-3") }, }));
    const __VLS_16 = __VLS_15({ type: ((__VLS_ctx.statusConfig.type)), ...{ class: ("ml-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    (__VLS_ctx.statusConfig.text);
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19;
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElTabs;
    /** @type { [typeof __VLS_components.ElTabs, typeof __VLS_components.ElTabs, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onTabChange': {} }, modelValue: ((__VLS_ctx.activeDetailTab)), ...{ class: ("cluster-detail-tabs") }, }));
    const __VLS_22 = __VLS_21({ ...{ 'onTabChange': {} }, modelValue: ((__VLS_ctx.activeDetailTab)), ...{ class: ("cluster-detail-tabs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    let __VLS_26;
    const __VLS_27 = {
        onTabChange: (__VLS_ctx.onDetailTabChange)
    };
    let __VLS_23;
    let __VLS_24;
    const __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ label: ("集群概览"), name: ("overview"), }));
    const __VLS_30 = __VLS_29({ label: ("集群概览"), name: ("overview"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("info-cards") }, });
    for (const [card] of __VLS_getVForSourceType((__VLS_ctx.infoCards))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((card.label)), ...{ class: ("info-card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("info-label") }, });
        (card.label);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("info-value") }, });
        (card.value);
    }
    const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ ...{ class: ("art-table-card mt-4") }, }));
    const __VLS_36 = __VLS_35({ ...{ class: ("art-table-card mt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_39.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("card-title") }, });
    }
    const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.ElTable, ] } */
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ data: ((__VLS_ctx.nodes)), stripe: (true), }));
    const __VLS_42 = __VLS_41({ data: ((__VLS_ctx.nodes)), stripe: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ prop: ("name"), label: ("节点名称"), }));
    const __VLS_48 = __VLS_47({ prop: ("name"), label: ("节点名称"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ prop: ("role"), label: ("角色"), width: ("100"), }));
    const __VLS_54 = __VLS_53({ prop: ("role"), label: ("角色"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_57.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ type: ((row.role === 'Master' ? 'primary' : 'default')), size: ("small"), }));
        const __VLS_60 = __VLS_59({ type: ((row.role === 'Master' ? 'primary' : 'default')), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
        (row.role);
        __VLS_nonNullable(__VLS_63.slots).default;
        var __VLS_63;
    }
    var __VLS_57;
    const __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ prop: ("status"), label: ("状态"), width: ("100"), }));
    const __VLS_66 = __VLS_65({ prop: ("status"), label: ("状态"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_69.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_70 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ type: ((row.status === 'Ready' ? 'success' : 'danger')), size: ("small"), }));
        const __VLS_72 = __VLS_71({ type: ((row.status === 'Ready' ? 'success' : 'danger')), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
        (row.status);
        __VLS_nonNullable(__VLS_75.slots).default;
        var __VLS_75;
    }
    var __VLS_69;
    const __VLS_76 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ prop: ("ip"), label: ("IP 地址"), }));
    const __VLS_78 = __VLS_77({ prop: ("ip"), label: ("IP 地址"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    const __VLS_82 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ prop: ("os"), label: ("操作系统"), }));
    const __VLS_84 = __VLS_83({ prop: ("os"), label: ("操作系统"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
    const __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ prop: ("cpu"), label: ("CPU（核）"), width: ("110"), }));
    const __VLS_90 = __VLS_89({ prop: ("cpu"), label: ("CPU（核）"), width: ("110"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    const __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ prop: ("memory"), label: ("内存（GB）"), width: ("110"), }));
    const __VLS_96 = __VLS_95({ prop: ("memory"), label: ("内存（GB）"), width: ("110"), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
    const __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ prop: ("joinTime"), label: ("加入时间"), }));
    const __VLS_102 = __VLS_101({ prop: ("joinTime"), label: ("加入时间"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
    __VLS_nonNullable(__VLS_45.slots).default;
    var __VLS_45;
    var __VLS_39;
    __VLS_nonNullable(__VLS_33.slots).default;
    var __VLS_33;
    const __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ label: ("配置告警"), name: ("alert"), }));
    const __VLS_108 = __VLS_107({ label: ("配置告警"), name: ("alert"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
    const __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ ...{ class: ("art-table-card mt-4") }, }));
    const __VLS_114 = __VLS_113({ ...{ class: ("art-table-card mt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_113));
    const __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElEmpty;
    /** @type { [typeof __VLS_components.ElEmpty, ] } */
    // @ts-ignore
    const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ description: ("告警规则与通知渠道配置（待对接后端）"), }));
    const __VLS_120 = __VLS_119({ description: ("告警规则与通知渠道配置（待对接后端）"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
    __VLS_nonNullable(__VLS_117.slots).default;
    var __VLS_117;
    __VLS_nonNullable(__VLS_111.slots).default;
    var __VLS_111;
    const __VLS_124 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ label: ("采集日志"), name: ("logs"), }));
    const __VLS_126 = __VLS_125({ label: ("采集日志"), name: ("logs"), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
    const __VLS_130 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{ class: ("art-table-card mt-4") }, }));
    const __VLS_132 = __VLS_131({ ...{ class: ("art-table-card mt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_131));
    const __VLS_136 = __VLS_resolvedLocalAndGlobalComponents.ElEmpty;
    /** @type { [typeof __VLS_components.ElEmpty, ] } */
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ description: ("集群日志采集与检索（待对接后端）"), }));
    const __VLS_138 = __VLS_137({ description: ("集群日志采集与检索（待对接后端）"), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    __VLS_nonNullable(__VLS_135.slots).default;
    var __VLS_135;
    __VLS_nonNullable(__VLS_129.slots).default;
    var __VLS_129;
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25;
    __VLS_styleScopedClasses['cluster-detail-page'];
    __VLS_styleScopedClasses['art-full-height'];
    __VLS_styleScopedClasses['detail-header'];
    __VLS_styleScopedClasses['header-left'];
    __VLS_styleScopedClasses['cluster-name'];
    __VLS_styleScopedClasses['ml-3'];
    __VLS_styleScopedClasses['cluster-detail-tabs'];
    __VLS_styleScopedClasses['info-cards'];
    __VLS_styleScopedClasses['info-card'];
    __VLS_styleScopedClasses['info-label'];
    __VLS_styleScopedClasses['info-value'];
    __VLS_styleScopedClasses['art-table-card'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['card-title'];
    __VLS_styleScopedClasses['art-table-card'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['art-table-card'];
    __VLS_styleScopedClasses['mt-4'];
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
            ArrowLeft: ArrowLeft,
            router: router,
            activeDetailTab: activeDetailTab,
            onDetailTabChange: onDetailTabChange,
            cluster: cluster,
            statusConfig: statusConfig,
            infoCards: infoCards,
            nodes: nodes,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=index.vue.js.map