// Sve fotografije iz src/assets/photos, dostupne po imenu fajla (bez .jpg).
// Astro ih sam smanjuje i pretvara u lakši format pri objavljivanju.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('./assets/photos/*.jpg', { eager: true });

export const photos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace('.jpg', ''), mod.default]),
);
