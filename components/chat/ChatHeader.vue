<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ChevronUp,
  MoreHorizontalIcon,
  PencilIcon,
} from "lucide-vue-next";
import { defineProps } from "vue";

const props = defineProps({
  onClick: Function,
  isChatsExpanded: Boolean,
});

const iconClassName =
  "cursor-pointer hover:rounded-full hover:bg-zinc-100 p-1 overflow-visible";
</script>

<template>
  <div class="flex flex-row items-center p-2 cursor-pointer" @click="onClick">
    <ChatUserAvatar class="w-8 h-8" />
    <div class="text-sm font-semibold pl-2 w-full">Messaging</div>
    <div class="flex flex-row space-x-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span>
            <MoreHorizontalIcon :class="iconClassName" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-full">
          <DropdownMenuItem>Manage conversations</DropdownMenuItem>
          <DropdownMenuItem>Messaging settings</DropdownMenuItem>
          <DropdownMenuItem>Set away message</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <PencilIcon :class="iconClassName" />
      <component
        :is="isChatsExpanded ? ChevronDown : ChevronUp"
        :class="iconClassName"
      />
    </div>
  </div>
</template>
