# Guía Maestra del Repositorio — Sistema de Diseño Envíos DosRuedas

> **Versión**: Noviembre 2026 | **Entorno**: Producción Estática & Landing Pages  
> **Ubicación Base**: `propuesta/` | **Marca**: Envíos DosRuedas (Mar del Plata, Argentina)  
> **Generado Programáticamente** mediante el agente `agency-document-generator`.

---

## 📌 1. Visión General del Proyecto

El repositorio **sistema_diseno_envios_noviembre** contiene el ecosistema completo de landing pages, sistema de diseño visual, componentes reutilizables y activos gráficos de **Envíos DosRuedas**, empresa líder en mensajería en moto, paquetería urbana y logística e-commerce en la ciudad de Mar del Plata.

### Objetivos Clave de la Arquitectura:
- **Identidad de Marca Sólida**: Basada en el azul primario (`#0950F6`) y el amarillo acento (`#FFEC01`), transmitiendo velocidad, confianza y visibilidad urbana.
- **Rendimiento Excepcional**: HTML5 semántico puro sin dependencias pesadas de frameworks reactivos; acelerado con Tailwind CSS vía CDN y hojas de estilos especializadas (`layout.css` y `home.css`).
- **Interactividad Accesible**: Barra de navegación fija con elevación dinámica, cajón móvil accesible por teclado (tecla Escape), dropdowns con atributos `aria-*` y soporte de iconos mediante Lucide Icons.
- **Enfoque en Conversión**: Integración directa con WhatsApp como canal de contacto y cierre comercial primario mediante botones píldora (*Nested Pill CTAs*).

---

## 🎨 2. Tokens del Sistema de Diseño (Design Tokens)

El sistema de diseño define tokens formales en `:root` dentro de `propuesta/css/layout.css` y configurados en la cabecera Tailwind de cada documento.

### 2.1 Paleta Cromática Oficial

| Variable CSS | Valor Hex | Muestra | Rol y Caso de Uso |
|:---|:---:|:---:|:---|
| `--color-brand-blue` | **`#0950F6`** | `#0950F6` | Color Primario de Marca, Header y Botones de Acción |
| `--color-brand-blue-50` | **`#E6EEFE`** | `#E6EEFE` | Fondo Suave / Superficie de Contraste |
| `--color-brand-blue-100` | **`#BACEFD`** | `#BACEFD` | Bordes sutiles y divisores |
| `--color-brand-blue-600` | **`#0840C4`** | `#0840C4` | Estado hover de botones azules |
| `--color-brand-blue-900` | **`#06287C`** | `#06287C` | Color de texto oscuro y acentos de alto contraste |
| `--color-brand-yellow` | **`#FFEC01`** | `#FFEC01` | Color de Acento Primario, Llamadas a la Acción (CTA) y Badges |
| `--color-brand-yellow-400` | **`#FFF12E`** | `#FFF12E` | Variación luminosa de acento |
| `--color-brand-yellow-600` | **`#E6D400`** | `#E6D400` | Hover en acentos amarillos |
| `--color-white` | **`#FFFFFF`** | `#FFFFFF` | Fondos limpios, tarjetas y tipografía sobre azul |
| `--color-bg-light` | **`#F8FAFD`** | `#F8FAFD` | Fondo general alternativo de secciones |
| `--color-whatsapp` | **`#128C7E`** | `#128C7E` | Canal oficial de pedidos y soporte por WhatsApp |

### 2.2 Tipografías Oficiales

| Fuente | Variable / Clase | Rol Tipográfico | Características |
|:---|:---|:---|:---|
| **Anton** | `font-display` | Display Headlines (Títulos principales H1/H2) | font-display, uppercase, tracking-tight (Google Fonts) |
| **Bebas Neue** | `font-subheading` | Subheadings, Pills, Badges y Botones de Acción | font-subheading, uppercase, tracking-wider (Google Fonts) |
| **Outfit** | `font-sans` | Cuerpo de texto, párrafos y navegación legible | font-sans, 300/400/500/600/700 (Google Fonts) |
| **Geist Mono** | `font-mono` | Métricas, precios, números y etiquetas técnicas | font-mono, tabular-nums (Google Fonts) |

### 2.3 Microinteracciones y Efectos Clave

- **`.cta-nested-pill`**: Botón píldora con elevación (`translateY(-2px)`), sombra luminosa (`--shadow-cta-glow`) e icono interior contenido en cápsula de alto contraste.
- **`.kinetic-font-stretch`**: Animación sutil de estiramiento horizontal tipográfico (`scaleX(1.06)`) aplicada en enlaces y logotipo.
- **`.is-scrolled`**: Estado inyectado en el header mediante JavaScript cuando el scroll vertical supera los 20 píxeles, aplicando sombra de contención y fondo reforzado.

