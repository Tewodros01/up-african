<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const candidateData = {
  name: "John Doe",
  email: "john.doe@example.com",
  fields: ["Software Engineering", "Frontend Development"],
  profileImage: "https://via.placeholder.com/150",
  overallScore: 85,
  overallRanking: 5,
  rankingPercentage: 95,
  timeSec: 120,
  bestTime: 100,
  finishTime: 110,
  totalQuestions: 50,
  attemptedQuestions: 45,
  correctQuestions: 40,
  invitedDate: "2023-01-01",
  completedDate: "2023-01-10",
  source: "LinkedIn",
  proctoringStatus: "Passed",
};

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};
</script>

<template>
  <div>
    <!-- The card that opens the modal -->
    <div
      class="w-full border-dashed group rounded-box bg-[#F6F8FA] p-[1rem] sm:p-3 md:p-[1.875rem] hover:bg-[#ebedf0] cursor-pointer border border-gray-200 rounded-lg"
      @click="openModal"
    >
      <div class="flex gap-2 items-center justify-center flex-col">
        <div class="bg-white p-2 lg:p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 41"
            fill="none"
            class="lg:w-[40px] lg:h-[41px] w-[29px] h-[30px] transition-all"
          >
            <g clip-path="url(#clip0_0_553)">
              <path
                d="M31.6667 22.1667H21.6667V32.1667H18.3334V22.1667H8.33337V18.8333H18.3334V8.83334H21.6667V18.8333H31.6667V22.1667Z"
                fill="#0073E6"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_553">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2
          class="lg:text-lg text-sm font-semibold lg:font-medium text-[#1C4980]"
        >
          View Candidate Profile
        </h2>
        <p class="text-xs font-medium text-[#1C4980] text-center">
          Click to view detailed candidate profile.
        </p>
      </div>
    </div>

    <!-- Modal backdrop -->
    <div
      v-if="isOpen"
      class="fixed transition-all z-40 duration-500 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60"
    >
      <AssesmentCommonCandidateDetail
        v-bind="candidateData"
        :isOpen="isOpen"
        :onClose="closeModal"
      />
    </div>

    <!-- Mobile button -->
    <button
      class="fixed right-3 bottom-3 border-none bg-[#0073E6] inline-flex lg:hidden"
      @click="openModal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M23.3333 16.1905H16.1905V23.3333H13.8095V16.1905H6.66666V13.8095H13.8095V6.66666H16.1905V13.8095H23.3333V16.1905Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>
