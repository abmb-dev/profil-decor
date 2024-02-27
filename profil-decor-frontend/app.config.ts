export default defineAppConfig({
  ui: {
    primary: 'shark',
    gray: 'bud',
  },
  meta: {
    name: 'profil decor',
    motto: "designul unic al casei tale",
    location: 'suceava'
  },
  navigationMenu: {
    home: {
      label: 'PROFIL DECOR',
      key: 'home',
      to: '/'
    },
    links: [
      {
        label: 'DESPRE NOI',
        key: 'about us',
      },
      {
        label: 'PORTOFOLIU',
        key: 'showcase'
      },
      {
        label: 'CONTACT',
        key: 'contact'
      },
    ]
  }
});