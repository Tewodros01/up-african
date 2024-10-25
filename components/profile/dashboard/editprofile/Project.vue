<script setup lang="ts">
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  CheckCircle,
  XCircle,
} from 'lucide-vue-next';
import { defineProps, ref, watch } from 'vue';
import { useUserProjectStore } from '@/stores/useUserProjectStore';

import {
  DateFormatter,
  type CalendarDate, // Keep it as CalendarDate or DateValue depending on your use case
  getLocalTimeZone,
} from '@internationalized/date';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/utils/cn';

// Define props
const props = defineProps<{
  setShowDetails: (show: boolean) => void;
}>();

const isLoading = ref(false);

// Store instance
const projectStore = useUserProjectStore();

// Local state for form data
const projectName = ref<string>('');
const projectType = ref<string>('');
const startDate = ref<CalendarDate | null>(null);
const endDate = ref<CalendarDate | null>(null);
const ongoing = ref<boolean>(false);
const description = ref<string>('');

// Date formatter
const df = new DateFormatter('en-US', {
  dateStyle: 'long',
});

// Watcher to enable/disable end date input based on the checkbox state
watch(ongoing, newVal => {
  if (newVal) {
    endDate.value = null;
  }
});

// Function to save user details
const saveUserDetails = async () => {
  isLoading.value = true; // Start loading
  try {
    // Directly passing the startDate and endDate as is
    await projectStore.createUserProject({
      user_id: 1, // Replace with actual user ID
      project_name: projectName.value,
      project_type: projectType.value,
      start_date: startDate.value, // No conversion
      end_date: ongoing.value ? null : endDate.value, // No conversion
      description: description.value,
    });
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    isLoading.value = false; // End loading
  }
};
</script>

<template>
  <div
    class="bg-white shadow rounded-lg flex flex-col h-full md:h-[calc(100vh-4rem)]"
  >
    <!-- Header -->
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
      <CheckCircle class="w-6 h-6 text-gray-500" />
      <h2 class="text-xl px-2 font-semibold text-gray-700">Projects</h2>
    </div>

    <div
      v-if="isLoading"
      class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar"
    >
      <CommonLoadingDot />
    </div>

    <div v-else class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar">
      <!-- Project Name -->
      <div class="mb-6">
        <label class="block text-gray-700 font-medium mb-2" for="projectName">
          Project name <span class="text-red-500">*</span>
        </label>
        <input
          v-model="projectName"
          type="text"
          id="projectName"
          placeholder="Project name"
          class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Project Type -->
      <div class="mb-6">
        <label class="block text-gray-700 font-medium mb-2">Project Type</label>
        <div class="flex space-x-4">
          <button
            @click="projectType = 'Full Time'"
            :class="[
              'px-4 py-2 border rounded-full focus:outline-none',
              projectType === 'Full Time'
                ? 'bg-blue-100 text-blue-600 border-blue-300'
                : 'text-gray-700 border-gray-300',
            ]"
          >
            Full Time
          </button>
          <button
            @click="projectType = 'Part Time'"
            :class="[
              'px-4 py-2 border rounded-full focus:outline-none',
              projectType === 'Part Time'
                ? 'bg-blue-100 text-blue-600 border-blue-300'
                : 'text-gray-700 border-gray-300',
            ]"
          >
            Part Time
          </button>
          <button
            @click="projectType = 'Freelance'"
            :class="[
              'px-4 py-2 border rounded-full focus:outline-none',
              projectType === 'Freelance'
                ? 'bg-blue-100 text-blue-600 border-blue-300'
                : 'text-gray-700 border-gray-300',
            ]"
          >
            Freelance
          </button>
        </div>
      </div>

      <!-- Project Duration -->
      <div class="mb-6 grid grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="startDate"
            >Start date</label
          >
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                :class="
                  cn(
                    'w-full justify-start text-left font-normal',
                    !startDate && 'text-muted-foreground',
                  )
                "
              >
                <CalendarIcon class="mr-2 h-4 w-4" />
                {{
                  startDate
                    ? df.format(startDate.toDate(getLocalTimeZone()))
                    : 'Pick a date'
                }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="startDate" initial-focus />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-2" for="endDate"
            >End date</label
          >
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                :class="
                  cn(
                    'w-full justify-start text-left font-normal',
                    !endDate && 'text-muted-foreground',
                  )
                "
                :disabled="ongoing"
              >
                <CalendarIcon class="mr-2 h-4 w-4" />
                {{
                  endDate
                    ? df.format(endDate.toDate(getLocalTimeZone()))
                    : 'Pick a date'
                }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="endDate" initial-focus />
            </PopoverContent>
          </Popover>
          <div class="flex items-center mt-2">
            <input
              v-model="ongoing"
              type="checkbox"
              id="ongoing"
              class="mr-2 focus:ring-blue-500"
            />
            <label for="ongoing" class="text-gray-700">Ongoing</label>
          </div>
        </div>
      </div>

      <!-- Project Description -->
      <div class="mb-6">
        <label class="block text-gray-700 font-medium mb-2" for="description"
          >Project Description</label
        >
        <textarea
          v-model="description"
          id="description"
          placeholder="Describe the project..."
          class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          rows="4"
        ></textarea>
      </div>
    </div>

    <!-- Divider and Buttons -->
    <div class="border-t border-gray-200"></div>
    <div class="flex justify-between gap-4 px-4 py-4 mb-5 bg-white">
      <button
        class="flex items-center gap-2 px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <XCircle class="w-5 h-5" /> Discard
      </button>
      <button
        @click="saveUserDetails"
        class="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none"
      >
        <CheckCircle class="w-5 h-5" v-if="!isLoading" />
        <div
          v-else
          class="w-5 h-5 animate-spin border-4 border-blue-600 border-t-transparent rounded-full"
        ></div>
        {{ isLoading ? 'Saving...' : 'Save' }}
      </button>
    </div>
  </div>
</template>
