<script setup>
import { ref } from 'vue';
import { FolderClosed, Eye, ThumbsUp } from 'lucide-vue-next';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const hoveredImage = ref(false);

const onMouseEnter = () => {
  hoveredImage.value = true;
};

const onMouseLeave = () => {
  hoveredImage.value = false;
};

const openContentModal = () => {
  localStorage.setItem('item', JSON.stringify(props.item));
  // Trigger the modal opening event here if needed
};
</script>

<template>
  <div class="flex flex-col gap-1 rounded-md border-2 p-4 bg-white">
    <div class="flex vignette relative" @click="openContentModal">
      <img
        :src="item.images[0]"
        alt="random"
        class="rounded-md w-[20rem] h-[14rem] object-cover"
        width="400"
        height="400"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      />
      <div
        v-if="hoveredImage"
        @mouseenter="onMouseEnter"
        class="font-bold absolute top-2 left-2 z-10 flex justify-center items-center w-[5.5rem] text-sm text-white bg-gray-800 rounded-2xl"
      >
        <button class="p-2 rounded-full flex items-center justify-center gap-2">
          <FolderClosed size="16" />
          <h1>Save</h1>
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-between">
        <div class="flex">
          <h1 class="font-bold">{{ item.imageTitle }}</h1>
        </div>
        <div class="flex gap-3 text-sm">
          <div class="flex gap-1 items-center">
            <ThumbsUp size="16" class="text-gray-500" />
            <h1 class="font-bold">
              {{
                item.likes > 1000
                  ? (item.likes / 1000).toFixed(1) + 'k'
                  : item.likes
              }}
            </h1>
          </div>
          <div class="flex gap-1 items-center">
            <Eye size="16" class="text-gray-500" />
            <h1 class="font-bold">
              {{
                item.views > 1000
                  ? (item.views / 1000).toFixed(1) + 'k'
                  : item.views
              }}
            </h1>
          </div>
        </div>
      </div>
      <div class="flex">
        <h1 class="text-sm text-gray-500 mt-[-2px]">{{ item.creatorName }}</h1>
      </div>
    </div>
  </div>
</template>
