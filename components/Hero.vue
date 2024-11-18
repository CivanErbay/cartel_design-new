<template>
  <DefaultGrid class="mt-8">
    <div class="lg:col-start-1 lg:col-end-12 relative flex font-plex h-screen">
      <div ref="heroContent" class="hero-content flex flex-col justify-between text-justify">
        <div class="loader">
          <div data-glitch="Design" class="glitch font-exo font-bold">CARTEL</div>
        </div>
        <!--  <h1 class="lg:text-9xl text-6xl"> -->
        <!--   <h1 class="lg:text-9xl text-6xl">



          <span
            class=" bg-gradient-to-r from-sky-600 to-fuchsia-800 inline-block text-transparent bg-clip-text uppercase font-bold font-exo">Cartel</span>
          <br>
          <span
            class="uppercase bg-gradient-to-r from-fuchsia-800 to-sky-600 inline-block text-transparent bg-clip-text font-exo">
            design</span>




        </h1>
 -->
        <!--    <span
          class=" bg-gradient-to-r from-sky-600 to-fuchsia-800 inline-block text-transparent bg-clip-text uppercase font-bold font-exo">Cartel</span>
        <br>
        <span
          class="uppercase bg-gradient-to-r from-fuchsia-800 to-sky-600 inline-block text-transparent bg-clip-text font-exo">
          design</span>
        trifft
        Funktionalität
           </h1>
        <h2 class="text-lg lg:text-9xl my-16">Webseiten, die begeistern. <br> --> <!-- Websoftware, die
          Prozesse
          optimiert. <br> Web-Apps, die
          Wachstum beschleunigen. --><!-- </h2> -->

        <!--     <button
          class="rounded-lg h-12 py-8 px-8 flex items-center w-fit bg-gradient-to-r from-fuchsia-800 to-sky-600">Let's
          talk

          <svg class="ml-2" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.3638 7.92447L9.96439 13.3239C9.72031 13.568 9.72031 13.9637 9.96439 14.2078C10.2085 14.4518 10.6042 14.4518 10.8483 14.2078L17.3134 7.74263C17.5575 7.49856 17.5575 7.10284 17.3134 6.85875L10.6895 0.183057C10.4454 -0.061019 10.0497 -0.061019 9.80561 0.183057C9.56153 0.427133 9.56153 0.822864 9.80561 1.06694L15.3614 6.67448L0.919392 6.67511C0.574207 6.67511 0.294388 6.95493 0.294388 7.30011C0.294401 7.64528 0.574221 7.9251 0.919392 7.92512L15.3638 7.92447Z"
              fill="#FAFAFA" />
          </svg>

        </button> -->
      </div>
    </div>
  </DefaultGrid>
</template>

<script setup>
import gsap from 'gsap'

const heroContent = ref(null);

onMounted(() => {
  const element = heroContent.value;

  // Set initial position to center of the screen
  gsap.set(element, {
    y: '35%',
  });

  // Animate to natural position
  gsap.to(element, {
    duration: 2.1,
    delay: 0.3,
    y: 0,
    opacity: 1,
    // position: 'absolute',
    ease: 'power3.out',
  });
});
</script>

<style>
.hero-content {
  opacity: 0;
}

.glitch {
  position: relative;
  font-size: 280px;
  font-weight: 600;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 5px;
  z-index: 1;
  cursor: pointer;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 100px;
/*   left: 130px; */
  right: 0;
  font-size: 380px;
  font-family: 'Inter', sans-serif;
  letter-spacing: -80px;
}

.glitch:before {
  animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #8b00ff;
  opacity: 0.8;
  z-index: -1;
}

.glitch:after {
  animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: #00e571;
  opacity: 0.5;
  z-index: -2;
  /*   animation: shift 2s ease-in-out infinite alternate; */
}

.glitch:hover:before {
  animation: shift 2.5s ease-in-out infinite alternate;
}

.glitch:hover:after {
  animation: shift 0.5s ease-in-out infinite alternate;
}


@keyframes glitch {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
  }
}

@keyframes shift {

  0%,
  40%,
  44%,
  58%,
  61%,
  65%,
  69%,
  73%,
  100% {
    transform: skewX(0deg);
  }

  41% {
    transform: skewX(10deg);
  }

  42% {
    transform: skewX(-10deg);
  }

  59% {
    transform: skewX(40deg) skewY(10deg);
  }

  60% {
    transform: skewX(-40deg) skewY(-10deg);
  }

  63% {
    transform: skewX(10deg) skewY(-5deg);
  }

  70% {
    transform: skewX(-50deg) skewY(-20deg);
  }

  71% {
    transform: skewX(10deg) skewY(-10deg);
  }
}
</style>
