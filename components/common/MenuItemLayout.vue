<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  icon: {
    type: Function,
    required: false,
  },
  text: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    required: true,
  },
});

const route = useRoute();

const isActive = computed(() => {
  const currentPath = route.path.toLowerCase();
  const targetPath = props.href.toLowerCase();

  // Define custom singular-plural route pairs
  const customRoutePairs = {
    '/mentorship': '/mentors',
    '/mentors': '/mentorship',
    '/job': '/jobs',
    '/jobs': '/job',
    '/course': '/courses',
    '/courses': '/course',
    '/scholarship': '/scholarships',
    '/scholarships': '/scholarship',
    '/competition': '/competitions',
    '/competitions': '/competition',
    '/companies': '/company',
    '/company': '/companies',
  };

  // Check for exact match or custom route pairs match
  return (
    currentPath === targetPath || customRoutePairs[currentPath] === targetPath
  );
});
</script>

<template>
  <NuxtLink
    :to="href"
    :class="[
      'flex flex-col md:flex-row items-center px-2 py-[0.3rem] mx-[0.1rem] gap-2 justify-center text-zinc-600 cursor-pointer hover:text-blue-500 md:hover:text-zinc-600 md:hover:bg-gray-100 md:rounded-full transition-colors duration-200',
      isActive
        ? 'md:rounded-full md:border border-blue-500 text-blue-500 md:border-blue-500'
        : '',
    ]"
  >
    <div>
      <component
        :is="icon"
        :class="[
          'h-[0.87rem] w-[1.1rem] items-center inline text-nowrap',
          isActive ? 'text-blue-500' : '',
        ]"
      />
    </div>
    <span
      v-if="text"
      :class="[
        'text-xs leading-loose md:text-[0.9rem] items-center font-medium inline text-nowrap',
        isActive ? 'text-blue-500' : '',
      ]"
    >
      {{ text }}
    </span>
  </NuxtLink>
</template>
