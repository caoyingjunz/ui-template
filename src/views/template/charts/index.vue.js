/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'TemplateCharts' });
/**
 * 多组数据折线图示例数据
 */
const multiLineData = [
    {
        name: '销售额',
        data: [120, 132, 101, 134, 90, 130],
        areaStyle: {
            startOpacity: 0.1,
            endOpacity: 0
        }
    },
    {
        name: '利润',
        data: [80, 92, 71, 94, 60, 80],
        areaStyle: {
            startOpacity: 0.1,
            endOpacity: 0
        }
    }
];
/**
 * 单数据柱状图示例数据
 */
const singleBarData = ref([120, 200, 150, 80, 70, 110, 130]);
const xAxisData = ref(['周一', '周二', '周三', '周四', '周五', '周六', '周日']);
/**
 * 多数据柱状图示例数据
 */
const multiBarData = ref([
    { name: '销售额', data: [120, 200, 150, 80, 70, 110, 130] },
    { name: '利润', data: [20, 50, 30, 15, 10, 25, 35] }
]);
/**
 * 堆叠柱状图示例数据
 */
const stackBarData = ref([
    { name: 'Q1', data: [20, 25, 30, 35, 40], stack: 'total' },
    { name: 'Q2', data: [30, 35, 40, 45, 50], stack: 'total' }
]);
const stackXAxisData = ref(['产品A', '产品B', '产品C', '产品D', '产品E']); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pt-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((20)), }));
    const __VLS_2 = __VLS_1({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_8 = __VLS_7({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ArtBarChart;
    /** @type { [typeof __VLS_components.ArtBarChart, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ data: ((__VLS_ctx.singleBarData)), xAxisData: ((__VLS_ctx.xAxisData)), showLegend: ((true)), legendPosition: ("right"), }));
    const __VLS_14 = __VLS_13({ data: ((__VLS_ctx.singleBarData)), xAxisData: ((__VLS_ctx.xAxisData)), showLegend: ((true)), legendPosition: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_20 = __VLS_19({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ArtBarChart;
    /** @type { [typeof __VLS_components.ArtBarChart, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ data: ((__VLS_ctx.multiBarData)), xAxisData: ((__VLS_ctx.xAxisData)), showLegend: ((true)), barWidth: ("26%"), }));
    const __VLS_26 = __VLS_25({ data: ((__VLS_ctx.multiBarData)), xAxisData: ((__VLS_ctx.xAxisData)), showLegend: ((true)), barWidth: ("26%"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_32 = __VLS_31({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ArtBarChart;
    /** @type { [typeof __VLS_components.ArtBarChart, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ data: ((__VLS_ctx.stackBarData)), xAxisData: ((__VLS_ctx.stackXAxisData)), showLegend: ((true)), stack: ((true)), barWidth: ("26%"), }));
    const __VLS_38 = __VLS_37({ data: ((__VLS_ctx.stackBarData)), xAxisData: ((__VLS_ctx.stackXAxisData)), showLegend: ((true)), stack: ((true)), barWidth: ("26%"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_44 = __VLS_43({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ArtLineChart;
    /** @type { [typeof __VLS_components.ArtLineChart, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ data: (([58, 15, 82, 35, 120, 62, 45])), xAxisData: ((['一月', '二月', '三月', '四月', '五月', '六月', '七月'])), symbol: ("none"), symbolSize: ((7)), }));
    const __VLS_50 = __VLS_49({ data: (([58, 15, 82, 35, 120, 62, 45])), xAxisData: ((['一月', '二月', '三月', '四月', '五月', '六月', '七月'])), symbol: ("none"), symbolSize: ((7)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47;
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_56 = __VLS_55({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ArtLineChart;
    /** @type { [typeof __VLS_components.ArtLineChart, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ data: (([28, 45, 82, 35, 100, 32, 55])), xAxisData: ((['一月', '二月', '三月', '四月', '五月', '六月', '七月'])), showAreaColor: ((true)), }));
    const __VLS_62 = __VLS_61({ data: (([28, 45, 82, 35, 100, 32, 55])), xAxisData: ((['一月', '二月', '三月', '四月', '五月', '六月', '七月'])), showAreaColor: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_68 = __VLS_67({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ArtLineChart;
    /** @type { [typeof __VLS_components.ArtLineChart, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ data: ((__VLS_ctx.multiLineData)), xAxisData: ((['1月', '2月', '3月', '4月', '5月', '6月'])), showLegend: ((true)), }));
    const __VLS_74 = __VLS_73({ data: ((__VLS_ctx.multiLineData)), xAxisData: ((['1月', '2月', '3月', '4月', '5月', '6月'])), showLegend: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_nonNullable(__VLS_71.slots).default;
    var __VLS_71;
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_80 = __VLS_79({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ArtHBarChart;
    /** @type { [typeof __VLS_components.ArtHBarChart, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ data: (([50, 80, 120, 90, 60])), xAxisData: ((['产品A', '产品B', '产品C', '产品D', '产品E'])), }));
    const __VLS_86 = __VLS_85({ data: (([50, 80, 120, 90, 60])), xAxisData: ((['产品A', '产品B', '产品C', '产品D', '产品E'])), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_nonNullable(__VLS_83.slots).default;
    var __VLS_83;
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_92 = __VLS_91({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ArtHBarChart;
    /** @type { [typeof __VLS_components.ArtHBarChart, ] } */
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ data: (([
            { name: '系列1', data: [10, 20, 30] },
            { name: '系列2', data: [15, 25, 35] }
        ])), xAxisData: ((['类目1', '类目2', '类目3'])), showLegend: ((true)), barWidth: ("30%"), }));
    const __VLS_98 = __VLS_97({ data: (([
            { name: '系列1', data: [10, 20, 30] },
            { name: '系列2', data: [15, 25, 35] }
        ])), xAxisData: ((['类目1', '类目2', '类目3'])), showLegend: ((true)), barWidth: ("30%"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    __VLS_nonNullable(__VLS_95.slots).default;
    var __VLS_95;
    const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_104 = __VLS_103({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ArtHBarChart;
    /** @type { [typeof __VLS_components.ArtHBarChart, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ data: (([
            { name: '系列1', data: [10, 20, 30] },
            { name: '系列2', data: [15, 25, 35] }
        ])), xAxisData: ((['类目1', '类目2', '类目3'])), showLegend: ((true)), stack: ((true)), barWidth: ("30%"), }));
    const __VLS_110 = __VLS_109({ data: (([
            { name: '系列1', data: [10, 20, 30] },
            { name: '系列2', data: [15, 25, 35] }
        ])), xAxisData: ((['类目1', '类目2', '类目3'])), showLegend: ((true)), stack: ((true)), barWidth: ("30%"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    __VLS_nonNullable(__VLS_107.slots).default;
    var __VLS_107;
    const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_116 = __VLS_115({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.ArtRingChart;
    /** @type { [typeof __VLS_components.ArtRingChart, ] } */
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ data: (([
            { value: 35, name: '分类A' },
            { value: 28, name: '分类B' },
            { value: 42, name: '分类C' }
        ])), radius: ((['54%', '70%'])), legendPosition: ("bottom"), }));
    const __VLS_122 = __VLS_121({ data: (([
            { value: 35, name: '分类A' },
            { value: 28, name: '分类B' },
            { value: 42, name: '分类C' }
        ])), radius: ((['54%', '70%'])), legendPosition: ("bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
    __VLS_nonNullable(__VLS_119.slots).default;
    var __VLS_119;
    const __VLS_126 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_128 = __VLS_127({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.ArtRingChart;
    /** @type { [typeof __VLS_components.ArtRingChart, ] } */
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ data: (([
            { value: 35, name: '分类A' },
            { value: 28, name: '分类B' },
            { value: 42, name: '分类C' },
            { value: 32, name: '分类D' },
            { value: 26, name: '分类E' },
            { value: 37, name: '分类F' }
        ])), radius: ((['54%', '70%'])), borderRadius: ((0)), showLegend: ((true)), legendPosition: ("bottom"), centerText: ("¥300,458"), }));
    const __VLS_134 = __VLS_133({ data: (([
            { value: 35, name: '分类A' },
            { value: 28, name: '分类B' },
            { value: 42, name: '分类C' },
            { value: 32, name: '分类D' },
            { value: 26, name: '分类E' },
            { value: 37, name: '分类F' }
        ])), radius: ((['54%', '70%'])), borderRadius: ((0)), showLegend: ((true)), legendPosition: ("bottom"), centerText: ("¥300,458"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
    __VLS_nonNullable(__VLS_131.slots).default;
    var __VLS_131;
    const __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_140 = __VLS_139({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_139));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_144 = __VLS_resolvedLocalAndGlobalComponents.ArtRingChart;
    /** @type { [typeof __VLS_components.ArtRingChart, ] } */
    // @ts-ignore
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ data: (([
            { value: 30, name: '分类A' },
            { value: 25, name: '分类B' },
            { value: 45, name: '分类C' }
        ])), radius: ((['0%', '70%'])), showLegend: ((true)), legendPosition: ("right"), }));
    const __VLS_146 = __VLS_145({ data: (([
            { value: 30, name: '分类A' },
            { value: 25, name: '分类B' },
            { value: 45, name: '分类C' }
        ])), radius: ((['0%', '70%'])), showLegend: ((true)), legendPosition: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
    __VLS_nonNullable(__VLS_143.slots).default;
    var __VLS_143;
    const __VLS_150 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_152 = __VLS_151({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_151));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_156 = __VLS_resolvedLocalAndGlobalComponents.ArtScatterChart;
    /** @type { [typeof __VLS_components.ArtScatterChart, ] } */
    // @ts-ignore
    const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ data: (([
            { value: [1, 3] },
            { value: [2, 4] },
            { value: [3, 5] },
            { value: [4, 6] },
            { value: [5, 7] },
            { value: [6, 8] },
            { value: [7, 7] },
            { value: [8, 9] },
            { value: [9, 8] },
            { value: [10, 6] },
            { value: [11, 7] },
            { value: [12, 8] }
        ])), }));
    const __VLS_158 = __VLS_157({ data: (([
            { value: [1, 3] },
            { value: [2, 4] },
            { value: [3, 5] },
            { value: [4, 6] },
            { value: [5, 7] },
            { value: [6, 8] },
            { value: [7, 7] },
            { value: [8, 9] },
            { value: [9, 8] },
            { value: [10, 6] },
            { value: [11, 7] },
            { value: [12, 8] }
        ])), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
    __VLS_nonNullable(__VLS_155.slots).default;
    var __VLS_155;
    const __VLS_162 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_164 = __VLS_163({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_163));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_168 = __VLS_resolvedLocalAndGlobalComponents.ArtRadarChart;
    /** @type { [typeof __VLS_components.ArtRadarChart, ] } */
    // @ts-ignore
    const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ indicator: (([
            { name: '销售', max: 100 },
            { name: '管理', max: 100 },
            { name: '技术', max: 100 },
            { name: '客服', max: 100 },
            { name: '开发', max: 100 }
        ])), data: (([
            {
                name: '预算分配',
                value: [80, 70, 90, 85, 75]
            },
            {
                name: '实际开销',
                value: [70, 75, 85, 80, 70]
            }
        ])), }));
    const __VLS_170 = __VLS_169({ indicator: (([
            { name: '销售', max: 100 },
            { name: '管理', max: 100 },
            { name: '技术', max: 100 },
            { name: '客服', max: 100 },
            { name: '开发', max: 100 }
        ])), data: (([
            {
                name: '预算分配',
                value: [80, 70, 90, 85, 75]
            },
            {
                name: '实际开销',
                value: [70, 75, 85, 80, 70]
            }
        ])), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
    __VLS_nonNullable(__VLS_167.slots).default;
    var __VLS_167;
    const __VLS_174 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_176 = __VLS_175({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_175));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_180 = __VLS_resolvedLocalAndGlobalComponents.ArtKLineChart;
    /** @type { [typeof __VLS_components.ArtKLineChart, ] } */
    // @ts-ignore
    const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({ data: (([
            { time: '2024-01-01', open: 20, close: 23, high: 25, low: 18 },
            { time: '2024-01-02', open: 23, close: 21, high: 24, low: 20 },
            { time: '2024-01-03', open: 21, close: 25, high: 26, low: 21 }
        ])), showDataZoom: ((false)), dataZoomStart: ((0)), dataZoomEnd: ((100)), }));
    const __VLS_182 = __VLS_181({ data: (([
            { time: '2024-01-01', open: 20, close: 23, high: 25, low: 18 },
            { time: '2024-01-02', open: 23, close: 21, high: 24, low: 20 },
            { time: '2024-01-03', open: 21, close: 25, high: 26, low: 21 }
        ])), showDataZoom: ((false)), dataZoomStart: ((0)), dataZoomEnd: ((100)), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
    __VLS_nonNullable(__VLS_179.slots).default;
    var __VLS_179;
    const __VLS_186 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_188 = __VLS_187({ xs: ((24)), md: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_187));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    const __VLS_192 = __VLS_resolvedLocalAndGlobalComponents.ArtDualBarCompareChart;
    /** @type { [typeof __VLS_components.ArtDualBarCompareChart, ] } */
    // @ts-ignore
    const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ positiveData: (([50, 28, 80, 65, 68, 70, 60, 55])), negativeData: (([50, 28, 40, 45, 38, 50, 42, 48])), xAxisData: (([
            '0-4岁',
            '5-14岁',
            '15-24岁',
            '25-34岁',
            '35-44岁',
            '45-54岁',
            '55-64岁',
            '65岁以上'
        ])), positiveName: ("男性年龄分布"), negativeName: ("女性年龄分布"), }));
    const __VLS_194 = __VLS_193({ positiveData: (([50, 28, 80, 65, 68, 70, 60, 55])), negativeData: (([50, 28, 40, 45, 38, 50, 42, 48])), xAxisData: (([
            '0-4岁',
            '5-14岁',
            '15-24岁',
            '25-34岁',
            '35-44岁',
            '45-54岁',
            '55-64岁',
            '65岁以上'
        ])), positiveName: ("男性年龄分布"), negativeName: ("女性年龄分布"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
    __VLS_nonNullable(__VLS_191.slots).default;
    var __VLS_191;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['pt-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['pb-3.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
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
            multiLineData: multiLineData,
            singleBarData: singleBarData,
            xAxisData: xAxisData,
            multiBarData: multiBarData,
            stackBarData: stackBarData,
            stackXAxisData: stackXAxisData,
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