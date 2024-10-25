<script setup lang="ts">
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-vue-next';
import { defineProps, ref } from 'vue';
import { useUserHobbyStore } from '@/stores/useUserHobbyStore'; // Ensure this path is correct

// Define props
const props = defineProps<{
  setShowDetails: (show: boolean) => void;
}>();

// Store instance
const hobbyStore = useUserHobbyStore();

// Local state for form data
const hobbyName = ref<string>('');

// Function to create a hobby
const createHobby = () => {
  hobbyStore.createHobby({
    user_id: 1, // Replace with actual user ID
    name: hobbyName.value,
  });
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
      <h2 class="text-xl px-2 font-semibold text-gray-700">Hobbies</h2>
    </div>

    <div class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar">
      <!-- Hobby Name -->
      <div class="mb-6">
        <label class="block text-gray-700 font-medium mb-2" for="hobbyName">
          Hobby Name <span class="text-red-500">*</span>
        </label>
        <input
          v-model="hobbyName"
          type="text"
          id="hobbyName"
          placeholder="Hobby Name"
          class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>

    <!-- Divider and Buttons -->
    <div class="border-t border-gray-200"></div>

    <!-- Buttons -->
    <div class="flex justify-between gap-4 px-4 py-4 mb-5 bg-white">
      <button
        class="flex items-center gap-2 px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <XCircle class="w-5 h-5" /> Discard
      </button>
      <button
        @click="createHobby"
        class="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none"
      >
        <CheckCircle class="w-5 h-5" /> Save
      </button>
    </div>
  </div>
</template>
