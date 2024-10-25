<script setup>
import { ref } from "vue";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Settings,
  Clock,
} from "lucide-vue-next";

const percentage = ref(75); // Example percentage for the timer
</script>

<template>
  <div
    class="flex items-center border-b justify-between px-4 py-2 bg-white shadow-md rounded-sm font-sans w-full"
  >
    <!-- Logo Section -->
    <div class="flex items-center">
      <img
        src="/assets/logo/go_ahead_logo.png"
        alt="Go Ahead"
        width="120"
        height="80"
      />
    </div>

    <!-- Pagination Section -->
    <div class="flex items-center space-x-2">
      <button class="p-2 rounded-full bg-gray-200 text-gray-600">
        <ChevronLeft />
      </button>
      <button class="px-3 py-1 bg-green-500 text-white rounded-sm">1</button>
      <button class="px-3 py-1 bg-gray-800 text-white rounded-sm">2</button>
      <button
        class="hidden sm:inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-sm"
      >
        3
      </button>
      <button
        class="hidden sm:inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-sm"
      >
        4
      </button>
      <button
        class="hidden md:inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-sm"
      >
        5
      </button>
      <button
        class="hidden md:inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-sm"
      >
        6
      </button>
      <button
        class="hidden lg:inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-sm"
      >
        7
      </button>
      <button
        class="hidden lg:inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-sm"
      >
        8
      </button>
      <button class="p-2 rounded-full bg-gray-200 text-gray-600">
        <ChevronRight />
      </button>
      <button
        class="flex items-center justify-center w-10 h-10 px-3 py-1 text-gray-600 border border-gray-300 rounded-sm hover:bg-gray-100"
      >
        <Menu />
      </button>
    </div>

    <!-- Right Section -->
    <div class="flex items-center space-x-4">
      <button
        class="flex items-center justify-center w-24 h-10 px-3 py-1 text-gray-600 border border-gray-300 rounded-sm hover:bg-gray-100"
      >
        Guidelines
      </button>
      <button
        class="flex items-center justify-center w-10 h-10 px-3 py-1 text-gray-600 border border-gray-300 rounded-sm hover:bg-gray-100"
      >
        <Settings class="" />
      </button>
      <div class="flex items-center space-x-1 text-gray-600">
        <div class="relative w-8 h-8">
          <svg class="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              class="text-gray-300"
              stroke-width="2"
              stroke="currentColor"
              fill="transparent"
              r="15"
              cx="16"
              cy="16"
            />
            <circle
              class="text-blue-500"
              stroke-width="2"
              :stroke-dasharray="94"
              :stroke-dashoffset="94 - (94 * percentage) / 100"
              stroke-linecap="round"
              stroke="currentColor"
              fill="transparent"
              r="15"
              cx="16"
              cy="16"
            />
          </svg>
          <Clock class="absolute inset-0 w-4 h-4 m-auto text-blue-500" />
        </div>
        <div class="flex ml-2 gap-2 items-center justify-center">
          <div class="flex flex-col text-xs">
            <span>Time </span>
            <span>Left:</span>
          </div>
          <div class="flex flex-col">
            <span class="font-semibold leading-3">00:10:00</span>
            <span class="text-xs">hrs:min:sec</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
