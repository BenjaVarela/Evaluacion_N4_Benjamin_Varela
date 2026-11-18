import { perfil } from '../data/portfolioData';
import foto from '../assets/perfil.jpg';

export function AboutPage() {
  return (
    <section className="hero" aria-labelledby="presentacion">
      <img className="hero__photo" src={foto} alt="Ilustración de Luffy, avatar de Benjamín Varela" width="160" height="160" />
      <h1 id="presentacion" className="hero__title">¡Hola! Soy {perfil.nombre}</h1>
      <p className="hero__description">{perfil.presentacion}</p>
    </section>
  );
}
