<script setup>
import {
  Briefcase,
  GraduationCap,
  Handshake,
  LineChart,
  Phone,
  Star,
  Trophy,
  User,
  Users,
  X,
} from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
});

const route = useRoute();
const isActive = ref(route.path);

const handleClick = () => {
  props.onClose();
};

// Watch for route changes and close the sidebar if the route changes
watch(route, () => {
  if (props.isOpen) {
    props.onClose();
  }
});
</script>

<template>
  <div>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-[20]"
      @click="handleClick"
    ></div>

    <div
      :class="`fixed  top-0 right-0 h-full w-5/6 md:w-[27%] shadow-lg bg-white border-l border-slate-200 transform transition-transform duration-300 ease-in-out z-[20] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`"
    >
      <div class="flex justify-between items-center p-4 border-b bg-white">
        <h2 class="text-lg text-gray-600 font-semibold">For Business</h2>
        <button @click="handleClick" class="text-gray-400 hover:text-gray-600">
          <X class="text-lg" />
        </button>
      </div>

      <div class="flex-1 h-full overflow-y-auto custom-scrollbar py-2">
        <div class="flex flex-col mb-40">
          <div class="flex gap-4 px-2 text-sm">
            <NuxtLink
              to="/employers"
              class="flex flex-col items-start bg-yellow-100 rounded p-4 w-1/2 hover:bg-yellow-200"
            >
              <div class="bg-yellow-500 rounded-md p-2 w-8 h-8">
                <User class="w-4 h-4 text-gray-600" />
              </div>
              <span class="text-gray-600 mt-2">For</span>
              <span class="text-gray-600">Employers</span>
            </NuxtLink>
            <NuxtLink
              to="/institutions"
              class="flex flex-col items-start bg-blue-100 rounded p-4 w-1/2 hover:bg-blue-200"
            >
              <div class="bg-blue-500 rounded-md p-2 w-8 h-8">
                <GraduationCap class="w-4 h-4 text-gray-600" />
              </div>
              <span class="text-gray-600 mt-2">For</span>
              <span class="text-gray-600">Colleges</span>
            </NuxtLink>
          </div>
          <div class="py-6">
            <CommonDivider />
          </div>
          <div class="flex flex-col gap-3 px-4">
            <h3 class="text-gray-600 text-xs">Our Stories</h3>
            <NuxtLink to="/clientele">
              <div
                class="flex text-sm items-center gap-2 text-gray-700 rounded-md p-2 hover:bg-gray-100 cursor-pointer mt-2"
              >
                <Users class="text-gray-700 w-4 h-4" />
                <span>Clientele</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/client-case-studies">
              <div
                class="flex text-sm items-center gap-2 text-gray-700 rounded-md p-2 hover:bg-gray-100 cursor-pointer mt-2"
              >
                <Briefcase class="text-gray-700 w-4 h-4" />
                <span>Client Case Studies</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/partners">
              <div
                class="flex text-sm items-center gap-2 text-gray-700 rounded-md p-2 hover:bg-gray-100 cursor-pointer mt-2"
              >
                <Briefcase class="text-gray-700 w-4 h-4" />
                <span>Partners</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/testimonials">
              <div
                class="flex text-sm items-center gap-2 text-gray-700 rounded-md p-2 hover:bg-gray-100 cursor-pointer mt-2"
              >
                <Star class="text-gray-700 w-4 h-4" />
                <span>Testimonials</span>
              </div>
            </NuxtLink>
          </div>
          <div class="mt-6">
            <div class="py-4">
              <CommonDivider />
            </div>
            <h3 class="text-xs text-gray-600 px-4">Be a part of us</h3>
            <div class="py-4">
              <CommonDivider />
            </div>
            <div class="px-4">
              <NuxtLink to="/contact-us">
                <div
                  class="flex text-sm items-center gap-2 text-gray-700 rounded-md p-2 hover:bg-gray-100 cursor-pointer mt-2"
                >
                  <Phone class="text-gray-700 w-4 h-4" />
                  <span>Contact Us</span>
                </div>
              </NuxtLink>
              <NuxtLink to="/partner-with-us">
                <div
                  class="flex text-sm items-center gap-2 text-gray-700 rounded-md p-2 hover:bg-gray-100 cursor-pointer mt-2"
                >
                  <Handshake class="text-gray-700 w-4 h-4" />
                  <span>Partner with us</span>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="py-8">
            <CommonDivider />
          </div>
          <div class="flex flex-col gap-3 px-4">
            <h3 class="text-xs text-gray-600 font-semibold">
              Business Events & Reports
            </h3>
            <NuxtLink to="/talent-report-2024">
              <div
                class="flex text-sm items-center gap-2 text-gray-700 rounded-md p-2 hover:bg-gray-100 cursor-pointer mt-2"
              >
                <LineChart class="text-gray-700 w-4 h-4" />
                <span> Talent Report 2024</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/talent-awards-2024">
              <div
                class="flex text-sm items-center gap-2 text-gray-700 rounded-md p-2 hover:bg-gray-100 cursor-pointer mt-2"
              >
                <Trophy class="text-gray-700 w-4 h-4" />
                <span> Talent Awards 2024</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/talent-meet-2024">
              <div
                class="flex text-sm items-center gap-2 text-gray-700 rounded-md p-2 hover:bg-gray-100 cursor-pointer mt-2"
              >
                <Users class="text-gray-700 w-4 h-4" />
                <span> Talent Meet 2024</span>
              </div>
            </NuxtLink>
          </div>
          <div class="flex justify-center items-center mt-6">
            <NuxtLink to="/host-opportunity">
              <div
                class="flex items-center space-x-2 border border-gray-400 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                <span>+ Host Opportunity</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
