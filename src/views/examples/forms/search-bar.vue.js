/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ElInput } from 'element-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits();
const FETCH_DELAY = 500;
const searchBarBasicRef = ref();
const searchBarAdvancedRef = ref();
/**
 * 基础示例表单数据
 */
const formDataBasic = ref({
    name: undefined,
    phone: undefined,
    level: undefined,
    address: undefined,
    date: undefined,
    daterange: undefined,
    status: undefined
});
/**
 * 完整示例表单数据
 */
const formDataAdvanced = ref({
    name: undefined,
    phone: undefined,
    level: undefined,
    address: undefined,
    slots: undefined,
    date: undefined,
    daterange: undefined,
    cascader: undefined,
    checkboxgroup: undefined,
    userGender: undefined,
    iconSelector: undefined,
    status: undefined,
    systemName: undefined
});
/**
 * 完整示例校验规则
 */
const rulesAdvanced = {
    name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' },
        { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
    ],
    level: [{ required: true, message: '请选择等级', trigger: 'change' }],
    address: [{ required: true, message: '请输入地址', trigger: 'blur' }]
};
const labelWidthAdvanced = ref(100);
const labelPositionAdvanced = ref('right');
const spanAdvanced = ref(6);
const gutterAdvanced = ref(12);
const levelOptions = ref([]);
/**
 * 用户等级选项
 */
const LEVEL_OPTIONS = [
    { label: '普通用户', value: 'normal' },
    { label: 'VIP用户', value: 'vip' },
    { label: '高级VIP', value: 'svip' },
    { label: '企业用户', value: 'enterprise', disabled: true }
];
/**
 * 性别选项
 */
const GENDER_OPTIONS = [
    { label: '男', value: '1' },
    { label: '女', value: '2' }
];
/**
 * 日期快捷选项
 */
const DATE_SHORTCUTS = [
    { text: '今日', value: new Date() },
    { text: '昨日', value: () => new Date(Date.now() - 86400000) },
    { text: '一周前', value: () => new Date(Date.now() - 604800000) }
];
/**
 * 模拟接口获取用户等级数据
 * @returns 用户等级选项列表
 */
const fetchLevelOptions = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LEVEL_OPTIONS);
        }, FETCH_DELAY);
    });
};
/**
 * 获取用户等级数据
 */
const getLevelOptions = async () => {
    levelOptions.value = await fetchLevelOptions();
    if (levelOptions.value.length) {
        ElMessage.success('成功获取到数据');
    }
};
/**
 * 创建表单项的工厂函数
 */
