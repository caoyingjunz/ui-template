/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import AppConfig from '@/config';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const emit = defineEmits();
const replyAuthor = ref('');
const replyContent = ref('');
const toggleReply = (commentId) => {
    emit('toggle-reply', commentId);
};
const addReply = (commentId, author, content) => {
    emit('add-reply', commentId, author, content);
    replyAuthor.value = '';
    replyContent.value = '';
};
const handleSubmit = () => {
    if (!replyAuthor.value.trim() || !replyContent.value.trim()) {
        return;
    }
    emit('add-reply', props.comment.id, replyAuthor.value, replyContent.value);
    replyAuthor.value = '';
    replyContent.value = '';
};
const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
};
let lastColor = null;
const randomColor = () => {
    let newColor;
    do {
        const index = Math.floor(Math.random() * AppConfig.systemMainColor.length);
        newColor = AppConfig.systemMainColor[index];
    } while (newColor === lastColor);
    lastColor = newColor;
    return newColor;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("size-5 mr-2.5 text-xs font-medium text-white rounded-full flex-cc") }, ...{ style: (({ background: __VLS_ctx.randomColor() })) }, });
    (__VLS_ctx.comment.author.substring(0, 1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("block text-sm font-medium") }, });
    (__VLS_ctx.comment.author);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("block mt-2.5 text-sm text-g-700") }, });
    (__VLS_ctx.comment.content);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c mt-2.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs text-g-700") }, });
    (__VLS_ctx.formatDate(__VLS_ctx.comment.timestamp));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleReply(__VLS_ctx.comment.id);
            } }, ...{ class: ("ml-5 text-xs text-g-700 c-p select-none hover:text-theme") }, });
    if (__VLS_ctx.comment.replies.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("pl-2.5") }, });
        for (const [reply] of __VLS_getVForSourceType((__VLS_ctx.comment.replies))) {
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.CommentItem;
            /** @type { [typeof __VLS_components.CommentItem, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onToggleReply': {} }, ...{ 'onAddReply': {} }, key: ((reply.id)), comment: ((reply)), showReplyForm: ((__VLS_ctx.showReplyForm)), ...{ class: ("mt-5") }, }));
            const __VLS_2 = __VLS_1({ ...{ 'onToggleReply': {} }, ...{ 'onAddReply': {} }, key: ((reply.id)), comment: ((reply)), showReplyForm: ((__VLS_ctx.showReplyForm)), ...{ class: ("mt-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            let __VLS_6;
            const __VLS_7 = {
                onToggleReply: (__VLS_ctx.toggleReply)
            };
            const __VLS_8 = {
                onAddReply: (__VLS_ctx.addReply)
            };
            let __VLS_3;
            let __VLS_4;
            var __VLS_5;
        }
    }
    if (__VLS_ctx.showReplyForm === __VLS_ctx.comment.id) {
        const __VLS_9 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
        /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.ElForm, ] } */
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ ...{ 'onSubmit': {} }, ...{ class: ("mt-4") }, }));
        const __VLS_11 = __VLS_10({ ...{ 'onSubmit': {} }, ...{ class: ("mt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        let __VLS_15;
        const __VLS_16 = {
            onSubmit: (__VLS_ctx.handleSubmit)
        };
        let __VLS_12;
        let __VLS_13;
        const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ prop: ("author"), }));
        const __VLS_19 = __VLS_18({ prop: ("author"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, ] } */
        // @ts-ignore
        const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ modelValue: ((__VLS_ctx.replyAuthor)), placeholder: ("你的名称"), clearable: (true), }));
        const __VLS_25 = __VLS_24({ modelValue: ((__VLS_ctx.replyAuthor)), placeholder: ("你的名称"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
        __VLS_nonNullable(__VLS_22.slots).default;
        var __VLS_22;
        const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ prop: ("content"), }));
        const __VLS_31 = __VLS_30({ prop: ("content"), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
        const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, ] } */
        // @ts-ignore
        const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ modelValue: ((__VLS_ctx.replyContent)), placeholder: ("你的回复..."), type: ("textarea"), rows: ((3)), clearable: (true), }));
        const __VLS_37 = __VLS_36({ modelValue: ((__VLS_ctx.replyContent)), placeholder: ("你的回复..."), type: ("textarea"), rows: ((3)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
        __VLS_nonNullable(__VLS_34.slots).default;
        var __VLS_34;
        const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.ElFormItem, ] } */
        // @ts-ignore
        const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({}));
        const __VLS_43 = __VLS_42({}, ...__VLS_functionalComponentArgsRest(__VLS_42));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-end gap-2 w-full") }, });
        const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{ 'onClick': {} }, }));
        const __VLS_49 = __VLS_48({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
        let __VLS_53;
        const __VLS_54 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.showReplyForm === __VLS_ctx.comment.id)))
                    return;
                __VLS_ctx.toggleReply(__VLS_ctx.comment.id);
            }
        };
        let __VLS_50;
        let __VLS_51;
        __VLS_nonNullable(__VLS_52.slots).default;
        var __VLS_52;
        const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_57 = __VLS_56({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
        let __VLS_61;
        const __VLS_62 = {
            onClick: (__VLS_ctx.handleSubmit)
        };
        let __VLS_58;
        let __VLS_59;
        __VLS_nonNullable(__VLS_60.slots).default;
        var __VLS_60;
        __VLS_nonNullable(__VLS_46.slots).default;
        var __VLS_46;
        __VLS_nonNullable(__VLS_14.slots).default;
        var __VLS_14;
    }
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['size-5'];
    __VLS_styleScopedClasses['mr-2.5'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['flex-cc'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['mt-2.5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['mt-2.5'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['ml-5'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-700'];
    __VLS_styleScopedClasses['c-p'];
    __VLS_styleScopedClasses['select-none'];
    __VLS_styleScopedClasses['hover:text-theme'];
    __VLS_styleScopedClasses['pl-2.5'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['w-full'];
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
            replyAuthor: replyAuthor,
            replyContent: replyContent,
            toggleReply: toggleReply,
            addReply: addReply,
            handleSubmit: handleSubmit,
            formatDate: formatDate,
            randomColor: randomColor,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=CommentItem.vue.js.map