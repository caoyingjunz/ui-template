/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import icon2 from '@imgs/3d/icon2.webp';
import icon3 from '@imgs/3d/icon3.webp';
import icon4 from '@imgs/3d/icon4.webp';
import icon5 from '@imgs/3d/icon7.webp';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'TemplateBanners' });
/**
 * 处理横幅点击事件
 */
const handleBannerClick = () => {
    console.log('banner clicked');
};
/**
 * 处理确认按钮点击事件
 */
const handleConfirm = () => {
    console.log('confirm clicked');
};
/**
 * 处理取消按钮点击事件
 */
const handleCancel = () => {
    console.log('cancel clicked');
};
/**
 * 预设横幅配置
 * 提供常用的横幅样式配置，可直接通过 v-bind 使用
 */
const PresetBanners = {
    marketing: {
        title: '限时优惠活动',
        subtitle: '精选商品 48 小时闪购，最高享受 7 折优惠，数量有限！',
        titleColor: 'var(--art-gray-900)',
        subtitleColor: 'var(--art-gray-900)',
        boxStyle: '!bg-success/15',
        meteorConfig: { enabled: true, count: 15 },
        buttonConfig: {
            show: true,
            text: '立即抢购',
            color: 'var(--art-success)',
            textColor: '#fff'
        }
    },
    info: {
        title: '服务到期提醒',
        subtitle: '您的高级服务将在 7 天后到期，请及时续费以继续享受完整功能。',
        titleColor: 'var(--art-gray-900)',
        subtitleColor: 'var(--art-gray-900)',
        boxStyle: '!bg-theme/15',
        meteorConfig: { enabled: true, count: 15 },
        buttonConfig: {
            show: true,
            text: '立即续费',
            color: 'var(--art-secondary)',
            textColor: '#fff'
        }
    }
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }));
    const __VLS_8 = __VLS_7({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ArtBasicBanner;
    /** @type { [typeof __VLS_components.ArtBasicBanner, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ title: ("数据中心运行状态"), subtitle: ("系统访问量同比增长 23%，所有服务运行稳定，数据监控正常。"), }));
    const __VLS_14 = __VLS_13({ title: ("数据中心运行状态"), subtitle: ("系统访问量同比增长 23%，所有服务运行稳定，数据监控正常。"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }));
    const __VLS_20 = __VLS_19({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ArtBasicBanner;
    /** @type { [typeof __VLS_components.ArtBasicBanner, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onButtonClick': {} }, title: ("欢迎使用 Pixiu Cloud"), subtitle: ("基于 Vue 3 + TypeScript + Element Plus 构建的现代化管理系统。"), titleColor: ("#333"), subtitleColor: ("#666"), boxStyle: ("!bg-[#D4F1F7]"), buttonConfig: (({
            show: true,
            text: '开始探索',
            color: 'var(--art-success)',
            textColor: '#fff',
            radius: '6px'
        })), }));
    const __VLS_26 = __VLS_25({ ...{ 'onButtonClick': {} }, title: ("欢迎使用 Pixiu Cloud"), subtitle: ("基于 Vue 3 + TypeScript + Element Plus 构建的现代化管理系统。"), titleColor: ("#333"), subtitleColor: ("#666"), boxStyle: ("!bg-[#D4F1F7]"), buttonConfig: (({
            show: true,
            text: '开始探索',
            color: 'var(--art-success)',
            textColor: '#fff',
            radius: '6px'
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    let __VLS_30;
    const __VLS_31 = {
        onButtonClick: (__VLS_ctx.handleBannerClick)
    };
    let __VLS_27;
    let __VLS_28;
    var __VLS_29;
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ gutter: ((20)), }));
    const __VLS_34 = __VLS_33({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }));
    const __VLS_40 = __VLS_39({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ArtBasicBanner;
    /** @type { [typeof __VLS_components.ArtBasicBanner, ] } */
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ title: ("探索星空计划"), subtitle: ("加入我们的天文观测活动，发现宇宙的奥秘"), boxStyle: ("!bg-[#FF8AAB]"), buttonConfig: (({
            show: true,
            text: '立即参与',
            color: '#FF5A89',
            textColor: '#fff'
        })), imageConfig: (({
            src: __VLS_ctx.icon3
        })), }));
    const __VLS_46 = __VLS_45({ title: ("探索星空计划"), subtitle: ("加入我们的天文观测活动，发现宇宙的奥秘"), boxStyle: ("!bg-[#FF8AAB]"), buttonConfig: (({
            show: true,
            text: '立即参与',
            color: '#FF5A89',
            textColor: '#fff'
        })), imageConfig: (({
            src: __VLS_ctx.icon3
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
    const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }));
    const __VLS_52 = __VLS_51({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ArtBasicBanner;
    /** @type { [typeof __VLS_components.ArtBasicBanner, typeof __VLS_components.ArtBasicBanner, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ boxStyle: ("!bg-[#70B1FF]"), imageConfig: (({
            src: __VLS_ctx.icon5
        })), }));
    const __VLS_58 = __VLS_57({ boxStyle: ("!bg-[#70B1FF]"), imageConfig: (({
            src: __VLS_ctx.icon5
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_61.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ style: ({}) }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { subtitle: __VLS_thisSlot } = __VLS_nonNullable(__VLS_61.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { button: __VLS_thisSlot } = __VLS_nonNullable(__VLS_61.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
        const __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ type: ("primary"), color: ("#04A1FF"), }));
        const __VLS_64 = __VLS_63({ type: ("primary"), color: ("#04A1FF"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
        __VLS_nonNullable(__VLS_67.slots).default;
        var __VLS_67;
    }
    var __VLS_61;
    __VLS_nonNullable(__VLS_55.slots).default;
    var __VLS_55;
    __VLS_nonNullable(__VLS_37.slots).default;
    var __VLS_37;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ gutter: ((20)), }));
    const __VLS_70 = __VLS_69({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }));
    const __VLS_76 = __VLS_75({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ArtBasicBanner;
    /** @type { [typeof __VLS_components.ArtBasicBanner, ] } */
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...(__VLS_ctx.PresetBanners.marketing), }));
    const __VLS_82 = __VLS_81({ ...(__VLS_ctx.PresetBanners.marketing), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    __VLS_nonNullable(__VLS_79.slots).default;
    var __VLS_79;
    const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }));
    const __VLS_88 = __VLS_87({ xs: ((24)), sm: ((12)), md: ((12)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.ArtBasicBanner;
    /** @type { [typeof __VLS_components.ArtBasicBanner, ] } */
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...(__VLS_ctx.PresetBanners.info), }));
    const __VLS_94 = __VLS_93({ ...(__VLS_ctx.PresetBanners.info), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    __VLS_nonNullable(__VLS_91.slots).default;
    var __VLS_91;
    __VLS_nonNullable(__VLS_73.slots).default;
    var __VLS_73;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_98 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ gutter: ((20)), }));
    const __VLS_100 = __VLS_99({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    const __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ xs: ((24)), sm: ((12)), md: ((12)), lg: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_106 = __VLS_105({ xs: ((24)), sm: ((12)), md: ((12)), lg: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    const __VLS_110 = __VLS_resolvedLocalAndGlobalComponents.ArtCardBanner;
    /** @type { [typeof __VLS_components.ArtCardBanner, ] } */
    // @ts-ignore
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ title: ("系统运行正常"), description: ("所有核心服务运行稳定，响应时间在正常范围内。"), }));
    const __VLS_112 = __VLS_111({ title: ("系统运行正常"), description: ("所有核心服务运行稳定，响应时间在正常范围内。"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    __VLS_nonNullable(__VLS_109.slots).default;
    var __VLS_109;
    const __VLS_116 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ xs: ((24)), sm: ((12)), md: ((12)), lg: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_118 = __VLS_117({ xs: ((24)), sm: ((12)), md: ((12)), lg: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    const __VLS_122 = __VLS_resolvedLocalAndGlobalComponents.ArtCardBanner;
    /** @type { [typeof __VLS_components.ArtCardBanner, ] } */
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ image: ((__VLS_ctx.icon2)), title: ("重要消息通知"), description: ("您有 3 条待处理的重要消息，请及时查看。"), button: (({
            show: true,
            text: '查看详情',
            color: 'var(--art-warning)',
            textColor: '#fff'
        })), }));
    const __VLS_124 = __VLS_123({ image: ((__VLS_ctx.icon2)), title: ("重要消息通知"), description: ("您有 3 条待处理的重要消息，请及时查看。"), button: (({
            show: true,
            text: '查看详情',
            color: 'var(--art-warning)',
            textColor: '#fff'
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    __VLS_nonNullable(__VLS_121.slots).default;
    var __VLS_121;
    const __VLS_128 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ xs: ((24)), sm: ((12)), md: ((12)), lg: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_130 = __VLS_129({ xs: ((24)), sm: ((12)), md: ((12)), lg: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    const __VLS_134 = __VLS_resolvedLocalAndGlobalComponents.ArtCardBanner;
    /** @type { [typeof __VLS_components.ArtCardBanner, ] } */
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ image: ((__VLS_ctx.icon3)), title: ("数据分析报告"), description: ("本周业务数据分析报告已完成，请查看关键指标。"), button: (({
            show: true,
            text: '下载报告',
            color: 'var(--art-error)',
            textColor: '#fff'
        })), }));
    const __VLS_136 = __VLS_135({ image: ((__VLS_ctx.icon3)), title: ("数据分析报告"), description: ("本周业务数据分析报告已完成，请查看关键指标。"), button: (({
            show: true,
            text: '下载报告',
            color: 'var(--art-error)',
            textColor: '#fff'
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    __VLS_nonNullable(__VLS_133.slots).default;
    var __VLS_133;
    const __VLS_140 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ xs: ((24)), sm: ((12)), md: ((12)), lg: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_142 = __VLS_141({ xs: ((24)), sm: ((12)), md: ((12)), lg: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_141));
    const __VLS_146 = __VLS_resolvedLocalAndGlobalComponents.ArtCardBanner;
    /** @type { [typeof __VLS_components.ArtCardBanner, ] } */
    // @ts-ignore
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ ...{ 'onClick': {} }, ...{ 'onCancel': {} }, image: ((__VLS_ctx.icon4)), title: ("版本更新提醒"), description: ("Pixiu Cloud v2.1.0 已发布，包含性能优化和新功能。"), button: (({
            show: true,
            text: '立即更新',
            color: 'var(--theme-color)',
            textColor: '#fff'
        })), cancelButton: (({
            show: true,
            text: '稍后提醒',
            color: '#eee',
            textColor: '#333'
        })), }));
    const __VLS_148 = __VLS_147({ ...{ 'onClick': {} }, ...{ 'onCancel': {} }, image: ((__VLS_ctx.icon4)), title: ("版本更新提醒"), description: ("Pixiu Cloud v2.1.0 已发布，包含性能优化和新功能。"), button: (({
            show: true,
            text: '立即更新',
            color: 'var(--theme-color)',
            textColor: '#fff'
        })), cancelButton: (({
            show: true,
            text: '稍后提醒',
            color: '#eee',
            textColor: '#333'
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    let __VLS_152;
    const __VLS_153 = {
        onClick: (__VLS_ctx.handleConfirm)
    };
    const __VLS_154 = {
        onCancel: (__VLS_ctx.handleCancel)
    };
    let __VLS_149;
    let __VLS_150;
    var __VLS_151;
    __VLS_nonNullable(__VLS_145.slots).default;
    var __VLS_145;
    __VLS_nonNullable(__VLS_103.slots).default;
    var __VLS_103;
    __VLS_styleScopedClasses['pt-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
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
            icon2: icon2,
            icon3: icon3,
            icon4: icon4,
            icon5: icon5,
            handleBannerClick: handleBannerClick,
            handleConfirm: handleConfirm,
            handleCancel: handleCancel,
            PresetBanners: PresetBanners,
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