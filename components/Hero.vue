<template>
  <DefaultGrid class="mt-8">
    <div
      ref="heroContent"
      class="hero-content w-full lg:col-start-1 lg:col-end-12 relative flex justify-between font-plex z-10"
    >
      <div class="flex w-full flex-wrap justify-start text-justify gap-x-16">
        <h1 class="lg:text-9xl text-6xl w-fit">
          <span
            class="bg-gradient-to-r from-sky-600 to-fuchsia-800 inline-block text-transparent bg-clip-text uppercase font-bold font-exo"
            >Cartel</span
          >
          <br />
          <span
            class="uppercase bg-gradient-to-r from-fuchsia-800 to-sky-600 inline-block text-transparent bg-clip-text font-exo"
          >
            design</span
          >
        </h1>
        <h2 class="text-lg lg:text-9xl my-16">trifft</h2>
        <h2 class="text-lg lg:text-9xl my-16">Funktionalität</h2>
        <h2 class="text-lg lg:text-9xl my-16">Webseiten,</h2>
        <h2 class="text-lg lg:text-9xl my-16">die begeistern.</h2>
      </div>
    </div>
    <div
      class="hero-content w-full lg:col-start-1 lg:col-end-12 relative flex justify-between font-plex z-10"
    >
      <div class="flex w-full flex-wrap justify-start text-justify gap-x-16">
        <h1 class="lg:text-9xl text-6xl w-fit">
          <span
            class="bg-gradient-to-r from-sky-600 to-fuchsia-800 inline-block text-transparent bg-clip-text uppercase font-bold font-exo"
            >Cartel</span
          >
          <br />
          <span
            class="uppercase bg-gradient-to-r from-fuchsia-800 to-sky-600 inline-block text-transparent bg-clip-text font-exo"
          >
            design</span
          >
        </h1>
        <h2 class="text-lg lg:text-9xl my-16">trifft</h2>
        <h2 class="text-lg lg:text-9xl my-16">Funktionalität</h2>
        <h2 class="text-lg lg:text-9xl my-16">Webseiten,</h2>
        <h2 class="text-lg lg:text-9xl my-16">die begeistern.</h2>
      </div>
    </div>
  </DefaultGrid>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const heroContent = ref(null);

onMounted(() => {
  const element = heroContent.value;

  // Set initial position to center of the screen
  gsap.set(element, {
    top: '30%',
    position: 'fixed',
  });

  // Animate to natural position
  gsap.to(element, {
    duration: 2,
    delay: 0.4,
    top: 0,
    opacity: 1,
    position: 'absolute',
    ease: 'power3.out',
  });
});
</script>

<style scoped>
.hero-content {
  opacity: 0;
}
</style>
