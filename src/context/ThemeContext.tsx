import { createContext, useContext, useState } from 'react';
import type { ChildrenProps, Theme, ThemeContextValue } from '../types';

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: ChildrenProps) {
  const [tema, setTema] = useState<Theme>('claro');

  function cambiarTema(): void {
    setTema(actual => actual === 'claro' ? 'oscuro' : 'claro');
  }

  return (
    <ThemeContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const contexto = useContext(ThemeContext);
  if (!contexto) throw new Error('useTheme necesita estar dentro de ThemeProvider.');
  return contexto;
}
