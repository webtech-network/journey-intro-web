/* ============================================================
   Journey Intro Web — Explicações dos tópicos dos módulos
   Cada chave segue o padrão "mXX-N": módulo XX, tópico N (a partir de 1),
   na mesma ordem em que os tópicos aparecem em modulos.html.

   Campos:
     texto   → parágrafos de explicação (aceita <code>, <strong>, <em>)
     pontos  → lista de pontos-chave (opcional)
     codigo  → { lang, src } exemplo de código (opcional)
     dica    → observação final (opcional)
   ============================================================ */

window.TOPICOS = {
  /* ---------------- M01 · Fundamentos HTML ---------------- */
  "m01-1": {
    texto: [
      "Toda página HTML segue um esqueleto padrão. O navegador lê esse esqueleto de cima para baixo para saber em que idioma está a página, como interpretar os caracteres e o que deve ser mostrado na tela.",
      "A página é dividida em duas grandes partes: o <code>&lt;head&gt;</code>, com informações <em>sobre</em> a página (título da aba, codificação, links para CSS), e o <code>&lt;body&gt;</code>, com tudo o que o usuário <em>vê</em>.",
    ],
    pontos: [
      "<code>&lt;!DOCTYPE html&gt;</code> avisa ao navegador que o documento usa HTML5.",
      "<code>&lt;html lang=\"pt-br\"&gt;</code> é a raiz da página e define o idioma (ajuda leitores de tela e buscadores).",
      "<code>&lt;meta charset=\"UTF-8\"&gt;</code> garante que acentos e “ç” apareçam corretamente.",
      "<code>&lt;meta name=\"viewport\"&gt;</code> faz a página se ajustar à largura do celular.",
      "<code>&lt;title&gt;</code> é o texto que aparece na aba do navegador.",
    ],
    codigo: {
      lang: "html",
      src: `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha primeira página</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Olá, Mundo!</h1>
  <p>Este conteúdo aparece na tela.</p>

  <script src="app.js"></script>
</body>
</html>`,
    },
    dica: "No VS Code, digite <code>!</code> em um arquivo .html vazio e pressione Tab para gerar esse esqueleto automaticamente.",
  },

  "m01-2": {
    texto: [
      "Tags semânticas descrevem o <strong>significado</strong> do conteúdo, e não só a aparência. Em vez de usar <code>&lt;div&gt;</code> para tudo, usamos tags que dizem “isto é o cabeçalho”, “isto é o menu”, “isto é o conteúdo principal”.",
      "Isso melhora a acessibilidade (leitores de tela conseguem pular direto para o conteúdo), o SEO e a legibilidade do código.",
    ],
    pontos: [
      "<code>&lt;header&gt;</code>: topo da página ou de uma seção (logo, título).",
      "<code>&lt;nav&gt;</code>: bloco de links de navegação.",
      "<code>&lt;main&gt;</code>: conteúdo principal — apenas um por página.",
      "<code>&lt;section&gt;</code> e <code>&lt;article&gt;</code>: agrupam conteúdo relacionado / independente.",
      "<code>&lt;aside&gt;</code>: conteúdo complementar (barra lateral).",
      "<code>&lt;footer&gt;</code>: rodapé com créditos, contatos, links.",
    ],
    codigo: {
      lang: "html",
      src: `<body>
  <header>
    <h1>Meu Blog</h1>
    <nav>
      <a href="index.html">Início</a>
      <a href="sobre.html">Sobre</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Meu primeiro post</h2>
      <p>Conteúdo do post...</p>
    </article>
    <aside>Posts relacionados</aside>
  </main>

  <footer>© 2026 Meu Blog</footer>
</body>`,
    },
    dica: "Pergunte-se: “se eu tirasse todo o CSS, as tags ainda explicariam o que é cada parte?”. Se sim, a página está semântica.",
  },

  "m01-3": {
    texto: [
      "Estes são os elementos de texto mais usados. Os títulos vão de <code>&lt;h1&gt;</code> (mais importante) a <code>&lt;h6&gt;</code> e formam a hierarquia do conteúdo — como o sumário de um livro.",
      "Parágrafos usam <code>&lt;p&gt;</code>, listas podem ser não ordenadas (<code>&lt;ul&gt;</code>) ou ordenadas (<code>&lt;ol&gt;</code>), e links usam <code>&lt;a&gt;</code> com o atributo <code>href</code> indicando o destino.",
    ],
    pontos: [
      "Use um único <code>&lt;h1&gt;</code> por página e não pule níveis (h2 → h4).",
      "Cada item de lista fica dentro de um <code>&lt;li&gt;</code>.",
      "<code>target=\"_blank\"</code> abre o link em nova aba; combine com <code>rel=\"noopener\"</code>.",
      "Links internos podem apontar para um <code>id</code>: <code>href=\"#contato\"</code>.",
    ],
    codigo: {
      lang: "html",
      src: `<h1>Receita de bolo</h1>
<p>Um bolo simples e <strong>rápido</strong> de fazer.</p>

<h2>Ingredientes</h2>
<ul>
  <li>2 ovos</li>
  <li>1 xícara de açúcar</li>
  <li>2 xícaras de farinha</li>
</ul>

<h2>Modo de preparo</h2>
<ol>
  <li>Bata os ovos com o açúcar.</li>
  <li>Adicione a farinha aos poucos.</li>
  <li>Asse por 40 minutos.</li>
</ol>

<a href="https://pt.wikipedia.org/wiki/Bolo" target="_blank" rel="noopener">
  Saiba mais sobre bolos
</a>`,
    },
  },

  "m01-4": {
    texto: [
      "Imagens são inseridas com a tag <code>&lt;img&gt;</code>, que não tem fechamento. O atributo <code>src</code> indica o caminho do arquivo e o <code>alt</code> descreve a imagem para quem não pode vê-la.",
      "Para áudio e vídeo, o HTML5 oferece as tags <code>&lt;audio&gt;</code> e <code>&lt;video&gt;</code>, que já vêm com controles de play/pause nativos do navegador.",
    ],
    pontos: [
      "O <code>alt</code> é obrigatório para acessibilidade; se a imagem for decorativa, use <code>alt=\"\"</code>.",
      "Definir <code>width</code> e <code>height</code> evita que a página “pule” enquanto a imagem carrega.",
      "<code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> associam uma legenda à imagem.",
      "O atributo <code>controls</code> exibe os controles do player de mídia.",
    ],
    codigo: {
      lang: "html",
      src: `<figure>
  <img src="img/praia.jpg"
       alt="Praia de areia branca ao pôr do sol"
       width="600" height="400">
  <figcaption>Pôr do sol em Porto Seguro</figcaption>
</figure>

<video src="media/aula.mp4" controls width="640">
  Seu navegador não suporta vídeo.
</video>

<audio src="media/podcast.mp3" controls></audio>`,
    },
    dica: "Caminhos relativos (<code>img/foto.jpg</code>) partem da pasta do arquivo HTML. Se a imagem não aparecer, confira a pasta e as maiúsculas/minúsculas do nome.",
  },

  "m01-5": {
    texto: [
      "Formulários permitem que o usuário envie dados: login, cadastro, busca, contato. Tudo fica dentro de <code>&lt;form&gt;</code>, e cada campo é normalmente um <code>&lt;input&gt;</code> com um <code>type</code> adequado.",
      "Cada campo deve ter um <code>&lt;label&gt;</code> ligado a ele pelo atributo <code>for</code> (que aponta para o <code>id</code> do campo). Assim, clicar no texto foca o campo e leitores de tela anunciam o nome correto.",
    ],
    pontos: [
      "Tipos úteis: <code>text</code>, <code>email</code>, <code>password</code>, <code>number</code>, <code>date</code>, <code>checkbox</code>, <code>radio</code>.",
      "<code>required</code>, <code>minlength</code> e <code>pattern</code> fazem validação nativa no navegador.",
      "<code>&lt;select&gt;</code> cria listas de opções; <code>&lt;textarea&gt;</code>, textos longos.",
      "O atributo <code>name</code> identifica o valor quando o formulário é enviado.",
    ],
    codigo: {
      lang: "html",
      src: `<form action="/cadastro" method="post">
  <label for="nome">Nome</label>
  <input type="text" id="nome" name="nome" required>

  <label for="email">E-mail</label>
  <input type="email" id="email" name="email" required>

  <label for="curso">Curso</label>
  <select id="curso" name="curso">
    <option value="si">Sistemas de Informação</option>
    <option value="cc">Ciência da Computação</option>
  </select>

  <label>
    <input type="checkbox" name="termos" required>
    Aceito os termos
  </label>

  <button type="submit">Cadastrar</button>
</form>`,
    },
  },

  "m01-6": {
    texto: [
      "Tabelas servem para exibir <strong>dados tabulares</strong> — informações organizadas em linhas e colunas, como uma planilha. Não devem ser usadas para montar o layout da página (para isso existe CSS).",
      "Uma tabela é formada por linhas (<code>&lt;tr&gt;</code>) que contêm células de cabeçalho (<code>&lt;th&gt;</code>) ou de dados (<code>&lt;td&gt;</code>). As seções <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> e <code>&lt;tfoot&gt;</code> organizam o conteúdo.",
    ],
    pontos: [
      "<code>&lt;caption&gt;</code> dá um título à tabela.",
      "<code>colspan</code> e <code>rowspan</code> fazem uma célula ocupar várias colunas/linhas.",
      "<code>scope=\"col\"</code> no <code>&lt;th&gt;</code> ajuda leitores de tela a relacionar cabeçalho e dados.",
    ],
    codigo: {
      lang: "html",
      src: `<table>
  <caption>Notas do semestre</caption>
  <thead>
    <tr>
      <th scope="col">Aluno</th>
      <th scope="col">Prova</th>
      <th scope="col">Trabalho</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ana</td>
      <td>8,5</td>
      <td>9,0</td>
    </tr>
    <tr>
      <td>Bruno</td>
      <td>7,0</td>
      <td>8,5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Média da turma: 8,25</td>
    </tr>
  </tfoot>
</table>`,
    },
  },

  /* ---------------- M02 · CSS e Layouts ---------------- */
  "m02-1": {
    texto: [
      "Seletores dizem <strong>quais elementos</strong> uma regra CSS vai estilizar. Podemos selecionar por tag, por classe, por id, por atributo ou combinando elementos.",
      "Quando duas regras atingem o mesmo elemento, vence a de maior <strong>especificidade</strong>. Em empate, vence a que aparece por último no arquivo.",
    ],
    pontos: [
      "Tag (<code>p</code>) → peso baixo · classe (<code>.card</code>) → médio · id (<code>#topo</code>) → alto.",
      "Estilo inline (<code>style=\"...\"</code>) ganha de seletores; <code>!important</code> ganha de quase tudo — evite.",
      "Prefira classes: são reutilizáveis e fáceis de sobrescrever.",
      "Combinadores: <code>.menu a</code> (descendente), <code>.menu &gt; a</code> (filho direto), <code>a:hover</code> (pseudo-classe).",
    ],
    codigo: {
      lang: "css",
      src: `/* tag: todos os parágrafos */
p { color: #333; }

/* classe: elementos com class="destaque" */
.destaque { color: purple; }

/* id: o elemento com id="aviso" */
#aviso { color: red; }

/* descendente + pseudo-classe */
.menu a:hover { text-decoration: underline; }

/* <p class="destaque" id="aviso">Texto</p>
   → fica VERMELHO, porque id > classe > tag */`,
    },
  },

  "m02-2": {
    texto: [
      "No CSS, todo elemento é uma caixa retangular. O <strong>Box Model</strong> descreve as camadas dessa caixa, de dentro para fora: <em>content</em> (conteúdo), <em>padding</em> (espaço interno), <em>border</em> (borda) e <em>margin</em> (espaço externo).",
      "Por padrão, <code>width</code> define só a largura do conteúdo — padding e borda são somados depois. Com <code>box-sizing: border-box</code>, a largura passa a incluir padding e borda, o que é bem mais intuitivo.",
    ],
    pontos: [
      "<code>padding</code> aumenta o espaço <em>dentro</em> da caixa (o fundo se estende).",
      "<code>margin</code> afasta a caixa das vizinhas (é sempre transparente).",
      "Atalho: <code>margin: 10px 20px</code> → 10px em cima/embaixo, 20px nas laterais.",
      "Use o DevTools (F12 → aba Elements) para visualizar o box model de qualquer elemento.",
    ],
    codigo: {
      lang: "css",
      src: `/* Recomendado no início de todo projeto */
*, *::before, *::after {
  box-sizing: border-box;
}

.card {
  width: 300px;          /* largura TOTAL, com border-box */
  padding: 16px;         /* espaço interno */
  border: 2px solid #5430bf;
  margin: 24px auto;     /* 24px vertical, centralizado */
  border-radius: 12px;
}`,
    },
  },

  "m02-3": {
    texto: [
      "Flexbox é um modelo de layout <strong>unidimensional</strong>: organiza itens em uma linha ou em uma coluna. É ideal para menus, barras de botões, centralização e cards lado a lado.",
      "Aplicamos <code>display: flex</code> no <strong>container</strong> (o pai), e os filhos diretos viram itens flexíveis. As propriedades de alinhamento funcionam em relação a dois eixos: o principal (definido por <code>flex-direction</code>) e o cruzado.",
    ],
    pontos: [
      "<code>flex-direction</code>: <code>row</code> (padrão) ou <code>column</code>.",
      "<code>justify-content</code>: distribui no eixo principal (<code>center</code>, <code>space-between</code>...).",
      "<code>align-items</code>: alinha no eixo cruzado (<code>center</code>, <code>stretch</code>...).",
      "<code>gap</code>: espaço entre os itens. <code>flex-wrap: wrap</code>: quebra linha quando falta espaço.",
      "No item: <code>flex: 1</code> faz ele ocupar o espaço disponível.",
    ],
    codigo: {
      lang: "css",
      src: `/* Barra de navegação: logo à esquerda, links à direita */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.navbar ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

/* Centralizar qualquer coisa na tela */
.centro {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
    },
  },

  "m02-4": {
    texto: [
      "CSS Grid é um modelo de layout <strong>bidimensional</strong>: controla linhas e colunas ao mesmo tempo. É perfeito para a estrutura geral da página e para galerias de cards.",
      "No container, definimos as colunas com <code>grid-template-columns</code>. A unidade <code>fr</code> representa uma fração do espaço livre, e a função <code>repeat()</code> evita repetição.",
    ],
    pontos: [
      "<code>repeat(3, 1fr)</code> → 3 colunas de mesmo tamanho.",
      "<code>repeat(auto-fit, minmax(200px, 1fr))</code> → quantas colunas couberem, cada uma com no mínimo 200px (responsivo sem media query!).",
      "<code>grid-column: span 2</code> faz um item ocupar duas colunas.",
      "<code>grid-template-areas</code> permite “desenhar” o layout com nomes.",
    ],
    codigo: {
      lang: "css",
      src: `/* Galeria responsiva automática */
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* Layout de página com áreas nomeadas */
.pagina {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas:
    "topo   topo"
    "menu   conteudo"
    "rodape rodape";
  gap: 1rem;
}
header { grid-area: topo; }
aside  { grid-area: menu; }
main   { grid-area: conteudo; }
footer { grid-area: rodape; }`,
    },
    dica: "Regra prática: Flexbox para alinhar itens em uma direção; Grid para montar a grade da página.",
  },

  "m02-5": {
    texto: [
      "Media queries aplicam regras CSS apenas quando uma condição é verdadeira — normalmente a largura da tela. É assim que um mesmo site se adapta a celular, tablet e desktop.",
      "A abordagem <strong>mobile first</strong> escreve primeiro o CSS para telas pequenas e usa <code>min-width</code> para acrescentar ajustes em telas maiores.",
    ],
    pontos: [
      "Sem a meta tag <code>viewport</code> no HTML, as media queries não funcionam bem no celular.",
      "Breakpoints comuns: 640px, 768px, 1024px, 1280px.",
      "Use unidades flexíveis (<code>%</code>, <code>rem</code>, <code>fr</code>) em vez de larguras fixas.",
      "Teste com o modo dispositivo do DevTools (Ctrl+Shift+M).",
    ],
    codigo: {
      lang: "css",
      src: `/* Mobile first: 1 coluna por padrão */
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet: 2 colunas */
@media (min-width: 768px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop: 4 colunas */
@media (min-width: 1024px) {
  .cards { grid-template-columns: repeat(4, 1fr); }
}`,
    },
  },

  "m02-6": {
    texto: [
      "Tailwind CSS é um framework <em>utility-first</em>: em vez de escrever CSS em um arquivo separado, você aplica classes pequenas e diretas no próprio HTML, como <code>p-4</code> (padding), <code>text-center</code> ou <code>bg-purple-600</code>.",
      "Para estudar e prototipar, basta incluir o script do Tailwind via CDN — sem instalação nem build. Em produção, o recomendado é compilar o CSS (como este próprio site faz).",
    ],
    pontos: [
      "Espaçamento: <code>p-4</code>, <code>mt-2</code>, <code>gap-6</code> (escala de 0,25rem).",
      "Layout: <code>flex</code>, <code>grid</code>, <code>grid-cols-3</code>, <code>items-center</code>.",
      "Responsivo com prefixos: <code>md:grid-cols-2</code> só vale a partir de 768px.",
      "Estados: <code>hover:bg-purple-700</code>, <code>focus:ring</code>.",
    ],
    codigo: {
      lang: "html",
      src: `<!-- No <head> -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Card responsivo só com classes -->
<div class="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md">
  <h2 class="text-xl font-bold text-gray-900">Tailwind</h2>
  <p class="mt-2 text-gray-600">CSS direto no HTML.</p>
  <button class="mt-4 px-4 py-2 rounded-lg bg-purple-600 text-white
                 hover:bg-purple-700">
    Saiba mais
  </button>
</div>`,
    },
  },

  /* ---------------- M03 · JavaScript Básico ---------------- */
  "m03-1": {
    texto: [
      "Variáveis guardam valores para usar depois. Em JavaScript moderno usamos <code>let</code> para valores que mudam e <code>const</code> para valores que não serão reatribuídos. O antigo <code>var</code> ainda existe, mas tem comportamentos confusos e deve ser evitado.",
      "A principal diferença é o <strong>escopo</strong>: <code>let</code> e <code>const</code> existem apenas dentro do bloco <code>{ }</code> onde foram criados; <code>var</code> “vaza” para fora do bloco.",
    ],
    pontos: [
      "Use <code>const</code> por padrão; troque para <code>let</code> só se precisar reatribuir.",
      "<code>const</code> com objeto/array impede reatribuir, mas permite alterar o conteúdo.",
      "Nomes em camelCase: <code>nomeCompleto</code>, <code>totalItens</code>.",
    ],
    codigo: {
      lang: "javascript",
      src: `const nome = 'Ana';      // não muda
let idade = 20;          // pode mudar
idade = 21;              // ok

// nome = 'Bia';         // ERRO: const não pode ser reatribuída

const lista = [1, 2];
lista.push(3);           // ok: alterar o conteúdo é permitido

if (true) {
  let dentro = 'só aqui';
  var vaza = 'fora também';
}
// console.log(dentro);  // ERRO: não existe fora do bloco
console.log(vaza);       // 'fora também' (por isso evitamos var)`,
    },
  },

  "m03-2": {
    texto: [
      "Todo valor em JavaScript tem um tipo. Os tipos primitivos mais comuns são <code>string</code> (texto), <code>number</code> (números inteiros e decimais), <code>boolean</code> (<code>true</code>/<code>false</code>), <code>null</code> e <code>undefined</code>. Além deles, há objetos e arrays.",
      "Operadores fazem contas e comparações. Atenção especial a <code>==</code> × <code>===</code>: o primeiro converte os tipos antes de comparar; o segundo compara valor <strong>e</strong> tipo — prefira sempre o <code>===</code>.",
    ],
    pontos: [
      "Aritméticos: <code>+ - * / %</code> (resto) e <code>**</code> (potência).",
      "Comparação: <code>=== !== &gt; &lt; &gt;= &lt;=</code>.",
      "Lógicos: <code>&amp;&amp;</code> (e), <code>||</code> (ou), <code>!</code> (não).",
      "<code>typeof</code> mostra o tipo de um valor.",
      "Template strings com crase permitem interpolar: <code>`Olá, ${nome}`</code>.",
    ],
    codigo: {
      lang: "javascript",
      src: `const texto = 'Olá';        // string
const preco = 19.9;         // number
const ativo = true;         // boolean

console.log(typeof preco);  // 'number'

console.log(10 % 3);        // 1 (resto)
console.log('5' + 2);       // '52' (concatena texto!)
console.log('5' * 2);       // 10   (converte para número)

console.log(5 == '5');      // true  (converte o tipo)
console.log(5 === '5');     // false (tipos diferentes)

const nome = 'Ana';
console.log(\`Olá, \${nome}! Total: R$ \${preco * 2}\`);`,
    },
  },

  "m03-3": {
    texto: [
      "Condicionais permitem que o programa tome decisões. O <code>if</code> executa um bloco quando a condição é verdadeira; <code>else if</code> e <code>else</code> tratam os outros casos.",
      "Quando comparamos uma mesma variável contra vários valores fixos, o <code>switch</code> pode deixar o código mais limpo. Para decisões curtas, o operador ternário <code>condição ? a : b</code> é uma alternativa compacta.",
    ],
    pontos: [
      "Valores “falsy” (contam como falso): <code>false</code>, <code>0</code>, <code>''</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>.",
      "No <code>switch</code>, não esqueça o <code>break</code> — sem ele, a execução continua no próximo <code>case</code>.",
    ],
    codigo: {
      lang: "javascript",
      src: `const nota = 7.5;

if (nota >= 9) {
  console.log('Excelente');
} else if (nota >= 6) {
  console.log('Aprovado');
} else {
  console.log('Reprovado');
}

const dia = 'sab';
switch (dia) {
  case 'sab':
  case 'dom':
    console.log('Fim de semana');
    break;
  default:
    console.log('Dia útil');
}

// Ternário
const status = nota >= 6 ? 'aprovado' : 'reprovado';`,
    },
  },

  "m03-4": {
    texto: [
      "Loops repetem um bloco de código. O <code>for</code> clássico é ideal quando sabemos quantas vezes repetir; o <code>while</code> repete enquanto uma condição for verdadeira.",
      "Para percorrer arrays, o JavaScript moderno oferece formas mais legíveis: <code>for...of</code> e o método <code>forEach</code>, que executa uma função para cada item.",
    ],
    pontos: [
      "Cuidado com loops infinitos: a condição do <code>while</code> precisa ficar falsa em algum momento.",
      "<code>break</code> interrompe o loop; <code>continue</code> pula para a próxima volta.",
      "<code>forEach</code> não permite <code>break</code> — use <code>for...of</code> se precisar parar no meio.",
    ],
    codigo: {
      lang: "javascript",
      src: `// for clássico
for (let i = 1; i <= 3; i++) {
  console.log('Volta', i);
}

// while
let tentativas = 0;
while (tentativas < 3) {
  tentativas++;
}

const frutas = ['maçã', 'banana', 'uva'];

// for...of
for (const fruta of frutas) {
  console.log(fruta);
}

// forEach (com índice)
frutas.forEach((fruta, i) => {
  console.log(\`\${i + 1}. \${fruta}\`);
});`,
    },
  },

  "m03-5": {
    texto: [
      "Funções agrupam um trecho de código reutilizável. Elas recebem <strong>parâmetros</strong> (entradas) e podem devolver um valor com <code>return</code> (saída).",
      "As <strong>arrow functions</strong> (<code>=&gt;</code>) são uma sintaxe mais curta, muito usada em callbacks como <code>map</code>, <code>filter</code> e <code>addEventListener</code>. Se o corpo tiver uma única expressão, o <code>return</code> fica implícito.",
    ],
    pontos: [
      "Parâmetros podem ter valor padrão: <code>function ola(nome = 'visitante')</code>.",
      "Uma função sem <code>return</code> devolve <code>undefined</code>.",
      "Funções são valores: podem ser guardadas em variáveis e passadas como argumento.",
    ],
    codigo: {
      lang: "javascript",
      src: `// Declaração tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function com corpo
const media = (a, b) => {
  const soma = a + b;
  return soma / 2;
};

// Arrow function de uma linha (return implícito)
const dobro = n => n * 2;

// Valor padrão
const saudar = (nome = 'visitante') => \`Olá, \${nome}!\`;

console.log(somar(2, 3));   // 5
console.log(dobro(4));      // 8
console.log(saudar());      // 'Olá, visitante!'`,
    },
  },

  "m03-6": {
    texto: [
      "<strong>Arrays</strong> são listas ordenadas de valores, acessados pela posição (índice começa em 0). <strong>Objetos</strong> agrupam dados relacionados em pares <em>chave: valor</em>, como uma ficha de cadastro.",
      "Na prática, é muito comum ter um array de objetos — por exemplo, uma lista de produtos vinda de uma API. Os métodos <code>map</code>, <code>filter</code> e <code>find</code> ajudam a transformar e buscar dados nessas listas.",
    ],
    pontos: [
      "<code>push</code> adiciona ao final; <code>length</code> dá o tamanho.",
      "<code>map</code> transforma cada item e devolve um novo array.",
      "<code>filter</code> devolve só os itens que passam no teste.",
      "<code>find</code> devolve o primeiro item que passa no teste.",
      "Acesse propriedades com <code>obj.nome</code> ou <code>obj['nome']</code>.",
    ],
    codigo: {
      lang: "javascript",
      src: `const aluno = {
  nome: 'Ana',
  curso: 'SI',
  notas: [8, 9.5, 7]
};
console.log(aluno.nome);       // 'Ana'
console.log(aluno.notas[1]);   // 9.5

const produtos = [
  { id: 1, nome: 'Livro',  preco: 45 },
  { id: 2, nome: 'Caneta', preco: 5 },
];
produtos.push({ id: 3, nome: 'Mochila', preco: 120 });

const nomes  = produtos.map(p => p.nome);          // ['Livro', 'Caneta', 'Mochila']
const baratos = produtos.filter(p => p.preco < 50); // Livro e Caneta
const item2  = produtos.find(p => p.id === 2);     // { id: 2, nome: 'Caneta', ... }`,
    },
  },

  /* ---------------- M04 · DOM e Eventos ---------------- */
  "m04-1": {
    texto: [
      "O <strong>DOM</strong> (Document Object Model) é a representação da página HTML como uma árvore de objetos que o JavaScript consegue ler e modificar. Antes de alterar algo, precisamos <strong>selecionar</strong> o elemento.",
      "<code>querySelector</code> recebe um seletor CSS e devolve o primeiro elemento que combina. <code>querySelectorAll</code> devolve todos, em uma lista que pode ser percorrida com <code>forEach</code>.",
    ],
    pontos: [
      "Use os mesmos seletores do CSS: <code>'#id'</code>, <code>'.classe'</code>, <code>'ul li'</code>.",
      "Se nada for encontrado, <code>querySelector</code> devolve <code>null</code>.",
      "<code>getElementById('id')</code> também funciona (sem o <code>#</code>).",
      "Coloque o <code>&lt;script&gt;</code> no fim do <code>&lt;body&gt;</code> (ou use <code>defer</code>) para o HTML já existir quando o JS rodar.",
    ],
    codigo: {
      lang: "javascript",
      src: `// Primeiro elemento que combina
const titulo = document.querySelector('h1');
const botao  = document.querySelector('#btn-salvar');
const card   = document.querySelector('.card');

// Todos os elementos que combinam
const itens = document.querySelectorAll('.lista li');
itens.forEach(item => console.log(item.textContent));

// Verificando se existe
const aviso = document.querySelector('.aviso');
if (aviso) {
  aviso.textContent = 'Encontrado!';
}`,
    },
  },

  "m04-2": {
    texto: [
      "Depois de selecionar um elemento, podemos ler e alterar suas propriedades: o texto, o HTML interno, atributos, valores de campos, classes e estilos.",
      "Para mudar a aparência, prefira adicionar ou remover <strong>classes</strong> com <code>classList</code> em vez de alterar <code>style</code> diretamente — assim o visual continua definido no CSS.",
    ],
    pontos: [
      "<code>textContent</code>: lê/escreve só texto (seguro).",
      "<code>innerHTML</code>: lê/escreve HTML — cuidado com dados vindos do usuário.",
      "<code>value</code>: valor de <code>input</code>, <code>select</code> e <code>textarea</code>.",
      "<code>classList.add / remove / toggle / contains</code>.",
      "<code>getAttribute</code> / <code>setAttribute</code> e <code>dataset</code> para atributos <code>data-*</code>.",
    ],
    codigo: {
      lang: "javascript",
      src: `const titulo = document.querySelector('h1');
titulo.textContent = 'Novo título';

const campo = document.querySelector('#email');
console.log(campo.value);          // o que o usuário digitou

const foto = document.querySelector('img');
foto.src = 'img/nova.jpg';
foto.setAttribute('alt', 'Nova foto');

const card = document.querySelector('.card');
card.classList.add('destaque');
card.classList.toggle('aberto');   // liga/desliga

// <div class="card" data-id="42">
console.log(card.dataset.id);      // '42'`,
    },
  },

  "m04-3": {
    texto: [
      "Além de alterar elementos existentes, o JavaScript pode <strong>criar</strong> novos elementos e inseri-los na página — é assim que listas, cards e tabelas são montados a partir de dados.",
      "O fluxo é: criar com <code>document.createElement</code>, configurar (texto, classes, atributos) e inserir com <code>append</code> ou <code>appendChild</code>. Para remover, basta chamar <code>elemento.remove()</code>.",
    ],
    pontos: [
      "<code>append</code> insere no fim; <code>prepend</code> insere no início.",
      "Para renderizar uma lista inteira, limpe o container (<code>innerHTML = ''</code>) e recrie os itens.",
      "Montar HTML com template string + <code>innerHTML</code> é prático, mas use <code>textContent</code> para dados digitados pelo usuário.",
    ],
    codigo: {
      lang: "javascript",
      src: `const lista = document.querySelector('#tarefas');

function adicionarTarefa(texto) {
  const li = document.createElement('li');
  li.textContent = texto;
  li.classList.add('tarefa');

  const btn = document.createElement('button');
  btn.textContent = 'Excluir';
  btn.addEventListener('click', () => li.remove());

  li.append(btn);
  lista.append(li);
}

adicionarTarefa('Estudar DOM');
adicionarTarefa('Fazer exercício');`,
    },
  },

  "m04-4": {
    texto: [
      "Eventos são ações que acontecem na página: um clique, uma tecla, o envio de um formulário, o carregamento da página. Com <code>addEventListener</code> registramos uma função (o <em>listener</em>) que será executada quando o evento ocorrer.",
      "A função recebe um objeto <code>event</code> com detalhes do que aconteceu — qual elemento foi clicado (<code>event.target</code>), qual tecla foi pressionada (<code>event.key</code>) etc.",
    ],
    pontos: [
      "Mouse: <code>click</code>, <code>dblclick</code>, <code>mouseenter</code>, <code>mouseleave</code>.",
      "Teclado: <code>keydown</code>, <code>keyup</code>.",
      "Formulário: <code>input</code> (a cada tecla), <code>change</code>, <code>submit</code>.",
      "Página: <code>DOMContentLoaded</code>, <code>scroll</code>, <code>resize</code>.",
      "<code>event.preventDefault()</code> cancela o comportamento padrão (ex.: recarregar ao enviar form).",
    ],
    codigo: {
      lang: "javascript",
      src: `const botao = document.querySelector('#contador');
let cliques = 0;

botao.addEventListener('click', () => {
  cliques++;
  botao.textContent = \`Cliques: \${cliques}\`;
});

const busca = document.querySelector('#busca');
busca.addEventListener('input', (event) => {
  console.log('Digitando:', event.target.value);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    console.log('Esc pressionado');
  }
});`,
    },
  },

  "m04-5": {
    texto: [
      "Para trabalhar com formulários em JavaScript, escutamos o evento <code>submit</code> do <code>&lt;form&gt;</code>. A primeira coisa a fazer é chamar <code>event.preventDefault()</code>, senão a página recarrega e os dados se perdem.",
      "Em seguida, lemos os valores dos campos, validamos (campos vazios, formato de e-mail, tamanho mínimo...) e mostramos mensagens de erro ou seguimos com o envio.",
    ],
    pontos: [
      "<code>.trim()</code> remove espaços extras do início e do fim.",
      "<code>new FormData(form)</code> lê todos os campos de uma vez (usa o atributo <code>name</code>).",
      "Validação no front melhora a experiência, mas o servidor também deve validar.",
      "<code>form.reset()</code> limpa todos os campos.",
    ],
    codigo: {
      lang: "javascript",
      src: `const form = document.querySelector('#cadastro');
const erro = document.querySelector('#erro');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome  = form.nome.value.trim();
  const email = form.email.value.trim();

  if (nome.length < 3) {
    erro.textContent = 'O nome precisa ter pelo menos 3 letras.';
    return;
  }
  if (!email.includes('@')) {
    erro.textContent = 'Informe um e-mail válido.';
    return;
  }

  erro.textContent = '';
  console.log('Enviando:', { nome, email });
  form.reset();
});`,
    },
  },

  "m04-6": {
    texto: [
      "Quando um evento acontece em um elemento, ele “sobe” pela árvore do DOM até o <code>document</code> — isso se chama <strong>propagação</strong> (<em>bubbling</em>). A delegação de eventos aproveita isso: em vez de colocar um listener em cada item, colocamos <strong>um só</strong> no elemento pai.",
      "Dentro do listener, usamos <code>event.target</code> (e <code>closest()</code>) para descobrir qual item foi clicado. A grande vantagem: funciona também para itens criados <em>depois</em>, dinamicamente.",
    ],
    pontos: [
      "Menos listeners = menos memória e código mais simples.",
      "<code>event.target.closest('.item')</code> encontra o item mesmo se o clique foi em um filho dele (ícone, span).",
      "Use atributos <code>data-*</code> para identificar a ação ou o registro.",
    ],
    codigo: {
      lang: "javascript",
      src: `// <ul id="lista">
//   <li data-id="1">Ana <button data-acao="excluir">x</button></li>
//   ...
// </ul>

const lista = document.querySelector('#lista');

lista.addEventListener('click', (event) => {
  const botao = event.target.closest('[data-acao="excluir"]');
  if (!botao) return;              // clicou em outra coisa

  const item = botao.closest('li');
  console.log('Excluindo id', item.dataset.id);
  item.remove();
});

// Itens adicionados depois também funcionam, sem novo listener!`,
    },
  },

  /* ---------------- M05 · JSON e Storage ---------------- */
  "m05-1": {
    texto: [
      "<strong>JSON</strong> (JavaScript Object Notation) é um formato de texto para representar dados estruturados. É o formato padrão de troca de dados entre front-end e back-end — praticamente toda API web responde em JSON.",
      "A sintaxe se parece com objetos JavaScript, mas é mais rígida: é apenas texto, não executa código.",
    ],
    pontos: [
      "Chaves (nomes) <strong>sempre</strong> entre aspas duplas: <code>\"nome\"</code>.",
      "Strings também só com aspas duplas — aspas simples são inválidas.",
      "Valores permitidos: string, número, <code>true</code>/<code>false</code>, <code>null</code>, objeto e array.",
      "Não pode ter vírgula sobrando no último item, nem comentários, nem funções.",
    ],
    codigo: {
      lang: "json",
      src: `{
  "id": 1,
  "nome": "Ana Souza",
  "ativo": true,
  "telefone": null,
  "endereco": {
    "cidade": "Belo Horizonte",
    "uf": "MG"
  },
  "interesses": ["HTML", "CSS", "JavaScript"]
}`,
    },
    dica: "Se um arquivo .json der erro, cole-o em um validador (ex.: jsonlint.com). Os erros mais comuns são vírgula sobrando e aspas simples.",
  },

  "m05-2": {
    texto: [
      "No JavaScript, trabalhamos com <strong>objetos</strong>; na rede e no armazenamento, trafega <strong>texto</strong>. Por isso precisamos converter entre os dois formatos.",
      "<code>JSON.stringify(obj)</code> transforma um objeto/array em uma string JSON. <code>JSON.parse(texto)</code> faz o caminho inverso, transformando a string de volta em objeto.",
    ],
    pontos: [
      "<code>stringify</code> → antes de salvar no localStorage ou enviar no <code>body</code> de um <code>fetch</code>.",
      "<code>parse</code> → depois de ler do localStorage ou receber texto JSON.",
      "<code>JSON.stringify(obj, null, 2)</code> gera um texto indentado, ótimo para depurar.",
      "<code>JSON.parse</code> lança erro se o texto for inválido — use <code>try/catch</code> quando não tiver certeza.",
    ],
    codigo: {
      lang: "javascript",
      src: `const produto = { nome: 'Livro', preco: 45 };

// Objeto → texto
const texto = JSON.stringify(produto);
console.log(texto);          // '{"nome":"Livro","preco":45}'
console.log(typeof texto);   // 'string'

// Texto → objeto
const deVolta = JSON.parse(texto);
console.log(deVolta.preco);  // 45

// Formatado para leitura
console.log(JSON.stringify(produto, null, 2));`,
    },
  },

  "m05-3": {
    texto: [
      "O <code>localStorage</code> é um pequeno armazenamento do navegador (cerca de 5 MB por site) que guarda pares <em>chave → valor</em>. Os dados <strong>permanecem</strong> mesmo depois de fechar a aba ou reiniciar o computador.",
      "Ele só armazena strings. Para guardar objetos e arrays, combine com <code>JSON.stringify</code> ao salvar e <code>JSON.parse</code> ao ler.",
    ],
    pontos: [
      "<code>setItem(chave, valor)</code>, <code>getItem(chave)</code>, <code>removeItem(chave)</code>, <code>clear()</code>.",
      "<code>getItem</code> devolve <code>null</code> se a chave não existir — trate esse caso.",
      "Os dados ficam visíveis no DevTools → Application → Local Storage.",
      "Nunca guarde senhas ou dados sensíveis: qualquer script da página consegue ler.",
    ],
    codigo: {
      lang: "javascript",
      src: `// Salvar a preferência de tema
localStorage.setItem('tema', 'escuro');
console.log(localStorage.getItem('tema'));   // 'escuro'

// Carrinho de compras (array de objetos)
const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

carrinho.push({ id: 7, nome: 'Caneca', qtd: 1 });

localStorage.setItem('carrinho', JSON.stringify(carrinho));

// Remover
localStorage.removeItem('tema');`,
    },
    dica: "Esta própria página usa localStorage para lembrar quais módulos você marcou como concluídos!",
  },

  "m05-4": {
    texto: [
      "O <code>sessionStorage</code> tem exatamente a mesma API do <code>localStorage</code> (<code>setItem</code>, <code>getItem</code>...), mas os dados duram apenas enquanto a <strong>aba</strong> estiver aberta.",
      "Ao fechar a aba, tudo é apagado. Além disso, cada aba tem o seu próprio sessionStorage, mesmo sendo o mesmo site. Isso o torna útil para dados temporários, como o usuário logado ou o passo atual de um formulário.",
    ],
    pontos: [
      "Sobrevive a recarregar a página (F5), mas não a fechar a aba.",
      "Abrir o site em outra aba começa com sessionStorage vazio.",
      "Também só guarda strings — use JSON para objetos.",
    ],
    codigo: {
      lang: "javascript",
      src: `// Guardar o usuário logado durante a sessão
const usuario = { id: 1, nome: 'Ana', login: 'ana' };
sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuario));

// Em outra página do site (mesma aba)
const logado = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
if (logado) {
  console.log(\`Bem-vinda, \${logado.nome}!\`);
}

// Formulário em etapas
sessionStorage.setItem('etapa', '2');`,
    },
  },

  "m05-5": {
    texto: [
      "Os dois armazenamentos funcionam igual; o que muda é <strong>por quanto tempo</strong> e <strong>onde</strong> os dados ficam disponíveis. Escolha pensando em: “o usuário espera encontrar isso quando voltar amanhã?”.",
    ],
    pontos: [
      "<strong>localStorage</strong> → permanente, compartilhado entre abas. Ex.: tema escuro, idioma, carrinho, progresso do curso.",
      "<strong>sessionStorage</strong> → temporário, por aba. Ex.: sessão de login, dados de um formulário em andamento, filtros da busca atual.",
      "<strong>Nenhum dos dois</strong> → senhas, tokens sensíveis, dados que precisam estar em vários dispositivos (esses vão para o servidor).",
      "Limite de ~5 MB e acesso síncrono: não use para grandes volumes de dados.",
    ],
    codigo: {
      lang: "javascript",
      src: `// Preferência que deve durar: localStorage
function salvarTema(tema) {
  localStorage.setItem('tema', tema);
}

// Login que deve acabar ao fechar a aba: sessionStorage
function fazerLogin(usuario) {
  sessionStorage.setItem('usuario', JSON.stringify(usuario));
}

function logout() {
  sessionStorage.removeItem('usuario');
}

// Ao abrir o site
document.body.dataset.tema = localStorage.getItem('tema') || 'claro';`,
    },
  },

  /* ---------------- M06 · JSON Server e API REST ---------------- */
  "m06-1": {
    texto: [
      "Uma <strong>API</strong> é um conjunto de endereços (URLs) que um programa disponibiliza para que outros programas leiam ou modifiquem dados. <strong>REST</strong> é um estilo de organizar essas APIs usando o próprio protocolo HTTP.",
      "Em uma API REST, cada tipo de dado é um <strong>recurso</strong> com uma URL própria (<code>/contatos</code>, <code>/usuarios</code>), e a ação desejada é indicada pelo verbo HTTP. A resposta normalmente vem em JSON.",
    ],
    pontos: [
      "Recurso no plural: <code>/contatos</code> (coleção) e <code>/contatos/3</code> (item específico).",
      "Sem estado (<em>stateless</em>): cada requisição carrega tudo o que o servidor precisa.",
      "O servidor responde com um <strong>código de status</strong>: 200 OK, 201 Criado, 404 Não encontrado, 500 Erro interno.",
    ],
    codigo: {
      lang: "bash",
      src: `# Coleção inteira
GET  http://localhost:3000/api/contatos

# Um item específico
GET  http://localhost:3000/api/contatos/3

# Resposta (JSON):
# {
#   "id": 3,
#   "nome": "Clementine Bauch",
#   "cidade": "Rio de Janeiro",
#   "categoria": "trabalho"
# }`,
    },
  },

  "m06-2": {
    texto: [
      "Os verbos (ou métodos) HTTP indicam <strong>o que</strong> queremos fazer com um recurso. Eles correspondem às quatro operações básicas de dados, conhecidas como <strong>CRUD</strong>: Create, Read, Update, Delete.",
    ],
    pontos: [
      "<code>GET</code> → <strong>ler</strong> dados (não altera nada).",
      "<code>POST</code> → <strong>criar</strong> um novo registro (envia JSON no corpo).",
      "<code>PUT</code> → <strong>substituir</strong> um registro inteiro.",
      "<code>PATCH</code> → <strong>atualizar parte</strong> de um registro.",
      "<code>DELETE</code> → <strong>remover</strong> um registro.",
    ],
    codigo: {
      lang: "javascript",
      src: `const url = '/api/contatos';
const json = { 'Content-Type': 'application/json' };

// Create
fetch(url, { method: 'POST', headers: json,
  body: JSON.stringify({ nome: 'Ana', cidade: 'BH' }) });

// Read
fetch(url);              // todos
fetch(\`\${url}/1\`);       // um

// Update
fetch(\`\${url}/1\`, { method: 'PATCH', headers: json,
  body: JSON.stringify({ cidade: 'Contagem' }) });

// Delete
fetch(\`\${url}/1\`, { method: 'DELETE' });`,
    },
  },

  "m06-3": {
    texto: [
      "O <strong>JSON Server</strong> cria uma API REST completa a partir de um único arquivo <code>db.json</code>, sem escrever nenhuma linha de back-end. É perfeito para estudar e prototipar o front-end.",
      "Ele é um pacote do Node.js. Com o Node instalado, basta instalar o pacote e iniciar apontando para o arquivo de dados. Neste projeto, o comando já está configurado no <code>npm start</code>.",
    ],
    pontos: [
      "Pré-requisito: Node.js instalado (<code>node -v</code> para conferir).",
      "<code>--watch</code> recarrega quando o db.json muda; <code>--port</code> define a porta.",
      "<code>--static ./public</code> serve também os arquivos HTML/CSS/JS do site.",
      "Os dados alterados via POST/PUT/DELETE são gravados de verdade no db.json.",
    ],
    codigo: {
      lang: "bash",
      src: `# 1. Criar o projeto e instalar
npm init -y
npm install json-server@0.17.4

# 2. Iniciar a API
npx json-server --watch db.json --port 3000

# Neste repositório, basta:
npm install
npm start
# → http://localhost:3000/api/contatos`,
    },
    dica: "Veja o passo a passo completo na página <a class=\"wt-link\" href=\"ambiente.html\">Ambiente</a>.",
  },

  "m06-4": {
    texto: [
      "O <code>db.json</code> é o “banco de dados” do JSON Server. Cada chave de primeiro nível vira uma <strong>coleção</strong> e, automaticamente, uma rota da API.",
      "Cada coleção é um array de objetos, e cada objeto precisa de um campo <code>id</code> único. Ao criar um registro via POST, o JSON Server gera o <code>id</code> sozinho.",
    ],
    pontos: [
      "<code>\"contatos\": [...]</code> → rota <code>/contatos</code>.",
      "Use nomes no plural e sem acentos/espaços para as coleções.",
      "Mantenha os objetos de uma coleção com os mesmos campos.",
      "Para relacionar coleções, guarde o id do “pai” (ex.: <code>usuarioId</code>).",
    ],
    codigo: {
      lang: "json",
      src: `{
  "usuarios": [
    { "id": 1, "login": "admin", "nome": "Administrador" }
  ],
  "contatos": [
    {
      "id": 1,
      "nome": "Leanne Graham",
      "cidade": "Belo Horizonte",
      "categoria": "amigos",
      "email": "leanne@email.com"
    }
  ],
  "lancamentos": [
    { "id": 1, "mes": "jan-24", "categoria": "Alimentação", "valor": 500 }
  ]
}`,
    },
  },

  "m06-5": {
    texto: [
      "O JSON Server aceita parâmetros na URL (a <em>query string</em>, depois do <code>?</code>) para filtrar, buscar, ordenar e paginar os dados — sem precisar trazer tudo e filtrar no JavaScript.",
    ],
    pontos: [
      "Filtro por campo: <code>?cidade=Betim</code>.",
      "Busca em todos os campos: <code>?q=ana</code>.",
      "Operadores: <code>?valor_gte=100</code> (≥), <code>_lte</code> (≤), <code>_ne</code> (≠), <code>_like</code> (contém).",
      "Ordenação: <code>?_sort=nome&amp;_order=asc</code>.",
      "Paginação: <code>?_page=2&amp;_limit=5</code> (o total vem no header <code>X-Total-Count</code>).",
      "Combine vários parâmetros com <code>&amp;</code>.",
    ],
    codigo: {
      lang: "bash",
      src: `# Contatos de Betim
GET /api/contatos?cidade=Betim

# Busca textual
GET /api/contatos?q=graham

# Categoria "trabalho", ordenado por nome
GET /api/contatos?categoria=trabalho&_sort=nome&_order=asc

# Página 2, 5 itens por página
GET /api/contatos?_page=2&_limit=5

# Lançamentos com valor maior ou igual a 100
GET /api/lancamentos?valor_gte=100`,
    },
  },

  "m06-6": {
    texto: [
      "Dados reais costumam estar relacionados: um usuário tem vários lançamentos, uma cidade tem vários pontos turísticos. No JSON Server, isso é feito guardando no item “filho” o id do “pai”, com o padrão <code>nomeDoPaiId</code>.",
      "Com esse padrão, a API consegue juntar os dados automaticamente: <code>_embed</code> traz os filhos dentro do pai e <code>_expand</code> traz o pai dentro do filho.",
    ],
    pontos: [
      "No filho: <code>\"usuarioId\": 1</code> aponta para <code>usuarios</code> com id 1.",
      "Rota aninhada: <code>/usuarios/1/lancamentos</code> lista só os lançamentos do usuário 1.",
      "<code>_embed</code>: pai → filhos (use o nome da coleção filha, no plural).",
      "<code>_expand</code>: filho → pai (use o nome no singular).",
    ],
    codigo: {
      lang: "bash",
      src: `# db.json
# "usuarios":    [{ "id": 1, "nome": "Ana" }]
# "lancamentos": [{ "id": 10, "valor": 50, "usuarioId": 1 }]

# Lançamentos do usuário 1
GET /api/usuarios/1/lancamentos

# Usuário 1 já com seus lançamentos dentro
GET /api/usuarios/1?_embed=lancamentos

# Lançamento 10 com os dados do usuário
GET /api/lancamentos/10?_expand=usuario`,
    },
  },

  /* ---------------- M07 · Fetch API e Assíncrono ---------------- */
  "m07-1": {
    texto: [
      "Algumas operações demoram — buscar dados na rede, ler um arquivo. Para não travar a página, o JavaScript as executa de forma <strong>assíncrona</strong> e devolve uma <strong>Promise</strong>: um objeto que representa um valor que ainda vai chegar.",
      "Uma Promise pode estar <em>pendente</em>, <em>resolvida</em> (deu certo) ou <em>rejeitada</em> (deu erro). Reagimos a esses estados com <code>.then()</code>, <code>.catch()</code> e <code>.finally()</code>.",
    ],
    pontos: [
      "<code>.then(fn)</code> roda quando a Promise é resolvida e recebe o resultado.",
      "Cada <code>.then</code> devolve uma nova Promise, permitindo encadear passos.",
      "<code>.catch(fn)</code> captura erros de qualquer passo anterior.",
      "<code>.finally(fn)</code> roda sempre, com sucesso ou erro (bom para esconder um “carregando”).",
    ],
    codigo: {
      lang: "javascript",
      src: `fetch('/api/contatos')
  .then(resposta => resposta.json())   // Promise → JSON
  .then(contatos => {
    console.log('Recebidos:', contatos.length);
  })
  .catch(erro => {
    console.error('Falhou:', erro);
  })
  .finally(() => {
    console.log('Requisição terminada');
  });

console.log('Esta linha aparece ANTES dos dados!');`,
    },
  },

  "m07-2": {
    texto: [
      "<code>async</code>/<code>await</code> é uma forma mais legível de trabalhar com Promises. O código assíncrono passa a ser escrito como se fosse sequencial, de cima para baixo, sem encadear vários <code>.then()</code>.",
      "Marcamos a função com <code>async</code> e, dentro dela, usamos <code>await</code> antes de uma Promise para “esperar” o resultado. Uma função <code>async</code> sempre devolve uma Promise.",
    ],
    pontos: [
      "<code>await</code> só pode ser usado dentro de funções <code>async</code> (ou em módulos).",
      "Para tratar erros com <code>await</code>, use <code>try/catch</code>.",
      "Esquecer o <code>await</code> é um erro comum: você recebe a Promise, não o valor.",
    ],
    codigo: {
      lang: "javascript",
      src: `// Com then
function carregarComThen() {
  return fetch('/api/contatos')
    .then(r => r.json())
    .then(dados => console.log(dados));
}

// Mesma coisa com async/await
async function carregarContatos() {
  const resposta = await fetch('/api/contatos');
  const dados = await resposta.json();
  console.log(dados);
  return dados;
}

carregarContatos();`,
    },
  },

  "m07-3": {
    texto: [
      "O <code>fetch</code> recebe a URL e, opcionalmente, um objeto de <strong>opções</strong> que configura a requisição: o método HTTP, os cabeçalhos e o corpo.",
      "Sem opções, o fetch faz um <code>GET</code>. Para enviar dados (POST, PUT, PATCH), é preciso informar o <code>method</code>, o header <code>Content-Type</code> e o <code>body</code> convertido em texto com <code>JSON.stringify</code>.",
    ],
    pontos: [
      "<code>method</code>: 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'.",
      "<code>headers</code>: metadados, como <code>Content-Type</code> ou <code>Authorization</code>.",
      "<code>body</code>: os dados enviados (string). GET não tem body.",
      "A resposta tem <code>ok</code>, <code>status</code> e métodos como <code>.json()</code> e <code>.text()</code>.",
    ],
    codigo: {
      lang: "javascript",
      src: `async function criarContato(contato) {
  const resposta = await fetch('/api/contatos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contato)
  });

  console.log(resposta.status);   // 201 (Created)
  return resposta.json();         // o contato com o id gerado
}

criarContato({ nome: 'Ana', cidade: 'Belo Horizonte' })
  .then(novo => console.log('Criado com id', novo.id));`,
    },
  },

  "m07-4": {
    texto: [
      "Requisições podem falhar: servidor desligado, internet caindo, registro inexistente. Um bom front-end <strong>prevê</strong> essas falhas e mostra uma mensagem clara em vez de simplesmente parar.",
      "Atenção: o <code>fetch</code> só rejeita a Promise em erros de rede. Respostas como 404 ou 500 <strong>não</strong> caem no <code>catch</code> sozinhas — é preciso verificar <code>resposta.ok</code> e lançar o erro manualmente.",
    ],
    pontos: [
      "<code>try</code>: o código que pode falhar.",
      "<code>catch (erro)</code>: o que fazer se falhar.",
      "<code>finally</code>: o que fazer sempre (ex.: esconder o loading).",
      "<code>throw new Error('mensagem')</code> gera um erro que vai para o <code>catch</code>.",
    ],
    codigo: {
      lang: "javascript",
      src: `async function buscarContato(id) {
  try {
    const resposta = await fetch(\`/api/contatos/\${id}\`);

    if (!resposta.ok) {
      throw new Error(\`Erro \${resposta.status}\`);
    }

    const contato = await resposta.json();
    mostrar(contato);
  } catch (erro) {
    console.error(erro);
    alertaEl.textContent = 'Não foi possível carregar o contato.';
  }
}

buscarContato(999);   // → 404 → mensagem de erro amigável`,
    },
  },

  "m07-5": {
    texto: [
      "Enquanto os dados não chegam, a interface precisa mostrar que algo está acontecendo. Sem esse retorno, o usuário acha que o site travou e clica de novo.",
      "O padrão é ter três estados visuais: <strong>carregando</strong> (spinner ou <em>skeleton</em>), <strong>sucesso</strong> (os dados) e <strong>erro</strong> (mensagem + opção de tentar de novo). Também vale tratar o caso de lista <strong>vazia</strong>.",
    ],
    pontos: [
      "Mostre o loading antes do <code>await</code> e esconda no <code>finally</code>.",
      "Desabilite o botão durante o envio para evitar cliques duplos.",
      "Skeleton screens (blocos cinza no formato do conteúdo) passam sensação de rapidez.",
    ],
    codigo: {
      lang: "javascript",
      src: `const lista   = document.querySelector('#lista');
const loading = document.querySelector('#loading');
const botao   = document.querySelector('#recarregar');

async function carregar() {
  loading.hidden = false;
  botao.disabled = true;
  lista.innerHTML = '';

  try {
    const r = await fetch('/api/contatos');
    const contatos = await r.json();

    if (contatos.length === 0) {
      lista.innerHTML = '<li>Nenhum contato cadastrado.</li>';
      return;
    }
    lista.innerHTML = contatos.map(c => \`<li>\${c.nome}</li>\`).join('');
  } catch {
    lista.innerHTML = '<li>Erro ao carregar. Tente novamente.</li>';
  } finally {
    loading.hidden = true;
    botao.disabled = false;
  }
}`,
    },
  },

  "m07-6": {
    texto: [
      "Às vezes precisamos de várias requisições independentes — por exemplo, contatos <em>e</em> cidades para montar uma tela. Fazer uma depois da outra soma os tempos de espera.",
      "<code>Promise.all</code> recebe um array de Promises, dispara todas <strong>ao mesmo tempo</strong> e espera até que todas terminem, devolvendo os resultados na mesma ordem.",
    ],
    pontos: [
      "Se <strong>qualquer</strong> uma falhar, o <code>Promise.all</code> inteiro é rejeitado.",
      "<code>Promise.allSettled</code> espera todas e informa o resultado de cada uma, mesmo com falhas.",
      "Use desestruturação para dar nome aos resultados: <code>const [a, b] = await Promise.all(...)</code>.",
    ],
    codigo: {
      lang: "javascript",
      src: `async function carregarTela() {
  // Dispara as duas ao mesmo tempo
  const [contatos, cidades] = await Promise.all([
    fetch('/api/contatos').then(r => r.json()),
    fetch('/api/cidades').then(r => r.json())
  ]);

  console.log(contatos.length, 'contatos');
  console.log(cidades.length, 'cidades');
}

// Sequencial (mais lento):  tempo A + tempo B
// Promise.all (paralelo):   maior entre A e B`,
    },
  },

  /* ---------------- M08 · Autenticação ---------------- */
  "m08-1": {
    texto: [
      "Autenticação é o processo de verificar <strong>quem</strong> é o usuário. Em uma aplicação web, o fluxo básico é: o usuário informa credenciais, o sistema verifica, e — se estiverem corretas — guarda uma <strong>sessão</strong> que lembra que ele está logado.",
      "Neste curso, implementamos um fluxo didático com JSON Server e sessionStorage. Em sistemas reais, a verificação acontece no servidor, com senhas criptografadas e tokens (como JWT).",
    ],
    pontos: [
      "1. Usuário preenche login e senha no formulário.",
      "2. O front busca o usuário na API e compara as credenciais.",
      "3. Se ok, salva o usuário na sessão e redireciona para a área restrita.",
      "4. Páginas protegidas verificam a sessão antes de exibir o conteúdo.",
      "5. No logout, a sessão é apagada.",
    ],
    codigo: {
      lang: "javascript",
      src: `// Visão geral do fluxo
async function entrar(login, senha) {
  const usuario = await verificarCredenciais(login, senha);

  if (!usuario) {
    mostrarErro('Usuário ou senha incorretos');
    return;
  }

  iniciarSessao(usuario);           // sessionStorage
  window.location.href = 'index.html';
}`,
    },
    dica: "Esta abordagem é para aprendizado. Em produção, nunca compare senhas no navegador nem guarde senhas em texto puro.",
  },

  "m08-2": {
    texto: [
      "Com o JSON Server, os usuários ficam na coleção <code>usuarios</code> do db.json. Para fazer login, buscamos o usuário pelo campo <code>login</code> usando um filtro na URL e comparamos a senha digitada.",
      "Se a API devolver um array vazio, o usuário não existe; se existir mas a senha não bater, as credenciais estão erradas. Em ambos os casos, mostre a mesma mensagem genérica.",
    ],
    pontos: [
      "Filtro na URL: <code>/api/usuarios?login=ana</code> devolve um array (pode ser vazio).",
      "Mensagem genérica (“usuário ou senha incorretos”) não revela qual dos dois errou.",
      "Nunca guarde a senha na sessão — remova-a do objeto antes de salvar.",
    ],
    codigo: {
      lang: "javascript",
      src: `async function verificarCredenciais(login, senha) {
  const r = await fetch(\`/api/usuarios?login=\${encodeURIComponent(login)}\`);
  const encontrados = await r.json();
  const usuario = encontrados[0];

  if (!usuario || usuario.senha !== senha) {
    return null;
  }

  // Remove a senha antes de devolver
  const { senha: _, ...semSenha } = usuario;
  return semSenha;
}`,
    },
    dica: "Veja a implementação completa no <a class=\"wt-link\" href=\"apps/login/login.html\" target=\"_blank\" rel=\"noopener\">App de Login</a>.",
  },

  "m08-3": {
    texto: [
      "Depois do login, precisamos que o site “lembre” do usuário ao navegar entre páginas. Como cada página HTML recarrega o JavaScript do zero, guardamos o usuário logado no <code>sessionStorage</code>.",
      "Assim, a sessão dura enquanto a aba estiver aberta e termina automaticamente ao fechá-la — comportamento parecido com o de muitos sistemas reais.",
    ],
    pontos: [
      "Salve só o necessário: id, nome, login, e-mail.",
      "Crie funções auxiliares (<code>getUsuario</code>, <code>estaLogado</code>) para não repetir código.",
      "Use os dados da sessão para personalizar a interface (“Olá, Ana”).",
    ],
    codigo: {
      lang: "javascript",
      src: `const CHAVE = 'usuarioCorrente';

function iniciarSessao(usuario) {
  sessionStorage.setItem(CHAVE, JSON.stringify(usuario));
}

function getUsuario() {
  return JSON.parse(sessionStorage.getItem(CHAVE));
}

function estaLogado() {
  return getUsuario() !== null;
}

// Em qualquer página
const usuario = getUsuario();
if (usuario) {
  document.querySelector('#ola').textContent = \`Olá, \${usuario.nome}\`;
}`,
    },
  },

  "m08-4": {
    texto: [
      "Algumas páginas só devem ser vistas por usuários logados (cadastro, painel, perfil). Para protegê-las, verificamos a sessão <strong>logo no início</strong> do carregamento; se não houver usuário, redirecionamos para a tela de login.",
      "É comum guardar a página que o usuário tentou acessar para devolvê-lo a ela depois do login.",
    ],
    pontos: [
      "Coloque a verificação no <code>&lt;head&gt;</code> ou no topo do script, antes de renderizar dados.",
      "<code>location.replace()</code> não deixa a página protegida no histórico do botão “voltar”.",
      "Lembre: no front-end isso é só uma camada de experiência. Dados realmente sensíveis precisam ser protegidos no servidor.",
    ],
    codigo: {
      lang: "javascript",
      src: `// protecao.js — inclua nas páginas restritas
(function protegerPagina() {
  const usuario = sessionStorage.getItem('usuarioCorrente');

  if (!usuario) {
    const destino = encodeURIComponent(location.pathname);
    location.replace(\`login.html?voltar=\${destino}\`);
  }
})();

// Em login.html, após o login dar certo:
const voltar = new URLSearchParams(location.search).get('voltar');
location.href = voltar || 'index.html';`,
    },
  },

  "m08-5": {
    texto: [
      "O registro (cadastro) cria um novo usuário na coleção <code>usuarios</code> via <code>POST</code>. Antes de enviar, validamos os campos no front e verificamos se o login já está em uso.",
      "Após cadastrar com sucesso, podemos já iniciar a sessão do novo usuário ou redirecioná-lo para a tela de login.",
    ],
    pontos: [
      "Valide: campos obrigatórios, formato de e-mail, senha com tamanho mínimo e confirmação de senha igual.",
      "Consulte <code>?login=</code> antes do POST para evitar duplicados.",
      "O JSON Server gera o <code>id</code> automaticamente.",
    ],
    codigo: {
      lang: "javascript",
      src: `async function registrar({ nome, login, email, senha, confirmacao }) {
  if (senha.length < 6) throw new Error('Senha muito curta');
  if (senha !== confirmacao) throw new Error('As senhas não conferem');

  const existe = await fetch(\`/api/usuarios?login=\${login}\`).then(r => r.json());
  if (existe.length > 0) throw new Error('Login já está em uso');

  const r = await fetch('/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, login, email, senha })
  });

  return r.json();   // novo usuário com id
}`,
    },
  },

  "m08-6": {
    texto: [
      "O logout encerra a sessão: apagamos os dados do usuário do <code>sessionStorage</code> e redirecionamos para uma página pública (login ou início).",
      "É importante limpar <strong>tudo</strong> que for da sessão — não só o usuário, mas também dados temporários que ele tenha deixado (filtros, rascunhos), para que o próximo usuário do computador não os veja.",
    ],
    pontos: [
      "<code>removeItem('chave')</code> apaga um item; <code>clear()</code> apaga todo o sessionStorage.",
      "Use <code>location.replace</code> para que o “voltar” não retorne à área logada.",
      "Deixe o botão “Sair” sempre visível nas páginas protegidas.",
    ],
    codigo: {
      lang: "javascript",
      src: `function logout() {
  sessionStorage.removeItem('usuarioCorrente');
  // ou, para limpar tudo da sessão:
  // sessionStorage.clear();

  location.replace('login.html');
}

document.querySelector('#btn-sair')
  .addEventListener('click', logout);`,
    },
  },

  /* ---------------- M09 · APIs Externas ---------------- */
  "m09-1": {
    texto: [
      "APIs públicas são serviços disponibilizados por empresas e governos para que qualquer desenvolvedor use seus dados ou recursos: CEP, clima, mapas, cotações, filmes, dados abertos etc.",
      "O consumo é igual ao da nossa API com JSON Server: fazemos um <code>fetch</code> para a URL documentada e recebemos JSON. A diferença é que precisamos ler a <strong>documentação</strong> para saber as rotas, os parâmetros e os limites de uso.",
    ],
    pontos: [
      "Algumas são abertas (sem cadastro), como ViaCEP e IBGE.",
      "Outras exigem cadastro e chave de acesso (Mapbox, OpenWeather).",
      "Fique atento a limites de requisições (<em>rate limit</em>) e a CORS.",
      "Lista útil: github.com/public-apis/public-apis.",
    ],
    codigo: {
      lang: "javascript",
      src: `// ViaCEP: API pública e gratuita, sem chave
async function buscarCep(cep) {
  const r = await fetch(\`https://viacep.com.br/ws/\${cep}/json/\`);
  const dados = await r.json();

  if (dados.erro) {
    console.log('CEP não encontrado');
    return;
  }
  console.log(\`\${dados.logradouro}, \${dados.localidade} - \${dados.uf}\`);
}

buscarCep('30140071');`,
    },
  },

  "m09-2": {
    texto: [
      "Muitas APIs exigem uma <strong>API Key</strong>: um código único gerado no painel do serviço após o cadastro. Ela identifica quem está fazendo as requisições, permite controlar limites de uso e, em serviços pagos, a cobrança.",
      "A chave é enviada junto com cada requisição — como parâmetro na URL ou em um cabeçalho HTTP, conforme a documentação do serviço.",
    ],
    pontos: [
      "Na URL: <code>?access_token=SUA_CHAVE</code> ou <code>?appid=SUA_CHAVE</code>.",
      "No cabeçalho: <code>Authorization: Bearer SUA_CHAVE</code>.",
      "Não publique chaves secretas no GitHub (use <code>.env</code> e <code>.gitignore</code>).",
      "Chaves usadas no front-end ficam visíveis: restrinja-as por domínio no painel do serviço.",
    ],
    codigo: {
      lang: "javascript",
      src: `const API_KEY = 'SUA_CHAVE_AQUI';

// Chave como parâmetro de URL
async function climaAtual(cidade) {
  const url = \`https://api.openweathermap.org/data/2.5/weather\` +
              \`?q=\${cidade}&units=metric&lang=pt_br&appid=\${API_KEY}\`;
  const clima = await fetch(url).then(r => r.json());
  console.log(clima.main.temp, '°C');
}

// Chave em cabeçalho
function buscarDados() {
  return fetch('https://api.exemplo.com/dados', {
    headers: { Authorization: \`Bearer \${API_KEY}\` }
  });
}`,
    },
  },

  "m09-3": {
    texto: [
      "O <strong>Mapbox GL JS</strong> é uma biblioteca para exibir mapas interativos na página: zoom, arrastar, marcadores, popups e estilos personalizados. Ele precisa de um <em>access token</em>, obtido gratuitamente no site do Mapbox.",
      "Basta incluir o JS e o CSS da biblioteca, criar uma <code>&lt;div&gt;</code> com altura definida e instanciar o mapa informando o centro (longitude, latitude) e o zoom.",
    ],
    pontos: [
      "Atenção à ordem: Mapbox usa <strong>[longitude, latitude]</strong>.",
      "A <code>div</code> do mapa precisa de altura no CSS, senão fica invisível.",
      "<code>new mapboxgl.Marker()</code> adiciona marcadores; <code>.setPopup()</code> mostra informações ao clicar.",
      "Combine com dados do JSON Server (ex.: coleção <code>locais</code>) para gerar marcadores.",
    ],
    codigo: {
      lang: "html",
      src: `<link href="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js"></script>

<div id="mapa" style="height: 400px"></div>

<script>
  mapboxgl.accessToken = 'SEU_TOKEN';

  const mapa = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-43.9378, -19.9208],   // [lng, lat] — Belo Horizonte
    zoom: 12
  });

  new mapboxgl.Marker({ color: '#5430BF' })
    .setLngLat([-43.9378, -19.9208])
    .setPopup(new mapboxgl.Popup().setText('Praça da Liberdade'))
    .addTo(mapa);
</script>`,
    },
  },

  "m09-4": {
    texto: [
      "O <strong>Chart.js</strong> é uma biblioteca gratuita para criar gráficos (barras, linhas, pizza, rosca...) a partir de dados em JavaScript. Não precisa de chave de API.",
      "O gráfico é desenhado em um <code>&lt;canvas&gt;</code>. Criamos um <code>new Chart()</code> informando o tipo, os rótulos (<code>labels</code>) e um ou mais conjuntos de dados (<code>datasets</code>).",
    ],
    pontos: [
      "Tipos: <code>'bar'</code>, <code>'line'</code>, <code>'pie'</code>, <code>'doughnut'</code>, <code>'radar'</code>.",
      "<code>labels</code> e <code>data</code> precisam ter o mesmo tamanho e a mesma ordem.",
      "Para atualizar, altere os dados e chame <code>grafico.update()</code>.",
      "Transforme dados da API com <code>map</code> antes de passar ao gráfico.",
    ],
    codigo: {
      lang: "html",
      src: `<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>

<canvas id="grafico"></canvas>

<script>
  new Chart(document.getElementById('grafico'), {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr'],
      datasets: [{
        label: 'Despesas (R$)',
        data: [1200, 950, 1430, 1100],
        backgroundColor: '#5430BF'
      }]
    },
    options: {
      responsive: true
    }
  });
</script>`,
    },
  },

  "m09-5": {
    texto: [
      "O poder das APIs aparece quando combinamos fontes: os <strong>nossos dados</strong> (JSON Server) alimentam uma <strong>biblioteca ou serviço externo</strong>. Por exemplo, a coleção <code>locais</code> vira marcadores no Mapbox, e a coleção <code>lancamentos</code> vira um gráfico no Chart.js.",
      "O fluxo é sempre o mesmo: buscar os dados com <code>fetch</code>, transformá-los no formato que a biblioteca espera (geralmente com <code>map</code> ou <code>reduce</code>) e entregar para ela renderizar.",
    ],
    pontos: [
      "1. <code>fetch</code> na API local.",
      "2. Transformar: separar rótulos e valores, agrupar por categoria, converter coordenadas.",
      "3. Renderizar com a biblioteca.",
      "4. Ao criar/editar registros, buscar de novo e atualizar a visualização.",
    ],
    codigo: {
      lang: "javascript",
      src: `// Lançamentos do JSON Server → gráfico por categoria
async function montarGrafico() {
  const lancamentos = await fetch('/api/lancamentos').then(r => r.json());

  // Soma os valores por categoria
  const totais = lancamentos.reduce((acc, l) => {
    acc[l.categoria] = (acc[l.categoria] || 0) + l.valor;
    return acc;
  }, {});

  new Chart(document.getElementById('grafico'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(totais),
      datasets: [{ data: Object.values(totais) }]
    }
  });
}

montarGrafico();`,
    },
    dica: "Veja os exemplos completos de <a class=\"wt-link\" href=\"apps/mapa/\" target=\"_blank\" rel=\"noopener\">Mapa</a> e <a class=\"wt-link\" href=\"apps/graficos/\" target=\"_blank\" rel=\"noopener\">Gráficos</a>.",
  },
};
