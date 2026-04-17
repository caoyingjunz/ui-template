/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
/**
 * 最近活动数据列表
 * 展示订单处理、退款申请、投诉处理等业务活动状态
 */
const dataList = [
    {
        title: '新订单 #38291',
        status: '待处理',
        time: '5分钟',
        class: 'bg-theme/12 text-theme',
        icon: 'ri:shopping-bag-4-line'
    },
    {
        title: '退款申请 #12845',
        status: '处理中',
        time: '10分钟',
        class: 'bg-secondary/12 text-secondary',
        icon: 'ri:profile-line'
    },
    {
        title: '客户投诉处理',
        status: '待处理',
        time: '15分钟',
        class: 'bg-warning/12 text-warning',
        icon: 'ri:customer-service-2-line'
    },
    {
        title: '库存不足提醒',
        status: '紧急',
        time: '20分钟',
        class: 'bg-danger/12 text-danger',
        icon: 'ri:box-1-line'
    },
    {
        title: '订单 #29384 已发货',
        status: '已完成',
        time: '20分钟',
        class: 'bg-success/12 text-success',
        icon: 'ri:shopping-bag-3-line'
    }
];
/**
 * 处理查看更多按钮点击事件
 */
const handleMore = () => {
    // TODO: 添加查看更多逻辑
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtDataListCard;
    /** @type { [typeof __VLS_components.ArtDataListCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onMore': {} }, ...{ class: ("mb-5 max-sm:mb-4") }, maxCount: ((4)), list: ((__VLS_ctx.dataList)), title: ("最近活动"), subtitle: ("订单处理状态"), showMoreButton: ((true)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onMore': {} }, ...{ class: ("mb-5 max-sm:mb-4") }, maxCount: ((4)), list: ((__VLS_ctx.dataList)), title: ("最近活动"), subtitle: ("订单处理状态"), showMoreButton: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        onMore: (__VLS_ctx.handleMore)
    };
    let __VLS_3;
    let __VLS_4;
    var __VLS_5;
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['max-sm:mb-4'];
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
            dataList: dataList,
            handleMore: handleMore,
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
//# sourceMappingURL=transaction-list.vue.js.map