<template>
  <div>
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
import Content from '../blocks/Content.vue';
import Form from '../blocks/Form.vue';

// Define your block components here
const blockComponents = {
  content: Content,
  form: Form,
};

const props = defineProps({
  blocks: Array,
});
</script>

<style lang="scss" scoped></style>
