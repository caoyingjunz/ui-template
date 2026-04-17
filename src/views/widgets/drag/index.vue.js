/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { VueDraggable } from 'vue-draggable-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'TemplateDrag' });
/**
 * 用户列表数据
 * 用于演示拖拽排序功能
 */
const userList = ref([
    { name: '孙悟空', role: '斗战胜佛' },
    { name: '猪八戒', role: '净坛使者' },
    { name: '沙僧', role: '金身罗汉' },
    { name: '唐僧', role: '旃檀功德佛' }
]); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_styleScopedClasses['fade-leave-active'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content mb-5") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-75 mr-5 mb-7.5") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("w-75 mr-5 mb-7.5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-bold") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VueDraggable;
        /** @type { [typeof __VLS_components.VueDraggable, typeof __VLS_components.VueDraggable, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ref: ("el"), modelValue: ((__VLS_ctx.userList)), }));
        const __VLS_14 = __VLS_13({ ref: ("el"), modelValue: ((__VLS_ctx.userList)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        // @ts-ignore navigation for `const el = ref()`
        __VLS_ctx.el;
        var __VLS_18 = {};
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.userList))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-2.5 mb-2.5 cursor-move bg-active-color rounded") }, key: ((item.name)), });
            (item.name);
        }
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
    }
    var __VLS_11;
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ ...{ class: ("w-75 mb-7.5") }, }));
    const __VLS_21 = __VLS_20({ ...{ class: ("w-75 mb-7.5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_24.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-bold") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_24.slots);
        const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VueDraggable;
        /** @type { [typeof __VLS_components.VueDraggable, typeof __VLS_components.VueDraggable, ] } */
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ modelValue: ((__VLS_ctx.userList)), target: (".sort-target"), scroll: ((true)), }));
        const __VLS_27 = __VLS_26({ modelValue: ((__VLS_ctx.userList)), target: (".sort-target"), scroll: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.TransitionGroup;
        /** @type { [typeof __VLS_components.TransitionGroup, typeof __VLS_components.TransitionGroup, ] } */
        // @ts-ignore
        const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ type: ("transition"), tag: ("ul"), name: ("fade"), ...{ class: ("sort-target") }, }));
        const __VLS_33 = __VLS_32({ type: ("transition"), tag: ("ul"), name: ("fade"), ...{ class: ("sort-target") }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.userList))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((item.name)), ...{ class: ("p-2.5 mb-2.5 cursor-move bg-active-color rounded") }, });
            (item.name);
        }
        __VLS_nonNullable(__VLS_36.slots).default;
        var __VLS_36;
        __VLS_nonNullable(__VLS_30.slots).default;
        var __VLS_30;
    }
    var __VLS_24;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{ class: ("mb-7.5") }, }));
    const __VLS_39 = __VLS_38({ ...{ class: ("mb-7.5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_42.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-bold") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_42.slots);
        const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VueDraggable;
        /** @type { [typeof __VLS_components.VueDraggable, typeof __VLS_components.VueDraggable, ] } */
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ target: ("tbody"), modelValue: ((__VLS_ctx.userList)), animation: ((150)), }));
        const __VLS_45 = __VLS_44({ target: ("tbody"), modelValue: ((__VLS_ctx.userList)), animation: ((150)), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
        const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.ArtTable;
        /** @type { [typeof __VLS_components.ArtTable, typeof __VLS_components.ArtTable, ] } */
        // @ts-ignore
        const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ data: ((__VLS_ctx.userList)), }));
        const __VLS_51 = __VLS_50({ data: ((__VLS_ctx.userList)), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
        const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ label: ("姓名"), prop: ("name"), }));
        const __VLS_57 = __VLS_56({ label: ("姓名"), prop: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
        const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ label: ("角色"), prop: ("role"), }));
        const __VLS_63 = __VLS_62({ label: ("角色"), prop: ("role"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
        __VLS_nonNullable(__VLS_54.slots).default;
        var __VLS_54;
        __VLS_nonNullable(__VLS_48.slots).default;
        var __VLS_48;
    }
    var __VLS_42;
    const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{ class: ("mb-7.5") }, }));
    const __VLS_69 = __VLS_68({ ...{ class: ("mb-7.5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_72.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-bold") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_72.slots);
        const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.VueDraggable;
        /** @type { [typeof __VLS_components.VueDraggable, typeof __VLS_components.VueDraggable, ] } */
        // @ts-ignore
        const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ target: ("tbody"), handle: (".handle"), modelValue: ((__VLS_ctx.userList)), animation: ((150)), }));
        const __VLS_75 = __VLS_74({ target: ("tbody"), handle: (".handle"), modelValue: ((__VLS_ctx.userList)), animation: ((150)), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
        const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.ArtTable;
        /** @type { [typeof __VLS_components.ArtTable, typeof __VLS_components.ArtTable, ] } */
        // @ts-ignore
        const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ data: ((__VLS_ctx.userList)), }));
        const __VLS_81 = __VLS_80({ data: ((__VLS_ctx.userList)), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
        const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ label: ("姓名"), prop: ("name"), }));
        const __VLS_87 = __VLS_86({ label: ("姓名"), prop: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
        const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ label: ("角色"), prop: ("role"), }));
        const __VLS_93 = __VLS_92({ label: ("角色"), prop: ("role"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
        const __VLS_97 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ label: ("操作"), width: ("100"), }));
        const __VLS_99 = __VLS_98({ label: ("操作"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
        const __VLS_103 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({ size: ("default"), ...{ class: ("handle") }, }));
        const __VLS_105 = __VLS_104({ size: ("default"), ...{ class: ("handle") }, }, ...__VLS_functionalComponentArgsRest(__VLS_104));
        __VLS_nonNullable(__VLS_108.slots).default;
        var __VLS_108;
        __VLS_nonNullable(__VLS_102.slots).default;
        var __VLS_102;
        __VLS_nonNullable(__VLS_84.slots).default;
        var __VLS_84;
        __VLS_nonNullable(__VLS_78.slots).default;
        var __VLS_78;
    }
    var __VLS_72;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['w-75'];
    __VLS_styleScopedClasses['mr-5'];
    __VLS_styleScopedClasses['mb-7.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['p-2.5'];
    __VLS_styleScopedClasses['mb-2.5'];
    __VLS_styleScopedClasses['cursor-move'];
    __VLS_styleScopedClasses['bg-active-color'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-75'];
    __VLS_styleScopedClasses['mb-7.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['sort-target'];
    __VLS_styleScopedClasses['p-2.5'];
    __VLS_styleScopedClasses['mb-2.5'];
    __VLS_styleScopedClasses['cursor-move'];
    __VLS_styleScopedClasses['bg-active-color'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mb-7.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-7.5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['handle'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "el": __VLS_18,
    };
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
            VueDraggable: VueDraggable,
            userList: userList,
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