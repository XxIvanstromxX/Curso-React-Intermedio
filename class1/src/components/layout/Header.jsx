  export default function Header() {
  return (
    <nav className="flex items-center bg-gray-800 justify-between p-4 text-white">
      <h1>Mi Aplicacion</h1>
      <ul className="flex gap-4">
        <li className="underline">
          <a href="">Inicio</a>
        </li>
        <li className="underline">Acerca de</li>
        <li className="underline">Contacto</li>
      </ul>
    </nav>
  );
}
