import { ArrowUpRight, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="footer-top"><div><a className="brand footer-brand" href="#inicio"><span className="brand-mark">a.</span><span>AURORA</span></a><p>Seu estilo floresce aqui.</p></div><div className="footer-cta"><p>Uma dose de inspiração<br />na sua caixa de entrada.</p><a href="mailto:oi@aurora.exemplo">Cadastre seu e-mail <ArrowUpRight size={16} /></a></div><a className="back-to-top" href="#inicio" aria-label="Voltar ao início"><ArrowUpRight size={19} /></a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Aurora Studio · Desenvolvido por <strong>Seu Nome</strong></span><div className="social-links"><a href="https://instagram.com" aria-label="Instagram fictício"><Instagram size={17} /> Instagram</a><a href="mailto:oi@aurora.exemplo"><Mail size={16} /> oi@aurora.exemplo</a></div><span className="footer-made">COM CARINHO, NO BRASIL <span>♡</span></span></div>
    </footer>
  );
}

