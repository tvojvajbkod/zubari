// Tekstovi po jeziku. Engleski (en.ts) se dodaje u koraku 6 i mora imati isti oblik kao srpski.
import { sr } from './sr';

export type Content = typeof sr;

export const content: { sr: Content } = { sr };

// Cena u obliku "3.000 din" (srpski) ili "RSD 3,000" (engleski).
export function formatPrice(value: number, lang: 'sr' | 'en'): string {
  return lang === 'sr' ? `${value.toLocaleString('sr-RS')} din` : `RSD ${value.toLocaleString('en-US')}`;
}
