# Declaración de uso de Inteligencia Artificial

## 1. IA usada
Se utilizó la herramienta de Inteligencia Artificial **Gemini**.
## 2. Modelo
Gemini Hydrogen en nivel de razonamiento alto.

## 3. Propósito de uso
Se solicitó asistencia para organizar el trabajo según la rúbrica, comprender una base de React con TypeScript y separar componentes, datos y tipos. Es decir, para poder lograr correcto conocimiento de todos los temas a medida de que se realizan.

## 4. Prompts realizados
- "Ayudame a crear un plan paso a paso de lo que debo hacer para que esta evaluación 4 este bien. Te paso la rúbrica y los requerimientos. NO me pases ningun código, solamente una guía para saber por donde empezar."
- "Ahora necesito que me des un ejemplo de una buena base para react, para que de esa forma pueda entender la idea y así empezar de una buena forma."
- "Ahora necesito que me guies para poder realizar Consumo de API pública, ya que es la primera vez que lo hago. Dame buenos consejos y códigos de ejemplos."
- "Ahora necesito que me guíes en el estado transversal, interactividad de E2 y accesibilidad para las personas con discapacidades."
-"Ahora revisa que todo el proyecto cumpla con todo lo que te mandé en los pdf. Si falta algo o hay algo malo, solo hazmelo saber y explicame algun cambio que debería realizar".

## 5. Outputs
- "Este plan está ordenado por prioridad e impacto en la rúbrica para que puedas completar todo antes de la hora límite:
Fase 1: Preparación del repositorio y evidencia visual...
Fase 2: Estructura visual, rutas y tipado base...
Fase 3: Consumo de API pública...
Fase 4: Estado transversal, interactividad de E2 y accesibilidad...
Fase 5: Documentación obligatoria y entrega final..."
- "Una buena base en React con TypeScript separa responsabilidades en capas claras para que los datos, la lógica y la interfaz no se mezclen en un solo archivo:
1. Cómo se conectan las piezas...
2. Esqueleto base por capas...
3. Comandos iniciales para levantar esta base..."
- "El consumo de una API pública equivale al 20% de la rúbrica del proyecto (si falta, ese criterio queda en 0 y el puntaje máximo baja a 80 puntos). Como es tu primera vez integrando una API en React, la clave es entender que una petición por internet no es instantánea: tu interfaz debe saber qué dibujar mientras espera, qué dibujar si todo sale bien y qué dibujar si el servidor falla.
1. Elige una de las dos APIs oficiales...
2. Consejos clave para alcanzar el nivel 'Excelente'...
3. Implementación paso a paso (Ejemplo con GitHub REST API)...
4. Cómo verificarlo rápido y documentarlo..."
- "Integrar bien el estado transversal, la interactividad de la Evaluación 2 y la accesibilidad cubre 26% de la rúbrica (Criterios 5, 6 y 7).
1. Estado transversal con Context API...
2. Interactividad de E2 + Accesibilidad aplicada...
3. Checklist rápido para el nivel 'Excelente' en Accesibilidad..."
- "Generó y ajustó componentes, tipos, estilos y documentación. Durante la revisión detectó que `ThemeContext.tsx` existía, pero estaba desconectado de la aplicación. También señaló documentación incompleta. Posteriormente ayudó a conectar el proveedor y el botón de tema con el layout."

## 6. Ajustes, refactorización y verificación

Con asistencia de IA se reorganizaron los componentes para respetar la estructura solicitada y se corrigieron sus importaciones. Se retiró el filtro por tecnología para acercar la interfaz al portafolio original. La consulta de GitHub se adaptó para mostrar los seis repositorios seleccionados, y el tema claro/oscuro se conectó mediante Context API.

Se comprobó el tipado con TypeScript y la compilación con Vite. Se realizaron comprobaciones del formulario, las rutas y el menú mediante teclado. La selección de repositorios y el manejo del error HTTP 403 se verificaron con respuestas simuladas, porque la consulta real encontró el límite temporal de GitHub. La implementación más reciente del tema pasó la compilación.

## 7. Reflexión crítica final

La asistencia permitió avanzar, pero también mostró el riesgo de aceptar código sin revisar su conexión con la aplicación. El caso de Context evidenció que tener un archivo creado no basta para demostrar una funcionalidad.

Para evitar deuda cognitiva, analize cada ejemplo de código generado por IA, además de entender los cambios realizados a los archivos que tenian errores. Cuándo se ejecuta `useEffect`, por qué se cancela una consulta y cómo se comparte el tema. La generación de código con IA no demuestra por sí sola el dominio de esos conceptos, es por eso que me esforzé en entender cada parte y así lograr usar la IA como un apoyo.