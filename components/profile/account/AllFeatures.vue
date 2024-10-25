<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">All Features</h2>
    <div class="px-4 mb-4 overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th
              class="px-4 py-2 text-left text-gray-700 border-b border-gray-200"
            >
              Feature
            </th>
            <th
              class="px-4 py-2 text-left text-gray-700 border-b border-gray-200"
            >
              Availability
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(feature, index) in features" :key="index">
            <tr class="border-t border-gray-200">
              <td
                class="px-4 py-2 flex items-center justify-between border-r border-gray-200"
              >
                <div class="flex items-center space-x-2">
                  <span class="text-gray-800">{{ feature.name }}</span>
                  <Info v-if="feature.info" class="w-4 h-4 text-gray-400" />
                </div>
                <button
                  v-if="feature.expandable"
                  @click="toggleExpand(index)"
                  class="text-gray-400 focus:outline-none"
                >
                  <span
                    :class="{ 'rotate-180': feature.expanded }"
                    class="transform transition-transform"
                  >
                    ▼
                  </span>
                </button>
              </td>
              <td class="px-4 py-2 text-gray-700">
                <span v-if="feature.checkmark" class="text-green-500">✔</span>
                <span v-if="feature.dash" class="text-gray-500">-</span>
                <span v-else>{{ feature.availability }}</span>
              </td>
            </tr>
            <tr
              v-if="feature.expanded"
              v-for="(subFeature, subIndex) in feature.subFeatures"
              :key="subIndex"
              class="bg-gray-50 border-t border-gray-200"
            >
              <td class="px-8 py-2 border-r border-gray-200 text-gray-600">
                {{ subFeature.name }}
              </td>
              <td class="px-4 py-2 text-gray-700">
                <span v-if="subFeature.checkmark" class="text-green-500"
                  >✔</span
                >
                <span v-if="subFeature.dash" class="text-gray-500">-</span>
                <span v-else>{{ subFeature.availability }}</span>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Info } from "lucide-vue-next";

const features = ref([
  {
    name: "Types of opportunities listings",
    availability: "All",
    expandable: true,
    expanded: false,
    subFeatures: [
      { name: "General Competitions / Case Challenges", checkmark: true },
      { name: "Quizzes & Online Treasure Hunts", checkmark: true },
      { name: "Hackathons & Coding Challenges", checkmark: true },
      { name: "Scholarships", checkmark: true },
      { name: "Jobs", checkmark: true },
      { name: "Internships", checkmark: true },
    ],
  },
  {
    name: "Microsite with custom branding (No Code)",
    checkmark: true,
    expandable: false,
    expanded: false,
  },
  {
    name: "Ad Free Microsite (No featured opportunities section)",
    dash: true,
    expandable: false,
    expanded: false,
  },
  {
    name: "Microsite with custom branding (No Code)",
    checkmark: true,
    expandable: false,
    expanded: false,
  },
  {
    name: "Customize Registration Form",
    checkmark: true,
    expandable: false,
    expanded: false,
  },
  {
    name: "Private Listings - Best for internal teams, restricted audience and self sourcing.",
    availability: "Unlimited",
    info: true,
    expandable: false,
    expanded: false,
  },
  {
    name: "View & Download Data for Private Listings",
    availability: "Unlimited",
    info: true,
    expandable: false,
    expanded: false,
  },
  {
    name: "Quizzing Platform",
    checkmark: true,
    info: true,
    expandable: false,
    expanded: false,
  },
  {
    name: "Live Coding Platform",
    checkmark: true,
    info: true,
    expandable: false,
    expanded: false,
  },
]);

const toggleExpand = (index) => {
  features.value[index].expanded = !features.value[index].expanded;
};
</script>