---

## 📂 3. Estructura de Directorios del Repositorio

```text
sistema_diseno_envios_noviembre/
├── README.md                      # Resumen ejecutivo y enlaces rápidos
├── skills-lock.json               # Configuración de agentes y plugins
├── docs/                          # Documentación maestra y guías
│   ├── GUIA_DEL_REPOSITORIO.md    # Esta guía técnica integral
│   └── guia_del_repositorio.html  # Documento interactivo e imprimible (PDF)
├── scripts/                       # Herramientas de automatización
│   ├── generate_repo_guide.js     # Generador de documentación (este script)
│   └── inspect_pages.js           # Inspector y validador de páginas HTML
└── propuesta/                     # Raíz de la plataforma web y landings
    ├── index.html                 # Landing Page Principal Oficial
    ├── inicio.html                # Alias para index.html
    ├── cotizar.html               # Calculadora y cotizador online
    ├── contacto.html              # Centro de contacto y pedidos WhatsApp
    ├── css/
    │   ├── layout.css             # Base arquitectónica: tokens, header, drawer, carrusel y footer
    │   └── home.css               # Estilos dedicados a las 8 secciones de la Home
    ├── js/
    │   └── layout.js              # Interactividad nativa: drawer, dropdowns, scroll y tecla ESC
    ├── elementos/                 # Gráficos transparentes WebP para servicios y tarjetas
    │   ├── dudas_transparent.webp
    │   ├── envios_express.webp
    │   ├── envios_flex.webp
    │   ├── envios_lowcost.webp
    │   └── hero_contacto.webp
    ├── heroes/                    # Banners optimizados en WebP para cabeceras
    │   ├── inicio-mapa.webp
    │   ├── flex-notebook.webp
    │   ├── express-moto.webp
    │   └── deposito-local.webp
    └── img/                       # Recursos fotográficos complementarios
        ├── generales/             # Logotipos y banners generales
        └── servicios/             # Fotografías de apoyo para servicios
```

---

## 📑 4. Catálogo Completo de Páginas (19 Landings)

A continuación se detalla el inventario exhaustivo de las 19 páginas que componen el ecosistema de **Envíos DosRuedas**:

### 1. Páginas Principales y de Conversión

| Archivo | Título | Tipo de Página | Propósito Principal | CTA Principal |
|:---|:---|:---:|:---|:---:|
| [`index.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/index.html) | **Mensajería en moto en Mar del Plata | Envíos DosRuedas** | Landing Principal (Home) | Página de inicio completa con 8 secciones estratégicas: Hero animado, carrusel de beneficios, tarjetas de servicios estrella, cotizador exprés, testimonios, proceso de envío, banner de app y pie oficial. | *Pedir Envío por WhatsApp / Cotizar Online* |
| [`inicio.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/inicio.html) | **Mensajería en moto en Mar del Plata | Envíos DosRuedas** | Alias de Landing Home | Versión espejo y punto de entrada alternativo para compatibilidad de rutas de servidores web. | *Acceso a la plataforma principal* |
| [`cotizar.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/cotizar.html) | **Cotizá tu Envío en Moto | Envíos DosRuedas** | Herramienta Interactiva | Calculadora de tarifas por zonas de Mar del Plata, cálculo según tipo de paquete (sobres, cajas medianas, bultos) y servicio solicitado. | *Confirmar Cotización vía WhatsApp* |
| [`contacto.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/contacto.html) | **Contacto y Pedidos en Mar del Plata | Envíos DosRuedas** | Conversión Directa | Hub de comunicación con accesos directos al canal oficial de WhatsApp, línea telefónica, dirección de base operativa y formulario. | *Escribinos por WhatsApp / Enviar Mensaje* |

### 2. Catálogo de Servicios Logísticos

