/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed, nextTick } from 'vue';
import ArtMenuRight from '@/components/core/others/art-menu-right/index.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'TemplateContextMenu' });
const menuRef = ref();
const lastAction = ref('');
/**
 * 右键菜单选项配置
 */
const menuItems = computed(() => [
    {
        key: 'copy',
        label: '复制',
        icon: 'ri:file-copy-line'
    },
    {
        key: 'paste',
        label: '粘贴',
        icon: 'ri:capsule-line'
    },
    {
        key: 'cut',
        label: '剪切',
        icon: 'ri:clipboard-line',
        showLine: true
    },
    {
        key: 'export',
        label: '导出选项',
        icon: 'ri:export-line',
        children: [
            {
                key: 'exportExcel',
                label: '导出 Excel',
                icon: 'ri:file-excel-2-line'
            },
            {
                key: 'exportPdf',
                label: '导出 PDF',
                icon: 'ri:file-pdf-2-line'
            }
        ]
    },
    {
        key: 'edit',
        label: '编辑选项',
        icon: 'ri:edit-2-line',
        children: [
            {
                key: 'rename',
                label: '重命名'
            },
            {
                key: 'duplicate',
                label: '复制副本'
            }
        ]
    },
    {
        key: 'share',
        label: '分享',
        icon: 'ri:share-forward-line',
        showLine: true
    },
    {
        key: 'delete',
        label: '删除',
        icon: 'ri:delete-bin-line'
    },
    {
        key: 'disabled',
        label: '禁用选项',
        icon: 'ri:close-circle-line',
        disabled: true
    }
]);
/**
 * 处理菜单项选择
 * @param item 选中的菜单项
 */
const handleSelect = (item) => {
    lastAction.value = `${item.label} (${item.key})`;
    ElMessage.success(`执行操作: ${item.label}`);
    console.log('选择了菜单项:', item);
};
/**
 * 显示右键菜单
 * @param e 鼠标事件
 */
const showMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    nextTick(() => {
        menuRef.value?.show(e);
    });
};
/**
 * 菜单显示回调
 */
const onMenuShow = () => {
    console.log('菜单显示');
};
/**
 * 菜单隐藏回调
 */
const onMenuHide = () => {
    console.log('菜单隐藏');
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onContextmenu': {} }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onContextmenu': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onContextmenu: (__VLS_ctx.showMenu)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    // @ts-ignore
    [ArtMenuRight,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(ArtMenuRight, new ArtMenuRight({ ...{ 'onSelect': {} }, ...{ 'onShow': {} }, ...{ 'onHide': {} }, ref: ("menuRef"), menuItems: ((__VLS_ctx.menuItems)), menuWidth: ((180)), submenuWidth: ((140)), borderRadius: ((10)), }));
    const __VLS_9 = __VLS_8({ ...{ 'onSelect': {} }, ...{ 'onShow': {} }, ...{ 'onHide': {} }, ref: ("menuRef"), menuItems: ((__VLS_ctx.menuItems)), menuWidth: ((180)), submenuWidth: ((140)), borderRadius: ((10)), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    // @ts-ignore navigation for `const menuRef = ref()`
    __VLS_ctx.menuRef;
    var __VLS_13 = {};
    let __VLS_14;
    const __VLS_15 = {
        onSelect: (__VLS_ctx.handleSelect)
    };
    const __VLS_16 = {
        onShow: (__VLS_ctx.onMenuShow)
    };
    const __VLS_17 = {
        onHide: (__VLS_ctx.onMenuHide)
    };
    let __VLS_10;
    let __VLS_11;
    var __VLS_12;
    __VLS_styleScopedClasses['page-content'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "menuRef": __VLS_13,
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
            ArtMenuRight: ArtMenuRight,
            menuRef: menuRef,
            menuItems: menuItems,
            handleSelect: handleSelect,
            showMenu: showMenu,
            onMenuShow: onMenuShow,
            onMenuHide: onMenuHide,
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