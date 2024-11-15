<template>
  <div class="">
    <ClientOnly>
      <p :class="style" v-html="html"></p>
    </ClientOnly>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({ html: Array, style: String })

const html = computed(() => slateToHtml(props.html))
</script>
