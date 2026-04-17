/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import WebSocketClient from '@/utils/socket';
import { ElMessage } from 'element-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'WidgetsSocketChat' });
// WebSocket客户端实例
const wsClient = ref(null);
// 连接状态
const isConnecting = ref(false);
const isConnected = ref(false);
const reconnectCount = ref(0);
const messageCount = ref(0);
// 用于清理 watch 的函数
let stopWatchConnection = null;
let stopWatchStatus = null;
// 表单数据
const connectForm = ref({
    url: 'ws://localhost:8080/ws',
    autoReconnect: true,
    heartbeat: true
});
const messageForm = ref({
    type: 'text',
    content: ''
});
// 消息和日志列表
const messageList = ref([]);
const logList = ref([]);
// 计算属性
const connectionTagType = computed(() => {
    if (isConnecting.value)
        return 'warning';
    if (isConnected.value)
        return 'success';
    return 'danger';
});
/**
 * 添加日志
 */
const addLog = (type, message) => {
    logList.value.unshift({
        type,
        message,
        time: new Date().toLocaleTimeString()
    });
    // 限制日志数量
    if (logList.value.length > 100) {
        logList.value = logList.value.slice(0, 100);
    }
};
/**
 * 添加消息记录
 */
const addMessage = (type, content) => {
    messageList.value.unshift({
        type,
        content,
        time: new Date().toLocaleTimeString()
    });
    // 限制消息数量
    if (messageList.value.length > 50) {
        messageList.value = messageList.value.slice(0, 50);
    }
};
/**
 * 处理WebSocket消息
 */
const handleSocketMessage = (event) => {
    messageCount.value++;
    addMessage('received', event.data);
    addLog('success', `收到消息: ${event.data}`);
};
/**
 * 连接WebSocket
 */
const handleConnect = () => {
    if (isConnecting.value || isConnected.value) {
        return;
    }
    // 清理之前的 watch
    if (stopWatchConnection) {
        stopWatchConnection();
        stopWatchConnection = null;
    }
    if (stopWatchStatus) {
        stopWatchStatus();
        stopWatchStatus = null;
    }
    isConnecting.value = true;
    addLog('info', `开始连接到 ${connectForm.value.url}`);
    try {
        wsClient.value = WebSocketClient.getInstance({
            url: connectForm.value.url,
            messageHandler: handleSocketMessage,
            reconnectInterval: connectForm.value.autoReconnect ? 5000 : 0,
            heartbeatInterval: connectForm.value.heartbeat ? 10000 : 0,
            maxReconnectAttempts: 5
        });
        wsClient.value.init();
        // 监听连接状态变化
        stopWatchConnection = watch(() => wsClient.value?.isWebSocketConnected, (connected) => {
            isConnected.value = connected || false;
            isConnecting.value = false;
            if (connected) {
                addLog('success', 'WebSocket连接成功');
                reconnectCount.value = 0;
            }
        }, { immediate: true });
        // 监听连接状态文本变化
        stopWatchStatus = watch(() => wsClient.value?.connectionStatusText, (status) => {
            if (status && status.includes('重连中')) {
                reconnectCount.value++;
                addLog('warning', `自动重连中 (第${reconnectCount.value}次)`);
            }
        });
    }
    catch (error) {
        isConnecting.value = false;
        const errorMessage = error instanceof Error ? error.message : String(error);
        addLog('error', `连接失败: ${errorMessage}`);
        ElMessage.error('连接失败，请检查服务器地址');
    }
};
/**
 * 断开连接
 */
const handleDisconnect = () => {
    if (wsClient.value) {
        wsClient.value.close();
        addLog('info', '手动断开WebSocket连接');
    }
    // 清理 watch
    if (stopWatchConnection) {
        stopWatchConnection();
        stopWatchConnection = null;
    }
    if (stopWatchStatus) {
        stopWatchStatus();
        stopWatchStatus = null;
    }
    isConnected.value = false;
    isConnecting.value = false;
};
/**
 * 重新连接
 */
const handleReconnect = () => {
    handleDisconnect();
    setTimeout(() => {
        handleConnect();
    }, 1000);
};
/**
 * 发送消息
 */
