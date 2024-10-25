<script setup>
import { Upload, Facebook, History, Linkedin, Twitter } from "lucide-vue-next";

const badges = [
  {
    name: "Newbie",
    color: "text-green-600",
    time: "2 days",
    description: "You have successfully completed a 2 day streak!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Welcome Badge",
    color: "text-blue-600",
    time: "2 days",
    description: "Your journey to success starts here!",
    image: "https://via.placeholder.com/50",
  },
];
</script>

<template>
  <div class="bg-white space-y-2 flex flex-col md:px-2 mb-10 md:mb-6">
    <div class="border-2 rounded-lg border-dashed border-yellow-400 p-4">
      <div class="flex items-center space-x-2">
        <span class="text-purple-600">
          <Upload />
        </span>
        <span class="text-yellow-400 font-semibold text-[0.9rem]"
          >Upload resume</span
        >
      </div>
      <p class="text-gray-600 mt-2 text-xs">
        Supported file formats DOC, DOCX, PDF. File size limit 10 MB.
      </p>
    </div>

    <div class="border-2 border-gray-200 rounded-lg border-dashed">
      <div class="space-y-4 p-4">
        <div class="flex justify-between items-center">
          <span class="font-semibold text-gray-500 text-base"
            >Total Points</span
          >
          <span class="font-semibold text-gray-500 text-base">0</span>
        </div>
        <div class="flex justify-between items-center text-base">
          <span class="font-semibold text-gray-500 text-base"
            >Total Badges</span
          >
          <span class="font-semibold text-gray-500 text-base">2</span>
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
              class="w-14 h-14 object-contain"
            />
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <span :class="`font-semibold ${badge.color} text-[0.9rem]`">{{
                  badge.name
                }}</span>
                <span class="text-gray-500 text-xs">{{ badge.time }}</span>
              </div>
              <p class="text-gray-600 text-xs">{{ badge.description }}</p>
              <div class="flex space-x-2 mt-2">
                <button class="text-gray-500">
                  <Twitter class="w-4 h-4" />
                </button>
                <button class="text-gray-500">
                  <Facebook class="w-4 h-4" />
                </button>
                <button class="text-gray-500">
                  <Linkedin class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-800 p-2 rounded-b-lg text-white text-center text-sm">
        How it works?
      </div>
    </div>

    <div class="border border-gray-200 px-2 py-4 rounded-lg space-y-4">
      <div class="flex justify-between items-center">
        <span class="font-semibold text-yellow-500 text-sm">Unstop Coins</span>
        <button class="text-blue-600">
          <History />
        </button>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-yellow-400 font-semibold">170</span>
        <button
          class="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Redeem
        </button>
      </div>
    </div>
  </div>
</template>
