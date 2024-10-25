<script setup>
// Define props for the component
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
    <!-- Header section with title and icon -->
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-base font-semibold flex items-center gap-2">
        <span class="text-purple-600">
          <!-- Info icon -->
          <IconInfo />
        </span>
        Featured Campaigns
      </h3>
    </div>

    <!-- Swiper component with pagination and autoplay enabled -->
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
      :pagination="{ type: 'bullets', clickable: true }"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      loop="true"
      class="custom-swiper-container"
    >
      <!-- Swiper slides for each campaign -->
      <SwiperSlide v-for="campaign in data" :key="campaign.id">
        <div
          class="flex flex-col items-center justify-center h-full p-4 bg-gray-50 rounded-lg"
        >
          <!-- Campaign image -->
          <img
            :src="campaign.image"
            alt="Campaign"
            class="w-full h-auto rounded-lg object-cover mb-2"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
