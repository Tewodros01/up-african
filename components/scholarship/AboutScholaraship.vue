<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="bg-slate-100 mb-4 p-6 rounded-lg shadow-sm flex items-center gap-4"
  >
    <div class="flex-shrink-0">
      <img
        :src="imageSrc"
        :alt="title"
        class="w-16 h-16 rounded-full object-cover"
      />
    </div>
    <div class="flex-1">
      <h2 class="font-semibold text-zinc-600 text-lg">{{ title }}</h2>
      <p class="text-zinc-400 text-sm">{{ description }}</p>
    </div>
  </div>
</template>
