<script setup>
import { ref } from "vue";
import { Circle, Bullhorn, EllipsisH } from "lucide-vue-next";

const newsItems = [
  { title: "IT majors record profile rise", hour: 5 },
  { title: "Global accounting firms go local", hour: 5 },
  { title: "IIM classrooms get diverse", hour: 5 },
  { title: "Travel loans rise in non-metros", hour: 5 },
  { title: "Vehicle financing to zoom ahead", hour: 5 },
];
</script>

<template>
  <div class="fixed w-80">
    <div class="bg-white rounded-lg overflow-hidden border py-4">
      <div class="flex justify-between mb-2 px-3">
        <h4 class="text-sm font-semibold text-gray-600">LinkedIn News</h4>
        <Bullhorn size="18" />
      </div>
      <div
        v-for="(news, index) in newsItems"
        :key="index"
        class="flex gap-2 py-1 px-3 hover:bg-gray-100 cursor-default"
      >
        <Circle size="8" class="text-gray-600 mt-2" />
        <div>
          <h5 class="font-semibold text-sm text-gray-600">{{ news.title }}</h5>
          <p class="text-xs text-gray-400 mt-1">{{ news.hour }}h ago</p>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-lg overflow-hidden border py-4 mt-2">
      <div class="flex justify-end gap-2 mb-2 px-3">
        <p class="text-sm">Ad</p>
        <EllipsisH size="20" />
      </div>
      <div class="text-center px-4 py-8">
        <p class="text-sm text-gray-500 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error
          officia provident hic tenetur quasi exercitationem delectus.
        </p>
        <button
          class="py-2 px-6 text-sky-600 border border-sky-600 rounded-full text-sm font-semibold cursor-default"
        >
          Learn more
        </button>
      </div>
    </div>
  </div>
</template>
