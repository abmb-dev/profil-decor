<template>
  <div v-if="areAssetsLoaded">
    <header class="flex justify-center">
      <NavigationBar />
      <NavigationBar :is-navigation-mask="true" />
      <NavigationMenu v-if="isNavigationMenuOpen" />
    </header>
    <slot />
  </div>
  <Loading v-else @loaded="proceedToNavigation" />
</template>

<script setup lang="ts">
const navigationStore = useNavigationStore();
const { areAssetsLoaded, isNavigationMenuOpen } = storeToRefs(navigationStore);

function proceedToNavigation(model: any) {
  areAssetsLoaded.value = true;
  navigationStore.columnHeaderModel = model;
}
</script>