/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
/**
 * 本周热销商品列表
 * 展示销量排名前三的商品信息
 */
const weeklyList = [
    {
        icon: 'ri:money-cny-circle-line',
        title: '智能手表Pro',
        subtitle: '电子产品',
        value: '1,286件',
        iconBgClass: 'bg-theme/12 text-theme',
        valueBgClass: 'bg-theme/12 text-theme'
    },
    {
        icon: 'ri:money-cny-circle-line',
        title: '时尚连衣裙',
        subtitle: '女装服饰',
        value: '892件',
        iconBgClass: 'bg-success/12 text-success',
        valueBgClass: 'bg-success/12 text-success'
    },
    {
        icon: 'ri:money-cny-circle-line',
        title: '厨房小家电',
        subtitle: '家居用品',
        value: '756件',
        iconBgClass: 'bg-error/12 text-error',
        valueBgClass: 'bg-error/12 text-error'
    }
]; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card p-5 h-[28.2rem] mb-5 max-sm:mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtLineChart;
    /** @type { [typeof __VLS_components.ArtLineChart, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ showAxisLabel: ((false)), showAxisLine: ((false)), showSplitLine: ((false)), showAreaColor: ((true)), data: (([8, 40, 82, 35, 90, 52, 35])), height: ("9rem"), }));
    const __VLS_2 = __VLS_1({ showAxisLabel: ((false)), showAxisLine: ((false)), showSplitLine: ((false)), showAreaColor: ((true)), data: (([8, 40, 82, 35, 90, 52, 35])), height: ("9rem"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-10 space-y-5") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.weeklyList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.title)), ...{ class: ("flex-c") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("size-10.5 flex-cc rounded-lg") }, ...{ class: ((item.iconBgClass)) }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
        /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ((item.icon)), ...{ class: ("text-xl") }, }));
        const __VLS_8 = __VLS_7({ icon: ((item.icon)), ...{ class: ("text-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ml-2.5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm font-medium text-g-800") }, });
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-g-600") }, });
        (item.subtitle);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ml-auto px-3 py-1.5 text-sm text-center rounded") }, ...{ class: ((item.valueBgClass)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (item.value);
    }
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['h-[28.2rem]'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['max-sm:mb-4'];
    __VLS_styleScopedClasses['art-card-header'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['space-y-5'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['size-10.5'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['ml-2.5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-800'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['ml-auto'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1.5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['rounded'];
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
            weeklyList: weeklyList,
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
//# sourceMappingURL=hot-commodity.vue.js.map