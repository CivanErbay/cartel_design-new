<template>
  <canvas class="fixed inset-0 -z-10" ref="canvas"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { useNuxtApp } from '#app';

const canvas = ref(null);
const texts = ['Hello', 'World', 'Three.js', 'Vue', 'Nuxt'];

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', onWindowResize);

  const mouse = new THREE.Vector2();
  const textMeshes = [];

  const fontLoader = new THREE.FontLoader();
  fontLoader.load(
    'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
    (font) => {
      texts.forEach((text) => {
        const textGeometry = new THREE.TextGeometry(text, {
          font: font,
          size: 0.5,
          height: 0.1,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        );
        scene.add(textMesh);
        textMeshes.push(textMesh);
      });
    }
  );

  const animate = () => {
    requestAnimationFrame(animate);

    textMeshes.forEach((textMesh) => {
      const dx = mouse.x * 10 - textMesh.position.x;
      const dy = mouse.y * 10 - textMesh.position.y;
      textMesh.position.x += dx * 0.01;
      textMesh.position.y += dy * 0.01;
    });

    renderer.render(scene, camera);
  };

  animate();

  const onMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener('mousemove', onMouseMove);

  const nuxtApp = useNuxtApp();
  nuxtApp.hook('app:unmounted', () => {
    window.removeEventListener('resize', onWindowResize);
    window.removeEventListener('mousemove', onMouseMove);
    renderer.dispose();
    scene.dispose();
  });
});
</script>

<style scoped>
canvas {
  display: block;
}
</style>
