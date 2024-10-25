<script setup lang="ts">
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  CheckCircle,
  Info,
  XCircle,
} from 'lucide-vue-next';
import { defineProps, ref, watch } from 'vue';
import { useUserCertificateStore } from '@/stores/useUserCertificateStore'; // Ensure this path is correct

// Import components from Shadcn for the date picker
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
  setShowDetails: (show: boolean) => void;
}>();

// Store instance
const certificateStore = useUserCertificateStore();

// Local state for form data
const certificateTitle = ref<string>('');
const issuingOrganization = ref<string>('');
const issuedDate = ref<DateValue | null>(null);
const expiryDate = ref<DateValue | null>(null);
const hasExpiry = ref<boolean>(false);

// Date formatter
const df = new DateFormatter('en-US', {
  dateStyle: 'long',
});

// Watcher to enable/disable expiry date input based on the checkbox state
watch(hasExpiry, newVal => {
  if (!newVal) {
    expiryDate.value = null;
  }
});
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
      <h2 class="text-xl px-3 font-semibold text-gray-700">Certificates</h2>
    </div>

    <!-- Form Content -->
    <div class="overflow-y-auto flex-1 p-6 sid-custom-scrollbar">
      <!-- Title of Certificate -->
      <div class="mb-6">
        <label
          class="block text-gray-700 font-medium mb-2"
          for="certificateTitle"
        >
          Title of Certificate <span class="text-red-500">*</span>
        </label>
        <input
          v-model="certificateTitle"
          type="text"
          id="certificateTitle"
          placeholder="Title of Certificate"
          class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Issuing Organization -->
      <div class="mb-6">
        <label
          class="block text-gray-700 font-medium mb-2"
          for="issuingOrganization"
        >
          Issuing Organization <span class="text-red-500">*</span>
        </label>
        <input
          v-model="issuingOrganization"
          type="text"
          id="issuingOrganization"
          placeholder="Organization"
          class="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Issued Date Picker -->
      <div class="mb-6 grid grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="issuedDate"
            >Issued date</label
          >
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                :class="
                  cn(
                    'w-full justify-start text-left font-normal',
                    !issuedDate && 'text-muted-foreground',
                  )
                "
              >
                <CalendarIcon class="mr-2 h-4 w-4" />
                {{
                  issuedDate
                    ? df.format(issuedDate.toDate(getLocalTimeZone()))
                    : 'Pick a date'
                }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="issuedDate!" initial-focus />
            </PopoverContent>
          </Popover>
        </div>

        <!-- Expiry Date Picker -->
        <div>
          <label class="block text-gray-700 font-medium mb-2" for="expiryDate"
            >Expiry Date</label
          >
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                :class="
                  cn(
                    'w-full justify-start text-left font-normal',
                    !expiryDate && 'text-muted-foreground',
                  )
                "
                :disabled="!hasExpiry"
              >
                <CalendarIcon class="mr-2 h-4 w-4" />
                {{
                  expiryDate
                    ? df.format(expiryDate.toDate(getLocalTimeZone()))
                    : 'Pick a date'
                }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="expiryDate!" initial-focus />
            </PopoverContent>
          </Popover>
          <div class="flex items-center mt-2">
            <input
              v-model="hasExpiry"
              type="checkbox"
              id="hasExpiry"
              class="mr-2 focus:ring-blue-500"
            />
            <label for="hasExpiry" class="text-gray-700">Has Expiry date</label>
          </div>
        </div>
      </div>

      <!-- Link this Certificate -->
      <div class="mb-6">
        <label
          class="block text-gray-700 font-medium mb-2"
          for="linkCertificate"
        >
          Link this Certificate <Info class="inline w-4 h-4 text-gray-500" />
        </label>
        <select
          id="linkCertificate"
          class="w-full px-4 py-3 text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-100 cursor-not-allowed"
          disabled
        >
          <option>Link this Certificate</option>
        </select>
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
        @click="
          certificateStore.createUserCertificate({
            user_id: 1, // Replace with actual user ID
            title: certificateTitle,
            issuing_organization_id: 1, // Replace with actual organization ID
            issued_date: issuedDate ? issuedDate.toString() : '',
            expiry_date: hasExpiry && expiryDate ? expiryDate.toString() : '',
          })
        "
        class="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none"
      >
        <CheckCircle class="w-5 h-5" /> Save
      </button>
    </div>
  </div>
</template>
