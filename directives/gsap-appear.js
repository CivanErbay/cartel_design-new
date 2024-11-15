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

    gsap.from(el, {
      y,
      opacity,
      duration,
      scrollTrigger: {
        trigger: el,
        start,
        end,
        toggleActions,
      },
    });
  },
};
