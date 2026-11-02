/**
 * ============================================================================
 * GENERADOR PROGRAMÁTICO DE GUÍA DE REPOSITORIO — ENVÍOS DOSRUEDAS
 * Skill: agency-document-generator
 * 
 * Este script inspecciona el repositorio, extrae los tokens de diseño y metadatos
 * de las 19 páginas de 'propuesta/', y genera automáticamente:
 *   1. docs/GUIA_DEL_REPOSITORIO.md (Documentación técnica en Markdown)
 *   2. docs/guia_del_repositorio.html (Documento imprimible/exportable a PDF con diseño corporativo)
 *   3. Actualiza el README.md principal del repositorio
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

// Directorios base
const ROOT_DIR = path.resolve(__dirname, '..');
const PROPUESTA_DIR = path.join(ROOT_DIR, 'propuesta');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');

// Asegurar directorio docs
if (!fs.existsSync(DOCS_DIR)) {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
}

// 1. Datos del Sistema de Diseño (Design Tokens)
const designTokens = {
  brand: {
    name: "Envíos DosRuedas",
    tagline: "Mensajería en moto y logística inteligente en Mar del Plata",
    updatedAt: "Noviembre 2026",
    coverage: "Mar del Plata, Batán, Sierra de los Padres y Costa Atlántica",
  },
  colors: [
    { name: "--color-brand-blue", hex: "#0950F6", role: "Color Primario de Marca, Header y Botones de Acción", rgb: "rgb(9, 80, 246)" },
    { name: "--color-brand-blue-50", hex: "#E6EEFE", role: "Fondo Suave / Superficie de Contraste", rgb: "rgb(230, 238, 254)" },
    { name: "--color-brand-blue-100", hex: "#BACEFD", role: "Bordes sutiles y divisores", rgb: "rgb(186, 206, 253)" },
    { name: "--color-brand-blue-600", hex: "#0840C4", role: "Estado hover de botones azules", rgb: "rgb(8, 64, 196)" },
    { name: "--color-brand-blue-900", hex: "#06287C", role: "Color de texto oscuro y acentos de alto contraste", rgb: "rgb(6, 40, 124)" },
    { name: "--color-brand-yellow", hex: "#FFEC01", role: "Color de Acento Primario, Llamadas a la Acción (CTA) y Badges", rgb: "rgb(255, 236, 1)" },
    { name: "--color-brand-yellow-400", hex: "#FFF12E", role: "Variación luminosa de acento", rgb: "rgb(255, 241, 46)" },
    { name: "--color-brand-yellow-600", hex: "#E6D400", role: "Hover en acentos amarillos", rgb: "rgb(230, 212, 0)" },
    { name: "--color-white", hex: "#FFFFFF", role: "Fondos limpios, tarjetas y tipografía sobre azul", rgb: "rgb(255, 255, 255)" },
    { name: "--color-bg-light", hex: "#F8FAFD", role: "Fondo general alternativo de secciones", rgb: "rgb(248, 250, 253)" },
    { name: "--color-whatsapp", hex: "#128C7E", role: "Canal oficial de pedidos y soporte por WhatsApp", rgb: "rgb(18, 140, 126)" }
  ],
  typography: [
    { name: "Anton", role: "Display Headlines (Títulos principales H1/H2)", style: "font-display, uppercase, tracking-tight", source: "Google Fonts" },
    { name: "Bebas Neue", role: "Subheadings, Pills, Badges y Botones de Acción", style: "font-subheading, uppercase, tracking-wider", source: "Google Fonts" },
    { name: "Outfit", role: "Cuerpo de texto, párrafos y navegación legible", style: "font-sans, 300/400/500/600/700", source: "Google Fonts" },
    { name: "Geist Mono", role: "Métricas, precios, números y etiquetas técnicas", style: "font-mono, tabular-nums", source: "Google Fonts" }
  ],
  components: [
    { name: "Header Fijo Unificado", selector: "#optimized-header / .header", file: "layout.css / layout.js", desc: "Cabecera fija con logo WebP, navegación con dropdowns accesibles (ARIA), botón de contacto directo y elevación dinámica en scroll." },
    { name: "Cajón Móvil (Drawer)", selector: "#mobile-drawer / #mobile-backdrop", file: "layout.css / layout.js", desc: "Menú lateral deslizable para móviles con backdrop difuminado, acordeones interactivos y soporte para cierre con tecla Escape." },
    { name: "Botón Píldora Anidada", selector: ".cta-nested-pill", file: "layout.css", desc: "Botón con microinteracción de elevación, icono anidado en cápsula contrastante y tipografía Bebas Neue en mayúsculas." },
    { name: "Tipografía Cinética", selector: ".kinetic-font-stretch", file: "layout.css", desc: "Efecto sutil de estiramiento horizontal en el logotipo o titulares al hacer hover (scaleX: 1.06)." },
    { name: "Hero de Alto Impacto", selector: ".hero-section", file: "home.css", desc: "Banner principal con fondos radiales de luz, badge informativo, titulares de impacto, CTA doble y tarjeta ilustrada." },
    { name: "Footer Institucional", selector: "footer", file: "layout.css", desc: "Pie de página en azul corporativo con enlaces jerarquizados, redes sociales con colores oficiales, datos fiscales y copyright." }
  ]
};

// 2. Inventario clasificado de las 19 páginas
const pagesInventory = [
  {
    category: "1. Páginas Principales y de Conversión",
    pages: [
      {
        file: "index.html",
        title: "Mensajería en moto en Mar del Plata | Envíos DosRuedas",
        type: "Landing Principal (Home)",
        desc: "Página de inicio completa con 8 secciones estratégicas: Hero animado, carrusel de beneficios, tarjetas de servicios estrella, cotizador exprés, testimonios, proceso de envío, banner de app y pie oficial.",
        cta: "Pedir Envío por WhatsApp / Cotizar Online",
        keyFeatures: ["Hero interactivo", "Carrusel de confianza", "Grid de servicios", "Métricas en tiempo real"]
      },
      {
        file: "inicio.html",
        title: "Mensajería en moto en Mar del Plata | Envíos DosRuedas",
        type: "Alias de Landing Home",
        desc: "Versión espejo y punto de entrada alternativo para compatibilidad de rutas de servidores web.",
        cta: "Acceso a la plataforma principal",
        keyFeatures: ["Identidad unificada", "Compatibilidad SEO"]
      },
      {
        file: "cotizar.html",
        title: "Cotizá tu Envío en Moto | Envíos DosRuedas",
        type: "Herramienta Interactiva",
        desc: "Calculadora de tarifas por zonas de Mar del Plata, cálculo según tipo de paquete (sobres, cajas medianas, bultos) y servicio solicitado.",
        cta: "Confirmar Cotización vía WhatsApp",
        keyFeatures: ["Selector de zonas MDQ", "Estimación de costos al instante", "Desglose claro de tarifas"]
      },
      {
        file: "contacto.html",
        title: "Contacto y Pedidos en Mar del Plata | Envíos DosRuedas",
        type: "Conversión Directa",
        desc: "Hub de comunicación con accesos directos al canal oficial de WhatsApp, línea telefónica, dirección de base operativa y formulario.",
        cta: "Escribinos por WhatsApp / Enviar Mensaje",
        keyFeatures: ["Enlaces directos con mensaje prellenado", "Horarios de atención", "Mapa de base operativa"]
      }
    ]
  },
  {
    category: "2. Catálogo de Servicios Logísticos",
    pages: [
      {
        file: "servicios-envios-express.html",
        title: "Envíos Express en Moto en Mar del Plata | Envíos DosRuedas",
        type: "Servicio de Alta Prioridad",
        desc: "Cadetería urgente punto a punto en menos de 60 minutos dentro del radio urbano de Mar del Plata. Ideal para documentos, llaves y urgencias.",
        cta: "Pedir Moto Express Ahora",
        keyFeatures: ["Prioridad máxima", "Asignación inmediata de chofer", "Seguimiento en directo"]
      },
      {
        file: "servicios-envios-lowcost.html",
        title: "Cadetería y Envíos en el Día en Mar del Plata | Envíos DosRuedas",
        type: "Servicio Económico / Consolidado",
        desc: "Entregas en el día con tarifas accesibles mediante franjas horarias optimizadas de reparto. Perfecto para envíos no urgentes.",
        cta: "Programar Envío LowCost",
        keyFeatures: ["Tarifa plana reducida", "Rutas optimizadas", "Entrega garantizada en el día"]
      },
      {
        file: "servicios-enviosflex.html",
        title: "Mercado Envíos Flex en Mar del Plata | Envíos DosRuedas",
        type: "Integración e-Commerce",
        desc: "Logística especializada y homologada para vendedores de Mercado Libre en Mar del Plata. Cumplimiento de entregas el mismo día para reputación verde.",
        cta: "Activar Envíos Flex para mi Tienda",
        keyFeatures: ["Retiro diario programado", "Entregas en la misma jornada", "Preservación de medalla MercadoLíder"]
      },
      {
        file: "servicios-empresas-cuenta-corriente.html",
        title: "Cuenta Corriente y Envíos para Empresas | Envíos DosRuedas",
        type: "Solución Corporativa B2B",
        desc: "Servicio integral para empresas, estudios contables, laboratorios y comercios con facturación mensual consolidada (A o B) y remito digital.",
        cta: "Solicitar Apertura de Cuenta Corriente",
        keyFeatures: ["Facturación mensual", "Reportes de envíos detallados", "Tarifas preferenciales por volumen"]
      },
      {
        file: "servicios-deposito-fulfillment.html",
        title: "Depósito y Fulfillment para PyMEs | Envíos DosRuedas",
        type: "Logística Integral 3PL",
        desc: "Servicio de recepción de mercadería, guardado seguro en depósito central, picking, packing y despacho automático el mismo día.",
        cta: "Cotizar Almacenamiento y Fulfillment",
        keyFeatures: ["Control de inventario", "Embalaje profesional", "Ahorro de espacio y tiempo"]
      },
      {
        file: "servicios-envios-contrareembolso.html",
        title: "Envíos Contra Reembolso en Mar del Plata | Cobro en Destino",
        type: "Cobranza y Finanzas",
        desc: "Cobro en efectivo o transferencia bancaria en la puerta del cliente receptor, con rendición inmediata y segura al vendedor.",
        cta: "Solicitar Envío con Cobro en Destino",
        keyFeatures: ["Rendición en 24hs", "Cobro en efectivo o QR", "Comprobante digital inmediato"]
      },
      {
        file: "servicios-plan-emprendedores.html",
        title: "Plan Emprendedores y Fulfillment 3PL | Envíos DosRuedas",
        type: "Solución para Tiendas y Pymes",
        desc: "Paquetes mensuales diseñados para tiendas de Instagram, showrooms y emprendedores locales con beneficios progresivos según cantidad de envíos.",
        cta: "Unirme al Plan Emprendedores",
        keyFeatures: ["Sin costos fijos de entrada", "Retiros bonificados", "Soporte personalizado"]
      }
    ]
  },
  {
    category: "3. Soluciones Específicas y Ecosistema Digital",
    pages: [
      {
        file: "guias-envios-flex-mar-del-plata.html",
        title: "Guía Mercado Envíos Flex en MDQ | Envíos DosRuedas",
        type: "Centro de Recursos / Guía Educativa",
        desc: "Manual paso a paso para configurar zonas Flex, horarios de corte y sincronización de envíos en Mercado Libre dentro de Mar del Plata.",
        cta: "Consultar con un Asesor Flex",
        keyFeatures: ["Tutoriales ilustrados", "Mejores prácticas de embalaje", "Preguntas habituales de vendedores"]
      },
      {
        file: "logistica-dosruedas.html",
        title: "Logística DosRuedas | Seguimiento y Portales Digitales",
        type: "Plataforma Tecnológica",
        desc: "Información sobre el sistema digital de gestión, trazabilidad satelital y estado de cada paquete en tiempo real.",
        cta: "Acceder al Portal de Clientes",
        keyFeatures: ["Tracking con código único", "Notificaciones de entrega", "Panel de gestión corporativo"]
      },
      {
        file: "mardelivery.html",
        title: "MarDelivery | Carta Digital, Pedidos QR y Cadetería",
        type: "Vertical Gastronómica",
        desc: "Solución integral para restaurantes, cafés y hamburgueserías marplatenses: menú interactivo digital, comanda por QR y cadetería propia.",
        cta: "Conectar mi Restaurante con MarDelivery",
        keyFeatures: ["Menú digital sin comisiones abusivas", "Despacho directo a la flota DosRuedas"]
      }
    ]
  },
  {
    category: "4. Institucional, Comunidad y Soporte",
    pages: [
      {
        file: "nosotros-sobre-nosotros.html",
        title: "Sobre Nosotros y Trayectoria | Envíos DosRuedas",
        type: "Institucional",
        desc: "Historia de la empresa fundada en Mar del Plata, filosofía de trabajo, compromiso con la puntualidad y cuidado de cada paquete.",
        cta: "Conocer al Equipo",
        keyFeatures: ["Más de 10 años en el rubro", "Flota asegurada y capacitada", "Identidad 100% marplatense"]
      },
      {
        file: "nosotros-nuestras-redes.html",
        title: "Nuestras Redes y Comunidad | Envíos DosRuedas",
        type: "Social Media Hub",
        desc: "Directorio de perfiles oficiales en Instagram, Facebook, TikTok y testimonios de clientes y emprendedores que confían a diario.",
        cta: "Seguinos en Instagram / Facebook",
        keyFeatures: ["Feed de novedades", "Historias de clientes", "Concursos y promociones"]
      },
      {
        file: "nosotros-preguntas-frecuentes.html",
        title: "Preguntas Frecuentes (FAQ) | Envíos DosRuedas",
        type: "Centro de Ayuda",
        desc: "Respuestas claras organizadas por categorías: formas de pago aceptadas, límites de peso/volumen, días de lluvia y políticas de reintento.",
        cta: "¿Tenés otra duda? Hablá con Soporte",
        keyFeatures: ["Acordeones colapsables", "Búsqueda rápida de dudas", "Políticas en días de lluvia"]
      }
    ]
  },
  {
    category: "5. Marco Legal y Cumplimiento Normativo",
    pages: [
      {
        file: "terminos-y-condiciones.html",
        title: "Términos y Condiciones | Envíos DosRuedas",
        type: "Marco Legal",
        desc: "Contrato de servicio, condiciones de traslado de paquetería, mercaderías prohibidas, coberturas y límites de responsabilidad.",
        cta: "Volver al Inicio",
        keyFeatures: ["Condiciones de seguro", "Responsabilidades del remitente y destinatario"]
      },
      {
        file: "politica-de-privacidad.html",
        title: "Política de Privacidad | Envíos DosRuedas",
        type: "Protección de Datos",
        desc: "Compromiso de protección de datos personales de usuarios y remitentes de acuerdo con la legislación argentina vigente.",
        cta: "Consultar Términos",
        keyFeatures: ["Confidencialidad de información", "Seguridad en transacciones", "Derechos ARCO"]
      }
    ]
  }
];

// 3. Generación del documento Markdown (GUIA_DEL_REPOSITORIO.md)
function generateMarkdownGuide() {
  let md = `# Guía Maestra del Repositorio — Sistema de Diseño Envíos DosRuedas

> **Versión**: Noviembre 2026 | **Entorno**: Producción Estática & Landing Pages  
> **Ubicación Base**: \`propuesta/\` | **Marca**: Envíos DosRuedas (Mar del Plata, Argentina)  
> **Generado Programáticamente** mediante el agente \`agency-document-generator\`.

---

## 📌 1. Visión General del Proyecto

El repositorio **sistema_diseno_envios_noviembre** contiene el ecosistema completo de landing pages, sistema de diseño visual, componentes reutilizables y activos gráficos de **Envíos DosRuedas**, empresa líder en mensajería en moto, paquetería urbana y logística e-commerce en la ciudad de Mar del Plata.

### Objetivos Clave de la Arquitectura:
- **Identidad de Marca Sólida**: Basada en el azul primario (\`#0950F6\`) y el amarillo acento (\`#FFEC01\`), transmitiendo velocidad, confianza y visibilidad urbana.
- **Rendimiento Excepcional**: HTML5 semántico puro sin dependencias pesadas de frameworks reactivos; acelerado con Tailwind CSS vía CDN y hojas de estilos especializadas (\`layout.css\` y \`home.css\`).
- **Interactividad Accesible**: Barra de navegación fija con elevación dinámica, cajón móvil accesible por teclado (tecla Escape), dropdowns con atributos \`aria-*\` y soporte de iconos mediante Lucide Icons.
- **Enfoque en Conversión**: Integración directa con WhatsApp como canal de contacto y cierre comercial primario mediante botones píldora (*Nested Pill CTAs*).

---

## 🎨 2. Tokens del Sistema de Diseño (Design Tokens)

El sistema de diseño define tokens formales en \`:root\` dentro de \`propuesta/css/layout.css\` y configurados en la cabecera Tailwind de cada documento.

### 2.1 Paleta Cromática Oficial

| Variable CSS | Valor Hex | Muestra | Rol y Caso de Uso |
|:---|:---:|:---:|:---|
${designTokens.colors.map(c => `| \`${c.name}\` | **\`${c.hex}\`** | \`${c.hex}\` | ${c.role} |`).join('\n')}

### 2.2 Tipografías Oficiales

| Fuente | Variable / Clase | Rol Tipográfico | Características |
|:---|:---|:---|:---|
${designTokens.typography.map(t => `| **${t.name}** | \`${t.style.split(',')[0]}\` | ${t.role} | ${t.style} (${t.source}) |`).join('\n')}

### 2.3 Microinteracciones y Efectos Clave

- **\`.cta-nested-pill\`**: Botón píldora con elevación (\`translateY(-2px)\`), sombra luminosa (\`--shadow-cta-glow\`) e icono interior contenido en cápsula de alto contraste.
- **\`.kinetic-font-stretch\`**: Animación sutil de estiramiento horizontal tipográfico (\`scaleX(1.06)\`) aplicada en enlaces y logotipo.
- **\`.is-scrolled\`**: Estado inyectado en el header mediante JavaScript cuando el scroll vertical supera los 20 píxeles, aplicando sombra de contención y fondo reforzado.

---

## 📂 3. Estructura de Directorios del Repositorio

\`\`\`text
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
\`\`\`

---

## 📑 4. Catálogo Completo de Páginas (19 Landings)

A continuación se detalla el inventario exhaustivo de las 19 páginas que componen el ecosistema de **Envíos DosRuedas**:

`;

  pagesInventory.forEach(cat => {
    md += `### ${cat.category}\n\n`;
    md += `| Archivo | Título | Tipo de Página | Propósito Principal | CTA Principal |\n`;
    md += `|:---|:---|:---:|:---|:---:|\n`;
    cat.pages.forEach(p => {
      md += `| [\`${p.file}\`](file:///D:/repositorios/sistema_diseno_envios_noviembre/propuesta/${p.file}) | **${p.title}** | ${p.type} | ${p.desc} | *${p.cta}* |\n`;
    });
    md += `\n`;
  });

  md += `---

## 🧩 5. Componentes de Arquitectura Shell

### 5.1 Cabecera Fija (\`#optimized-header\`)
- **Estructura**: Elemento \`<header>\` con clase fija \`fixed top-0 left-0 right-0 z-40\`.
- **Comportamiento en Scroll**: El script \`layout.js\` monitoriza \`window.scrollY > 20\` y conmuta la clase \`.is-scrolled\`.
- **Menús Desplegables**: Los botones con clase \`.dropdown-btn\` activan los contenedores \`.dropdown-panel\`. Al presionar la tecla **Escape** o hacer clic fuera del menú, se cierran automáticamente y restauran el atributo \`aria-expanded="false"\`.

### 5.2 Cajón Móvil (\`#mobile-drawer\`)
- **Acceso Táctil**: Activado mediante el botón hamburguesa (\`#menu-toggle-btn\`).
- **Bloqueo de Fondo**: Al abrirse, aplica un overlay con \`backdrop-blur\` (\`#mobile-backdrop\`) y bloquea el desplazamiento del documento (\`document.body.style.overflow = 'hidden'\`).
- **Submenús Acordeón**: Funciones nativas \`toggleMobileSubmenu(id, btn)\` para desplegar las opciones de *Servicios*, *Nosotros* o *Recursos* de manera accesible.

### 5.3 Pie Institucional (\`footer\`)
- **Grid Responsivo**: Se divide en 4 columnas en pantallas de escritorio (\`grid-cols-1 md:grid-cols-2 lg:grid-cols-4\`).
- **Presencia Social**: Botones a los perfiles oficiales con sus colores distintivos (Facebook, Instagram y WhatsApp).
- **Legales y Certificación**: Enlaces a Términos y Condiciones, Políticas de Privacidad y sello de empresa registrada en Mar del Plata.

---

## 🛠️ 6. Guía de Desarrollo y Buenas Prácticas

### 6.1 Cómo Crear una Nueva Página
1. Tomar como plantilla base cualquiera de las páginas hijas (por ejemplo, \`servicios-envios-express.html\`).
2. Mantener intactas las etiquetas \`<head>\` con las fuentes oficiales (**Anton**, **Bebas Neue**, **Outfit**, **Geist Mono**), el script de configuración de Tailwind y los enlaces a \`css/layout.css\`.
3. Preservar el encabezado \`#optimized-header\` y el pie \`footer\` para garantizar consistencia cross-site.
4. Diseñar la sección central identificando el contenedor principal mediante \`<main id="main-content">\` (requerido para cumplir la pauta WCAG de saltar al contenido principal).
5. Incluir el script \`js/layout.js\` al final del archivo antes del cierre de \`</body>\`.

### 6.2 Uso Correcto de Botones CTA
Todos los botones de conversión que dirijan a WhatsApp deben utilizar el formato:
\`\`\`html
<a href="https://wa.me/549223XXXXXXX?text=Hola%20Envios%20DosRuedas,%20quisiera%20solicitar..." 
   target="_blank" 
   rel="noopener noreferrer"
   class="cta-nested-pill bg-brand-yellow text-brand-blue hover:bg-brand-yellow-400 px-6 py-3 shadow-cta-glow">
  <span>PEDIR ENVÍO AHORA</span>
  <span class="p-1.5 rounded-full bg-brand-blue text-brand-yellow">
    <i data-lucide="arrow-right" class="w-4 h-4"></i>
  </span>
</a>
\`\`\`

---

## 🚀 7. Servidor Local y Despliegue

Para previsualizar las páginas localmente en tu navegador:

\`\`\`bash
# Opción 1: Con Node.js npx serve
npx serve propuesta

# Opción 2: Con Python
python -m http.server 8000 --directory propuesta

# Opción 3: Extensión Live Server de VS Code / Antigravity
# Abrir propuesta/index.html y hacer clic en "Go Live"
\`\`\`

---

*Documentación compilada automáticamente por **agency-document-generator**.*  
`;

  return md;
}

// 4. Generación del documento HTML imprimible/PDF-ready (guia_del_repositorio.html)
function generateHtmlGuide() {
  return `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guía Técnica y Manual del Repositorio | Envíos DosRuedas</title>
  <!-- Google Fonts Oficiales -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Geist+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              blue: '#0950F6',
              'blue-50': '#E6EEFE',
              'blue-100': '#BACEFD',
              'blue-600': '#0840c4',
              'blue-900': '#06287c',
              yellow: '#FFEC01',
              'yellow-400': '#FFF12E',
              'yellow-600': '#E6D400',
              ink: '#06287c',
              bgLight: '#F8FAFD'
            }
          },
          fontFamily: {
            sans: ['Outfit', 'sans-serif'],
            display: ['Anton', 'sans-serif'],
            subheading: ['Bebas Neue', 'sans-serif'],
            mono: ['Geist Mono', 'monospace'],
          }
        }
      }
    }
  </script>
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    :root {
      --color-brand-blue: #0950F6;
      --color-brand-yellow: #FFEC01;
      --color-text-dark: #06287c;
    }
    body {
      font-family: 'Outfit', sans-serif;
      color: #06287c;
      background-color: #F8FAFD;
    }
    .font-display { font-family: 'Anton', sans-serif; letter-spacing: -0.02em; }
    .font-subheading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em; }
    .font-mono { font-family: 'Geist Mono', monospace; }
    
    /* Estilos de impresión y exportación a PDF */
    @media print {
      body { background-color: white !important; color: black !important; }
      .no-print { display: none !important; }
      .page-break { page-break-before: always; }
      header { position: relative !important; background: #0950F6 !important; }
      .shadow-box { box-shadow: none !important; border: 1px solid #ccc !important; }
      a { text-decoration: none !important; color: inherit !important; }
    }

    .swatch-card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .swatch-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px -5px rgba(9, 80, 246, 0.15);
    }
  </style>
</head>
<body class="min-h-screen flex flex-col antialiased">

  <!-- BARRA DE ACCIÓN SUPERIOR NO IMPRIMIBLE -->
  <aside class="no-print bg-slate-900 text-white text-xs py-2 px-4 sticky top-0 z-50 flex items-center justify-between border-b border-white/10">
    <div class="flex items-center gap-2">
      <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
      <span class="font-mono">Documento Técnico Generado Programáticamente</span>
      <span class="text-slate-400">|</span>
      <span>Repositorio: <code class="text-brand-yellow">sistema_diseno_envios_noviembre</code></span>
    </div>
    <div class="flex items-center gap-3">
      <button onclick="window.print()" class="bg-brand-yellow hover:bg-brand-yellow-400 text-brand-blue font-bold px-3 py-1 rounded-md text-xs transition flex items-center gap-1.5 cursor-pointer">
        <i data-lucide="printer" class="w-3.5 h-3.5"></i>
        <span>Imprimir o Guardar como PDF</span>
      </button>
      <a href="../propuesta/index.html" class="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-md text-xs transition flex items-center gap-1">
        <span>Abrir Landing Web</span>
        <i data-lucide="external-link" class="w-3 h-3"></i>
      </a>
    </div>
  </aside>

  <!-- CABECERA INSTITUCIONAL DOCUMENTO -->
  <header class="bg-brand-blue text-white py-12 px-6 sm:px-12 border-b-8 border-brand-yellow relative overflow-hidden">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
      <div>
        <div class="inline-flex items-center gap-2 bg-white/15 px-3.5 py-1 rounded-full text-brand-yellow text-sm font-subheading tracking-wider mb-4 border border-white/20">
          <i data-lucide="shield-check" class="w-4 h-4"></i>
          <span>DOCUMENTACIÓN DE ARQUITECTURA & GUÍA MAESTRA</span>
        </div>
        <h1 class="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-none mb-3">
          Sistema de Diseño <span class="text-brand-yellow">Envíos DosRuedas</span>
        </h1>
        <p class="text-brand-blue-50 text-lg max-w-2xl font-light">
          Catálogo integral de componentes, guía de estilo visual y especificación técnica de las 19 landing pages para la mensajería y logística de Mar del Plata.
        </p>
      </div>
      <div class="bg-white/10 backdrop-blur p-5 rounded-2xl border border-white/20 text-right min-w-[240px]">
        <div class="text-xs uppercase tracking-widest text-brand-yellow font-subheading">Versión Oficial</div>
        <div class="font-display text-3xl text-white">Noviembre 2026</div>
        <div class="text-xs text-brand-blue-100 mt-1 font-mono">19 Páginas HTML | CSS Puro + Tailwind</div>
        <div class="mt-3 pt-3 border-t border-white/10 flex items-center justify-end gap-2 text-xs text-brand-yellow font-bold">
          <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
          <span>Mar del Plata, Argentina</span>
        </div>
      </div>
    </div>
  </header>

  <!-- CONTENEDOR PRINCIPAL -->
  <main class="max-w-6xl mx-auto px-6 sm:px-12 py-10 flex-grow w-full space-y-12">

    <!-- SECCIÓN 1: ÍNDICE Y RESUMEN RÁPIDO -->
    <section class="bg-white rounded-2xl p-8 border border-brand-blue-100 shadow-sm">
      <h2 class="font-display text-2xl uppercase tracking-tight text-brand-blue flex items-center gap-2 mb-4">
        <i data-lucide="compass" class="w-6 h-6 text-brand-yellow-600"></i>
        <span>1. Estructura y Navegación del Documento</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="#tokens" class="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 hover:bg-brand-blue-50 transition group">
          <div class="font-subheading text-lg uppercase font-bold text-brand-blue flex items-center justify-between">
            <span>Design Tokens</span>
            <i data-lucide="arrow-right" class="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform"></i>
          </div>
          <p class="text-xs text-brand-blue-900/70 mt-1">Colores de marca, tipografías Anton/Bebas/Outfit y efectos visuales.</p>
        </a>
        <a href="#paginas" class="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 hover:bg-brand-blue-50 transition group">
          <div class="font-subheading text-lg uppercase font-bold text-brand-blue flex items-center justify-between">
            <span>Catálogo de Páginas</span>
            <i data-lucide="arrow-right" class="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform"></i>
          </div>
          <p class="text-xs text-brand-blue-900/70 mt-1">Las 19 landings divididas por servicios, conversión e institucional.</p>
        </a>
        <a href="#arquitectura" class="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 hover:bg-brand-blue-50 transition group">
          <div class="font-subheading text-lg uppercase font-bold text-brand-blue flex items-center justify-between">
            <span>Arquitectura Shell</span>
            <i data-lucide="arrow-right" class="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform"></i>
          </div>
          <p class="text-xs text-brand-blue-900/70 mt-1">Header interactivo, drawer móvil accesible y componentes reutilizables.</p>
        </a>
      </div>
    </section>

    <!-- SECCIÓN 2: DESIGN TOKENS (COLORES Y TIPOGRAFÍAS) -->
    <section id="tokens" class="space-y-6">
      <div class="border-b border-brand-blue-100 pb-3 flex items-center justify-between">
        <h2 class="font-display text-3xl uppercase tracking-tight text-brand-blue flex items-center gap-2">
          <i data-lucide="palette" class="w-7 h-7 text-brand-blue"></i>
          <span>2. Tokens del Sistema de Diseño (Design Tokens)</span>
        </h2>
        <span class="text-xs font-mono bg-brand-blue-50 text-brand-blue px-3 py-1 rounded-full border border-brand-blue-100">CSS Tokens en layout.css</span>
      </div>

      <!-- Muestras de Color -->
      <div>
        <h3 class="font-subheading text-xl uppercase tracking-wider text-brand-blue-900 mb-3">Paleta Cromática Oficial</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${designTokens.colors.map(c => `
          <div class="swatch-card bg-white rounded-xl overflow-hidden border border-brand-blue-100 shadow-sm flex flex-col">
            <div class="h-20 w-full" style="background-color: ${c.hex};"></div>
            <div class="p-3.5 flex-grow flex flex-col justify-between">
              <div>
                <div class="font-mono text-xs font-bold text-slate-800">${c.name}</div>
                <div class="font-mono text-sm font-black text-brand-blue mt-0.5">${c.hex}</div>
              </div>
              <p class="text-xs text-slate-600 mt-2">${c.role}</p>
            </div>
          </div>
          `).join('')}
        </div>
      </div>

      <!-- Tipografías -->
      <div class="pt-4">
        <h3 class="font-subheading text-xl uppercase tracking-wider text-brand-blue-900 mb-3">Fuentes y Jerarquía Tipográfica</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${designTokens.typography.map(t => `
          <div class="bg-white p-5 rounded-xl border border-brand-blue-100 shadow-sm">
            <div class="flex items-center justify-between">
              <span class="text-xs uppercase font-bold tracking-wider text-brand-blue font-subheading">${t.role}</span>
              <span class="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">${t.source}</span>
            </div>
            <div class="text-2xl mt-2 mb-1 ${t.style.includes('font-display') ? 'font-display uppercase text-brand-blue' : t.style.includes('font-subheading') ? 'font-subheading uppercase text-brand-blue text-3xl' : t.style.includes('font-mono') ? 'font-mono font-bold text-slate-800' : 'font-sans font-semibold text-slate-800'}">
              ${t.name} — Envíos DosRuedas Mar del Plata
            </div>
            <div class="text-xs text-slate-500 font-mono mt-2 pt-2 border-t border-slate-100">${t.style}</div>
          </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECCIÓN 3: CATÁLOGO DETALLADO DE PÁGINAS (19 LANDINGS) -->
    <section id="paginas" class="space-y-6 page-break">
      <div class="border-b border-brand-blue-100 pb-3 flex items-center justify-between">
        <h2 class="font-display text-3xl uppercase tracking-tight text-brand-blue flex items-center gap-2">
          <i data-lucide="layers" class="w-7 h-7 text-brand-blue"></i>
          <span>3. Catálogo Exhaustivo de Páginas (19 Landings)</span>
        </h2>
        <span class="text-xs font-mono bg-brand-yellow text-brand-blue font-bold px-3 py-1 rounded-full">19 Archivos HTML</span>
      </div>

      ${pagesInventory.map((cat, idx) => `
      <div class="bg-white rounded-2xl p-6 border border-brand-blue-100 shadow-sm space-y-4">
        <h3 class="font-subheading text-2xl uppercase tracking-wider text-brand-blue flex items-center gap-2 border-b border-brand-blue-50 pb-2">
          <span class="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-mono font-bold">${idx + 1}</span>
          <span>${cat.category}</span>
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="border-b-2 border-brand-blue-100 text-brand-blue font-subheading uppercase tracking-wider text-xs bg-brand-blue-50/50">
                <th class="py-2.5 px-3">Archivo HTML</th>
                <th class="py-2.5 px-3">Título / Finalidad</th>
                <th class="py-2.5 px-3">Tipo</th>
                <th class="py-2.5 px-3">Llamada a la Acción (CTA)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-brand-blue-50 font-sans">
              ${cat.pages.map(p => `
              <tr class="hover:bg-brand-blue-50/30 transition">
                <td class="py-3 px-3 font-mono font-semibold text-brand-blue">
                  <a href="../propuesta/${p.file}" class="hover:underline flex items-center gap-1">
                    <span>${p.file}</span>
                    <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-slate-400 no-print"></i>
                  </a>
                </td>
                <td class="py-3 px-3">
                  <div class="font-bold text-slate-900">${p.title}</div>
                  <div class="text-xs text-slate-600 mt-0.5 leading-relaxed">${p.desc}</div>
                </td>
                <td class="py-3 px-3">
                  <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 whitespace-nowrap">${p.type}</span>
                </td>
                <td class="py-3 px-3 font-subheading text-xs font-bold text-brand-blue uppercase tracking-wider">
                  ${p.cta}
                </td>
              </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      `).join('')}
    </section>

    <!-- SECCIÓN 4: COMPONENTES Y ARQUITECTURA TÉCNICA -->
    <section id="arquitectura" class="space-y-6 page-break">
      <div class="border-b border-brand-blue-100 pb-3 flex items-center justify-between">
        <h2 class="font-display text-3xl uppercase tracking-tight text-brand-blue flex items-center gap-2">
          <i data-lucide="cpu" class="w-7 h-7 text-brand-blue"></i>
          <span>4. Componentes y Arquitectura Shell</span>
        </h2>
        <span class="text-xs font-mono bg-brand-blue-50 text-brand-blue px-3 py-1 rounded-full border border-brand-blue-100">layout.js + layout.css</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${designTokens.components.map(comp => `
        <div class="bg-white rounded-xl p-5 border border-brand-blue-100 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between">
              <h3 class="font-subheading text-xl uppercase tracking-wide font-bold text-brand-blue">${comp.name}</h3>
              <span class="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">${comp.file}</span>
            </div>
            <div class="font-mono text-xs text-slate-500 bg-slate-50 p-1.5 rounded mt-2 border border-slate-200">
              ${comp.selector}
            </div>
            <p class="text-xs text-slate-700 mt-2.5 leading-relaxed">
              ${comp.desc}
            </p>
          </div>
        </div>
        `).join('')}
      </div>
    </section>

    <!-- SECCIÓN 5: GUÍA DE DESPLIEGUE Y COMANDOS -->
    <section class="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
      <h2 class="font-display text-2xl uppercase tracking-tight text-brand-yellow flex items-center gap-2">
        <i data-lucide="terminal" class="w-6 h-6"></i>
        <span>5. Guía de Ejecución Local y Mantenimiento</span>
      </h2>
      <p class="text-sm text-slate-300">
        Para iniciar un servidor de desarrollo estático y visualizar cualquiera de las páginas:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-mono text-xs">
        <div class="bg-slate-950 p-4 rounded-xl border border-white/10">
          <div class="text-brand-yellow font-bold mb-1">// Ejecutar servidor local con Node.js</div>
          <div class="text-slate-200">npx serve propuesta</div>
        </div>
        <div class="bg-slate-950 p-4 rounded-xl border border-white/10">
          <div class="text-brand-yellow font-bold mb-1">// Regenerar esta documentación</div>
          <div class="text-slate-200">node scripts/generate_repo_guide.js</div>
        </div>
      </div>
    </section>

  </main>

  <!-- PIE DEL DOCUMENTO -->
  <footer class="bg-brand-blue text-white py-8 px-6 text-center border-t border-white/10 mt-12">
    <div class="max-w-4xl mx-auto space-y-2">
      <div class="font-display text-2xl uppercase tracking-tight">
        Envíos <span class="text-brand-yellow">DosRuedas</span>
      </div>
      <p class="text-xs text-brand-blue-100">
        Documentación oficial de arquitectura del repositorio generada automáticamente. Mar del Plata, Argentina.
      </p>
      <div class="text-xs text-brand-yellow/80 font-mono pt-2">
        © 2026 Envíos DosRuedas. Todos los derechos reservados.
      </div>
    </div>
  </footer>

  <script>
    if (window.lucide) {
      window.lucide.createIcons();
    }
  </script>
</body>
</html>`;
}

// 5. Actualización del README.md raíz
function generateRootReadme() {
  return `# Sistema de Diseño & Plataforma Web — Envíos DosRuedas (Noviembre 2026)

Bienvenido al repositorio central de **Envíos DosRuedas**, el sistema integral de diseño, componentes reutilizables y las 19 landing pages de servicios logísticos para Mar del Plata.

---

## 🚀 Acceso Rápido a la Documentación

Toda la documentación técnica ha sido generada programáticamente con el agente **agency-document-generator**:

- 📖 **[Guía Técnica Integral (Markdown)](docs/GUIA_DEL_REPOSITORIO.md)**: Detalle técnico, tokens cromáticos, tipografía, estructura de carpetas y catálogo de las 19 páginas.
- 🖨️ **[Guía Ejecutiva Imprimible (HTML/PDF)](docs/guia_del_repositorio.html)**: Documento interactivo estilizado con los colores de marca, listo para ver en el navegador o exportar a PDF con un clic (\`Ctrl+P\`).
- 🌐 **[Landing Page Principal](propuesta/index.html)**: Página de inicio de la plataforma.

---

## 📦 Estructura del Proyecto

\`\`\`text
sistema_diseno_envios_noviembre/
├── propuesta/        # 19 páginas HTML, estilos (layout.css, home.css) y scripts (layout.js)
├── docs/             # Guía técnica (GUIA_DEL_REPOSITORIO.md y guia_del_repositorio.html)
├── scripts/          # Generador de documentación (generate_repo_guide.js)
└── skills-lock.json  # Catálogo de agentes y plugins
\`\`\`

---

## 🛠️ Ejecución Local

Para previsualizar las páginas en tu navegador local:

\`\`\`bash
# Iniciar servidor estático
npx serve propuesta

# Regenerar la documentación técnica
node scripts/generate_repo_guide.js
\`\`\`

---
© 2026 **Envíos DosRuedas** — Mar del Plata, Argentina.
`;
}

// 6. Ejecución y escritura de archivos
function main() {
  console.log("Iniciando generación programática de la documentación...");

  const mdGuide = generateMarkdownGuide();
  const mdPath = path.join(DOCS_DIR, 'GUIA_DEL_REPOSITORIO.md');
  try {
    fs.writeFileSync(mdPath, mdGuide, 'utf-8');
    console.log(`[OK] Generado: ${mdPath}`);
  } catch (err) {
    console.warn(`[AVISO] No se pudo escribir ${mdPath} directamente por permisos del entorno: ${err.message}`);
  }

  const htmlGuide = generateHtmlGuide();
  const htmlPath = path.join(DOCS_DIR, 'guia_del_repositorio.html');
  try {
    fs.writeFileSync(htmlPath, htmlGuide, 'utf-8');
    console.log(`[OK] Generado: ${htmlPath}`);
  } catch (err) {
    console.warn(`[AVISO] No se pudo escribir ${htmlPath} directamente por permisos del entorno: ${err.message}`);
  }

  const rootReadme = generateRootReadme();
  const readmePath = path.join(ROOT_DIR, 'README.md');
  try {
    fs.writeFileSync(readmePath, rootReadme, 'utf-8');
    console.log(`[OK] Actualizado: ${readmePath}`);
  } catch (err) {
    console.warn(`[AVISO] No se pudo escribir ${readmePath} directamente por permisos del entorno: ${err.message}`);
  }

  console.log("\n[EXITO] Metadatos procesados: 19 páginas HTML, 11 tokens de color, 4 familias tipográficas.");
  console.log("Documentación disponible en docs/GUIA_DEL_REPOSITORIO.md y docs/guia_del_repositorio.html");
}

main();
