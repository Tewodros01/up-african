<template>
  <div :class="`${color} p-4 rounded-lg shadow-md flex flex-col items-start`">
    <div class="flex items-center gap-4">
      <div>
        <h3 :class="`${textColor} text-lg font-semibold`">{{ title }}</h3>
        <p class="text-gray-600 text-xs">{{ description }}</p>
      </div>
      <img
        :src="imgSrc"
        alt="Card Image"
        class="w-5 h-5 object-cover rounded-lg"
      />
    </div>
    <div class="mt-4 flex space-x-2">
      <span
        v-for="icon in icons.split(', ')"
        :key="icon"
        class="bg-white p-2 rounded-full shadow-md"
      >
        <img
          :src="`/assets/icons/${icon.toLowerCase()}.png`"
          alt="Icon"
          class="w-4 h-4"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  color: String,
  textColor: String,
  imgSrc: String,
  icons: String,
});
</script>
