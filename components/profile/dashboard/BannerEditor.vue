<script setup lang="ts">
import { ArrowLeft, Info, Save } from "lucide-vue-next";
import { defineProps, ref } from "vue";

// Define props with TypeScript types
const props = defineProps<{
  isEditingBanner: boolean;
  setIsEditingBanner: (value: boolean) => void;
}>();

// Selected color and template
const selectedColor = ref<string>("#4A90E2");
const selectedTemplate = ref<number>(1);

// Available colors and banner templates
const availableColors = ["#4A90E2", "#F5A623", "#7ED321", "#BD10E0"];
const bannerTemplates = [
  { id: 1, src: "/images/template1.png" },
  { id: 2, src: "/images/template2.png" },
  { id: 3, src: "/images/template3.png" },
  { id: 4, src: "/images/template4.png" },
];

// Function to handle color selection
const selectColor = (color: string) => {
  selectedColor.value = color;
};

// Function to handle template selection
const selectTemplate = (templateId: number) => {
  selectedTemplate.value = templateId;
};

// Save changes (for demonstration, just logging to console)
const saveChanges = () => {
  console.log("Color selected:", selectedColor.value);
  console.log("Template selected:", selectedTemplate.value);
  props.setIsEditingBanner(false); // Close sidebar after saving
};

// Close the editor
const closeEditor = () => {
  props.setIsEditingBanner(false);
};
</script>

<template>
  <div>
    <!-- Dark overlay when editing banner -->
    <div
      v-if="props.isEditingBanner"
      class="fixed inset-0 bg-black bg-opacity-50 z-[20]"
      @click="closeEditor"
    ></div>

    <!-- Sidebar Editor -->
    <div
      :class="`fixed top-0 right-0 h-full w-full md:w-1/2 shadow-lg bg-white border-l border-slate-200 transform transition-transform duration-300 ease-in-out z-[20] ${
        props.isEditingBanner ? 'translate-x-0' : 'translate-x-full'
      }`"
    >
      <div class="flex flex-col h-full">
        <!-- Header with Back Button -->
        <div class="flex justify-between items-center px-2 py-4 border-b">
          <div class="flex items-center space-x-2">
            <div
              class="flex rounded-full bg-gray-100 w-10 h-10 items-center justify-center"
            >
              <button
                @click="closeEditor"
                class="text-gray-400 hover:text-gray-600"
              >
                <ArrowLeft class="text-lg p-1" />
              </button>
            </div>
            <div class="flex h-10 items-center justify-center">
              <h2 class="text-lg text-gray-600 font-bold">Cover Image</h2>
            </div>
          </div>
        </div>

        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto p-6">
          <!-- Description -->
          <p class="text-sm text-gray-600 mb-6">
            Default Cover Image: We will add a default cover image in case you
            do not upload custom desktop or mobile banners. You can also
            customize these as per your liking. A wide range of color themes are
            also available.
          </p>

          <!-- Color Theme Selection -->
          <div class="mb-6">
            <p class="text-sm text-gray-700 mb-2 font-medium">
              Choose Templates
            </p>
            <div class="flex gap-4">
              <div
                v-for="color in availableColors"
                :key="color"
                :style="{ backgroundColor: color }"
                @click="selectColor(color)"
                :class="{
                  'ring-4 ring-offset-2 ring-blue-500': selectedColor === color,
                }"
                class="h-8 w-8 rounded-full cursor-pointer transition-all"
              ></div>
            </div>
          </div>

          <!-- Info Message -->
          <div
            class="flex items-center gap-2 p-2 text-blue-600 border border-blue-300 rounded-md bg-blue-50 mb-6"
          >
            <Info class="w-5 h-5" />
            <p class="text-xs">
              This cover image will only be displayed if no cover image has been
              uploaded.
            </p>
          </div>

          <!-- Template Selection -->
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="template in bannerTemplates"
              :key="template.id"
              @click="selectTemplate(template.id)"
              :class="{
                'ring-2 ring-blue-500': selectedTemplate === template.id,
              }"
              class="cursor-pointer rounded-md overflow-hidden shadow-sm"
            >
              <img
                :src="template.src"
                alt="Banner Template"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <!-- Save and Close Buttons -->
        <div class="px-6 py-4 border-t bg-white flex justify-between space-x-4">
          <button
            @click="closeEditor"
            class="text-gray-600 px-4 py-2 border-2 border-blue-600 hover:text-white rounded-md hover:bg-blue-700 flex items-center space-x-2"
          >
            Close
          </button>
          <button
            @click="saveChanges"
            class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
          >
            <Save class="w-5 h-5" />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
