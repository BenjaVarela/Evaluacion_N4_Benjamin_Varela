import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navegacion } from '../../data/portfolioData';
import type { MenuKeyEvent } from '../../types';
import './Navbar.css';

export function Navbar() {
  const [abierto, setAbierto] = useState<boolean>(false);
  const botonMenu = useRef<HTMLButtonElement>(null);

  function cerrarConEscape(evento: MenuKeyEvent): void {
    if (evento.key === 'Escape' && abierto) {
      setAbierto(false);
      botonMenu.current?.focus();
    }
  }

  return (
    <header className="navbar">
      <nav className="navbar__content" aria-label="Navegación principal" onKeyDown={cerrarConEscape}>
        <NavLink className="navbar__logo" to="/" onClick={() => setAbierto(false)}
          aria-label="Mi Portafolio: ir al inicio">Mi Portafolio</NavLink>
        <button ref={botonMenu} className="navbar__menu" type="button"
          aria-expanded={abierto} aria-controls="navegacion" onClick={() => setAbierto(!abierto)}>
          {abierto ? 'Cerrar menú' : '☰ Menú'}
        </button>
        <ul id="navegacion" className={abierto ? 'navbar__links navbar__links--open' : 'navbar__links'}>
          {navegacion.map(enlace => (
            <li key={enlace.ruta}>
              <NavLink to={enlace.ruta} end={enlace.ruta === '/'} onClick={() => setAbierto(false)}
                className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
                {enlace.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
