// Sve što zavisi od jezika: nazivi stranica u meniju, adrese stranica
// i kratki tekstovi koji se ponavljaju (meni, podnožje, dugmad).

export type Lang = 'sr' | 'en';

// Ključ je "ime" stranice, a vrednost je njena adresa na svakom jeziku.
export const routes = {
  home: { sr: '', en: 'en/' },
  services: { sr: 'usluge/', en: 'en/services/' },
  team: { sr: 'tim/', en: 'en/team/' },
  prices: { sr: 'cenovnik/', en: 'en/prices/' },
  reviews: { sr: 'utisci/', en: 'en/reviews/' },
  faq: { sr: 'pitanja/', en: 'en/faq/' },
  contact: { sr: 'kontakt/', en: 'en/contact/' },
} as const;

export type PageKey = keyof typeof routes;

// Pun put do stranice, uz osnovnu adresu sajta (/zubari/).
export function url(page: PageKey, lang: Lang): string {
  return import.meta.env.BASE_URL.replace(/\/?$/, '/') + routes[page][lang];
}

export const clinic = {
  name: 'Dental Studio Aurum',
  phone: '+381 11 123 4567',
  phoneHref: 'tel:+381111234567',
  email: 'kontakt@aurum-dental.example',
  address: { sr: 'Knez Mihailova 100, 11000 Beograd', en: '100 Knez Mihailova St, 11000 Belgrade, Serbia' },
};

export const t = {
  sr: {
    nav: {
      home: 'Početna',
      services: 'Usluge',
      team: 'Naš tim',
      prices: 'Cenovnik',
      reviews: 'Utisci',
      faq: 'Pitanja',
      contact: 'Kontakt',
    },
    call: 'Pozovite nas',
    menu: 'Meni',
    switchLang: 'English',
    hoursTitle: 'Radno vreme',
    hours: ['Pon – Pet: 09 – 20h', 'Subota: 09 – 14h', 'Nedelja: zatvoreno'],
    contactTitle: 'Kontakt',
    pagesTitle: 'Stranice',
    portfolioNote: 'Izmišljena ordinacija – primer sajta za portfolio. Podaci i utisci nisu stvarni.',
    rights: 'Sva prava zadržana.',
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      team: 'Our team',
      prices: 'Prices',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
    },
    call: 'Call us',
    menu: 'Menu',
    switchLang: 'Srpski',
    hoursTitle: 'Opening hours',
    hours: ['Mon – Fri: 9 am – 8 pm', 'Saturday: 9 am – 2 pm', 'Sunday: closed'],
    contactTitle: 'Contact',
    pagesTitle: 'Pages',
    portfolioNote: 'A fictional clinic – a portfolio website example. Details and reviews are not real.',
    rights: 'All rights reserved.',
  },
} as const;
