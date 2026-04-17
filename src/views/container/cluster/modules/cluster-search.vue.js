const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const emit = defineEmits();
const searchBarRef = ref();
const formData = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
});
const formItems = computed(() => [
    {
        label: '集群名称',
        key: 'clusterName',
        type: 'input',
        placeholder: '请输入集群名称',
        clearable: true
    },
    {
        label: '状态',
        key: 'status',
        type: 'select',
        props: {
            placeholder: '请选择状态',
            options: [
                { label: '运行中', value: '0' },
                { label: '部署中', value: '1' },
                { label: '等待部署', value: '2' },
                { label: '部署失败', value: '3' },
                { label: '集群失联', value: '4' }
            ]
        }
    }
]);
function handleReset() {
    emit('reset');
}
function handleSearch(params) {
    emit('search', params);
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    __typeEmits: {},
});
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtSearchBar;
    /** @type { [typeof __VLS_components.ArtSearchBar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onReset': {} }, ...{ 'onSearch': {} }, ref: ("searchBarRef"), modelValue: ((__VLS_ctx.formData)), items: ((__VLS_ctx.formItems)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onReset': {} }, ...{ 'onSearch': {} }, ref: ("searchBarRef"), modelValue: ((__VLS_ctx.formData)), items: ((__VLS_ctx.formItems)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const searchBarRef = ref()`
    __VLS_ctx.searchBarRef;
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        onReset: (__VLS_ctx.handleReset)
    };
    const __VLS_9 = {
        onSearch: (__VLS_ctx.handleSearch)
    };
    let __VLS_3;
    let __VLS_4;
    var __VLS_5;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "searchBarRef": __VLS_6,
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
            searchBarRef: searchBarRef,
            formData: formData,
            formItems: formItems,
            handleReset: handleReset,
            handleSearch: handleSearch,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=cluster-search.vue.js.map