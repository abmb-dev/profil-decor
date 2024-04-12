export default defineAppConfig({
  meta: {
    business: {
      name: 'profil decor',
      motto: 'designul unic al casei tale',
      agency: 'abmb',
      googleMapsLink: 'https://maps.app.goo.gl/M9eUabNXD4DwetG76',
      placement: {
        shortLocation: 'suceava',
        addressLine1: 'Strada Prefect Dimitrie Cojocaru, Nr. 50',
        addressLine2: 'Sfantu Ilie, Suceava, Romania',
        postalCode: '12345'
      },
      openingHours: {
        longInterval: 'Luni - Vineri: 08:00 - 17:00',
      },
      contact: {
        telephone1: '(+40) 700 000 001',
        telephone2: '(+40) 700 000 002',
        email: 'profildecor.business@gmail.com',
      },
      socialMediaLinks: {
        facebook: 'https://www.facebook.com/ProfilDecor',
        whatsapp: '',
        instagram: '',
        tiktok: '' 
      },
      description: {
        description1: "Descopera eleganta si rafinamentul pentru exteriorul casei tale cu profilele decorative de la Profil Decor!",
        description2: "Bun venit la Profil Decor, sursa ta principala de profile decorative inovative, ce aduc un plus de rafinament si stil exteriorului locuintei tale.",
        description3: "Dedica-te proiectului de design al casei tale si alege dintr-o gama variata de profile decorative atent proiectate, menite sa confere cladirii tale un aer sofisticat, fie ca este vorba de o casa rustica, moderna sau clasica.",
        description4: "Cu textura sa usoara, durabilitatea si rezistenta la intemperii, polistirenul, acoperit cu stratul de 3-5mm de rasina quartoasa, devine partenerul ideal pentru a sublinia si evidentia caracteristicile arhitecturale ale oricarui imobil.",
        description5: "La Profil Decor, combinam expertiza in procesul de productie cu pasiunea pentru design si calitate, pentru a va oferi o gama diversificata de profile decorative.",
        description6: "Iar... Daca iti doresti un profil unic la care te-ai gandit deja, tot ce trebuie sa faci este sa ne trimit modelul schitat din creion pe o foaie de hartie iar noi il vom proiecta pentru tine."
      },
      reason: {
        reason1: "pentru că producem orice model de profil decorativ, personalizat după dimensiunile si cerintele tale, astfel ca tu să îi poti oferi casei tale un design unic cu care să iesi din tipare si care să te reprezinte!",
        reason2: "pentru că rezistenta profilelor noastre, prin utilizarea celor mai bune materii prime, este testată în timp, astfel că tu nu trebuie să îti mai faci griji pentru redecorarea fatadei pentru mult timp!",
        reason3_1: "pentru că dacă alegi să lucrezi cu noi îti oferim randarea ",
        reason3_2: " pentru ca tu să poti vizualiza rezultatul final, iar astfel poti evita costurile cu modificările ulterioare!",
        reason4_1: "si pentru că stim că decorarea/renovarea fatadei poate implica multe costuri am introdus pentru tine ",
        reason4_2: " pentru ca tu să te bucuri de tot ceea ce îti doresti!"
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
        to: '/about'
      },
      {
        label: 'portofoliu',
        key: 'portfolio',
        to: '/portfolio'
      },
      {
        label: 'contact',
        key: 'contact',
        to: '/contact'
      },
    ]
  }
});