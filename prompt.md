### **Prompt para Replicar el Estilo de Textura Realista**

Hola, necesito añadir un nuevo tema visual a mi página web actual. La tarea consiste en crear un nuevo estilo de "tela realista" y añadir un botón que permita al usuario alternar entre el estilo original de la página y este nuevo estilo.

**Requisitos Fundamentales (No negociables):**

1.  **No modificar archivos existentes:** NO debes editar mi archivo CSS actual. Todo el nuevo código CSS debe ir en un archivo completamente nuevo.
2.  **Crear un nuevo archivo CSS:** Crea un nuevo archivo llamado `fabric-theme.css` y coloca todo el código de estilo que te proporciono a continuación dentro de él.
3.  **Añadir un botón de cambio de tema:** Modifica el archivo HTML para añadir un botón que permita cambiar entre los dos estilos.
4.  **Añadir script de cambio de tema:** Añade el código JavaScript necesario para que el botón funcione.

**Paso 1: Crear el archivo `fabric-theme.css`**

Crea un archivo llamado `fabric-theme.css` y pega el siguiente contenido exacto dentro de él. Este CSS creará el estilo de textura. Asegúrate de tener las imágenes `texturafondonegro.png`, `hiloblancofino.jpg` y `texturadetela.jpg` en la misma carpeta.

```css
/* Contenido para fabric-theme.css */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('texturafondonegro.png');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    transition: background-image 0.5s ease;
}

.portfolio-container {
    max-width: 800px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.profile-header .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.5);
    object-fit: cover;
    margin-bottom: 15px;
}

.profile-header h1, .profile-header p, .about-me p, h2, .skills li, .project-card h3, .project-card p, .project-tags span {
    background-image: url('hiloblancofino.jpg');
    background-size: 400px;
    background-repeat: repeat;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent !important; /* Usar !important para asegurar la sobreescritura */
    filter: 
        drop-shadow(0px 1px 1px rgba(0,0,0,0.9))
        drop-shadow(0px 4px 8px rgba(0,0,0,0.5));
}

.profile-header h1 { font-size: 4em; }
.profile-header p { font-size: 1.5em; }
h2 { font-size: 2.8em; border-bottom: 2px solid rgba(255, 255, 255, 0.3); padding-bottom: 10px; margin-bottom: 20px; }
.skills li { font-size: 1.4em; background-color: rgba(255, 255, 255, 0.1); padding: 10px 20px; border-radius: 8px; }
.about-me, .skills, .projects { margin-top: 40px; text-align: left; }
.skills ul { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 15px; }

.projects .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 20px; }
.projects .project-card { background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 25px; }
.projects .project-card h3 { font-size: 2.2em; margin-top: 0; margin-bottom: 15px; }
.projects .project-card p { font-size: 1.2em; line-height: 1.6; }
.projects .project-tags { margin-top: 20px; display: flex; flex-wrap: wrap; gap: 10px; }
.projects .project-tags span { font-size: 1em; padding: 5px 10px; border-radius: 5px; background-color: rgba(0, 0, 0, 0.3); }

.contact-buttons { margin-top: 40px; display: flex; justify-content: center; gap: 25px; }
.fluffy-button {
    position: relative;
    border: none;
    width: 80px;
    height: 80px;
    border-radius: 25px;
    background-image: url('texturadetela.jpg');
    background-size: cover;
    background-position: center;
    color: #2c2c2c;
    font-size: 32px;
    cursor: pointer;
    transition: all 0.3s ease;
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.4));
    box-shadow: inset 0 -4px 6px rgba(0, 0, 0, 0.2), inset 0 4px 6px rgba(255, 255, 255, 0.7);
}
.fluffy-button:hover { transform: translateY(-3px); filter: drop-shadow(0 15px 15px rgba(0, 0, 0, 0.5)); }
.icon-stitched { text-shadow: 0 0 2px #000, 1px 1px 3px rgba(0,0,0,0.5); }
```

**Paso 2: Modificar el archivo HTML**

Realiza los siguientes tres cambios en tu archivo HTML principal:

1.  **Identifica tu hoja de estilos principal:** Busca la etiqueta `<link>` que carga tu CSS actual. Por ejemplo, si se ve así: `<link rel="stylesheet" href="style.css">`, modifícala para que tenga un `id`. El resultado debe ser:
    ```html
    <link id="theme-stylesheet" rel="stylesheet" href="style.css">
    ```

2.  **Añade el botón de cambio de tema:** En un lugar visible de tu `<body>`, como cerca del encabezado o el pie de página, añade el siguiente botón:
    ```html
    <button id="theme-toggle-button" style="position: fixed; top: 20px; right: 20px; z-index: 9999; padding: 10px 15px; cursor: pointer;">Cambiar Tema</button>
    ```

3.  **Añade el script de JavaScript:** Justo antes de que termine la etiqueta `</body>`, añade el siguiente bloque `<script>` que contiene la lógica para cambiar de tema:
    ```html
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggleButton = document.getElementById('theme-toggle-button');
            const themeStylesheet = document.getElementById('theme-stylesheet');
            
            const originalTheme = themeStylesheet.getAttribute('href');
            const fabricTheme = 'fabric-theme.css';
            
            let isFabricTheme = false;
            
            themeToggleButton.addEventListener('click', () => {
                if (isFabricTheme) {
                    themeStylesheet.setAttribute('href', originalTheme);
                } else {
                    themeStylesheet.setAttribute('href', fabricTheme);
                }
                isFabricTheme = !isFabricTheme;
            });
        });
    </script>
    ```

Después de seguir estos pasos, la página tendrá un botón "Cambiar Tema" que alternará entre el CSS original y el nuevo `fabric-theme.css` que hemos definido.
