/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'TemplateCalendar' });
/**
 * 事件类型选项
 */
const eventTypes = [
    { label: '基本', value: 'primary' },
    { label: '成功', value: 'success' },
    { label: '警告', value: 'warning' },
    { label: '危险', value: 'danger' }
];
const currentDate = ref(new Date('2025-02-07'));
const dialogVisible = ref(false);
const dialogTitle = ref('添加事件');
const editingEventIndex = ref(-1);
/**
 * 事件列表数据
 */
const events = ref([
    { date: '2025-02-01', content: '产品需求评审', type: 'primary' },
    {
        date: '2025-02-03',
        endDate: '2025-02-05',
        content: '项目周报会议（跨日期）',
        type: 'primary'
    },
    { date: '2025-02-10', content: '瑜伽课程', type: 'success' },
    { date: '2025-02-15', content: '团队建设活动', type: 'primary' },
    { date: '2025-02-20', content: '健身训练', type: 'success' },
    { date: '2025-02-20', content: '代码评审', type: 'danger' },
    { date: '2025-02-20', content: '团队午餐', type: 'primary' },
    { date: '2025-02-20', content: '项目进度汇报', type: 'warning' },
    { date: '2025-02-28', content: '月度总结会', type: 'warning' }
]);
/**
 * 事件表单数据
 */
const eventForm = ref({
    date: '',
    endDate: '',
    content: '',
    type: 'primary'
});
/**
 * 是否处于编辑模式
 */
const isEditing = computed(() => editingEventIndex.value >= 0);
/**
 * 格式化日期，只显示日
 * @param date 完整日期字符串
 * @returns 日期中的日部分
 */
const formatDate = (date) => date.split('-')[2];
/**
 * 获取事件类型对应的样式类名
 * @param type 事件类型
 * @returns 包含背景和文字颜色的类名对象
 */
const getEventClasses = (type = 'primary') => {
    const classMap = {
        primary: { bgClass: 'bg-theme/12', textClass: 'text-theme' },
        success: { bgClass: 'bg-success/12', textClass: 'text-success' },
        warning: { bgClass: 'bg-warning/12', textClass: 'text-warning' },
        danger: { bgClass: 'bg-danger/12', textClass: 'text-danger' }
    };
    return classMap[type];
};
/**
 * 获取指定日期的所有事件
 * 支持跨日期事件的显示
 * @param day 日期字符串
 * @returns 该日期的事件列表
 */
const getEvents = (day) => {
    return events.value
        .filter((event) => {
        const eventDate = new Date(event.date);
        const currentDate = new Date(day);
        const endDate = event.endDate ? new Date(event.endDate) : new Date(event.date);
        return currentDate >= eventDate && currentDate <= endDate;
    })
        .map((event) => {
        const { bgClass, textClass } = getEventClasses(event.type);
        return { ...event, bgClass, textClass };
    });
};
/**
 * 重置表单数据
 */
const resetForm = () => {
    eventForm.value = {
        date: '',
        endDate: '',
        content: '',
        type: 'primary'
    };
    editingEventIndex.value = -1;
};
/**
 * 处理日历单元格点击事件
 * 打开添加事件弹窗
 * @param day 点击的日期
 */
const handleCellClick = (day) => {
    dialogTitle.value = '添加事件';
    eventForm.value = {
        date: day,
        content: '',
        type: 'primary'
    };
    editingEventIndex.value = -1;
    dialogVisible.value = true;
};
/**
 * 处理事件点击
 * 打开编辑事件弹窗
 * @param event 点击的事件对象
 */
const handleEventClick = (event) => {
    dialogTitle.value = '编辑事件';
    eventForm.value = { ...event };
    editingEventIndex.value = events.value.findIndex((e) => e.date === event.date && e.content === event.content);
    dialogVisible.value = true;
};
/**
 * 保存事件
 * 根据编辑模式决定是新增还是更新
 */
const handleSaveEvent = () => {
    if (!eventForm.value.content || !eventForm.value.date)
        return;
    if (isEditing.value) {
        events.value[editingEventIndex.value] = { ...eventForm.value };
    }
    else {
        events.value.push({ ...eventForm.value });
    }
    dialogVisible.value = false;
    resetForm();
};
/**
 * 删除事件
 */
