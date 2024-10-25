<template>
  <div
    class="flex flex-col md:flex-row w-full items-stretch mx-auto max-w-7xl mt-20 bg-white rounded-2xl shadow-lg overflow-hidden"
  >
    <!-- Left Section: Download Unstop App -->
    <div
      class="flex-[0.6] flex flex-col items-center justify-between bg-[#E6F0FF] h-full rounded-2xl pt-10 px-8 text-center"
    >
      <div class="flex flex-col items-center space-y-4">
        <h2 class="text-lg font-semibold text-[#1B5BC6]">Download</h2>
        <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Unstop App</h1>
        <!-- App Store Icons -->
        <div class="flex space-x-4 mt-4">
          <img
            src="https://via.placeholder.com/40x40"
            alt="Play Store"
            class="w-8 h-8 object-contain"
          />
          <img
            src="https://via.placeholder.com/40x40"
            alt="App Store"
            class="w-8 h-8 object-contain"
          />
        </div>
      </div>
      <!-- Phone Images -->
      <div class="flex items-center justify-center mt-6 space-x-4">
        <img
          src="https://via.placeholder.com/100x200"
          alt="Phone 1"
          class="w-16 h-32 object-contain"
        />
        <img
          src="https://via.placeholder.com/100x200"
          alt="Phone 2"
          class="w-16 h-32 object-contain"
        />
        <img
          src="https://via.placeholder.com/100x200"
          alt="Phone 3"
          class="w-16 h-32 object-contain"
        />
      </div>
    </div>

    <!-- Right Section: Refer & Win -->
    <div
      class="flex-[1.4] flex flex-col justify-between bg-[#FFF7D6] h-full rounded-2xl py-10 px-8 text-center md:text-left space-y-6 relative overflow-hidden"
    >
      <!-- Heading and Subheading -->
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Refer & Win</h2>
      <p class="text-gray-600 text-base md:text-lg">
        MacBook, iPhone, Apple Watch, AirPods, Cash Rewards and more!
      </p>
      <!-- Get Started Button -->
      <button
        class="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 w-fit mx-auto md:mx-0"
      >
        Get Started
      </button>
      <!-- Icons -->
      <div
        class="flex items-center space-x-4 mt-4 justify-center md:justify-start"
      >
        <img
          src="https://via.placeholder.com/40x40"
          alt="MacBook"
          class="w-10 h-10 rounded-full bg-white p-1 shadow-md"
        />
        <img
          src="https://via.placeholder.com/40x40"
          alt="iPhone"
          class="w-10 h-10 rounded-full bg-white p-1 shadow-md"
        />
        <img
          src="https://via.placeholder.com/40x40"
          alt="AirPods"
          class="w-10 h-10 rounded-full bg-white p-1 shadow-md"
        />
        <img
          src="https://via.placeholder.com/40x40"
          alt="Apple Watch"
          class="w-10 h-10 rounded-full bg-white p-1 shadow-md"
        />
      </div>
      <!-- Background Graphics -->
      <div
        class="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-[30%]"
      >
        <img
          src="https://via.placeholder.com/200x300"
          alt="Happy Couple"
          class="w-48 md:w-64 object-contain"
        />
      </div>
    </div>
  </div>
</template>
