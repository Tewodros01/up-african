<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ArrowLeft, GraduationCap, Paperclip, Trash2 } from 'lucide-vue-next';
import { useUserEducationUpdateStore } from '@/stores/useUserEducationStore';

// Initialize the store
const userEducationUpdateStore = useUserEducationUpdateStore();

// Define props
const props = defineProps<{
  setShowDetails: (show: boolean) => void;
}>();

// Local state variables
const selectedQualification = ref<string>('');
const selectedDegree = ref<string>('');
const selectedDegreeType = ref<string>('');
const selectedSpecialization = ref<string>('');
const startYear = ref<string>('');
const endYear = ref<string>('');
const percentage = ref<string>('');
const cgpa = ref<string>('');
const institute = ref<string>('');
const rollNumber = ref<string>('');
const lateralEntry = ref<string>('');
const skills = ref<string>('');
const location = ref<string>('');
const description = ref<string>('');

// Dropdown options
const qualifications = ['Bachelor', 'Master', 'PhD'];
const degrees = ['BSc', 'MSc', 'MBA'];
const degreeTypes = ['Full-time', 'Part-time'];
const specializations = ['Computer Science', 'Engineering', 'Business'];

// Fetch data when the component is mounted
onMounted(() => {
  userEducationUpdateStore.fetchUserEducationById(1); // Fetch example data by ID
});
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
      <GraduationCap class="w-4 h-4 text-gray-500 mr-2" />
      <h2 class="text-base font-semibold text-gray-500 mb-4 mt-4">Education</h2>
    </div>
    <div><CommonDivider /></div>

    <!-- Content -->
    <div class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar">
      <div class="mb-4 text-gray-500">
        Education &gt; <span class="text-black text-sm">New Education</span>
      </div>

      <!-- Qualification -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Qualification <span class="text-red-500">*</span></label
        >
        <Select v-model="selectedQualification">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Qualification" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="qualification in qualifications"
              :key="qualification"
              :value="qualification"
            >
              {{ qualification }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Degree -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Degree <span class="text-red-500">*</span></label
        >
        <Select v-model="selectedDegree">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Degree" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="degree in degrees" :key="degree" :value="degree">
              {{ degree }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Degree Type -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Degree Type</label
        >
        <Select v-model="selectedDegreeType">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Degree Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="type in degreeTypes" :key="type" :value="type">
              {{ type }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Specialization -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Specialization <span class="text-red-500">*</span></label
        >
        <Select v-model="selectedSpecialization">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Specialization" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="specialization in specializations"
              :key="specialization"
              :value="specialization"
            >
              {{ specialization }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Duration -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Duration <span class="text-red-500">*</span></label
        >
        <div class="grid grid-cols-2 gap-4">
          <input
            v-model="startYear"
            type="text"
            placeholder="Start Year"
            class="w-full text-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            v-model="endYear"
            type="text"
            placeholder="End Year"
            class="w-full text-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <!-- Percentage and CGPA -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-gray-500 text-sm font-medium mb-2"
            >Percentage</label
          >
          <input
            v-model="percentage"
            type="text"
            placeholder="Percentage"
            class="w-full text-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label class="block text-gray-500 text-sm font-medium mb-2"
            >CGPA</label
          >
          <input
            v-model="cgpa"
            type="text"
            placeholder="CGPA"
            class="w-full text-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <!-- Institute -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Institute <span class="text-red-500">*</span></label
        >
        <input
          v-model="institute"
          type="text"
          placeholder="Institute"
          class="w-full text-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Roll Number and Lateral Entry -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-gray-500 text-sm font-medium mb-2"
            >Roll Number</label
          >
          <input
            v-model="rollNumber"
            type="text"
            placeholder="Roll number"
            class="w-full text-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label class="block text-gray-500 text-sm font-medium mb-2"
            >Are you a Lateral Entry Student?</label
          >
          <select
            v-model="lateralEntry"
            class="w-full px-4 py-3 text-sm text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
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
          placeholder="Add skills that you have acquired during this educational journey!"
          class="w-full text-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Location -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Location <span class="text-red-500">*</span></label
        >
        <input
          v-model="location"
          type="text"
          placeholder="Location"
          class="w-full text-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Description</label
        >
        <textarea
          v-model="description"
          placeholder="Detail your education journey..."
          class="w-full text-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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

    <!-- Divider and Buttons -->
    <div><CommonDivider /></div>
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
