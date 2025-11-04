## 📋 Índice
1. [Estructura General del Proyecto](#estructura-general)
2. [Documentación HTML](#html)
3. [Documentación CSS](#css)
4. [Documentación JavaScript](#javascript)
5. [Guía de Uso](#guía-de-uso)

---

## 🏗️ Estructura General del Proyecto

El proyecto está dividido en 3 archivos principales:

```
proyecto/
├── index.html      # Estructura y contenido de la página
├── styles.css      # Estilos y diseño visual
└── script.js       # Funcionalidad e interactividad
```

---

## 📄 HTML (index.html)

### 1. **Head - Configuración inicial**

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ingeniería de Sistemas | UCompensar</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat..." rel="stylesheet">
</head>
```

**Explicación:**
- `charset="UTF-8"`: Permite usar caracteres especiales como tildes y ñ
- `viewport`: Hace la página responsive (adaptable a móviles)
- `<link>`: Conecta el archivo CSS y carga las fuentes de Google Fonts
- **Fuentes usadas**: Montserrat (títulos), Roboto (texto general), Poppins (elementos especiales)

---

### 2. **Top Bar - Barra superior**

```html
<div class="top-bar">
    <div class="container">
        <div class="top-bar-content">
            <div class="top-links">
                <a href="#">Graduados</a>
                <a href="#">Estudiantes</a>
                <!-- más enlaces -->
            </div>
            <button class="btn-work">Trabaja con nosotros</button>
        </div>
    </div>
</div>
```

**Explicación:**
- **Propósito**: Barra de navegación secundaria en la parte superior
- `container`: Clase que centra el contenido y limita el ancho máximo
- `top-links`: Contiene los enlaces de navegación
- `btn-work`: Botón destacado de color naranja para llamar la atención

---

### 3. **Header - Encabezado principal**

```html
<header class="header">
    <div class="container">
        <div class="header-content">
            <img src="..." alt="UCompensar Logo" class="logo">
            <nav class="main-nav">
                <a href="#">La institución</a>
                <a href="#">Estudia con Nosotros</a>
                <!-- más enlaces -->
            </nav>
            <button class="search-btn">🔍</button>
        </div>
    </div>
</header>
```

**Explicación:**
- **Propósito**: Navegación principal de la página
- `position: sticky`: El header se mantiene fijo al hacer scroll
- Logo de la universidad a la izquierda
- Menú de navegación principal en el centro
- Botón de búsqueda a la derecha

---

### 4. **Hero Section - Sección principal**

```html
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <p class="hero-label">Estudia</p>
                <h1>Ingeniería de Sistemas</h1>
                <p class="hero-info">SNIES: 101742 / Resolución: 9542...</p>
                <div class="program-details">
                    <p><strong>Duración del programa</strong> 10 semestres</p>
                    <p><strong>Facultad</strong> Ingeniería</p>
                    <p><strong>Modalidad</strong> Virtual</p>
                </div>
                <button class="btn-download">
                    <span>Plan de estudios</span>
                    <span class="download-icon">⬇</span>
                </button>
            </div>
            <div class="hero-image">
                <img src="..." alt="Estudiante de Ingeniería">
            </div>
        </div>
    </div>
</section>
```

**Explicación:**
- **Propósito**: Sección de bienvenida con información principal del programa
- Fondo con gradiente azul (de `#1f91bc` a `#0d5d7a`)
- Layout en 2 columnas: texto a la izquierda, imagen a la derecha
- Botón de descarga con icono circular naranja
- Información clave del programa destacada

---

### 5. **Pricing Cards - Tarjetas de precios**

```html
<section class="pricing">
    <div class="container">
        <div class="pricing-cards">
            <div class="price-card">
                <div class="card-icon">
                    <img src="..." alt="Icon">
                </div>
                <div class="card-content">
                    <h3>VALOR AFILIADO</h3>
                    <div class="price">$2.583.360</div>
                    <p class="period">Primer semestre</p>
                </div>
                <p class="price-note">10 % dto para afiliados...</p>
            </div>
            <!-- 2 cards más -->
        </div>
    </div>
</section>
```

**Explicación:**
- **Propósito**: Mostrar las diferentes opciones de precios
- 3 tarjetas: Valor Afiliado, Valor Programa, Valor Becado
- Fondo oscuro con gradiente (`#293946` a `#1f2a35`)
- Icono circular en la parte superior de cada tarjeta
- `margin-top: -50px`: Las tarjetas se superponen ligeramente con el hero

---

### 6. **Form Section - Formulario de contacto**

```html
<section class="form-section">
    <div class="container">
        <h2><span class="highlight">Déjanos</span> tus datos</h2>
        <form class="contact-form">
            <input type="text" placeholder="Nombre" required>
            <input type="text" placeholder="Apellidos" required>
            <input type="text" placeholder="Documento de Identidad" required>
            <input type="email" placeholder="Correo" required>
            <input type="tel" placeholder="Celular" required>

            <div class="form-group">
                <label>¿Cuándo planeas iniciar tus estudios?</label>
                <select required>
                    <option value="">Inmediatamente</option>
                    <!-- más opciones -->
                </select>
            </div>
            <!-- más campos -->

            <div class="form-check">
                <input type="checkbox" id="privacy" required>
                <label for="privacy">Acepto la Política...</label>
            </div>

            <button type="submit" class="btn-submit">Enviar</button>
        </form>
    </div>
</section>
```

**Explicación:**
- **Propósito**: Capturar información de contacto de estudiantes interesados
- Grid de 2 columnas para los campos
- Campos de texto, email, teléfono y selectores
- Validación HTML5 con `required`
- Checkbox para aceptar políticas de privacidad
- Botón de envío con estilo destacado

---

### 7. **Titulaciones - Programas académicos**

```html
<section class="titulaciones">
    <div class="container">
        <h2>Titulaciones</h2>
        <div class="titulaciones-grid">
            <div class="titulacion-card">
                <p class="tecnica">Técnica profesional en</p>
                <h3>OPERACIÓN Y MANTENIMIENTO DE BASES DE DATOS</h3>
                <p class="resolucion">Resolución 12315...</p>
                <button class="btn-tarifa">Ver tarifas de créditos aquí</button>
            </div>
            <!-- 2 cards más -->
        </div>
    </div>
</section>
```

**Explicación:**
- **Propósito**: Mostrar las diferentes titulaciones que se obtienen
- 3 niveles: Técnica profesional, Tecnología, Profesional
- Fondo oscuro degradado (morado a azul oscuro)
- Botones rosados para ver tarifas
- Información legal (resoluciones y SNIES)

---

### 8. **Futuro Académico - Descripción y video**

```html
<section class="futuro-academico">
    <div class="container">
        <h2>Conoce tu futuro académico</h2>
        <div class="futuro-content">
            <div class="futuro-text">
                <p>Como profesional en Ingeniería de Sistemas...</p>
                <p>Te puedes certificar internacionalmente...</p>
            </div>
            <div class="futuro-video">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/CVb7TGjxpnY"
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>
```

**Explicación:**
- **Propósito**: Explicar el perfil profesional y mostrar testimonios
- Layout en 2 columnas: texto justificado + video de YouTube
- Video embebido con iframe
- Texto alineado a la izquierda, video a la derecha

---

### 9. **Carousel - Por qué elegirnos**

```html
<section class="por-que-elegirnos">
    <div class="container">
        <h2>¿Por qué elegirnos?</h2>
        <div class="carousel-container">
            <button class="carousel-btn prev" onclick="prevSlide()">❮</button>
            <div class="carousel-wrapper">
                <div class="carousel-track">
                    <div class="carousel-card">
                        <div class="card-number">01</div>
                        <p><strong>Aprende</strong> en un entorno validado...</p>
                    </div>
                    <!-- más cards -->
                </div>
            </div>
            <button class="carousel-btn next" onclick="nextSlide()">❯</button>
        </div>
    </div>
</section>
```

**Explicación:**
- **Propósito**: Mostrar beneficios del programa de forma interactiva
- Carrusel deslizante con botones de navegación
- Fondo azul con gradiente
- Cards semi-transparentes con efecto glassmorphism
- Números grandes en el fondo de cada card
- Auto-scroll cada 5 segundos

---

### 10. **Floating Buttons - Botones flotantes**

```html
<div class="floating-buttons">
    <button class="whatsapp-btn">
        <img src="data:image/svg+xml..." alt="WhatsApp">
    </button>
    <button class="chat-btn">💬</button>
</div>
```

**Explicación:**
- **Propósito**: Acceso rápido a WhatsApp y chat en vivo
- Posición fija en la esquina inferior derecha
- Botón WhatsApp verde con icono SVG
- Botón de chat naranja
- Siempre visibles al hacer scroll

---

## 🎨 CSS (styles.css)

### 1. **Reset y Variables Globales**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    color: #333;
    line-height: 1.6;
}
```

**Explicación:**
- **Reset CSS**: Elimina márgenes y paddings por defecto del navegador
- `box-sizing: border-box`: El padding y border se incluyen en el ancho total
- Fuente por defecto: Roboto
- Color de texto: `#333` (gris oscuro)

---

### 2. **Container - Contenedor centralizado**

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

**Explicación:**
- **Propósito**: Limitar el ancho del contenido y centrarlo
- Ancho máximo: 1200px
- `margin: 0 auto`: Centra horizontalmente
- Padding lateral de 20px para respiración en móviles

---

### 3. **Top Bar - Estilos de barra superior**

```css
.top-bar {
    background-color: #293946;
    padding: 10px 0;
    font-size: 13px;
}

.top-bar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-links a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s;
}

.top-links a:hover {
    opacity: 0.8;
}
```

**Explicación:**
- Fondo gris oscuro (`#293946`)
- Flexbox para alinear enlaces y botón
- Enlaces blancos que se vuelven semi-transparentes al hacer hover
- Transición suave de 0.3 segundos

---

### 4. **Header Sticky**

```css
.header {
    background-color: white;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
```

**Explicación:**
- **`position: sticky`**: Se mantiene en la parte superior al hacer scroll
- **`z-index: 100`**: Aparece por encima de otros elementos
- Sombra sutil para dar profundidad
- Borde inferior para separación visual

---

### 5. **Hero Section - Gradiente y overlay**

```css
.hero {
    background: linear-gradient(135deg, #1f91bc 0%, #0d5d7a 100%);
    padding: 80px 0;
    color: white;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url('data:image/svg+xml...');
    background-size: 300px;
    opacity: 0.3;
}
```

**Explicación:**
- **Gradiente diagonal**: De azul claro a azul oscuro
- **Pseudo-elemento `::before`**: Crea patrón decorativo
- `overflow: hidden`: Oculta elementos que se salgan
- Padding vertical de 80px para espacio

---

### 6. **Flexbox Layout**

```css
.hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-text {
    flex: 1;
    max-width: 500px;
}

.hero-image {
    flex: 1;
    text-align: right;
}
```

**Explicación:**
- **Flexbox**: Sistema de layout flexible
- `justify-content: space-between`: Separa texto e imagen
- `align-items: center`: Centra verticalmente
- `flex: 1`: Ambos elementos ocupan el mismo espacio
- `z-index: 1`: Aparece por encima del pseudo-elemento

---

### 7. **Pricing Cards - Grid y efectos**

```css
.pricing-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.price-card {
    background: linear-gradient(135deg, #293946 0%, #1f2a35 100%);
    border-radius: 20px;
    padding: 30px;
    color: white;
    position: relative;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    transition: transform 0.3s;
}

.price-card:hover {
    transform: translateY(-5px);
}
```

**Explicación:**
- **CSS Grid**: 3 columnas de igual tamaño
- **Gap**: 30px de espacio entre tarjetas
- Gradiente oscuro de fondo
- Bordes redondeados (20px)
- **Hover effect**: Se eleva 5px al pasar el mouse
- Sombra pronunciada para profundidad

---

### 8. **Card Icon - Posicionamiento absoluto**

```css
.card-icon {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00bcd4;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

**Explicación:**
- **`position: absolute`**: Se posiciona respecto al card
- `top: -30px`: Se sale del card hacia arriba
- `left: 50%` + `transform: translateX(-50%)`: Centra horizontalmente
- Círculo perfecto con `border-radius: 50%`
- Flexbox para centrar el icono dentro

---

### 9. **Form Grid Layout**

```css
.contact-form {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.form-group {
    grid-column: 1 / -1;
}

.contact-form input,
.contact-form select {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 30px;
    font-size: 15px;
    transition: border-color 0.3s;
}

.contact-form input:focus {
    outline: none;
    border-color: #1f91bc;
}
```

**Explicación:**
- Grid de 2 columnas para campos
- `grid-column: 1 / -1`: Los form-group ocupan ambas columnas
- Inputs con bordes redondeados (30px)
- **Estado focus**: Borde azul cuando se selecciona
- `outline: none`: Quita el borde por defecto del navegador

---

### 10. **Carousel - Transform y transiciones**

```css
.carousel-wrapper {
    overflow: hidden;
    flex: 1;
}

.carousel-track {
    display: flex;
    gap: 30px;
    transition: transform 0.5s ease;
}

.carousel-card {
    min-width: calc(33.333% - 20px);
    background: rgba(255,255,255,0.1);
    padding: 40px 30px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: all 0.3s;
}

.carousel-card.active {
    background: rgba(255,255,255,0.2);
    transform: scale(1.05);
}
```

**Explicación:**
- **`overflow: hidden`**: Oculta cards que están fuera de vista
- **`transform`**: Mueve el track para mostrar diferentes cards
- **`transition`**: Animación suave de 0.5 segundos
- **Glassmorphism**: Fondo semi-transparente con `backdrop-filter: blur(10px)`
- Card activa: Más opaca y ligeramente más grande

---

### 11. **Responsive Design - Media Queries**

```css
@media (max-width: 1024px) {
    .pricing-cards,
    .titulaciones-grid {
        grid-template-columns: 1fr;
    }

    .futuro-content,
    .perfil-content {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 32px;
    }

    .contact-form {
        grid-template-columns: 1fr;
    }

    .footer-content {
        grid-template-columns: 1fr;
    }
}
```

**Explicación:**
- **1024px**: Tablets - Cambia grids a 1 columna
- **768px**: Móviles - Todo a 1 columna, textos más pequeños
- `flex-direction: column`: Apila elementos verticalmente
- Hace la página completamente responsive

---

### 12. **Floating Buttons**

```css
.floating-buttons {
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 1000;
}

.whatsapp-btn,
.chat-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    transition: transform 0.3s;
}

.whatsapp-btn:hover,
.chat-btn:hover {
    transform: scale(1.1);
}
```

**Explicación:**
- **`position: fixed`**: Permanece en la misma posición al hacer scroll
- `bottom: 30px; right: 30px`: Esquina inferior derecha
- **`z-index: 1000`**: Por encima de todo
- Efecto hover: Se agranda 10% al pasar el mouse
- Sombra para dar sensación de flotación

---

## ⚙️ JavaScript (script.js)

### 1. **Variables del Carousel**

```javascript
let currentSlide = 0;
const carouselTrack = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');
```

**Explicación:**
- `currentSlide`: Índice del slide actual (empieza en 0)
- `carouselTrack`: Elemento que contiene todas las cards
- `cards`: NodeList con todas las tarjetas del carousel
- `querySelector`: Selecciona el primer elemento que coincide
- `querySelectorAll`: Selecciona todos los elementos que coinciden

---

### 2. **Función updateCarousel**

```javascript
function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 30;
    const offset = -(currentSlide * (cardWidth + gap));
    carouselTrack.style.transform = `translateX(${offset}px)`;

    // Update active card
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentSlide + 1) {
            card.classList.add('active');
        }
    });
}
```

**Explicación:**
- **`offsetWidth`**: Obtiene el ancho real de una card en píxeles
- **Cálculo del offset**: Multiplica el índice actual por (ancho + gap)
- **`translateX`**: Mueve el track horizontalmente
- **`forEach`**: Recorre todas las cards
- Remueve clase `active` de todas y la agrega solo a la del centro
- Template literals (`` ` ``) para insertar variables en strings

