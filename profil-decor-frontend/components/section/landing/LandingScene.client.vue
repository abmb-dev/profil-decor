<script setup>
import { ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = ref(null);
const navigationStore = useNavigationStore();
const { windowY, offsetY } = useWindowScroll();

const cameraOptions = {
  fov: 65,
  apsect: 1,
  near: 0.1,
  far: 10000,
};

const rendererOptions = {
  alpha: true,
};

const threeEnvironment = () => {
  return {
    config: {
      container: null,
      renderer: null,
      clock: null,
      camera: null,
      controls: null,
      scene: null,
      sizes: null,
      loader: null,
      model: null
    },
    createRenderer: function (opts) {
      this.config.renderer = new THREE.WebGLRenderer({ ...opts });

      this.config.renderer.setSize(this.config.sizes.width, this.config.sizes.height);
      this.config.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.config.container.append(this.config.renderer.domElement);

      this.config.clock = new THREE.Clock();
      return this;
    },
    createCamera: function (opts) {
      this.config.camera = new THREE.PerspectiveCamera(opts.fov, this.config.sizes.width / this.config.sizes.height, opts.near, opts.far);
      this.config.camera.position.set(0, 400, 0);
      this.config.camera.lookAt(this.config.scene.position);
      this.config.controls = new OrbitControls(this.config.camera, this.config.renderer.domElement);
      this.config.controls.enabled = false;
      this.config.scene.add(this.config.camera);
      return this;
    },
    createScene: function (isHelperVisible = false) {
      this.config.scene = new THREE.Scene();

      if (isHelperVisible) {
        const axesHelper = new THREE.AxesHelper(1000);
        this.config.scene.add(axesHelper);
      }

      return this;
    },
    createLights: function () {
      const ambientLight = new THREE.AmbientLight();
      const directionlLight = new THREE.DirectionalLight(0xffffff, 1);
      this.config.scene.add(ambientLight);
      this.config.scene.add(directionlLight);
      return this;
    },
    setContainer: function (container) {
      this.config.container = container;
      return this;
    },
    setContainerSizes: function () {
      this.config.sizes = {
        width: this.config.container.clientWidth,
        height: this.config.container.clientHeight
      };

      window.addEventListener('resize', () => {
        this.config.sizes.width = this.config.container.clientWidth;
        this.config.sizes.height = this.config.container.clientHeight;

        this.config.camera.aspect = this.config.sizes.width / this.config.sizes.height;
        this.config.camera.updateProjectionMatrix();

        this.config.renderer.setSize(this.config.sizes.width, this.config.sizes.height);
        this.config.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      return this;
    },
    startRendering: function () {
      this.config.renderer.render(this.config.scene, this.config.camera);
      return this;
    },
    addColumnHeadModel: function () {
      this.config.model = toRaw(navigationStore.columnHeaderModel.scene);
      this.config.scene.add(this.config.model);
      return this;
    },
    tick: function () {
      const deltaTime = this.config.clock.getDelta();

      this.config.controls.update();
      this.config.renderer.render(this.config.scene, this.config.camera);
      this.config.model.rotation.y += deltaTime * 0.25;

      if (windowY.value < offsetY) {
        this.config.model.rotation.z = 0;
      } else if (windowY.value > offsetY && windowY.value < offsetY + 2500000) {
        this.config.model.rotation.z = windowY.value * 0.00025;
      }

      window.requestAnimationFrame(() => this.tick());
    }
  }
};

onMounted(async () => {
  await nextTick();
  threeEnvironment()
    .setContainer(canvas.value)
    .setContainerSizes()
    .createRenderer(rendererOptions)
    .createScene()
    .createCamera(cameraOptions)
    .addColumnHeadModel()
    .createLights()
    .startRendering()
    .tick();
});

</script>

<template>
  <div ref="canvas" class="w-[25vw] h-[25vw]"></div>
</template>