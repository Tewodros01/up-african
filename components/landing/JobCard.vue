<script setup>
import { Heart, Users, Clock, ExternalLink } from "lucide-vue-next";
</script>

<template>
  <div
    class="relative max-w-xs bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
  >
    <!-- Top Section with Logo and Background -->
    <div
      class="relative pattern-wavy pattern-blue-500 pattern-bg-white pattern-size-6 pattern-opacity-20 bg-yellow-200 p-4 pb-16 rounded-bl-[3333px] rounded-br-full"
    >
      <!-- Background pattern -->
      <div
        class="absolute top-0 right-0 bottom-0 h-20 bg-yellow-100 rounded-br-full"
      ></div>
      <!-- Logo -->
      <img
        src="/assets/img/boystudent.png"
        alt="Company Logo"
        class="w-12 h-12 rounded-full"
      />
    </div>

    <!-- Job Information Section -->
    <div class="p-4">
      <!-- Job Type and Price -->
      <div class="flex justify-between items-center text-gray-500 text-sm mb-2">
        <span>In Office</span>
        <span>Free</span>
        <Heart class="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>

      <!-- Job Title and Company Name -->
      <h3 class="text-lg font-semibold text-gray-800">Loan Officer</h3>
      <p class="text-sm text-gray-500 mb-4">salarykart</p>

      <!-- Applied and Time Left -->
      <div class="flex justify-between items-center text-gray-500 text-sm">
        <div class="flex items-center space-x-1">
          <Users class="w-4 h-4" />
          <span>17 Applied</span>
        </div>
        <div class="flex items-center space-x-1">
          <Clock class="w-4 h-4" />
          <span>22 hours left</span>
        </div>
      </div>
    </div>
  </div>
</template>
