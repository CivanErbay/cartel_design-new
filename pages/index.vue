<template>
  <div>

    <div class="max-w-[1440px] mx-auto font-host">
      <Hero />
      <ContentSample/>
      <TechStack v-gsap-appear />
      <Text v-gsap-appear />

      <!-- <Services />
    <Expertise /> -->

      <Team v-gsap-appear />
      <!--   <BlocksForm id="contact" :formBlock="formBlock" v-gsap-appear /> -->

      <!-- <Consultation /> -->
      <CanvasWebGLCanvas />
    </div>
  </div>
  <!--  <div
    class="absolute inset-0 landing-grid bottom-0z-[-1] [mask-image:radial-gradient(50%_20%_at_bottom,white,transparent)]" /> -->
</template>

<script setup>
const { data } = await fetchCollectionHandler('pages', 'index');

/* const formBlock = computed(() =>
  data.value.layout.find((block) => block.blockType === 'formBlock')
); */
</script>

<style></style>
