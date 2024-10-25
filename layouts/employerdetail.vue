<template>
  <div class="min-h-screen flex flex-col">
    <CommonEmployerHeader />
    <div class="mt-28 md:mt-16">
      <CommonOpportunityHeader />
      <main class="flex-grow">
        <slot />
      </main>
    </div>
    <!-- <CommonFooter /> -->
  </div>
</template>
