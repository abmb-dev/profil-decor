<script setup lang="ts">
const appConfig = useAppConfig();
const navigationMenu = useNavigation().buildNavigationMenu();
</script>

<template>
  <aside class="h-screen flex flex-col bg-tertiary w-full fixed z-20 py-16 overflow-hidden">
    <div class="flex flex-col justify-between w-full custom-menu-height">
      <nav class="mt-6">
        <ul>
          <CoreLink
            v-for="link in navigationMenu.links"
            :key="link.key"  
            :to="link.to"
            class="flex justify-center border-primary border-t last:border-b py-4"
          >
            <CoreTypography tag="h1" class="font-thin">{{ link.label }}</CoreTypography>
          </CoreLink>
        </ul>
      </nav>
      <MoleculesBusinessLogo class="mx-auto" />
      <address class="flex flex-col items-center justify-center leading-dynamic font-normal font-dynamic not-italic"> 
        <CoreTypography>{{ appConfig.meta.business.placement.addressLine1 }}</CoreTypography>
        <CoreTypography>{{ appConfig.meta.business.placement.addressLine2 }}</CoreTypography>
        <CoreLink :to="`mailto:${appConfig.meta.business.contact.email}`" class="lowercase mt-4">
          <CoreTypography>{{ appConfig.meta.business.contact.email }}</CoreTypography>
        </CoreLink>
      </address>
    </div>
  </aside>
</template>