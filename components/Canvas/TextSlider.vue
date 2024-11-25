<template>
  <div class="w-full relative h-24 overflow-hidden py-24">
    <div id="no02" class="wrapper text-primary">
      <div class="boxes">
        <div class="box">
          <h2
            class="before:content-['CARTELDESIGN'] before:absolute before:bottom-[6px] before:right-[6px] text-stroke-small">
            CARTELDESIGN</h2>
        </div>
        <div class="box">
          <h2
            class="before:content-['ESWIRDALLESGUT'] before:absolute before:bottom-[6px] before:right-[7px]  text-stroke-small">
            ESWIRDALLESGUT</h2>
        </div>
        <div class="box">
          <h2
            class="before:content-['CARTELDESIGN'] before:absolute before:bottom-[6px] before:right-[6px] text-stroke-small">
            CARTELDESIGN</h2>
        </div>
        <div class="box">
          <h2
            class="before:content-['ESWIRDALLESGUT'] before:absolute before:bottom-[6px] before:right-[7px]  text-stroke-small">
            ESWIRDALLESGUT</h2>
        </div>
        <div class="box">
          <h2
            class="before:content-['CARTELDESIGN'] before:absolute before:bottom-[6px] before:right-[6px] text-stroke-small">
            CARTELDESIGN</h2>
        </div>
        <div class="box">
          <h2
            class="before:content-['ESWIRDALLESGUT'] before:absolute before:bottom-[6px] before:right-[7px]  text-stroke-small">
            ESWIRDALLESGUT</h2>
        </div>
        <div class="box">
          <h2
            class="before:content-['CARTELDESIGN'] before:absolute before:bottom-[6px] before:right-[6px] text-stroke-small">
            CARTELDESIGN</h2>
        </div>
        <!--   <div class="box">ESWIRDALLESGUT</div>
        <div class="box">CARTELDESIGN</div>
        <div class="box">ESWIRDALLESGUT</div>
        <div class="box">CARTELDESIGN</div>
        <div class="box">ESWIRDALLESGUT</div>
        <div class="box">CARTELDESIGN</div>
        <div class="box">ESWIRDALLESGUT</div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.set('.wrapper', { xPercent: 0, yPercent: 0 });
  const boxCount = gsap.utils.toArray('.box').length;

  var boxWidth = 718,
    totalWidth = boxWidth * boxCount, //  * n of boxes
    no02 = document.querySelectorAll('#no02 .box'),
    dirFromRight = '-=' + totalWidth;

  var mod = gsap.utils.wrap(0, totalWidth);

  function marquee(which, time, direction) {
    gsap.set(which, {
      x: function (i) {
        return i * boxWidth;
      },
    });
    var action = gsap.timeline().to(which, {
      x: direction,
      modifiers: {
        x: (x) => mod(parseFloat(x)) + 'px',
      },
      duration: time,
      ease: 'none',
      repeat: -1,
    });
    return action;
  }

  var master = gsap
    .timeline({ paused: true })
    .add(marquee(no02, 20, dirFromRight), 0);

  // =============================

  var action = gsap.timeline({
    defaults: { duration: 1, ease: 'none' },
    scrollTrigger: {
      trigger: '.wrapper',
      //scrub: 0.5,
      start: 'top 100%',
      end: 'bottom 0%',
      onEnter: (isActive) => master.play(),
      onLeave: (isActive) => master.pause(),
      onLeaveBack: (isActive) => master.pause(),
      onEnterBack: (isActive) => master.play(),
      //   markers: true,
    },
  });
});
</script>

<style scoped>
.wrapper {
  position: absolute;
  width: 100%;
  top: 0;
  /*   height: 80px; */
  overflow: hidden;
}

.wrapper .box {
  position: absolute;
  /*   width: 36px; */
  /* height: 110px; */
  font-size: 100px;
  font-weight: 600;
  /*   line-height: 50px; */
  text-align: center;
}

.wrapper .boxes {
  position: relative;
  left: -36px;
  height: 120px;
}

.text-stroke-small {
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
}
</style>
