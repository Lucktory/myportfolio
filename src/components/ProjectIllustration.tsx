'use client';

/* Project illustrations — bold, immediately readable at a glance */

interface Props { id: string; type: 'professional' | 'personal'; }

const C  = '#f97316';   // orange
const P  = '#6366f1';   // indigo
const G  = '#22c55e';   // green
const BG = '#06070d';

function Wrap({ children, accent = C }: { children: React.ReactNode; accent?: string }) {
  return (
    <svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', width: '100%' }}>
      <defs>
        <radialGradient id={`rg-${accent.replace('#','')}`} cx="50%" cy="50%" r="70%">
          <stop offset="0%"   stopColor={accent} stopOpacity="0.12" />
          <stop offset="100%" stopColor={BG}      stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="220" fill={BG} />
      <rect width="600" height="220" fill={`url(#rg-${accent.replace('#','')})`} />
      {children}
    </svg>
  );
}

/* ── 01 RAG Document Q&A ──────────────────────────────────────────────── */
function I01() {
  return (
    <Wrap accent={C}>
      {/* Document */}
      <g transform="translate(60,30)">
        <rect width="110" height="140" rx="8" fill="#0d1520" stroke={C} strokeWidth="2"/>
        <rect x="14" y="20" width="82" height="8" rx="3" fill={C} fillOpacity=".6"/>
        {[34,48,62,76,90,104,118].map(y=>(
          <rect key={y} x="14" y={y} width={y<76?82:55} height="6" rx="2" fill="rgba(255,255,255,0.07)"/>
        ))}
        <text x="55" y="155" textAnchor="middle" fill={C} fontSize="11" fontFamily="sans-serif" fontWeight="700" opacity=".8">Document</text>
      </g>

      {/* Arrow */}
      <path d="M 182 100 L 218 100" stroke={C} strokeWidth="3" strokeLinecap="round" markerEnd="url(#a1)"/>
      <defs><marker id="a1" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill={C}/>
      </marker></defs>

      {/* Brain / Vector DB */}
      <g transform="translate(230,60)">
        <circle cx="60" cy="60" r="55" fill="#0d1520" stroke={C} strokeWidth="2"/>
        {/* hexagon nodes */}
        {Array.from({length:6}).map((_,i)=>{
          const a = (i/6)*Math.PI*2 - Math.PI/2;
          return <circle key={i} cx={60+38*Math.cos(a)} cy={60+38*Math.sin(a)} r="7" fill={C} fillOpacity=".7"/>;
        })}
        {Array.from({length:6}).map((_,i)=>{
          const a1=(i/6)*Math.PI*2-Math.PI/2, a2=((i+1)/6)*Math.PI*2-Math.PI/2;
          return <line key={i} x1={60+38*Math.cos(a1)} y1={60+38*Math.sin(a1)} x2={60+38*Math.cos(a2)} y2={60+38*Math.sin(a2)} stroke={C} strokeWidth="1.5" strokeOpacity=".35"/>;
        })}
        <circle cx="60" cy="60" r="14" fill={C} fillOpacity=".15" stroke={C} strokeWidth="1.5"/>
        <text x="60" y="56" textAnchor="middle" fill={C} fontSize="8" fontFamily="monospace" fontWeight="700">GPT-4</text>
        <text x="60" y="67" textAnchor="middle" fill={C} fontSize="7" fontFamily="monospace" opacity=".6">+ FAISS</text>
        <text x="60" y="135" textAnchor="middle" fill={C} fontSize="11" fontFamily="sans-serif" fontWeight="700" opacity=".8">RAG Engine</text>
      </g>

      {/* Arrow */}
      <path d="M 368 100 L 402 100" stroke={C} strokeWidth="3" strokeLinecap="round" markerEnd="url(#a1)"/>

      {/* Answer bubble */}
      <g transform="translate(410,40)">
        <rect width="148" height="100" rx="12" fill="#0d1520" stroke={C} strokeWidth="2"/>
        <polygon points="0,52 -14,45 -14,60" fill="#0d1520" stroke={C} strokeWidth="2" strokeLinejoin="round"/>
        <text x="74" y="28" textAnchor="middle" fill={C} fontSize="10" fontFamily="sans-serif" fontWeight="700" opacity=".7">Answer</text>
        {[40,55,70,84].map(y=>(
          <rect key={y} x="14" y={y} width={y===40?120:y===55?90:y===70?105:65} height="7" rx="3" fill="rgba(6,182,212,0.2)"/>
        ))}
        <text x="74" y="130" textAnchor="middle" fill={C} fontSize="11" fontFamily="sans-serif" fontWeight="700" opacity=".8">LLM Response</text>
      </g>
    </Wrap>
  );
}

