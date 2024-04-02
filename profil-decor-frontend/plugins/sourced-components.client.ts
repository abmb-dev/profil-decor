import Vue3Marquee from 'vue3-marquee';
import { AdvancedImage } from "@cloudinary/vue"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Marquee, { name: 'ODynamicMarquee' });
  nuxtApp.vueApp.component('AdvancedImage', AdvancedImage);
});