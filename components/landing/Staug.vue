<template>
  <div class="flex justify-center items-center mb-40">
    <div
      class="relative max-w-screen-xl px-4 flex justify-between gap-4 mx-auto"
    >
      <img
        src="/assets/shape-08.svg"
        alt="Shape"
        class="absolute right-0 bottom-0 h-full w-auto object-cover z-0"
      />

      <!-- Left side -->
      <div class="flex items-center md:w-1/2">
        <div>
          <h1 class="text-5xl font-bold text-blue-600">
            Discover <span class="text-gray-900">Your Potential</span>
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            Empower yourself with tools to learn, practice, and connect. Achieve
            success in your career and stand out in the competitive
            <span class="text-gray-900 font-semibold"> job market! </span>
          </p>
          <div
            class="hidden md:flex max-w-96 mt-10 items-center justify-center md:justify-start space-x-4 bg-purple-200 px-4 py-2 rounded-full"
          >
            <img
              src="/assets/img/google.png"
              alt="Profile"
              class="w-8 h-8 rounded-full"
            />
            <div class="w-3xl">
              <!-- Added width 3xl here -->
              <p class="font-medium">Tewodros</p>
              <p class="text-xs md:text-sm text-gray-600">Just Went Pro</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Right side with stair-step loader -->
      <div
        class="relative bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 rounded-lg lg:w-1/2 flex justify-end items-center"
      >
        <div class="loader">
          <div class="loader__bar" data-color="var(--bar-color-learn)">
            <span>Learn</span>
          </div>
          <div class="loader__bar" data-color="var(--bar-color-practice)">
            <span>Practice</span>
          </div>
          <div class="loader__bar" data-color="var(--bar-color-mentorship)">
            <span>Mentorship</span>
          </div>
          <div class="loader__bar" data-color="var(--bar-color-compete)">
            <span>Compete</span>
          </div>
          <div class="loader__bar" data-color="var(--bar-color-advance)">
            <span>Advance</span>
          </div>
          <div class="loader__bar" data-color="var(--bar-color-internship)">
            <span>Internship</span>
          </div>
          <div class="loader__bar" data-color="var(--bar-color-jobs)">
            <span>Jobs</span>
          </div>
          <div class="loader__ball"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --ball-color: #fff; /* Default ball color */
  --bg-color: #f3f3f3; /* Gray background */
  --bar-color-learn: #9be6c1; /* Lighter Green for Learn */
  --bar-color-practice: #ffdd80; /* Lighter Yellow for Practice */
  --bar-color-mentorship: #c8bbff; /* Lighter Purple for Mentorship */
  --bar-color-compete: #ffb1cc; /* Lighter Red for Compete */
  --bar-color-advance: #fec192; /* Lighter Orange for Advance */
  --bar-color-internship: #9be6c1; /* Lighter Teal for Internship */
  --bar-color-jobs: #9bc9ff; /* Lighter Blue for Jobs */
}

.floating-card {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
.loader {
  position: relative;
  width: 630px; /* Width for seven stairs with gaps */
  height: 270px; /* Increased height for stairs and ball movement */
}

.loader__bar {
  position: absolute;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-color);
  font-size: 14px;
  text-align: center;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  border-radius: 5px; /* Smooth edges for stairs */
}

.loader__bar:nth-child(1) {
  left: 0;
  height: 45px; /* Height for Learn */
  bottom: 0;
  background: var(--bar-color-learn);
}

.loader__bar:nth-child(2) {
  left: 90px; /* Gap of 10px */
  height: 75px; /* Height for Practice */
  bottom: 0;
  background: var(--bar-color-practice);
}

.loader__bar:nth-child(3) {
  left: 180px;
  height: 105px; /* Height for Mentorship */
  bottom: 0;
  background: var(--bar-color-mentorship);
}

.loader__bar:nth-child(4) {
  left: 270px;
  height: 135px; /* Height for Compete */
  bottom: 0;
  background: var(--bar-color-compete);
}

.loader__bar:nth-child(5) {
  left: 360px;
  height: 165px; /* Height for Advance */
  bottom: 0;
  background: var(--bar-color-advance);
}

.loader__bar:nth-child(6) {
  left: 450px;
  height: 195px; /* Height for Internship */
  bottom: 0;
  background: var(--bar-color-internship);
}

.loader__bar:nth-child(7) {
  left: 540px;
  height: 228px; /* Height for Jobs */
  bottom: 0;
  background: var(--bar-color-jobs);
}

.loader__ball {
  position: absolute;
  width: 15px;
  height: 15px;
  background: var(--ball-color);
  border-radius: 50%;
  bottom: 0;
  animation: ballMove 8s infinite; /* Increased animation duration */
}

@keyframes ballMove {
  0% {
    transform: translate(0, -60px); /* Gap from Learn */
    background-color: var(--bar-color-learn);
  }
  14% {
    /* Longer pause at Learn */
    transform: translate(0, -60px); /* Gap from Learn */
    background-color: var(--bar-color-learn);
  }
  28% {
    transform: translate(90px, -90px); /* Gap from Practice */
    background-color: var(--bar-color-practice);
  }
  42% {
    transform: translate(180px, -120px); /* Gap from Mentorship */
    background-color: var(--bar-color-mentorship);
  }
  56% {
    transform: translate(270px, -150px); /* Gap from Compete */
    background-color: var(--bar-color-compete);
  }
  70% {
    transform: translate(360px, -180px); /* Gap from Advance */
    background-color: var(--bar-color-advance);
  }
  84% {
    transform: translate(450px, -210px); /* Gap from Internship */
    background-color: var(--bar-color-internship);
  }
  100% {
    transform: translate(540px, -240px); /* Gap from Jobs */
    background-color: var(--bar-color-jobs);
  }
}

.loader__bar span {
  display: block;
  width: 100%;
  text-align: center;
  color: var(--bg-color); /* White text on colored stairs */
  font-size: 12px;
  padding: 2px;
  color: black;
}
</style>
