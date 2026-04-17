/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
/**
 * 今日销售数据统计
 * 包含销售额、订单量、产品销量和新客户数等关键指标
 */
const salesData = ref([
    {
        label: '总销售额',
        value: 999,
        change: '+10%',
        icon: 'ri:bar-chart-box-ai-line',
        class: 'bg-theme'
    },
    {
        label: '总订单量',
        value: 300,
        change: '+15%',
        icon: 'ri:bar-chart-grouped-line',
        class: 'bg-warning'
    },
    {
        label: '产品销售量',
        value: 56,
        change: '-5%',
        icon: 'ri:bar-chart-2-line',
        class: 'bg-error'
    },
    {
        label: '新客户数',
        value: 68,
        change: '+8%',
        icon: 'ri:user-add-line',
        class: 'bg-success'
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card h-82 p-5 mb-5 overflow-hidden max-lg:h-auto max-sm:mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card-header pr-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cc h-7.5 min-w-17 border border-g-300 rounded-lg text-g-500 c-p") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
    /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ("ri:arrow-up-line"), ...{ class: ("text-base mr-1.5") }, }));
    const __VLS_2 = __VLS_1({ icon: ("ri:arrow-up-line"), ...{ class: ("text-base mr-1.5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ gutter: ((20)), }));
    const __VLS_8 = __VLS_7({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.salesData))) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ span: ((6)), xs: ((24)), key: ((index)), }));
        const __VLS_14 = __VLS_13({ span: ((6)), xs: ((24)), key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex px-5 flex-col justify-center h-55 border border-g-300/85 rounded-xl max-lg:mb-4 max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:h-40") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("size-12 rounded-lg flex-cc bg-theme/10") }, });
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
        /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ((item.icon)), ...{ class: ("text-xl text-theme") }, }));
        const __VLS_20 = __VLS_19({ icon: ((item.icon)), ...{ class: ("text-xl text-theme") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-sm:ml-4 mt-3.5 max-sm:mt-0 max-sm:text-end") }, });
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ArtCountTo;
        /** @type { [typeof __VLS_components.ArtCountTo, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("text-2xl font-medium") }, target: ((item.value)), duration: ((1500)), }));
        const __VLS_26 = __VLS_25({ ...{ class: ("text-2xl font-medium") }, target: ((item.value)), duration: ((1500)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-2 text-base text-g-600 max-sm:mt-1") }, });
        (item.label);
        __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({ ...{ class: ("text-g-500 mt-1 max-sm:mt-0.5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium") }, ...{ class: (([item.change.indexOf('+') === -1 ? 'text-danger' : 'text-success'])) }, });
        (item.change);
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['h-82'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['max-lg:h-auto'];
    __VLS_styleScopedClasses['max-sm:mb-4'];
    __VLS_styleScopedClasses['art-card-header'];
    __VLS_styleScopedClasses['pr-0'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['h-7.5'];
    __VLS_styleScopedClasses['min-w-17'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-g-300'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-g-500'];
    __VLS_styleScopedClasses['c-p'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['mr-1.5'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['px-5'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['h-55'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-g-300/85'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['max-lg:mb-4'];
    __VLS_styleScopedClasses['max-sm:flex-row'];
    __VLS_styleScopedClasses['max-sm:justify-between'];
    __VLS_styleScopedClasses['max-sm:items-center'];
    __VLS_styleScopedClasses['max-sm:h-40'];
    __VLS_styleScopedClasses['size-12'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['max-sm:ml-4'];
    __VLS_styleScopedClasses['mt-3.5'];
    __VLS_styleScopedClasses['max-sm:mt-0'];
    __VLS_styleScopedClasses['max-sm:text-end'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['max-sm:mt-1'];
    __VLS_styleScopedClasses['text-g-500'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['max-sm:mt-0.5'];
    __VLS_styleScopedClasses['font-medium'];
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
            salesData: salesData,
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
//# sourceMappingURL=today-sales.vue.js.map