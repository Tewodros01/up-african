<script setup>
import { ref } from "vue";
import { BookOpen, Briefcase } from "lucide-vue-next";

const isDropdownOpen = ref(false);
const selectedMenu = ref("Case Studies");

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
    <CommonMenuItemLayout href="/resources" text="Resources" :icon="BookOpen" />
    <div v-show="isDropdownOpen" class="absolute -left-20 w-[600px] z-10">
      <div
        class="flex mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-4"
      >
        <div
          class="flex flex-col w-1/3 space-y-2 pr-4 border-r border-gray-200"
        >
          <a
            href="#"
            @click.prevent="setSelectedMenu('E-books')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'E-books',
              'text-gray-700': selectedMenu !== 'E-books',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <BookOpen class="w-5 h-5" />
            <span class="text-sm">E-books</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Case Studies')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Case Studies',
              'text-gray-700': selectedMenu !== 'Case Studies',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <Briefcase class="w-5 h-5" />
            <span class="text-sm">Case Studies</span>
          </a>
          <a
            href="#"
            @click.prevent="setSelectedMenu('Blogs')"
            :class="{
              'bg-blue-100 text-blue-600 font-semibold':
                selectedMenu === 'Blogs',
              'text-gray-700': selectedMenu !== 'Blogs',
            }"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <BookOpen class="w-5 h-5" />
            <span class="text-sm">Blogs</span>
          </a>
        </div>
        <div class="flex flex-col w-2/3 bg-blue-50 p-4 rounded-lg space-y-2">
          <div v-if="selectedMenu === 'Case Studies'">
            <h3 class="text-base font-semibold text-gray-800">Case Studies</h3>
            <p class="text-sm text-gray-600">
              Dive into in-depth case studies showcasing top companies'
              strategic hiring successes and insights.
            </p>
            <div class="grid grid-cols-2 gap-4 mt-4">
              <!-- <img
                src="path-to-agoda-logo"
                alt="Agoda"
                class="h-10 w-10 rounded-full"
              />
              <img
                src="path-to-amazon-logo"
                alt="Amazon"
                class="h-10 w-10 rounded-full"
              />
              <img
                src="path-to-ather-logo"
                alt="Ather"
                class="h-10 w-10 rounded-full"
              />
              <img
                src="path-to-hero-logo"
                alt="Hero"
                class="h-10 w-10 rounded-full"
              /> -->
            </div>
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
