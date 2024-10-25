<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import JobStatistics from '@/components/job/JobStatistics.vue';
import JobEligibility from '@/components/job/JobEligibility.vue';

// Define the order of the components to be draggable
const componentsOrder = ref([
  { id: 1, component: JobStatistics, name: 'Job Statistics' },
  { id: 2, component: JobEligibility, name: 'Job Eligibility' },
]);

// Optional: Handle the drag event
const onDragEnd = event => {
  console.log('Drag ended', event);
};
</script>

<template>
  <div class="w-full sm:px-4 md:px-10 md:py-5 mb-8">
    <JobBanner />
    <draggable
      v-model="componentsOrder"
      item-key="id"
      handle=".handle"
      @end="onDragEnd"
    >
      <template #item="{ element }">
        <div class="flex flex-col shadow-sm handle">
          <component :is="element.component" :key="element.id" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
.handle {
  cursor: grab;
}
.handle:active {
  cursor: grabbing;
}
</style>
