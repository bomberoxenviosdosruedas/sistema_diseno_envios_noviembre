# Sistema de Diseño & Plataforma Web — Envíos DosRuedas (Noviembre 2026)

Bienvenido al repositorio central de **Envíos DosRuedas**, el sistema integral de diseño, componentes reutilizables y las 19 landing pages de servicios logísticos para Mar del Plata.

---

## 🚀 Acceso Rápido a la Documentación

Toda la documentación técnica ha sido generada programáticamente con el agente **agency-document-generator**:

- 📖 **[Guía Técnica Integral (Markdown)](docs/GUIA_DEL_REPOSITORIO.md)**: Detalle técnico, tokens cromáticos, tipografía, estructura de carpetas y catálogo de las 19 páginas.
- 🖨️ **[Guía Ejecutiva Imprimible (HTML/PDF)](docs/guia_del_repositorio.html)**: Documento interactivo estilizado con los colores de marca, listo para ver en el navegador o exportar a PDF con un clic (`Ctrl+P`).
- 🌐 **[Landing Page Principal](propuesta/index.html)**: Página de inicio de la plataforma.

---

## 📦 Estructura del Proyecto

```text
sistema_diseno_envios_noviembre/
├── propuesta/        # 19 páginas HTML, estilos (layout.css, home.css) y scripts (layout.js)
├── docs/             # Guía técnica (GUIA_DEL_REPOSITORIO.md y guia_del_repositorio.html)
├── scripts/          # Generador de documentación (generate_repo_guide.js)
└── skills-lock.json  # Catálogo de agentes y plugins
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
