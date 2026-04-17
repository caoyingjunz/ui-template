/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import bannerCover from '@imgs/login/lf_icon2.webp';
import { useUserStore } from '@/store/modules/user';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
/**
 * 获取当前用户信息
 */
const userInfo = computed(() => userStore.getUserInfo);
/**
 * 处理横幅点击事件
 */
const handleBannerClick = () => {
    // TODO: 添加横幅点击处理逻辑
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtBasicBanner;
    /** @type { [typeof __VLS_components.ArtBasicBanner, typeof __VLS_components.ArtBasicBanner, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("justify-center !h-53 mb-5 max-sm:!pt-8 max-sm:!h-48 max-sm:mb-4") }, title: ((`欢迎回来 ${__VLS_ctx.userInfo.userName}`)), boxStyle: ("!bg-theme/10"), titleColor: ("var(--art-gray-900)"), decoration: ((false)), meteorConfig: (({
            enabled: true,
            count: 10
        })), buttonConfig: (({
            show: false,
            text: ''
        })), imageConfig: (({
            src: __VLS_ctx.bannerCover,
            width: '18rem',
            bottom: '-7.5rem'
        })), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("justify-center !h-53 mb-5 max-sm:!pt-8 max-sm:!h-48 max-sm:mb-4") }, title: ((`欢迎回来 ${__VLS_ctx.userInfo.userName}`)), boxStyle: ("!bg-theme/10"), titleColor: ("var(--art-gray-900)"), decoration: ((false)), meteorConfig: (({
            enabled: true,
            count: 10
        })), buttonConfig: (({
            show: false,
            text: ''
        })), imageConfig: (({
            src: __VLS_ctx.bannerCover,
            width: '18rem',
            bottom: '-7.5rem'
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        onClick: (__VLS_ctx.handleBannerClick)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex mt-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mr-8 pr-8 border-r border-g-400 dark:border-g-300/60") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-3xl") }, });
    const __VLS_9 = __VLS_resolvedLocalAndGlobalComponents.ArtCountTo;
    /** @type { [typeof __VLS_components.ArtCountTo, ] } */
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ ...{ class: ("number box-title") }, target: ((2340)), duration: ((1500)), prefix: ("¥"), separator: (","), }));
    const __VLS_11 = __VLS_10({ ...{ class: ("number box-title") }, target: ((2340)), duration: ((1500)), prefix: ("¥"), separator: (","), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
    /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ icon: ("ri:arrow-right-up-line"), ...{ class: ("text-xl text-success relative -top-2") }, }));
    const __VLS_17 = __VLS_16({ icon: ("ri:arrow-right-up-line"), ...{ class: ("text-xl text-success relative -top-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-1 text-sm text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mr-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-3xl") }, });
    const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.ArtCountTo;
    /** @type { [typeof __VLS_components.ArtCountTo, ] } */
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{ class: ("number box-title") }, target: ((35)), duration: ((1500)), suffix: ("%"), }));
    const __VLS_23 = __VLS_22({ ...{ class: ("number box-title") }, target: ((35)), duration: ((1500)), suffix: ("%"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
    /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ icon: ("ri:arrow-right-up-line"), ...{ class: ("text-xl text-success relative -top-2") }, }));
    const __VLS_29 = __VLS_28({ icon: ("ri:arrow-right-up-line"), ...{ class: ("text-xl text-success relative -top-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-1 text-sm text-g-700") }, });
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['!h-53'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['max-sm:!pt-8'];
    __VLS_styleScopedClasses['max-sm:!h-48'];
    __VLS_styleScopedClasses['max-sm:mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['pr-8'];
    __VLS_styleScopedClasses['border-r'];
    __VLS_styleScopedClasses['border-g-400'];
    __VLS_styleScopedClasses['dark:border-g-300/60'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['number'];
    __VLS_styleScopedClasses['box-title'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['text-success'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['-top-2'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['number'];
    __VLS_styleScopedClasses['box-title'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['text-success'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['-top-2'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-700'];
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
            bannerCover: bannerCover,
            userInfo: userInfo,
            handleBannerClick: handleBannerClick,
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
//# sourceMappingURL=banner.vue.js.map