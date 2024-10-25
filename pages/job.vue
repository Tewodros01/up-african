<script setup>
import {
  Briefcase,
  Layers,
  PenTool,
  Search,
  Star,
  User,
} from 'lucide-vue-next';
</script>

<template>
  <div class="mx-auto">
    <div class="max-w-screen-xl px-4 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Section -->
        <div class="space-y-6 py-14 md:py-16">
          <div>
            <div class="grid grid-cols-2 md:flex">
              <div>
                <h1
                  class="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-left"
                >
                  <span class="text-blue-700">Explore</span> Opportunities
                </h1>
                <p
                  class="hidden md:flex mt-4 text-sm md:text-base lg:text-lg text-gray-600 text-left"
                >
                  From internships to senior positions, explore a wide range of
                  job opportunities to advance your career!
                </p>
              </div>
              <!-- Image for small screens -->
              <div class="flex md:hidden">
                <div
                  class="relative bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 shadow-sm rounded-l-3xl rounded-tr-3xl"
                >
                  <img
                    src="/assets/img/job-girl.png"
                    alt="Girl Student"
                    class="object-contain w-6/12 h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
            <!-- Search for small screens -->
            <div class="flex flex-col md:hidden items-center">
              <input
                type="text"
                placeholder="Search Jobs"
                class="w-full px-4 py-3 border shadow-sm rounded-md z-[1] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div
            class="hidden md:flex items-center justify-center md:justify-start space-x-4 bg-purple-200 px-4 py-2 rounded-full"
          >
            <img
              src="/assets/img/google.png"
              alt="Profile"
              class="w-8 h-8 rounded-full"
            />
            <div>
              <p class="font-medium">Tewodros</p>
              <p class="text-xs md:text-sm text-gray-600">Just Went Pro</p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="grid grid-cols-2 gap-3 md:flex md:gap-4 mt-8">
            <NuxtLink
              to="/jobs"
              class="bg-blue-800 text-white px-4 py-3 rounded-full hover:bg-blue-700 flex items-center justify-center space-x-2"
            >
              <Search class="w-4 md:w-5 h-4 md:h-5 mr-2" />
              <span class="text-xs md:text-base">Find Jobs</span>
            </NuxtLink>
            <button
              class="border border-blue-800 text-blue-800 px-4 py-3 rounded-full hover:bg-blue-50 flex items-center justify-center space-x-2"
            >
              <Briefcase class="w-4 md:w-5 h-4 md:h-5 mr-2" />
              <span class="text-xs md:text-base">Post Jobs</span>
            </button>
          </div>

          <div class="grid grid-cols-2 gap-3 mt-8">
            <button
              class="bg-white text-gray-900 px-4 py-3 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center space-x-2"
            >
              <PenTool class="w-5 h-5 text-green-500" />
              <span class="text-xs md:text-base">Internships</span>
            </button>
            <button
              class="bg-white text-gray-900 px-4 py-3 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center space-x-2"
            >
              <User class="w-5 h-5 text-purple-500" />
              <span class="text-xs md:text-base">Junior Level Jobs</span>
            </button>
            <button
              class="bg-white text-gray-900 px-4 py-3 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center space-x-2"
            >
              <Layers class="w-5 h-5 text-blue-500" />
              <span class="text-xs md:text-base">Mid Level Jobs</span>
            </button>
            <button
              class="bg-white text-gray-900 px-4 py-3 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center space-x-2"
            >
              <Star class="w-5 h-5 text-yellow-500" />
              <span class="text-xs md:text-base">Senior Level Jobs</span>
            </button>
          </div>
        </div>

        <!-- Right Section -->
        <div
          class="relative hidden md:grid grid-cols-2 gap-4 pt-10 pb-10 md:pb-20"
        >
          <!-- Girl Student Image -->
          <div
            class="relative row-span-2 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 p-6 rounded-full flex shadow-lg"
          >
            <img
              src="/assets/img/job-girl.png"
              alt="Girl Student"
              class="object-cover w-full h-auto rounded-full"
            />
          </div>

          <!-- Boy Student Image -->
          <div
            class="relative bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 p-4 shadow-lg rounded-lg rounded-tr-[8rem]"
          >
            <img
              src="/assets/img/man.png"
              alt="Boy Student"
              class="object-cover w-full h-auto"
            />
          </div>

          <!-- Bottom Section: Professional Stats -->
          <div
            class="bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 shadow-lg p-6 rounded-2xl flex items-center"
          >
            <div
              class="flex flex-col bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 p-3 rounded-2xl shadow-md max-h-32 space-y-3"
            >
              <div class="flex space-x-2">
                <img
                  src="/assets/img/man.png"
                  alt="Student 1"
                  class="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/assets/img/man.png"
                  alt="Student 2"
                  class="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/assets/img/boystudent.png"
                  alt="Student 3"
                  class="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <div class="text-center">
                <p
                  class="font-bold text-green-700 text-lg md:text-xl lg:text-2xl"
                >
                  70,324+
                </p>
                <p class="text-xs md:text-sm text-gray-600">
                  Professionals hired with our platform
                </p>
              </div>
            </div>
          </div>

          <!-- Floating Job Cards -->
          <div class="absolute top-16 left-5 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-90 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-green-200 flex items-center justify-center rounded-md"
              >
                <PenTool class="w-6 h-6 text-green-500" />
              </div>
              <span class="font-semibold text-sm">Internships</span>
            </div>
          </div>

          <div class="absolute top-32 right-10 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-90 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-purple-200 flex items-center justify-center rounded-md"
              >
                <User class="w-6 h-6 text-purple-500" />
              </div>
              <span class="font-semibold text-sm">Junior Level Jobs</span>
            </div>
          </div>

          <div class="absolute bottom-32 left-0 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-90 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md"
              >
                <Layers class="w-6 h-6 text-blue-500" />
              </div>
              <span class="font-semibold text-sm">Mid Level Jobs</span>
            </div>
          </div>

          <div class="absolute bottom-16 right-16 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-90 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-yellow-200 flex items-center justify-center rounded-md"
              >
                <Star class="w-6 h-6 text-yellow-500" />
              </div>
              <span class="font-semibold text-sm">Senior Level Jobs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <JobExploreByCategory />
    <!-- <LandingCard /> -->
  </div>
</template>
