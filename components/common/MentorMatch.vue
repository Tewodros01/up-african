<script setup>
import { ref } from "vue";

const showMentorMatchScreen = ref(false);

const toggleMentorMatchScreen = () => {
  showMentorMatchScreen.value = !showMentorMatchScreen.value;
};
</script>

<template>
  <div>
    <button
      class="flex items-center gap-2 text-xs border border-blue-300 bg-blue-100 text-blue-700 py-1 px-4 rounded-full"
      @click="toggleMentorMatchScreen"
    >
      <span class="icon">
        <div class="relative w-6 h-6 bg-zinc-950 rounded-full">
          <!-- Outer Circle Segments -->
          <div
            class="absolute inset-0 border border-solid border-t-transparent border-l-transparent border-blue-100 rounded-full animate-spin-vertical-3d-slow"
          ></div>
          <div
            class="absolute inset-0 border border-solid border-b-transparent border-r-transparent border-blue-200 rounded-full animate-spin-vertical-3d"
          ></div>

          <!-- Inner Circle Segments -->
          <div
            class="absolute inset-1 border border-solid border-t-transparent border-r-transparent border-green-100 rounded-full animate-spin-vertical-3d-slow"
          ></div>
          <div
            class="absolute inset-1 border border-solid border-b-transparent border-l-transparent border-green-200 rounded-full animate-spin-vertical-3d"
          ></div>

          <!-- Core Circle Segments -->
          <div
            class="absolute inset-2 border border-solid border-t-transparent border-r-transparent border-red-100 rounded-full animate-spin-vertical-3d-slow"
          ></div>
          <div
            class="absolute inset-2 border border-solid border-b-transparent border-l-transparent border-red-200 rounded-full animate-spin-vertical-3d"
          ></div>

          <!-- Scatter Flower Effect -->
          <div
            class="absolute top-0 left-0 w-1 h-1 bg-yellow-400 rounded-full animate-bounce"
          ></div>
          <div
            class="absolute top-0 right-0 w-1 h-1 bg-yellow-500 rounded-full animate-bounce"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-1 h-1 bg-yellow-600 rounded-full animate-bounce"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-1 h-1 bg-yellow-700 rounded-full animate-bounce"
          ></div>
        </div>
      </span>
      Mentor Match
    </button>

    <!-- Background Overlay -->
    <div
      v-if="showMentorMatchScreen"
      class="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
      @click="toggleMentorMatchScreen"
    ></div>

    <!-- Mentor Match Screen -->
    <div
      v-if="showMentorMatchScreen"
      class="fixed top-16 left-0 w-full bg-white shadow-lg z-50"
    >
      <div class="container mx-auto p-4">
        <div class="flex flex-col w-full items-center">
          <div class="w-full flex justify-between items-center mb-4">
            <div class="text-lg font-bold flex items-center">
              <span class="icon mr-2">
                <div class="relative w-12 h-12 bg-zinc-950 rounded-full">
                  <!-- Outer Circle Segments -->
                  <div
                    class="absolute inset-0 border border-solid border-t-transparent border-l-transparent border-blue-100 rounded-full animate-spin-vertical-3d-slow"
                  ></div>
                  <div
                    class="absolute inset-0 border border-solid border-b-transparent border-r-transparent border-blue-200 rounded-full animate-spin-vertical-3d"
                  ></div>

                  <!-- Inner Circle Segments -->
                  <div
                    class="absolute inset-1 border border-solid border-t-transparent border-r-transparent border-green-100 rounded-full animate-spin-vertical-3d-slow"
                  ></div>
                  <div
                    class="absolute inset-1 border border-solid border-b-transparent border-l-transparent border-green-200 rounded-full animate-spin-vertical-3d"
                  ></div>

                  <!-- Core Circle Segments -->
                  <div
                    class="absolute inset-2 border border-solid border-t-transparent border-r-transparent border-red-100 rounded-full animate-spin-vertical-3d-slow"
                  ></div>
                  <div
                    class="absolute inset-2 border border-solid border-b-transparent border-l-transparent border-red-200 rounded-full animate-spin-vertical-3d"
                  ></div>

                  <!-- Scatter Flower Effect -->
                  <div
                    class="absolute top-0 left-0 w-1 h-1 bg-yellow-400 rounded-full animate-bounce"
                  ></div>
                  <div
                    class="absolute top-0 right-0 w-1 h-1 bg-yellow-500 rounded-full animate-bounce"
                  ></div>
                  <div
                    class="absolute bottom-0 left-0 w-1 h-1 bg-yellow-600 rounded-full animate-bounce"
                  ></div>
                  <div
                    class="absolute bottom-0 right-0 w-1 h-1 bg-yellow-700 rounded-full animate-bounce"
                  ></div>
                </div>
              </span>
              Get matched with mentors relevant to you.
            </div>
            <button @click="toggleMentorMatchScreen" class="text-xl font-bold">
              &times;
            </button>
          </div>
          <div class="text-sm mb-4 w-full text-left">Step 1 of 4</div>
          <div class="mb-4 w-full">
            <div class="mb-2 text-center">What is your main aim right now?</div>
            <div class="flex flex-wrap gap-2 justify-center">
              <button
                class="px-4 py-2 border border-dashed border-gray-400 rounded-full"
              >
                Finding a job
              </button>
              <button
                class="px-4 py-2 border border-dashed border-gray-400 bg-blue-500 text-white rounded-full"
              >
                College entrance prep
              </button>
              <button
                class="px-4 py-2 border border-dashed border-gray-400 rounded-full"
              >
                Switching careers
              </button>
              <button
                class="px-4 py-2 border border-dashed border-gray-400 rounded-full"
              >
                Upskill and learning
              </button>
              <button
                class="px-4 py-2 border border-dashed border-gray-400 rounded-full"
              >
                Networking
              </button>
              <button
                class="px-4 py-2 border border-dashed border-gray-400 rounded-full"
              >
                Others
              </button>
            </div>
          </div>
          <div class="flex justify-between w-full mt-4">
            <button
              class="px-4 py-2 bg-gray-300 text-black rounded-full flex items-center"
            >
              <span class="icon mr-2">←</span> Previous
            </button>
            <div>
              <button
                class="px-4 py-2 bg-blue-500 text-white rounded-full mr-2"
              >
                Next
              </button>
              <button class="px-4 py-2 bg-gray-300 text-black rounded-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
