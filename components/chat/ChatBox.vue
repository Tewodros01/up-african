<script setup>
import { computed, ref } from "vue";

const isChatsExpanded = ref(false);
const activeTab = ref("focused");

const toggleChats = () => {
  isChatsExpanded.value = !isChatsExpanded.value;
};

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const chatListClass = computed(
  () =>
    `transition-all duration-500 ease-in-out overflow-auto ${
      isChatsExpanded.value ? "max-h-[400px]" : "max-h-0"
    }`
);
</script>

<template>
  <div
    class="fixed right-0 bottom-0 w-72 z-[20] h-auto bg-white shadow-md border rounded-t-lg rounded-tr-none"
  >
    <ChatHeader :onClick="toggleChats" :isChatsExpanded="isChatsExpanded" />

    <div v-if="isChatsExpanded">
      <ChatSearchInput />
      <ChatTabsHeader :activeTab="activeTab" @changeTab="setActiveTab" />
    </div>

    <div :class="chatListClass">
      <ChatChatsList v-if="activeTab === 'focused'" />
      <ChatEmptyChatsContent v-else />
    </div>
  </div>
</template>
