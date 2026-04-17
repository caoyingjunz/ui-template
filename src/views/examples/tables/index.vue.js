/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, computed, watch, nextTick } from 'vue';
import { Plus, Delete, Edit, Search, Refresh, QuestionFilled, ArrowDown } from '@element-plus/icons-vue';
import { ElMessageBox } from 'element-plus';
import { useTable, CacheInvalidationStrategy } from '@/hooks/core/useTable';
import { fetchGetUserList } from '@/api/system-manage';
import { ACCOUNT_TABLE_DATA } from '@/mock/temp/formData';
import { getColumnKey } from '@/hooks/core/useTableColumns';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'AdvancedTableDemo' });
// 选中的行
const selectedRows = ref([]);
// 表格实例引用
const tableRef = ref();
// 调试面板状态
const showDebugPanel = ref(false);
const debugActiveNames = ref(['cache', 'request', 'logs']);
// 缓存调试状态
const cacheDebugLogs = ref([]);
const requestParams = ref({
    current: 1,
    size: 20,
    name: '',
    phone: '',
    status: '',
    department: '',
    daterange: undefined
});
// 缓存键信息
const cacheKeys = ref([]);
// 手机号搜索
const phoneSearch = ref('');
// 事件演示相关
const eventDemoEnabled = ref(false);
const eventLogs = ref([]);
// 表格配置演示
const tableConfig = ref({
    height: '100%',
    fixedHeight: false // 新增：是否固定高度的开关
});
// 计算实际的表格高度
const computedTableHeight = computed(() => {
    return tableConfig.value.fixedHeight ? '500px' : '';
});
// 搜索表单 ref
const searchBarRef = ref();
// 校验规则
const rules = {
    name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
    ]
};
// 表单搜索初始值
const searchFormState = ref({
    name: '',
    phone: '',
    status: '1',
    department: '',
    daterange: ['2025-01-01', '2025-02-10']
});
// 搜索表单状态
// const searchFormState = ref({ ...defaultFilter.value })
// 用户状态配置
const USER_STATUS_CONFIG = {
    '1': { type: 'success', text: '在线' },
    '2': { type: 'info', text: '离线' },
    '3': { type: 'warning', text: '异常' },
    '4': { type: 'danger', text: '注销' }
};
// 搜索表单配置
// 日期选择器有多种类型，具体可以查看 src/components/core/forms/art-search-bar/widget/art-search-date/README.md 文档
const searchItems = computed(() => [
    {
        key: 'name',
        label: '用户名',
        type: 'input',
        props: {
            placeholder: '请输入用户名'
        }
    },
    {
        key: 'phone',
        label: '手机号',
        type: 'input',
        props: {
            placeholder: '请输入手机号',
            maxlength: '11'
        }
    },
    {
        key: 'status',
        label: '状态',
        type: 'select',
        options: [
            { label: '全部', value: '' },
            { label: '在线', value: '1' },
            { label: '离线', value: '2' },
            { label: '异常', value: '3' },
            { label: '注销', value: '4' }
        ]
    },
    {
        key: 'department',
        label: '部门',
        type: 'select',
        options: [
            { label: '全部', value: '' },
            { label: '技术部', value: '技术部' },
            { label: '产品部', value: '产品部' },
            { label: '运营部', value: '运营部' },
            { label: '市场部', value: '市场部' },
            { label: '设计部', value: '设计部' }
        ]
    },
    {
        key: 'daterange',
        label: '日期范围',
        type: 'daterange',
        props: {
            type: 'daterange',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
            valueFormat: 'YYYY-MM-DD'
        }
    }
]);
// 导出列配置
const exportColumns = computed(() => ({
    userName: { title: '用户名', width: 15 },
    userEmail: { title: '邮箱', width: 20 },
    userPhone: { title: '手机号', width: 15 },
    userGender: { title: '性别', width: 10 },
    department: { title: '部门', width: 15 },
    status: {
        title: '状态',
        width: 10,
        formatter: (value) => getUserStatusConfig(value).text
    }
}));
// 获取用户状态配置
const getUserStatusConfig = (status) => {
    return (USER_STATUS_CONFIG[status] || {
        type: 'info',
        text: '未知'
    });
};
const buildSearchParams = (params) => {
    const { daterange, ...filtersParams } = params;
    const [startTime, endTime] = Array.isArray(daterange) ? daterange : [null, null];
    return {
        ...filtersParams,
        startTime,
        endTime
    };
};
// 模拟网络请求
// const simulateNetworkRequest = (): Promise<void> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, 500)
//   })
// }
// 模拟网络请求完成后加载数据
// onMounted(async () => {
//   // 等待模拟的网络请求完成
//   await simulateNetworkRequest()
//   await fetchData({ name: 'ricky', phone: 19388828388 })
// })
/**
 * 使用 useTable Hook 管理表格数据
 * 提供完整的表格解决方案，包括数据获取、缓存、分页、搜索等功能
 */
const { 
// 数据相关
data, // 表格数据
loading, // 加载中状态
error, // 数据加载错误状态
hasData, // 是否有数据
// isEmpty, // 数据是否为空
// 分页相关
pagination, // 分页信息
// paginationMobile, // 移动端分页配置
handleSizeChange, // 分页大小变化处理
handleCurrentChange, // 当前页变化处理
// 搜索相关
searchParams, // 搜索参数
replaceSearchParams, // 替换搜索参数
resetSearchParams, // 重置搜索参数
// 数据操作
// fetchData, // 手动加载数据的方法，可用于等待其他请求完成后调用，immediate 为 false 时使用
getData, // 获取数据
getDataDebounced, // 获取数据（防抖）
clearData, // 清空数据
// 刷新策略
refreshData, // 全量刷新：清空所有缓存，重新获取数据（适用于手动刷新按钮）
refreshSoft, // 轻量刷新：仅清空当前搜索条件的缓存，保持分页状态（适用于定时刷新）
refreshCreate, // 新增后刷新：回到第一页并清空分页缓存（适用于新增数据后）
refreshUpdate, // 更新后刷新：保持当前页，仅清空当前搜索缓存（适用于更新数据后）
refreshRemove, // 删除后刷新：智能处理页码，避免空页面（适用于删除数据后）
// 缓存控制
cacheInfo, // 缓存统计信息
clearCache, // 清除缓存，根据不同的业务场景选择性地清理缓存
// 支持4种清理策略
// clearCache(CacheInvalidationStrategy.CLEAR_ALL, '手动刷新')     // 清空所有缓存
// clearCache(CacheInvalidationStrategy.CLEAR_CURRENT, '搜索数据') // 只清空当前搜索条件的缓存
// clearCache(CacheInvalidationStrategy.CLEAR_PAGINATION, '新增数据') // 清空分页相关缓存
// clearCache(CacheInvalidationStrategy.KEEP_ALL, '保持缓存')      // 不清理任何缓存
clearExpiredCache, // 清理已过期的缓存，释放内存空间
// 请求控制
cancelRequest, // 取消当前请求
// 动态列配置方法
columns, // 表格列配置
columnChecks, // 列显示、拖拽配置
addColumn, // 新增列（支持单个或批量）
removeColumn, // 删除列（支持单个或批量）
updateColumn, // 更新列（支持单个或批量）
toggleColumn, // 切换列显示状态（支持单个或批量）
resetColumns, // 重置列配置
reorderColumns, // 重新排序列
getColumnConfig, // 获取列配置
getAllColumns // 获取所有列配置
 } = useTable({
    // 核心配置
    core: {
        apiFn: (params) => {
            // 在API调用前添加调试信息
            const requestKey = JSON.stringify(params);
            console.log('🚀 API 请求参数:', params);
            addCacheLog(`🚀 API 请求: current=${params.current}, size=${params.size}`);
            addCacheLog(`🔑 请求键: ${requestKey.substring(0, 100)}...`);
            // 记录缓存键（这里假设会被缓存）
            updateCacheKeys(requestKey);
            return fetchGetUserList(params);
        },
        apiParams: {
            current: 1,
            size: 20,
            ...searchFormState.value
        },
        // 排除 apiParams 中的属性
        excludeParams: ['daterange'],
        // 自定义分页字段映射，未设置时将使用全局配置 tableConfig.ts 中的 paginationKey
        // paginationKey: {
        //   current: 'pageNum',
        //   size: 'pageSize'
        // },
        immediate: true, // 是否立即加载数据
        columnsFactory: () => [
            // {
            //   type: 'expand',
            //   label: '展开行',
            //   width: 80,
            //   formatter: (row) =>
            //     h('div', { style: 'padding: 10px 30px' }, [
            //       h('p', {}, '用户ID: ' + row.id),
            //       h('p', {}, '用户名: ' + row.userName),
            //       h('p', {}, '手机号: ' + row.userPhone),
            //       h('p', {}, '邮箱: ' + row.userEmail),
            //       h('p', {}, '性别: ' + row.userGender),
            //       h('p', {}, '状态: ' + row.status),
            //       h('p', {}, '创建日期: ' + row.createTime)
            //     ])
            // },
            { type: 'selection', width: 50 },
            // { type: 'index', width: 60, label: '序号' }, // 本地序号列
            { type: 'globalIndex', width: 60, label: '序号' }, // 全局序号列
            {
                prop: 'avatar',
                label: '用户信息',
                minWidth: 200,
                useSlot: true,
                useHeaderSlot: true,
                sortable: false
                // visible: false, // 隐藏列
            },
            {
                prop: 'userGender',
                label: '性别',
                sortable: true,
                formatter: (row) => row.userGender || '未知'
            },
            {
                prop: 'userPhone',
                label: '手机号',
                useHeaderSlot: true,
                sortable: true
            },
            {
                prop: 'department',
                label: '部门',
                sortable: true
            },
            {
                prop: 'score',
                label: '评分',
                useSlot: true,
                sortable: true
            },
            {
                prop: 'status',
                label: '状态',
                useSlot: true,
                sortable: true
            },
            {
                prop: 'operation',
                label: '操作',
                width: 190,
                useSlot: true,
                fixed: 'right'
            }
        ]
    },
    // 数据处理
    transform: {
        dataTransformer: (records) => {
            if (!Array.isArray(records))
                return [];
            return records.map((item, index) => ({
                ...item,
                avatar: ACCOUNT_TABLE_DATA[index % ACCOUNT_TABLE_DATA.length].avatar,
                department: ['技术部', '产品部', '运营部', '市场部', '设计部'][Math.floor(Math.random() * 5)],
                score: Math.floor(Math.random() * 5) + 1,
                status: ['1', '2', '3', '4'][Math.floor(Math.random() * 4)]
            }));
        }
        // 自定义响应适配器，处理后端特殊的返回格式
        // responseAdapter: (data) => {
        //   const { list, total, pageNum, pageSize } = data
        //   return {
        //     records: list,
        //     total: total,
        //     current: pageNum,
        //     size: pageSize
        //   }
        // }
    },
    // 性能优化
    performance: {
        enableCache: true, // 开启缓存
        cacheTime: 5 * 60 * 1000, // 5分钟
        debounceTime: 300,
        maxCacheSize: 100
    },
    // 生命周期钩子
    hooks: {
        onSuccess: (data, response) => {
            console.log('📊 响应详情:', response);
            addCacheLog(`✅ 网络请求成功: ${data.length} 条数据`);
            addCacheLog(`📝 响应信息: total=${response.total}, current=${response.current}, size=${response.size}`);
        },
        onError: (error) => {
            console.error('❌ 数据加载失败:', error);
            addCacheLog(`❌ 请求失败: ${error.message}`);
            ElMessage.error(error.message);
        },
        onCacheHit: (data, response) => {
            console.log('🎯 缓存命中:', data.length, '条');
            console.log('🔑 缓存来源:', response);
            addCacheLog(`🎯 缓存命中: ${data.length} 条数据 (current=${response.current}, size=${response.size})`);
            ElMessage.info('数据来自缓存');
        },
        resetFormCallback: () => {
            console.log('🔄 表单已重置');
            addCacheLog('🔄 表单已重置');
        }
    },
    // 调试配置
    debug: {
        enableLog: true,
        logLevel: 'info'
    }
});
// 事件处理函数
const handleSelectionChange = (selection) => {
    selectedRows.value = selection;
    console.log('选择变更:', selection);
};
const handleRowClick = (row) => {
    console.log('行点击:', row);
    logEvent('行点击', `点击了用户: ${row.userName}`);
};
/**
 * 表头点击事件处理
 * @param column 列信息
 */
