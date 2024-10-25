<script setup>
const props = defineProps({
  icon: {
    type: Function, // Accept icon as a functional component
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  vacancies: {
    type: String,
    default: '0',
  },
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="[
      'flex flex-col items-start p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer',
      selected ? 'bg-blue-50' : 'bg-white',
    ]"
    style="width: 200px; height: 220px"
  >
    <!-- Icon Section -->
    <div
      class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
    >
      <component :is="icon" class="w-6 h-6 text-blue-600" />
    </div>

    <!-- Title and Vacancy Section -->
    <h3 class="text-base font-medium text-gray-900 mb-1">{{ title }}</h3>
    <p class="text-sm text-gray-500">{{ vacancies }} vacancy</p>
  </div>
</template>
