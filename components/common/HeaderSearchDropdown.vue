<script setup lang="ts">
import {
  AwardIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ClipboardIcon,
  ClipboardListIcon,
  GraduationCapIcon,
  UserCheckIcon,
} from 'lucide-vue-next';

const suggestions = [
  {
    label: 'Jobs & Internships',
    icon: BriefcaseIcon,
    color: 'bg-indigo-50 text-indigo-500',
  },
  {
    label: 'Projects',
    icon: ClipboardIcon,
    color: 'bg-green-50 text-green-500',
  },
  {
    label: 'Courses',
    icon: BookOpenIcon,
    color: 'bg-yellow-50 text-yellow-500',
  },
  {
    label: 'Skill Assessments',
    icon: ClipboardListIcon,
    color: 'bg-red-50 text-red-500',
  },
  {
    label: 'Company Preparation',
    icon: AwardIcon,
    color: 'bg-blue-50 text-blue-500',
  },
  {
    label: 'Mentors',
    icon: UserCheckIcon,
    color: 'bg-purple-50 text-purple-500',
  },
  {
    label: 'Opportunities',
    icon: GraduationCapIcon,
    color: 'bg-pink-50 text-pink-500',
  },
];

const props = defineProps({
  searchInputFocused: { type: Boolean, default: true },
  isDropdownVisible: { type: Boolean, default: true },
  handleSearchBlur: {
    type: Function as PropType<(event: FocusEvent) => void>,
    required: true,
  },
  handleSearchFocus: {
    type: Function as PropType<(event: FocusEvent) => void>,
    required: true,
  },
});
</script>

<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Search Input with Hover Activation -->
    <div
      class="rounded-full border border-gray-200 flex justify-center items-center"
    >
      <div class="relative">
        <input
          type="text"
          class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none transition-all duration-300 ease-in-out w-28 focus:w-10/12"
          placeholder="Search..."
          @focus="handleSearchFocus"
          @blur="handleSearchBlur"
        />
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
          <svg
            class="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Dropdown Suggestions (Visible only on Focus) -->
    <div v-show="isDropdownVisible" class="absolute left-0 right-0 z-10">
      <div
        class="p-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-full"
      >
        <div class="text-sm font-semibold text-gray-600">Categories</div>
        <div class="grid grid-cols-2 gap-3 mt-3">
          <span
            v-for="(suggestion, index) in suggestions"
            :key="index"
            :class="`flex items-center px-3 py-2 text-sm font-medium rounded-full cursor-pointer hover:bg-gray-100 ${suggestion.color}`"
          >
            <component :is="suggestion.icon" class="w-5 h-5 mr-2" />
            {{ suggestion.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
