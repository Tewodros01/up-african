<template>
  <div
    class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mx-4 mb-4"
  >
    <table class="min-w-full bg-white shadow rounded-lg overflow-hidden">
      <thead class="bg-gray-200">
        <tr>
          <th
            v-for="(heading, index) in tableHeadings"
            :key="index"
            class="py-3 px-4 text-left text-sm font-semibold text-gray-600"
          >
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-3 px-4">-</td>
          <td class="py-3 px-4">-</td>
          <td class="py-3 px-4">-</td>
          <td class="py-3 px-4">-</td>
          <td class="py-3 px-4">-</td>
          <td class="py-3 px-4">-</td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-between items-center mt-4">
      <div class="text-sm text-gray-600">0 - 0</div>
      <div class="flex items-center space-x-2">
        <button
          class="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
        >
          <ChevronsLeft />
        </button>
        <button
          class="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
        >
          <ChevronLeft />
        </button>
        <button class="p-2 rounded-full bg-blue-600 text-white">1</button>
        <button
          class="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
        >
          <ChevronRight />
        </button>
        <button
          class="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
        >
          <ChevronsRight />
        </button>
      </div>
      <div class="text-sm text-gray-600">Jump To</div>
    </div>
  </div>
</template>

<script setup>
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-vue-next";

const tableHeadings = [
  "S. No.",
  "Opportunity",
  "Complete Referrals",
  "Paid Amount (₹)",
  "Unpaid Amount (₹)",
  "Total Amount (₹)",
];
</script>
