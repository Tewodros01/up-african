<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">Listing</h2>
    <div class="border-b border-gray-200 mb-4 overflow-y-auto px-4">
      <nav class="flex space-x-2">
        <a
          v-for="(tab, index) in tabs"
          :key="index"
          href="#"
          :class="[
            'py-2 px-2 text-[14px]',
            index === activeTabIndex
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-blue-600',
          ]"
          @click.prevent="activeTabIndex = index"
        >
          {{ tab }}
        </a>
      </nav>
    </div>
    <div class="px-4 mb-4">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">
        All Competitions Stats
      </h3>
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div
          class="bg-purple-100 text-purple-600 p-4 rounded-lg flex items-center"
        >
          <div class="flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 012 0v14a1 1 0 01-2 0V3z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M9 7a1 1 0 012 0v10a1 1 0 01-2 0V7z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M15 11a1 1 0 012 0v6a1 1 0 01-2 0v-6z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-sm font-medium">Total Competitions</span>
          </div>
          <span class="ml-auto text-xl font-semibold">0</span>
        </div>
        <div class="bg-blue-100 text-blue-600 p-4 rounded-lg flex items-center">
          <div class="flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 10a2 2 0 114-0 2 2 0 01-4 0z"
              />
            </svg>
            <span class="text-sm font-medium">Total Impressions</span>
          </div>
          <span class="ml-auto text-xl font-semibold">0</span>
        </div>
        <div
          class="bg-orange-200 text-orange-600 p-4 rounded-lg flex items-center"
        >
          <div class="flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v2a1 1 0 002 0V3a1 1 0 00-1-1zm8 0a1 1 0 00-1 1v2a1 1 0 002 0V3a1 1 0 00-1-1zM4 7a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2H4zm12 9H4v-7h12v7z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-sm font-medium">Total Registrations</span>
          </div>
          <span class="ml-auto text-xl font-semibold">0</span>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="relative w-full max-w-md mb-2 sm:mb-0">
          <Search class="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search your listings!"
            class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div class="flex space-x-2">
          <button
            class="flex items-center space-x-1 px-3 py-2 border rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <List class="text-gray-600" />
            <span>All</span>
          </button>
          <button
            class="flex items-center space-x-1 px-3 py-2 border rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <Radio class="text-gray-600" />
            <span>Live</span>
          </button>
          <button
            class="flex items-center space-x-1 px-3 py-2 border rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <Hourglass class="text-gray-600" />
            <span>Incomplete</span>
          </button>
          <button
            class="flex items-center space-x-1 px-3 py-2 border rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <XCircle class="text-gray-600" />
            <span>Rejected</span>
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center rounded-lg border-gray-100 border-2 m-4 justify-center text-center py-16"
    >
      <img
        src="/assets/img/notfound.png"
        alt="No listings"
        height="200"
        width="200"
        class="p-3"
      />
      <p class="text-gray-700 text-lg mb-2">No listings available</p>
      <p class="text-gray-500">No data available</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search, List, Radio, Hourglass, XCircle } from "lucide-vue-next";

const tabs = [
  "All",
  "Competitions",
  "Quizzes",
  "Hackathons",
  "Scholarships",
  "Internships",
  "Jobs",
  "Workshops",
  "Conferences",
  "Cultural Events",
];
const activeTabIndex = ref(0);
</script>
