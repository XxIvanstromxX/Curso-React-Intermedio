# React + Vite

Primer clase. No me fue posible hacer que funcione CSS a pesar de estar instalado.
Corregido: habia que agregar unas lineas al /vite.config.js de forma manual.

concretamente:

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

