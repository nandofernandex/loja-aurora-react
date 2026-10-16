import { ShoppingBag } from 'lucide-react';

export default function Header({ quantidade = 0 }) {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Aurora, início">
        <span className="brand-mark">a.</span><span>AURORA</span>
      </a>
      <nav className="main-nav" aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#produtos">Produtos</a>
        <a href="#contato">Contato</a>
      </nav>
      <a className="cart-link" href="#produtos" aria-label={`Sacola, ${quantidade} itens`}>
        <ShoppingBag size={19} strokeWidth={1.7} />
        <span className="cart-label">Sacola</span>
        <span className="cart-count">{quantidade}</span>
      </a>
    </header>
  );
}

