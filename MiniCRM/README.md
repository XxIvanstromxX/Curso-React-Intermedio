# Clase 3 — Context API en React

En esta clase se incorporó Context API para compartir el estado de clientes en toda la app, usando un `Provider` y `useContext` para consumir el estado y las acciones.

**Objetivos de la clase**:
- Implementar un `Context` para el estado de clientes.
- Conectar el `Provider` con la aplicación.
- Consumir estado y `dispatch` desde componentes.

**Temas principales**:
- Creación de `ClientsContext` y `ClientsProvider` con `useReducer`.
- Integración del `Provider` en el árbol principal.
- Consumo del contexto en componentes de acciones y listado.

**Componentes y archivos vistos**:
- [src/context/ClientsContext.jsx](src/context/ClientsContext.jsx)
- [src/reducers/clientsReducer.js](src/reducers/clientsReducer.js)
- [src/pages/ClientsPage.jsx](src/pages/ClientsPage.jsx)
- [src/components/clients/ClientActions.jsx](src/components/clients/ClientActions.jsx)
- [src/components/clients/ClientList.jsx](src/components/clients/ClientList.jsx)
- [src/App.jsx](src/App.jsx)

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
- El estado de clientes se comparte con `ClientsContext`.
- `ClientActions` y `ClientList` consumen el contexto con `useContext`.

---

# Clase 4 — (espacio reservado)

---

# Clase 5 — (espacio reservado)

---

# Clase 6 — (espacio reservado)

Autor del código: Iván Martínez