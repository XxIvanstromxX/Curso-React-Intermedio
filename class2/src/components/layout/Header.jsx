export default function Header() {
  return (
    <nav className="flex items-center bg-gray-800 justify-between p-4 text-white">
      <h1>My Aplication</h1>
      <ul className="flex gap-4">
        <li className="underline">
          <a href="">home</a>
        </li>
        <li className="underline">About</li>
        <li className="underline">Contact</li>
      </ul>
    </nav>
  );
}
