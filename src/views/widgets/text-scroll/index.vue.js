/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'WidgetsTextScroll' });
/**
 * 处理关闭事件
 */
const handleClose = () => {
    console.log('文本滚动组件已关闭');
    ElMessage.info('已关闭');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content space-y-5") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtTextScroll;
    /** @type { [typeof __VLS_components.ArtTextScroll, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ text: ("一个开源的企业级容器平台，为企业提供 Kubernetes 资源可视化部署和管理功能。 <a target='_blank' href='https://www.pixiu-cloud.com/docs/'>点击我 </a>访问官方文档"), showClose: (true), }));
    const __VLS_2 = __VLS_1({ text: ("一个开源的企业级容器平台，为企业提供 Kubernetes 资源可视化部署和管理功能。 <a target='_blank' href='https://www.pixiu-cloud.com/docs/'>点击我 </a>访问官方文档"), showClose: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ArtTextScroll;
    /** @type { [typeof __VLS_components.ArtTextScroll, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("success"), text: ("这是一条成功类型的滚动公告"), }));
    const __VLS_8 = __VLS_7({ type: ("success"), text: ("这是一条成功类型的滚动公告"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ArtTextScroll;
    /** @type { [typeof __VLS_components.ArtTextScroll, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("warning"), text: ("这是一条警告类型的滚动公告"), }));
    const __VLS_14 = __VLS_13({ type: ("warning"), text: ("这是一条警告类型的滚动公告"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ArtTextScroll;
    /** @type { [typeof __VLS_components.ArtTextScroll, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("danger"), text: ("这是一条危险类型的滚动公告"), }));
    const __VLS_20 = __VLS_19({ type: ("danger"), text: ("这是一条危险类型的滚动公告"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ArtTextScroll;
    /** @type { [typeof __VLS_components.ArtTextScroll, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ type: ("info"), text: ("这是一条信息类型的滚动公告"), }));
    const __VLS_26 = __VLS_25({ type: ("info"), text: ("这是一条信息类型的滚动公告"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ArtTextScroll;
    /** @type { [typeof __VLS_components.ArtTextScroll, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClose': {} }, text: ("这是一条可关闭的滚动公告"), }));
    const __VLS_32 = __VLS_31({ ...{ 'onClose': {} }, text: ("这是一条可关闭的滚动公告"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    let __VLS_36;
    const __VLS_37 = {
        onClose: (__VLS_ctx.handleClose)
    };
    let __VLS_33;
    let __VLS_34;
    var __VLS_35;
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ArtTextScroll;
    /** @type { [typeof __VLS_components.ArtTextScroll, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ type: ("warning"), text: ("这是一条速度较慢、向右滚动的公告"), speed: ((30)), direction: ("right"), }));
    const __VLS_40 = __VLS_39({ type: ("warning"), text: ("这是一条速度较慢、向右滚动的公告"), speed: ((30)), direction: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ArtTextScroll;
    /** @type { [typeof __VLS_components.ArtTextScroll, ] } */
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ 'onClose': {} }, text: ("这是一条文字溢出才会滚动的公告，当文本内容超出容器宽度时才会开始滚动显示，否则保持静止状态"), alwaysScroll: ((false)), }));
    const __VLS_46 = __VLS_45({ ...{ 'onClose': {} }, text: ("这是一条文字溢出才会滚动的公告，当文本内容超出容器宽度时才会开始滚动显示，否则保持静止状态"), alwaysScroll: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    let __VLS_50;
    const __VLS_51 = {
        onClose: (__VLS_ctx.handleClose)
    };
    let __VLS_47;
    let __VLS_48;
    var __VLS_49;
    const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ArtTextScroll;
    /** @type { [typeof __VLS_components.ArtTextScroll, ] } */
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ type: ("danger"), direction: ("up"), speed: ((30)), text: ("这是一条向上滚动的公告"), }));
    const __VLS_54 = __VLS_53({ type: ("danger"), direction: ("up"), speed: ((30)), text: ("这是一条向上滚动的公告"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.ArtTextScroll;
    /** @type { [typeof __VLS_components.ArtTextScroll, ] } */
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ type: ("info"), direction: ("down"), speed: ((30)), text: ("这是一条向下滚动的公告"), }));
    const __VLS_60 = __VLS_59({ type: ("info"), direction: ("down"), speed: ((30)), text: ("这是一条向下滚动的公告"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['space-y-5'];
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
            handleClose: handleClose,
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