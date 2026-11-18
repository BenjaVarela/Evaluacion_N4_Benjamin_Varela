import { useEffect, useState } from 'react';
import { obtenerRepositorios } from '../services/apiService';
import type { ApiState, GitHubRepo, RepoCache } from '../types';

// Caché corta en memoria: volver a la ruta no repite una consulta recién terminada.
let cache: RepoCache | null = null;

export function useFetchApi(intento: number): ApiState {
  const [estado, setEstado] = useState<ApiState>({ data: null, loading: true, error: null });

  useEffect(() => {
    const controlador = new AbortController();
    if (cache && Date.now() - cache.fecha < 60000) {
      setEstado({ data: cache.datos, loading: false, error: null });
      return () => controlador.abort();
    }

    async function cargar(): Promise<void> {
      setEstado({ data: null, loading: true, error: null });
      try {
        const datos: GitHubRepo[] = await obtenerRepositorios(controlador.signal);
        if (controlador.signal.aborted) return;
        cache = { datos, fecha: Date.now() };
        setEstado({ data: datos, loading: false, error: null });
      } catch (error: unknown) {
        if (controlador.signal.aborted) return;
        setEstado({
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : 'No se pudieron cargar los repositorios.',
        });
      }
    }

    void cargar();
    return () => controlador.abort();
  }, [intento]);

  return estado;
}
