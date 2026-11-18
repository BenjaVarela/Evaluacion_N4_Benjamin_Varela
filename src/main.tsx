import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const raiz = document.getElementById('root');
if (!raiz) throw new Error('No se encontró la raíz de la aplicación.');
createRoot(raiz).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
