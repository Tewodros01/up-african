<script setup>
const options = [
  { value: "30", label: "30%" },
  { value: "50", label: "50%" },
  { value: "40", label: "40%" },
  { value: "25", label: "25%" },
];
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
        <p class="mb-4 text-sm">
          Study the graph and select by what percentage the expenditure on
          interest on loans is more than the expenditure on Taxes?
        </p>
        <div class="flex justify-center">
          <img
            src="/assets//img/chart.jfif"
            alt="Chart"
            class="max-w-full h-auto"
          />
        </div>
      </div>
      <!-- Answer Section -->
      <div class="flex flex-col p-4 w-full lg:w-2/4 bg-white overflow-y-auto">
        <p class="text-sm font-semibold mb-4 text-gray-600">Answer</p>
        <div class="space-y-2 text-xs">
          <label
            v-for="option in options"
            :key="option.value"
            class="flex items-center p-2 border rounded-md"
          >
            <input
              type="radio"
              name="answer"
              :value="option.value"
              class="form-radio h-4 w-4 text-blue-500"
            />
            <span class="ml-2">{{ option.label }}</span>
          </label>
        </div>
      </div>
    </div>
    <div
      class="w-full px-4 py-2 text-sm bg-white border-t flex justify-between fixed bottom-0 left-0"
    >
      <button class="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">
        Previous
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
