<script setup>
import {
  Award,
  Book,
  DollarSign,
  Globe,
  GraduationCap,
  Search,
  Users,
} from 'lucide-vue-next';
</script>

<template>
  <div class="mx-auto">
    <div class="max-w-screen-xl px-4 mx-auto">
      <!-- Responsive grid for all devices -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Section -->
        <div class="space-y-6 py-14 md:py-16">
          <div>
            <div class="grid grid-cols-2 md:flex">
              <!-- Heading and Subheading -->
              <div>
                <h1
                  class="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-left"
                >
                  <span class="text-blue-700">Shape </span> Your Tomorrow
                </h1>
                <p
                  class="hidden md:flex mt-4 text-sm md:text-base lg:text-lg text-gray-600 text-left"
                >
                  Explore a wide range of scholarship opportunities to help you
                  advance your education and career!
                </p>
              </div>
              <!-- Image for smaller screens -->
              <div class="flex md:hidden">
                <div
                  class="relative bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 shadow-sm rounded-tl-2xl rounded-tr-2xl"
                >
                  <img
                    src="/assets/img/scholarship-img.png"
                    alt="Girl Student"
                    class="object-contain w-6/12 h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
            <!-- Search Input for Smaller Screens -->
            <div class="flex flex-col md:hidden items-center -mt-1">
              <input
                type="text"
                placeholder="Search Scholarships"
                class="w-full px-4 py-3 border shadow-sm rounded-md z-[1] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <!-- Profile Information -->
          <div
            class="hidden md:flex items-center justify-center md:justify-start space-x-4 bg-purple-200 px-4 py-2 rounded-full"
          >
            <img
              src="/assets/img/google.png"
              alt="Profile"
              class="w-8 h-8 rounded-full"
            />
            <div>
              <p class="font-semibold">Tewodros</p>
              <p class="text-xs md:text-sm text-gray-600">Just Went Pro</p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="grid grid-cols-2 gap-3 md:flex md:gap-4 mt-8">
            <NuxtLink
              to="/scholarships"
              class="bg-blue-800 text-white px-4 py-3 rounded-full hover:bg-blue-700 flex items-center justify-center space-x-2"
            >
              <Search class="w-4 md:w-5 h-4 md:h-5 mr-2" />
              <span class="text-xs md:text-base">Find Scholarship</span>
            </NuxtLink>
          </div>

          <!-- Scholarship Buttons Section -->
          <div class="grid grid-cols-3 md:grid-cols-2 gap-3 md:gap-4 md:mt-8">
            <button
              class="bg-yellow-50 md:bg-white rounded-lg md:rounded-full py-10 md:py-4 text-gray-900 px-2 md:px-4 md:border md:border-gray-300 shadow-md md:shadow-sm hover:bg-gray-100 flex items-center justify-center md:justify-start space-x-2"
            >
              <Globe class="w-4 md:w-5 h-4 md:h-5 text-yellow-500" />
              <span class="text-xs md:text-base"
                >International Scholarships</span
              >
            </button>
            <button
              class="bg-green-100 md:bg-white rounded-lg md:rounded-full py-10 md:py-4 text-gray-900 px-2 md:px-4 md:border md:border-gray-300 shadow-md md:shadow-sm hover:bg-gray-100 flex items-center justify-center md:justify-start space-x-2"
            >
              <Award class="w-4 md:w-5 h-4 md:h-5 text-green-500" />
              <span class="text-xs md:text-base">Merit-Based Scholarships</span>
            </button>
            <button
              class="rounded-lg bg-purple-100 md:bg-white text-gray-900 px-2 md:px-4 py-10 md:py-4 md:rounded-full md:border md:border-gray-300 shadow-md md:shadow-sm hover:bg-gray-100 flex items-center justify-center md:justify-start space-x-2"
            >
              <DollarSign class="w-4 md:w-5 h-4 md:h-5 text-purple-500" />
              <span class="text-xs md:text-base">Need-Based Scholarships</span>
            </button>

            <button
              class="bg-pink-100 md:bg-white rounded-lg md:rounded-full py-10 md:py-4 text-gray-900 px-2 md:px-4 md:border md:border-gray-300 shadow-md md:shadow-sm hover:bg-gray-100 flex items-center justify-center md:justify-start space-x-2"
            >
              <Book class="w-4 md:w-5 h-4 md:h-5 text-pink-500" />
              <span class="text-xs md:text-base">Academic Scholarships</span>
            </button>
          </div>
        </div>

        <!-- Right Section -->
        <div
          class="relative hidden md:flex justify-center items-center md:ml-20 mt-8 md:mt-0"
        >
          <!-- Main Image -->
          <div class="relative">
            <div
              class="bg-gradient-to-r text-zinc-700 from-yellow-50 via-pink-50 to-blue-50 p-6 rounded-full shadow-lg"
            >
              <img
                src="/assets/img/scholarship-img.png"
                alt="Scholarship"
                class="w-full h-auto rounded-full"
              />
            </div>
          </div>

          <!-- Floating Elements with Representable Background Colors -->
          <div class="absolute top-24 left-0 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-80 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-pink-200 flex items-center justify-center rounded-md"
              >
                <Users class="w-5 h-5 text-pink-500" />
              </div>
              <span class="font-semibold text-sm">Network Opportunities</span>
            </div>
          </div>

          <div class="absolute top-28 right-5 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-80 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md"
              >
                <DollarSign class="w-5 h-5 text-blue-500" />
              </div>
              <span class="font-semibold text-sm">Financial Support</span>
            </div>
          </div>

          <div class="absolute bottom-24 left-5 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-80 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md"
              >
                <GraduationCap class="w-5 h-5 text-blue-500" />
              </div>
              <span class="font-semibold text-sm">Academic Growth</span>
            </div>
          </div>

          <div class="absolute bottom-24 right-10 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-80 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-pink-200 flex items-center justify-center rounded-md"
              >
                <Book class="w-5 h-5 text-pink-500" />
              </div>
              <span class="font-semibold text-sm">Scholarship Resources</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.floating-card {
  animation: float 3s ease-in-out infinite;
  transition: transform 0.3s ease-in-out;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
