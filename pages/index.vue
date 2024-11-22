<template>
  <div>
    <div class="mx-auto">
      <Hero />
      <SectionServices />
      <CanvasTextSlider v-gsap-appear />
      <ContentSample v-gsap-appear />
      <TechStack v-gsap-appear />
      <!-- <Text v-gsap-appear /> -->

      <Team v-gsap-appear />
      <!--   <BlocksForm id="contact" :formBlock="formBlock" v-gsap-appear /> -->
    </div>
  </div>
</template>

<script setup>
const { data } = await fetchCollectionHandler('pages', 'index');

/* const formBlock = computed(() =>
  data.value.layout.find((block) => block.blockType === 'formBlock')
); */
</script>

<style></style>
