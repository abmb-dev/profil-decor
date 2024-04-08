<script setup lang="ts" generic="T extends { value: string, title: string, content: string }">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue';
import { Icon } from '@iconify/vue'

// Component configuration 
type accordionProps = InstanceType<typeof AccordionRoot>["$props"];

const props = withDefaults(
  defineProps<{
    type?: accordionProps["type"]
    collapsible?: accordionProps["collapsible"]
    items: T[],
  }>(),
  {
    type: "single",
    collapsible: true
  }
);
</script>

<template>
  <AccordionRoot
    class="w-full bg-secondary relative z-20"
    v-bind="props"
  >
    <template v-for="item in items" :key="item.value">
      <AccordionItem :value="item.value" class="hover:cursor-pointer [&>*]:hover:cursor-pointer">
        <AccordionHeader class="flex">
          <AccordionTrigger class="text-primary flex h-[54px] flex-1 cursor-default items-center justify-between px-5 font-dynamic leading-none shadow-[0_1px_0] outline-none group">
            <span class="font-normal hover:underline hover:cursor-pointer">{{ item.title }}</span>
            <Icon
              icon="radix-icons:chevron-down"
              class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="text-primary data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden font-dynamic data-[state=open]:border-b data-[state=open]:border-primary">
          <div class="px-5 py-4 font-normal">
            {{ item.content }}
          </div>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>