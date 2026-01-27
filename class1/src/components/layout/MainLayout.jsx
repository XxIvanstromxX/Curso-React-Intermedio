import Header from './Header';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-amber-200">{children}</main>

      <footer className="text-center"> Hecho con amor a la programación</footer>
    </div>
  );
}
