<script setup lang="ts">
const navigationMenu = useNavigation().buildNavigationMenu();

// TODO: Replace with data from server
const addressData = {
  street: 'example of a street, nr 1',
  location: 'Botosani, Romania',
  email: 'email@example.com'
};

</script>

<template>
  <aside class="h-screen flex flex-col bg-gray w-full fixed z-20 py-16">
    <div class="flex flex-col justify-between custom-height">
      <nav class="mt-6">
        <ul>
          <li
            v-for="link in navigationMenu.links"
            :key="link.key"
            class="flex justify-center text-[12.5vw] border-primary border-t last:border-b"
          >
            <NuxtLink 
              :to="link.to"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <address class="flex flex-col items-center justify-center font-medium not-italic"> 
        <p>{{ addressData.street }}</p>
        <p>{{ addressData.location }}</p>
        <p>{{ addressData.email }}</p>
      </address>
    </div>
  </aside>
</template>