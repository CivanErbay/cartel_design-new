<template>
  <div v-if="page">
    <article class="pt-16 pb-24">
      <UtilsRenderBlocks :blocks="page.layout" />
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const page = ref(null);

const queryPageBySlug = async (slug) => {
  const parsedSlug = decodeURIComponent(slug);
  const { data: result } = await fetchCollectionHandler('pages', parsedSlug);
  return result;
};

const slug = route.params.slug || 'index';
console.log({ slug });
page.value = await queryPageBySlug(slug);
if (!page.value) {
  // router.push('/404');
}
</script>

<style lang="scss" scoped></style>
