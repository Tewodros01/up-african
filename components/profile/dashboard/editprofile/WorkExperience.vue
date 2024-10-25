<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Paperclip,
  Trash2,
} from 'lucide-vue-next';
import { useUserWorkExperienceStore } from '@/stores/useUserWorkExperienceStore';
import { defineProps } from 'vue';

// Initialize the store
const userWorkExperienceStore = useUserWorkExperienceStore();

// Local state
const selectedEmploymentType = ref<string>('');
const selectedDesignation = ref<string>('');
const selectedSector = ref<string>('');
const selectedOrganization = ref<string>('');
const startDate = ref<string>('');
const endDate = ref<string>('');
const location = ref<string>('');
const skills = ref<string>('');
const description = ref<string>('');

// Dropdown options for employment type, designation, sector, and organization
const employmentTypes = ['Full-time', 'Part-time', 'Internship'];
const designations = ['Manager', 'Engineer', 'Developer'];
const sectors = ['IT', 'Finance', 'Healthcare', 'Education'];
const organizations = ['Company A', 'Company B', 'Company C'];

// Fetch data when the component is mounted
onMounted(() => {
  userWorkExperienceStore.fetchUserWorkExperiences();
});

// Define props
const props = defineProps<{
  setShowDetails: (value: boolean) => void;
}>();
</script>

<template>
  <div
    class="bg-white shadow rounded-lg flex flex-col h-full md:h-[calc(100vh-4rem)]"
  >
    <!-- Header with Icons and Title -->
    <div class="px-4 py-2 flex items-center">
      <div
        class="flex md:hidden rounded-full bg-gray-100 w-10 h-10 items-center justify-center"
      >
        <button
          @click="props.setShowDetails(false)"
          class="text-gray-400 hover:text-gray-600"
        >
          <ArrowLeft class="text-lg p-1" />
        </button>
      </div>
      <Briefcase class="w-4 h-4 text-gray-500 mr-2" />
      <h2 class="text-base font-semibold text-gray-500 mb-4 mt-4">
        Work Experience
      </h2>
    </div>
    <div><CommonDivider /></div>

    <!-- Content -->
    <div class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar">
      <div class="mb-4 text-gray-500">
        Work Experience &gt;
        <span class="text-black text-sm">New Experience</span>
      </div>

      <!-- Got this job from Unstop -->
      <div class="mb-4">
        <label class="text-gray-500 text-sm font-medium mb-2 flex items-center">
          <input type="checkbox" class="mr-2" />
          Got this job from UpAfrican
        </label>
      </div>

      <!-- Employment Type -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Employment Type <span class="text-red-500">*</span></label
        >
        <Select v-model="selectedEmploymentType">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Employment Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="type in employmentTypes"
              :key="type"
              :value="type"
              >{{ type }}</SelectItem
            >
          </SelectContent>
        </Select>
      </div>

      <!-- Designation -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Designation <span class="text-red-500">*</span></label
        >
        <Select v-model="selectedDesignation">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Designation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="designation in designations"
              :key="designation"
              :value="designation"
              >{{ designation }}</SelectItem
            >
          </SelectContent>
        </Select>
      </div>

      <!-- Sector -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Sector <span class="text-red-500">*</span></label
        >
        <Select v-model="selectedSector">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Sector" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="sector in sectors"
              :key="sector"
              :value="sector"
              >{{ sector }}</SelectItem
            >
          </SelectContent>
        </Select>
      </div>

      <!-- Organization -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Organization <span class="text-red-500">*</span></label
        >
        <Select v-model="selectedOrganization">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Organization" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="organization in organizations"
              :key="organization"
              :value="organization"
              >{{ organization }}</SelectItem
            >
          </SelectContent>
        </Select>
      </div>

      <!-- Location and Remote Option -->
      <div class="mb-4">
        <div class="flex justify-between">
          <label class="block text-gray-500 text-sm font-medium mb-2"
            >Location <span class="text-red-500">*</span></label
          >
          <label class="text-sm text-gray-500 flex items-center">
            <input type="checkbox" class="mr-2" /> Remote
          </label>
        </div>
        <input
          v-model="location"
          type="text"
          placeholder="Location"
          class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Duration -->
      <div class="mb-4">
        <div class="flex justify-between">
          <label class="block text-gray-500 text-sm font-medium mb-2"
            >Duration <span class="text-red-500">*</span></label
          >
          <label class="block text-gray-500 text-sm font-medium mb-2">
            <input type="checkbox" class="mr-2" /> Currently working in this
            role
          </label>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="relative">
            <Calendar class="w-4 h-4 absolute top-3 left-3 text-gray-400" />
            <input
              v-model="startDate"
              type="text"
              placeholder="Start date"
              class="w-full pl-10 px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="relative">
            <Calendar class="w-4 h-4 absolute top-3 left-3 text-gray-400" />
            <input
              v-model="endDate"
              type="text"
              placeholder="End date"
              class="w-full pl-10 px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Skills</label
        >
        <input
          v-model="skills"
          type="text"
          placeholder="Add skills that you have acquired during this journey!"
          class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Description</label
        >
        <textarea
          v-model="description"
          placeholder="Describe your role here..."
          class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <!-- Attachments -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Attachments</label
        >
        <div
          class="flex items-center justify-center w-full border border-dashed rounded-lg px-4 py-2 text-gray-500 cursor-pointer"
        >
          <Paperclip class="w-4 h-4 text-gray-500 mr-2" />
          <span>Attachments</span>
        </div>
      </div>
    </div>

    <!-- CommonDivider and Buttons -->
    <div><CommonDivider /></div>
    <div class="flex justify-between px-4 py-4 bg-white mb-5">
      <button
        class="px-6 py-2 border border-gray-300 text-gray-600 font-semibold rounded-full hover:bg-gray-100 focus:outline-none flex items-center gap-2"
      >
        <Trash2 class="w-4 h-4 text-gray-600" /> Discard
      </button>
      <button
        class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none"
      >
        Save
      </button>
    </div>
  </div>
</template>
