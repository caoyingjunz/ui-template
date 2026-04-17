/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
import { Lock, User, Key, View } from '@element-plus/icons-vue';
import { useUserStore } from '@/store/modules/user';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'PermissionPageVisibility' });
const userStore = useUserStore();
// 当前用户信息
const currentUser = computed(() => userStore.info);
// 获取角色显示名称
const getRoleDisplayName = (role) => {
    const roleMap = {
        R_SUPER: '超级管理员',
        R_ADMIN: '管理员',
        R_USER: '普通用户'
    };
    return roleMap[role] || '未知角色';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full py-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("m-0 mb-2 text-xl font-medium") }, });
    (__VLS_ctx.$t('menus.examples.permission.pageVisibility'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 text-sm leading-[1.6] text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("font-semibold text-warning") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("art-card-xs") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c gap-2 font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c gap-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("m-0 mb-2 text-lg font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("my-1 text-sm text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("font-semibold") }, });
    (__VLS_ctx.currentUser.userName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("my-1 text-sm text-g-700") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
    /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("warning"), }));
    const __VLS_8 = __VLS_7({ type: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    (__VLS_ctx.getRoleDisplayName(__VLS_ctx.currentUser.roles?.[0] || ''));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6 last:mb-0") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("art-card-xs") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElTimeline;
    /** @type { [typeof __VLS_components.ElTimeline, typeof __VLS_components.ElTimeline, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElTimelineItem;
    /** @type { [typeof __VLS_components.ElTimelineItem, typeof __VLS_components.ElTimelineItem, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ timestamp: ("前端控制模式"), type: ("primary"), size: ("large"), }));
    const __VLS_26 = __VLS_25({ timestamp: ("前端控制模式"), type: ("primary"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("m-0 mb-2 text-base font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 mb-2 leading-[1.6] text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("px-1.5 py-0.5 font-mono text-xs text-theme bg-theme/12 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({ ...{ class: ("p-4 mt-3 mb-0 overflow-x-auto font-mono text-xs leading-[1.5] bg-g-200 border-full-d rounded-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 mb-2 leading-[1.6] text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("pl-5 my-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("my-1 leading-[1.5] text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("my-1 leading-[1.5] text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("px-1.5 py-0.5 font-mono text-xs text-theme bg-theme/12 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("px-1.5 py-0.5 font-mono text-xs text-theme bg-theme/12 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("my-1 leading-[1.5] text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("my-1 leading-[1.5] text-g-700") }, });
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElTimelineItem;
    /** @type { [typeof __VLS_components.ElTimelineItem, typeof __VLS_components.ElTimelineItem, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ timestamp: ("后端控制模式"), type: ("warning"), size: ("large"), }));
    const __VLS_38 = __VLS_37({ timestamp: ("后端控制模式"), type: ("warning"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("m-0 mb-2 text-base font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 mb-2 leading-[1.6] text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 mb-2 leading-[1.6] text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({ ...{ class: ("p-4 mt-3 mb-0 overflow-x-auto font-mono text-xs leading-[1.5] bg-g-200 border-full-d rounded-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47;
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElTimelineItem;
    /** @type { [typeof __VLS_components.ElTimelineItem, typeof __VLS_components.ElTimelineItem, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ timestamp: ("菜单显示控制"), type: ("success"), size: ("large"), }));
    const __VLS_50 = __VLS_49({ timestamp: ("菜单显示控制"), type: ("success"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
    const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    var __VLS_17;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("best-practices") }, });
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ class: ("art-card-xs") }, }));
    const __VLS_62 = __VLS_61({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_65.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("practices-content") }, });
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ gutter: ((24)), }));
    const __VLS_68 = __VLS_67({ gutter: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ span: ((12)), ...{ class: ("!mb-5") }, }));
    const __VLS_74 = __VLS_73({ span: ((12)), ...{ class: ("!mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("size-10 bg-g-200 flex-cc rounded mr-2") }, });
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ size: ("20"), color: ("#409EFF"), }));
    const __VLS_80 = __VLS_79({ size: ("20"), color: ("#409EFF"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.Lock;
    /** @type { [typeof __VLS_components.Lock, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({}));
    const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_nonNullable(__VLS_83.slots).default;
    var __VLS_83;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-g-700 text-sm") }, });
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ span: ((12)), }));
    const __VLS_92 = __VLS_91({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("size-10 bg-g-200 flex-cc rounded mr-2") }, });
    const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ size: ("20"), color: ("#67C23A"), }));
    const __VLS_98 = __VLS_97({ size: ("20"), color: ("#67C23A"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.User;
    /** @type { [typeof __VLS_components.User, ] } */
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({}));
    const __VLS_104 = __VLS_103({}, ...__VLS_functionalComponentArgsRest(__VLS_103));
    __VLS_nonNullable(__VLS_101.slots).default;
    var __VLS_101;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-g-700 text-sm") }, });
    __VLS_nonNullable(__VLS_95.slots).default;
    var __VLS_95;
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ span: ((12)), }));
    const __VLS_110 = __VLS_109({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("size-10 bg-g-200 flex-cc rounded mr-2") }, });
    const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ size: ("20"), color: ("#E6A23C"), }));
    const __VLS_116 = __VLS_115({ size: ("20"), color: ("#E6A23C"), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.Key;
    /** @type { [typeof __VLS_components.Key, ] } */
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({}));
    const __VLS_122 = __VLS_121({}, ...__VLS_functionalComponentArgsRest(__VLS_121));
    __VLS_nonNullable(__VLS_119.slots).default;
    var __VLS_119;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-g-700 text-sm") }, });
    __VLS_nonNullable(__VLS_113.slots).default;
    var __VLS_113;
    const __VLS_126 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ span: ((12)), }));
    const __VLS_128 = __VLS_127({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("size-10 bg-g-200 flex-cc rounded mr-2") }, });
    const __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ size: ("20"), color: ("#F56C6C"), }));
    const __VLS_134 = __VLS_133({ size: ("20"), color: ("#F56C6C"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
    const __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.View;
    /** @type { [typeof __VLS_components.View, ] } */
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({}));
    const __VLS_140 = __VLS_139({}, ...__VLS_functionalComponentArgsRest(__VLS_139));
    __VLS_nonNullable(__VLS_137.slots).default;
    var __VLS_137;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-g-700 text-sm") }, });
    __VLS_nonNullable(__VLS_131.slots).default;
    var __VLS_131;
    __VLS_nonNullable(__VLS_71.slots).default;
    var __VLS_71;
    var __VLS_65;
    __VLS_styleScopedClasses[''];
    __VLS_styleScopedClasses[''];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-warning'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['gap-5'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['my-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['my-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['px-1.5'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/12'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['mb-0'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['leading-[1.5]'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['pl-5'];
    __VLS_styleScopedClasses['my-2'];
    __VLS_styleScopedClasses['my-1'];
    __VLS_styleScopedClasses['leading-[1.5]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['my-1'];
    __VLS_styleScopedClasses['leading-[1.5]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['px-1.5'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/12'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-1.5'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/12'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['my-1'];
    __VLS_styleScopedClasses['leading-[1.5]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['my-1'];
    __VLS_styleScopedClasses['leading-[1.5]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['mb-0'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['leading-[1.5]'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['best-practices'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['practices-content'];
    __VLS_styleScopedClasses['!mb-5'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['size-10'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['size-10'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['size-10'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['size-10'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-g-700'];
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
            Lock: Lock,
            User: User,
            Key: Key,
            View: View,
            currentUser: currentUser,
            getRoleDisplayName: getRoleDisplayName,
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