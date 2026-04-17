/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { useTable } from '@/hooks/core/useTable';
import { fetchGetUserList } from '@/api/system-manage';
import UserSearch from '@/views/system/user2/modules/user-search.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'TreeTable' });
const showButtons = ref(false);
// 树形数据 - 组织架构示例
const treeData = ref([
    {
        id: 1,
        label: '技术部',
        children: [
            {
                id: 11,
                label: '前端开发组',
                children: [
                    { id: 111, label: 'React 团队' },
                    { id: 112, label: 'Vue 团队' },
                    { id: 113, label: '移动端团队' }
                ]
            },
            {
                id: 12,
                label: '后端开发组',
                children: [
                    { id: 121, label: 'Java 团队' },
                    { id: 122, label: 'Node.js 团队' },
                    { id: 123, label: 'Python 团队' }
                ]
            },
            {
                id: 13,
                label: '测试组',
                children: [
                    { id: 131, label: '功能测试' },
                    { id: 132, label: '自动化测试' },
                    { id: 133, label: '性能测试' }
                ]
            },
            {
                id: 14,
                label: '运维组',
                children: [
                    { id: 141, label: '系统运维' },
                    { id: 142, label: 'DevOps' }
                ]
            }
        ]
    },
    {
        id: 2,
        label: '产品部',
        children: [
            {
                id: 21,
                label: '产品设计组',
                children: [
                    { id: 211, label: 'UI 设计' },
                    { id: 212, label: 'UX 设计' },
                    { id: 213, label: '交互设计' }
                ]
            },
            {
                id: 22,
                label: '产品运营组',
                children: [
                    { id: 221, label: '用户运营' },
                    { id: 222, label: '内容运营' },
                    { id: 223, label: '活动运营' }
                ]
            },
            { id: 23, label: '数据分析组' }
        ]
    },
    {
        id: 3,
        label: '市场部',
        children: [
            { id: 31, label: '品牌推广组' },
            { id: 32, label: '渠道拓展组' },
            {
                id: 33,
                label: '销售组',
                children: [
                    { id: 331, label: '企业客户' },
                    { id: 332, label: '个人客户' }
                ]
            }
        ]
    },
    {
        id: 4,
        label: '行政部',
        children: [
            { id: 41, label: '人力资源组' },
            { id: 42, label: '财务组' },
            { id: 43, label: '行政后勤组' }
        ]
    },
    {
        id: 5,
        label: '客服部',
        children: [
            { id: 51, label: '售前咨询' },
            { id: 52, label: '售后支持' },
            { id: 53, label: '客户成功' }
        ]
    }
]);
const treeProps = {
    children: 'children',
    label: 'label'
};
const handleNodeClick = (data) => {
    console.log('选中节点:', data);
    // 可以根据选中的节点更新右侧表格数据
};
// 表单搜索初始值
const defaultFilter = ref({
    userName: undefined,
    userPhone: undefined,
    userEmail: undefined,
    status: undefined
});
const { data, columns, columnChecks, loading, pagination, refreshData, handleSizeChange, handleCurrentChange } = useTable({
    core: {
        apiFn: fetchGetUserList,
        apiParams: {
            current: 1,
            size: 20,
            userName: '',
            userPhone: '',
            userEmail: ''
        },
        columnsFactory: () => [
            {
                prop: 'id',
                label: 'ID'
            },
            {
                prop: 'nickName',
                label: '昵称'
            },
            {
                prop: 'userPhone',
                label: '手机号'
            },
            {
                prop: 'userEmail',
                label: '邮箱'
            }
        ]
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-full-height") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("box-border flex gap-4 h-full max-md:block max-md:gap-0 max-md:h-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-shrink-0 w-58 h-full max-md:w-full max-md:h-auto max-md:mb-5") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("tree-card art-card-xs flex flex-col h-full mt-0") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("tree-card art-card-xs flex flex-col h-full mt-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    }
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.ElScrollbar, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTree;
    /** @type { [typeof __VLS_components.ElTree, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onNodeClick': {} }, data: ((__VLS_ctx.treeData)), props: ((__VLS_ctx.treeProps)), nodeKey: ("id"), defaultExpandAll: (true), highlightCurrent: (true), }));
    const __VLS_14 = __VLS_13({ ...{ 'onNodeClick': {} }, data: ((__VLS_ctx.treeData)), props: ((__VLS_ctx.treeProps)), nodeKey: ("id"), defaultExpandAll: (true), highlightCurrent: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onNodeClick: (__VLS_ctx.handleNodeClick)
    };
    let __VLS_15;
    let __VLS_16;
    var __VLS_17;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col flex-grow min-w-0") }, });
    // @ts-ignore
    [UserSearch,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(UserSearch, new UserSearch({ modelValue: ((__VLS_ctx.defaultFilter)), }));
    const __VLS_21 = __VLS_20({ modelValue: ((__VLS_ctx.defaultFilter)), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{ class: ("flex flex-col flex-1 min-h-0 art-table-card") }, }));
    const __VLS_27 = __VLS_26({ ...{ class: ("flex flex-col flex-1 min-h-0 art-table-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.ArtTableHeader;
    /** @type { [typeof __VLS_components.ArtTableHeader, typeof __VLS_components.ArtTableHeader, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ 'onRefresh': {} }, columns: ((__VLS_ctx.columnChecks)), loading: ((__VLS_ctx.loading)), }));
    const __VLS_33 = __VLS_32({ ...{ 'onRefresh': {} }, columns: ((__VLS_ctx.columnChecks)), loading: ((__VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    let __VLS_37;
    const __VLS_38 = {
        onRefresh: (__VLS_ctx.refreshData)
    };
    let __VLS_34;
    let __VLS_35;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { left: __VLS_thisSlot } = __VLS_nonNullable(__VLS_36.slots);
        const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.ElSpace, ] } */
        // @ts-ignore
        const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ wrap: (true), }));
        const __VLS_41 = __VLS_40({ wrap: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
        const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{ 'onClick': {} }, type: ("primary"), plain: (true), }));
        const __VLS_47 = __VLS_46({ ...{ 'onClick': {} }, type: ("primary"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
        __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
        let __VLS_51;
        const __VLS_52 = {
            onClick: (...[$event]) => {
                __VLS_ctx.showButtons = !__VLS_ctx.showButtons;
            }
        };
        let __VLS_48;
        let __VLS_49;
        (__VLS_ctx.showButtons ? '收起' : '展开');
        __VLS_nonNullable(__VLS_50.slots).default;
        var __VLS_50;
        for (const [value] of __VLS_getVForSourceType((12))) {
            const __VLS_53 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
            // @ts-ignore
            const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ key: ((value)), }));
            const __VLS_55 = __VLS_54({ key: ((value)), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
            __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.showButtons) }, null, null);
            __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
            __VLS_nonNullable(__VLS_58.slots).default;
            var __VLS_58;
        }
        __VLS_nonNullable(__VLS_44.slots).default;
        var __VLS_44;
    }
    var __VLS_36;
    const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.ArtTable;
    /** @type { [typeof __VLS_components.ArtTable, typeof __VLS_components.ArtTable, ] } */
    // @ts-ignore
    const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{ 'onPagination:sizeChange': {} }, ...{ 'onPagination:currentChange': {} }, rowKey: ("id"), loading: ((__VLS_ctx.loading)), data: ((__VLS_ctx.data)), columns: ((__VLS_ctx.columns)), pagination: ((__VLS_ctx.pagination)), }));
    const __VLS_61 = __VLS_60({ ...{ 'onPagination:sizeChange': {} }, ...{ 'onPagination:currentChange': {} }, rowKey: ("id"), loading: ((__VLS_ctx.loading)), data: ((__VLS_ctx.data)), columns: ((__VLS_ctx.columns)), pagination: ((__VLS_ctx.pagination)), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
    let __VLS_65;
    const __VLS_66 = {
        'onPagination:sizeChange': (__VLS_ctx.handleSizeChange)
    };
    const __VLS_67 = {
        'onPagination:currentChange': (__VLS_ctx.handleCurrentChange)
    };
    let __VLS_62;
    let __VLS_63;
    var __VLS_64;
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    __VLS_styleScopedClasses['art-full-height'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['max-md:block'];
    __VLS_styleScopedClasses['max-md:gap-0'];
    __VLS_styleScopedClasses['max-md:h-auto'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-58'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['max-md:w-full'];
    __VLS_styleScopedClasses['max-md:h-auto'];
    __VLS_styleScopedClasses['max-md:mb-5'];
    __VLS_styleScopedClasses['tree-card'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['mt-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['min-w-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['min-h-0'];
    __VLS_styleScopedClasses['art-table-card'];
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
            UserSearch: UserSearch,
            showButtons: showButtons,
            treeData: treeData,
            treeProps: treeProps,
            handleNodeClick: handleNodeClick,
            defaultFilter: defaultFilter,
            data: data,
            columns: columns,
            columnChecks: columnChecks,
            loading: loading,
            pagination: pagination,
            refreshData: refreshData,
            handleSizeChange: handleSizeChange,
            handleCurrentChange: handleCurrentChange,
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
//# sourceMappingURL=tree.vue.js.map