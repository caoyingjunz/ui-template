/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { Picture, Paperclip, ArrowDown } from '@element-plus/icons-vue';
import { mittBus } from '@/utils/sys';
import meAvatar from '@/assets/images/avatar/avatar5.webp';
import aiAvatar from '@/assets/images/avatar/avatar10.webp';
import avatar2 from '@/assets/images/avatar/avatar2.webp';
import avatar3 from '@/assets/images/avatar/avatar3.webp';
import avatar4 from '@/assets/images/avatar/avatar4.webp';
import avatar5 from '@/assets/images/avatar/avatar5.webp';
import avatar6 from '@/assets/images/avatar/avatar6.webp';
import avatar7 from '@/assets/images/avatar/avatar7.webp';
import avatar8 from '@/assets/images/avatar/avatar8.webp';
import avatar9 from '@/assets/images/avatar/avatar9.webp';
import avatar10 from '@/assets/images/avatar/avatar10.webp';
import { useAutoLayoutHeight } from '@/hooks/core/useLayoutHeight';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'TemplateChat' });
const { containerMinHeight } = useAutoLayoutHeight();
const searchQuery = ref('');
const isDrawerVisible = ref(false);
const isOnline = ref(true);
const selectedPerson = ref(null);
const messageText = ref('');
const messageId = ref(10);
const userAvatar = ref(meAvatar);
const messageContainer = ref(null);
/**
 * 联系人列表数据
 */
const personList = ref([
    {
        id: 1,
        name: '梅洛迪·梅西',
        email: 'melody@altbox.com',
        avatar: meAvatar,
        online: true,
        lastTime: '20小时前',
        unread: 0
    },
    {
        id: 2,
        name: '马克·史密斯',
        email: 'max@kt.com',
        avatar: avatar2,
        online: true,
        lastTime: '2周前',
        unread: 6
    },
    {
        id: 3,
        name: '肖恩·宾',
        email: 'sean@dellito.com',
        avatar: avatar3,
        online: false,
        lastTime: '5小时前',
        unread: 5
    },
    {
        id: 4,
        name: '爱丽丝·约翰逊',
        email: 'alice@domain.com',
        avatar: avatar4,
        online: true,
        lastTime: '1小时前',
        unread: 2
    },
    {
        id: 5,
        name: '鲍勃·布朗',
        email: 'bob@domain.com',
        avatar: avatar5,
        online: false,
        lastTime: '3天前',
        unread: 1
    },
    {
        id: 6,
        name: '查理·戴维斯',
        email: 'charlie@domain.com',
        avatar: avatar6,
        online: true,
        lastTime: '10分钟前',
        unread: 0
    },
    {
        id: 7,
        name: '戴安娜·普林斯',
        email: 'diana@domain.com',
        avatar: avatar7,
        online: true,
        lastTime: '15分钟前',
        unread: 3
    },
    {
        id: 8,
        name: '伊桑·亨特',
        email: 'ethan@domain.com',
        avatar: avatar8,
        online: true,
        lastTime: '5分钟前',
        unread: 0
    },
    {
        id: 9,
        name: '杰西卡·琼斯',
        email: 'jessica@domain.com',
        avatar: avatar9,
        online: false,
        lastTime: '1天前',
        unread: 4
    },
    {
        id: 10,
        name: '彼得·帕克',
        email: 'peter@domain.com',
        avatar: avatar10,
        online: true,
        lastTime: '2小时前',
        unread: 1
    },
    {
        id: 11,
        name: '克拉克·肯特',
        email: 'clark@domain.com',
        avatar: avatar3,
        online: true,
        lastTime: '30分钟前',
        unread: 2
    },
    {
        id: 12,
        name: '布鲁斯·韦恩',
        email: 'bruce@domain.com',
        avatar: avatar5,
        online: false,
        lastTime: '3天前',
        unread: 0
    },
    {
        id: 13,
        name: '韦德·威尔逊',
        email: 'wade@domain.com',
        avatar: avatar6,
        online: true,
        lastTime: '10分钟前',
        unread: 5
    }
]);
/**
 * 选择联系人
 * @param person 联系人对象
 */
const selectPerson = (person) => {
    selectedPerson.value = person;
};
/**
 * 消息列表数据
 */