| Archivo | Título | Tipo de Página | Propósito Principal | CTA Principal |
|:---|:---|:---:|:---|:---:|
| [`servicios-envios-express.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/servicios-envios-express.html) | **Envíos Express en Moto en Mar del Plata | Envíos DosRuedas** | Servicio de Alta Prioridad | Cadetería urgente punto a punto en menos de 60 minutos dentro del radio urbano de Mar del Plata. Ideal para documentos, llaves y urgencias. | *Pedir Moto Express Ahora* |
| [`servicios-envios-lowcost.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/servicios-envios-lowcost.html) | **Cadetería y Envíos en el Día en Mar del Plata | Envíos DosRuedas** | Servicio Económico / Consolidado | Entregas en el día con tarifas accesibles mediante franjas horarias optimizadas de reparto. Perfecto para envíos no urgentes. | *Programar Envío LowCost* |
| [`servicios-enviosflex.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/servicios-enviosflex.html) | **Mercado Envíos Flex en Mar del Plata | Envíos DosRuedas** | Integración e-Commerce | Logística especializada y homologada para vendedores de Mercado Libre en Mar del Plata. Cumplimiento de entregas el mismo día para reputación verde. | *Activar Envíos Flex para mi Tienda* |
| [`servicios-empresas-cuenta-corriente.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/servicios-empresas-cuenta-corriente.html) | **Cuenta Corriente y Envíos para Empresas | Envíos DosRuedas** | Solución Corporativa B2B | Servicio integral para empresas, estudios contables, laboratorios y comercios con facturación mensual consolidada (A o B) y remito digital. | *Solicitar Apertura de Cuenta Corriente* |
| [`servicios-deposito-fulfillment.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/servicios-deposito-fulfillment.html) | **Depósito y Fulfillment para PyMEs | Envíos DosRuedas** | Logística Integral 3PL | Servicio de recepción de mercadería, guardado seguro en depósito central, picking, packing y despacho automático el mismo día. | *Cotizar Almacenamiento y Fulfillment* |
| [`servicios-envios-contrareembolso.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/servicios-envios-contrareembolso.html) | **Envíos Contra Reembolso en Mar del Plata | Cobro en Destino** | Cobranza y Finanzas | Cobro en efectivo o transferencia bancaria en la puerta del cliente receptor, con rendición inmediata y segura al vendedor. | *Solicitar Envío con Cobro en Destino* |
| [`servicios-plan-emprendedores.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/servicios-plan-emprendedores.html) | **Plan Emprendedores y Fulfillment 3PL | Envíos DosRuedas** | Solución para Tiendas y Pymes | Paquetes mensuales diseñados para tiendas de Instagram, showrooms y emprendedores locales con beneficios progresivos según cantidad de envíos. | *Unirme al Plan Emprendedores* |

### 3. Soluciones Específicas y Ecosistema Digital

| Archivo | Título | Tipo de Página | Propósito Principal | CTA Principal |
|:---|:---|:---:|:---|:---:|
| [`guias-envios-flex-mar-del-plata.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/guias-envios-flex-mar-del-plata.html) | **Guía Mercado Envíos Flex en MDQ | Envíos DosRuedas** | Centro de Recursos / Guía Educativa | Manual paso a paso para configurar zonas Flex, horarios de corte y sincronización de envíos en Mercado Libre dentro de Mar del Plata. | *Consultar con un Asesor Flex* |
| [`logistica-dosruedas.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/logistica-dosruedas.html) | **Logística DosRuedas | Seguimiento y Portales Digitales** | Plataforma Tecnológica | Información sobre el sistema digital de gestión, trazabilidad satelital y estado de cada paquete en tiempo real. | *Acceder al Portal de Clientes* |
| [`mardelivery.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/mardelivery.html) | **MarDelivery | Carta Digital, Pedidos QR y Cadetería** | Vertical Gastronómica | Solución integral para restaurantes, cafés y hamburgueserías marplatenses: menú interactivo digital, comanda por QR y cadetería propia. | *Conectar mi Restaurante con MarDelivery* |

### 4. Institucional, Comunidad y Soporte

| Archivo | Título | Tipo de Página | Propósito Principal | CTA Principal |
|:---|:---|:---:|:---|:---:|
| [`nosotros-sobre-nosotros.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/nosotros-sobre-nosotros.html) | **Sobre Nosotros y Trayectoria | Envíos DosRuedas** | Institucional | Historia de la empresa fundada en Mar del Plata, filosofía de trabajo, compromiso con la puntualidad y cuidado de cada paquete. | *Conocer al Equipo* |
| [`nosotros-nuestras-redes.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/nosotros-nuestras-redes.html) | **Nuestras Redes y Comunidad | Envíos DosRuedas** | Social Media Hub | Directorio de perfiles oficiales en Instagram, Facebook, TikTok y testimonios de clientes y emprendedores que confían a diario. | *Seguinos en Instagram / Facebook* |
| [`nosotros-preguntas-frecuentes.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/nosotros-preguntas-frecuentes.html) | **Preguntas Frecuentes (FAQ) | Envíos DosRuedas** | Centro de Ayuda | Respuestas claras organizadas por categorías: formas de pago aceptadas, límites de peso/volumen, días de lluvia y políticas de reintento. | *¿Tenés otra duda? Hablá con Soporte* |

### 5. Marco Legal y Cumplimiento Normativo

| Archivo | Título | Tipo de Página | Propósito Principal | CTA Principal |
|:---|:---|:---:|:---|:---:|
| [`terminos-y-condiciones.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/terminos-y-condiciones.html) | **Términos y Condiciones | Envíos DosRuedas** | Marco Legal | Contrato de servicio, condiciones de traslado de paquetería, mercaderías prohibidas, coberturas y límites de responsabilidad. | *Volver al Inicio* |
| [`politica-de-privacidad.html`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/politica-de-privacidad.html) | **Política de Privacidad | Envíos DosRuedas** | Protección de Datos | Compromiso de protección de datos personales de usuarios y remitentes de acuerdo con la legislación argentina vigente. | *Consultar Términos* |

