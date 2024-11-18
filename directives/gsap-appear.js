import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted(el, binding) {
    const {
      y = 50,
      opacity = 0,
      duration = 1,
      start = 'top 80%',
      end = 'bottom 20%',
      toggleActions = 'play none none none',
    } = binding.value || {};

    const isInViewport =
      el.getBoundingClientRect().top < window.innerHeight * 0.8;
    const delay = isInViewport ? 1 : 0;

    gsap.from(el, {
      y,
      opacity,
      duration,
      delay,
      scrollTrigger: {
        trigger: el,
        start,
        end,
        toggleActions,
      },
    });
  },
};
