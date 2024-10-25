<script setup lang="ts">
import { ListChecks, XIcon } from 'lucide-vue-next'; // Icons
import { ref, reactive } from 'vue';

// Form Data
const recruitmentTitle = ref('');
const rounds = reactive([{ type: 'Quiz', description: '' }]);

// Access dialog state from the composable
const { isRecruitmentProcessDialogOpen, closeRecruitmentProcessDialog } =
  useMicrositeDialog();

// Handle form submission
const handleSubmit = () => {
  console.log('Recruitment Process:', {
    recruitmentTitle: recruitmentTitle.value,
    rounds,
  });
  closeRecruitmentProcessDialog(); // Close the dialog after submission
};

// Add new round dynamically
const addRound = () => {
  rounds.push({ type: '', description: '' });
};

// Remove a specific round
const removeRound = (index: number) => {
  rounds.splice(index, 1);
};
</script>

<template>
  <!-- Overlay Backdrop -->
  <div
    v-if="isRecruitmentProcessDialogOpen"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
  ></div>

  <!-- Right-Side Sliding Modal -->
  <div
    :class="`fixed top-0 right-0 h-full w-full md:w-5/6 max-w-4xl bg-white shadow-xl border-l border-gray-300 transform transition-transform duration-300 ease-in-out z-50 ${
      isRecruitmentProcessDialogOpen ? 'translate-x-0' : 'translate-x-full'
    }`"
  >
    <!-- Header with Close Button -->
    <div class="flex items-center justify-between p-6 border-b border-gray-300">
      <div class="flex items-center gap-2">
        <ListChecks class="w-6 h-6 text-gray-600" />
        <h2 class="text-base font-semibold text-gray-700">
          Recruitment Process
        </h2>
      </div>
      <button
        @click="closeRecruitmentProcessDialog"
        class="text-gray-500 hover:text-gray-700 transition"
        aria-label="Close"
      >
        <XIcon class="w-6 h-6" />
      </button>
    </div>

    <!-- Form Content -->
    <div class="p-6 overflow-auto" style="max-height: calc(100vh - 150px)">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Recruitment Title -->
        <div>
          <label for="recruitmentTitle" class="block font-medium text-gray-700">
            Recruitment Title
          </label>
          <input
            v-model="recruitmentTitle"
            type="text"
            id="recruitmentTitle"
            class="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-600"
            placeholder="Enter recruitment title"
            required
          />
        </div>

        <!-- Rounds List -->
        <div class="space-y-4">
          <label class="block font-medium text-gray-700">Rounds</label>
          <div
            v-for="(round, index) in rounds"
            :key="index"
            class="flex items-start gap-4"
          >
            <input
              v-model="round.type"
              type="text"
              class="w-1/3 p-2 border rounded focus:ring-2 focus:ring-blue-600"
              placeholder="e.g., Quiz, Hackathon"
              required
            />
            <textarea
              v-model="round.description"
              class="w-2/3 p-2 border rounded focus:ring-2 focus:ring-blue-600"
              rows="2"
              placeholder="Describe the round"
            ></textarea>
            <button
              type="button"
              @click="removeRound(index)"
              class="text-gray-500 hover:text-red-600 transition"
              aria-label="Remove round"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Add Round Button -->
        <div class="flex justify-end">
          <button
            type="button"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            @click="addRound"
          >
            Add Round
          </button>
        </div>
      </form>
    </div>

    <!-- Footer with Save and Cancel Buttons -->
    <div class="flex items-center justify-between p-6 border-t border-gray-300">
      <button
        @click="closeRecruitmentProcessDialog"
        class="text-gray-500 hover:text-gray-700 transition"
      >
        Cancel
      </button>
      <button
        @click="handleSubmit"
        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Save Process
      </button>
    </div>
  </div>
</template>
