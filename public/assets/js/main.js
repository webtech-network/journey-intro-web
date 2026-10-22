/* ============================================================
   Journey Intro Web — JavaScript compartilhado
   0. Layout (header / footer)   4. Acordeão
   1. Navegação                  5. Mini sandbox
   2. Cópia de código            6. Checklist (localStorage)
   3. Tabs                       7. Scroll suave   8. Tooltips
   ============================================================ */

const JOURNEY_URL = "https://site-novo.apps.webtech.network/journey";
const SITE_URL = "https://site-novo.apps.webtech.network";

const NAV_LINKS = [
  { href: "index.html", label: "Início" },
  {
    href: "modulos.html",
    label: "Módulos",
    children: [
      ["modulos.html#m01", "Fundamentos (M01–M03)"],
      ["modulos.html#m04", "Interatividade (M04–M05)"],
      ["modulos.html#m06", "Dados e APIs (M06–M08)"],
      ["modulos.html#m09", "Integração (M09–M10)"],
    ],
  },
  { href: "ambiente.html", label: "Ambiente" },
  { href: "exemplos.html", label: "Exemplos" },
  { href: "recursos.html", label: "Recursos" },
];

const COURSE_LINKS = NAV_LINKS.slice(1);
const SOCIALS = [
  ["https://www.instagram.com/webtech.network", "Instagram", "fa-instagram"],
  ["https://www.linkedin.com/company/webtech-network", "LinkedIn", "fa-linkedin-in"],
  ["https://www.youtube.com/@webtech.network", "YouTube", "fa-youtube"],
  ["https://github.com/webtech-network", "GitHub", "fa-github"],
];
const WEBTECH_LINKS = [
  [`${SITE_URL}/sobre`, "Sobre o projeto"],
  [`${SITE_URL}/journey`, "WebTech Journey"],
  [`${SITE_URL}/eventos`, "Eventos"],
  [`${SITE_URL}/equipe`, "Equipe"],
  [`${SITE_URL}/contato`, "Contato"],
];

const currentPage = () => window.location.pathname.split("/").pop() || "index.html";
const activeClass = (href, current) => (href === current ? " is-active" : "");

function renderHeader(root) {
  const current = currentPage();
  const nav = NAV_LINKS.map((item) => {
    if (!item.children) {
      return `<a href="${root}${item.href}" class="wt-nav__link${activeClass(item.href, current)}">${item.label}</a>`;
    }
    const children = item.children
      .map(([href, label]) => `<a href="${root}${href}">${label}</a>`)
      .join("");
    return `<details class="wt-nav__menu">
      <summary class="wt-nav__link${activeClass(item.href, current)}">${item.label}
        <i class="fa-solid fa-chevron-down wt-nav__chev" aria-hidden="true"></i>
      </summary>
      <div class="wt-nav__dropdown">
        <a href="${root}${item.href}">Ver todos os módulos</a>
        ${children}
      </div>
    </details>`;
  }).join("");

  const mobile = NAV_LINKS
    .map((item) => `<a href="${root}${item.href}" class="${activeClass(item.href, current).trim()}">${item.label}</a>`)
    .join("");

  return `
  <header class="wt-header">
    <div class="wt-container wt-header__inner">
      <div class="flex min-w-0 items-center gap-4">
        <a href="${root}index.html" class="wt-logo" aria-label="Journey Intro Web — início">
          <img src="${root}assets/brand/logo.svg" alt="WebTech Network" width="678" height="161">
        </a>
        <span class="wt-product">
          <strong>Journey Intro Web</strong>
          <span>Curso de Introdução à Web</span>
        </span>
      </div>
      <nav class="wt-nav" aria-label="Navegação principal">${nav}</nav>
      <div class="flex items-center gap-3">
        <a href="${JOURNEY_URL}" target="_blank" rel="noopener" class="wt-btn wt-btn--action wt-btn--sm wt-header__cta">
          Ver jornadas <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
        <button id="mobile-menu-btn" class="wt-menu-btn" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menu">
          <i class="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <nav id="mobile-menu" class="wt-mobile hidden" aria-label="Navegação principal (mobile)">
      ${mobile}
      <a href="${JOURNEY_URL}" target="_blank" rel="noopener" class="wt-btn wt-btn--action wt-btn--block mt-3">
        Ver jornadas <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
      </a>
    </nav>
  </header>`;
}

