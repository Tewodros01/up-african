<script setup lang="ts">
import { ref } from "vue";
import {
  BarChart,
  Code,
  FileText,
  Lightbulb,
  Trophy,
  Users,
  Video,
  Calendar,
  PlusCircle,
} from "lucide-vue-next";

const sections = ref([
  {
    title: "Engaging",
    color: "text-orange-500",
    cards: [
      {
        title: "General & Case Competitions",
        subtitle: "Create Competitions",
        icon: BarChart,
        color: "text-orange-500",
      },
      {
        title: "Innovation Challenges",
        subtitle: "Create Challenges",
        icon: Lightbulb,
        color: "text-blue-500",
      },
      {
        title: "Quizzes",
        subtitle: "Create Quizzes",
        icon: FileText,
        color: "text-green-500",
      },
      {
        title: "Hackathons & Coding Challenges",
        subtitle: "Create Hackathons",
        icon: Code,
        color: "text-orange-500",
      },
      {
        title: "Webinars & Workshops",
        subtitle: "Create Workshops",
        icon: Video,
        color: "text-pink-500",
      },
      {
        title: "Cultural Events",
        subtitle: "Create Events",
        icon: Users,
        color: "text-blue-500",
      },
      {
        title: "Conferences",
        subtitle: "Create Conferences",
        icon: Calendar,
        color: "text-orange-500",
      },
      {
        title: "Scholarships",
        subtitle: "Create Scholarships",
        icon: Trophy,
        color: "text-red-500",
      },
    ],
  },
  {
    title: "Hiring",
    color: "text-blue-500",
    cards: [
      {
        title: "Jobs",
        subtitle: "Create Jobs",
        icon: FileText,
        color: "text-blue-500",
      },
      {
        title: "Internships",
        subtitle: "Create Internships",
        icon: PlusCircle,
        color: "text-purple-500",
      },
      {
        title: "Hiring Challenges",
        subtitle: "Create Challenges",
        icon: Lightbulb,
        color: "text-blue-500",
      },
      {
        title: "Hackathons & Coding Challenges",
        subtitle: "Create Hackathons",
        icon: Code,
        color: "text-orange-500",
      },
    ],
  },
]);
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-7xl mx-auto">
      <div v-for="section in sections" :key="section.title" class="mb-16">
        <div class="mb-8">
          <h1 class="text-xl font-medium">
            For <span :class="section.color">{{ section.title }}</span> your
            target audience
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="card in section.cards"
            :key="card.title"
            class="bg-white rounded-lg shadow-lg p-4 transition duration-300"
          >
            <div class="flex gap-2">
              <div
                class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100"
              >
                <component :is="card.icon" :class="card.color" />
              </div>
              <div>
                <h3 class="text-sm font-medium mb-0 text-[#1c4980]">
                  {{ card.title }}
                </h3>
                <p
                  class="text-sm font-medium text-[#1c4980] flex items-center justify-between"
                >
                  {{ card.subtitle }} &rarr;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
