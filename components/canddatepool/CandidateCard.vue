<script setup lang="ts">
import { Check, User, Heart } from "lucide-vue-next";
import { defineProps } from "vue";

const props = defineProps<{
  name: string;
  experience: string;
  skills: string[];
  location: string;
  profileImage: string;
  rating: number;
}>();
</script>

<template>
  <div
    class="bg-white px-6 py-3 rounded-lg shadow-sm flex flex-col w-full mb-4"
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
            class="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-semibold"
          >
            {{ experience }}
          </span>
        </div>
        <h3 class="text-lg font-semibold">{{ name }}</h3>
        <div class="flex items-center text-gray-600 text-sm mb-2">
          <User class="mr-1" /> {{ location }}
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in skills"
            :key="skill"
            class="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      <div
        class="flex-shrink-0 border-2 rounded-lg ml-4 w-24 h-24 relative overflow-hidden"
      >
        <img
          :src="profileImage"
          :alt="name"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div class="text-gray-700 text-sm mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet.
    </div>
    <div class="md:hidden flex justify-between items-center">
      <Heart class="text-gray-600" />
      <button
        class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 flex items-center"
      >
        <span class="mr-2 text-sm">Connect</span>
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
</template>
