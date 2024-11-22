<template>
  <div :class="gridClasses">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  noSpacing: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const gridClasses = computed(() => {
  return [
    'relative container mx-auto grid lg:grid-cols-12 gap-x-1 px-5 lg:px-0',
    props.noSpacing ? '' : 'mb-20 lg:mb-44',
  ].join(' ');
});
</script>
