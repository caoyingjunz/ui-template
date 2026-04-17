/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card p-5 mb-5 h-105 max-sm:mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtRingChart;
    /** @type { [typeof __VLS_components.ArtRingChart, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ data: (([
            { value: 30, name: '电子产品' },
            { value: 55, name: '服装鞋包' },
            { value: 36, name: '家居用品' }
        ])), color: ((['#4C87F3', '#EDF2FF', '#8BD8FC'])), radius: ((['70%', '80%'])), height: ("16.5rem"), showLabel: ((false)), borderRadius: ((0)), centerText: ("¥300,458"), }));
    const __VLS_2 = __VLS_1({ data: (([
            { value: 30, name: '电子产品' },
            { value: 55, name: '服装鞋包' },
            { value: 36, name: '家居用品' }
        ])), color: ((['#4C87F3', '#EDF2FF', '#8BD8FC'])), radius: ((['70%', '80%'])), height: ("16.5rem"), showLabel: ((false)), borderRadius: ((0)), centerText: ("¥300,458"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-around") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cc size-10.5 mr-2.5 text-theme bg-theme/10 rounded-lg") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
    /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ("ri:money-cny-circle-line"), ...{ class: ("text-xl") }, }));
    const __VLS_8 = __VLS_7({ icon: ("ri:money-cny-circle-line"), ...{ class: ("text-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cc size-10.5 mr-2.5 text-theme bg-theme/10 rounded-lg") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
    /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ("ri:heart-3-line"), ...{ class: ("text-xl") }, }));
    const __VLS_14 = __VLS_13({ icon: ("ri:heart-3-line"), ...{ class: ("text-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm") }, });
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['h-105'];
    __VLS_styleScopedClasses['max-sm:mb-4'];
    __VLS_styleScopedClasses['art-card-header'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-around'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['size-10.5'];
    __VLS_styleScopedClasses['mr-2.5'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['size-10.5'];
    __VLS_styleScopedClasses['mr-2.5'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-sm'];
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
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=sales-classification.vue.js.map