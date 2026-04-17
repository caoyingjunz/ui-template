/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({ name: 'WidgetsWangEditor' });
const fullEditorRef = ref();
const simpleEditorRef = ref();
const fullActiveTab = ref('preview');
const simpleActiveTab = ref('preview');
const activeCollapse = ref(['basic']);
/**
 * 简化工具栏配置
 * 只包含基础的编辑功能
 */
const simpleToolbarKeys = [
    'bold',
    'italic',
    'underline',
    '|',
    'bulletedList',
    'numberedList',
    '|',
    'insertLink',
    'insertImage',
    '|',
    'undo',
    'redo'
];
// 完整编辑器内容
const fullEditorHtml = ref(`<h1>🎨 完整工具栏编辑器示例</h1>
<p>这个编辑器包含所有功能，您可以体验丰富的格式编辑功能。</p>

<h2>✨ 文本样式</h2>
<p><strong>这是加粗的文字</strong></p>
<p><em>这是斜体文字</em></p>
<p><u>这是下划线文字</u></p>
<p><span style="color: rgb(194, 79, 74);">这是彩色文字</span></p>

<h2>📝 列表和待办</h2>
<ul>
  <li>无序列表项 1</li>
  <li>无序列表项 2</li>
</ul>

<ol>
  <li>有序列表项 1</li>
  <li>有序列表项 2</li>
</ol>

<ul class="w-e-todo">
  <li class="w-e-todo-item"><input type="checkbox" checked="true" readonly="true" disabled="disabled"><span>已完成的任务</span></li>
  <li class="w-e-todo-item"><input type="checkbox" readonly="true" disabled="disabled"><span>待完成的任务</span></li>
</ul>

<h2>💬 引用和表格</h2>
<blockquote>
  这是一段引用文字，展示引用格式的效果。
</blockquote>

<table style="border-collapse: collapse; width: 100%;" border="1">
  <thead>
    <tr><th>功能</th><th>描述</th></tr>
  </thead>
  <tbody>
    <tr><td>完整工具栏</td><td>包含所有编辑功能</td></tr>
    <tr><td>自定义配置</td><td>支持灵活的工具栏配置</td></tr>
  </tbody>
</table>

<h2>💻 代码块</h2>
<pre><code class="language-javascript">// 完整编辑器支持代码高亮
function createEditor() {
  return new WangEditor({
    container: '#editor',
    toolbar: 'full' // 完整工具栏
  });
}</code></pre>

<p>🔗 <a href="https://www.wangeditor.com/" target="_blank">访问官网了解更多</a></p>`);
// 简化编辑器内容
const simpleEditorHtml = ref(`<h1>✨ 简化工具栏编辑器示例</h1>
<p>这个编辑器只包含基础的编辑功能，界面更加简洁。</p>

<h2>基础文本格式</h2>
<p><strong>加粗文字</strong></p>
<p><em>斜体文字</em></p>
<p><u>下划线文字</u></p>

<h2>列表功能</h2>
<ul>
  <li>无序列表项 1</li>
  <li>无序列表项 2</li>
</ul>

<ol>
  <li>有序列表项 1</li>
  <li>有序列表项 2</li>
</ol>

<h2>链接和图片</h2>
<p>支持插入 <a href="https://www.wangeditor.com/" target="_blank">链接</a> 和图片。</p>

<p>简化版编辑器专注于基础功能，适合简单的内容编辑需求。</p>`);
/**
 * 清空完整编辑器内容
 */
const clearFullEditor = () => {
    fullEditorRef.value?.clear();
    ElMessage.success('完整编辑器已清空');
};
/**
 * 获取完整编辑器内容
 */
const getFullEditorContent = () => {
    const content = fullEditorRef.value?.getHtml();
    console.log('完整编辑器内容:', content);
    ElMessage.success('完整编辑器内容已输出到控制台');
};
/**
 * 设置完整编辑器演示内容
 */
