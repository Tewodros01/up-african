<script setup lang="ts">
import { ref } from 'vue';
import { useUserAboutStore } from '@/stores/useUserAboutStore';
import {
  Activity,
  ArrowLeft,
  Briefcase,
  Edit,
  CheckCircle,
} from 'lucide-vue-next';
import {
  DateFormatter,
  type DateValue,
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
  setShowDetails: (value: boolean) => void;
}>();

// Initialize the store
const userAboutStore = useUserAboutStore();

// Date formatter
const df = new DateFormatter('en-US', {
  dateStyle: 'long',
});

const isLoading = ref(false);

// Local state
const location = ref<string>('');
const dob = ref<DateValue | null>(null);
const interests = ref<string>(''); // For the interests field
const aboutMe = ref<string>(''); // For the About Me field
const addressLine1 = ref<string>('');
const addressLine2 = ref<string>('');
const landmark = ref<string>('');
const pincode = ref<string>('');
const permanentAddressLine1 = ref<string>('');
const permanentAddressLine2 = ref<string>('');
const permanentLandmark = ref<string>('');
const permanentPincode = ref<string>('');
const copyCurrentAddress = ref<boolean>(false);

// Function to copy the current address to the permanent address
const copyAddress = () => {
  if (copyCurrentAddress.value) {
    permanentAddressLine1.value = addressLine1.value;
    permanentAddressLine2.value = addressLine2.value;
    permanentLandmark.value = landmark.value;
    permanentPincode.value = pincode.value;
  }
};

// Function to save user details
const saveUserDetails = async () => {
  isLoading.value = true; // Start loading
  try {
    // Construct the data object based on form fields
    const data = {
      user_id: 1, // Replace with actual user ID
      location: location.value,
      dob: dob ? dob.toString() : null, // Convert DateValue to string if available
      interests: interests.value ? interests.value.split(',') : [], // Split interests into an array
      about_me: aboutMe.value,
      current_address_line1: addressLine1.value,
      current_address_line2: addressLine2.value,
      current_landmark: landmark.value,
      current_pincode: pincode.value,
      permanent_address_line1: permanentAddressLine1.value,
      permanent_address_line2: permanentAddressLine2.value,
      permanent_landmark: permanentLandmark.value,
      permanent_pincode: permanentPincode.value,
    };

    // Call the store's createUserAbout method
    await userAboutStore.createUserAbout(data);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    isLoading.value = false; // End loading
  }
};
</script>