/* ── 02 Multi-tenant Bot Config Platform ──────────────────────────────── */
function I02() {
  const nodes = [
    {x:60,  y:110, label:'User\nMessage', color:C},
    {x:200, y:55,  label:'Intent\nMatch',  color:C},
    {x:200, y:165, label:'Fallback\nFlow',  color:'rgba(6,182,212,0.4)'},
    {x:345, y:55,  label:'Auto\nReply',    color:G},
    {x:345, y:165, label:'Human\nAgent',   color:'rgba(255,255,255,0.3)'},
    {x:490, y:110, label:'Logged\nto DB',  color:P},
  ];
  const edges = [[0,1],[0,2],[1,3],[2,4],[3,5],[4,5]];
  return (
    <Wrap accent={C}>
      {/* tenant selector tabs */}
      {['Client A','Client B','Client C'].map((t,i)=>(
        <g key={i}>
          <rect x={30+i*110} y="8" width="90" height="22" rx="11"
            fill={i===0?'rgba(6,182,212,0.2)':'rgba(255,255,255,0.04)'}
            stroke={i===0?C:'rgba(255,255,255,0.1)'} strokeWidth={i===0?1.5:1}/>
          <text x={75+i*110} y="23" textAnchor="middle" fill={i===0?C:'rgba(255,255,255,0.3)'}
            fontSize="10" fontFamily="sans-serif" fontWeight="600">{t}</text>
        </g>
      ))}
      {edges.map(([a,b],i)=>(
        <line key={i}
          x1={nodes[a].x+60} y1={nodes[a].y}
          x2={nodes[b].x}    y2={nodes[b].y}
          stroke={C} strokeWidth="1.5" strokeOpacity=".3" strokeDasharray="5,3"/>
      ))}
      {nodes.map((n,i)=>(
        <g key={i}>
          <rect x={n.x} y={n.y-24} width="100" height="48" rx="10"
            fill="#0d1520" stroke={n.color} strokeWidth={i===0||i===3?2:1.2}/>
          {n.label.split('\n').map((line,li)=>(
            <text key={li} x={n.x+50} y={n.y+(li-0.3)*14}
              textAnchor="middle" fill={n.color}
              fontSize="10" fontFamily="sans-serif" fontWeight="700">{line}</text>
          ))}
        </g>
      ))}
      <text x="300" y="210" textAnchor="middle" fill={C} fontSize="11"
        fontFamily="sans-serif" fontWeight="700" opacity=".6">Drag-and-drop Flow Builder · React + FastAPI</text>
    </Wrap>
  );
}