function renderDetailHeader(root, title, openUrl) {
  return `${renderHeader(root)}
  <div class="wt-subheader">
    <div class="wt-container wt-subheader__inner">
      <nav class="wt-breadcrumb mb-0" aria-label="Trilha">
        <a href="${root}index.html">Início</a><span>/</span>
        <a href="${root}exemplos.html">Exemplos</a><span>/</span>
        <span aria-current="page" class="wt-subheader__title">${title}</span>
      </nav>
      <div class="wt-subheader__actions">
        <a href="${root}exemplos.html" class="wt-btn wt-btn--outline wt-btn--sm">Voltar</a>
        <a href="${openUrl}" target="_blank" rel="noopener" class="wt-btn wt-btn--dark wt-btn--sm">
          Abrir app <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>`;
}

function renderFooter(root) {
  const course = COURSE_LINKS
    .map((item) => `<li><a href="${root}${item.href}">${item.label}</a></li>`)
    .join("");
  const webtech = WEBTECH_LINKS
    .map(([href, label]) => `<li><a href="${href}"${href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${label}</a></li>`)
    .join("");
  const socials = SOCIALS
    .map(([href, label, icon]) => `<a href="${href}" target="_blank" rel="noopener" aria-label="${label}" class="wt-social"><i class="fa-brands ${icon}" aria-hidden="true"></i></a>`)
    .join("");

  return `
  <footer class="wt-footer">
    <div class="wt-footer__grid">
      <div class="wt-footer__brand">
        <a href="${root}index.html" aria-label="Journey Intro Web — início">
          <img src="${root}assets/brand/logo-white.webp" alt="WebTech Network" width="256" height="96">
        </a>
        <p class="mt-5 max-w-[24ch] text-sm leading-relaxed">Conhecimento compartilhado.<br>Possibilidades multiplicadas.</p>
        <p class="mt-4 text-xs text-[#b7b0c6]">Extensão de
          <a href="${JOURNEY_URL}/introducao-web" target="_blank" rel="noopener" class="underline underline-offset-4">WebTech Journey · Introdução à Web</a>
        </p>
      </div>
      <div>
        <h2 class="wt-footer__title">Curso</h2>
        <ul class="mt-5 space-y-2.5 text-sm">${course}</ul>
      </div>
      <div>
        <h2 class="wt-footer__title">WebTech</h2>
        <ul class="mt-5 space-y-2.5 text-sm">${webtech}</ul>
      </div>
      <div>
        <h2 class="wt-footer__title">Acompanhe</h2>
        <div class="mt-5 flex flex-wrap gap-3">${socials}</div>
      </div>
    </div>
    <div class="wt-footer__legal">
      © ${new Date().getFullYear()} WebTech Network · Projeto de extensão da PUC Minas
      <span class="mx-2" aria-hidden="true">·</span> Journey Intro Web
    </div>
  </footer>`;
}

function mount(placeholder, html) {
  placeholder.replaceWith(document.createRange().createContextualFragment(html));
}

function injectLayout() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const root = header?.dataset.root || footer?.dataset.root || "";

  if (header) {
    const { variant, title = "", open = "#" } = header.dataset;
    mount(header, variant === "detail" ? renderDetailHeader(root, title, open) : renderHeader(root));
  }
  if (footer) mount(footer, renderFooter(root));
}

