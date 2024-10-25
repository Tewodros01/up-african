<script setup>
import { useRoute } from "vue-router";
import {
  Plus,
  GridIcon,
  MessageCircleIcon,
  BellRingIcon,
} from "lucide-vue-next";

const route = useRoute();
const pathname = route.path;
</script>

<template>
  <div
    class="bg-white w-full flex justify-center h-16 border-b border-slate-200 fixed top-0 z-[3]"
  >
    <div class="w-full flex items-center justify-between px-1 md:px-4">
      <span class="rounded shrink-0 mr-2">
        <NuxtLink to="/">
          <img
            src="@/assets/logo/go_ahead_logo.png"
            alt="Go Ahead"
            width="120"
            height="80"
          />
        </NuxtLink>
      </span>
      <div class="flex items-center divide-x h-full">
        <div class="flex space-x-4 p-4">
          <div class="flex justify-between items-center">
            <div class="flex px-2">
              <NuxtLink to="/message">
                <div
                  :class="[
                    'flex-shrink-0 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center border border-zinc-500 hover:bg-blue-500 hover:text-white transition-colors duration-200',
                    pathname === '/message' && 'bg-blue-500 text-white',
                  ]"
                >
                  <MessageCircleIcon class="w-4 h-4" />
                </div>
              </NuxtLink>
            </div>
            <div class="flex px-2">
              <NuxtLink to="/notification">
                <div
                  :class="[
                    'flex-shrink-0 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center border border-zinc-500 hover:bg-blue-500 hover:text-white transition-colors duration-200',
                    pathname === '/notification' && 'bg-blue-500 text-white',
                  ]"
                >
                  <BellRingIcon class="w-4 h-4" />
                </div>
              </NuxtLink>
            </div>
            <div class="flex px-2">
              <NuxtLink to="/profile">
                <div
                  :class="[
                    'flex-shrink-0 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center border border-zinc-500 hover:bg-blue-500 hover:text-white transition-colors duration-200',
                    pathname === '/profile' && 'bg-blue-500 text-white',
                  ]"
                >
                  <span class="text-sm font-semibold">T</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between pl-2 gap-2">
          <button
            class="flex text-xs items-center space-x-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            <Plus class="w-5 h-5" />
            <span>Host</span>
          </button>
          <button
            class="hidden md:flex text-sm items-center space-x-2 border border-yellow-500 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full hover:bg-yellow-200 transition-colors duration-200"
          >
            <GridIcon class="w-5 h-5" />
            <span>For Business</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
