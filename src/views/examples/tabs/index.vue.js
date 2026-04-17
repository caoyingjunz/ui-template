/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { useWorktabStore } from '@/store/modules/worktab';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'TabsExample' });
const worktabStore = useWorktabStore();
const currentTab = ref(null);
const newTabTitle = ref('');
const routePath = '/examples/tabs';
/**
 * 更新当前标签页标题
 * 验证输入内容后调用 store 方法更新标题
 */
const handleUpdateTabTitle = () => {
    const trimmedTitle = newTabTitle.value.trim();
    if (trimmedTitle) {
        worktabStore.updateTabTitle(routePath, trimmedTitle);
        ElMessage.success('标签页标题已更新');
    }
};
/**
 * 重置标签页标题
 * 将标题重置为默认值并清空输入框
 */
const handleResetTabTitle = () => {
    worktabStore.resetTabTitle(routePath);
    newTabTitle.value = '';
    ElMessage.success('标签页标题已重置');
};
/**
 * 获取指定路径的标签页信息
 * @param path 标签页路径
 */
const handleGetCurrentTabTitle = (path) => {
    const tab = worktabStore.getTabTitle(path);
    if (tab) {
        currentTab.value = tab;
        ElMessage.success('已获取标签页信息');
    }
    else {
        ElMessage.warning('未找到标签信息');
    }
};
/**
 * 关闭指定路径的标签页
 * @param path 要关闭的标签页路径
 */
const handleCloseTab = (path) => {
    worktabStore.removeTab(path);
};
/**
 * 关闭除指定路径外的其他所有标签页
 * @param path 要保留的标签页路径
 */
const handleCloseOthersTab = (path) => {
    worktabStore.removeOthers(path);
};
/**
 * 关闭所有标签页
 */
const handleCloseAllTab = () => {
    worktabStore.removeAll();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-5 text-xl font-normal") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("mb-7.5") }, header: ("修改标签标题"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("mb-7.5") }, header: ("修改标签标题"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ modelValue: ((__VLS_ctx.newTabTitle)), placeholder: ("请输入新的标签页标题"), clearable: (true), ...{ class: ("!max-w-75") }, }));
    const __VLS_8 = __VLS_7({ modelValue: ((__VLS_ctx.newTabTitle)), placeholder: ("请输入新的标签页标题"), clearable: (true), ...{ class: ("!max-w-75") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, type: ("primary"), disabled: ((!__VLS_ctx.newTabTitle.trim())), }));
    const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, type: ("primary"), disabled: ((!__VLS_ctx.newTabTitle.trim())), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onClick: (__VLS_ctx.handleUpdateTabTitle)
    };
    let __VLS_15;
    let __VLS_16;
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onClick': {} }, }));
    const __VLS_22 = __VLS_21({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    let __VLS_26;
    const __VLS_27 = {
        onClick: (__VLS_ctx.handleResetTabTitle)
    };
    let __VLS_23;
    let __VLS_24;
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{ class: ("mb-7.5") }, header: ("获取标签页信息"), }));
    const __VLS_30 = __VLS_29({ ...{ class: ("mb-7.5") }, header: ("获取标签页信息"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 mb-2 text-sm text-g-600") }, });
    (__VLS_ctx.currentTab);
    const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ gutter: ((20)), }));
    const __VLS_36 = __VLS_35({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ span: ((24)), }));
    const __VLS_42 = __VLS_41({ span: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{ 'onClick': {} }, type: ("success"), plain: (true), }));
    const __VLS_48 = __VLS_47({ ...{ 'onClick': {} }, type: ("success"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    let __VLS_52;
    const __VLS_53 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleGetCurrentTabTitle(__VLS_ctx.routePath);
        }
    };
    let __VLS_49;
    let __VLS_50;
    __VLS_nonNullable(__VLS_51.slots).default;
    var __VLS_51;
    __VLS_nonNullable(__VLS_45.slots).default;
    var __VLS_45;
    __VLS_nonNullable(__VLS_39.slots).default;
    var __VLS_39;
    __VLS_nonNullable(__VLS_33.slots).default;
    var __VLS_33;
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{ class: ("mb-7.5") }, header: ("关闭标签页"), }));
    const __VLS_56 = __VLS_55({ ...{ class: ("mb-7.5") }, header: ("关闭标签页"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ gutter: ((20)), }));
    const __VLS_62 = __VLS_61({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ span: ((24)), }));
    const __VLS_68 = __VLS_67({ span: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onClick': {} }, type: ("danger"), plain: (true), }));
    const __VLS_74 = __VLS_73({ ...{ 'onClick': {} }, type: ("danger"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    let __VLS_78;
    const __VLS_79 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleCloseTab(__VLS_ctx.routePath);
        }
    };
    let __VLS_75;
    let __VLS_76;
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ 'onClick': {} }, type: ("warning"), plain: (true), }));
    const __VLS_82 = __VLS_81({ ...{ 'onClick': {} }, type: ("warning"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    let __VLS_86;
    const __VLS_87 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleCloseOthersTab(__VLS_ctx.routePath);
        }
    };
    let __VLS_83;
    let __VLS_84;
    __VLS_nonNullable(__VLS_85.slots).default;
    var __VLS_85;
    const __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ ...{ 'onClick': {} }, type: ("danger"), plain: (true), }));
    const __VLS_90 = __VLS_89({ ...{ 'onClick': {} }, type: ("danger"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    let __VLS_94;
    const __VLS_95 = {
        onClick: (__VLS_ctx.handleCloseAllTab)
    };
    let __VLS_91;
    let __VLS_92;
    __VLS_nonNullable(__VLS_93.slots).default;
    var __VLS_93;
    __VLS_nonNullable(__VLS_71.slots).default;
    var __VLS_71;
    __VLS_nonNullable(__VLS_65.slots).default;
    var __VLS_65;
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-normal'];
    __VLS_styleScopedClasses['mb-7.5'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['!max-w-75'];
    __VLS_styleScopedClasses['mb-7.5'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['mb-7.5'];
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
            currentTab: currentTab,
            newTabTitle: newTabTitle,
            routePath: routePath,
            handleUpdateTabTitle: handleUpdateTabTitle,
            handleResetTabTitle: handleResetTabTitle,
            handleGetCurrentTabTitle: handleGetCurrentTabTitle,
            handleCloseTab: handleCloseTab,
            handleCloseOthersTab: handleCloseOthersTab,
            handleCloseAllTab: handleCloseAllTab,
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