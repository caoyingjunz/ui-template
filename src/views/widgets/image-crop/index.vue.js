/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import lockImg from '@imgs/lock/bg_dark.webp';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'WidgetsImageCrop' });
/**
 * 图片 URL
 */
const imageUrl = ref(lockImg);
/**
 * 处理裁剪错误
 * @param error 错误对象
 */
const handleError = (error) => {
    console.error('裁剪错误:', error);
    ElMessage.error('图片裁剪失败');
};
/**
 * 处理图片加载完成
 * @param result 加载结果
 */
const handleLoadComplete = (result) => {
    console.log('图片加载完成:', result);
};
/**
 * 处理图片加载错误
 * @param error 错误对象
 */
const handleLoadError = (error) => {
    console.error('图片加载失败:', error);
    ElMessage.error('图片加载失败');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtCutterImg;
    /** @type { [typeof __VLS_components.ArtCutterImg, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onError': {} }, ...{ 'onImageLoadComplete': {} }, ...{ 'onImageLoadError': {} }, imgUrl: ((__VLS_ctx.imageUrl)), boxWidth: ((530)), boxHeight: ((300)), cutWidth: ((360)), cutHeight: ((200)), quality: ((1)), tool: ((true)), watermarkText: (('My Watermark')), watermarkColor: ("#ff0000"), showPreview: ((true)), originalGraph: ((false)), title: (('图片裁剪')), previewTitle: (('预览效果')), }));
    const __VLS_2 = __VLS_1({ ...{ 'onError': {} }, ...{ 'onImageLoadComplete': {} }, ...{ 'onImageLoadError': {} }, imgUrl: ((__VLS_ctx.imageUrl)), boxWidth: ((530)), boxHeight: ((300)), cutWidth: ((360)), cutHeight: ((200)), quality: ((1)), tool: ((true)), watermarkText: (('My Watermark')), watermarkColor: ("#ff0000"), showPreview: ((true)), originalGraph: ((false)), title: (('图片裁剪')), previewTitle: (('预览效果')), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onError: (__VLS_ctx.handleError)
    };
    const __VLS_8 = {
        onImageLoadComplete: (__VLS_ctx.handleLoadComplete)
    };
    const __VLS_9 = {
        onImageLoadError: (__VLS_ctx.handleLoadError)
    };
    let __VLS_3;
    let __VLS_4;
    var __VLS_5;
    __VLS_styleScopedClasses['page-content'];
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
            imageUrl: imageUrl,
            handleError: handleError,
            handleLoadComplete: handleLoadComplete,
            handleLoadError: handleLoadError,
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