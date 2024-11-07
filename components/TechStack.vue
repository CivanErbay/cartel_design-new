<template>
  <DefaultGrid class="items-center">
    <div
      class="lg:col-start-2 lg:col-end-6 relative after:absolute after:-left-[110px] after:top-[11px] after:w-20 after:h-[2px] after:bg-gradient-to-r after:from-fuchsia-800 after:to-sky-600">
      <span class="text-2xl">Mit einem professionellen Tool-Stack setzen wir Dein Projekt um.</span>
    </div>
    <div class="lg:col-start-6 lg:col-end-13 flex flex-wrap gap-x-16 gap-y-8">
      <!-- Loop over the array of images -->
      <NuxtImg v-for="(icon, index) in icons" :key="index" :width="50" :height="50"
        class="w-16 h-12 object-contain rounded-lg" :src="icon" />
    </div>
  </DefaultGrid>
</template>

<script setup>
const icons = Array(4).fill(['/nodejs.svg', '/google.svg', '/sketch.svg']).flat()
</script>
