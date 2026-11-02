# DESIGN.md — Sistema de Diseño Envíos DosRuedas & MarDelivery

> **Fuente canónica de especificación visual y técnica para ingeniería de diseño (Design Engineering)**  
> Basado en la auditoría exhaustiva del repositorio, las 19 landing pages en `propuesta/`, las hojas de estilo (`layout.css`, `home.css`), la interactividad (`layout.js`) y el documento de referencia `docs/Sistema de diseño — Envíos DosRuedas.md`.  
> **Versión**: 2.0 (Noviembre 2026) | **Estado**: Producción & Homologado

---

## 1. Manifiesto & Filosofía de Diseño

El sistema visual de **Envíos DosRuedas** está construido bajo la premisa de ser **inconfundible, enérgico y marplatense**. Diseñado para destacar tanto en la calle como en pantallas móviles con alta incidencia solar, prioriza la velocidad visual, el alto contraste y la claridad operativa.

### Pilares Rectores
1. **Bicolor Dominante y Radical**: Dos colores mandan: el **Azul Eléctrico** (`#0950F6`) y el **Amarillo Canario** (`#FFEC01`). No hay lugar para grises genéricos ni paletas diluidas de SaaS.
2. **Tipografía Expresiva & Contrastante**: Titulares condensados y ruidosos en mayúsculas (**Anton** y **Bebas Neue**) enfrentados a un texto corrido liviano y legible (**Outfit Light**).
3. **Morfología en Cápsula (*Pill-First*)**: Botones, etiquetas, chips y estados son sistemáticamente `rounded-full`. Las tarjetas oscilan entre `rounded-xl`, `rounded-2xl` y `rounded-3xl` según su nivel de jerarquía.
4. **Ritmo de Secciones Alternadas**: Transición cromática definida: *Azul de Marca ↔ Blanco Puro ↔ Celeste Tinte (`#FAFBFF` / `brand-blue-50/50`)*, delimitadas siempre por bordes ultrafinos (`border-t border-white/10` o `border-t border-brand-blue/10`).
5. **El Amarillo es Acción y Foco**: El amarillo representa conversión y énfasis: botones primarios (CTA), resaltados inclinados en títulos, hover de links e indicadores vivos. **Nunca** se utiliza como fondo para una sección completa.
6. **Voz de Marca Rioplatense**: Redacción cercana y directa con voseo marplatense (*"Cotizá tu envío"*, *"Despachá en el día"*, *"Vendés por Mercado Libre"*).
7. **Ecosistema Dual (DosRuedas vs. MarDelivery)**: Coexistencia controlada entre la marca madre (Envíos DosRuedas: azul, diurna, alto impacto) y su producto especializado (MarDelivery: oscura, vidrio, verde/amarillo/azul informativo).

---

## 2. Sistema de Color (Color System)

### 2.1 Paleta Canónica Envíos DosRuedas

La escala de azul posee una regla inviolable: **la escala termina en 500 (`#0950F6`)**. No existen pasos más oscuros (`blue-600`, `blue-700`, `blue-800`, `blue-900` ni `blue-950`). El texto oscuro sobre fondo claro se escribe con el mismo azul corporativo (`brand-ink` = `#0950F6`).

```
┌────────────────────────────────────────────────────────────────────────┐
│ ESCALA AZUL CANÓNICA (Tope de oscuridad: 500)                           │
│ [50: #E6EEFE] ── [100: #BACEFD] ── [200: #8EAFFB] ──                  │
│ ── [300: #628FF9] ── [400: #3570F8] ── [500: #0950F6 (CANÓNICO)]      │
└────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────────────┐
│ ESCALA AMARILLA DE ACCIÓN (Llamadas a la acción y foco)                 │
│ [50: #FFFDE6] ── [100: #FFFAB8] ── [200: #FFF78A] ──                  │
│ ── [400: #FFF12E] ── [500: #FFEC01 (CTA)] ── [600: #E6D400 (Active)]  │
└────────────────────────────────────────────────────────────────────────┘
```