const setFullEditorDemo = () => {
    const demoContent = `<h2>🎉 完整编辑器演示内容</h2>
<p>这是通过方法设置的演示内容，展示完整编辑器的强大功能。</p>
<ul>
  <li>支持丰富的文本格式</li>
  <li>包含表格、代码块等高级功能</li>
  <li>提供完整的编辑体验</li>
</ul>
<table style="border-collapse: collapse; width: 100%;" border="1">
  <tr><th>特性</th><th>状态</th></tr>
  <tr><td>完整工具栏</td><td>✅ 已启用</td></tr>
  <tr><td>高级功能</td><td>✅ 已启用</td></tr>
</table>`;
    fullEditorRef.value?.setHtml(demoContent);
    ElMessage.success('已设置完整编辑器演示内容');
};
/**
 * 清空简化编辑器内容
 */
const clearSimpleEditor = () => {
    simpleEditorRef.value?.clear();
    ElMessage.success('简化编辑器已清空');
};
/**
 * 获取简化编辑器内容
 */
const getSimpleEditorContent = () => {
    const content = simpleEditorRef.value?.getHtml();
    console.log('简化编辑器内容:', content);
    ElMessage.success('简化编辑器内容已输出到控制台');
};
/**
 * 设置简化编辑器演示内容
 */
