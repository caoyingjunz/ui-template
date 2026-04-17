/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
/**
 * 一周的日期标签
 */
const weekDays = ref(['周一', '周二', '周三', '周四', '周五', '周六', '周日']);
/**
 * 目标与实际销售数据
 * 展示一周内的线上销售情况
 */
const revenueData = ref([
    {
        name: '线上销售',
        data: [12, 13, 5, 15, 10, 15, 18]
    }
]);
/**
 * 统计项数据
 */
const totalItems = [
    {
        icon: 'ri:shopping-bag-line',
        iconClass: 'text-theme bg-theme/12',
        label: '实际销售额',
        subLabel: '全球',
        value: '8,823',
        valueClass: 'text-theme'
    },
    {
        icon: 'ri:money-dollar-circle-line',
        iconClass: 'text-theme bg-theme/12',
        label: '目标销售额',
        subLabel: '商业',
        value: '12,122',
        valueClass: 'text-theme'
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card h-100 p-5 mb-5 max-sm:mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtBarChart;
    /** @type { [typeof __VLS_components.ArtBarChart, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("p-5") }, height: ("12rem"), data: ((__VLS_ctx.revenueData)), xAxisData: ((__VLS_ctx.weekDays)), showAxisLine: ((false)), barWidth: ("28%"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("p-5") }, height: ("12rem"), data: ((__VLS_ctx.revenueData)), xAxisData: ((__VLS_ctx.weekDays)), showAxisLine: ((false)), barWidth: ("28%"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("px-5 mt-4") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.totalItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.label)), ...{ class: ("flex-c mb-5 last:mb-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c justify-start w-3/5 text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-10 h-10 mr-3 text-lg rounded-md flex-cc") }, ...{ class: ((item.iconClass)) }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
        /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ((item.icon)), }));
        const __VLS_8 = __VLS_7({ icon: ((item.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-start") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base text-g-800") }, });
        (item.label);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("mt-1 text-xs text-g-500") }, });
        (item.subLabel);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-lg font-normal") }, ...{ class: ((item.valueClass)) }, });
        (item.value);
    }
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['max-sm:mb-4'];
    __VLS_styleScopedClasses['art-card-header'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['px-5'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['justify-start'];
    __VLS_styleScopedClasses['w-3/5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['mr-3'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['text-g-800'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-500'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-normal'];
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
            weekDays: weekDays,
            revenueData: revenueData,
            totalItems: totalItems,
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
//# sourceMappingURL=target-vs-reality.vue.js.map