const handleSendMessage = () => {
    if (!isConnected.value || !wsClient.value) {
        ElMessage.warning('请先建立WebSocket连接');
        return;
    }
    let message = messageForm.value.content;
    // 根据消息类型处理内容
    switch (messageForm.value.type) {
        case 'json':
            try {
                // 验证是否为有效JSON
                JSON.parse(message);
            }
            catch {
                ElMessage.error('请输入有效的JSON格式数据');
                return;
            }
            break;
        case 'ping':
            message = 'ping';
            break;
    }
    try {
        wsClient.value.send(message);
        addMessage('sent', message);
        addLog('info', `发送消息: ${message}`);
        ElMessage.success('消息发送成功');
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        addLog('error', `发送失败: ${errorMessage}`);
        ElMessage.error('发送消息失败');
    }
};
/**
 * 清空消息表单
 */
const clearMessageForm = () => {
    messageForm.value.content = '';
};
/**
 * 清空消息记录
 */
const clearMessages = () => {
    messageList.value = [];
};
/**
 * 清空日志
 */
const clearLogs = () => {
    logList.value = [];
};
/**
 * 页面卸载时清理连接
 */
onUnmounted(() => {
    handleDisconnect();
});
/**
 * 监听页面可见性变化，页面隐藏时断开连接
 */
