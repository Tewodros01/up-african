<template>
  <div class="min-h-screen flex">
    <CommonHeader />
    <ProfileCommonProfileSidebar />
    <main class="flex-1 mx-auto md:ml-[18rem] p-2 mt-16">
      <slot />
    </main>
  </div>
</template>
