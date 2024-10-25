<script setup>
import {
  Book,
  Briefcase,
  Edit,
  GraduationCap,
  Handshake,
  TrendingUp,
  Trophy,
  CheckCircle,
  PlayCircle,
} from 'lucide-vue-next';
</script>

<template>
  <div class="mx-auto">
    <div
      class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start"
    >
      <!-- Left Column -->
      <div
        class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0"
      >
        <h1 class="my-4 text-5xl font-bold leading-tight text-darken">
          Stay <span class="text-blue-600">Ahead</span> in the Future
        </h1>
        <p class="leading-normal text-lg mb-8">
          Explore opportunities from across the globe to learn, showcase skills,
          gain CV points & get hired by your dream company.
        </p>
        <div
          class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
        >
          <NuxtLink
            to="/auth/login"
            class="bg-blue-800 text-white px-4 py-3 rounded-full hover:bg-blue-700 flex items-center justify-center space-x-2"
          >
            <CheckCircle class="w-4 md:w-5 h-4 md:h-5 mr-2" />
            <span class="text-xs md:text-base">Join for free </span>
          </NuxtLink>

          <div
            class="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
          >
            <button
              class="bg-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              <PlayCircle class="w-6 h-6 text-blue-500" />
            </button>
            <span class="cursor-pointer">Watch how it works</span>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="w-full lg:w-6/12 relative" id="girl">
        <img class="w-10/12 mx-auto 2xl:-mb-20" src="/assets/img/homeimg.png" />

        <!-- Floating cards styled like the provided image with title and description -->
        <div
          class="absolute top-28 left-8 floating-card flex items-center bg-white bg-opacity-80 p-3 rounded-lg shadow-lg"
        >
          <div
            class="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md"
          >
            <Book class="w-6 h-6 text-blue-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-bold text-gray-800">Learn</p>
            <p class="text-xs text-gray-600">Expand your knowledge.</p>
          </div>
        </div>

        <div
          class="absolute bottom-48 left-8 floating-card flex items-center bg-white bg-opacity-80 p-3 rounded-lg shadow-lg"
        >
          <div
            class="w-10 h-10 bg-yellow-200 flex items-center justify-center rounded-md"
          >
            <Edit class="w-6 h-6 text-yellow-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-bold text-gray-800">Practice</p>
            <p class="text-xs text-gray-600">Sharpen your skills.</p>
          </div>
        </div>

        <div
          class="absolute top-28 right-8 floating-card flex items-center bg-white bg-opacity-80 p-3 rounded-lg shadow-lg"
        >
          <div
            class="w-10 h-10 bg-red-200 flex items-center justify-center rounded-md"
          >
            <Trophy class="w-6 h-6 text-red-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-bold text-gray-800">Compete</p>
            <p class="text-xs text-gray-600">Engage in challenges.</p>
          </div>
        </div>

        <div
          class="absolute bottom-28 left-8 floating-card flex items-center bg-white bg-opacity-80 p-3 rounded-lg shadow-lg"
        >
          <div
            class="w-10 h-10 bg-purple-200 flex items-center justify-center rounded-md"
          >
            <Handshake class="w-6 h-6 text-purple-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-bold text-gray-800">Mentorship</p>
            <p class="text-xs text-gray-600">Learn from experts.</p>
          </div>
        </div>

        <div
          class="absolute bottom-48 right-8 floating-card flex items-center bg-white bg-opacity-80 p-3 rounded-lg shadow-lg"
        >
          <div
            class="w-10 h-10 bg-orange-200 flex items-center justify-center rounded-md"
          >
            <TrendingUp class="w-6 h-6 text-orange-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-bold text-gray-800">Advance</p>
            <p class="text-xs text-gray-600">Grow in your career.</p>
          </div>
        </div>

        <div
          class="absolute bottom-28 right-8 floating-card flex items-center bg-white bg-opacity-80 p-3 rounded-lg shadow-lg"
        >
          <div
            class="w-10 h-10 bg-teal-200 flex items-center justify-center rounded-md"
          >
            <GraduationCap class="w-6 h-6 text-teal-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-bold text-gray-800">Internship</p>
            <p class="text-xs text-gray-600">Gain practical experience.</p>
          </div>
        </div>

        <div
          class="absolute bottom-5 left-48 floating-card flex items-center bg-white bg-opacity-80 p-3 rounded-lg shadow-lg"
        >
          <div
            class="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md"
          >
            <Briefcase class="w-6 h-6 text-blue-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-bold text-gray-800">Jobs</p>
            <p class="text-xs text-gray-600">Find job opportunities.</p>
          </div>
        </div>
      </div>
    </div>
    <CommonSlidingBrands />
    <LandingJobList />
    <LandingScholarshipList />
    <CommonFaqAccordion />
  </div>
</template>
