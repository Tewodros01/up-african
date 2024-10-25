<script setup>
import { ref } from "vue";

const recordingTime = ref("00:08");
</script>

<template>
  <div class="flex flex-col items-center w-full min-h-screen bg-gray-100">
    <AssesmentAssessmentHeader />
    <div class="flex flex-grow w-full h-[calc(100vh-5rem)]">
      <!-- Question Section -->
      <div class="flex flex-col p-4 w-full lg:w-2/4 border-r overflow-y-auto">
        <div class="mb-4 flex justify-between items-center">
          <h2 class="text-lg font-semibold text-gray-600">Question 2</h2>
          <p class="text-sm text-gray-500">Marks: 2</p>
        </div>
        <p class="mb-8">
          Could you please describe a memorable travel experience you've had?
          Share the destination, the purpose of the trip, and some of the
          highlights or challenges you encountered during your journey.
        </p>
        <div class="flex justify-center">
          <img
            src="/assets/img/boystudent.png"
            alt="Chart"
            class="max-w-full h-auto"
          />
        </div>
      </div>
      <!-- Answer Section -->
      <div class="flex flex-col p-4 w-full lg:w-2/4 bg-white overflow-y-auto">
        <p class="text-sm font-semibold mb-4 text-gray-600">Answer</p>
        <p class="mb-8">
          Please record your answer in 60 seconds and click submit.
        </p>
        <div class="flex flex-col items-center justify-center">
          <div class="w-full h-72 bg-yellow-300 rounded-2xl mb-4 p-4"></div>
          <span class="px-4 py-2 text-zinc-600 rounded-full">{{
            recordingTime
          }}</span>
          <button
            class="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
          >
            Stop Recording
          </button>
        </div>
      </div>
    </div>
    <div
      class="w-full px-4 py-2 text-sm bg-white border-t flex justify-between fixed bottom-0 left-0"
    >
      <button
        class="px-4 py-2 bg-red-500 text-white rounded-sm hover:bg-red-600"
      >
        Finish
      </button>
      <div class="flex gap-4">
        <button class="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">
          Skip
        </button>
        <button class="px-4 py-2 bg-green-500 text-white rounded-md">
          Next
        </button>
      </div>
    </div>
  </div>
</template>
