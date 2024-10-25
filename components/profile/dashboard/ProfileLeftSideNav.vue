<script setup>
import { ref } from "vue";
import { Home, User, Clipboard, BookOpen, Briefcase, Award } from "lucide-vue-next"; // Changed from Certificate to Award

const navItems = ref([
  {
    href: "../pages/about.html",
    icon: User,
    label: "About",
  },
  {
    href: "../pages/skills.html",
    icon: Clipboard,
    label: "Skills",
  },
  {
    href: "../pages/work-experience.html",
    icon: Briefcase,
    label: "Work Experience",
  },
  {
    href: "../pages/education.html",
    icon: BookOpen,
    label: "Education",
  },
  {
    href: "../pages/responsibilities.html",
    icon: Clipboard,
    label: "Responsibilities",
  },
  {
    href: "../pages/certificates.html",
    icon: Award, // Updated icon
    label: "Certificates",
  },
]);
</script>

<template>
  <aside class="w-60 rounded-md border-2 border-gray-300 bg-white">
    <div class="items-center block max-h-screen overflow-auto grow basis-full">
      <ul class="flex flex-col pl-0 mb-0">
        <li v-for="(item, index) in navItems" :key="index" class="mt-4 w-full">
          <a
            class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
            :href="item.href"
          >
            <div
              class="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
            >
              <component :is="item.icon" size="24" />
            </div>
            <span
              class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft"
            >
              {{ item.label }}
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="mx-4">
      <a
        class="inline-block w-full px-6 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-purple-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102"
        target="_blank"
        href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind?ref=sidebarfree"
      >
        Upgrade to pro
      </a>
    </div>
  </aside>
</template>

<style scoped>
.ease-nav-brand {
  transition: all 0.3s ease;
}
</style>
