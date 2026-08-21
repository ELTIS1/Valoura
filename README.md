# Valoura Home — webshop

Statische, volledig responsive webshop voor Valoura Home ("The art of living").
Geen build-stap of framework nodig — pure HTML, CSS en JavaScript.

## Structuur

```
valoura/
├─ index.html        Homepage (hero, categorieën, bestsellers, nieuwsbrief)
├─ shop.html         Alle producten met filter, zoeken en sorteren
├─ product.html      Productdetail (laadt via ?id=)
├─ over.html         Over Valoura
├─ faq.html          Veelgestelde vragen
├─ contact.html      Contactgegevens + formulier
├─ checkout.html     Afrekenen + bevestiging
├─ 404.html          Foutpagina
├─ .nojekyll         Nodig voor GitHub Pages
└─ assets/
   ├─ style.css      Alle styling
   ├─ data.js        Producten + SVG-illustraties
   ├─ partials.js    Gedeelde header + footer
   └─ app.js         Winkelwagen, zoeken, menu
```

De winkelwagen wordt bewaard in `localStorage`, dus hij blijft gevuld terwijl
je tussen pagina's navigeert.

## Publiceren op GitHub Pages

1. Maak een nieuwe repository aan op GitHub.
2. Upload de **inhoud** van deze map (dus `index.html` in de hoofdmap, niet
   de map `valoura` zelf).
3. Ga naar **Settings → Pages**.
4. Kies bij *Source*: branch `main`, map `/ (root)`. Klik **Save**.
5. Na ~1 minuut staat de site op `https://<gebruikersnaam>.github.io/<repo>/`.

Voor een eigen domein (bijv. valourahome.nl): voeg het toe onder
Settings → Pages → Custom domain.

## Lokaal bekijken

Open `index.html` in de browser. Zorg dat de map `assets/` ernaast staat.

## Aanpassen

- **Producten**: bewerk de lijst `PRODUCTS` in `assets/data.js`.
- **Categorieën**: de lijst `CATS` in hetzelfde bestand.
- **Kleuren/typografie**: de CSS-variabelen bovenaan `assets/style.css`.
- **Contact/nieuwsbrief koppelen**: de formulieren in `contact.html` en
  `index.html` kunnen aan een endpoint (bijv. Formspree) gekoppeld worden.
