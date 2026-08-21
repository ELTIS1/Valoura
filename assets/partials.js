/* ===== Gedeelde header + footer, in elke pagina geïnjecteerd ===== */
/* data-page zet het actieve menu-item; wordt op <body data-page="..."> gezet */
(function(){
  const page = document.body.getAttribute('data-page') || '';
  const nav = [
    {href:'shop.html', label:'Shop', key:'shop'},
    {href:'over.html', label:'Over Valoura', key:'over'},
    {href:'faq.html', label:'FAQ', key:'faq'},
    {href:'contact.html', label:'Contact', key:'contact'}
  ];
  const navHTML = nav.map(n=>`<a href="${n.href}" class="${page===n.key?'active':''}">${n.label}</a>`).join('');

  const header = `
  <div class="announce">Gratis verzending vanaf &euro;75 &nbsp;&mdash;&nbsp; <em>The art of living.</em></div>
  <header class="site">
    <div class="header-in">
      <button class="burger" id="burgerBtn" aria-label="Menu openen"><span></span><span></span><span></span></button>
      <nav class="main" aria-label="Hoofdmenu">${navHTML}</nav>
      <a class="brand" href="index.html" aria-label="Valoura Home">
        <span class="name">VALOURA</span><span class="sub">Home</span>
      </a>
      <div class="header-tools">
        <button class="icon-btn" id="searchBtn" aria-label="Zoeken">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
        </button>
        <button class="icon-btn" id="cartBtn" aria-label="Winkelwagen openen">
          <svg viewBox="0 0 24 24"><path d="M5 8h14l-1.2 11a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z"/><path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8"/></svg>
          <span class="cart-count" id="cartCount">0</span>
        </button>
      </div>
    </div>
  </header>
  <div class="mobile-menu" id="mobileMenu">
    <button class="close-x" id="mobileClose">Sluiten</button>
    <a href="index.html">Home</a>
    <a href="shop.html">Shop</a>
    <a href="over.html">Over Valoura</a>
    <a href="faq.html">FAQ</a>
    <a href="contact.html">Contact</a>
  </div>`;

  const footer = `
  <footer class="site">
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand">
          <div class="name">VALOURA</div>
          <div class="slog">The art of living.</div>
          <p style="margin-top:18px;font-size:14px;max-width:32ch">Tijdloze interieuraccessoires in rustige, warme tinten. Met zorg samengesteld.</p>
        </div>
        <div class="foot-col">
          <h4>Shop</h4>
          <a href="shop.html?cat=Lampen">Lampen</a>
          <a href="shop.html?cat=Spiegels">Spiegels</a>
          <a href="shop.html?cat=Vazen">Vazen</a>
          <a href="shop.html?cat=Kaarsen">Kaarsen</a>
          <a href="shop.html?cat=Wanddecoratie">Wanddecoratie</a>
        </div>
        <div class="foot-col">
          <h4>Service</h4>
          <a href="faq.html">Veelgestelde vragen</a>
          <a href="contact.html">Contact</a>
          <a href="faq.html">Verzending &amp; retour</a>
          <a href="faq.html">Betaalmethoden</a>
        </div>
        <div class="foot-col">
          <h4>Valoura</h4>
          <a href="over.html">Over ons</a>
          <a href="index.html#nieuwsbrief">Nieuwsbrief</a>
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
        </div>
      </div>
      <div class="foot-base">
        <span>&copy; 2026 Valoura Home &middot; Alle rechten voorbehouden</span>
        <span>Privacy &middot; Algemene voorwaarden &middot; KVK 87654321</span>
      </div>
    </div>
  </footer>`;

  const hp = document.getElementById('header-mount');
  if(hp) hp.outerHTML = header; else document.body.insertAdjacentHTML('afterbegin', header);
  const fp = document.getElementById('footer-mount');
  if(fp) fp.outerHTML = footer; else document.body.insertAdjacentHTML('beforeend', footer);
})();
