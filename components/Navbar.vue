<template>
  <div class="flex justify-between items-center py-8 px-5 lg:px-0">
    <NuxtLink to="/">
      <h2 class="font-kodchasan text-2xl">Cartel Design</h2>
    </NuxtLink>
    <ul class="lg:flex items-center gap-10 hidden">
      <li v-for="link in links">
        <a :href="link.url">{{ link.title }}</a>
      </li>
    </ul>
    <!--  <button class="rounded-lg flex w-fit items-center h-12  bg-gradient-to-r from-fuchsia-800 to-sky-600">
      <div class="flex h-full w-full items-center justify-center bg-[#202d47] back">

      </div>
    </button> -->
    <button class="w-fit rounded-lg bg-gradient-to-r from-fuchsia-800 to-sky-600 p-0.5">
      <div class="flex h-full rounded-lg w-full px-4 py-2 items-center justify-center bg-gray-800">
        Jetzt kontaktieren
        <svg class="ml-2" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.3638 7.92447L9.96439 13.3239C9.72031 13.568 9.72031 13.9637 9.96439 14.2078C10.2085 14.4518 10.6042 14.4518 10.8483 14.2078L17.3134 7.74263C17.5575 7.49856 17.5575 7.10284 17.3134 6.85875L10.6895 0.183057C10.4454 -0.061019 10.0497 -0.061019 9.80561 0.183057C9.56153 0.427133 9.56153 0.822864 9.80561 1.06694L15.3614 6.67448L0.919392 6.67511C0.574207 6.67511 0.294388 6.95493 0.294388 7.30011C0.294401 7.64528 0.574221 7.9251 0.919392 7.92512L15.3638 7.92447Z"
            fill="#FAFAFA" />
        </svg>
      </div>
    </button>
  </div>
</template>

<script setup>
const { data: header } = await fetchGlobalHandler('header');
// console.log(header);

const links = [
  {
    title: 'Services',
    url: '/#services',
  },
  /*   {
    title: 'Expertise',
    url: '#expertise',
  },
  {
    title: 'Leistungen',
    url: '#services'
  }, */
  {
    title: 'Cartel',
    url: '/#cartel',
  },
  {
    title: 'Kostenlose Beratung',
    url: '/#consultation',
  },
];
</script>
