// sitemap.xml: spisak svih stranica na oba jezika, sa vezom između srpske i engleske verzije.
import type { APIRoute } from 'astro';
import { routes, url, type Lang, type PageKey } from '../i18n';

const langs: { lang: Lang; hreflang: string }[] = [
  { lang: 'sr', hreflang: 'sr-Latn' },
  { lang: 'en', hreflang: 'en' },
];

export const GET: APIRoute = ({ site }) => {
  const abs = (page: PageKey, lang: Lang) => new URL(url(page, lang), site).href;
  const entries = (Object.keys(routes) as PageKey[]).flatMap((page) =>
    langs.map(
      ({ lang }) => `  <url>
    <loc>${abs(page, lang)}</loc>
${langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${abs(page, l.lang)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(page, 'sr')}"/>
  </url>`,
    ),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
