<script setup lang="ts">
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const emit = defineEmits(['loaded']);

const appConfig = useAppConfig();
const loadPercent = ref(0);

function load3DModel() {

  const onLoaded = (model: any) => {
    model.scene.children.forEach((mesh: any) => {
      mesh.material.metalness = 0;
      mesh.geometry.center();
    });

    setTimeout(() => {
      emit('loaded', model);
    }, 1500);
  };

  const onProgress = (progress: any) => {
    loadPercent.value = Math.floor(progress.loaded / progress.total * 100);
  };

  const onError = () => {
    // Handle error
  };

  const loader = new GLTFLoader(); 

  loader.load(
    '/obj/model_o.gltf', 
    onLoaded,
    onProgress,
    onError
  );
}

onMounted(() => {
  setTimeout(() => {
    load3DModel();
  }, 1500);
});

</script>

<template>
  <section class="w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
    <div class="flex flex-col items-center justify-center"> 
      <span class="text-2xl font-bold">{{ appConfig.meta.businessInfo.name  }}</span>
      <span class="text-sm font-normal">{{ appConfig.meta.businessInfo.motto }}</span>
    </div>
    <span>{{ loadPercent }} %</span>
  </section>
</template>