/* ── 03 NLP Chatbot Pipeline ──────────────────────────────────────────── */
function I03() {
  const steps = [
    {label:'Input\nText',   color:'rgba(255,255,255,0.5)', x:30},
    {label:'Tokenize\n+ Clean', color:C, x:150},
    {label:'BERT\nEncode',  color:C, x:275},
    {label:'Intent\nClassify', color:G, x:400},
    {label:'Route\nAgent',  color:P, x:510},
  ];
  return (
    <Wrap accent={C}>
      {/* incoming chat */}
      <rect x="30" y="20" width="105" height="44" rx="8"
        fill="#0d1520" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      <text x="83" y="38" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">"What is my</text>
      <text x="83" y="52" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">balance?"</text>

      {steps.map((s,i)=>(
        <g key={i}>
          {i>0&&(
            <path d={`M ${s.x} 110 L ${s.x-12} 110`} stroke={steps[i-1].color} strokeWidth="2" strokeLinecap="round" markerEnd="url(#anl)"/>
          )}
          <rect x={s.x} y="86" width="108" height="48" rx="10"
            fill="#0d1520" stroke={s.color} strokeWidth={i===3?2.5:1.8}/>
          {s.label.split('\n').map((line,li)=>(
            <text key={li} x={s.x+54} y={105+(li)*15}
              textAnchor="middle" fill={s.color}
              fontSize={i===3?11:10} fontFamily="sans-serif" fontWeight="700">{line}</text>
          ))}
        </g>
      ))}
      <defs><marker id="anl" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill={C}/>
      </marker></defs>

      {/* output paths */}
      <path d="M 518 86 L 518 55 L 560 55" stroke={G} strokeWidth="2" strokeDasharray="4,2"/>
      <rect x="560" y="40" width="32" height="28" rx="6" fill="#0d1520" stroke={G} strokeWidth="1.5"/>
      <text x="576" y="57" textAnchor="middle" fill={G} fontSize="9" fontFamily="sans-serif" fontWeight="700">Bot</text>

      <path d="M 518 134 L 518 165 L 560 165" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4,2"/>
      <rect x="560" y="150" width="32" height="28" rx="6" fill="#0d1520" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <text x="576" y="168" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="sans-serif">Human</text>

      <text x="300" y="210" textAnchor="middle" fill={C} fontSize="11"
        fontFamily="sans-serif" fontWeight="700" opacity=".6">spaCy · Hugging Face BERT · 3 Enterprise Clients</text>
    </Wrap>
  );
}

/* ── 04 Product Image ML Pipeline ────────────────────────────────────── */
function I04() {
  const colors = [C,P,G,'#f59e0b',C,P,G,C,P];
  return (
    <Wrap accent={C}>
      {/* S3 image grid */}
      <text x="75" y="22" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="sans-serif" fontWeight="600">S3 Images</text>
      {Array.from({length:9}).map((_,i)=>{
        const col=i%3, row=Math.floor(i/3);
        return (
          <g key={i}>
            <rect x={20+col*48} y={28+row*48} width="42" height="42" rx="6"
              fill={`rgba(${colors[i]==='#06b6d4'?'6,182,212':colors[i]==='#8b5cf6'?'139,92,246':colors[i]==='#10b981'?'16,185,129':'245,158,11'},0.18)`}
              stroke={colors[i]} strokeWidth="1.2" strokeOpacity=".5"/>
            <text x={41+col*48} y={52+row*48} textAnchor="middle" fill={colors[i]} fontSize="8" fontFamily="sans-serif" opacity=".7">IMG</text>
          </g>
        );
      })}

      {/* arrow */}
      <path d="M 168 110 L 200 110" stroke={C} strokeWidth="3" markerEnd="url(#a4)" strokeLinecap="round"/>
      <defs><marker id="a4" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill={C}/>
      </marker></defs>
      <text x="184" y="100" textAnchor="middle" fill={C} fontSize="8" fontFamily="monospace" opacity=".5">trigger</text>

      {/* CNN layers */}
      <text x="260" y="22" textAnchor="middle" fill={C} fontSize="10" fontFamily="sans-serif" fontWeight="600">TensorFlow CNN</text>
      {[0,1,2,3,4].map(i=>(
        <rect key={i} x={210+i*26} y={35+i*8} width="18" height={150-i*16} rx="3"
          fill={`rgba(6,182,212,${0.45-i*0.06})`} stroke={C} strokeWidth="1" strokeOpacity=".6"/>
      ))}

      {/* arrow */}
      <path d="M 340 110 L 372 110" stroke={C} strokeWidth="3" markerEnd="url(#a4)" strokeLinecap="round"/>

      {/* model versions */}
      <text x="460" y="22" textAnchor="middle" fill={C} fontSize="10" fontFamily="sans-serif" fontWeight="600">Model Registry</text>
      {['v3.2  ● active','v3.1  archived','v3.0  archived'].map((label,i)=>(
        <g key={i}>
          <rect x="382" y={32+i*52} width="156" height="40" rx="8"
            fill={i===0?'rgba(6,182,212,0.12)':'#0d1520'}
            stroke={C} strokeWidth={i===0?2:0.8} strokeOpacity={i===0?1:0.3}/>
          <text x="460" y={56+i*52} textAnchor="middle"
            fill={i===0?C:'rgba(255,255,255,0.25)'}
            fontSize="10" fontFamily="monospace" fontWeight={i===0?'700':'400'}>{label}</text>
        </g>
      ))}
      <text x="300" y="210" textAnchor="middle" fill={C} fontSize="11"
        fontFamily="sans-serif" fontWeight="700" opacity=".6">Retrain cycle: 2 weeks → 4 days · Docker · EC2 GPU</text>
    </Wrap>
  );
}

