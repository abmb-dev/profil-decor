<template>
  <div>
    <header class="flex justify-center p-4">
      <NavigationBar />
      <NavigationBar :is-navigation-mask="true" />
      <NavigationMenu v-if="isNavigationMenuOpen" />
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">

const navigationStore = useNavigationStore();
const { isNavigationMenuOpen } = storeToRefs(navigationStore);

</script>