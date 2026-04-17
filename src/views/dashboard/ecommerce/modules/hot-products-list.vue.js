/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import product1 from '@/assets/images/3d/icon1.webp';
import product2 from '@/assets/images/3d/icon2.webp';
import product3 from '@/assets/images/3d/icon3.webp';
import product4 from '@/assets/images/3d/icon4.webp';
import product5 from '@/assets/images/3d/icon5.webp';
import product6 from '@/assets/images/3d/icon6.webp';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const ANIMATION_DELAY = 100;
const STOCK_THRESHOLD = {
    LOW: 20,
    MEDIUM: 50
};
/**
 * 热销产品表格数据
 * 包含产品信息、库存、销量和销售趋势
 */
const tableData = reactive([
    {
        name: '智能手表 Pro',
        category: '电子设备',
        price: 1299,
        stock: 156,
        sales: 423,
        percentage: 75,
        pro: 0,
        color: 'var(--art-primary)',
        image: product1
    },
    {
        name: '无线蓝牙耳机',
        category: '音频设备',
        price: 499,
        stock: 89,
        sales: 652,
        percentage: 85,
        pro: 0,
        color: 'var(--art-success)',
        image: product2
    },
    {
        name: '机械键盘',
        category: '电脑配件',
        price: 399,
        stock: 12,
        sales: 238,
        percentage: 45,
        pro: 0,
        color: 'var(--art-warning)',
        image: product3
    },
    {
        name: '超薄笔记本电脑',
        category: '电子设备',
        price: 5999,
        stock: 0,
        sales: 126,
        percentage: 30,
        pro: 0,
        color: 'var(--art-error)',
        image: product4
    },
    {
        name: '智能音箱',
        category: '智能家居',
        price: 799,
        stock: 45,
        sales: 321,
        percentage: 60,
        pro: 0,
        color: 'var(--art-info)',
        image: product5
    },
    {
        name: '游戏手柄',
        category: '游戏配件',
        price: 299,
        stock: 78,
        sales: 489,
        percentage: 70,
        pro: 0,
        color: 'var(--art-secondary)',
        image: product6
    }
]);
/**
 * 根据库存数量获取状态文本
 * @param stock 库存数量
 * @returns 库存状态文本
 */
const getStockStatus = (stock) => {
    if (stock === 0)
        return '缺货';
    if (stock < STOCK_THRESHOLD.LOW)
        return '低库存';
    if (stock < STOCK_THRESHOLD.MEDIUM)
        return '适中';
    return '充足';
};
/**
 * 根据库存数量获取状态样式类名
 * @param stock 库存数量
 * @returns CSS 类名
 */
const getStockClass = (stock) => {
    if (stock === 0)
        return 'text-danger bg-danger/12';
    if (stock < STOCK_THRESHOLD.LOW)
        return 'text-warning bg-warning/12';
    if (stock < STOCK_THRESHOLD.MEDIUM)
        return 'text-info bg-info/12';
    return 'text-success bg-success/12';
};
/**
 * 添加进度条动画效果
 * 延迟后将进度值从 0 更新到目标百分比，触发动画
 */
const addAnimation = () => {
    setTimeout(() => {
        tableData.forEach((item) => {
            item.pro = item.percentage;
        });
    }, ANIMATION_DELAY);
};
onMounted(() => {
    addAnimation();
}); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card p-5 h-[27.8rem] mb-5 overflow-hidden max-sm:mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.ElScrollbar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ style: ({}) }, ...{ class: ("w-full") }, }));
    const __VLS_2 = __VLS_1({ ...{ style: ({}) }, ...{ class: ("w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ArtTable;
    /** @type { [typeof __VLS_components.ArtTable, typeof __VLS_components.ArtTable, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ data: ((__VLS_ctx.tableData)), ...{ style: ({}) }, border: ((false)), stripe: ((false)), headerCellStyle: (({ background: 'transparent' })), }));
    const __VLS_8 = __VLS_7({ data: ((__VLS_ctx.tableData)), ...{ style: ({}) }, border: ((false)), stripe: ((false)), headerCellStyle: (({ background: 'transparent' })), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("产品"), prop: ("product"), width: ("220px"), }));
        const __VLS_14 = __VLS_13({ label: ("产品"), prop: ("product"), width: ("220px"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
            const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("size-12.5 object-cover rounded-md") }, src: ((scope.row.image)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col ml-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-medium") }, });
            (scope.row.name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs text-slate-500") }, });
            (scope.row.category);
        }
        var __VLS_17;
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ label: ("价格"), prop: ("price"), }));
        const __VLS_20 = __VLS_19({ label: ("价格"), prop: ("price"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_23.slots);
            const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold") }, });
            (scope.row.price.toLocaleString());
        }
        var __VLS_23;
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ label: ("库存"), prop: ("stock"), }));
        const __VLS_26 = __VLS_25({ label: ("库存"), prop: ("stock"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_29.slots);
            const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inline-block px-2 py-1 text-xs font-medium rounded") }, ...{ class: ((__VLS_ctx.getStockClass(scope.row.stock))) }, });
            (__VLS_ctx.getStockStatus(scope.row.stock));
        }
        var __VLS_29;
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ label: ("销量"), prop: ("sales"), }));
        const __VLS_32 = __VLS_31({ label: ("销量"), prop: ("sales"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ label: ("销售趋势"), width: ("240"), }));
        const __VLS_38 = __VLS_37({ label: ("销售趋势"), width: ("240"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_41.slots);
            const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
            const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElProgress;
            /** @type { [typeof __VLS_components.ElProgress, ] } */
            // @ts-ignore
            const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ percentage: ((scope.row.pro)), color: ((scope.row.color)), strokeWidth: ((4)), }));
            const __VLS_44 = __VLS_43({ percentage: ((scope.row.pro)), color: ((scope.row.color)), strokeWidth: ((4)), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        }
        var __VLS_41;
    }
    var __VLS_11;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['h-[27.8rem]'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['max-sm:mb-4'];
    __VLS_styleScopedClasses['art-card-header'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['size-12.5'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['ml-3'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-slate-500'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['rounded'];
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
            tableData: tableData,
            getStockStatus: getStockStatus,
            getStockClass: getStockClass,
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
//# sourceMappingURL=hot-products-list.vue.js.map