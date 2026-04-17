/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { Search } from '@element-plus/icons-vue';
import { router } from '@/router';
import { useDateFormat } from '@vueuse/core';
import EmojiText from '@/utils/ui/emojo';
import { ArticleList } from '@/mock/temp/articleList';
import { useCommon } from '@/hooks/core/useCommon';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'ArticleList' });
const YEAR_OPTIONS = ['All', '2024', '2023', '2022', '2021', '2020', '2019'];
const PAGE_SIZE = 40;
const yearVal = ref('All');
const searchVal = ref('');
const articleList = ref([]);
const currentPage = ref(1);
const pageSize = ref(PAGE_SIZE);
const total = ref(0);
const isLoading = ref(true);
const showEmpty = computed(() => articleList.value.length === 0 && !isLoading.value);
const getArticleList = async ({ backTop = false } = {}) => {
    isLoading.value = true;
    try {
        if (searchVal.value) {
            yearVal.value = 'All';
        }
        // TODO: 替换为真实 API 调用
        // const params = {
        //   page: currentPage.value,
        //   size: pageSize.value,
        //   searchVal: searchVal.value,
        //   year: yearVal.value === 'All' ? '' : yearVal.value
        // }
        // const res = await ArticleService.getArticleList(params)
        articleList.value = ArticleList;
        if (backTop) {
            useCommon().scrollToTop();
        }
    }
    catch (error) {
        console.error('获取文章列表失败:', error);
    }
    finally {
        isLoading.value = false;
    }
};
const searchArticle = () => {
    currentPage.value = 1;
    getArticleList({ backTop: true });
};
const searchArticleByYear = () => {
    currentPage.value = 1;
    getArticleList({ backTop: true });
};
const handleCurrentChange = (val) => {
    currentPage.value = val;
    getArticleList({ backTop: true });
};
const toDetail = (item) => {
    router.push({ name: 'ArticleDetail', params: { id: item.id } });
};
const toEdit = (item) => {
    router.push({ name: 'ArticlePublish', query: { id: item.id } });
};
const toAddArticle = () => {
    router.push({ name: 'ArticlePublish' });
};
onMounted(() => {
    getArticleList();
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content !mb-5") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ justify: ("space-between"), gutter: ((10)), }));
    const __VLS_2 = __VLS_1({ justify: ("space-between"), gutter: ((10)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ lg: ((6)), md: ((6)), sm: ((14)), xs: ((16)), }));
    const __VLS_8 = __VLS_7({ lg: ((6)), md: ((6)), sm: ((14)), xs: ((16)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.searchVal)), prefixIcon: ((__VLS_ctx.Search)), clearable: (true), placeholder: ("输入文章标题查询"), }));
    const __VLS_14 = __VLS_13({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.searchVal)), prefixIcon: ((__VLS_ctx.Search)), clearable: (true), placeholder: ("输入文章标题查询"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onKeyup: (__VLS_ctx.searchArticle)
    };
    let __VLS_15;
    let __VLS_16;
    var __VLS_17;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ lg: ((12)), md: ((12)), sm: ((0)), xs: ((0)), }));
    const __VLS_22 = __VLS_21({ lg: ((12)), md: ((12)), sm: ((0)), xs: ((0)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("custom-segmented") }, });
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElSegmented;
    /** @type { [typeof __VLS_components.ElSegmented, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.yearVal)), options: ((__VLS_ctx.YEAR_OPTIONS)), }));
    const __VLS_28 = __VLS_27({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.yearVal)), options: ((__VLS_ctx.YEAR_OPTIONS)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    let __VLS_32;
    const __VLS_33 = {
        onChange: (__VLS_ctx.searchArticleByYear)
    };
    let __VLS_29;
    let __VLS_30;
    var __VLS_31;
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25;
    const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ lg: ((6)), md: ((6)), sm: ((10)), xs: ((6)), ...{ style: ({}) }, }));
    const __VLS_36 = __VLS_35({ lg: ((6)), md: ((6)), sm: ((10)), xs: ((6)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {} }, }));
    const __VLS_42 = __VLS_41({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    __VLS_asFunctionalDirective(__VLS_directives.vAuth)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: ('add') }, null, null);
    let __VLS_46;
    const __VLS_47 = {
        onClick: (__VLS_ctx.toAddArticle)
    };
    let __VLS_43;
    let __VLS_44;
    __VLS_nonNullable(__VLS_45.slots).default;
    var __VLS_45;
    __VLS_nonNullable(__VLS_39.slots).default;
    var __VLS_39;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-5 gap-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.articleList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.toDetail(item);
                } }, ...{ class: ("group c-p overflow-hidden border border-g-300/60 rounded-custom-sm") }, key: ((item.id)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative aspect-[16/9.5]") }, });
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElImage;
        /** @type { [typeof __VLS_components.ElImage, typeof __VLS_components.ElImage, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ class: ("flex align-center justify-center w-full h-full object-cover bg-gray-200") }, src: ((item.home_img)), lazy: (true), fit: ("cover"), }));
        const __VLS_50 = __VLS_49({ ...{ class: ("flex align-center justify-center w-full h-full object-cover bg-gray-200") }, src: ((item.home_img)), lazy: (true), fit: ("cover"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute top-1 right-1 bg-black/50 rounded text-xs px-1 py-0.5 text-white") }, });
        (item.type_name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("px-2 py-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-base text-g-800 font-medium") }, });
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-b w-full h-6 mt-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c text-g-500") }, });
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
        /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ icon: ("ri:time-line"), ...{ class: ("mr-1 text-sm") }, }));
        const __VLS_56 = __VLS_55({ icon: ("ri:time-line"), ...{ class: ("mr-1 text-sm") }, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm") }, });
        (__VLS_ctx.useDateFormat(item.create_time, 'YYYY-MM-DD'));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-px h-3 bg-g-400 mx-3.5") }, });
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
        /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ icon: ("ri:eye-line"), ...{ class: ("mr-1 text-sm") }, }));
        const __VLS_62 = __VLS_61({ icon: ("ri:eye-line"), ...{ class: ("mr-1 text-sm") }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm") }, });
        (item.count);
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{ 'onClick': {} }, ...{ class: ("opacity-0 group-hover:opacity-100") }, size: ("small"), }));
        const __VLS_68 = __VLS_67({ ...{ 'onClick': {} }, ...{ class: ("opacity-0 group-hover:opacity-100") }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        __VLS_asFunctionalDirective(__VLS_directives.vAuth)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: ('edit') }, null, null);
        let __VLS_72;
        const __VLS_73 = {
            onClick: (...[$event]) => {
                __VLS_ctx.toEdit(item);
            }
        };
        let __VLS_69;
        let __VLS_70;
        __VLS_nonNullable(__VLS_71.slots).default;
        var __VLS_71;
    }
    if (__VLS_ctx.showEmpty) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
        const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ElEmpty;
        /** @type { [typeof __VLS_components.ElEmpty, ] } */
        // @ts-ignore
        const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ description: ((`未找到相关数据 ${__VLS_ctx.EmojiText[0]}`)), }));
        const __VLS_76 = __VLS_75({ description: ((`未找到相关数据 ${__VLS_ctx.EmojiText[0]}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, ] } */
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ 'onCurrentChange': {} }, size: ("default"), background: (true), currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), pagerCount: ((9)), layout: ("prev, pager, next, total,jumper"), total: ((__VLS_ctx.total)), hideOnSinglePage: ((true)), }));
    const __VLS_82 = __VLS_81({ ...{ 'onCurrentChange': {} }, size: ("default"), background: (true), currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), pagerCount: ((9)), layout: ("prev, pager, next, total,jumper"), total: ((__VLS_ctx.total)), hideOnSinglePage: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    let __VLS_86;
    const __VLS_87 = {
        onCurrentChange: (__VLS_ctx.handleCurrentChange)
    };
    let __VLS_83;
    let __VLS_84;
    var __VLS_85;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['!mb-5'];
    __VLS_styleScopedClasses['custom-segmented'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-5'];
    __VLS_styleScopedClasses['gap-5'];
    __VLS_styleScopedClasses['max-2xl:grid-cols-4'];
    __VLS_styleScopedClasses['max-xl:grid-cols-3'];
    __VLS_styleScopedClasses['max-lg:grid-cols-2'];
    __VLS_styleScopedClasses['max-sm:grid-cols-1'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['c-p'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-g-300/60'];
    __VLS_styleScopedClasses['rounded-custom-sm'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['aspect-[16/9.5]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['top-1'];
    __VLS_styleScopedClasses['right-1'];
    __VLS_styleScopedClasses['bg-black/50'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['px-1'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['text-g-800'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['flex-b'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['text-g-500'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-px'];
    __VLS_styleScopedClasses['h-3'];
    __VLS_styleScopedClasses['bg-g-400'];
    __VLS_styleScopedClasses['mx-3.5'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['opacity-0'];
    __VLS_styleScopedClasses['group-hover:opacity-100'];
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
            Search: Search,
            useDateFormat: useDateFormat,
            EmojiText: EmojiText,
            YEAR_OPTIONS: YEAR_OPTIONS,
            yearVal: yearVal,
            searchVal: searchVal,
            articleList: articleList,
            currentPage: currentPage,
            pageSize: pageSize,
            total: total,
            showEmpty: showEmpty,
            searchArticle: searchArticle,
            searchArticleByYear: searchArticleByYear,
            handleCurrentChange: handleCurrentChange,
            toDetail: toDetail,
            toEdit: toEdit,
            toAddArticle: toAddArticle,
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