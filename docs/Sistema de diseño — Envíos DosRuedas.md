# Sistema de diseño — Envíos DosRuedas

Extraído de 19 páginas HTML (Tailwind CDN + Lucide). Las 19 comparten **exactamente** la misma config de Tailwind y el mismo bloque `<style>`; `index.html` e `inicio.html` son idénticos. Stack: Tailwind por CDN, Google Fonts, iconos Lucide, JS vanilla.

**Sub-marca:** `mardelivery.html` es la vitrina de MarDelivery, otro servicio de la empresa con sistema de diseño propio (verde, amarillo y azul informativo). Ese sistema está documentado en la sección 13.

## 1. Principios

- **Dos colores mandan:** azul eléctrico `#0950F6` + amarillo `#FFEC01`. Todo lo demás es neutro o derivado.
- **Tipografía ruidosa y condensada** (Anton + Bebas Neue) contra un cuerpo liviano (Outfit light).
- **Pills por todos lados:** botones, badges y chips son `rounded-full`; cards entre `rounded-xl` y `rounded-3xl`.
- **Alternancia de secciones** azul ↔ blanco ↔ celeste muy claro, siempre separadas por un borde fino.
- **El amarillo es acción y énfasis:** CTA, palabra resaltada del título, hover de links, indicadores. Nunca fondo de sección grande.
- Voz: español rioplatense con voseo ("Cotizá", "Vendés", "Empezá").

## 2. Color

### Marca

| Token | Hex | Uso |
| --- | --- | --- |
| `brand-blue` / `brand-blue-500` | `#0950F6` | Primario canónico y tope de oscuridad: H1/H2, foco, botones, fondos de hero, header y footer |
| `brand-blue-400` | `#3570F8` | Íconos, texto grande atenuado (24 px o más), hover de fondos azules |
| `brand-blue-300` | `#628FF9` | Borde de input en reposo, hover de bezel, trazos SVG secundarios |
| `brand-blue-200` | `#8EAFFB` | Hover de borde de tarjeta, anillo de radio pendiente, trazos SVG |
| `brand-blue-100` | `#BACEFD` | Borde estructural, divisores, línea pendiente del stepper |
| `brand-blue-50` | `#E6EEFE` | Fondo suave, bezel exterior (`/80`), skeleton, hover ghost |
| `brand-yellow` / `brand-yellow-500` | `#FFEC01` | CTA, highlights, indicadores |
| `brand-yellow-400` | `#FFF12E` | Hover del CTA |
| `brand-yellow-600` | `#E6D400` | Bordes y estados presionados |
| `brand-yellow-200` / `-100` / `-50` | `#FFF78A` / `#FFFAB8` / `#FFFDE6` | Fondos suaves y chips amarillos |
| `white` | `#FFFFFF` | Texto sobre azul, fondos de sección |

Nota: `brand-ink` (texto) es **el mismo azul** `#0950F6`: el texto sobre fondo claro es azul de marca, no negro.

### Escala azul: 6 pasos canónicos

La escala va de 50 a 500 y **500 (`#0950F6`) es el tope de oscuridad**. No existen `blue-600`, `blue-700`, `blue-800`, `blue-900` ni `blue-950`. Reglas:

- **Nunca más oscuro que 500.** Texto y títulos sobre claro van en 500 (≈ 6,0:1 sobre blanco).
- **El hover no oscurece:** sobre superficies azules claras sube hacia 400 (`hover:text-brand-blue-400`); sobre azul pasa a amarillo (`hover:text-brand-yellow`).
- **400 como texto, solo desde 24 px:** sobre blanco da ≈ 4,4:1, por debajo de AA para texto chico.
- **Para dar profundidad** se usa opacidad sobre 500 (`/80`, `/60`) o capas `black/15`, no pasos oscuros nuevos.

### Neutros y degradés recurrentes

- Fondo claro alterno: `#FAFBFF` (también `brand-blue-50/50`).
- Degradé de sección clara (FAQ/cierre): `from-[#F5F8FF] via-[#EBF2FE] to-[#F8FAFC]` con `border-y border-brand-blue/15`.
- Degradé del hero: `linear-gradient(135deg, #0950F6 0%, #0950F6 55%, #3570F8 100%)`.
- Trama de puntos en hero: `radial-gradient(#FFFFFF 1px, transparent 1px)` a `24px 24px`, opacidad 10%.

### Opacidades que se repiten

- Sobre azul: `white/10` (superficies), `white/15` y `white/20` (bordes y hover), `white/90` (párrafos), `white/70–80` (texto terciario).
- Sobre blanco: `brand-blue/80` (párrafos), `brand-blue/60` (placeholders), `brand-blue/10–15` (bordes).
- Amarillo translúcido: `brand-yellow/15` (fondo de badge) + `brand-yellow/30` (borde de badge).

### Colores de terceros (permitidos, solo para redes/WhatsApp)

Facebook `#0866FF` / `#1877F2`, Instagram degradé `#833AB4 → #E1306C → #F77737` (+ `#FD1D1D`), WhatsApp `#128C7E` / `#0E7468`. Se usan en la página de redes y en los botones de contacto, con patrón `bg-[color]/15 + border-[color]/30 + hover:border-[color]`.

## 3. Tipografía

Google Fonts: `Anton`, `Bebas Neue`, `Geist Mono (400/500/700)`, `Outfit (300–700)`, `display=swap`.

| Rol | Familia | Clase | Reglas |
| --- | --- | --- | --- |
| Display (H1/H2/H3) | Anton | `font-display` | Mayúsculas, `letter-spacing: -0.025em`, `leading-[0.92]`–`[0.98]` |
| Subheading / botones / labels / eyebrows | Bebas Neue | `font-subheading` | Mayúsculas, `letter-spacing: 0.05em`, casi siempre con `tracking-wider` |
| Cuerpo | Outfit | `font-sans` | `font-light` en párrafos de hero, `leading-relaxed` |
| Datos / números / pasos | Geist Mono | `font-mono` | `tabular-nums` |

