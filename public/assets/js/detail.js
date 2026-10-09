/* ============================================================
   Páginas de detalhe (exemplos/*.html): split preview / código
   Cada página define a pasta do app em <body data-base="/apps/xxx/">
   ============================================================ */
const BASE = document.body.dataset.base || '';

async function loadFile(filename, lang, btn) {
  document.querySelectorAll('.file-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const loading = document.getElementById('codeLoading');
  const block   = document.getElementById('codeBlock');
  const content = document.getElementById('codeContent');

  loading.style.display = 'block';
  block.style.display   = 'none';

  try {
    const res = await fetch(BASE + filename);
    if (!res.ok) throw new Error(res.status);
    content.className   = `language-${lang}`;
    content.textContent = await res.text();
    Prism.highlightElement(content);
    loading.style.display = 'none';
    block.style.display   = 'block';
  } catch (e) {
    loading.textContent = `❌ Erro ao carregar ${filename}`;
  }
}

// Alterna entre split / só preview / só código
function toggleView(pane) {
  const split = document.getElementById('splitView');
  const [on, off] = pane === 'preview'
    ? ['preview-only', 'code-only']
    : ['code-only', 'preview-only'];
  split.classList.toggle(on);
  split.classList.remove(off);
}

// Carrega o arquivo da aba marcada como ativa no HTML
window.addEventListener('load', () => {
  document.querySelector('.file-tab.active')?.click();
});