const createFormItem = (config) => config;
// 基础表单项配置
const baseFormItems = {
    username: createFormItem({
        label: '用户名',
        key: 'name',
        type: 'input',
        placeholder: '请输入用户名',
        clearable: true
    }),
    phone: createFormItem({
        label: '手机号',
        key: 'phone',
        type: 'input',
        props: { placeholder: '请输入手机号', maxlength: '11' }
    }),
    level: createFormItem({
        label: '用户等级',
        key: 'level',
        type: 'select',
        props: {
            placeholder: '请选择等级',
            options: LEVEL_OPTIONS
        }
    }),
    address: createFormItem({
        label: '地址',
        key: 'address',
        type: 'input',
        placeholder: '请输入地址'
    }),
    date: createFormItem({
        label: '日期',
        key: 'date',
        type: 'datetime',
        props: {
            style: { width: '100%' },
            placeholder: '请选择日期',
            type: 'date',
            valueFormat: 'YYYY-MM-DD',
            shortcuts: DATE_SHORTCUTS
        }
    }),
    gender: createFormItem({
        label: '性别',
        key: 'userGender',
        type: 'radiogroup',
        props: {
            options: GENDER_OPTIONS
        }
    })
};
// 表单配置
const formItemsBasic = computed(() => [
    baseFormItems.username,
    {
        label: '密码',
        key: 'password',
        type: 'input',
        props: {
            type: 'password',
            placeholder: '请输入密码',
            clearable: true
        }
    },
    baseFormItems.phone,
    baseFormItems.level,
    baseFormItems.address,
    baseFormItems.date,
    baseFormItems.gender
]);
const userItem = ref({
    label: '用户名',
    key: 'name',
    type: 'input',
    props: {
        placeholder: '请输入用户名',
        clearable: true
    }
});
// 控制用户名字段是否显示
const showUserName = ref(true);
// 动态表单项列表
const dynamicFormItems = ref([]);
// 动态表单项计数器（用于生成唯一 key）
let dynamicItemCounter = 0;
// 级联选择器数据
const cascaderOptions = [
    {
        value: 'guide',
        label: '指南',
        children: [
            {
                value: 'disciplines',
                label: '规范',
                children: [
                    { value: 'consistency', label: '一致性' },
                    { value: 'feedback', label: '反馈' },
                    { value: 'efficiency', label: '效率' },
                    { value: 'controllability', label: '可控性' }
                ]
            }
        ]
    },
    {
        value: 'components',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: '基础组件',
                children: [
                    { value: 'button', label: '按钮' },
                    { value: 'form', label: '表单' },
                    { value: 'table', label: '表格' }
                ]
            }
        ]
    }
];
// 树选择器数据
const treeSelectData = [
    {
        value: '1',
        label: '一级 1',
        children: [
            {
                value: '1-1',
                label: '二级 1-1',
                children: [{ value: '1-1-1', label: '三级 1-1-1' }]
            }
        ]
    },
    {
        value: '2',
        label: '一级 2',
        children: [
            {
                value: '2-1',
                label: '二级 2-1',
                children: [{ value: '2-1-1', label: '三级 2-1-1' }]
            },
            {
                value: '2-2',
                label: '二级 2-2',
                children: [{ value: '2-2-1', label: '三级 2-2-1' }]
            }
        ]
    }
];
// 复选框选项
const checkboxOptions = [
    { label: '选项1', value: 'option1' },
    { label: '选项2', value: 'option2' },
    { label: '选项3', value: 'option3' },
    { label: '选项4', value: 'option4' },
    { label: '选项5（disabled）', value: 'option5', disabled: true }
];
// 完整示例表单配置
const formItemsAdvanced = computed(() => [
    ...(showUserName.value ? [userItem.value] : []),
    // 动态表单项
    ...dynamicFormItems.value,
    {
        ...baseFormItems.phone
    },
    {
        ...baseFormItems.level,
        props: { placeholder: '请选择等级', options: levelOptions.value }
    },
    baseFormItems.address,
    baseFormItems.date,
    // 日期时间
    {
        label: '日期时间',
        key: 'datetime',
        type: 'datetime',
        props: {
            style: { width: '100%' },
            placeholder: '请选择日期时间',
            type: 'datetime',
            valueFormat: 'YYYY-MM-DD HH:mm:ss'
        }
    },
    {
        label: '日期范围',
        key: 'daterange',
        type: 'datetime',
        props: {
            type: 'daterange',
            valueFormat: 'YYYY-MM-DD',
            rangeSeparator: '至',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期'
        }
    },
    // 日期时间范围
    {
        label: '日期时间范围',
        key: 'datetimerange',
        type: 'datetime',
        props: {
            type: 'datetimerange',
            valueFormat: 'YYYY-MM-DD HH:mm:ss',
            rangeSeparator: '至',
            startPlaceholder: '开始日期时间',
            endPlaceholder: '结束日期时间'
        }
    },
    // 时间选择
    {
        label: '时间选择',
        key: 'timeselect',
        type: 'timeselect',
        props: {
            placeholder: '请选择时间',
            type: 'time',
            valueFormat: 'HH:mm:ss'
        }
    },
    // 时间选择器
    {
        label: '时间选择器',
        key: 'timepicker',
        type: 'timepicker',
        props: {
            style: { width: '100%' },
            placeholder: '请选择时间',
            type: 'time',
            valueFormat: 'HH:mm:ss'
        }
    },
    // 级联选择
    {
        label: '级联选择',
        key: 'cascader',
        type: 'cascader',
        props: {
            placeholder: '请选择级联选择器',
            clearable: true,
            style: { width: '100%' },
            collapseTags: true,
            maxCollapseTags: 1,
            props: { multiple: true },
            options: cascaderOptions
        }
    },
    // 树型选择器
    {
        label: '树型选择器',
        key: 'treeSelect',
        type: 'treeselect',
        props: {
            showCheckbox: true,
            multiple: true,
            clearable: true,
            data: treeSelectData
        }
    },
    { label: '插槽', key: 'slots', type: 'input', placeholder: '请输入邮箱' },
    {
        label: '渲染组件',
        key: 'iconSelector',
        render: () => h(ElInput, { placeholder: '渲染自定义 input' })
    },
    {
        label: '自定义组件',
        key: 'customComponent',
        render: () => h('div', {
            style: 'color: var(--art-gray-600); border: 1px solid var(--default-border-dashed); padding: 0px 15px; border-radius: 6px'
        }, '我是一个自定义组件')
    },
    {
        label: '复选框',
        key: 'checkboxgroup',
        type: 'checkboxgroup',
        span: 12,
        props: {
            options: checkboxOptions
        }
    },
    {
        ...baseFormItems.gender
    },
    {
        label: '是否启用',
        key: 'isEnabled',
        type: 'switch',
        props: {
            placeholder: '请选择是否启用'
        }
    },
    {
        label: '年龄',
        key: 'age',
        type: 'number',
        slots: {
            suffix: () => h('span', { style: 'color: #909399; font-size: 12px' }, '岁')
        }
    },
    {
        label: '网站地址',
        key: 'website',
        type: 'input',
        placeholder: '请输入网站名称',
        slots: {
            prepend: () => h('span', 'https://'),
            append: () => h('span', '.com')
        }
    },
    {
        label: '事件演示',
        key: 'event',
        type: 'input',
        props: {
            placeholder: '输入内容触发事件，控制台查看',
            clearable: true,
            prefixIcon: 'Search',
            // prefix: () => h('span', {}, '123'),
            // 事件必须以 on 开头，然后驼峰式命名拼接 ElementPlus 事件名
            onInput(val) {
                console.log('输入事件', val);
            },
            onClear() {
                console.log('清空事件');
            }
        }
    },
    {
        label: '多行输入',
        key: 'remark',
        type: 'input',
        props: {
            placeholder: '请输入备注',
            type: 'textarea',
            rows: 2
        }
    },
    {
        label: '评分',
        key: 'rate',
        type: 'rate',
        props: {
            size: 'large',
            placeholder: '请选择评分'
        }
    },
    {
        label: '禁用',
        key: 'diaabled',
        type: 'input',
        placeholder: '我被禁用了',
        disabled: true // 禁用
    },
    {
        label: '滑块',
        key: 'slider',
        type: 'slider'
        // props: {
        //   step: 10,
        //   showStops: true
        // }
    },
    {
        label: '隐藏',
        key: 'email',
        type: 'input',
        hidden: true
    },
    // 根据条件隐藏
    {
        label: '根据条件隐藏',
        key: 'systemName',
        type: 'input',
        hidden: formDataAdvanced.value.systemName === 'mac',
        placeholder: '输入 mac 组件隐藏'
    },
    {
        label: '栅格布局',
        key: 'sg1',
        type: 'input',
        span: 12,
        placeholder: '示例：栅格 span=12 占容器一半宽度，span=24 占满容器'
    }
]);
/**
 * 创建统一的表单处理函数
 * @param ref 表单引用
 * @param formData 表单数据
 * @param type 表单类型描述
 */
