<script lang="ts" setup>
defineProps<{
  description: string
}>();
</script>

<template>
  <CoreCard :is-custom-card="true" class="rounded-3xl bg-tertiary-cream p-12 justify-between min-h-fit gap-y-8">
    <div class="flex">
      <div class="flex flex-col justify-center lg:justify-start gap-y-8">
        <CoreAvatarImage /> 
        <CoreTypography>{{ description }}</CoreTypography>
      </div>
    </div>
</CoreCard>
</template>