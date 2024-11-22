<template>
  <div class="relative">
    <DefaultGrid class="my-32 w-full">
      <div class="lg:col-start-1 lg:col-end-13 relative">
        <div class="w-full h-full flex flex-col items-center justify-center">
          <div
            class="group flex flex-col items-center justify-center"
            v-for="(service, i) in services"
            :key="i"
            v-gsap-appear
          >
            <button
              @mouseenter="hoveredServiceIndex = i"
              @mouseleave="hoveredServiceIndex = null"
              @click="
                selectedServiceIndex = selectedServiceIndex === i ? null : i
              "
              class="relative"
            >
              <h2
                class="text-primary uppercase text-8xl font-semibold mb-4 transition-all duration-200 hover:tracking-widest"
              >
                {{ service.label }}
              </h2>
              <div
                class="absolute hidden lg:flex duration-200 max-w-[500px] top-0 h-full items-center text-secondary text-lg w-max right-full opacity-0 transition-all"
                :class="{ 'opacity-100 mr-8': hoveredServiceIndex === i }"
              >
                {{ service.floatingTextLeft }}
              </div>
              <div
                class="absolute duration-200 max-w-[500px] top-0 h-full hidden lg:flex items-center text-secondary text-lg w-max left-full opacity-0 transition-all"
                :class="{ 'opacity-100 ml-8': hoveredServiceIndex === i }"
              >
                {{ service.floatingTextRight }}
              </div>
            </button>

            <div
              class="transition-all overflow-hidden text-center duration-300 flex justify-center w-1/2 mx-24"
              :class="{
                'h-32': selectedServiceIndex === i,
                // 'h-4': hoveredServiceIndex === i && selectedServiceIndex !== i,
                'h-0': selectedServiceIndex !== i,
              }"
            >
              {{ service.description }}
            </div>
          </div>
        </div>
      </div>
    </DefaultGrid>
  </div>
</template>

<script setup>
const hoveredServiceIndex = ref(null);
const selectedServiceIndex = ref(null);

const services = [
  {
    label: 'ux/ui design',
    floatingTextLeft: 'Das kann auch mein Kind',
    floatingTextRight: 'Ne brauch ich nicht',
    description:
      'Benutzererfahrung, die begeistert. Wir gestalten intuitive Benutzeroberflächen (UI) und optimieren die Nutzererfahrung (UX), damit Ihre digitalen Produkte nicht nur funktional, sondern auch ansprechend und benutzerfreundlich sind.',
  },
  {
    label: 'web apps',
    floatingTextLeft: 'Es reicht doch mit Instagram',
    floatingTextRight: 'Ich bin schon bei EbayKleinanzeigen',
    description:
      'Individuelle Webanwendungen, die überzeugen. Von interaktiven Plattformen bis hin zu leistungsstarken Tools – wir entwickeln maßgeschneiderte Web-Apps, die Ihre Geschäftsprozesse digitalisieren und optimieren.',
  },
  {
    label: 'seo',
    floatingTextLeft: 'Was ist das denn?',
    floatingTextRight: 'Was bringt mir das?',
    description:
      'Suchmaschinenoptimierung - Mehr Sichtbarkeit im Web Unsere SEO-Strategien sorgen dafür, dass Ihre Website in den Suchmaschinen gefunden wird und Ihre Zielgruppe Sie schnell und einfach entdeckt.',
  },
  {
    label: 'content',
    floatingTextLeft: 'Ich bin doch kein Schriftsteller',
    floatingTextRight:
      'Ich habe ja immer Zeit, meine Dienstleistung nochmal zu erklären',
    description:
      'Inhalte, die ankommen. Ob Texte, Bilder oder Videos – wir erstellen hochwertige Inhalte, die Ihre Marke repräsentieren und Ihre Botschaft klar vermitteln.',
  },
  {
    label: 'CMS',
    floatingTextLeft: 'Und wie ergänze ich meinen eigenes Website?',
    floatingTextRight: 'Ja es passt so änderungen brauche ich nicht',
    description:
      'Flexibles Website-Management. Wir entwickeln und integrieren benutzerfreundliche CMS-Lösungen, damit Sie Ihre Website-Inhalte jederzeit selbst aktualisieren können.',
  },
  {
    label: 'automation',
    floatingTextLeft: 'Kein Problem ich habe doch viel Zeit!',
    floatingTextRight: 'Papierkram ist doch schön',
    description:
      'Effizienz durch digitale Prozesse.Wir automatisieren wiederkehrende Aufgaben, optimieren Workflows und helfen Ihnen, Zeit und Ressourcen zu sparen.',
  },
  {
    label: 'templates',
    floatingTextLeft: 'Was wenn ich das nicht kann?',
    floatingTextRight: 'Ich will aber mein Content anders',
    description:
      'Individuelle Vorlagen für Ihren Erfolg. Professionell designte Website- und E-Mail-Templates, die genau auf Ihre Marke und Ihre Anforderungen abgestimmt sind.',
  },
];
</script>

<style lang="scss" scoped></style>