### Escala (la que realmente se usa)

- **H1 hero:** `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`, `max-w-[32ch]`, `text-balance`.
- **H2 sección:** `text-4xl sm:text-5xl`.
- **H3 / banners:** `text-2xl sm:text-3xl`.
- **Párrafo:** `text-base sm:text-lg` (hero), `text-sm`–`text-base` (secciones).
- **Labels / chips:** `text-xs` (el más usado), micro-texto `text-[10px]`–`text-[13px]`.
- **Ancho de lectura:** `max-w-[56ch]` para párrafos de hero, `max-w-2xl/3xl` para intros.

### Recurso signature: palabra resaltada

Una frase del título va en un bloque amarillo inclinado:

```html
<span class="inline-block bg-brand-yellow text-brand-blue px-3 py-0.5 mt-1 -rotate-1 shadow-md">última milla</span>
```

En H2 sobre blanco se usa `shadow-accent-sm`. Es la firma visual de la marca: una por título, nunca más.

## 4. Layout y espaciado

- **Contenedor:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (el más usado: 127 veces).
- **Ritmo vertical de secciones:** `py-20 lg:py-24` (estándar), `py-16 md:py-24` (cierres/FAQ), `lg:py-28` (secciones azules de énfasis).
- **Hero:** `min-h-[90dvh]`, `pt-20 lg:pt-24` (compensa el header fijo), `relative isolate overflow-hidden`.
- **Grillas:** `grid-cols-1` → `sm:grid-cols-2` → `md:grid-cols-3`; layouts asimétricos con `lg:grid-cols-12`. Flex: `flex-col` → `sm:flex-row` / `md:flex-row`.
- **Gaps:** `gap-2`, `gap-3` (el dominante), `gap-4`, `gap-6`; verticales `space-y-2/3/4/6`.
- **Breakpoints Tailwind por defecto:** `sm 640`, `md 768`, `lg 1024`, `xl 1280`. El corte de navegación desktop/móvil es `lg`.
- **Z-index:** `z-0/10/20` contenido, `z-40` header fijo, `z-50` overlays y cajón móvil.
- **Separación entre secciones:** `border-t border-brand-blue/10` (sobre claro) o `border-t border-white/10` (sobre azul).

## 5. Forma: radios, bordes, sombras

### Radios

| Elemento | Radio |
| --- | --- |
| Botones, badges, chips, avatares | `rounded-full` |
| Inputs, botones de ícono, links con foco | `rounded-xl` (el radio más usado) |
| Cards estándar | `rounded-2xl` |
| Cards protagonistas / carrusel | `rounded-3xl` (y arbitrarios `20/24/28px`) |
| Detalles pequeños | `rounded-md`, `rounded-sm` |

### Bordes

- Sobre azul: `border border-white/10` (estructura), `white/15` (cards), `white/20` (botones secundarios), `white/40` (outline de CTA).
- Sobre blanco: `border border-brand-blue-100` (cards e inputs), `border-2` en inputs y cards interactivas.
- Énfasis: `border-brand-yellow`, `border-dashed` para elementos decorativos o vacíos.

### Sombras (config de Tailwind)

```js
boxShadow: {
  'accent-sm':        '0 4px 12px rgba(255, 236, 1, 0.3)',
  'accent-md':        '0 8px 24px rgba(255, 236, 1, 0.35)',
  'cta-glow':         '0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18)',
  'glow-yellow':      '0 0 20px rgba(255, 236, 1, 0.45)',
  'float':            '0 8px 24px rgba(9, 80, 246, 0.10)',
  'elevated':         '0 16px 40px rgba(9, 80, 246, 0.18)',
  'antigravity-deep': '0 24px 56px rgba(9, 80, 246, 0.22)',
}
```

Escala de elevación sobre claro, de menor a mayor: `shadow-float` (tarjetas en reposo) → `shadow-elevated` → `hover:shadow-antigravity-deep` (hover de las tarjetas con bezel). Sobre amarillo: `shadow-accent-sm` en CTA, `shadow-accent-md` en CTA destacado, `hover:shadow-cta-glow` al pasar el mouse y `shadow-glow-yellow` en los resaltados inclinados de contacto y cotizar. También se usan las sombras estándar de Tailwind (`shadow-sm`, `md`, `xl`, `2xl`). Los valores de `float`, `antigravity-deep` y `glow-yellow` no existían en el sitio (las clases no generaban estilo): son propuestos y se ajustan en un solo lugar.

## 6. Componentes

### Header

`fixed top-0 inset-x-0 z-40`, `bg-brand-blue-500`, `border-b border-white/10`, `py-3.5`, transición de 300 ms (cambia el fondo al hacer scroll por JS). Logo WebP 40–44 px que rota 6° y escala 1.05 en hover + wordmark en Anton: **"Envíos"** en blanco y **"DosRuedas"** en amarillo, ambos con `kinetic-font-stretch`. Navegación desktop con dropdowns multinivel; en móvil, botón de llamada (`tel:`) y cajón lateral. Link "saltar al contenido" (`sr-only focus:not-sr-only`) como primer elemento del body.

### Botón primario (CTA)

```html
<a class="cta-nested-pill px-7 py-3.5 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-400
          font-subheading font-bold text-base uppercase tracking-wider shadow-accent-md
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow">
  <span>Empezá a despachar</span>
  <span class="w-8 h-8 rounded-full bg-brand-blue/15 flex items-center justify-center ml-3">
    <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
  </span>
</a>
```

**Patrón "nested pill":** el texto va a la izquierda y un círculo con flecha (`arrow-up-right` o `arrow-right`) queda anidado a la derecha. Hover: sube 2 px (`translateY(-2px)`).

