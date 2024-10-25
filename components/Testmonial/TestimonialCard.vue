<script setup>
import { Heart, Users, Clock } from 'lucide-vue-next'; // Import necessary icons
</script>

<template>
  <div
    class="relative max-w-xs bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
  >
    <!-- Top Section with Background and Logo -->
    <div
      class="relative pattern-wavy pattern-blue-500 pattern-bg-white pattern-size-6 pattern-opacity-20 bg-yellow-200 p-4 pb-16 rounded-bl-[3333px] rounded-br-full"
    >
      <!-- Background pattern -->
      <div
        class="absolute top-0 right-0 bottom-0 h-20 bg-yellow-100 rounded-br-full"
      ></div>
      <!-- Profile Image -->
      <img
        src="/assets/img/boystudent.png"
        alt="User Profile"
        class="w-12 h-12 absolute -top-6 left-4 border-2 border-white"
      />
    </div>

    <!-- Testimonial Information Section -->
    <div class="p-4">
      <!-- User Name -->
      <h3 class="text-lg font-semibold text-gray-800">John Doe</h3>
      <p class="text-sm text-gray-500 mb-2">
        Talent Acquisition Lead at Spotify
      </p>

      <!-- Testimonial Text -->
      <p class="text-sm text-gray-600 mb-4">
        "This platform helped me find my dream job and provided invaluable
        resources for my career growth."
      </p>

      <!-- Engagement Stats -->
      <div class="flex justify-between items-center text-gray-500 text-sm">
        <div class="flex items-center space-x-1">
          <Users class="w-4 h-4" />
          <span>17 Likes</span>
        </div>
        <div class="flex items-center space-x-1">
          <Clock class="w-4 h-4" />
          <span>Posted 22 hours ago</span>
        </div>
      </div>
    </div>
  </div>
</template>
