/* ============================================================
   DIW - Desenvolvimento de Interfaces Web
   JavaScript compartilhado (main.js)

   Seções:
   0. Configuração e layout compartilhado (header / footer)
   1. Navegação
   2. Botões de cópia
   3. Tabs
   4. Acordeão
   5. Mini sandbox
   6. Checklist com progresso (localStorage)
   7. Scroll suave
   8. Tooltips
   ============================================================ */

// ============================================================
// 0. CONFIGURAÇÃO E LAYOUT COMPARTILHADO
//    Header e footer vivem AQUI — editar uma vez altera todas
//    as páginas. Use os placeholders no HTML:
//      <div id="site-header"></div>
//      <div id="site-footer"></div>
//    Páginas em subpastas: data-root="../"
//    Páginas de detalhe:   data-variant="detail" data-title="..." data-open="url"
// ============================================================
const JOURNEY_URL = 'https://site-novo.apps.webtech.network/journey';

const NAV_LINKS = [
  ['index.html',    'Início'],
  ['modulos.html',  'Módulos'],
  ['ambiente.html', 'Ambiente'],
  ['exemplos.html', 'Exemplos'],
  ['recursos.html', 'Recursos'],
];

const FOOTER_LINKS = NAV_LINKS.slice(1);

const currentPage = () => window.location.pathname.split('/').pop() || 'index.html';

function renderHeader(root) {
  const current = currentPage();
  const active  = href => (href === current ? ' active' : '');

  const desktop = NAV_LINKS
    .map(([href, label]) => `<a href="${root}${href}" class="nav-link${active(href)}">${label}</a>`)
    .join('');

  const mobile = NAV_LINKS
    .map(([href, label]) =>
      `<a href="${root}${href}" class="nav-link${active(href)} block px-3 py-2.5 rounded-lg text-sm hover:bg-brand-soft">${label}</a>`)
    .join('');

  return `
  <header class="wt-header">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-[72px]">
        <a href="${root}index.html" class="flex items-center gap-3 shrink-0" aria-label="Journey Intro Web — início">
          <img src="${root}assets/images/logo-webtech.png" alt="WebTech Network" class="h-10 md:h-12 w-auto" width="127" height="48">
          <span class="hidden sm:flex flex-col leading-tight border-l border-line pl-3">
            <span class="font-bold text-[15px] text-ink tracking-tight">Journey Intro Web</span>
            <span class="text-[11px] text-muted font-medium">WebTech Network</span>
          </span>
        </a>
        <nav class="hidden md:flex items-center gap-6" aria-label="Navegação principal">${desktop}</nav>
        <div class="flex items-center gap-3">
          <a href="${JOURNEY_URL}" target="_blank" rel="noopener" class="wt-btn-yellow text-sm hidden sm:inline-flex">Ver jornadas</a>
          <button id="mobile-menu-btn" aria-expanded="false" aria-label="Menu"
                  class="md:hidden p-2 rounded-lg text-body hover:bg-line-soft transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden border-t border-line-soft bg-surface">
      <div class="px-4 py-3 space-y-1">
        ${mobile}
        <a href="${JOURNEY_URL}" target="_blank" rel="noopener" class="wt-btn-yellow text-sm w-full justify-center mt-2">Ver jornadas</a>
      </div>
    </div>
  </header>`;
}

