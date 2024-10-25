<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">Registrations</h2>
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
            index === 3
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-blue-600',
          ]"
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
          placeholder="Search your registrations!"
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
          <Calendar class="text-gray-600" />
          <span>Closed</span>
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
        alt="No registrations"
        height="300"
        width="300"
        class="p-3"
      />
      <p class="text-gray-700 text-lg mb-2">
        You have not registered to any opportunity.
      </p>
      <p class="text-gray-500 mb-4">Keep Registering!</p>
      <button
        class="px-6 py-1 mb-4 text-xs border-blue-600 border-2 text-gray-600 rounded-full hover:bg-blue-700"
      >
        Explore Opportunities
      </button>
    </div>
  </div>
</template>

<script setup>
import { Search, Globe, Calendar, SortDesc } from "lucide-vue-next";

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
  "Creative Events",
  "Festivals",
];
</script>
