<script setup>
// Importing the images from the assets folder
import jobImage from '@/assets/img/job-geter.png';
import scholarshipImage from '@/assets/img/scholarship-home.png';
import engineeringImage from '@/assets/img/enginer.png';
import freelancingStudentImage from '@/assets/img/student-job.png';

// Updated Campaigns data including Engineering Skills
const sliderData = [
  {
    id: '1',
    title: 'Find the Right Job for You',
    description:
      'Unlock your dream career with personalized job matches tailored to your skills.',
    image: jobImage, // Replace with actual asset image
  },
  {
    id: '2',
    title: 'Access the Best Scholarships',
    description:
      'Discover exclusive scholarships designed to support your academic and professional growth.',
    image: scholarshipImage, // Replace with actual asset image
  },
  {
    id: '3',
    title: 'Enhance Your Engineering Skills to the Next Level',
    description:
      'Unlock your potential by finding the right job that fits your expertise.',
    image: engineeringImage, // Replace with actual asset image
  },
  {
    id: '4',
    title: 'Start Your Career While Studying',
    description:
      'Find flexible freelancing opportunities that let you earn and gain experience while pursuing your education.',
    image: freelancingStudentImage, // Replace with actual asset image
  },
];
</script>

<template>
  <div class="p-4 shadow-sm">
    <!-- Swiper component with autoplay and pagination enabled -->
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :pagination="{ type: 'bullets', clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="custom-swiper-container w-full"
    >
      <!-- Swiper slide for each campaign -->
      <SwiperSlide v-for="campaign in sliderData" :key="campaign.id">
        <div class="flex flex-col items-center justify-center h-full p-4">
          <!-- Campaign Image -->
          <img
            :src="campaign.image"
            alt="Campaign"
            class="w-full h-auto object-cover mb-2"
          />
          <!-- Campaign Title -->
          <h2 class="text-lg font-bold text-center">{{ campaign.title }}</h2>
          <!-- Campaign Description -->
          <p class="text-sm text-gray-600 text-center mb-4">
            {{ campaign.description }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
