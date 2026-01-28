import MainLayout from './components/layout/MainLayout';
import Header from './components/layout/Header';

function App() {
  return (
    <>
      <MainLayout>
        <h1>Hola Mundo</h1>
        <h2>Mi aplicacion creada con React y Tailwind CSS</h2>
        <article>
          <p>
            Esta es una aplicacion de ejemplo para demostrar la estructura
            basica de un proyecto React utilizando componentes reutilizables y
            estilos con Tailwind CSS.
          </p>
        </article>
      </MainLayout>
    </>
  );
}

export default App;
