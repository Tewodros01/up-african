<script setup>
import { useRoute } from "vue-router";
import {
  ChevronLeft,
  UserCircle,
  UserPlus,
  Share2,
  List,
  Trophy,
  Heart,
  Clock,
  Users,
  Book,
  Award,
  Tag,
} from "lucide-vue-next";
import { useSidebar } from "~/composables/useSidebar";

const { isOpen, toggleSidebar } = useSidebar();
const route = useRoute();
</script>

<template>
  <div
    :class="`fixed left-0 top-0 md:top-auto bg-white md:mt-16 w-2/3 md:w-[18rem] h-full border-r border-slate-200 transform transition-transform duration-300 ease-in-out z-[15] md:z-0 overflow-y-auto ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0`"
  >
    <div class="h-full overflow-x-auto">
      <button class="absolute top-4 right-4 md:hidden" @click="toggleSidebar">
        <ChevronLeft />
      </button>
      <NuxtLink to="/profile">
        <div class="flex items-center px-5 mb-4 pt-4">
          <UserCircle class="text-4xl text-zinc-600 mr-3" />
          <div>
            <p class="font-semibold text-[0.91rem]">Tewodros Misawoy</p>
            <p class="text-xs text-zinc-600">tewodrosm01@gmail.com</p>
          </div>
        </div>
      </NuxtLink>
      <div class="flex items-center gap-4 px-5 py-2">
        <div class="w-full bg-gray-200 rounded-full h-2 mb-1">
          <div
            class="bg-green-500 h-1.5 rounded-full"
            :style="{ width: '17%' }"
          ></div>
        </div>
        <div class="flex">
          <p class="text-xs text-zinc-600">17%</p>
        </div>
      </div>
      <div class="py-4">
        <CommonDivider />
      </div>
      <nav class="space-y-3 px-5">
        <NuxtLink
          to="/profile/registrations"
          :class="{
            'bg-blue-50 rounded-md': route.path === '/profile/registrations',
            'text-zinc-600 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md': true,
          }"
          class="flex items-center text-[0.91rem] px-3 py-2"
        >
          <UserPlus class="mr-3 w-4 h-4" /> Registrations/Applications
        </NuxtLink>
        <NuxtLink
          to="/profile/referrals"
          :class="{
            'bg-blue-50 rounded-md': route.path === '/profile/referrals',
            'text-zinc-600 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md': true,
          }"
          class="flex items-center text-[0.91rem] px-3 py-2"
        >
          <Share2 class="mr-3 w-4 h-4" /> Referrals
        </NuxtLink>
        <NuxtLink
          to="/profile/rounds"
          :class="{
            'bg-blue-50 rounded-md': route.path === '/profile/rounds',
            'text-zinc-600 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md': true,
          }"
          class="flex items-center text-[0.91rem] px-3 py-2"
        >
          <List class="mr-3 w-4 h-4" /> My Rounds
          <span
            class="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs"
          >
            New
          </span>
        </NuxtLink>
        <NuxtLink
          to="#"
          :class="{
            'bg-blue-50 rounded-md': route.path === '#',
            'text-zinc-600 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md': true,
          }"
          class="flex items-center text-[0.91rem] px-3 py-2"
        >
          <Trophy class="mr-3 w-4 h-4" /> Awards Nominations
        </NuxtLink>
        <NuxtLink
          to="#"
          :class="{
            'bg-blue-50 rounded-md': route.path === '#',
            'text-zinc-600 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md': true,
          }"
          class="flex items-center text-[0.91rem] px-3 py-2"
        >
          <Heart class="mr-3 w-4 h-4" /> Watchlist
        </NuxtLink>
        <NuxtLink
          to="#"
          :class="{
            'bg-blue-50 rounded-md': route.path === '#',
            'text-zinc-600 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md': true,
          }"
          class="flex items-center text-[0.91rem] px-3 py-2"
        >
          <Clock class="mr-3 w-4 h-4" /> Recently Viewed
        </NuxtLink>
        <NuxtLink
          to="/profile/mentorsessions"
          :class="{
            'bg-blue-50 rounded-md': route.path === '/profile/mentorsessions',
            'text-zinc-600 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md': true,
          }"
          class="flex items-center text-[0.91rem] px-3 py-2"
        >
          <Users class="mr-3 w-4 h-4" /> Mentor Sessions
        </NuxtLink>
        <NuxtLink
          to="/profile/courses"
          :class="{
            'bg-blue-50 rounded-md': route.path === '/profile/courses',
            'text-zinc-600 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md': true,
          }"
          class="flex items-center text-[0.91rem] px-3 py-2"
        >
          <Book class="mr-3 w-4 h-4" /> Courses
        </NuxtLink>
        <NuxtLink
          to="/profile/certificates"
          :class="{
            'bg-blue-50 rounded-md': route.path === '/profile/certificates',
            'text-zinc-600 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md': true,
          }"
          class="flex items-center text-[0.91rem] px-3 py-2"
        >
          <Award class="mr-3 w-4 h-4" /> Certificates
        </NuxtLink>
        <NuxtLink
          to="/profile/coupons"
          :class="{
            'bg-blue-50 rounded-md': route.path === '/profile/coupons',
            'text-zinc-600 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md': true,
          }"
          class="flex items-center text-[0.91rem] px-3 py-2"
        >
          <Tag class="mr-3 w-4 h-4" /> Coupons and Rewards
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>
