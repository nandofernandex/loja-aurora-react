# Aurora — loja virtual demonstrativa

Projeto de loja virtual simples feito em React e Vite, com componentes separados e seis produtos de exemplo.

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de publicação:

```bash
npm run build
```

O resultado será criado na pasta `dist/`.

## Componentes

- `Header`: marca, links de navegação e contador da sacola.
- `Banner`: chamada principal da coleção e imagem de destaque.
- `CardProduto`: cartão reutilizável com foto, nome, preço e botão Comprar.
- `ListaProdutos`: catálogo de seis itens e interação de adicionar à sacola.
- `Sobre`: apresentação da Aurora e seus valores.
- `Footer`: contato, redes sociais fictícias e identificação do aluno.
- `App`: compõe a página e mantém o estado do contador da sacola.

## Personalização para entrega

No arquivo `src/components/Footer.jsx`, troque **Seu Nome** pelo nome do aluno. As fotos da loja estão incluídas em `public/images`.

## Publicar

1. Crie um repositório no GitHub e envie os arquivos desta pasta.
2. No Vercel, importe o repositório. O framework será detectado como Vite; use `npm run build` e `dist` como diretório de saída.
3. Após publicar, compartilhe o link do repositório e o endereço fornecido pelo Vercel.

O print da página inicial pode ser salvo após abrir a versão local ou publicada no navegador.

