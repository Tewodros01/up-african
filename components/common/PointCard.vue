<script setup lang="ts">
interface TravelPointCardProps {
  title: string;
  subtitle: string;
  icon: any;
}

const props = defineProps<TravelPointCardProps>();
</script>

<template>
  <div
    class="floating-card flex items-center bg-gray-50 bg-opacity-90 p-4 rounded-lg shadow-lg"
  >
    <div
      class="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md"
    >
      <component :is="props.icon" class="w-6 h-6 text-blue-500" />
    </div>
    <div class="ml-3">
      <p class="text-sm font-bold text-gray-800">{{ props.title }}</p>
      <p class="text-xs text-gray-600">{{ props.subtitle }}</p>
    </div>
  </div>
</template>
