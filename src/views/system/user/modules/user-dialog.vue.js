/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ROLE_LIST_DATA } from '@/mock/temp/formData';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const emit = defineEmits();
// 角色列表数据
const roleList = ref(ROLE_LIST_DATA);
// 对话框显示控制
const dialogVisible = computed({
    get: () => props.visible,
    set: (value) => emit('update:visible', value)
});
const dialogType = computed(() => props.type);
// 表单实例
const formRef = ref();
// 表单数据
const formData = reactive({
    username: '',
    phone: '',
    gender: '男',
    role: []
});
// 表单验证规则
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
    ],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号格式', trigger: 'blur' }
    ],
    gender: [{ required: true, message: '请选择性别', trigger: 'blur' }],
    role: [{ required: true, message: '请选择角色', trigger: 'blur' }]
};
/**
 * 初始化表单数据
 * 根据对话框类型（新增/编辑）填充表单
 */
const initFormData = () => {
    const isEdit = props.type === 'edit' && props.userData;
    const row = props.userData;
    Object.assign(formData, {
        username: isEdit && row ? row.userName || '' : '',
        phone: isEdit && row ? row.userPhone || '' : '',
        gender: isEdit && row ? row.userGender || '男' : '男',
        role: isEdit && row ? (Array.isArray(row.userRoles) ? row.userRoles : []) : []
    });
};
/**
 * 监听对话框状态变化
 * 当对话框打开时初始化表单数据并清除验证状态
 */
watch(() => [props.visible, props.type, props.userData], ([visible]) => {
    if (visible) {
        initFormData();
        nextTick(() => {
            formRef.value?.clearValidate();
        });
    }
}, { immediate: true });
/**
 * 提交表单
 * 验证通过后触发提交事件
 */
const handleSubmit = async () => {
    if (!formRef.value)
        return;
    await formRef.value.validate((valid) => {
        if (valid) {
            ElMessage.success(dialogType.value === 'add' ? '添加成功' : '更新成功');
            dialogVisible.value = false;
            emit('submit');
        }
    });
}; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.dialogVisible)), title: ((__VLS_ctx.dialogType === 'add' ? '添加用户' : '编辑用户')), width: ("30%"), alignCenter: (true), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.dialogVisible)), title: ((__VLS_ctx.dialogType === 'add' ? '添加用户' : '编辑用户')), width: ("30%"), alignCenter: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.ElForm, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ref: ("formRef"), model: ((__VLS_ctx.formData)), rules: ((__VLS_ctx.rules)), labelWidth: ("80px"), }));
    const __VLS_9 = __VLS_8({ ref: ("formRef"), model: ((__VLS_ctx.formData)), rules: ((__VLS_ctx.rules)), labelWidth: ("80px"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    // @ts-ignore navigation for `const formRef = ref()`
    __VLS_ctx.formRef;
    var __VLS_13 = {};
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ label: ("用户名"), prop: ("username"), }));
    const __VLS_16 = __VLS_15({ label: ("用户名"), prop: ("username"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.formData.username)), placeholder: ("请输入用户名"), }));
    const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.formData.username)), placeholder: ("请输入用户名"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19;
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ label: ("手机号"), prop: ("phone"), }));
    const __VLS_28 = __VLS_27({ label: ("手机号"), prop: ("phone"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ modelValue: ((__VLS_ctx.formData.phone)), placeholder: ("请输入手机号"), }));
    const __VLS_34 = __VLS_33({ modelValue: ((__VLS_ctx.formData.phone)), placeholder: ("请输入手机号"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_nonNullable(__VLS_31.slots).default;
    var __VLS_31;
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ label: ("性别"), prop: ("gender"), }));
    const __VLS_40 = __VLS_39({ label: ("性别"), prop: ("gender"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.ElSelect, ] } */
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ modelValue: ((__VLS_ctx.formData.gender)), }));
    const __VLS_46 = __VLS_45({ modelValue: ((__VLS_ctx.formData.gender)), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
    /** @type { [typeof __VLS_components.ElOption, ] } */
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ label: ("男"), value: ("男"), }));
    const __VLS_52 = __VLS_51({ label: ("男"), value: ("男"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
    /** @type { [typeof __VLS_components.ElOption, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ label: ("女"), value: ("女"), }));
    const __VLS_58 = __VLS_57({ label: ("女"), value: ("女"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    __VLS_nonNullable(__VLS_49.slots).default;
    var __VLS_49;
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
    const __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ label: ("角色"), prop: ("role"), }));
    const __VLS_64 = __VLS_63({ label: ("角色"), prop: ("role"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.ElSelect, ] } */
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ modelValue: ((__VLS_ctx.formData.role)), multiple: (true), }));
    const __VLS_70 = __VLS_69({ modelValue: ((__VLS_ctx.formData.role)), multiple: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    for (const [role] of __VLS_getVForSourceType((__VLS_ctx.roleList))) {
        const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, ] } */
        // @ts-ignore
        const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ key: ((role.roleCode)), value: ((role.roleCode)), label: ((role.roleName)), }));
        const __VLS_76 = __VLS_75({ key: ((role.roleCode)), value: ((role.roleCode)), label: ((role.roleName)), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    }
    __VLS_nonNullable(__VLS_73.slots).default;
    var __VLS_73;
    __VLS_nonNullable(__VLS_67.slots).default;
    var __VLS_67;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dialog-footer") }, });
        const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ 'onClick': {} }, }));
        const __VLS_82 = __VLS_81({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_81));
        let __VLS_86;
        const __VLS_87 = {
            onClick: (...[$event]) => {
                __VLS_ctx.dialogVisible = false;
            }
        };
        let __VLS_83;
        let __VLS_84;
        __VLS_nonNullable(__VLS_85.slots).default;
        var __VLS_85;
        const __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_90 = __VLS_89({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
        let __VLS_94;
        const __VLS_95 = {
            onClick: (__VLS_ctx.handleSubmit)
        };
        let __VLS_91;
        let __VLS_92;
        __VLS_nonNullable(__VLS_93.slots).default;
        var __VLS_93;
    }
    var __VLS_5;
    __VLS_styleScopedClasses['dialog-footer'];
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
            roleList: roleList,
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
//# sourceMappingURL=user-dialog.vue.js.map