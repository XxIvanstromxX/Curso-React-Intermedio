
# Clase 1 — Introducción a React con Vite

Bienvenido a la primera clase del curso. En este repositorio encontrarás una configuración mínima con React y Vite para comenzar a practicar componentes, rutas y layout básicos.

**Objetivos de la clase**:
- Entender la estructura de un proyecto React creado con Vite.
- Ejecutar la aplicación en modo desarrollo.
- Revisar los componentes del layout (Header y MainLayout).

**Tecnologías**:
- React 18+
- Vite
- ESLint (configuración básica)

**Estructura principal**:
- [index.html](index.html#L1)
- [vite.config.js](vite.config.js#L1)
- [package.json](package.json#L1)
- [src/main.jsx](src/main.jsx#L1) — punto de entrada
- [src/App.jsx](src/App.jsx#L1) — componente raíz
- [src/index.css](src/index.css#L1) — estilos globales
- [src/components/layout/Header.jsx](src/components/layout/Header.jsx#L1) — cabecera
- [src/components/layout/MainLayout.jsx](src/components/layout/MainLayout.jsx#L1) — layout principal

Instalación y ejecución (macOS / Linux / Windows):

```bash
npm install
npm run dev
```

Comandos útiles:

- `npm run build` — crear build de producción.
- `npm run preview` — previsualizar el build localmente.

Notas para la clase:
- Revisa `src/components/layout/Header.jsx` y `src/components/layout/MainLayout.jsx` para ver cómo se organiza el layout.
- Observa cómo `App.jsx` importa y usa el layout y los estilos.
- Experimenta cambiando el contenido del `Header` y añade un nuevo componente en `src/components`.

Ejercicios propuestos (rápidos):
1. Añadir un componente `Footer` y colocarlo dentro de `MainLayout`.
2. Crear una nueva ruta (o sección) en `App.jsx` que muestre un componente `About`.
3. Estilizar el `Header` usando variables CSS en `src/index.css`.

¿Qué sigue? Si quieres, puedo:
- Ejecutar la app localmente y confirmarte que arranca.
- Añadir el componente `Footer` de ejemplo.
- Crear un pequeño script de lint/format configurado.

Autor: Instructor — Iván Martínez