---

## 🧩 5. Componentes de Arquitectura Shell

### 5.1 Cabecera Fija (`#optimized-header`)
- **Estructura**: Elemento `<header>` con clase fija `fixed top-0 left-0 right-0 z-40`.
- **Comportamiento en Scroll**: El script `layout.js` monitoriza `window.scrollY > 20` y conmuta la clase `.is-scrolled`.
- **Menús Desplegables**: Los botones con clase `.dropdown-btn` activan los contenedores `.dropdown-panel`. Al presionar la tecla **Escape** o hacer clic fuera del menú, se cierran automáticamente y restauran el atributo `aria-expanded="false"`.

### 5.2 Cajón Móvil (`#mobile-drawer`)
- **Acceso Táctil**: Activado mediante el botón hamburguesa (`#menu-toggle-btn`).
- **Bloqueo de Fondo**: Al abrirse, aplica un overlay con `backdrop-blur` (`#mobile-backdrop`) y bloquea el desplazamiento del documento (`document.body.style.overflow = 'hidden'`).
- **Submenús Acordeón**: Funciones nativas `toggleMobileSubmenu(id, btn)` para desplegar las opciones de *Servicios*, *Nosotros* o *Recursos* de manera accesible.

### 5.3 Pie Institucional (`footer`)
- **Grid Responsivo**: Se divide en 4 columnas en pantallas de escritorio (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).
- **Presencia Social**: Botones a los perfiles oficiales con sus colores distintivos (Facebook, Instagram y WhatsApp).
- **Legales y Certificación**: Enlaces a Términos y Condiciones, Políticas de Privacidad y sello de empresa registrada en Mar del Plata.

---

## 🛠️ 6. Guía de Desarrollo y Buenas Prácticas

### 6.1 Cómo Crear una Nueva Página
1. Tomar como plantilla base cualquiera de las páginas hijas (por ejemplo, `servicios-envios-express.html`).
2. Mantener intactas las etiquetas `<head>` con las fuentes oficiales (**Anton**, **Bebas Neue**, **Outfit**, **Geist Mono**), el script de configuración de Tailwind y los enlaces a `css/layout.css`.
3. Preservar el encabezado `#optimized-header` y el pie `footer` para garantizar consistencia cross-site.
4. Diseñar la sección central identificando el contenedor principal mediante `<main id="main-content">` (requerido para cumplir la pauta WCAG de saltar al contenido principal).
5. Incluir el script `js/layout.js` al final del archivo antes del cierre de `</body>`.

### 6.2 Uso Correcto de Botones CTA
Todos los botones de conversión que dirijan a WhatsApp deben utilizar el formato:
```html
<a href="https://wa.me/549223XXXXXXX?text=Hola%20Envios%20DosRuedas,%20quisiera%20solicitar..." 
   target="_blank" 
   rel="noopener noreferrer"
   class="cta-nested-pill bg-brand-yellow text-brand-blue hover:bg-brand-yellow-400 px-6 py-3 shadow-cta-glow">
  <span>PEDIR ENVÍO AHORA</span>
  <span class="p-1.5 rounded-full bg-brand-blue text-brand-yellow">
    <i data-lucide="arrow-right" class="w-4 h-4"></i>
  </span>
</a>
```

---

## 🚀 7. Servidor Local y Despliegue

Para previsualizar las páginas localmente en tu navegador:

```bash
# Opción 1: Con Node.js npx serve
npx serve propuesta

# Opción 2: Con Python
python -m http.server 8000 --directory propuesta

# Opción 3: Extensión Live Server de VS Code / Antigravity
# Abrir propuesta/index.html y hacer clic en "Go Live"
```

---

*Documentación compilada automáticamente por **agency-document-generator**.*  
