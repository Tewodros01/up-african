<script setup lang="ts">
import { defineProps } from "vue";
import { useJobStore } from "~/stores/useJobStore";
import { Briefcase, Share2, Bookmark, DollarSign } from "lucide-vue-next";
import Divider from "../common/Divider";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const jobStore = useJobStore();

const saveJob = () => {
  jobStore.saveJob(props.job);
};

const shareJob = () => {
  jobStore.shareJob(props.job);
};
</script>

<template>
  <div class="pl-4 py-8 sm:p-6 gap-4 h-full flex flex-col mb-10 z-[25]">
    <div class="flex-1">
      <!-- Job Details -->
      <div class="flex gap-x-4 justify-between">
        <div
          class="rounded w-16 h-16 bg-gray-200 flex items-center justify-center"
        >
          <Briefcase class="h-10 w-10 text-indigo-600" />
        </div>

        <!-- Share Job & Save Job Actions -->
        <div class="flex gap-4 items-start">
          <button
            type="button"
            class="text-sm font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
            @click="shareJob"
          >
            <Share2 class="h-5 w-5" />
          </button>
          <button
            type="button"
            class="text-sm font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
            @click="saveJob"
          >
            <Bookmark class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div class="mt-2">
        <h2 class="text-sm font-semibold text-gray-900">
          {{ props.job.title }}
        </h2>
        <p class="text-xs text-gray-500">
          {{ props.job.company }} - {{ props.job.location }}
        </p>
      </div>
      <!-- Job Details End -->

      <!-- Applications Numbers -->
      <span
        class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs mt-2 text-blue-700 ring-1 ring-inset ring-blue-700/10"
      >
        {{ props.job.applications }}
      </span>
      <!-- Applications Numbers End -->

      <div class="py-5">
        <Divider />
      </div>

      <!-- Job Details, Job Type, Experience, Posted Date -->
      <div class="flex gap-4 flex-col">
        <div class="flex gap-x-4 justify-between">
          <div>
            <h3 class="text-sm text-gray-900 font-semibold mb-2">Job Type</h3>
            <p class="text-sm text-gray-400">{{ props.job.jobType }}</p>
          </div>
          <div>
            <h3 class="text-sm text-gray-900 font-semibold mb-2">Experience</h3>
            <p class="text-sm text-gray-400">{{ props.job.experience }}</p>
          </div>
        </div>
        <div class="flex gap-x-4 justify-between">
          <div>
            <h3 class="text-sm text-gray-900 font-semibold mb-2">Position</h3>
            <p class="text-sm text-gray-400">{{ props.job.title }}</p>
          </div>
          <div>
            <h3 class="text-sm text-gray-900 font-semibold mb-2">
              Date Posted
            </h3>
            <p class="text-sm text-gray-400">{{ props.job.postedDate }}</p>
          </div>
        </div>
      </div>
      <!-- Job Details, Job Type, Experience, Posted Date End -->

      <div class="py-5">
        <Divider />
      </div>

      <!-- Job Description -->
      <div>
        <h3 class="text-sm text-gray-900 font-semibold mb-2">Description</h3>
        <p class="text-sm text-gray-500">{{ props.job.description }}</p>
      </div>
      <!-- Job Description End -->

      <div class="py-5">
        <Divider />
      </div>

      <!-- Base Salary & Apply Button -->
      <div class="flex gap-4 flex-col">
        <div class="flex gap-x-4 justify-between">
          <div>
            <h3 class="text-sm text-gray-900 font-semibold mb-2">
              Base Salary
            </h3>
            <p class="text-sm text-gray-400">{{ props.job.salary }}</p>
          </div>
        </div>
        <button
          type="button"
          class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Apply Now
        </button>
      </div>
      <!-- Base Salary & Apply Button End -->
    </div>
  </div>
</template>
