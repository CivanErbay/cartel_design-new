<template>
  <div class="relative">
    <DefaultGrid class="mt-24 w-full min-h-screen overflow-hidden">
      <div class="lg:col-start-1 lg:col-end-12 relative">
        <div class="w-full h-full flex flex-col items-center justify-center">
          <div class="relative group" v-for="(service, i) in services" :key="i">
            <h2 class="text-primary uppercase text-8xl font-semibold mb-4">
              {{ service.label }}
            </h2>
            <div
              class="absolute top-0 h-full flex items-center mr-8 text-secondary text-lg w-max right-full opacity-0 group-hover:opacity-100 transition-all"
            >
              {{ service.floatingTextLeft }}
            </div>
            <div
              class="absolute top-0 h-full flex items-center ml-8 text-secondary text-lg w-max left-full opacity-0 group-hover:opacity-100 transition-all"
            >
              {{ service.floatingTextRight }}
            </div>
          </div>
        </div>
      </div>
    </DefaultGrid>
  </div>
</template>

<script setup>
const services = [
  {
    label: 'ux/ui design',
    floatingTextLeft: 'Das kann auch mein Kind',
    floatingTextRight: 'Ne brauch ich nicht',
  },
  {
    label: 'web apps',
    floatingTextLeft: 'Es reicht doch mit Instagram',
    floatingTextRight: 'Ich bin schon bei EbayKleinanzeigen',
  },
  {
    label: 'seo',
    floatingTextLeft: 'Was ist das denn?',
    floatingTextRight: 'Was bringt mir das?',
  },
  {
    label: 'content',
    floatingTextLeft: 'Ich bin doch kein Schriftsteller',
    floatingTextRight:
      'Ich habe ja immer Zeit, meine Dienstleistung nochmal zu erklären',
  },
  {
    label: 'CMS',
    floatingTextLeft: 'Und wie ergänze ich meinen eigenes Website?',
    floatingTextRight: 'Ja es passt so änderungen brauche ich nicht',
  },
  {
    label: 'automation',
    floatingTextLeft: 'Kein Problem ich habe doch viel Zeit!',
    floatingTextRight: 'Papierkram ist doch schön',
  },
  {
    label: 'templates',
    floatingTextLeft: 'Was wenn ich das nicht kann?',
    floatingTextRight: 'Ich will aber mein Content anders',
  },
];
</script>

<style lang="scss" scoped></style>
