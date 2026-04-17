/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { Plus } from '@element-plus/icons-vue';
import { ApiStatus } from '@/utils/http/status';
import { useUserStore } from '@/store/modules/user';
import EmojiText from '@/utils/ui/emojo';
import { PageModeEnum } from '@/enums/formEnum';
import axios from 'axios';
import { useCommon } from '@/hooks/core/useCommon';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'ArticlePublish' });
const MAX_IMAGE_SIZE = 2; // MB
const EMPTY_EDITOR_CONTENT = '<p><br></p>';
const route = useRoute();
const userStore = useUserStore();
const { accessToken } = userStore;
const uploadImageUrl = `${import.meta.env.VITE_API_URL}/api/common/upload`;
const uploadHeaders = { Authorization: accessToken };
const pageMode = ref(PageModeEnum.Add);
const articleName = ref('');
const articleType = ref();
const articleTypes = ref([]);
const editorHtml = ref('');
const createDate = ref('');
const cover = ref('');
const visible = ref(true);
/**
 * 初始化页面模式（新增或编辑）
 */
const initPageMode = () => {
    const { id } = route.query;
    pageMode.value = id ? PageModeEnum.Edit : PageModeEnum.Add;
    if (pageMode.value === PageModeEnum.Edit) {
        getArticleDetail();
    }
    else {
        createDate.value = formatDate(useNow().value);
    }
};
/**
 * 获取文章分类列表
 */
const getArticleTypes = async () => {
    try {
        const { data } = await axios.get('https://www.qiniu.lingchen.kim/classify.json');
        if (data.code === 200) {
            articleTypes.value = data.data;
        }
    }
    catch (error) {
        console.error('获取文章分类失败:', error);
        ElMessage.error('获取文章分类失败');
    }
    // TODO: 替换为真实 API 调用
    // const res = await ArticleService.getArticleTypes({})
    // if (res.code === ApiStatus.success) {
    //   articleTypes.value = res.data
    // }
};
/**
 * 获取文章详情（编辑模式）
 */
const getArticleDetail = async () => {
    try {
        const { data } = await axios.get('https://www.qiniu.lingchen.kim/blog_list.json');
        if (data.code === ApiStatus.success) {
            const { title, blog_class, html_content } = data.data;
            articleName.value = title;
            articleType.value = Number(blog_class);
            editorHtml.value = html_content;
        }
    }
    catch (error) {
        console.error('获取文章详情失败:', error);
        ElMessage.error('获取文章详情失败');
    }
};
/**
 * 格式化日期为 YYYY-MM-DD 格式
 */
const formatDate = (date) => {
    return useDateFormat(date, 'YYYY-MM-DD').value;
};
/**
 * 验证文章表单数据
 */
const validateArticle = () => {
    if (!articleName.value.trim()) {
        ElMessage.error('请输入文章标题');
        return false;
    }
    if (!articleType.value) {
        ElMessage.error('请选择文章类型');
        return false;
    }
    if (!editorHtml.value || editorHtml.value === EMPTY_EDITOR_CONTENT) {
        ElMessage.error('请输入文章内容');
        return false;
    }
    if (!cover.value) {
        ElMessage.error('请上传封面图片');
        return false;
    }
    return true;
};
/**
 * 清理代码块中的多余空格
 */
const cleanCodeContent = (content) => {
    return content.replace(/(\s*)<\/code>/g, '</code>');
};
/**
 * 新增文章
 */
const addArticle = async () => {
    if (!validateArticle())
        return;
    try {
        const cleanedContent = cleanCodeContent(editorHtml.value);
        // TODO: 替换为真实 API 调用
        // const params = {
        //   title: articleName.value,
        //   type: articleType.value,
        //   content: cleanedContent,
        //   cover: cover.value,
        //   visible: visible.value
        // }
        // const res = await ArticleService.addArticle(params)
        // if (res.code === ApiStatus.success) {
        //   ElMessage.success('文章发布成功')
        //   router.push({ name: 'ArticleList' })
        // }
        console.log('新增文章:', { cleanedContent });
    }
    catch (error) {
        console.error('发布文章失败:', error);
        ElMessage.error('发布文章失败');
    }
};
/**
 * 编辑文章
 */
const editArticle = async () => {
    if (!validateArticle())
        return;
    try {
        const cleanedContent = cleanCodeContent(editorHtml.value);
        // TODO: 替换为真实 API 调用
        // const params = {
        //   id: route.query.id,
        //   title: articleName.value,
        //   type: articleType.value,
        //   content: cleanedContent,
        //   cover: cover.value,
        //   visible: visible.value
        // }
        // const res = await ArticleService.editArticle(params)
        // if (res.code === ApiStatus.success) {
        //   ElMessage.success('文章保存成功')
        //   router.push({ name: 'ArticleList' })
        // }
        console.log('编辑文章:', { cleanedContent });
    }
    catch (error) {
        console.error('保存文章失败:', error);
        ElMessage.error('保存文章失败');
    }
};
/**
 * 提交表单（新增或编辑）
 */
const submit = () => {
    if (pageMode.value === PageModeEnum.Edit) {
        editArticle();
    }
    else {
        addArticle();
    }
};
/**
 * 图片上传成功回调
 */
const onSuccess = (response) => {
    cover.value = response.data.url;
    ElMessage.success(`图片上传成功 ${EmojiText[200]}`);
};
/**
 * 图片上传失败回调
 */
