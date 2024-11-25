<template>
  <div
    class="right-24 fixed top-1/2 transform -translate-y-1/2 text-2xl flex flex-col items-center bg-black z-20 py-12 px-12 bg-opacity-50 backdrop-blur rounded-lg">
    <!-- Add dynamic class for the active state -->
    <div class="py-1 px-8 border-solid border-2 rounded-[25px] mb-2"
      :class="{ 'border-[#01FDC6] border-active': activeSection === 'hero', 'border-transparent': activeSection !== 'hero' }">
      Start
    </div>
    <div class="py-1 px-8 border-solid border-2 rounded-[25px] mb-2"
      :class="{ 'border-[#01FDC6] border-active': activeSection === 'services', 'border-transparent': activeSection !== 'services' }">
      Services
    </div>
    <div class="py-1 px-8 border-solid border-2 rounded-[25px]"
      :class="{ 'border-[#01FDC6] border-active': activeSection === 'cartel', 'border-transparent': activeSection !== 'cartel' }">
      Cartel
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref(null);

onMounted(() => {
  const sections = document.querySelectorAll('#hero, #services, #cartel');
  const observerOptions = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  onUnmounted(() => {
    sections.forEach((section) => observer.unobserve(section));
  });
});

</script>

<style scoped>
.border-transparent {
  border-color: transparent;
  transition: border-color 0.7s ease, transform 1s ease;

}

.border-active {
  border-color: #01FDC6;
  transform: scale(1.1);
  transition: border-color 0.7s ease, transform 1s ease;
}
</style>