### Botón secundario (outline sobre azul)

`cta-nested-pill rounded-full font-subheading uppercase tracking-wider px-6 py-2.5 min-h-[44px] border border-white/40 text-white hover:bg-white/10 hover:border-white`. El círculo interno es `bg-white/10 text-brand-yellow` y en hover pasa a `bg-brand-yellow text-brand-blue`.

### Botón submit de formulario

`w-full min-h-[48px] rounded-full font-subheading uppercase tracking-wider text-sm bg-brand-yellow-500 text-brand-blue-500 hover:bg-brand-yellow-400 shadow-accent-sm gap-2` + ícono Lucide a la derecha.

### Botón de ícono

`p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow min-w-[44px] min-h-[44px]`.

### Badge / eyebrow

```html
<div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow/15
            border border-brand-yellow/30 text-brand-yellow text-xs font-subheading uppercase tracking-wider">
  <span class="w-2 h-2 rounded-full bg-brand-yellow animate-ping"></span> Operaciones activas
</div>
```

### Inputs y labels

- **Label:** `text-xs font-subheading uppercase tracking-wider font-bold` + ícono Lucide `h-3.5 w-3.5 text-brand-yellow-500` (blanco si el form está sobre azul, azul si está sobre blanco).
- **Input:** `w-full h-11 bg-white border-2 border-brand-blue-100 rounded-xl px-4 text-sm text-brand-blue-500 placeholder:text-brand-blue-500/60 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-500`.
- Agrupación: `space-y-1.5` entre label e input.

### Cards

- **Sobre azul:** `rounded-2xl/3xl bg-white/10 border border-white/15 p-6 backdrop-blur-md shadow-xl`; hover sube de opacidad (`bg-white/15`).
- **Sobre blanco:** `rounded-2xl bg-white border border-brand-blue-100 shadow-sm`; hover `border-brand-blue-300` o `hover:-translate-y-1` + `shadow-elevated`.
- **Card de servicio (carrusel 3D):** `rounded-3xl border-2 shadow-xl overflow-hidden`, imagen de fondo `object-cover opacity-30 mix-blend-overlay`, degradé `from-brand-blue/80 via-brand-blue/20 to-transparent`, borde amarillo y ring cuando está activa.
- **Banner CTA de footer:** `rounded-2xl bg-brand-blue/90 border border-white/15 p-6 sm:p-8 backdrop-blur-md shadow-2xl`.

### Marquee / ticker

Tira de `font-subheading uppercase tracking-wider text-base` con rombos amarillos separadores (`h-1.5 w-1.5 rotate-45 bg-brand-yellow`), animación `marquee_25s linear infinite`. Textos: "Envíos en el día · Flota propia · Cero tercerización…".

### Pasos / circuito

Número en círculo `w-6 h-6 rounded-full bg-white/20 font-mono` + etiqueta en `font-subheading` + flecha Lucide entre pasos; eyebrow "Circuito ágil:" en amarillo con `tracking-widest`.

### Footer

`bg-brand-blue-500 text-white border-t border-white/10`, barra amarilla superior `h-1.5 bg-brand-yellow shadow-md shadow-brand-yellow/30`, banner CTA, columnas de links (hover amarillo) y bloque institucional con NAP.

## 7. Iconografía e imágenes

- **Iconos:** Lucide (`<i data-lucide="…">`), inicializados con `lucide.createIcons()`. Tamaños `w-3.5/4/5`, trazo heredado del color del texto. Íconos frecuentes: `arrow-up-right`, `arrow-right`, `map-pin`.
- **Logo:** `logo_nuevo.webp` (Vercel Blob), 44×44, `object-contain drop-shadow-md`.
- **Imágenes de servicio:** `./elementos/*.webp`, siempre `loading="lazy"` salvo el logo (`eager`), con `alt=""` y `aria-hidden` cuando son decorativas.

## 8. Movimiento

- **Transiciones:** `transition-all` / `transition-colors` / `transition-transform`, `duration-200` (hover), `duration-300` (estándar), `duration-500` (entradas), `ease-out`.
- **Hover:** `-translate-y-1` o `-translate-y-1.5` en cards, `scale-105` / `scale-110` en logo e íconos, `translate-x-1` en flechas, `scaleX(1.06)` en wordmark (`kinetic-font-stretch`).
- **Animaciones:** `animate-ping` (indicador "activo"), `animate-pulse`, marquee, carrusel 3D con `transform-style: preserve-3d` y `will-change: transform, opacity`.
- **Clases propias del `<style>`:** `.font-display`, `.font-subheading`, `.font-mono`, `.cta-nested-pill`, `.kinetic-font-stretch`.

## 9. Accesibilidad (ya incorporada)

- Link "Saltar al contenido" (WCAG 2.2 AA) al inicio del body.
- **Targets táctiles mínimos:** `min-h-[44px]` / `min-h-[48px]` (194 y 145 usos) y `min-w-[44px]`.
- **Foco visible siempre:** `focus-visible:ring-2` (links/botones) o `ring-4` (inputs y cards), en amarillo; sobre fondo azul con `ring-offset-brand-blue`.
- `aria-label` en navegación y botones de ícono, `aria-current="page"` en el link activo, `aria-hidden` en decoración.
- Selección de texto de marca: `selection:bg-brand-yellow selection:text-brand-blue`.
- Contraste: amarillo sobre azul y azul sobre blanco pasan holgado; **cuidado con** `text-brand-blue/60` y `text-white/60` en tamaños chicos (`text-[10px]`).

## 10. Patrón de página