---

### 3. **Funciones de Navegación**

```javascript
function nextSlide() {
    if (currentSlide < cards.length - 3) {
        currentSlide++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
}
```

**Explicación:**
- **nextSlide**: Avanza al siguiente slide si no es el último
- **prevSlide**: Retrocede al slide anterior si no es el primero
- `cards.length - 3`: Límite porque mostramos 3 cards a la vez
- Se llaman desde los botones con `onclick="nextSlide()"`

---

### 4. **Manejo del Formulario**

```javascript
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Show success message
        alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');

        // Reset form
        contactForm.reset();
    });
}
```

**Explicación:**
- **`addEventListener`**: Escucha el evento submit del formulario
- **`e.preventDefault()`**: Evita que la página se recargue
- **`FormData`**: Captura todos los datos del formulario
- **`alert`**: Muestra mensaje de confirmación
- **`reset()`**: Limpia todos los campos del formulario
- Validación if: Solo ejecuta si existe el formulario

---

### 5. **Smooth Scroll para Anclas**

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
```

**Explicación:**
- Selecciona todos los enlaces que empiezan con `#`
- Al hacer click, previene el comportamiento por defecto
- **`scrollIntoView`**: Scroll suave hacia el elemento target
- `behavior: 'smooth'`: Animación suave
- `block: 'start'`: Alinea el elemento al inicio de la vista

