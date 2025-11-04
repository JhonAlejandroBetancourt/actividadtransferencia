# 🎓 Conceptos Técnicos Avanzados

## 📚 Índice de Conceptos

1. [Conceptos CSS](#conceptos-css)
2. [Conceptos JavaScript](#conceptos-javascript)
3. [Mejores Prácticas](#mejores-prácticas)
4. [Optimizaciones](#optimizaciones)

---

## 🎨 Conceptos CSS

### 1. **Flexbox - Sistema de Layout Flexible**

```css
.hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

**¿Qué es Flexbox?**
- Sistema de layout unidimensional (una fila o una columna)
- Perfecto para distribuir espacio entre elementos

**Propiedades principales:**
- `display: flex` → Activa el modo flexbox
- `justify-content` → Alineación horizontal
  - `space-between` → Espacio entre elementos
  - `center` → Centrado
  - `flex-start` → Al inicio
  - `flex-end` → Al final
- `align-items` → Alineación vertical
  - `center` → Centrado vertical
  - `stretch` → Estira elementos
  - `flex-start` → Arriba
  - `flex-end` → Abajo
- `flex-direction` → Dirección del eje
  - `row` → Horizontal (por defecto)
  - `column` → Vertical

**Ejemplo práctico:**
```css
.container {
    display: flex;
    flex-direction: row;      /* Horizontal */
    justify-content: center;   /* Centra horizontalmente */
    align-items: center;       /* Centra verticalmente */
    gap: 20px;                 /* Espacio entre elementos */
}

.item {
    flex: 1;  /* Todos ocupan el mismo espacio */
}
```

---

### 2. **CSS Grid - Sistema de Layout Bidimensional**

```css
.pricing-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
```

**¿Qué es CSS Grid?**
- Sistema de layout bidimensional (filas y columnas)
- Ideal para layouts complejos

**Propiedades principales:**
- `display: grid` → Activa el modo grid
- `grid-template-columns` → Define columnas
  - `repeat(3, 1fr)` → 3 columnas iguales
  - `1fr 2fr 1fr` → Columnas con diferentes proporciones
  - `200px auto 200px` → Columnas fijas y automáticas
- `grid-template-rows` → Define filas
- `gap` → Espacio entre celdas
- `grid-column` → Expande una celda en columnas
  - `1 / -1` → Desde la primera hasta la última columna
  - `span 2` → Ocupa 2 columnas

**Ejemplo práctico:**
```css
.form {
    display: grid;
    grid-template-columns: 1fr 1fr;  /* 2 columnas iguales */
    gap: 20px;
}

.full-width {
    grid-column: 1 / -1;  /* Ocupa todas las columnas */
}
```

---

### 3. **Position - Posicionamiento de Elementos**

```css
.header {
    position: sticky;
    top: 0;
    z-index: 100;
}
```

**Tipos de position:**

**1. Static (por defecto)**
```css
.element {
    position: static;  /* Flujo normal del documento */
}
```

**2. Relative (relativo a su posición original)**
```css
.element {
    position: relative;
    top: 10px;      /* Se mueve 10px hacia abajo */
    left: 20px;     /* Se mueve 20px hacia la derecha */
}
```

**3. Absolute (relativo al padre más cercano con position)**
```css
.parent {
    position: relative;  /* Contexto de referencia */
}

.child {
    position: absolute;
    top: 0;
    right: 0;  /* Esquina superior derecha del padre */
}
```

**4. Fixed (relativo a la ventana)**
```css
.floating-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;  /* Siempre en la esquina inferior derecha */
}
```

**5. Sticky (mezcla de relative y fixed)**
```css
.header {
    position: sticky;
    top: 0;  /* Se "pega" al top cuando haces scroll */
}
```

**Z-index (profundidad):**
```css
.layer1 { z-index: 1; }    /* Más atrás */
.layer2 { z-index: 10; }   /* En medio */
.layer3 { z-index: 100; }  /* Más adelante */
```

---

### 4. **Gradientes - Degradados de Color**

```css
.hero {
    background: linear-gradient(135deg, #1f91bc 0%, #0d5d7a 100%);
}
```

**Linear Gradient (gradiente lineal):**
```css
/* Sintaxis básica */
background: linear-gradient(dirección, color1, color2, ...);

/* Ejemplos */
background: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, #ff0000, #00ff00);
background: linear-gradient(135deg, #1f91bc 0%, #0d5d7a 100%);

/* Múltiples colores */
background: linear-gradient(to bottom,
    red 0%,
    yellow 33%,
    green 66%,
    blue 100%
);
```

**Radial Gradient (gradiente radial):**
```css
background: radial-gradient(circle, red, blue);
background: radial-gradient(ellipse at top, red, blue);
```

**Direcciones:**
- `to right` → De izquierda a derecha
- `to bottom` → De arriba a abajo
- `135deg` → Ángulo de 135 grados
- `to top right` → Diagonal superior derecha

---

### 5. **Pseudo-elementos - ::before y ::after**

```css
.hero::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url('...');
    opacity: 0.3;
}
```

**¿Qué son?**
- Elementos virtuales que se agregan antes o después del contenido
- Útiles para efectos decorativos sin agregar HTML

**Características:**
- **Requieren `content`** (aunque sea vacío `''`)
- Se comportan como elementos normales
- No aparecen en el DOM (no se pueden seleccionar con JavaScript)

**Usos comunes:**
```css
/* Icono antes del texto */
.item::before {
    content: '→ ';
    color: blue;
}

/* Overlay oscuro sobre imagen */
.image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}

/* Clearfix para floats */
.container::after {
    content: '';
    display: table;
    clear: both;
}
```

---

### 6. **Transforms - Transformaciones**

```css
.carousel-track {
    transform: translateX(-300px);
}

.card:hover {
    transform: scale(1.05) rotate(2deg);
}
```

**Tipos de transformaciones:**

**1. Translate (mover)**
```css
transform: translateX(50px);      /* Mueve 50px a la derecha */
transform: translateY(-20px);     /* Mueve 20px hacia arriba */
transform: translate(50px, -20px); /* X e Y juntos */
```

**2. Scale (escalar)**
```css
transform: scale(1.5);        /* 150% del tamaño original */
transform: scale(0.5);        /* 50% del tamaño */
transform: scaleX(2);         /* Solo horizontal */
transform: scaleY(0.8);       /* Solo vertical */
```

**3. Rotate (rotar)**
```css
transform: rotate(45deg);     /* Gira 45 grados */
transform: rotate(-90deg);    /* Gira -90 grados */
```

**4. Skew (inclinar)**
```css
transform: skewX(10deg);      /* Inclina horizontalmente */
transform: skewY(5deg);       /* Inclina verticalmente */
```

**Múltiples transformaciones:**
```css
transform: translateX(50px) scale(1.2) rotate(10deg);
```

**Transform origin (punto de referencia):**
```css
transform-origin: center;      /* Por defecto */
transform-origin: top left;    /* Desde esquina superior izquierda */
transform-origin: 50% 50%;     /* Centro (igual que 'center') */
```

---

### 7. **Transitions - Transiciones Suaves**

```css
.button {
    background-color: blue;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: red;
}
```

**Sintaxis completa:**
```css
transition: property duration timing-function delay;

/* Ejemplo */
transition: all 0.3s ease-in-out 0.1s;
```

**Propiedades:**
- `property` → Qué animar (`all`, `background`, `transform`, etc.)
- `duration` → Duración (ej: `0.3s`, `300ms`)
- `timing-function` → Curva de velocidad
  - `ease` → Lento-rápido-lento (por defecto)
  - `linear` → Velocidad constante
  - `ease-in` → Empieza lento
  - `ease-out` → Termina lento
  - `ease-in-out` → Empieza y termina lento
- `delay` → Retraso antes de iniciar

**Ejemplos prácticos:**
```css
/* Transición en múltiples propiedades */
.card {
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background-color 0.5s linear;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    background-color: #f0f0f0;
}
```

---

### 8. **Box Shadow - Sombras**

```css
.card {
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
```

**Sintaxis:**
```css
box-shadow: offset-x offset-y blur-radius spread-radius color;

/* Ejemplo */
box-shadow: 5px 5px 10px 0 rgba(0,0,0,0.5);
```

**Parámetros:**
- `offset-x` → Desplazamiento horizontal (positivo = derecha)
- `offset-y` → Desplazamiento vertical (positivo = abajo)
- `blur-radius` → Difuminado (mayor = más suave)
- `spread-radius` → Expansión de la sombra
- `color` → Color (usar `rgba` para transparencia)

**Ejemplos:**
```css
/* Sombra suave debajo */
box-shadow: 0 2px 5px rgba(0,0,0,0.1);

/* Sombra pronunciada */
box-shadow: 0 10px 30px rgba(0,0,0,0.3);

/* Sombra interna */
box-shadow: inset 0 2px 5px rgba(0,0,0,0.2);

/* Múltiples sombras */
box-shadow:
    0 2px 5px rgba(0,0,0,0.1),
    0 10px 30px rgba(0,0,0,0.05);
```

---

### 9. **Backdrop Filter - Glassmorphism**

```css
.carousel-card {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
}
```

**¿Qué es Glassmorphism?**
- Efecto de vidrio esmerilado muy moderno
- Fondo semi-transparente con blur

**Propiedades de backdrop-filter:**
```css
backdrop-filter: blur(10px);              /* Desenfoque */
backdrop-filter: brightness(1.2);         /* Brillo */
backdrop-filter: contrast(0.8);           /* Contraste */
backdrop-filter: saturate(2);             /* Saturación */
backdrop-filter: grayscale(50%);          /* Escala de grises */

/* Múltiples filtros */
backdrop-filter: blur(10px) brightness(1.1) saturate(1.5);
```

**Ejemplo completo de glassmorphism:**
```css
.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px) saturate(180%);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

---

### 10. **Media Queries - Responsive Design**

```css
@media (max-width: 768px) {
    .hero h1 {
        font-size: 32px;
    }
}
```

**Sintaxis básica:**
```css
@media (condición) {
    /* Estilos que solo aplican si se cumple la condición */
}
```

**Condiciones comunes:**
```css
/* Ancho máximo (hasta 768px) */
@media (max-width: 768px) { }

/* Ancho mínimo (desde 768px en adelante) */
@media (min-width: 768px) { }

/* Entre dos anchos */
@media (min-width: 768px) and (max-width: 1024px) { }

/* Orientación */
@media (orientation: portrait) { }   /* Vertical */
@media (orientation: landscape) { }  /* Horizontal */

/* Tipo de dispositivo */
@media screen { }        /* Pantallas */
@media print { }         /* Impresión */
```

**Breakpoints comunes:**
```css
/* Mobile first approach */
/* Base: Mobile (< 768px) */
.container { width: 100%; }

/* Tablet (768px - 1024px) */
@media (min-width: 768px) {
    .container { width: 750px; }
}

/* Desktop (> 1024px) */
@media (min-width: 1024px) {
    .container { width: 970px; }
}

/* Large desktop (> 1200px) */
@media (min-width: 1200px) {
    .container { width: 1170px; }
}
```

---

## ⚙️ Conceptos JavaScript

### 1. **DOM Manipulation - Manipulación del DOM**

```javascript
const element = document.querySelector('.hero');
const elements = document.querySelectorAll('.card');
```

**¿Qué es el DOM?**
- Document Object Model
- Representación en JavaScript de la estructura HTML

**Métodos de selección:**
```javascript
// Selecciona el primer elemento que coincide
document.querySelector('.clase');
document.querySelector('#id');
document.querySelector('div');

// Selecciona todos los elementos que coinciden
document.querySelectorAll('.clase');

// Métodos antiguos (aún válidos)
document.getElementById('id');
document.getElementsByClassName('clase');
document.getElementsByTagName('div');
```

**Manipulación de elementos:**
```javascript
// Cambiar contenido
element.textContent = 'Nuevo texto';
element.innerHTML = '<strong>Texto en negrita</strong>';

// Cambiar estilos
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.transform = 'translateX(50px)';

// Agregar/quitar clases
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');
element.classList.contains('active'); // true/false

// Atributos
element.getAttribute('href');
element.setAttribute('href', 'https://...');
element.removeAttribute('disabled');

// Crear elementos
const newDiv = document.createElement('div');
newDiv.textContent = 'Hola mundo';
document.body.appendChild(newDiv);

// Eliminar elementos
element.remove();
```

---

### 2. **Event Listeners - Escuchadores de Eventos**

```javascript
button.addEventListener('click', function() {
    console.log('Click!');
});
```

**Eventos comunes:**
```javascript
// Click
element.addEventListener('click', handleClick);

// Hover (mouse)
element.addEventListener('mouseenter', handleMouseEnter);
element.addEventListener('mouseleave', handleMouseLeave);
element.addEventListener('mouseover', handleMouseOver);

// Teclado
element.addEventListener('keydown', handleKeyDown);
element.addEventListener('keyup', handleKeyUp);

// Formularios
form.addEventListener('submit', handleSubmit);
input.addEventListener('input', handleInput);
input.addEventListener('change', handleChange);
input.addEventListener('focus', handleFocus);
input.addEventListener('blur', handleBlur);

// Scroll
window.addEventListener('scroll', handleScroll);

// Resize
window.addEventListener('resize', handleResize);

// Load
window.addEventListener('load', handleLoad);
```

**Objeto Event:**
```javascript
element.addEventListener('click', function(event) {
    event.preventDefault();       // Previene comportamiento por defecto
    event.stopPropagation();      // Detiene propagación del evento

    console.log(event.target);    // Elemento que disparó el evento
    console.log(event.type);      // Tipo de evento ('click')
    console.log(event.clientX);   // Posición X del mouse
    console.log(event.clientY);   // Posición Y del mouse
});
```

**Remover event listeners:**
```javascript
function handleClick() {
    console.log('Click!');
}

element.addEventListener('click', handleClick);
element.removeEventListener('click', handleClick);
```

---

### 3. **Arrow Functions - Funciones Flecha**

```javascript
const nextSlide = () => {
    currentSlide++;
    updateCarousel();
};
```

**Sintaxis tradicional vs Arrow functions:**
```javascript
// Función tradicional
function sumar(a, b) {
    return a + b;
}

// Arrow function
const sumar = (a, b) => {
    return a + b;
};

// Arrow function corta (return implícito)
const sumar = (a, b) => a + b;

// Un solo parámetro (paréntesis opcionales)
const doble = num => num * 2;

// Sin parámetros
const saludar = () => console.log('Hola');
```

**Diferencias importantes:**
```javascript
// 'this' se comporta diferente
const obj = {
    nombre: 'Juan',

    // Función tradicional: 'this' = obj
    saludar: function() {
        console.log('Hola ' + this.nombre);
    },

    // Arrow function: 'this' = contexto padre
    despedir: () => {
        console.log('Adiós ' + this.nombre); // undefined
    }
};
```

---

### 4. **Template Literals - Plantillas de Texto**

```javascript
const offset = -(currentSlide * (cardWidth + gap));
carouselTrack.style.transform = `translateX(${offset}px)`;
```

**Sintaxis:**
```javascript
// Comillas invertidas (backticks)
const texto = `Hola mundo`;

// Interpolación de variables
const nombre = 'Juan';
const edad = 25;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años`;

// Expresiones
const precio = 100;
const total = `Total: $${precio * 1.16}`;

// Multilínea
const html = `
    <div class="card">
        <h2>${titulo}</h2>
        <p>${descripcion}</p>
    </div>
`;
```

**Vs concatenación tradicional:**
```javascript
// Tradicional (difícil de leer)
const mensaje = 'Hola, soy ' + nombre + ' y tengo ' + edad + ' años';

// Template literal (más legible)
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años`;
```

---

### 5. **Array Methods - Métodos de Arreglos**

```javascript
cards.forEach((card, index) => {
    card.classList.remove('active');
});
```

**forEach - Iterar sobre cada elemento:**
```javascript
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero, indice) => {
    console.log(`Elemento ${indice}: ${numero}`);
});
```

**map - Transformar cada elemento:**
```javascript
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(num => num * 2);
// dobles = [2, 4, 6, 8, 10]
```

**filter - Filtrar elementos:**
```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(num => num % 2 === 0);
// pares = [2, 4]
```

**find - Encontrar un elemento:**
```javascript
const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' }
];
const usuario = usuarios.find(u => u.id === 2);
// usuario = { id: 2, nombre: 'María' }
```

**reduce - Reducir a un solo valor:**
```javascript
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((total, num) => total + num, 0);
// suma = 15
```

---

### 6. **Intersection Observer API**

```javascript
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, options);
```

**¿Qué es?**
- API moderna para detectar cuando elementos entran/salen del viewport
- Más eficiente que usar scroll events

**Configuración:**
```javascript
const options = {
    root: null,              // null = viewport del navegador
    rootMargin: '0px',       // Margen alrededor del root
    threshold: 0.5           // 0.5 = 50% del elemento visible
};

const observer = new IntersectionObserver(callback, options);
```

**Threshold (umbral):**
```javascript
threshold: 0      // Se activa cuando aparece cualquier parte
threshold: 0.5    // Se activa cuando el 50% es visible
threshold: 1.0    // Se activa cuando el 100% es visible
threshold: [0, 0.5, 1]  // Se activa en múltiples puntos
```

**Callback:**
```javascript
const callback = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.isIntersecting);     // true/false
        console.log(entry.intersectionRatio);  // % visible (0-1)
        console.log(entry.target);             // Elemento observado

        if (entry.isIntersecting) {
            // Hacer algo cuando entra en vista
            entry.target.classList.add('visible');

            // Dejar de observar (optimización)
            observer.unobserve(entry.target);
        }
    });
};
```

**Uso completo:**
```javascript
// Crear observer
const observer = new IntersectionObserver(callback, options);

// Observar elementos
const elementos = document.querySelectorAll('.fade-in');
elementos.forEach(el => observer.observe(el));

// Dejar de observar
observer.unobserve(elemento);

// Desconectar completamente
observer.disconnect();
```

---

### 7. **setInterval y setTimeout**

```javascript
let autoScrollInterval = setInterval(() => {
    nextSlide();
}, 5000);
```

**setTimeout - Ejecuta una vez después de un delay:**
```javascript
setTimeout(() => {
    console.log('Esto se ejecuta después de 3 segundos');
}, 3000);

// Con parámetros
setTimeout(function(nombre) {
    console.log('Hola ' + nombre);
}, 2000, 'Juan');

// Cancelar timeout
const timeoutId = setTimeout(() => { }, 5000);
clearTimeout(timeoutId);
```

**setInterval - Ejecuta repetidamente:**
```javascript
setInterval(() => {
    console.log('Esto se ejecuta cada 2 segundos');
}, 2000);

// Cancelar interval
const intervalId = setInterval(() => { }, 2000);
clearInterval(intervalId);
```

**Ejemplo práctico - Contador:**
```javascript
let contador = 0;
const intervalId = setInterval(() => {
    contador++;
    console.log(contador);

    if (contador === 10) {
        clearInterval(intervalId);
        console.log('Finalizado');
    }
}, 1000);
```

---

### 8. **FormData API**

```javascript
const formData = new FormData(contactForm);
```

**¿Qué es?**
- API para capturar datos de formularios fácilmente
- Útil para enviar datos a un servidor

**Uso básico:**
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Obtener valores
    const nombre = formData.get('nombre');
    const email = formData.get('email');

    console.log(nombre, email);
});
```

**Métodos:**
```javascript
const formData = new FormData();

// Agregar datos
formData.append('nombre', 'Juan');
formData.append('edad', 25);

// Obtener datos
formData.get('nombre');        // 'Juan'

// Ver todos los datos
for (let [key, value] of formData.entries()) {
    console.log(key, value);
}

// Eliminar
formData.delete('edad');

// Verificar si existe
formData.has('nombre');        // true
```

**Enviar a servidor (con fetch):**
```javascript
const formData = new FormData(form);

fetch('/api/submit', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

---

## 💡 Mejores Prácticas

### CSS

1. **Mobile First**
```css
/* Base: Mobile */
.container { width: 100%; }

/* Desktop: Agregar complejidad */
@media (min-width: 768px) {
    .container { width: 750px; }
}
```

2. **Nomenclatura BEM**
```css
/* Block */
.card { }

/* Element */
.card__title { }
.card__image { }

/* Modifier */
.card--featured { }
.card__title--large { }
```

3. **Variables CSS**
```css
:root {
    --color-primary: #1f91bc;
    --spacing-md: 20px;
}

.button {
    background-color: var(--color-primary);
    padding: var(--spacing-md);
}
```

### JavaScript

1. **Const vs Let**
```javascript
const nombre = 'Juan';    // No cambia
let edad = 25;            // Puede cambiar
// Nunca usar var
```

2. **Validar antes de manipular**
```javascript
const element = document.querySelector('.elemento');
if (element) {
    element.style.color = 'red';
}
```

3. **Event delegation**
```javascript
// Mal: Event listener en cada item
items.forEach(item => {
    item.addEventListener('click', handleClick);
});

// Bien: Un solo event listener en el padre
parent.addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        handleClick(e);
    }
});
```

---

## ⚡ Optimizaciones

### Performance CSS

1. **Evitar selectores complejos**
```css
/* Lento */
div > ul > li > a { }

/* Rápido */
.nav-link { }
```

2. **Will-change para animaciones**
```css
.animated-element {
    will-change: transform;
}
```

3. **Contenido crítico inline**
```html
<style>
    /* CSS crítico para Above the Fold */
    .hero { ... }
</style>
```

### Performance JavaScript

1. **Debounce para eventos frecuentes**
```javascript
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.addEventListener('scroll', debounce(handleScroll, 100));
```

2. **Lazy loading de imágenes**
```html
<img loading="lazy" src="imagen.jpg">
```

3. **Minimizar reflows**
```javascript
// Mal: Multiple reflows
element.style.width = '100px';
element.style.height = '100px';

// Bien: Un solo reflow
element.style.cssText = 'width: 100px; height: 100px;';
```

---

**Fin de la documentación técnica** 🎉
