/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
/**
   * X 轴数据配置
   * 表示一年的月份（1-12月）
   */
const xAxisData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
/**
 * 访客洞察图表数据
 * 对比老客户和新客户的全年访问趋势
 */
const chartData = computed(() => [
    {
        name: '老客户',
        data: [280, 350, 300, 250, 230, 210, 240, 280, 320, 350, 300, 200]
    },
    {
        name: '新客户',
        data: [260, 200, 150, 130, 180, 270, 340, 380, 300, 220, 170, 130]
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card h-82 p-5 mb-5 max-sm:mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtLineChart;
    /** @type { [typeof __VLS_components.ArtLineChart, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ height: ("calc(100% - 30px)"), data: ((__VLS_ctx.chartData)), xAxisData: ((__VLS_ctx.xAxisData)), showLegend: ((true)), showAxisLabel: ((true)), showAxisLine: ((false)), showSplitLine: ((true)), }));
    const __VLS_2 = __VLS_1({ height: ("calc(100% - 30px)"), data: ((__VLS_ctx.chartData)), xAxisData: ((__VLS_ctx.xAxisData)), showLegend: ((true)), showAxisLabel: ((true)), showAxisLine: ((false)), showSplitLine: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['h-82'];
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
//# sourceMappingURL=visitor-insights.vue.js.map