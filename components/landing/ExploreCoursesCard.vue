<template>
  <div class="flex flex-col bg-white">
    <div
      class="flex flex-col mx-auto mt-10 max-w-7xl md:flex-row items-center bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 rounded-2xl space-y-8 md:space-y-0 md:space-x-12 mb-6 shadow-md bg-white"
    >
      <!-- Left Side: Full Height and Width Yellow Background -->
      <div
        class="relative flex flex-col items-center md:items-start md:flex-1 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 p-10 rounded-2xl min-h-[400px] w-full md:w-[50%] space-y-6"
      >
        <!-- Student Image -->
        <img
          src="@/assets/img/boypractice.png"
          alt="Student"
          class="w-1/2 h-auto object-cover z-10 relative"
        />
        <!-- Absolute Positioned Student Count Card -->
        <div
          class="absolute right-4 sm:right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center"
        >
          <p class="text-[#4D4D4D] font-bold text-lg sm:text-2xl">70,324+</p>
          <p class="text-gray-500 text-xs sm:text-sm">
            Students Preparing with Us
          </p>
        </div>
      </div>

      <!-- Right Side: Text, Icons, and Button -->
      <div class="md:flex-1 text-center md:text-left space-y-6">
        <!-- Headline with Blue Text for "Level Up Your Skills" -->
        <h1
          class="text-3xl sm:text-4xl font-extrabold text-[#2B2B2B] leading-tight"
        >
          Learn &<br />
          <span class="text-[#004CFF]">Level Up Your Skills</span>
        </h1>
        <!-- Subtext -->
        <p class="text-gray-600 mt-4 text-base sm:text-lg">
          Select from a wide range of courses to upskill and advance your
          career!
        </p>
        <!-- Features List in Flex Row -->
        <ul
          class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 mt-6 text-gray-800"
        >
          <!-- Icon with Text - 50+ Courses -->
          <li
            class="flex items-center space-x-2 bg-gray-100 p-2 rounded-full shadow-md"
          >
            <div
              class="w-8 h-8 bg-yellow-500 p-1 rounded-full shadow-md flex items-center justify-center"
            >
              <Check class="w-5 h-5 text-white" />
            </div>
            <span class="text-sm sm:text-base">50+ Courses</span>
          </li>
          <!-- Icon with Text - Certificate -->
          <li
            class="flex items-center space-x-2 bg-gray-100 p-2 rounded-full shadow-md"
          >
            <div
              class="w-8 h-8 bg-yellow-500 p-1 rounded-full shadow-md flex items-center justify-center"
            >
              <Check class="w-5 h-5 text-white" />
            </div>
            <span class="text-sm sm:text-base">Certificate</span>
          </li>
          <!-- Icon with Text - Projects & Assignments -->
          <li
            class="flex items-center space-x-2 bg-gray-100 p-2 rounded-full shadow-md"
          >
            <div
              class="w-8 h-8 bg-yellow-500 p-1 rounded-full shadow-md flex items-center justify-center"
            >
              <Check class="w-5 h-5 text-white" />
            </div>
            <span class="text-sm sm:text-base">Projects & Assignments</span>
          </li>
        </ul>
        <!-- Explore Button -->
        <button
          class="mt-8 bg-[#004CFF] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#003BB5] transition duration-300"
        >
          Explore Courses <span aria-hidden="true">↗</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Check } from "lucide-vue-next";
</script>
