<template>
  <div class="relative">
    <DefaultGrid class="my-32 w-full">
      <div class="lg:col-start-1 lg:col-end-13 relative">
        <div class="w-full h-full flex flex-col items-center justify-center">
          <div class="relative group" v-for="(service, i) in services" :key="i" v-gsap-appear>
            <h2 @mouseenter="hoveredServiceIndex = i" @mouseleave="hoveredServiceIndex = null"
              class="text-primary uppercase text-8xl font-semibold transition-all duration-200 hover:tracking-widest cursor-pointer">
              {{ service.label }}
            </h2>
            <div
              class="absolute duration-200 max-w-[500px] top-0 h-full flex items-center text-secondary text-lg w-max right-full opacity-0 transition-all"
              :class="{ 'opacity-100 mr-8': hoveredServiceIndex === i }">
              {{ service.floatingTextLeft }}
            </div>
            <div
              class="absolute duration-200 max-w-[500px] top-0 h-full flex items-center text-secondary text-lg w-max left-full opacity-0 transition-all"
              :class="{ 'opacity-100 ml-8': hoveredServiceIndex === i }">
              {{ service.floatingTextRight }}
            </div>
          </div>
        </div>
      </div>
    </DefaultGrid>
  </div>
</template>

<script setup>
const hoveredServiceIndex = ref(null);

const services = [
  {
    label: 'ux/ui-design',
    floatingTextLeft: 'Das kann auch mein Kind',
    floatingTextRight: 'Ne brauch ich nicht',
  },
  {
    label: 'website',
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
    label: 'cms',
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
  {
    label: 'ai',
    floatingTextLeft: 'Was wenn ich das nicht kann?',
    floatingTextRight: 'Ich will aber mein Content anders',
  },
];
</script>

<style lang="scss" scoped></style>
