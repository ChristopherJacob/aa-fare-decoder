const classes = {
  F:{cabin:'First / Business',tier:'Full fare',typical:'Full-fare premium',summary:'AA publishes F in its full-fare First / Business group. On aircraft sold with First, F is typically the top First bucket.'},
  J:{cabin:'Business',tier:'Full fare',typical:'Full-fare Business',summary:'AA publishes J in its full-fare First / Business group; J is the standard full-fare Business booking class.'},
  A:{cabin:'First / Business',tier:'Discounted',typical:'Discounted First',summary:'AA publishes A in its discounted First / Business group. A is commonly used for discounted First fares.'},
  C:{cabin:'Business',tier:'Discounted',typical:'Discounted Business',summary:'AA publishes C in its discounted First / Business group and it is commonly associated with Business inventory.'},
  D:{cabin:'Business',tier:'Discounted',typical:'Discounted Business',summary:'AA publishes D in its discounted First / Business group and it is commonly associated with discounted Business.'},
  I:{cabin:'Business',tier:'Discounted',typical:'Deep-discount Business',summary:'AA publishes I in its discounted First / Business group; it is commonly a lower-priced Business bucket.'},
  R:{cabin:'Business',tier:'Discounted',typical:'Discounted Business',summary:'AA publishes R in its discounted First / Business group.'},
  W:{cabin:'Premium Economy',tier:'Purchased fare',typical:'Premium Economy',summary:'AA publishes W as a purchased Premium Economy booking class.'},
  P:{cabin:'Premium Economy',tier:'Purchased fare',typical:'Premium Economy',summary:'AA publishes P as a purchased Premium Economy booking class.'},
  Y:{cabin:'Main Cabin',tier:'Higher / full economy bucket',typical:'Full-fare Economy',summary:'AA publishes Y as Economy. Y is traditionally the highest unrestricted or near-unrestricted economy inventory bucket.'},
  H:{cabin:'Main Cabin',tier:'Economy',typical:'Higher Economy',summary:'AA publishes H as Economy / Main Cabin.'},
  K:{cabin:'Main Cabin',tier:'Economy',typical:'Economy',summary:'AA publishes K as Economy / Main Cabin.'},
  M:{cabin:'Main Cabin',tier:'Economy',typical:'Economy',summary:'AA publishes M as Economy / Main Cabin.'},
  L:{cabin:'Main Cabin',tier:'Economy',typical:'Economy',summary:'AA publishes L as Economy / Main Cabin.'},
  V:{cabin:'Main Cabin',tier:'Economy',typical:'Discount Economy',summary:'AA publishes V as Economy / Main Cabin.'},
  G:{cabin:'Main Cabin',tier:'Economy',typical:'Discount Economy',summary:'AA publishes G as Economy / Main Cabin.'},
  S:{cabin:'Main Cabin',tier:'Economy',typical:'Discount Economy',summary:'AA publishes S as Economy / Main Cabin.'},
  N:{cabin:'Main Cabin',tier:'Economy',typical:'Discount Economy',summary:'AA publishes N as Economy / Main Cabin.'},
  Q:{cabin:'Main Cabin',tier:'Economy',typical:'Discount Economy',summary:'AA publishes Q as Economy / Main Cabin.'},
  O:{cabin:'Main Cabin',tier:'Economy',typical:'Discount Economy',summary:'AA publishes O as Economy / Main Cabin.'},
  B:{cabin:'Basic Economy',tier:'Basic',typical:'Basic Economy',summary:'AA states that Basic Economy on AA-operated flights is booked in B. Codeshare booking classes can differ.'}
};

const groups = [
  ['F, J','Full-fare First / Business'],['A, C, D, I, R','Discounted First / Business'],['W, P','Premium Economy'],
  ['Y, H, K, M, L, V, G, S, N, Q, O','Main Cabin / Economy'],['B','Basic Economy']
];

document.getElementById('classGrid').innerHTML = groups.map(([letters,name])=>`<div class="class-tile"><div class="letters">${letters}</div><div class="name">${name}</div></div>`).join('');

