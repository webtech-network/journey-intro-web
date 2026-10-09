/* ============================================================
   Tailwind (CDN) → tokens do style.css
   Carregar logo APÓS <script src="https://cdn.tailwindcss.com">.
   Para mudar uma cor, edite as variáveis em assets/css/style.css,
   NÃO este arquivo.
   ============================================================ */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-body)'],
        display: ['var(--font-display)'],
        mono:    ['var(--font-mono)'],
      },
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          hover:   'var(--brand-hover)',
          soft:    'var(--brand-soft)',
          border:  'var(--brand-border)',
          ink:     'var(--brand-ink)',
        },
        highlight: { DEFAULT: 'var(--highlight)', hover: 'var(--highlight-hover)' },

        // texto
        ink:   'var(--ink)',    // títulos
        body:  'var(--text)',   // corpo
        muted: 'var(--muted)',
        faint: 'var(--faint)',

        // superfícies e bordas
        app:     'var(--bg)',
        surface: { DEFAULT: 'var(--surface)', alt: 'var(--surface-alt)' },
        line:    { DEFAULT: 'var(--line)',    soft: 'var(--line-soft)' },

        // status
        success: { DEFAULT: 'var(--success)', soft: 'var(--success-soft)', ink: 'var(--success-ink)', border: 'var(--success-border)' },
        warning: { DEFAULT: 'var(--warning)', soft: 'var(--warning-soft)', ink: 'var(--warning-ink)' },
        danger:  { DEFAULT: 'var(--danger)',  soft: 'var(--danger-soft)',  ink: 'var(--danger-ink)' },

        // tema escuro (código / páginas de detalhe)
        code: { DEFAULT: 'var(--code-bg)', text: 'var(--code-text)', accent: 'var(--code-accent)' },

        // cor por módulo: defina style="--mod: var(--c-m01)" no elemento pai
        mod: {
          DEFAULT: 'var(--mod)',
          soft:    'color-mix(in srgb, var(--mod) 12%, white)',
          border:  'color-mix(in srgb, var(--mod) 25%, white)',
          ink:     'color-mix(in srgb, var(--mod) 70%, black)',
        },
      },
    },
  },
};