/* ── 05 Image Similarity REST API ────────────────────────────────────── */
function I05() {
  const results = [
    {x:210,y:25, score:'97%', color:C},
    {x:330,y:25, score:'91%', color:C},
    {x:450,y:25, score:'84%', color:C},
    {x:210,y:125,score:'79%', color:'rgba(6,182,212,0.5)'},
    {x:330,y:125,score:'72%', color:'rgba(6,182,212,0.4)'},
    {x:450,y:125,score:'65%', color:'rgba(6,182,212,0.3)'},
  ];
  return (
    <Wrap accent={C}>
      {/* query image */}
      <text x="90" y="20" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="sans-serif" fontWeight="600">Query Image</text>
      <rect x="30" y="28" width="120" height="120" rx="10"
        fill="rgba(6,182,212,0.15)" stroke={C} strokeWidth="2.5"/>
      <text x="90" y="82" textAnchor="middle" fill={C} fontSize="28">👗</text>
      <text x="90" y="105" textAnchor="middle" fill={C} fontSize="9" fontFamily="sans-serif" opacity=".6">product photo</text>
      <path d="M 154 88 L 200 88" stroke={C} strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#a5)"/>
      <defs><marker id="a5" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill={C}/>
      </marker></defs>

      {/* results grid */}
      <text x="395" y="20" textAnchor="middle" fill={C} fontSize="10" fontFamily="sans-serif" fontWeight="600" opacity=".7">Similar Results — Ranked</text>
      {results.map((r,i)=>(
        <g key={i}>
          <rect x={r.x} y={r.y} width="100" height="88" rx="8"
            fill="#0d1520" stroke={r.color} strokeWidth="1.5"/>
          <text x={r.x+50} y={r.y+48} textAnchor="middle" fill={r.color} fontSize="20">{['👔','👕','🧥','👗','🧣','🧤'][i]}</text>
          <rect x={r.x} y={r.y+70} width="100" height="18" rx="0 0 8 8"
            fill={`rgba(6,182,212,0.15)`}/>
          <text x={r.x+50} y={r.y+82} textAnchor="middle" fill={r.color} fontSize="10" fontFamily="monospace" fontWeight="700">{r.score}</text>
        </g>
      ))}
      <text x="300" y="210" textAnchor="middle" fill={C} fontSize="11"
        fontFamily="sans-serif" fontWeight="700" opacity=".6">Flask API · Redis cache · {"<"} 300ms · 12+ e-commerce clients</text>
    </Wrap>
  );
}

