/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'SafeguardServer' });
const UPDATE_INTERVAL = 3000; // 更新间隔时间（毫秒）
/**
 * 服务器列表数据
 * 包含各服务器的基本信息和资源使用情况
 */
const serverList = reactive([
    {
        name: '开发服务器',
        ip: '192.168.1.100',
        cup: 85,
        memory: 65,
        swap: 45,
        disk: 92
    },
    {
        name: '测试服务器',
        ip: '192.168.1.101',
        cup: 32,
        memory: 78,
        swap: 90,
        disk: 45
    },
    {
        name: '预发布服务器',
        ip: '192.168.1.102',
        cup: 95,
        memory: 42,
        swap: 67,
        disk: 88
    },
    {
        name: '线上服务器',
        ip: '192.168.1.103',
        cup: 58,
        memory: 93,
        swap: 25,
        disk: 73
    }
]);
/**
 * 生成指定范围内的随机整数
 * @param min 最小值（默认 0）
 * @param max 最大值（默认 100）
 * @returns 随机整数
 */
const generateRandomValue = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * 更新所有服务器的资源使用数据
 * 模拟服务器资源使用情况的实时变化
 */
const updateServerData = () => {
    serverList.forEach((server) => {
        server.cup = generateRandomValue();
        server.memory = generateRandomValue();
        server.swap = generateRandomValue();
        server.disk = generateRandomValue();
    });
};
let timer = null;
/**
 * 组件挂载时启动定时器
 * 每隔指定时间自动更新服务器数据
 */
onMounted(() => {
    timer = window.setInterval(updateServerData, UPDATE_INTERVAL);
});
/**
 * 组件卸载时清理定时器
 * 防止内存泄漏
 */
onUnmounted(() => {
    if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap w-[calc(100%+20px)]") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.serverList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("box-border w-[calc(50%-20px)] mr-5 mb-5 border border-g-300 rounded max-lg:w-full max-md:w-full") }, key: ((item.name)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb p-5 border-b border-g-300/80 max-lg:p-2.5 max-lg:px-5 max-md:p-2.5 max-md:px-5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm font-medium") }, });
        (item.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-g-600") }, });
        (item.ip);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c p-9 scale-[0.8] max-lg:p-5 max-md:block max-md:p-5 max-sm:!block") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-10 max-lg:m-0 max-lg:mr-5 max-md:m-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@imgs/safeguard/server.png"), alt: ("服务器"), ...{ class: ("block w-47 max-md:w-37 max-md:mx-auto") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center -mt-2.5 max-md:mt-2.5") }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElButtonGroup;
        /** @type { [typeof __VLS_components.ElButtonGroup, typeof __VLS_components.ElButtonGroup, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("primary"), size: ("default"), }));
        const __VLS_8 = __VLS_7({ type: ("primary"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("danger"), size: ("default"), }));
        const __VLS_14 = __VLS_13({ type: ("danger"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("warning"), size: ("default"), }));
        const __VLS_20 = __VLS_19({ type: ("warning"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_nonNullable(__VLS_23.slots).default;
        var __VLS_23;
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 mt-1 max-lg:mt-0 max-md:mt-7.5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("my-3.5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-1 text-sm") }, });
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElProgress;
        /** @type { [typeof __VLS_components.ElProgress, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ percentage: ((item.cup)), textInside: ((true)), strokeWidth: ((17)), }));
        const __VLS_26 = __VLS_25({ percentage: ((item.cup)), textInside: ((true)), strokeWidth: ((17)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("my-3.5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-1 text-sm") }, });
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElProgress;
        /** @type { [typeof __VLS_components.ElProgress, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ percentage: ((item.memory)), status: ("success"), textInside: ((true)), strokeWidth: ((17)), }));
        const __VLS_32 = __VLS_31({ percentage: ((item.memory)), status: ("success"), textInside: ((true)), strokeWidth: ((17)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("my-3.5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-1 text-sm") }, });
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElProgress;
        /** @type { [typeof __VLS_components.ElProgress, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ percentage: ((item.swap)), status: ("warning"), textInside: ((true)), strokeWidth: ((17)), }));
        const __VLS_38 = __VLS_37({ percentage: ((item.swap)), status: ("warning"), textInside: ((true)), strokeWidth: ((17)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("my-3.5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-1 text-sm") }, });
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElProgress;
        /** @type { [typeof __VLS_components.ElProgress, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ percentage: ((item.disk)), status: ("success"), textInside: ((true)), strokeWidth: ((17)), }));
        const __VLS_44 = __VLS_43({ percentage: ((item.disk)), status: ("success"), textInside: ((true)), strokeWidth: ((17)), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    }
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['w-[calc(100%+20px)]'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['w-[calc(50%-20px)]'];
    __VLS_styleScopedClasses['mr-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-g-300'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['max-lg:w-full'];
    __VLS_styleScopedClasses['max-md:w-full'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-g-300/80'];
    __VLS_styleScopedClasses['max-lg:p-2.5'];
    __VLS_styleScopedClasses['max-lg:px-5'];
    __VLS_styleScopedClasses['max-md:p-2.5'];
    __VLS_styleScopedClasses['max-md:px-5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['p-9'];
    __VLS_styleScopedClasses['scale-[0.8]'];
    __VLS_styleScopedClasses['max-lg:p-5'];
    __VLS_styleScopedClasses['max-md:block'];
    __VLS_styleScopedClasses['max-md:p-5'];
    __VLS_styleScopedClasses['max-sm:!block'];
    __VLS_styleScopedClasses['mx-10'];
    __VLS_styleScopedClasses['max-lg:m-0'];
    __VLS_styleScopedClasses['max-lg:mr-5'];
    __VLS_styleScopedClasses['max-md:m-0'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['w-47'];
    __VLS_styleScopedClasses['max-md:w-37'];
    __VLS_styleScopedClasses['max-md:mx-auto'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['-mt-2.5'];
    __VLS_styleScopedClasses['max-md:mt-2.5'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['max-lg:mt-0'];
    __VLS_styleScopedClasses['max-md:mt-7.5'];
    __VLS_styleScopedClasses['my-3.5'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['my-3.5'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['my-3.5'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['my-3.5'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-sm'];
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
            serverList: serverList,
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