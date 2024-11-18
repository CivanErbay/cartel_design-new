<template>
  <DefaultGrid class="mt-8">
    <div
      ref="heroContent"
      class="hero-content lg:col-start-1 lg:col-end-12 relative flex justify-between font-plex"
    >
      <div class="flex flex-col justify-between text-justify">
        <h1 class="lg:text-9xl text-6xl">
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
          trifft Funktionalität
        </h1>
        <h2 class="text-lg lg:text-9xl my-16">
          Webseiten, die begeistern. <br />
        </h2>
      </div>
    </div>
    <div
      class="hero-content opacity-0 lg:col-start-1 lg:col-end-12 relative flex justify-between font-plex"
    >
      <div class="flex flex-col justify-between text-justify">
        <h1 class="lg:text-9xl text-6xl">
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
          trifft Funktionalität
        </h1>
        <h2 class="text-lg lg:text-9xl my-16">
          Webseiten, die begeistern. <br />
        </h2>
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
    top: '50%',
    position: 'fixed',
  });

  // Animate to natural position
  gsap.to(element, {
    duration: 1.5,
    top: 0,
    opacity: 1,
    position: 'absolute',
    ease: 'power1.out',
  });
});
</script>

<style scoped>
.hero-content {
  opacity: 0;
}
</style>