const position8 = {
  '1':{channel:'Standard fare — third-party technology',detail:'AA documented 1 as the first numeric viewership value for fares transactable through third-party technology (EDIFACT + NDC).' },
  '2':{channel:'Standard fare — third-party technology',detail:'AA documented 2 as a numeric third-party technology viewership value.'},
  '3':{channel:'Standard fare — third-party technology',detail:'AA documented 3 as a numeric third-party technology viewership value.'},
  '4':{channel:'Standard fare — third-party technology',detail:'AA documented 4 as a numeric third-party technology viewership value.'},
  '5':{channel:'Standard fare — third-party technology',detail:'AA documented 5 as a numeric third-party technology viewership value.'},
  '6':{channel:'Standard fare — third-party technology',detail:'AA documented 6 as a numeric third-party technology viewership value.'},
  '7':{channel:'Standard fare — third-party technology',detail:'AA documented 7 as a numeric third-party technology viewership value.'},
  '8':{channel:'Standard fare — third-party technology',detail:'AA documented 8 as a numeric third-party technology viewership value.'},
  '9':{channel:'Standard fare — third-party technology',detail:'AA documented 9 as a numeric third-party technology viewership value.'},
  '0':{channel:'Standard fare — third-party technology',detail:'AA documented 0 as a numeric third-party technology viewership value.'},
  Z:{channel:'Value fare — third-party modern retailing',detail:'AA mapped Z to Value fares distributed through NDC-enabled third-party modern retailing.'},
  Y:{channel:'Value fare — third-party modern retailing',detail:'AA mapped Y to Value fares distributed through NDC-enabled third-party modern retailing.'},
  X:{channel:'Value fare — third-party modern retailing',detail:'AA mapped X to Value fares distributed through NDC-enabled third-party modern retailing.'},
  W:{channel:'Value fare — third-party modern retailing',detail:'AA mapped W to Value fares distributed through NDC-enabled third-party modern retailing.'},
  V:{channel:'Value fare — third-party modern retailing',detail:'AA mapped V to Value fares distributed through NDC-enabled third-party modern retailing.'},
  U:{channel:'Value fare — third-party modern retailing',detail:'AA mapped U to Value fares distributed through NDC-enabled third-party modern retailing.'},
  T:{channel:'Value fare — third-party modern retailing',detail:'AA mapped T to Value fares distributed through NDC-enabled third-party modern retailing.'},
  S:{channel:'Value fare — third-party modern retailing',detail:'AA mapped S to Value fares distributed through NDC-enabled third-party modern retailing.'},
  Q:{channel:'Value fare — third-party modern retailing',detail:'AA mapped Q to Value fares distributed through NDC-enabled third-party modern retailing.'},
  R:{channel:'Value fare — third-party modern retailing',detail:'AA mapped R to Value fares distributed through NDC-enabled third-party modern retailing.'},
  A:{channel:'American-owned channel',detail:'AA mapped A to fares transactable in American-owned channels.'},
  B:{channel:'American-owned channel',detail:'AA mapped B to fares transactable in American-owned channels.'},
  D:{channel:'American-owned channel',detail:'AA mapped D to fares transactable in American-owned channels.'},
  E:{channel:'American-owned channel',detail:'AA mapped E to fares transactable in American-owned channels.'},
  G:{channel:'American-owned channel',detail:'AA mapped G to fares transactable in American-owned channels.'},
  J:{channel:'American-owned channel',detail:'AA mapped J to fares transactable in American-owned channels.'},
  K:{channel:'American-owned channel',detail:'AA mapped K to fares transactable in American-owned channels.'},
  M:{channel:'American-owned channel',detail:'AA mapped M to fares transactable in American-owned channels.'},
  N:{channel:'American-owned channel',detail:'AA mapped N to fares transactable in American-owned channels.'},
  P:{channel:'American-owned channel',detail:'AA mapped P to fares transactable in American-owned channels.'}
};