/* ── 06 CRM Webhook Integration ──────────────────────────────────────── */
function I06() {
  const crms = [
    {label:'Salesforce', icon:'☁️', y:40},
    {label:'Zoho CRM',   icon:'🟠', y:100},
    {label:'HubSpot',    icon:'🟠', y:160},
  ];
  return (
    <Wrap accent={C}>
      {/* Zopim source */}
      <rect x="20" y="65" width="130" height="90" rx="12"
        fill="rgba(6,182,212,0.1)" stroke={C} strokeWidth="2"/>
      <text x="85" y="100" textAnchor="middle" fill={C} fontSize="14" fontFamily="sans-serif" fontWeight="800">Zopim</text>
      <text x="85" y="118" textAnchor="middle" fill={C} fontSize="10" fontFamily="sans-serif" opacity=".6">Chat Events</text>
      <text x="85" y="135" textAnchor="middle" fill={C} fontSize="9" fontFamily="monospace" opacity=".4">Django webhook</text>

      {/* queue hub */}
      <path d="M 153 110 L 200 110" stroke={C} strokeWidth="2.5" markerEnd="url(#a6)"/>
      <defs><marker id="a6" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill={C}/>
      </marker></defs>
      <rect x="205" y="72" width="140" height="76" rx="12" fill="#0d1520" stroke={C} strokeWidth="2"/>
      <text x="275" y="103" textAnchor="middle" fill={C} fontSize="12" fontFamily="sans-serif" fontWeight="700">Message</text>
      <text x="275" y="119" textAnchor="middle" fill={C} fontSize="12" fontFamily="sans-serif" fontWeight="700">Queue</text>
      <text x="275" y="136" textAnchor="middle" fill={C} fontSize="9" fontFamily="monospace" opacity=".5">retry + backoff</text>

      {/* hub → CRMs */}
      {crms.map((crm,i)=>(
        <g key={i}>
          <path d={`M 347 110 L 392 ${crm.y+30}`} stroke={C} strokeWidth="2" strokeOpacity=".6" markerEnd="url(#a6)"/>
          <rect x="395" y={crm.y} width="170" height="60" rx="10"
            fill="#0d1520" stroke={C} strokeWidth="1.5" strokeOpacity=".6"/>
          <text x="480" y={crm.y+30} textAnchor="middle" fill={C} fontSize="12" fontFamily="sans-serif" fontWeight="700">{crm.label}</text>
          <text x="480" y={crm.y+46} textAnchor="middle" fill={C} fontSize="9" fontFamily="monospace" opacity=".4">REST API sync</text>
        </g>
      ))}
      <text x="300" y="210" textAnchor="middle" fill={C} fontSize="11"
        fontFamily="sans-serif" fontWeight="700" opacity=".6">3 CRM platforms · Queue-based delivery · Integration tests</text>
    </Wrap>
  );
}

/* ── 07 Keyword Auto-Response Engine ─────────────────────────────────── */
function I07() {
  return (
    <Wrap accent={C}>
      {/* incoming message */}
      <rect x="20" y="30" width="220" height="54" rx="10"
        fill="#0d1520" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      <text x="35" y="53" fill="rgba(255,255,255,0.35)" fontSize="13" fontFamily="sans-serif">Hi, what are your </text>
      {/* highlighted keyword */}
      <rect x="35" y="60" width="72" height="18" rx="5" fill="rgba(6,182,212,0.3)"/>
      <text x="71" y="74" textAnchor="middle" fill={C} fontSize="13" fontFamily="sans-serif" fontWeight="800">hours?</text>

      {/* rule engine box */}
      <rect x="268" y="15" width="180" height="90" rx="12"
        fill="rgba(6,182,212,0.08)" stroke={C} strokeWidth="2"/>
      <text x="358" y="42" textAnchor="middle" fill={C} fontSize="10" fontFamily="sans-serif" fontWeight="600" opacity=".6">RULE ENGINE</text>
      <rect x="284" y="50" width="64" height="22" rx="8" fill="rgba(6,182,212,0.25)"/>
      <text x="316" y="65" textAnchor="middle" fill={C} fontSize="11" fontFamily="monospace" fontWeight="700">hours</text>
      <text x="362" y="65" fill={C} fontSize="12" fontFamily="sans-serif" opacity=".5">→ template #3</text>
      <text x="358" y="90" textAnchor="middle" fill={C} fontSize="9" fontFamily="monospace" opacity=".4">priority: HIGH</text>
      <path d="M 243 57 L 266 57" stroke={C} strokeWidth="2.5" markerEnd="url(#a7)"/>
      <defs><marker id="a7" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill={C}/>
      </marker></defs>

      {/* auto-reply bubble */}
      <path d="M 358 107 L 358 130" stroke={C} strokeWidth="2.5" markerEnd="url(#a7)"/>
      <rect x="168" y="134" width="310" height="60" rx="12"
        fill="rgba(6,182,212,0.1)" stroke={C} strokeWidth="2"/>
      <text x="323" y="157" textAnchor="middle" fill={C} fontSize="11" fontFamily="sans-serif" fontWeight="700" opacity=".7">AUTO-REPLY</text>
      <text x="323" y="176" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="sans-serif">We're open Mon–Fri, 9am–6pm SGT.</text>

      {/* priority stack */}
      {['P1: hours','P2: pricing','P3: help'].map((l,i)=>(
        <g key={i}>
          <rect x="480" y={18+i*55} width="110" height="44" rx="8"
            fill={i===0?'rgba(6,182,212,0.12)':'#0d1520'}
            stroke={C} strokeWidth={i===0?2:0.8} strokeOpacity={i===0?1:0.3}/>
          <text x="535" y={44+i*55} textAnchor="middle"
            fill={i===0?C:'rgba(255,255,255,0.25)'}
            fontSize="10" fontFamily="monospace" fontWeight={i===0?'700':'400'}>{l}</text>
        </g>
      ))}
      <text x="300" y="210" textAnchor="middle" fill={C} fontSize="11"
        fontFamily="sans-serif" fontWeight="700" opacity=".6">Python · Django · Keyword matching · Priority routing</text>
    </Wrap>
  );
}