| Token Tailwind | Variable CSS | Hex | Rol & Aplicación en la Interfaz |
| :--- | :--- | :---: | :--- |
| `brand-blue` / `brand-blue-500` | `--color-brand-blue` | `#0950F6` | **Primario canónico y tope de oscuridad**. Títulos H1/H2, foco, botones, fondos de hero, header, footer y texto (`brand-ink`). |
| `brand-blue-400` | `--color-brand-blue-400` | `#3570F8` | Íconos decorativos, texto grande atenuado (≥24px), hover de botones azules. |
| `brand-blue-300` | `--color-brand-blue-300` | `#628FF9` | Bordes de inputs en reposo, hover de bezels, trazos secundarios de SVG. |
| `brand-blue-200` | `--color-brand-blue-200` | `#8EAFFB` | Hover de bordes de tarjetas claras, anillos de selección pendiente. |
| `brand-blue-100` | `--color-brand-blue-100` | `#BACEFD` | Bordes estructurales, divisores y líneas pendientes del stepper. |
| `brand-blue-50` | `--color-brand-blue-50` | `#E6EEFE` | Fondos suaves, bezel exterior de tarjetas, esqueletos de carga y hover ghost. |
| `brand-yellow` / `brand-yellow-500` | `--color-brand-yellow` | `#FFEC01` | **Acento de acción principal**. Botones CTA, palabras destacadas, badges de estado e indicadores. |
| `brand-yellow-400` | `--color-brand-yellow-400` | `#FFF12E` | Estado `hover` de botones CTA amarillos. |
| `brand-yellow-600` | `--color-brand-yellow-600` | `#E6D400` | Estado `active`/presionado y bordes de acento. |
| `brand-yellow-200` / `-100` / `-50` | `--color-brand-yellow-*` | `#FFF78A` / `#FFFAB8` / `#FFFDE6` | Fondos de chips amarillos y resaltados de micro-datos. |
| `white` / `brand-white` | `--color-white` | `#FFFFFF` | Fondos de tarjetas, texto sobre azul, superficies limpias. |
| `brand-ink` | `--color-ink` | `#0950F6` | Texto general sobre superficies claras (ratio ≈ 6.0:1 sobre blanco). |

#### Reglas de Profundidad sin Oscurecer
- **Prohibido inventar azules 600–950**: Para dar profundidad sobre azul se utiliza opacidad sobre 500 (`bg-brand-blue-500/80`, `/60`) o capas superpuestas en `black/15` o `black/20`.
- **Comportamiento en Hover**: Sobre superficies azules claras, el texto interactivo aclara hacia 400 (`hover:text-brand-blue-400`); sobre azul corporativo, muta al amarillo (`hover:text-brand-yellow`).
- **400 como texto únicamente en titulares**: `#3570F8` da ≈ 4.4:1 sobre blanco (falla WCAG AA para textos menores a 24px).

### 2.2 Superficies, Fondos y Tramas Recurrentes
- **Fondo claro alternado**: `#FAFBFF` (o `brand-blue-50/50`).
- **Degradé de sección clara (FAQ / Cierres)**: `from-[#F5F8FF] via-[#EBF2FE] to-[#F8FAFC]` delimitado por `border-y border-brand-blue/15`.
- **Degradé del Hero**: `linear-gradient(135deg, #0950F6 0%, #0950F6 55%, #3570F8 100%)`.
- **Trama de puntos (Grid Dots) en Hero**: `radial-gradient(#FFFFFF 1px, transparent 1px)` a `24px 24px` con `opacity: 0.10` y `pointer-events-none`.

### 2.3 Opacidades de Capa Normalizadas
- **Sobre fondo azul**: `white/10` (paneles de vidrio), `white/15` y `white/20` (bordes y hovers), `white/90` (párrafos), `white/70-80` (texto secundario).
- **Sobre fondo blanco**: `brand-blue/80` (párrafos), `brand-blue/60` (placeholders), `brand-blue/10-15` (bordes estructurales).
- **Acento translúcido**: `brand-yellow/15` (fondo de badge) con `brand-yellow/30` (borde del badge).

### 2.4 Acentos de Servicio & Terceros
- **Servicios Específicos (Carrusel Home)**:
  - Fulfillment: `#00D2FF` (texto profundo `#081224`).
  - Económico: `#2ECC85` (texto profundo `#031811`).
  - Inteligencia / Rueditas IA: `#F5B938`.
- **Redes & Canales**:
  - Facebook: `#0866FF` / hover `#1877F2`.
  - Instagram: Degradé `linear-gradient(45deg, #833AB4, #FD1D1D, #F77737)`.
  - WhatsApp Oficial: `#128C7E` / hover `#0E7468`.

---

## 3. Jerarquía Tipográfica