onMounted(() => {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isConnected.value) {
            addLog('info', '页面隐藏，保持连接');
        }
    });
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
    __VLS_styleScopedClasses['message-container'];
    __VLS_styleScopedClasses['log-container'];
    __VLS_styleScopedClasses['message-container'];
    __VLS_styleScopedClasses['log-container'];
    __VLS_styleScopedClasses['message-container'];
    __VLS_styleScopedClasses['log-container'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-15 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("my-4 text-2xl font-semibold leading-tight") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 text-base leading-relaxed text-g-700") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((20)), ...{ class: ("mb-15") }, }));
    const __VLS_2 = __VLS_1({ gutter: ((20)), ...{ class: ("mb-15") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ xs: ((24)), sm: ((12)), md: ((8)), }));
    const __VLS_8 = __VLS_7({ xs: ((24)), sm: ((12)), md: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("h-full border-0") }, bodyStyle: (({ padding: '20px' })), }));
    const __VLS_14 = __VLS_13({ ...{ class: ("h-full border-0") }, bodyStyle: (({ padding: '20px' })), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-2xl font-bold text-blue-500 mb-1") }, });
    (__VLS_ctx.messageCount);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-sm font-medium text-gray-900 mb-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs text-gray-500") }, });
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ xs: ((24)), sm: ((12)), md: ((8)), }));
    const __VLS_20 = __VLS_19({ xs: ((24)), sm: ((12)), md: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("h-full border-0") }, bodyStyle: (({ padding: '20px' })), }));
    const __VLS_26 = __VLS_25({ ...{ class: ("h-full border-0") }, bodyStyle: (({ padding: '20px' })), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
    /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ type: ((__VLS_ctx.connectionTagType)), size: ("large"), ...{ class: ("mb-2") }, }));
    const __VLS_32 = __VLS_31({ type: ((__VLS_ctx.connectionTagType)), size: ("large"), ...{ class: ("mb-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    (__VLS_ctx.wsClient?.connectionStatusText || '未连接');
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-sm font-medium text-gray-900") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs text-gray-500") }, });
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ xs: ((24)), sm: ((12)), md: ((8)), }));
    const __VLS_38 = __VLS_37({ xs: ((24)), sm: ((12)), md: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ class: ("h-full border-0") }, bodyStyle: (({ padding: '20px' })), }));
    const __VLS_44 = __VLS_43({ ...{ class: ("h-full border-0") }, bodyStyle: (({ padding: '20px' })), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-2xl font-bold text-amber-500 mb-1") }, });
    (__VLS_ctx.reconnectCount);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-sm font-medium text-gray-900 mb-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs text-gray-500") }, });
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47;
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ gutter: ((20)), ...{ class: ("mb-15") }, }));
    const __VLS_50 = __VLS_49({ gutter: ((20)), ...{ class: ("mb-15") }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ xs: ((24)), md: ((12)), }));
    const __VLS_56 = __VLS_55({ xs: ((24)), md: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ class: ("h-full border-0") }, }));
    const __VLS_62 = __VLS_61({ ...{ class: ("h-full border-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_65.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-bold") }, });
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ type: ((__VLS_ctx.connectionTagType)), size: ("large"), }));
        const __VLS_68 = __VLS_67({ type: ((__VLS_ctx.connectionTagType)), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        (__VLS_ctx.wsClient?.connectionStatusText || '未连接');
        __VLS_nonNullable(__VLS_71.slots).default;
        var __VLS_71;
    }
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.ElForm, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ model: ((__VLS_ctx.connectForm)), labelWidth: ("100px"), ...{ class: ("max-w-md") }, }));
    const __VLS_74 = __VLS_73({ model: ((__VLS_ctx.connectForm)), labelWidth: ("100px"), ...{ class: ("max-w-md") }, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ label: ("服务器地址"), }));
    const __VLS_80 = __VLS_79({ label: ("服务器地址"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ modelValue: ((__VLS_ctx.connectForm.url)), placeholder: ("ws://localhost:8080/ws"), clearable: (true), }));
    const __VLS_86 = __VLS_85({ modelValue: ((__VLS_ctx.connectForm.url)), placeholder: ("ws://localhost:8080/ws"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_nonNullable(__VLS_83.slots).default;
    var __VLS_83;
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ label: ("连接选项"), }));
    const __VLS_92 = __VLS_91({ label: ("连接选项"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.ElSpace, ] } */
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
    const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
    const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElCheckbox;
    /** @type { [typeof __VLS_components.ElCheckbox, typeof __VLS_components.ElCheckbox, ] } */
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ modelValue: ((__VLS_ctx.connectForm.autoReconnect)), }));
    const __VLS_104 = __VLS_103({ modelValue: ((__VLS_ctx.connectForm.autoReconnect)), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    __VLS_nonNullable(__VLS_107.slots).default;
    var __VLS_107;
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElCheckbox;
    /** @type { [typeof __VLS_components.ElCheckbox, typeof __VLS_components.ElCheckbox, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ modelValue: ((__VLS_ctx.connectForm.heartbeat)), }));
    const __VLS_110 = __VLS_109({ modelValue: ((__VLS_ctx.connectForm.heartbeat)), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    __VLS_nonNullable(__VLS_113.slots).default;
    var __VLS_113;
    __VLS_nonNullable(__VLS_101.slots).default;
    var __VLS_101;
    __VLS_nonNullable(__VLS_95.slots).default;
    var __VLS_95;
    const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({}));
    const __VLS_116 = __VLS_115({}, ...__VLS_functionalComponentArgsRest(__VLS_115));
    const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.ElSpace, ] } */
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({}));
    const __VLS_122 = __VLS_121({}, ...__VLS_functionalComponentArgsRest(__VLS_121));
    const __VLS_126 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ ...{ 'onClick': {} }, type: ("primary"), loading: ((__VLS_ctx.isConnecting)), disabled: ((__VLS_ctx.isConnected)), }));
    const __VLS_128 = __VLS_127({ ...{ 'onClick': {} }, type: ("primary"), loading: ((__VLS_ctx.isConnecting)), disabled: ((__VLS_ctx.isConnected)), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    let __VLS_132;
    const __VLS_133 = {
        onClick: (__VLS_ctx.handleConnect)
    };
    let __VLS_129;
    let __VLS_130;
    (__VLS_ctx.isConnecting ? '连接中...' : '连接');
    __VLS_nonNullable(__VLS_131.slots).default;
    var __VLS_131;
    const __VLS_134 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ ...{ 'onClick': {} }, type: ("danger"), disabled: ((!__VLS_ctx.isConnected)), }));
    const __VLS_136 = __VLS_135({ ...{ 'onClick': {} }, type: ("danger"), disabled: ((!__VLS_ctx.isConnected)), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    let __VLS_140;
    const __VLS_141 = {
        onClick: (__VLS_ctx.handleDisconnect)
    };
    let __VLS_137;
    let __VLS_138;
    __VLS_nonNullable(__VLS_139.slots).default;
    var __VLS_139;
    const __VLS_142 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isConnecting)), }));
    const __VLS_144 = __VLS_143({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.isConnecting)), }, ...__VLS_functionalComponentArgsRest(__VLS_143));
    let __VLS_148;
    const __VLS_149 = {
        onClick: (__VLS_ctx.handleReconnect)
    };
    let __VLS_145;
    let __VLS_146;
    __VLS_nonNullable(__VLS_147.slots).default;
    var __VLS_147;
    __VLS_nonNullable(__VLS_125.slots).default;
    var __VLS_125;
    __VLS_nonNullable(__VLS_119.slots).default;
    var __VLS_119;
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    var __VLS_65;
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    const __VLS_150 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ xs: ((24)), md: ((12)), }));
    const __VLS_152 = __VLS_151({ xs: ((24)), md: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
    const __VLS_156 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ ...{ class: ("h-full border-0") }, }));
    const __VLS_158 = __VLS_157({ ...{ class: ("h-full border-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_157));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_161.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-bold") }, });
    }
    const __VLS_162 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.ElForm, ] } */
    // @ts-ignore
    const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ ...{ 'onSubmit': {} }, model: ((__VLS_ctx.messageForm)), }));
    const __VLS_164 = __VLS_163({ ...{ 'onSubmit': {} }, model: ((__VLS_ctx.messageForm)), }, ...__VLS_functionalComponentArgsRest(__VLS_163));
    let __VLS_168;
    const __VLS_169 = {
        onSubmit: (__VLS_ctx.handleSendMessage)
    };
    let __VLS_165;
    let __VLS_166;
    const __VLS_170 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ label: ("消息类型"), }));
    const __VLS_172 = __VLS_171({ label: ("消息类型"), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
    const __VLS_176 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.ElSelect, ] } */
    // @ts-ignore
    const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ modelValue: ((__VLS_ctx.messageForm.type)), ...{ class: ("w-full") }, }));
    const __VLS_178 = __VLS_177({ modelValue: ((__VLS_ctx.messageForm.type)), ...{ class: ("w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_177));
    const __VLS_182 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
    /** @type { [typeof __VLS_components.ElOption, ] } */
    // @ts-ignore
    const __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({ label: ("文本消息"), value: ("text"), }));
    const __VLS_184 = __VLS_183({ label: ("文本消息"), value: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
    const __VLS_188 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
    /** @type { [typeof __VLS_components.ElOption, ] } */
    // @ts-ignore
    const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({ label: ("JSON数据"), value: ("json"), }));
    const __VLS_190 = __VLS_189({ label: ("JSON数据"), value: ("json"), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
    const __VLS_194 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
    /** @type { [typeof __VLS_components.ElOption, ] } */
    // @ts-ignore
    const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({ label: ("心跳包"), value: ("ping"), }));
    const __VLS_196 = __VLS_195({ label: ("心跳包"), value: ("ping"), }, ...__VLS_functionalComponentArgsRest(__VLS_195));
    __VLS_nonNullable(__VLS_181.slots).default;
    var __VLS_181;
    __VLS_nonNullable(__VLS_175.slots).default;
    var __VLS_175;
    const __VLS_200 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({ label: ("消息内容"), }));
    const __VLS_202 = __VLS_201({ label: ("消息内容"), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
    const __VLS_206 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({ modelValue: ((__VLS_ctx.messageForm.content)), type: ("textarea"), rows: ((4)), placeholder: ("请输入要发送的消息内容"), }));
    const __VLS_208 = __VLS_207({ modelValue: ((__VLS_ctx.messageForm.content)), type: ("textarea"), rows: ((4)), placeholder: ("请输入要发送的消息内容"), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
    __VLS_nonNullable(__VLS_205.slots).default;
    var __VLS_205;
    const __VLS_212 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_213 = __VLS_asFunctionalComponent(__VLS_212, new __VLS_212({}));
    const __VLS_214 = __VLS_213({}, ...__VLS_functionalComponentArgsRest(__VLS_213));
    const __VLS_218 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.ElSpace, ] } */
    // @ts-ignore
    const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({}));
    const __VLS_220 = __VLS_219({}, ...__VLS_functionalComponentArgsRest(__VLS_219));
    const __VLS_224 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, new __VLS_224({ ...{ 'onClick': {} }, type: ("primary"), disabled: ((!__VLS_ctx.isConnected || !__VLS_ctx.messageForm.content)), }));
    const __VLS_226 = __VLS_225({ ...{ 'onClick': {} }, type: ("primary"), disabled: ((!__VLS_ctx.isConnected || !__VLS_ctx.messageForm.content)), }, ...__VLS_functionalComponentArgsRest(__VLS_225));
    let __VLS_230;
    const __VLS_231 = {
        onClick: (__VLS_ctx.handleSendMessage)
    };
    let __VLS_227;
    let __VLS_228;
    __VLS_nonNullable(__VLS_229.slots).default;
    var __VLS_229;
    const __VLS_232 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_233 = __VLS_asFunctionalComponent(__VLS_232, new __VLS_232({ ...{ 'onClick': {} }, }));
    const __VLS_234 = __VLS_233({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_233));
    let __VLS_238;
    const __VLS_239 = {
        onClick: (__VLS_ctx.clearMessageForm)
    };
    let __VLS_235;
    let __VLS_236;
    __VLS_nonNullable(__VLS_237.slots).default;
    var __VLS_237;
    __VLS_nonNullable(__VLS_223.slots).default;
    var __VLS_223;
    __VLS_nonNullable(__VLS_217.slots).default;
    var __VLS_217;
    __VLS_nonNullable(__VLS_167.slots).default;
    var __VLS_167;
    var __VLS_161;
    __VLS_nonNullable(__VLS_155.slots).default;
    var __VLS_155;
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    const __VLS_240 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_241 = __VLS_asFunctionalComponent(__VLS_240, new __VLS_240({ ...{ class: ("mb-15") }, }));
    const __VLS_242 = __VLS_241({ ...{ class: ("mb-15") }, }, ...__VLS_functionalComponentArgsRest(__VLS_241));
    const __VLS_246 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_247 = __VLS_asFunctionalComponent(__VLS_246, new __VLS_246({ span: ((24)), }));
    const __VLS_248 = __VLS_247({ span: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_247));
    const __VLS_252 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_253 = __VLS_asFunctionalComponent(__VLS_252, new __VLS_252({ ...{ class: ("border-0") }, }));
    const __VLS_254 = __VLS_253({ ...{ class: ("border-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_253));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_257.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-bold") }, });
        const __VLS_258 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_259 = __VLS_asFunctionalComponent(__VLS_258, new __VLS_258({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_260 = __VLS_259({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_259));
        let __VLS_264;
        const __VLS_265 = {
            onClick: (__VLS_ctx.clearMessages)
        };
        let __VLS_261;
        let __VLS_262;
        __VLS_nonNullable(__VLS_263.slots).default;
        var __VLS_263;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("message-container") }, });
    for (const [message, index] of __VLS_getVForSourceType((__VLS_ctx.messageList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("message-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("message-header") }, });
        const __VLS_266 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_267 = __VLS_asFunctionalComponent(__VLS_266, new __VLS_266({ size: ("small"), type: ((message.type === 'received' ? 'success' : 'info')), }));
        const __VLS_268 = __VLS_267({ size: ("small"), type: ((message.type === 'received' ? 'success' : 'info')), }, ...__VLS_functionalComponentArgsRest(__VLS_267));
        (message.type === 'received' ? '接收' : '发送');
        __VLS_nonNullable(__VLS_271.slots).default;
        var __VLS_271;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("message-time") }, });
        (message.time);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("message-content") }, });
        (message.content);
    }
    if (__VLS_ctx.messageList.length === 0) {
        const __VLS_272 = __VLS_resolvedLocalAndGlobalComponents.ElEmpty;
        /** @type { [typeof __VLS_components.ElEmpty, ] } */
        // @ts-ignore
        const __VLS_273 = __VLS_asFunctionalComponent(__VLS_272, new __VLS_272({ description: ("暂无消息记录"), imageSize: ((100)), }));
        const __VLS_274 = __VLS_273({ description: ("暂无消息记录"), imageSize: ((100)), }, ...__VLS_functionalComponentArgsRest(__VLS_273));
    }
    var __VLS_257;
    __VLS_nonNullable(__VLS_251.slots).default;
    var __VLS_251;
    __VLS_nonNullable(__VLS_245.slots).default;
    var __VLS_245;
    const __VLS_278 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_279 = __VLS_asFunctionalComponent(__VLS_278, new __VLS_278({ ...{ class: ("border-0") }, }));
    const __VLS_280 = __VLS_279({ ...{ class: ("border-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_279));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_283.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-bold") }, });
        const __VLS_284 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_285 = __VLS_asFunctionalComponent(__VLS_284, new __VLS_284({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_286 = __VLS_285({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_285));
        let __VLS_290;
        const __VLS_291 = {
            onClick: (__VLS_ctx.clearLogs)
        };
        let __VLS_287;
        let __VLS_288;
        __VLS_nonNullable(__VLS_289.slots).default;
        var __VLS_289;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("log-container") }, });
    for (const [log, index] of __VLS_getVForSourceType((__VLS_ctx.logList))) {
        const __VLS_292 = __VLS_resolvedLocalAndGlobalComponents.ElAlert;
        /** @type { [typeof __VLS_components.ElAlert, typeof __VLS_components.ElAlert, ] } */
        // @ts-ignore
        const __VLS_293 = __VLS_asFunctionalComponent(__VLS_292, new __VLS_292({ key: ((index)), type: ((log.type)), closable: ((false)), ...{ class: ("!mb-2") }, }));
        const __VLS_294 = __VLS_293({ key: ((index)), type: ((log.type)), closable: ((false)), ...{ class: ("!mb-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_293));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_297.slots);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start gap-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs opacity-70 whitespace-nowrap") }, });
            (log.time);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex-1") }, });
            (log.message);
        }
        var __VLS_297;
    }
    if (__VLS_ctx.logList.length === 0) {
        const __VLS_298 = __VLS_resolvedLocalAndGlobalComponents.ElEmpty;
        /** @type { [typeof __VLS_components.ElEmpty, ] } */
        // @ts-ignore
        const __VLS_299 = __VLS_asFunctionalComponent(__VLS_298, new __VLS_298({ description: ("暂无日志记录"), imageSize: ((100)), }));
        const __VLS_300 = __VLS_299({ description: ("暂无日志记录"), imageSize: ((100)), }, ...__VLS_functionalComponentArgsRest(__VLS_299));
    }
    var __VLS_283;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-15'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['my-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['leading-tight'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['leading-relaxed'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['mb-15'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['border-0'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['border-0'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['border-0'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-amber-500'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mb-15'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['border-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['max-w-md'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['border-0'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['mb-15'];
    __VLS_styleScopedClasses['border-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['message-container'];
    __VLS_styleScopedClasses['message-item'];
    __VLS_styleScopedClasses['message-header'];
    __VLS_styleScopedClasses['message-time'];
    __VLS_styleScopedClasses['message-content'];
    __VLS_styleScopedClasses['border-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['log-container'];
    __VLS_styleScopedClasses['!mb-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['opacity-70'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['flex-1'];
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
            wsClient: wsClient,
            isConnecting: isConnecting,
            isConnected: isConnected,
            reconnectCount: reconnectCount,
            messageCount: messageCount,
            connectForm: connectForm,
            messageForm: messageForm,
            messageList: messageList,
            logList: logList,
            connectionTagType: connectionTagType,
            handleConnect: handleConnect,
            handleDisconnect: handleDisconnect,
            handleReconnect: handleReconnect,
            handleSendMessage: handleSendMessage,
            clearMessageForm: clearMessageForm,
            clearMessages: clearMessages,
            clearLogs: clearLogs,
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