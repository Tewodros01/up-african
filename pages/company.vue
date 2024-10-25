<script setup>
import {
  Code,
  DollarSign,
  Search,
  Star as StarIcon,
  UserPlus,
  Users,
} from 'lucide-vue-next';

const opportunityItems = [
  {
    title: 'PhD Sponsorships, Cash Rewards and Internships',
    category: 'Online | Free',
    image: 'https://via.placeholder.com/400x200.png?text=PhD+Sponsorships',
    resources: '3,065',
    dueDate: '10 days',
  },
  // ... other opportunity items
];

const popularOpportunityItems = [
  {
    title: 'Discover Model United Nations Conference 2024',
    subtitle: 'Discover Model United Nations',
    category1: 'Online',
    category2: 'Free',
    logo: 'https://via.placeholder.com/40x40.png?text=D',
    background: 'bg-gradient-to-r from-green-400 to-green-300',
    resources: '287',
    dueDate: '8 days',
  },
  // ... other popular opportunity items
];
</script>

<template>
  <div class="mx-auto">
    <div class="max-w-screen-xl px-4 mx-auto">
      <!-- Responsive grid for all devices -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
        <!-- Left Section -->
        <div class="space-y-6 py-14 md:py-20">
          <!-- Content Section -->
          <div>
            <div class="grid grid-cols-2 md:flex">
              <div>
                <h1
                  class="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-left"
                >
                  <span class="text-blue-700">Find</span> Companies
                </h1>
                <p
                  class="hidden md:flex mt-4 text-sm md:text-base lg:text-lg text-gray-600 text-left"
                >
                  Explore top companies and connect with employers in your
                  industry. Find the perfect fit for your career!.
                </p>
              </div>
              <!-- Image for small screens -->
              <div class="flex md:hidden">
                <div
                  class="relative bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 shadow-sm rounded-l-3xl rounded-tr-3xl"
                >
                  <img
                    src="/assets/img/company.png"
                    alt="Compete"
                    class="object-contain w-6/12 h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
            <!-- Search for small screens -->
            <div class="flex flex-col md:hidden items-center">
              <input
                type="text"
                placeholder="Search Opportunities"
                class="w-full px-4 py-3 border shadow-sm rounded-md z-[1] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <!-- Profile Section -->
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
              to="/companies"
              class="bg-blue-800 text-white px-4 py-3 rounded-full hover:bg-blue-700 flex items-center justify-center space-x-2"
            >
              <Search class="w-4 md:w-5 h-4 md:h-5 mr-2" />
              <span class="text-xs md:text-base">Find Company</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Section -->
        <div
          class="hidden relative md:flex justify-center items-center md:ml-20 mt-10"
        >
          <!-- Main Image -->
          <div class="relative">
            <div
              class="bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 p-16 rounded-full shadow-lg"
            >
              <img
                src="/assets/img/company.png"
                alt="Compete"
                class="w-full h-auto rounded-b-full rounded-tl-[2222px]"
              />
            </div>
          </div>

          <!-- Floating Elements with Representable Background Colors -->
          <div class="absolute top-20 left-0 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-80 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-yellow-200 flex items-center justify-center rounded-md"
              >
                <StarIcon class="w-6 h-6 text-yellow-500" />
              </div>
              <span class="font-semibold text-sm">Gain Industry Insights</span>
            </div>
          </div>

          <div class="absolute top-10 right-28 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-80 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-pink-200 flex items-center justify-center rounded-md"
              >
                <Users class="w-6 h-6 text-pink-500" />
              </div>
              <span class="font-semibold text-sm">Networking Events</span>
            </div>
          </div>

          <div class="absolute top-56 right-0 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-80 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md"
              >
                <DollarSign class="w-6 h-6 text-blue-500" />
              </div>
              <span class="font-semibold text-sm">Job Offers</span>
            </div>
          </div>

          <div class="absolute bottom-20 left-5 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-80 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-green-200 flex items-center justify-center rounded-md"
              >
                <DollarSign class="w-6 h-6 text-green-500" />
              </div>
              <span class="font-semibold text-sm">Salary Insights</span>
            </div>
          </div>

          <div class="absolute bottom-24 right-10 floating-card">
            <div
              class="flex items-center space-x-2 p-2 bg-white bg-opacity-80 rounded-lg shadow-lg"
            >
              <div
                class="w-10 h-10 bg-purple-200 flex items-center justify-center rounded-md"
              >
                <Code class="w-6 h-6 text-purple-500" />
              </div>
              <span class="font-semibold text-sm">Tech Events</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Opportunity Carousels -->
    <!-- <div>
      <CompetitionCommonShowcase />
      <CompetitionCommonCompetitionList
        title="Featured Opportunities"
        description="Check out the curated opportunities handpicked for you from top organizations."
        :items="opportunityItems"
      />
      <CompetitionCommonPopularOpportunities />
    </div> -->
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
