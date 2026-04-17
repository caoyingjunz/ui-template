/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import ArtWangEditor from '@/components/core/forms/art-wang-editor/index.vue';
import { ElMessage, ElUpload, ElButton, ElIcon, ElInput } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits();
const FETCH_DELAY = 500;
const formRef = ref();
const dialogVisible = ref(false);
const dialogImageUrl = ref('');
/**
 * 表单数据
 */
const formData = ref({
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
    systemName: undefined,
    fileUpload: [],
    imageUpload: [],
    multipleFiles: [],
    richTextContent: ''
});
/**
 * 表单校验规则
 */
const formRules = {
    name: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
};
const labelWidth = ref(100);
const labelPosition = ref('right');
const span = ref(6);
const gutter = ref(12);
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
// 表单配置
const formItems = computed(() => [
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
        hidden: formData.value.systemName === 'mac',
        placeholder: '输入 mac 组件隐藏'
    },
    {
        label: '栅格布局',
        key: 'sg1',
        type: 'input',
        span: 12,
        placeholder: '示例：栅格 span=12 占容器一半宽度，span=24 占满容器'
    },
    // 文件上传示例 - 使用 render 函数渲染
    {
        label: '文件上传',
        key: 'multipleFiles',
        span: 12,
        render: () => h(ElUpload, {
            multiple: true,
            limit: 5,
            action: '#',
            autoUpload: false,
            showFileList: true,
            // accept: '.pdf,.doc,.docx,.txt',
            beforeUpload: (file) => {
                console.log('准备上传文件:', file.name);
                return true;
            },
            onChange: (file, fileList) => {
                console.log('多文件变化:', file, fileList);
                formData.value.multipleFiles = fileList;
            },
            onRemove: (file, fileList) => {
                console.log('删除文件:', file, fileList);
                formData.value.multipleFiles = fileList;
            },
            onExceed: (files, fileList) => {
                ElMessage.warning(`最多只能上传 5 个文件，当前选择了 ${files.length + fileList.length} 个文件`);
            }
        }, {
            default: () => [h(ElButton, { type: 'primary' }, () => '点击上传')]
        })
    },
    // 图片上传示例 - 使用 render 函数渲染
    {
        label: '图片上传',
        key: 'imageUpload',
        span: 12,
        render: () => h(ElUpload, {
            accept: '.jpg,.jpeg,.png,.gif,.webp',
            limit: 4,
            action: '#',
            autoUpload: false,
            showFileList: true,
            listType: 'picture-card',
            beforeUpload: (file) => {
                const isImage = file.type.startsWith('image/');
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isImage) {
                    ElMessage.error('只能上传图片文件!');
                    return false;
                }
                if (!isLt2M) {
                    ElMessage.error('图片大小不能超过 2MB!');
                    return false;
                }
                return true;
            },
            onChange: (file, fileList) => {
                console.log('图片变化:', file, fileList);
                formData.value.imageUpload = fileList;
            },
            onRemove: (file, fileList) => {
                console.log('删除图片:', file, fileList);
                formData.value.imageUpload = fileList;
            },
            onPreview: (file) => {
                dialogImageUrl.value = file.url || '';
                dialogVisible.value = true;
            }
        }, {
            default: () => [h(ElIcon, { type: 'primary' }, () => h(Plus))]
        })
    },
    // 富文本编辑器示例 - 使用 render 函数渲染
    {
        label: '富文本编辑器',
        key: 'richTextContent',
        span: 24,
        render: () => h(ArtWangEditor, {
            modelValue: formData.value.richTextContent,
            height: '300px',
            placeholder: '请输入富文本内容...',
            'onUpdate:modelValue': (value) => {
                formData.value.richTextContent = value;
                console.log('富文本内容变化:', value);
            },
            toolbarKeys: [
                'headerSelect',
                'bold',
                'italic',
                'underline',
                '|',
                'bulletedList',
                'numberedList',
                '|',
                'insertLink',
                'insertImage',
                '|',
                'undo',
                'redo'
            ]
        })
    }
]);
/**
 * 处理表单重置事件
 */
const handleReset = () => {
    console.log('重置表单');
    emit('reset');
};
/**
 * 处理表单提交事件
 */
const handleSubmit = async (params) => {
    await formRef.value.validate();
    emit('search', params);
    console.log('表单数据', params);
};
/**
 * 校验表单
 */
const validateForm = () => formRef.value.validate();
/**
 * 重置表单
 */
