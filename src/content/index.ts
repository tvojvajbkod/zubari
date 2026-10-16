// Tekstovi po jeziku. Engleski (en.ts) mora imati isti oblik kao srpski (sr.ts).
import { sr } from './sr';
import { en } from './en';

export type Content = typeof sr;

export const content: Record<'sr' | 'en', Content> = { sr, en };

// Cena u obliku "3.000 din" (srpski) ili "RSD 3,000" (engleski).
export function formatPrice(value: number, lang: 'sr' | 'en'): string {
  return lang === 'sr' ? `${value.toLocaleString('sr-RS')} din` : `RSD ${value.toLocaleString('en-US')}`;
}
