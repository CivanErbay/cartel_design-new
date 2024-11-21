<template>
  <div class="relative">
    <DefaultGrid class="mt-24 w-full min-h-screen">
      <div class="lg:col-start-1 lg:col-end-12 relative">
        <div class="w-full h-full flex flex-col items-center justify-center">
          <h2
            class="text-primary uppercase text-8xl font-semibold mb-4"
            v-for="(label, i) in labels"
            :key="i"
          >
            {{ label }}
          </h2>
        </div>
      </div>
    </DefaultGrid>
    <div class="absolute inset-0 pointer-events-none">
      <div
        v-for="(text, index) in floatingText"
        :key="index"
        :style="{
          ...getRandomPosition(),
          transform: `translate(-50%, -50%)`,
        }"
        class="absolute text-secondary text-lg w-max"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup>
const labels = [
  'ux/ui design',
  'web apps',
  'seo',
  'content',
  'CMS',
  'automation',
  'templates',
];

const getRandomPosition = () => {
  const left =
    Math.random() < 0.5
      ? `${Math.random() * 30}%`
      : `${70 + Math.random() * 30}%`;
  return {
    top: `${Math.random() * 80 + 10}%`,
    left,
  };
};

const floatingText = [
  'Was ist das?',
  'Was bringt mir das?',
  'Hä, aber wie dann?',
  'Oh man das ist aber teuer!',
  'Was ist das?',
  'Was bringt mir das?',
  'Hä, aber wie dann?',
  'Oh man das ist aber teuer!',
];
</script>

<style lang="scss" scoped></style>
