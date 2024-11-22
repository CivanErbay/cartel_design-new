<template>
  <DefaultGrid class="items-center mb-32">
    <div class="lg:col-start-3 lg:col-end-11">
      <div class="mb-12">
        <h3 class="text-xl lg:text-5xl mb-2">Von der Idee bis zur Umsetzung</h3>
        <h3 class="text-lg lg:text-3xl">mit modernsten Webtechnologien</h3>
      </div>
      <div class="flex flex-wrap gap-x-16 gap-y-8 my-8">
        <!-- Loop over the array of images -->
        <NuxtImg
          v-for="(icon, index) in icons"
          :key="index"
          :width="50"
          :height="50"
          class="w-16 h-12 object-contain rounded-lg"
          :src="icon"
        />
      </div>
    </div>
  </DefaultGrid>
</template>

<script setup>
const icons = Array(4)
  .fill(['/nodejs.svg', '/google.svg', '/sketch.svg'])
  .flat();
</script>
