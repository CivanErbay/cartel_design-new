<template>
  <Hero />
  <TechStack v-gsap-appear />
  <Text v-gsap-appear />
  <!-- <Services />
    <Expertise /> -->

  <Team v-gsap-appear />
  <!--   <BlocksForm id="contact" :formBlock="formBlock" v-gsap-appear /> -->

  <!-- <Consultation /> -->
  <CanvasWebGLCanvas />
</template>

<script setup>
const { data } = await fetchCollectionHandler('pages', 'index');

/* const formBlock = computed(() =>
  data.value.layout.find((block) => block.blockType === 'formBlock')
); */
</script>