// ============================================================
// 1. NAVEGAÇÃO
// ============================================================
function initNavigation() {
  const header = document.querySelector(".wt-header");
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = menuBtn?.querySelector("i");

  if (header) {
    const shrink = () => header.classList.toggle("is-scrolled", window.scrollY > 96);
    shrink();
    window.addEventListener("scroll", shrink, { passive: true });
  }

  if (!menuBtn || !mobileMenu) return;
  const setOpen = (open) => {
    mobileMenu.classList.toggle("hidden", !open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    if (menuIcon) menuIcon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  };

  menuBtn.addEventListener("click", () => setOpen(mobileMenu.classList.contains("hidden")));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) setOpen(false);
  });
  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
}

// ============================================================
// 2. BOTÕES DE CÓPIA
// ============================================================
function initCodeCopy() {
  const reset = (btn) => setTimeout(() => {
    btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
    btn.classList.remove("copied");
  }, 2000);

  document.querySelectorAll(".btn-copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const code = btn.closest(".code-block, .wt-code")?.querySelector("code");
      const text = code ? code.textContent : "";

      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const field = document.createElement("textarea");
        field.value = text;
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }

      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado!';
      btn.classList.add("copied");
      reset(btn);
    });
  });
}

// ============================================================
// 3. TABS
// ============================================================
function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach((container) => {
    const buttons = container.querySelectorAll("[data-tab-btn]");
    const panels = container.querySelectorAll("[data-tab-panel]");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        panels.forEach((p) => p.classList.add("hidden"));
        btn.classList.add("active");
        container.querySelector(`[data-tab-panel="${btn.dataset.tabBtn}"]`)?.classList.remove("hidden");
      });
    });

    buttons[0]?.click();
  });
}

// ============================================================
// 4. ACORDEÃO
// ============================================================
function initAccordion() {
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      const wasOpen = item.classList.contains("open");

      item.closest("[data-accordion]")?.querySelectorAll(".accordion-item").forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".accordion-content")?.classList.remove("open");
      });

      if (!wasOpen) {
        item.classList.add("open");
        item.querySelector(".accordion-content")?.classList.add("open");
      }
    });
  });
}

// ============================================================
// 5. MINI SANDBOX
// ============================================================
function initSandbox() {
  document.querySelectorAll(".sandbox").forEach((sandbox) => {
    const tabs = sandbox.querySelectorAll(".sandbox-tab[data-lang]");
    const panels = sandbox.querySelectorAll(".sandbox-panel[data-lang]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        sandbox.querySelector(`.sandbox-panel[data-lang="${tab.dataset.lang}"]`)?.classList.add("active");
      });
    });

    const runBtn = sandbox.querySelector(".sandbox-run-btn");
    const preview = sandbox.querySelector(".sandbox-preview");
    const iframe = preview?.querySelector("iframe");
    if (!runBtn || !iframe) return;

    const getCode = (lang) =>
      sandbox.querySelector(`.sandbox-panel[data-lang="${lang}"] code`)?.textContent ?? "";

    runBtn.addEventListener("click", () => {
      iframe.srcdoc = `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${getCode("css")}</style>
</head>
<body>
${getCode("html")}
<script>${getCode("js")}<\/script>
</body>
</html>`;

      preview.style.display = "block";
      iframe.onload = () => {
        try {
          const height = iframe.contentDocument.body.scrollHeight;
          iframe.style.minHeight = Math.max(height + 32, 150) + "px";
        } catch (_) { /* ignora */ }
      };
    });
  });
}

// ============================================================
// 6. CHECKLIST COM PROGRESSO
// ============================================================
function updateProgress(list) {
  const name = list.dataset.checklist;
  const boxes = list.querySelectorAll('input[type="checkbox"]');
  const total = boxes.length;
  const checked = list.querySelectorAll('input[type="checkbox"]:checked').length;

  const bar = document.querySelector(`[data-progress-bar="${name}"]`);
  const label = document.querySelector(`[data-progress-label="${name}"]`);
  if (bar) bar.style.width = (total ? (checked / total) * 100 : 0) + "%";
  if (label) label.textContent = `${checked} / ${total} concluídos`;

  if (list.dataset.complete) {
    const done = document.querySelector(list.dataset.complete);
    if (done) done.style.display = total && checked === total ? "block" : "none";
  }
}

