<script setup lang="ts">
import { ArrowLeft, CheckCircle } from 'lucide-vue-next';
import { defineProps, ref } from 'vue';
import { useUserSocialLinkStore } from '@/stores/useUserSocialLinkStore'; // Ensure this path is correct

// Define props
const props = defineProps<{
  setShowDetails: (show: boolean) => void;
}>();

// Store instance
const socialLinkStore = useUserSocialLinkStore();

// Local state for form data
const linkedin = ref<string>('');
const facebook = ref<string>('');
const instagram = ref<string>('');
const twitter = ref<string>('');
const git = ref<string>('');
const medium = ref<string>('');
const reddit = ref<string>('');
const slack = ref<string>('');
const dribbble = ref<string>('');
const behance = ref<string>('');

// Function to create or update social links
const saveSocialLinks = () => {
  socialLinkStore.createUserSocialLink({
    user_id: 1, // Replace with the actual user ID
    linkedin: linkedin.value,
    facebook: facebook.value,
    instagram: instagram.value,
    twitter: twitter.value,
    git: git.value,
    medium: medium.value,
    reddit: reddit.value,
    slack: slack.value,
    dribbble: dribbble.value,
    behance: behance.value,
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
      <h2 class="text-xl px-2 font-semibold text-gray-700">Social Links</h2>
    </div>
    <div class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar">
      <!-- Social Links Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- LinkedIn -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="linkedin"
            >LinkedIn</label
          >
          <input
            v-model="linkedin"
            type="text"
            id="linkedin"
            placeholder="Add link"
            class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Facebook -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="facebook"
            >Facebook</label
          >
          <input
            v-model="facebook"
            type="text"
            id="facebook"
            placeholder="Add link"
            class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Instagram -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="instagram"
            >Instagram</label
          >
          <input
            v-model="instagram"
            type="text"
            id="instagram"
            placeholder="Add link"
            class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Twitter -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="twitter"
            >Twitter</label
          >
          <input
            v-model="twitter"
            type="text"
            id="twitter"
            placeholder="Add link"
            class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Git -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="git"
            >Git</label
          >
          <input
            v-model="git"
            type="text"
            id="git"
            placeholder="Add link"
            class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Medium -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="medium"
            >Medium</label
          >
          <input
            v-model="medium"
            type="text"
            id="medium"
            placeholder="Add link"
            class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Reddit -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="reddit"
            >Reddit</label
          >
          <input
            v-model="reddit"
            type="text"
            id="reddit"
            placeholder="Add link"
            class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Slack -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="slack"
            >Slack</label
          >
          <input
            v-model="slack"
            type="text"
            id="slack"
            placeholder="Add link"
            class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Dribbble -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="dribbble"
            >Dribbble</label
          >
          <input
            v-model="dribbble"
            type="text"
            id="dribbble"
            placeholder="Add link"
            class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Behance -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="behance"
            >Behance</label
          >
          <input
            v-model="behance"
            type="text"
            id="behance"
            placeholder="Add link"
            class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
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
        @click="saveSocialLinks"
        class="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none"
      >
        <CheckCircle class="w-5 h-5" /> Save
      </button>
    </div>
  </div>
</template>
