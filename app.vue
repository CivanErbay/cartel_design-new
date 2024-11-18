<template>
  <div class="">
    <NuxtLoadingIndicator />
    <Suspense>
      <div
        class="relative mx-auto font-roboto tracking-wide max-w-[1440px] lg:px-16"
      >
        <Navbar />
        <NuxtPage />
        <Footer />
      </div>
    </Suspense>
  </div>
</template>

<style></style>
