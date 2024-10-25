<script setup lang="ts">
import { ArrowLeft, Calendar, Clock } from 'lucide-vue-next';
import { defineProps, ref } from 'vue';
import { useUserResponsibilityStore } from '@/stores/useUserResponsibilityStore';

// Define props
const props = defineProps<{
  setShowDetails: (show: boolean) => void;
}>();

// Pinia store
const userResponsibilityStore = useUserResponsibilityStore();
const {
  createUserResponsibility,
  updateUserResponsibility,
  currentUserResponsibility,
} = userResponsibilityStore;

// Reactive state variables
const sectors = ['Sector 1', 'Sector 2', 'Sector 3'];
const organisations = ['Organisation 1', 'Organisation 2'];
const designations = ['Designation 1', 'Designation 2'];

// Form data
const selectedSector = ref<string | null>(null);
const selectedDesignation = ref<string | null>(null);
const selectedOrganisation = ref<string | null>(null);
const startDate = ref<string | null>(null);
const endDate = ref<string | null>(null);
const location = ref<string | null>(null);
const skills = ref<string>('');
const description = ref<string>('');
const isRemote = ref<boolean>(false);
const currentlyWorking = ref<boolean>(false);
</script>

<template>
  <div
    class="bg-white shadow rounded-lg flex flex-col h-full md:h-[calc(100vh-4rem)]"
  >
    <!-- Header with Icon and Title -->
    <div class="px-6 py-4 flex items-center border-b border-gray-200">
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
      <Clock class="w-5 h-5 text-gray-500 mr-2" />
      <h2 class="text-base font-semibold text-gray-600">Responsibilities</h2>
    </div>

    <!-- Form Content -->
    <div class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar">
      <!-- Sector -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600 mb-1">
          Sector <span class="text-red-500">*</span>
        </label>
        <Select v-model="selectedSector!">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Sector" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="sector in sectors" :key="sector" :value="sector">
              {{ sector }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Position of Responsibility -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600 mb-1">
          Position of Responsibility <span class="text-red-500">*</span>
        </label>
        <input
          v-model="selectedDesignation"
          type="text"
          placeholder="Designation"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Organisation -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600 mb-1">
          Organisation <span class="text-red-500">*</span>
        </label>
        <Select v-model="selectedOrganisation!">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Organisation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="organisation in organisations"
              :key="organisation"
              :value="organisation"
            >
              {{ organisation }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Location and Remote Option -->
      <div class="mb-4">
        <div class="flex justify-between">
          <label class="block text-sm font-medium text-gray-600 mb-1"
            >Location</label
          >
          <label class="text-sm text-gray-600 flex items-center">
            <input type="checkbox" v-model="isRemote" class="mr-2" />
            Remote
          </label>
        </div>
        <input
          v-model="location"
          type="text"
          placeholder="Location"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Duration and Currently Working Option -->
      <div class="mb-4">
        <div class="flex justify-between">
          <label class="block text-sm font-medium text-gray-600 mb-1"
            >Duration</label
          >
          <label
            class="flex items-center text-sm font-medium text-gray-600 mb-1"
          >
            <input type="checkbox" v-model="currentlyWorking" class="mr-2" />
            Currently working in this role
          </label>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="relative">
            <Calendar class="w-4 h-4 absolute top-3 left-3 text-gray-400" />
            <input
              v-model="startDate"
              type="text"
              placeholder="Start date"
              class="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="relative" v-if="!currentlyWorking">
            <Calendar class="w-4 h-4 absolute top-3 left-3 text-gray-400" />
            <input
              v-model="endDate"
              type="text"
              placeholder="End date"
              class="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600 mb-1"
          >Skills</label
        >
        <input
          v-model="skills"
          type="text"
          placeholder="Add skills that you have acquired during this journey!"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600 mb-1"
          >Description</label
        >
        <textarea
          v-model="description"
          placeholder="Outline the specific responsibilities you undertook in your roles."
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          rows="4"
        ></textarea>
      </div>
    </div>

    <!-- Divider -->
    <div><CommonDivider /></div>

    <!-- Buttons -->
    <div class="flex justify-between gap-4 px-4 py-4 mb-5 bg-white">
      <button
        class="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-100 focus:outline-none flex items-center gap-2"
      >
        <Trash2 class="w-4 h-4 text-gray-700" />
        Discard
      </button>
      <button
        class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none"
      >
        Save
      </button>
    </div>
  </div>
</template>
