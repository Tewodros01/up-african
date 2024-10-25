<script setup lang="ts">
import { ImageIcon, XIcon, FileImageIcon } from 'lucide-vue-next'; // Icons

// Access the dialog state from the composable
const { isBannerDialogOpen, closeBannerDialog } = useMicrositeDialog();

// Template Images Data
const templateImages = [
  'https://via.placeholder.com/300x150/0000FF/808080?text=Default',
  'https://via.placeholder.com/300x150/008080/FFFFFF?text=Simplified',
  'https://via.placeholder.com/300x150/FF0000/FFFFFF?text=None',
  'https://via.placeholder.com/300x150/00FF00/000000?text=Custom',
  'https://via.placeholder.com/300x150/FFA500/FFFFFF?text=Creative',
  'https://via.placeholder.com/300x150/800080/FFFFFF?text=Professional',
];
</script>

<template>
  <!-- Overlay Backdrop -->
  <div
    v-if="isBannerDialogOpen"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
  ></div>

  <!-- Right-Side Sliding Modal -->
  <div
    :class="`fixed top-0 right-0 h-full w-full md:w-5/6 max-w-3xl bg-white shadow-xl border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-50 ${
      isBannerDialogOpen ? 'translate-x-0' : 'translate-x-full'
    }`"
  >
    <!-- Header -->
    <div class="flex items-center justify-between p-6 border-b border-gray-300">
      <h2 class="text-base font-semibold text-gray-700 flex items-center gap-2">
        <FileImageIcon class="w-6 h-6 text-blue-600" />
        Cover Image
      </h2>
      <button
        @click="closeBannerDialog"
        class="text-gray-500 hover:text-gray-700 transition"
        aria-label="Close"
      >
        <XIcon class="w-6 h-6" />
      </button>
    </div>

    <!-- Main Content Area -->
    <div class="p-6 overflow-auto" style="max-height: calc(100vh - 150px)">
      <h3 class="text-base font-medium text-gray-700 mb-2">
        Default Cover Image
      </h3>
      <p class="text-xs text-gray-500 mb-4">
        We will add a default cover image in case you do not upload custom
        desktop or mobile banners. You can also customize these as per your
        liking. A wide range of color themes are available.
      </p>

      <!-- Color Selection -->
      <div class="flex items-center gap-4 mb-6">
        <button
          class="w-8 h-8 rounded-full bg-blue-600 border-2 border-transparent focus:ring-2 ring-blue-400"
        ></button>
        <button
          class="w-8 h-8 rounded-full bg-purple-600 border-2 border-transparent focus:ring-2 ring-purple-400"
        ></button>
        <button
          class="w-8 h-8 rounded-full bg-yellow-500 border-2 border-transparent focus:ring-2 ring-yellow-400"
        ></button>
        <button
          class="w-8 h-8 rounded-full bg-green-500 border-2 border-transparent focus:ring-2 ring-green-400"
        ></button>
      </div>

      <!-- Info Section -->
      <div
        class="p-4 bg-blue-50 border border-dashed border-blue-400 rounded-lg mb-6"
      >
        <div class="flex items-center gap-2">
          <ImageIcon class="w-5 h-5 text-blue-600" />
          <p class="text-xs text-blue-600">
            This cover image will only be displayed if no custom image is
            uploaded.
          </p>
        </div>
      </div>

      <!-- Template Grid -->
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="(src, index) in templateImages"
          :key="index"
          class="relative border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img :src="src" alt="Template" class="w-full h-32 object-cover" />
          <div
            class="absolute inset-0 border-2 border-transparent hover:border-blue-500 transition-all"
          ></div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between p-6 border-t border-gray-300">
      <button
        @click="closeBannerDialog"
        class="text-gray-500 hover:text-gray-700 transition"
      >
        Close
      </button>
      <button
        @click="closeBannerDialog"
        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Save
      </button>
    </div>
  </div>
</template>
