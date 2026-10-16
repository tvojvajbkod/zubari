// Prepoznavanje pitanja za chatbot. Bot nikad ne sastavlja svoj tekst:
// vraća ili medicinsko upozorenje, ili jedan od unapred napisanih odgovora, ili "ne znam".

export interface Intent {
  id: string;
  keywords: readonly string[];
  weight?: number;
}

export type Match = { type: 'medical' } | { type: 'intent'; id: string } | { type: 'fallback' };

// Mala slova, bez kvačica (č→c, đ→dj...), bez znakova interpunkcije.
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/đ/g, 'dj')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function hits(keyword: string, text: string, words: string[]): boolean {
  if (keyword.includes(' ')) return ` ${text} `.includes(` ${keyword}`);
  if (keyword.endsWith('$')) return words.includes(keyword.slice(0, -1));
  return words.some((w) => w.startsWith(keyword));
}

export function match(question: string, medicalKeywords: readonly string[], intents: readonly Intent[]): Match {
  const text = normalize(question);
  const words = text.split(' ');
  // Pitanja o simptomima i lekovima uvek dobijaju isto upozorenje, bez obzira na ostale reči.
  if (medicalKeywords.some((k) => hits(k, text, words))) return { type: 'medical' };

  // Pobeđuje tema sa najviše bodova; kod nerešenog konkretnija tema (veći weight).
  let best: { id: string; score: number; weight: number } | null = null;
  for (const intent of intents) {
    const weight = intent.weight ?? 1;
    const score = intent.keywords.filter((k) => hits(k, text, words)).length * weight;
    if (score > 0 && (!best || score > best.score || (score === best.score && weight > best.weight))) {
      best = { id: intent.id, score, weight };
    }
  }
  return best ? { type: 'intent', id: best.id } : { type: 'fallback' };
}
