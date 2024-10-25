<template>
  <div
    class="bg-gray-100 shadow-sm flex flex-col gap-2 rounded-md animate-pulse"
  >
    <!-- Top Banner Skeleton -->
    <div class="relative h-48 bg-gray-300 rounded-md"></div>

    <!-- Profile Section Skeleton -->
    <div class="bg-white">
      <div class="flex flex-row gap-2 w-full">
        <!-- Profile Image Skeleton -->
        <div class="flex-shrink-0 p-6">
          <div class="relative">
            <div
              class="h-36 w-36 bg-gray-300 rounded-full mx-auto md:mx-0"
            ></div>
            <div
              class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 translate-y-1/2"
            >
              <div class="h-6 w-24 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        <!-- Candidate Details Skeleton -->
        <div class="flex flex-1 flex-col justify-center text-left">
          <div class="flex flex-col gap-2">
            <div class="h-6 bg-gray-300 rounded w-3/4"></div>
            <div class="h-4 bg-gray-300 rounded w-1/2"></div>
            <div class="h-6 bg-gray-300 rounded-full w-1/4 mt-2"></div>
            <div class="flex flex-wrap gap-2 mt-2">
              <div class="h-6 w-16 bg-gray-300 rounded-full"></div>
              <div class="h-6 w-16 bg-gray-300 rounded-full"></div>
              <div class="h-6 w-16 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        <!-- Connect Button Skeleton -->
        <div class="flex items-end px-3">
          <div class="h-10 w-24 bg-gray-300 rounded-md"></div>
        </div>
      </div>

      <!-- Divider -->
      <div class="p-2">
        <div class="h-1 bg-gray-200 rounded"></div>
      </div>

      <!-- Sidebar and Content Skeleton -->
      <div class="mt-8 px-10 flex flex-col md:flex-row justify-between">
        <!-- Sidebar Skeleton -->
        <div class="sticky mb-8 md:mb-0">
          <nav class="space-y-4 text-nowrap">
            <div class="h-4 bg-gray-300 rounded w-24"></div>
            <div class="h-4 bg-gray-300 rounded w-24"></div>
            <div class="h-4 bg-gray-300 rounded w-24"></div>
            <div class="h-4 bg-gray-300 rounded w-24"></div>
            <div class="h-4 bg-gray-300 rounded w-24"></div>
            <div class="h-4 bg-gray-300 rounded w-24"></div>
          </nav>
        </div>

        <!-- Content Cards Skeleton -->
        <div class="flex flex-col px-4 flex-1">
          <div class="space-y-4">
            <div class="h-6 bg-gray-300 rounded w-1/2"></div>
            <div class="h-4 bg-gray-300 rounded w-3/4"></div>
            <div class="h-4 bg-gray-300 rounded w-2/3"></div>
            <div class="h-32 bg-gray-200 rounded-md mt-4"></div>
          </div>
          <div class="py-4">
            <div class="h-1 bg-gray-200 rounded"></div>
          </div>
          <div class="space-y-4">
            <div class="h-6 bg-gray-300 rounded w-1/2"></div>
            <div class="h-4 bg-gray-300 rounded w-3/4"></div>
            <div class="h-4 bg-gray-300 rounded w-2/3"></div>
            <div class="h-32 bg-gray-200 rounded-md mt-4"></div>
          </div>
        </div>

        <!-- Statistics Skeleton -->
        <div class="hidden md:block w-1/3 ml-4">
          <div class="h-24 bg-gray-300 rounded-md mb-4"></div>
          <div class="h-24 bg-gray-300 rounded-md mb-4"></div>
          <div class="h-24 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  </div>
</template>
