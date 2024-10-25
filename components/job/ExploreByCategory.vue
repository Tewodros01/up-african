<script setup>
import { Layers, Star, Briefcase, PenTool } from 'lucide-vue-next';

// Category Data
const categories = [
  {
    title: 'Software Engineering',
    vacancies: '980',
    icon: Layers,
    selected: false,
  },
  {
    title: 'Product Management',
    vacancies: '960',
    icon: Briefcase,
    selected: true, // Highlighted as active
  },
  {
    title: 'Management / CXO',
    vacancies: '850',
    icon: Star,
    selected: false,
  },
  {
    title: 'UI/UX Design',
    vacancies: '650',
    icon: PenTool,
    selected: false,
  },
  {
    title: 'UI/UX Design',
    vacancies: '650',
    icon: PenTool,
    selected: false,
  },
];

const swiperRef = ref(null);

const setSwiperInstance = swiper => {
  swiperRef.value = swiper;
};

const scrollLeft = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};

const scrollRight = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};
</script>

<template>
  <div class="mx-auto py-8 max-w-7xl px-4">
    <!-- Title and Description -->
    <div class="flex justify-between items-center mb-6 px-1">
      <div class="sm:w-1/2 relative">
        <div
          class="bg-blue-700 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"
        ></div>
        <h1 class="font-semibold text-2xl relative z-[10] text-darken lg:pr-10">
          Explore Opportunities By Category
        </h1>
      </div>
      <div class="flex space-x-4 md:pr-8">
        <!-- Swiper navigation buttons -->
        <button
          class="bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none"
          @click="scrollLeft"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          class="bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none"
          @click="scrollRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Swiper Slider -->
    <Swiper
      ref="swiperRef"
      :space-between="5"
      @swiper="setSwiperInstance"
      :breakpoints="{
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 20 },
      }"
    >
      <!-- Slide for each job -->
      <SwiperSlide v-for="(category, index) in categories" :key="index">
        <JobCategoryCard
          :title="category.title"
          :vacancies="category.vacancies"
          :icon="category.icon"
          :selected="category.selected"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
