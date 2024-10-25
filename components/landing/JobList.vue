<script setup>
import { ref } from 'vue';
import { Clock } from 'lucide-vue-next';

// Importing images (ensure they are available in your assets folder)
import logo1 from '~/assets/logo.png';
import logo2 from '~/assets/logo1.png';
import logo3 from '~/assets/logo2.png';
import logo4 from '~/assets/logo3.png';

// Data for jobs
const jobsData = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Netflix',
  },
  {
    id: 2,
    image: logo2,
    title: 'UI Designer',
    time: '14Hrs',
    location: 'Manchester',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Google',
  },
  {
    id: 3,
    image: logo3,
    title: 'Software Eng.',
    time: 'Now',
    location: 'Austria',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Instagram',
  },
  {
    id: 4,
    image: logo4,
    title: 'Frontend Eng.',
    time: '2Mnths',
    location: 'Turkey',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Instagram',
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
          class="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"
        ></div>
        <h1 class="font-semibold text-2xl relative z-[10] text-darken lg:pr-10">
          Explore Top Job Opportunities Worldwide
        </h1>
        <p class="text-darker text-lg">
          Explore exciting career opportunities worldwide. Find your next role
          and apply today!
        </p>
      </div>
      <div class="flex space-x-4 pr-10">
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
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      }"
    >
      <!-- Slide for each job -->
      <SwiperSlide v-for="(job, index) in jobsData" :key="index">
        <div
          class="group singleJob w-[250px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/70 hover:shadow-lg"
        >
          <span class="flex justify-between items-center">
            <h1 class="text-[16px] font-semibold text-textColor">
              {{ job.title }}
            </h1>
            <span class="flex items-center text-[#ccc] gap-1">
              <Clock class="w-4 h-4" /> {{ job.time }}
            </span>
          </span>
          <h6 class="text-[#ccc]">{{ job.location }}</h6>

          <p
            class="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]"
          >
            {{ job.desc }}
          </p>

          <div class="company flex items-center gap-2">
            <img :src="job.image" alt="Company Logo" class="w-[10%]" />
            <span class="text-[14px] py-[1rem] block">
              {{ job.company }}
            </span>
          </div>

          <button
            class="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor group-hover:bg-blue-600 group-hover:text-white"
          >
            Apply Now
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  cursor: pointer;
  position: relative;
}

li::before {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 500ms all;
  position: absolute;
  content: '';
  height: 4px;
  width: 0%;
  background: #2a68ff;
  bottom: -10px;
  color: #2a68ff;
}

li:hover:before {
  width: 100%;
}

.icon {
  cursor: pointer;
}
</style>
