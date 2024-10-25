<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
  console.log('Sidebar toggled, isOpen:', isOpen.value);
};
</script>

<template>
  <div class="bg-gray-200 min-h-screen">
    <MicrositeHeader :toggleSidebar="toggleSidebar" :isOpen="isOpen" />
    <div class="flex flex-col lg:flex-row">
      <div
        :class="`fixed left-0 top-0 md:top-auto md:mt-16 bg-white shadow w-2/3 md:max-w-[24rem] h-full border-r border-slate-200 transform transition-transform duration-300 ease-in-out z-[6] overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`"
      >
        <MicrositeSideBar :isOpen="isOpen" :toggleSidebar="toggleSidebar" />
      </div>
      <main class="flex-1 mx-auto md:ml-[24rem] p-2 mt-16">
        <slot />
      </main>
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black opacity-50 z-[2] md:hidden"
        @click="toggleSidebar"
      ></div>
      <MicrositeBannerDialog />
      <MicrositeBasicDetailsDialog />
      <MicrositeOpportunityDescription />
      <MicrositeRecruitmentProcessDialog />
    </div>
  </div>
</template>
