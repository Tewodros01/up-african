<script setup lang="ts">
import { Book, Star, LifeBuoy } from 'lucide-vue-next'; // Import necessary icons
</script>

<template>
  <div
    class="relative mb-4 max-container padding-container flex xs:flex-col-reverse md:flex-row-reverse items-center gap-12"
  >
    <!-- RIGHT: Person Image -->
    <div class="relative flex justify-center items-center xs:w-full md:w-1/2">
      <img
        class="z-[2] xs:w-[300px] xs:h-[300px] w-3/4 h-auto mx-auto"
        src="/assets/img/student-job.png"
        alt="person"
        width="500"
        height="500"
      />

      <!-- Decorative Elements -->
      <div
        class="absolute z-[1] gradient-purple rounded-full blur-sm w-[90px] h-[90px] xs:right-[10%] xs:top-5 md:right-[30%] md:top-[10%] lg:right-[10%] lg:top-[40%]"
      ></div>
      <div
        class="absolute z-[1] gradient-purple rounded-full blur-sm w-[50px] h-[50px] xs:left-[10%] xs:top-[10%] md:left-[25%] md:top-[40%] lg:top-[30%] xl:left-[10%]"
      ></div>
      <div
        class="absolute z-[1] bg-[#FF5722] rounded-full blur-sm w-[30px] h-[30px] xs:right-[20%] xs:bottom-[70%] md:right-[40%] md:bottom-[20%] lg:right-[50%] lg:bottom-[10%]"
      ></div>
      <div
        class="absolute z-[1] bg-[#FF5722] rounded-full blur-sm w-[20px] h-[20px] xs:left-[60%] xs:bottom-[80%] md:left-[35%] md:bottom-[50%] lg:left-[40%] lg:bottom-[30%]"
      ></div>
      <div
        class="absolute right-[-5%] rounded-s-full md:w-[55%] xs:w-[80%] xs:h-[400px] md:h-[450px] bg-[#FACD49]"
      ></div>
    </div>

    <!-- LEFT: Content Section -->
    <div class="relative flex flex-col gap-12 xs:w-full md:w-1/2">
      <div class="top flex flex-col gap-8">
        <h1 class="sm:text-5xl xs:text-6xl font-semibold">
          Premium <span class="text-blue-800">Scholarship</span> Opportunities
        </h1>
        <p class="text-base opacity-50">
          <span class="text-gray-800 font-bold">Unlock your potential</span>
          with access to exclusive scholarships designed for premium users.
          Connect with top universities and funding programs that match your
          academic goals and aspirations.
        </p>
      </div>

      <div class="bottom grid grid-cols-2 gap-8">
        <CommonPointCard
          title="5k+"
          subtitle="Scholarships"
          :icon="Book"
          position="top-28 left-8"
        />
        <CommonPointCard
          title="100+"
          subtitle="Top Universities"
          :icon="Book"
          position="top-28 left-8"
        />
        <CommonPointCard
          title="24/7"
          subtitle="Support"
          :icon="LifeBuoy"
          position="top-40 left-24"
        />
        <CommonPointCard
          title="99%"
          subtitle="Success Rate"
          :icon="Star"
          position="top-52 left-40"
        />
      </div>
    </div>
  </div>
</template>
