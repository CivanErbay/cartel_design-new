<template>
  <Hero />
  <Text v-gsap-appear />
  <!-- <Services />
    <Expertise /> -->
  <TechStack v-gsap-appear />
  <Team v-gsap-appear />
  <div class="">
    <h2>{{ formBlock.title }}</h2>
    <UtilsSlateRenderer :html="formBlock.richtext" />
    <UtilsFormRenderer v-if="formBlock" :form="formBlock.form" v-gsap-appear />
  </div>
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
