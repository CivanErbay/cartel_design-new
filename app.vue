<template>
  <div>
    <NuxtLoadingIndicator />
    <Suspense>
      <div class="relative font-roboto-mono bg-black/75">
        <!-- <Navbar /> -->
        <NuxtPage />
        <Footer />
      </div>
    </Suspense>

    <CanvasWebGLCanvas />
  </div>
</template>

<style></style>
