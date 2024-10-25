<script setup>
// Initialize Tiptap editor with starter kit and provided content
const editor = useEditor({
  extensions: [TiptapStarterKit],
  content: '<p>Describe the job here...</p>',
});

onBeforeUnmount(() => {
  editor?.destroy();
});
</script>

<template>
  <div class="editor">
    <div v-if="editor" class="menu">
      <button
        v-for="action in actions"
        :key="action.label"
        :class="{ 'is-active': editor.isActive(action.command) }"
        @click="editor.chain().focus()[action.handler]().run()"
        class="toolbar-button"
      >
        <span>{{ action.label }}</span>
      </button>
    </div>

    <!-- Editor Content -->
    <div class="input-field">
      <TiptapEditorContent :editor="editor" />
    </div>
  </div>
</template>

<script>
const actions = ref([
  { label: 'Bold', command: 'bold', handler: 'toggleBold' },
  { label: 'Italic', command: 'italic', handler: 'toggleItalic' },
  { label: 'Strike', command: 'strike', handler: 'toggleStrike' },
  {
    label: 'Ordered List',
    command: 'orderedList',
    handler: 'toggleOrderedList',
  },
  { label: 'Bullet List', command: 'bulletList', handler: 'toggleBulletList' },
  { label: 'Undo', handler: 'undo' },
  { label: 'Redo', handler: 'redo' },
]);
</script>

<style scoped>
.editor {
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.menu {
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  gap: 10px;
}

.toolbar-button {
  padding: 4px 8px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.toolbar-button:hover {
  background-color: #f3f4f6;
}

.toolbar-button.is-active {
  background-color: #e0e7ff;
}
</style>
