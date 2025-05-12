# Proyecto: Calculadora Web HTML, CSS y JavaScript

## 1. Introducción y Objetivos

* Crear una interfaz de usuario que sea intuitiva para una calculadora estándar.
* Implementar las operaciones aritméticas básicas: suma, resta, multiplicación y división.
* Asegurar que los botones numéricos, los operadores, el botón de igual y el botón de borrado (AC) funcionen correctamente.
* Permitir el uso de paréntesis para agrupar operaciones y el punto decimal.
* Desarrollar un código que sea claro, comentado y bien estructurado.
* Aplicar estilos CSS para una presentación visual cuidada y con una responsividad básica.
* Gestionar el proyecto simulando un entorno colaborativo.
* Desplegar la aplicación final utilizando Vagrant.

## 2. Arquitectura y Tecnologías Utilizadas

* **HTML (HyperText Markup Language):** Se utilizó para estructurar el contenido de la calculadora, definiendo el contenedor principal, la pantalla de visualización y la cuadrícula de botones. Se emplearon etiquetas semánticas y atributos `id` y `class` para facilitar la manipulación con CSS y JavaScript.
* Archivo principal: `index.html`
* **CSS (Hojas de Estilo en Cascada):** Se utilizó para darle estilo y un diseño visual atractivo a la calculadora. Esto abarca la paleta de colores, las tipografías, el espaciado, los bordes, las sombras y la disposición de los elementos (usando CSS Grid para los botones). También se implementó una media query básica para mejorar la visualización en dispositivos móviles.
* Archivo principal: `css/style.css`
* **JavaScript (JS):** Es el motor que impulsa la calculadora. Se utilizó para:
* Capturar los eventos de clic en los botones.
* Actualizar dinámicamente la pantalla de visualización.
* Implementar la lógica para construir la expresión matemática.
* Realizar los cálculos usando la función `eval()` (con las advertencias de seguridad pertinentes para este contexto académico).
* Manejar el borrado de la pantalla y la inicialización de valores.
* Gestionar la entrada de números, operadores, decimales y paréntesis.
* Archivo principal: `js/script.js`
* **Vagrant:** Se usará para crear un entorno de desarrollo y despliegue virtualizado y reproducible. El `Vagrantfile` configurará una máquina virtual básica donde se podrán servir los archivos estáticos de la calculadora.
* Archivo de configuración: `Vagrantfile` (aún por crear, se incluirá un ejemplo básico).
* **Google Fonts:** Se eligió la fuente 'Roboto' para mejorar la estética de la tipografía.
* **Editor de Código:** Sublime Text (según las instrucciones iniciales, aunque el desarrollo se puede realizar con cualquier editor moderno).
* **Navegador Web:** Para pruebas y visualización (por ejemplo, Google Chrome, Firefox).

La estructura de carpetas:

```
proyecto_calculadora_daw/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── Vagrantfile
└── DOCUMENTACION.md
```

## 3. Manual de Usuario Básico

La calculadora web está diseñada para ser intuitiva y fácil de usar:

1.  **Abrir la Calculadora:** Acceder al archivo `index.html` en un navegador web, o a través de la URL proporcionada por Vagrant si está desplegada.
2.  **Ingresar Números:** Hacer clic en los botones numéricos (0-9) para introducir cifras.
3.  **Ingresar Punto Decimal:** Hacer clic en el botón `.` para añadir decimales a un número.
4.  **Seleccionar Operaciones:** Hacer clic en los botones de operación (`+`, `-`, `×`, `÷`) para realizar cálculos.
5.  **Usar Paréntesis:** Hacer clic en los botones `(` y `)` para agrupar operaciones y controlar el orden de evaluación.
6.  **Calcular Resultado:** Hacer clic en el botón `=` para obtener el resultado de la expresión ingresada.
7.  **Borrar Todo (AC):** Hacer clic en el botón `AC` para limpiar la pantalla y reiniciar la calculadora a su estado inicial (mostrará `0`).
8.  **Visualización:** La pantalla superior muestra los números ingresados, las operaciones y los resultados.


En caso de una operación inválida (ej. división por cero o una expresión mal formada), la pantalla mostrará "Error". Presione `AC` para continuar.

## 4. Distribución de Tareas y Participación (Equipo de 3)


*   **Héctor:Frontend (HTML y Estructura Base)**
    *   **Tareas Realizadas:**
        *   Creación de la estructura semántica del archivo `index.html`.
        *   Implementación de todos los elementos de la interfaz de la calculadora: campo de visualización y todos los botones (números, operadores, igual, borrado, paréntesis, decimal).
        *   Aseguramiento de que el HTML esté bien formado y sea accesible.
        *   Definición de los `id` y `class` necesarios para la interacción con CSS y JavaScript.
        *   Integración inicial de la fuente 'Roboto' de Google Fonts.

*   **Rubén: Frontend (CSS y Estilo Visual)**
    *   **Tareas Realizadas:**
        *   Diseño de la apariencia visual de la calculadora basándose en la maqueta y paleta de colores definidas.
        *   Escritura del código CSS en `css/style.css` para estilizar todos los elementos.
        *   Implementación de un diseño limpio, intuitivo y estéticamente agradable.
        *   Aplicación de efectos hover y active a los botones para mejorar la retroalimentación visual.
        *   Implementación de CSS Grid para la maquetación de los botones.
        *   Aseguramiento de una responsividad básica mediante media queries para una correcta visualización en diferentes tamaños de pantalla.

*   **James: Backend (JavaScript y Lógica de la Calculadora)**
    *   **Tareas Realizadas:**
        *   Escritura del código JavaScript en `js/script.js`.
        *   Implementación de la lógica para capturar las entradas del usuario (clics en los botones).
        *   Gestión de la visualización de los números y operaciones en el display.
        *   Desarrollo de las funciones para construir la expresión matemática.
        *   Implementación de la función de cálculo utilizando `eval()` para procesar la expresión.
        *   Implementación de la funcionalidad del botón "igual" (=).
        *   Implementación de la funcionalidad del botón de borrado (AC).
        *   Manejo básico de errores (ej. división por cero, expresiones inválidas), mostrando "Error" en el display.
        *   Gestión del punto decimal y los paréntesis.


## 5. Implementación Vagrant