---

### 6. **Intersection Observer - Animaciones al hacer scroll**

```javascript
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.price-card, .titulacion-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
```

**Explicación:**
- **IntersectionObserver**: API moderna para detectar cuando elementos entran en vista
- **threshold: 0.1**: Activa cuando el 10% del elemento es visible
- **rootMargin**: Margen negativo de 50px en la parte inferior
- **isIntersecting**: `true` cuando el elemento entra en vista
- Elementos empiezan invisibles (`opacity: 0`) y abajo (`translateY(30px)`)
- Al entrar en vista, se vuelven visibles y suben a su posición

---

### 7. **Auto-scroll del Carousel**

```javascript
let autoScrollInterval = setInterval(() => {
    if (currentSlide < cards.length - 3) {
        nextSlide();
    } else {
        currentSlide = 0;
        updateCarousel();
    }
}, 5000);

// Pause auto-scroll on hover
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(() => {
        // ... mismo código
    }, 5000);
});
```

**Explicación:**
- **`setInterval`**: Ejecuta una función cada 5000ms (5 segundos)
- Avanza automáticamente al siguiente slide
- Al llegar al final, vuelve al inicio (loop infinito)
- **mouseenter**: Pausa el auto-scroll cuando el mouse está encima
- **mouseleave**: Reinicia el auto-scroll cuando el mouse sale
- **`clearInterval`**: Detiene el intervalo

