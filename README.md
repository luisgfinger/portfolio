# Portfólio Pessoal

Aplicação web desenvolvida para servir como portfólio pessoal, reunindo apresentação profissional, projetos e canais de contato em uma interface moderna, responsiva e com suporte a tema claro/escuro.

Acesse em: https://luisgrandoportfolio.netlify.app/

## Sobre o projeto

Este projeto foi criado com foco em construir uma página pessoal para apresentar:

- quem eu sou
- minhas habilidades e experiências
- projetos desenvolvidos
- formas de contato

No estado atual, a base da interface já inclui uma navegação responsiva com menu mobile e alternância de tema persistida no navegador.

## Funcionalidades atuais

- navegação com links para `Home`, `Sobre`, `Projetos` e `Contato`
- menu hambúrguer para telas menores
- alternância entre tema claro e escuro
- persistência do tema escolhido com `localStorage`
- estrutura inicial pronta para expansão das seções do portfólio

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint

## Como executar o projeto

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Gerar build de produção

```bash
npm run build
```

### Visualizar build localmente

```bash
npm run preview
```

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera a build de produção
- `npm run preview`: executa a visualização da build
- `npm run lint`: analisa o código com ESLint

## Estrutura principal

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    buttons/
    layout/
  assets/
public/
```

## Objetivo

O objetivo deste portfólio é centralizar minha apresentação profissional em um único lugar, com identidade visual consistente, boa experiência em dispositivos móveis e uma base fácil de manter e evoluir.
