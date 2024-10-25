<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">
      Mentor Session
    </h2>
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
    <div class="flex items-center justify-between px-4 mb-4">
      <div class="relative w-full max-w-md">
        <Search class="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-sm text-gray-600">Filter by:</span>
        <select
          class="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option>All</option>
        </select>
      </div>
    </div>
    <div
      class="flex flex-col items-center rounded-lg border-gray-100 border-2 m-4 justify-center text-center py-16"
    >
      <img
        src="/assets/img/notfound.png"
        alt="No sessions"
        height="200"
        width="200"
        class="p-3"
      />
      <p class="text-gray-700 text-lg mb-2">No sessions available</p>
      <p class="text-gray-500">No data available</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "lucide-vue-next";

const tabs = ["1:1 Sessions", "Queries", "Resource"];
const activeTabIndex = ref(0);
</script>