const createFormHandler = (ref, formData, type) => ({
    reset: () => {
        console.log(`重置${type}表单`);
        emit('reset');
    },
    search: async () => {
        await ref.value.validate();
        emit('search', formData.value);
        console.log(`${type}表单数据`, formData.value);
    },
    validate: () => ref.value.validate()
});
/**
 * 基础表单处理器
 */
const basicFormHandler = computed(() => createFormHandler(searchBarBasicRef, formDataBasic, '基础'));
/**
 * 完整表单处理器
 */
const advancedFormHandler = computed(() => createFormHandler(searchBarAdvancedRef, formDataAdvanced, '完整'));
/**
 * 处理基础表单重置事件
 */
const handleBasicReset = () => basicFormHandler.value.reset();
/**
 * 处理基础表单搜索事件
 */
const handleBasicSearch = () => basicFormHandler.value.search();
/**
 * 处理完整表单重置事件
 */
const handleAdvancedReset = () => advancedFormHandler.value.reset();
/**
 * 处理完整表单搜索事件
 */
const handleAdvancedSearch = () => advancedFormHandler.value.search();
/**
 * 校验完整表单
 */
const advancedValidate = () => advancedFormHandler.value.validate();
/**
 * 重置完整表单
 */
const advancedReset = () => searchBarAdvancedRef.value.reset();
/**
 * 更新用户名字段配置
 */
