import { defineNuxtPlugin } from '#app';
import gsapAppearDirective from '../directives/gsap-appear';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('gsap-appear', gsapAppearDirective);
});
