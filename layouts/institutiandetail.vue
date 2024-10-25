<template>
  <div class="min-h-screen flex flex-col">
    <CommonInstitutionHeader />
    <div class="mt-[6rem] md:mt-16">
      <CommonOpportunityHeader />
      <main class="flex-grow">
        <slot />
      </main>
    </div>
    <!-- <CommonFooter /> -->
  </div>
</template>
