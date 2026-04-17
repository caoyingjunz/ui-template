/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
/**
 * 最近交易时间线数据
 * 记录今日订单处理、商品上架、支付等关键活动
 */
const timelineData = [
    {
        time: '上午 09:30',
        status: 'rgb(73, 190, 255)',
        content: '收到订单 #38291 支付 ¥385.90'
    },
    {
        time: '上午 10:00',
        status: 'rgb(54, 158, 255)',
        content: '新商品上架',
        code: 'SKU-3467'
    },
    {
        time: '上午 12:00',
        status: 'rgb(103, 232, 207)',
        content: '向供应商支付了 ¥6495.00'
    },
    {
        time: '下午 14:30',
        status: 'rgb(255, 193, 7)',
        content: '促销活动开始',
        code: 'PROMO-2023'
    },
    {
        time: '下午 15:45',
        status: 'rgb(255, 105, 105)',
        content: '订单取消提醒',
        code: 'ORD-9876'
    },
    {
        time: '下午 17:00',
        status: 'rgb(103, 232, 207)',
        content: '完成日销售报表'
    }
]; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtTimelineListCard;
    /** @type { [typeof __VLS_components.ArtTimelineListCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ list: ((__VLS_ctx.timelineData)), title: ("最近交易"), subtitle: ("今日订单动态"), ...{ class: ("h-[27.8rem] mb-5 max-sm:mb-4") }, }));
    const __VLS_2 = __VLS_1({ list: ((__VLS_ctx.timelineData)), title: ("最近交易"), subtitle: ("今日订单动态"), ...{ class: ("h-[27.8rem] mb-5 max-sm:mb-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    var __VLS_5;
    __VLS_styleScopedClasses['h-[27.8rem]'];
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
            timelineData: timelineData,
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
//# sourceMappingURL=recent-transaction.vue.js.map