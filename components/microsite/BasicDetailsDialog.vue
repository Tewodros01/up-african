<script setup lang="ts">
import { Briefcase, XIcon, ChevronDownIcon } from 'lucide-vue-next'; // Icons
import { ref } from 'vue';

// Form Data
const jobTitle = ref('');
const companyName = ref('');
const location = ref('');
const employmentType = ref('');
const salary = ref('');
const description = ref('');

// Employment type options
const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
const showEmploymentDropdown = ref(false); // Dropdown state

// Access dialog state from the composable
const { isBasicDetailsDialogOpen, closeBasicDetailsDialog } =
  useMicrositeDialog();

// Handle form submission
const handleSubmit = () => {
  console.log('Job Details:', {
    jobTitle: jobTitle.value,
    companyName: companyName.value,
    location: location.value,
    employmentType: employmentType.value,
    salary: salary.value,
    description: description.value,
  });
  closeBasicDetailsDialog(); // Close the dialog after submission
};
</script>

<template>
  <!-- Overlay Backdrop -->
  <div
    v-if="isBasicDetailsDialogOpen"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
  ></div>

  <!-- Right-Side Sliding Modal -->
  <div
    :class="`fixed top-0 right-0 h-full w-full md:w-5/6 max-w-4xl bg-white shadow-xl border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-50 ${
      isBasicDetailsDialogOpen ? 'translate-x-0' : 'translate-x-full'
    }`"
  >
    <!-- Header with Close Button -->
    <div class="flex items-center justify-between p-6 border-b border-gray-300">
      <div class="flex items-center gap-2">
        <Briefcase class="w-6 h-6 text-blue-600" />
        <h2 class="text-base font-semibold text-gray-700">Basic Details</h2>
      </div>
      <button
        @click="closeBasicDetailsDialog"
        class="text-gray-500 hover:text-gray-700 transition"
        aria-label="Close"
      >
        <XIcon class="w-6 h-6" />
      </button>
    </div>

    <!-- Form Content -->
    <div class="p-6 overflow-auto" style="max-height: calc(100vh - 150px)">
      <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-6">
        <!-- Job Title -->
        <div>
          <label for="jobTitle" class="block font-medium text-gray-700"
            >Job Title</label
          >
          <input
            v-model="jobTitle"
            type="text"
            id="jobTitle"
            class="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-600"
            placeholder="Enter job title"
            required
          />
        </div>

        <!-- Company Name -->
        <div>
          <label for="companyName" class="block font-medium text-gray-700"
            >Company Name</label
          >
          <input
            v-model="companyName"
            type="text"
            id="companyName"
            class="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-600"
            placeholder="Enter company name"
            required
          />
        </div>

        <!-- Location -->
        <div>
          <label for="location" class="block font-medium text-gray-700"
            >Location</label
          >
          <input
            v-model="location"
            type="text"
            id="location"
            class="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-600"
            placeholder="Enter location"
            required
          />
        </div>

        <!-- Custom Employment Type Selector -->
        <div class="relative">
          <label for="employmentType" class="block font-medium text-gray-700"
            >Employment Type</label
          >
          <div
            @click="showEmploymentDropdown = !showEmploymentDropdown"
            class="w-full mt-1 p-2 border rounded flex justify-between items-center cursor-pointer focus:ring-2 focus:ring-blue-600"
          >
            <span>{{ employmentType || 'Select Employment Type' }}</span>
            <ChevronDownIcon class="w-5 h-5 text-gray-500" />
          </div>

          <div
            v-if="showEmploymentDropdown"
            class="absolute mt-1 w-full bg-white border rounded shadow-lg z-10"
          >
            <ul>
              <li
                v-for="type in employmentTypes"
                :key="type"
                @click="
                  employmentType = type;
                  showEmploymentDropdown = false;
                "
                class="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {{ type }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Salary -->
        <div>
          <label for="salary" class="block font-medium text-gray-700"
            >Salary</label
          >
          <input
            v-model="salary"
            type="text"
            id="salary"
            class="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-600"
            placeholder="Enter salary range"
            required
          />
        </div>

        <!-- Job Description -->
        <div class="col-span-2">
          <label for="description" class="block font-medium text-gray-700"
            >Job Description</label
          >
          <textarea
            v-model="description"
            id="description"
            class="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-600"
            rows="4"
            placeholder="Enter job description"
            required
          ></textarea>
        </div>
      </form>
    </div>

    <!-- Footer with Save and Cancel Buttons -->
    <div class="flex items-center justify-between p-6 border-t border-gray-300">
      <button
        @click="closeBasicDetailsDialog"
        class="text-gray-500 hover:text-gray-700 transition"
      >
        Cancel
      </button>
      <button
        type="submit"
        @click="handleSubmit"
        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Save changes
      </button>
    </div>
  </div>
</template>
