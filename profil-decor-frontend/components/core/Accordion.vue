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
    class="w-full bg-secondary flex flex-col gap-y-4"
    v-bind="props"
  >
    <template v-for="item in items" :key="item.value">
      <AccordionItem 
        :value="item.value" 
        class="border border-primary rounded-md hover:cursor-pointer [&>*]:hover:cursor-pointer hover:border-primary hover:drop-shadow-md"
      >
      
        <AccordionHeader class="flex">
          <AccordionTrigger class="flex flex-1 items-center p-4 justify-between group hover:cursor-pointer">
            <CoreTypography tag="span">{{ item.title }}</CoreTypography>
            <Icon
              icon="radix-icons:chevron-down"
              class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </AccordionTrigger>
        </AccordionHeader>

        <AccordionContent class="rounded-b-md flex flex-1 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <CoreTypography tag="span" italic bold class="px-5 py-4 font-medium">{{ item.content }}</CoreTypography>
        </AccordionContent>

      </AccordionItem>
    </template>
  </AccordionRoot>
</template>