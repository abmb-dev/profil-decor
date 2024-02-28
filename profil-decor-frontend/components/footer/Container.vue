<script setup lang="ts">

const appConfig = useAppConfig();
const navigationMenu = useNavigation().buildNavigationMenu();
const { scrollToSection } = useLenisScroll();

</script>

<template>
  <footer class="fixed -z-[1] bottom-0 bg-gray-200 flex flex-col items-center w-full padding-x-dynamic padding-y-dynamic gap-y-[2vw]">

    <!-- Back to top row -->
    <div class="flex flex-col items-center lg:grid lg:grid-cols-12 w-full lg:flex-row lg:items-baseline">
      <div class="flex items-baseline col-span-3">
        <span class="text-2xl font-semibold mr-1">{{ appConfig.meta.businessInfo.name }}</span>
        <span class="font-normal">{{ appConfig.meta.businessInfo.location }}</span>
      </div>
      <div class="col-start-10 col-end-13 font-normal order-first py-[2vw] lg:py-0 lg:ml-auto lg:order-last">
        <button @click="scrollToSection('top')">
          ↑ Inapoi la start
        </button>
      </div>
    </div>

    <!-- Business info row -->
    <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-[1vw] w-full font-normal">
      
      <div class="text-center sm:block mx:auto lg:text-left lg:col-span-3 margin-bottom-double-dynamic">
        <div class="uppercase margin-bottom-dynamic ">profil decor pe harta</div>
        <p class="font-light leading-dynamic text-sm margin-bottom-dynamic ">
          {{ appConfig.meta.businessInfo.addressLine1 }} <br />
          {{ appConfig.meta.businessInfo.addressLine2 }} <br />
          {{ appConfig.meta.businessInfo.postalCode }}
        </p>
        <a class="uppercase underline lg:no-underline hover:underline hover:cursor-pointer underline-offset-8 text-sm">vezi pe harta</a>
      </div>

      <div class="text-center sm:block mx:auto lg:text-left lg:col-span-3 margin-bottom-double-dynamic">
        <div class="uppercase margin-bottom-dynamic ">ore lucratoare</div>
        <div class="font-light leading-dynamic text-sm margin-bottom-dynamic ">
          {{ appConfig.meta.businessInfo.openingHours }}
        </div>
        <div class="font-light leading-dynamic text-sm">
          <div>
            <span>Telefon:</span>
            <span>{{ appConfig.meta.businessInfo.phoneNumber1 }}</span>
          </div>
          <div>
            <span>Telefon:</span>
            <span>{{ appConfig.meta.businessInfo.phoneNumber2 }}</span>
          </div>
          <div>
            <span>Email:</span>
            <span>{{ appConfig.meta.businessInfo.email }}</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center sm:block mx:auto lg:text-left lg:col-span-3 margin-bottom-dynamic">
        <div class="uppercase margin-bottom-dynamic">social media</div>
        <div class="flex gap-x-4 [&_svg]:hover:cursor-pointer">
          <Icon name="cib:facebook" />
          <Icon name="cib:whatsapp" />
          <Icon name="cib:instagram" />
          <Icon name="cib:tiktok" />
        </div>
      </div>
      <div class="flex flex-col items-center lg:items-start lg:col-span-3 margin-bottom-dynamic">
        <NuxtLink class="uppercase leading-dynamic hover:underline hover:underline-offset-8 hover:cursor-pointer" :to="navigationMenu.home.to">{{ navigationMenu.home.alias }}</NuxtLink>
        <NuxtLink class="uppercase leading-dynamic hover:underline hover:underline-offset-8 hover:cursor-pointer" v-for="link in navigationMenu.links" :key="link.to">{{ link.label }}</NuxtLink>
      </div>
    </div>
  </footer>
</template>