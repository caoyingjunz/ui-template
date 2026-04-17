/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import cover1 from '@imgs/cover/img1.webp';
import cover2 from '@imgs/cover/img2.webp';
import cover3 from '@imgs/cover/img3.webp';
import cover4 from '@imgs/cover/img4.webp';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'TemplateCards' });
/**
 * 统计卡片数据配置
 */
const statsCards = [
    {
        id: 1,
        title: '销售产品',
        count: 1235,
        description: '鞋子、牛仔裤、派对服装、手表',
        icon: 'ri:bar-chart-box-line',
        boxStyle: '!bg-theme/10',
        customIconStyle: '!text-theme !text-3xl',
        iconStyle: 'bg-info',
        textColor: 'var(--theme-color)',
        showArrow: false
    },
    {
        id: 2,
        title: '活跃用户',
        count: 5000,
        description: '日活跃用户超过5,000+',
        icon: 'ri:account-box-2-line',
        boxStyle: '!bg-warning/10',
        customIconStyle: '!text-warning !text-3xl',
        iconStyle: 'bg-warning',
        textColor: 'var(--art-warning)',
        showArrow: false
    },
    {
        id: 3,
        title: '总收入',
        count: 35000,
        description: '月收入超过¥350,000+',
        icon: 'ri:money-cny-box-line',
        boxStyle: '!bg-secondary/10',
        customIconStyle: '!text-secondary !text-3xl',
        iconStyle: 'bg-secondary',
        textColor: 'var(--art-secondary)',
        showArrow: false
    },
    {
        id: 4,
        title: '客户评价',
        count: 4800,
        description: '平均评分4.8/5',
        icon: 'ri:message-3-line',
        boxStyle: '!bg-error/10',
        customIconStyle: '!text-error !text-3xl',
        iconStyle: 'bg-error',
        textColor: 'var(--art-error)',
        showArrow: false
    }
];
const progressCards = [
    {
        id: 1,
        title: '完成进度',
        percentage: 75,
        color: 'var(--art-success)',
        icon: 'ri:arrow-up-circle-line',
        iconStyle: 'bg-success/12 text-success'
    },
    {
        id: 2,
        title: '项目进度',
        percentage: 65,
        color: 'var(--theme-color)',
        icon: 'ri:twitch-line',
        iconStyle: 'bg-theme/12 text-theme'
    },
    {
        id: 3,
        title: '学习进度',
        percentage: 45,
        color: 'var(--art-error)',
        icon: 'ri:game-line',
        iconStyle: '!bg-error/12 text-error'
    },
    {
        id: 4,
        title: '任务进度',
        percentage: 90,
        color: 'var(--art-secondary)',
        icon: 'ri:flag-2-line',
        iconStyle: 'bg-secondary/12 text-secondary'
    }
];
const imageCards = [
    {
        id: 1,
        imageUrl: cover1,
        title: 'AI技术在医疗领域的创新应用与发展前景',
        category: '社交',
        readTime: '2分钟',
        views: 9125,
        comments: 3,
        date: '12月19日 周一'
    },
    {
        id: 2,
        imageUrl: cover2,
        title: '大数据分析助力企业决策的实践案例',
        category: '技术',
        readTime: '3分钟',
        views: 7234,
        comments: 5,
        date: '12月20日 周二'
    },
    {
        id: 3,
        imageUrl: cover3,
        title: '区块链技术在供应链管理中的应用',
        category: '科技',
        readTime: '4分钟',
        views: 5678,
        comments: 8,
        date: '12月21日 周三'
    },
    {
        id: 4,
        imageUrl: cover4,
        title: '云计算技术发展趋势与未来展望',
        category: '云技术',
        readTime: '5分钟',
        views: 4321,
        comments: 6,
        date: '12月22日 周四'
    }
];
const dataList = [
    {
        title: '新加坡之行',
        status: '进行中',
        time: '5分钟',
        class: 'bg-theme/12 text-theme',
        icon: 'ri:camera-4-line'
    },
    {
        title: '归档数据',
        status: '进行中',
        time: '10分钟',
        class: 'bg-secondary/12 text-secondary',
        icon: 'ri:bar-chart-box-line'
    },
    {
        title: '客户会议',
        status: '待处理',
        time: '15分钟',
        class: 'bg-warning/12 text-warning',
        icon: 'ri:user-3-line'
    },
    {
        title: '筛选任务团队',
        status: '进行中',
        time: '20分钟',
        class: 'bg-error/12 text-error',
        icon: 'ri:account-circle-line'
    },
    {
        title: '发送信封给小王',
        status: '已完成',
        time: '20分钟',
        class: 'bg-success/12 text-success',
        icon: 'ri:message-3-line'
    }
];
const timelineData = [
    {
        time: '上午 09:30',
        status: 'rgb(73, 190, 255)',
        content: '收到 John Doe 支付的 385.90 美元'
    },
    {
        time: '上午 10:00',
        status: 'rgb(54, 158, 255)',
        content: '新销售记录',
        code: 'ML-3467'
    },
    {
        time: '上午 12:00',
        status: 'rgb(103, 232, 207)',
        content: '向 Michael 支付了 64.95 美元'
    },
    {
        time: '下午 14:30',
        status: 'rgb(255, 193, 7)',
        content: '系统维护通知',
        code: 'MT-2023'
    },
    {
        time: '下午 15:45',
        status: 'rgb(255, 105, 105)',
        content: '紧急订单取消提醒',
        code: 'OR-9876'
    },
    {
        time: '下午 17:00',
        status: 'rgb(103, 232, 207)',
        content: '完成每日销售报表'
    }
];
/**
 * 处理查看更多按钮点击
 */
