# Portfolio Pessoal

Aplicacao web desenvolvida para servir como portfolio pessoal, reunindo apresentacao profissional, projetos e canais de contato em uma interface moderna, responsiva e com suporte a tema claro/escuro.

## Sobre o projeto

Este projeto foi criado com foco em construir uma pagina pessoal para apresentar:

- quem eu sou
- minhas habilidades e experiencias
- projetos desenvolvidos
- formas de contato

No estado atual, a base da interface ja inclui uma navegacao responsiva com menu mobile e alternancia de tema persistida no navegador.

## Funcionalidades atuais

- navegacao com links para `Home`, `Sobre`, `Projetos` e `Contato`
- menu hamburguer para telas menores
- alternancia entre tema claro e escuro
- persistencia do tema escolhido com `localStorage`
- estrutura inicial pronta para expansao das secoes do portfolio

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint

## Como executar o projeto

### Pre-requisitos

- Node.js instalado
- npm instalado

### Instalacao

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Gerar build de producao

```bash
npm run build
```

### Visualizar build localmente

```bash
npm run preview
```

## Scripts disponiveis

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera a build de producao
- `npm run preview`: executa a visualizacao da build
- `npm run lint`: analisa o codigo com ESLint

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

O objetivo deste portfolio e centralizar minha apresentacao profissional em um unico lugar, com identidade visual consistente, boa experiencia em dispositivos moveis e uma base facil de manter e evoluir.

## Proximos passos

- adicionar a secao principal de apresentacao
- incluir cards de projetos com links
- criar secao de contato com redes sociais
- adicionar animacoes e refinamentos visuais
- publicar a aplicacao em producao
