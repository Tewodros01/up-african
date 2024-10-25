<script setup>
import { onMounted, ref } from 'vue';
import { useScholarshipStore } from '~/stores/useScholarshipStore';

const scholarshipStore = useScholarshipStore();
const isBottomSheetVisible = ref(false); // Controls the visibility of the bottom sheet

onMounted(() => {
  scholarshipStore.fetchScholarships();
});

const handleScholarshipSelection = scholarship => {
  scholarshipStore.selectScholarship(scholarship);
  isBottomSheetVisible.value = true; // Show bottom sheet on scholarship selection
};
</script>

<template>
  <div class="w-full">
    <!-- Main Content Overlay -->
    <div
      v-if="isBottomSheetVisible"
      class="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out md:hidden z-[10]"
    ></div>

    <!-- Main Container -->
    <div
      class="max-w-7xl mb-14 mx-auto flex w-full items-start gap-x-2 px-2 py-2 md:px-2 lg:px-2 h-full"
    >
      <!-- Sidebar Container -->
      <div
        class="md:fixed md:pr-2 max-w-full md:max-w-[27rem] shrink-0 mt-14 h-full md:overflow-y-auto sid-custom-scrollbar"
      >
        <div v-if="scholarshipStore.loading">
          <CommonSkeletonSidebarLoader v-for="n in 6" :key="n" />
        </div>
        <div v-if="scholarshipStore.error" class="p-4 text-red-500">
          {{ scholarshipStore.error }}
        </div>
        <div v-else>
          <div
            v-for="scholarship in scholarshipStore.scholarships"
            :key="scholarship.id"
            @click="handleScholarshipSelection(scholarship)"
            class="p-1 cursor-pointer hover:bg-gray-100 rounded-none"
          >
            <ScholarshipCard v-bind="scholarship" />
          </div>
        </div>
      </div>

      <!-- Main Content for Larger Screens -->
      <main class="md:block hidden md:ml-[27rem] flex-1 px-2 mt-4 md:mt-14">
        <div v-if="scholarshipStore.loading">
          <CommonSkeletonProfileLoader />
        </div>
        <div v-if="scholarshipStore.error" class="p-4 text-red-500">
          {{ scholarshipStore.error }}
        </div>
        <div v-else-if="scholarshipStore.selectedScholarship">
          <ScholarshipDetail
            :scholarship="scholarshipStore.selectedScholarship"
          />
        </div>
      </main>
    </div>

    <!-- Bottom Sheet for Small Screens -->
    <div
      v-if="scholarshipStore.selectedScholarship"
      id="sheet"
      class="fixed md:hidden w-full h-4/6 bottom-0 left-0 transform transition-transform duration-300 ease-in-out z-[50]"
      :class="{
        'translate-y-0': isBottomSheetVisible,
        'translate-y-full': !isBottomSheetVisible,
      }"
    >
      <div
        class="relative w-full h-full border bg-gray-50 rounded-t-xl shadow-lg"
      >
        <!-- Close Button Header -->
        <div class="bg-white flex justify-end items-end rounded-t-xl">
          <button
            @click="isBottomSheetVisible = false"
            class="px-4 py-4 focus:outline-none"
          >
            ✕
          </button>
        </div>

        <CommonDivider />

        <div class="h-full overflow-y-auto scrollbar-hide p-4">
          <ScholarshipDetail
            :scholarship="scholarshipStore.selectedScholarship"
          />
        </div>
      </div>
    </div>
  </div>
</template>
