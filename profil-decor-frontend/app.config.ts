export default defineAppConfig({
  ui: {
    primary: 'shark',
    gray: 'bud',
  },
  navigationMenu: [
    [ 
      { 
        label: 'PROFIL DECOR', 
        to: '/' 
      }
    ],
    [ 
      { 
        label: 'DESPRE NOI' 
      }, 
      { 
        label: 'CONTACT'
      }
    ]
  ]
});