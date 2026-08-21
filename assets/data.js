/* ===== Valoura Home — productdata & illustraties ===== */
const PALETTE = {ink:'#17170F', taupe:'#8E8371', bronze:'#A0803F', sand:'#D8CDB6', clay:'#C9BBA0', creamL:'#FBF8F1', shade:'rgba(23,23,15,.08)'};

function art(type){
  const P = PALETTE;
  const shadow = `<ellipse cx="100" cy="182" rx="58" ry="8" fill="${P.shade}"/>`;
  const svgs = {
    'vaas-alta': `${shadow}<path d="M88 40 Q84 90 74 120 Q64 150 82 172 L118 172 Q136 150 126 120 Q116 90 112 40 Z" fill="${P.clay}"/><rect x="86" y="32" width="28" height="10" fill="${P.ink}" opacity=".85"/><path d="M96 60 Q60 40 52 18" stroke="${P.ink}" stroke-width="2" fill="none"/><path d="M104 60 Q140 34 150 24" stroke="${P.ink}" stroke-width="2" fill="none"/>`,
    'vaas-terra': `${shadow}<path d="M100 44 C 60 60 54 130 100 174 C 146 130 140 60 100 44 Z" fill="${P.sand}"/><ellipse cx="100" cy="46" rx="16" ry="6" fill="${P.ink}" opacity=".8"/>`,
    'vaas-duo': `${shadow}<path d="M70 70 Q56 120 70 168 L98 168 Q110 120 96 70 Z" fill="${P.clay}"/><path d="M116 96 Q108 130 118 168 L142 168 Q150 130 142 96 Z" fill="${P.ink}" opacity=".85"/>`,
    'lamp-tafel': `${shadow}<path d="M58 46 L142 46 L120 96 L80 96 Z" fill="${P.ink}" opacity=".9"/><rect x="96" y="96" width="8" height="56" fill="${P.taupe}"/><path d="M70 172 Q100 150 130 172 Z" fill="${P.clay}"/><circle cx="100" cy="72" r="7" fill="${P.bronze}"/>`,
    'lamp-vloer': `${shadow}<path d="M74 30 L126 30 L114 66 L86 66 Z" fill="${P.clay}"/><line x1="100" y1="66" x2="100" y2="166" stroke="${P.ink}" stroke-width="4"/><path d="M64 172 L136 172" stroke="${P.ink}" stroke-width="6" stroke-linecap="round"/>`,
    'lamp-hang': `<line x1="100" y1="0" x2="100" y2="52" stroke="${P.ink}" stroke-width="2.5"/><path d="M54 52 L146 52 L128 108 L72 108 Z" fill="${P.ink}" opacity=".9"/><circle cx="100" cy="120" r="10" fill="${P.bronze}"/><ellipse cx="100" cy="176" rx="46" ry="7" fill="${P.shade}"/>`,
    'spiegel-ovaal': `${shadow}<ellipse cx="100" cy="100" rx="52" ry="74" fill="${P.creamL}" stroke="${P.bronze}" stroke-width="4"/><path d="M74 60 Q100 40 126 62" stroke="#fff" stroke-width="7" fill="none" opacity=".8" stroke-linecap="round"/>`,
    'spiegel-rond': `${shadow}<circle cx="100" cy="102" r="62" fill="${P.creamL}" stroke="${P.ink}" stroke-width="4"/><path d="M66 78 Q96 52 132 76" stroke="#fff" stroke-width="7" fill="none" opacity=".8" stroke-linecap="round"/>`,
    'spiegel-arc': `<path d="M56 176 L56 96 A44 44 0 0 1 144 96 L144 176 Z" fill="${P.creamL}" stroke="${P.bronze}" stroke-width="4"/><path d="M70 96 Q100 66 130 94" stroke="#fff" stroke-width="7" fill="none" opacity=".8" stroke-linecap="round"/><ellipse cx="100" cy="182" rx="58" ry="7" fill="${P.shade}"/>`,
    'kaars-geur': `${shadow}<rect x="66" y="86" width="68" height="86" rx="4" fill="#B9AB8C"/><rect x="66" y="70" width="68" height="16" rx="3" fill="${P.ink}" opacity=".85"/><line x1="100" y1="70" x2="100" y2="58" stroke="${P.ink}" stroke-width="2"/><path d="M100 58 Q94 48 100 40 Q106 48 100 58" fill="${P.bronze}"/>`,
    'kaars-pilaar': `${shadow}<rect x="58" y="76" width="30" height="96" rx="3" fill="${P.creamL}" stroke="${P.sand}"/><rect x="100" y="52" width="30" height="120" rx="3" fill="${P.sand}"/><path d="M73 76 Q69 66 73 60 Q77 66 73 76" fill="${P.bronze}"/><path d="M115 52 Q111 42 115 36 Q119 42 115 52" fill="${P.bronze}"/>`,
    'kandelaar': `${shadow}<path d="M92 60 L108 60 L104 76 L96 76 Z" fill="${P.ink}"/><line x1="100" y1="76" x2="100" y2="150" stroke="${P.bronze}" stroke-width="5"/><path d="M74 168 Q100 150 126 168 Z" fill="${P.bronze}"/><path d="M100 60 Q95 48 100 40 Q105 48 100 60" fill="${P.ink}" opacity=".7"/>`,
    'print': `${shadow}<rect x="52" y="36" width="96" height="130" fill="${P.creamL}" stroke="${P.ink}" stroke-width="3"/><path d="M70 130 Q100 60 130 130" stroke="${P.bronze}" stroke-width="2.5" fill="none"/><circle cx="100" cy="76" r="10" fill="${P.sand}"/><line x1="66" y1="146" x2="134" y2="146" stroke="${P.taupe}" stroke-width="2"/>`,
    'fold': `${shadow}<path d="M56 140 L100 44 L110 140 Z" fill="${P.sand}"/><path d="M110 140 L100 44 L148 140 Z" fill="${P.clay}"/><path d="M56 140 L148 140 L144 152 L60 152 Z" fill="${P.ink}" opacity=".85"/>`,
    'frames': `${shadow}<rect x="46" y="52" width="60" height="84" fill="${P.creamL}" stroke="${P.bronze}" stroke-width="3"/><rect x="96" y="76" width="58" height="76" fill="${P.creamL}" stroke="${P.ink}" stroke-width="3"/><circle cx="76" cy="86" r="9" fill="${P.sand}"/><path d="M106 128 Q125 96 144 128" stroke="${P.taupe}" stroke-width="2.5" fill="none"/>`,
    'plaid': `${shadow}<path d="M52 76 Q100 60 148 76 L148 150 Q100 168 52 150 Z" fill="${P.sand}"/><path d="M52 96 Q100 80 148 96 M52 118 Q100 102 148 118 M52 140 Q100 124 148 140" stroke="${P.creamL}" stroke-width="3" fill="none"/><path d="M52 150 L52 162 M148 150 L148 162" stroke="${P.taupe}" stroke-width="3"/>`,
    'kussen': `${shadow}<path d="M50 100 Q52 60 100 62 Q148 60 150 100 Q148 140 100 138 Q52 140 50 100 Z" fill="${P.clay}"/><path d="M50 100 Q100 92 150 100" stroke="${P.creamL}" stroke-width="2.5" fill="none" opacity=".8"/>`,
    'schaal': `${shadow}<path d="M46 96 Q100 130 154 96 Q150 148 100 150 Q50 148 46 96 Z" fill="${P.ink}" opacity=".88"/><ellipse cx="100" cy="96" rx="54" ry="12" fill="${P.creamL}"/><circle cx="90" cy="96" r="5" fill="${P.bronze}"/><circle cx="112" cy="98" r="4" fill="${P.sand}"/>`
  };
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${svgs[type]||svgs['vaas-terra']}</svg>`;
}

const CATS = [
  {name:'Lampen', note:'Warm licht', art:'lamp-tafel', tint:'var(--tile-a)'},
  {name:'Spiegels', note:'Ruimte & licht', art:'spiegel-ovaal', tint:'var(--tile-b)'},
  {name:'Vazen', note:'Stille vormen', art:'vaas-alta', tint:'var(--tile-c)'},
  {name:'Kaarsen', note:'Zachte gloed', art:'kaars-geur', tint:'var(--tile-b)'},
  {name:'Wanddecoratie', note:'Karakter', art:'fold', tint:'var(--tile-a)'},
  {name:'Textiel & meer', note:'Comfort', art:'plaid', tint:'var(--tile-c)'}
];

const PRODUCTS = [
  {id:1, name:'Luma tafellamp', cat:'Lampen', price:129, art:'lamp-tafel', pop:98, tag:'Bestseller', desc:'Sculpturale tafellamp met linnen kap en keramische voet. Geeft warm, gedimd licht — perfect op een dressoir of nachtkastje.', vars:{label:'Kleur', opts:['Crème','Taupe','Zwart']}},
  {id:2, name:'Arca vloerlamp', cat:'Lampen', price:249, art:'lamp-vloer', pop:80, tag:'', desc:'Slanke vloerlamp met gebogen silhouet en messing details. Een rustpunt in elke leeshoek.', vars:{label:'Kleur', opts:['Zand','Zwart']}},
  {id:3, name:'Nox hanglamp', cat:'Lampen', price:179, art:'lamp-hang', pop:72, tag:'Nieuw', desc:'Matzwarte hanglamp met bronzen accent. Mooi solo boven de eettafel, of in een rij van drie.', vars:{label:'Maat', opts:['Ø 30 cm','Ø 40 cm']}},
  {id:4, name:'Ondo ovale spiegel', cat:'Spiegels', price:199, art:'spiegel-ovaal', pop:95, tag:'Bestseller', desc:'Organisch gevormde spiegel met dun bronzen frame. Vangt licht en geeft rust aan de wand.', vars:{label:'Maat', opts:['50 × 75 cm','60 × 90 cm']}},
  {id:5, name:'Orbis ronde spiegel', cat:'Spiegels', price:149, art:'spiegel-rond', pop:76, tag:'', desc:'Tijdloze ronde wandspiegel met mat zwart stalen frame. Past in hal, badkamer en slaapkamer.', vars:{label:'Maat', opts:['Ø 50 cm','Ø 70 cm']}},
  {id:6, name:'Arc vloerspiegel', cat:'Spiegels', price:329, art:'spiegel-arc', pop:68, tag:'Nieuw', desc:'Royale boogspiegel om tegen de muur te plaatsen. Maakt elke ruimte optisch hoger en lichter.', vars:{label:'Kleur', opts:['Brons','Zwart']}},
  {id:7, name:'Alta vaas', cat:'Vazen', price:59, art:'vaas-alta', pop:90, tag:'Bestseller', desc:'Hoge keramische vaas met zachte taille. Even mooi met droogbloemen als leeg op een stapel boeken.', vars:{label:'Kleur', opts:['Klei','Crème','Zwart']}},
  {id:8, name:'Terra vaas', cat:'Vazen', price:45, art:'vaas-terra', pop:74, tag:'', desc:'Ronde vaas met aardse gloed en handgevoelde structuur. Elk exemplaar is net iets anders.', vars:{label:'Maat', opts:['H 20 cm','H 28 cm']}},
  {id:9, name:'Duo vazenset', cat:'Vazen', price:79, art:'vaas-duo', pop:66, tag:'Set', desc:'Set van twee vazen in contrasterende tinten. Samen een stilleven, apart net zo sterk.', vars:{label:'Combinatie', opts:['Klei / Zwart','Crème / Taupe']}},
  {id:10, name:'Ambre geurkaars', cat:'Kaarsen', price:34, art:'kaars-geur', pop:88, tag:'Bestseller', desc:'Geurkaars van sojawas met amber, cederhout en een vleug vanille. Brandtijd ± 45 uur.', vars:{label:'Geur', opts:['Ambre','Santal','Fig & Linen']}},
  {id:11, name:'Pilaarkaarsen set', cat:'Kaarsen', price:24, art:'kaars-pilaar', pop:60, tag:'Set', desc:'Set van drie druipvrije pilaarkaarsen in verschillende hoogtes. Rustig van kleur, lang van brandtijd.', vars:{label:'Kleur', opts:['Ivoor','Zand','Mokka']}},
  {id:12, name:'Lume kandelaar', cat:'Kaarsen', price:49, art:'kandelaar', pop:58, tag:'', desc:'Bronzen kandelaar met gewicht en glans. Mooi als paar op de eettafel of schouw.', vars:{label:'Hoogte', opts:['18 cm','26 cm']}},
  {id:13, name:'Ligne print', cat:'Wanddecoratie', price:39, art:'print', pop:70, tag:'', desc:'Abstracte lijnkunst op mat museumpapier, inclusief eikenhouten wissellijst.', vars:{label:'Maat', opts:['30 × 40 cm','50 × 70 cm']}},
  {id:14, name:'Fold wandobject', cat:'Wanddecoratie', price:89, art:'fold', pop:64, tag:'Nieuw', desc:'Driedimensionaal wandobject van gevouwen metaal. Speelt de hele dag met licht en schaduw.', vars:{label:'Kleur', opts:['Zand','Klei']}},
  {id:15, name:'Galerie lijstenset', cat:'Wanddecoratie', price:69, art:'frames', pop:55, tag:'Set', desc:'Set van vier lijsten in twee formaten voor een persoonlijke galeriewand.', vars:{label:'Kleur', opts:['Eiken','Zwart']}},
  {id:16, name:'Nube plaid', cat:'Textiel & meer', price:69, art:'plaid', pop:78, tag:'', desc:'Zachte plaid van gerecycled katoen met subtiele streep. 130 × 180 cm.', vars:{label:'Kleur', opts:['Zand','Taupe','Antraciet']}},
  {id:17, name:'Sable kussen', cat:'Textiel & meer', price:39, art:'kussen', pop:62, tag:'', desc:'Sierkussen van gewassen linnen met verborgen rits, inclusief donzen binnenkussen. 50 × 50 cm.', vars:{label:'Kleur', opts:['Klei','Crème','Zwart']}},
  {id:18, name:'Onda schaal', cat:'Textiel & meer', price:55, art:'schaal', pop:57, tag:'Nieuw', desc:'Handgedraaide decoratieschaal met contrasterende binnenzijde. Voor sleutels, sieraden of niets.', vars:{label:'Kleur', opts:['Zwart / Crème','Klei / Crème']}}
];
