<script setup>
// Testimonial data (You can update this with actual data or props)
const testimonials = [
  { id: 1, userHandle: '@100xDevs', feedback: 'Amazing platform!' },
  { id: 2, userHandle: '@JaneDoe', feedback: 'Found my dream job here.' },
  { id: 3, userHandle: '@JohnSmith', feedback: 'Incredible opportunities.' },
  { id: 4, userHandle: '@AliceWonder', feedback: 'Best support team!' },
  { id: 5, userHandle: '@BobBuilder', feedback: 'Highly recommended.' },
  { id: 6, userHandle: '@CoderCat', feedback: 'Great learning experience.' },
];
</script>

<template>
  <div class="flex mx-auto justify-center items-center">
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :slidesPerView="4"
      :spaceBetween="30"
      loop="true"
      class="custom-swiper-container w-full"
    >
      <!-- Swiper slide for each testimonial -->
      <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="flex justify-center items-center">
          <TestmonialTestimonialCard :userHandle="testimonial.userHandle" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
