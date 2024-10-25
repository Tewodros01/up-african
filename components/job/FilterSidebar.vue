<script setup>
// Swiper Data for Job Seeker Guidance
const guidanceData = [
  {
    id: '1',
    title: 'I want to improve my resume',
    description:
      'Explore our curated guide of expert-led courses, such as improving your resume and growing your network.',
  },
  {
    id: '2',
    title: 'Learn interview techniques',
    description:
      'Master the art of interviews with practical tips and real-world examples to boost your confidence.',
  },
  {
    id: '3',
    title: 'Grow your professional network',
    description:
      'Connect with professionals in your field and learn networking best practices to unlock new opportunities.',
  },
  {
    id: '4',
    title: 'Explore in-demand skills',
    description:
      'Identify trending skills in the job market and enroll in relevant courses to stay competitive.',
  },
];
</script>

<template>
  <aside class="fixed top-30 hidden w-60 shrink-0 right-16 xl:block">
    <div
      class="overflow-hidden rounded-lg bg-white shadow-lg border border-gray-300 p-6 w-full md:max-w-sm"
    >
      <p class="font-medium text-base leading-7 text-black mb-3">
        Job Seeker Guidance
      </p>
      <p class="font-medium text-xs text-gray-500 mb-4">
        Recommended based on your activity
      </p>

      <!-- Swiper Component -->
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :pagination="{ type: 'bullets', clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="custom-swiper-container w-full h-56"
      >
        <SwiperSlide v-for="item in guidanceData" :key="item.id">
          <div class="bg-indigo-50 p-4 rounded-lg mb-4">
            <h5 class="font-medium text-sm text-gray-900">{{ item.title }}</h5>
            <p class="text-xs text-gray-600 mt-1">{{ item.description }}</p>
            <p
              class="font-medium text-xs text-indigo-600 cursor-pointer mt-2"
              @click="() => console.log('Show more clicked')"
            >
              Show more →
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </aside>
</template>

<style scoped>
.fixed {
  position: fixed;
}
</style>
