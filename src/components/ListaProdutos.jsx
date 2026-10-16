import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import CardProduto from './CardProduto.jsx';

const produtos = [
  { nome: 'Camisa Linho Sol', categoria: 'FEITO PARA DURAR', preco: '189,90', etiqueta: 'MAIS VENDIDO', tom: 'areia', imagem: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=80', alt: 'Camisa de linho clara em cabide' },
  { nome: 'Calça Reta Brisa', categoria: 'CONFORTO LEVE', preco: '229,90', etiqueta: '', tom: 'rosa', imagem: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80', alt: 'Calça de corte reto em tom neutro' },
  { nome: 'Bolsa Terra', categoria: 'DETALHE QUE FICA', preco: '159,90', etiqueta: 'NOVO', tom: 'verde', imagem: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80', alt: 'Bolsa feminina de couro caramelo' },
  { nome: 'Vestido Aurora', categoria: 'SEU NOVO FAVORITO', preco: '279,90', etiqueta: '', tom: 'azul', imagem: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80', alt: 'Vestido feminino em cor suave' },
  { nome: 'Blazer Horizonte', categoria: 'PRESENÇA SEM ESFORÇO', preco: '319,90', etiqueta: '', tom: 'amarelo', imagem: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80', alt: 'Blazer de alfaiataria neutro' },
  { nome: 'Tênis Caminho', categoria: 'VAI COM VOCÊ', preco: '249,90', etiqueta: 'ÚLTIMAS PEÇAS', tom: 'lilas', imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', alt: 'Tênis esportivo em destaque' },
];

export default function ListaProdutos({ onComprar }) {
  const [aviso, setAviso] = useState('');

  function comprar(produto) {
    onComprar();
    setAviso(`${produto.nome} adicionado à sacola`);
    window.setTimeout(() => setAviso(''), 2400);
  }

  return (
    <section className="products-section section-wrap" id="produtos">
      <div className="section-heading">
        <div><p className="eyebrow"><span className="eyebrow-line" /> ESCOLHIDOS PARA VOCÊ</p><h2>Peças com <em>presença.</em></h2></div>
        <a className="text-link" href="#contato">Ver coleção completa <ArrowRight size={16} /></a>
      </div>
      <div className="product-grid">{produtos.map((produto) => <CardProduto key={produto.nome} produto={produto} onComprar={comprar} />)}</div>
      <div className={`cart-toast ${aviso ? 'is-visible' : ''}`} role="status" aria-live="polite"><Check size={17} /> {aviso}</div>
    </section>
  );
}

