<script setup lang="ts">

const appConfig = useAppConfig();
const navigationMenu = useNavigation().buildNavigationMenu();
const { scrollToSection } = useLenisScroll();

</script>

<template>
  <footer class="lg:fixed -z-[1] bottom-0 bg-gray-200 flex flex-col items-center w-full padding-x-dynamic padding-y-dynamic gap-y-[2vw]">
    <FooterBlocksInformationRow>
      <template #info>
        <div class="flex items-baseline">
          <span class="text-2xl font-semibold mr-1">{{ appConfig.meta.businessInfo.name }}</span>
          <span class="font-normal">{{ appConfig.meta.businessInfo.location }}</span>
        </div>
      </template>
      <template #action>
        <div class="font-normal order-first py-[2vw] lg:py-0 lg:ml-auto lg:order-last">
          <button @click="scrollToSection('top')">
            ↑ Inapoi la start
          </button>
        </div>
      </template>
    </FooterBlocksInformationRow>    
    <FooterBlocksInformationGrid>
      <template #grid>
        <FooterBlocksInformationItem title="profil decor pe harta" :link="{ label: 'vezi pe harta', to: '/'}">
          <template #content>
              <p class="font-light leading-dynamic text-sm margin-bottom-dynamic">
                {{ appConfig.meta.businessInfo.addressLine1 }} <br />
                {{ appConfig.meta.businessInfo.addressLine2 }} <br />
                {{ appConfig.meta.businessInfo.postalCode }}
              </p>
          </template>
        </FooterBlocksInformationItem>
        <FooterBlocksInformationItem title="ore lucratoare">
          <template #content>
            <div class="font-light leading-dynamic text-sm margin-bottom-dynamic">
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
          </template>
        </FooterBlocksInformationItem>
        <FooterBlocksInformationItem title="social media">
          <template #content>
            <div class="flex justify-center gap-x-4 [&_svg]:hover:cursor-pointer lg:justify-start">
              <Icon name="cib:facebook" />
              <Icon name="cib:whatsapp" />
              <Icon name="cib:instagram" />
              <Icon name="cib:tiktok" />
            </div>
          </template>
        </FooterBlocksInformationItem>
        <FooterBlocksInformationItem>
          <template #content>
            <div class="flex flex-col items-center lg:items-start lg:col-span-3">
              <NuxtLink class="uppercase leading-dynamic hover:underline hover:underline-offset-8 hover:cursor-pointer" :to="navigationMenu.home.to">{{ navigationMenu.home.alias }}</NuxtLink>
              <NuxtLink class="uppercase leading-dynamic hover:underline hover:underline-offset-8 hover:cursor-pointer" v-for="link in navigationMenu.links" :key="link.to">{{ link.label }}</NuxtLink>
            </div>
          </template>
        </FooterBlocksInformationItem>
      </template>
    </FooterBlocksInformationGrid>
  </footer>
</template>