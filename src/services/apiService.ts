import { API_URL, repositoriosSeleccionados } from '../data/apiData';
import type { GitHubRepo } from '../types';

export function esRepositorio(valor: unknown): valor is GitHubRepo {
  if (typeof valor !== 'object' || valor === null) return false;
  return 'id' in valor && typeof valor.id === 'number'
    && 'name' in valor && typeof valor.name === 'string'
    && 'description' in valor && (valor.description === null || typeof valor.description === 'string')
    && 'language' in valor && (valor.language === null || typeof valor.language === 'string')
    && 'stargazers_count' in valor && typeof valor.stargazers_count === 'number'
    && 'html_url' in valor && typeof valor.html_url === 'string'
    && valor.html_url.startsWith('https://github.com/')
    && 'updated_at' in valor && typeof valor.updated_at === 'string';
}

async function obtenerPagina(pagina: number, signal: AbortSignal): Promise<GitHubRepo[]> {
  const url = pagina === 1 ? API_URL : `${API_URL}&page=${pagina}`;
  const respuesta: Response = await fetch(url, { signal });
  if (!respuesta.ok) {
    if (respuesta.status === 403 || respuesta.status === 429) {
      throw new Error('GitHub limitó las consultas. Espera unos minutos y vuelve a intentarlo.');
    }
    throw new Error(`No se pudo consultar GitHub (HTTP ${respuesta.status}). Inténtalo otra vez.`);
  }
  const datos: unknown = await respuesta.json();
  if (!Array.isArray(datos) || !datos.every(esRepositorio)) {
    throw new Error('GitHub respondió con un formato inesperado.');
  }
  return datos;
}

export async function obtenerRepositorios(signal: AbortSignal): Promise<GitHubRepo[]> {
  const encontrados = new Map<string, GitHubRepo>();
  let pagina = 1;
  while (encontrados.size < repositoriosSeleccionados.length) {
    const repositorios = await obtenerPagina(pagina, signal);
    for (const repositorio of repositorios) {
      if (repositoriosSeleccionados.includes(repositorio.name)) {
        encontrados.set(repositorio.name, repositorio);
      }
    }
    if (repositorios.length < 6) break;
    pagina += 1;
  }

  return repositoriosSeleccionados.map(nombre => {
    const repositorio = encontrados.get(nombre);
    if (!repositorio) throw new Error(`GitHub no devolvió el repositorio público ${nombre}.`);
    return repositorio;
  });
}
