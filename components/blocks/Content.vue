<template>
  <div>
    <h3>{{ title }}</h3>
    <p class="">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({ title: String, subtitle: String });
</script>

<style lang="scss" scoped></style>
