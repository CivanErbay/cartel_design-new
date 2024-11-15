<template>
  <div v-if="hasBlocks">
    <div v-for="(block, index) in blocks" :key="index" class="my-16">
      <component
        :is="blockComponents[block.blockType]"
        v-bind="block"
        :id="block.blockName"
        v-if="blockComponents[block.blockType]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Define your block components here
const blockComponents = {
  // Example:
  // 'blockType1': BlockType1Component,
  // 'blockType2': BlockType2Component,
};

const route = useRoute();
const blocks = ref(route.params.blocks || []);

const hasBlocks = computed(
  () => blocks.value && Array.isArray(blocks.value) && blocks.value.length > 0
);
</script>

<style lang="scss" scoped></style>
