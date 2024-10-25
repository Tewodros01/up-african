<script setup>
import {
  EyeIcon,
  PlayCircleIcon,
  SettingsIcon,
  ListIcon,
  HelpCircleIcon,
  ImageIcon,
  FileTextIcon,
  CalendarIcon,
  EditIcon,
  ArrowLeftIcon,
  XIcon,
} from 'lucide-vue-next';

const props = defineProps({
  toggleSidebar: Function,
});

const {
  openBannerDialog,
  openBasicDetailsDialog,
  openOpportunityDescriptionDialog,
  openRecruitmentProcessDialog,
} = useMicrositeDialog(); // Use the dialog composable
</script>

<template>
  <div
    class="flex flex-col max-w-[24rem] bg-white pl-8 py-6 pr-4 w-full min-h-screen mb-20"
  >
    <div class="md:hidden flex justify-between items-center mb-4">
      <button
        class="flex items-center text-blue-600 bg-gray-200 rounded px-3 py-1"
      >
        <ArrowLeftIcon class="w-4 h-4 mr-1" />
        <span class="text-base">Dashboard</span>
      </button>
      <button class="text-gray-600 p-2" @click="toggleSidebar">
        <XIcon class="w-6 h-6" />
      </button>
    </div>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-semibold text-blue-900">Customize Features</h2>
      <button class="bg-orange-500 text-white p-2 rounded-full">
        <HelpCircleIcon class="w-5 h-5" />
      </button>
    </div>
    <div class="grid grid-cols-4 gap-2 mb-6">
      <button
        class="flex flex-col items-center justify-center px-4 py-3 border rounded-md text-center hover:bg-blue-100"
      >
        <EyeIcon class="w-4 h-4 text-blue-600" />
        <span class="mt-2 text-xs text-blue-900">Configure Visibility</span>
      </button>
      <button
        class="flex flex-col items-center justify-center px-4 py-3 border rounded-md text-center hover:bg-blue-100"
      >
        <PlayCircleIcon class="w-4 h-4 text-blue-600" />
        <span class="mt-2 text-xs text-blue-900">Preview Opportunity</span>
      </button>
      <button
        class="flex flex-col items-center justify-center px-4 py-3 border rounded-md text-center hover:bg-blue-100"
      >
        <SettingsIcon class="w-4 h-4 text-blue-600" />
        <span class="mt-2 text-xs text-blue-900">Configure Information</span>
      </button>
      <button
        class="flex flex-col items-center justify-center px-4 py-3 border rounded-md text-center hover:bg-blue-100"
      >
        <ListIcon class="w-6 h-6 text-blue-600" />
        <span class="mt-2 text-xs text-blue-900">Arrange Sections</span>
      </button>
    </div>
    <div class="space-y-4">
      <div
        class="p-4 border rounded-md flex justify-between items-center bg-blue-50"
      >
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <div
              class="flex items-center justify-center px-2 py-1 border rounded-md border-blue-400 text-center hover:bg-blue-100"
            >
              <ImageIcon class="w-6 h-6 text-blue-600" />
            </div>
            <div class="flex items-center">
              <h3 class="text-sm font-semibold text-blue-900">
                Opportunity Banners & Theme
              </h3>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-xs text-gray-500">
              Upload custom banners or modify default banners, from here!
            </p>
            <button
              @click="openBannerDialog"
              class="flex items-center text-blue-600 px-3 py-1 rounded-full border border-blue-400 hover:bg-blue-100 hover:border-blue-600"
            >
              <EditIcon class="w-4 h-4 mr-1" />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="p-4 border rounded-md flex justify-between items-center bg-blue-50"
      >
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <div
              class="flex items-center justify-center px-2 py-1 border rounded-md border-blue-400 text-center hover:bg-blue-100"
            >
              <FileTextIcon class="w-6 h-6 text-blue-600" />
            </div>
            <div class="flex items-center">
              <h3 class="text-sm font-semibold text-blue-900">
                Basic Details & Eligibility
              </h3>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-xs text-gray-500">
              Define job title, dates, and eligibility criteria!
            </p>
            <button
              @click="openBasicDetailsDialog"
              class="flex items-center text-blue-600 px-3 py-1 rounded-full border border-blue-400 hover:bg-blue-100 hover:border-blue-600"
            >
              <EditIcon class="w-4 h-4 mr-1" />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="p-4 border rounded-md flex justify-between items-center bg-blue-50"
      >
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <div
              class="flex items-center justify-center px-2 py-1 border rounded-md border-blue-400 text-center hover:bg-blue-100"
            >
              <CalendarIcon class="w-6 h-6 text-blue-600" />
            </div>
            <div class="flex items-center">
              <h3 class="text-sm font-semibold text-blue-900">
                Recruitment Process
              </h3>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-xs text-gray-500">
              Specify rounds like Quiz or Hackathon, to represent the flow of
              the opportunity.
            </p>
            <button
              @click="openRecruitmentProcessDialog"
              class="flex items-center text-blue-600 px-3 py-1 rounded-full border border-blue-400 hover:bg-blue-100 hover:border-blue-600"
            >
              <EditIcon class="w-4 h-4 mr-1" />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="p-4 border rounded-md flex justify-between items-center bg-blue-50"
      >
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <div
              class="flex items-center justify-center px-2 py-1 border rounded-md border-blue-400 text-center hover:bg-blue-100"
            >
              <FileTextIcon class="w-6 h-6 text-blue-600" />
            </div>
            <div class="flex items-center">
              <h3 class="text-sm font-semibold text-blue-900">
                Job Description
              </h3>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-xs text-gray-500">
              Mention details like Rules, Eligibility, Process Format, etc. the
              more details...
            </p>
            <button
              @click="openOpportunityDescriptionDialog"
              class="flex items-center text-blue-600 px-3 py-1 rounded-full border border-blue-400 hover:bg-blue-100 hover:border-blue-600"
            >
              <EditIcon class="w-4 h-4 mr-1" />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