---

### 8. **Scroll Effect en Header**

```javascript
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});
```

**Explicación:**
- **`window.pageYOffset`**: Obtiene la posición actual del scroll
- Si el scroll es mayor a 100px, aumenta la sombra del header
- Crea un efecto de "elevación" cuando se hace scroll
- `lastScroll`: Guarda la posición anterior del scroll
- Se ejecuta cada vez que el usuario hace scroll

---

### 9. **Event Listeners de Botones Flotantes**

```javascript
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
        window.open('https://wa.me/573383066', '_blank');
    });
}

const chatBtn = document.querySelector('.chat-btn');
if (chatBtn) {
    chatBtn.addEventListener('click', function() {
        alert('Chat en línea: Este servicio estará disponible próximamente.');
    });
}
```

**Explicación:**
- **WhatsApp button**: Abre WhatsApp Web con el número de la universidad
- **`window.open`**: Abre una nueva pestaña
- **`_blank`**: Target para nueva pestaña
- **Chat button**: Muestra un mensaje informativo
- Validación `if`: Previene errores si los botones no existen

---

### 10. **Inicialización al cargar**

```javascript
window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);

console.log('UCompensar - Ingeniería de Sistemas page loaded successfully!');
```

**Explicación:**
- **load event**: Se ejecuta cuando la página termina de cargar
- **resize event**: Se ejecuta cuando se cambia el tamaño de la ventana
- Recalcula el carousel para mantener el diseño correcto
- **console.log**: Mensaje en la consola del navegador para debugging

