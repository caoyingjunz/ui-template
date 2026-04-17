/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed, ref } from 'vue';
import { ArrowDown, Lock } from '@element-plus/icons-vue';
import { useAuth } from '@/hooks/core/useAuth';
import { useUserStore } from '@/store/modules/user';
import { useAppMode } from '@/hooks/core/useAppMode';
import { useRoute } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'PermissionButtonAuth' });
const { hasAuth } = useAuth();
const { isFrontendMode } = useAppMode();
const userStore = useUserStore();
const route = useRoute();
// 动态功能状态
const dynamicFeatureEnabled = ref(false);
// 当前用户角色
const currentUserRole = computed(() => {
    return userStore.info?.roles?.[0] || '';
});
// 当前用户权限码
const currentUserPermissions = computed(() => {
    return userStore.info?.buttons || [];
});
// 前端模式权限列表（用户的 buttons 字段）
const frontendAuthList = computed(() => {
    return userStore.info?.buttons || [];
});
// 后端模式权限列表（路由 meta.authList 配置）
const backendAuthList = computed(() => {
    return Array.isArray(route.meta.authList) ? route.meta.authList : [];
});
// 是否拥有批量操作权限
const hasBatchPermissions = computed(() => {
    return hasAuth('edit') || hasAuth('delete') || hasAuth('export');
});
// 权限对比数据
const comparisonData = computed(() => [
    {
        feature: '权限来源',
        frontend: '用户状态中的 buttons 字段',
        backend: '路由配置中的 meta.authList'
    },
    {
        feature: 'v-auth 指令',
        frontend: '不可用（前端模式下指令无效）',
        backend: '可用（根据路由权限配置检查）'
    },
    {
        feature: 'hasAuth 方法',
        frontend: '可用（检查 buttons 数组）',
        backend: '可用（检查 meta.authList）'
    },
    {
        feature: '权限管理',
        frontend: '完全由前端控制，灵活度高',
        backend: '后端统一管理，安全性更高'
    },
    {
        feature: '适用场景',
        frontend: '快速原型、简单应用',
        backend: '企业级应用、复杂权限体系'
    }
]);
// 获取角色标签类型
const getRoleTagType = (role) => {
    const roleMap = {
        R_SUPER: 'warning',
        R_ADMIN: 'primary',
        R_USER: 'success'
    };
    return roleMap[role] || 'info';
};
// 获取角色显示名称
const getRoleDisplayName = (role) => {
    const roleMap = {
        R_SUPER: '超级管理员',
        R_ADMIN: '管理员',
        R_USER: '普通用户'
    };
    return roleMap[role] || '未知角色';
};
// 处理发布操作
const handlePublish = () => {
    if (hasAuth('publish')) {
        ElMessage.success('发布成功！');
    }
    else {
        ElMessage.warning('您没有发布权限');
    }
};
// 处理批量操作
const handleBatchAction = (command) => {
    const actions = {
        batchEdit: '批量编辑',
        batchDelete: '批量删除',
        batchExport: '批量导出'
    };
    const permission = command.replace('batch', '').toLowerCase();
    if (hasAuth(permission)) {
        ElMessage.success(`${actions[command]}操作执行成功！`);
    }
    else {
        ElMessage.warning(`您没有${actions[command]}权限`);
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full py-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("m-0 mb-2 text-xl font-medium") }, });
    (__VLS_ctx.$t('menus.examples.permission.buttonAuth'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 text-sm leading-[1.6] text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("art-card-xs") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex-1") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start mb-4 last:mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("min-w-20 font-semibold") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
    /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ((__VLS_ctx.getRoleTagType(__VLS_ctx.currentUserRole))), }));
    const __VLS_8 = __VLS_7({ type: ((__VLS_ctx.getRoleTagType(__VLS_ctx.currentUserRole))), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    (__VLS_ctx.getRoleDisplayName(__VLS_ctx.currentUserRole));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start mb-4 last:mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("min-w-20 font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-2") }, });
    for (const [permission] of __VLS_getVForSourceType((__VLS_ctx.currentUserPermissions))) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((permission)), size: ("small"), type: ("info"), ...{ class: ("m-0") }, }));
        const __VLS_14 = __VLS_13({ key: ((permission)), size: ("small"), type: ("info"), ...{ class: ("m-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        (permission);
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
    }
    if (!__VLS_ctx.currentUserPermissions.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("italic text-red-500") }, });
    }
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6 last:mb-0") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("art-card-xs") }, }));
    const __VLS_20 = __VLS_19({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_23.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex-1") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("p-3 m-0 mb-5 text-sm leading-[1.6] text-g-700 bg-g-200 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("px- 1.5 py-0.5 font-mono text-xs text-theme bg-theme/10 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ type: ("primary"), plain: (true), }));
    const __VLS_26 = __VLS_25({ type: ("primary"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_asFunctionalDirective(__VLS_directives.vRoles)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: ('R_SUPER') }, null, null);
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ type: ("warning"), plain: (true), }));
    const __VLS_32 = __VLS_31({ type: ("warning"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_asFunctionalDirective(__VLS_directives.vRoles)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (['R_SUPER', 'R_ADMIN']) }, null, null);
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ type: ("success"), plain: (true), }));
    const __VLS_38 = __VLS_37({ type: ("success"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_asFunctionalDirective(__VLS_directives.vRoles)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (['R_SUPER', 'R_ADMIN', 'R_USER']) }, null, null);
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    var __VLS_23;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6 last:mb-0") }, });
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ class: ("art-card-xs") }, }));
    const __VLS_44 = __VLS_43({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_47.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex-1") }, });
        if (!__VLS_ctx.isFrontendMode) {
            const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ type: ("success"), size: ("small"), }));
            const __VLS_50 = __VLS_49({ type: ("success"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
            __VLS_nonNullable(__VLS_53.slots).default;
            var __VLS_53;
        }
        else {
            const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ type: ("info"), size: ("small"), }));
            const __VLS_56 = __VLS_55({ type: ("info"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
            __VLS_nonNullable(__VLS_59.slots).default;
            var __VLS_59;
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("p-3 m-0 mb-5 text-sm leading-[1.6] text-g-700 bg-g-200 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("px- 1.5 py-0.5 font-mono text-xs text-theme bg-theme/10 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("px- 1.5 py-0.5 font-mono text-xs text-theme bg-theme/10 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("m-0 mb-2 text-sm font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-h-30 p-3 overflow-y-auto font-mono text-xs break-all whitespace-pre-wrap bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({});
    (JSON.stringify(__VLS_ctx.backendAuthList, null, 2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ type: ("primary"), plain: (true), }));
    const __VLS_62 = __VLS_61({ type: ("primary"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_asFunctionalDirective(__VLS_directives.vAuth)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: ('add') }, null, null);
    __VLS_nonNullable(__VLS_65.slots).default;
    var __VLS_65;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ type: ("warning"), plain: (true), }));
    const __VLS_68 = __VLS_67({ type: ("warning"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    __VLS_asFunctionalDirective(__VLS_directives.vAuth)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: ('edit') }, null, null);
    __VLS_nonNullable(__VLS_71.slots).default;
    var __VLS_71;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ type: ("danger"), plain: (true), }));
    const __VLS_74 = __VLS_73({ type: ("danger"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_asFunctionalDirective(__VLS_directives.vAuth)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: ('delete') }, null, null);
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ type: ("info"), plain: (true), }));
    const __VLS_80 = __VLS_79({ type: ("info"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_asFunctionalDirective(__VLS_directives.vAuth)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: ('export') }, null, null);
    __VLS_nonNullable(__VLS_83.slots).default;
    var __VLS_83;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4") }, });
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElAlert;
    /** @type { [typeof __VLS_components.ElAlert, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ type: ((__VLS_ctx.isFrontendMode ? 'warning' : 'success')), title: ((__VLS_ctx.isFrontendMode
            ? '注意：当前为前端模式，v-auth 指令在后端模式下才生效'
            : '当前为后端模式，v-auth 指令正常工作')), showIcon: (true), closable: ((false)), }));
    const __VLS_86 = __VLS_85({ type: ((__VLS_ctx.isFrontendMode ? 'warning' : 'success')), title: ((__VLS_ctx.isFrontendMode
            ? '注意：当前为前端模式，v-auth 指令在后端模式下才生效'
            : '当前为后端模式，v-auth 指令正常工作')), showIcon: (true), closable: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    var __VLS_47;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6 last:mb-0") }, });
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{ class: ("art-card-xs") }, }));
    const __VLS_92 = __VLS_91({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_95.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex-1") }, });
        if (__VLS_ctx.isFrontendMode) {
            const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ type: ("success"), size: ("small"), }));
            const __VLS_98 = __VLS_97({ type: ("success"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
            __VLS_nonNullable(__VLS_101.slots).default;
            var __VLS_101;
        }
        else {
            const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ type: ("info"), size: ("small"), }));
            const __VLS_104 = __VLS_103({ type: ("info"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
            __VLS_nonNullable(__VLS_107.slots).default;
            var __VLS_107;
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("p-3 m-0 mb-5 text-sm leading-[1.6] text-g-700 bg-g-200 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("px- 1.5 py-0.5 font-mono text-xs text-theme bg-theme/10 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("px- 1.5 py-0.5 font-mono text-xs text-theme bg-theme/10 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("m-0 mb-2 text-sm font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-h-30 p-3 overflow-y-auto font-mono text-xs break-all whitespace-pre-wrap bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({});
    (JSON.stringify(__VLS_ctx.frontendAuthList, null, 2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    if (__VLS_ctx.hasAuth('view')) {
        const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ type: ("primary"), }));
        const __VLS_110 = __VLS_109({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
        __VLS_nonNullable(__VLS_113.slots).default;
        var __VLS_113;
    }
    else {
        const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ type: ("info"), disabled: (true), }));
        const __VLS_116 = __VLS_115({ type: ("info"), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
        __VLS_nonNullable(__VLS_119.slots).default;
        var __VLS_119;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ ...{ 'onClick': {} }, disabled: ((!__VLS_ctx.hasAuth('publish'))), type: ((__VLS_ctx.hasAuth('publish') ? 'success' : 'info')), }));
    const __VLS_122 = __VLS_121({ ...{ 'onClick': {} }, disabled: ((!__VLS_ctx.hasAuth('publish'))), type: ((__VLS_ctx.hasAuth('publish') ? 'success' : 'info')), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
    let __VLS_126;
    const __VLS_127 = {
        onClick: (__VLS_ctx.handlePublish)
    };
    let __VLS_123;
    let __VLS_124;
    (__VLS_ctx.hasAuth('publish') ? '发布' : '无发布权限');
    __VLS_nonNullable(__VLS_125.slots).default;
    var __VLS_125;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    const __VLS_128 = __VLS_resolvedLocalAndGlobalComponents.ElDropdown;
    /** @type { [typeof __VLS_components.ElDropdown, typeof __VLS_components.ElDropdown, ] } */
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ ...{ 'onCommand': {} }, disabled: ((!__VLS_ctx.hasBatchPermissions)), }));
    const __VLS_130 = __VLS_129({ ...{ 'onCommand': {} }, disabled: ((!__VLS_ctx.hasBatchPermissions)), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    let __VLS_134;
    const __VLS_135 = {
        onCommand: (__VLS_ctx.handleBatchAction)
    };
    let __VLS_131;
    let __VLS_132;
    const __VLS_136 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ type: ((__VLS_ctx.hasBatchPermissions ? 'warning' : 'info')), }));
    const __VLS_138 = __VLS_137({ type: ((__VLS_ctx.hasBatchPermissions ? 'warning' : 'info')), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    const __VLS_142 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ ...{ class: ("el-icon--right") }, }));
    const __VLS_144 = __VLS_143({ ...{ class: ("el-icon--right") }, }, ...__VLS_functionalComponentArgsRest(__VLS_143));
    const __VLS_148 = __VLS_resolvedLocalAndGlobalComponents.ArrowDown;
    /** @type { [typeof __VLS_components.ArrowDown, ] } */
    // @ts-ignore
    const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({}));
    const __VLS_150 = __VLS_149({}, ...__VLS_functionalComponentArgsRest(__VLS_149));
    __VLS_nonNullable(__VLS_147.slots).default;
    var __VLS_147;
    __VLS_nonNullable(__VLS_141.slots).default;
    var __VLS_141;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { dropdown: __VLS_thisSlot } = __VLS_nonNullable(__VLS_133.slots);
        const __VLS_154 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownMenu;
        /** @type { [typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.ElDropdownMenu, ] } */
        // @ts-ignore
        const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({}));
        const __VLS_156 = __VLS_155({}, ...__VLS_functionalComponentArgsRest(__VLS_155));
        const __VLS_160 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
        // @ts-ignore
        const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({ command: ("batchEdit"), disabled: ((!__VLS_ctx.hasAuth('edit'))), }));
        const __VLS_162 = __VLS_161({ command: ("batchEdit"), disabled: ((!__VLS_ctx.hasAuth('edit'))), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
        __VLS_nonNullable(__VLS_165.slots).default;
        var __VLS_165;
        const __VLS_166 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
        // @ts-ignore
        const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({ command: ("batchDelete"), disabled: ((!__VLS_ctx.hasAuth('delete'))), }));
        const __VLS_168 = __VLS_167({ command: ("batchDelete"), disabled: ((!__VLS_ctx.hasAuth('delete'))), }, ...__VLS_functionalComponentArgsRest(__VLS_167));
        __VLS_nonNullable(__VLS_171.slots).default;
        var __VLS_171;
        const __VLS_172 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
        // @ts-ignore
        const __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, new __VLS_172({ command: ("batchExport"), disabled: ((!__VLS_ctx.hasAuth('export'))), }));
        const __VLS_174 = __VLS_173({ command: ("batchExport"), disabled: ((!__VLS_ctx.hasAuth('export'))), }, ...__VLS_functionalComponentArgsRest(__VLS_173));
        __VLS_nonNullable(__VLS_177.slots).default;
        var __VLS_177;
        __VLS_nonNullable(__VLS_159.slots).default;
        var __VLS_159;
    }
    var __VLS_133;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    var __VLS_95;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6 last:mb-0") }, });
    const __VLS_178 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_179 = __VLS_asFunctionalComponent(__VLS_178, new __VLS_178({ ...{ class: ("art-card-xs") }, }));
    const __VLS_180 = __VLS_179({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_179));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_183.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex-1") }, });
        if (!__VLS_ctx.isFrontendMode) {
            const __VLS_184 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({ type: ("success"), size: ("small"), }));
            const __VLS_186 = __VLS_185({ type: ("success"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_185));
            __VLS_nonNullable(__VLS_189.slots).default;
            var __VLS_189;
        }
        else {
            const __VLS_190 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_191 = __VLS_asFunctionalComponent(__VLS_190, new __VLS_190({ type: ("info"), size: ("small"), }));
            const __VLS_192 = __VLS_191({ type: ("info"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_191));
            __VLS_nonNullable(__VLS_195.slots).default;
            var __VLS_195;
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("p-3 m-0 mb-5 text-sm leading-[1.6] text-g-700 bg-g-200 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("px- 1.5 py-0.5 font-mono text-xs text-theme bg-theme/10 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("px- 1.5 py-0.5 font-mono text-xs text-theme bg-theme/10 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    const __VLS_196 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, ] } */
    // @ts-ignore
    const __VLS_197 = __VLS_asFunctionalComponent(__VLS_196, new __VLS_196({ modelValue: ((__VLS_ctx.dynamicFeatureEnabled)), disabled: ((!__VLS_ctx.hasAuth('config'))), activeText: ("功能开启"), inactiveText: ("功能关闭"), }));
    const __VLS_198 = __VLS_197({ modelValue: ((__VLS_ctx.dynamicFeatureEnabled)), disabled: ((!__VLS_ctx.hasAuth('config'))), activeText: ("功能开启"), inactiveText: ("功能关闭"), }, ...__VLS_functionalComponentArgsRest(__VLS_197));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    if (__VLS_ctx.hasAuth('manage')) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2 p-3 bg-g-200 border-full-d rounded") }, });
        const __VLS_202 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_203 = __VLS_asFunctionalComponent(__VLS_202, new __VLS_202({ type: ("primary"), size: ("small"), }));
        const __VLS_204 = __VLS_203({ type: ("primary"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_203));
        __VLS_nonNullable(__VLS_207.slots).default;
        var __VLS_207;
        const __VLS_208 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_209 = __VLS_asFunctionalComponent(__VLS_208, new __VLS_208({ type: ("warning"), size: ("small"), }));
        const __VLS_210 = __VLS_209({ type: ("warning"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_209));
        __VLS_nonNullable(__VLS_213.slots).default;
        var __VLS_213;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c gap-2 p-3 text-g-500 bg-g-200 border border-dashed border-g-400 rounded") }, });
        const __VLS_214 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
        // @ts-ignore
        const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({}));
        const __VLS_216 = __VLS_215({}, ...__VLS_functionalComponentArgsRest(__VLS_215));
        const __VLS_220 = __VLS_resolvedLocalAndGlobalComponents.Lock;
        /** @type { [typeof __VLS_components.Lock, ] } */
        // @ts-ignore
        const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({}));
        const __VLS_222 = __VLS_221({}, ...__VLS_functionalComponentArgsRest(__VLS_221));
        __VLS_nonNullable(__VLS_219.slots).default;
        var __VLS_219;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-3") }, });
    const __VLS_226 = __VLS_resolvedLocalAndGlobalComponents.ElBadge;
    /** @type { [typeof __VLS_components.ElBadge, typeof __VLS_components.ElBadge, ] } */
    // @ts-ignore
    const __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226({ value: ((__VLS_ctx.hasAuth('add') ? '✓' : '✗')), type: ((__VLS_ctx.hasAuth('add') ? 'success' : 'danger')), }));
    const __VLS_228 = __VLS_227({ value: ((__VLS_ctx.hasAuth('add') ? '✓' : '✗')), type: ((__VLS_ctx.hasAuth('add') ? 'success' : 'danger')), }, ...__VLS_functionalComponentArgsRest(__VLS_227));
    const __VLS_232 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_233 = __VLS_asFunctionalComponent(__VLS_232, new __VLS_232({ size: ("small"), }));
    const __VLS_234 = __VLS_233({ size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_233));
    __VLS_nonNullable(__VLS_237.slots).default;
    var __VLS_237;
    __VLS_nonNullable(__VLS_231.slots).default;
    var __VLS_231;
    const __VLS_238 = __VLS_resolvedLocalAndGlobalComponents.ElBadge;
    /** @type { [typeof __VLS_components.ElBadge, typeof __VLS_components.ElBadge, ] } */
    // @ts-ignore
    const __VLS_239 = __VLS_asFunctionalComponent(__VLS_238, new __VLS_238({ value: ((__VLS_ctx.hasAuth('edit') ? '✓' : '✗')), type: ((__VLS_ctx.hasAuth('edit') ? 'success' : 'danger')), }));
    const __VLS_240 = __VLS_239({ value: ((__VLS_ctx.hasAuth('edit') ? '✓' : '✗')), type: ((__VLS_ctx.hasAuth('edit') ? 'success' : 'danger')), }, ...__VLS_functionalComponentArgsRest(__VLS_239));
    const __VLS_244 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_245 = __VLS_asFunctionalComponent(__VLS_244, new __VLS_244({ size: ("small"), }));
    const __VLS_246 = __VLS_245({ size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_245));
    __VLS_nonNullable(__VLS_249.slots).default;
    var __VLS_249;
    __VLS_nonNullable(__VLS_243.slots).default;
    var __VLS_243;
    const __VLS_250 = __VLS_resolvedLocalAndGlobalComponents.ElBadge;
    /** @type { [typeof __VLS_components.ElBadge, typeof __VLS_components.ElBadge, ] } */
    // @ts-ignore
    const __VLS_251 = __VLS_asFunctionalComponent(__VLS_250, new __VLS_250({ value: ((__VLS_ctx.hasAuth('delete') ? '✓' : '✗')), type: ((__VLS_ctx.hasAuth('delete') ? 'success' : 'danger')), }));
    const __VLS_252 = __VLS_251({ value: ((__VLS_ctx.hasAuth('delete') ? '✓' : '✗')), type: ((__VLS_ctx.hasAuth('delete') ? 'success' : 'danger')), }, ...__VLS_functionalComponentArgsRest(__VLS_251));
    const __VLS_256 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_257 = __VLS_asFunctionalComponent(__VLS_256, new __VLS_256({ size: ("small"), }));
    const __VLS_258 = __VLS_257({ size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_257));
    __VLS_nonNullable(__VLS_261.slots).default;
    var __VLS_261;
    __VLS_nonNullable(__VLS_255.slots).default;
    var __VLS_255;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("block p-1 px-2 mb-1 font-mono bg-g-200 border-full-d rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-700") }, });
    var __VLS_183;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6 last:mb-0") }, });
    const __VLS_262 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_263 = __VLS_asFunctionalComponent(__VLS_262, new __VLS_262({ ...{ class: ("art-card-xs") }, }));
    const __VLS_264 = __VLS_263({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_263));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_267.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex-1") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4") }, });
    const __VLS_268 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.ElTable, ] } */
    // @ts-ignore
    const __VLS_269 = __VLS_asFunctionalComponent(__VLS_268, new __VLS_268({ data: ((__VLS_ctx.comparisonData)), border: (true), }));
    const __VLS_270 = __VLS_269({ data: ((__VLS_ctx.comparisonData)), border: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_269));
    const __VLS_274 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_275 = __VLS_asFunctionalComponent(__VLS_274, new __VLS_274({ prop: ("feature"), label: ("功能特性"), width: ("150"), }));
    const __VLS_276 = __VLS_275({ prop: ("feature"), label: ("功能特性"), width: ("150"), }, ...__VLS_functionalComponentArgsRest(__VLS_275));
    const __VLS_280 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_281 = __VLS_asFunctionalComponent(__VLS_280, new __VLS_280({ prop: ("frontend"), label: ("前端模式"), }));
    const __VLS_282 = __VLS_281({ prop: ("frontend"), label: ("前端模式"), }, ...__VLS_functionalComponentArgsRest(__VLS_281));
    const __VLS_286 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, ] } */
    // @ts-ignore
    const __VLS_287 = __VLS_asFunctionalComponent(__VLS_286, new __VLS_286({ prop: ("backend"), label: ("后端模式"), }));
    const __VLS_288 = __VLS_287({ prop: ("backend"), label: ("后端模式"), }, ...__VLS_functionalComponentArgsRest(__VLS_287));
    __VLS_nonNullable(__VLS_273.slots).default;
    var __VLS_273;
    var __VLS_267;
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
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['min-w-20'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['min-w-20'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-'];
    __VLS_styleScopedClasses['1.5'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-[repeat(auto-fit,minmax(280px,1fr))]'];
    __VLS_styleScopedClasses['gap-5'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-'];
    __VLS_styleScopedClasses['1.5'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-'];
    __VLS_styleScopedClasses['1.5'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['max-h-30'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['break-all'];
    __VLS_styleScopedClasses['whitespace-pre-wrap'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-[repeat(auto-fit,minmax(280px,1fr))]'];
    __VLS_styleScopedClasses['gap-5'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-'];
    __VLS_styleScopedClasses['1.5'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-'];
    __VLS_styleScopedClasses['1.5'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['max-h-30'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['break-all'];
    __VLS_styleScopedClasses['whitespace-pre-wrap'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-[repeat(auto-fit,minmax(280px,1fr))]'];
    __VLS_styleScopedClasses['gap-5'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['el-icon--right'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-'];
    __VLS_styleScopedClasses['1.5'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-'];
    __VLS_styleScopedClasses['1.5'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['bg-theme/10'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-[repeat(auto-fit,minmax(280px,1fr))]'];
    __VLS_styleScopedClasses['gap-5'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['text-g-500'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['border-g-400'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['mt-4'];
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
            ArrowDown: ArrowDown,
            Lock: Lock,
            hasAuth: hasAuth,
            isFrontendMode: isFrontendMode,
            dynamicFeatureEnabled: dynamicFeatureEnabled,
            currentUserRole: currentUserRole,
            currentUserPermissions: currentUserPermissions,
            frontendAuthList: frontendAuthList,
            backendAuthList: backendAuthList,
            hasBatchPermissions: hasBatchPermissions,
            comparisonData: comparisonData,
            getRoleTagType: getRoleTagType,
            getRoleDisplayName: getRoleDisplayName,
            handlePublish: handlePublish,
            handleBatchAction: handleBatchAction,
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