<script setup>
import { Menu, ArrowLeftIcon } from 'lucide-vue-next';

const props = defineProps({
  toggleSidebar: Function,
  isOpen: Boolean,
});
</script>

<template>
  <div
    class="bg-white w-full flex justify-between h-16 border-b border-slate-300 fixed top-0 p-4 items-center z-[5]"
  >
    <div class="flex items-center">
      <button
        class="md:hidden flex items-center text-blue-600 bg-gray-200 rounded border-2 px-3 py-1"
        @click="toggleSidebar"
      >
        <Menu class="w-5 h-5" />
      </button>
      <button
        class="hidden md:flex items-center text-blue-600 bg-gray-200 rounded border-2 px-3 py-1"
      >
        <ArrowLeftIcon class="w-4 h-4 mr-1" />
        <span class="text-base">Dashboard</span>
      </button>
    </div>
    <div class="flex-1 text-center">
      <h2 class="hidden md:block text-base font-semibold text-gray-600">
        Host Jobs | ITS Advisory - Advanced Analyst
      </h2>
    </div>
    <div class="flex items-center">
      <img
        src="/assets/img/boypractice.png"
        alt="Profile"
        class="w-8 h-8 rounded-full"
      />
    </div>
  </div>
</template>