const messages = ref([
    {
        id: 1,
        sender: 'Art Bot',
        content: '你好！我是你的AI助手，有什么我可以帮你的吗？',
        time: '10:00',
        isMe: false,
        avatar: aiAvatar
    },
    {
        id: 2,
        sender: 'Ricky',
        content: '我想了解一下系统的使用方法。',
        time: '10:01',
        isMe: true,
        avatar: meAvatar
    },
    {
        id: 3,
        sender: 'Art Bot',
        content: '好的，我来为您介绍系统的主要功能。首先，您可以通过左侧菜单访问不同的功能模块...',
        time: '10:02',
        isMe: false,
        avatar: aiAvatar
    },
    {
        id: 4,
        sender: 'Ricky',
        content: '听起来很不错，能具体讲讲数据分析部分吗？',
        time: '10:05',
        isMe: true,
        avatar: meAvatar
    },
    {
        id: 5,
        sender: 'Art Bot',
        content: '当然可以。数据分析模块可以帮助您实时监控关键指标，并生成详细的报表...',
        time: '10:06',
        isMe: false,
        avatar: aiAvatar
    },
    {
        id: 6,
        sender: 'Ricky',
        content: '太好了，那我如何开始使用呢？',
        time: '10:08',
        isMe: true,
        avatar: meAvatar
    },
    {
        id: 7,
        sender: 'Art Bot',
        content: '您可以先创建一个项目，然后在项目中添加相关的数据源，系统会自动进行分析。',
        time: '10:09',
        isMe: false,
        avatar: aiAvatar
    },
    {
        id: 8,
        sender: 'Ricky',
        content: '明白了，谢谢你的帮助！',
        time: '10:10',
        isMe: true,
        avatar: meAvatar
    },
    {
        id: 9,
        sender: 'Art Bot',
        content: '不客气，有任何问题随时联系我。',
        time: '10:11',
        isMe: false,
        avatar: aiAvatar
    }
]);
/**
 * 发送消息
 * 添加新消息到消息列表并滚动到底部
 */
const sendMessage = () => {
    const text = messageText.value.trim();
    if (!text)
        return;
    messages.value.push({
        id: messageId.value++,
        sender: 'Ricky',
        content: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true,
        avatar: userAvatar.value
    });
    messageText.value = '';
    scrollToBottom();
};
/**
 * 滚动到消息列表底部
 */
const scrollToBottom = () => {
    setTimeout(() => {
        if (messageContainer.value) {
            messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
        }
    }, 100);
};
/**
 * 打开聊天窗口
 */
