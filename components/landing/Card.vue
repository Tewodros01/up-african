<script setup>
import { ref } from "vue";
import {
  Briefcase,
  User,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-vue-next";

// State for active tab
const activeTab = ref("jobs");
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4">
    <!-- Section Header -->
    <div class="mb-6">
      <h1 class="text-4xl font-bold text-gray-800">
        Browse Popular <span class="text-blue-600">Jobs</span>
      </h1>
      <p class="text-gray-500 mt-2">
        Find the job/Internship that fits your career aspirations.
      </p>
    </div>

    <!-- Category Tabs with Navigation -->
    <div class="flex justify-between items-center mb-8">
      <!-- Tabs -->
      <div class="flex space-x-2 bg-gray-100 p-1 rounded-full shadow-md">
        <button
          @click="activeTab = 'jobs'"
          :class="[
            'flex items-center px-4 py-2 rounded-full text-sm font-medium',
            activeTab === 'jobs'
              ? 'bg-white text-gray-700 shadow'
              : 'text-gray-500',
          ]"
        >
          <Briefcase class="w-5 h-5 mr-2" />
          Jobs
        </button>
        <button
          @click="activeTab = 'internships'"
          :class="[
            'flex items-center px-4 py-2 rounded-full text-sm font-medium',
            activeTab === 'internships'
              ? 'bg-white text-gray-700 shadow'
              : 'text-gray-500',
          ]"
        >
          <User class="w-5 h-5 mr-2" />
          Internships
        </button>
        <button
          @click="activeTab = 'challenges'"
          :class="[
            'flex items-center px-4 py-2 rounded-full text-sm font-medium',
            activeTab === 'challenges'
              ? 'bg-white text-gray-700 shadow'
              : 'text-gray-500',
          ]"
        >
          <Shield class="w-5 h-5 mr-2" />
          Hiring Challenges
        </button>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex space-x-2">
        <button
          class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft class="w-4 h-4 text-gray-500" />
        </button>
        <button
          class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRight class="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>

    <!-- Job Cards Container -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- Job Card Example -->
      <LandingJobCard />
    </div>
  </div>
</template>
