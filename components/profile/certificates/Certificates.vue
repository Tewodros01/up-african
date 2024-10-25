<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">Certificates</h2>
    <div class="px-4 mb-4">
      <div class="relative w-full max-w-md">
        <Search class="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search certificate"
          class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
    </div>
    <div
      class="flex flex-col items-center rounded-lg border-gray-100 border-2 m-4 justify-center text-center py-16"
    >
      <img
        src="/assets/img/notfound.png"
        alt="No certificates"
        height="200"
        width="200"
        class="p-3"
      />
      <p class="text-gray-700 text-lg mb-2">You don't have any certificates.</p>
      <p class="text-gray-500 mb-4">Keep participating!</p>
      <button
        class="px-6 py-1 text-xs border-blue-600 border-2 text-blue-600 rounded-full hover:bg-blue-100"
      >
        Explore Opportunities
      </button>
    </div>
  </div>
</template>

<script setup>
import { Search } from "lucide-vue-next";
</script>
