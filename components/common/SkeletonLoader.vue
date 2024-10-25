<template>
  <div>
    <div
      class="bg-white p-6 rounded-lg shadow-sm flex mb-4 flex-col animate-pulse"
    >
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-gray-300 rounded-full h-4 w-12"></span>
            <span class="bg-gray-300 rounded-full h-4 w-20"></span>
          </div>
          <div class="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div class="flex items-center text-gray-600 text-sm mb-2">
            <div class="bg-gray-300 h-4 w-24 rounded mr-4"></div>
            <div class="bg-gray-300 h-4 w-20 rounded"></div>
          </div>
        </div>
        <div
          class="flex-shrink-0 border-2 rounded-lg ml-4 w-24 h-24 bg-gray-300"
        ></div>
      </div>
      <hr class="my-4" />
      <div class="flex justify-between items-center">
        <div class="bg-gray-300 h-8 w-8 rounded-full"></div>
        <div class="bg-gray-300 rounded-md h-10 w-32"></div>
      </div>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-sm animate-pulse">
      <!-- Skeleton for the heading -->
      <div class="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>

      <!-- Skeleton for the paragraph -->
      <div class="space-y-2">
        <div class="h-4 bg-gray-300 rounded w-full"></div>
        <div class="h-4 bg-gray-300 rounded w-5/6"></div>
        <div class="h-4 bg-gray-300 rounded w-3/4"></div>
        <div class="h-4 bg-gray-300 rounded w-4/5"></div>
        <div class="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
    <div class="bg-white p-6 mt-5 rounded-lg shadow-sm animate-pulse">
      <!-- Skeleton for the heading -->
      <div class="h-5 bg-gray-300 rounded w-1/4 mb-4"></div>

      <!-- Skeleton for the key takeaways grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="index in 10"
          :key="index"
          class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
        >
          <!-- Skeleton for the icon -->
          <div class="bg-gray-300 p-4 rounded-full text-xl w-10 h-10"></div>

          <!-- Skeleton for the text -->
          <div class="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  </div>
</template>
