<template>
  <DefaultGrid class="mt-24 w-full">
    <div class="lg:col-start-1 lg:col-end-12 relative">
      <div ref="heroContent" class="hero-content flex flex-col w-full">
        <div
          class="relative text-primary font-lato text-center outlined-text outline-1 outline-black text-[9rem] font-semibold"
        >
          <h1 class="z-10">CARTEL DESIGN</h1>
          <!-- <h1
            class="absolute inset-0"
            :style="{
              transform: `translate(${mouse.x * 0.02}px, ${mouse.y * 0.02}px)`,
            }"
          >
            CARTEL DESIGN
          </h1> -->
        </div>
      </div>
      <div
        class="text-lg my-24 italic text-center lg:text-6xl overflow-hidden w-full"
      >
        <h2 class="my-4 slogan-item font-light">Wachsende Businesses,</h2>
        <h2 class="my-4 slogan-item font-light">kluge Ideen,</h2>
        <h2 class="my-4 slogan-item font-light">komplizierte Prozesse,</h2>
        <br />
        <h2 class="my-4 slogan-item">brauchen DIGITALE ANWENDUNGEN</h2>
      </div>
    </div>
  </DefaultGrid>
</template>

<script setup>
import gsap from 'gsap';

const heroContent = ref(null);

const mouse = ref({ x: 0, y: 0 });

const updateMousePosition = (event) => {
  mouse.value = {
    x: event.clientX,
    y: event.clientY,
  };
};

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition);
});

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition);
  const element = heroContent.value;
  let targets = gsap.utils.toArray('.slogan-item');

  // Set initial position to center of the screen
  gsap.set(element, {
    y: '35%',
  });

  // Animate to natural position
  gsap.to(element, {
    duration: 2,
    y: 0,
    opacity: 1,
    // position: 'absolute',
    ease: 'power3.out',
  });

  // Animate each text element sequentially
  targets.forEach((el, index) => {
    gsap.fromTo(
      el,
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        delay: 1 + index * 0.5,
        ease: 'power3.out',
        onComplete: () => {
          // Loop animation
          // gsap.to(el, {
          //   x: '50%',
          //   duration: 2,
          //   repeat: -1,
          //   yoyo: true,
          //   ease: 'power1.inOut',
          // });
        },
      }
    );
  });
});
</script>

<style>
.hero-content {
  opacity: 0;
}

.slogan-item {
  opacity: 0;
}
</style>
