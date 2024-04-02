<script setup lang="ts">
const appConfig = useAppConfig();
const navigationMenu = useNavigation().buildNavigationMenu();
</script>

<template>
  <aside class="h-screen flex flex-col bg-tertiary w-full fixed z-20 py-16 overflow-hidden">
    <div class="flex flex-col justify-between w-full custom-menu-height">
      <nav class="mt-6 font-thin">
        <ul>
          <li
            v-for="link in navigationMenu.links"
            :key="link.key"
            class="flex justify-center text-[12.5vw] border-primary border-t last:border-b"
          >
            <CoreLink class="uppercase":to="link.to">{{ link.label }}</CoreLink>
          </li>
        </ul>
      </nav>
      <MoleculesBusinessLogo class="mx-auto" />
      <address class="flex flex-col items-center justify-center leading-dynamic font-normal font-dynamic not-italic"> 
        <p>{{ appConfig.meta.business.placement.addressLine1 }}</p>
        <p class="margin-bottom-dynamic">{{ appConfig.meta.business.placement.addressLine2 }}</p>
        <CoreLink :to="`mailto:${appConfig.meta.business.contact.email}`" class="lowercase">
          {{ appConfig.meta.business.contact.email }}
        </CoreLink>
      </address>
    </div>
  </aside>
</template>