const handleHeaderClick = (column) => {
    console.log('表头点击:', column);
    logEvent('表头点击', `点击了 ${column.label} 列表头`);
};
/**
 * 排序变更事件处理
 * @param sortInfo 排序信息
 */
const handleSortChange = (sortInfo) => {
    console.log('排序事件:', sortInfo);
    console.log('排序字段:', sortInfo.prop);
    console.log('排序方向:', sortInfo.order);
    logEvent('排序变更', `字段: ${sortInfo.prop}, 方向: ${sortInfo.order}`);
};
// 事件日志记录
const logEvent = (type, message) => {
    if (!eventDemoEnabled.value)
        return;
    const time = new Date().toLocaleTimeString();
    eventLogs.value.unshift({ type, message, time });
    // 限制日志数量
    if (eventLogs.value.length > 20) {
        eventLogs.value = eventLogs.value.slice(0, 20);
    }
};
// 获取事件类型样式
const getEventType = (type) => {
    const typeMap = {
        行点击: 'primary',
        行双击: 'success',
        行右键: 'warning',
        单元格点击: 'info',
        单元格双击: 'success',
        表头点击: 'primary',
        选择变更: 'warning',
        排序变更: 'success'
    };
    return typeMap[type] || 'info';
};
// 演示功能方法
const toggleEventDemo = () => {
    eventDemoEnabled.value = !eventDemoEnabled.value;
    if (eventDemoEnabled.value) {
        ElMessage.success('事件监听已开启，请与表格交互查看效果');
    }
    else {
        ElMessage.info('事件监听已关闭');
    }
};
const clearEventLogs = () => {
    eventLogs.value = [];
    ElMessage.info('事件日志已清空');
};
const handleScrollToTop = () => {
    tableRef.value?.scrollToTop();
};
const handleScrollToPosition = () => {
    tableRef.value?.elTableRef.setScrollTop(200);
};
const handleToggleSelection = () => {
    if (selectedRows.value.length === 0) {
        tableRef.value?.elTableRef.toggleAllSelection();
        ElMessage.info('已全选');
    }
    else {
        tableRef.value?.elTableRef.clearSelection();
        ElMessage.info('已取消全选');
    }
};
const handleGetTableInfo = () => {
    const info = {
        数据条数: data.value.length,
        选中条数: selectedRows.value.length,
        列数: columns?.value?.length ?? 0,
        当前页: pagination.current,
        每页大小: pagination.size,
        总条数: pagination.total
    };
    console.log('表格信息:', info);
    ElMessage.info(`表格信息已输出到控制台，当前 ${info.数据条数} 条数据`);
};
const handleSearch = async () => {
    await searchBarRef.value.validate();
    console.log('搜索参数:', searchFormState.value);
    replaceSearchParams(buildSearchParams(searchFormState.value));
    getData();
};
const handleReset = () => {
    addCacheLog('🔄 重置搜索');
    // 重置搜索表单状态
    // searchFormState.value = { ...defaultFilter.value }
    resetSearchParams();
};
const handlePhoneSearch = (value) => {
    searchFormState.value.phone = value;
    replaceSearchParams(buildSearchParams(searchFormState.value));
    requestParams.value = { ...searchParams };
    addCacheLog(`📱 手机号搜索: ${value}`);
    getDataDebounced();
};
const handleRefresh = () => {
    addCacheLog('🔄 手动刷新');
    refreshData();
};
// CRUD 操作
const handleAdd = () => {
    ElMessage.success('新增用户成功');
    refreshCreate();
};
const handleEdit = (row) => {
    ElMessage.success(`编辑用户 ${row.userName} 成功`);
    setTimeout(() => {
        refreshUpdate();
    }, 1000);
};
const handleDelete = async (row) => {
    try {
        await ElMessageBox.confirm(`确定要删除用户 ${row.userName} 吗？`, '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        ElMessage.success('删除成功');
        setTimeout(() => {
            refreshRemove();
        }, 1000);
    }
    catch {
        ElMessage.info('已取消删除');
    }
};
const handleView = (row) => {
    ElMessage.info(`查看用户 ${row.userName}`);
};
const handleBatchDelete = async () => {
    try {
        await ElMessageBox.confirm(`确定要删除选中的 ${selectedRows.value.length} 个用户吗？`, '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        ElMessage.success(`批量删除 ${selectedRows.value.length} 个用户成功`);
        selectedRows.value = [];
        setTimeout(() => {
            refreshRemove();
        }, 1000);
    }
    catch {
        ElMessage.info('已取消删除');
    }
};
// 导入导出
const handleExportSuccess = (filename, count) => {
    ElMessage.success(`导出 ${count} 条数据成功`);
};
/**
 * Excel 导入成功处理
 * @param data 导入的数据数组
 */
const handleImportSuccess = (data) => {
    ElMessage.success(`导入 ${data.length} 条数据成功`);
    refreshCreate();
};
const handleImportError = (error) => {
    ElMessage.error(`导入失败：${error.message}`);
};
// 调试功能
const handleClearCache = () => {
    clearCache(CacheInvalidationStrategy.CLEAR_ALL, '手动清空');
    cacheKeys.value = []; // 清空缓存键列表
    addCacheLog('🗑️ 手动清空所有缓存');
    ElMessage.success('缓存已清空');
};
const handleCleanExpiredCache = () => {
    const count = clearExpiredCache();
    addCacheLog(`🧹 清理了 ${count} 条过期缓存`);
    ElMessage.info(`清理了 ${count} 条过期缓存`);
};
const handleCancelRequest = () => {
    cancelRequest();
    addCacheLog('❌ 取消当前请求');
    ElMessage.info('请求已取消');
};
const handleClearData = () => {
    clearData();
    addCacheLog('🗑️ 清空所有数据');
    ElMessage.info('数据已清空');
};
const handleTestCache = () => {
    // 模拟快速切换页面来测试缓存
    const testPages = [1, 2, 3, 2, 1]; // 测试页面序列
    ElMessage.info('开始缓存测试...');
    addCacheLog('🧪 开始缓存测试');
    let index = 0;
    const testInterval = setInterval(() => {
        if (index >= testPages.length) {
            clearInterval(testInterval);
            addCacheLog('✅ 缓存测试完成');
            ElMessage.success('缓存测试完成！观察缓存统计的变化');
            return;
        }
        const page = testPages[index];
        addCacheLog(`📄 测试切换到第 ${page} 页`);
        // 更新请求参数
        requestParams.value = { ...requestParams.value, current: page };
        // 切换到测试页面
        handleCurrentChange(page);
        index++;
    }, 1000);
};
/**
 * 添加缓存调试日志
 * @param message 日志消息
 */
const addCacheLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    cacheDebugLogs.value.unshift(`[${timestamp}] ${message}`);
    if (cacheDebugLogs.value.length > 20) {
        cacheDebugLogs.value = cacheDebugLogs.value.slice(0, 20);
    }
};
/**
 * 更新缓存键列表
 * @param key 缓存键
 * @param operation 操作类型
 */
const updateCacheKeys = (key, operation = 'add') => {
    if (operation === 'add' && !cacheKeys.value.includes(key)) {
        cacheKeys.value.push(key);
        addCacheLog(`新增缓存键: ${getCacheKeySummary(key)}`);
    }
    else if (operation === 'remove') {
        const index = cacheKeys.value.indexOf(key);
        if (index > -1) {
            cacheKeys.value.splice(index, 1);
            addCacheLog(`移除缓存键: ${getCacheKeySummary(key)}`);
        }
    }
};
/**
 * 获取缓存键摘要信息
 * @param key 缓存键
 * @returns 缓存键摘要
 */
const getCacheKeySummary = (key) => {
    try {
        const params = JSON.parse(key);
        return `页码: ${params.current || 1}, 大小: ${params.size || 20}${params.name ? ', 名称: ' + params.name : ''}${params.status ? ', 状态: ' + params.status : ''}`;
    }
    catch {
        return '无效的缓存键';
    }
};
/**
 * 强制刷新缓存信息
 */
const forceRefreshCacheInfo = () => {
    const currentStats = cacheInfo.value;
    addCacheLog(`缓存信息刷新: ${currentStats.total} 条缓存`);
    if (currentStats.total === 0) {
        cacheKeys.value = [];
    }
    nextTick(() => {
        console.log('当前缓存统计:', cacheInfo.value);
    });
};
// 监听分页和搜索状态变化
watch(() => [pagination.current, pagination.size, searchFormState.value], ([current, size, search]) => {
    requestParams.value = {
        ...search,
        current,
        size
    };
}, { deep: true, immediate: true });
/**
 * 处理动态列配置命令
 */
const handleColumnCommand = (command) => {
    switch (command) {
        case 'addColumn': {
            // 新增单个列
            addColumn?.({
                prop: 'remark',
                label: '备注',
                width: 150,
                formatter: () => h('span', { style: 'color: #999' }, '暂无备注')
            });
            ElMessage.success('已新增"备注"列');
            break;
        }
        case 'batchAddColumns': {
            // 批量新增多个列
            addColumn?.([
                {
                    prop: 'remark',
                    label: '备注',
                    width: 150,
                    formatter: () => h('span', { style: 'color: #999' }, '暂无备注')
                },
                {
                    prop: 'tags',
                    label: '标签',
                    width: 120,
                    formatter: () => h('span', { style: 'color: #67c23a' }, '新用户')
                }
            ], 5); // 在第5个位置插入
            ElMessage.success('已批量新增"备注"和"标签"列');
            break;
        }
        case 'toggleColumn': {
            // 切换单个列显示/隐藏
            if (getColumnConfig?.('userPhone')) {
                toggleColumn?.('userPhone');
                ElMessage.success('已切换手机号列显示状态');
            }
            break;
        }
        case 'batchToggleColumns': {
            // 批量切换多个列显示/隐藏
            toggleColumn?.(['userGender', 'userPhone']);
            ElMessage.success('已批量切换性别和手机号列显示状态');
            break;
        }
        case 'removeColumn': {
            // 删除单个列
            removeColumn?.('status');
            ElMessage.success('已删除状态列');
            break;
        }
        case 'batchRemoveColumns': {
            // 批量删除多个列
            removeColumn?.(['status', 'score']);
            ElMessage.success('已批量删除状态和评分列');
            break;
        }
        case 'updateColumn': {
            // 更新单个列
            updateColumn?.('userPhone', {
                label: '联系电话',
                width: 140
            });
            ElMessage.success('手机号列已更新为"联系电话"');
            break;
        }
        case 'batchUpdateColumns': {
            // 批量更新多个列（新语法）
            updateColumn?.([
                { prop: 'userGender', updates: { width: 200, label: '性别-已更新', sortable: false } },
                { prop: 'userPhone', updates: { width: 200, label: '手机号-已更新', sortable: false } }
            ]);
            ElMessage.success('已批量更新性别和手机号列');
            break;
        }
        case 'reorderColumns': {
            // 交换列位置
            const allCols = getAllColumns?.();
            if (allCols) {
                const genderIndex = allCols.findIndex((col) => getColumnKey(col) === 'userGender');
                const phoneIndex = allCols.findIndex((col) => getColumnKey(col) === 'userPhone');
                if (genderIndex !== -1 && phoneIndex !== -1) {
                    reorderColumns?.(genderIndex, phoneIndex);
                    ElMessage.success('已交换性别和手机号列位置');
                }
            }
            break;
        }
        case 'resetColumns': {
            // 重置所有列配置
            resetColumns?.();
            ElMessage.success('已重置所有列配置');
            break;
        }
        default:
            console.warn('未知的列配置命令:', command);
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
    __VLS_styleScopedClasses['user-info'];
    __VLS_styleScopedClasses['el-avatar'];
    __VLS_styleScopedClasses['demo-group'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-4 pb-5") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("art-card-xs") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-wrap gap-3 flex-cb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("m-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-2") }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("success"), effect: ("light"), }));
        const __VLS_8 = __VLS_7({ type: ("success"), effect: ("light"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("primary"), effect: ("light"), }));
        const __VLS_14 = __VLS_13({ type: ("primary"), effect: ("light"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("warning"), effect: ("light"), }));
        const __VLS_20 = __VLS_19({ type: ("warning"), effect: ("light"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_nonNullable(__VLS_23.slots).default;
        var __VLS_23;
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ type: ("info"), effect: ("light"), }));
        const __VLS_26 = __VLS_25({ type: ("info"), effect: ("light"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_nonNullable(__VLS_29.slots).default;
        var __VLS_29;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 mb-4 leading-[1.6] text-g-700") }, });
    if (__VLS_ctx.showDebugPanel) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("my-4") }, });
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElCollapse;
        /** @type { [typeof __VLS_components.ElCollapse, typeof __VLS_components.ElCollapse, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ modelValue: ((__VLS_ctx.debugActiveNames)), }));
        const __VLS_32 = __VLS_31({ modelValue: ((__VLS_ctx.debugActiveNames)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElCollapseItem;
        /** @type { [typeof __VLS_components.ElCollapseItem, typeof __VLS_components.ElCollapseItem, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ name: ("cache"), title: ("缓存统计与演示"), }));
        const __VLS_38 = __VLS_37({ name: ("cache"), title: ("缓存统计与演示"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium text-g-700") }, });
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ type: ("success"), }));
        const __VLS_44 = __VLS_43({ type: ("success"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        __VLS_nonNullable(__VLS_47.slots).default;
        var __VLS_47;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium text-g-700") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold text-theme") }, });
        (__VLS_ctx.cacheInfo.total);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium text-g-700") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold text-theme") }, });
        (__VLS_ctx.cacheInfo.size);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium text-g-700") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold text-theme") }, });
        (__VLS_ctx.cacheInfo.hitRate);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2 mt-2") }, });
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        let __VLS_54;
        const __VLS_55 = {
            onClick: (__VLS_ctx.handleClearCache)
        };
        let __VLS_51;
        let __VLS_52;
        __VLS_nonNullable(__VLS_53.slots).default;
        var __VLS_53;
        const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_58 = __VLS_57({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
        let __VLS_62;
        const __VLS_63 = {
            onClick: (__VLS_ctx.handleCleanExpiredCache)
        };
        let __VLS_59;
        let __VLS_60;
        __VLS_nonNullable(__VLS_61.slots).default;
        var __VLS_61;
        const __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_66 = __VLS_65({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
        let __VLS_70;
        const __VLS_71 = {
            onClick: (__VLS_ctx.handleTestCache)
        };
        let __VLS_67;
        let __VLS_68;
        __VLS_nonNullable(__VLS_69.slots).default;
        var __VLS_69;
        const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_74 = __VLS_73({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        let __VLS_78;
        const __VLS_79 = {
            onClick: (__VLS_ctx.forceRefreshCacheInfo)
        };
        let __VLS_75;
        let __VLS_76;
        __VLS_nonNullable(__VLS_77.slots).default;
        var __VLS_77;
        __VLS_nonNullable(__VLS_41.slots).default;
        var __VLS_41;
        const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElCollapseItem;
        /** @type { [typeof __VLS_components.ElCollapseItem, typeof __VLS_components.ElCollapseItem, ] } */
        // @ts-ignore
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ name: ("logs"), title: ("缓存日志"), }));
        const __VLS_82 = __VLS_81({ name: ("logs"), title: ("缓存日志"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-h-50 overflow-y-auto") }, });
        if (__VLS_ctx.cacheDebugLogs.length === 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-5 text-center") }, });
            const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.ElEmpty;
            /** @type { [typeof __VLS_components.ElEmpty, ] } */
            // @ts-ignore
            const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ description: ("暂无缓存日志"), imageSize: ((60)), }));
            const __VLS_88 = __VLS_87({ description: ("暂无缓存日志"), imageSize: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-1") }, });
            for (const [log, index] of __VLS_getVForSourceType((__VLS_ctx.cacheDebugLogs))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("p-1.5 px-2 text-xs leading-[1.4] bg-g-200 border-l-1 border-g-400 rounded") }, ...{ class: (({
                            'bg-[rgba(103,194,58,0.1)] !border-l-success': log.includes('✅'),
                            'bg-[rgba(64,158,255,0.1)] !border-l-theme': log.includes('🎯'),
                            'bg-[rgba(245,108,108,0.1)] !border-l-danger': log.includes('❌')
                        })) }, });
                (log);
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2 mt-2") }, });
        const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_94 = __VLS_93({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
        let __VLS_98;
        const __VLS_99 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.showDebugPanel)))
                    return;
                __VLS_ctx.cacheDebugLogs = [];
            }
        };
        let __VLS_95;
        let __VLS_96;
        __VLS_nonNullable(__VLS_97.slots).default;
        var __VLS_97;
        __VLS_nonNullable(__VLS_85.slots).default;
        var __VLS_85;
        const __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.ElCollapseItem;
        /** @type { [typeof __VLS_components.ElCollapseItem, typeof __VLS_components.ElCollapseItem, ] } */
        // @ts-ignore
        const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ name: ("request"), title: ("请求状态"), }));
        const __VLS_102 = __VLS_101({ name: ("request"), title: ("请求状态"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium text-g-700") }, });
        const __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ type: ((__VLS_ctx.loading ? 'warning' : 'success')), }));
        const __VLS_108 = __VLS_107({ type: ((__VLS_ctx.loading ? 'warning' : 'success')), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
        (__VLS_ctx.loading ? '加载中' : '空闲');
        __VLS_nonNullable(__VLS_111.slots).default;
        var __VLS_111;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium text-g-700") }, });
        const __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ type: ((__VLS_ctx.hasData ? 'success' : 'info')), }));
        const __VLS_114 = __VLS_113({ type: ((__VLS_ctx.hasData ? 'success' : 'info')), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
        (__VLS_ctx.hasData ? `${__VLS_ctx.data.length} 条数据` : '无数据');
        __VLS_nonNullable(__VLS_117.slots).default;
        var __VLS_117;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium text-g-700") }, });
        const __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ type: ((__VLS_ctx.error ? 'danger' : 'success')), }));
        const __VLS_120 = __VLS_119({ type: ((__VLS_ctx.error ? 'danger' : 'success')), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
        (__VLS_ctx.error ? '有错误' : '正常');
        __VLS_nonNullable(__VLS_123.slots).default;
        var __VLS_123;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium text-g-700") }, });
        const __VLS_124 = __VLS_resolvedLocalAndGlobalComponents.ElText;
        /** @type { [typeof __VLS_components.ElText, typeof __VLS_components.ElText, ] } */
        // @ts-ignore
        const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ tag: ("pre"), ...{ class: ("max-h-50 p-2 overflow-y-auto text-xs bg-g-200 border border-g-400 rounded-md") }, }));
        const __VLS_126 = __VLS_125({ tag: ("pre"), ...{ class: ("max-h-50 p-2 overflow-y-auto text-xs bg-g-200 border border-g-400 rounded-md") }, }, ...__VLS_functionalComponentArgsRest(__VLS_125));
        (JSON.stringify(__VLS_ctx.requestParams, null, 2));
        __VLS_nonNullable(__VLS_129.slots).default;
        var __VLS_129;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2 mt-2") }, });
        const __VLS_130 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_132 = __VLS_131({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
        let __VLS_136;
        const __VLS_137 = {
            onClick: (__VLS_ctx.handleCancelRequest)
        };
        let __VLS_133;
        let __VLS_134;
        __VLS_nonNullable(__VLS_135.slots).default;
        var __VLS_135;
        const __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_140 = __VLS_139({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
        let __VLS_144;
        const __VLS_145 = {
            onClick: (__VLS_ctx.handleClearData)
        };
        let __VLS_141;
        let __VLS_142;
        __VLS_nonNullable(__VLS_143.slots).default;
        var __VLS_143;
        __VLS_nonNullable(__VLS_105.slots).default;
        var __VLS_105;
        __VLS_nonNullable(__VLS_35.slots).default;
        var __VLS_35;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-4 mt-4") }, });
    const __VLS_146 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, ] } */
    // @ts-ignore
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ modelValue: ((__VLS_ctx.showDebugPanel)), activeText: ("调试面板"), }));
    const __VLS_148 = __VLS_147({ modelValue: ((__VLS_ctx.showDebugPanel)), activeText: ("调试面板"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    const __VLS_152 = __VLS_resolvedLocalAndGlobalComponents.ElText;
    /** @type { [typeof __VLS_components.ElText, typeof __VLS_components.ElText, ] } */
    // @ts-ignore
    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ type: ("info"), size: ("small"), }));
    const __VLS_154 = __VLS_153({ type: ("info"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    __VLS_nonNullable(__VLS_157.slots).default;
    var __VLS_157;
    var __VLS_5;
    const __VLS_158 = __VLS_resolvedLocalAndGlobalComponents.ArtSearchBar;
    /** @type { [typeof __VLS_components.ArtSearchBar, ] } */
    // @ts-ignore
    const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ ...{ 'onSearch': {} }, ...{ 'onReset': {} }, ref: ("searchBarRef"), modelValue: ((__VLS_ctx.searchFormState)), items: ((__VLS_ctx.searchItems)), rules: ((__VLS_ctx.rules)), isExpand: ((false)), showExpand: ((true)), showResetButton: ((true)), showSearchButton: ((true)), disabledSearchButton: ((false)), }));
    const __VLS_160 = __VLS_159({ ...{ 'onSearch': {} }, ...{ 'onReset': {} }, ref: ("searchBarRef"), modelValue: ((__VLS_ctx.searchFormState)), items: ((__VLS_ctx.searchItems)), rules: ((__VLS_ctx.rules)), isExpand: ((false)), showExpand: ((true)), showResetButton: ((true)), showSearchButton: ((true)), disabledSearchButton: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
    // @ts-ignore navigation for `const searchBarRef = ref()`
    __VLS_ctx.searchBarRef;
    var __VLS_164 = {};
    let __VLS_165;
    const __VLS_166 = {
        onSearch: (__VLS_ctx.handleSearch)
    };
    const __VLS_167 = {
        onReset: (__VLS_ctx.handleReset)
    };
    let __VLS_161;
    let __VLS_162;
    var __VLS_163;
    const __VLS_168 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{ class: ("flex-1 art-table-card") }, ...{ style: ({}) }, }));
    const __VLS_170 = __VLS_169({ ...{ class: ("flex-1 art-table-card") }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_169));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_173.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("m-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2") }, });
        if (__VLS_ctx.error) {
            const __VLS_174 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({ type: ("danger"), }));
            const __VLS_176 = __VLS_175({ type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_175));
            (__VLS_ctx.error.message);
            __VLS_nonNullable(__VLS_179.slots).default;
            var __VLS_179;
        }
        else if (__VLS_ctx.loading) {
            const __VLS_180 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({ type: ("warning"), }));
            const __VLS_182 = __VLS_181({ type: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
            __VLS_nonNullable(__VLS_185.slots).default;
            var __VLS_185;
        }
        else {
            const __VLS_186 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ type: ("success"), }));
            const __VLS_188 = __VLS_187({ type: ("success"), }, ...__VLS_functionalComponentArgsRest(__VLS_187));
            (__VLS_ctx.data.length);
            __VLS_nonNullable(__VLS_191.slots).default;
            var __VLS_191;
        }
    }
    const __VLS_192 = __VLS_resolvedLocalAndGlobalComponents.ArtTableHeader;
    /** @type { [typeof __VLS_components.ArtTableHeader, typeof __VLS_components.ArtTableHeader, ] } */
    // @ts-ignore
    const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ ...{ 'onRefresh': {} }, columns: ((__VLS_ctx.columnChecks)), loading: ((__VLS_ctx.loading)), layout: ("refresh,size,fullscreen,columns,settings"), fullClass: ("art-table-card"), }));
    const __VLS_194 = __VLS_193({ ...{ 'onRefresh': {} }, columns: ((__VLS_ctx.columnChecks)), loading: ((__VLS_ctx.loading)), layout: ("refresh,size,fullscreen,columns,settings"), fullClass: ("art-table-card"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
    let __VLS_198;
    const __VLS_199 = {
        onRefresh: (__VLS_ctx.handleRefresh)
    };
    let __VLS_195;
    let __VLS_196;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { left: __VLS_thisSlot } = __VLS_nonNullable(__VLS_197.slots);
        const __VLS_200 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.ElSpace, ] } */
        // @ts-ignore
        const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({ wrap: (true), }));
        const __VLS_202 = __VLS_201({ wrap: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
        const __VLS_206 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_208 = __VLS_207({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
        __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
        let __VLS_212;
        const __VLS_213 = {
            onClick: (__VLS_ctx.handleAdd)
        };
        let __VLS_209;
        let __VLS_210;
        const __VLS_214 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
        // @ts-ignore
        const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({}));
        const __VLS_216 = __VLS_215({}, ...__VLS_functionalComponentArgsRest(__VLS_215));
        const __VLS_220 = __VLS_resolvedLocalAndGlobalComponents.Plus;
        /** @type { [typeof __VLS_components.Plus, ] } */
        // @ts-ignore
        const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({}));
        const __VLS_222 = __VLS_221({}, ...__VLS_functionalComponentArgsRest(__VLS_221));
        __VLS_nonNullable(__VLS_219.slots).default;
        var __VLS_219;
        __VLS_nonNullable(__VLS_211.slots).default;
        var __VLS_211;
        const __VLS_226 = __VLS_resolvedLocalAndGlobalComponents.ArtExcelExport;
        /** @type { [typeof __VLS_components.ArtExcelExport, ] } */
        // @ts-ignore
        const __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226({ ...{ 'onExportSuccess': {} }, data: __VLS_ctx.data, columns: __VLS_ctx.exportColumns, filename: ("用户数据"), autoIndex: ((true)), buttonText: ("导出"), }));
        const __VLS_228 = __VLS_227({ ...{ 'onExportSuccess': {} }, data: __VLS_ctx.data, columns: __VLS_ctx.exportColumns, filename: ("用户数据"), autoIndex: ((true)), buttonText: ("导出"), }, ...__VLS_functionalComponentArgsRest(__VLS_227));
        let __VLS_232;
        const __VLS_233 = {
            onExportSuccess: (__VLS_ctx.handleExportSuccess)
        };
        let __VLS_229;
        let __VLS_230;
        var __VLS_231;
        const __VLS_234 = __VLS_resolvedLocalAndGlobalComponents.ArtExcelImport;
        /** @type { [typeof __VLS_components.ArtExcelImport, ] } */
        // @ts-ignore
        const __VLS_235 = __VLS_asFunctionalComponent(__VLS_234, new __VLS_234({ ...{ 'onImportSuccess': {} }, ...{ 'onImportError': {} }, ...{ style: ({}) }, }));
        const __VLS_236 = __VLS_235({ ...{ 'onImportSuccess': {} }, ...{ 'onImportError': {} }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_235));
        let __VLS_240;
        const __VLS_241 = {
            onImportSuccess: (__VLS_ctx.handleImportSuccess)
        };
        const __VLS_242 = {
            onImportError: (__VLS_ctx.handleImportError)
        };
        let __VLS_237;
        let __VLS_238;
        var __VLS_239;
        const __VLS_243 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_244 = __VLS_asFunctionalComponent(__VLS_243, new __VLS_243({ ...{ 'onClick': {} }, plain: (true), }));
        const __VLS_245 = __VLS_244({ ...{ 'onClick': {} }, plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_244));
        __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
        let __VLS_249;
        const __VLS_250 = {
            onClick: (__VLS_ctx.handleClearData)
        };
        let __VLS_246;
        let __VLS_247;
        __VLS_nonNullable(__VLS_248.slots).default;
        var __VLS_248;
        const __VLS_251 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_252 = __VLS_asFunctionalComponent(__VLS_251, new __VLS_251({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.selectedRows.length === 0)), }));
        const __VLS_253 = __VLS_252({ ...{ 'onClick': {} }, disabled: ((__VLS_ctx.selectedRows.length === 0)), }, ...__VLS_functionalComponentArgsRest(__VLS_252));
        __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
        let __VLS_257;
        const __VLS_258 = {
            onClick: (__VLS_ctx.handleBatchDelete)
        };
        let __VLS_254;
        let __VLS_255;
        const __VLS_259 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
        // @ts-ignore
        const __VLS_260 = __VLS_asFunctionalComponent(__VLS_259, new __VLS_259({}));
        const __VLS_261 = __VLS_260({}, ...__VLS_functionalComponentArgsRest(__VLS_260));
        const __VLS_265 = __VLS_resolvedLocalAndGlobalComponents.Delete;
        /** @type { [typeof __VLS_components.Delete, ] } */
        // @ts-ignore
        const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, new __VLS_265({}));
        const __VLS_267 = __VLS_266({}, ...__VLS_functionalComponentArgsRest(__VLS_266));
        __VLS_nonNullable(__VLS_264.slots).default;
        var __VLS_264;
        (__VLS_ctx.selectedRows.length);
        __VLS_nonNullable(__VLS_256.slots).default;
        var __VLS_256;
        const __VLS_271 = __VLS_resolvedLocalAndGlobalComponents.ElDropdown;
        /** @type { [typeof __VLS_components.ElDropdown, typeof __VLS_components.ElDropdown, ] } */
        // @ts-ignore
        const __VLS_272 = __VLS_asFunctionalComponent(__VLS_271, new __VLS_271({ ...{ 'onCommand': {} }, ...{ style: ({}) }, }));
        const __VLS_273 = __VLS_272({ ...{ 'onCommand': {} }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_272));
        let __VLS_277;
        const __VLS_278 = {
            onCommand: (__VLS_ctx.handleColumnCommand)
        };
        let __VLS_274;
        let __VLS_275;
        const __VLS_279 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_280 = __VLS_asFunctionalComponent(__VLS_279, new __VLS_279({ type: ("primary"), plain: (true), }));
        const __VLS_281 = __VLS_280({ type: ("primary"), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_280));
        const __VLS_285 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
        // @ts-ignore
        const __VLS_286 = __VLS_asFunctionalComponent(__VLS_285, new __VLS_285({ ...{ class: ("el-icon--right") }, }));
        const __VLS_287 = __VLS_286({ ...{ class: ("el-icon--right") }, }, ...__VLS_functionalComponentArgsRest(__VLS_286));
        const __VLS_291 = __VLS_resolvedLocalAndGlobalComponents.ArrowDown;
        /** @type { [typeof __VLS_components.ArrowDown, ] } */
        // @ts-ignore
        const __VLS_292 = __VLS_asFunctionalComponent(__VLS_291, new __VLS_291({}));
        const __VLS_293 = __VLS_292({}, ...__VLS_functionalComponentArgsRest(__VLS_292));
        __VLS_nonNullable(__VLS_290.slots).default;
        var __VLS_290;
        __VLS_nonNullable(__VLS_284.slots).default;
        var __VLS_284;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { dropdown: __VLS_thisSlot } = __VLS_nonNullable(__VLS_276.slots);
            const __VLS_297 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownMenu;
            /** @type { [typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.ElDropdownMenu, ] } */
            // @ts-ignore
            const __VLS_298 = __VLS_asFunctionalComponent(__VLS_297, new __VLS_297({}));
            const __VLS_299 = __VLS_298({}, ...__VLS_functionalComponentArgsRest(__VLS_298));
            const __VLS_303 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
            // @ts-ignore
            const __VLS_304 = __VLS_asFunctionalComponent(__VLS_303, new __VLS_303({ command: ("addColumn"), }));
            const __VLS_305 = __VLS_304({ command: ("addColumn"), }, ...__VLS_functionalComponentArgsRest(__VLS_304));
            __VLS_nonNullable(__VLS_308.slots).default;
            var __VLS_308;
            const __VLS_309 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
            // @ts-ignore
            const __VLS_310 = __VLS_asFunctionalComponent(__VLS_309, new __VLS_309({ command: ("batchAddColumns"), }));
            const __VLS_311 = __VLS_310({ command: ("batchAddColumns"), }, ...__VLS_functionalComponentArgsRest(__VLS_310));
            __VLS_nonNullable(__VLS_314.slots).default;
            var __VLS_314;
            const __VLS_315 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
            // @ts-ignore
            const __VLS_316 = __VLS_asFunctionalComponent(__VLS_315, new __VLS_315({ command: ("toggleColumn"), }));
            const __VLS_317 = __VLS_316({ command: ("toggleColumn"), }, ...__VLS_functionalComponentArgsRest(__VLS_316));
            __VLS_nonNullable(__VLS_320.slots).default;
            var __VLS_320;
            const __VLS_321 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
            // @ts-ignore
            const __VLS_322 = __VLS_asFunctionalComponent(__VLS_321, new __VLS_321({ command: ("batchToggleColumns"), }));
            const __VLS_323 = __VLS_322({ command: ("batchToggleColumns"), }, ...__VLS_functionalComponentArgsRest(__VLS_322));
            __VLS_nonNullable(__VLS_326.slots).default;
            var __VLS_326;
            const __VLS_327 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
            // @ts-ignore
            const __VLS_328 = __VLS_asFunctionalComponent(__VLS_327, new __VLS_327({ command: ("removeColumn"), }));
            const __VLS_329 = __VLS_328({ command: ("removeColumn"), }, ...__VLS_functionalComponentArgsRest(__VLS_328));
            __VLS_nonNullable(__VLS_332.slots).default;
            var __VLS_332;
            const __VLS_333 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
            // @ts-ignore
            const __VLS_334 = __VLS_asFunctionalComponent(__VLS_333, new __VLS_333({ command: ("batchRemoveColumns"), }));
            const __VLS_335 = __VLS_334({ command: ("batchRemoveColumns"), }, ...__VLS_functionalComponentArgsRest(__VLS_334));
            __VLS_nonNullable(__VLS_338.slots).default;
            var __VLS_338;
            const __VLS_339 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
            // @ts-ignore
            const __VLS_340 = __VLS_asFunctionalComponent(__VLS_339, new __VLS_339({ command: ("updateColumn"), }));
            const __VLS_341 = __VLS_340({ command: ("updateColumn"), }, ...__VLS_functionalComponentArgsRest(__VLS_340));
            __VLS_nonNullable(__VLS_344.slots).default;
            var __VLS_344;
            const __VLS_345 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
            // @ts-ignore
            const __VLS_346 = __VLS_asFunctionalComponent(__VLS_345, new __VLS_345({ command: ("batchUpdateColumns"), }));
            const __VLS_347 = __VLS_346({ command: ("batchUpdateColumns"), }, ...__VLS_functionalComponentArgsRest(__VLS_346));
            __VLS_nonNullable(__VLS_350.slots).default;
            var __VLS_350;
            const __VLS_351 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
            // @ts-ignore
            const __VLS_352 = __VLS_asFunctionalComponent(__VLS_351, new __VLS_351({ command: ("reorderColumns"), }));
            const __VLS_353 = __VLS_352({ command: ("reorderColumns"), }, ...__VLS_functionalComponentArgsRest(__VLS_352));
            __VLS_nonNullable(__VLS_356.slots).default;
            var __VLS_356;
            const __VLS_357 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
            // @ts-ignore
            const __VLS_358 = __VLS_asFunctionalComponent(__VLS_357, new __VLS_357({ command: ("resetColumns"), divided: (true), }));
            const __VLS_359 = __VLS_358({ command: ("resetColumns"), divided: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_358));
            __VLS_nonNullable(__VLS_362.slots).default;
            var __VLS_362;
            __VLS_nonNullable(__VLS_302.slots).default;
            var __VLS_302;
        }
        var __VLS_276;
        __VLS_nonNullable(__VLS_205.slots).default;
        var __VLS_205;
    }
    var __VLS_197;
    const __VLS_363 = __VLS_resolvedLocalAndGlobalComponents.ArtTable;
    /** @type { [typeof __VLS_components.ArtTable, typeof __VLS_components.ArtTable, ] } */
    // @ts-ignore
    const __VLS_364 = __VLS_asFunctionalComponent(__VLS_363, new __VLS_363({ ...{ 'onSelectionChange': {} }, ...{ 'onRowClick': {} }, ...{ 'onHeaderClick': {} }, ...{ 'onSortChange': {} }, ...{ 'onPagination:sizeChange': {} }, ...{ 'onPagination:currentChange': {} }, ref: ("tableRef"), loading: ((__VLS_ctx.loading)), pagination: ((__VLS_ctx.pagination)), data: ((__VLS_ctx.data)), columns: ((__VLS_ctx.columns)), height: ((__VLS_ctx.computedTableHeight)), emptyHeight: ("360px"), }));
    const __VLS_365 = __VLS_364({ ...{ 'onSelectionChange': {} }, ...{ 'onRowClick': {} }, ...{ 'onHeaderClick': {} }, ...{ 'onSortChange': {} }, ...{ 'onPagination:sizeChange': {} }, ...{ 'onPagination:currentChange': {} }, ref: ("tableRef"), loading: ((__VLS_ctx.loading)), pagination: ((__VLS_ctx.pagination)), data: ((__VLS_ctx.data)), columns: ((__VLS_ctx.columns)), height: ((__VLS_ctx.computedTableHeight)), emptyHeight: ("360px"), }, ...__VLS_functionalComponentArgsRest(__VLS_364));
    // @ts-ignore navigation for `const tableRef = ref()`
    __VLS_ctx.tableRef;
    var __VLS_369 = {};
    let __VLS_370;
    const __VLS_371 = {
        onSelectionChange: (__VLS_ctx.handleSelectionChange)
    };
    const __VLS_372 = {
        onRowClick: (__VLS_ctx.handleRowClick)
    };
    const __VLS_373 = {
        onHeaderClick: (__VLS_ctx.handleHeaderClick)
    };
    const __VLS_374 = {
        onSortChange: (__VLS_ctx.handleSortChange)
    };
    const __VLS_375 = {
        'onPagination:sizeChange': (__VLS_ctx.handleSizeChange)
    };
    const __VLS_376 = {
        'onPagination:currentChange': (__VLS_ctx.handleCurrentChange)
    };
    let __VLS_366;
    let __VLS_367;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { avatar: __VLS_thisSlot } = __VLS_nonNullable(__VLS_368.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-3 user-info") }, });
        const __VLS_377 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
        /** @type { [typeof __VLS_components.ElAvatar, ] } */
        // @ts-ignore
        const __VLS_378 = __VLS_asFunctionalComponent(__VLS_377, new __VLS_377({ src: ((row.avatar)), size: ((40)), }));
        const __VLS_379 = __VLS_378({ src: ((row.avatar)), size: ((40)), }, ...__VLS_functionalComponentArgsRest(__VLS_378));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 min-w-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 overflow-hidden font-medium text-ellipsis whitespace-nowrap") }, });
        (row.userName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-0 mt-1 overflow-hidden text-xs text-g-700 text-ellipsis whitespace-nowrap") }, });
        (row.userEmail);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { "avatar-header": __VLS_thisSlot } = __VLS_nonNullable(__VLS_368.slots);
        const [{ column }] = __VLS_getSlotParams(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c gap-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (column.label);
        const __VLS_383 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.ElTooltip, ] } */
        // @ts-ignore
        const __VLS_384 = __VLS_asFunctionalComponent(__VLS_383, new __VLS_383({ content: ("包含头像、姓名和邮箱"), placement: ("top"), }));
        const __VLS_385 = __VLS_384({ content: ("包含头像、姓名和邮箱"), placement: ("top"), }, ...__VLS_functionalComponentArgsRest(__VLS_384));
        const __VLS_389 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
        // @ts-ignore
        const __VLS_390 = __VLS_asFunctionalComponent(__VLS_389, new __VLS_389({}));
        const __VLS_391 = __VLS_390({}, ...__VLS_functionalComponentArgsRest(__VLS_390));
        const __VLS_395 = __VLS_resolvedLocalAndGlobalComponents.QuestionFilled;
        /** @type { [typeof __VLS_components.QuestionFilled, ] } */
        // @ts-ignore
        const __VLS_396 = __VLS_asFunctionalComponent(__VLS_395, new __VLS_395({}));
        const __VLS_397 = __VLS_396({}, ...__VLS_functionalComponentArgsRest(__VLS_396));
        __VLS_nonNullable(__VLS_394.slots).default;
        var __VLS_394;
        __VLS_nonNullable(__VLS_388.slots).default;
        var __VLS_388;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { status: __VLS_thisSlot } = __VLS_nonNullable(__VLS_368.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_401 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_402 = __VLS_asFunctionalComponent(__VLS_401, new __VLS_401({ type: ((__VLS_ctx.getUserStatusConfig(row.status).type)), effect: ("light"), }));
        const __VLS_403 = __VLS_402({ type: ((__VLS_ctx.getUserStatusConfig(row.status).type)), effect: ("light"), }, ...__VLS_functionalComponentArgsRest(__VLS_402));
        (__VLS_ctx.getUserStatusConfig(row.status).text);
        __VLS_nonNullable(__VLS_406.slots).default;
        var __VLS_406;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { score: __VLS_thisSlot } = __VLS_nonNullable(__VLS_368.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_407 = __VLS_resolvedLocalAndGlobalComponents.ElRate;
        /** @type { [typeof __VLS_components.ElRate, ] } */
        // @ts-ignore
        const __VLS_408 = __VLS_asFunctionalComponent(__VLS_407, new __VLS_407({ modelValue: ((row.score)), disabled: (true), size: ("small"), }));
        const __VLS_409 = __VLS_408({ modelValue: ((row.score)), disabled: (true), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_408));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { operation: __VLS_thisSlot } = __VLS_nonNullable(__VLS_368.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex") }, });
        const __VLS_413 = __VLS_resolvedLocalAndGlobalComponents.ArtButtonTable;
        /** @type { [typeof __VLS_components.ArtButtonTable, ] } */
        // @ts-ignore
        const __VLS_414 = __VLS_asFunctionalComponent(__VLS_413, new __VLS_413({ ...{ 'onClick': {} }, type: ("view"), row: ((row)), }));
        const __VLS_415 = __VLS_414({ ...{ 'onClick': {} }, type: ("view"), row: ((row)), }, ...__VLS_functionalComponentArgsRest(__VLS_414));
        let __VLS_419;
        const __VLS_420 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleView(row);
            }
        };
        let __VLS_416;
        let __VLS_417;
        var __VLS_418;
        const __VLS_421 = __VLS_resolvedLocalAndGlobalComponents.ArtButtonTable;
        /** @type { [typeof __VLS_components.ArtButtonTable, ] } */
        // @ts-ignore
        const __VLS_422 = __VLS_asFunctionalComponent(__VLS_421, new __VLS_421({ ...{ 'onClick': {} }, type: ("add"), row: ((row)), }));
        const __VLS_423 = __VLS_422({ ...{ 'onClick': {} }, type: ("add"), row: ((row)), }, ...__VLS_functionalComponentArgsRest(__VLS_422));
        let __VLS_427;
        const __VLS_428 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleAdd();
            }
        };
        let __VLS_424;
        let __VLS_425;
        var __VLS_426;
        const __VLS_429 = __VLS_resolvedLocalAndGlobalComponents.ArtButtonTable;
        /** @type { [typeof __VLS_components.ArtButtonTable, ] } */
        // @ts-ignore
        const __VLS_430 = __VLS_asFunctionalComponent(__VLS_429, new __VLS_429({ ...{ 'onClick': {} }, type: ("edit"), row: ((row)), }));
        const __VLS_431 = __VLS_430({ ...{ 'onClick': {} }, type: ("edit"), row: ((row)), }, ...__VLS_functionalComponentArgsRest(__VLS_430));
        let __VLS_435;
        const __VLS_436 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleEdit(row);
            }
        };
        let __VLS_432;
        let __VLS_433;
        var __VLS_434;
        const __VLS_437 = __VLS_resolvedLocalAndGlobalComponents.ArtButtonTable;
        /** @type { [typeof __VLS_components.ArtButtonTable, ] } */
        // @ts-ignore
        const __VLS_438 = __VLS_asFunctionalComponent(__VLS_437, new __VLS_437({ ...{ 'onClick': {} }, type: ("delete"), row: ((row)), }));
        const __VLS_439 = __VLS_438({ ...{ 'onClick': {} }, type: ("delete"), row: ((row)), }, ...__VLS_functionalComponentArgsRest(__VLS_438));
        let __VLS_443;
        const __VLS_444 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleDelete(row);
            }
        };
        let __VLS_440;
        let __VLS_441;
        var __VLS_442;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { "userPhone-header": __VLS_thisSlot } = __VLS_nonNullable(__VLS_368.slots);
        const [{ column }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_445 = __VLS_resolvedLocalAndGlobalComponents.ElPopover;
        /** @type { [typeof __VLS_components.ElPopover, typeof __VLS_components.ElPopover, ] } */
        // @ts-ignore
        const __VLS_446 = __VLS_asFunctionalComponent(__VLS_445, new __VLS_445({ placement: ("bottom"), width: ((200)), trigger: ("hover"), }));
        const __VLS_447 = __VLS_446({ placement: ("bottom"), width: ((200)), trigger: ("hover"), }, ...__VLS_functionalComponentArgsRest(__VLS_446));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { reference: __VLS_thisSlot } = __VLS_nonNullable(__VLS_450.slots);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inline-block gap-1 text-theme c-p custom-header") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (column.label);
            const __VLS_451 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
            // @ts-ignore
            const __VLS_452 = __VLS_asFunctionalComponent(__VLS_451, new __VLS_451({}));
            const __VLS_453 = __VLS_452({}, ...__VLS_functionalComponentArgsRest(__VLS_452));
            const __VLS_457 = __VLS_resolvedLocalAndGlobalComponents.Search;
            /** @type { [typeof __VLS_components.Search, ] } */
            // @ts-ignore
            const __VLS_458 = __VLS_asFunctionalComponent(__VLS_457, new __VLS_457({}));
            const __VLS_459 = __VLS_458({}, ...__VLS_functionalComponentArgsRest(__VLS_458));
            __VLS_nonNullable(__VLS_456.slots).default;
            var __VLS_456;
        }
        const __VLS_463 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.ElInput, ] } */
        // @ts-ignore
        const __VLS_464 = __VLS_asFunctionalComponent(__VLS_463, new __VLS_463({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.phoneSearch)), placeholder: ("搜索手机号"), size: ("small"), }));
        const __VLS_465 = __VLS_464({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.phoneSearch)), placeholder: ("搜索手机号"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_464));
        let __VLS_469;
        const __VLS_470 = {
            onInput: (__VLS_ctx.handlePhoneSearch)
        };
        let __VLS_466;
        let __VLS_467;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { prefix: __VLS_thisSlot } = __VLS_nonNullable(__VLS_468.slots);
            const __VLS_471 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
            // @ts-ignore
            const __VLS_472 = __VLS_asFunctionalComponent(__VLS_471, new __VLS_471({}));
            const __VLS_473 = __VLS_472({}, ...__VLS_functionalComponentArgsRest(__VLS_472));
            const __VLS_477 = __VLS_resolvedLocalAndGlobalComponents.Search;
            /** @type { [typeof __VLS_components.Search, ] } */
            // @ts-ignore
            const __VLS_478 = __VLS_asFunctionalComponent(__VLS_477, new __VLS_477({}));
            const __VLS_479 = __VLS_478({}, ...__VLS_functionalComponentArgsRest(__VLS_478));
            __VLS_nonNullable(__VLS_476.slots).default;
            var __VLS_476;
        }
        var __VLS_468;
        var __VLS_450;
    }
    var __VLS_368;
    var __VLS_173;
    const __VLS_483 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_484 = __VLS_asFunctionalComponent(__VLS_483, new __VLS_483({ ...{ class: ("art-card-xs") }, }));
    const __VLS_485 = __VLS_484({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_484));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_488.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("m-0") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 bg-g-200 border-full-d rounded-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("m-0 mb-4 text-sm font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-2 mb-3 last:mb-0") }, });
    const __VLS_489 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_490 = __VLS_asFunctionalComponent(__VLS_489, new __VLS_489({ ...{ 'onClick': {} }, type: ((__VLS_ctx.eventDemoEnabled ? 'success' : 'primary')), }));
    const __VLS_491 = __VLS_490({ ...{ 'onClick': {} }, type: ((__VLS_ctx.eventDemoEnabled ? 'success' : 'primary')), }, ...__VLS_functionalComponentArgsRest(__VLS_490));
    let __VLS_495;
    const __VLS_496 = {
        onClick: (__VLS_ctx.toggleEventDemo)
    };
    let __VLS_492;
    let __VLS_493;
    (__VLS_ctx.eventDemoEnabled ? '关闭' : '开启');
    __VLS_nonNullable(__VLS_494.slots).default;
    var __VLS_494;
    if (__VLS_ctx.eventDemoEnabled) {
        const __VLS_497 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_498 = __VLS_asFunctionalComponent(__VLS_497, new __VLS_497({ ...{ 'onClick': {} }, }));
        const __VLS_499 = __VLS_498({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_498));
        let __VLS_503;
        const __VLS_504 = {
            onClick: (__VLS_ctx.clearEventLogs)
        };
        let __VLS_500;
        let __VLS_501;
        __VLS_nonNullable(__VLS_502.slots).default;
        var __VLS_502;
    }
    if (__VLS_ctx.eventDemoEnabled && __VLS_ctx.eventLogs.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-3 mt-3 bg-g-200 border border-g-400 rounded-md") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb mb-2 font-medium text-g-700") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        const __VLS_505 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_506 = __VLS_asFunctionalComponent(__VLS_505, new __VLS_505({ size: ("small"), }));
        const __VLS_507 = __VLS_506({ size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_506));
        (__VLS_ctx.eventLogs.length);
        __VLS_nonNullable(__VLS_510.slots).default;
        var __VLS_510;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-1 max-h-50 overflow-y-auto") }, });
        for (const [log, index] of __VLS_getVForSourceType((__VLS_ctx.eventLogs.slice(0, 20)))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("flex-c gap-2 p-1.5 px-2 text-xs bg-g-300 border-l-1 border-g-400 rounded") }, });
            const __VLS_511 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
            /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
            // @ts-ignore
            const __VLS_512 = __VLS_asFunctionalComponent(__VLS_511, new __VLS_511({ type: ((__VLS_ctx.getEventType(log.type))), size: ("small"), }));
            const __VLS_513 = __VLS_512({ type: ((__VLS_ctx.getEventType(log.type))), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_512));
            (log.type);
            __VLS_nonNullable(__VLS_516.slots).default;
            var __VLS_516;
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex-1 text-g-700") }, });
            (log.message);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs text-g-600") }, });
            (log.time);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 bg-g-200 border-full-d rounded-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("m-0 mb-4 text-sm font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-2 mb-3 last:mb-0") }, });
    const __VLS_517 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, ] } */
    // @ts-ignore
    const __VLS_518 = __VLS_asFunctionalComponent(__VLS_517, new __VLS_517({ modelValue: ((__VLS_ctx.tableConfig.fixedHeight)), activeText: ("固定高度 (500px)"), inactiveText: ("自适应高度"), ...{ class: ("ml-2") }, }));
    const __VLS_519 = __VLS_518({ modelValue: ((__VLS_ctx.tableConfig.fixedHeight)), activeText: ("固定高度 (500px)"), inactiveText: ("自适应高度"), ...{ class: ("ml-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_518));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 bg-g-200 border-full-d rounded-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("m-0 mb-4 text-sm font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-2 mb-3 last:mb-0") }, });
    const __VLS_523 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_524 = __VLS_asFunctionalComponent(__VLS_523, new __VLS_523({ ...{ 'onClick': {} }, }));
    const __VLS_525 = __VLS_524({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_524));
    let __VLS_529;
    const __VLS_530 = {
        onClick: (__VLS_ctx.handleScrollToTop)
    };
    let __VLS_526;
    let __VLS_527;
    __VLS_nonNullable(__VLS_528.slots).default;
    var __VLS_528;
    const __VLS_531 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_532 = __VLS_asFunctionalComponent(__VLS_531, new __VLS_531({ ...{ 'onClick': {} }, }));
    const __VLS_533 = __VLS_532({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_532));
    let __VLS_537;
    const __VLS_538 = {
        onClick: (__VLS_ctx.handleScrollToPosition)
    };
    let __VLS_534;
    let __VLS_535;
    __VLS_nonNullable(__VLS_536.slots).default;
    var __VLS_536;
    const __VLS_539 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_540 = __VLS_asFunctionalComponent(__VLS_539, new __VLS_539({ ...{ 'onClick': {} }, }));
    const __VLS_541 = __VLS_540({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_540));
    let __VLS_545;
    const __VLS_546 = {
        onClick: (__VLS_ctx.handleToggleSelection)
    };
    let __VLS_542;
    let __VLS_543;
    __VLS_nonNullable(__VLS_544.slots).default;
    var __VLS_544;
    const __VLS_547 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_548 = __VLS_asFunctionalComponent(__VLS_547, new __VLS_547({ ...{ 'onClick': {} }, }));
    const __VLS_549 = __VLS_548({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_548));
    let __VLS_553;
    const __VLS_554 = {
        onClick: (__VLS_ctx.handleGetTableInfo)
    };
    let __VLS_550;
    let __VLS_551;
    __VLS_nonNullable(__VLS_552.slots).default;
    var __VLS_552;
    var __VLS_488;
    const __VLS_555 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_556 = __VLS_asFunctionalComponent(__VLS_555, new __VLS_555({ ...{ class: ("art-card-xs") }, }));
    const __VLS_557 = __VLS_556({ ...{ class: ("art-card-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_556));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_560.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("m-0") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-2 max-md:flex-col") }, });
    const __VLS_561 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_562 = __VLS_asFunctionalComponent(__VLS_561, new __VLS_561({ ...{ 'onClick': {} }, }));
    const __VLS_563 = __VLS_562({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_562));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_567;
    const __VLS_568 = {
        onClick: (__VLS_ctx.refreshData)
    };
    let __VLS_564;
    let __VLS_565;
    const __VLS_569 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_570 = __VLS_asFunctionalComponent(__VLS_569, new __VLS_569({}));
    const __VLS_571 = __VLS_570({}, ...__VLS_functionalComponentArgsRest(__VLS_570));
    const __VLS_575 = __VLS_resolvedLocalAndGlobalComponents.Refresh;
    /** @type { [typeof __VLS_components.Refresh, ] } */
    // @ts-ignore
    const __VLS_576 = __VLS_asFunctionalComponent(__VLS_575, new __VLS_575({}));
    const __VLS_577 = __VLS_576({}, ...__VLS_functionalComponentArgsRest(__VLS_576));
    __VLS_nonNullable(__VLS_574.slots).default;
    var __VLS_574;
    __VLS_nonNullable(__VLS_566.slots).default;
    var __VLS_566;
    const __VLS_581 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_582 = __VLS_asFunctionalComponent(__VLS_581, new __VLS_581({ ...{ 'onClick': {} }, }));
    const __VLS_583 = __VLS_582({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_582));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_587;
    const __VLS_588 = {
        onClick: (__VLS_ctx.refreshSoft)
    };
    let __VLS_584;
    let __VLS_585;
    const __VLS_589 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_590 = __VLS_asFunctionalComponent(__VLS_589, new __VLS_589({}));
    const __VLS_591 = __VLS_590({}, ...__VLS_functionalComponentArgsRest(__VLS_590));
    const __VLS_595 = __VLS_resolvedLocalAndGlobalComponents.Refresh;
    /** @type { [typeof __VLS_components.Refresh, ] } */
    // @ts-ignore
    const __VLS_596 = __VLS_asFunctionalComponent(__VLS_595, new __VLS_595({}));
    const __VLS_597 = __VLS_596({}, ...__VLS_functionalComponentArgsRest(__VLS_596));
    __VLS_nonNullable(__VLS_594.slots).default;
    var __VLS_594;
    __VLS_nonNullable(__VLS_586.slots).default;
    var __VLS_586;
    const __VLS_601 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_602 = __VLS_asFunctionalComponent(__VLS_601, new __VLS_601({ ...{ 'onClick': {} }, }));
    const __VLS_603 = __VLS_602({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_602));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_607;
    const __VLS_608 = {
        onClick: (__VLS_ctx.refreshCreate)
    };
    let __VLS_604;
    let __VLS_605;
    const __VLS_609 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_610 = __VLS_asFunctionalComponent(__VLS_609, new __VLS_609({}));
    const __VLS_611 = __VLS_610({}, ...__VLS_functionalComponentArgsRest(__VLS_610));
    const __VLS_615 = __VLS_resolvedLocalAndGlobalComponents.Plus;
    /** @type { [typeof __VLS_components.Plus, ] } */
    // @ts-ignore
    const __VLS_616 = __VLS_asFunctionalComponent(__VLS_615, new __VLS_615({}));
    const __VLS_617 = __VLS_616({}, ...__VLS_functionalComponentArgsRest(__VLS_616));
    __VLS_nonNullable(__VLS_614.slots).default;
    var __VLS_614;
    __VLS_nonNullable(__VLS_606.slots).default;
    var __VLS_606;
    const __VLS_621 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_622 = __VLS_asFunctionalComponent(__VLS_621, new __VLS_621({ ...{ 'onClick': {} }, }));
    const __VLS_623 = __VLS_622({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_622));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_627;
    const __VLS_628 = {
        onClick: (__VLS_ctx.refreshUpdate)
    };
    let __VLS_624;
    let __VLS_625;
    const __VLS_629 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_630 = __VLS_asFunctionalComponent(__VLS_629, new __VLS_629({}));
    const __VLS_631 = __VLS_630({}, ...__VLS_functionalComponentArgsRest(__VLS_630));
    const __VLS_635 = __VLS_resolvedLocalAndGlobalComponents.Edit;
    /** @type { [typeof __VLS_components.Edit, ] } */
    // @ts-ignore
    const __VLS_636 = __VLS_asFunctionalComponent(__VLS_635, new __VLS_635({}));
    const __VLS_637 = __VLS_636({}, ...__VLS_functionalComponentArgsRest(__VLS_636));
    __VLS_nonNullable(__VLS_634.slots).default;
    var __VLS_634;
    __VLS_nonNullable(__VLS_626.slots).default;
    var __VLS_626;
    const __VLS_641 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_642 = __VLS_asFunctionalComponent(__VLS_641, new __VLS_641({ ...{ 'onClick': {} }, }));
    const __VLS_643 = __VLS_642({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_642));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_647;
    const __VLS_648 = {
        onClick: (__VLS_ctx.refreshRemove)
    };
    let __VLS_644;
    let __VLS_645;
    const __VLS_649 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_650 = __VLS_asFunctionalComponent(__VLS_649, new __VLS_649({}));
    const __VLS_651 = __VLS_650({}, ...__VLS_functionalComponentArgsRest(__VLS_650));
    const __VLS_655 = __VLS_resolvedLocalAndGlobalComponents.Delete;
    /** @type { [typeof __VLS_components.Delete, ] } */
    // @ts-ignore
    const __VLS_656 = __VLS_asFunctionalComponent(__VLS_655, new __VLS_655({}));
    const __VLS_657 = __VLS_656({}, ...__VLS_functionalComponentArgsRest(__VLS_656));
    __VLS_nonNullable(__VLS_654.slots).default;
    var __VLS_654;
    __VLS_nonNullable(__VLS_646.slots).default;
    var __VLS_646;
    var __VLS_560;
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['pb-5'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['leading-[1.6]'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['my-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['max-h-50'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-1'];
    __VLS_styleScopedClasses['p-1.5'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['leading-[1.4]'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-l-1'];
    __VLS_styleScopedClasses['border-g-400'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['bg-[rgba(103,194,58,0.1)]'];
    __VLS_styleScopedClasses['!border-l-success'];
    __VLS_styleScopedClasses['bg-[rgba(64,158,255,0.1)]'];
    __VLS_styleScopedClasses['!border-l-theme'];
    __VLS_styleScopedClasses['bg-[rgba(245,108,108,0.1)]'];
    __VLS_styleScopedClasses['!border-l-danger'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['max-h-50'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-g-400'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['art-table-card'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['el-icon--right'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['user-info'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['min-w-0'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-ellipsis'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['text-ellipsis'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['gap-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['gap-1'];
    __VLS_styleScopedClasses['text-theme'];
    __VLS_styleScopedClasses['c-p'];
    __VLS_styleScopedClasses['custom-header'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-g-400'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-1'];
    __VLS_styleScopedClasses['max-h-50'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['p-1.5'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['bg-g-300'];
    __VLS_styleScopedClasses['border-l-1'];
    __VLS_styleScopedClasses['border-g-400'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['ml-2'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['bg-g-200'];
    __VLS_styleScopedClasses['border-full-d'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['last:mb-0'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['m-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['max-md:flex-col'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "searchBarRef": __VLS_164,
        "tableRef": __VLS_369,
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
            Plus: Plus,
            Delete: Delete,
            Edit: Edit,
            Search: Search,
            Refresh: Refresh,
            QuestionFilled: QuestionFilled,
            ArrowDown: ArrowDown,
            selectedRows: selectedRows,
            tableRef: tableRef,
            showDebugPanel: showDebugPanel,
            debugActiveNames: debugActiveNames,
            cacheDebugLogs: cacheDebugLogs,
            requestParams: requestParams,
            phoneSearch: phoneSearch,
            eventDemoEnabled: eventDemoEnabled,
            eventLogs: eventLogs,
            tableConfig: tableConfig,
            computedTableHeight: computedTableHeight,
            searchBarRef: searchBarRef,
            rules: rules,
            searchFormState: searchFormState,
            searchItems: searchItems,
            exportColumns: exportColumns,
            getUserStatusConfig: getUserStatusConfig,
            data: data,
            loading: loading,
            error: error,
            hasData: hasData,
            pagination: pagination,
            handleSizeChange: handleSizeChange,
            handleCurrentChange: handleCurrentChange,
            refreshData: refreshData,
            refreshSoft: refreshSoft,
            refreshCreate: refreshCreate,
            refreshUpdate: refreshUpdate,
            refreshRemove: refreshRemove,
            cacheInfo: cacheInfo,
            columns: columns,
            columnChecks: columnChecks,
            handleSelectionChange: handleSelectionChange,
            handleRowClick: handleRowClick,
            handleHeaderClick: handleHeaderClick,
            handleSortChange: handleSortChange,
            getEventType: getEventType,
            toggleEventDemo: toggleEventDemo,
            clearEventLogs: clearEventLogs,
            handleScrollToTop: handleScrollToTop,
            handleScrollToPosition: handleScrollToPosition,
            handleToggleSelection: handleToggleSelection,
            handleGetTableInfo: handleGetTableInfo,
            handleSearch: handleSearch,
            handleReset: handleReset,
            handlePhoneSearch: handlePhoneSearch,
            handleRefresh: handleRefresh,
            handleAdd: handleAdd,
            handleEdit: handleEdit,
            handleDelete: handleDelete,
            handleView: handleView,
            handleBatchDelete: handleBatchDelete,
            handleExportSuccess: handleExportSuccess,
            handleImportSuccess: handleImportSuccess,
            handleImportError: handleImportError,
            handleClearCache: handleClearCache,
            handleCleanExpiredCache: handleCleanExpiredCache,
            handleCancelRequest: handleCancelRequest,
            handleClearData: handleClearData,
            handleTestCache: handleTestCache,
            forceRefreshCacheInfo: forceRefreshCacheInfo,
            handleColumnCommand: handleColumnCommand,
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