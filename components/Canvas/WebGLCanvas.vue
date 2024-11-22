<template>
  <canvas class="fixed inset-0 -z-10" ref="canvas"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { useNuxtApp } from '#app';

const canvas = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    0.1,
    1000
  );
  camera.position.set(0, 0, 10); // Position the camera so it looks at the plane
  camera.lookAt(0, 0, 0); // Ensure the camera is looking at the origin

  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.outputColorSpace = THREE.SRGBColorSpace;
  // renderer.toneMapping = THREE.ACESFilmicToneMapping;
  // renderer.toneMappingExposure = 3;

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', onWindowResize);

  let cameraPhase = 0;
  let smoothedDeltaY = 0;
  let deltaY = 0;
  const deltaYSpeed = -0.0007;
  const scrollEffectSpeed = -0.0003;
  let rotationSpeed = 0.0;
  let time = performance.now() * 0.01;
  const lookAtPoint = new THREE.Vector3(0, 0, 0);
  const seed = 7535649 / 2 + Math.random() * new Date().getTime() * 0.00002;
  console.log(seed);

  let scrollSpeed = 0;

  const handleScroll = (event) => {
    smoothedDeltaY = window.scrollY;
  };

  window.addEventListener('scroll', handleScroll);

  const updateCameraPosition = () => {
    cameraPhase += scrollSpeed + rotationSpeed;
    scrollSpeed *= 0.96; // Smoothly decelerate the scroll speed
    camera.position.x = 6 * Math.sin(cameraPhase);
    camera.position.z = 6 * Math.cos(cameraPhase);
    camera.lookAt(lookAtPoint);
  };

  const map = (value, inMin, inMax, outMin, outMax) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };
  const smoothedMousePos = new THREE.Vector2(0, 0);

  const updateSmoothedMousePos = () => {
    smoothedMousePos.x = lerp(smoothedMousePos.x, mousePos.x, 0.1);
    smoothedMousePos.y = lerp(smoothedMousePos.y, mousePos.y, 0.1);
  };

  const updateUniforms = () => {
    deltaY += deltaYSpeed;
    updateSmoothedMousePos();
    uniforms.uDeltaY.value = lerp(
      uniforms.uDeltaY.value,
      smoothedDeltaY * scrollEffectSpeed + deltaY,
      0.2
    );
    // console.log(uniforms.uDeltaY.value);
    // if (smoothedMousePos.x > 0.25) {
    //   uniforms.uAmplitude.value = map(
    //     smoothedMousePos.x,
    //     0.25,
    //     0.5,
    //     defuAmplitude,
    //     1.1
    //   );
    // } else if (smoothedMousePos.x < -0.25) {
    //   uniforms.uAmplitude.value = map(
    //     smoothedMousePos.x,
    //     -0.25,
    //     -0.5,
    //     defuAmplitude,
    //     1.1
    //   );
    // } else {
    //   uniforms.uAmplitude.value = defuAmplitude;
    // }
  };

  document.body.appendChild(renderer.domElement);

  const mousePos = new THREE.Vector2(0, 0);

  const palette = [
    new THREE.Color('#5F7DBF'),
    new THREE.Color('#231123'),
    new THREE.Color('#224244'),
    new THREE.Color('#3F548D'),
  ];

  let speed = 0.18;
  const defuAmplitude = 0.0;
  const uniforms = {
    u_mouse: { value: { x: 0.0, y: 0.0 } },
    u_resolution: { value: { x: window.innerWidth, y: window.innerHeight } },
    resolution: { value: new THREE.Vector2(1, 1) },
    uTime: { value: 0 },
    uDeltaY: { value: 0 },
    uAmplitude: { value: defuAmplitude },
    uFrequency: { value: new THREE.Vector2(3.0, 2.4) },
    uColorFrequency: { value: new THREE.Vector2(0.4, 0.3) },
    uColorSpeed: { value: 0.02 },
    uColorSpeed2: { value: 0.7 },
    uColor: { value: palette },
    uSeed: { value: seed },
  };

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: `
        uniform float uTime;
        uniform float uAmplitude;
        uniform float uColorSpeed;
        uniform float uColorSpeed2;
        uniform float uDeltaY;
        uniform float uSeed;
        uniform vec2 uFrequency;
        uniform vec2 uColorFrequency;
        uniform vec3 uColor[4];

        varying vec2 vUV;
        varying vec3 vPosition;
        varying vec3 vColor;


        //	Simplex 3D Noise
        //	by Ian McEwan, Ashima Arts
        //
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

        float snoise(vec3 v){
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;

        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        //  x0 = x0 - 0. + 0.0 * C
        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1. + 3.0 * C.xxx;

        // Permutations
        i = mod(i, 289.0 );
        vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        // Gradients
        // ( N*N points uniformly over a square, mapped onto an octahedron.)
        float n_ = 1.0/7.0; // N=7
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                        dot(p2,x2), dot(p3,x3) ) );
        }


        void main() {
            vec2 noiseCoord = uv*uFrequency;

            // mesh
            //float noise = snoise(vec3(noiseCoord.x, noiseCoord.y+uDeltaY, uTime));
            //noise = max(0.0, noise);

            //vec3 pos = vec3(position.x, position.y, position.z +noise*uAmplitude);
            vec3 pos = vec3(position.x, position.y, position.z);


            // colors
            vColor = uColor[0];
            for (int i = 0; i<4; i++) {
                float noiseFlow = uColorSpeed*5.0+ float(i)*uColorSpeed;
                float noiseSpeed = uColorSpeed*10.0 + float(i)*uColorSpeed;

                float noiseSeed = 1.0 + float(i)*10.0;

                float noise = snoise(
                    vec3(
                        noiseCoord.x*uColorFrequency.x+ uTime*noiseFlow,
                        noiseCoord.y*uColorFrequency.y+uDeltaY,
                        (uTime*noiseSpeed + noiseSeed + uSeed) * uColorSpeed2
                    )
                );
                vColor = mix(vColor, uColor[i], noise);
            }

            vUV = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
    fragmentShader: `
        precision mediump float;

        uniform float uTime;
        uniform vec2 resolution;
        uniform vec3 uColor[4];

        varying vec2 vUV;
        varying vec3 vPosition;
        varying vec3 vColor;

        void main() {

            // gl_FragColor = vec4(vUV, 0.0, 1.0);
            gl_FragColor = vec4(vColor, 1.0);
        }
    `,
  });

  const geometry = new THREE.PlaneGeometry(
    window.innerWidth,
    window.innerHeight,
    128,
    128
  );
  const parentGroup = new THREE.Group();
  parentGroup.position.set(0, 0, 0); // Position the plane at the origin
  const plane = new THREE.Mesh(geometry, material);
  parentGroup.add(plane);
  scene.add(parentGroup);

  const animate = function () {
    time = performance.now() * 0.001;
    animationFrameId = requestAnimationFrame(animate);
    uniforms.uTime.value = time * speed;

    // updateCameraPosition();
    updateUniforms();

    renderer.render(scene, camera);
  };

  let animationFrameId = requestAnimationFrame(animate);

  const setMouseCoords = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    // Calculate normalized mouse coordinates
    const mouseX = (clientX - innerWidth / 2) / innerWidth;
    const mouseY = clientY / innerHeight;

    mousePos.set(mouseX, mouseY);
  };

  // Add event listener for mousemove
  // window.addEventListener('mousemove', setMouseCoords);

  const nuxtApp = useNuxtApp();
  nuxtApp.hook('app:unmounted', () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', onWindowResize);
    window.removeEventListener('scroll', handleScroll);
    // window.removeEventListener('mousemove', onMouseMove);

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
