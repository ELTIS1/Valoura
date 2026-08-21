/* ===== Valoura Home — gedeelde logica (winkelwagen, zoeken, menu) ===== */
const eur = n => '€' + n.toFixed(2).replace('.', ',');
const byId = id => document.getElementById(id);
const prod = id => PRODUCTS.find(p => p.id === id);

/* --- winkelwagen in localStorage (blijft bewaard tussen pagina's) --- */
const CART_KEY = 'valoura_cart';
function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); }
function cartTotals(){
  const c = getCart();
  const sub = c.reduce((s,l)=>s + prod(l.id).price * l.qty, 0);
  const ship = sub === 0 ? 0 : (sub >= 75 ? 0 : 4.95);
  return {sub, ship, tot: sub + ship};
}
function addToCart(id, variant, qty){
  const c = getCart();
  const line = c.find(l => l.id===id && l.variant===variant);
  if(line) line.qty += qty; else c.push({id, variant, qty});
  saveCart(c);
  renderCart();
  toast('Toegevoegd aan winkelwagen');
  openDrawer();
}

/* --- gedeelde overlays (drawer, zoeken, toast) in elke pagina injecteren --- */
document.body.insertAdjacentHTML('beforeend', `
<div class="overlay" id="overlay"></div>
<aside class="drawer" id="cartDrawer" aria-label="Winkelwagen">
  <div class="drawer-head"><h3 class="serif">Winkelwagen</h3><button id="cartClose">Sluiten</button></div>
  <div class="drawer-body" id="cartBody"></div>
  <div class="drawer-foot" id="cartFoot"></div>
</aside>
<div class="search-panel" id="searchPanel">
  <button class="search-close" id="searchClose">Sluiten</button>
  <div class="wrap">
    <div class="search-big">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
      <input type="text" id="searchInput" placeholder="Waar bent u naar op zoek?" aria-label="Zoeken">
    </div>
    <div class="search-results" id="searchResults"></div>
  </div>
</div>
<div class="toast" id="toast">Toegevoegd aan winkelwagen</div>`);

function renderCart(){
  const cart = getCart();
  const count = cart.reduce((s,l)=>s+l.qty,0);
  const cc = byId('cartCount');
  if(cc){ cc.textContent = count; cc.classList.toggle('show', count>0); }
  const body = byId('cartBody'), foot = byId('cartFoot');
  if(!cart.length){
    body.innerHTML = `<div class="drawer-empty"><div class="serif">Uw winkelwagen is leeg</div><p>Ontdek de collectie en vind uw nieuwe favoriet.</p><br><a class="btn small" href="shop.html">Shop nu</a></div>`;
    foot.innerHTML = '';
    return;
  }
  body.innerHTML = cart.map((l,i)=>{
    const p = prod(l.id);
    return `<div class="cart-line">
      <a class="thumb" href="product.html?id=${p.id}">${art(p.art)}</a>
      <div>
        <a class="n" href="product.html?id=${p.id}">${p.name}</a>
        <div class="v">${l.variant}</div>
        <div class="line-qty">
          <button data-lq="${i}|-1" aria-label="Minder">−</button><span>${l.qty}</span><button data-lq="${i}|1" aria-label="Meer">+</button>
        </div>
      </div>
      <div style="text-align:right">
        <div class="p">${eur(p.price*l.qty)}</div>
        <button class="rm" data-rm="${i}">Verwijder</button>
      </div>
    </div>`;
  }).join('');
  const t = cartTotals();
  foot.innerHTML = `
    ${t.sub < 75 ? `<div class="free-ship">Nog ${eur(75-t.sub)} tot gratis verzending</div>` : `<div class="free-ship">✓ Gratis verzending</div>`}
    <div class="tot-row"><span>Subtotaal</span><span>${eur(t.sub)}</span></div>
    <div class="tot-row"><span>Verzending</span><span>${t.ship===0?'Gratis':eur(t.ship)}</span></div>
    <div class="tot-row grand"><span>Totaal</span><span>${eur(t.tot)}</span></div>
    <a class="btn solid" href="checkout.html" style="width:100%">Afrekenen</a>`;
}

