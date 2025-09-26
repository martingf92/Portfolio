# Portafolio Profesional

Bienvenido al repositorio de mi portafolio profesional. Este proyecto está construido con React, Vite y Tailwind CSS, ofreciendo un rendimiento óptimo y un diseño moderno y responsivo.

## 🚀 Características

- **Diseño Moderno**: Interfaz de usuario atractiva con animaciones suaves.
- **Responsive**: Se adapta perfectamente a cualquier dispositivo.
- **Rendimiento Optimizado**: Carga rápida gracias a Vite y React.
- **Accesibilidad**: Diseñado siguiendo las mejores prácticas de accesibilidad web.

## 🛠️ Estructura del Proyecto

```
mi-portfolio/
├── public/                  # Archivos estáticos
│   └── images/              # Imágenes globales
│       └── projects/        # Imágenes de los proyectos
├── src/
│   ├── assets/              # Recursos estáticos (fuentes, imágenes)
│   ├── components/          # Componentes reutilizables
│   │   ├── AboutMe.jsx      # Sección "Sobre Mí"
│   │   ├── Contact.jsx      # Formulario de contacto
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── Hero.jsx         # Sección hero con carrusel
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── ProjectCard.jsx  # Tarjeta de proyecto individual
│   │   ├── ProjectsSection.jsx # Lista de proyectos
│   │   └── SkillsSection.jsx   # Habilidades técnicas
│   ├── data/
│   │   └── projects.json    # Datos de los proyectos
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Punto de entrada de la aplicación
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js           # Configuración de Vite
```

## 🚀 Configuración del Entorno

1. **Requisitos Previos**
   - Node.js (v16 o superior)
   - npm (v8 o superior) o yarn

2. **Instalación**
   ```bash
   # Clonar el repositorio
   git clone https://github.com/tu-usuario/mi-portfolio.git
   
   # Navegar al directorio del proyecto
   cd mi-portfolio
   
   # Instalar dependencias
   npm install
   # o
   yarn
   ```

3. **Variables de Entorno**
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   VITE_APP_ENV=development
   # Otras variables de entorno si son necesarias
   ```

## 🛠️ Comandos Útiles

- **Desarrollo**
  ```bash
  npm run dev
  # o
  yarn dev
  ```
  Inicia el servidor de desarrollo en `http://localhost:5173`

- **Construir para Producción**
  ```bash
  npm run build
  # o
  yarn build
  ```
  Genera la versión optimizada en la carpeta `dist/`

- **Previsualizar Producción**
  ```bash
  npm run preview
  # o
  yarn preview
  ```
  Sirve la versión de producción localmente

## 📁 Gestión de Imágenes

1. **Imágenes de Proyectos**
   - Ubicación: `public/images/projects/`
   - Formato: `.jpg`, `.png` o `.webp`
   - Tamaño recomendado: 1200x800px

2. **Actualizar Proyectos**
   Para agregar o modificar proyectos, edita el archivo `src/data/projects.json`:
   ```json
   {
     "id": 1,
     "title": "Título del Proyecto",
     "frontImage": "/images/projects/nombre-imagen.jpg",
     "alt": "Descripción de la imagen",
     "description": "Descripción detallada del proyecto.",
     "stack": "Tecnologías utilizadas",
     "link": "URL del proyecto",
     "linkText": "Texto del enlace"
   }
   ```

## 🎨 Estilos y Temas

- **Tailwind CSS**: Utilizado para estilos con clases utilitarias.
- **Animaciones**: Implementadas con Framer Motion y animaciones personalizadas de CSS.
- **Temas**: Paleta de colores definida en `tailwind.config.js`.

## 🌐 Despliegue

### GitHub Pages
1. Instala `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   # o
   yarn add -D gh-pages
   ```

2. Añade los scripts al `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Configura el `base` en `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/nombre-repositorio/',
     // ... resto de la configuración
   })
   ```

4. Despliega:
   ```bash
   npm run deploy
   # o
   yarn deploy
   ```

## 🤝 Cómo Contribuir

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## ✉️ Contacto

- Nombre: [Tu Nombre]
- Email: tu@email.com
- LinkedIn: [Tu Perfil de LinkedIn]
- GitHub: [@tuusuario](https://github.com/tu-usuario)

---

Hecho con ❤️ por [Tu Nombre] 🚀
