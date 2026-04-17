/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
/**
 * 服务类别数据
 * 不同产品的分类标签
 */
const serviceCategories = ref(['产品A', '产品B', '产品C', '产品D', '产品E']);
/**
 * 业务量与服务量数据
 * 展示各产品的业务量和服务量对比，使用堆叠柱状图展示
 */
const volumeServiceData = ref([
    {
        name: '业务量',
        data: [20, 25, 30, 35, 40],
        stack: 'total'
    },
    {
        name: '服务量',
        data: [30, 35, 40, 45, 50],
        stack: 'total'
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtBarChart;
    /** @type { [typeof __VLS_components.ArtBarChart, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("mt-6") }, height: ("14.3rem"), data: ((__VLS_ctx.volumeServiceData)), xAxisData: ((__VLS_ctx.serviceCategories)), showLegend: ((true)), showAxisLine: ((false)), stack: ((true)), barWidth: ("22%"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("mt-6") }, height: ("14.3rem"), data: ((__VLS_ctx.volumeServiceData)), xAxisData: ((__VLS_ctx.serviceCategories)), showLegend: ((true)), showAxisLine: ((false)), stack: ((true)), barWidth: ("22%"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['h-82'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['max-sm:mb-4'];
    __VLS_styleScopedClasses['art-card-header'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['mt-6'];
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
            serviceCategories: serviceCategories,
            volumeServiceData: volumeServiceData,
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
//# sourceMappingURL=volume-service-level.vue.js.map