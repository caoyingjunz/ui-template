/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { upgradeLogList } from '@/mock/upgrade/changeLog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'ChangeLog' }); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-auto pt-5 mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-2xl font-medium text-g-900 mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-5") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.upgradeLogList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.version)), ...{ class: ("art-card-sm rounded-lg p-6 transition-shadow max-md:p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb gap-3 mb-4 flex-wrap") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("px-3 py-1 bg-theme/10 text-theme text-sm font-medium rounded-full") }, });
        (item.version);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-g-500") }, });
        (item.date);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("text-lg font-medium text-g-900 mb-3") }, });
        (item.title);
        if (item.detail?.length) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("space-y-2 mb-4") }, });
            for (const [detail, index] of __VLS_getVForSourceType((item.detail))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), ...{ class: ("flex-c gap-2 text-sm text-g-600") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("mt-0.5") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
                (detail);
            }
        }
        if (item.remark) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-sm text-g-800 bg-g-300/60 rounded p-3 mb-3") }, });
            (item.remark);
        }
        if (item.requireReLogin) {
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ type: ("warning"), size: ("small"), }));
            const __VLS_2 = __VLS_1({ type: ("warning"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            __VLS_nonNullable(__VLS_5.slots).default;
            var __VLS_5;
        }
    }
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['pt-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-900'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['space-y-5'];
    __VLS_styleScopedClasses['art-card-sm'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['transition-shadow'];
    __VLS_styleScopedClasses['max-md:p-4'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-500'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-900'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['mt-0.5'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-800'];
    __VLS_styleScopedClasses['bg-g-300/60'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['mb-3'];
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
            upgradeLogList: upgradeLogList,
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