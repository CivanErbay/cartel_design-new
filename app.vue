<template>
  <div>
    <NuxtLoadingIndicator />
    <Suspense>
      <div class="relative font-roboto-mono bg-black/80">
        <!-- <Navbar /> -->
        <NuxtPage />
        <Footer />
      </div>
    </Suspense>

    <CanvasWebGLCanvas />
  </div>
</template>

<style></style>
