<script setup lang="ts">

const { buildNavigationMenu } = useNavigation();
const { windowY, offsetY } = useWindowScroll();

const navigationBarUi = /*ui*/ {
  wrapper: 'fixed bg-transparent z-50',
  inner: "mr-4 last:mr-0",
  container: "px-5 py-6",
  active: "",
  before: "",
  inactive: "",  
  label: "text-primary-500 text-sm font-bold",
  base: "py-0",
};

const navigationBarMaskUi = Object.assign(
  {},
  navigationBarUi,
  {
    wrapper: "fixed bg-primary w-full z-50",
    label: "text-gray-100 text-sm font-medium",
  }
);

</script>

<template>
  <UHorizontalNavigation 
    :links="buildNavigationMenu()" 
    :ui="navigationBarUi" 
  />
  <UHorizontalNavigation 
    :links="buildNavigationMenu()" 
    :ui="navigationBarMaskUi" 
    class="custom-navigation-mask" 
    :style="{ clipPath: windowY < offsetY ? 'polygon(0 0,100% 0,100% 0,0 0)' : 'polygon(0 0,100% 0,100% 100%,0 100%)'}" 
  />
</template>

<style scoped>
.custom-navigation-mask {
  transition: clip-path .3s cubic-bezier(.83,0,.17,1);
}
</style>