function clean(v){return v.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,20)}
function esc(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function badge(conf){const text={high:'AA confirmed',medium:'Documented pattern',likely:'Heuristic'}[conf]||'Heuristic';return `<em class="confidence ${conf}">${text}</em>`}

function token(label,value,conf='likely',chars='') { return {label,value,conf,chars}; }

function decodeFareBasis(code){
  const facts=[], tokens=[];
  if(code.length===1) return {facts,tokens};

  if(code.length>=7 && code[6]==='B') {
    facts.push(token('AA fare brand','Basic Economy marker', 'high','7'));
    tokens.push(token('Character 7: B','AA explicitly identifies B in position 7 as Basic Economy. Basic Economy fare-type codes include EOU (one-way unbundled) and ERU (round-trip unbundled).','high','7'));
  }

  if(code.length>=8 && position8[code[7]]) {
    const p=position8[code[7]];
    facts.push(token('AA channel signal',p.channel,'high','8'));
    tokens.push(token(`Character 8: ${code[7]}`,`${p.detail} AA introduced this construct for U.S. Domestic and Mexico/Caribbean/Latin America fare filings in 2023.`,'high','8'));
  }

  const rest=code.slice(1);
  const patterns = [
    {re:/NR/, name:'NR', label:'Refundability clue', value:'“NR” commonly denotes non-refundable.', conf:'likely'},
    {re:/OW/, name:'OW', label:'Trip-type clue', value:'“OW” commonly denotes one-way.', conf:'likely'},
    {re:/RT/, name:'RT', label:'Trip-type clue', value:'“RT” commonly denotes round-trip.', conf:'likely'},
    {re:/CH/, name:'CH', label:'Passenger-type clue', value:'“CH” commonly denotes a child fare.', conf:'likely'},
    {re:/IN/, name:'IN', label:'Passenger-type clue', value:'“IN” commonly denotes an infant fare.', conf:'likely'}
  ];
  for(const p of patterns){
    const m=rest.match(p.re);
    if(m){
      const start=code.indexOf(p.name,1)+1;
      facts.push(token(p.label,p.value,p.conf,`${start}-${start+p.name.length-1}`));
      tokens.push(token(`${p.name} token`,p.value,p.conf,`${start}-${start+p.name.length-1}`));
    }
  }

  const nums=[21,14,7,3].map(String);
  for(const n of nums){
    const idx=rest.indexOf(n);
    if(idx!==-1){
      const pos=idx+2;
      facts.push(token('Advance-purchase clue',`${n} may indicate a ${n}-day advance-purchase requirement.`,'likely',n.length===1?`${pos}`:`${pos}-${pos+n.length-1}`));
      tokens.push(token(`${n} token`,`Industry fare-basis convention: ${n} often means ticketing at least ${n} days before departure. Confirm in the actual fare rules.`,'likely',n.length===1?`${pos}`:`${pos}-${pos+n.length-1}`));
      break;
    }
  }

  if(code.length>=2){
    const second=code[1];
    const season={P:'Peak-season clue',H:'High-season clue',K:'Shoulder-season clue',L:'Low-season clue',M:'Seasonality clue'}[second];
    if(season) tokens.push(token(`Character 2: ${second}`,`${season}. Historical AA fare-basis references have used these position-2 letters for seasonality; current filing can differ.`,'likely','2'));
  }
  if(code.length>=3){
    const third=code[2];
    const day={W:'Travel-day/time restriction clue',X:'Restricted weekday clue',B:'Weekend-travel clue',S:'Midweek-travel clue',F:'Specific-time clue',O:'Specific-time/date clue'}[third];
    if(day) tokens.push(token(`Character 3: ${third}`,`${day}. This comes from historical AA fare-basis decoding and should be treated as a clue, not a current published AA guarantee.`,'likely','3'));
  }

  return {facts,tokens};
}

function charStrip(code){
  return `<div class="char-strip" aria-label="Fare basis characters">${[...code].map((c,i)=>`<div class="char"><span>${esc(c)}</span><small>${i+1}</small></div>`).join('')}</div>`;
}

function render(code){
  const result=document.getElementById('result');
  if(!code){result.classList.add('hidden');return}
  const first=code[0], info=classes[first];
  if(!info){
    result.innerHTML=`<div class="result-card"><div class="result-top"><p class="eyebrow">Couldn’t identify</p><div class="code-display">${esc(code)}</div>${charStrip(code)}</div><div class="result-body"><p class="summary">“${esc(first)}” is not in American’s published purchased-fare booking-class groups used by this decoder.</p><div class="notice">Check that you entered the fare basis or booking class, not the six-character reservation record locator. Partner-operated segments can use the operating carrier’s booking-code conventions.</div></div></div>`;
    result.classList.remove('hidden');return;
  }

  const decoded=decodeFareBasis(code);
  const facts=[
    token('Booking class',`${first} — ${info.typical}`,'high','1'),
    token('Cabin / family',info.cabin,'high','1'),
    token('Fare level',info.tier,'high','1'),
    ...decoded.facts
  ];

  result.innerHTML=`<div class="result-card">
    <div class="result-top"><p class="eyebrow">Decoded</p><div class="code-display">${esc(code)}</div><span class="cabin">${esc(info.cabin)}</span>${code.length>1?charStrip(code):''}</div>
    <div class="result-body">
      <p class="summary">${esc(info.summary)}</p>
      <div class="facts">${facts.map(f=>`<div class="fact"><strong>${esc(f.label)}</strong><span>${esc(f.value)} ${badge(f.conf)}</span></div>`).join('')}</div>
      ${code.length>1?`<div class="breakdown"><h3>Position & token analysis</h3>${decoded.tokens.length?decoded.tokens.map(t=>`<div class="decode-row"><div class="decode-pos">${esc(t.chars||'—')}</div><div><strong>${esc(t.label)}</strong><p>${esc(t.value)}</p>${badge(t.conf)}</div></div>`).join(''):`<p class="muted-copy">No additional AA-specific or common fare-basis patterns were recognized. That does not mean the characters are meaningless; many are tariff-, market-, date-, and rule-specific.</p>`}</div>
      <div class="notice"><strong>Important:</strong> fare basis is not a complete contract decoder. The actual ATPCO/AA fare rules control refunds, changes, minimum/maximum stay, routing, combinability, ticketing deadlines, upgrades and other restrictions.</div>`:''}
    </div></div>`;
  result.classList.remove('hidden');
  result.scrollIntoView({behavior:'smooth',block:'nearest'});
}

const input=document.getElementById('fareCode');
document.getElementById('decodeBtn').addEventListener('click',()=>{input.value=clean(input.value);render(input.value)});
input.addEventListener('input',()=>{const p=input.selectionStart;input.value=clean(input.value);try{input.setSelectionRange(p,p)}catch{}});
input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();render(clean(input.value));}});
document.querySelectorAll('[data-code]').forEach(b=>b.addEventListener('click',()=>{input.value=b.dataset.code;render(b.dataset.code)}));
