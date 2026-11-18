import { createContext, useContext, useEffect, useState } from 'react';
import type { ChildrenProps, Theme, ThemeContextValue } from '../types';

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: ChildrenProps) {
  const [tema, setTema] = useState<Theme>('claro');

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
  }, [tema]);

  function cambiarTema(): void {
    setTema(temaActual => temaActual === 'claro' ? 'oscuro' : 'claro');
  }

  return <ThemeContext.Provider value={{ tema, cambiarTema }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const contexto = useContext(ThemeContext);
  if (!contexto) throw new Error('Falta ThemeProvider.');
  return contexto;
}
