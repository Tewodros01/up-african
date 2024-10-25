<script setup>
import { defineProps } from "vue";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const props = defineProps({
  title: String,
  company: String,
  location: String,
  description: String,
  salary: String,
  logo: String,
  jobType: String,
  experience: String,
  deadline: String,
});
</script>

<template>
  <Card
    class="mb-4 flex flex-col md:flex-row p-4 shadow-lg hover:shadow-xl transition-shadow"
  >
    <div class="flex-shrink-0">
      <img
        :src="props.logo"
        :alt="`${props.company} logo`"
        class="w-20 h-20 object-contain mb-3 md:mb-0"
      />
    </div>
    <div class="flex flex-col flex-grow ml-4">
      <CardHeader class="flex justify-between items-center">
        <CardTitle class="text-lg md:text-xl font-bold">
          {{ props.title }}
        </CardTitle>
        <div class="text-primary text-sm md:text-md">{{ props.deadline }}</div>
      </CardHeader>
      <CardContent class="flex flex-col md:flex-row justify-between mt-2">
        <div>
          <p class="text-gray-600">{{ props.company }}</p>
          <p class="text-gray-500">{{ props.location }}</p>
          <p class="text-gray-500">{{ props.jobType }}</p>
          <p class="text-gray-500">{{ props.experience }}</p>
        </div>
        <div class="text-secondary font-semibold mt-4 md:mt-0">
          {{ props.salary }}
        </div>
      </CardContent>
      <CardContent class="mt-2">
        <p class="text-gray-700">{{ props.description }}</p>
      </CardContent>
      <CardFooter class="flex justify-end mt-4 space-x-4">
        <button
          class="text-center reactiveOutlineButton cursor-pointer px-6 py-2 whitespace-nowrap"
        >
          <p>Read More</p>
        </button>
        <a
          href="mailto:hr@example.com"
          class="reactiveButton border border-primary cursor-pointer px-6 py-2 whitespace-nowrap"
        >
          <p>Apply Now</p>
        </a>
      </CardFooter>
    </div>
  </Card>
</template>