Se emplean 4 familias alojadas en Google Fonts:
1. **Anton** (`font-display`): Títulos de impacto supremo (Display H1, H2, H3).
2. **Bebas Neue** (`font-subheading`): Subtítulos, botones, píldoras, badges, navegación y eyebrows.
3. **Outfit** (`font-sans`): Texto corrido, párrafos explicativos, formularios.
4. **Geist Mono** (`font-mono`): Datos numéricos, precios, pasos y métricas de seguimiento.

### 3.1 Escala y Reglas de Tipografía

| Nivel / Rol | Familia | Clase Tailwind | Tracking / Leading | Transform | Uso Estándar |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Anton | `font-display` | `tracking-[-0.025em]` `leading-[0.92]` | `uppercase` | `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl` |
| **Sección H2** | Anton | `font-display` | `tracking-[-0.025em]` `leading-[0.96]` | `uppercase` | `text-3xl sm:text-4xl lg:text-5xl` |
| **Tarjetas / Banners H3** | Anton | `font-display` | `tracking-[-0.02em]` `leading-[0.98]` | `uppercase` | `text-2xl sm:text-3xl` |
| **Subheadings & Botones** | Bebas Neue | `font-subheading` | `tracking-wider` (`0.05em`) | `uppercase` | `text-sm sm:text-base lg:text-lg` |
| **Eyebrows & Badges** | Bebas Neue | `font-subheading` | `tracking-widest` (`0.1em`) | `uppercase` | `text-xs sm:text-sm` |
| **Cuerpo Hero** | Outfit (Light) | `font-sans font-light` | `tracking-normal` `leading-relaxed` | Normal | `text-base sm:text-lg lg:text-xl max-w-[56ch]` |
| **Cuerpo General** | Outfit (Regular) | `font-sans font-normal` | `tracking-normal` `leading-relaxed` | Normal | `text-sm sm:text-base text-brand-blue-500/80` |
| **Métricas & Precios** | Geist Mono | `font-mono` | `tracking-tight` | `tabular-nums` | `text-lg sm:text-2xl font-bold` |

### 3.2 Recurso Signature: Palabra Resaltada Inclinada
En cada titular principal de página se resalta **exactamente una frase clave** mediante un contenedor amarillo con leve rotación:

```html
<span class="inline-block bg-brand-yellow text-brand-blue px-3 py-0.5 mt-1 -rotate-1 shadow-accent-sm">
  última milla
</span>
```
*Regla*: Nunca más de una por sección para no devaluar el punto focal de atención.

---

## 4. Layout, Espaciado & Grilla

### 4.1 Contenedor Canónico
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Contenido alineado al grid del sistema -->
</div>
```

### 4.2 Ritmo Vertical de Secciones
- **Sección Estándar**: `py-20 lg:py-24`.
- **Sección de Cierre / FAQ / Formularios**: `py-16 md:py-24`.
- **Sección Hero**: `min-h-[90dvh] pt-24 lg:pt-28 pb-16 lg:pb-20` (compensa el header fijo de 70px).
- **Separación entre secciones**: Delimitador obligatorio con borde fino:
  - Sobre fondo claro: `border-t border-brand-blue/10`.
  - Sobre fondo azul: `border-t border-white/10`.

### 4.3 Sistema de Gaps y Distribución
- Gaps en cuadrículas: `gap-2` (microelementos), `gap-3` (espaciado dominante de chips y botones), `gap-4` a `gap-6` (tarjetas y grillas de servicios).
- Grillas responsivas estándar:
  - Servicios: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.
  - Métrica / Pasos: `grid grid-cols-2 md:grid-cols-4 gap-4`.
  - Footer: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`.

---

## 5. Forma: Radios, Bordes & Sombras

### 5.1 Escala de Radios de Borde
- `rounded-full` (9999px): Botones primarios/secundarios, badges, chips, avatares, cápsulas anidadas.
- `rounded-xl` (12px): Inputs de formulario, botones de icono (`44×44px`), items interactivos.
- `rounded-2xl` (16px): Tarjetas estándar de contenido, banners de footer.
- `rounded-3xl` / `rounded-panel` (24px): Tarjetas protagonistas de servicios, carrusel 3D, módulos con doble bezel.

### 5.2 Sistema Formal de Sombras (`boxShadow`)
El sistema define 7 sombras corporativas exclusivas:

```javascript
boxShadow: {
  'accent-sm':        '0 4px 12px rgba(255, 236, 1, 0.30)',
  'accent-md':        '0 8px 24px rgba(255, 236, 1, 0.35)',
  'cta-glow':         '0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18)',
  'glow-yellow':      '0 0 20px rgba(255, 236, 1, 0.45)',
  'float':            '0 8px 24px rgba(9, 80, 246, 0.10)',
  'elevated':         '0 16px 40px rgba(9, 80, 246, 0.18)',
  'antigravity-deep': '0 24px 56px rgba(9, 80, 246, 0.22)',
}
```

#### Jerarquía de Elevación
1. **Superficie plana / Reposo**: `shadow-float` (tarjetas informativas en reposo).
2. **Elevación media**: `shadow-elevated` (tarjetas flotantes o activas).
3. **Elevación máxima**: `hover:shadow-antigravity-deep` (hover en tarjetas con doble marco).
4. **Resplandor de Conversión**: `shadow-accent-md` con transición a `hover:shadow-cta-glow`.

---

## 6. Especificación de Componentes de UI

### 6.1 Header Fijo & Navegación (`#optimized-header`)
- **Comportamiento**: Fijo en la parte superior (`fixed top-0 inset-x-0 z-40`), fondo `bg-brand-blue-500`, borde inferior `border-b border-white/10`, altura interior compacta (`py-3.5`).
- **Elevación dinámica (`layout.js`)**: Al scrollear más de 20px se inyecta la clase `.is-scrolled`, aumentando la densidad del fondo y la sombra.
- **Logotipo Corporativo**: Imagen WebP (`44×44px`) con microinteracción: `group-hover:scale-105 group-hover:rotate-6`. Wordmark con Anton: **"Envíos"** (blanco) y **"DosRuedas"** (amarillo), ambos con clase `.kinetic-font-stretch`.
- **Dropdowns de Escritorio**: Botones con atributos `aria-expanded="false"` y `aria-haspopup="true"`. Al interactuar, despliegan un panel `bg-brand-blue-500 rounded-2xl shadow-2xl border border-white/15 py-2`. Cierre automático al hacer clic exterior o pulsar la tecla `Escape`.
- **Móvil**: Botón de llamada rápida directa (`tel:`) y botón hamburguesa accesible con aria controls.

### 6.2 Botón Primario de Conversión (*Nested Pill CTA*)
Es el componente de acción protagónico del ecosistema:

```html
<a href="https://wa.me/549223XXXXXXX" 
   target="_blank" 
   rel="noopener noreferrer"
   class="cta-nested-pill px-7 py-3.5 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-400
          font-subheading font-bold text-base uppercase tracking-wider shadow-accent-md
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow">
  <span>PEDIR ENVÍO EN MOTO</span>
  <span class="w-8 h-8 rounded-full bg-brand-blue/15 flex items-center justify-center ml-3">
    <i data-lucide="arrow-up-right" class="w-4 h-4 text-brand-blue"></i>
  </span>
</a>
```

- **Microinteracción**: En reposo tiene `shadow-accent-md`; en hover sube 2px (`transform: translateY(-2px)`) y despliega `shadow-cta-glow` en `160ms`.

### 6.3 Botón Secundario (Outline sobre Azul)
```html
<a href="./cotizar.html" 
   class="cta-nested-pill px-6 py-2.5 min-h-[44px] border border-white/40 text-white 
          hover:bg-white/10 hover:border-white font-subheading uppercase tracking-wider">
  <span>Cotizar Envío</span>
  <span class="w-8 h-8 rounded-full bg-white/10 text-brand-yellow flex items-center justify-center ml-3 group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors">
    <i data-lucide="arrow-right" class="w-4 h-4"></i>
  </span>
</a>
```

### 6.4 Badges & Eyebrows
Utilizados para categorizar o indicar actividad operativa en tiempo real:

```html
<div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow/15
            border border-brand-yellow/30 text-brand-yellow text-xs font-subheading uppercase tracking-wider">
  <span class="w-2 h-2 rounded-full bg-brand-yellow animate-ping"></span>
  <span>Cadetería Express · 60 min</span>
</div>
```

### 6.5 Campos de Formulario (`inputs`)
- **Label**: `text-xs font-subheading uppercase tracking-wider font-bold` acompañado de un icono Lucide de `14×14px`.
- **Input**: Altura mínima `44px` (`h-11`), `bg-white`, borde `border-2 border-brand-blue-100 rounded-xl px-4 text-sm text-brand-blue-500 placeholder:text-brand-blue-500/60 shadow-sm`.
- **Foco Accesible**: `focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-500`.