const updateUserName = () => {
    userItem.value = {
        ...userItem.value,
        label: '昵称',
        props: {
            placeholder: '请输入昵称'
        }
    };
};
/**
 * 删除用户名字段
 */
const deleteUserName = () => {
    showUserName.value = false;
    formDataAdvanced.value.name = undefined;
};
/**
 * 新增表单项
 */
const addFormItem = () => {
    dynamicItemCounter++;
    const newItem = {
        label: `动态字段${dynamicItemCounter}`,
        key: `dynamic_${dynamicItemCounter}`,
        type: 'input',
        props: {
            placeholder: `请输入动态字段${dynamicItemCounter}`,
            clearable: true
        }
    };
    dynamicFormItems.value.push(newItem);
    ElMessage.success(`已新增表单项：${newItem.label}`);
};
/**
 * 修改表单项（修改最后一个动态表单项）
 */
const updateFormItem = () => {
    if (dynamicFormItems.value.length === 0) {
        ElMessage.warning('没有可修改的动态表单项，请先新增');
        return;
    }
    const lastIndex = dynamicFormItems.value.length - 1;
    const lastItem = dynamicFormItems.value[lastIndex];
    // 修改最后一个表单项的配置
    dynamicFormItems.value[lastIndex] = {
        ...lastItem,
        label: `已修改`,
        type: 'select',
        props: {
            placeholder: '修改为下拉选择',
            options: [
                { label: '选项A', value: 'a' },
                { label: '选项B', value: 'b' },
                { label: '选项C', value: 'c' }
            ]
        }
    };
    ElMessage.success(`已修改表单项：${lastItem.label}`);
};
/**
 * 删除表单项（删除最后一个动态表单项）
 */
const deleteFormItem = () => {
    if (dynamicFormItems.value.length === 0) {
        ElMessage.warning('没有可删除的动态表单项');
        return;
    }
    const deletedItem = dynamicFormItems.value.pop();
    if (deletedItem) {
        // 清除对应的表单数据
        delete formDataAdvanced.value[deletedItem.key];
        ElMessage.success(`已删除表单项：${deletedItem.label}`);
    }
};
/**
 * 批量新增表单项
 */
const batchAddFormItems = () => {
    const batchItems = [
        {
            label: '公司名称',
            key: `company_${++dynamicItemCounter}`,
            type: 'input',
            props: {
                placeholder: '请输入公司名称',
                clearable: true
            }
        },
        {
            label: '部门',
            key: `department_${++dynamicItemCounter}`,
            type: 'select',
            props: {
                placeholder: '请选择部门',
                options: [
                    { label: '技术部', value: 'tech' },
                    { label: '产品部', value: 'product' },
                    { label: '运营部', value: 'operation' }
                ]
            }
        },
        {
            label: '入职日期',
            key: `joinDate_${++dynamicItemCounter}`,
            type: 'datetime',
            props: {
                style: { width: '100%' },
                placeholder: '请选择入职日期',
                type: 'date',
                valueFormat: 'YYYY-MM-DD'
            }
        }
    ];
    dynamicFormItems.value.push(...batchItems);
    ElMessage.success(`已批量新增 ${batchItems.length} 个表单项`);
};
/**
 * 重置动态表单项
 */
