/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import Banner from './modules/banner.vue';
import TotalOrderVolume from './modules/total-order-volume.vue';
import TotalProducts from './modules/total-products.vue';
import SalesTrend from './modules/sales-trend.vue';
import SalesClassification from './modules/sales-classification.vue';
import TransactionList from './modules/transaction-list.vue';
import HotCommodity from './modules/hot-commodity.vue';
import RecentTransaction from './modules/recent-transaction.vue';
import AnnualSales from './modules/annual-sales.vue';
import ProductSales from './modules/product-sales.vue';
import SalesGrowth from './modules/sales-growth.vue';
import CartConversionRate from './modules/cart-conversion-rate.vue';
import HotProductsList from './modules/hot-products-list.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'Ecommerce' }); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ecommerce") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((20)), }));
    const __VLS_2 = __VLS_1({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ sm: ((24)), md: ((24)), lg: ((16)), }));
    const __VLS_8 = __VLS_7({ sm: ((24)), md: ((24)), lg: ((16)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    // @ts-ignore
    [Banner,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(Banner, new Banner({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ sm: ((12)), md: ((12)), lg: ((4)), }));
    const __VLS_19 = __VLS_18({ sm: ((12)), md: ((12)), lg: ((4)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    // @ts-ignore
    [TotalOrderVolume,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(TotalOrderVolume, new TotalOrderVolume({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
    __VLS_nonNullable(__VLS_22.slots).default;
    var __VLS_22;
    const __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ sm: ((12)), md: ((12)), lg: ((4)), }));
    const __VLS_30 = __VLS_29({ sm: ((12)), md: ((12)), lg: ((4)), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    // @ts-ignore
    [TotalProducts,];
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(TotalProducts, new TotalProducts({}));
    const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
    __VLS_nonNullable(__VLS_33.slots).default;
    var __VLS_33;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ gutter: ((20)), }));
    const __VLS_41 = __VLS_40({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ sm: ((12)), md: ((12)), lg: ((8)), }));
    const __VLS_47 = __VLS_46({ sm: ((12)), md: ((12)), lg: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    // @ts-ignore
    [SalesTrend,];
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(SalesTrend, new SalesTrend({}));
    const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
    __VLS_nonNullable(__VLS_50.slots).default;
    var __VLS_50;
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ sm: ((12)), md: ((12)), lg: ((8)), }));
    const __VLS_58 = __VLS_57({ sm: ((12)), md: ((12)), lg: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    // @ts-ignore
    [SalesClassification,];
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(SalesClassification, new SalesClassification({}));
    const __VLS_63 = __VLS_62({}, ...__VLS_functionalComponentArgsRest(__VLS_62));
    __VLS_nonNullable(__VLS_61.slots).default;
    var __VLS_61;
    const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ sm: ((24)), md: ((24)), lg: ((8)), }));
    const __VLS_69 = __VLS_68({ sm: ((24)), md: ((24)), lg: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ gutter: ((20)), }));
    const __VLS_75 = __VLS_74({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ sm: ((24)), md: ((12)), lg: ((12)), }));
    const __VLS_81 = __VLS_80({ sm: ((24)), md: ((12)), lg: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    // @ts-ignore
    [ProductSales,];
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(ProductSales, new ProductSales({}));
    const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_nonNullable(__VLS_84.slots).default;
    var __VLS_84;
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ sm: ((24)), md: ((12)), lg: ((12)), }));
    const __VLS_92 = __VLS_91({ sm: ((24)), md: ((12)), lg: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    // @ts-ignore
    [SalesGrowth,];
    // @ts-ignore
    const __VLS_96 = __VLS_asFunctionalComponent(SalesGrowth, new SalesGrowth({}));
    const __VLS_97 = __VLS_96({}, ...__VLS_functionalComponentArgsRest(__VLS_96));
    __VLS_nonNullable(__VLS_95.slots).default;
    var __VLS_95;
    const __VLS_101 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ span: ((24)), ...{ class: ("no-margin-bottom") }, }));
    const __VLS_103 = __VLS_102({ span: ((24)), ...{ class: ("no-margin-bottom") }, }, ...__VLS_functionalComponentArgsRest(__VLS_102));
    // @ts-ignore
    [CartConversionRate,];
    // @ts-ignore
    const __VLS_107 = __VLS_asFunctionalComponent(CartConversionRate, new CartConversionRate({}));
    const __VLS_108 = __VLS_107({}, ...__VLS_functionalComponentArgsRest(__VLS_107));
    __VLS_nonNullable(__VLS_106.slots).default;
    var __VLS_106;
    __VLS_nonNullable(__VLS_78.slots).default;
    var __VLS_78;
    __VLS_nonNullable(__VLS_72.slots).default;
    var __VLS_72;
    __VLS_nonNullable(__VLS_44.slots).default;
    var __VLS_44;
    const __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ gutter: ((20)), }));
    const __VLS_114 = __VLS_113({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
    const __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ sm: ((24)), md: ((12)), lg: ((8)), }));
    const __VLS_120 = __VLS_119({ sm: ((24)), md: ((12)), lg: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
    // @ts-ignore
    [HotCommodity,];
    // @ts-ignore
    const __VLS_124 = __VLS_asFunctionalComponent(HotCommodity, new HotCommodity({}));
    const __VLS_125 = __VLS_124({}, ...__VLS_functionalComponentArgsRest(__VLS_124));
    __VLS_nonNullable(__VLS_123.slots).default;
    var __VLS_123;
    const __VLS_129 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({ sm: ((24)), md: ((12)), lg: ((8)), }));
    const __VLS_131 = __VLS_130({ sm: ((24)), md: ((12)), lg: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
    // @ts-ignore
    [AnnualSales,];
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent(AnnualSales, new AnnualSales({}));
    const __VLS_136 = __VLS_135({}, ...__VLS_functionalComponentArgsRest(__VLS_135));
    __VLS_nonNullable(__VLS_134.slots).default;
    var __VLS_134;
    const __VLS_140 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ sm: ((24)), md: ((24)), lg: ((8)), }));
    const __VLS_142 = __VLS_141({ sm: ((24)), md: ((24)), lg: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
    // @ts-ignore
    [TransactionList,];
    // @ts-ignore
    const __VLS_146 = __VLS_asFunctionalComponent(TransactionList, new TransactionList({}));
    const __VLS_147 = __VLS_146({}, ...__VLS_functionalComponentArgsRest(__VLS_146));
    __VLS_nonNullable(__VLS_145.slots).default;
    var __VLS_145;
    __VLS_nonNullable(__VLS_117.slots).default;
    var __VLS_117;
    const __VLS_151 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({ gutter: ((20)), }));
    const __VLS_153 = __VLS_152({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
    const __VLS_157 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157({ md: ((24)), lg: ((8)), }));
    const __VLS_159 = __VLS_158({ md: ((24)), lg: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_158));
    // @ts-ignore
    [RecentTransaction,];
    // @ts-ignore
    const __VLS_163 = __VLS_asFunctionalComponent(RecentTransaction, new RecentTransaction({}));
    const __VLS_164 = __VLS_163({}, ...__VLS_functionalComponentArgsRest(__VLS_163));
    __VLS_nonNullable(__VLS_162.slots).default;
    var __VLS_162;
    const __VLS_168 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ md: ((24)), lg: ((16)), ...{ class: ("no-margin-bottom") }, }));
    const __VLS_170 = __VLS_169({ md: ((24)), lg: ((16)), ...{ class: ("no-margin-bottom") }, }, ...__VLS_functionalComponentArgsRest(__VLS_169));
    // @ts-ignore
    [HotProductsList,];
    // @ts-ignore
    const __VLS_174 = __VLS_asFunctionalComponent(HotProductsList, new HotProductsList({}));
    const __VLS_175 = __VLS_174({}, ...__VLS_functionalComponentArgsRest(__VLS_174));
    __VLS_nonNullable(__VLS_173.slots).default;
    var __VLS_173;
    __VLS_nonNullable(__VLS_156.slots).default;
    var __VLS_156;
    __VLS_styleScopedClasses['ecommerce'];
    __VLS_styleScopedClasses['no-margin-bottom'];
    __VLS_styleScopedClasses['no-margin-bottom'];
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
            Banner: Banner,
            TotalOrderVolume: TotalOrderVolume,
            TotalProducts: TotalProducts,
            SalesTrend: SalesTrend,
            SalesClassification: SalesClassification,
            TransactionList: TransactionList,
            HotCommodity: HotCommodity,
            RecentTransaction: RecentTransaction,
            AnnualSales: AnnualSales,
            ProductSales: ProductSales,
            SalesGrowth: SalesGrowth,
            CartConversionRate: CartConversionRate,
            HotProductsList: HotProductsList,
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