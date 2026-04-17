/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import '@/assets/styles/core/md.scss';
import '@/assets/styles/custom/one-dark-pro.scss';
import { useCommon } from '@/hooks/core/useCommon';
import axios from 'axios';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'ArticleDetail' });
const route = useRoute();
const articleId = computed(() => Number(route.params.id));
const articleTitle = ref('');
const articleHtml = shallowRef('');
const loading = ref(false);
const error = ref(null);
const getArticleDetail = async () => {
    if (!articleId.value)
        return;
    loading.value = true;
    error.value = null;
    try {
        const { data } = await axios.get('https://www.qiniu.lingchen.kim/blog_detail.json');
        if (data.code === 200) {
            articleTitle.value = data.data.title;
            articleHtml.value = data.data.html_content;
        }
    }
    catch (err) {
        error.value = '文章加载失败';
        console.error('获取文章详情失败:', err);
    }
    finally {
        loading.value = false;
    }
};
const { scrollToTop } = useCommon();
onMounted(() => {
    scrollToTop();
    getArticleDetail();
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
    __VLS_styleScopedClasses['copy-button'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-detail page-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-200 m-auto mt-15") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-3xl font-semibold") }, });
    (__VLS_ctx.articleTitle);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("markdown-body mt-12.5") }, });
    __VLS_asFunctionalDirective(__VLS_directives.vHighlight)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.articleHtml) }, null, null);
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ArtBackToTop;
    /** @type { [typeof __VLS_components.ArtBackToTop, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_styleScopedClasses['article-detail'];
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['max-w-200'];
    __VLS_styleScopedClasses['m-auto'];
    __VLS_styleScopedClasses['mt-15'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['markdown-body'];
    __VLS_styleScopedClasses['mt-12.5'];
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
            articleTitle: articleTitle,
            articleHtml: articleHtml,
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