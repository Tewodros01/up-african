<script setup>
import { ref } from "vue";

const overallScore = ref(67); // overall score as a percentage
const overallScoreText = ref((overallScore.value / 10).toFixed(1)); // score text in 0.0/10 format
</script>

<template>
  <div class="p-8 bg-gray-100 h-screen flex justify-center items-center">
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
      <h2 class="text-xl font-semibold mb-4">Speech Report</h2>
      <div class="flex justify-between mb-6">
        <div>
          <div class="text-gray-600">Total Question:</div>
          <div class="text-lg font-bold">12</div>
        </div>
        <div>
          <div class="text-gray-600">Question Attempted:</div>
          <div class="text-lg font-bold">12</div>
        </div>
        <div>
          <div class="text-gray-600">Score:</div>
          <div class="text-lg font-bold">100</div>
        </div>
        <div>
          <div class="text-gray-600">Best Time:</div>
          <div class="text-lg font-bold">34 Sec</div>
        </div>
        <div>
          <div class="text-gray-600">Finish Time:</div>
          <div class="text-lg font-bold">22 Aug 2022, 3:40:34</div>
        </div>
      </div>
      <div class="border-t border-gray-200 pt-6">
        <h3 class="text-lg font-semibold mb-4">Overall Performance</h3>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <div class="flex justify-between mb-1">
              <span>Pronunciation</span>
              <span class="text-yellow-600">6/10</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="bg-yellow-600 h-2 rounded-full"
                style="width: 60%"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between mb-1">
              <span>Fluency</span>
              <span class="text-green-600">8/10</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="bg-green-600 h-2 rounded-full"
                style="width: 80%"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between mb-1">
              <span>Grammar</span>
              <span class="text-green-600">9/10</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="bg-green-600 h-2 rounded-full"
                style="width: 90%"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between mb-1">
              <span>Coherence</span>
              <span class="text-red-600">4/10</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-red-600 h-2 rounded-full" style="width: 40%"></div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center mb-6">
          <div class="relative w-32 h-32">
            <svg class="w-full h-full">
              <circle
                class="text-gray-200"
                stroke-width="4"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="50%"
                cy="50%"
              />
              <circle
                class="text-orange-500"
                stroke-width="4"
                :stroke-dasharray="314"
                :stroke-dashoffset="314 - (314 * overallScore) / 100"
                stroke-linecap="round"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="50%"
                cy="50%"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-orange-500 text-xl font-bold">
                {{ overallScoreText }}/10
              </span>
            </div>
          </div>
          <div class="text-xl">Overall Score</div>
        </div>
        <div class="border-t border-gray-200 pt-6">
          <h3 class="text-lg font-semibold mb-4">Question 1:</h3>
          <p class="text-gray-700 mb-6">
            Could you please describe a memorable travel experience you've had?
            Share the destination, the purpose of the trip, and some of the
            highlights or challenges you encountered during your journey.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