1. **Hero** azul, degradé + trama de puntos, H1 con palabra resaltada, párrafo `font-light`, 1 CTA amarillo + 1 secundario.
2. **Marquee** de propuestas de valor.
3. Secciones alternando **blanco → `#FAFBFF` → azul → blanco → `brand-blue-50/50`**, cada una con `border-t`.
4. **Cierre** con degradé celeste (`#F5F8FF → #EBF2FE → #F8FAFC`) y texto azul.
5. **Footer** azul con barra amarilla y banner CTA.

Páginas legales (términos y privacidad) usan el mismo hero azul más un contenedor `max-w-7xl py-16 lg:py-24` y marco "double bezel" (`bg-brand-blue-500 p-2 rounded-3xl shadow-xl`).

## 11. Drop-in: config de Tailwind

```js
tailwind.config = {
  theme: { extend: {
    colors: {
      brand: {
        blue: '#0950F6', ink: '#0950F6', white: '#FFFFFF',
        // 6 pasos canónicos. 500 es el tope de oscuridad: no hay 600–950
        'blue-50': '#E6EEFE', 'blue-100': '#BACEFD', 'blue-200': '#8EAFFB',
        'blue-300': '#628FF9', 'blue-400': '#3570F8', 'blue-500': '#0950F6',
        yellow: '#FFEC01', 'yellow-50': '#FFFDE6', 'yellow-100': '#FFFAB8',
        'yellow-200': '#FFF78A', 'yellow-400': '#FFF12E',
        'yellow-500': '#FFEC01', 'yellow-600': '#E6D400'
      },
      // Acentos de servicio del carrusel del home (no son de marca)
      service: {
        fulfillment: '#00D2FF', 'fulfillment-ink': '#081224',
        'fulfillment-deep': '#0A162B', 'fulfillment-mid': '#102242', 'fulfillment-night': '#050C19',
        economico: '#2ECC85', 'economico-ink': '#031811',
        ia: '#F5B938'
      },
      // Colores de terceros (redes y WhatsApp)
      social: {
        facebook: '#0866FF', 'facebook-hover': '#1877F2',
        instagram: '#E1306C', 'instagram-from': '#833AB4', 'instagram-to': '#F77737', 'instagram-red': '#FD1D1D',
        whatsapp: '#128C7E', 'whatsapp-deep': '#0E7468'
      }
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      display: ['Anton', 'sans-serif'],
      subheading: ['Bebas Neue', 'sans-serif'],
      mono: ['Geist Mono', 'monospace']
    },
    fontSize: {
      micro: ['10px', '1.4'], mini: ['11px', '1.4'],
      caption: ['12px', '1.4'], label: ['13px', '1.4']
    },
    lineHeight: { display: '0.92', heading: '0.98' },
    borderRadius: { card: '20px', panel: '24px', hero: '28px' },
    maxWidth: { '105': '26.25rem' },
    transitionDuration: { '160': '160ms' },
    boxShadow: {
      'accent-sm': '0 4px 12px rgba(255,236,1,.3)',
      'accent-md': '0 8px 24px rgba(255,236,1,.35)',
      'cta-glow': '0 0 28px rgba(255,236,1,.45), 0 8px 24px rgba(9,80,246,.18)',
      'glow-yellow': '0 0 20px rgba(255,236,1,.45)',
      'float': '0 8px 24px rgba(9,80,246,.10)',
      'elevated': '0 16px 40px rgba(9,80,246,.18)',
      'antigravity-deep': '0 24px 56px rgba(9,80,246,.22)'
    }
  }}
}
```

```css
:root {
  --color-brand-blue: #0950F6;    --color-brand-yellow: #FFEC01;
  --color-brand-blue-50: #E6EEFE; --color-brand-blue-100: #BACEFD;
  --color-brand-blue-200: #8EAFFB; --color-brand-blue-300: #628FF9;
  --color-brand-blue-400: #3570F8; --color-brand-blue-500: #0950F6;
}
.font-display { font-family:'Anton',sans-serif; letter-spacing:-0.025em; text-transform:uppercase; }
.font-subheading { font-family:'Bebas Neue',sans-serif; letter-spacing:0.05em; text-transform:uppercase; }
.font-mono { font-family:'Geist Mono',monospace; font-variant-numeric:tabular-nums; }
.cta-nested-pill { display:inline-flex; align-items:center; justify-content:space-between; border-radius:9999px;
  font-family:'Bebas Neue',sans-serif; text-transform:uppercase; letter-spacing:0.05em; font-weight:700;
  transition:transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease; }
.cta-nested-pill:hover { transform:translateY(-2px); }
.kinetic-font-stretch { display:inline-block; transition:transform .25s ease; }
.kinetic-font-stretch:hover { transform:scaleX(1.06); }
```

## 12. Deuda del sistema y decisiones

