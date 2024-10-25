<script setup lang="ts">
import { Rocket, Crown } from 'lucide-vue-next';
</script>

<template>
  <div class="flex flex-col">
    <div
      class="relative max-w-screen-xl max-container padding-container xs:py-12 sm:py-28 md:py-10 xs:gap-16 sm:gap-32 gap-0 flex flex-col xl:flex-row"
    >
      <div
        class="bg-hero h-screen w-screen xs:right-[5%] xs:top-[45%] sm:right-[5%] xl:top-[4%] xl:right-[-20%]"
      />

      <!-- LEFT -->
      <div class="relative z-2 flex flex-1 flex-col gap-8 xl:w-2/5">
        <div
          class="flex shadow gap-2 bg-white w-[215px] text-blue-800 rounded-3xl py-3 px-6"
        >
          <p class="font-semibold">Unlock Premium!</p>
          <Crown width="20" height="20" />
        </div>
        <h1 class="sm:text-5xl xs:text-6xl font-semibold">
          Discover <span class="text-blue-800">Exclusive </span>Opportunities
        </h1>
        <p class="text-[#191825] text-opacity-50 text-lg">
          Access top-tier jobs and scholarships worldwide, tailored for
          professionals and students.
        </p>
        <div class="btn-container flex gap-4">
          <NuxtLink
            to="/auth/login"
            class="bg-blue-800 text-white px-4 py-3 rounded-full hover:bg-blue-700 flex items-center justify-center space-x-2"
          >
            <Rocket class="w-4 md:w-5 h-4 md:h-5 mr-2" />
            <span class="text-xs md:text-base">Get Started </span>
          </NuxtLink>

          <CommonButton
            type="Commonbutton"
            title="Watch Demo"
            variant="btn_outline_black"
            icon="/assets/icon/play-circle.png"
          />
        </div>
      </div>

      <!-- RIGHT -->
      <div
        class="relative z-1 xl:w-3/5 flex items-center justify-center first-line:flex-1"
      >
        <img src="/assets/icon/frame.png" alt="frame" class="h-auto w-auto" />
        <img
          class="absolute xs:left-[-5%] sm:left-[0%] md:left-[10%] lg:left-[20%] xl:left-[10%] top-[42%]"
          src="/assets/icon/icon-place.png"
          alt="icon place"
          width="50"
          height="50"
        />
        <img
          class="absolute md:right-[30%] xs:right-[15%] xs:top-[90%]"
          src="/assets/icon/icon-people.png"
          alt="icon people"
          width="50"
          height="50"
        />
        <div
          class="absolute shadow sm:left-[75%] sm:top-[65%] xs:top-[50%] xs:left-[85%] flex sm:flex-row xs:flex-col items-center xs:text-center gap-2 bg-white rounded-3xl py-3 px-6"
        >
          <img
            src="/assets/icon/location.png"
            alt="location"
            width="20"
            height="20"
          />
          <p class="font-semibold text-xs">Top Opportunities</p>
        </div>
      </div>
    </div>
    <CommonPremiumJob />
    <CommonPremiumScholarship />
  </div>
</template>
