/** @type {import('tailwindcss').Config} */
const rgb = (name) => `rgb(var(${name}) / <alpha-value>)`;

module.exports = {
    content: ["./public/**/*.html", "./public/assets/js/**/*.js"],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: rgb("--wt-purple"),
                    hover: rgb("--wt-purple-end"),
                    soft: "rgb(var(--wt-purple) / 0.06)",
                    border: "rgb(var(--wt-purple) / 0.28)",
                    ink: rgb("--wt-purple-text"),
                    light: rgb("--wt-purple-light"),
                },
                highlight: {
                    DEFAULT: rgb("--wt-yellow"),
                    hover: "rgb(var(--wt-yellow) / 0.86)",
                },
                ink: {
                    DEFAULT: rgb("--wt-text"),
                    soft: rgb("--wt-muted"),
                    faint: rgb("--wt-faint"),
                    invert: rgb("--wt-subtle"),
                },
                body: rgb("--wt-muted"),
                muted: rgb("--wt-muted"),
                faint: rgb("--wt-faint"),
                app: "#FFFFFF",
                surface: {
                    DEFAULT: "#FFFFFF",
                    alt: rgb("--wt-subtle"),
                },
                line: {
                    DEFAULT: rgb("--wt-border"),
                    soft: rgb("--wt-border-soft"),
                    dark: rgb("--wt-border-dark"),
                },
                success: {
                    DEFAULT: rgb("--wt-success"),
                    soft: "rgb(var(--wt-success) / 0.12)",
                    ink: "#0B6B52",
                    border: "rgb(var(--wt-success) / 0.35)",
                },
                warning: {
                    DEFAULT: rgb("--wt-yellow"),
                    soft: "rgb(var(--wt-yellow) / 0.16)",
                    ink: "#7A5600",
                },
                danger: {
                    DEFAULT: rgb("--wt-danger"),
                    soft: "rgb(var(--wt-danger) / 0.10)",
                    ink: "#9D1158",
                },
                code: {
                    DEFAULT: "#0A0A0A",
                    bar: "#171717",
                    line: "#2B2B2B",
                    text: "#EDEAF4",
                    muted: "#9C97AA",
                    accent: rgb("--wt-purple-light"),
                },

            },
            fontFamily: {
                sans: ["Geist", "system-ui", "-apple-system", "sans-serif"],
                display: ["Montserrat", "Geist", "system-ui", "sans-serif"],
                mono: ["Geist Mono", "ui-monospace", "Consolas", "monospace"],
            },
        },
    },
};
