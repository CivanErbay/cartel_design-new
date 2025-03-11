<template>
  <div>
    <div class="mx-auto relative">
      <Hero class="z-20" id="hero" />

      <SideNav></SideNav>

      <SectionServices id="services" />
      <CanvasTextSlider v-gsap-appear />
      <ContentSample v-gsap-appear />
      <TechStack v-gsap-appear />
      <Team id="cartel" v-gsap-appear />
    </div>
  </div>
</template>


<script setup>
const { data } = await fetchCollectionHandler('pages', 'index');

/* const formBlock = computed(() =>
  data.value.layout.find((block) => block.blockType === 'formBlock')
); */


</script>

<style>

</style>
