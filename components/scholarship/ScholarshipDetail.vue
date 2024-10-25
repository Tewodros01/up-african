<script setup lang="ts">
import { ref, defineProps } from "vue";
import { Eye, Share, Badge } from "lucide-vue-next";

interface Scholarship {
  id: number;
  title: string;
  institution: string;
  description: string;
  location: string;
  logo: string;
  rating: number;
  eligibility: string;
  amount: string;
  deadline: string;
  applicationProcess: string;
}

const props = defineProps<{
  scholarship: Scholarship;
}>();

const navItems = [
  "Overview",
  "Eligibility",
  "Amount",
  "Application Process",
  "Institution Details",
  "Contact",
];

const cardsData = [
  {
    title: "Overview",
    description:
      "Learn about the scholarship’s purpose, benefits, and key details.",
    imageSrc: "https://via.placeholder.com/100",
  },
  {
    title: "Eligibility",
    description: "Find out the eligibility criteria for this scholarship.",
    imageSrc: "https://via.placeholder.com/100",
  },
  {
    title: "Amount",
    description: "Discover the financial amount provided by this scholarship.",
    imageSrc: "https://via.placeholder.com/100",
  },
  {
    title: "Application Process",
    description: "Understand the steps involved in the application process.",
    imageSrc: "https://via.placeholder.com/100",
  },
  // Add more card data as needed...
];
</script>

<template>
  <div class="bg-gray-100 shadow-sm flex flex-col gap-2 rounded-md">
    <div class="relative h-48 bg-blue-600 rounded-md"></div>
    <div class="bg-white">
      <div class="flex flex-row gap-2 w-full">
        <div class="flex-shrink-0 p-6">
          <div class="relative">
            <div
              class="h-36 w-36 bg-green-600 rounded-full flex items-center justify-center shadow-2xl mx-auto md:mx-0"
            >
              <div
                class="h-32 w-32 bg-white rounded-full flex items-center justify-center"
              >
                <img
                  :src="scholarship.logo"
                  :alt="scholarship.institution"
                  class="rounded-full bg-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-center text-left">
          <div class="flex flex-row justify-between items-center mb-4">
            <div class="flex flex-col">
              <div>
                <h1 class="text-xl md:text-2xl font-semibold">
                  {{ scholarship.title }}
                </h1>
                <p class="text-gray-500">
                  @{{ scholarship.institution.toLowerCase().replace(" ", "") }}
                </p>
              </div>
              <div>
                <span
                  class="bg-yellow-100 text-yellow-600 py-1 rounded-full text-xs font-semibold"
                >
                  {{ scholarship.location }}
                </span>
              </div>
              <div class="mt-2">
                <p class="text-gray-600 text-sm">
                  {{ scholarship.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex float-end items-end px-3">
          <button
            class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 flex items-center"
          >
            <span class="mr-2 text-sm">Apply Now</span>
          </button>
        </div>
      </div>
      <div class="p-2">
        <CommonDivider />
      </div>

      <div class="mt-8 px-10 flex flex-col md:flex-row justify-between">
        <div class="sticky mb-8 md:mb-0">
          <nav class="space-y-4 text-nowrap">
            <a
              v-for="item in navItems"
              :key="item"
              href="#"
              class="block text-zinc-600 text-[0.91rem] hover:text-blue-600"
            >
              {{ item }}
            </a>
          </nav>
        </div>

        <div class="flex flex-col px-4">
          <div v-for="(card, index) in cardsData" :key="index">
            <CampanyprofileAboutCompany
              :title="card.title"
              :description="card.description"
              :image-src="card.imageSrc"
            />

            <div class="py-4">
              <CommonDivider />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
