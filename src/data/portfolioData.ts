import type { NavItem, Profile, ProjectItem } from '../types';

export const perfil: Profile = {
  nombre: 'Benjamín Varela',
  presentacion: 'Estudiante de Ingeniería Civil en Informática. Me gusta desarrollar software, crear APIs y explorar nuevas tecnologías para resolver problemas.',
};

export const navegacion: NavItem[] = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/sobre-mi', texto: 'Sobre mí' },
  { ruta: '/proyectos', texto: 'Proyectos' },
  { ruta: '/contacto', texto: 'Contacto' },
];

export const proyectos: ProjectItem[] = [
  {
    id: 1,
    titulo: 'API REST con FastAPI',
    descripcion: 'Desarrollo y validación de endpoints utilizando FastAPI y Pydantic en Python.',
    tecnologias: ['Python', 'FastAPI', 'Pydantic'],
    urlRepo: 'https://github.com/BenjaVarela/backend-2026-grupo-3',
  },
  {
    id: 2,
    titulo: 'Calculadora de Límites',
    descripcion: 'Aplicación de escritorio interactiva construida con CustomTkinter, SymPy y Matplotlib.',
    tecnologias: ['Python', 'CustomTkinter', 'SymPy', 'Matplotlib'],
    urlRepo: 'https://github.com/BenjaVarela/Evaluacion_Integrada_1_-EID-',
  },
  {
    id: 3,
    titulo: 'Primera página web',
    descripcion: 'Página web básica con solamente index.html y style.css, donde comencé mi viaje.',
    tecnologias: ['HTML', 'CSS'],
    urlRepo: 'https://github.com/BenjaVarela/my_web',
  },
];
