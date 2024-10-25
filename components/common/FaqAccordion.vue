<script setup>
import { ref } from 'vue';

const openQuestion = ref(null);

const toggle = question => {
  openQuestion.value = openQuestion.value === question ? null : question;
};
</script>

<template>
  <div class="mx-auto py-8 max-w-7xl px-10 flex flex-col items-start">
    <div class="w-full">
      <div class="mb-6">
        <h3 class="text-3xl font-bold text-gray-900">
          Frequently Asked <span class="text-indigo-600">Questions</span>
        </h3>
      </div>

      <div class="space-y-4 mb-6">
        <!-- Question 1 -->
        <div class="border border-gray-200 rounded-md">
          <button
            @click="toggle(1)"
            class="w-full flex justify-between items-center p-4 bg-gray-50 rounded-md focus:outline-none transition-colors duration-200 hover:bg-gray-100"
          >
            <span class="text-lg font-medium text-gray-900"
              >What is UpAfrican Pro?</span
            >
            <svg
              :class="{ 'rotate-180': openQuestion === 1 }"
              class="w-6 h-6 transform transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <transition
            name="faq"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <div
              v-if="openQuestion === 1"
              class="p-4 text-gray-700 bg-indigo-50 transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
              :class="openQuestion === 1 ? 'max-h-40' : 'max-h-0'"
            >
              <ul class="list-disc pl-5 space-y-2">
                <li>Access to 50+ courses across domains</li>
                <li>15% off on mentorship sessions</li>
                <li>Solutions to tests in the Practice section</li>
                <li>Free access to masterclasses worth INR 2,400+</li>
                <li>Interview prep tools for 100+ companies</li>
              </ul>
            </div>
          </transition>
        </div>

        <!-- Question 2 -->
        <div class="border border-gray-200 rounded-md">
          <button
            @click="toggle(2)"
            class="w-full flex justify-between items-center p-4 bg-gray-50 rounded-md focus:outline-none transition-colors duration-200 hover:bg-gray-100"
          >
            <span class="text-lg font-medium text-gray-900"
              >How can I sign up for UpAfrican Pro?</span
            >
            <svg
              :class="{ 'rotate-180': openQuestion === 2 }"
              class="w-6 h-6 transform transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <transition
            name="faq"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <div
              v-if="openQuestion === 2"
              class="p-4 text-gray-700 bg-indigo-50 transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
              :class="openQuestion === 2 ? 'max-h-40' : 'max-h-0'"
            >
              <p>
                To sign up, visit the official website, choose the UpAfrican Pro
                plan, and follow the registration process. Payment can be made
                via various methods.
              </p>
            </div>
          </transition>
        </div>

        <!-- Question 3 -->
        <div class="border border-gray-200 rounded-md">
          <button
            @click="toggle(3)"
            class="w-full flex justify-between items-center p-4 bg-gray-50 rounded-md focus:outline-none transition-colors duration-200 hover:bg-gray-100"
          >
            <span class="text-lg font-medium text-gray-900"
              >What are the offerings under UpAfrican Pro?</span
            >
            <svg
              :class="{ 'rotate-180': openQuestion === 3 }"
              class="w-6 h-6 transform transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <transition
            name="faq"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <div
              v-if="openQuestion === 3"
              class="p-4 text-gray-700 bg-indigo-50 transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
              :class="openQuestion === 3 ? 'max-h-40' : 'max-h-0'"
            >
              <p>
                UpAfrican Pro offers a variety of features including exclusive
                content, discounts on mentorship, mock interview sessions, and
                more tools for career enhancement.
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom transition for the FAQ section */
.faq-enter-active,
.faq-leave-active {
  transition: max-height 0.3s ease-in-out;
}
.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
}
.faq-enter-to,
.faq-leave-from {
  max-height: 40rem; /* Adjust based on your content */
  opacity: 1;
}
</style>