/* ── 08 DocQuery PDF Tool ─────────────────────────────────────────────── */
function I08() {
  return (
    <Wrap accent={P}>
      {/* PDF stack */}
      {[2,1,0].map(i=>(
        <g key={i} transform={`translate(${20+i*8},${15+i*8})`}>
          <rect width="110" height="140" rx="8" fill="#0d1520"
            stroke={i===0?P:'rgba(139,92,246,0.3)'} strokeWidth={i===0?2:1}/>
          <rect x="10" y="10" width="90" height="14" rx="4"
            fill={i===0?'rgba(139,92,246,0.3)':'rgba(255,255,255,0.04)'}/>
          <text x="55" y="22" textAnchor="middle" fill={i===0?P:'rgba(139,92,246,0.2)'}
            fontSize="8" fontFamily="monospace">PDF</text>
          {[32,46,60,74,88,102,116].map(y=>(
            <rect key={y} x="10" y={y} width={y<60?90:60} height="6" rx="2"
              fill={i===0?'rgba(139,92,246,0.15)':'rgba(255,255,255,0.03)'}/>
          ))}
        </g>
      ))}

      {/* FAISS vector store */}
      <circle cx="280" cy="100" r="60" fill="#0d1520" stroke={P} strokeWidth="2"/>
      <text x="280" y="90" textAnchor="middle" fill={P} fontSize="13" fontFamily="sans-serif" fontWeight="800">FAISS</text>
      <text x="280" y="108" textAnchor="middle" fill={P} fontSize="10" fontFamily="sans-serif" opacity=".6">Vector Store</text>
      {Array.from({length:8}).map((_,i)=>{
        const a=(i/8)*Math.PI*2;
        return <circle key={i} cx={280+46*Math.cos(a)} cy={100+46*Math.sin(a)} r="5"
          fill={P} fillOpacity=".5"/>;
      })}
      <path d="M 147 100 L 217 100" stroke={P} strokeWidth="2.5" strokeDasharray="5,3" markerEnd="url(#a8)"/>
      <path d="M 343 100 L 400 100" stroke={P} strokeWidth="2.5" strokeDasharray="5,3" markerEnd="url(#a8)"/>
      <defs><marker id="a8" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill={P}/>
      </marker></defs>

      {/* Streamlit UI */}
      <rect x="404" y="30" width="178" height="140" rx="10" fill="#0d1520" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5"/>
      <rect x="404" y="30" width="178" height="26" rx="10" fill="rgba(139,92,246,0.2)"/>
      <text x="493" y="47" textAnchor="middle" fill={P} fontSize="10" fontFamily="sans-serif" fontWeight="700">Streamlit UI</text>
      {/* question input */}
      <rect x="416" y="68" width="154" height="24" rx="6"
        fill="rgba(255,255,255,0.03)" stroke="rgba(139,92,246,0.3)" strokeWidth="1"/>
      <text x="426" y="84" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="sans-serif">Ask anything…</text>
      {/* answer lines */}
      {[104,118,132,146].map(y=>(
        <rect key={y} x="416" y={y} width={y===104?140:y===118?100:y===132?120:80} height="7" rx="3"
          fill="rgba(139,92,246,0.18)"/>
      ))}

      <text x="300" y="210" textAnchor="middle" fill={P} fontSize="11"
        fontFamily="sans-serif" fontWeight="700" opacity=".6">LangChain · sentence-transformers · Became 2023 RAG POC</text>
    </Wrap>
  );
}

