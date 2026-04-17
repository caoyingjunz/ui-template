/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const AREA_STYLE_CONFIG = {
    startOpacity: 0.08,
    endOpacity: 0
};
/**
 * X 轴数据配置
 * 表示一周的天数（周一到周日）
 */
const xAxisData = ['1', '2', '3', '4', '5', '6', '7'];
/**
 * 客户满意度图表数据
 * 对比上个月和本月的满意度趋势
 */
const chartData = computed(() => [
    {
        name: '上个月',
        data: [65, 72, 68, 75, 82, 78, 85],
        areaStyle: AREA_STYLE_CONFIG
    },
    {
        name: '本月',
        data: [78, 85, 82, 88, 92, 89, 95],
        areaStyle: AREA_STYLE_CONFIG
    }
]); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card h-100 p-5 mb-5 max-sm:mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtLineChart;
    /** @type { [typeof __VLS_components.ArtLineChart, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ height: ("calc(100% - 30px)"), data: ((__VLS_ctx.chartData)), xAxisData: ((__VLS_ctx.xAxisData)), showLegend: ((true)), showAxisLabel: ((true)), showAxisLine: ((false)), showSplitLine: ((true)), }));
    const __VLS_2 = __VLS_1({ height: ("calc(100% - 30px)"), data: ((__VLS_ctx.chartData)), xAxisData: ((__VLS_ctx.xAxisData)), showLegend: ((true)), showAxisLabel: ((true)), showAxisLine: ((false)), showSplitLine: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['max-sm:mb-4'];
    __VLS_styleScopedClasses['art-card-header'];
    __VLS_styleScopedClasses['title'];
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
            xAxisData: xAxisData,
            chartData: chartData,
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
//# sourceMappingURL=customer-satisfaction.vue.js.map