<script setup>
import { defineProps } from "vue";
import { MapPin, Calendar, Briefcase } from "lucide-vue-next";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  postedOn: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="rounded-lg flex flex-col">
    <div class="relative h-48 bg-blue-600 rounded-md"></div>
    <div class="bg-white p-4 rounded-lg shadow-sm flex flex-col">
      <div class="flex gap-2">
        <div
          class="flex-shrink-0 items-start border-2 rounded-lg w-24 h-24 relative overflow-hidden"
        >
          <img :src="image" :alt="title" class="object-cover w-full h-full" />
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-2">{{ title }}</h3>
          <p class="text-gray-600 mb-2 text-sm">{{ company }}</p>
        </div>
      </div>
      <div class="mt-4">
        <div class="flex items-center text-gray-600 text-sm mb-2">
          <MapPin class="mr-1" /> {{ location }}
        </div>
        <div class="flex items-center text-gray-600 text-sm mb-4">
          <Calendar class="mr-1" /> Posted On: {{ postedOn }}
        </div>
        <button
          class="bg-white text-gray-800 py-2 px-4 text-sm rounded-full shadow-sm border border-gray-300 hover:bg-gray-100 transition"
        >
          {{ jobType }}
        </button>
      </div>
      <hr class="my-3" />
      <div class="flex justify-between items-center">
        <Briefcase class="text-gray-600" />
        <button
          class="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center"
        >
          <span class="mr-2">Apply Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v12m9-9H3m12 0l9-9M9 15L3 9l9-9"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
