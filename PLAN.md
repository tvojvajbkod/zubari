# Plan: sajt stomatološke ordinacije (primer za portfolio)

Status: **odobren** (verzija 9, 17.10.2026), koraci 1–8 završeni, uz dopunu „Naš tim“ na Početnoj

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
- Naslovi: **Lora** (mirna, klasična slova sa „serifima“)
- Tekst: **Source Sans 3** (jasan i čitak), osnovna veličina 18px
- *Istorija:* Cormorant (loše prikazivao š, ž, č) → Playfair Display + Inter → Lora + Source Sans 3 (verzija 8, izbor sa stranice za poređenje fontova)

## Stranice (svaka na srpskom i na engleskom)
1. **Početna**: velika fotografija, kratka poruka, dugme „Pozovite nas“, izdvojene usluge i nekoliko utisaka pacijenata
   - *Dopuna (verzija 9):* sekcija **„Naš tim“** po uzoru na petrovicdent.com: tamnoplava traka, naslov u dve boje, kvadratne fotografije sa strelicama (pojavljuju se kad sve ne stane), plava traka sa telefonom pri prelasku mišem. *Odstupanje od uzora:* ispod imena su zvanje i oblasti rada umesto ličnih telefona, jer se zakazuje samo preko broja ordinacije.
2. **Usluge**: popravke, beljenje, fasete, implanti, proteze, dečja stomatologija
3. **Naš tim**: izmišljeni doktori sa fotografijom i kratkom biografijom
4. **Cenovnik**: tabela usluga i cena
5. **Utisci pacijenata**: izmišljeni utisci (jasno označeni kao primer)
6. **Česta pitanja**: uključuje i mitove i činjenice
7. **Kontakt**: adresa, mapa, telefon i radno vreme
   - *Dopuna (verzija 7):* sekcija **„Kako stići gradskim prevozom“**: autobuska stanica (Blok 42), železnička stanica Beograd Centar (Prokop), aerodrom i bitnije lokacije u gradu, svaka sa dugmetom „Prikaži rutu“ koje otvara Google mapu sa trenutnim linijama. Brojevi linija se namerno ne pišu na sajtu, jer se trase često menjaju.
   - *Dopuna:* mapa i rute stoje i na **Početnoj** (sekcija „Kako do nas“, pre plave trake za zakazivanje).

**Dopuna (verzija 4):** na Početnoj je i sekcija **„Pre i posle“**, sa klizačem kao na uzoru. Ordinacija je izmišljena, pa su to ilustracije: fotografije „pre“ su digitalno obrađene i to piše ispod sekcije. Za pravu ordinaciju bi se zamenile pravim fotografijama pacijenata (uz njihovu saglasnost).

## Dodatno na svakoj stranici
- **Chatbot**: prozorčić u uglu ekrana. Posetilac bira pitanje ili ga sam ukuca. Pravila (verzija 4):
  - odgovara **samo unapred napisanim odgovorima** sa sajta (radno vreme, cene, adresa, zakazivanje, usluge, plaćanje, garancija...)
  - **ništa ne izmišlja**: ako ne zna odgovor, kaže to i nudi poziv
  - **ne daje medicinske savete**: na pitanja o bolu, otoku, lekovima i slično odgovara da to procenjuje stomatolog i nudi poziv (za hitne slučajeve van radnog vremena upućuje na 194)
  - radi bez veštačke inteligencije, besplatno i bez servera
- Izbor jezika: **zastave Srbije i Velike Britanije** u meniju (dopuna u verziji 5, umesto natpisa „English / Srpski“); izabrani jezik je uokviren

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
   - *Odstupanje (verzija 6):* sajt je označen kao TEST (noindex), jer je ordinacija izmišljena, pa se **ne prijavljuje** Google-u. Za pravu ordinaciju: u src/seo.ts promeniti SITE_IS_TEST na false.
9. Objavljujem sajt i šaljem vam link

## SEO osnova (verzija 6)
- Glavna ključna reč: **stomatolog Beograd**, oblast: Beograd
- Sajt je TEST: sve stranice imaju „noindex, nofollow“
- Podaci za Google (JSON-LD): Dentist sa adresom, radnim vremenom i cenama + osnivač (Person) + česta pitanja (FAQPage); bez ocena i recenzija
- robots.txt i sitemap.xml se prave zajedno sa sajtom (folder dist/)
