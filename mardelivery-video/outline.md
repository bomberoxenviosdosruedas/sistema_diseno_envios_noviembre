# Video Outline — MarDelivery: Delivery Gastronómico & Dark Glass

> **Tema Propuesto**: `terminal-green` / `custom-mardelivery-glass` — Interfaz oscura, verde esmeralda y acentos funcionales
> **Duración Estimada**: ~2 minutos (20 pasos · ~350 palabras de locución)
> **Capítulos**: 5 capítulos · 20 pasos (steps)

---

## 1. el-problema — La Trampa de las Apps Tradicionales (5 steps · ~28s)

**Información Pool** (datos para gráficos y etiquetas en pantalla):
- Comisión promedio: `25% - 35%` por ticket en marketplaces de delivery — Fuente: article §1
- Clientes propios: `0% de base de datos retenida` por el restaurante — Fuente: article §1
- Factor climático MDQ: Sudestadas y cancelaciones masivas los fines de semana — Fuente: article §1
- Estado comanda: Cartel de *"Zona de entrega no disponible"* y comida enfriándose — Fuente: article §1

**Plan de Desarrollo**:
- step 1 (~5s) — Número gigante `35%` con etiqueta roja de retención y silueta de hamburguesa partida
- step 2 (~6s) — Mapa esquemático de Mar del Plata con zonas gastronómicas (Güemes, Alem, Olavarría) y alerta de margen
- step 3 (~5s) — Comparativa visual: *Cliente del restaurante* vs. *Cliente cautivo del marketplace*
- step 4 (~6s) — Estado de alerta: simulación de lluvia en la costa y notificación de suspensión de envíos
- step 5 (~6s) — Temporizador en pantalla con platos varados en mostrador y pérdida económica acumulativa

**Locución (extracto)**:
> ¿Sabías que las apps de delivery se quedan con hasta el 35% de cada hamburguesa que vendés? [...] Llega el viernes a la noche, se larga a llover en la costa y la app te clava el cartel de "zona no disponible".

---

## 2. la-solucion — MarDelivery y la Soberanía Gastronómica (4 steps · ~24s)

**Información Pool**:
- Modelo comercial: `0% de comisiones por venta` (canon plano transparente) — Fuente: article §2
- Canal de entrada: Menú digital interactivo con código QR para mesas, bio de Instagram y web — Fuente: article §2
- Logística de despacho: Flota propia homologada de Envíos DosRuedas — Fuente: article §2
- Margen retenido: `100% del ticket para el gastronómico` — Fuente: article §2

**Plan de Desarrollo**:
- step 1 (~6s) — Revelación del logotipo MarDelivery sobre fondo oscuro con cápsula de Envíos DosRuedas
- step 2 (~6s) — Contraste de comisiones: `35% Marketplace` tachado en rojo vs. `0% Comisión MarDelivery` en verde
- step 3 (~6s) — Mockup interactivo de teléfono mostrando la Carta Digital QR con modificadores de plato
- step 4 (~6s) — Diagrama de flujo continuo: Escaneo QR → Comanda en Cocina → Despacho Moto DosRuedas

**Locución (extracto)**:
> Por eso Envíos DosRuedas armó MarDelivery: una plataforma pensada desde cero para los gastronómicos marplatenses. Acá no hay comisiones del 35%. Pagás un canon plano y el 100% del ticket se queda en tu caja.

---

## 3. sistema-visual — Arquitectura Dark Glassmorphism (5 steps · ~30s)

**Información Pool**:
- Fondo base: Hex `#031811` (fondo oscuro abisal sin modo claro) — Fuente: article §3.1
- Vidrio esmerilado: `backdrop-filter: blur(18px)`, borde `rgb(196 235 211 / 12%)` — Fuente: article §3.1
- Semántica de 4 colores: Verde `#35d07f`, Amarillo `#ffc833`, Azul `#4da3ff`, Rojo `#ff5247` — Fuente: article §4
- Ratios de contraste WCAG: Amarillo sobre oscuro `10.7:1`, Verde con texto `#042018` `8.6:1` — Fuente: article §4
- Tipografía: Outfit Display 900 minúsculas (`letter-spacing: -0.042em`) — Fuente: article §5

