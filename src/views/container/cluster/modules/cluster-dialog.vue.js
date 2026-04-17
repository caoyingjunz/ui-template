/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const emit = defineEmits();
const dialogVisible = computed({
    get: () => props.visible,
    set: (val) => emit('update:visible', val)
});
const dialogType = computed(() => props.type);
const formRef = ref();
const formData = reactive({
    clusterName: '',
    description: ''
});
const rules = {
    clusterName: [
        { required: true, message: '请输入集群名称', trigger: 'blur' },
        { min: 2, max: 64, message: '长度在 2 到 64 个字符', trigger: 'blur' }
    ]
};
watch(() => [props.visible, props.type, props.clusterData], ([visible]) => {
    if (visible) {
        const row = props.clusterData;
        const isEdit = props.type === 'edit' && row;
        Object.assign(formData, {
            clusterName: isEdit ? row?.clusterName || '' : '',
            description: isEdit ? row?.description || '' : ''
        });
        nextTick(() => formRef.value?.clearValidate());
    }
}, { immediate: true });
async function handleSubmit() {
    if (!formRef.value)
        return;
    await formRef.value.validate((valid) => {
        if (valid) {
            ElMessage.success(dialogType.value === 'add' ? '新增成功' : '更新成功');
            dialogVisible.value = false;
            emit('submit');
        }
    });
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.ElDialog, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.dialogVisible)), title: ((__VLS_ctx.dialogType === 'add' ? '新增集群' : '编辑集群')), width: ("500px"), alignCenter: (true), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.dialogVisible)), title: ((__VLS_ctx.dialogType === 'add' ? '新增集群' : '编辑集群')), width: ("500px"), alignCenter: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.ElForm, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ref: ("formRef"), model: ((__VLS_ctx.formData)), rules: ((__VLS_ctx.rules)), labelWidth: ("90px"), }));
    const __VLS_9 = __VLS_8({ ref: ("formRef"), model: ((__VLS_ctx.formData)), rules: ((__VLS_ctx.rules)), labelWidth: ("90px"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    // @ts-ignore navigation for `const formRef = ref()`
    __VLS_ctx.formRef;
    var __VLS_13 = {};
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ label: ("集群名称"), prop: ("clusterName"), }));
    const __VLS_16 = __VLS_15({ label: ("集群名称"), prop: ("clusterName"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.formData.clusterName)), placeholder: ("请输入集群名称"), }));
    const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.formData.clusterName)), placeholder: ("请输入集群名称"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19;
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ label: ("集群描述"), prop: ("description"), }));
    const __VLS_28 = __VLS_27({ label: ("集群描述"), prop: ("description"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ modelValue: ((__VLS_ctx.formData.description)), type: ("textarea"), rows: ((3)), placeholder: ("请输入集群描述"), }));
    const __VLS_34 = __VLS_33({ modelValue: ((__VLS_ctx.formData.description)), type: ("textarea"), rows: ((3)), placeholder: ("请输入集群描述"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_nonNullable(__VLS_31.slots).default;
    var __VLS_31;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onClick': {} }, }));
        const __VLS_40 = __VLS_39({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
        let __VLS_44;
        const __VLS_45 = {
            onClick: (...[$event]) => {
                __VLS_ctx.dialogVisible = false;
            }
        };
        let __VLS_41;
        let __VLS_42;
        __VLS_nonNullable(__VLS_43.slots).default;
        var __VLS_43;
        const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_48 = __VLS_47({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
        let __VLS_52;
        const __VLS_53 = {
            onClick: (__VLS_ctx.handleSubmit)
        };
        let __VLS_49;
        let __VLS_50;
        __VLS_nonNullable(__VLS_51.slots).default;
        var __VLS_51;
    }
    var __VLS_5;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "formRef": __VLS_13,
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
            dialogVisible: dialogVisible,
            dialogType: dialogType,
            formRef: formRef,
            formData: formData,
            rules: rules,
            handleSubmit: handleSubmit,
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
//# sourceMappingURL=cluster-dialog.vue.js.map