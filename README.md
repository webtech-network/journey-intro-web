# Journey Intro Web

Extensão da [WebTech Journey](https://site-novo.apps.webtech.network/journey) para a disciplina
**Desenvolvimento de Interfaces Web (DIW)**. O site reúne módulos, guia de ambiente, exemplos
interativos e recursos de apoio.

## Stack

- HTML estático em `public/`
- Tailwind CSS 3.4 compilado para `public/assets/css/app.css`
- Montserrat, Geist e Geist Mono auto-hospedadas em `public/assets/fonts/`
- FontAwesome 6 (CDN) e Prism.js para ícones e realce de código
- JSON Server como backend simulado em `/api/*`

## Como rodar

```sh
npm install
npm start
```

`npm start` executa o `prestart`, que:

1. cria `server/db/db.json` a partir de `server/db/db_original.json`, se necessário;
2. compila o Tailwind para `public/assets/css/app.css`;
3. inicia o JSON Server em `http://localhost:3000`.

### CSS durante o desenvolvimento

```sh
npm run watch:css   # recompila ao salvar src/input.css ou HTML/JS
npm run build:css   # compilação minificada única
```

O CSS compilado é versionado para que o site funcione mesmo sem rodar o build. Sempre que
alterar `src/input.css` ou `tailwind.config.js`, rode `npm run build:css` antes de publicar.

## Estrutura

```
public/
  index.html, modulos.html, ambiente.html, exemplos.html, recursos.html
  exemplos/                 páginas de detalhe com preview + código
  apps/                     demos de Bootstrap/CSS/JS (conteúdo didático)
  apps/assets/app-shell.css tema compartilhado das demos
  assets/css/app.css        saída compilada do Tailwind
  assets/brand/             logo, hero e faixa de CTA oficiais
  assets/fonts/             woff2 auto-hospedados
  assets/js/main.js         layout compartilhado, menu, tabs, checklist, filtros
  assets/js/detail.js       split view e carregamento de código
src/input.css               tokens e componentes do design system
tailwind.config.js          mapeamento dos tokens para utilitários
server/                     banco, seed e rotas do JSON Server
```

## Design system

Os tokens ficam em `src/input.css` (`--wt-*`) e são expostos ao Tailwind em
`tailwind.config.js` (`brand`, `highlight`, `ink`, `surface`, `line`, etc.). Componentes
reutilizáveis usam o prefixo `.wt-`:

- layout: `wt-container`, `wt-section`, `wt-hero`, `wt-subheader`;
- ações: `wt-btn--action|primary|dark|outline`;
- conteúdo: `wt-card`, `wt-tag`, `wt-eyebrow`, `wt-code`, `wt-module`;
- formulários: `wt-field`, `wt-input`, `wt-select`, `wt-filter`.

Evite cores e espaçamentos avulsos; prefira os tokens e componentes existentes.

## Demos (`public/apps`)

As demos continuam sendo exemplos didáticos: o markup e o JavaScript de Bootstrap, Chart.js,
Mapbox e das APIs não foram reescritos. Apenas o **shell visual** é aplicado por
`apps/assets/app-shell.css`, carregado depois do CSS de cada app. Isso preserva o valor de
ensino do código exibido no painel “Código”.

## Token do Mapbox

A demo de mapa não lê `.env`. Para visualizá-la, abra:

```
/apps/mapa/?token=pk.seu_token
```

ou defina `MAPBOX_TOKEN` no topo do script em `public/apps/mapa/index.html`.
Sem token, a demo mostra uma mensagem explicativa em vez de uma tela em branco.

## API

As rotas são expostas sob `/api/*` via `server/api/routes.json`. Os dados de runtime ficam em
`server/db/db.json`, criado a partir de `server/db/db_original.json` e ignorado pelo Git.

## Contexto

Trabalho de alinhamento visual e de componentes com o novo site da WebTech Network
(issue #3), mantendo o conteúdo, as rotas e o comportamento das demos.