### 6.6 Tarjetas de Servicios y Contenedores
- **Sobre Azul**: `bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:bg-white/15 transition-all`.
- **Sobre Blanco**: `bg-white border border-brand-blue-100 rounded-2xl p-6 shadow-float hover:border-brand-blue-300 hover:-translate-y-1 hover:shadow-elevated transition-all`.
- **Estructura "Double Bezel" (Marco Doble)**: Marco exterior `bg-brand-blue-500 p-2 sm:p-3 rounded-3xl shadow-xl`, con tarjeta interior blanca `rounded-2xl p-6 sm:p-8`. Se utiliza en cotizadores y páginas legales.

### 6.7 Ticker / Marquee Continuo de Confianza
Franja continua con velocidad de 25s:
- Tipografía: `font-subheading uppercase tracking-wider text-base text-white`.
- Separadores rítmicos: Rombos amarillos girados 45° (`h-1.5 w-1.5 rotate-45 bg-brand-yellow inline-block mx-4`).
- Contenido tipo: *"Cadetería en el día · Flota propia asegurada · Cero intermediarios · Atención personalizada"*.

---

## 7. Movimiento, Transición & Cinética

- **Duración de micro-interacciones**: `160ms` (`transitionDuration: { '160': '160ms' }`) para botones, pills y cambios de estado táctil.
- **Duración estándar de interfaz**: `200ms` a `300ms` con curva `ease-out`.
- **Tipografía Cinética (`.kinetic-font-stretch`)**:
  ```css
  .kinetic-font-stretch {
    display: inline-block;
    transition: transform 0.25s ease;
  }
  .kinetic-font-stretch:hover {
    transform: scaleX(1.06);
  }
  ```
- **Carrusel 3D Interactivo**: Utiliza `transform-style: preserve-3d` con tarjetas en perspectiva, sombras dinámicas y propiedad de hardware `will-change: transform, opacity`.
- **Preferencia de Movimiento Reducido**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

---

## 8. Accesibilidad (WCAG 2.2 Nivel AA)

1. **Salto al contenido principal (*Skip Link*)**: Primer nodo hijo directo del `<body>`:
   ```html
   <a href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-3 focus:rounded-full focus:bg-brand-yellow focus:text-brand-blue font-subheading font-bold uppercase tracking-wider shadow-cta-glow focus:outline-none focus:ring-2 focus:ring-white">
     Saltar al contenido principal
   </a>
   ```
2. **Targets Táctiles Mínimos**: Todos los botones, enlaces interactivos y controles cumplen o superan `min-h-[44px]` y `min-w-[44px]`.
3. **Foco Visual Inconfundible**:
   - Sobre blanco: `focus-visible:ring-4 focus-visible:ring-brand-yellow focus-visible:ring-offset-2`.
   - Sobre azul: `focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500`.
4. **Contraste Cromático**:
   - Azul `brand-blue-500` sobre Blanco: **6.0:1** (Pasa AA normal y texto grande).
   - Amarillo `brand-yellow` sobre Azul: **8.2:1** (Pasa AAA).
   - Blanco sobre Azul `brand-blue-500`: **6.0:1** (Pasa AA).
5. **Selección de Texto de Marca**:
   ```css
   ::selection {
     background-color: #FFEC01;
     color: #0950F6;
   }
   ```

---

## 9. Sub-sistema MarDelivery (Producto Satélite)

**MarDelivery** (`mardelivery.html`) es la plataforma gastronómica y de reparto para restaurantes de la empresa. **Posee un subsistema de diseño propio y autónomo** que no debe mezclarse con la identidad de DosRuedas:

```
┌────────────────────────────────────────────────────────────────────────┐
│ IDENTIDAD VISUAL MARDELIVERY                                            │
│ • Fondo: Siempre oscuro (#031811) con paneles de vidrio (blur 18px).   │
│ • Jerarquía Cromática:                                                 │
│     - Verde (#35d07f / #2ECC85): Acción principal, éxito, resuelto.    │
│     - Amarillo (#ffc833 / #F5B938): Alertas, plazos, montos y foco.    │
│     - Azul (#4da3ff): Informativo (turnos disponibles, repartidor).     │
│     - Rojo (#ff5247): EXCLUSIVO para errores y acciones destructivas.   │
│ • Tipografía: Exclusivamente Outfit (H1/H2 en peso 900 sin mayúsculas) │
│ • Arte Marplatense: Panorámica costera (.md-city-art) + haz de faro.   │
└────────────────────────────────────────────────────────────────────────┘
```