function renderDetailHeader(root, title, openUrl) {
  return `
  <header class="wt-header h-16 flex items-center px-4">
    <div class="max-w-full w-full flex items-center gap-3">
      <a href="${root}index.html" class="flex items-center gap-2 shrink-0" aria-label="Journey Intro Web">
        <img src="${root}assets/images/logo-webtech.png" alt="WebTech" class="h-9 w-auto">
        <span class="hidden sm:block text-sm font-bold text-ink border-l border-line pl-2 ml-1">Journey Intro Web</span>
      </a>
      <span class="text-faint text-sm hidden sm:block">›</span>
      <a href="${root}exemplos.html" class="text-muted hover:text-brand text-sm hidden sm:block font-medium">Exemplos</a>
      <span class="text-faint text-sm hidden sm:block">›</span>
      <span class="text-ink text-sm font-semibold truncate">${title}</span>
      <div class="ml-auto">
        <a href="${openUrl}" target="_blank" class="wt-btn-yellow text-xs py-1.5 px-3">↗ Abrir em nova aba</a>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  const links = FOOTER_LINKS
    .map(([href, label]) => `<a href="${href}" class="hover:text-white transition-colors">${label}</a>`)
    .join('');

  return `
  <footer class="wt-footer">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="font-bold text-white text-sm">Journey Intro Web</p>
          <p class="text-xs mt-1 text-faint">PUC Minas · WebTech Network · Introdução à Web</p>
        </div>
        <div class="flex flex-wrap justify-center gap-6 text-sm">${links}</div>
      </div>
      <div class="border-t border-body mt-8 pt-6 text-center text-xs text-muted">
        Extensão de
        <a href="${JOURNEY_URL}/introducao-web" target="_blank" rel="noopener" class="text-brand-border hover:text-white transition-colors">WebTech Journey · Introdução à Web</a>
        &nbsp;·&nbsp;
        <a href="https://webtech.network" target="_blank" rel="noopener" class="hover:text-white transition-colors">WebTech PUC Minas</a>
        &nbsp;·&nbsp;
        <a href="https://github.com/typicode/json-server" target="_blank" rel="noopener" class="hover:text-white transition-colors">JSON Server</a>
      </div>
    </div>
  </footer>`;
}

// Substitui o placeholder pelo elemento real (mantém position:sticky e margin-top:auto funcionando)
function mount(placeholder, html) {
  placeholder.replaceWith(document.createRange().createContextualFragment(html));
}

function injectLayout() {
  const header = document.getElementById('site-header');
  if (header) {
    const { root = '', variant, title = '', open = '#' } = header.dataset;
    mount(header, variant === 'detail' ? renderDetailHeader(root, title, open) : renderHeader(root));
  }

  const footer = document.getElementById('site-footer');
  if (footer) mount(footer, renderFooter());
}

// ============================================================
// 1. NAVEGAÇÃO: menu mobile
// ============================================================
function initNavigation() {
  const menuBtn    = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isHidden));
  });
}

// ============================================================
// 2. BOTÕES DE CÓPIA
// ============================================================
function initCodeCopy() {
  const reset = btn => setTimeout(() => {
    btn.innerHTML = '⎘ Copiar';
    btn.classList.remove('copied');
  }, 2000);

  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const code = btn.closest('.code-block')?.querySelector('code');
      const text = code ? code.textContent : '';

      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // Fallback para browsers sem Clipboard API
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }

      btn.textContent = '✓ Copiado!';
      btn.classList.add('copied');
      reset(btn);
    });
  });
}

// ============================================================
// 3. TABS — o visual da aba ativa vem do CSS ([data-tab-btn].active)
// ============================================================
function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(container => {
    const btns   = container.querySelectorAll('[data-tab-btn]');
    const panels = container.querySelectorAll('[data-tab-panel]');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.add('hidden'));

        btn.classList.add('active');
        container.querySelector(`[data-tab-panel="${btn.dataset.tabBtn}"]`)?.classList.remove('hidden');
      });
    });

    btns[0]?.click(); // primeira aba ativa por padrão
  });
}

// ============================================================
// 4. ACORDEÃO
// ============================================================
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item   = header.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');

      // Fecha todos do mesmo grupo
      item.closest('[data-accordion]')?.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accordion-content').classList.remove('open');
      });

      if (!wasOpen) {
        item.classList.add('open');
        item.querySelector('.accordion-content').classList.add('open');
      }
    });
  });
}

// ============================================================
// 5. MINI SANDBOX: executa HTML+CSS+JS dentro de um <iframe>
// ============================================================
function initSandbox() {
  document.querySelectorAll('.sandbox').forEach(sandbox => {
    const tabs   = sandbox.querySelectorAll('.sandbox-tab[data-lang]');
    const panels = sandbox.querySelectorAll('.sandbox-panel[data-lang]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        sandbox.querySelector(`.sandbox-panel[data-lang="${tab.dataset.lang}"]`)?.classList.add('active');
      });
    });

    const runBtn  = sandbox.querySelector('.sandbox-run-btn');
    const preview = sandbox.querySelector('.sandbox-preview');
    const iframe  = preview?.querySelector('iframe');
    if (!runBtn || !iframe) return;

    const getCode = lang =>
      sandbox.querySelector(`.sandbox-panel[data-lang="${lang}"] code`)?.textContent ?? '';

    runBtn.addEventListener('click', () => {
      iframe.srcdoc = `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${getCode('css')}</style>
</head>
<body>
${getCode('html')}
<script>${getCode('js')}<\/script>
</body>
</html>`;

      preview.style.display = 'block';
      iframe.onload = () => {
        try {
          const h = iframe.contentDocument.body.scrollHeight;
          iframe.style.minHeight = Math.max(h + 32, 150) + 'px';
        } catch (_) { /* ignora */ }
      };
    });
  });
}

// ============================================================
// 6. CHECKLIST COM PROGRESSO (salvo no localStorage)
//    <div data-checklist="nome" data-complete="#id-opcional">
//    Barra/rótulo: data-progress-bar="nome" / data-progress-label="nome"
// ============================================================
function updateProgress(list) {
  const name    = list.dataset.checklist;
  const boxes   = list.querySelectorAll('input[type="checkbox"]');
  const total   = boxes.length;
  const checked = list.querySelectorAll('input[type="checkbox"]:checked').length;

  const bar   = document.querySelector(`[data-progress-bar="${name}"]`);
  const label = document.querySelector(`[data-progress-label="${name}"]`);
  if (bar)   bar.style.width   = (total ? (checked / total) * 100 : 0) + '%';
  if (label) label.textContent = `${checked} / ${total} concluídos`;

  // Mensagem de conclusão (opcional)
  if (list.dataset.complete) {
    const done = document.querySelector(list.dataset.complete);
    if (done) done.style.display = (total && checked === total) ? 'block' : 'none';
  }
}

function initChecklist() {
  document.querySelectorAll('[data-checklist]').forEach(list => {
    const key   = 'diw_checklist_' + list.dataset.checklist;
    const saved = JSON.parse(localStorage.getItem(key) || '{}');

    list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.checked = !!saved[cb.dataset.id];

      cb.addEventListener('change', () => {
        saved[cb.dataset.id] = cb.checked;
        localStorage.setItem(key, JSON.stringify(saved));
        updateProgress(list);
      });
    });

    updateProgress(list);
  });
}

// ============================================================
// 7. SCROLL SUAVE para âncoras da mesma página
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('mobile-menu')?.classList.add('hidden');
    });
  });
}

// ============================================================
// 8. TOOLTIPS: [data-tip="texto"]
// ============================================================
function initTooltips() {
  let tip = null;

  document.querySelectorAll('[data-tip]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      tip = document.createElement('div');
      tip.className = 'fixed z-50 bg-ink text-white text-xs px-2 py-1 rounded pointer-events-none shadow-lg max-w-xs';
      tip.textContent = el.dataset.tip;
      document.body.appendChild(tip);

      const rect = el.getBoundingClientRect();
      tip.style.top  = (rect.bottom + 6) + 'px';
      tip.style.left = rect.left + 'px';
    });
    el.addEventListener('mouseleave', () => { tip?.remove(); tip = null; });
  });
}

// ============================================================
// INICIALIZAÇÃO (injectLayout PRIMEIRO: os demais dependem do header)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  initNavigation();
  initCodeCopy();
  initTabs();
  initAccordion();
  initSandbox();
  initChecklist();
  initSmoothScroll();
  initTooltips();
});
