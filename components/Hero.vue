<template>
  <div class="w-full h-screen transition-colors duration-300 flex flex-col space-between">
    <DefaultGrid class="pt-12 pb-24 w-full">
      <div class="lg:col-start-1 lg:col-end-13 relative">
        <div ref="heroContent" class="hero-content flex flex-col w-full relative z-10">
          <div class="relative flex justify-center text-[9rem] font-semibold transition-colors duration-300">
            <div class="relative w-fit">
              <h2
                class="before:content-['CARTELDESIGN'] before:absolute before:bottom-3 before:right-3 text-white before:text-[#01FDC6] text-stroke">
                CARTELDESIGN</h2>
            </div>
          </div>
        </div>   
      </div>
    </DefaultGrid>
    <NuxtImg width="120" height="120" class="w-full h-24 animated-motion-2 z-40" src="/arw2.svg" />
    <NuxtImg width="120" height="120" class="w-full h-36 animated-motion z-30" src="/arw1.svg" />
    <NuxtImg width="120" height="120" class="w-full h-20 animated-motion-3 z-20" src="/arw3.svg" />
    <NuxtImg width="120" height="120" class="w-full h-36 animated-motion-4 z-10" src="/arw4.svg" />
    <GridSVG class="absolute top-0 left-1/2 transform -translate-x-1/2"></GridSVG>
  </div>

</template>

<script setup>
import gsap from 'gsap';

const heroContent = ref(null);
const isScrolled = ref(false);

const handleScroll = (event) => {
  if (window.scrollY > 10) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  const element = heroContent.value;
  let targets = gsap.utils.toArray('.slogan-item');

  gsap.set(element, {
    y: '30%',
  });

  // Animate to natural position
  gsap.to(element, {
    duration: 1,
    y: 0,
    opacity: 1,
    // position: 'absolute',
    ease: 'power2.out',
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
        delay: 0.7 + index * 0.5,
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

.text-stroke {
  text-shadow: -5px -5px 0 black, 5px -5px 0 black, -5px 5px 0 black, 5px 5px 0 black;
}

@keyframes motion {
  0% {
    transform: scale(1) translateY(-20px);
    opacity: 1;
  }

  50% {
    transform: scale(1.2) translateY(-50px);
    opacity: 1;
  }

  100% {
    transform: scale(1) translateY(-20px);
    opacity: 1;
  }
}

@keyframes motion-2 {
  0% {
    transform: scale(1) translateY(30px);
    opacity: 1;
  }


  50% {
    transform: scale(1.2) translateY(43px);
    opacity: 1;
  }

  100% {
    transform: scale(1) translateY(30px);
    opacity: 1;
  }
}

@keyframes motion-3 {
  0% {
    transform: scale(1.3) translateY(-145px) translateX(10px);
    ;
    opacity: 0;
  }

  25% {
    transform: scale(1.3) translateY(-145px) translateX(10px);
    opacity: 0;
  }

  50% {
    transform: scale(1.3) translateY(-145px) translateX(10px);
    opacity: 1;
  }

  75% {
    transform: scale(1.3) translateY(-145px) translateX(10px);
    opacity: 0;
  }

  100% {
    transform: scale(1.3) translateY(-145px) translateX(10px);
    ;
    opacity: 0;
  }
}

@keyframes motion-4 {
  0% {
    transform: scale(1) translateY(-190px) translateX(20px);
    opacity: 1;
  }

  40% {
    transform: scale(1.2) translateY(-223px) translateX(20px);
    opacity: 1;
  }


  50% {
    transform: scale(1.2) translateY(-223px) translateX(20px);
    ;
    opacity: 1;
  }

  60% {
    transform: scale(1.2) translateY(-223px) translateX(20px);
    opacity: 1;
  }

  100% {
    transform: scale(1) translateY(-190px) translateX(20px);
    ;
    opacity: 1;
  }
}

.animated-motion {
  animation-duration: 10s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: motion;
  animation-iteration-count: infinite;
}

.animated-motion-2 {
  animation-duration: 10s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: motion-2;
  animation-iteration-count: infinite;
}

.animated-motion-3 {
  animation-duration: 10s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: motion-3;
  animation-iteration-count: infinite;
}

.animated-motion-4 {
  animation-duration: 10s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: motion-4;
  animation-iteration-count: infinite;
}
</style>
