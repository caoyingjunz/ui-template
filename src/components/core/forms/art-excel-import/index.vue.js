import ExcelJS from 'exceljs';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'ArtExcelImport' });
// Excel 导入工具函数
async function importExcel(file) {
    const buffer = await file.arrayBuffer();
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
    const worksheet = workbook.worksheets[0];
    const headers = [];
    const results = [];
    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) {
            row.eachCell((cell) => {
                headers.push(String(cell.value ?? ''));
            });
        }
        else {
            const rowData = {};
            row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
                rowData[headers[colNumber - 1]] = cell.value;
            });
            results.push(rowData);
        }
    });
    return results;
}
const emit = defineEmits();
// 处理文件导入
const handleFileChange = async (uploadFile) => {
    try {
        if (!uploadFile.raw)
            return;
        const results = await importExcel(uploadFile.raw);
        emit('import-success', results);
    }
    catch (error) {
        emit('import-error', error);
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inline-block") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElUpload;
    /** @type { [typeof __VLS_components.ElUpload, typeof __VLS_components.ElUpload, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onChange': {} }, autoUpload: ((false)), accept: (".xlsx, .xls"), showFileList: ((false)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onChange': {} }, autoUpload: ((false)), accept: (".xlsx, .xls"), showFileList: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onChange: (__VLS_ctx.handleFileChange)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ type: ("primary"), }));
    const __VLS_10 = __VLS_9({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    var __VLS_14 = {};
    __VLS_nonNullable(__VLS_13.slots).default;
    __VLS_nonNullable(__VLS_13.slots).default;
    var __VLS_13;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['inline-block'];
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
            handleFileChange: handleFileChange,
        };
    },
    __typeEmits: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=index.vue.js.map