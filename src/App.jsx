import { useState } from 'react';
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import ListaProdutos from './components/ListaProdutos.jsx';
import Sobre from './components/Sobre.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [itensNoCarrinho, setItensNoCarrinho] = useState(0);

  return (
    <>
      <Header quantidade={itensNoCarrinho} />
      <main>
        <Banner />
        <ListaProdutos onComprar={() => setItensNoCarrinho((quantidade) => quantidade + 1)} />
        <Sobre />
      </main>
      <Footer />
    </>
  );
}

