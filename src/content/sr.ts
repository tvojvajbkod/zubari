// Svi tekstovi sajta na srpskom. Engleska verzija (en.ts) ima isti oblik.
// Ordinacija je izmišljena: imena, cene i utisci služe samo kao primer.

export const sr = {
  home: {
    title: 'Stomatološka ordinacija u Beogradu',
    description:
      'Dental Studio Aurum – moderna stomatološka ordinacija u centru Beograda. Bezbolno lečenje, beljenje, fasete i implanti. Zakažite pregled telefonom.',
    hero: {
      eyebrow: 'Stomatološka ordinacija · Beograd',
      title: 'Zdrav osmeh, bez straha i žurbe',
      text: 'Pregled bez bola, jasan plan lečenja i cene koje znate unapred. Tim od tri stomatologa brine o vama od prvog pregleda do poslednje kontrole.',
      secondary: 'Pogledajte usluge',
      photoAlt: 'Nasmejana pacijentkinja u stomatološkoj stolici gleda svoj osmeh u ogledalu',
    },
    trust: [
      { value: '15+', label: 'godina iskustva' },
      { value: '8.000+', label: 'zadovoljnih pacijenata' },
      { value: 'do 10 god.', label: 'garancije na radove' },
      { value: '4,9 ★', label: 'prosečna ocena' },
    ],
    why: {
      eyebrow: 'Zašto Aurum',
      title: 'Lečenje kakvo biste i sami želeli',
      items: [
        { title: 'Bez bola', text: 'Savremena anestezija i strpljenje. Ako se plašite zubara, recite nam – tu smo da pomognemo.' },
        { title: 'Cena unapred', text: 'Pre početka lečenja dobijate pisani plan sa tačnom cenom. Bez skrivenih troškova.' },
        { title: 'Sve na jednom mestu', text: 'Od popravke zuba do implanta i faseta – ne morate da idete od ordinacije do ordinacije.' },
        { title: 'Garancija', text: 'Na fasete, krunice i implante dajemo garanciju do 10 godina, uz redovne kontrole.' },
      ],
    },
    services: {
      eyebrow: 'Usluge',
      title: 'Šta radimo',
      cta: 'Sve usluge',
    },
    about: {
      eyebrow: 'O nama',
      title: 'Prvi pregled je razgovor',
      text: 'Na prvom pregledu imamo vremena za vas. Pregledamo zube, napravimo snimak ako je potreban i objasnimo šta vidimo – običnim rečima. Zatim zajedno pravimo plan: šta je hitno, šta može da sačeka i koliko će koštati.',
      cta: 'Upoznajte tim',
      photoAlt: 'Stomatolog na modelu zuba objašnjava pacijentkinji plan lečenja',
    },
    reviews: {
      eyebrow: 'Utisci',
      title: 'Šta kažu naši pacijenti',
      cta: 'Svi utisci',
    },
    callout: {
      title: 'Zakažite pregled jednim pozivom',
      text: 'Javite se radnim danima od 9 do 20h i subotom od 9 do 14h. Dogovorićemo termin koji vam odgovara.',
    },
  },

  services: {
    title: 'Usluge',
    description: 'Popravke zuba, beljenje, fasete, implanti, proteze i dečja stomatologija u Dental Studiju Aurum u Beogradu.',
    eyebrow: 'Usluge',
    intro: 'Od redovne kontrole do potpuno novog osmeha. Svaka usluga počinje pregledom i planom sa cenom, kako biste unapred znali šta vas čeka.',
    pricesLink: 'Pogledajte cenovnik',
    items: [
      {
        id: 'preventiva',
        photo: 'usluga-preventiva',
        name: 'Pregled i preventiva',
        short: 'Kontrola, čišćenje kamenca i saveti za negu.',
        text: 'Redovan pregled na šest meseci je najjeftiniji način da sačuvate zube. Uklanjamo kamenac, poliramo zube i pokazujemo kako da ih perete da bi ostali zdravi.',
        includes: ['Pregled i savet', 'Uklanjanje kamenca', 'Poliranje zuba', 'Uputstvo za pravilno pranje'],
      },
      {
        id: 'popravke',
        photo: 'usluga-popravke',
        name: 'Popravke i lečenje zuba',
        short: 'Plombe u boji zuba i lečenje kanala.',
        text: 'Karijes popravljamo belim plombama koje se ne razlikuju od pravog zuba. Kada je zub ozbiljnije oštećen, lečimo kanal i čuvamo zub umesto da ga vadimo.',
        includes: ['Bele plombe', 'Lečenje kanala korena', 'Lečenje osetljivih zuba'],
      },
      {
        id: 'beljenje',
        photo: 'usluga-beljenje',
        name: 'Beljenje zuba',
        short: 'Svetliji osmeh za jednu posetu.',
        text: 'Bezbedno beljenje u ordinaciji traje oko sat vremena, a zubi postaju svetliji za nekoliko nijansi. Za postepeno beljenje kod kuće pravimo udlage po meri.',
        includes: ['Beljenje u ordinaciji', 'Beljenje kod kuće sa udlagama', 'Proveru boje pre i posle'],
      },
      {
        id: 'fasete',
        photo: 'usluga-fasete',
        name: 'Fasete i krunice',
        short: 'Novi osmeh – prirodan, a ne veštački.',
        text: 'Fasete su tanke keramičke ljuspice koje se lepe na prednju stranu zuba. Ispravljaju boju, oblik i male razmake. Pre izrade vidite kako će novi osmeh izgledati.',
        includes: ['Keramičke fasete', 'Bezmetalne krunice', 'Probni osmeh pre izrade', 'Garanciju do 10 godina'],
      },
      {
        id: 'implanti',
        photo: 'usluga-implanti',
        name: 'Implanti',
        short: 'Trajna zamena za izgubljen zub.',
        text: 'Implant je mali titanijumski koren na koji se postavlja nova krunica. Izgleda i služi kao pravi zub, a susedne zube ne treba brusiti.',
        includes: ['3D snimak pre ugradnje', 'Ugradnju uz lokalnu anesteziju', 'Krunicu na implantu', 'Doživotnu garanciju proizvođača implanta'],
      },
      {
        id: 'proteze',
        photo: 'usluga-proteze',
        name: 'Proteze',
        short: 'Udobne proteze koje stoje sigurno.',
        text: 'Pravimo pokretne i fiksne proteze, kao i proteze koje se pričvršćuju na implante i ne pomeraju se pri jelu i govoru.',
        includes: ['Totalne i parcijalne proteze', 'Proteze na implantima', 'Popravke i podlaganje'],
      },
      {
        id: 'deca',
        photo: 'usluga-deca',
        name: 'Dečja stomatologija',
        short: 'Prijatna prva iskustva kod zubara.',
        text: 'Deci dajemo vremena da se upoznaju sa ordinacijom. Zalivamo fisure, lečimo mlečne zube i učimo ih kako da peru zube – kroz igru.',
        includes: ['Prvi pregled kroz igru', 'Zalivanje fisura', 'Lečenje mlečnih zuba'],
      },
    ],
  },

  team: {
    title: 'Naš tim',
    description: 'Upoznajte stomatologe Dental Studija Aurum u Beogradu.',
    eyebrow: 'Naš tim',
    intro: 'Tri stomatologa, svako sa svojom oblašću. Kada vam treba više znanja, radimo zajedno – i dogovaramo se sa vama.',
    members: [
      {
        photo: 'dr-jelena',
        name: 'Dr Jelena Petrović',
        role: 'Specijalista estetske stomatologije, osnivač ordinacije',
        bio: 'Osnovala je Aurum 2010. godine sa idejom da odlazak kod zubara bude miran i predvidljiv. Bavi se fasetama i beljenjem i veruje da najlepši osmeh izgleda prirodno.',
        focus: ['Fasete i krunice', 'Beljenje zuba', 'Planiranje osmeha'],
      },
      {
        photo: 'dr-marko',
        name: 'Dr Marko Ilić',
        role: 'Specijalista oralne hirurgije',
        bio: 'Ugradio je više od 2.000 implanata. Pacijenti kažu da je najsmireniji čovek u ordinaciji – i da je vađenje umnjaka kod njega prošlo brže nego što su očekivali.',
        focus: ['Implanti', 'Vađenje umnjaka', 'Proteze na implantima'],
      },
      {
        photo: 'dr-ana',
        name: 'Dr Ana Stojanović',
        role: 'Doktor stomatologije, dečja i preventivna stomatologija',
        bio: 'Brine o najmlađim pacijentima i o tome da odrasli što ređe trebaju veće popravke. Deca je zovu „doktorka sa nalepnicama“.',
        focus: ['Dečja stomatologija', 'Popravke zuba', 'Preventiva'],
      },
    ],
    focusLabel: 'Oblasti rada',
  },

  prices: {
    title: 'Cenovnik',
    description: 'Cenovnik stomatoloških usluga Dental Studija Aurum u Beogradu: pregledi, popravke, beljenje, fasete, implanti i proteze.',
    eyebrow: 'Cenovnik',
    intro: 'Cene su okvirne. Tačnu cenu dobijate posle pregleda, u pisanom planu lečenja – i ona se ne menja tokom lečenja.',
    note: 'Cene su u dinarima i uključuju PDV. Plaćanje gotovinom ili karticom, a za veće radove moguće je plaćanje na rate.',
    from: 'od',
    groups: [
      {
        name: 'Pregledi i preventiva',
        items: [
          { name: 'Prvi pregled i plan lečenja', price: 3000 },
          { name: 'Kontrolni pregled', price: 2000 },
          { name: 'Uklanjanje kamenca i poliranje', price: 5000 },
          { name: 'Zalivanje fisura (po zubu)', price: 2500 },
        ],
      },
      {
        name: 'Popravke i lečenje',
        items: [
          { name: 'Bela plomba', price: 5500, from: true },
          { name: 'Lečenje kanala (po kanalu)', price: 7000 },
          { name: 'Vađenje zuba', price: 4000, from: true },
          { name: 'Vađenje umnjaka', price: 12000, from: true },
        ],
      },
      {
        name: 'Estetika',
        items: [
          { name: 'Beljenje u ordinaciji', price: 25000 },
          { name: 'Beljenje kod kuće (udlage i gel)', price: 18000 },
          { name: 'Keramička faseta', price: 45000 },
          { name: 'Bezmetalna krunica', price: 40000 },
        ],
      },
      {
        name: 'Implanti i proteze',
        items: [
          { name: 'Implant sa ugradnjom', price: 70000, from: true },
          { name: 'Krunica na implantu', price: 45000 },
          { name: 'Totalna proteza', price: 60000 },
          { name: 'Proteza na implantima', price: 180000, from: true },
        ],
      },
    ],
  },

  reviews: {
    title: 'Utisci pacijenata',
    description: 'Utisci pacijenata Dental Studija Aurum u Beogradu.',
    eyebrow: 'Utisci',
    intro: 'Najlepša preporuka je kada pacijent dovede porodicu. Evo šta neki od njih kažu.',
    disclaimer: 'Ovo je primer sajta – utisci su izmišljeni.',
    items: [
      { name: 'Milica R.', service: 'Fasete', text: 'Godinama sam se smejala zatvorenih usta. Dr Jelena mi je pre izrade pokazala kako će osmeh izgledati, i izgleda baš tako – prirodno, ne kao „holivudski“.' },
      { name: 'Nenad K.', service: 'Implant', text: 'Najviše sam se plašio ugradnje implanta, a ceo zahvat je trajao manje od sat vremena i ništa nije bolelo. Cena je bila tačno ona koju su mi rekli na prvom pregledu.' },
      { name: 'Jovana M.', service: 'Dečja stomatologija', text: 'Moj sin (6) sada sam pita kada idemo kod „doktorke sa nalepnicama“. To dovoljno govori.' },
      { name: 'Dragan P.', service: 'Proteza na implantima', text: 'Posle dvadeset godina sa pokretnom protezom ponovo mogu da jedem jabuku. Hvala celom timu na strpljenju.' },
      { name: 'Ivana S.', service: 'Beljenje', text: 'Brzo, bez osetljivosti posle, a zubi su svetliji nego što sam očekivala. Osoblje je izuzetno ljubazno.' },
      { name: 'Stefan L.', service: 'Lečenje kanala', text: 'Došao sam sa jakim bolom bez zakazanog termina i primili su me isti dan. Zub je spašen, a ja sam dobio novog stalnog zubara.' },
    ],
  },

  faq: {
    title: 'Česta pitanja',
    description: 'Odgovori na česta pitanja o lečenju zuba, cenama, zakazivanju i garanciji u Dental Studiju Aurum.',
    eyebrow: 'Pitanja',
    intro: 'Ovde su odgovori na ono što nas pacijenti najčešće pitaju. Ako ne nađete svoj odgovor, pozovite nas.',
    mythsTitle: 'Mitovi i činjenice',
    mythLabel: 'Mit',
    factLabel: 'Činjenica',
    myths: [
      { myth: 'Kod zubara se ide tek kada nešto boli.', fact: 'Kada zub počne da boli, problem je obično već veliki. Kontrola na šest meseci otkriva karijes dok je mali – i dok je popravka brza i jeftina.' },
      { myth: 'Beljenje uništava zube.', fact: 'Beljenje koje radi stomatolog je bezbedno i ne oštećuje gleđ. Moguća je kratka osetljivost, koja prolazi za dan-dva.' },
      { myth: 'Fasete izgledaju veštački.', fact: 'Dobro urađene fasete prate oblik i boju vaših zuba. Pre izrade pravimo probni osmeh, tako da vidite rezultat unapred.' },
      { myth: 'Mlečne zube ne treba lečiti jer će ispasti.', fact: 'Mlečni zubi čuvaju mesto za stalne. Neizlečen karijes može da boli i da ošteti stalni zub koji raste ispod.' },
    ],
    questionsTitle: 'Pitanja i odgovori',
    questions: [
      { q: 'Kako da zakažem pregled?', a: 'Pozovite nas na +381 11 123 4567 radnim danima od 9 do 20h ili subotom od 9 do 14h. Termin dogovaramo odmah, tokom razgovora.' },
      { q: 'Da li primate hitne slučajeve?', a: 'Da. Ako imate jak bol, otok ili vam je pukao zub, pozovite nas – primamo vas istog dana.' },
      { q: 'Da li će boleti?', a: 'Sve intervencije radimo uz lokalnu anesteziju, pa tokom lečenja ne osećate bol. Ako vas je strah, recite nam – idemo vašim tempom.' },
      { q: 'Da li mogu da platim na rate?', a: 'Za veće radove, kao što su implanti i fasete, moguće je plaćanje na rate. Detalje dogovaramo posle pregleda.' },
      { q: 'Šta pokriva garancija?', a: 'Na fasete, krunice i protetiku dajemo garanciju do 10 godina, a na implante važi doživotna garancija proizvođača. Uslov je redovna kontrola jednom godišnje.' },
      { q: 'Koliko traje izrada faseta?', a: 'Obično dve do tri posete u roku od 7 do 10 dana. Na prvoj posetu pravimo plan i probni osmeh.' },
      { q: 'Da li radite subotom?', a: 'Da, subotom radimo od 9 do 14h. Nedeljom je ordinacija zatvorena.' },
    ],
  },

  contact: {
    title: 'Kontakt',
    description: 'Adresa, telefon i radno vreme Dental Studija Aurum u Beogradu. Pregled zakazujete telefonom.',
    eyebrow: 'Kontakt',
    intro: 'Pregled zakazujete telefonom – tako odmah dogovaramo termin i odgovaramo na vaša pitanja.',
    callTitle: 'Pozovite nas',
    callText: 'Radnim danima od 9 do 20h, subotom od 9 do 14h.',
    addressTitle: 'Adresa',
    directions: 'U pešačkoj zoni, pet minuta hoda od Trga republike. Najbliža javna garaža je „Obilićev venac“.',
    emailTitle: 'Email',
    emailText: 'Za pitanja koja nisu hitna.',
    mapTitle: 'Mapa: Knez Mihailova ulica, Beograd',
  },
};
