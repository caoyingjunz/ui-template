/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref } from 'vue';
import { Check, Close } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'Pricing' });
const pricingPlans = ref([
    {
        type: 'single',
        title: '单次使用版',
        description: '适用于单个最终产品，最终用户无需付费。',
        price: 349,
        features: [
            { text: '完整源代码', available: true },
            { text: '技术文档', available: true },
            { text: 'SaaS应用授权', available: false },
            { text: '单个项目使用', available: true },
            { text: '一年技术支持', available: true },
            { text: '一年免费更新', available: true }
        ]
    },
    {
        type: 'multiple',
        title: '多次使用版',
        description: '适用于无限个最终产品，最终用户无需付费。',
        price: 629,
        features: [
            { text: '完整源代码', available: true },
            { text: '技术文档', available: true },
            { text: 'SaaS应用授权', available: false },
            { text: '无限项目使用', available: true },
            { text: '一年技术支持', available: true },
            { text: '一年免费更新', available: true }
        ]
    },
    {
        type: 'extended',
        title: '扩展授权版',
        description: '适用于单个最终产品，最终用户需要付费。',
        price: 2099,
        features: [
            { text: '完整源代码', available: true },
            { text: '技术文档', available: true },
            { text: 'SaaS应用授权', available: true },
            { text: '单个项目使用', available: true },
            { text: '一年技术支持', available: true },
            { text: '一年免费更新', available: true }
        ]
    },
    {
        type: 'unlimited',
        title: '无限授权版',
        description: '适用于无限个最终产品，最终用户需要付费。',
        price: 3499,
        features: [
            { text: '完整源代码', available: true },
            { text: '技术文档', available: true },
            { text: 'SaaS应用授权', available: true },
            { text: '无限项目使用', available: true },
            { text: '一年技术支持', available: true },
            { text: '一年免费更新', available: true }
        ]
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pt-24 px-20 max-md:!pt-15 max-sm:!px-5 max-md:!px-8 bg-transparent !border-none") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-10 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("mb-2 text-4xl font-medium max-sm:text-3xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("mb-2.5 text-2xl font-normal text-g-600 max-sm:text-2xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("gap-2 flex-cc mt-2.5 max-sm:mt-3.5 max-sm:!block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm italic text-g-600 max-sm:text-sm") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
    /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ type: ("success"), size: ("large"), round: (true), ...{ class: ("max-sm:mt-3.5") }, }));
    const __VLS_2 = __VLS_1({ type: ("success"), size: ("large"), round: (true), ...{ class: ("max-sm:mt-3.5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-20 max-md:mt-0") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ gutter: ((20)), justify: ("center"), }));
    const __VLS_8 = __VLS_7({ gutter: ((20)), justify: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    for (const [plan] of __VLS_getVForSourceType((__VLS_ctx.pricingPlans))) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((plan.type)), xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }));
        const __VLS_14 = __VLS_13({ key: ((plan.type)), xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
        /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("flex flex-col h-full rounded-xl") }, }));
        const __VLS_20 = __VLS_19({ ...{ class: ("flex flex-col h-full rounded-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2.5 text-xl font-medium") }, });
        (plan.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("h-10 pb-5 mb-5 overflow-hidden text-sm text-g-600 text-ellipsis border-b border-g-300/80 line-clamp-2") }, });
        (plan.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-7.5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-3xl font-medium") }, });
        (plan.price);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2.5 text-sm text-g-600") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-grow mb-5") }, });
        for (const [feature, index] of __VLS_getVForSourceType((plan.features))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("flex-c mb-2.5 text-sm") }, });
            const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
            // @ts-ignore
            const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("mr-2.5") }, ...{ class: ((feature.available ? '!text-theme' : '!text-danger')) }, }));
            const __VLS_26 = __VLS_25({ ...{ class: ("mr-2.5") }, ...{ class: ((feature.available ? '!text-theme' : '!text-danger')) }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
            if (feature.available) {
                const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.Check;
                /** @type { [typeof __VLS_components.Check, ] } */
                // @ts-ignore
                const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
                const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
            }
            else {
                const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.Close;
                /** @type { [typeof __VLS_components.Close, ] } */
                // @ts-ignore
                const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
                const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
            }
            __VLS_nonNullable(__VLS_29.slots).default;
            var __VLS_29;
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (feature.text);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-auto text-center") }, });
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ type: ("primary"), ...{ class: ("w-full h-10") }, }));
        const __VLS_44 = __VLS_43({ type: ("primary"), ...{ class: ("w-full h-10") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
        __VLS_nonNullable(__VLS_47.slots).default;
        var __VLS_47;
        __VLS_nonNullable(__VLS_23.slots).default;
        var __VLS_23;
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_styleScopedClasses['pt-24'];
    __VLS_styleScopedClasses['px-20'];
    __VLS_styleScopedClasses['max-md:!pt-15'];
    __VLS_styleScopedClasses['max-sm:!px-5'];
    __VLS_styleScopedClasses['max-md:!px-8'];
    __VLS_styleScopedClasses['bg-transparent'];
    __VLS_styleScopedClasses['!border-none'];
    __VLS_styleScopedClasses['mb-10'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['max-sm:text-3xl'];
    __VLS_styleScopedClasses['mb-2.5'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-normal'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['max-sm:text-2xl'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['mt-2.5'];
    __VLS_styleScopedClasses['max-sm:mt-3.5'];
    __VLS_styleScopedClasses['max-sm:!block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['max-sm:text-sm'];
    __VLS_styleScopedClasses['max-sm:mt-3.5'];
    __VLS_styleScopedClasses['mt-20'];
    __VLS_styleScopedClasses['max-md:mt-0'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-2.5'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['pb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['text-ellipsis'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-g-300/80'];
    __VLS_styleScopedClasses['line-clamp-2'];
    __VLS_styleScopedClasses['mt-7.5'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['ml-2.5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['mb-2.5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mr-2.5'];
    __VLS_styleScopedClasses['mt-auto'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-10'];
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
            Check: Check,
            Close: Close,
            pricingPlans: pricingPlans,
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