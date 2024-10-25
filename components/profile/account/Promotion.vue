<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">Promotion</h2>
    <div class="px-4 mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white border p-4 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <div
            class="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg"
          >
            <FileText class="w-6 h-6" />
          </div>
        </div>
        <h3 class="text-gray-700 mb-2">Promotional Package 1</h3>
        <p class="text-sm text-gray-600 mb-4">
          Boost your opportunity via newsletter inclusions and get upto 100,000
          impressions.
        </p>
        <hr class="border-dashed mb-4" />
        <p class="text-sm text-gray-700 font-semibold mb-4">
          1,00,000+ Impressions
        </p>
        <button
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Contact Sales
        </button>
      </div>
      <div class="bg-white border p-4 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <div
            class="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg"
          >
            <FileText class="w-6 h-6" />
          </div>
        </div>
        <h3 class="text-gray-700 mb-2">Promotional Package 2</h3>
        <p class="text-sm text-gray-600 mb-4">
          Feature your opportunity on Unstop and increase your visibility by 10x
        </p>
        <hr class="border-dashed mb-4" />
        <p class="text-sm text-gray-700 font-semibold mb-4">
          10,00,000+ Impressions
        </p>
        <button
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Contact Sales
        </button>
      </div>
      <div class="bg-white border p-4 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <div
            class="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg"
          >
            <FileText class="w-6 h-6" />
          </div>
        </div>
        <h3 class="text-gray-700 mb-2">Promotional Package 3</h3>
        <p class="text-sm text-gray-600 mb-4">
          Feature your opportunity on Unstop through Banners and get 20x
          visibility
        </p>
        <hr class="border-dashed mb-4" />
        <p class="text-sm text-gray-700 font-semibold mb-4">
          20,00,000+ Impressions
        </p>
        <button
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Contact Sales
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FileText } from "lucide-vue-next";
</script>
