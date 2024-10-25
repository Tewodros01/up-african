<template>
  <div class="min-h-screen flex flex-col">
    <CommonHeader />
    <div class="mt-24 md:mt-16">
      <CommonOpportunityHeader />
      <main class="flex-grow">
        <slot />
      </main>
    </div>

    <!-- Include ChatBox here -->
    <!-- <ChatBox v-if="useChatBox." /> -->
    <!-- <CommonFooter /> -->
  </div>
</template>
