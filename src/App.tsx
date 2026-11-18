import { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { useTheme } from './context/ThemeContext';
import { navegacion, perfil } from './data/portfolioData';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

function Footer() {
  return (
    <footer className="footer">
      <p>© <time dateTime="2026">2026</time> {perfil.nombre}.</p>
    </footer>
  );
}

function Layout() {
  const { tema } = useTheme();
  const { pathname } = useLocation();
  const contenido = useRef<HTMLElement>(null);
  const rutaAnterior = useRef(pathname);

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    return () => {
      delete document.documentElement.dataset.tema;
    };
  }, [tema]);

  useEffect(() => {
    const ruta = pathname === '/' ? '/' : pathname.replace(/\/+$/, '').toLowerCase();
    const pagina = navegacion.find(enlace => enlace.ruta === ruta);
    document.title = (pagina?.texto ?? 'Página no encontrada') + ' - ' + perfil.nombre;

    // En la primera carga, Tab empieza por el botón para saltar al contenido.
    if (rutaAnterior.current === pathname) return;
    rutaAnterior.current = pathname;
    window.scrollTo(0, 0);
    contenido.current?.focus({ preventScroll: true });
  }, [pathname]);

  function saltarAlContenido(): void {
    contenido.current?.focus();
  }

  return (
    <>
      <button className="skip-link" type="button" onClick={saltarAlContenido}>
        Saltar al contenido
      </button>
      <Navbar />
      <main ref={contenido} className="layout" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
