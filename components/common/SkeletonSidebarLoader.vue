<template>
  <div
    class="p-4 border rounded-lg shadow-md bg-white min-w-[26rem] w-full mb-2 animate-pulse"
  >
    <div class="flex-1">
      <div class="flex justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <!-- Skeleton for rating and category -->
            <div class="bg-gray-300 rounded-full h-4 w-12"></div>
            <div class="bg-gray-300 rounded-full h-4 w-20"></div>
          </div>
          <!-- Skeleton for title -->
          <div class="bg-gray-300 rounded h-6 w-3/4 mb-2"></div>
          <!-- Skeleton for learners -->
          <div class="flex items-center text-gray-600 text-sm mb-2">
            <div class="bg-gray-300 rounded-full h-4 w-16"></div>
          </div>
          <!-- Skeleton for sessions -->
          <div class="flex items-center text-gray-600 text-sm mb-2">
            <div class="bg-gray-300 rounded-full h-4 w-16"></div>
          </div>
        </div>
        <!-- Skeleton for image -->
        <div
          class="flex-shrink-0 border-2 rounded-lg ml-4 w-16 h-16 bg-gray-300"
        ></div>
      </div>
      <!-- Skeleton for description -->
      <div class="bg-gray-300 rounded h-4 w-full mt-4"></div>
      <div class="bg-gray-300 rounded h-4 w-5/6 mt-2"></div>
      <div class="bg-gray-300 rounded h-4 w-2/3 mt-2"></div>
    </div>
  </div>
</template>
