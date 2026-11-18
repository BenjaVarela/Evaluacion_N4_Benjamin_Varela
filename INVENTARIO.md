# Inventario de migración de la E2

| Parte del original | Ubicación en React | Cambio |
| --- | --- | --- |
| Navegación y nombre del sitio | `src/components/Navbar/` | Rutas con NavLink, indicación de ruta activa y menú móvil. |
| Presentación y avatar | `src/pages/AboutPage.tsx` y `src/assets/perfil.jpg` | Se reutilizan en Inicio y Sobre mí, con texto alternativo descriptivo. |
| Tres proyectos destacados | `src/pages/ProjectsPage.tsx`, `src/components/ProjectCard/` y `src/data/portfolioData.ts` | Se conservan las tres tarjetas y sus enlaces. |
| Formulario | `src/pages/ContactPage.tsx` | Campos controlados, etiquetas visibles, errores por campo y confirmación local. |
| Pie de página | `src/App.tsx` | Conserva el pie original. |
| Preferencia de tema | `src/context/ThemeContext.tsx`, `src/App.tsx` y `src/components/Navbar/` | Función añadida con Context API para compartir el tema entre el botón y el layout. |
| Paleta, fuente y cuadrícula | `src/index.css`, `Navbar.css` y `ProjectCard.css` | Conserva los azules y Segoe UI, con clases BEM y diseño adaptado a pantallas pequeñas. |

La E2 usaba HTML y CSS. La versión actual usa React para el menú, la validación y la ruta 404. También incluye un control para saltar al contenido y reemplaza los enlaces internos por ancla con rutas.

La vista Proyectos muestra las tarjetas originales y debajo, seis repositorios seleccionados. El servicio en `src/services/apiService.ts` consulta la API pública de GitHub. La sección muestra los resultados y los estados de carga y error.
