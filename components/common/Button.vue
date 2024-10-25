<script setup lang="ts">
interface ButtonProps {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const props = defineProps<ButtonProps>();
</script>

<template>
  <button
    :type="props.type"
    :class="`flex items-center justify-center gap-3 rounded-full border ${
      props.variant
    } ${props.full ? 'w-full' : ''}`"
  >
    <img
      v-if="props.icon"
      :src="props.icon"
      :alt="props.title"
      class="w-6 h-6"
    />
    <label class="font-bold text-lg whitespace-nowrap cursor-pointer">
      {{ props.title }}
    </label>
  </button>
</template>
