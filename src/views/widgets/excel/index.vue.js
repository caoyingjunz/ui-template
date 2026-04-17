/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'WidgetsExcel' });
/**
 * 表格数据
 */
const tableData = ref([
    { name: '李四', age: 20, city: '上海' },
    { name: '张三', age: 25, city: '北京' },
    { name: '王五', age: 30, city: '广州' },
    { name: '赵六', age: 35, city: '深圳' },
    { name: '孙七', age: 28, city: '杭州' },
    { name: '周八', age: 32, city: '成都' },
    { name: '吴九', age: 27, city: '武汉' },
    { name: '郑十', age: 40, city: '南京' },
    { name: '刘一', age: 22, city: '重庆' },
    { name: '陈二', age: 33, city: '西安' }
]);
/**
 * 表头映射配置
 * 用于 Excel 导入导出时的字段映射
 */
const headers = {
    name: '姓名',
    age: '年龄',
    city: '城市'
};
/**
 * 列配置
 * 用于 Excel 导出时的列宽和格式化
 */
const columnConfig = {
    name: {
        title: '姓名',
        width: 20,
        formatter: (value) => (value ? String(value) : '未知')
    },
    age: {
        title: '年龄',
        width: 10,
        formatter: (value) => (value ? `${value}岁` : '0岁')
    },
    city: {
        title: '城市',
        width: 12,
        formatter: (value) => (value ? `${value}市` : '未知')
    }
};
/**
 * 处理 Excel 导入成功
 * 将导入的数据转换为表格数据格式
 * @param data 导入的原始数据
 */
const handleImportSuccess = (data) => {
    const formattedData = data.map((item) => ({
        name: String(item['姓名'] || ''),
        age: Number(item['年龄']) || 0,
        city: String(item['城市'] || '')
    }));
    tableData.value = formattedData;
    ElMessage.success(`成功导入 ${formattedData.length} 条数据`);
};
/**
 * 处理 Excel 导入错误
 * @param error 错误对象
 */
const handleImportError = (error) => {
    console.error('导入失败:', error);
    ElMessage.error(`导入失败: ${error.message}`);
};
/**
 * 处理 Excel 导出成功
 */
const handleExportSuccess = () => {
    console.log('导出成功');
    ElMessage.success('Excel 导出成功');
};
/**
 * 处理 Excel 导出错误
 * @param error 错误对象
 */
const handleExportError = (error) => {
    ElMessage.error(`导出失败: ${error.message}`);
};
/**
 * 处理导出进度
 * @param progress 导出进度百分比
 */
const handleProgress = (progress) => {
    console.log('导出进度:', progress);
};
/**
 * 清空表格数据
 */
const handleClear = () => {
    tableData.value = [];
    ElMessage.info('已清空数据');
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtExcelImport;
    /** @type { [typeof __VLS_components.ArtExcelImport, typeof __VLS_components.ArtExcelImport, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onImportSuccess': {} }, ...{ 'onImportError': {} }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onImportSuccess': {} }, ...{ 'onImportError': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onImportSuccess: (__VLS_ctx.handleImportSuccess)
    };
    const __VLS_8 = {
        onImportError: (__VLS_ctx.handleImportError)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { "import-text": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    }
    var __VLS_5;
    const __VLS_9 = __VLS_resolvedLocalAndGlobalComponents.ArtExcelExport;
    /** @type { [typeof __VLS_components.ArtExcelExport, typeof __VLS_components.ArtExcelExport, ] } */
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ ...{ 'onExportSuccess': {} }, ...{ 'onExportError': {} }, ...{ 'onExportProgress': {} }, ...{ style: ({}) }, data: ((__VLS_ctx.tableData)), filename: ("用户数据-1"), sheetName: ("用户列表"), type: ("success"), headers: ((__VLS_ctx.headers)), autoIndex: (true), columns: ((__VLS_ctx.columnConfig)), }));
    const __VLS_11 = __VLS_10({ ...{ 'onExportSuccess': {} }, ...{ 'onExportError': {} }, ...{ 'onExportProgress': {} }, ...{ style: ({}) }, data: ((__VLS_ctx.tableData)), filename: ("用户数据-1"), sheetName: ("用户列表"), type: ("success"), headers: ((__VLS_ctx.headers)), autoIndex: (true), columns: ((__VLS_ctx.columnConfig)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    let __VLS_15;
    const __VLS_16 = {
        onExportSuccess: (__VLS_ctx.handleExportSuccess)
    };
    const __VLS_17 = {
        onExportError: (__VLS_ctx.handleExportError)
    };
    const __VLS_18 = {
        onExportProgress: (__VLS_ctx.handleProgress)
    };
    let __VLS_12;
    let __VLS_13;
    __VLS_nonNullable(__VLS_14.slots).default;
    var __VLS_14;
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ ...{ 'onClick': {} }, type: ("danger"), }));
    const __VLS_21 = __VLS_20({ ...{ 'onClick': {} }, type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_25;
    const __VLS_26 = {
        onClick: (__VLS_ctx.handleClear)
    };
    let __VLS_22;
    let __VLS_23;
    __VLS_nonNullable(__VLS_24.slots).default;
    var __VLS_24;
    const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.ArtTable;
    /** @type { [typeof __VLS_components.ArtTable, typeof __VLS_components.ArtTable, ] } */
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ data: ((__VLS_ctx.tableData)), ...{ style: ({}) }, }));
    const __VLS_29 = __VLS_28({ data: ((__VLS_ctx.tableData)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    for (const [key] of __VLS_getVForSourceType((Object.keys(__VLS_ctx.headers)))) {
        const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, ] } */
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ key: ((key)), prop: ((key)), label: ((__VLS_ctx.headers[key])), }));
        const __VLS_35 = __VLS_34({ key: ((key)), prop: ((key)), label: ((__VLS_ctx.headers[key])), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    }
    __VLS_nonNullable(__VLS_32.slots).default;
    var __VLS_32;
    __VLS_styleScopedClasses['page-content'];
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
            tableData: tableData,
            headers: headers,
            columnConfig: columnConfig,
            handleImportSuccess: handleImportSuccess,
            handleImportError: handleImportError,
            handleExportSuccess: handleExportSuccess,
            handleExportError: handleExportError,
            handleProgress: handleProgress,
            handleClear: handleClear,
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