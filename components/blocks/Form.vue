<template>
  <div>
    <h2>{{ formBlock.title }}</h2>
    <UtilsSlateRenderer :html="formBlock.richtext" />
    <UtilsFormRenderer v-if="formBlock" :form="formBlock.form" />
    <AtomMedia v-if="formBlock.image" v-bind="formBlock.image" />
  </div>
</template>

<script setup>
const props = defineProps({
  formBlock: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
