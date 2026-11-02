# Sistema de Diseño & Plataforma Web — Envíos DosRuedas (Noviembre 2026)

Bienvenido al repositorio central de **Envíos DosRuedas**, el sistema integral de diseño, componentes reutilizables y el catálogo de las 19 landing pages de servicios logísticos para Mar del Plata.

---

## 🚀 Acceso Rápido a la Documentación

Toda la documentación técnica y guía del repositorio ha sido generada mediante el agente especialista **agency-document-generator**:

- 📖 **[Guía Técnica Integral (Markdown)](docs/GUIA_DEL_REPOSITORIO.md)**: Detalle técnico, tokens cromáticos, tipografía, estructura de carpetas, componentes Shell y catálogo exhaustivo de las 19 páginas.
- 🖨️ **[Guía Ejecutiva Imprimible (HTML/PDF)](docs/guia_del_repositorio.html)**: Documento interactivo estilizado con los colores corporativos oficiales (`#0950F6` y `#FFEC01`), listo para visualizar en el navegador o exportar a PDF con un clic (`window.print()`).
- 🌐 **[Landing Page Principal](propuesta/index.html)**: Página de inicio de la plataforma web.

---

## 📦 Estructura del Proyecto

```text
sistema_diseno_envios_noviembre/
├── README.md                      # Resumen ejecutivo y accesos rápidos
├── docs/                          # Documentación maestra del repositorio
│   ├── GUIA_DEL_REPOSITORIO.md    # Guía técnica completa en Markdown
│   └── guia_del_repositorio.html  # Documento interactivo y exportable a PDF
├── scripts/                       # Herramientas de automatización y validación
│   ├── generate_repo_guide.js     # Script generador de la documentación
│   └── inspect_pages.js           # Inspector y validador de páginas
└── propuesta/                     # Raíz de la plataforma web y landings (19 páginas)
    ├── css/                       # layout.css y home.css
    ├── js/                        # layout.js (header, drawer, accesibilidad ARIA)
    ├── elementos/                 # Gráficos transparentes WebP
    ├── heroes/                    # Banners WebP optimizados
    └── img/                       # Recursos fotográficos generales y servicios
```

---

## 🛠️ Ejecución Local

Para previsualizar las páginas en tu navegador local:

```bash
# Iniciar servidor estático
npx serve propuesta

# Regenerar la documentación técnica
node scripts/generate_repo_guide.js
```

---
© 2026 **Envíos DosRuedas** — Mar del Plata, Argentina.
