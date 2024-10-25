<script setup>
import { defineProps } from "vue";
import { UserCheck, Briefcase, FileText, Users } from "lucide-vue-next";

const props = defineProps({
  totalEmployers: {
    type: Number,
    required: true,
  },
  totalJobsPosted: {
    type: Number,
    required: true,
  },
  totalCandidates: {
    type: Number,
    required: true,
  },
  totalInterviews: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white space-y-4 flex flex-grow flex-col px-2">
    <div class="border-2 border-gray-200 rounded-lg border-dashed p-4">
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <span class="font-semibold text-gray-700 text-[0.8rem]">
            <UserCheck class="inline-block mr-2 w-4 h-4" /> Total Employers
            Hired
          </span>
          <span class="font-semibold text-gray-700 text-[0.8rem]">{{
            totalEmployers
          }}</span>
        </div>
        <div class="flex justify-between items-center text-[0.8rem]">
          <span class="font-semibold text-gray-700 text-[0.8rem]">
            <Briefcase class="inline-block mr-2 w-4 h-4" /> Total Jobs Posted
          </span>
          <span class="font-semibold text-gray-700 text-[0.8rem]">{{
            totalJobsPosted
          }}</span>
        </div>
        <div class="flex justify-between items-center text-[0.8rem]">
          <span class="font-semibold text-gray-700 text-[0.8rem]">
            <Users class="inline-block mr-2 w-4 h-4" /> Total Candidates
          </span>
          <span class="font-semibold text-gray-700 text-[0.8rem]">{{
            totalCandidates
          }}</span>
        </div>
        <div class="flex justify-between items-center text-[0.8rem]">
          <span class="font-semibold text-gray-700 text-[0.8rem]">
            <FileText class="inline-block mr-2 w-4 h-4" /> Total Interviews
            Conducted
          </span>
          <span class="font-semibold text-gray-700 text-[0.8rem]">{{
            totalInterviews
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
