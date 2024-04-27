<script lang="ts" setup>
const navigationStore = useNavigationStore();
const { isNavigationMenuOpen } = storeToRefs(navigationStore);
const { initOpacityAnimation } = useGsapAnimation();

watch(() => isNavigationMenuOpen.value, () => {
  initOpacityAnimation('#wrong-page', isNavigationMenuOpen.value).play();
});
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center px-4" id="wrong-page">
    <div class="flex flex-col items-center justify-center border rounded-xl p-8 gap-y-8">
      <MoleculesBusinessLogo />
      <p class="text-primary font-normal">Ne pare rau, pagina accesata este inexistenta sau indisponibila momentan.</p>
      <CoreButton @click="navigateTo('/')">
          inapoi acasa
      </CoreButton>
    </div>
  </div>
</template>