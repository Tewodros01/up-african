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
    <div>
      <h2 class="font-semibold text-zinc-600 text-[0.91rem]">{{ title }}</h2>
      <p class="text-zinc-400 text-[0.91rem]">{{ description }}</p>
    </div>
  </div>
</template>
