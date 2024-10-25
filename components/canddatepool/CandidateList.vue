<script setup>
import { onMounted, ref } from "vue";
import { useCandidateStore } from "~/stores/useCandidateStore";

const candidateStore = useCandidateStore();
const isBottomSheetVisible = ref(false); // Controls the visibility of the bottom sheet

onMounted(() => {
  candidateStore.fetchCandidates();
});

const handleCandidateSelection = (candidate) => {
  candidateStore.selectCandidate(candidate);
  isBottomSheetVisible.value = true; // Show bottom sheet on candidate selection
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
        <div v-if="candidateStore.loading">
          <CommonSkeletonSidebarLoader v-for="n in 6" :key="n" />
        </div>
        <div v-if="candidateStore.error" class="p-4 text-red-500">
          {{ candidateStore.error }}
        </div>
        <div v-else>
          <div
            v-for="candidate in candidateStore.candidates"
            :key="candidate.id"
            @click="handleCandidateSelection(candidate)"
            class="p-1 cursor-pointer hover:bg-gray-100 rounded-none"
          >
            <CanddatepoolCandidateCard v-bind="candidate" />
          </div>
        </div>
      </div>

      <!-- Main Content for Larger Screens -->
      <main class="md:block hidden md:ml-[27rem] flex-1 px-2 mt-4 md:mt-14">
        <div v-if="candidateStore.loading">
          <CommonSkeletonProfileLoader />
        </div>
        <div v-if="candidateStore.error" class="p-4 text-red-500">
          {{ candidateStore.error }}
        </div>
        <div v-else-if="candidateStore.selectedCandidate">
          <CanddatepoolCandidateDetail
            :candidate="candidateStore.selectedCandidate"
          />
        </div>
      </main>
    </div>

    <!-- Bottom Sheet for Small Screens -->
    <div
      v-if="candidateStore.selectedCandidate"
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
          <CanddatepoolCandidateDetail
            :candidate="candidateStore.selectedCandidate"
          />
        </div>
      </div>
    </div>
  </div>
</template>
