<script setup>
const props = defineProps({
  activeTab: String,
});
</script>

<template>
  <div class="w-full border-b font-semibold flex flex-row">
    <div
      :class="[
        'text-zinc-500 text-sm flex-1 text-center p-2',
        activeTab === 'focused' && 'border-b-green-700 border-b-2',
      ]"
      @click="() => $emit('changeTab', 'focused')"
    >
      Focused
    </div>
    <div
      :class="[
        'text-zinc-500 text-sm flex-1 text-center p-2',
        activeTab === 'other' && 'border-b-green-700 border-b-2',
      ]"
      @click="() => $emit('changeTab', 'other')"
    >
      Other
    </div>
  </div>
</template>
