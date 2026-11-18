import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="not-found" aria-labelledby="error-titulo">
      <h1 id="error-titulo">404 · Página no encontrada</h1>
      <p>Esta dirección no existe en el portafolio.</p>
      <Link className="button" to="/">Volver al inicio</Link>
    </section>
  );
}
