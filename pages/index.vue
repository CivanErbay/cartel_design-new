<template>
  <Hero />
  <Text v-gsap-appear />
  <!-- <Services />
    <Expertise /> -->
  <TechStack v-gsap-appear />
  <Team v-gsap-appear />
  <BlocksForm id="contact" :formBlock="formBlock" v-gsap-appear />

  <!-- <Consultation /> -->
  <CanvasWebGLCanvas />
</template>

<script setup>
const { data } = await fetchCollectionHandler('pages', 'index');

const formBlock = computed(() =>
  data.value.layout.find((block) => block.blockType === 'formBlock')
);
</script>