| Problema | Decisión | Acción en el código |
| --- | --- | --- |
| **Azules fuera de escala:** `brand-blue-950` (10 usos en `index.html` y otros 10 en `inicio.html`), `brand-blue-700` (4 archivos), `brand-blue-800` (1). Además `--color-brand-blue-600` y `--color-brand-blue-900` solo existen como variable CSS, sin uso | La escala termina en 500. No se definen 600–950 | `text-brand-blue-950` y `text-brand-blue-800` → `text-brand-blue-500`. `hover:text-brand-blue-700` → `hover:text-brand-blue-400`. Borrar las dos variables del `:root` |
| **Sombras sin definir:** `shadow-float` (50 usos, 6 archivos), `shadow-antigravity-deep` (23, 3 archivos), `shadow-glow-yellow` (5, `contacto` y `cotizar`) | Se mantienen los nombres y se definen como una escala: `float` → `elevated` → `antigravity-deep`; `glow-yellow` junto a `accent` | Agregar los tres valores a `boxShadow` (sección 5 y 11). No hay que tocar el HTML |
| **`max-w-105`** (4 usos, `deposito-fulfillment` y `plan-emprendedores`) | Se define como 420 px, el valor que Tailwind v4 le da a `105` | `maxWidth: { '105': '26.25rem' }` |
| **`duration-160`** (8 usos, `index` e `inicio`) | Se define como duración de micro-interacción: 160 ms | `transitionDuration: { '160': '160ms' }`. Alinear `.cta-nested-pill` (hoy 0,2 s en el CSS) a 160 ms para que el botón no tenga dos valores |
| **`bg-brand-white-50`** (5 páginas) no existe; hoy no pinta nada y el fondo blanco viene del `body` | Es una variante mal escrita de `bg-brand-white` | Reemplazar por `bg-brand-white` |
| **`brand-yellow-50/100/200`** solo estaban como variables CSS, pero `-50` se usa 1 vez y `-100` 3 veces | Pasan a la config de Tailwind, igual que `-400/500/600` | Ver sección 11. `-200` queda definido aunque hoy no se use |
| **`brand-ink` es el mismo azul que `brand-blue`** | Se mantiene: la marca es monocromática en texto | Para lectura larga (legales, FAQ) usar `text-brand-blue-500`, mínimo `text-base` y `leading-relaxed` |
| **Colores de servicio en el home:** `#00D2FF`, `#081224`, `#0A162B`, `#102242`, `#050C19` (tarjeta E-commerce 3P), `#F5B938` (Rueditas IA) y `#2ECC85` con `#031811` (Económico) | Son acentos de servicio, no de marca: se tokenizan para no dejar hex sueltos | `colors.service.*` (sección 11). Usar `ring-brand-yellow-500` para el foco, como en el resto del sitio, en vez de `ring-[#00D2FF]` |
| **`index.html` e `inicio.html` son idénticos** (226 KB cada uno) | Una sola fuente, sin contenido duplicado | Dejar `index.html` y redirigir `inicio.html` con 301, o agregar `<link rel="canonical">` hacia la raíz |
| **Valores arbitrarios repetidos:** `rounded-[18/20/24/28px]`, `text-[10/11/12/13px]`, `leading-[0.92]` y `[0.98]` | Se tokenizan. El radio de 18 px se unifica con 20 px | `rounded-card` (20), `rounded-panel` (24), `rounded-hero` (28); `text-micro` (10), `text-mini` (11), `text-caption` (12), `text-label` (13); `leading-display` (0,92) y `leading-heading` (0,98) |
| **Hex repetidos 19 veces en las tarjetas de redes** | Pasan a `colors.social` | Reemplazar `bg-[#0866FF]` por `bg-social-facebook`, `border-[#E1306C]/30` por `border-social-instagram/30`, y así con WhatsApp |
| **Todo el CSS, JS y config está inline** en cada archivo (130–226 KB por página), con Tailwind por CDN y `lucide@latest` sin versión fija | Se externaliza y se compila; Lucide se fija a una versión | `tailwind.config.js` con la config de la sección 11, `input.css` con el bloque `<style>`, `main.js` para los scripts, y `npx tailwindcss -i input.css -o styles.css --minify` |

## 13. MarDelivery (producto con sistema propio)

MarDelivery es otro servicio de la empresa (turnos, repartidores, pagos y seguimiento, con paneles por rol) y tiene su propio sistema de diseño. Stack: Next.js, Tailwind v4 (`@theme inline`, `@custom-variant dark`), shadcn/ui y `tw-animate-css`. **No hereda nada visual de Envíos DosRuedas**: ni el azul, ni Anton, ni Bebas Neue. Es siempre oscuro, de vidrio, con el verde al mando y el amarillo avisando.

### 13.1 Principios

- **Verde manda, amarillo avisa, azul informa, rojo solo para errores.** El azul es el color que sumó el rediseño: con todo en verde, la semana parecía cubierta aunque la mitad de los turnos estaban sin tomar.
- **Una sola familia tipográfica** (Outfit, todos los pesos). Los titulares son negros (900) con tracking cerrado y **no van en mayúscula**; las etiquetas sí, con tracking abierto. Geist Mono queda para cifras.
- **Vidrio oscuro y profundidad difusa:** paneles con `backdrop-filter: blur(18px)` y sombras amplias. Nada de sombras duras desplazadas ni neón excesivo.
- **La app es siempre oscura:** `.dark` hereda exactamente la misma paleta que `:root`.
- **Identidad marplatense:** haz de faro, curva del Boulevard Marítimo y una panorámica de la ciudad (lobo marino, rambla, faro, puerto) detrás del contenido.
- **Táctil primero:** acciones de 44 a 48 px de alto mínimo, acción principal a ancho completo en móvil, foco de teclado siempre visible.

### 13.2 Color

| Token | Hex | Rol |
| --- | --- | --- |
| `--md-bg` / `--background` | `#031811` | Fondo de la app |
| `--md-surface` / `--card` / `--sidebar` | `#062319` | Tarjetas y riel |
| `--md-surface-2` / `--popover` | `#07291d` | Popovers y menús |
| `--secondary` | `#0c3325` | Superficie secundaria, ítem activo del riel |
| `--muted` | `#0a2e20` | Superficie atenuada |
| `--foreground` | `#edf8f1` | Texto |
| `--muted-foreground` / `--md-gray` | `#9cb8ac` | Texto atenuado y eyebrows |
| `--md-green` / `--primary` / `--ring` | `#35d07f` | Acciones, navegación activa, confirmación |
| `--md-green-soft` | `#7fe0ac` | Links de atribución y verde suave |
| `--md-green-deep` | `#0e7c4a` | Verde profundo (también `--chart-5`) |
| `--primary-foreground` | `#042018` | Texto sobre verde |
| `--md-gold` / `--accent` | `#ffc833` | Alertas, plazos, montos que piden atención; color del foco |
| `--md-gold-text` | `#ffd75e` | Texto dorado sobre oscuro |
| `--accent-foreground` | `#2a1000` | Texto sobre amarillo |
| `--md-blue` | `#4da3ff` | Informativo: turno publicado sin tomar, repartidor, Modo Lluvia, reabrir |
| `--md-orange` | `#ff7a29` | Solo `--chart-3` |
| `--md-red` / `--destructive` | `#ff5247` | SOLO errores y acciones destructivas |
| `--md-red-text` | `#ff8a80` | Texto de error sobre oscuro |
| `--border` | `white / 10%` | Bordes |
| `--input` | `white / 14%` | Bordes de campos |
| `--md-glass-border` | `rgb(196 235 211 / 12%)` | Borde de paneles de vidrio |
| `--md-glass` | `linear-gradient(145deg, rgba(9,40,30,.87), rgba(4,25,19,.86))` | Fondo de paneles |
| `--chart-1` a `--chart-5` | `#35d07f`, `#ffc833`, `#ff7a29`, `#7fe0ac`, `#0e7c4a` | Gráficos |