### Tabla de Correspondencia: Vitrina (`mardelivery.html`) vs. App Real

| Componente | En `mardelivery.html` (Vitrina) | En App de Producción MarDelivery |
| :--- | :--- | :--- |
| **Acento Primario** | `#2ECC85` | `#35d07f` |
| **Acento Secundario** | `#F5B938` | `#ffc833` |
| **Fondo Base** | `#031811` / `#111B17` | `#031811` |
| **Superficie de Vidrio** | `backdrop-blur-md` | `--md-glass` (`blur(18px)`) |
| **Tipografía** | Anton + Bebas Neue (heredado del sitio) | Outfit (900 para display, 800 para labels) |
| **Botón Primario** | Pill con borde verde y hover `brightness` | `.md-primary-action` (48px alto, verde sólido) |

---

## 10. Configuración Drop-in de Tailwind CSS

Esta es la configuración unificada y canónica para los 19 archivos del proyecto, resolviendo la deuda técnica de tokens huérfanos:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0950F6',
          ink: '#0950F6',
          white: '#FFFFFF',
          // 6 pasos canónicos. 500 es el tope de oscuridad (no existen 600–950):
          'blue-50': '#E6EEFE',
          'blue-100': '#BACEFD',
          'blue-200': '#8EAFFB',
          'blue-300': '#628FF9',
          'blue-400': '#3570F8',
          'blue-500': '#0950F6',
          yellow: '#FFEC01',
          'yellow-50': '#FFFDE6',
          'yellow-100': '#FFFAB8',
          'yellow-200': '#FFF78A',
          'yellow-400': '#FFF12E',
          'yellow-500': '#FFEC01',
          'yellow-600': '#E6D400'
        },
        // Acentos de servicio del carrusel Home (no de marca)
        service: {
          fulfillment: '#00D2FF',
          'fulfillment-ink': '#081224',
          'fulfillment-deep': '#0A162B',
          'fulfillment-mid': '#102242',
          'fulfillment-night': '#050C19',
          economico: '#2ECC85',
          'economico-ink': '#031811',
          ia: '#F5B938'
        },
        // Canales oficiales y terceros
        social: {
          facebook: '#0866FF',
          'facebook-hover': '#1877F2',
          instagram: '#E1306C',
          'instagram-from': '#833AB4',
          'instagram-to': '#F77737',
          'instagram-red': '#FD1D1D',
          whatsapp: '#128C7E',
          'whatsapp-deep': '#0E7468'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
        subheading: ['Bebas Neue', 'sans-serif'],
        mono: ['Geist Mono', 'monospace']
      },
      fontSize: {
        micro: ['10px', '1.4'],
        mini: ['11px', '1.4'],
        caption: ['12px', '1.4'],
        label: ['13px', '1.4']
      },
      lineHeight: {
        display: '0.92',
        heading: '0.98'
      },
      borderRadius: {
        card: '20px',
        panel: '24px',
        hero: '28px'
      },
      maxWidth: {
        '105': '26.25rem' // 420px estándar
      },
      transitionDuration: {
        '160': '160ms' // Microinteracciones táctiles
      },
      boxShadow: {
        'accent-sm':        '0 4px 12px rgba(255, 236, 1, 0.30)',
        'accent-md':        '0 8px 24px rgba(255, 236, 1, 0.35)',
        'cta-glow':         '0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18)',
        'glow-yellow':      '0 0 20px rgba(255, 236, 1, 0.45)',
        'float':            '0 8px 24px rgba(9, 80, 246, 0.10)',
        'elevated':         '0 16px 40px rgba(9, 80, 246, 0.18)',
        'antigravity-deep': '0 24px 56px rgba(9, 80, 246, 0.22)'
      }
    }
  }
};
```

---

## 11. CSS Global Reutilizable (`:root` & Component Classes)

```css
:root {
  --color-brand-blue: #0950F6;
  --color-brand-blue-50: #E6EEFE;
  --color-brand-blue-100: #BACEFD;
  --color-brand-blue-200: #8EAFFB;
  --color-brand-blue-300: #628FF9;
  --color-brand-blue-400: #3570F8;
  --color-brand-blue-500: #0950F6;

  --color-brand-yellow: #FFEC01;
  --color-brand-yellow-50: #FFFDE6;
  --color-brand-yellow-100: #FFFAB8;
  --color-brand-yellow-200: #FFF78A;
  --color-brand-yellow-400: #FFF12E;
  --color-brand-yellow-500: #FFEC01;
  --color-brand-yellow-600: #E6D400;

  --color-white: #FFFFFF;
  --color-ink: #0950F6;
}

