<template>
  <div class="flex justify-between w-full bg-[#13171D] py-9">
    <div clas="flex flex-col justify-center items-center">
      <h2 class="font-kodchasan text-2xl">
        Cartel Design
      </h2>
      <p class="text-sm opacity-30">© 2024 Alle Rechte vorbehalten.</p>
    </div>
    <div class="flex items-center justify-center">
      <NuxtLink class="mr-4">AGB</NuxtLink>
      <NuxtLink class="mr-4">Datenschutz</NuxtLink>
      <NuxtLink>Impressum</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: footer } = await fetchGlobalHandler('footer');
</script>

<style lang="scss" scoped></style>
