'use client';

import { useEffect, useRef, useState } from 'react';

const flavours = [
  { name: 'LEMON MINT', sub: 'ZESTY · REFRESHING · REVITALISING', tone: 'lime' },
  { name: 'HONEY GINGER', sub: 'WARM · BALANCED · SOOTHING', tone: 'honey' },
  { name: 'HIBISCUS', sub: 'FLORAL · TANGY · VIBRANT', tone: 'pink' },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const cursor = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!cursor.current) return;
      cursor.current.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 8}px, 0)`;
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <main>
      <div ref={cursor} className="cursor" />
      <header className="nav">
        <a href="#top" className="brand"><img src="/assets/sb-logo.png" alt="SB" /><span>SHIBAN</span></a>
        <nav className={menu ? 'open' : ''}>
          <a href="#story" onClick={() => setMenu(false)}>STORY</a>
          <a href="#beze" onClick={() => setMenu(false)}>BEZE</a>
          <a href="#teazz" onClick={() => setMenu(false)}>TEAZZ</a>
          <a href="#flavours" onClick={() => setMenu(false)}>FLAVOURS</a>
        </nav>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">☰</button>
      </header>

      <section id="top" className="hero">
        <video className="heroVideo" autoPlay muted loop playsInline poster="/assets/shiban-hero.png">
          <source src="/assets/shiban.mp4" type="video/mp4" />
        </video>
        <div className="heroShade" />
        <div className="heroContent">
          <div className="eyebrow">BEZE × TEAZZ · NASHIK</div>
          <img className="heroLogo" src="/assets/sb-logo.png" alt="SB monogram" />
          <h1>SHIBAN</h1>
          <p>Born in the spirit of Nashik.<br/><em>Taste the Unexpected.</em></p>
          <a className="pill" href="#story">ENTER THE EXPERIENCE <span>↓</span></a>
        </div>
        <div className="scrollHint">SCROLL TO DISCOVER <span>↘</span></div>
      </section>

      <section id="story" className="story section">
        <div className="storyCopy">
          <span className="kicker">01 / THE SPIRIT</span>
          <h2>Not just a drink.<br/><i>A mood.</i></h2>
          <p>SHIBAN brings the wildness of Nashik into two unexpected worlds: the expressive fruit wines of BEZE and the sparkling botanical energy of TEAZZ.</p>
          <div className="ticker"><span>NA·SHIK</span><span>GROWN HERE</span><span>MADE DIFFERENT</span><span>TASTE UNEXPECTED</span></div>
        </div>
        <div className="storyVisual"><img src="/assets/shiban-hero.png" alt="SHIBAN in the Nashik landscape" /></div>
      </section>

      <section id="beze" className="world beze">
        <div className="worldImage" style={{backgroundImage:"url('/assets/beze.jpg')"}} />
        <div className="worldOverlay" />
        <div className="worldCopy">
          <span className="kicker">02 / THE WILD SIDE</span>
          <h2>BEZE</h2><div className="descriptor">FRUIT WINE</div>
          <p>Two bold expressions. Guava and Tomato. A familiar idea, turned completely unexpected.</p>
          <div className="chips"><span>GUAVA</span><span>TOMATO</span></div>
        </div>
        <div className="stamp">TASTE<br/><b>WILD</b></div>
      </section>

      <section id="teazz" className="world teazz">
        <div className="worldImage" style={{backgroundImage:"url('/assets/teazz.jpg')"}} />
        <div className="worldOverlay" />
        <div className="worldCopy">
          <span className="kicker">03 / THE SPARK</span>
          <h2>TEAZZ</h2><div className="descriptor">SPARKLING GREEN TEA</div>
          <p>Green tea meets botanicals, bubbles and attitude. Fresh, colourful and made for the next mood.</p>
          <div className="chips"><span>LEMON MINT</span><span>HONEY GINGER</span><span>HIBISCUS</span></div>
        </div>
      </section>

      <section id="flavours" className="flavour section">
        <div className="sectionTop"><span className="kicker">04 / FLAVOUR LAB</span><span>DRAG / TAP TO SWITCH</span></div>
        <h2>WHAT HAPPENS WHEN<br/><span>TRADITION GETS UNEXPECTED?</span></h2>
        <div className="flavourGrid">
          <div className="flavourList">
            {flavours.map((f, i) => <button key={f.name} className={active===i?'active':''} onClick={()=>setActive(i)}><span>0{i+1}</span><strong>{f.name}</strong><small>{f.sub}</small><b>↗</b></button>)}
          </div>
          <div className={`flavourOrb ${flavours[active].tone}`}><div className="orbRing"/><div className="orbText">{flavours[active].name}<small>{flavours[active].sub}</small></div></div>
        </div>
      </section>

      <section className="videoReturn">
        <video autoPlay muted loop playsInline poster="/assets/shiban-hero.png"><source src="/assets/shiban.mp4" type="video/mp4" /></video>
        <div className="videoWords"><span>THIS IS</span><strong>SHIBAN</strong><em>Taste the Unexpected.</em></div>
      </section>

      <section className="final section">
        <img src="/assets/sb-logo.png" alt="SB" />
        <div className="kicker">BEZE × TEAZZ</div>
        <h2>YOUR MOOD.<br/>YOUR FLAVOUR.<br/><i>YOUR SHIBAN.</i></h2>
        <div className="finalActions"><a className="pill dark" href="#beze">EXPLORE BEZE ↗</a><a className="pill dark" href="#teazz">EXPLORE TEAZZ ↗</a></div>
        <footer><span>© 2026 SHIBAN</span><span>BORN IN NASHIK</span><span>INSTAGRAM ↗</span></footer>
      </section>
    </main>
  );
}
