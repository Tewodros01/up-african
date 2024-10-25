<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeft, CheckCircle, User, Edit } from 'lucide-vue-next';
import { useUserBasicDetailStore } from '@/stores/useUserBasicDetailStore';
import { useToast } from '@/components/ui/toast/use-toast';

// Define props
const props = defineProps<{
  setShowDetails: (show: boolean) => void;
}>();

// Initialize the store
const userBasicDetailStore = useUserBasicDetailStore();
const { toast } = useToast();

// Reactive state variables for form data
const firstName = ref<string>('Tewodros');
const lastName = ref<string>('Misawoy');
const username = ref<string>('tewodmis6313');
const email = ref<string>('tewodrosm01@gmail.com');
const mobile = ref<string>('');
const selectedPronoun = ref<string>('He/Him/His');
const selectedGender = ref<string>('Male');
const userType = ref<string>('College Student');
const workExperience = ref<string>('');
const currentSector = ref<string>('');
const designation = ref<string>('');
const organizationCollege = ref<string>('');

const experiences = ['1-2 Years', '3-5 Years', '5+ Years'];
const sectors = ['IT', 'Finance', 'Healthcare', 'Education'];
const designations = ['Manager', 'Engineer', 'Analyst'];
const organizations = ['1-2 Years', '3-5 Years', '5+ Years'];

const isLoading = ref<boolean>(false); // Loading state

// Function to handle form submission
// Function to handle form submission
const saveUserBasicDetails = async () => {
  isLoading.value = true; // Set loading state to true
  try {
    await userBasicDetailStore.createUserBasicDetail({
      user_id: 1, // Replace with actual user ID
      first_name: firstName.value,
      last_name: lastName.value,
      mobile: mobile.value,
      pronouns: selectedPronoun.value,
      user_type: userType.value,
      work_experience: parseInt(workExperience.value) || null,
      current_sector: parseInt(currentSector.value),
      designation: designation.value,
      organization_id: 1, // Replace with actual organization ID if necessary
    });

    toast({
      title: 'Success',
      description: 'Job details saved successfully!',
    }); // Display success toast
  } catch (error) {
    toast({
      title: 'Error',
      description: 'An error occurred while saving job details.',
      variant: 'destructive',
    }); // Display error toast
  } finally {
    isLoading.value = false; // Set loading state to false
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
      <User class="w-4 h-4 text-gray-500 mr-2" />
      <h2 class="text-base font-semibold text-gray-500 mb-4 mt-4">
        Basic Details
      </h2>
    </div>
    <div>
      <CommonDivider />
    </div>

    <div
      v-if="isLoading"
      class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar"
    >
      <CommonLoadingDot />
    </div>

    <!-- Content -->
    <div v-else class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar">
      <!-- Profile Picture and Name Fields -->
      <div class="flex gap-6 mb-6">
        <div class="flex flex-col items-center">
          <div
            class="flex rounded-full bg-gray-200 w-36 h-36 items-center justify-center border-4 border-gray-300"
          >
            <div
              class="rounded-full bg-green-700 w-28 h-28 flex items-center justify-center text-white text-3xl"
            >
              T
            </div>
          </div>
        </div>

        <div class="flex-grow">
          <div class="">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-gray-500 text-sm font-medium mb-2"
                  >First Name <span class="text-red-500">*</span></label
                >
                <input
                  v-model="firstName"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label class="block text-gray-500 text-sm font-medium mb-2"
                  >Last Name <span class="text-red-500">*</span></label
                >
                <input
                  v-model="lastName"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <!-- Username Field -->
            <div class="mb-6 mt-4">
              <label class="block text-gray-500 text-sm font-medium mb-2"
                >Username <span class="text-red-500">*</span></label
              >
              <input
                v-model="username"
                type="text"
                class="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none cursor-not-allowed"
                readonly
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Email Field -->
      <div class="mb-6">
        <div class="flex justify-between">
          <label class="block text-gray-500 text-sm font-medium mb-2"
            >Email <span class="text-red-500">*</span></label
          >
          <button class="text-blue-600 text-sm flex items-center gap-1 mb-2">
            <Edit class="w-4 h-4" /> Update Email
          </button>
        </div>
        <input
          v-model="email"
          type="email"
          class="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none cursor-not-allowed"
          readonly
        />
      </div>

      <!-- Mobile Number Field with Country Dropdown -->
      <div class="mb-6">
        <CommonCustomePhoneInput />
      </div>

      <!-- Pronouns Selection -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Pronouns</label
        >
        <div class="flex gap-2">
          <button
            v-for="option in ['He/Him/His', 'She/Her', 'They/Them']"
            :key="option"
            @click="selectedPronoun = option"
            :class="{
              'bg-blue-100 text-blue-600': selectedPronoun === option,
              'bg-white': selectedPronoun !== option,
            }"
            class="px-4 py-2 border rounded-full text-sm hover:bg-blue-100 focus:bg-blue-100"
          >
            {{ option }}
          </button>
        </div>
      </div>

      <!-- Gender Selection -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Gender <span class="text-red-500">*</span></label
        >
        <div class="flex gap-2">
          <button
            v-for="gender in ['Male', 'Female', 'Other']"
            :key="gender"
            @click="selectedGender = gender"
            :class="{
              'bg-blue-100 text-blue-600': selectedGender === gender,
              'bg-white': selectedGender !== gender,
            }"
            class="px-4 py-2 border rounded-full text-sm hover:bg-blue-100 focus:bg-blue-100"
          >
            {{ gender }}
          </button>
        </div>
      </div>

      <!-- Work Experience Selector -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Organization / College <span class="text-red-500">*</span></label
        >
        <Select v-model="organizationCollege">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select organization" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="organization in organizations"
              :key="organization"
              :value="organization"
            >
              {{ organization }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Work Experience Selector -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Work Experience <span class="text-red-500">*</span></label
        >
        <Select v-model="workExperience">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Work Experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="experience in experiences"
              :key="experience"
              :value="experience"
            >
              {{ experience }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Current Sector Selector -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Current Sector <span class="text-red-500">*</span></label
        >
        <Select v-model="currentSector">
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

      <!-- Designation Selector -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2"
          >Designation <span class="text-red-500">*</span></label
        >
        <Select v-model="designation">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select Designation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="designation in designations"
              :key="designation"
              :value="designation"
            >
              {{ designation }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <!-- Save Button -->
    <div><CommonDivider /></div>
    <!-- Buttons -->
    <div class="flex justify-between gap-4 px-4 py-4 mb-5 bg-white">
      <button
        class="flex items-center gap-2 px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <XCircle class="w-5 h-5" /> Discard
      </button>
      <button
        @click="saveUserBasicDetails"
        class="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none"
      >
        <CheckCircle class="w-5 h-5" /> Save
      </button>
    </div>
  </div>
</template>
