import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function Banner() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> COLEÇÃO ESSENCIAL · 2026</p>
        <h1>Vista o seu<br /><em>próprio jeito.</em></h1>
        <p className="hero-description">Peças para acompanhar o seu ritmo, feitas para você se sentir bem em qualquer versão de si.</p>
        <a className="button button-dark" href="#produtos">Descubra a coleção <ArrowUpRight size={17} /></a>
        <div className="hero-note"><span>01 / 03</span><span className="hero-note-line" /><span>Leveza para todos os dias</span></div>
      </div>
      <div className="hero-image-wrap">
        <img className="hero-image" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1300&q=85" alt="Modelo usando look contemporâneo em tons neutros" />
        <div className="hero-sticker"><span>feito para</span><strong>ser<br />você</strong><ArrowDownRight size={19} /></div>
        <span className="hero-image-caption">AURORA STUDIO · LOOK 01</span>
      </div>
      <div className="hero-side-label">MODA COM INTENÇÃO · DESDE 2021</div>
    </section>
  );
}

