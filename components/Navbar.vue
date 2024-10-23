<template>
  <div class="flex justify-between items-center">
    <h2>Cartel Design</h2>
    <ul class="flex items-center gap-10">
      <li v-for="link in links">
        <a :href="link.url">{{ link.title }}</a>
      </li>
    </ul>
    <button class="border h-12 px-4">Jetzt kontaktieren</button>
  </div>
</template>

<script setup>

const links = [
  {
    title: 'Services',
    url: '#services'
  },
  {
    title: 'Expertise',
    url: '#expertise'
  },
  {
    title: 'Leistungen',
    url: '#services'
  },
  {
    title: 'Cartel',
    url: '#cartel'
  },
  {
    title: 'Kostenlose Beratung',
    url: '#consultation'
  }
]
</script>