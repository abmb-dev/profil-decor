<script setup lang="ts">

type displayItem = { value: string, title: string };

defineProps<{
  items: displayItem[]
}>();

// Component business
const emit = defineEmits(['hoverItem']);

const onItemEnter = (item: displayItem) => {
  emit('hoverItem', item);
};

const onItemLeave = () => {
  emit('hoverItem', null);
}
</script>

<template>
  <ul class="w-full flex flex-wrap justify-around uppercase font-double-dynamic">
    <li 
      v-for="item in items" :key="item.value"
      class="font-light opacity-50 hover:cursor-pointer hover:opacity-100"
      @mouseenter="() => onItemEnter(item)"
      @mouseleave="() => onItemLeave()"
    >
      {{ item.title }}
    </li>
  </ul>  
</template>