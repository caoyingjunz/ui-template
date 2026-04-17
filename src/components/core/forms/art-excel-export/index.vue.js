import ExcelJS from 'exceljs';
import FileSaver from 'file-saver';
import { ref, computed, nextTick } from 'vue';
import { Loading } from '@element-plus/icons-vue';
import { useThrottleFn } from '@vueuse/core';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'ArtExcelExport' });
const props = withDefaults(defineProps(), {
    filename: () => `export_${new Date().toISOString().slice(0, 10)}`,
    sheetName: 'Sheet1',
    type: 'primary',
    size: 'default',
    disabled: false,
    buttonText: '导出 Excel',
    loadingText: '导出中...',
    autoIndex: false,
    indexColumnTitle: '序号',
    columns: () => ({}),
    headers: () => ({}),
    maxRows: 100000,
    showSuccessMessage: true,
    showErrorMessage: true,
    workbookOptions: () => ({})
});
const emit = defineEmits();
/** 导出错误类型 */
class ExportError extends Error {
    code;
    details;
    constructor(message, code, details) {
        super(message);
        this.code = code;
        this.details = details;
        this.name = 'ExportError';
    }
}
const isExporting = ref(false);
/** 是否有数据可导出 */
const hasData = computed(() => Array.isArray(props.data) && props.data.length > 0);
/** 验证导出数据 */
const validateData = (data) => {
    if (!Array.isArray(data)) {
        throw new ExportError('数据必须是数组格式', 'INVALID_DATA_TYPE');
    }
    if (data.length === 0) {
        throw new ExportError('没有可导出的数据', 'NO_DATA');
    }
    if (data.length > props.maxRows) {
        throw new ExportError(`数据行数超过限制（${props.maxRows}行）`, 'EXCEED_MAX_ROWS', {
            currentRows: data.length,
            maxRows: props.maxRows
        });
    }
};
/** 格式化单元格值 */
const formatCellValue = (value, key, row, index) => {
    const column = props.columns[key];
    if (column?.formatter) {
        return column.formatter(value, row, index);
    }
    if (value === null || value === undefined) {
        return '';
    }
    if (value instanceof Date) {
        return value.toLocaleDateString('zh-CN');
    }
    if (typeof value === 'boolean') {
        return value ? '是' : '否';
    }
    return String(value);
};
/** 处理数据 */
const processData = (data) => {
    return data.map((item, index) => {
        const processedItem = {};
        if (props.autoIndex) {
            processedItem[props.indexColumnTitle] = String(index + 1);
        }
        Object.entries(item).forEach(([key, value]) => {
            let columnTitle = key;
            if (props.columns[key]?.title) {
                columnTitle = props.columns[key].title;
            }
            else if (props.headers[key]) {
                columnTitle = props.headers[key];
            }
            processedItem[columnTitle] = formatCellValue(value, key, item, index);
        });
        return processedItem;
    });
};
/** 计算列宽度 */
const calculateColumnWidths = (data) => {
    if (data.length === 0)
        return [];
    const sampleSize = Math.min(data.length, 100);
    const columns = Object.keys(data[0]);
    return columns.map((column) => {
        const configWidth = Object.values(props.columns).find((col) => col.title === column)?.width;
        if (configWidth)
            return configWidth;
        const maxLength = Math.max(column.length, ...data.slice(0, sampleSize).map((row) => String(row[column] || '').length));
        return Math.min(Math.max(maxLength + 2, 8), 50);
    });
};
/** 导出到 Excel */
const exportToExcel = async (data, filename, sheetName) => {
    try {
        emit('export-progress', 10);
        const processedData = processData(data);
        emit('export-progress', 30);
        const workbook = new ExcelJS.Workbook();
        if (props.workbookOptions) {
            workbook.creator = props.workbookOptions.creator || 'Pixiu Cloud';
            workbook.lastModifiedBy = props.workbookOptions.lastModifiedBy || '';
            workbook.created = props.workbookOptions.created || new Date();
            workbook.modified = props.workbookOptions.modified || new Date();
        }
        emit('export-progress', 50);
        const worksheet = workbook.addWorksheet(sheetName);
        if (processedData.length > 0) {
            const columnKeys = Object.keys(processedData[0]);
            const colWidths = calculateColumnWidths(processedData);
            // 设置列定义（含表头和宽度）
            worksheet.columns = columnKeys.map((key, idx) => ({
                header: key,
                key,
                width: colWidths[idx]
            }));
            // 写入数据行
            processedData.forEach((row) => worksheet.addRow(row));
        }
        emit('export-progress', 85);
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        emit('export-progress', 95);
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        FileSaver.saveAs(blob, `${filename}_${timestamp}.xlsx`);
        emit('export-progress', 100);
        await nextTick();
    }
    catch (error) {
        throw new ExportError(`Excel 导出失败: ${error.message}`, 'EXPORT_FAILED', error);
    }
};
/** 处理导出 */
const handleExport = useThrottleFn(async () => {
    if (isExporting.value)
        return;
    isExporting.value = true;
    try {
        validateData(props.data);
        emit('before-export', props.data);
        await exportToExcel(props.data, props.filename, props.sheetName);
        emit('export-success', props.filename, props.data.length);
        if (props.showSuccessMessage) {
            ElMessage.success({
                message: `成功导出 ${props.data.length} 条数据`,
                duration: 3000
            });
        }
    }
    catch (error) {
        const exportError = error instanceof ExportError
            ? error
            : new ExportError(`导出失败: ${error.message}`, 'UNKNOWN_ERROR', error);
        emit('export-error', exportError);
        if (props.showErrorMessage) {
            ElMessage.error({
                message: exportError.message,
                duration: 5000
            });
        }
        console.error('Excel 导出错误:', exportError);
    }
    finally {
        isExporting.value = false;
        emit('export-progress', 0);
    }
}, 1000);
const __VLS_exposed = {
    exportData: handleExport,
    isExporting: readonly(isExporting),
    hasData
};
defineExpose({
    exportData: handleExport,
    isExporting: readonly(isExporting),
    hasData
}); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    filename: () => `export_${new Date().toISOString().slice(0, 10)}`,
    sheetName: 'Sheet1',
    type: 'primary',
    size: 'default',
    disabled: false,
    buttonText: '导出 Excel',
    loadingText: '导出中...',
    autoIndex: false,
    indexColumnTitle: '序号',
    columns: () => ({}),
    headers: () => ({}),
    maxRows: 100000,
    showSuccessMessage: true,
    showErrorMessage: true,
    workbookOptions: () => ({})
});
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, type: ((__VLS_ctx.type)), size: ((__VLS_ctx.size)), loading: ((__VLS_ctx.isExporting)), disabled: ((__VLS_ctx.disabled || !__VLS_ctx.hasData)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, type: ((__VLS_ctx.type)), size: ((__VLS_ctx.size)), loading: ((__VLS_ctx.isExporting)), disabled: ((__VLS_ctx.disabled || !__VLS_ctx.hasData)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        onClick: (__VLS_ctx.handleExport)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { loading: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const __VLS_9 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ ...{ class: ("is-loading") }, }));
        const __VLS_11 = __VLS_10({ ...{ class: ("is-loading") }, }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.Loading;
        /** @type { [typeof __VLS_components.Loading, ] } */
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
        const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
        __VLS_nonNullable(__VLS_14.slots).default;
        var __VLS_14;
        (__VLS_ctx.loadingText);
    }
    var __VLS_21 = {};
    (__VLS_ctx.buttonText);
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['is-loading'];
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
            Loading: Loading,
            isExporting: isExporting,
            hasData: hasData,
            handleExport: handleExport,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=index.vue.js.map