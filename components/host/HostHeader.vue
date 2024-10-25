<script setup lang="ts">
import { Mail, Rocket, Globe, Award } from 'lucide-vue-next';
</script>

<template>
  <div class="flex pt-4 bg-gradient-to-r from-blue-50 to-yellow-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between w-full">
      <!-- Left Image Section with Floating Elements -->
      <div class="relative w-5/12">
        <img
          src="/assets/img/old-man.png"
          alt="Man Image"
          class="object-contain w-5/12 h-auto mx-auto rounded-b-3xl"
        />
        <!-- Floating: Send Bulk Emails -->
        <div
          class="absolute top-8 left-1 bg-white shadow-lg px-5 py-2 rounded-full flex items-center space-x-2"
        >
          <div
            class="w-8 h-8 bg-yellow-200 flex items-center justify-center rounded-md"
          >
            <Mail class="w-4 h-4 text-yellow-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-bold text-gray-800">Bulk Emails</p>
            <p class="text-xs text-gray-600">Send Bulk Emails.</p>
          </div>
        </div>
        <!-- Floating: Boost Applications -->
        <div
          class="absolute flex floating-card bottom-10 right-6 bg-white shadow-lg px-5 py-2 rounded-full items-center space-x-2"
        >
          <div
            class="w-8 h-8 bg-yellow-200 flex items-center justify-center rounded-md"
          >
            <Rocket class="w-4 h-4 text-yellow-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-bold text-gray-800">Boost</p>
            <p class="text-xs text-gray-600">Applications.</p>
          </div>
        </div>
      </div>

      <!-- Center Text Section -->
      <div class="w-4/12 text-center">
        <h1 class="text-4xl font-bold text-blue-600 mb-2">
          Host an Opportunity
        </h1>
        <p class="text-gray-600 text-sm">
          Choose your opportunity category from below
        </p>
      </div>

      <!-- Right Image Section with Floating Elements -->
      <div class="relative w-5/12">
        <img
          src="/assets/img/host-hero.png"
          alt="Host Hero Image"
          class="object-contain w-5/12 h-auto mx-auto rounded-b-3xl"
        />
        <!-- Floating: Get a Microsite -->
        <div
          class="absolute floating-card bottom-10 left-12 bg-white shadow-lg px-3 py-2 rounded-full flex items-center space-x-2"
        >
          <div
            class="w-8 h-8 bg-yellow-200 flex items-center justify-center rounded-md"
          >
            <Globe class="w-4 h-4 text-yellow-500" />
          </div>
          <div class="ml-3">
            <p class="text-xs font-bold text-gray-800">Microsite</p>
            <p class="text-xs text-gray-600">Get a Microsite.</p>
          </div>
        </div>
        <!-- Floating: Give Certificate -->
        <div
          class="absolute floating-card top-8 -right-5 bg-white shadow-lg px-5 py-2 rounded-full flex items-center space-x-2"
        >
          <div
            class="w-8 h-8 bg-yellow-200 flex items-center justify-center rounded-md"
          >
            <Award class="w-4 h-4 text-yellow-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-bold text-gray-800">Certificate</p>
            <p class="text-xs text-gray-600">Give Certificate.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