---

## 📖 Guía de Uso

### Para modificar el contenido:

1. **Cambiar textos**: Edita directamente en `index.html`
2. **Cambiar colores**: Modifica las variables de color en `styles.css`
3. **Cambiar imágenes**: Reemplaza las URLs en `index.html`

### Colores principales utilizados:

| Color | Código | Uso |
|-------|--------|-----|
| Azul principal | `#1f91bc` | Hero, títulos destacados |
| Azul oscuro | `#0d5d7a` | Gradientes, fondos |
| Gris oscuro | `#293946` | Top bar, textos |
| Naranja | `#ea952f` | Botones de acción |
| Cyan | `#00bcd4` | Acentos, iconos |
| Rosa | `#c2185b` | Botones de tarifas |

### Tipografías:

- **Montserrat**: Títulos principales (bold, peso 700-800)
- **Roboto**: Texto general (regular, peso 400)
- **Poppins**: Elementos especiales

### Breakpoints responsive:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

---

## 🔧 Funcionalidades Implementadas

✅ Navegación sticky (fija al hacer scroll)
✅ Carousel interactivo con auto-scroll
✅ Formulario con validación HTML5
✅ Animaciones al hacer scroll (Intersection Observer)
✅ Botones flotantes de WhatsApp y Chat
✅ Diseño completamente responsive
✅ Efectos hover en tarjetas y botones
✅ Smooth scroll para navegación interna
✅ Video de YouTube embebido

---

## 📝 Notas Importantes

1. **Las imágenes** se cargan desde `same-assets.com` (CDN externo)
2. **Las fuentes** se cargan desde Google Fonts
3. **El formulario** actualmente solo muestra un alert, para producción deberías conectarlo a un backend
4. **El botón de WhatsApp** abre el número 573383066, cámbialo por el número real
5. **Los enlaces** están con `href="#"`, reemplázalos con las URLs reales

---
