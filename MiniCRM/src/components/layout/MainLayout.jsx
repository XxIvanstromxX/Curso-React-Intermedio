import Header from './Header';
import bg from '../../assets/bg.mp4';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={bg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">{children}</main>

        <footer className="text-center">
          Hecho con amor a la programación
        </footer>
      </div>
    </div>
  );
}
