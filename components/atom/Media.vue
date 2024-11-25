<template>
  <div class="relative overflow-hidden">
    <div
      v-if="!imageLoaded"
      class="-z-10 placeholder bg-gray-300 overflow-hidden"
    ></div>
    <template v-if="isImage">
      <img
        :src="src"
        :alt="alt"
        :style="imageStyle"
        class="media-image"
        :class="{ 'object-cover': isCover, 'object-contain': !isCover }"
        :height="height"
        :width="width"
        @load="handleImageLoad"
      />
    </template>
    <template v-else-if="isVideo">
      <video
        @load="handleImageLoad"
        :src="src"
        controls
        class="media-video"
      ></video>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  focalX: {
    type: Number,
    default: 50,
  },
  focalY: {
    type: Number,
    default: 50,
  },
  height: Number, // pixel values
  width: Number, // use NuxtImg breakpoints --> see nuxt.config
  isCover: {
    type: Boolean,
    default: true,
  },
});

const imageLoaded = ref(false);

function handleImageLoad() {
  imageLoaded.value = true;
}

const src = computed(() => {
  return props.url;
});

const isImage = computed(() => {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(props.url);
});

const isVideo = computed(() => {
  return /\.(mp4|webm|ogg)$/i.test(props.url);
});

const imageStyle = computed(() => {
  if (!isImage.value) return {};
  return {
    objectPosition: `${props.focalX}% ${props.focalY}%`,
  };
});
</script>

<style scoped>
.media-image {
  width: 100%;
  height: 100%;
}

.media-video {
  width: 100%;
  height: 100%;
}

.placeholder {
  background: #eee;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.placeholder:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(90deg, #eee, #f4f4f4, #eee);
  animation: gradient 1s infinite ease-in-out;
}

@keyframes gradient {
  from {
    left: -50%;
  }
  to {
    left: 100%;
  }
}
</style>
