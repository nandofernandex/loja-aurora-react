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
