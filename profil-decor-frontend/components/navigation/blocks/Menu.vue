<script setup lang="ts">

// Component configuration
const appConfig = useAppConfig();
const navigationMenu = useNavigation().buildNavigationMenu();

// TODO [Integration] : Replace this with data from server
const addressData = {
  street: 'example of a street, nr 1',
  location: 'Botosani, Romania',
  email: 'email@example.com'
};

</script>

<template>
  <aside class="h-screen flex flex-col bg-gray-100 w-full fixed z-20 py-16 overflow-hidden">
    <div class="flex flex-col justify-between w-full custom-menu-height">
      <nav class="mt-6 font-thin">
        <ul>
          <li
            v-for="link in navigationMenu.links"
            :key="link.key"
            class="flex justify-center text-[12.5vw] border-gray-200 border-t last:border-b"
          >
            <NuxtLink class="uppercase"
              :to="link.to"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <address class="flex flex-col items-center justify-center leading-dynamic font-normal font-dynamic not-italic"> 
        <p>{{ appConfig.meta.businessInfo.placementInformation.addressLine1 }}</p>
        <p class="margin-bottom-dynamic">{{ appConfig.meta.businessInfo.placementInformation.addressLine2 }}</p>
        <p>{{ appConfig.meta.businessInfo.contactInformation.email }}</p>
      </address>
    </div>
  </aside>
</template>