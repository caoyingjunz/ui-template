/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { mittBus } from '@/utils/sys';
import bp from '@imgs/ceremony/hb.png';
import sd from '@imgs/ceremony/sd.png';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'WidgetsFireworks' });
const timerRef = ref(null);
const isLaunching = ref(false);
/**
 * 触发连续礼花效果
 * @param count 发射次数
 * @param src 图片资源路径
 */
const triggerFireworks = (count, src) => {
    // 清除之前的定时器
    if (timerRef.value) {
        clearInterval(timerRef.value);
        timerRef.value = null;
    }
    isLaunching.value = true;
    let fired = 0;
    timerRef.value = setInterval(() => {
        mittBus.emit('triggerFireworks', src);
        fired++;
        if (fired >= count) {
            clearInterval(timerRef.value);
            timerRef.value = null;
            isLaunching.value = false;
        }
    }, 1000);
};
/**
 * 发射单个礼花
 */
const handleSingleLaunch = () => {
    mittBus.emit('triggerFireworks');
};
/**
 * 发射多个礼花
 * @param src 图片资源路径
 */
const handleMultipleLaunch = (src) => {
    triggerFireworks(10, src);
};
/**
 * 发射带图片的礼花
 * @param src 图片资源路径
 */
const handleImageLaunch = (src) => {
    mittBus.emit('triggerFireworks', src);
};
/**
 * 组件卸载时清理定时器
 */
onUnmounted(() => {
    if (timerRef.value) {
        clearInterval(timerRef.value);
        timerRef.value = null;
    }
}); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-5") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.ElSpace, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ wrap: (true), }));
    const __VLS_2 = __VLS_1({ wrap: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isLaunching)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isLaunching)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_12;
    const __VLS_13 = {
        onClick: (__VLS_ctx.handleSingleLaunch)
    };
    let __VLS_9;
    let __VLS_10;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isLaunching)), }));
    const __VLS_16 = __VLS_15({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isLaunching)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_20;
    const __VLS_21 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleImageLaunch(__VLS_ctx.bp);
        }
    };
    let __VLS_17;
    let __VLS_18;
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19;
    const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isLaunching)), }));
    const __VLS_24 = __VLS_23({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isLaunching)), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_28;
    const __VLS_29 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleMultipleLaunch('');
        }
    };
    let __VLS_25;
    let __VLS_26;
    __VLS_nonNullable(__VLS_27.slots).default;
    var __VLS_27;
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isLaunching)), }));
    const __VLS_32 = __VLS_31({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isLaunching)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_36;
    const __VLS_37 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleImageLaunch(__VLS_ctx.sd);
        }
    };
    let __VLS_33;
    let __VLS_34;
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isLaunching)), }));
    const __VLS_40 = __VLS_39({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isLaunching)), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_44;
    const __VLS_45 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleMultipleLaunch(__VLS_ctx.sd);
        }
    };
    let __VLS_41;
    let __VLS_42;
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElDescriptions;
    /** @type { [typeof __VLS_components.ElDescriptions, typeof __VLS_components.ElDescriptions, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ title: ("礼花组件说明"), direction: ("vertical"), column: ((1)), border: (true), ...{ style: ({}) }, }));
    const __VLS_48 = __VLS_47({ title: ("礼花组件说明"), direction: ("vertical"), column: ((1)), border: (true), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ElDescriptionsItem;
    /** @type { [typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, ] } */
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ label: ("显示时机"), }));
    const __VLS_54 = __VLS_53({ label: ("显示时机"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    __VLS_nonNullable(__VLS_57.slots).default;
    var __VLS_57;
    const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.ElDescriptionsItem;
    /** @type { [typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, ] } */
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ label: ("礼花样式"), }));
    const __VLS_60 = __VLS_59({ label: ("礼花样式"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    __VLS_nonNullable(__VLS_63.slots).default;
    var __VLS_63;
    const __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.ElDescriptionsItem;
    /** @type { [typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, ] } */
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ label: ("配置文件"), }));
    const __VLS_66 = __VLS_65({ label: ("配置文件"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    __VLS_nonNullable(__VLS_69.slots).default;
    var __VLS_69;
    const __VLS_70 = __VLS_resolvedLocalAndGlobalComponents.ElDescriptionsItem;
    /** @type { [typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, ] } */
    // @ts-ignore
    const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ label: ("快捷键"), }));
    const __VLS_72 = __VLS_71({ label: ("快捷键"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
    __VLS_nonNullable(__VLS_75.slots).default;
    var __VLS_75;
    __VLS_nonNullable(__VLS_51.slots).default;
    var __VLS_51;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['mb-5'];
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
            bp: bp,
            sd: sd,
            isLaunching: isLaunching,
            handleSingleLaunch: handleSingleLaunch,
            handleMultipleLaunch: handleMultipleLaunch,
            handleImageLaunch: handleImageLaunch,
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