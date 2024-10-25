<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Divider from '@/components/common/Divider.vue';
import { ArrowLeft, Star } from 'lucide-vue-next';
import { useUserSkillStore } from '@/stores/useUserSkillStore';

// Define props
const props = defineProps<{
  setShowDetails: (value: boolean) => void;
}>();

// Initialize the store
const userSkillStore = useUserSkillStore();

// Local state
const newSkill = ref<string>('');
const selectedSkills = ref<Set<string>>(new Set()); // Using a Set to handle unique selected skills

// Fetch user skills when the component is mounted
onMounted(() => {
  userSkillStore.fetchUserSkills();
});

// Function to handle adding a new skill
const addSkill = () => {
  if (
    newSkill.value.trim() !== '' &&
    !selectedSkills.value.has(newSkill.value)
  ) {
    const skillData = {
      user_id: 1, // Replace with the actual user ID
      name: newSkill.value,
      proficiency_level: 'Beginner', // You can make this dynamic based on user input
      description: '',
    };
    userSkillStore.createUserSkill(skillData);
    selectedSkills.value.add(newSkill.value); // Add the new skill to the set
    newSkill.value = ''; // Clear the input field after adding
  }
};

const suggestions = [
  'Teamwork',
  'Proofreading',
  'Copywriting',
  'Keyword Analysis',
  'Memorization',
  'Debugging',
  'Calculus',
  'Google Cloud',
  'Bit Map Scaling',
];

// Function to add a suggested skill
const addSuggestedSkill = (skill: string) => {
  if (!selectedSkills.value.has(skill)) {
    const skillData = {
      user_id: 1, // Replace with the actual user ID
      name: skill,
      proficiency_level: 'Beginner', // Set the proficiency level based on requirements
      description: '',
    };
    userSkillStore.createUserSkill(skillData);
    selectedSkills.value.add(skill); // Add the skill to the set to keep track of selected skills
  }
};
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
      <Star class="w-4 h-4 text-gray-500 mr-2" />
      <h2 class="text-base font-semibold text-gray-500 mb-4 mt-4">Skills</h2>
    </div>
    <div>
      <Divider />
    </div>

    <!-- Content -->
    <div class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar">
      <!-- Suggested Skills Section -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Suggestions</label
        >
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div
            v-for="(skill, index) in suggestions"
            :key="index"
            :class="{
              'bg-blue-100 text-blue-600': selectedSkills.has(skill),
              'border-gray-300': !selectedSkills.has(skill),
            }"
            class="flex items-center border border-dashed rounded-full cursor-pointer"
            @click="addSuggestedSkill(skill)"
          >
            <span class="py-3 px-4 text-sm">{{ skill }}</span>
          </div>
        </div>
      </div>

      <!-- Skills Input Field -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Skills</label
        >
        <input
          v-model="newSkill"
          type="text"
          placeholder="List your skills here, showcasing what you excel at."
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- List of User Skills -->
      <div class="mb-6">
        <h3 class="text-gray-500 text-sm font-medium mb-2">Your Skills</h3>
        <ul>
          <li
            v-for="skill in userSkillStore.userSkills"
            :key="skill.id"
            class="flex items-center justify-between bg-gray-100 p-2 rounded-lg mb-2"
          >
            <span>{{ skill.name }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider and Save Button -->
    <div>
      <Divider />
    </div>
    <div class="flex justify-end p-4 bg-white mb-5">
      <button
        @click="addSkill"
        class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none"
      >
        Save
      </button>
    </div>
  </div>
</template>
