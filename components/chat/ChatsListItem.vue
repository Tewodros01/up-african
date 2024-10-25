<script setup>
import { ref, watch } from "vue";
import { Checkbox } from "@/components/ui/checkbox";

const props = defineProps({
  data: Object,
  onCheck: Function,
  isChecked: Boolean,
  showCheckbox: Boolean,
});

const showCheckBox = ref(false);
const isCheckboxActivated = ref(false);

const onHoverLeaveFromRow = () => {
  if (isCheckboxActivated.value || props.showCheckbox) {
    return;
  }
  showCheckBox.value = false;
};

const onCheckedChange = (checked) => {
  isCheckboxActivated.value = checked;
  props.onCheck(checked);
};

const toggleChecked = () => {
  onCheckedChange(!props.isChecked);
};

watch(
  () => props.showCheckbox,
  () => {
    showCheckBox.value = props.showCheckbox;
  }
);
</script>

<template>
  <div
    class="flex flex-row p-2 pb-0 cursor-pointer hover:bg-zinc-100"
    @mouseleave="onHoverLeaveFromRow"
  >
    <span @mouseenter="showCheckBox = true" @mouseleave="onHoverLeaveFromRow">
      <div
        v-if="showCheckBox"
        class="w-10 h-10 rounded-full bg-zinc-200 hover:bg-zinc-300 flex items-center justify-center cursor-pointer"
        @click="toggleChecked"
      >
        <Checkbox :checked="isChecked" @update:checked="onCheckedChange" />
      </div>
      <ChatUserAvatar v-else :imageUrl="data.sender.imageUrl" />
    </span>
    <div class="ml-3 border-b pb-2">
      <div class="text-sm">{{ data.sender.name }}</div>
      <div class="text-zinc-500 text-xs mt-1">{{ data.summary }}</div>
    </div>
  </div>
</template>