function openDrawer(){ renderCart(); byId('cartDrawer').classList.add('open'); byId('overlay').classList.add('open'); }
function closeAll(){
  byId('cartDrawer').classList.remove('open');
  byId('overlay').classList.remove('open');
  byId('searchPanel').classList.remove('open');
}
function toast(msg){
  const t = byId('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(()=>t.classList.remove('show'), 2200);
}

/* --- productkaart HTML (gebruikt op home, shop, product) --- */
function cardHTML(p){
  const tag = p.tag ? `<span class="tag ${p.tag==='Bestseller'?'gold':''}">${p.tag}</span>` : '';
  return `<article class="prod-card reveal">
    <a class="prod-thumb" href="product.html?id=${p.id}">${tag}${art(p.art)}
      <button class="quick-add" data-quick="${p.id}">Toevoegen +</button>
    </a>
    <a class="prod-meta" href="product.html?id=${p.id}">
      <span class="cat">${p.cat}</span>
      <span class="name">${p.name}</span>
      <span class="price">${eur(p.price)}</span>
    </a>
  </article>`;
}

/* --- globale click handlers --- */
document.addEventListener('click', e => {
  const quick = e.target.closest('[data-quick]');
  if(quick){ e.preventDefault(); const p = prod(+quick.dataset.quick); addToCart(p.id, p.vars.opts[0], 1); return; }
  const lq = e.target.closest('[data-lq]');
  if(lq){
    const [i,d] = lq.dataset.lq.split('|').map(Number);
    const c = getCart();
    c[i].qty += d;
    if(c[i].qty<1) c.splice(i,1);
    saveCart(c); renderCart(); return;
  }
  const rm = e.target.closest('[data-rm]');
  if(rm){ const c = getCart(); c.splice(+rm.dataset.rm,1); saveCart(c); renderCart(); return; }
});

/* --- header knoppen --- */
byId('cartBtn').addEventListener('click', openDrawer);
byId('cartClose').addEventListener('click', closeAll);
byId('overlay').addEventListener('click', closeAll);
byId('searchBtn').addEventListener('click', ()=>{
  byId('searchPanel').classList.add('open');
  byId('overlay').classList.add('open');
  setTimeout(()=>byId('searchInput').focus(), 120);
});
byId('searchClose').addEventListener('click', closeAll);
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){ closeAll(); const m = byId('mobileMenu'); if(m) m.classList.remove('open'); }
});

/* --- zoek-overlay --- */
byId('searchInput').addEventListener('input', e=>{
  const q = e.target.value.trim().toLowerCase();
  const res = byId('searchResults');
  if(!q){ res.innerHTML=''; return; }
  const hits = PRODUCTS.filter(p => (p.name+' '+p.cat+' '+p.desc).toLowerCase().includes(q)).slice(0,7);
  res.innerHTML = hits.length
    ? hits.map(p=>`<a class="sr-item" href="product.html?id=${p.id}"><span class="n">${p.name}</span><span class="c">${p.cat} · ${eur(p.price)}</span></a>`).join('')
    : `<div class="sr-item" style="cursor:default"><span class="n" style="color:var(--taupe)">Geen resultaten voor "${e.target.value}"</span></div>`;
});

/* --- mobiel menu --- */
const burger = byId('burgerBtn');
if(burger){
  burger.addEventListener('click', ()=>byId('mobileMenu').classList.add('open'));
  byId('mobileClose').addEventListener('click', ()=>byId('mobileMenu').classList.remove('open'));
}

/* --- scroll reveal --- */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es=>{
  es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
},{threshold:.12}) : null;
function observeReveals(){
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
    if(io) io.observe(el); else el.classList.add('in');
  });
}

/* --- init --- */
renderCart();
observeReveals();