<template>
  <div class="bg-white shadow rounded-lg flex flex-col h-[calc(100vh-4rem)]">
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
      <Activity class="w-4 h-4 text-gray-500 mr-2" />
      <h2 class="text-base font-semibold text-gray-500 mb-4 mt-4">About</h2>
    </div>
    <CommonDivider />

    <div
      v-if="isLoading"
      class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar"
    >
      <CommonLoadingDot />
    </div>

    <!-- Content -->
    <div v-else class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar">
      <!-- Purpose Selection -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2">
          Purpose <span class="text-red-500">*</span>
        </label>
        <div class="flex gap-4">
          <button
            class="flex items-center gap-2 py-2 px-4 border border-dashed rounded-full border-gray-300 text-gray-500 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500"
          >
            <Briefcase class="w-4 h-4 text-gray-500" />
            Open to Work
          </button>
          <button
            class="flex items-center gap-2 py-2 px-4 border border-dashed rounded-full border-gray-300 text-gray-500 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500"
          >
            <Edit class="w-4 h-4 text-gray-500" />
            Hiring
          </button>
          <button
            class="flex items-center gap-2 py-2 px-4 border border-dashed rounded-full border-gray-300 text-gray-500 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500"
          >
            <Activity class="w-4 h-4 text-gray-500" />
            Compete & Upskill
          </button>
        </div>
      </div>

      <!-- Interests Field -->
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-medium mb-2">
          Interests <span class="text-red-500">*</span>
        </label>
        <input
          v-model="interests"
          type="text"
          placeholder="List your passion & interests to connect with similar users."
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- About Me Field -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2">
          About Me <span class="text-red-500">*</span>
        </label>
        <textarea
          v-model="aboutMe"
          rows="4"
          placeholder="Introduce yourself here! Share a brief overview of who you are, your interests, and connect with fellow users, recruiters & organizers."
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <!-- Location Field -->
      <div class="mb-6">
        <label class="block text-gray-500 text-sm font-medium mb-2">
          Location <span class="text-red-500">*</span>
        </label>
        <input
          v-model="location"
          type="text"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Location"
        />
      </div>

      <!-- Date of Birth Field -->
      <div class="mb-6">
        <label class="block text-gray-700 font-medium mb-2" for="dob"
          >Dob</label
        >
        <Popover>
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              :class="
                cn(
                  'w-full justify-start text-left font-normal',
                  !dob && 'text-muted-foreground',
                )
              "
            >
              <CalendarIcon class="mr-2 h-4 w-4" />
              {{
                dob ? df.format(dob.toDate(getLocalTimeZone())) : 'Pick a date'
              }}
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar v-model="dob!" initial-focus />
          </PopoverContent>
        </Popover>
      </div>

      <!-- Current Address Section -->
      <div class="mb-6 p-4 border rounded-lg">
        <h3 class="text-lg font-semibold text-gray-600 mb-4">
          Current Address
        </h3>
        <Divider />
        <div class="mt-4">
          <!-- Address Line 1 -->
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-medium mb-2"
              >Address Line 1</label
            >
            <input
              v-model="addressLine1"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Address 1"
            />
          </div>

          <!-- Address Line 2 -->
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-medium mb-2"
              >Address Line 2</label
            >
            <input
              v-model="addressLine2"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Address 2"
            />
          </div>

          <!-- Landmark -->
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-medium mb-2"
              >Landmark</label
            >
            <input
              v-model="landmark"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Landmark"
            />
          </div>

          <!-- Pincode -->
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-medium mb-2"
              >Pincode</label
            >
            <input
              v-model="pincode"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Pincode"
            />
          </div>
        </div>
      </div>

      <!-- Permanent Address Section -->
      <div class="mb-6 p-4 border rounded-lg">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-600 mb-4">
            Permanent Address
          </h3>
          <label
            class="flex items-center text-gray-500 text-sm font-medium mb-2"
          >
            <input
              type="checkbox"
              v-model="copyCurrentAddress"
              @change="copyAddress"
              class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out mr-2"
            />
            Copy Current Address
          </label>
        </div>
        <Divider />
        <div class="mt-4">
          <!-- Address Line 1 -->
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-medium mb-2"
              >Address Line 1</label
            >
            <input
              v-model="permanentAddressLine1"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Address 1"
              :readonly="copyCurrentAddress"
            />
          </div>

          <!-- Address Line 2 -->
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-medium mb-2"
              >Address Line 2</label
            >
            <input
              v-model="permanentAddressLine2"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Address 2"
              :readonly="copyCurrentAddress"
            />
          </div>

          <!-- Landmark -->
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-medium mb-2"
              >Landmark</label
            >
            <input
              v-model="permanentLandmark"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Landmark"
              :readonly="copyCurrentAddress"
            />
          </div>

          <!-- Pincode -->
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-medium mb-2"
              >Pincode</label
            >
            <input
              v-model="permanentPincode"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Pincode"
              :readonly="copyCurrentAddress"
            />
          </div>
        </div>
      </div>
    </div>

    <div><CommonDivider /></div>
    <div class="flex justify-between gap-4 px-4 py-4 mb-5 bg-white">
      <button
        class="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-100 focus:outline-none flex items-center gap-2"
      >
        <Trash2 class="w-4 h-4 text-gray-700" />
        Discard
      </button>
      <button
        @click="saveUserDetails"
        :disabled="isLoading"
        class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none flex items-center gap-2"
      >
        <CheckCircle class="w-5 h-5" v-if="!isLoading" />
        {{ isLoading ? 'Saving...' : 'Save' }}
      </button>
    </div>
  </div>
</template>