const handleDeleteEvent = () => {
    if (isEditing.value) {
        events.value.splice(editingEventIndex.value, 1);
        dialogVisible.value = false;
        resetForm();
    }
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
    __VLS_styleScopedClasses['el-calendar-day'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content mb-5") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCalendar;
    /** @type { [typeof __VLS_components.ElCalendar, typeof __VLS_components.ElCalendar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.currentDate)), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.currentDate)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { "date-cell": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const [{ data }] = __VLS_getSlotParams(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.handleCellClick(data.day);
                } }, ...{ class: ("relative flex flex-col h-full min-h-30 max-h-30 p-1 overflow-hidden c-p") }, ...{ class: (({ 'is-selected': data.isSelected })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("absolute top-1 right-1 text-sm") }, });
        (__VLS_ctx.formatDate(data.day));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-1 w-full max-h-21 pr-1 mt-6 overflow-y-auto") }, });
        for (const [event] of __VLS_getVForSourceType((__VLS_ctx.getEvents(data.day)))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        __VLS_ctx.handleEventClick(event);
                    } }, key: ((`${event.date}-${event.content}`)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-w-25 px-3 py-1.5 overflow-hidden text-xs/6 font-medium text-ellipsis whitespace-nowrap rounded hover:opacity-80") }, ...{ class: (([event.bgClass, event.textClass])) }, });
            (event.content);
        }
    }
    var __VLS_5;
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.ElDialog, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClosed': {} }, modelValue: ((__VLS_ctx.dialogVisible)), title: ((__VLS_ctx.dialogTitle)), width: ("600px"), }));
    const __VLS_8 = __VLS_7({ ...{ 'onClosed': {} }, modelValue: ((__VLS_ctx.dialogVisible)), title: ((__VLS_ctx.dialogTitle)), width: ("600px"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClosed: (__VLS_ctx.resetForm)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.ElForm, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ model: ((__VLS_ctx.eventForm)), labelWidth: ("80px"), }));
    const __VLS_16 = __VLS_15({ model: ((__VLS_ctx.eventForm)), labelWidth: ("80px"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ label: ("活动标题"), required: (true), }));
    const __VLS_22 = __VLS_21({ label: ("活动标题"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ modelValue: ((__VLS_ctx.eventForm.content)), placeholder: ("请输入活动标题"), }));
    const __VLS_28 = __VLS_27({ modelValue: ((__VLS_ctx.eventForm.content)), placeholder: ("请输入活动标题"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25;
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ label: ("事件颜色"), }));
    const __VLS_34 = __VLS_33({ label: ("事件颜色"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElRadioGroup;
    /** @type { [typeof __VLS_components.ElRadioGroup, typeof __VLS_components.ElRadioGroup, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ modelValue: ((__VLS_ctx.eventForm.type)), }));
    const __VLS_40 = __VLS_39({ modelValue: ((__VLS_ctx.eventForm.type)), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    for (const [type] of __VLS_getVForSourceType((__VLS_ctx.eventTypes))) {
        const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElRadio;
        /** @type { [typeof __VLS_components.ElRadio, typeof __VLS_components.ElRadio, ] } */
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ key: ((type.value)), value: ((type.value)), }));
        const __VLS_46 = __VLS_45({ key: ((type.value)), value: ((type.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        (type.label);
        __VLS_nonNullable(__VLS_49.slots).default;
        var __VLS_49;
    }
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
    __VLS_nonNullable(__VLS_37.slots).default;
    var __VLS_37;
    const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ label: ("开始日期"), required: (true), }));
    const __VLS_52 = __VLS_51({ label: ("开始日期"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElDatePicker;
    /** @type { [typeof __VLS_components.ElDatePicker, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{ style: ({}) }, modelValue: ((__VLS_ctx.eventForm.date)), type: ("date"), placeholder: ("选择日期"), format: ("YYYY-MM-DD"), valueFormat: ("YYYY-MM-DD"), }));
    const __VLS_58 = __VLS_57({ ...{ style: ({}) }, modelValue: ((__VLS_ctx.eventForm.date)), type: ("date"), placeholder: ("选择日期"), format: ("YYYY-MM-DD"), valueFormat: ("YYYY-MM-DD"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    __VLS_nonNullable(__VLS_55.slots).default;
    var __VLS_55;
    const __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ label: ("结束日期"), }));
    const __VLS_64 = __VLS_63({ label: ("结束日期"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.ElDatePicker;
    /** @type { [typeof __VLS_components.ElDatePicker, ] } */
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{ style: ({}) }, modelValue: ((__VLS_ctx.eventForm.endDate)), type: ("date"), placeholder: ("选择结束日期"), format: ("YYYY-MM-DD"), valueFormat: ("YYYY-MM-DD"), minDate: ((__VLS_ctx.eventForm.date)), }));
    const __VLS_70 = __VLS_69({ ...{ style: ({}) }, modelValue: ((__VLS_ctx.eventForm.endDate)), type: ("date"), placeholder: ("选择结束日期"), format: ("YYYY-MM-DD"), valueFormat: ("YYYY-MM-DD"), minDate: ((__VLS_ctx.eventForm.date)), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    __VLS_nonNullable(__VLS_67.slots).default;
    var __VLS_67;
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dialog-footer") }, });
        if (__VLS_ctx.isEditing) {
            const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
            // @ts-ignore
            const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{ 'onClick': {} }, type: ("danger"), }));
            const __VLS_76 = __VLS_75({ ...{ 'onClick': {} }, type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
            let __VLS_80;
            const __VLS_81 = {
                onClick: (__VLS_ctx.handleDeleteEvent)
            };
            let __VLS_77;
            let __VLS_78;
            __VLS_nonNullable(__VLS_79.slots).default;
            var __VLS_79;
        }
        const __VLS_82 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_84 = __VLS_83({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
        let __VLS_88;
        const __VLS_89 = {
            onClick: (__VLS_ctx.handleSaveEvent)
        };
        let __VLS_85;
        let __VLS_86;
        (__VLS_ctx.isEditing ? '更新' : '添加');
        __VLS_nonNullable(__VLS_87.slots).default;
        var __VLS_87;
    }
    var __VLS_11;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['min-h-30'];
    __VLS_styleScopedClasses['max-h-30'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['c-p'];
    __VLS_styleScopedClasses['is-selected'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['top-1'];
    __VLS_styleScopedClasses['right-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-1'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['max-h-21'];
    __VLS_styleScopedClasses['pr-1'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['min-w-25'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1.5'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['text-xs/6'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-ellipsis'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:opacity-80'];
    __VLS_styleScopedClasses['dialog-footer'];
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
            eventTypes: eventTypes,
            currentDate: currentDate,
            dialogVisible: dialogVisible,
            dialogTitle: dialogTitle,
            eventForm: eventForm,
            isEditing: isEditing,
            formatDate: formatDate,
            getEvents: getEvents,
            resetForm: resetForm,
            handleCellClick: handleCellClick,
            handleEventClick: handleEventClick,
            handleSaveEvent: handleSaveEvent,
            handleDeleteEvent: handleDeleteEvent,
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