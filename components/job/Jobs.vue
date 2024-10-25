<script setup lang="ts">
import { onMounted } from 'vue';
import { useJobStore } from '~/stores/useJobStore';
import {
  Bookmark,
  Briefcase,
  DollarSign,
  Search,
  ArrowLeft,
  Award,
  BarChart,
  Diamond,
  X,
} from 'lucide-vue-next';

const jobStore = useJobStore();
const {
  selectedJob,
  handleJobClick,
  handleCloseSidebar,
  fetchJobs,
  loading,
  error,
} = jobStore;

const handleClick = () => {
  console.log('Ask now clicked');
  // Add additional logic here if needed
};
onMounted(() => {
  fetchJobs(); // Fetch jobs when the component is mounted
});
</script>

<template>
  <div
    class="max-w-7xl mb-12 mx-auto flex w-full items-start gap-x-8 px-4 pt-16 py-5 sm:px-6 lg:px-8"
  >
    <aside class="fixed top-30 hidden w-60 shrink-0 xl:block">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6 gap-4">
          <!-- Promotion Section -->
          <div
            class="relative h-24 w-full bg-gray-200 rounded-t-lg flex items-center justify-center"
          >
            <Briefcase class="h-12 w-12 text-indigo-600" />
          </div>
          <div class="mt-4">
            <h2 class="text-base text-gray-700">Premium access</h2>
            <ul class="text-sm text-gray-700 mt-2 space-y-2">
              <li class="flex items-center gap-2">
                <Award class="h-5 w-5 text-yellow-500" />
                Find jobs with AI
              </li>
              <li class="flex items-center gap-2">
                <Briefcase class="h-5 w-5 text-blue-500" />
                Market Trends
              </li>
              <li class="flex items-center gap-2">
                <BarChart class="h-5 w-5 text-green-500" />
                My Career Insights
              </li>
            </ul>
          </div>
          <div
            class="w-full mx-auto rounded-lg mt-1 bg-gradient-to-r from-yellow-100 to-blue-300 mb-2 border-yellow-400"
          >
            <button
              type="button"
              class="w-full rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
            >
              Explore Premium
            </button>
          </div>
        </div>
      </div>
    </aside>

    <main class="md:pl-2 flex-1 md:mx-64">
      <!-- Jobs PREMIUM Area -->
      <div
        class="w-full mx-auto rounded-lg bottom-2 bg-gradient-to-r from-yellow-100 to-blue-300 mb-2 p-4 border-yellow-600"
      >
        <div class="flex justify-between text-yellow-600 items-center">
          <div class="flex gap-2">
            <Diamond class="h-4 w-4" />
            <span class="text-sm font-medium text-gray-600">PREMIUM</span>
          </div>
          <button class="text-gray-900 hover:text-gray-600 transition">
            <X />
          </button>
        </div>

        <h2 class="mt-2 text-lg font-semibold text-gray-700 leading-snug">
          Find me Full Stack Engineer jobs in my network
        </h2>

        <button
          @click="handleClick"
          class="mt-6 flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-200 hover:bg-yellow-400 text-gray-900 text-sm font-medium transition focus:outline-none"
        >
          <span>✨</span>
          <span>Ask now</span>
        </button>
      </div>

      <!-- Loading and Error States -->
      <div
        v-if="jobStore.loading"
        class="grid grid-cols-1 2xl:grid-cols-3 gap-6 py-2"
      >
        <JobSkeletonLoader v-for="n in 6" :key="n" />
      </div>
      <div v-if="error" class="text-center text-sm text-red-500">
        {{ error }}
      </div>

      <!-- Jobs List Grid -->
      <div
        v-if="!loading && !error"
        class="grid grid-cols-1 2xl:grid-cols-3 gap-6 py-2"
      >
        <div
          v-for="(job, index) in jobStore.filteredJobs"
          :key="job.id"
          @click="handleJobClick(job)"
          class="overflow-hidden rounded-lg bg-white shadow cursor-pointer"
          :class="{ 'border border-indigo-600': index === 0 }"
        >
          <div class="px-4 py-5 sm:p-6">
            <!-- Job Title, Company, Location -->
            <div class="flex gap-x-4 justify-between">
              <div class="flex gap-x-2">
                <div
                  class="rounded w-12 h-12 bg-gray-200 flex items-center justify-center"
                >
                  <Briefcase class="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-gray-900">
                    {{ job.title }}
                  </h4>
                  <p class="text-xs text-gray-500">{{ job.company }}</p>
                  <p class="text-xs text-gray-500">{{ job.location }}</p>
                </div>
              </div>

              <!-- Save Job Action -->
              <div class="flex items-start">
                <button
                  type="button"
                  class="text-sm font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
                >
                  <Bookmark class="h-5 w-5" />
                </button>
              </div>
              <!-- Save Job Action End -->
            </div>
            <!-- Job Title, Company, Location End -->

            <!-- Tags -->
            <div class="flex gap-x-2 mt-2">
              <span
                v-for="tag in job.tags"
                :key="tag"
                class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-700 ring-1 ring-inset ring-gray-600/10"
              >
                {{ tag }}
              </span>
            </div>
            <!-- Tags End -->

            <!-- Salary & Time -->
            <div class="flex items-center gap-x-2 mt-2 justify-between">
              <div class="flex items-center gap-x-2">
                <DollarSign class="h-6 w-6 text-indigo-600" />
                <span class="text-sm text-gray-500">{{ job.salary }}</span>
              </div>
              <span class="text-sm text-gray-400">{{ job.postedDate }}</span>
            </div>
            <!-- Salary & Time End -->
          </div>
        </div>
      </div>
      <!-- Jobs List Grid End -->
    </main>

    <div v-if="jobStore.selectedJob">
      <div
        class="fixed inset-0 bg-black bg-opacity-50 z-[1]"
        @click="jobStore.handleCloseSidebar"
      ></div>
      <div
        class="fixed top-0 right-0 z-[25] h-full w-5/6 md:w-3/6 bg-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0"
      >
        <div class="flex gap-2 items-center p-4 border-b-2 bg-white">
          <div
            class="flex rounded-full bg-gray-100 w-10 h-10 items-center justify-center"
          >
            <button
              @click="jobStore.handleCloseSidebar"
              class="text-gray-400 hover:text-gray-600"
            >
              <ArrowLeft class="text-lg p-1" />
            </button>
          </div>
          <div class="flex h-10 items-center justify-center">
            <h2 class="text-sm text-gray-600 font-bold">Job Detail</h2>
          </div>
        </div>
        <div class="overflow-y-auto h-full custom-scrollbar mb-5 mr-4">
          <JobDetail :job="jobStore.selectedJob" />
        </div>
      </div>
    </div>

    <JobFilterSidebar />
  </div>
</template>
