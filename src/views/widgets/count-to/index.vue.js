/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import ArtCountTo from '@/components/core/text-effect/art-count-to/index.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'TemplateCountTo' });
const controlTarget = ref(0);
const countToRef = ref();
const easingTarget = ref(0);
/**
 * 缓动动画类型配置
 */
const easingTypes = [
    { name: 'Linear', type: 'linear' },
    { name: 'Ease Out Cubic', type: 'easeOutCubic' },
    { name: 'Ease Out Expo', type: 'easeOutExpo' },
    { name: 'Ease Out Sine', type: 'easeOutSine' },
    { name: 'Ease In Out', type: 'easeInOutCubic' },
    { name: 'Ease In Quad', type: 'easeInQuad' }
];
/**
 * 开始计数动画
 */
const startCount = () => {
    const newTarget = 5000;
    controlTarget.value = newTarget;
    countToRef.value?.start(newTarget);
};
/**
 * 暂停计数动画
 */
const pauseCount = () => {
    countToRef.value?.pause();
};
/**
 * 重置计数动画
 */
const resetCount = () => {
    countToRef.value?.reset();
    controlTarget.value = 0;
};
/**
 * 触发缓动效果演示
 * 在 0 和 1000 之间切换
 */
const triggerEasing = () => {
    easingTarget.value = easingTarget.value === 0 ? 1000 : 0;
};
/**
 * 动画开始回调
 * @param value 目标值
 */
const handleAnimationStarted = (value) => {
    console.log('动画开始，目标值:', value);
};
/**
 * 动画完成回调
 * @param value 最终值
 */
const handleAnimationFinished = (value) => {
    console.log('动画完成，最终值:', value);
};
/**
 * 动画暂停回调
 * @param value 当前值
 */
const handleAnimationPaused = (value) => {
    console.log('动画暂停，当前值:', value);
};
/**
 * 动画重置回调
 */
const handleAnimationReset = () => {
    console.log('动画已重置');
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-15 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("my-4 text-2xl font-semibold leading-tight") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 text-base leading-relaxed text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-15") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("m-0 mb-6 text-xl font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("count") }, });
    // @ts-ignore
    [ArtCountTo,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ArtCountTo, new ArtCountTo({ target: ((1000)), duration: ((2000)), }));
    const __VLS_1 = __VLS_0({ target: ((1000)), duration: ((2000)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-15") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("m-0 mb-6 text-xl font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("count") }, });
    // @ts-ignore
    [ArtCountTo,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ArtCountTo, new ArtCountTo({ target: ((20000)), duration: ((2500)), prefix: ("¥"), suffix: ("元"), decimals: ((2)), }));
    const __VLS_6 = __VLS_5({ target: ((20000)), duration: ((2500)), prefix: ("¥"), suffix: ("元"), decimals: ((2)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-15") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("m-0 mb-6 text-xl font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("count") }, });
    // @ts-ignore
    [ArtCountTo,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(ArtCountTo, new ArtCountTo({ target: ((2023.45)), duration: ((3000)), decimals: ((2)), separator: (","), }));
    const __VLS_11 = __VLS_10({ target: ((2023.45)), duration: ((3000)), decimals: ((2)), separator: (","), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-15") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("m-0 mb-6 text-xl font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-8") }, });
    for (const [easing] of __VLS_getVForSourceType((__VLS_ctx.easingTypes))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, key: ((easing.type)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3 text-sm font-medium text-g-700") }, });
        (easing.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("count") }, });
        // @ts-ignore
        [ArtCountTo,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(ArtCountTo, new ArtCountTo({ target: ((__VLS_ctx.easingTarget)), duration: ((3000)), easing: ((easing.type)), }));
        const __VLS_16 = __VLS_15({ target: ((__VLS_ctx.easingTarget)), duration: ((3000)), easing: ((easing.type)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onClick': {} }, }));
    const __VLS_22 = __VLS_21({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    let __VLS_26;
    const __VLS_27 = {
        onClick: (__VLS_ctx.triggerEasing)
    };
    let __VLS_23;
    let __VLS_24;
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-15") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("m-0 mb-6 text-xl font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("count") }, });
    // @ts-ignore
    [ArtCountTo,];
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(ArtCountTo, new ArtCountTo({ ...{ 'onStarted': {} }, ...{ 'onFinished': {} }, ...{ 'onPaused': {} }, ...{ 'onReset': {} }, ref: ("countToRef"), target: ((__VLS_ctx.controlTarget)), duration: ((2000)), }));
    const __VLS_29 = __VLS_28({ ...{ 'onStarted': {} }, ...{ 'onFinished': {} }, ...{ 'onPaused': {} }, ...{ 'onReset': {} }, ref: ("countToRef"), target: ((__VLS_ctx.controlTarget)), duration: ((2000)), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    // @ts-ignore navigation for `const countToRef = ref()`
    __VLS_ctx.countToRef;
    var __VLS_33 = {};
    let __VLS_34;
    const __VLS_35 = {
        onStarted: (__VLS_ctx.handleAnimationStarted)
    };
    const __VLS_36 = {
        onFinished: (__VLS_ctx.handleAnimationFinished)
    };
    const __VLS_37 = {
        onPaused: (__VLS_ctx.handleAnimationPaused)
    };
    const __VLS_38 = {
        onReset: (__VLS_ctx.handleAnimationReset)
    };
    let __VLS_30;
    let __VLS_31;
    var __VLS_32;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-3 justify-center") }, });
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{ 'onClick': {} }, }));
    const __VLS_41 = __VLS_40({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    let __VLS_45;
    const __VLS_46 = {
        onClick: (__VLS_ctx.startCount)
    };
    let __VLS_42;
    let __VLS_43;
    __VLS_nonNullable(__VLS_44.slots).default;
    var __VLS_44;
    const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{ 'onClick': {} }, }));
    const __VLS_49 = __VLS_48({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    let __VLS_53;
    const __VLS_54 = {
        onClick: (__VLS_ctx.pauseCount)
    };
    let __VLS_50;
    let __VLS_51;
    __VLS_nonNullable(__VLS_52.slots).default;
    var __VLS_52;
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{ 'onClick': {} }, }));
    const __VLS_57 = __VLS_56({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    let __VLS_61;
    const __VLS_62 = {
        onClick: (__VLS_ctx.resetCount)
    };
    let __VLS_58;
    let __VLS_59;
    __VLS_nonNullable(__VLS_60.slots).default;
    var __VLS_60;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-15'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['my-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['leading-tight'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['leading-relaxed'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['mb-15'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['count'];
    __VLS_styleScopedClasses['mb-15'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['count'];
    __VLS_styleScopedClasses['mb-15'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['count'];
    __VLS_styleScopedClasses['mb-15'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['count'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-15'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['count'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['justify-center'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "countToRef": __VLS_33,
    };
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
            ArtCountTo: ArtCountTo,
            controlTarget: controlTarget,
            countToRef: countToRef,
            easingTarget: easingTarget,
            easingTypes: easingTypes,
            startCount: startCount,
            pauseCount: pauseCount,
            resetCount: resetCount,
            triggerEasing: triggerEasing,
            handleAnimationStarted: handleAnimationStarted,
            handleAnimationFinished: handleAnimationFinished,
            handleAnimationPaused: handleAnimationPaused,
            handleAnimationReset: handleAnimationReset,
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