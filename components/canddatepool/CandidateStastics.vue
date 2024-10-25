<script setup>
import { Upload, Facebook, History, Linkedin, Twitter } from "lucide-vue-next";

const badges = [
  {
    name: "Newbie",
    color: "text-green-600",
    time: "2 days",
    description: "Completed a 2-day streak!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Welcome Badge",
    color: "text-blue-600",
    time: "2 days",
    description: "Starting their journey!",
    image: "https://via.placeholder.com/50",
  },
];
</script>

<template>
  <div class="bg-white space-y-2 flex flex-col px-2 w-full">
    <div class="border-2 border-gray-200 rounded-lg border-dashed">
      <div class="space-y-4 p-4">
        <div class="flex justify-between items-center">
          <span class="font-semibold text-gray-700 text-[0.8rem]"
            >Total Points</span
          >
          <span class="font-semibold text-gray-700 text-[0.8rem]">0</span>
        </div>
        <div class="flex justify-between items-center text-[0.8rem]">
          <span class="font-semibold text-gray-700 text-[0.8rem]"
            >Total Badges</span
          >
          <span class="font-semibold text-gray-700 text-[0.8rem]">2</span>
        </div>
        <div class="space-y-4">
          <div
            v-for="badge in badges"
            :key="badge.name"
            class="border p-2 rounded-lg shadow-sm flex items-center gap-4"
          >
            <img
              :src="badge.image"
              :alt="badge.name"
              class="w-10 h-10 object-contain"
            />
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <span :class="`font-semibold ${badge.color} text-[0.8rem]`">{{
                  badge.name
                }}</span>
                <span class="text-sm text-gray-500 text-[0.8rem]">{{
                  badge.time
                }}</span>
              </div>
              <p class="text-gray-600 text-xs">{{ badge.description }}</p>
              <div class="flex space-x-2 mt-2 text-xs">
                <button
                  class="text-gray-500 hover:text-blue-500 transition-colors"
                >
                  <Twitter class="w-3 h-3" />
                </button>
                <button
                  class="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <Facebook class="w-3 h-3" />
                </button>
                <button
                  class="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Linkedin class="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-800 p-2 text-sm rounded-b-lg text-white text-center">
        How it works?
      </div>
    </div>
  </div>
</template>
