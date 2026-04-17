/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { commentList } from '@/mock/temp/commentList';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'ArticleComment' });
const COLOR_LIST = ['#D8F8FF', '#FDDFD9', '#FCE6F0', '#D3F8F0', '#FFEABC', '#F5E1FF', '#E1E6FE'];
const showDrawer = ref(false);
const clickItem = ref({
    id: 1,
    date: '2024-9-3',
    content: '加油！学好Node 自己写个小Demo',
    collection: 5,
    comment: 8,
    userName: '匿名',
    color: COLOR_LIST[0]
});
/**
 * 为评论列表分配随机颜色
 */
const commentsWithColors = computed(() => {
    let lastColorIndex = -1;
    return commentList.map((item) => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * COLOR_LIST.length);
        } while (newIndex === lastColorIndex && COLOR_LIST.length > 1);
        lastColorIndex = newIndex;
        return {
            ...item,
            color: COLOR_LIST[newIndex]
        };
    });
});
/**
 * 打开评论详情抽屉
 */
const openDrawer = (item) => {
    showDrawer.value = true;
    clickItem.value = item;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl font-medium mt-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-3.5 text-g-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("mt-10 grid grid-cols-5 gap-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 mb-5") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.commentsWithColors))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.openDrawer(item);
                } }, ...{ class: ("relative p-4 c-p aspect-16/12 duration-300 hover:-translate-y-1.5") }, ...{ style: (({ background: item.color })) }, key: ((item.id)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-g-600 text-sm") }, });
        (item.date);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-4 text-sm text-gray-800") }, });
        (item.content);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute bottom-4 left-0 px-4 flex-cb w-full") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c mr-5 text-xs text-g-600") }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
        /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ("ri:heart-line"), ...{ class: ("mr-1 text-base") }, }));
        const __VLS_2 = __VLS_1({ icon: ("ri:heart-line"), ...{ class: ("mr-1 text-base") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (item.collection);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c mr-5 text-xs text-g-600") }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
        /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ("ri:message-3-line"), ...{ class: ("mr-1 text-base") }, }));
        const __VLS_8 = __VLS_7({ icon: ("ri:message-3-line"), ...{ class: ("mr-1 text-base") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (item.comment);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-gray-700") }, });
        (item.userName);
    }
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElDrawer;
    /** @type { [typeof __VLS_components.ElDrawer, typeof __VLS_components.ElDrawer, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ lDrawer: (true), modelValue: ((__VLS_ctx.showDrawer)), lockScroll: ((false)), size: ((360)), modalClass: ("comment-modal"), }));
    const __VLS_14 = __VLS_13({ lDrawer: (true), modelValue: ((__VLS_ctx.showDrawer)), lockScroll: ((false)), size: ((360)), modalClass: ("comment-modal"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("drawer-default") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative p-4 aspect-16/12") }, ...{ style: (({ background: __VLS_ctx.clickItem.color })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-g-500 text-sm") }, });
        (__VLS_ctx.clickItem.date);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-4 text-sm text-gray-800") }, });
        (__VLS_ctx.clickItem.content);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute bottom-4 left-0 px-4 flex-cb w-full") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c mr-5 text-xs text-g-600") }, });
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
        /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ("ri:heart-line"), ...{ class: ("mr-1 text-base") }, }));
        const __VLS_20 = __VLS_19({ icon: ("ri:heart-line"), ...{ class: ("mr-1 text-base") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.clickItem.collection);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c mr-5 text-xs text-g-600") }, });
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
        /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ icon: ("ri:message-3-line"), ...{ class: ("mr-1 text-base") }, }));
        const __VLS_26 = __VLS_25({ icon: ("ri:message-3-line"), ...{ class: ("mr-1 text-base") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.clickItem.comment);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-gray-700") }, });
        (__VLS_ctx.clickItem.userName);
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.CommentWidget;
        /** @type { [typeof __VLS_components.CommentWidget, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
        const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    }
    var __VLS_17;
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['mt-3.5'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-5'];
    __VLS_styleScopedClasses['gap-5'];
    __VLS_styleScopedClasses['max-2xl:grid-cols-4'];
    __VLS_styleScopedClasses['max-xl:grid-cols-3'];
    __VLS_styleScopedClasses['max-lg:grid-cols-2'];
    __VLS_styleScopedClasses['max-sm:grid-cols-1'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['c-p'];
    __VLS_styleScopedClasses['aspect-16/12'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['hover:-translate-y-1.5'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-4'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['mr-5'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['mr-5'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['drawer-default'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['aspect-16/12'];
    __VLS_styleScopedClasses['text-g-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-4'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['mr-5'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['mr-5'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-700'];
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
            showDrawer: showDrawer,
            clickItem: clickItem,
            commentsWithColors: commentsWithColors,
            openDrawer: openDrawer,
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