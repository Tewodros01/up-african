<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">My Rounds</h2>
    <div class="py-1">
      <CommonDivider />
    </div>
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
    <div class="flex flex-col sm:flex-row items-center mb-4 px-4">
      <div class="relative w-full max-w-md mb-2 sm:mb-0">
        <Search class="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search for rounds!"
          class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div class="flex space-x-2 ml-0 sm:ml-4">
        <button
          class="flex items-center space-x-1 px-3 py-2 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <Globe class="text-gray-600" />
          <span>All</span>
        </button>
        <button
          class="flex items-center space-x-1 px-3 py-2 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <Globe class="text-gray-600" />
          <span>Live</span>
        </button>
        <button
          class="flex items-center space-x-1 px-3 py-2 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <SortDesc class="text-gray-600" />
          <span>Upcoming</span>
        </button>
        <button
          class="flex items-center space-x-1 px-3 py-2 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <SortDesc class="text-gray-600" />
          <span>Sort By</span>
        </button>
      </div>
    </div>
    <div
      class="flex flex-col items-center rounded-lg border-gray-100 border-2 m-4 justify-center text-center"
    >
      <img
        src="/assets/img/notfound.png"
        alt="No rounds"
        height="300"
        width="300"
        class="p-3"
      />
      <p class="text-gray-700 text-lg mb-2">
        No Rounds for the selected filters!
      </p>
      <p class="text-gray-500 mb-4">Keep Registering!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search, Globe, SortDesc } from "lucide-vue-next";

const tabs = [
  "All",
  "Quiz",
  "Code Contest",
  "Quiz Assessment",
  "Simulation Game",
  "Games",
  "Rounds",
  "Offline Round",
  "Psychometric Test",
  "Caselets",
];

const activeTabIndex = ref(0);
</script>