const handleMore = () => {
    ElMessage.info('查看更多');
};
/**
 * 处理图片卡片点击事件
 * @param card 卡片数据
 */
const handleImageCardClick = (card) => {
    console.log('点击卡片:', card);
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((20)), }));
    const __VLS_2 = __VLS_1({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    for (const [card] of __VLS_getVForSourceType((__VLS_ctx.statsCards))) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }));
        const __VLS_8 = __VLS_7({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ArtStatsCard;
        /** @type { [typeof __VLS_components.ArtStatsCard, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ((card.icon)), iconStyle: ((card.iconStyle)), title: ((card.title)), description: ((card.description)), showArrow: ((card.showArrow)), }));
        const __VLS_14 = __VLS_13({ icon: ((card.icon)), iconStyle: ((card.iconStyle)), title: ((card.title)), description: ((card.description)), showArrow: ((card.showArrow)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ gutter: ((20)), }));
    const __VLS_20 = __VLS_19({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    for (const [card] of __VLS_getVForSourceType((__VLS_ctx.statsCards))) {
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }));
        const __VLS_26 = __VLS_25({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ArtStatsCard;
        /** @type { [typeof __VLS_components.ArtStatsCard, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ icon: ((card.icon)), iconStyle: ((card.iconStyle)), count: ((card.count)), description: ((card.description)), decimals: ((0)), showArrow: ((card.showArrow)), separator: (","), }));
        const __VLS_32 = __VLS_31({ icon: ((card.icon)), iconStyle: ((card.iconStyle)), count: ((card.count)), description: ((card.description)), decimals: ((0)), showArrow: ((card.showArrow)), separator: (","), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        __VLS_nonNullable(__VLS_29.slots).default;
        var __VLS_29;
    }
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ gutter: ((20)), }));
    const __VLS_38 = __VLS_37({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    for (const [card] of __VLS_getVForSourceType((__VLS_ctx.statsCards))) {
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }));
        const __VLS_44 = __VLS_43({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ArtStatsCard;
        /** @type { [typeof __VLS_components.ArtStatsCard, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ icon: ((card.icon)), iconStyle: ((card.customIconStyle)), boxStyle: ((card.boxStyle)), title: ((card.title)), description: ((card.description)), textColor: ((card.textColor)), showArrow: ((card.showArrow)), }));
        const __VLS_50 = __VLS_49({ icon: ((card.icon)), iconStyle: ((card.customIconStyle)), boxStyle: ((card.boxStyle)), title: ((card.title)), description: ((card.description)), textColor: ((card.textColor)), showArrow: ((card.showArrow)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        __VLS_nonNullable(__VLS_47.slots).default;
        var __VLS_47;
    }
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ gutter: ((20)), }));
    const __VLS_56 = __VLS_55({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    for (const [card] of __VLS_getVForSourceType((__VLS_ctx.progressCards))) {
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }));
        const __VLS_62 = __VLS_61({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ArtProgressCard;
        /** @type { [typeof __VLS_components.ArtProgressCard, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ percentage: ((card.percentage)), title: ((card.title)), color: ((card.color)), }));
        const __VLS_68 = __VLS_67({ percentage: ((card.percentage)), title: ((card.title)), color: ((card.color)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        __VLS_nonNullable(__VLS_65.slots).default;
        var __VLS_65;
    }
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ gutter: ((20)), }));
    const __VLS_74 = __VLS_73({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    for (const [card] of __VLS_getVForSourceType((__VLS_ctx.progressCards))) {
        const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }));
        const __VLS_80 = __VLS_79({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_79));
        const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ArtProgressCard;
        /** @type { [typeof __VLS_components.ArtProgressCard, ] } */
        // @ts-ignore
        const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ percentage: ((card.percentage)), title: ((card.title)), color: ((card.color)), icon: ((card.icon)), iconStyle: ((card.iconStyle)), }));
        const __VLS_86 = __VLS_85({ percentage: ((card.percentage)), title: ((card.title)), color: ((card.color)), icon: ((card.icon)), iconStyle: ((card.iconStyle)), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
        __VLS_nonNullable(__VLS_83.slots).default;
        var __VLS_83;
    }
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ gutter: ((20)), }));
    const __VLS_92 = __VLS_91({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_98 = __VLS_97({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ArtLineChartCard;
    /** @type { [typeof __VLS_components.ArtLineChartCard, ] } */
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ isMiniChart: ((true)), value: ((2545)), label: ("新用户"), date: ("过去7天"), percentage: ((1.2)), height: ((9.5)), chartData: (([120, 132, 101, 134, 90, 230, 210])), }));
    const __VLS_104 = __VLS_103({ isMiniChart: ((true)), value: ((2545)), label: ("新用户"), date: ("过去7天"), percentage: ((1.2)), height: ((9.5)), chartData: (([120, 132, 101, 134, 90, 230, 210])), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    __VLS_nonNullable(__VLS_101.slots).default;
    var __VLS_101;
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_110 = __VLS_109({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ArtBarChartCard;
    /** @type { [typeof __VLS_components.ArtBarChartCard, ] } */
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ isMiniChart: ((true)), value: ((15480)), label: ("浏览量"), date: ("过去 14 天"), percentage: ((-4.15)), height: ((9.5)), barWidth: (('45%')), chartData: (([120, 100, 150, 140, 90, 120, 130])), }));
    const __VLS_116 = __VLS_115({ isMiniChart: ((true)), value: ((15480)), label: ("浏览量"), date: ("过去 14 天"), percentage: ((-4.15)), height: ((9.5)), barWidth: (('45%')), chartData: (([120, 100, 150, 140, 90, 120, 130])), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    __VLS_nonNullable(__VLS_113.slots).default;
    var __VLS_113;
    const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_122 = __VLS_121({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_121));
    const __VLS_126 = __VLS_resolvedLocalAndGlobalComponents.ArtLineChartCard;
    /** @type { [typeof __VLS_components.ArtLineChartCard, ] } */
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ isMiniChart: ((true)), value: ((2545)), label: ("粉丝数"), date: ("过去 30 天"), percentage: ((1.2)), height: ((9.5)), showAreaColor: ((true)), chartData: (([150, 180, 160, 200, 180, 220, 240])), }));
    const __VLS_128 = __VLS_127({ isMiniChart: ((true)), value: ((2545)), label: ("粉丝数"), date: ("过去 30 天"), percentage: ((1.2)), height: ((9.5)), showAreaColor: ((true)), chartData: (([150, 180, 160, 200, 180, 220, 240])), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    __VLS_nonNullable(__VLS_125.slots).default;
    var __VLS_125;
    const __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_134 = __VLS_133({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_133));
    const __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.ArtDonutChartCard;
    /** @type { [typeof __VLS_components.ArtDonutChartCard, ] } */
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ value: ((36358)), title: ("粉丝量"), percentage: ((18)), percentageLabel: ("较去年"), data: (([50, 40])), height: ((9.5)), currentValue: ("2022"), previousValue: ("2021"), radius: ((['50%', '70%'])), }));
    const __VLS_140 = __VLS_139({ value: ((36358)), title: ("粉丝量"), percentage: ((18)), percentageLabel: ("较去年"), data: (([50, 40])), height: ((9.5)), currentValue: ("2022"), previousValue: ("2021"), radius: ((['50%', '70%'])), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
    __VLS_nonNullable(__VLS_137.slots).default;
    var __VLS_137;
    __VLS_nonNullable(__VLS_95.slots).default;
    var __VLS_95;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_144 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ gutter: ((20)), }));
    const __VLS_146 = __VLS_145({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
    const __VLS_150 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_152 = __VLS_151({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_151));
    const __VLS_156 = __VLS_resolvedLocalAndGlobalComponents.ArtLineChartCard;
    /** @type { [typeof __VLS_components.ArtLineChartCard, ] } */
    // @ts-ignore
    const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ value: ((2545)), label: ("新用户"), percentage: ((1.2)), height: ((11)), chartData: (([120, 132, 101, 134, 90, 230, 210])), }));
    const __VLS_158 = __VLS_157({ value: ((2545)), label: ("新用户"), percentage: ((1.2)), height: ((11)), chartData: (([120, 132, 101, 134, 90, 230, 210])), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
    __VLS_nonNullable(__VLS_155.slots).default;
    var __VLS_155;
    const __VLS_162 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_164 = __VLS_163({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_163));
    const __VLS_168 = __VLS_resolvedLocalAndGlobalComponents.ArtBarChartCard;
    /** @type { [typeof __VLS_components.ArtBarChartCard, ] } */
    // @ts-ignore
    const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ value: ((15480)), label: ("浏览量"), percentage: ((-4.15)), height: ((11)), chartData: (([120, 100, 150, 140, 90, 120, 130, 110])), }));
    const __VLS_170 = __VLS_169({ value: ((15480)), label: ("浏览量"), percentage: ((-4.15)), height: ((11)), chartData: (([120, 100, 150, 140, 90, 120, 130, 110])), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
    __VLS_nonNullable(__VLS_167.slots).default;
    var __VLS_167;
    const __VLS_174 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_176 = __VLS_175({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_175));
    const __VLS_180 = __VLS_resolvedLocalAndGlobalComponents.ArtLineChartCard;
    /** @type { [typeof __VLS_components.ArtLineChartCard, ] } */
    // @ts-ignore
    const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({ value: ((2545)), label: ("粉丝数"), percentage: ((1.2)), height: ((11)), showAreaColor: ((true)), chartData: (([150, 180, 160, 200, 180, 220, 240])), }));
    const __VLS_182 = __VLS_181({ value: ((2545)), label: ("粉丝数"), percentage: ((1.2)), height: ((11)), showAreaColor: ((true)), chartData: (([150, 180, 160, 200, 180, 220, 240])), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
    __VLS_nonNullable(__VLS_179.slots).default;
    var __VLS_179;
    const __VLS_186 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }));
    const __VLS_188 = __VLS_187({ xs: ((24)), sm: ((12)), md: ((6)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_187));
    const __VLS_192 = __VLS_resolvedLocalAndGlobalComponents.ArtDonutChartCard;
    /** @type { [typeof __VLS_components.ArtDonutChartCard, ] } */
    // @ts-ignore
    const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ value: ((36358)), title: ("粉丝量"), percentage: ((-18)), percentageLabel: ("较2021年"), data: (([70, 30])), height: ((11)), currentValue: ("12月"), previousValue: ("11月"), }));
    const __VLS_194 = __VLS_193({ value: ((36358)), title: ("粉丝量"), percentage: ((-18)), percentageLabel: ("较2021年"), data: (([70, 30])), height: ((11)), currentValue: ("12月"), previousValue: ("11月"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
    __VLS_nonNullable(__VLS_191.slots).default;
    var __VLS_191;
    __VLS_nonNullable(__VLS_149.slots).default;
    var __VLS_149;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_198 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({ gutter: ((20)), }));
    const __VLS_200 = __VLS_199({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_199));
    const __VLS_204 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({ xs: ((24)), sm: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_206 = __VLS_205({ xs: ((24)), sm: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_205));
    const __VLS_210 = __VLS_resolvedLocalAndGlobalComponents.ArtDataListCard;
    /** @type { [typeof __VLS_components.ArtDataListCard, ] } */
    // @ts-ignore
    const __VLS_211 = __VLS_asFunctionalComponent(__VLS_210, new __VLS_210({ list: ((__VLS_ctx.dataList)), title: ("待办事项"), subtitle: ("今日待处理任务"), }));
    const __VLS_212 = __VLS_211({ list: ((__VLS_ctx.dataList)), title: ("待办事项"), subtitle: ("今日待处理任务"), }, ...__VLS_functionalComponentArgsRest(__VLS_211));
    __VLS_nonNullable(__VLS_209.slots).default;
    var __VLS_209;
    const __VLS_216 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({ xs: ((24)), sm: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_218 = __VLS_217({ xs: ((24)), sm: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_217));
    const __VLS_222 = __VLS_resolvedLocalAndGlobalComponents.ArtDataListCard;
    /** @type { [typeof __VLS_components.ArtDataListCard, ] } */
    // @ts-ignore
    const __VLS_223 = __VLS_asFunctionalComponent(__VLS_222, new __VLS_222({ ...{ 'onMore': {} }, maxCount: ((4)), list: ((__VLS_ctx.dataList)), title: ("最近活动"), subtitle: ("近期活动列表"), showMoreButton: ((true)), }));
    const __VLS_224 = __VLS_223({ ...{ 'onMore': {} }, maxCount: ((4)), list: ((__VLS_ctx.dataList)), title: ("最近活动"), subtitle: ("近期活动列表"), showMoreButton: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_223));
    let __VLS_228;
    const __VLS_229 = {
        onMore: (__VLS_ctx.handleMore)
    };
    let __VLS_225;
    let __VLS_226;
    var __VLS_227;
    __VLS_nonNullable(__VLS_221.slots).default;
    var __VLS_221;
    const __VLS_230 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ xs: ((24)), sm: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }));
    const __VLS_232 = __VLS_231({ xs: ((24)), sm: ((12)), lg: ((8)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_231));
    const __VLS_236 = __VLS_resolvedLocalAndGlobalComponents.ArtTimelineListCard;
    /** @type { [typeof __VLS_components.ArtTimelineListCard, ] } */
    // @ts-ignore
    const __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236({ list: ((__VLS_ctx.timelineData)), title: ("最近交易"), subtitle: ("2024年12月20日"), }));
    const __VLS_238 = __VLS_237({ list: ((__VLS_ctx.timelineData)), title: ("最近交易"), subtitle: ("2024年12月20日"), }, ...__VLS_functionalComponentArgsRest(__VLS_237));
    __VLS_nonNullable(__VLS_235.slots).default;
    var __VLS_235;
    __VLS_nonNullable(__VLS_203.slots).default;
    var __VLS_203;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    const __VLS_242 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_243 = __VLS_asFunctionalComponent(__VLS_242, new __VLS_242({ gutter: ((20)), }));
    const __VLS_244 = __VLS_243({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_243));
    for (const [card] of __VLS_getVForSourceType((__VLS_ctx.imageCards))) {
        const __VLS_248 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
        // @ts-ignore
        const __VLS_249 = __VLS_asFunctionalComponent(__VLS_248, new __VLS_248({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }));
        const __VLS_250 = __VLS_249({ xs: ((24)), sm: ((12)), md: ((6)), key: ((card.id)), ...{ class: ("mb-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_249));
        const __VLS_254 = __VLS_resolvedLocalAndGlobalComponents.ArtImageCard;
        /** @type { [typeof __VLS_components.ArtImageCard, ] } */
        // @ts-ignore
        const __VLS_255 = __VLS_asFunctionalComponent(__VLS_254, new __VLS_254({ ...{ 'onClick': {} }, imageUrl: ((card.imageUrl)), title: ((card.title)), category: ((card.category)), readTime: ((card.readTime)), views: ((card.views)), comments: ((card.comments)), date: ((card.date)), }));
        const __VLS_256 = __VLS_255({ ...{ 'onClick': {} }, imageUrl: ((card.imageUrl)), title: ((card.title)), category: ((card.category)), readTime: ((card.readTime)), views: ((card.views)), comments: ((card.comments)), date: ((card.date)), }, ...__VLS_functionalComponentArgsRest(__VLS_255));
        let __VLS_260;
        const __VLS_261 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleImageCardClick(card);
            }
        };
        let __VLS_257;
        let __VLS_258;
        var __VLS_259;
        __VLS_nonNullable(__VLS_253.slots).default;
        var __VLS_253;
    }
    __VLS_nonNullable(__VLS_247.slots).default;
    var __VLS_247;
    __VLS_styleScopedClasses['py-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['mb-5'];
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
            statsCards: statsCards,
            progressCards: progressCards,
            imageCards: imageCards,
            dataList: dataList,
            timelineData: timelineData,
            handleMore: handleMore,
            handleImageCardClick: handleImageCardClick,
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