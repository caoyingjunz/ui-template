/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed, ref } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { useI18n } from 'vue-i18n';
import { fetchLogin, fetchGetUserInfo } from '@/api/auth';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'PermissionSwitchRole' });
const { t } = useI18n();
const userStore = useUserStore();
// 响应式数据
const switching = ref(false);
// 当前用户信息
const currentUser = computed(() => userStore.info);
// 账号列表 - 与登录页面保持一致
const accounts = computed(() => [
    {
        key: 'super',
        label: t('login.roles.super'),
        userName: 'Super',
        password: '123456',
        roles: ['R_SUPER'],
        color: '#E6A23C',
        description: '拥有系统最高权限，可以访问所有功能模块'
    },
    {
        key: 'admin',
        label: t('login.roles.admin'),
        userName: 'Admin',
        password: '123456',
        roles: ['R_ADMIN'],
        color: '#409EFF',
        description: '拥有管理权限，可以管理用户和部分系统设置'
    },
    {
        key: 'user',
        label: t('login.roles.user'),
        userName: 'User',
        password: '123456',
        roles: ['R_USER'],
        color: '#67C23A',
        description: '普通用户权限，只能访问基础功能模块'
    }
]);
// 获取角色标签类型
const getRoleTagType = (role) => {
    if (!role)
        return 'info';
    const roleMap = {
        R_SUPER: 'warning',
        R_ADMIN: 'primary',
        R_USER: 'success'
    };
    return roleMap[role] || 'info';
};
// 获取角色显示名称
const getRoleDisplayName = (role) => {
    if (!role)
        return '未知角色';
    const roleMap = {
        R_SUPER: '超级管理员',
        R_ADMIN: '管理员',
        R_USER: '普通用户'
    };
    return roleMap[role] || '未知角色';
};
/**
 * 切换角色
 * @param account 账号信息
 */
const switchRole = async (account) => {
    try {
        switching.value = true;
        // 模拟登录请求
        const { token, refreshToken } = await fetchLogin({
            userName: account.userName,
            password: account.password
        });
        // 验证token
        if (!token) {
            throw new Error('Login failed - no token received');
        }
        // 存储token和用户信息
        userStore.setToken(token, refreshToken);
        const userInfo = await fetchGetUserInfo();
        userStore.setUserInfo(userInfo);
        // 延迟刷新页面以应用新权限
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }
    catch (error) {
        if (error !== 'cancel') {
            ElMessage.error('切换用户身份失败，请稍后重试');
            console.error('[SwitchRole] Error:', error);
        }
    }
    finally {
        switching.value = false;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("m-0 mb-2 text-xl font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 leading-[1.6] text-g-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("art-card-xs") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start mb-3 last:mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("min-w-30 font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.currentUser.userName || '未登录');
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start mb-3 last:mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("min-w-30 font-semibold") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
    /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ((__VLS_ctx.getRoleTagType(__VLS_ctx.currentUser.roles?.[0]))), }));
    const __VLS_8 = __VLS_7({ type: ((__VLS_ctx.getRoleTagType(__VLS_ctx.currentUser.roles?.[0]))), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    (__VLS_ctx.getRoleDisplayName(__VLS_ctx.currentUser.roles?.[0]));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start mb-3 last:mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("min-w-30 font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-2") }, });
    for (const [button] of __VLS_getVForSourceType((__VLS_ctx.currentUser.buttons))) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((button)), size: ("small"), type: ("info"), }));
        const __VLS_14 = __VLS_13({ key: ((button)), size: ("small"), type: ("info"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        (button);
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
    }
    if (!__VLS_ctx.currentUser.buttons?.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("italic text-g-500") }, });
    }
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("art-card-xs") }, }));
    const __VLS_20 = __VLS_19({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_23.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4") }, });
    for (const [account] of __VLS_getVForSourceType((__VLS_ctx.accounts))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((account.key)), ...{ class: ("p-5 border border-g-400 rounded-lg tad-300") }, ...{ class: (({
                    'bg-theme/12 !border-theme': __VLS_ctx.currentUser.userName === account.userName
                })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("m-0 mb-2 text-base font-semibold") }, });
        (account.label);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 mb-2 leading-[1.5] text-g-700") }, });
        (account.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs text-g-600") }, });
        (account.userName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs text-g-600") }, });
        (account.roles.join(', '));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-right") }, });
        if (__VLS_ctx.currentUser.userName !== account.userName) {
            const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
            // @ts-ignore
            const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {} }, type: ("primary"), loading: ((__VLS_ctx.switching)), }));
            const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, type: ("primary"), loading: ((__VLS_ctx.switching)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
            let __VLS_30;
            const __VLS_31 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.currentUser.userName !== account.userName)))
                        return;
                    __VLS_ctx.switchRole(account);
                }
            };
            let __VLS_27;
            let __VLS_28;
            __VLS_nonNullable(__VLS_29.slots).default;
            var __VLS_29;
        }
        else {
            const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ type: ("success"), }));
            const __VLS_34 = __VLS_33({ type: ("success"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
            __VLS_nonNullable(__VLS_37.slots).default;
            var __VLS_37;
        }
    }
    var __VLS_23;
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['min-w-30'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['min-w-30'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['min-w-30'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['text-g-500'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-[repeat(auto-fit,minmax(300px,1fr))]'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-g-400'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['tad-300'];
    __VLS_styleScopedClasses['bg-theme/12'];
    __VLS_styleScopedClasses['!border-theme'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['leading-[1.5]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-1'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['text-right'];
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
            switching: switching,
            currentUser: currentUser,
            accounts: accounts,
            getRoleTagType: getRoleTagType,
            getRoleDisplayName: getRoleDisplayName,
            switchRole: switchRole,
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