<script setup>
import { defineProps } from "vue";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const props = defineProps({
  imageUrl: String,
  className: String,
});
</script>

<template>
  <Avatar :class="className">
    <AvatarImage :src="imageUrl" />
    <AvatarFallback>OG</AvatarFallback>
  </Avatar>
</template>
