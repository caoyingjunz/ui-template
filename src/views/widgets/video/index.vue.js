/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import lockImg from '@imgs/lock/bg_dark.webp';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'WidgetsVideo' });
/**
 * 视频源 URL
 */
const videoUrl = ref('//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4');
/**
 * 视频封面图片 URL
 */
const posterUrl = ref(lockImg); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-150") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtVideoPlayer;
    /** @type { [typeof __VLS_components.ArtVideoPlayer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ playerId: ("my-video-1"), videoUrl: ((__VLS_ctx.videoUrl)), posterUrl: ((__VLS_ctx.posterUrl)), autoplay: ((false)), volume: ((1)), playbackRates: (([0.5, 1, 1.5, 2])), }));
    const __VLS_2 = __VLS_1({ playerId: ("my-video-1"), videoUrl: ((__VLS_ctx.videoUrl)), posterUrl: ((__VLS_ctx.posterUrl)), autoplay: ((false)), volume: ((1)), playbackRates: (([0.5, 1, 1.5, 2])), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['max-w-150'];
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
            videoUrl: videoUrl,
            posterUrl: posterUrl,
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