# Plan: sajt stomatološke ordinacije (primer za portfolio)

Status: **odobren** (verzija 4, 16.10.2026), koraci 1–5 završeni; urađeni i „Pre i posle“ i chatbot na srpskom (korak 7 urađen pre koraka 6, da bi se prevelo sve odjednom); sledi korak 6 (engleski)

## Osnovno
- Izmišljena ordinacija, sajt služi kao primer za portfolio
- Predlog naziva: **Dental Studio Aurum** (možete izabrati drugi)
- Jezici: srpski i engleski. Engleske tekstove piše Claude.
- Termini se zakazuju isključivo telefonom (dugme „Pozovite nas“)
- Sajt je postavljen besplatno na GitHub Pages
- Svi fajlovi projekta se čuvaju samo u `D:\PROJEKTI\ZUBARI`, nikad na disku C

## Uzor
https://zlatadentist.com/: elegantna slova, krupne fotografije, utisci pacijenata, mitovi i činjenice, česta pitanja i garancija. Pravimo **sličan raspored, ali sopstveni dizajn i tekstove** (ne kopiramo).

## Boje (izmena u verziji 3)
Umesto crne podloge sa uzora: **bela podloga + boje koje ljudi povezuju sa zdravljem i čistoćom** (psihologija boja):
- **Bela**: čistoća, sterilnost
- **Plava**: poverenje, smirenost, stručnost (smanjuje strah od zubara)
- **Tirkizna / mint**: svežina, zdravlje (kao osećaj posle pranja zuba)
- **Topla zlatna, samo u sitnim detaljima**: veza sa nazivom „Aurum“ i utisak kvaliteta
Tačne nijanse su odobrene u koraku 3.

## Slova
- Naslovi: **Playfair Display** (elegantan, sa „serifima“)
- Tekst: **Inter** (jednostavan i čitak)
- *Odstupanje od koraka 3:* prvobitni font (Cormorant) je loše prikazivao š, ž i č, pa je zamenjen

## Stranice (svaka na srpskom i na engleskom)
1. **Početna**: velika fotografija, kratka poruka, dugme „Pozovite nas“, izdvojene usluge i nekoliko utisaka pacijenata
2. **Usluge**: popravke, beljenje, fasete, implanti, proteze, dečja stomatologija
3. **Naš tim**: izmišljeni doktori sa fotografijom i kratkom biografijom
4. **Cenovnik**: tabela usluga i cena
5. **Utisci pacijenata**: izmišljeni utisci (jasno označeni kao primer)
6. **Česta pitanja**: uključuje i mitove i činjenice
7. **Kontakt**: adresa, mapa, telefon i radno vreme

**Dopuna (verzija 4):** na Početnoj je i sekcija **„Pre i posle“**, sa klizačem kao na uzoru. Ordinacija je izmišljena, pa su to ilustracije: fotografije „pre“ su digitalno obrađene i to piše ispod sekcije. Za pravu ordinaciju bi se zamenile pravim fotografijama pacijenata (uz njihovu saglasnost).

## Dodatno na svakoj stranici
- **Chatbot**: prozorčić u uglu ekrana. Posetilac bira pitanje ili ga sam ukuca. Pravila (verzija 4):
  - odgovara **samo unapred napisanim odgovorima** sa sajta (radno vreme, cene, adresa, zakazivanje, usluge, plaćanje, garancija...)
  - **ništa ne izmišlja**: ako ne zna odgovor, kaže to i nudi poziv
  - **ne daje medicinske savete**: na pitanja o bolu, otoku, lekovima i slično odgovara da to procenjuje stomatolog i nudi poziv (za hitne slučajeve van radnog vremena upućuje na 194)
  - radi bez veštačke inteligencije, besplatno i bez servera
- Dugme za promenu jezika SR/EN

## Alati i zašto
- **Astro**: pravi brze i jednostavne sajtove, podržava više jezika i radi na besplatnom GitHub hostingu
- **GitHub Pages**: besplatno postavljanje sajta
- **Pexels**: besplatne fotografije koje se mogu legalno koristiti (spisak izvora u src/assets/photos/IZVORI.txt)
  - *Odstupanje:* Unsplash blokira automatsko preuzimanje, pa su sve fotografije sa Pexels-a
- **Google mapa**: na stranici Kontakt
- (Uklonjeno iz verzije 1: Formspree formular, jer se termini zakazuju telefonom)

## Koraci
1. Pripremam projekat u `D:\PROJEKTI\ZUBARI` i povezujem ga sa GitHub-om
2. Pravim osnovni kostur: meni, podnožje i dugme za jezik
3. Pokazujem predlog izgleda (boje i slova) i čekam odobrenje
4. Biram fotografije i pišem tekstove na srpskom
5. Pravim stranice redom kako su navedene
6. Dodajem engleske verzije
7. Pravim chatbot
8. Proveravam sajt na telefonu i računaru i prijavljujem ga Google pretrazi
9. Objavljujem sajt i šaljem vam link
