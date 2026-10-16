import { ArrowUpRight, Heart, Leaf, Sparkles } from 'lucide-react';

export default function Sobre() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-visual"><img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1300&q=82" alt="Editorial de moda com looks autorais" loading="lazy" /><span className="about-photo-label">UM JEITO MAIS LEVE DE VESTIR</span></div>
      <div className="about-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> UM POUCO SOBRE NÓS</p>
        <h2>Menos pressa.<br /><em>Mais presença.</em></h2>
        <p className="about-description">A Aurora nasceu da vontade de deixar a moda mais leve. Criamos peças versáteis, com bons materiais e atenção aos detalhes — para que vestir-se seja um momento seu, todos os dias.</p>
        <a className="text-link" href="#contato">Conheça nossa história <ArrowUpRight size={16} /></a>
        <div className="about-values"><div><Leaf size={18} /><span>Escolhas conscientes</span></div><div><Heart size={18} /><span>Feito com cuidado</span></div><div><Sparkles size={18} /><span>Seu estilo, suas regras</span></div></div>
      </div>
    </section>
  );
}

