<script setup lang="ts">

const appConfig = useAppConfig();

</script>

<template>
  <footer class="flex items-baseline p-10 bg-transparent w-full">
    <div class="flex items-baseline">
      <span class="text-2xl font-semibold mr-1">{{ appConfig.meta.name }}</span>
      <span class="font-normal">{{ appConfig.meta.location }}</span>
    </div>
    <div class="ml-auto font-normal">
      <button>
        ↑ Back to top
      </button>
    </div>
  </footer>
</template>