<template>
  <div class="flex flex-col">
    <div class="bg-white rounded-lg shadow-sm py-4">
      <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">My Account</h2>
      <div class="border-b mb-4 overflow-y-auto px-4">
        <nav class="flex space-x-2">
          <a
            v-for="(tab, index) in tabs"
            :key="index"
            href="#"
            :class="[
              'py-2 px-2 text-[14px]',
              index === activeTabIndex
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-blue-600',
            ]"
            @click.prevent="activeTabIndex = index"
          >
            {{ tab }}
          </a>
        </nav>
      </div>
    </div>
    <div v-if="activeTabIndex === 0">
      <ProfileAccountPlanDetails />
      <ProfileAccountFeaturesInfo />
      <ProfileAccountUsageSummary />
      <ProfileAccountPromotion />
      <ProfileAccountAllFeatures />
    </div>
    <div v-if="activeTabIndex === 1">
      <ProfileAccountRoles />
    </div>
    <div v-if="activeTabIndex === 2"></div>
    <div v-if="activeTabIndex === 3"></div>
    <div v-if="activeTabIndex === 4"></div>
    <div v-if="activeTabIndex === 5"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = [
  "Your Plan",
  "Account Roles",
  "Billing/General Information",
  "Account Transactions",
];
const activeTabIndex = ref(0);
</script>
