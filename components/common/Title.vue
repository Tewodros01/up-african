<script setup lang="ts">
interface TitleProps {
  title: string;
  subtitle: string;
}

const props = defineProps<TitleProps>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <p class="text-blue-800 lg:text-4xl xs:text-4xl font-bold leading-[60px]">
      {{ props.subtitle }}
    </p>
  </div>
</template>
