/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { useSettingStore } from '@/store/modules/setting';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'Watermark' });
const settingStore = useSettingStore();
/**
 * 水印图片 URL
 */
const watermarkImage = ref('https://element-plus.org/images/element-plus-logo.svg');
/**
 * 切换全局水印显示状态
 */
const handleWatermarkVisible = () => {
    useSettingStore().setWatermarkVisible(!settingStore.watermarkVisible);
    ElMessage.success(settingStore.watermarkVisible ? '已显示全局水印' : '已隐藏全局水印');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content mb-5") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("mb-7.5") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("mb-7.5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    }
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElWatermark;
    /** @type { [typeof __VLS_components.ElWatermark, typeof __VLS_components.ElWatermark, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ content: ("Pixiu Cloud"), font: (({ color: 'rgba(128, 128, 128, 0.2)' })), }));
    const __VLS_8 = __VLS_7({ content: ("Pixiu Cloud"), font: (({ color: 'rgba(128, 128, 128, 0.2)' })), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    var __VLS_5;
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("mb-7.5") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("mb-7.5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
    }
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElWatermark;
    /** @type { [typeof __VLS_components.ElWatermark, typeof __VLS_components.ElWatermark, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ content: ((['Pixiu Cloud', '专注用户体验，视觉设计'])), font: (({ fontSize: 16, color: 'rgba(128, 128, 128, 0.2)' })), }));
    const __VLS_20 = __VLS_19({ content: ((['Pixiu Cloud', '专注用户体验，视觉设计'])), font: (({ fontSize: 16, color: 'rgba(128, 128, 128, 0.2)' })), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    var __VLS_17;
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("mb-7.5") }, }));
    const __VLS_26 = __VLS_25({ ...{ class: ("mb-7.5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_29.slots);
    }
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElWatermark;
    /** @type { [typeof __VLS_components.ElWatermark, typeof __VLS_components.ElWatermark, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ image: ((__VLS_ctx.watermarkImage)), opacity: ((0.2)), width: ((80)), height: ((20)), }));
    const __VLS_32 = __VLS_31({ image: ((__VLS_ctx.watermarkImage)), opacity: ((0.2)), width: ((80)), height: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    var __VLS_29;
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("mb-7.5") }, }));
    const __VLS_38 = __VLS_37({ ...{ class: ("mb-7.5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_41.slots);
    }
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElWatermark;
    /** @type { [typeof __VLS_components.ElWatermark, typeof __VLS_components.ElWatermark, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ content: ("Pixiu Cloud"), font: (({
            fontSize: 20,
            fontFamily: 'Arial',
            color: 'rgba(255, 0, 0, 0.3)'
        })), rotate: ((-22)), gap: (([100, 100])), }));
    const __VLS_44 = __VLS_43({ content: ("Pixiu Cloud"), font: (({
            fontSize: 20,
            fontFamily: 'Arial',
            color: 'rgba(255, 0, 0, 0.3)'
        })), rotate: ((-22)), gap: (([100, 100])), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47;
    var __VLS_41;
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, type: ((__VLS_ctx.settingStore.watermarkVisible ? 'danger' : 'primary')), }));
    const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, type: ((__VLS_ctx.settingStore.watermarkVisible ? 'danger' : 'primary')), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    let __VLS_54;
    const __VLS_55 = {
        onClick: (__VLS_ctx.handleWatermarkVisible)
    };
    let __VLS_51;
    let __VLS_52;
    (__VLS_ctx.settingStore.watermarkVisible ? '隐藏全局水印' : '显示全局水印');
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-7.5'];
    __VLS_styleScopedClasses['mb-7.5'];
    __VLS_styleScopedClasses['mb-7.5'];
    __VLS_styleScopedClasses['mb-7.5'];
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
            settingStore: settingStore,
            watermarkImage: watermarkImage,
            handleWatermarkVisible: handleWatermarkVisible,
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