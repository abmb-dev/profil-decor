import Vue3Marquee from 'vue3-marquee';
import { AdvancedImage } from "@cloudinary/vue"
import { Icon } from '@iconify/vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Marquee, { name: 'ODynamicMarquee' });
  nuxtApp.vueApp.component('AdvancedImage', AdvancedImage);
  nuxtApp.vueApp.component('Icon', Icon)
});