<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">Usage Summary</h2>
    <div class="px-4 mb-4 grid grid-cols-4 md:grid-cols-4 gap-4">
      <div class="bg-purple-100 p-4 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <div
            class="w-10 h-10 bg-purple-200 text-purple-600 flex items-center justify-center rounded-lg"
          >
            <List class="w-6 h-6" />
          </div>
          <Info class="w-6 h-6 text-gray-400" />
        </div>
        <h3 class="text-gray-700 mb-2">
          Public Listings - Visible to all users of Unstop for maximum traction.
        </h3>
        <p class="text-sm text-gray-600">Credits:</p>
        <p class="text-sm text-gray-600 mb-4">Used: 0 | Left: 5</p>
        <div class="flex justify-between items-center">
          <button class="text-sm text-blue-600">View History</button>
        </div>
      </div>
      <div class="bg-blue-100 p-4 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <div
            class="w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-lg"
          >
            <Download class="w-6 h-6" />
          </div>
          <Info class="w-6 h-6 text-gray-400" />
        </div>
        <h3 class="text-gray-700 mb-2">
          View & Download Data for Public Listings
        </h3>
        <p class="text-sm text-gray-600">Credits:</p>
        <p class="text-sm text-gray-600 mb-4">Used: 0 | Left: 0</p>
        <div class="flex justify-between items-center">
          <button class="text-sm text-blue-600">Add Credits</button>
          <button class="text-sm text-blue-600">View History</button>
        </div>
      </div>
      <div class="bg-green-100 p-4 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <div
            class="w-10 h-10 bg-green-200 text-green-600 flex items-center justify-center rounded-lg"
          >
            <ClipboardList class="w-6 h-6" />
          </div>
          <Info class="w-6 h-6 text-gray-400" />
        </div>
        <h3 class="text-gray-700 mb-2">
          Assessment Credits for Quiz, Coding & Other Platforms
        </h3>
        <p class="text-sm text-gray-600">Credits:</p>
        <p class="text-sm text-gray-600 mb-4">Used: 0 | Left: 0</p>
        <div class="flex justify-between items-center">
          <button class="text-sm text-blue-600">Add Credits</button>
          <button class="text-sm text-blue-600">View History</button>
        </div>
      </div>
      <div class="bg-orange-200 p-4 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <div
            class="w-10 h-10 bg-orange-200 text-orange-600 flex items-center justify-center rounded-lg"
          >
            <Mail class="w-6 h-6" />
          </div>
          <Info class="w-6 h-6 text-gray-400" />
        </div>
        <h3 class="text-gray-700 mb-2">
          Email Communication with Participants
        </h3>
        <p class="text-sm text-gray-600">Credits:</p>
        <p class="text-sm text-gray-600 mb-4">
          3 per registration + 2 for each participant in a preliminary round
        </p>
        <div class="flex justify-between items-center">
          <button class="text-sm text-blue-600">Add Credits</button>
          <button class="text-sm text-blue-600">View History</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { List, Download, ClipboardList, Mail, Info } from "lucide-vue-next";
</script>
