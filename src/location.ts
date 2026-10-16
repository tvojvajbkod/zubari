// Lokacija ordinacije na Google mapi: ugrađena mapa i linkovi za rutu gradskim prevozom.
import type { Lang } from './i18n';

const destination = 'Knez Mihailova, Beograd';

export function mapSrc(lang: Lang): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(destination)}&z=16&output=embed&hl=${lang === 'sr' ? 'sr-Latn' : 'en'}`;
}

// Link za rutu na Google mapi (zvanični format "Maps URLs"): uvek prikazuje trenutne linije.
export function routeUrl(from: string, mode: string): string {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(destination)}&travelmode=${mode}`;
}
