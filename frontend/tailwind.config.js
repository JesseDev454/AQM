/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "on-secondary-container": "#fefcff",
        "surface-container-lowest": "#ffffff",
        error: "#ba1a1a",
        "surface-container-highest": "#dce2f3",
        "primary-fixed": "#6ffbbe",
        "surface-container-high": "#e2e8f8",
        surface: "#f9f9ff",
        tertiary: "#5c5f60",
        "on-surface-variant": "#3c4a42",
        "tertiary-container": "#a1a3a4",
        "surface-tint": "#006c49",
        "on-surface": "#151c27",
        "on-primary-container": "#00422b",
        "surface-bright": "#f9f9ff",
        "on-error-container": "#93000a",
        "on-background": "#151c27",
        primary: "#006c49",
        "inverse-primary": "#4edea3",
        "on-primary-fixed": "#002113",
        "on-tertiary": "#ffffff",
        outline: "#6c7a71",
        "on-secondary-fixed": "#001a42",
        "secondary-fixed-dim": "#adc6ff",
        "tertiary-fixed-dim": "#c5c7c8",
        "secondary-fixed": "#d8e2ff",
        "on-primary": "#ffffff",
        "surface-variant": "#dce2f3",
        "on-tertiary-fixed": "#191c1d",
        "surface-dim": "#d3daea",
        "on-secondary": "#ffffff",
        background: "#f9f9ff",
        "tertiary-fixed": "#e1e3e4",
        secondary: "#0058be",
        "error-container": "#ffdad6",
        "on-tertiary-container": "#37393b",
        "outline-variant": "#bbcabf",
        "surface-container-low": "#f0f3ff",
        "primary-container": "#10b981",
        "on-error": "#ffffff",
        "inverse-on-surface": "#ebf1ff",
        "inverse-surface": "#2a313d",
        "on-primary-fixed-variant": "#005236",
        "surface-container": "#e7eefe",
        "primary-fixed-dim": "#4edea3",
        "on-tertiary-fixed-variant": "#454748",
        "secondary-container": "#2170e4",
        "on-secondary-fixed-variant": "#004395"
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem"
      },
      spacing: {
        max_width: "1440px",
        xl: "32px",
        base: "4px",
        xs: "4px",
        margin: "32px",
        lg: "24px",
        gutter: "24px",
        md: "16px",
        sm: "8px"
      },
      fontFamily: {
        geist: ["Geist", "Inter", "system-ui", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "title-lg": ["18px", { lineHeight: "28px", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "56px", fontWeight: "700" }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-sm": ["11px", { lineHeight: "14px", fontWeight: "600" }]
      }
    }
  },
  plugins: []
};
