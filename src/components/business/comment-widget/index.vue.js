/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref } from 'vue';
import CommentItem from './widget/CommentItem.vue';
import { commentList } from '@/mock/temp/commentDetail';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const comments = commentList;
const newComment = ref({
    author: '',
    content: ''
});
const showReplyForm = ref(null);
const addComment = () => {
    if (!newComment.value.author?.trim() || !newComment.value.content?.trim()) {
        ElMessage.warning('请填写完整的评论信息');
        return;
    }
    comments.value.push({
        id: Date.now(),
        author: newComment.value.author.trim(),
        content: newComment.value.content.trim(),
        timestamp: new Date().toISOString(),
        replies: []
    });
    newComment.value.author = '';
    newComment.value.content = '';
    ElMessage.success('评论发布成功');
};
const addReply = (commentId, replyAuthor, replyContent) => {
    if (!replyAuthor?.trim() || !replyContent?.trim()) {
        ElMessage.warning('请填写完整的回复信息');
        return;
    }
    const comment = findComment(comments.value, commentId);
    if (comment) {
        comment.replies.push({
            id: Date.now(),
            author: replyAuthor.trim(),
            content: replyContent.trim(),
            timestamp: new Date().toISOString(),
            replies: []
        });
        showReplyForm.value = null;
        ElMessage.success('回复发布成功');
    }
};
const toggleReply = (commentId) => {
    showReplyForm.value = showReplyForm.value === commentId ? null : commentId;
};
const findComment = (comments, commentId) => {
    for (const comment of comments) {
        if (comment.id === commentId) {
            return comment;
        }
        const found = findComment(comment.replies, commentId);
        if (found) {
            return found;
        }
    }
    return undefined;
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.ElForm, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSubmit': {} }, ...{ class: ("w-full mx-auto mb-10") }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onSubmit': {} }, ...{ class: ("w-full mx-auto mb-10") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onSubmit: (__VLS_ctx.addComment)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ prop: ("author"), ...{ class: ("mt-5") }, }));
    const __VLS_10 = __VLS_9({ prop: ("author"), ...{ class: ("mt-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ modelValue: ((__VLS_ctx.newComment.author)), placeholder: ("你的名称"), ...{ class: ("block w-full") }, clearable: (true), }));
    const __VLS_16 = __VLS_15({ modelValue: ((__VLS_ctx.newComment.author)), placeholder: ("你的名称"), ...{ class: ("block w-full") }, clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_nonNullable(__VLS_13.slots).default;
    var __VLS_13;
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ prop: ("content"), }));
    const __VLS_22 = __VLS_21({ prop: ("content"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ modelValue: ((__VLS_ctx.newComment.content)), placeholder: ("简单说两句..."), type: ("textarea"), rows: ((5)), clearable: (true), }));
    const __VLS_28 = __VLS_27({ modelValue: ((__VLS_ctx.newComment.content)), placeholder: ("简单说两句..."), type: ("textarea"), rows: ((5)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25;
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-end w-full") }, });
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_40 = __VLS_39({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    let __VLS_44;
    const __VLS_45 = {
        onClick: (__VLS_ctx.addComment)
    };
    let __VLS_41;
    let __VLS_42;
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
    __VLS_nonNullable(__VLS_37.slots).default;
    var __VLS_37;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-5 text-lg font-medium") }, });
    (__VLS_ctx.comments.length);
    for (const [comment] of __VLS_getVForSourceType((__VLS_ctx.comments.slice().reverse()))) {
        // @ts-ignore
        [CommentItem,];
        // @ts-ignore
        const __VLS_46 = __VLS_asFunctionalComponent(CommentItem, new CommentItem({ ...{ 'onToggleReply': {} }, ...{ 'onAddReply': {} }, key: ((comment.id)), comment: ((comment)), showReplyForm: ((__VLS_ctx.showReplyForm)), ...{ class: ("pb-2.5 mb-5 border-b border-g-400") }, }));
        const __VLS_47 = __VLS_46({ ...{ 'onToggleReply': {} }, ...{ 'onAddReply': {} }, key: ((comment.id)), comment: ((comment)), showReplyForm: ((__VLS_ctx.showReplyForm)), ...{ class: ("pb-2.5 mb-5 border-b border-g-400") }, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
        let __VLS_51;
        const __VLS_52 = {
            onToggleReply: (__VLS_ctx.toggleReply)
        };
        const __VLS_53 = {
            onAddReply: (__VLS_ctx.addReply)
        };
        let __VLS_48;
        let __VLS_49;
        var __VLS_50;
    }
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mb-10'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['pb-5'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['pb-2.5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-g-400'];
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
            CommentItem: CommentItem,
            comments: comments,
            newComment: newComment,
            showReplyForm: showReplyForm,
            addComment: addComment,
            addReply: addReply,
            toggleReply: toggleReply,
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