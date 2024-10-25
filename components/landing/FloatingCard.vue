<template>
  <div class="relative w-32 h-32 mx-auto">
    <!-- Placeholder background image -->
    <img
      src="https://via.placeholder.com/150"
      alt="Background Image"
      class="w-full h-full object-cover rounded-full"
    />
    <!-- Floating content -->
    <div
      class="absolute inset-0 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center p-2 rounded-full shadow-lg"
    >
      <div class="flex flex-col items-center space-y-1">
        <!-- Dynamic icon passed via props -->
        <div
          class="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-full"
        >
          <component :is="icon" class="w-5 h-5 text-blue-500" />
        </div>
        <!-- Title and description -->
        <div class="text-center">
          <p class="text-sm font-semibold">{{ title }}</p>
          <p class="text-xs text-gray-600">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Accept props for icon, title, and description
defineProps({
  icon: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "Description Here",
  },
});
</script>

<style scoped>
/* Scoped styles, if any customization is needed */
</style>
