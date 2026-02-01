
# Clase 2 — Estado en React: useState y useReducer

En esta clase profundizamos en el manejo de estado en React. Partimos con un repaso práctico de `useState`, revisando los errores más comunes al usarlo, y cerramos con lo más importante: entender cómo funciona `useReducer` y cómo implementarlo en un flujo real de trabajo.

**Objetivos de la clase**:
- Repasar `useState` y buenas prácticas de actualización de estado.
- Identificar errores frecuentes al trabajar con estado.
- Comprender el patrón de reducer.
- Implementar `useReducer` para manejar un estado más complejo.

**Temas principales**:
- Repaso de `useState` y su uso correcto.
- Errores comunes con `useState`:
	- Actualizaciones con estado “stale” y solución con actualizador funcional.
	- Mutación directa de estado y enfoque inmutable.
	- Estado derivado y cómo calcularlo en el render.
- Fundamentos de `useReducer`.
- Implementación de `useReducer` para gestionar clientes (acciones de agregar, eliminar y actualizar).

**Componentes y ejemplos vistos**:
- Ejemplos de errores con `useState`.
- Contador básico con `useState`.
- Página de clientes con `useReducer` y reducer dedicado.

**Estructura principal del proyecto**:
- [src/components/errors/AsyncState.jsx](src/components/errors/AsyncState.jsx)
- [src/components/errors/DirectMutationState.jsx](src/components/errors/DirectMutationState.jsx)
- [src/components/errors/DerivateState.jsx](src/components/errors/DerivateState.jsx)
- [src/components/pruebas/Contador.jsx](src/components/pruebas/Contador.jsx)
- [src/reducers/clientsReducer.js](src/reducers/clientsReducer.js)
- [src/pages/ClientsPage.jsx](src/pages/ClientsPage.jsx)
- [src/components/clients/ClientActions.jsx](src/components/clients/ClientActions.jsx)
- [src/components/clients/ClientList.jsx](src/components/clients/ClientList.jsx)

**Tecnologías**:
- React 18+
- Vite
- Tailwind CSS
- ESLint (configuración básica)

**Instalación y ejecución**:
- npm install
- npm run dev

**Comandos útiles**:
- npm run build — crear build de producción.
- npm run preview — previsualizar el build localmente.
- npm run lint — revisar el código con ESLint.

**Notas de la clase**:
- En los ejemplos de errores con `useState` se muestran problemas de estado “stale”, mutación directa y estado derivado.
- El flujo con `useReducer` utiliza acciones para agregar, eliminar y actualizar clientes.
- Revisa cómo se conecta la página de clientes con el reducer y las acciones.

Autor del código: Iván Martínez

