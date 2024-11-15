<template>
  <Hero />
  <Text v-gsap-appear />
  <!-- <Services />
    <Expertise /> -->
  <TechStack v-gsap-appear />
  <Team v-gsap-appear />
  <UtilsFormRenderer v-if="formBlock" :form="formBlock.form" v-gsap-appear />
  <!-- <Consultation /> -->
  <CanvasWebGLCanvas />
</template>

<script setup>
const { data } = await fetchCollectionHandler('pages', 'index');
console.log(data);

const formBlock = computed(() =>
  data.value.layout.find((block) => block.blockType === 'formBlock')
);
</script>
