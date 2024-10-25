<script setup>
import { User, Book, Monitor } from "lucide-vue-next"; // Changed Chalkboard to Monitor
</script>

<template>
  <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
    <p class="text-gray-600 text-lg font-semibold mb-1">Total Amount</p>
    <p class="text-sm text-gray-500 font-bold mb-4">0 Birr</p>
    <hr class="border-t border-gray-300 mb-4" />
    <p class="text-gray-600 font-semibold mb-2 text-base">
      Amount Distribution
    </p>
    <div class="flex space-x-4">
      <div class="flex-1 flex flex-col items-center">
        <div class="bg-purple-100 p-2 rounded-full mb-2">
          <User class="text-purple-500 text-xl" />
        </div>
        <span class="text-gray-700 text-sm">Opportunity</span>
        <span class="text-gray-500 text-xs">₹ 0</span>
      </div>
      <div class="flex-1 flex flex-col items-center">
        <div class="bg-blue-100 p-2 rounded-full mb-2">
          <Book class="text-blue-500 text-xl" />
        </div>
        <span class="text-gray-700 text-sm">Course</span>
        <span class="text-gray-500 text-xs">₹ 0</span>
      </div>
      <div class="flex-1 flex flex-col items-center">
        <div class="bg-yellow-100 p-2 rounded-full mb-2">
          <Monitor class="text-yellow-500 text-xl" />
          <!-- Changed icon here -->
        </div>
        <span class="text-gray-700 text-sm">Mentorship</span>
        <span class="text-gray-500 text-xs">₹ 0</span>
      </div>
    </div>
  </div>
</template>
