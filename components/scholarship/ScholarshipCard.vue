<script setup lang="ts">
import { Check, User, Heart } from "lucide-vue-next";
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
  institution: string;
  location: string;
  logo: string;
  rating: number;
  description: string;
  applicationDeadline: string;
}>();
</script>

<template>
  <div
    class="bg-white px-6 py-4 rounded-lg shadow-md flex flex-col w-full mb-6"
  >
    <div class="flex justify-between items-start">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-2">
          <span
            class="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
          >
            <Check /> {{ rating }}
          </span>
          <span
            class="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold"
          >
            {{ institution }}
          </span>
        </div>
        <h3 class="text-xl font-semibold">{{ title }}</h3>
        <div class="flex items-center text-gray-600 text-sm mb-2">
          <User class="mr-1" /> {{ location }}
        </div>
        <div class="text-gray-500 text-sm mb-4">
          <strong>Application Deadline:</strong> {{ applicationDeadline }}
        </div>
      </div>
      <div
        class="flex-shrink-0 border-2 rounded-lg ml-4 w-24 h-24 relative overflow-hidden"
      >
        <img
          :src="logo"
          :alt="institution"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div class="text-gray-700 text-sm mb-4">
      {{ description }}
    </div>
    <div class="md:hidden flex justify-between items-center">
      <Heart class="text-gray-600 w-6 h-6" />
      <button
        class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 flex items-center"
      >
        <span class="mr-2 text-sm">Apply Now</span>
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