const onError = () => {
    ElMessage.error(`图片上传失败 ${EmojiText[500]}`);
};
/**
 * 上传前的文件校验
 */
const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    const isLt2M = file.size / 1024 / 1024 < MAX_IMAGE_SIZE;
    if (!isImage) {
        ElMessage.error('只能上传图片文件');
        return false;
    }
    if (!isLt2M) {
        ElMessage.error(`图片大小不能超过 ${MAX_IMAGE_SIZE}MB`);
        return false;
    }
    return true;
};
const { scrollToTop } = useCommon();
onMounted(() => {
    scrollToTop();
    getArticleTypes();
    initPageMode();
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-250 mx-auto my-5") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((10)), }));
    const __VLS_2 = __VLS_1({ gutter: ((10)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ span: ((18)), }));
    const __VLS_8 = __VLS_7({ span: ((18)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ modelValue: ((__VLS_ctx.articleName)), placeholder: ("请输入文章标题（最多100个字符）"), maxlength: ("100"), }));
    const __VLS_14 = __VLS_13({ modelValue: ((__VLS_ctx.articleName)), placeholder: ("请输入文章标题（最多100个字符）"), maxlength: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ span: ((6)), }));
    const __VLS_20 = __VLS_19({ span: ((6)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.ElSelect, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ modelValue: ((__VLS_ctx.articleType)), placeholder: ("请选择文章类型"), filterable: (true), }));
    const __VLS_26 = __VLS_25({ modelValue: ((__VLS_ctx.articleType)), placeholder: ("请选择文章类型"), filterable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.articleTypes))) {
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ key: ((item.id)), label: ((item.name)), value: ((item.id)), }));
        const __VLS_32 = __VLS_31({ key: ((item.id)), label: ((item.name)), value: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    }
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ArtWangEditor;
    /** @type { [typeof __VLS_components.ArtWangEditor, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("mt-2.5") }, modelValue: ((__VLS_ctx.editorHtml)), }));
    const __VLS_38 = __VLS_37({ ...{ class: ("mt-2.5") }, modelValue: ((__VLS_ctx.editorHtml)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-5 mt-5 art-card-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("mb-5 text-xl font-medium") }, });
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.ElForm, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ label: ("封面"), }));
    const __VLS_50 = __VLS_49({ label: ("封面"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2.5") }, });
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElUpload;
    /** @type { [typeof __VLS_components.ElUpload, typeof __VLS_components.ElUpload, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ action: ((__VLS_ctx.uploadImageUrl)), headers: ((__VLS_ctx.uploadHeaders)), showFileList: ((false)), onSuccess: ((__VLS_ctx.onSuccess)), onError: ((__VLS_ctx.onError)), beforeUpload: ((__VLS_ctx.beforeUpload)), }));
    const __VLS_56 = __VLS_55({ action: ((__VLS_ctx.uploadImageUrl)), headers: ((__VLS_ctx.uploadHeaders)), showFileList: ((false)), onSuccess: ((__VLS_ctx.onSuccess)), onError: ((__VLS_ctx.onError)), beforeUpload: ((__VLS_ctx.beforeUpload)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    if (!__VLS_ctx.cover) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cc flex-col w-65 h-40 border border-dashed border-[#d9d9d9] rounded-md") }, });
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ class: ("!text-xl !text-g-600") }, }));
        const __VLS_62 = __VLS_61({ ...{ class: ("!text-xl !text-g-600") }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.Plus;
        /** @type { [typeof __VLS_components.Plus, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
        const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
        __VLS_nonNullable(__VLS_65.slots).default;
        var __VLS_65;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2 text-sm text-g-600") }, });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.cover)), ...{ class: ("block w-65 h-40 object-cover") }, });
    }
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2 text-xs text-g-700") }, });
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ label: ("可见"), }));
    const __VLS_74 = __VLS_73({ label: ("可见"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ modelValue: ((__VLS_ctx.visible)), }));
    const __VLS_80 = __VLS_79({ modelValue: ((__VLS_ctx.visible)), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-end") }, });
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("w-25") }, }));
    const __VLS_86 = __VLS_85({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("w-25") }, }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    let __VLS_90;
    const __VLS_91 = {
        onClick: (__VLS_ctx.submit)
    };
    let __VLS_87;
    let __VLS_88;
    (__VLS_ctx.pageMode === __VLS_ctx.PageModeEnum.Edit ? '保存' : '发布');
    __VLS_nonNullable(__VLS_89.slots).default;
    var __VLS_89;
    __VLS_styleScopedClasses['max-w-250'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['my-5'];
    __VLS_styleScopedClasses['mt-2.5'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['art-card-xs'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mt-2.5'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['w-65'];
    __VLS_styleScopedClasses['h-40'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['border-[#d9d9d9]'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['!text-xl'];
    __VLS_styleScopedClasses['!text-g-600'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['w-65'];
    __VLS_styleScopedClasses['h-40'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['w-25'];
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
            Plus: Plus,
            PageModeEnum: PageModeEnum,
            uploadImageUrl: uploadImageUrl,
            uploadHeaders: uploadHeaders,
            pageMode: pageMode,
            articleName: articleName,
            articleType: articleType,
            articleTypes: articleTypes,
            editorHtml: editorHtml,
            cover: cover,
            visible: visible,
            submit: submit,
            onSuccess: onSuccess,
            onError: onError,
            beforeUpload: beforeUpload,
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