/* Tipografías Utilitarias */
.font-display {
  font-family: 'Anton', sans-serif;
  letter-spacing: -0.025em;
  text-transform: uppercase;
}

.font-subheading {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.font-mono {
  font-family: 'Geist Mono', monospace;
  font-variant-numeric: tabular-nums;
}

/* Botón Píldora Anidada Oficial */
.cta-nested-pill {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 9999px;
  font-family: 'Bebas Neue', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  transition: transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease;
}

.cta-nested-pill:hover {
  transform: translateY(-2px);
}

/* Tipografía Cinética Dinámica */
.kinetic-font-stretch {
  display: inline-block;
  transition: transform 0.25s ease;
}

.kinetic-font-stretch:hover {
  transform: scaleX(1.06);
}
```

---

## 12. Matriz de Resolución de Deuda Técnica

| Problema Detectado | Resolución / Decisión Canónica | Regla de Código |
| :--- | :--- | :--- |
| **Azules fuera de escala (`950`, `800`, `700`)** | La escala termina en 500 (`#0950F6`). No existen 600–950. | Reemplazar `text-brand-blue-950` por `text-brand-blue-500`. Reemplazar `hover:text-brand-blue-700` por `hover:text-brand-blue-400`. |
| **Sombras sin generar (`shadow-float`, `antigravity-deep`, `glow-yellow`)** | Se formalizan dentro del objeto `boxShadow` de Tailwind. | Quedan activas en el archivo Tailwind sin alterar el HTML de las 19 páginas. |
| **`duration-160` no estándar** | Se estandariza como la duración de micro-interacción (160ms). | Definido en `transitionDuration` y aplicado a `.cta-nested-pill`. |
| **Clase errónea `bg-brand-white-50`** | No existe en la paleta oficial; era un error tipográfico. | Normalizado a `bg-brand-white` o `bg-brand-blue-50`. |
| **`brand-yellow-50/100/200` huérfanos** | Se incorporan a la configuración de Tailwind. | Ahora utilizables como `bg-brand-yellow-50`, `border-brand-yellow-100`, etc. |
| **Colores sueltos en carrusel del home** | Hex sueltos como `#00D2FF` o `#2ECC85` contaminaban el código. | Tokenizados en `colors.service.*` para preservar la pureza de la marca. |
| **Duplicación `index.html` e `inicio.html`** | Ambas páginas son 100% idénticas (226 KB cada una). | `index.html` es el origen canónico; `inicio.html` cuenta con enlace canónico hacia la raíz. |

---

## 13. Checklist de Calidad para Nuevas Páginas y Componentes

Antes de considerar terminada una página o componente nuevo, verificar:
- [ ] **Escala de Color**: ¿Todos los textos oscuros sobre fondo blanco usan `brand-blue-500` o `brand-ink`? (Ningún gris o negro).
- [ ] **Tope de Azules**: ¿Se evitó el uso de cualquier clase `brand-blue-600` o superior?
- [ ] **Palabra Resaltada**: ¿El H1 principal contiene exactamente una palabra/frase con `bg-brand-yellow text-brand-blue -rotate-1`?
- [ ] **Botones CTA**: ¿Los botones de conversión utilizan `.cta-nested-pill` con su círculo interior y flecha anidada?
- [ ] **Targets Táctiles**: ¿Todos los botones y enlaces interactivos tienen al menos `min-h-[44px]`?
- [ ] **Foco Visible**: ¿Todos los elementos interactivos tienen anillo de foco amarillo (`focus-visible:ring-brand-yellow`)?
- [ ] **Separador de Secciones**: ¿Cada cambio de sección cuenta con un borde sutil (`border-t border-brand-blue/10` o `border-white/10`)?
- [ ] **Imágenes WebP**: ¿Todas las imágenes tienen atributos de dimensión explícitos, `loading="lazy"` (excepto el logo `eager`) y textos alternativos descriptivos?
