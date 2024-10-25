<template>
  <div class="flex flex-col bg-gray-50 py-10">
    <div
      class="flex flex-col md:flex-row mx-auto max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <!-- Card 1: Coding Practice -->
      <div
        @mouseover="hoveredCard = 1"
        :class="[
          'group flex flex-col justify-between items-center md:items-start p-8 flex-1 border-r border-gray-200 transform transition-all  duration-300 hover:bg-blue-50 hover:shadow-xl',
          hoveredCard === 1 ? 'flex-[2] bg-blue-50 shadow-xl' : '',
        ]"
      >
        <!-- Top Section: Icon, Title, and Description -->
        <div class="flex flex-col items-center md:items-start space-y-4 mb-14">
          <div
            class="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100"
          >
            <Code class="w-6 h-6 text-blue-500" />
          </div>
          <h2 class="text-xl font-semibold text-gray-800">Coding Practice</h2>
          <p class="text-gray-500 text-sm text-center md:text-left">
            Level up your coding skills by practicing the hiring Questions.
          </p>
        </div>
        <!-- Bottom Section: Link and Button -->
        <div
          class="mt-6 flex items-center space-x-1 text-blue-600 font-semibold self-start"
          :class="{ hidden: hoveredCard === 1 }"
        >
          <span>400+ Questions</span>
          <span>➔</span>
        </div>
        <button
          :class="{ block: hoveredCard === 1, hidden: hoveredCard !== 1 }"
          class="bg-[#004CFF] text-white px-6 py-2 rounded-full shadow-lg hover:bg-[#003BB5] transition duration-300 w-fit mt-6 self-start"
        >
          Start Now <span aria-hidden="true">↗</span>
        </button>
      </div>

      <!-- Card 2: Interview Preparation -->
      <div
        @mouseover="hoveredCard = 2"
        :class="[
          'group flex flex-col justify-between items-center md:items-start p-8 flex-1 border-r border-gray-200 transform transition-all duration-300 hover:bg-pink-50 hover:shadow-xl',
          hoveredCard === 2 ? 'flex-[2] bg-pink-50 shadow-xl' : '',
        ]"
      >
        <!-- Top Section: Icon, Title, and Description -->
        <div class="flex flex-col items-center md:items-start space-y-4 mb-14">
          <div
            class="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-pink-100"
          >
            <ClipboardList class="w-6 h-6 text-pink-500" />
          </div>
          <h2 class="text-xl font-semibold text-gray-800">
            Interview Preparation
          </h2>
          <p class="text-gray-500 text-sm text-center md:text-left">
            Crack Top companies in just 5 days.
          </p>
        </div>
        <!-- Bottom Section: Link and Button -->
        <div
          class="mt-6 flex items-center space-x-1 text-blue-600 font-semibold self-start"
          :class="{ hidden: hoveredCard === 2 }"
        >
          <span>20+ Companies</span>
          <span>➔</span>
        </div>
        <button
          :class="{ block: hoveredCard === 2, hidden: hoveredCard !== 2 }"
          class="bg-[#004CFF] text-white px-6 py-2 rounded-full shadow-lg hover:bg-[#003BB5] transition duration-300 w-fit mt-6 self-start"
        >
          Start Now <span aria-hidden="true">↗</span>
        </button>
      </div>

      <!-- Card 3: Projects -->
      <div
        @mouseover="hoveredCard = 3"
        :class="[
          'group flex flex-col justify-between items-center md:items-start p-8 flex-1 border-r border-gray-200 transform transition-all duration-300 hover:bg-purple-50 hover:shadow-xl',
          hoveredCard === 3 ? 'flex-[2] bg-purple-50 shadow-xl' : '',
        ]"
      >
        <!-- Top Section: Icon, Title, and Description -->
        <div class="flex flex-col items-center md:items-start space-y-4 mb-14">
          <div
            class="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-purple-100"
          >
            <Briefcase class="w-6 h-6 text-purple-500" />
          </div>
          <h2 class="text-xl font-semibold text-gray-800">Projects</h2>
          <p class="text-gray-500 text-sm text-center md:text-left">
            Projects epitomize perfect synergy for success.
          </p>
        </div>
        <!-- Bottom Section: Link and Button -->
        <div
          class="mt-6 flex items-center space-x-1 text-blue-600 font-semibold self-start"
          :class="{ hidden: hoveredCard === 3 }"
        >
          <span>15+ Projects</span>
          <span>➔</span>
        </div>
        <button
          :class="{ block: hoveredCard === 3, hidden: hoveredCard !== 3 }"
          class="bg-[#004CFF] text-white px-6 py-2 rounded-full shadow-lg hover:bg-[#003BB5] transition duration-300 w-fit mt-6 self-start"
        >
          Start Now <span aria-hidden="true">↗</span>
        </button>
      </div>

      <!-- Card 4: Skill Assessment (Wider Card) -->
      <div
        @mouseover="hoveredCard = 4"
        :class="[
          'group flex flex-col justify-between items-center md:items-start p-8 flex-1 border-r border-gray-200 transform transition-all duration-300 hover:bg-yellow-50 hover:shadow-xl',
          hoveredCard === 4 ? 'flex-[2] bg-yellow-50 shadow-xl' : '',
        ]"
      >
        <!-- Top Section: Icon, Title, and Description -->
        <div class="flex flex-col items-center md:items-start space-y-4 mb-14">
          <div
            class="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center group-hover:bg-yellow-100"
          >
            <CheckSquare class="w-6 h-6 text-yellow-500" />
          </div>
          <h2 class="text-xl font-semibold text-gray-800">Skill assessment</h2>
          <p class="text-gray-500 text-sm text-center md:text-left">
            Assess your skills and get ahead of the curve
          </p>
        </div>
        <!-- Bottom Section: Link and Button -->
        <div
          class="mt-6 flex items-center space-x-1 text-blue-600 font-semibold self-start"
          :class="{ hidden: hoveredCard === 4 }"
        >
          <span>2000+ Questions</span>
          <span>➔</span>
        </div>
        <button
          :class="{ block: hoveredCard === 4, hidden: hoveredCard !== 4 }"
          class="bg-[#004CFF] text-white px-6 py-2 rounded-full shadow-lg hover:bg-[#003BB5] transition duration-300 w-fit mt-6 self-start"
        >
          Start Now <span aria-hidden="true">↗</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Briefcase, CheckSquare, ClipboardList, Code } from "lucide-vue-next";
import { ref } from "vue";

// Reactive state to track hovered card
const hoveredCard = ref(1);
</script>
