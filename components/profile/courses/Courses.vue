<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">Courses</h2>
    <div class="px-4">
      <div
        v-for="(course, index) in courses"
        :key="index"
        class="bg-white border rounded-lg p-4 shadow-sm flex items-center mb-4"
      >
        <img
          :src="course.image"
          alt="Course Image"
          class="w-32 h-32 rounded-lg mr-4"
        />
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-gray-800">
            {{ course.title }}
          </h3>
          <p class="text-sm text-gray-600 mb-2">
            Enrolled: {{ course.enrolledDate }}
          </p>
          <div class="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div
              class="bg-blue-600 h-1.5 rounded-full"
              :style="{ width: course.progress + '%' }"
            ></div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">{{ course.progress }}%</span>
            <button
              class="px-4 py-1 text-sm text-blue-600 border border-blue-600 rounded-full hover:bg-blue-100"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  {
    image: "/path/to/amex.png",
    title: "American Express Data Analysis",
    enrolledDate: "08 Jul 2024",
    progress: 4,
  },
];
</script>
