<template>
  <div class="flex flex-col justify-between w-full py-9">
    <div clas="flex flex-col justify-center items-center">
      <h2 class="font-kodchasan text-2xl text-center">
        Cartel Design
      </h2>
      <p class="text-sm opacity-30 text-center mt-1">© 2024 Alle Rechte vorbehalten.</p>
    </div>
    <div class="flex items-center justify-center">
<!--       <NuxtLink class="mr-4 cursor-pointer">AGB</NuxtLink> -->
      <NuxtLink to="/datenschutz" class="mr-8 cursor-pointer">Datenschutz</NuxtLink>
      <NuxtLink to="/impressum" class="cursor-pointer">Impressum</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: footer } = await fetchGlobalHandler('footer');
</script>

<style lang="scss" scoped></style>
