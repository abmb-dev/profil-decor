<template>
  <header>
    <NavigationBar />
    <NavigationBar :is-navigation-mask="true" />
    <NavigationMenu v-if="isNavigationMenuOpen" />
  </header>
  <slot></slot>
</template>

<script setup lang="ts">
const navigationStore = useNavigationStore();
const { isNavigationMenuOpen } = storeToRefs(navigationStore);

</script>