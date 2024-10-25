<script setup>
import { ref } from "vue";
import { Search, Calendar } from "lucide-vue-next";

const tabs = ["Opportunities", "Courses", "Mentorship", "Payout"];

const campaignsData = ref([
  {
    id: "1",
    title: "NITI Gearshift Challenge",
    organization: "by IIM Bangalore",
    prize: "Cash Prizes worth ₹5,00,000",
    eligibility: "Eligibility: MBA students & Professionals",
    image:
      "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/6684dab035528_HPB_Referral_Program.pptx__5_.png?d=1266x494",
    type: "Case Competition",
    orgLogo: "/path-to-org-logo.png",
  },
  {
    id: "2",
    title: "NITI Gearshift Challenge",
    organization: "by IIM Bangalore",
    prize: "Cash Prizes worth ₹5,00,000",
    eligibility: "Eligibility: MBA students & Professionals",
    image:
      "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/6684dab035528_HPB_Referral_Program.pptx__5_.png?d=1266x494",
    type: "Case Competition",
    orgLogo: "/path-to-org-logo.png",
  },
]);
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm mb-10 py-2">
    <div class="flex flex-wrap justify-between items-center px-6">
      <h2 class="text-xl font-semibold text-gray-600">My Referrals</h2>
      <button
        class="px-4 text-[0.95rem] py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-2 md:mt-0"
      >
        + Add Payout Details
      </button>
    </div>
    <div class="py-2">
      <CommonDivider />
    </div>
    <div class="border-b border-gray-200 mb-4 px-4">
      <nav class="flex flex-wrap space-x-4">
        <a
          v-for="(tab, index) in tabs"
          :key="index"
          href="#"
          :class="`py-2 px-3 ${
            index === 0
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-blue-600'
          }`"
        >
          {{ tab }}
        </a>
      </nav>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 px-4">
      <ProfileReferalNoReferralsCard />
      <ProfileReferalAmountDistributionCard />
      <ProfileReferalFeaturedCampaignsCard :data="campaignsData" />
    </div>
    <div class="flex flex-wrap justify-between items-center mb-4 mt-6 px-4">
      <div class="w-full lg:w-auto mb-4 lg:mb-0">
        <h4 class="text-lg">Referrals List</h4>
      </div>
      <div class="w-full lg:w-auto mb-4 lg:mb-0">
        <h4 class="py-2 text-sm">Search opportunity</h4>
        <div class="relative">
          <Search class="absolute top-3 w-4 h-4 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search opportunity"
            class="w-full pl-10 text-sm pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
      </div>
      <div
        class="flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-auto"
      >
        <div class="w-full lg:w-auto">
          <h4 class="py-2 text-sm">Start Date & Time</h4>
          <div class="relative">
            <Calendar class="absolute top-3 w-4 h-4 left-3 text-gray-400" />
            <input
              type="datetime-local"
              class="w-full pl-10 text-sm pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
        <div class="w-full lg:w-auto">
          <h4 class="py-2 text-sm">End Date & Time</h4>
          <div class="relative">
            <Calendar class="absolute top-3 left-3 w-4 h-4 text-gray-400" />
            <input
              type="datetime-local"
              class="w-full pl-10 text-sm pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
    <ProfileReferalTableComponent />
  </div>
</template>