function initChecklist() {
  document.querySelectorAll("[data-checklist]").forEach((list) => {
    const key = "diw_checklist_" + list.dataset.checklist;
    const saved = JSON.parse(localStorage.getItem(key) || "{}");

    list.querySelectorAll('input[type="checkbox"]').forEach((box) => {
      box.checked = !!saved[box.dataset.id];
      box.addEventListener("change", () => {
        saved[box.dataset.id] = box.checked;
        localStorage.setItem(key, JSON.stringify(saved));
        updateProgress(list);
        updateHomeProgress();
      });
    });

    updateProgress(list);
  });
}

function updateHomeProgress() {
  const bar = document.querySelector("[data-course-progress]");
  const label = document.querySelector("[data-course-progress-label]");
  if (!bar || !label) return;

  const saved = JSON.parse(localStorage.getItem("diw_checklist_modulos") || "{}");
  const total = 10;
  const done = Object.values(saved).filter(Boolean).length;
  bar.style.width = (done / total) * 100 + "%";
  label.textContent = `${done} / ${total}`;
}

// ============================================================
// 7. SCROLL SUAVE
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      document.getElementById("mobile-menu")?.classList.add("hidden");
    });
  });
}

// ============================================================
// 7b. SUMÁRIO LATERAL (scroll spy)
// ============================================================
function initSectionNav() {
  const toc = document.querySelector("[data-toc]");
  if (!toc || !("IntersectionObserver" in window)) return;

  const links = [...toc.querySelectorAll('a[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-20% 0px -70% 0px" });

  sections.forEach((section) => observer.observe(section));
}

// ============================================================
// 7c. FILTRO DE EXEMPLOS
// ============================================================
function initExampleFilter() {
  const form = document.getElementById("filtro-exemplos");
  if (!form) return;

  const search = form.querySelector("[data-filter-search]");
  const module = form.querySelector("[data-filter-module]");
  const cards = [...document.querySelectorAll("[data-exemplo]")];
  const count = document.getElementById("exemplos-count");
  const empty = document.getElementById("exemplos-empty");

  const apply = () => {
    const term = (search?.value || "").trim().toLowerCase();
    const mod = module?.value || "";
    let visible = 0;

    cards.forEach((card) => {
      const matchesTerm = !term || card.dataset.titulo.includes(term) || card.textContent.toLowerCase().includes(term);
      const matchesModule = !mod || card.dataset.modulo.includes(mod);
      const show = matchesTerm && matchesModule;
      card.classList.toggle("hidden", !show);
      if (show) visible += 1;
    });

    if (count) count.textContent = `${visible} ${visible === 1 ? "aplicação" : "aplicações"}`;
    empty?.classList.toggle("hidden", visible > 0);
  };

  form.addEventListener("input", apply);
  form.addEventListener("change", apply);
  form.addEventListener("submit", (event) => { event.preventDefault(); apply(); });
  form.addEventListener("reset", () => setTimeout(apply, 0));
  apply();
}

// ============================================================
// 8. TOOLTIPS
// ============================================================
function initTooltips() {
  let tip = null;

  document.querySelectorAll("[data-tip]").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tip = document.createElement("div");
      tip.className = "fixed z-50 max-w-xs rounded-lg bg-ink px-2.5 py-1.5 font-mono text-[11px] text-white shadow-lg pointer-events-none";
      tip.textContent = element.dataset.tip;
      document.body.appendChild(tip);

      const rect = element.getBoundingClientRect();
      tip.style.top = rect.bottom + 6 + "px";
      tip.style.left = rect.left + "px";
    });
    element.addEventListener("mouseleave", () => { tip?.remove(); tip = null; });
  });
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  injectLayout();
  initNavigation();
  initCodeCopy();
  initTabs();
  initAccordion();
  initSandbox();
  initChecklist();
  updateHomeProgress();
  initSmoothScroll();
  initSectionNav();
  initExampleFilter();
  initTooltips();
});
