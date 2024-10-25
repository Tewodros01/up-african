<template>
  <div class="bg-white rounded-lg shadow-sm mb-4 py-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-600 px-4">
      Coupons & Rewards
    </h2>
    <div class="border-b border-gray-200 mb-4 overflow-y-auto px-4">
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
    <div class="px-4">
      <h3 class="text-lg font-medium mb-2 text-gray-700">
        Recently Added Coupons
      </h3>
      <div class="flex space-x-4 overflow-x-auto mb-4">
        <div
          v-for="(coupon, index) in coupons"
          :key="index"
          class="bg-white border rounded-lg p-4 shadow-sm w-64 flex-shrink-0"
        >
          <div class="flex items-center mb-2">
            <img
              :src="coupon.image"
              alt="Coupon Image"
              class="w-12 h-12 rounded-full"
            />
            <div class="ml-2">
              <span :class="coupon.typeClass">{{ coupon.type }}</span>
            </div>
          </div>
          <h4 class="text-sm font-semibold text-gray-800 mb-1">
            {{ coupon.title }}
          </h4>
          <p class="text-xs text-gray-600 mb-1">{{ coupon.description }}</p>
          <p class="text-xs text-gray-500 mb-2">{{ coupon.expiry }}</p>
          <div class="flex justify-between items-center">
            <a href="#" class="text-xs text-blue-600 hover:underline"
              >View more</a
            >
            <button
              class="text-xs text-blue-600 border border-blue-600 rounded-full px-2 py-1"
            >
              Claim Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center px-4">
      <span class="text-sm text-gray-600">1 - 2 / 2</span>
      <div class="flex space-x-2">
        <button
          class="p-1 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          &laquo;
        </button>
        <button
          class="p-1 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          &lsaquo;
        </button>
        <button class="p-1 border rounded-lg bg-blue-600 text-white">1</button>
        <button
          class="p-1 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          &rsaquo;
        </button>
        <button
          class="p-1 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          &raquo;
        </button>
      </div>
      <div class="flex items-center space-x-1">
        <span class="text-sm text-gray-600">Jump To</span>
        <input
          type="text"
          class="w-12 px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = [
  "All Coupons",
  "Claimed Coupons",
  "Transaction History",
  "What is it all about?",
  "Pro Coupons",
];

const activeTabIndex = ref(0);

const coupons = [
  {
    image: "/path/to/ottplay.png",
    type: "Pro",
    typeClass: "bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full",
    title: "OTTplay",
    description: "Get access to a 1-year Subscription to OTTplay Super...",
    expiry: "31 Mar 2025",
  },
  {
    image: "/path/to/momsco.png",
    type: "Un",
    typeClass: "bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full",
    title: "The Mom's Co",
    description: "Pick a product @ Re.1",
    expiry: "05 Sep 2024 - Out of stock",
  },
];
</script>
