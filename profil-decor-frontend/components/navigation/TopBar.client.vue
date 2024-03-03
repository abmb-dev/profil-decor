<script setup lang="ts">
import { cva } from 'class-variance-authority';

defineProps<{
  isNavigationMask?: boolean
}>();

// Component configuration
const navigationStore = useNavigationStore();
const navigationMenu = useNavigation().buildNavigationMenu();
const { windowY, offsetY } = useWindowScroll();
const { isNavigationMenuOpen } = storeToRefs(navigationStore);

// Component business
const openNavigationMenu = () => {
  navigationStore.toggleNavigationMenu();
}

onUnmounted(() => {
  navigationStore.$reset();
});

// Component style
const navigationVariants = cva(
  'fixed flex items-center justify-between z-50 mx-auto rounded-xl w-[95vw] lg:w-[99%] mt-2 bg-section-anti',
);
</script>

<template>
  <nav :class="[
    navigationVariants(),
    isNavigationMask && !isNavigationMenuOpen ? 'custom-navigation-clip' : 'bg-transparent',
    (isNavigationMask && windowY < offsetY) ? 'clip-path--default' : 'clip-path--active'
  ]">
    <ul class="flex items-center min-w-0 px-5 py-6">
      <li class="mr-4 last:mr-0">
        <CoreLink :to="navigationMenu.home.to" :variant="isNavigationMask ? 'secondary' : 'default'">
          {{ navigationMenu.home.label }}
        </CoreLink>
      </li>
    </ul>
    <ul class="min-w-0 px-5 py-6 lg:flex lg:items-center">
      <NavigationBlocksToggleButton :is-default-variant="!isNavigationMask" @menu-click="openNavigationMenu" />
      <div class="hidden lg:flex">
        <li v-for="link in navigationMenu.links" :key="link.key" class="mr-4 last:mr-0">
          <CoreLink :to="link.to" :variant="isNavigationMask ? 'secondary' : 'default'">{{ link.label }}</CoreLink>
        </li>
      </div>
    </ul>
  </nav>
</template>


<style scoped>
.custom-navigation-clip {
  transition: clip-path .3s cubic-bezier(.83, 0, .17, 1);
}

.clip-path--default {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

.clip-path--active {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
</style>