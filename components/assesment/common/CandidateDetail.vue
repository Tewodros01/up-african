<script setup>
import {
  XCircle,
  CheckCircle,
  Phone,
  Mail,
  Linkedin,
  Github,
  Facebook,
  Twitter,
  LineChart,
  Star,
  HelpCircle,
} from "lucide-vue-next";
import { Calendar, Download } from "lucide-vue-next";
import { Clock } from "lucide-vue-next";
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  email: String,
  fields: Array,
  profileImage: String,
  overallScore: Number,
  overallRanking: Number,
  rankingPercentage: Number,
  timeSec: Number,
  bestTime: Number,
  finishTime: Number,
  totalQuestions: Number,
  attemptedQuestions: Number,
  correctQuestions: Number,
  invitedDate: String,
  completedDate: String,
  source: String,
  proctoringStatus: String,
  isOpen: Boolean,
  onClose: Function,
});
</script>

<template>
  <div
    :class="{
      'fixed inset-0  z-50 flex items-end md:items-center justify-center transition-transform transform-gpu duration-300': true,
      'translate-y-0': isOpen,
      'translate-y-full md:translate-y-0': !isOpen,
    }"
  >
    <div
      :class="{
        'p-0 rounded-t-lg transition-transform transform-gpu duration-300 md:rounded-lg bg-white w-full md:w-[60rem] md:max-h-[60vh]': true,
        'translate-y-0': isOpen,
        'translate-y-full md:translate-y-[100vh]': !isOpen,
      }"
    >
      <div class="bg-white rounded-lg p-6 shadow-md">
        <div class="flex items-center justify-between border-b pb-4 mb-4">
          <h2 class="text-2xl font-semibold text-gray-800">
            Candidate Profile
          </h2>
          <div class="flex items-center">
            <button class="text-gray-400 hover:text-gray-600" @click="onClose">
              <XCircle size="24" />
            </button>
          </div>
        </div>
        <div class="p-6 max-h-[60vh] overflow-y-auto">
          <div class="flex justify-between items-center mb-6">
            <div class="flex items-center">
              <img
                class="w-16 h-16 rounded-full mr-4"
                :src="profileImage"
                :alt="`${name}'s profile`"
              />
              <div>
                <h2 class="text-lg font-semibold flex items-center">
                  {{ name }} <CheckCircle class="text-green-600 ml-2" />
                </h2>
                <p class="text-gray-500">{{ email }}</p>
                <div class="flex space-x-2 mt-2">
                  <Phone class="text-gray-500" />
                  <Mail class="text-gray-500" />
                  <Linkedin class="text-gray-500" />
                  <Github class="text-gray-500" />
                  <Facebook class="text-gray-500" />
                  <Twitter class="text-gray-500" />
                </div>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-600 flex items-center">
                <Calendar class="mr-1" /> Invited: {{ invitedDate }}
              </p>
              <p class="text-sm text-gray-600 flex items-center">
                <Calendar class="mr-1" /> Completed: {{ completedDate }}
              </p>
              <p class="text-sm text-gray-600 flex items-center">
                <Mail class="mr-1" /> Source: {{ source }}
              </p>
              <p class="text-sm text-red-500 flex items-center">
                Proctoring status: {{ proctoringStatus }}
              </p>
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div class="flex space-x-2">
              <span
                v-for="(field, index) in fields"
                :key="index"
                class="text-xs text-gray-600 bg-gray-200 rounded-full px-2 py-1"
              >
                {{ field }}
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <p class="text-lg text-gray-600">Overall Score</p>
            </div>
            <div class="flex justify-end">
              <button
                class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <Download class="mr-2" /> Download Report
              </button>
            </div>
          </div>
          <div class="flex mt-4">
            <div
              class="w-full rounded-box border mb-8 flex-wrap overflow-hidden flex"
            >
              <div class="py-4 px-5 border-r">
                <h4 class="text-[#1C4980] text-[0.875rem] font-semibold mb-4">
                  Overall Score
                </h4>
                <div class="flex gap-3 items-center">
                  <div class="p-[0.6rem] rounded-lg bg-[#EBE8FD]">
                    <Star class="text-blue-500" size="24" />
                  </div>
                  <h4 class="font-bold text-xl text-[#1C4980]">
                    {{ overallScore }}
                  </h4>
                </div>
              </div>
              <div class="py-4 px-5 border-r flex-auto">
                <h4 class="text-[#1C4980] text-[0.875rem] font-semibold mb-4">
                  Overall Ranking
                </h4>
                <div class="flex">
                  <div class="border-r pr-4 flex gap-3 items-center">
                    <div>
                      <LineChart class="text-purple-500" size="24" />
                    </div>
                    <div class="flex flex-col">
                      <h4
                        class="font-bold text-xl text-[#1C4980] flex items-center gap-1"
                      >
                        {{ overallRanking }}
                        <span class="text-[#05C165] text-xs">
                          +{{ rankingPercentage }}%
                        </span>
                      </h4>
                      <p class="text-xs font-medium text-[#1C4980]">
                        Percentile
                      </p>
                    </div>
                  </div>
                  <div class="border-l pl-4 flex gap-3 items-center">
                    <div class="flex flex-col">
                      <h4
                        class="font-bold text-xl text-[#1C4980] flex items-center gap-1"
                      >
                        {{ timeSec }}
                        <span class="text-[#05C165] text-xs">sec</span>
                      </h4>
                      <p class="text-xs font-medium text-[#1C4980]">Time</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-4 px-5 border-r flex-auto">
                <h4 class="text-[#1C4980] text-[0.875rem] font-semibold mb-4">
                  Best Time
                </h4>
                <div class="flex">
                  <div class="border-r pr-4 flex gap-3 items-center">
                    <div>
                      <Clock class="text-pink-500" size="24" />
                    </div>
                    <div class="flex flex-col">
                      <h4
                        class="font-bold text-xl text-[#1C4980] flex items-center gap-1"
                      >
                        {{ bestTime }}
                        <span class="text-[#05C165] text-xs">sec</span>
                      </h4>
                      <p class="text-xs font-medium text-[#1C4980]">
                        Best Time
                      </p>
                    </div>
                  </div>
                  <div class="border-l pl-4 flex gap-3 items-center">
                    <div class="flex flex-col">
                      <h4
                        class="font-bold text-xl text-[#1C4980] flex items-center gap-1"
                      >
                        {{ finishTime }}
                        <span class="text-[#05C165] text-xs">sec</span>
                      </h4>
                      <p class="text-xs font-medium text-[#1C4980]">
                        Finish Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-4 px-5">
                <h4 class="text-[#1C4980] text-[0.875rem] font-semibold mb-4">
                  Total Questions
                </h4>
                <div class="flex gap-3 items-center">
                  <div>
                    <HelpCircle class="text-blue-500" size="24" />
                  </div>
                  <div class="flex flex-col">
                    <h4
                      class="font-bold text-xl text-[#1C4980] flex items-center gap-1"
                    >
                      {{ totalQuestions }}
                      <span class="text-[#05C165] text-xs">total</span>
                    </h4>
                    <p class="text-xs font-medium text-[#1C4980]">Questions</p>
                  </div>
                </div>
              </div>
              <div class="py-4 px-5">
                <h4 class="text-[#1C4980] text-[0.875rem] font-semibold mb-4">
                  Attempted Questions
                </h4>
                <div class="flex gap-3 items-center">
                  <div>
                    <CheckCircle class="text-green-500" size="24" />
                  </div>
                  <div class="flex flex-col">
                    <h4
                      class="font-bold text-xl text-[#1C4980] flex items-center gap-1"
                    >
                      {{ attemptedQuestions }}
                      <span class="text-[#05C165] text-xs">attempted</span>
                    </h4>
                    <p class="text-xs font-medium text-[#1C4980]">Questions</p>
                  </div>
                </div>
              </div>
              <div class="py-4 px-5">
                <h4 class="text-[#1C4980] text-[0.875rem] font-semibold mb-4">
                  Correct Questions
                </h4>
                <div class="flex gap-3 items-center">
                  <div>
                    <CheckCircle class="text-green-500" size="24" />
                  </div>
                  <div class="flex flex-col">
                    <h4
                      class="font-bold text-xl text-[#1C4980] flex items-center gap-1"
                    >
                      {{ correctQuestions }}
                      <span class="text-[#05C165] text-xs">correct</span>
                    </h4>
                    <p class="text-xs font-medium text-[#1C4980]">Questions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
