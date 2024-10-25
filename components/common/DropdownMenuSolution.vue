<script setup>
import { ref } from "vue";
import {
  Briefcase,
  Users,
  Grid,
  LayoutDashboard,
  PieChart,
  BookOpen,
  Settings,
  FileText,
  Server,
  MessageSquare,
  CheckSquare,
  Code,
} from "lucide-vue-next";

const isDropdownOpen = ref(false);
const selectedMenu = ref("Job Board");

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
    <div v-show="isDropdownOpen" class="absolute -left-20 w-[800px] z-10">
      <div
        class="flex mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-4"
      >
        <div
          class="flex flex-col w-1/3 space-y-2 pr-4 border-r border-gray-200"
        >
          <a
            href="#"
            @click.prevent="setSelectedMenu('Job Board')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Job Board',
              'text-gray-700': selectedMenu !== 'Job Board',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Briefcase class="w-5 h-5" />
            <span class="text-sm">Job Board</span>
          </a>

          <a
            href="#"
            @click.prevent="setSelectedMenu('Candidate Pool')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Candidate Pool',
              'text-gray-700': selectedMenu !== 'Candidate Pool',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Users class="w-5 h-5" />
            <span class="text-sm">Candidate Pool</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Engagement')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Engagement',
              'text-gray-700': selectedMenu !== 'Engagement',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Users class="w-5 h-5" />
            <span class="text-sm">Engagement</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Company Profile')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Company Profile',
              'text-gray-700': selectedMenu !== 'Company Profile',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Grid class="w-5 h-5" />
            <span class="text-sm">Company Profile</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Community')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Community',
              'text-gray-700': selectedMenu !== 'Community',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <LayoutDashboard class="w-5 h-5" />
            <span class="text-sm">Community</span>
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
            <PieChart class="w-5 h-5" />
            <span class="text-sm">Assessments</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Proctoring')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Proctoring',
              'text-gray-700': selectedMenu !== 'Proctoring',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <BookOpen class="w-5 h-5" />
            <span class="text-sm">Proctoring</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('ATS')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold': selectedMenu === 'ATS',
              'text-gray-700': selectedMenu !== 'ATS',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Settings class="w-5 h-5" />
            <span class="text-sm">ATS</span>
          </a>
        </div>
        <div class="flex flex-col w-2/3 bg-blue-50 p-4 rounded-lg space-y-2">
          <div v-if="selectedMenu === 'Job Board'">
            <h3 class="text-base font-semibold text-gray-800">Job Board</h3>
            <p class="text-sm text-gray-600">
              We help you hire the right people even for the most difficult jobs
              to fill. Save time, money, and resources with Unstop.
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

          <div v-if="selectedMenu === 'Assessments'">
            <h3 class="text-base font-semibold text-gray-800">Assessments</h3>
            <p class="text-sm text-gray-600">
              Evaluate candidates with tailored, cost-effective tests for
              specific job roles and skills.
            </p>
            <div class="grid grid-cols-2 gap-4 mt-4">
              <a
                href="#"
                class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                <FileText class="w-4 h-4" />
                <span class="text-sm">Aptitude Test</span>
              </a>
              <a
                href="#"
                class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                <Server class="w-4 h-4" />
                <span class="text-sm">Technical Test</span>
              </a>
              <a
                href="#"
                class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                <MessageSquare class="w-4 h-4" />
                <span class="text-sm">Communication Skill Test</span>
              </a>
              <a
                href="#"
                class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                <CheckSquare class="w-4 h-4" />
                <span class="text-sm">Competency Assessment</span>
              </a>
              <a
                href="#"
                class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                <Code class="w-4 h-4" />
                <span class="text-sm">Coding Assessment</span>
              </a>
              <a
                href="#"
                class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                <Server class="w-4 h-4" />
                <span class="text-sm">SQL Assessment</span>
              </a>
            </div>
          </div>

          <!-- Add other menu contents similarly -->
        </div>
      </div>
    </div>
  </div>
</template>
