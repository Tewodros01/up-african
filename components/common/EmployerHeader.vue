<script setup>
import {
  BellRing,
  BookOpen,
  Grid,
  MenuIcon,
  MessageCircle,
  MessageSquare,
  Plus,
  User,
  Users,
} from 'lucide-vue-next';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useSidebar } from '~/composables/useSidebar';

const route = useRoute();
const pathname = route.path;
const isSidebarOpen = ref(false);
const isLoggedIn = true; // Replace with actual authentication logic
const { toggleSidebar } = useSidebar();

const setSidebarOpen = value => {
  isSidebarOpen.value = value;
};

const handleClose = () => {
  console.log('Closing sidebar');
  setSidebarOpen(false);
};
</script>

<template>
  <!-- Main Header -->
  <div
    class="bg-white w-full flex justify-center items-baseline md:items-center h-[6.4rem] md:h-[4rem] border-b border-slate-200 fixed top-0 z-[20]"
  >
    <div
      class="w-full flex flex-col ml-2 md:flex-row md:items-center justify-between md:px-2 h-16"
    >
      <!-- Logo and Mobile Menu Button -->
      <div class="flex justify-between items-center my-2">
        <div class="flex items-center flex-nowrap">
          <NuxtLink to="/">
            <img
              src="/assets/logo/up_africa_logo.svg"
              class="h-auto w-auto max-w-[100px]"
              alt="up_africa_logo"
            />
          </NuxtLink>
        </div>
        <div class="flex items-center px-2 md:hidden">
          <button
            @click="toggleSidebar"
            class="md:hidden text-gray-700 border-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <MenuIcon class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <div class="flex justify-end md:justify-between items-center md:divide-x">
        <div class="hidden sm:flex items-center h-full relative">
          <CommonDropdownMenuSolution />
          <CommonDropdownMenuResource />
          <CommonMenuItemLayout
            href="/candidatepool"
            text="Candidate Pool"
            :icon="Users"
          />
          <CommonMenuItemLayout href="/clients" text="Clients" :icon="Users" />
          <CommonMenuItemLayout
            href="/contactus"
            text="Contact Us"
            :icon="MessageSquare"
          />
        </div>

        <!-- User Actions -->
        <div class="flex items-center">
          <div class="flex items-center divide-x h-full">
            <div v-if="!isLoggedIn" class="flex items-center justify-center">
              <NuxtLink :to="'/auth/login'">
                <div
                  :class="[
                    'flex-shrink-0 text-gray-700 rounded-full flex items-center justify-center border border-zinc-500 px-4 py-2 mx-2 hover:bg-blue-500 hover:text-white transition-colors duration-200',
                    pathname === '/signin' && 'bg-blue-500 text-white',
                  ]"
                >
                  <span class="text-sm font-semibold">Login</span>
                </div>
              </NuxtLink>
            </div>
            <div v-else class="flex justify-between">
              <div class="flex px-2">
                <NuxtLink :to="'/message'">
                  <div
                    :class="[
                      'flex-shrink-0 text-gray-700 rounded-full w-[2.4rem] h-[2.4rem] flex items-center justify-center border border-zinc-500 hover:bg-blue-500 hover:text-white transition-colors duration-200',
                      pathname === '/message' && 'bg-blue-500 text-white',
                    ]"
                  >
                    <MessageCircle class="w-4 h-4" />
                  </div>
                </NuxtLink>
              </div>
              <div class="flex px-2">
                <NuxtLink :to="'/notification'">
                  <div
                    :class="[
                      'flex-shrink-0 text-gray-700 rounded-full w-[2.4rem] h-[2.4rem] flex items-center justify-center border border-zinc-500 hover:bg-blue-500 hover:text-white transition-colors duration-200',
                      pathname === '/notification' && 'bg-blue-500 text-white',
                    ]"
                  >
                    <BellRing class="w-4 h-4" />
                  </div>
                </NuxtLink>
              </div>
              <div class="flex px-2">
                <NuxtLink :to="'/profile'">
                  <div
                    :class="[
                      'flex-shrink-0 text-gray-700 rounded-full w-[2.4rem] h-[2.4rem] flex items-center justify-center border border-zinc-500 hover:bg-blue-500 hover:text-white transition-colors duration-200',
                      pathname === '/profile' && 'bg-blue-500 text-white',
                    ]"
                  >
                    <User class="w-4 h-4" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Host and Explore More Buttons -->
        <div class="flex items-center px-2 space-x-2">
          <NuxtLink
            :to="'/host'"
            :class="[
              'flex text-sm text-nowrap items-center space-x-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200',
              pathname === '/host' && 'bg-blue-500 text-white',
            ]"
          >
            <Plus class="w-4 h-4" />
            <span>Host</span>
          </NuxtLink>
          <button
            @click="setSidebarOpen(true)"
            class="flex text-sm text-nowrap items-center space-x-2 border border-yellow-500 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full hover:bg-yellow-200 transition-colors duration-200"
          >
            <Grid class="w-4 h-4" />
            <span>Explore More</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      class="flex md:hidden h-16 px-4 gap-2 justify-between rounded-t-2xl w-full bg-white border-t border-slate-200 fixed bottom-0 left-0 py-3 right-0 z-[3]"
    >
      <CommonMenuItemLayout
        :icon="BookOpen"
        text="Solutions"
        href="/solutions"
      />
      <CommonMenuItemLayout href="/clients" text="Clients" :icon="Users" />
      <CommonMenuItemLayout
        href="/candidatepool"
        text="Candidate Pool"
        :icon="Users"
      />
      <CommonMenuItemLayout
        :icon="MessageSquare"
        text="Contact Us"
        href="/contactus"
      />
    </div>

    <!-- ForBusiness part here -->
    <CommonForBusiness :isOpen="isSidebarOpen" :onClose="handleClose" />
    <div class="md:hidden">
      <ProfileCommonProfileSidebar />
    </div>
  </div>
</template>
