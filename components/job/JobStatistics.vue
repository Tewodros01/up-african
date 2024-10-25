<script setup>
const props = defineProps({
  impressions: {
    type: Number,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white p-4 rounded-lg shadow-md mt-2">
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center text-gray-600">
        <EyeIcon class="w-5 h-5 text-gray-500 mr-2" />
        <span>Impressions: {{ impressions }}</span>
      </div>
      <div class="flex items-center text-gray-600">
        <CalendarIcon class="w-5 h-5 text-gray-500 mr-2" />
        <span>Application Deadline: {{ deadline }}</span>
      </div>
    </div>
  </div>
</template>
