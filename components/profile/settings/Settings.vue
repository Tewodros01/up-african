<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">Settings</h2>
    <div class="px-4">
      <!-- Notifications Section -->
      <div
        class="border-b border-gray-200 mb-4 overflow-hidden transition-all duration-300"
        :style="{ height: expanded.notifications ? 'auto' : '3rem' }"
      >
        <div
          @click="toggleSection('notifications')"
          class="flex justify-between items-center cursor-pointer bg-gray-100 px-4 py-2"
        >
          <span class="text-gray-700 font-medium">Notifications</span>
          <ChevronDown v-if="!expanded.notifications" class="text-gray-500" />
          <ChevronUp v-if="expanded.notifications" class="text-gray-500" />
        </div>
        <div v-if="expanded.notifications" class="bg-gray-50 p-4">
          <h3 class="text-md font-semibold text-gray-700 mb-2">
            Newsletter Preference
          </h3>
          <p class="text-sm text-gray-500 mb-4">
            Our newsletter will gain you access to the latest updates regarding
            the hiring challenges of top recruiters (like Walmart, Flipkart,
            Uber, Amazon, etc.), jobs & internships, competitions, quizzes, and
            hackathons from elite colleges across the world.
          </p>
          <div class="flex justify-between items-center mb-4">
            <span class="text-sm text-gray-700">Newsletter Preference</span>
            <input type="checkbox" class="form-toggle" />
          </div>
          <h3 class="text-md font-semibold text-gray-700 mb-2">
            Notification Preferences
          </h3>
          <p class="text-sm text-gray-500 mb-4">
            Automated reminders are sent in case of incomplete registration
            (incomplete extended form or incomplete payment), daily quiz and
            hackathon reminders, submission reminders, and reminder to submit a
            review. You can turn on the emails sent by the organizers for a
            single/multiple competitions from the My Registration page.
          </p>
          <div class="flex justify-between items-center mb-4">
            <span class="text-sm text-gray-700">Notification Preferences</span>
            <input type="checkbox" class="form-toggle" />
          </div>
        </div>
      </div>
      <!-- Password Section -->
      <div
        class="border-b border-gray-200 mb-4 overflow-hidden transition-all duration-300"
        :style="{ height: expanded.password ? 'auto' : '3rem' }"
      >
        <div
          @click="toggleSection('password')"
          class="flex justify-between items-center cursor-pointer bg-gray-100 px-4 py-2"
        >
          <span class="text-gray-700 font-medium">Password</span>
          <ChevronDown v-if="!expanded.password" class="text-gray-500" />
          <ChevronUp v-if="expanded.password" class="text-gray-500" />
        </div>
        <div v-if="expanded.password" class="bg-gray-50 p-4">
          <h3 class="text-md font-semibold text-gray-700 mb-2">
            Change Password
          </h3>
          <p class="text-sm text-gray-500 mb-4">
            If you wish to change your password, you can change from here.
          </p>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Enter current password</label
            >
            <input type="password" class="w-full p-2 border rounded-lg" />
          </div>
          <div class="flex space-x-4 mb-4">
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Enter new password</label
              >
              <input type="password" class="w-full p-2 border rounded-lg" />
            </div>
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Confirm password</label
              >
              <input type="password" class="w-full p-2 border rounded-lg" />
            </div>
          </div>
          <button
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg cursor-not-allowed"
            disabled
          >
            Submit
          </button>
        </div>
      </div>
      <!-- Profile Section -->
      <div
        class="border-b border-gray-200 mb-4 overflow-hidden transition-all duration-300"
        :style="{ height: expanded.profile ? 'auto' : '3rem' }"
      >
        <div
          @click="toggleSection('profile')"
          class="flex justify-between items-center cursor-pointer bg-gray-100 px-4 py-2"
        >
          <span class="text-gray-700 font-medium">Profile</span>
          <ChevronDown v-if="!expanded.profile" class="text-gray-500" />
          <ChevronUp v-if="expanded.profile" class="text-gray-500" />
        </div>
        <div v-if="expanded.profile" class="bg-gray-50 p-4">
          <!-- Profile content here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDown, ChevronUp } from "lucide-vue-next";

const expanded = ref({
  notifications: true,
  password: false,
  profile: false,
});

const toggleSection = (section) => {
  expanded.value[section] = !expanded.value[section];
};
</script>

<style>
.form-toggle {
  appearance: none;
  width: 2.5rem;
  height: 1.25rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-toggle:checked {
  background-color: #3b82f6;
}

.form-toggle::before {
  content: "";
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1rem;
  height: 1rem;
  background-color: #ffffff;
  border-radius: 9999px;
  transition: transform 0.3s ease;
}

.form-toggle:checked::before {
  transform: translateX(1.25rem);
}
</style>
