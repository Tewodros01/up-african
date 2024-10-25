<script setup>
import { ref } from "vue";
import {
  FileText,
  BookOpen,
  Clipboard,
  User,
  Briefcase,
  Trophy,
  BarChart,
  Award,
} from "lucide-vue-next";

const isDropdownOpen = ref(false);
const selectedMenu = ref("Assessments");

const toggleDropdown = (value) => {
  isDropdownOpen.value = value;
};

const setSelectedMenu = (menu) => {
  selectedMenu.value = menu;
};
</script>

<template>
  <div
    @mouseenter="toggleDropdown(true)"
    @mouseleave="toggleDropdown(false)"
    class="relative"
  >
    <CommonMenuItemLayout
      href="/solutions"
      text="Solutions"
      :icon="Briefcase"
    />
    <div v-show="isDropdownOpen" class="absolute -left-20 w-[600px] z-10">
      <div
        class="flex mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-4"
      >
        <div
          class="flex flex-col w-1/3 space-y-2 pr-4 border-r border-gray-200"
        >
          <a
            href="#"
            @click.prevent="setSelectedMenu('Jobs & Internships')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Jobs & Internships',
              'text-gray-700': selectedMenu !== 'Jobs & Internships',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Briefcase class="w-5 h-5" />
            <span class="text-sm">Jobs & Internships</span>
          </a>

          <a
            href="#"
            @click.prevent="setSelectedMenu('Scholarships')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Scholarships',
              'text-gray-700': selectedMenu !== 'Scholarships',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Award class="w-5 h-5" />
            <span class="text-sm">Scholarships</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Mentorship')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Mentorship',
              'text-gray-700': selectedMenu !== 'Mentorship',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <User class="w-5 h-5" />
            <span class="text-sm">Mentorship</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Assessments')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Assessments',
              'text-gray-700': selectedMenu !== 'Assessments',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <FileText class="w-5 h-5" />
            <span class="text-sm">Assessments</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Learn')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Learn',
              'text-gray-700': selectedMenu !== 'Learn',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <BookOpen class="w-5 h-5" />
            <span class="text-sm">Learn</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Practice')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Practice',
              'text-gray-700': selectedMenu !== 'Practice',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Clipboard class="w-5 h-5" />
            <span class="text-sm">Practice</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Hiring Challenges')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Hiring Challenges',
              'text-gray-700': selectedMenu !== 'Hiring Challenges',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Trophy class="w-5 h-5" />
            <span class="text-sm">Hiring Challenges</span>
          </a>
          <a
            href="#"
            @click.prevent="
              setSelectedMenu('Student Placement Tracking System')
            "
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Student Placement Tracking System',
              'text-gray-700':
                selectedMenu !== 'Student Placement Tracking System',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <BarChart class="w-5 h-5" />
            <span class="text-sm">Student Placement Tracking System</span>
          </a>
        </div>
        <div class="flex flex-col w-2/3 bg-blue-50 p-4 rounded-lg space-y-2">
          <div v-if="selectedMenu === 'Assessments'">
            <h3 class="text-base font-semibold text-gray-800">Assessments</h3>
            <p class="text-sm text-gray-600">
              Discover a variety of assessments to test your skills and
              knowledge.
            </p>
            <div class="mt-4">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Explore &rarr;
              </a>
            </div>
          </div>
          <!-- Add other menu contents similarly -->
        </div>
      </div>
    </div>
  </div>
</template>
