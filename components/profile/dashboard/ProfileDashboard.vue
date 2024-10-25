<script setup>
import { Badge, Eye, Pencil, Share } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import { useCandidateProfileStore } from '~/stores/useCandidateProfileStore';

const candidateStore = useCandidateProfileStore();
const isEditing = ref(false);
const isEditingBanner = ref(false);

const setIsEditingBanner = value => {
  isEditingBanner.value = value;
};

const setIsEditing = value => {
  isEditing.value = value;
};

const navItems = [
  'About',
  'Skills',
  'Work Experience',
  'Education',
  'Responsibilities',
  'Certificates',
];

onMounted(() => {
  candidateStore.fetchCandidateAndCards();
});
</script>

<template>
  <div class="bg-gray-100 shadow-sm flex flex-col gap-2 mb-10 md:mb-2">
    <div v-if="candidateStore.loading">
      <CommonSkeletonProfileLoader />
    </div>
    <div v-else-if="candidateStore.error" class="p-4 text-red-500">
      {{ candidateStore.error }}
    </div>
    <div v-else class="bg-white">
      <div class="relative h-48 bg-blue-600 rounded-md">
        <button
          @click="setIsEditingBanner(true)"
          class="absolute top-2 right-2 bg-white text-blue-800 p-3 rounded-full"
        >
          <Pencil class="h-4 w-4" />
        </button>
      </div>
      <div class="flex flex-row gap-4 w-full p-6">
        <div class="flex-shrink-0">
          <div class="relative">
            <div
              class="h-36 w-36 bg-green-600 rounded-full flex items-center justify-center shadow-2xl mx-auto md:mx-0"
            >
              <div
                class="h-32 w-32 bg-white rounded-full flex items-center justify-center"
              >
                <img
                  :src="candidateStore.candidate?.profileImage"
                  :alt="candidateStore.candidate?.name"
                  class="rounded-full bg-gray-200"
                />
              </div>
            </div>
            <div
              class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 translate-y-1/2 shadow-2xl"
            >
              <div
                class="flex px-1 py-1 items-center text-white bg-gray-500 rounded-full"
              >
                <p class="text-white text-xs px-1 text-nowrap">
                  {{ candidateStore.candidate?.goal }}
                </p>
                <Pencil class="ml-2 h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-1 flex-col justify-center ml-0 md:ml-2 mt-4 text-left"
        >
          <div class="flex flex-row justify-between items-center mb-4">
            <div>
              <h1 class="text-xl md:text-2xl font-semibold">
                {{ candidateStore.candidate?.name }}
              </h1>
              <p class="text-gray-500">
                @{{
                  candidateStore.candidate?.name.toLowerCase().replace(' ', '')
                }}
              </p>
            </div>
            <div class="mt-4">
              <h6
                class="flex rounded-full border-2 px-6 py-2 text-base items-center mt-6"
              >
                <Badge class="text-xs w-4 h-4" />
                <span class="px-2">0</span>
              </h6>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="skill in candidateStore.candidate?.skills"
              :key="skill"
              class="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold"
            >
              {{ skill }}
            </span>
          </div>
          <div class="flex items-center space-x-4 justify-end mt-4">
            <button class="p-3 bg-white rounded-full border-2">
              <Eye class="h-4 w-4" />
            </button>
            <button class="p-3 bg-white rounded-full border-2">
              <Share class="h-4 w-4" />
            </button>
            <button
              @click="setIsEditing(true)"
              class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 flex items-center"
            >
              <Pencil class="inline-block mr-2 h-4 w-4" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div class="mt-8 px-4 flex flex-col md:flex-row justify-between">
        <div class="sticky mb-8 md:mb-0 px-2 flex flex-row md:flex-col">
          <nav class="space-y-4 text-nowrap flex flex-col">
            <a
              v-for="item in navItems"
              :key="item"
              href="#"
              class="block text-zinc-600 text-[0.91rem] hover:text-blue-600"
            >
              {{ item }}
            </a>
          </nav>
        </div>
        <div class="md:mx-6">
          <div v-for="(card, index) in candidateStore.cardsData" :key="index">
            <ProfileDashboardInfoCard
              :title="card.title"
              :description="card.description"
              :image-src="card.imageSrc"
            />
            <div class="py-4">
              <CommonDivider />
            </div>
          </div>
        </div>
        <ProfileDashboardProfileRigthSidebar />
      </div>
    </div>

    <!-- Edit Profile Banner -->
    <ProfileDashboardBannerEditor
      :isEditingBanner="isEditingBanner"
      :setIsEditingBanner="setIsEditingBanner"
    />

    <!-- Edit Profile Sidebar -->
    <ProfileDashboardEditprofileEditProfileSideBarForm
      :isEditing="isEditing"
      :setIsEditing="setIsEditing"
    />
  </div>
</template>
