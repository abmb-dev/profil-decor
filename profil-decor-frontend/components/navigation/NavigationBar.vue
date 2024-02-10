<script setup lang="ts">

const props = defineProps<{
  isNavigationMask?: boolean
}>();

const { windowY, offsetY } = useWindowScroll();
const navigationMenu = useNavigation().buildNavigationMenu();

const navigationStore = useNavigationStore();
const { isNavigationMenuOpen } = storeToRefs(navigationStore);

const navigationBgClass = computed(() => {
  return props.isNavigationMask ? 'bg-primary': 'bg-transparent';
});

const navigationLinkClass = computed(() => {
  return props.isNavigationMask ? 'text-gray-100': 'text-primary';
});

const navigationBtnClass = computed(() => {
  return props.isNavigationMask ? 'bg-gray-100' : 'bg-primary';
});

const openNavigationMenu = (isMenuOpen: boolean) => {
  isNavigationMenuOpen.value = isMenuOpen;
}

</script>

<template>
  <nav
    :class="['fixed flex w-full lg:w-[99%] items-center justify-between z-50 mx-auto rounded-xl', { 'bg-primary custom-navigation-clip': isNavigationMask }, navigationBgClass]"
    :style="{ clipPath: (isNavigationMask && windowY < offsetY) ? 'polygon(0 0,100% 0,100% 0,0 0)' : 'polygon(0 0,100% 0,100% 100%,0 100%)' }"
  >
    <ul class="flex items-center min-w-0 px-5 py-6">
      <li class=" mr-4 last:mr-0">
        <NuxtLink 
          :to="navigationMenu.home.to" 
          :class="['group relative w-full flex items-center gap-1.5 px-2.5 rounded-md font-light focus:outline-none \
                  focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 \
                  focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed \
                  disabled:opacity-75 py-0 after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2', 
                  navigationLinkClass]"
          >
            {{ navigationMenu.home.label }}
          </NuxtLink>
      </li>
    </ul>
    <ul class="min-w-0 px-5 py-6 lg:flex lg:items-center">
      <NavigationButton :variant="navigationBtnClass" @menu-click="openNavigationMenu" />
      <div class="hidden lg:flex">
        <li 
          v-for="link in navigationMenu.links"
          :key="link.key"
          class="mr-4 last:mr-0"
        >
          <NuxtLink
            :to="link.to"
            :class="['group relative w-full flex items-center gap-1.5 px-2.5 rounded-md font-light focus:outline-none \
                  focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 \
                  focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed \
                  disabled:opacity-75 py-0 after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2',
                  navigationLinkClass]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </div>
    </ul>
  </nav>
</template>


<style scoped>
.custom-navigation-clip {
  transition: clip-path .3s cubic-bezier(.83,0,.17,1);
}
</style>