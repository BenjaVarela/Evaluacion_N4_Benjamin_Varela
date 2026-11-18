import type { ProjectCardProps, RepositoryCardProps } from '../../types';
import './ProjectCard.css';

export function ProjectCard({ proyecto, principal = false }: ProjectCardProps) {
  const Titulo = principal ? 'h2' : 'h3';
  return (
    <article className="project-card" aria-labelledby={`proyecto-${proyecto.id}`}>
      <Titulo id={`proyecto-${proyecto.id}`} className="project-card__title">{proyecto.titulo}</Titulo>
      <p className="project-card__description">{proyecto.descripcion}</p>
      <p className="project-card__technologies">{proyecto.tecnologias.join(' · ')}</p>
      <a className="button" href={proyecto.urlRepo} target="_blank" rel="noopener noreferrer"
        aria-label={`Ir al Proyecto: ${proyecto.titulo} en GitHub (nueva pestaña)`}>Ir al Proyecto</a>
    </article>
  );
}

export function RepositoryCard({ repositorio }: RepositoryCardProps) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{repositorio.name}</h3>
      <p className="project-card__description">{repositorio.description || 'Este repositorio aún no tiene descripción.'}</p>
      <p className="project-card__technologies">Lenguaje: {repositorio.language ?? 'No especificado'}</p>
      <p>Estrellas: {repositorio.stargazers_count}</p>
      <a className="button" href={repositorio.html_url} target="_blank" rel="noopener noreferrer"
        aria-label={`Ver código de ${repositorio.name} en GitHub (nueva pestaña)`}>Ver código</a>
    </article>
  );
}