const setSimpleEditorDemo = () => {
    const demoContent = `<h2>⚡ 简化编辑器演示内容</h2>
<p>这是通过方法设置的演示内容，展示简化编辑器的核心功能。</p>
<ul>
  <li><strong>基础格式</strong>：加粗、斜体、下划线</li>
  <li><em>列表支持</em>：有序和无序列表</li>
  <li><u>媒体插入</u>：链接和图片</li>
</ul>
<ol>
  <li>界面简洁清爽</li>
  <li>功能专注实用</li>
  <li>适合快速编辑</li>
</ol>
<p>🔗 <a href="https://example.com" target="_blank">这是一个链接示例</a></p>`;
    simpleEditorRef.value?.setHtml(demoContent);
    ElMessage.success('已设置简化编辑器演示内容');
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
    __VLS_styleScopedClasses['preview-card'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['usage-card'];
    __VLS_styleScopedClasses['usage-card'];
    __VLS_styleScopedClasses['toolbar-explanation'];
    __VLS_styleScopedClasses['toolbar-explanation'];
    __VLS_styleScopedClasses['toolbar-explanation'];
    __VLS_styleScopedClasses['toolbar-explanation'];
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['header-buttons'];
    __VLS_styleScopedClasses['preview-card'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("page-content mb-5") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("editor-card") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("editor-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-buttons") }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        let __VLS_12;
        const __VLS_13 = {
            onClick: (__VLS_ctx.clearFullEditor)
        };
        let __VLS_9;
        let __VLS_10;
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
        const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_16 = __VLS_15({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        let __VLS_20;
        const __VLS_21 = {
            onClick: (__VLS_ctx.getFullEditorContent)
        };
        let __VLS_17;
        let __VLS_18;
        __VLS_nonNullable(__VLS_19.slots).default;
        var __VLS_19;
        const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_24 = __VLS_23({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        let __VLS_28;
        const __VLS_29 = {
            onClick: (__VLS_ctx.setFullEditorDemo)
        };
        let __VLS_25;
        let __VLS_26;
        __VLS_nonNullable(__VLS_27.slots).default;
        var __VLS_27;
    }
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ArtWangEditor;
    /** @type { [typeof __VLS_components.ArtWangEditor, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ref: ("fullEditorRef"), modelValue: ((__VLS_ctx.fullEditorHtml)), height: ("400px"), placeholder: ("请输入内容，体验完整的编辑功能..."), excludeKeys: (([])), }));
    const __VLS_32 = __VLS_31({ ref: ("fullEditorRef"), modelValue: ((__VLS_ctx.fullEditorHtml)), height: ("400px"), placeholder: ("请输入内容，体验完整的编辑功能..."), excludeKeys: (([])), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    // @ts-ignore navigation for `const fullEditorRef = ref()`
    __VLS_ctx.fullEditorRef;
    var __VLS_36 = {};
    var __VLS_35;
    var __VLS_5;
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{ class: ("editor-card") }, }));
    const __VLS_39 = __VLS_38({ ...{ class: ("editor-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_42.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-buttons") }, });
        const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_45 = __VLS_44({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
        let __VLS_49;
        const __VLS_50 = {
            onClick: (__VLS_ctx.clearSimpleEditor)
        };
        let __VLS_46;
        let __VLS_47;
        __VLS_nonNullable(__VLS_48.slots).default;
        var __VLS_48;
        const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_53 = __VLS_52({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
        let __VLS_57;
        const __VLS_58 = {
            onClick: (__VLS_ctx.getSimpleEditorContent)
        };
        let __VLS_54;
        let __VLS_55;
        __VLS_nonNullable(__VLS_56.slots).default;
        var __VLS_56;
        const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{ 'onClick': {} }, size: ("small"), }));
        const __VLS_61 = __VLS_60({ ...{ 'onClick': {} }, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
        let __VLS_65;
        const __VLS_66 = {
            onClick: (__VLS_ctx.setSimpleEditorDemo)
        };
        let __VLS_62;
        let __VLS_63;
        __VLS_nonNullable(__VLS_64.slots).default;
        var __VLS_64;
    }
    const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.ArtWangEditor;
    /** @type { [typeof __VLS_components.ArtWangEditor, ] } */
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ref: ("simpleEditorRef"), modelValue: ((__VLS_ctx.simpleEditorHtml)), height: ("400px"), placeholder: ("请输入内容，体验简化的编辑功能..."), toolbarKeys: ((__VLS_ctx.simpleToolbarKeys)), }));
    const __VLS_69 = __VLS_68({ ref: ("simpleEditorRef"), modelValue: ((__VLS_ctx.simpleEditorHtml)), height: ("400px"), placeholder: ("请输入内容，体验简化的编辑功能..."), toolbarKeys: ((__VLS_ctx.simpleToolbarKeys)), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    // @ts-ignore navigation for `const simpleEditorRef = ref()`
    __VLS_ctx.simpleEditorRef;
    var __VLS_73 = {};
    var __VLS_72;
    var __VLS_42;
    const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{ class: ("preview-card") }, }));
    const __VLS_76 = __VLS_75({ ...{ class: ("preview-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_79.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ gutter: ((20)), }));
    const __VLS_82 = __VLS_81({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ span: ((12)), }));
    const __VLS_88 = __VLS_87({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.ElTabs;
    /** @type { [typeof __VLS_components.ElTabs, typeof __VLS_components.ElTabs, ] } */
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ modelValue: ((__VLS_ctx.fullActiveTab)), }));
    const __VLS_94 = __VLS_93({ modelValue: ((__VLS_ctx.fullActiveTab)), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    const __VLS_98 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ label: ("渲染效果"), name: ("preview"), }));
    const __VLS_100 = __VLS_99({ label: ("渲染效果"), name: ("preview"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content-preview") }, });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.fullEditorHtml) }, null, null);
    __VLS_nonNullable(__VLS_103.slots).default;
    var __VLS_103;
    const __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ label: ("HTML源码"), name: ("html"), }));
    const __VLS_106 = __VLS_105({ label: ("HTML源码"), name: ("html"), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    const __VLS_110 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ modelValue: ((__VLS_ctx.fullEditorHtml)), type: ("textarea"), rows: ((8)), placeholder: ("HTML源码"), readonly: (true), }));
    const __VLS_112 = __VLS_111({ modelValue: ((__VLS_ctx.fullEditorHtml)), type: ("textarea"), rows: ((8)), placeholder: ("HTML源码"), readonly: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    __VLS_nonNullable(__VLS_109.slots).default;
    var __VLS_109;
    __VLS_nonNullable(__VLS_97.slots).default;
    var __VLS_97;
    __VLS_nonNullable(__VLS_91.slots).default;
    var __VLS_91;
    const __VLS_116 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ span: ((12)), }));
    const __VLS_118 = __VLS_117({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    const __VLS_122 = __VLS_resolvedLocalAndGlobalComponents.ElTabs;
    /** @type { [typeof __VLS_components.ElTabs, typeof __VLS_components.ElTabs, ] } */
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ modelValue: ((__VLS_ctx.simpleActiveTab)), }));
    const __VLS_124 = __VLS_123({ modelValue: ((__VLS_ctx.simpleActiveTab)), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    const __VLS_128 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ label: ("渲染效果"), name: ("preview"), }));
    const __VLS_130 = __VLS_129({ label: ("渲染效果"), name: ("preview"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content-preview") }, });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.simpleEditorHtml) }, null, null);
    __VLS_nonNullable(__VLS_133.slots).default;
    var __VLS_133;
    const __VLS_134 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.ElTabPane, ] } */
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ label: ("HTML源码"), name: ("html"), }));
    const __VLS_136 = __VLS_135({ label: ("HTML源码"), name: ("html"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    const __VLS_140 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ modelValue: ((__VLS_ctx.simpleEditorHtml)), type: ("textarea"), rows: ((8)), placeholder: ("HTML源码"), readonly: (true), }));
    const __VLS_142 = __VLS_141({ modelValue: ((__VLS_ctx.simpleEditorHtml)), type: ("textarea"), rows: ((8)), placeholder: ("HTML源码"), readonly: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
    __VLS_nonNullable(__VLS_139.slots).default;
    var __VLS_139;
    __VLS_nonNullable(__VLS_127.slots).default;
    var __VLS_127;
    __VLS_nonNullable(__VLS_121.slots).default;
    var __VLS_121;
    __VLS_nonNullable(__VLS_85.slots).default;
    var __VLS_85;
    var __VLS_79;
    const __VLS_146 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.ElCard, ] } */
    // @ts-ignore
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ ...{ class: ("usage-card") }, }));
    const __VLS_148 = __VLS_147({ ...{ class: ("usage-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_151.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    const __VLS_152 = __VLS_resolvedLocalAndGlobalComponents.ElCollapse;
    /** @type { [typeof __VLS_components.ElCollapse, typeof __VLS_components.ElCollapse, ] } */
    // @ts-ignore
    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ modelValue: ((__VLS_ctx.activeCollapse)), }));
    const __VLS_154 = __VLS_153({ modelValue: ((__VLS_ctx.activeCollapse)), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    const __VLS_158 = __VLS_resolvedLocalAndGlobalComponents.ElCollapseItem;
    /** @type { [typeof __VLS_components.ElCollapseItem, typeof __VLS_components.ElCollapseItem, ] } */
    // @ts-ignore
    const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ title: ("基础用法"), name: ("basic"), }));
    const __VLS_160 = __VLS_159({ title: ("基础用法"), name: ("basic"), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("language-vue") }, });
    __VLS_nonNullable(__VLS_163.slots).default;
    var __VLS_163;
    const __VLS_164 = __VLS_resolvedLocalAndGlobalComponents.ElCollapseItem;
    /** @type { [typeof __VLS_components.ElCollapseItem, typeof __VLS_components.ElCollapseItem, ] } */
    // @ts-ignore
    const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({ title: ("完整工具栏配置"), name: ("full"), }));
    const __VLS_166 = __VLS_165({ title: ("完整工具栏配置"), name: ("full"), }, ...__VLS_functionalComponentArgsRest(__VLS_165));
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("language-vue") }, });
    __VLS_nonNullable(__VLS_169.slots).default;
    var __VLS_169;
    const __VLS_170 = __VLS_resolvedLocalAndGlobalComponents.ElCollapseItem;
    /** @type { [typeof __VLS_components.ElCollapseItem, typeof __VLS_components.ElCollapseItem, ] } */
    // @ts-ignore
    const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ title: ("简化工具栏配置"), name: ("simple"), }));
    const __VLS_172 = __VLS_171({ title: ("简化工具栏配置"), name: ("simple"), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("language-vue") }, });
    __VLS_nonNullable(__VLS_175.slots).default;
    var __VLS_175;
    const __VLS_176 = __VLS_resolvedLocalAndGlobalComponents.ElCollapseItem;
    /** @type { [typeof __VLS_components.ElCollapseItem, typeof __VLS_components.ElCollapseItem, ] } */
    // @ts-ignore
    const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ title: ("自定义配置"), name: ("config"), }));
    const __VLS_178 = __VLS_177({ title: ("自定义配置"), name: ("config"), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("language-vue") }, });
    __VLS_nonNullable(__VLS_181.slots).default;
    var __VLS_181;
    const __VLS_182 = __VLS_resolvedLocalAndGlobalComponents.ElCollapseItem;
    /** @type { [typeof __VLS_components.ElCollapseItem, typeof __VLS_components.ElCollapseItem, ] } */
    // @ts-ignore
    const __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({ title: ("组件方法调用"), name: ("methods"), }));
    const __VLS_184 = __VLS_183({ title: ("组件方法调用"), name: ("methods"), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({ ...{ class: ("language-vue") }, });
    __VLS_nonNullable(__VLS_187.slots).default;
    var __VLS_187;
    const __VLS_188 = __VLS_resolvedLocalAndGlobalComponents.ElCollapseItem;
    /** @type { [typeof __VLS_components.ElCollapseItem, typeof __VLS_components.ElCollapseItem, ] } */
    // @ts-ignore
    const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({ title: ("工具栏配置说明"), name: ("toolbar-config"), }));
    const __VLS_190 = __VLS_189({ title: ("工具栏配置说明"), name: ("toolbar-config"), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("toolbar-explanation") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    const __VLS_194 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.ElRow, ] } */
    // @ts-ignore
    const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({ gutter: ((16)), }));
    const __VLS_196 = __VLS_195({ gutter: ((16)), }, ...__VLS_functionalComponentArgsRest(__VLS_195));
    const __VLS_200 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({ span: ((12)), }));
    const __VLS_202 = __VLS_201({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_nonNullable(__VLS_205.slots).default;
    var __VLS_205;
    const __VLS_206 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.ElCol, ] } */
    // @ts-ignore
    const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({ span: ((12)), }));
    const __VLS_208 = __VLS_207({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("note") }, });
    __VLS_nonNullable(__VLS_211.slots).default;
    var __VLS_211;
    __VLS_nonNullable(__VLS_199.slots).default;
    var __VLS_199;
    __VLS_nonNullable(__VLS_193.slots).default;
    var __VLS_193;
    __VLS_nonNullable(__VLS_157.slots).default;
    var __VLS_157;
    var __VLS_151;
    __VLS_styleScopedClasses['page-content'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['editor-card'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['header-buttons'];
    __VLS_styleScopedClasses['editor-card'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['header-buttons'];
    __VLS_styleScopedClasses['preview-card'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['content-preview'];
    __VLS_styleScopedClasses['usage-card'];
    __VLS_styleScopedClasses['language-vue'];
    __VLS_styleScopedClasses['language-vue'];
    __VLS_styleScopedClasses['language-vue'];
    __VLS_styleScopedClasses['language-vue'];
    __VLS_styleScopedClasses['language-vue'];
    __VLS_styleScopedClasses['toolbar-explanation'];
    __VLS_styleScopedClasses['note'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "fullEditorRef": __VLS_36,
        "simpleEditorRef": __VLS_73,
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
            fullEditorRef: fullEditorRef,
            simpleEditorRef: simpleEditorRef,
            fullActiveTab: fullActiveTab,
            simpleActiveTab: simpleActiveTab,
            activeCollapse: activeCollapse,
            simpleToolbarKeys: simpleToolbarKeys,
            fullEditorHtml: fullEditorHtml,
            simpleEditorHtml: simpleEditorHtml,
            clearFullEditor: clearFullEditor,
            getFullEditorContent: getFullEditorContent,
            setFullEditorDemo: setFullEditorDemo,
            clearSimpleEditor: clearSimpleEditor,
            getSimpleEditorContent: getSimpleEditorContent,
            setSimpleEditorDemo: setSimpleEditorDemo,
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