const resetForm = () => formRef.value.reset();
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
    formData.value.name = undefined;
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
        delete formData.value[deletedItem.key];
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
        delete formData.value[item.key];
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("art-card-xs") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ArtForm;
    /** @type { [typeof __VLS_components.ArtForm, typeof __VLS_components.ArtForm, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onReset': {} }, ...{ 'onSubmit': {} }, ref: ("formRef"), modelValue: ((__VLS_ctx.formData)), items: ((__VLS_ctx.formItems)), rules: ((__VLS_ctx.formRules)), defaultExpanded: ((true)), labelWidth: ((__VLS_ctx.labelWidth)), labelPosition: ((__VLS_ctx.labelPosition)), span: ((__VLS_ctx.span)), gutter: ((__VLS_ctx.gutter)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onReset': {} }, ...{ 'onSubmit': {} }, ref: ("formRef"), modelValue: ((__VLS_ctx.formData)), items: ((__VLS_ctx.formItems)), rules: ((__VLS_ctx.formRules)), defaultExpanded: ((true)), labelWidth: ((__VLS_ctx.labelWidth)), labelPosition: ((__VLS_ctx.labelPosition)), span: ((__VLS_ctx.span)), gutter: ((__VLS_ctx.gutter)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    // @ts-ignore navigation for `const formRef = ref()`
    __VLS_ctx.formRef;
    var __VLS_12 = {};
    let __VLS_13;
    const __VLS_14 = {
        onReset: (__VLS_ctx.handleReset)
    };
    const __VLS_15 = {
        onSubmit: (__VLS_ctx.handleSubmit)
    };
    let __VLS_9;
    let __VLS_10;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { slots: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, ] } */
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ modelValue: ((__VLS_ctx.formData.slots)), placeholder: ("我是插槽渲染出来的组件"), }));
        const __VLS_18 = __VLS_17({ modelValue: ((__VLS_ctx.formData.slots)), placeholder: ("我是插槽渲染出来的组件"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    }
    var __VLS_11;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("art-card p-5 !rounded-lg mt-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({});
    (__VLS_ctx.formData);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-3.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2 text-base font-medium") }, });
    const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.ElSpace, ] } */
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ wrap: (true), ...{ class: ("mb-3") }, }));
    const __VLS_24 = __VLS_23({ wrap: (true), ...{ class: ("mb-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    const __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{ 'onClick': {} }, }));
    const __VLS_30 = __VLS_29({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    let __VLS_34;
    const __VLS_35 = {
        onClick: (__VLS_ctx.getLevelOptions)
    };
    let __VLS_31;
    let __VLS_32;
    __VLS_nonNullable(__VLS_33.slots).default;
    var __VLS_33;
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onClick': {} }, }));
    const __VLS_38 = __VLS_37({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    let __VLS_42;
    const __VLS_43 = {
        onClick: (__VLS_ctx.addFormItem)
    };
    let __VLS_39;
    let __VLS_40;
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ 'onClick': {} }, }));
    const __VLS_46 = __VLS_45({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    let __VLS_50;
    const __VLS_51 = {
        onClick: (__VLS_ctx.updateFormItem)
    };
    let __VLS_47;
    let __VLS_48;
    __VLS_nonNullable(__VLS_49.slots).default;
    var __VLS_49;
    const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ ...{ 'onClick': {} }, }));
    const __VLS_54 = __VLS_53({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    let __VLS_58;
    const __VLS_59 = {
        onClick: (__VLS_ctx.deleteFormItem)
    };
    let __VLS_55;
    let __VLS_56;
    __VLS_nonNullable(__VLS_57.slots).default;
    var __VLS_57;
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ 'onClick': {} }, }));
    const __VLS_62 = __VLS_61({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    let __VLS_66;
    const __VLS_67 = {
        onClick: (__VLS_ctx.batchAddFormItems)
    };
    let __VLS_63;
    let __VLS_64;
    __VLS_nonNullable(__VLS_65.slots).default;
    var __VLS_65;
    const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{ 'onClick': {} }, }));
    const __VLS_70 = __VLS_69({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    let __VLS_74;
    const __VLS_75 = {
        onClick: (__VLS_ctx.resetDynamicItems)
    };
    let __VLS_71;
    let __VLS_72;
    __VLS_nonNullable(__VLS_73.slots).default;
    var __VLS_73;
    __VLS_nonNullable(__VLS_27.slots).default;
    var __VLS_27;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2 text-base font-medium") }, });
    const __VLS_76 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.ElSpace, ] } */
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ wrap: (true), }));
    const __VLS_78 = __VLS_77({ wrap: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    const __VLS_82 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{ 'onClick': {} }, }));
    const __VLS_84 = __VLS_83({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_83));
    let __VLS_88;
    const __VLS_89 = {
        onClick: (__VLS_ctx.validateForm)
    };
    let __VLS_85;
    let __VLS_86;
    __VLS_nonNullable(__VLS_87.slots).default;
    var __VLS_87;
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{ 'onClick': {} }, }));
    const __VLS_92 = __VLS_91({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    let __VLS_96;
    const __VLS_97 = {
        onClick: (__VLS_ctx.resetForm)
    };
    let __VLS_93;
    let __VLS_94;
    __VLS_nonNullable(__VLS_95.slots).default;
    var __VLS_95;
    if (__VLS_ctx.showUserName) {
        const __VLS_98 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ ...{ 'onClick': {} }, }));
        const __VLS_100 = __VLS_99({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_99));
        let __VLS_104;
        const __VLS_105 = {
            onClick: (__VLS_ctx.updateUserName)
        };
        let __VLS_101;
        let __VLS_102;
        __VLS_nonNullable(__VLS_103.slots).default;
        var __VLS_103;
    }
    if (__VLS_ctx.showUserName) {
        const __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ ...{ 'onClick': {} }, }));
        const __VLS_108 = __VLS_107({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_107));
        let __VLS_112;
        const __VLS_113 = {
            onClick: (__VLS_ctx.deleteUserName)
        };
        let __VLS_109;
        let __VLS_110;
        __VLS_nonNullable(__VLS_111.slots).default;
        var __VLS_111;
    }
    const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ ...{ 'onClick': {} }, }));
    const __VLS_116 = __VLS_115({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    let __VLS_120;
    const __VLS_121 = {
        onClick: (...[$event]) => {
            __VLS_ctx.labelWidth = 120;
        }
    };
    let __VLS_117;
    let __VLS_118;
    __VLS_nonNullable(__VLS_119.slots).default;
    var __VLS_119;
    const __VLS_122 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ ...{ 'onClick': {} }, }));
    const __VLS_124 = __VLS_123({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    let __VLS_128;
    const __VLS_129 = {
        onClick: (...[$event]) => {
            __VLS_ctx.span = 8;
        }
    };
    let __VLS_125;
    let __VLS_126;
    __VLS_nonNullable(__VLS_127.slots).default;
    var __VLS_127;
    const __VLS_130 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{ 'onClick': {} }, }));
    const __VLS_132 = __VLS_131({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_131));
    let __VLS_136;
    const __VLS_137 = {
        onClick: (...[$event]) => {
            __VLS_ctx.gutter = 50;
        }
    };
    let __VLS_133;
    let __VLS_134;
    __VLS_nonNullable(__VLS_135.slots).default;
    var __VLS_135;
    const __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ ...{ 'onClick': {} }, }));
    const __VLS_140 = __VLS_139({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_139));
    let __VLS_144;
    const __VLS_145 = {
        onClick: (...[$event]) => {
            __VLS_ctx.labelPosition = 'left';
        }
    };
    let __VLS_141;
    let __VLS_142;
    __VLS_nonNullable(__VLS_143.slots).default;
    var __VLS_143;
    const __VLS_146 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ ...{ 'onClick': {} }, }));
    const __VLS_148 = __VLS_147({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    let __VLS_152;
    const __VLS_153 = {
        onClick: (...[$event]) => {
            __VLS_ctx.labelPosition = 'right';
        }
    };
    let __VLS_149;
    let __VLS_150;
    __VLS_nonNullable(__VLS_151.slots).default;
    var __VLS_151;
    const __VLS_154 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ ...{ 'onClick': {} }, }));
    const __VLS_156 = __VLS_155({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_155));
    let __VLS_160;
    const __VLS_161 = {
        onClick: (...[$event]) => {
            __VLS_ctx.labelPosition = 'top';
        }
    };
    let __VLS_157;
    let __VLS_158;
    __VLS_nonNullable(__VLS_159.slots).default;
    var __VLS_159;
    __VLS_nonNullable(__VLS_81.slots).default;
    var __VLS_81;
    const __VLS_162 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.ElDialog, ] } */
    // @ts-ignore
    const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ modelValue: ((__VLS_ctx.dialogVisible)), }));
    const __VLS_164 = __VLS_163({ modelValue: ((__VLS_ctx.dialogVisible)), }, ...__VLS_functionalComponentArgsRest(__VLS_163));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ "w-full": (true), src: ((__VLS_ctx.dialogImageUrl)), alt: ("Preview Image"), ...{ class: ("w-full h-auto") }, });
    __VLS_nonNullable(__VLS_167.slots).default;
    var __VLS_167;
    __VLS_styleScopedClasses['pb-5'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['art-card-xs'];
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
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-auto'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "formRef": __VLS_12,
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
            ElButton: ElButton,
            ElInput: ElInput,
            formRef: formRef,
            dialogVisible: dialogVisible,
            dialogImageUrl: dialogImageUrl,
            formData: formData,
            formRules: formRules,
            labelWidth: labelWidth,
            labelPosition: labelPosition,
            span: span,
            gutter: gutter,
            getLevelOptions: getLevelOptions,
            showUserName: showUserName,
            formItems: formItems,
            handleReset: handleReset,
            handleSubmit: handleSubmit,
            validateForm: validateForm,
            resetForm: resetForm,
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
//# sourceMappingURL=index.vue.js.map