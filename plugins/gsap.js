import { defineNuxtPlugin } from '#app';
import gsapDirective from '../directives/gsap';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('gsap', gsapDirective);
});
