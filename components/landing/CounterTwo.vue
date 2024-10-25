<template>
  <div
    class="flex flex-col mx-auto w-full mt-10 max-w-7xl md:flex-row items-center bg-[#F5F1FF] rounded-2xl shadow-lg px-10 py-5"
  >
    <!-- Left Section -->
    <div class="flex-1 space-y-6 text-center md:text-left">
      <h1
        class="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug"
      >
        Don't<br />
        Just Be Good.<br />
        <span class="text-[#6B4EFF]">Be Great. Be Pro.</span>
      </h1>
      <p class="text-gray-500 text-base md:text-lg mt-4">
        A playground of opportunities awaits. Are you ready to go pro?
      </p>
      <button
        class="mt-6 bg-[#6B4EFF] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#5A3ACC] transition duration-300 flex items-center space-x-2"
      >
        Go Pro <span aria-hidden="true">↗</span>
      </button>
    </div>

    <!-- Right Section: Cards Grid -->
    <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Card 1 -->
      <div
        class="bg-white p-4 rounded-2xl shadow-md flex items-center space-x-3 transform rotate-[-4deg]"
      >
        <img
          src="https://via.placeholder.com/64"
          alt="Student"
          class="w-14 h-14 rounded-xl object-cover"
        />
        <div>
          <h2 class="text-base font-bold text-gray-800">50+ Courses</h2>
          <p class="text-gray-500 text-xs">Across multiple domains</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="bg-white p-4 rounded-2xl shadow-md transform rotate-[3deg] flex flex-col space-y-2"
      >
        <h2 class="text-base font-bold text-gray-800">15% off</h2>
        <p class="text-gray-500 text-xs">on all mentoring sessions</p>
        <p class="text-gray-500 text-xs mt-1">
          2000+ Mentors across 50+ Domains
        </p>
        <div class="flex items-center mt-2 space-x-2">
          <!-- Placeholder Logos -->
          <img
            src="https://via.placeholder.com/24"
            alt="Amazon"
            class="w-5 h-5"
          />
          <img src="https://via.placeholder.com/24" alt="EY" class="w-5 h-5" />
          <img
            src="https://via.placeholder.com/24"
            alt="Google"
            class="w-5 h-5"
          />
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="bg-white p-4 rounded-2xl shadow-md flex items-center space-x-3 transform rotate-[-2deg]"
      >
        <div
          class="w-10 h-10 bg-[#E0E8FF] rounded-full flex items-center justify-center"
        >
          <img
            src="https://via.placeholder.com/32"
            alt="Business Icon"
            class="w-6 h-6"
          />
        </div>
        <div>
          <h2 class="text-sm font-bold text-gray-800">
            Interview prep tools for <br />
            100+ companies
          </h2>
        </div>
      </div>

      <!-- Card 4 -->
      <div
        class="bg-white p-4 rounded-2xl shadow-md flex items-center space-x-3 transform rotate-[1deg]"
      >
        <div
          class="w-10 h-10 bg-[#E0E8FF] rounded-full flex items-center justify-center"
        >
          <img
            src="https://via.placeholder.com/32"
            alt="Code Icon"
            class="w-6 h-6"
          />
        </div>
        <div>
          <h2 class="text-sm font-bold text-gray-800">Exclusive solutions</h2>
          <p class="text-gray-500 text-xs">mock tests & exercises</p>
        </div>
      </div>

      <!-- Card 5 -->
      <div
        class="bg-white p-4 rounded-2xl shadow-md flex items-center space-x-3 transform rotate-[2deg]"
      >
        <div
          class="w-10 h-10 bg-[#E0E8FF] rounded-full flex items-center justify-center"
        >
          <img
            src="https://via.placeholder.com/32"
            alt="Star Icon"
            class="w-6 h-6"
          />
        </div>
        <div>
          <h2 class="text-sm font-bold text-gray-800">
            Exclusive Masterclasses
          </h2>
          <p class="text-gray-500 text-xs">INR 2,400 Avail at zero cost</p>
        </div>
      </div>

      <!-- Coupons Card -->
      <div
        class="bg-white p-4 rounded-2xl shadow-md flex items-center justify-between transform rotate-[3deg]"
      >
        <div>
          <h2 class="text-sm font-bold text-gray-800">Coupons Worth</h2>
          <p class="text-[#6B4EFF] text-xl font-bold">INR 7,200</p>
          <p class="text-gray-500 text-xs mt-1">
            Get 1 year Free OTTPlay Subscription
          </p>
        </div>
        <img
          src="https://via.placeholder.com/64"
          alt="OTTPlay Logo"
          class="w-12 h-12 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
