import { ElTag, ElLink, ElMessage, ElMessageBox, ElSwitch, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import { Edit, CopyDocument, ArrowDown } from '@element-plus/icons-vue';
import { useTable } from '@/hooks/core/useTable';
import { useRouter } from 'vue-router';
import ClusterSearch from './modules/cluster-search.vue';
import ClusterDialog from './modules/cluster-dialog.vue';
import ClusterMonitor from './modules/cluster-monitor.vue';
import { fetchClusterList, fetchDeleteCluster, fetchUpdateClusterAlias, fetchProtectCluster, fetchGetCluster } from '@/api/container';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'Cluster' });
const router = useRouter();
const STATUS_CONFIG = {
    0: { type: 'success', text: '运行中' },
    1: { type: 'primary', text: '部署中' },
    2: { type: 'info', text: '等待部署' },
    3: { type: 'danger', text: '部署失败' },
    4: { type: 'warning', text: '集群失联' }
};
const searchForm = ref({ clusterName: undefined, status: undefined });
const dialogVisible = ref(false);
const dialogType = ref('add');
const currentRow = ref({});
const selectedRows = ref([]);
const monitorVisible = ref(false);
const monitorCluster = ref(null);
const protectingIds = ref(new Set());
// 重命名对话框
const renameVisible = ref(false);
const renameRow = ref(null);
const newAliasName = ref('');
const renameError = ref('');
const renameLoading = ref(false);
// 集群凭证对话框
const credentialVisible = ref(false);
const credentialContent = ref('');
const credentialLoading = ref(false);
const { columns, columnChecks, data, loading, pagination, getData, replaceSearchParams, resetSearchParams, handleSizeChange, handleCurrentChange, refreshData } = useTable({
    core: {
        apiFn: async (params) => {
            const { total, items } = await fetchClusterList({
                page: params.current,
                limit: params.size,
                nameSelector: params.clusterName,
                status: params.status
            });
            return {
                code: 200,
                data: { records: items, total, current: params.current, size: params.size }
            };
        },
        apiParams: { current: 1, size: 10 },
        columnsFactory: () => [
            { type: 'selection' },
            {
                prop: 'aliasName',
                label: '名称/ID',
                minWidth: 180,
                formatter: (row) => h('div', { style: 'line-height:1.8' }, [
                    h('div', { style: 'display:flex;align-items:center;gap:4px' }, [
                        h(ElLink, { type: 'primary', underline: 'never', style: 'font-size:14px', onClick: () => router.push(`/container/cluster/${row.id}`) }, () => row.aliasName),
                        h('span', {
                            class: 'icon-action',
                            style: 'cursor:pointer;color:var(--el-text-color-secondary);display:inline-flex;align-items:center',
                            title: '编辑名称',
                            onClick: (e) => { e.stopPropagation(); openRenameDialog(row); }
                        }, [h(Edit, { style: 'width:12px;height:12px' })])
                    ]),
                    h('div', { style: 'display:flex;align-items:center;gap:4px;color:var(--el-text-color-secondary);font-size:12px' }, [
                        h('span', row.name),
                        h('span', {
                            class: 'icon-action',
                            style: 'cursor:pointer;display:inline-flex;align-items:center',
                            title: '复制',
                            onClick: (e) => { e.stopPropagation(); navigator.clipboard.writeText(row.name); ElMessage.success('已复制'); }
                        }, [h(CopyDocument, { style: 'width:12px;height:12px' })])
                    ])
                ])
            },
            {
                prop: 'status',
                label: '状态',
                formatter: (row) => {
                    const cfg = STATUS_CONFIG[row.status] ?? { type: 'info', text: '未知' };
                    return h(ElTag, { type: cfg.type }, () => cfg.text);
                }
            },
            {
                prop: 'monitor',
                label: '监控',
                formatter: (row) => h('span', {
                    style: 'cursor:pointer;color:var(--el-color-primary)',
                    title: '查看监控',
                    onClick: () => openMonitor(row)
                }, [
                    h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, viewBox: '0 0 16 16', fill: 'currentColor' }, [
                        h('rect', { x: 1, y: 10, width: 1.5, height: 5, rx: 0.75 }),
                        h('rect', { x: 6.5, y: 3, width: 1.5, height: 12, rx: 0.75 }),
                        h('rect', { x: 12, y: 7, width: 1.5, height: 8, rx: 0.75 })
                    ])
                ])
            },
            { prop: 'version', label: 'Kubernetes 版本', formatter: (row) => h('span', { style: 'font-size:12px' }, row.version) },
            {
                prop: 'nodeCount',
                label: '节点数',
                formatter: (row) => {
                    if (row.nodeNotReady === 0) {
                        return h('span', { style: 'font-size:12px' }, [`${row.nodeCount}台（`, h('span', { style: 'color:var(--el-color-success)' }, '全部正常'), '）']);
                    }
                    return h('span', { style: 'font-size:12px' }, [`${row.nodeReady}台正常，`, h('span', { style: 'color:var(--el-color-danger)' }, `${row.nodeNotReady}台异常`)]);
                }
            },
            {
                prop: 'isProtected',
                label: '保护状态',
                formatter: (row) => h(ElSwitch, {
                    modelValue: row.isProtected,
                    loading: protectingIds.value.has(row.id),
                    onChange: async (val) => {
                        protectingIds.value.add(row.id);
                        try {
                            await fetchProtectCluster(row.id, row.resourceVersion, val);
                            ElMessage.success(val ? '已开启保护' : '已关闭保护');
                            refreshData();
                        }
                        catch (e) {
                            ElMessage.error(e.message || '操作失败');
                        }
                        finally {
                            protectingIds.value.delete(row.id);
                        }
                    }
                })
            },
            { prop: 'createTime', label: '创建时间', sortable: true, width: 160, showOverflowTooltip: true, formatter: (row) => h('span', { style: 'font-size:12px' }, row.createTime) },
            {
                prop: 'operation',
                label: '操作',
                width: 160,
                fixed: 'right',
                formatter: (row) => h('div', { style: 'display:flex;align-items:center;gap:12px' }, [
                    h(ElLink, { type: 'primary', underline: 'never', style: 'font-size:12px', onClick: () => showDialog('edit', row) }, () => '编辑'),
                    h(ElLink, { type: 'primary', underline: 'never', style: 'font-size:12px', onClick: () => deleteCluster(row) }, () => '删除'),
                    h(ElDropdown, { trigger: 'click' }, {
                        default: () => h(ElLink, { type: 'primary', underline: 'never', style: 'font-size:12px' }, () => [
                            '更多',
                            h(ArrowDown, { style: 'width:10px;height:10px;margin-left:2px;vertical-align:middle' })
                        ]),
                        dropdown: () => h(ElDropdownMenu, null, [
                            h(ElDropdownItem, { onClick: () => openClusterTab(row, 'alert') }, () => '配置告警'),
                            h(ElDropdownItem, { onClick: () => openClusterTab(row, 'logs') }, () => '采集日志'),
                            h(ElDropdownItem, { divided: true, onClick: () => viewCredential(row) }, () => '查看集群凭证')
                        ])
                    })
                ])
            }
        ]
    }
});
function openMonitor(row) {
    monitorCluster.value = row;
    monitorVisible.value = true;
}
function openClusterTab(row, tab) {
    router.push({ path: `/container/cluster/${row.id}`, query: { tab } });
}
function openRenameDialog(row) {
    renameRow.value = row;
    newAliasName.value = '';
    renameError.value = '';
    renameVisible.value = true;
}
async function submitRename() {
    if (!newAliasName.value.trim()) {
        renameError.value = '集群名称不能为空';
        return;
    }
    if (!renameRow.value)
        return;
    renameLoading.value = true;
    try {
        await fetchUpdateClusterAlias(renameRow.value.id, renameRow.value.resourceVersion, newAliasName.value.trim());
        ElMessage.success('修改成功');
        renameVisible.value = false;
        refreshData();
    }
    catch (e) {
        ElMessage.error(e.message || '修改失败');
    }
    finally {
        renameLoading.value = false;
    }
}
async function viewCredential(row) {
    credentialContent.value = '';
    credentialVisible.value = true;
    credentialLoading.value = true;
    try {
        const cluster = await fetchGetCluster(row.id);
        credentialContent.value = cluster.kube_config || '（暂无凭证）';
    }
    catch (e) {
        ElMessage.error(e.message || '获取凭证失败');
        credentialVisible.value = false;
    }
    finally {
        credentialLoading.value = false;
    }
}
function copyCredential() {
    if (!credentialContent.value)
        return;
    navigator.clipboard.writeText(credentialContent.value);
    ElMessage.success('已复制');
}
function handleSearch(params) {
    replaceSearchParams(params);
    getData();
}
function handleReset() {
    resetSearchParams();
}
function showDialog(type, row) {
    dialogType.value = type;
    currentRow.value = row || {};
    nextTick(() => { dialogVisible.value = true; });
}
async function deleteCluster(row) {
    try {
        await ElMessageBox.confirm(`确定要删除集群 "${row.clusterName}" 吗？`, '删除集群', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        await fetchDeleteCluster(row.id);
        ElMessage.success('删除成功');
        refreshData();
    }
    catch { }
}
function handleSelectionChange(rows) {
    selectedRows.value = rows;
}
function handleDialogSubmit() {
    dialogVisible.value = false;
    currentRow.value = {};
    refreshData();
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cluster-page art-full-height") }, });
    // @ts-ignore
    [ClusterSearch,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ClusterSearch, new ClusterSearch({ ...{ 'onSearch': {} }, ...{ 'onReset': {} }, modelValue: ((__VLS_ctx.searchForm)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onSearch': {} }, ...{ 'onReset': {} }, modelValue: ((__VLS_ctx.searchForm)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onSearch: (__VLS_ctx.handleSearch)
    };
    const __VLS_7 = {
        onReset: (__VLS_ctx.handleReset)
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ class: ("art-table-card") }, }));
    const __VLS_10 = __VLS_9({ ...{ class: ("art-table-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ArtTableHeader;
    /** @type { [typeof __VLS_components.ArtTableHeader, typeof __VLS_components.ArtTableHeader, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onRefresh': {} }, columns: ((__VLS_ctx.columnChecks)), loading: ((__VLS_ctx.loading)), }));
    const __VLS_16 = __VLS_15({ ...{ 'onRefresh': {} }, columns: ((__VLS_ctx.columnChecks)), loading: ((__VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_20;
    const __VLS_21 = {
        onRefresh: (__VLS_ctx.refreshData)
    };
    let __VLS_17;
    let __VLS_18;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { left: __VLS_thisSlot } = __VLS_nonNullable(__VLS_19.slots);
        const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onClick': {} }, }));
        const __VLS_24 = __VLS_23({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
        let __VLS_28;
        const __VLS_29 = {
            onClick: (...[$event]) => {
                __VLS_ctx.showDialog('add');
            }
        };
        let __VLS_25;
        let __VLS_26;
        __VLS_nonNullable(__VLS_27.slots).default;
        var __VLS_27;
    }
    var __VLS_19;
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ArtTable;
    /** @type { [typeof __VLS_components.ArtTable, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onSelectionChange': {} }, ...{ 'onPagination:sizeChange': {} }, ...{ 'onPagination:currentChange': {} }, rowKey: ("id"), loading: ((__VLS_ctx.loading)), data: ((__VLS_ctx.data)), columns: ((__VLS_ctx.columns)), pagination: ((__VLS_ctx.pagination)), paginationOptions: (({ align: 'right' })), }));
    const __VLS_32 = __VLS_31({ ...{ 'onSelectionChange': {} }, ...{ 'onPagination:sizeChange': {} }, ...{ 'onPagination:currentChange': {} }, rowKey: ("id"), loading: ((__VLS_ctx.loading)), data: ((__VLS_ctx.data)), columns: ((__VLS_ctx.columns)), pagination: ((__VLS_ctx.pagination)), paginationOptions: (({ align: 'right' })), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    let __VLS_36;
    const __VLS_37 = {
        onSelectionChange: (__VLS_ctx.handleSelectionChange)
    };
    const __VLS_38 = {
        'onPagination:sizeChange': (__VLS_ctx.handleSizeChange)
    };
    const __VLS_39 = {
        'onPagination:currentChange': (__VLS_ctx.handleCurrentChange)
    };
    let __VLS_33;
    let __VLS_34;
    var __VLS_35;
    // @ts-ignore
    [ClusterDialog,];
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(ClusterDialog, new ClusterDialog({ ...{ 'onSubmit': {} }, visible: ((__VLS_ctx.dialogVisible)), type: ((__VLS_ctx.dialogType)), clusterData: ((__VLS_ctx.currentRow)), }));
    const __VLS_41 = __VLS_40({ ...{ 'onSubmit': {} }, visible: ((__VLS_ctx.dialogVisible)), type: ((__VLS_ctx.dialogType)), clusterData: ((__VLS_ctx.currentRow)), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    let __VLS_45;
    const __VLS_46 = {
        onSubmit: (__VLS_ctx.handleDialogSubmit)
    };
    let __VLS_42;
    let __VLS_43;
    var __VLS_44;
    __VLS_nonNullable(__VLS_13.slots).default;
    var __VLS_13;
    // @ts-ignore
    [ClusterMonitor,];
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(ClusterMonitor, new ClusterMonitor({ modelValue: ((__VLS_ctx.monitorVisible)), cluster: ((__VLS_ctx.monitorCluster)), }));
    const __VLS_48 = __VLS_47({ modelValue: ((__VLS_ctx.monitorVisible)), cluster: ((__VLS_ctx.monitorCluster)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.ElDialog, ] } */
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ modelValue: ((__VLS_ctx.renameVisible)), title: ("编辑集群名称"), width: ("420px"), closeOnClickModal: ((false)), }));
    const __VLS_54 = __VLS_53({ modelValue: ((__VLS_ctx.renameVisible)), title: ("编辑集群名称"), width: ("420px"), closeOnClickModal: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rename-form") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rename-row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("rename-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("rename-value") }, });
    (__VLS_ctx.renameRow?.aliasName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rename-row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("rename-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rename-input-wrap") }, });
    const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.newAliasName)), placeholder: ("请输入新名称"), }));
    const __VLS_60 = __VLS_59({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.newAliasName)), placeholder: ("请输入新名称"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    let __VLS_64;
    const __VLS_65 = {
        onInput: (...[$event]) => {
            __VLS_ctx.renameError = '';
        }
    };
    let __VLS_61;
    let __VLS_62;
    var __VLS_63;
    if (__VLS_ctx.renameError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("rename-error") }, });
        (__VLS_ctx.renameError);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_57.slots);
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{ 'onClick': {} }, type: ("primary"), loading: ((__VLS_ctx.renameLoading)), }));
        const __VLS_68 = __VLS_67({ ...{ 'onClick': {} }, type: ("primary"), loading: ((__VLS_ctx.renameLoading)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        let __VLS_72;
        const __VLS_73 = {
            onClick: (__VLS_ctx.submitRename)
        };
        let __VLS_69;
        let __VLS_70;
        __VLS_nonNullable(__VLS_71.slots).default;
        var __VLS_71;
        const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{ 'onClick': {} }, }));
        const __VLS_76 = __VLS_75({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_75));
        let __VLS_80;
        const __VLS_81 = {
            onClick: (...[$event]) => {
                __VLS_ctx.renameVisible = false;
            }
        };
        let __VLS_77;
        let __VLS_78;
        __VLS_nonNullable(__VLS_79.slots).default;
        var __VLS_79;
    }
    var __VLS_57;
    const __VLS_82 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.ElDialog, ] } */
    // @ts-ignore
    const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ modelValue: ((__VLS_ctx.credentialVisible)), title: ("集群凭证"), width: ("600px"), }));
    const __VLS_84 = __VLS_83({ modelValue: ((__VLS_ctx.credentialVisible)), title: ("集群凭证"), width: ("600px"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
    if (__VLS_ctx.credentialLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
        const __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_90 = __VLS_89({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
        let __VLS_94;
        const __VLS_95 = {
            onClick: (__VLS_ctx.copyCredential)
        };
        let __VLS_91;
        let __VLS_92;
        __VLS_nonNullable(__VLS_93.slots).default;
        var __VLS_93;
        const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, ] } */
        // @ts-ignore
        const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ modelValue: ((__VLS_ctx.credentialContent)), type: ("textarea"), rows: ((16)), readonly: (true), ...{ style: ({}) }, }));
        const __VLS_98 = __VLS_97({ modelValue: ((__VLS_ctx.credentialContent)), type: ("textarea"), rows: ((16)), readonly: (true), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    }
    __VLS_nonNullable(__VLS_87.slots).default;
    var __VLS_87;
    __VLS_styleScopedClasses['cluster-page'];
    __VLS_styleScopedClasses['art-full-height'];
    __VLS_styleScopedClasses['art-table-card'];
    __VLS_styleScopedClasses['rename-form'];
    __VLS_styleScopedClasses['rename-row'];
    __VLS_styleScopedClasses['rename-label'];
    __VLS_styleScopedClasses['rename-value'];
    __VLS_styleScopedClasses['rename-row'];
    __VLS_styleScopedClasses['rename-label'];
    __VLS_styleScopedClasses['rename-input-wrap'];
    __VLS_styleScopedClasses['rename-error'];
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
            ClusterSearch: ClusterSearch,
            ClusterDialog: ClusterDialog,
            ClusterMonitor: ClusterMonitor,
            searchForm: searchForm,
            dialogVisible: dialogVisible,
            dialogType: dialogType,
            currentRow: currentRow,
            monitorVisible: monitorVisible,
            monitorCluster: monitorCluster,
            renameVisible: renameVisible,
            renameRow: renameRow,
            newAliasName: newAliasName,
            renameError: renameError,
            renameLoading: renameLoading,
            credentialVisible: credentialVisible,
            credentialContent: credentialContent,
            credentialLoading: credentialLoading,
            columns: columns,
            columnChecks: columnChecks,
            data: data,
            loading: loading,
            pagination: pagination,
            handleSizeChange: handleSizeChange,
            handleCurrentChange: handleCurrentChange,
            refreshData: refreshData,
            submitRename: submitRename,
            copyCredential: copyCredential,
            handleSearch: handleSearch,
            handleReset: handleReset,
            showDialog: showDialog,
            handleSelectionChange: handleSelectionChange,
            handleDialogSubmit: handleDialogSubmit,
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