/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { hexToRgb } from '@/utils/ui';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const COLOR_THRESHOLDS = {
    LOW: 25,
    MEDIUM: 50,
    HIGH: 75
};
const POPULARITY_COLORS = {
    LOW: '#00E096',
    MEDIUM: '#0095FF',
    HIGH: '#884CFF',
    VERY_HIGH: '#FE8F0E'
};
/**
 * 热门产品列表数据
 * 包含产品名称、热度和销量信息
 */
const products = computed(() => [
    { name: '智能手机', popularity: 10, sales: '100' },
    { name: '笔记本电脑', popularity: 29, sales: '100' },
    { name: '平板电脑', popularity: 65, sales: '100' },
    { name: '智能手表', popularity: 32, sales: '100' },
    { name: '无线耳机', popularity: 78, sales: '100' },
    { name: '智能音箱', popularity: 41, sales: '100' }
]);
/**
 * 根据热度百分比获取对应的颜色
 * @param percentage 热度百分比 (0-100)
 * @returns 对应的颜色值
 */
const getColor = (percentage) => {
    if (percentage < COLOR_THRESHOLDS.LOW)
        return POPULARITY_COLORS.LOW;
    if (percentage < COLOR_THRESHOLDS.MEDIUM)
        return POPULARITY_COLORS.MEDIUM;
    if (percentage < COLOR_THRESHOLDS.HIGH)
        return POPULARITY_COLORS.HIGH;
    return POPULARITY_COLORS.VERY_HIGH;
}; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card h-82 p-5 mb-5 overflow-hidden max-sm:mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overflow-auto h-full") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtTable;
    /** @type { [typeof __VLS_components.ArtTable, typeof __VLS_components.ArtTable, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ data: ((__VLS_ctx.products)), ...{ style: ({}) }, size: ("large"), border: ((false)), stripe: ((false)), headerCellStyle: (({ background: 'transparent' })), }));
    const __VLS_2 = __VLS_1({ data: ((__VLS_ctx.products)), ...{ style: ({}) }, size: ("large"), border: ((false)), stripe: ((false)), headerCellStyle: (({ background: 'transparent' })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ prop: ("name"), label: ("产品名称"), width: ("200"), }));
    const __VLS_8 = __VLS_7({ prop: ("name"), label: ("产品名称"), width: ("200"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ prop: ("popularity"), label: ("销量"), }));
    const __VLS_14 = __VLS_13({ prop: ("popularity"), label: ("销量"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
        const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElProgress;
        /** @type { [typeof __VLS_components.ElProgress, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ percentage: ((scope.row.popularity)), color: ((__VLS_ctx.getColor(scope.row.popularity))), strokeWidth: ((5)), showText: ((false)), }));
        const __VLS_20 = __VLS_19({ percentage: ((scope.row.popularity)), color: ((__VLS_ctx.getColor(scope.row.popularity))), strokeWidth: ((5)), showText: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    }
    var __VLS_17;
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ prop: ("sales"), label: ("销量"), width: ("80"), }));
    const __VLS_26 = __VLS_25({ prop: ("sales"), label: ("销量"), width: ("80"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_29.slots);
        const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: (({
                    color: __VLS_ctx.getColor(scope.row.popularity),
                    backgroundColor: `rgba(${__VLS_ctx.hexToRgb(__VLS_ctx.getColor(scope.row.popularity))}, 0.08)`,
                    border: '1px solid',
                    padding: '3px 6px',
                    borderRadius: '4px',
                    fontSize: '12px'
                })) }, });
        (scope.row.sales);
    }
    var __VLS_29;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['h-82'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['max-sm:mb-4'];
    __VLS_styleScopedClasses['art-card-header'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['overflow-auto'];
    __VLS_styleScopedClasses['h-full'];
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
            hexToRgb: hexToRgb,
            products: products,
            getColor: getColor,
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
//# sourceMappingURL=top-products.vue.js.map