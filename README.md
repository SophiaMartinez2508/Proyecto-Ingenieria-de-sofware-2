# 🛍️ Éclat Wear - Exclusive Fashion & Biotech Control

Éclat Wear es una plataforma web e-commerce de alta costura y moda premium especializada en prendas de control anatómico con nanotecnología textil molecular. El sitio ofrece una experiencia visualmente deslumbrante, animada y completamente responsiva, diseñada para cautivar a clientes exigentes y proporcionar herramientas interactivas personalizadas.

---

## ✨ Características Principales

*   **Colección Biotecnológica 2026**: Catálogo exclusivo de prendas inteligentes con memoria molecular que liberan micropartículas de Vitamina E e hidratan las células corporales durante su uso.
*   **Asesor Biométrico VIP**: Calculadora interactiva integrada en tiempo real. Analiza las proporciones corporales (busto, cintura y cadera) y determina de manera inteligente la talla de autor ideal (*Éclat Size*), ofreciendo una recomendación personalizada con la opción de enviar las medidas directamente a un especialista a través de WhatsApp.
*   **Bolsa de Compras Fluida (Cart Drawer)**: Carrito lateral interactivo que permite añadir productos, cambiar tonos, ajustar cantidades y calcular totales al instante con transiciones elegantes.
*   **Éclat Club VIP**: Sistema de registro y boletín privado con beneficios de preventa y códigos de descuento (15% OFF de bienvenida).
*   **Diseño Visual de Élite**:
    *   Paleta de colores curada y sofisticada (*Muted Bordeaux, Pastel Pink, Lavender Blush, Pure White*).
    *   Micro-animaciones premium e interacciones fluidas impulsadas por `motion`.
    *   Diseño totalmente adaptado a dispositivos móviles, tablets y ordenadores.
    *   Estética de lujo con tipografía de contraste (Serif y Sans).

---

## 🛠️ Tecnologías Utilizadas

*   **Core**: React 19 & TypeScript 5
*   **Herramienta de Construcción**: Vite 6 (configurado para desarrollo local rápido y compilación optimizada)
*   **Estilos**: Tailwind CSS v4 & CSS Nativo (para animaciones y efectos de gradiente premium)
*   **Animaciones**: `motion` (Motion for React)
*   **Iconografía**: Lucide React

---

## 🚀 Instalación y Desarrollo Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### 1. Clonar el Repositorio

```bash
git clone https://github.com/SophiaMartinez2508/Proyecto-Ingenieria-de-sofware-2.git
cd Proyecto-Ingenieria-de-sofware-2
```

### 2. Instalar Dependencias

Instala los módulos de Node requeridos:

```bash
npm install
```

### 3. Configuración de Variables de Entorno

Copia el archivo de ejemplo de variables de entorno y renómbralo a `.env`:

```bash
cp .env.example .env
```

Edita el archivo `.env` e introduce tu clave de API si utilizas integraciones de IA en el futuro:
```env
GEMINI_API_KEY="TU_GEMINI_API_KEY"
```

### 4. Iniciar Servidor de Desarrollo

Inicia el servidor local de Vite:

```bash
npm run dev
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 📦 Compilación para Producción

Para generar los archivos listos para despliegue y distribución en producción:

```bash
npm run build
```

Esto compilará el código y creará la carpeta estática optimizada `dist/`. Para previsualizar la build de producción de forma local:

```bash
npm run preview
```

---

## 📂 Estructura del Proyecto

```text
├── src/
│   ├── components/       # Componentes interactivos (Navbar, Hero, CartDrawer, Modales)
│   ├── types.ts          # Definiciones de tipos de TypeScript (Product, CartItem, etc.)
│   ├── data.ts           # Datos locales de productos, valoraciones y testimonios
│   ├── App.tsx           # Componente principal que gestiona el estado de la aplicación
│   ├── index.css         # Configuración y estilos base de diseño
│   └── main.tsx          # Punto de entrada de React
├── public/               # Recursos estáticos públicos
├── index.html            # Plantilla HTML base del proyecto
├── package.json          # Script y dependencias del proyecto
└── vite.config.ts        # Configuración de Vite
```

---

## 🛡️ Licencia

Este proyecto está diseñado y desarrollado para fines académicos y profesionales. Todos los derechos reservados a **Éclat Wear S.A.**