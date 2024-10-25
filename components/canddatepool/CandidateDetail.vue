<script setup lang="ts">
import { ref, defineProps } from "vue";
import { Eye, Share, Badge } from "lucide-vue-next";

interface Candidate {
  id: number;
  name: string;
  experience: string;
  skills: string[];
  location: string;
  profileImage: string;
  rating: number;
  goal: string;
  bio: string;
}

const props = defineProps<{
  candidate: Candidate;
}>();

const navItems = [
  "About",
  "Skills",
  "Work Experience",
  "Education",
  "Responsibilities",
  "Certificates",
];

const cardsData = [
  {
    title: "About",
    description:
      "Craft an engaging story in your bio and make meaningful connections with peers and recruiters alike!",
    imageSrc: "https://via.placeholder.com/100",
  },
  {
    title: "Skills",
    description:
      "Spotlight your unique skills and catch the eye of recruiters looking for your exact talents!",
    imageSrc: "https://via.placeholder.com/100",
  },
  {
    title: "Work Experience",
    description:
      "Narrate your professional journey and fast-track your way to new career heights!",
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
                  :src="candidate.profileImage"
                  :alt="candidate.name"
                  class="rounded-full bg-gray-200"
                />
              </div>
            </div>
            <div
              class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 translate-y-1/2 shadow-2xl"
            >
              <div
                class="flex px-1 py-1 items-center text-white bg-gray-500 rounded-full"
              >
                <p class="text-white text-xs px-1 text-nowrap">
                  {{ candidate.goal }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-center text-left">
          <div class="flex flex-row justify-between items-center mb-4">
            <div class="flex flex-col">
              <div>
                <h1 class="text-xl md:text-2xl font-semibold">
                  {{ candidate.name }}
                </h1>
                <p class="text-gray-500">
                  @{{ candidate.name.toLowerCase().replace(" ", "") }}
                </p>
              </div>
              <div>
                <span
                  class="bg-yellow-100 text-yellow-600 py-1 rounded-full text-xs font-semibold"
                >
                  {{ candidate.experience }}
                </span>
              </div>
              <div class="flex flex-wrap gap-2 mt-2">
                <span
                  v-for="skill in candidate.skills"
                  :key="skill"
                  class="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex float-end items-end px-3">
          <button
            class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 flex items-center"
          >
            <span class="mr-2">Connect</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v12m9-9H3m12 0l9-9M9 15L3 9l9-9"
              />
            </svg>
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
            <CanddatepoolAboutCandidate
              :title="card.title"
              :description="card.description"
              :image-src="card.imageSrc"
            />

            <div class="py-4">
              <CommonDivider />
            </div>
          </div>
        </div>
        <CanddatepoolCandidateStastics />
      </div>
    </div>
  </div>
</template>
