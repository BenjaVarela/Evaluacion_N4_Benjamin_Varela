import { useState } from 'react';
import { ProjectCard, RepositoryCard } from '../components/ProjectCard/ProjectCard';
import { StatusMessage } from '../components/StatusMessage/StatusMessage';
import { proyectos } from '../data/portfolioData';
import { useFetchApi } from '../hooks/useFetchApi';
import type { SectionProps } from '../types';

export function ProjectSection({ principal = false }: SectionProps) {
  const Titulo = principal ? 'h1' : 'h2';

  return (
    <section className="projects" aria-labelledby="proyectos-titulo">
      <Titulo id="proyectos-titulo" className="projects__title">Mis Proyectos</Titulo>
      <ul className="projects__grid" aria-label="Lista de mis proyectos destacados">
        {proyectos.map(proyecto => (
          <li key={proyecto.id}>
            <ProjectCard proyecto={proyecto} principal={principal} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function GitHubRepositories() {
  const [intento, setIntento] = useState(0);
  const { data, loading, error } = useFetchApi(intento);

  return (
    <section className="repositories" aria-labelledby="repositorios-titulo">
      <h2 id="repositorios-titulo" className="repositories__title">Mis repositorios en GitHub</h2>
      {loading && <StatusMessage>Cargando repositorios de GitHub…</StatusMessage>}
      {error && (
        <>
          <StatusMessage error>{error}</StatusMessage>
          <button className="button" type="button" onClick={() => setIntento(anterior => anterior + 1)}>
            Reintentar
          </button>
        </>
      )}
      {data && (
        <>
          <StatusMessage>{data.length} repositorios cargados.</StatusMessage>
          <ul className="projects__grid" aria-label="Repositorios públicos de GitHub">
            {data.map(repositorio => (
              <li key={repositorio.id}><RepositoryCard repositorio={repositorio} /></li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export function ProjectsPage() {
  return (
    <>
      <ProjectSection principal />
      <GitHubRepositories />
    </>
  );
}
