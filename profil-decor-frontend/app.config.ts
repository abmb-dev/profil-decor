export default defineAppConfig({
  ui: {
    primary: 'shark',
    gray: 'bud',
  },
  meta: {
    businessInfo: {
      name: 'profil decor',
      motto: 'designul unic al casei tale',
      email: 'example@mail.com',
      location: 'suceava',
      addressLine1: 'Strada Prefect Dimitrie Cojocaru, Nr. 50',
      addressLine2: 'Sfantu Ilie, Suceava, Romania',
      postalCode: '12345',
      phoneNumber1: '(+40) 700 000 001',
      phoneNumber2: '(+40) 700 000 002',
      openingHours: 'Luni - Vineri: 08:00 - 17:00',
      agency: 'abmb'
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