Significado de cada color en la interfaz:

| Color | Significa | Ejemplos |
| --- | --- | --- |
| Verde `#35d07f` | Normal, resuelto, confirmado | Turno cubierto, acción principal, sección activa |
| Amarillo `#ffc833` | Atención con plazo o dinero | Pendientes de pago, vencimientos, foco de teclado |
| Azul `#4da3ff` | Información, algo sin resolver todavía | Turno disponible, repartidor, Modo Lluvia, reabrir |
| Rojo `#ff5247` | Error o acción destructiva | Cancelar, rechazar, bloquear |
| Gris `#9cb8ac` / `#657a70` | Neutro o inactivo | Punto de estado sin color |

Contraste aproximado sobre `#062319`: texto atenuado `#9cb8ac` ≈ 7,8:1, azul ≈ 6,3:1, rojo ≈ 5,2:1, amarillo ≈ 10,7:1. Texto `#042018` sobre verde ≈ 8,6:1. El comentario del CSS ya documenta que el blanco al 42% no llegaba a AA y por eso el eyebrow usa el atenuado oficial.

### 13.3 Tipografía y radios

| Clase / token | Definición |
| --- | --- |
| `--font-sans`, `--font-heading`, `--font-label` | Outfit (`var(--font-outfit)`, con `system-ui` de respaldo) |
| `--font-mono` | Geist Mono, solo para cifras |
| `.md-display` | Peso 900, `letter-spacing: -0.042em`, `line-height: 0.98`, sin mayúscula |
| `.md-label` | Peso 800, `letter-spacing: 0.15em`, mayúscula |
| `.md-eyebrow` | 10 px, peso 800, `letter-spacing: 0.17em`, mayúscula, color `--muted-foreground` |

Escala de radios (`--radius: 1.125rem` = 18 px):

| Token | Cálculo | Valor | Uso |
| --- | --- | --- | --- |
| `--radius-sm` | `× 0.6` | 10,8 px | Sin uso fijo en el CSS |
| `--radius-md` | `× 0.8` | 14,4 px | Sin uso fijo en el CSS |
| `--radius-lg` | `× 1` | 18 px | Controles (rango pedido: 16 a 20) |
| `--radius-xl` | `× 1.4` | 25,2 px | Tarjetas (rango: 24 a 30) |
| `--radius-2xl` | `× 1.8` | 32,4 px | Contenedores |
| `--radius-3xl` | `× 2.2` | 39,6 px | Sin uso fijo en el CSS |
| `--radius-4xl` | `× 2.6` | 46,8 px | Sin uso fijo en el CSS |

Radios fijos habituales: pills y botones `999px`, inputs `16px`, filas `18px` (`.md-row`) y `20px` (`.md-fila`), riel `28px`, barra de guardar `22px`, mapa `22px`. En pantallas de hasta 640 px, `.md-panel` baja a `24px`.

### 13.4 Fondo y superficies

| Clase | Qué es | Definición |
| --- | --- | --- |
| `.md-glow` / `.md-coastline` | Fondo ambiente de pantalla completa (la costa) | Tres capas: radial verde al 16% en `12% 92%`, radial amarillo al 8% en `93% 8%` y degradé de 135° `#031811 → #041d16 (55%) → #02120e`. `.md-coastline` es `position: fixed` y suma una curva de borde verde (17%) rotada −2° |
| `.md-city-art` | Panorámica de la ciudad (lobo marino, rambla, faro, puerto) | `position: fixed` abajo, alto `min(33vw, 500px)`, opacidad .38, máscara que la desvanece contra arriba. El archivo mide 2172×724: 33vw conserva la panorámica entera con `object-fit: cover` |
| `.md-city-art-sutil` / `.md-coastline-sutil` | Versión para paneles con tablas y listas densas | Panorámica a opacidad .30 y fondo a .5: misma identidad, menos peso |
| `.md-panel` | Contenedor principal de vidrio (header, shell, secciones) | `--md-glass` + borde `--md-glass-border` + `blur(18px)` + sombra `0 24px 70px rgb(0 0 0 / .26)` + brillo interior |
| `.md-card` | Tarjeta interior, más liviana que el panel | Borde `white / 9%`, fondo `white / 1.2%` con degradé de `white / 4.5%` a `1.8%`. Color e imagen van separados para que un `bg-*` pise el color y el degradé quede encima |
| `.md-card-alert` | Plazos y pendientes | Borde amarillo 16% y degradé amarillo 5,5% |
| `.md-tarjeta-acento` | Tarjeta teñida de un estado (Modo Lluvia, Seguro Premium, Pagos) | Borde y degradé derivados de `--md-acento` con `color-mix` (20% y 8%) |
| `.md-dato` | Caja hundida para una cifra con su etiqueta | Radio 14, padding `10px 12px`, fondo `rgb(2 17 13 / .42)` |
| `.md-filtros` | Bloque de filtros | Radio 20, fondo hundido `rgb(2 17 13 / .35)` |
| `.md-shadow-glow` | Resplandor verde | `0 9px 28px rgb(53 208 127 / .19)` |
| `.md-shadow-hard` | Profundidad | `0 22px 60px rgb(0 0 0 / .3)` (el nombre quedó del diseño anterior: ya no es una sombra dura) |
| `.md-beam` | Haz del faro en encabezados | Cono amarillo al 9%, `blur(2px)` |
| `.md-logo-pill` | Logo sobre fondo oscuro | Píldora blanca, radio 24 |
| `.md-frame` | Marco de teléfono | Ancho 100%, máximo 430 px, centrado. Se usa para la app del Repartidor en pantallas grandes |

