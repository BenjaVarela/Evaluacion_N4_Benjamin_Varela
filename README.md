# Evaluación 4 · Portafolio de Benjamín Varela

Migración a React y TypeScript del [portafolio original](https://github.com/BenjaVarela/Portafolio_Personal). La aplicación conserva la presentación, los tres proyectos destacados, el formulario, la paleta y la tipografía. La comparación visual se puede realizar mediante la [captura de la E2](docs/captura-e2.png).

## Ejecución y compilación

Se debe abrir la terminal en la carpeta que contiene `package.json` y se debe usar Node.js 20.19+ o 22.12+.

```sh
npm install
npm run dev
```

Se debe abrir la dirección que muestra Vite. Para comprobar el empaquetado y visualizar la versión de producción, se deben ejecutar los siguientes comandos.

```sh
npm run build
npm run preview
```

La compilación verifica TypeScript y genera `dist/`. Al alojar esa carpeta, se debe configurar el servidor para servir `index.html` en rutas internas como `/proyectos`, porque la SPA usa BrowserRouter.

## API de GitHub

Debajo de las tres tarjetas originales, la vista Proyectos muestra seis repositorios elegidos en `src/data/apiData.ts`. La consulta es `GET https://api.github.com/users/BenjaVarela/repos?sort=updated&per_page=6`. El parámetro `sort=updated` ordena por actualización y `per_page=6` fija el tamaño de cada página. El servicio consulta las páginas necesarias para encontrar la selección y muestra los resultados en el orden definido en el archivo.

La respuesta es un arreglo JSON. Cada entrada incluye `id` y `stargazers_count` numéricos, `name`, `html_url` y `updated_at` como texto, y `description` y `language` como texto o `null`. El servicio verifica estos campos. El hook guarda el resultado exitoso en memoria durante un minuto y cancela la petición al salir de la vista.

Se escogió la API de GitHub porque permite mostrar información actualizada de los proyectos reales del autor dentro del portafolio. Su integración facilita que los usuarios conozcan las tecnologías utilizadas y accedan al código fuente.

## Pruebas manuales

El tema usa `ThemeProvider` en la raíz. La navegación modifica el estado con `useTheme` y el layout lo lee para aplicar los colores a todas las páginas. Context permite compartir esta preferencia entre distintos niveles sin pasarla como prop por cada componente. La aplicación inicia con el tema claro y conserva la selección durante la navegación.

Para comprobarlo, se debe activar **Modo oscuro**, cambiar de página y verificar que los colores se mantengan. Se debe pulsar nuevamente el botón para volver al tema claro. El botón también funciona con teclado y anuncia su estado con `aria-pressed`.

1. En Inicio, se debe usar Tab para encontrar **Saltar al contenido**, activar el botón con Enter y comprobar que el foco avance al contenido. Se deben recorrer los controles con Tab y Shift+Tab.
2. Se debe entrar a Sobre mí, Proyectos y Contacto. El enlace de la página activa debe quedar subrayado. Se debe abrir `/no-existe` y seleccionar **Volver al inicio**.
3. En Proyectos deben aparecer **API REST con FastAPI**, **Calculadora de Límites** y **Primera página web**. Debajo, la sección **Mis repositorios en GitHub** muestra la carga y luego seis tarjetas con descripción, lenguaje, estrellas y enlace al código. Si GitHub no responde, la sección muestra un aviso y permite reintentar.
4. Se debe intentar enviar el formulario de Contacto vacío. Deben aparecer los errores y el foco debe ir al primer campo inválido. Luego se debe completar un nombre, un correo como `prueba@example.com` y un mensaje de al menos diez caracteres. Debe aparecer la confirmación. El formulario es una demostración local.
5. En la vista móvil del navegador con **320 px** de ancho, se debe abrir el menú con Enter y cerrarlo con Escape. El foco debe volver al botón. Se debe verificar que no haya desplazamiento horizontal.

La revisión de accesibilidad cubre foco visible, etiquetas de formulario, navegación por teclado y mensajes WAI-ARIA.
