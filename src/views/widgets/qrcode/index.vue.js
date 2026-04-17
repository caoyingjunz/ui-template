/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import QrcodeVue from 'qrcode.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'WidgetsQrcode' });
/**
 * 二维码内容
 */
const qrValue = ref('https://www.pixiu-cloud.com');
const isShowLogo = ref(false);
/**
 * 预设二维码样式配置
 */
const qrcodePresets = [
    {
        title: '渲染成 svg 标签',
        config: {
            size: 160,
            level: 'H',
            renderAs: 'svg',
            margin: 0,
            background: '#ffffff',
            foreground: '#000000'
        }
    },
    {
        title: '渲染成 canvas 标签',
        config: {
            size: 160,
            level: 'H',
            renderAs: 'canvas',
            margin: 0,
            background: '#ffffff',
            foreground: '#000000'
        }
    },
    {
        title: '自定义颜色',
        config: {
            size: 160,
            level: 'H',
            renderAs: 'canvas',
            margin: 0,
            background: '#f0f0f0',
            foreground: '#4080ff'
        }
    },
    {
        title: '带有Logo',
        config: {
            size: 160,
            level: 'H',
            renderAs: 'canvas',
            margin: 0,
            background: '#ffffff',
            foreground: '#000000',
            imageSettings: {
                src: 'https://www.pixiu-cloud.com/assets/draw1-Ce1WF34i.png',
                width: 40,
                height: 40,
                excavate: true
            }
        }
    }
];
/**
 * 二维码配置
 */
const qrcodeConfig = reactive({
    size: 160,
    level: 'H',
    renderAs: 'canvas',
    margin: 0,
    background: '#ffffff',
    foreground: '#000000',
    imageSettings: {
        src: 'https://www.pixiu-cloud.com/assets/draw1-Ce1WF34i.png',
        width: 40,
        height: 40,
        excavate: true
    }
});
/**
 * 监听是否显示 logo
 * 根据状态动态设置二维码中心的 logo 图片
 */
watch(isShowLogo, (val) => {
    if (!val) {
        qrcodeConfig.imageSettings = {};
    }
    else {
        qrcodeConfig.imageSettings = {
            src: 'https://www.pixiu-cloud.com/assets/draw1-Ce1WF34i.png',
            width: 40,
            height: 40,
            excavate: true
        };
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((20)), }));
    const __VLS_2 = __VLS_1({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    for (const [preset] of __VLS_getVForSourceType((__VLS_ctx.qrcodePresets))) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ span: ((6)), md: ((12)), sm: ((12)), xs: ((24)), key: ((preset.title)), }));
        const __VLS_8 = __VLS_7({ span: ((6)), md: ((12)), sm: ((12)), xs: ((24)), key: ((preset.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
        /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("mb-5") }, }));
        const __VLS_14 = __VLS_13({ ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-bold") }, });
            (preset.title);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cc p-5 rounded") }, });
        // @ts-ignore
        [QrcodeVue,];
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(QrcodeVue, new QrcodeVue({ value: ((__VLS_ctx.qrValue)), ...(preset.config), }));
        const __VLS_19 = __VLS_18({ value: ((__VLS_ctx.qrValue)), ...(preset.config), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        var __VLS_17;
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['p-5'];
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
            QrcodeVue: QrcodeVue,
            qrValue: qrValue,
            qrcodePresets: qrcodePresets,
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