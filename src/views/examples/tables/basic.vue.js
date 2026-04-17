/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { useTable } from '@/hooks/core/useTable';
import { fetchGetUserList } from '@/api/system-manage';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'UserMixedUsageExample' });
const { data, columns, loading, pagination, handleSizeChange, handleCurrentChange } = useTable({
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
                prop: 'userGender',
                label: '性别',
                sortable: true,
                formatter: (row) => row.userGender || '未知'
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-page art-full-height") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("art-table-card") }, ...{ style: ({}) }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("art-table-card") }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ArtTable;
    /** @type { [typeof __VLS_components.ArtTable, typeof __VLS_components.ArtTable, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onPagination:sizeChange': {} }, ...{ 'onPagination:currentChange': {} }, rowKey: ("id"), showTableHeader: ((false)), loading: ((__VLS_ctx.loading)), data: ((__VLS_ctx.data)), columns: ((__VLS_ctx.columns)), pagination: ((__VLS_ctx.pagination)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onPagination:sizeChange': {} }, ...{ 'onPagination:currentChange': {} }, rowKey: ("id"), showTableHeader: ((false)), loading: ((__VLS_ctx.loading)), data: ((__VLS_ctx.data)), columns: ((__VLS_ctx.columns)), pagination: ((__VLS_ctx.pagination)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        'onPagination:sizeChange': (__VLS_ctx.handleSizeChange)
    };
    const __VLS_14 = {
        'onPagination:currentChange': (__VLS_ctx.handleCurrentChange)
    };
    let __VLS_9;
    let __VLS_10;
    var __VLS_11;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['user-page'];
    __VLS_styleScopedClasses['art-full-height'];
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
            data: data,
            columns: columns,
            loading: loading,
            pagination: pagination,
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
//# sourceMappingURL=basic.vue.js.map