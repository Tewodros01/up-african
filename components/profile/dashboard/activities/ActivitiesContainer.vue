<template>
  <div class="p-8 bg-white rounded-lg shadow-lg max-w-5xl mx-auto">
    <h2 class="text-gray-800 mb-4 text-lg font-bold flex items-center">
      Streaks <span class="ml-2 text-sm">📅</span>
    </h2>

    <!-- Month and Year Grid -->
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-16 gap-y-10 mb-8">
      <div v-for="(month, index) in months" :key="index" class="text-center">
        <div class="text-gray-600 text-sm mb-2">{{ month }}, {{ selectedYear }}</div>
        <div class="grid grid-cols-7 gap-1 mx-auto">
          <div v-for="(day, dayIndex) in getMonthData(index)" :key="dayIndex" class="w-3.5 h-3.5 rounded bg-gray-200"
            :class="getColor(day.count)" :title="day.date ? `${formatDate(day.date)}: ${day.count} activities` : ''">
          </div>
        </div>
      </div>
    </div>

    <!-- Color Legend -->
    <div class="flex items-center mb-6 text-xs text-gray-600">
      <span class="mr-2">Activity:</span>
      <div class="w-4 h-4 rounded bg-blue-100 mr-1"></div>
      <div class="w-4 h-4 rounded bg-blue-300 mr-1"></div>
      <div class="w-4 h-4 rounded bg-blue-500 mr-1"></div>
      <div class="w-4 h-4 rounded bg-blue-700 mr-1"></div>
    </div>

    <!-- Streak Information -->
    <div class="flex justify-between items-center text-sm text-gray-600">
      <span>Current Streak <strong class="text-gray-800">{{ currentStreak }} Days</strong></span>
      <span>Max Streak <strong class="text-gray-800">{{ maxStreak }} Days</strong></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { format, startOfMonth, endOfMonth, addDays } from 'date-fns';

const selectedYear = 2024;
const currentStreak = ref(1);
const maxStreak = ref(7);
const heatmapData = ref([]);
const months = [
  "Oct", "Nov", "Dec", "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul", "Aug", "Sep"
];

// Function to format date in a readable format
function formatDate(date) {
  return format(new Date(date), 'MMM dd, yyyy');
}

// Function to get color based on the number of contributions
function getColor(count) {
  if (count === 0) return 'bg-gray-200';
  if (count === 1) return 'bg-blue-100';
  if (count === 2) return 'bg-blue-300';
  if (count === 3) return 'bg-blue-500';
  return 'bg-blue-700';
}

// Function to generate heatmap data for the selected year
function generateHeatmapData(year) {
  let data = [];

  for (let month = 0; month < 12; month++) {
    const monthData = [];
    let currentDate = startOfMonth(new Date(year, month, 1));
    const lastDay = endOfMonth(currentDate);

    // Add actual days of the month
    while (currentDate <= lastDay) {
      const randomCount = Math.floor(Math.random() * 5); // Replace with actual data source
      monthData.push({
        date: currentDate,
        count: randomCount,
      });
      currentDate = addDays(currentDate, 1);
    }

    data.push(monthData);
  }

  heatmapData.value = data;
}

// Function to get data for each month
function getMonthData(monthIndex) {
  return heatmapData.value[monthIndex] || [];
}

// Initial data generation
generateHeatmapData(selectedYear);
</script>

