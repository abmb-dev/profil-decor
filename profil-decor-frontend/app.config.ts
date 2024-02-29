export default defineAppConfig({
  ui: {
    primary: 'shark',
    gray: 'bud',
  },
  meta: {
    businessInfo: {
      name: 'profil decor',
      motto: 'designul unic al casei tale',
      agency: 'abmb',
      googleMapsLink: 'https://maps.app.goo.gl/M9eUabNXD4DwetG76',
      placementInformation: {
        shortLocation: 'suceava',
        addressLine1: 'Strada Prefect Dimitrie Cojocaru, Nr. 50',
        addressLine2: 'Sfantu Ilie, Suceava, Romania',
        postalCode: '12345'
      },
      openingHoursInformation: {
        longInterval: 'Luni - Vineri: 08:00 - 17:00',
      },
      contactInformation: {
        telephone1: '(+40) 700 000 001',
        telephone2: '(+40) 700 000 002',
        email: 'profildecor.business@gmail.com',
      },
      socialMediaLinks: {
        facebook: 'https://www.facebook.com/ProfilDecor',
        whatsapp: '',
        instagram: '',
        tiktok: '' 
      }
    }
  },
  navigationMenu: {
    home: {
      label: 'profil decor',
      alias: 'home',
      key: 'home',
      to: '/'
    },
    links: [
      {
        label: 'despre noi',
        key: 'about us',
      },
      {
        label: 'portofoliu',
        key: 'showcase'
      },
      {
        label: 'contact',
        key: 'contact'
      },
    ]
  }
});