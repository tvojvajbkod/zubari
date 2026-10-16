// Podaci za pretraživače: da li je sajt test, jezičke oznake i strukturisani podaci (JSON-LD).
import { clinic, url, type Lang } from './i18n';
import { content } from './content';

// TEST = izmišljena ordinacija, Google je ne prikazuje u pretrazi (noindex, nofollow).
// Za pravu ordinaciju promeniti u false.
export const SITE_IS_TEST = true;

export const htmlLang: Record<Lang, string> = { sr: 'sr-Latn', en: 'en' };
export const ogLocale: Record<Lang, string> = { sr: 'sr_RS', en: 'en_US' };

export function absolute(path: string, site: URL | undefined): string {
  return new URL(path, site).href;
}

// Stomatološka ordinacija (Dentist), osnivač (Person) i usluge sa cenama sa cenovnika.
// Namerno BEZ ocena i recenzija (Google ne dozvoljava da firma sama sebi daje ocenu).
export function clinicJsonLd(lang: Lang, site: URL | undefined) {
  const c = content[lang];
  const home = absolute(url('home', 'sr'), site);
  const founder = c.team.members[0];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dentist',
        '@id': `${home}#ordinacija`,
        name: clinic.name,
        description: c.home.description,
        url: absolute(url('home', lang), site),
        logo: absolute(`${import.meta.env.BASE_URL.replace(/\/?$/, '/')}logo.png`, site),
        image: absolute(`${import.meta.env.BASE_URL.replace(/\/?$/, '/')}og-image.jpg`, site),
        telephone: clinic.phone,
        email: clinic.email,
        areaServed: { '@type': 'City', name: lang === 'sr' ? 'Beograd' : 'Belgrade' },
        address: {
          '@type': 'PostalAddress',
          streetAddress: lang === 'sr' ? 'Knez Mihailova 100' : '100 Knez Mihailova St',
          postalCode: '11000',
          addressLocality: lang === 'sr' ? 'Beograd' : 'Belgrade',
          addressCountry: 'RS',
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
        ],
        founder: { '@id': `${home}#osnivac` },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: c.prices.title,
          itemListElement: c.prices.groups.map((g) => ({
            '@type': 'OfferCatalog',
            name: g.name,
            itemListElement: g.items.map((item) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: item.name },
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'RSD',
                ...('from' in item && item.from ? { minPrice: item.price } : { price: item.price }),
              },
            })),
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': `${home}#osnivac`,
        name: founder.name,
        jobTitle: founder.role,
        worksFor: { '@id': `${home}#ordinacija` },
        url: absolute(url('team', lang), site),
      },
    ],
  };
}

// Česta pitanja – isti tekst kao na stranici.
export function faqJsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang === 'sr' ? 'sr-Latn' : 'en',
    mainEntity: content[lang].faq.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