En móvil la panorámica se recorta sobre el lobo marino y la rambla: hasta 1000 px de ancho, alto `46vw`, opacidad .26 y `object-position: 20% bottom`; hasta 640 px, alto `58vw` y opacidad .18.

### 13.5 Componentes

**Foco de teclado.** Global: `outline: 2px solid var(--md-gold)` con `outline-offset: 3px`. El amarillo se ve igual sobre verde y sobre fondos oscuros.

**Botones.**

| Clase | Uso | Estilo |
| --- | --- | --- |
| `.md-primary-action` | Acción principal | Verde `#35d07f`, texto `#042018`, 13 px peso 900, pill, `min-height: 48px`, `padding-inline: 21px`, sombra verde + brillo interior. Hover: sube 1 px y `brightness(1.06)` |
| `.md-secondary-action` | Acción secundaria | Amarilla contorneada: borde `gold / 35%`, fondo `gold / 5,5%`, texto `#ffc833`, peso 800. Nunca compite con la verde |
| `.md-btn-info` | Reabrir, navegar, ver en el mapa, tomar un disponible | Azul: borde `blue / 45%`, fondo `blue / 8%`, texto `#4da3ff` |
| `.md-btn-peligro` | Cancelar, rechazar, bloquear | Fondo transparente a propósito, borde `red / 40%`, texto `#ff5247`; no puede competir con la acción que resuelve |
| `.md-btn-oro` | Solo dinero que se mueve y urgencias con plazo | Amarillo sólido `#ffc833`, texto `#2a1000`, sombra amarilla |
| `.md-btn-chico` | Acción inline dentro de una fila, solo desde 1024 px | `min-height: 34px`, `padding-inline: 13px`, 10,5 px |
| `.md-icon-button` | Buscar, notificaciones, menú | Círculo de 40 px, borde `white / 10%`; hover con borde verde |

Los tres botones nuevos (`info`, `peligro`, `oro`) comparten forma: `min-height: 44px`, pill, 11,5 px, peso 800, `letter-spacing: 0.1em`, mayúscula.

**Campo de formulario (`.md-input`).** Alto 48 px, radio 16, borde `white / 14%`, fondo hundido `rgb(2 18 13 / .6)`, texto de 15 px, placeholder `white / 30%`. Foco: borde `#ffc833` y halo `0 0 0 3px gold / 22%`.

**Filas y estados.**

| Clase | Para qué | Detalle |
| --- | --- | --- |
| `.md-fila` | Fila de lista con el estado en el borde | Borde izquierdo de 4 px del color `--md-acento`, radio 20, padding `14px 16px`. El estado se lee en toda la lista sin abrir nada |
| `.md-row` | Fila de turno o seguimiento | `min-height: 55px`, radio 18, 12 px; hover con borde verde |
| `.md-fecha` | Caja de fecha de un turno | 54 px de ancho, radio 15, día arriba y número abajo sobre el color del estado |
| `.md-caja-icono` | Caja de ícono | Tamaño por `--md-caja`: 42 px en encabezado de sección, 32 en StatCard, 28 en el riel |
| `.md-mini-icon` | Ícono cuadrado de acompañamiento | 42 px, radio 15; variante verde (normal) y amarilla (atención) |
| `.md-chip` | Badge del color del estado | Pill, 11 px peso 800, fondo `acento / 12%` |
| `.md-status-pill` | Estado terciario en el encabezado de un bloque | 10 px peso 700, fondo oscuro, texto `white / 60%` |
| `.md-dot` | Punto de estado | 8 px; gris `#657a70`, verde o amarillo con halo de 12 px |
| `.md-barra` | Barra de progreso | 4 px en métricas, 8 px cuando mide un plazo (`--md-barra-alto`) |
| `.md-savebar` | Barra de guardar | `position: sticky; bottom: 12px`, vidrio, radio 22; aparece solo con cambios sin guardar |

**El color de un estado entra siempre por `--md-acento`**, nunca escrito en la clase. Tailwind no puede generar `bg-[#4DA3FF]` a partir de una variable de JavaScript, así que cada pieza deriva sus tintes con `color-mix(in srgb, var(--md-acento) 13%, transparent)`.

### 13.6 Navegación por rol