const resetDynamicItems = () => {
    if (dynamicFormItems.value.length === 0) {
        ElMessage.info('当前没有动态表单项');
        return;
    }
    // 清除所有动态表单项的数据
    dynamicFormItems.value.forEach((item) => {
        delete formDataAdvanced.value[item.key];
    });
    dynamicFormItems.value = [];
    dynamicItemCounter = 0;
    ElMessage.success('已重置所有动态表单项');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("mb-1 text-lg font-medium") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtSearchBar;
    /** @type { [typeof __VLS_components.ArtSearchBar, typeof __VLS_components.ArtSearchBar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onReset': {} }, ...{ 'onSearch': {} }, ref: ("searchBarBasicRef"), modelValue: ((__VLS_ctx.formDataBasic)), items: ((__VLS_ctx.formItemsBasic)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onReset': {} }, ...{ 'onSearch': {} }, ref: ("searchBarBasicRef"), modelValue: ((__VLS_ctx.formDataBasic)), items: ((__VLS_ctx.formItemsBasic)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const searchBarBasicRef = ref()`
    __VLS_ctx.searchBarBasicRef;
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        onReset: (__VLS_ctx.handleBasicReset)
    };
    const __VLS_9 = {
        onSearch: (__VLS_ctx.handleBasicSearch)
    };
    let __VLS_3;
    let __VLS_4;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("mb-1 mt-3.5 text-lg font-medium") }, });
    const __VLS_10 = __VLS_resolvedLocalAndGlobalComponents.ArtSearchBar;
    /** @type { [typeof __VLS_components.ArtSearchBar, typeof __VLS_components.ArtSearchBar, ] } */
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ 'onReset': {} }, ...{ 'onSearch': {} }, ref: ("searchBarAdvancedRef"), modelValue: ((__VLS_ctx.formDataAdvanced)), items: ((__VLS_ctx.formItemsAdvanced)), rules: ((__VLS_ctx.rulesAdvanced)), defaultExpanded: ((true)), labelWidth: ((__VLS_ctx.labelWidthAdvanced)), labelPosition: ((__VLS_ctx.labelPositionAdvanced)), span: ((__VLS_ctx.spanAdvanced)), gutter: ((__VLS_ctx.gutterAdvanced)), }));
    const __VLS_12 = __VLS_11({ ...{ 'onReset': {} }, ...{ 'onSearch': {} }, ref: ("searchBarAdvancedRef"), modelValue: ((__VLS_ctx.formDataAdvanced)), items: ((__VLS_ctx.formItemsAdvanced)), rules: ((__VLS_ctx.rulesAdvanced)), defaultExpanded: ((true)), labelWidth: ((__VLS_ctx.labelWidthAdvanced)), labelPosition: ((__VLS_ctx.labelPositionAdvanced)), span: ((__VLS_ctx.spanAdvanced)), gutter: ((__VLS_ctx.gutterAdvanced)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    // @ts-ignore navigation for `const searchBarAdvancedRef = ref()`
    __VLS_ctx.searchBarAdvancedRef;
    var __VLS_16 = {};
    let __VLS_17;
    const __VLS_18 = {
        onReset: (__VLS_ctx.handleAdvancedReset)
    };
    const __VLS_19 = {
        onSearch: (__VLS_ctx.handleAdvancedSearch)
    };
    let __VLS_13;
    let __VLS_14;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { slots: __VLS_thisSlot } = __VLS_nonNullable(__VLS_15.slots);
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.formDataAdvanced.slots)), placeholder: ("我是插槽渲染出来的组件"), }));
        const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.formDataAdvanced.slots)), placeholder: ("我是插槽渲染出来的组件"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    }
    var __VLS_15;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card p-5 !rounded-lg mt-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({});
    (__VLS_ctx.formDataAdvanced);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2 text-base font-medium") }, });
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.ElSpace, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ wrap: (true), ...{ class: ("mb-3") }, }));
    const __VLS_28 = __VLS_27({ wrap: (true), ...{ class: ("mb-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, }));
    const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    let __VLS_38;
    const __VLS_39 = {
        onClick: (__VLS_ctx.getLevelOptions)
    };
    let __VLS_35;
    let __VLS_36;
    __VLS_nonNullable(__VLS_37.slots).default;
    var __VLS_37;
    const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {} }, }));
    const __VLS_42 = __VLS_41({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    let __VLS_46;
    const __VLS_47 = {
        onClick: (__VLS_ctx.addFormItem)
    };
    let __VLS_43;
    let __VLS_44;
    __VLS_nonNullable(__VLS_45.slots).default;
    var __VLS_45;
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, }));
    const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    let __VLS_54;
    const __VLS_55 = {
        onClick: (__VLS_ctx.updateFormItem)
    };
    let __VLS_51;
    let __VLS_52;
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{ 'onClick': {} }, }));
    const __VLS_58 = __VLS_57({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    let __VLS_62;
    const __VLS_63 = {
        onClick: (__VLS_ctx.deleteFormItem)
    };
    let __VLS_59;
    let __VLS_60;
    __VLS_nonNullable(__VLS_61.slots).default;
    var __VLS_61;
    const __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{ 'onClick': {} }, }));
    const __VLS_66 = __VLS_65({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    let __VLS_70;
    const __VLS_71 = {
        onClick: (__VLS_ctx.batchAddFormItems)
    };
    let __VLS_67;
    let __VLS_68;
    __VLS_nonNullable(__VLS_69.slots).default;
    var __VLS_69;
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onClick': {} }, }));
    const __VLS_74 = __VLS_73({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    let __VLS_78;
    const __VLS_79 = {
        onClick: (__VLS_ctx.resetDynamicItems)
    };
    let __VLS_75;
    let __VLS_76;
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    __VLS_nonNullable(__VLS_31.slots).default;
    var __VLS_31;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2 text-base font-medium") }, });
    const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.ElSpace, ] } */
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ wrap: (true), }));
    const __VLS_82 = __VLS_81({ wrap: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{ 'onClick': {} }, }));
    const __VLS_88 = __VLS_87({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    let __VLS_92;
    const __VLS_93 = {
        onClick: (__VLS_ctx.advancedValidate)
    };
    let __VLS_89;
    let __VLS_90;
    __VLS_nonNullable(__VLS_91.slots).default;
    var __VLS_91;
    const __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ ...{ 'onClick': {} }, }));
    const __VLS_96 = __VLS_95({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_95));
    let __VLS_100;
    const __VLS_101 = {
        onClick: (__VLS_ctx.advancedReset)
    };
    let __VLS_97;
    let __VLS_98;
    __VLS_nonNullable(__VLS_99.slots).default;
    var __VLS_99;
    if (__VLS_ctx.showUserName) {
        const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ ...{ 'onClick': {} }, }));
        const __VLS_104 = __VLS_103({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_103));
        let __VLS_108;
        const __VLS_109 = {
            onClick: (__VLS_ctx.updateUserName)
        };
        let __VLS_105;
        let __VLS_106;
        __VLS_nonNullable(__VLS_107.slots).default;
        var __VLS_107;
    }
    if (__VLS_ctx.showUserName) {
        const __VLS_110 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ ...{ 'onClick': {} }, }));
        const __VLS_112 = __VLS_111({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_111));
        let __VLS_116;
        const __VLS_117 = {
            onClick: (__VLS_ctx.deleteUserName)
        };
        let __VLS_113;
        let __VLS_114;
        __VLS_nonNullable(__VLS_115.slots).default;
        var __VLS_115;
    }
    const __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ ...{ 'onClick': {} }, }));
    const __VLS_120 = __VLS_119({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_119));
    let __VLS_124;
    const __VLS_125 = {
        onClick: (...[$event]) => {
            __VLS_ctx.labelWidthAdvanced = 120;
        }
    };
    let __VLS_121;
    let __VLS_122;
    __VLS_nonNullable(__VLS_123.slots).default;
    var __VLS_123;
    const __VLS_126 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ ...{ 'onClick': {} }, }));
    const __VLS_128 = __VLS_127({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    let __VLS_132;
    const __VLS_133 = {
        onClick: (...[$event]) => {
            __VLS_ctx.spanAdvanced = 8;
        }
    };
    let __VLS_129;
    let __VLS_130;
    __VLS_nonNullable(__VLS_131.slots).default;
    var __VLS_131;
    const __VLS_134 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ ...{ 'onClick': {} }, }));
    const __VLS_136 = __VLS_135({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    let __VLS_140;
    const __VLS_141 = {
        onClick: (...[$event]) => {
            __VLS_ctx.gutterAdvanced = 50;
        }
    };
    let __VLS_137;
    let __VLS_138;
    __VLS_nonNullable(__VLS_139.slots).default;
    var __VLS_139;
    const __VLS_142 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ ...{ 'onClick': {} }, }));
    const __VLS_144 = __VLS_143({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_143));
    let __VLS_148;
    const __VLS_149 = {
        onClick: (...[$event]) => {
            __VLS_ctx.labelPositionAdvanced = 'left';
        }
    };
    let __VLS_145;
    let __VLS_146;
    __VLS_nonNullable(__VLS_147.slots).default;
    var __VLS_147;
    const __VLS_150 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ ...{ 'onClick': {} }, }));
    const __VLS_152 = __VLS_151({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_151));
    let __VLS_156;
    const __VLS_157 = {
        onClick: (...[$event]) => {
            __VLS_ctx.labelPositionAdvanced = 'right';
        }
    };
    let __VLS_153;
    let __VLS_154;
    __VLS_nonNullable(__VLS_155.slots).default;
    var __VLS_155;
    const __VLS_158 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ ...{ 'onClick': {} }, }));
    const __VLS_160 = __VLS_159({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_159));
    let __VLS_164;
    const __VLS_165 = {
        onClick: (...[$event]) => {
            __VLS_ctx.labelPositionAdvanced = 'top';
        }
    };
    let __VLS_161;
    let __VLS_162;
    __VLS_nonNullable(__VLS_163.slots).default;
    var __VLS_163;
    __VLS_nonNullable(__VLS_85.slots).default;
    var __VLS_85;
    __VLS_styleScopedClasses['pb-5'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['mt-3.5'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['art-card'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['!rounded-lg'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['mt-3.5'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "searchBarBasicRef": __VLS_6,
        "searchBarAdvancedRef": __VLS_16,
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
            ElInput: ElInput,
            searchBarBasicRef: searchBarBasicRef,
            searchBarAdvancedRef: searchBarAdvancedRef,
            formDataBasic: formDataBasic,
            formDataAdvanced: formDataAdvanced,
            rulesAdvanced: rulesAdvanced,
            labelWidthAdvanced: labelWidthAdvanced,
            labelPositionAdvanced: labelPositionAdvanced,
            spanAdvanced: spanAdvanced,
            gutterAdvanced: gutterAdvanced,
            getLevelOptions: getLevelOptions,
            formItemsBasic: formItemsBasic,
            showUserName: showUserName,
            formItemsAdvanced: formItemsAdvanced,
            handleBasicReset: handleBasicReset,
            handleBasicSearch: handleBasicSearch,
            handleAdvancedReset: handleAdvancedReset,
            handleAdvancedSearch: handleAdvancedSearch,
            advancedValidate: advancedValidate,
            advancedReset: advancedReset,
            updateUserName: updateUserName,
            deleteUserName: deleteUserName,
            addFormItem: addFormItem,
            updateFormItem: updateFormItem,
            deleteFormItem: deleteFormItem,
            batchAddFormItems: batchAddFormItems,
            resetDynamicItems: resetDynamicItems,
        };
    },
    __typeEmits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=search-bar.vue.js.map