const openChat = () => {
    isDrawerVisible.value = true;
};
onMounted(() => {
    scrollToBottom();
    mittBus.on('openChat', openChat);
    selectedPerson.value = personList.value[0];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content flex !p-0 max-md:flex-col") }, ...{ style: (({ height: __VLS_ctx.containerMinHeight })) }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ span: ((12)), }));
    const __VLS_8 = __VLS_7({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("grid-content ep-bg-purple") }, });
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ span: ((12)), }));
    const __VLS_14 = __VLS_13({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("grid-content ep-bg-purple-light") }, });
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("box-border w-90 h-full p-5 border-r border-g-300 max-md:w-full max-md:h-42 max-md:border-r-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pb-5 max-md:!hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c gap-3") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
    /** @type { [typeof __VLS_components.ElAvatar, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ size: ((50)), src: ((__VLS_ctx.selectedPerson?.avatar)), }));
    const __VLS_20 = __VLS_19({ size: ((50)), src: ((__VLS_ctx.selectedPerson?.avatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-base font-medium") }, });
    (__VLS_ctx.selectedPerson?.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-1 text-xs text-g-500") }, });
    (__VLS_ctx.selectedPerson?.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-3") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ modelValue: ((__VLS_ctx.searchQuery)), placeholder: ("搜索联系人"), prefixIcon: ("Search"), clearable: (true), }));
    const __VLS_26 = __VLS_25({ modelValue: ((__VLS_ctx.searchQuery)), placeholder: ("搜索联系人"), prefixIcon: ("Search"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElDropdown;
    /** @type { [typeof __VLS_components.ElDropdown, typeof __VLS_components.ElDropdown, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ trigger: ("click"), placement: ("bottom-start"), }));
    const __VLS_32 = __VLS_31({ trigger: ("click"), placement: ("bottom-start"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("mt-5 c-p") }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("el-icon--right") }, }));
    const __VLS_38 = __VLS_37({ ...{ class: ("el-icon--right") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ArrowDown;
    /** @type { [typeof __VLS_components.ArrowDown, typeof __VLS_components.arrowDown, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { dropdown: __VLS_thisSlot } = __VLS_nonNullable(__VLS_35.slots);
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownMenu;
        /** @type { [typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.ElDropdownMenu, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
        const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
        const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
        __VLS_nonNullable(__VLS_59.slots).default;
        var __VLS_59;
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
        const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
        __VLS_nonNullable(__VLS_65.slots).default;
        var __VLS_65;
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.ElDropdownItem, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
        const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
        __VLS_nonNullable(__VLS_71.slots).default;
        var __VLS_71;
        __VLS_nonNullable(__VLS_53.slots).default;
        var __VLS_53;
    }
    var __VLS_35;
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.ElScrollbar, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
    const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.personList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectPerson(item);
                } }, key: ((item.id)), ...{ class: ("flex-c p-3 c-p rounded-lg tad-200 hover:bg-active-color/30 mb-1") }, ...{ class: (({ 'bg-active-color': __VLS_ctx.selectedPerson?.id === item.id })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative mr-3") }, });
        const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
        /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.ElAvatar, ] } */
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ size: ((40)), src: ((item.avatar)), }));
        const __VLS_80 = __VLS_79({ size: ((40)), src: ((item.avatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
        (item.name.charAt(0));
        __VLS_nonNullable(__VLS_83.slots).default;
        var __VLS_83;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute right-1 bottom-1 size-2 rounded-full") }, ...{ class: ((item.online ? 'bg-success/100' : 'bg-error/100')) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 min-w-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm font-medium") }, });
        (item.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs text-g-600") }, });
        (item.lastTime);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("overflow-hidden text-xs text-g-600 text-ellipsis whitespace-nowrap") }, });
        (item.email);
    }
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("box-border flex-1 h-full max-md:h-[calc(70%-30px)]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb pt-4 px-4 pb-0 mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c gap-1 mt-1.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-2 h-2 rounded-full") }, ...{ class: ((__VLS_ctx.isOnline ? 'bg-success/100' : 'bg-danger/100')) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs text-g-600") }, });
    (__VLS_ctx.isOnline ? '在线' : '离线');
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c gap-2") }, });
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ArtIconButton;
    /** @type { [typeof __VLS_components.ArtIconButton, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ icon: ("ri:phone-line"), circle: (true), ...{ class: ("size-11 text-g-600") }, }));
    const __VLS_86 = __VLS_85({ icon: ("ri:phone-line"), circle: (true), ...{ class: ("size-11 text-g-600") }, }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ArtIconButton;
    /** @type { [typeof __VLS_components.ArtIconButton, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ icon: ("ri:video-on-line"), circle: (true), ...{ class: ("size-11 text-g-600") }, }));
    const __VLS_92 = __VLS_91({ icon: ("ri:video-on-line"), circle: (true), ...{ class: ("size-11 text-g-600") }, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ArtIconButton;
    /** @type { [typeof __VLS_components.ArtIconButton, ] } */
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ icon: ("ri:more-2-fill"), circle: (true), ...{ class: ("size-11 text-g-600") }, }));
    const __VLS_98 = __VLS_97({ icon: ("ri:more-2-fill"), circle: (true), ...{ class: ("size-11 text-g-600") }, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col h-[calc(100%-85px)]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 py-7.5 px-4 overflow-y-auto border-t-d [&::-webkit-scrollbar]:!w-1") }, ref: ("messageContainer"), });
    // @ts-ignore navigation for `const messageContainer = ref()`
    __VLS_ctx.messageContainer;
    for (const [message] of __VLS_getVForSourceType((__VLS_ctx.messages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (([
                    'flex gap-2 items-start w-full mb-7.5',
                    message.isMe ? 'flex-row-reverse' : 'flex-row justify-start'
                ])) }, });
        const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
        /** @type { [typeof __VLS_components.ElAvatar, ] } */
        // @ts-ignore
        const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ size: ((32)), src: ((message.avatar)), ...{ class: ("flex-shrink-0") }, }));
        const __VLS_104 = __VLS_103({ size: ((32)), src: ((message.avatar)), ...{ class: ("flex-shrink-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_103));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col max-w-[70%]") }, ...{ class: ((message.isMe ? 'items-end' : 'items-start')) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2 mb-1 text-xs") }, ...{ class: ((message.isMe ? 'flex-row-reverse' : 'flex-row')) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium") }, });
        (message.sender);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-g-600") }, });
        (message.time);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-2.5 px-3.5 text-sm leading-[1.4] rounded-md") }, ...{ class: ((message.isMe ? '!bg-theme/15' : '!bg-active-color')) }, });
        (message.content);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4") }, });
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.messageText)), type: ("textarea"), rows: ((3)), placeholder: ("输入消息"), resize: ("none"), }));
    const __VLS_110 = __VLS_109({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.messageText)), type: ("textarea"), rows: ((3)), placeholder: ("输入消息"), resize: ("none"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    let __VLS_114;
    const __VLS_115 = {
        onKeyup: (__VLS_ctx.sendMessage)
    };
    let __VLS_111;
    let __VLS_112;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { append: __VLS_thisSlot } = __VLS_nonNullable(__VLS_113.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2 py-2") }, });
        const __VLS_116 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ icon: ((__VLS_ctx.Paperclip)), circle: (true), plain: (true), }));
        const __VLS_118 = __VLS_117({ icon: ((__VLS_ctx.Paperclip)), circle: (true), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
        const __VLS_122 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ icon: ((__VLS_ctx.Picture)), circle: (true), plain: (true), }));
        const __VLS_124 = __VLS_123({ icon: ((__VLS_ctx.Picture)), circle: (true), plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
        const __VLS_128 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_130 = __VLS_129({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
        __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
        let __VLS_134;
        const __VLS_135 = {
            onClick: (__VLS_ctx.sendMessage)
        };
        let __VLS_131;
        let __VLS_132;
        __VLS_nonNullable(__VLS_133.slots).default;
        var __VLS_133;
    }
    var __VLS_113;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-cb mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-c") }, });
    const __VLS_136 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
    /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ icon: ("ri:image-line"), ...{ class: ("mr-5 c-p text-g-600 text-lg") }, }));
    const __VLS_138 = __VLS_137({ icon: ("ri:image-line"), ...{ class: ("mr-5 c-p text-g-600 text-lg") }, }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    const __VLS_142 = __VLS_resolvedLocalAndGlobalComponents.ArtSvgIcon;
    /** @type { [typeof __VLS_components.ArtSvgIcon, ] } */
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ icon: ("ri:emotion-happy-line"), ...{ class: ("mr-5 c-p text-g-600 text-lg") }, }));
    const __VLS_144 = __VLS_143({ icon: ("ri:emotion-happy-line"), ...{ class: ("mr-5 c-p text-g-600 text-lg") }, }, ...__VLS_functionalComponentArgsRest(__VLS_143));
    const __VLS_148 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("min-w-20") }, }));
    const __VLS_150 = __VLS_149({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("min-w-20") }, }, ...__VLS_functionalComponentArgsRest(__VLS_149));
    __VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, }, null, null);
    let __VLS_154;
    const __VLS_155 = {
        onClick: (__VLS_ctx.sendMessage)
    };
    let __VLS_151;
    let __VLS_152;
    __VLS_nonNullable(__VLS_153.slots).default;
    var __VLS_153;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['!p-0'];
    __VLS_styleScopedClasses['max-md:flex-col'];
    __VLS_styleScopedClasses['grid-content'];
    __VLS_styleScopedClasses['ep-bg-purple'];
    __VLS_styleScopedClasses['grid-content'];
    __VLS_styleScopedClasses['ep-bg-purple-light'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['w-90'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['border-r'];
    __VLS_styleScopedClasses['border-g-300'];
    __VLS_styleScopedClasses['max-md:w-full'];
    __VLS_styleScopedClasses['max-md:h-42'];
    __VLS_styleScopedClasses['max-md:border-r-0'];
    __VLS_styleScopedClasses['pb-5'];
    __VLS_styleScopedClasses['max-md:!hidden'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-500'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['c-p'];
    __VLS_styleScopedClasses['el-icon--right'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['c-p'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['tad-200'];
    __VLS_styleScopedClasses['hover:bg-active-color/30'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['bg-active-color'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['mr-3'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-1'];
    __VLS_styleScopedClasses['bottom-1'];
    __VLS_styleScopedClasses['size-2'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['min-w-0'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['text-ellipsis'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['max-md:h-[calc(70%-30px)]'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['pt-4'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['pb-0'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['gap-1'];
    __VLS_styleScopedClasses['mt-1.5'];
    __VLS_styleScopedClasses['w-2'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['size-11'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['size-11'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['size-11'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['h-[calc(100%-85px)]'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['py-7.5'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['border-t-d'];
    __VLS_styleScopedClasses['[&::-webkit-scrollbar]:!w-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['mb-7.5'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['max-w-[70%]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['py-2.5'];
    __VLS_styleScopedClasses['px-3.5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['leading-[1.4]'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['flex-cb'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['flex-c'];
    __VLS_styleScopedClasses['mr-5'];
    __VLS_styleScopedClasses['c-p'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['mr-5'];
    __VLS_styleScopedClasses['c-p'];
    __VLS_styleScopedClasses['text-g-600'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['min-w-20'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "messageContainer": __VLS_nativeElements['div'],
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
            Picture: Picture,
            Paperclip: Paperclip,
            ArrowDown: ArrowDown,
            containerMinHeight: containerMinHeight,
            searchQuery: searchQuery,
            isOnline: isOnline,
            selectedPerson: selectedPerson,
            messageText: messageText,
            messageContainer: messageContainer,
            personList: personList,
            selectPerson: selectPerson,
            messages: messages,
            sendMessage: sendMessage,
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