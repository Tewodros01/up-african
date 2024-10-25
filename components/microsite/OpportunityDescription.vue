<script setup lang="ts">
import { FileText, XIcon } from 'lucide-vue-next'; // Icons
import { ref, reactive } from 'vue';

// Form Data
const jobTitle = ref('');
const rules = reactive([{ text: '' }]);
const eligibility = reactive([{ text: '' }]);
const processFormat = reactive([{ text: '' }]);

// Access dialog state from composable
const {
  isOpportunityDescriptionDialogOpen,
  closeOpportunityDescriptionDialog,
} = useMicrositeDialog();

// Handle form submission
const handleSubmit = () => {
  console.log('Job Description:', {
    jobTitle: jobTitle.value,
    rules,
    eligibility,
    processFormat,
  });
  closeOpportunityDescriptionDialog(); // Close the dialog after submission
};

// Add new dynamic fields
const addRule = () => rules.push({ text: '' });
const addEligibility = () => eligibility.push({ text: '' });
const addProcessStep = () => processFormat.push({ text: '' });

// Remove fields dynamically
const removeField = (array: any[], index: any) => array.splice(index, 1);
</script>

<template>
  <!-- Overlay Backdrop -->
  <div
    v-if="isOpportunityDescriptionDialogOpen"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
  ></div>

  <!-- Right-Side Sliding Modal -->
  <div
    :class="`fixed top-0 right-0 h-full w-full md:w-5/6 max-w-4xl bg-white shadow-xl border-l border-gray-300 transform transition-transform duration-300 ease-in-out z-50 ${
      isOpportunityDescriptionDialogOpen ? 'translate-x-0' : 'translate-x-full'
    }`"
  >
    <!-- Header with Close Button -->
    <div class="flex items-center justify-between p-6 border-b border-gray-300">
      <div class="flex items-center gap-2">
        <FileText class="w-6 h-6 text-gray-600" />
        <h2 class="text-base font-semibold text-gray-700">Job Description</h2>
      </div>
      <button
        @click="closeOpportunityDescriptionDialog"
        class="text-gray-500 hover:text-gray-700 transition"
        aria-label="Close"
      >
        <XIcon class="w-6 h-6" />
      </button>
    </div>

    <!-- Form Content -->
    <div class="p-6 overflow-auto" style="max-height: calc(100vh - 150px)">
      <form @submit.prevent="handleSubmit" class="space-y-6">
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

        <!-- Rules Section -->
        <div class="space-y-4">
          <label class="block font-medium text-gray-700">Rules</label>
          <div
            v-for="(rule, index) in rules"
            :key="index"
            class="flex items-center gap-4"
          >
            <input
              v-model="rule.text"
              type="text"
              class="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-600"
              placeholder="Add a rule"
              required
            />
            <button
              type="button"
              class="text-gray-500 hover:text-red-600 transition"
              @click="removeField(rules, index)"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
          <button
            type="button"
            class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            @click="addRule"
          >
            Add Rule
          </button>
        </div>

        <!-- Eligibility Section -->
        <div class="space-y-4">
          <label class="block font-medium text-gray-700">Eligibility</label>
          <div
            v-for="(criteria, index) in eligibility"
            :key="index"
            class="flex items-center gap-4"
          >
            <input
              v-model="criteria.text"
              type="text"
              class="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-600"
              placeholder="Add eligibility criteria"
              required
            />
            <button
              type="button"
              class="text-gray-500 hover:text-red-600 transition"
              @click="removeField(eligibility, index)"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
          <button
            type="button"
            class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            @click="addEligibility"
          >
            Add Eligibility
          </button>
        </div>

        <!-- Process Format Section -->
        <div class="space-y-4">
          <label class="block font-medium text-gray-700">Process Format</label>
          <div
            v-for="(step, index) in processFormat"
            :key="index"
            class="flex items-center gap-4"
          >
            <input
              v-model="step.text"
              type="text"
              class="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-600"
              placeholder="Add process step"
              required
            />
            <button
              type="button"
              class="text-gray-500 hover:text-red-600 transition"
              @click="removeField(processFormat, index)"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
          <button
            type="button"
            class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            @click="addProcessStep"
          >
            Add Step
          </button>
        </div>
      </form>
    </div>

    <!-- Footer with Buttons -->
    <div class="flex items-center justify-between p-6 border-t border-gray-300">
      <button
        @click="closeOpportunityDescriptionDialog"
        class="text-gray-500 hover:text-gray-700 transition"
      >
        Cancel
      </button>
      <button
        @click="handleSubmit"
        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Save Description
      </button>
    </div>
  </div>
</template>
