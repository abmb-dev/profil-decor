<script setup>
import { ref } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';

const canvas = ref(null);
const navigationStore = useNavigationStore();

const cameraOptions = {
  fov: 65,
  apsect: 1,
  near: 0.1,
  far: 10000,
};

const rendererOptions = {
  alpha: true,
};

const threeEnvironment = {
  container: null,
  sizes: null,
  renderer: null,
  clock: null,
  camera: null,
  controls: null,
  scene: null,
  loader: null,
  model: null
};

const createRenderer = () => {
  threeEnvironment.renderer = new THREE.WebGLRenderer({ ...rendererOptions });
  threeEnvironment.renderer.setSize(threeEnvironment.sizes.width, threeEnvironment.sizes.height);
  threeEnvironment.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  threeEnvironment.container.append(threeEnvironment.renderer.domElement);
  threeEnvironment.clock = new THREE.Clock();
};

const createCamera = () => {
  threeEnvironment.camera = new THREE.PerspectiveCamera(
    cameraOptions.fov, 
    threeEnvironment.sizes.width / threeEnvironment.sizes.height, 
    cameraOptions.near,
    cameraOptions.far
  );
  threeEnvironment.camera.position.set(0, 400, 0);
  threeEnvironment.camera.lookAt(threeEnvironment.scene.position);
  threeEnvironment.controls = new OrbitControls(threeEnvironment.camera, threeEnvironment.renderer.domElement);
  threeEnvironment.controls.enabled = false;
  threeEnvironment.scene.add(threeEnvironment.camera);
};

const createScene = (isHelperVisible) => {
  threeEnvironment.scene = new THREE.Scene();
  if (isHelperVisible) {
    const axesHelper = new THREE.AxesHelper(1000);
    threeEnvironment.scene.add(axesHelper);
  }
};

const createLights = () => {
  const ambientLight = new THREE.AmbientLight();
  const directionlLight = new THREE.DirectionalLight(0xffffff, 1);
  threeEnvironment.scene.add(ambientLight);
  threeEnvironment.scene.add(directionlLight);
};

const startRendering = () => {
  threeEnvironment.renderer.render(threeEnvironment.scene, threeEnvironment.camera);
};

const setSizes = () => {
  if (canvas.value) {
    threeEnvironment.container = canvas.value;
    threeEnvironment.sizes = {
      width: canvas.value.clientWidth,
      height: canvas.value.clientHeight
    }
  }
};

const addCustomModel = () => {
  threeEnvironment.model = toRaw(navigationStore.columnHeaderModel.scene);
  threeEnvironment.scene.add(threeEnvironment.model); 
};

const tick = () => {
  const deltaTime = threeEnvironment.clock.getDelta();
  threeEnvironment.controls.update();
  threeEnvironment.renderer.render(threeEnvironment.scene, threeEnvironment.camera);
  threeEnvironment.model.rotation.y += deltaTime * 0.25;
  window.requestAnimationFrame(() => tick());
};

onMounted(async () => {
  await nextTick();
  setSizes();
  createRenderer();
  createScene();
  createCamera();
  createLights();
  addCustomModel();
  startRendering();
  tick();

  window.addEventListener('resize', () => {
    threeEnvironment.sizes.width = threeEnvironment.container.clientWidth;
    threeEnvironment.sizes.height = threeEnvironment.container.clientHeight;
    threeEnvironment.camera.aspect = threeEnvironment.sizes.width / threeEnvironment.sizes.height;
    threeEnvironment.camera.updateProjectionMatrix();
    threeEnvironment.renderer.setSize(threeEnvironment.sizes.width, threeEnvironment.sizes.height);
    threeEnvironment.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
});


</script>

<template>
  <div ref="canvas" class="w-[75vw] h-[75vw] lg:w-[25vw] lg:h-[25vw]"></div>
</template>