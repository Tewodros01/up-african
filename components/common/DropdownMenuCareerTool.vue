<script setup>
import { ref } from "vue";
import {
  FileText,
  FileSignature,
  Globe,
  Mail,
  ClipboardList,
  Type,
} from "lucide-vue-next";

const isDropdownOpen = ref(false);
const selectedMenu = ref("Resume Builder");

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
      href="/careertool"
      text="Career Tools"
      :icon="FileText"
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
            @click.prevent="setSelectedMenu('Resume Builder')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Resume Builder',
              'text-gray-700': selectedMenu !== 'Resume Builder',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <FileText class="w-5 h-5" />
            <span class="text-sm">Resume Builder</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Cover Letter Builder')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Cover Letter Builder',
              'text-gray-700': selectedMenu !== 'Cover Letter Builder',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <FileSignature class="w-5 h-5" />
            <span class="text-sm">Cover Letter Builder</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Personal Website')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Personal Website',
              'text-gray-700': selectedMenu !== 'Personal Website',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Globe class="w-5 h-5" />
            <span class="text-sm">Personal Website</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Email Signature')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Email Signature',
              'text-gray-700': selectedMenu !== 'Email Signature',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Mail class="w-5 h-5" />
            <span class="text-sm">Email Signature</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Job Tracker')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Job Tracker',
              'text-gray-700': selectedMenu !== 'Job Tracker',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <ClipboardList class="w-5 h-5" />
            <span class="text-sm">Job Tracker</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('AI Resume Writer')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'AI Resume Writer',
              'text-gray-700': selectedMenu !== 'AI Resume Writer',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Type class="w-5 h-5" />
            <span class="text-sm">AI Resume Writer</span>
          </a>
        </div>
        <div class="flex flex-col w-2/3 bg-blue-50 p-4 rounded-lg space-y-2">
          <div v-if="selectedMenu === 'Resume Builder'">
            <h3 class="text-base font-semibold text-gray-800">
              Resume Builder
            </h3>
            <p class="text-sm text-gray-600">
              Create a professional resume with our easy-to-use builder.
            </p>
            <div class="mt-4">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started &rarr;
              </a>
            </div>
          </div>
          <div v-if="selectedMenu === 'Cover Letter Builder'">
            <h3 class="text-base font-semibold text-gray-800">
              Cover Letter Builder
            </h3>
            <p class="text-sm text-gray-600">
              Craft a personalized cover letter to match your resume.
            </p>
            <div class="mt-4">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Start Writing &rarr;
              </a>
            </div>
          </div>
          <!-- Repeat similar content for other career tools -->
        </div>
      </div>
    </div>
  </div>
</template>
