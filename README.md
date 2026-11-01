# ATELIER STUDIO

Site de portfólio demonstrativo para um estúdio fictício de arquitetura, feito com React, TypeScript, Vite e Tailwind CSS.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

Para gerar e visualizar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicar na Vercel

Importe este repositório na Vercel. O preset Vite detecta automaticamente o comando `npm run build` e a pasta `dist`. A regra em `vercel.json` encaminha as rotas do React Router para a aplicação.

## Estrutura

- `src/components/`: navegação, rodapé, WhatsApp e briefing reutilizáveis.
- `src/data.ts`: conteúdo fictício dos projetos.
- `src/App.tsx`: páginas e rotas do site.
- `src/styles.css`: identidade visual e comportamento responsivo.
- `public/`: sitemap e robots.txt.

## Demonstração e limitações

O briefing valida os campos em etapas e registra os envios em `localStorage` no dispositivo atual. Não há backend, envio por e-mail nem painel de leads. O WhatsApp usa um número demonstrativo (`+55 11 99999-0000`), que deve ser substituído pelo número real antes da publicação. Os projetos e contatos são fictícios. As fotografias são carregadas do Unsplash; a conexão externa é necessária para exibi-las.

## Componente 21st.dev

A navegação responsiva inspirada no componente comunitário **NavBar**, de Mohit Sapat, disponível em [21st.dev](https://docs.21st.dev/%40mohitsapat/components/navbar/non-sticky-navbar), foi adaptada para a identidade editorial do projeto. A implementação usa CSS e React locais, sem adicionar dependências de animação.