- **Variables del ítem (`.md-nav`):** `--md-nav-accent` (verde por defecto) y `--md-nav-accent-fg`; de ahí se derivan fondo activo, borde, caja del ícono y chip contador con `color-mix`. Teñir una sección entera es cambiar una sola variable.
- **`.md-nav-gold`:** pasa el acento a amarillo `#ffc833` (texto `#2a1000`) y tiñe ícono y chip ya en reposo, para que "3 pagos pendientes" se vea desde el riel. Se usa en Pagos.
- **`.md-nav-bottom`:** destino de la barra inferior del Repartidor en Android; sin caja, verde al activarse.
- **`.md-bottom-nav`:** `position: fixed`, `z-index: 40`, `blur(14px)`, borde superior `white / 8%`. Fondo y padding viajan como utilidades, no en esta clase, porque `@layer utilities` gana sobre `@layer components`.
- **`.md-rail` en móvil y tablet (hasta 63,99 rem):** tira de pastillas `position: sticky; top: 70px; z-index: 20` con fondo degradado opaco, para no perderla al scrollear.
- **`.md-rail` en PC (desde 64 rem):** panel lateral persistente de vidrio, `top: 84px`, radio 28, padding 12, `max-height: calc(100vh - 96px)` con scroll interno.
- **Ítem activo en PC:** caja del ícono en acento sólido, degradé de 90° de acento al 16% hasta el 4% y borde de acento al 30%. Hover inactivo: `white / 4%`.
- El atributo que emite Radix es `data-state="active"`, no `data-active`: el CSS escrito a mano debe usar el primero.

### 13.7 Mapa y scrollbars

- **Mapa (`.md-map`, sin `@layer` a propósito):** el CSS de Leaflet entra sin capa y gana sobre cualquier capa, así que estas reglas van fuera para decidir por especificidad. Los tiles claros de OpenStreetMap se invierten con `invert(1) hue-rotate(180deg) brightness(.82) saturate(.55) contrast(1.05)` y el contenedor queda `#04211a`. Controles `rgb(4 33 26 / .92)`, popups `#07291d` con radio 16, atribución oscura con links `#7fe0ac`.
- **Scrollbars:** finas (`scrollbar-width: thin`), pulgar `white / 16%` de 10 px con borde transparente de 3 px, hover verde al 40%. Las nativas son blancas y en un tablero oscuro se llevan la mirada.

### 13.8 Movimiento

| Animación | Duración | Significado |
| --- | --- | --- |
| `md-float` | 6 s, infinita | Flotación suave de íconos o ilustraciones (−10 px) |
| `md-sweep` | 2,6 s, lineal, infinita | Barrido de la barra de progreso |
| `md-in` | 0,35 s, `ease both` | Entrada de una sección o panel que se despliega (sube 8 px) |
| `md-pulse` | 1,8 s, infinita | Algo pide atención pero no es un error (opacidad 1 a .35) |
| `md-ping` | 1,4 s, infinita | Algo está pasando ahora: turno en curso, GPS. El punto queda quieto y late un anillo (escala 2,6) |

Con `prefers-reduced-motion: reduce` se apagan todas, `md-in` queda visible y el hover del botón primario no se mueve.

### 13.9 Diferencias con Envíos DosRuedas

| Aspecto | Envíos DosRuedas (sitio) | MarDelivery |
| --- | --- | --- |
| Stack | HTML + Tailwind v3 por CDN | Next.js + Tailwind v4 + shadcn/ui |
| Modo | Secciones azules alternadas con blanco | Siempre oscuro (`#031811`) |
| Acción principal | Amarillo `#FFEC01` | Verde `#35d07f` |
| Alerta | No tiene color propio | Amarillo `#ffc833` |
| Información | Azul de marca es el color base | Azul `#4da3ff` solo para lo informativo |
| Titulares | Anton, mayúscula | Outfit 900, tracking −0,042em, sin mayúscula |
| Etiquetas | Bebas Neue | Outfit 800, mayúscula, tracking .15em |
| Botón | Pill con círculo anidado | Pill simple, sin círculo |
| Radios | Escala de Tailwind (xl a 3xl) | Base de 18 px con escala por `calc` |
| Superficies | Sólidos y degradés | Vidrio con `blur(18px)` |
| Sombras | Amarillas de acento | Negras difusas y glow verde |
| Foco | `ring` amarillo | `outline` de 2 px dorado |

### 13.10 La vitrina `mardelivery.html` frente al producto

La página `mardelivery.html` del sitio usa valores cercanos pero distintos a los del CSS de MarDelivery. Solo `#031811` coincide.

| Elemento | `mardelivery.html` | CSS de MarDelivery |
| --- | --- | --- |
| Verde de acento | `#2ECC85` | `#35d07f` |
| Hover del verde | `#27B374` | Sin color propio: `brightness(1.06)` |
| Amarillo | `#F5B938` | `#ffc833` |
| Texto ámbar | `#D9940A` y `#8C6207` (sobre claro) | `#ffd75e` (sobre oscuro) |
| Verde profundo | `#1B8756` | `#0e7c4a` |
| Texto claro | `#FAFCFB` | `#edf8f1` |
| Superficie oscura | `#111B17` | `#062319` y `#07291d` |
| Fondos claros | `#EEF6F2` y blanco | No existen: la app es siempre oscura |
| Azul informativo | No aparece | `#4da3ff` |
| Tipografía | Anton y Bebas Neue, las del sitio | Solo Outfit |
| Botón primario | `#2ECC85`, texto `#031811`, `active:scale-95` | `#35d07f`, texto `#042018`, hover sube 1 px |

Si la vitrina tiene que parecerse al producto, la correspondencia de la tabla alcanza para migrarla.

### 13.11 Observaciones sobre el CSS de MarDelivery

| Observación | Sugerencia |
| --- | --- |
| `.md-glow` y `.md-coastline` repiten las mismas tres capas de fondo | Extraer a una variable (`--md-ambient`) |
| `.md-shadow-hard` ya no es una sombra dura | Renombrar a `md-shadow-deep` |
| `--md-orange` solo se usa en `--chart-3` y no tiene un significado definido | Documentar su rol o dejarlo solo en gráficos |
| Las dos reglas de `.md-nav[data-state="active"]` en PC están separadas (ícono y degradé) | Unirlas en una |
| `--md-glass` es un degradé y no un color; `.md-panel`, `.md-rail` y `.md-savebar` lo repiten con la misma sombra | Extraer `--md-glass-shadow` |
