<script setup>
import { Settings2 } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
</script>
<template>
  <div class="p-2 relative">
    <Input
      class="w-full bg-slate-100 border-none h-8 focus:border-none pl-2"
      placeholder="Search"
    />
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings2 class="absolute top-4 right-4" size="16" />
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-full">
        <DropdownMenuItem>Archived</DropdownMenuItem>
        <DropdownMenuItem>My connections</DropdownMenuItem>
        <DropdownMenuItem>Starred</DropdownMenuItem>
        <DropdownMenuItem>Unread</DropdownMenuItem>
        <DropdownMenuItem>InMail</DropdownMenuItem>
        <DropdownMenuItem>Spam</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
