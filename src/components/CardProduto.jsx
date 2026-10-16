import { ArrowUpRight, Plus } from 'lucide-react';

export default function CardProduto({ produto, onComprar }) {
  return (
    <article className="product-card">
      <a className={`product-image product-image-${produto.tom}`} href="#contato" aria-label={`Ver ${produto.nome}`}>
        <img src={produto.imagem} alt={produto.alt} loading="lazy" />
        {produto.etiqueta && <span className="product-tag">{produto.etiqueta}</span>}
        <span className="product-view"><ArrowUpRight size={18} /></span>
      </a>
      <div className="product-info">
        <div><p className="product-category">{produto.categoria}</p><h3>{produto.nome}</h3></div>
        <span className="product-price">R$ {produto.preco}</span>
      </div>
      <button className="buy-button" onClick={() => onComprar(produto)}><span>Comprar</span><Plus size={17} /></button>
    </article>
  );
}

