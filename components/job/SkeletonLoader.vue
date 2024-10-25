<template>
  <div class="overflow-hidden rounded-lg bg-white shadow animate-pulse">
    <div class="px-4 py-5 sm:p-6">
      <!-- Skeleton for Job Title, Company, Location -->
      <div class="flex gap-x-4 justify-between">
        <div class="flex gap-x-2">
          <div class="rounded w-12 h-12 bg-gray-200"></div>
          <div>
            <div class="w-32 h-4 bg-gray-200 rounded mb-1"></div>
            <div class="w-24 h-3 bg-gray-200 rounded mb-1"></div>
            <div class="w-28 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div class="w-5 h-5 bg-gray-200 rounded"></div>
      </div>
      <!-- Skeleton for Tags -->
      <div class="flex gap-x-2 mt-2">
        <div class="w-16 h-6 bg-gray-200 rounded-full"></div>
        <div class="w-20 h-6 bg-gray-200 rounded-full"></div>
        <div class="w-24 h-6 bg-gray-200 rounded-full"></div>
      </div>
      <!-- Skeleton for Salary & Time -->
      <div class="flex items-center gap-x-2 mt-4 justify-between">
        <div class="flex items-center gap-x-2">
          <div class="w-6 h-6 bg-gray-200 rounded"></div>
          <div class="w-20 h-4 bg-gray-200 rounded"></div>
        </div>
        <div class="w-16 h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
</template>
