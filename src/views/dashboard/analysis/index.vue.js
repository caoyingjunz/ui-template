/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import TodaySales from './modules/today-sales.vue';
import VisitorInsights from './modules/visitor-insights.vue';
import TotalRevenue from './modules/total-revenue.vue';
import CustomerSatisfaction from './modules/customer-satisfaction.vue';
import TargetVsReality from './modules/target-vs-reality.vue';
import TopProducts from './modules/top-products.vue';
import SalesMappingByCountry from './modules/sales-mapping-by-country.vue';
import VolumeServiceLevel from './modules/volume-service-level.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'Analysis' }); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((20)), }));
    const __VLS_2 = __VLS_1({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ xl: ((14)), lg: ((15)), xs: ((24)), }));
    const __VLS_8 = __VLS_7({ xl: ((14)), lg: ((15)), xs: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    // @ts-ignore
    [TodaySales,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(TodaySales, new TodaySales({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ xl: ((10)), lg: ((9)), xs: ((24)), }));
    const __VLS_19 = __VLS_18({ xl: ((10)), lg: ((9)), xs: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    // @ts-ignore
    [VisitorInsights,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(VisitorInsights, new VisitorInsights({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
    __VLS_nonNullable(__VLS_22.slots).default;
    var __VLS_22;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ gutter: ((20)), }));
    const __VLS_30 = __VLS_29({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ xl: ((10)), lg: ((10)), xs: ((24)), }));
    const __VLS_36 = __VLS_35({ xl: ((10)), lg: ((10)), xs: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    // @ts-ignore
    [TotalRevenue,];
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(TotalRevenue, new TotalRevenue({}));
    const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
    __VLS_nonNullable(__VLS_39.slots).default;
    var __VLS_39;
    const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ xl: ((7)), lg: ((7)), xs: ((24)), }));
    const __VLS_47 = __VLS_46({ xl: ((7)), lg: ((7)), xs: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    // @ts-ignore
    [CustomerSatisfaction,];
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(CustomerSatisfaction, new CustomerSatisfaction({}));
    const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
    __VLS_nonNullable(__VLS_50.slots).default;
    var __VLS_50;
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ xl: ((7)), lg: ((7)), xs: ((24)), }));
    const __VLS_58 = __VLS_57({ xl: ((7)), lg: ((7)), xs: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    // @ts-ignore
    [TargetVsReality,];
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(TargetVsReality, new TargetVsReality({}));
    const __VLS_63 = __VLS_62({}, ...__VLS_functionalComponentArgsRest(__VLS_62));
    __VLS_nonNullable(__VLS_61.slots).default;
    var __VLS_61;
    __VLS_nonNullable(__VLS_33.slots).default;
    var __VLS_33;
    const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ gutter: ((20)), }));
    const __VLS_69 = __VLS_68({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ xl: ((10)), lg: ((10)), xs: ((24)), }));
    const __VLS_75 = __VLS_74({ xl: ((10)), lg: ((10)), xs: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    // @ts-ignore
    [TopProducts,];
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(TopProducts, new TopProducts({}));
    const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_nonNullable(__VLS_78.slots).default;
    var __VLS_78;
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ xl: ((7)), lg: ((7)), xs: ((24)), }));
    const __VLS_86 = __VLS_85({ xl: ((7)), lg: ((7)), xs: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    // @ts-ignore
    [SalesMappingByCountry,];
    // @ts-ignore
    const __VLS_90 = __VLS_asFunctionalComponent(SalesMappingByCountry, new SalesMappingByCountry({}));
    const __VLS_91 = __VLS_90({}, ...__VLS_functionalComponentArgsRest(__VLS_90));
    __VLS_nonNullable(__VLS_89.slots).default;
    var __VLS_89;
    const __VLS_95 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ xl: ((7)), lg: ((7)), xs: ((24)), }));
    const __VLS_97 = __VLS_96({ xl: ((7)), lg: ((7)), xs: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
    // @ts-ignore
    [VolumeServiceLevel,];
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(VolumeServiceLevel, new VolumeServiceLevel({}));
    const __VLS_102 = __VLS_101({}, ...__VLS_functionalComponentArgsRest(__VLS_101));
    __VLS_nonNullable(__VLS_100.slots).default;
    var __VLS_100;
    __VLS_nonNullable(__VLS_72.slots).default;
    var __VLS_72;
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
            TodaySales: TodaySales,
            VisitorInsights: VisitorInsights,
            TotalRevenue: TotalRevenue,
            CustomerSatisfaction: CustomerSatisfaction,
            TargetVsReality: TargetVsReality,
            TopProducts: TopProducts,
            SalesMappingByCountry: SalesMappingByCountry,
            VolumeServiceLevel: VolumeServiceLevel,
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