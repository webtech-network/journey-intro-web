/* ============================================================
   DIW - Desenvolvimento de Interfaces Web
   JavaScript Compartilhado (main.js)

   Este arquivo demonstra conceitos de JS que são ensinados
   na disciplina: funções, eventos, DOM, localStorage, fetch.
   ============================================================ */

// ============================================================
// 1. NAVEGAÇÃO: menu mobile e destaque do link ativo
// ============================================================
function initNavigation() {
  // Menu mobile toggle
  const menuBtn  = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  // Destaca o link da página atual na navegação
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================================
// 2. BOTÕES DE CÓPIA: adiciona "Copiar" a cada .code-block
// ============================================================
function initCodeCopy() {
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      // Busca o <code> dentro do mesmo .code-block
      const block = btn.closest('.code-block');
      const code  = block ? block.querySelector('code') : null;
      const text  = code ? code.textContent : '';

      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = '✓ Copiado!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = '⎘ Copiar';
          btn.classList.remove('copied');
        }, 2000);
      } catch {
        // Fallback para browsers sem Clipboard API
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = '✓ Copiado!';
        setTimeout(() => { btn.innerHTML = '⎘ Copiar'; }, 2000);
      }
    });
  });
}

// ============================================================
// 3. TABS SIMPLES: alterna conteúdo por botões [data-tab]
// ============================================================
function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(container => {
    const btns    = container.querySelectorAll('[data-tab-btn]');
    const panels  = container.querySelectorAll('[data-tab-panel]');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tabBtn;

        btns.forEach(b => b.classList.remove('active', 'border-indigo-500', 'text-indigo-600'));
        panels.forEach(p => p.classList.add('hidden'));

        btn.classList.add('active', 'border-indigo-500', 'text-indigo-600');
        const panel = container.querySelector(`[data-tab-panel="${target}"]`);
        if (panel) panel.classList.remove('hidden');
      });
    });

    // Ativa o primeiro tab por padrão
    if (btns.length) btns[0].click();
  });
}

// ============================================================
// 4. ACORDEÃO: expande/colapsa seções de conteúdo
// ============================================================
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item    = header.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen  = item.classList.contains('open');

      // Fecha todos do mesmo grupo
      const group = item.closest('[data-accordion]');
      if (group) {
        group.querySelectorAll('.accordion-item').forEach(i => {
          i.classList.remove('open');
          i.querySelector('.accordion-content').classList.remove('open');
        });
      }

      // Reabre o clicado se estava fechado
      if (!isOpen) {
        item.classList.add('open');
        content.classList.add('open');
      }
    });
  });
}

// ============================================================
// 5. MINI SANDBOX: executa HTML+CSS+JS dentro de um <iframe>
//    (Demonstra como montar código dinâmico com JS!)
// ============================================================
function initSandbox() {
  document.querySelectorAll('.sandbox').forEach(sandbox => {
    // Tabs de linguagem
    const tabs   = sandbox.querySelectorAll('.sandbox-tab[data-lang]');
    const panels = sandbox.querySelectorAll('.sandbox-panel[data-lang]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const lang  = tab.dataset.lang;
        const panel = sandbox.querySelector(`.sandbox-panel[data-lang="${lang}"]`);
        if (panel) panel.classList.add('active');
      });
    });

    // Botão Executar
    const runBtn  = sandbox.querySelector('.sandbox-run-btn');
    const preview = sandbox.querySelector('.sandbox-preview');

    if (runBtn && preview) {
      runBtn.addEventListener('click', () => {
        // Lê código de cada painel
        const getCode = lang => {
          const el = sandbox.querySelector(`.sandbox-panel[data-lang="${lang}"] code`);
          return el ? el.textContent : '';
        };

        const html = getCode('html');
        const css  = getCode('css');
        const js   = getCode('js');

        // Monta o documento completo
        const doc = `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${css}</style>
</head>
<body>
${html}
<script>${js}<\/script>
</body>
</html>`;

        // Injeta no iframe
        const iframe = preview.querySelector('iframe');
        if (iframe) {
          preview.style.display = 'block';
          iframe.srcdoc = doc;
          // Ajusta altura ao conteúdo após carregamento
          iframe.onload = () => {
            try {
              const h = iframe.contentDocument.body.scrollHeight;
              iframe.style.minHeight = Math.max(h + 32, 150) + 'px';
            } catch(_) {}
          };
        }
      });
    }
  });
}

// ============================================================
// 6. CHECKLIST INTERATIVO: marca/desmarca itens
//    (Salva estado no localStorage – exemplo didático!)
// ============================================================
function initChecklist() {
  document.querySelectorAll('[data-checklist]').forEach(list => {
    const key = 'diw_checklist_' + list.dataset.checklist;
    const saved = JSON.parse(localStorage.getItem(key) || '{}');

    list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      const id = cb.dataset.id;
      if (saved[id]) cb.checked = true;

      cb.addEventListener('change', () => {
        saved[id] = cb.checked;
        localStorage.setItem(key, JSON.stringify(saved));
        updateProgress(list);
      });
    });

    updateProgress(list);
  });
}

function updateProgress(list) {
  const total   = list.querySelectorAll('input[type="checkbox"]').length;
  const checked = list.querySelectorAll('input[type="checkbox"]:checked').length;
  const bar     = list.parentElement && list.parentElement.querySelector('[data-progress-bar]');
  const label   = list.parentElement && list.parentElement.querySelector('[data-progress-label]');

  if (bar)   bar.style.width   = (total ? (checked / total) * 100 : 0) + '%';
  if (label) label.textContent = `${checked} / ${total} concluídos`;
}

// ============================================================
// 7. SCROLL SUAVE: para âncoras da mesma página
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Fecha menu mobile se aberto
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.add('hidden');
      }
    });
  });
}

// ============================================================
// 8. TOOLTIPS: mostra dica ao passar o mouse em [data-tip]
// ============================================================
function initTooltips() {
  let tip = null;
  document.querySelectorAll('[data-tip]').forEach(el => {
    el.addEventListener('mouseenter', e => {
      tip = document.createElement('div');
      tip.className = 'fixed z-50 bg-gray-900 text-white text-xs px-2 py-1 rounded pointer-events-none shadow-lg max-w-xs';
      tip.textContent = el.dataset.tip;
      document.body.appendChild(tip);

      const rect = el.getBoundingClientRect();
      tip.style.top  = (rect.bottom + 6) + 'px';
      tip.style.left = rect.left + 'px';
    });
    el.addEventListener('mouseleave', () => { if (tip) { tip.remove(); tip = null; } });
  });
}

// ============================================================
// INICIALIZAÇÃO: chama tudo quando o DOM estiver pronto
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCodeCopy();
  initTabs();
  initAccordion();
  initSandbox();
  initChecklist();
  initSmoothScroll();
  initTooltips();
});
