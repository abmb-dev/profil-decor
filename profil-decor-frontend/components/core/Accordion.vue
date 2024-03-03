<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue';
import { Icon } from '@iconify/vue'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
]
</script>

<template>
  <AccordionRoot
    class="w-full bg-section border border-primary relative z-20"
    default-value="item-1"
    type="single"
    :collapsible="true"
  >
    <template v-for="item in accordionItems" :key="item.value">
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
          <div class="px-5 py-4">
            {{ item.content }}
          </div>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>