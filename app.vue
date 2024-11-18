<template>
  <div>
    <NuxtLoadingIndicator />
<!--     <div
      class="absolute inset-0 landing-grid bottom-0z-[-1] [mask-image:radial-gradient(40%_70%_at_right,white,transparent)]" /> -->
    <Suspense>
      <div class="relative mx-auto font-roboto tracking-wide lg:px-16"> <!--  -->
        <!-- <Navbar /> -->
        <NuxtPage />
        <Footer />
      </div>
    </Suspense>
   <!--  <div
      class="absolute inset-0 landing-grid bottom-0z-[-1] [mask-image:radial-gradient(20%_70%_at_left,white,transparent)]" /> -->
  </div>
</template>

<style></style>