**Plan de Desarrollo**:
- step 1 (~6s) — Transición a pantalla oscura `#031811` con resplandor ambiente costero (`.md-coastline`)
- step 2 (~6s) — Tarjeta de vidrio flotante esmerilado con efecto blur y borde iluminado
- step 3 (~5s) — Cuadrante de diseño con la regla de los 4 colores operativos
- step 4 (~7s) — Demostración interactiva de los 3 estados: Verde (resuelto), Amarillo (atención) y Azul (informativo)
- step 5 (~6s) — Alerta controlada: Estado Rojo restringido a errores críticos sin contaminación visual

**Locución (extracto)**:
> Pero lo que más llama la atención cuando abrís el sistema es su diseño: es una interfaz completamente oscura. [...] El verde te confirma lo resuelto, el amarillo te avisa liquidaciones y cobros pendientes, y el azul te marca los turnos que todavía nadie agarró.

---

## 4. operacion-en-vivo — Flota, Turnos y Modo Lluvia (3 steps · ~20s)

**Información Pool**:
- Módulo de turnos: Riel de pastillas de asignación dinámica de repartidores — Fuente: article §6.2
- Mapa nocturno: Tiles de OpenStreetMap invertidos con filtro CSS nocturno — Fuente: article §6.3
- Cobertura meteorológica: Modo Lluvia con choferes equipados e impermeables — Fuente: article §2
- Seguimiento: Marcador de chofer con pulso radar dinámico (`.md-ping`) — Fuente: article §6.3

**Plan de Desarrollo**:
- step 1 (~7s) — Riel interactivo de turnos: botón azul (disponible) transicionando a verde al asignarse chofer
- step 2 (~7s) — Mapa nocturno de Mar del Plata con trazado de ruta en vivo y punto radar de la moto
- step 3 (~6s) — Activación del "Modo Lluvia" con badge dinámico y aviso de flota activa garantizada

**Locución (extracto)**:
> En el panel de turnos, los locales publican sus franjas y los repartidores las toman al instante. El mapa nocturno invierte los colores de las calles para no quemarte los ojos [...] Y cuando entra la sudestada, se activa el Modo Lluvia.

---

## 5. el-impacto — Métricas Reales en Mar del Plata (3 steps · ~18s)

**Información Pool**:
- Locales adheridos: `+85 locales gastronómicos activos` en Mar del Plata — Fuente: article §7
- Tiempo medio de entrega: `32 minutos` promedio punto a punto — Fuente: article §7
- Ahorro económico: `28% de ahorro en comisiones` promedio mensual — Fuente: article §7
- Respaldo operativo: Flota Envíos DosRuedas Mar del Plata — Fuente: article §7

**Plan de Desarrollo**:
- step 1 (~6s) — Métrica gigante animada: `+85 Locales Gastronómicos Adheridos`
- step 2 (~6s) — Reloj/cronómetro de despacho: `32 Minutos Promedio` con medidor de ahorro del `28%`
- step 3 (~6s) — Cierre institucional: Sello de soberanía gastronómica marplatense con enlace a MarDelivery

**Locución (extracto)**:
> Hoy ya son más de 85 los locales gastronómicos que recuperaron el control de su negocio en Mar del Plata. Con entregas que promedian los 32 minutos y un ahorro mensual del 28% [...] MarDelivery demostró que con tecnología propia y logística local, no hace falta regalarle tu negocio a nadie.

---

## Lista de Materiales y Recursos (Asset Checklist)

- [x] **Identidad & Logo**: Wordmark MarDelivery con tipografía Outfit Black 900 y cápsula Envíos DosRuedas.
- [x] **Paleta Cromática Oficial**: `#031811` (fondo), `#35d07f` (verde), `#ffc833` (amarillo oro), `#4da3ff` (azul info), `#ff5247` (rojo).
- [ ] **Capturas de Interfaz**: Componente de Carta Digital QR y panel de turnos (se pueden generar componentes interactivos React nativos con glassmorphism).
- [ ] **Mapa Vectorial / SVG**: Silueta de Mar del Plata con puntos de referencia (Torreón, Rambla, Faro).
- [ ] **Iconografía**: Lucide Icons (`bike`, `utensils`, `qr-code`, `cloud-rain`, `check-circle-2`, `trending-up`).
