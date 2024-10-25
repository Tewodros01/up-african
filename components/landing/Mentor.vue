<script setup>
import { ArrowRight, Search } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col bg-white py-12 px-8 space-y-6 mx-auto">
    <!-- Header Section -->
    <div class="flex justify-between w-full">
      <h1 class="text-4xl font-bold text-[#1f3b5f]">
        Personalised Mentor Support
      </h1>
      <a
        href="#"
        class="text-sm text-[#1f3b5f] flex items-center hover:text-blue-600"
      >
        View More <ArrowRight class="w-4 h-4 ml-1" />
      </a>
    </div>
    <p class="text-lg text-[#8b98a5] mt-2">
      Select a mentor from a pool of 2000+ industry experts & get 1-on-1
      mentorship!
    </p>

    <div class="flex justify-between">
      <button
        class="flex items-center px-6 py-3 bg-[#0033cc] text-white text-base rounded-full shadow-md hover:bg-[#002bb8]"
      >
        <Search class="w-5 h-5 mr-2" />
        Find a Mentor
      </button>

      <!-- Right Section: Become a Mentor Button -->
      <div
        class="flex items-center px-6 py-2 border border-[#1f3b5f] text-[#1f3b5f] text-base rounded-full shadow-md hover:bg-[#f8faff]"
      >
        Become a Mentor
      </div>
    </div>
    <!-- Main Content Section -->
    <div class="mt-8 flex justify-center items-center w-full"></div>
  </div>
</template>