/* ── 09 Telegram Expense Bot ─────────────────────────────────────────── */
function I09() {
  const bars = [
    {label:'Food',   h:80, color:P},
    {label:'Trans',  h:55, color:C},
    {label:'Groc',   h:65, color:G},
    {label:'Dine',   h:95, color:P},
    {label:'Util',   h:45, color:C},
    {label:'Other',  h:35, color:G},
  ];
  const msgs = [
    {text:'lunch 12.50',         out:false},
    {text:'✓ Food · $12.50',     out:true},
    {text:'grab 18.00',          out:false},
    {text:'✓ Transport · $18',   out:true},
    {text:'coffee 5.80',         out:false},
    {text:'✓ Food · $5.80',      out:true},
  ];
  return (
    <Wrap accent={P}>
      {/* Telegram panel */}
      <rect x="20" y="10" width="240" height="190" rx="14" fill="#0d1520" stroke="rgba(139,92,246,0.35)" strokeWidth="1.5"/>
      <rect x="20" y="10" width="240" height="36" rx="14" fill="rgba(139,92,246,0.2)"/>
      <circle cx="48" cy="28" r="12" fill="rgba(139,92,246,0.5)"/>
      <text x="48" y="33" textAnchor="middle" fill="#fff" fontSize="13">✈</text>
      <text x="130" y="23" textAnchor="middle" fill={P} fontSize="11" fontFamily="sans-serif" fontWeight="700">ExpenseBot</text>
      <text x="130" y="37" textAnchor="middle" fill={P} fontSize="8" fontFamily="sans-serif" opacity=".5">online</text>

      {msgs.map((m,i)=>(
        <g key={i}>
          <rect x={m.out?100:28} y={52+i*22} width={m.out?140:115} height="18" rx="7"
            fill={m.out?'rgba(139,92,246,0.25)':'rgba(255,255,255,0.06)'}
            stroke={m.out?'rgba(139,92,246,0.4)':'rgba(255,255,255,0.08)'} strokeWidth="1"/>
          <text x={m.out?108:36} y={65+i*22}
            fill={m.out?P:'rgba(255,255,255,0.45)'} fontSize="9" fontFamily="monospace">{m.text}</text>
        </g>
      ))}

      {/* bar chart */}
      <text x="420" y="22" textAnchor="middle" fill={P} fontSize="11" fontFamily="sans-serif" fontWeight="700" opacity=".7">Monthly Breakdown</text>
      {bars.map((b,i)=>(
        <g key={i}>
          <rect x={290+i*50} y={165-b.h} width="36" height={b.h} rx="5"
            fill={`${b.color}33`} stroke={b.color} strokeWidth="1.5" strokeOpacity=".7"/>
          <text x={308+i*50} y={175-b.h-4} textAnchor="middle" fill={b.color} fontSize="9" fontFamily="monospace" fontWeight="700">
            ${[145,118,92,168,74,58][i]}
          </text>
          <text x={308+i*50} y="180" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="sans-serif">{b.label}</text>
        </g>
      ))}
      <line x1="285" y1="165" x2="585" y2="165" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <text x="430" y="210" textAnchor="middle" fill={P} fontSize="11"
        fontFamily="sans-serif" fontWeight="700" opacity=".6">python-telegram-bot · PostgreSQL · Adopted internally at ViSenze</text>
    </Wrap>
  );
}

const MAP: Record<string, React.FC> = {
  '01': I01, '02': I02, '03': I03,
  '04': I04, '05': I05, '06': I06,
  '07': I07, '08': I08, '09': I09,
};

export default function ProjectIllustration({ id }: Props) {
  const Illust = MAP[id];
  if (!Illust) return null;
  return <Illust />;
}
