<script>
export default {
  head() {
    return {
      title: "Assessment Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Assessment section of the application",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="bg-gray-200 min-h-screen">
    <AssesmentCommonHeader />
    <div class="flex flex-col lg:flex-row pt-16">
      <AssesmentCommonNavbar />
      <main class="w-full p-2">
        <!-- Added padding top to offset fixed header -->
        <slot />
      </main>
    </div>
  </div>
</template>
