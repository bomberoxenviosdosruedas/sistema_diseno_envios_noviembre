# MarDelivery: La Revolución del Delivery Gastronómico Marplatense y su Sistema de Diseño Dark Glass

> **Documento de Contexto y Especificación de Producto**  
> Basado en la arquitectura técnica de Envíos DosRuedas, `propuesta/mardelivery.html` y la auditoría de diseño en `docs/Sistema de diseño — Envíos DosRuedas.md`.

---

## 1. El Dilema del Gastronómico en Mar del Plata

En el sector gastronómico de Mar del Plata —desde las hamburgueserías de Güemes y Alem hasta las cervecerías artesanales de Olavarría y las pizzerías del centro— los locales comerciales enfrentaban un dilema asfixiante:

1. **Comisiones abusivas de marketplaces**: Las grandes plataformas de delivery (PedidosYa, Rappi) imponen comisiones que rondan entre el **25% y el 35% por cada ticket**, recortando dramáticamente el margen operativo de los gastronómicos.
2. **Pérdida de identidad y clientes rehenes**: El cliente no interactúa con el restaurante sino con la app, impidiendo fidelizar al consumidor o gestionar promociones propias.
3. **Descontrol logístico y clima costero**: Durante los fines de semana, temporada turística y los frecuentes días de sudestada y lluvia en Mar del Plata, las apps tradicionales suspenden zonas de reparto o carecen de repartidores disponibles, dejando pedidos varados.

---

## 2. La Propuesta de MarDelivery: Logística Propia + Carta QR

**MarDelivery** nace como una vertical tecnológica y operativa de **Envíos DosRuedas** diseñada específicamente para el polo gastronómico marplatense:

- **0% de comisiones abusivas por venta**: El restaurante abona un canon fijo transparente o tarifa plana de cadetería, quedándose con el 100% del valor de cada plato.
- **Carta Digital Interactiva con Pedidos por QR**: Menú web ultra-rápido donde los clientes escanean desde la mesa, la web o Instagram, arman su pedido y pagan sin intermediarios.
- **Gestión de Turnos y Flota en Tiempo Real**: Plataforma integral donde los repartidores toman turnos programados, optimizan rutas con mapa nocturno y cobran sus liquidaciones al instante.
- **Flota Propia Capacitada y Modo Lluvia**: Coordinación directa con choferes asegurados en Mar del Plata, preparados con equipamiento impermeable térmico para operar incluso bajo mal tiempo.

---

## 3. Un Sistema de Diseño Autónomo: Dark Glassmorphism

A diferencia de la marca madre Envíos DosRuedas (que utiliza fondos diurnos contrastados con azul eléctrico `#0950F6` y amarillo `#FFEC01`), **MarDelivery cuenta con un sistema de diseño propio, sofisticado y nocturno**.

### 3.1 Los 4 Principios Visuales
1. **Siempre Oscuro (`#031811`)**: La app está diseñada para ambientes de cocina, noche y turnos de reparto. No existe modo claro: la oscuridad evita el deslumbramiento y concentra la atención.
2. **Vidrio Esmerilado de Alta Densidad**: Los paneles flotan con `backdrop-filter: blur(18px)`, fondo `--md-glass` (`linear-gradient(145deg, rgba(9,40,30,0.87), rgba(4,25,19,0.86))`) y bordes de alta fidelidad `--md-glass-border` (`rgb(196 235 211 / 12%)`).
3. **Identidad Costera de Mar del Plata**:
   - **Haz del Faro (`.md-beam`)**: Cono de luz sutil en los encabezados que evoca el Faro de Punta Mogotes.
   - **Panorámica Costera (`.md-city-art`)**: Silueta vectorizada que recorre la Rambla, el Lobo Marino, el Torreón del Monje y el puerto detrás del contenido.
   - **Línea de Costa (`.md-coastline`)**: Fondo ambiente con triple gradiente radial y una curva de borde verde rotada a −2° simulando el Boulevard Marítimo.
4. **Táctil Primero y Ergonomía Móvil**: Acciones principales con un mínimo estricto de 48px de altura, riel de navegación persistente en escritorio y barra inferior fija para repartidores en moto.

---

## 4. La Semántica de Color: 4 Colores con Significado Preciso

En MarDelivery cada color comunica un estado operativo irremplazable:

| Color | Token | Hex | Rol & Significado Operativo |
| :--- | :--- | :---: | :--- |
| **Verde** | `--md-green` / `--primary` | `#35d07f` | **Acción principal, resuelto, confirmado**. Turno cubierto, pedido entregado, navegación activa. |
| **Amarillo** | `--md-gold` / `--accent` | `#ffc833` | **Atención, dinero en movimiento, plazos**. Cobros pendientes, vencimientos de liquidación y foco de teclado. |
| **Azul** | `--md-blue` | `#4da3ff` | **Informativo, algo sin resolver todavía**. Turno publicado sin tomar, repartidor en camino, activación de Modo Lluvia. |
| **Rojo** | `--md-red` / `--destructive` | `#ff5247` | **Estrictamente errores o acciones destructivas**. Cancelar comanda, rechazar pedido, bloqueo de chofer. |
| **Gris** | `--md-gray` / `--muted-foreground` | `#9cb8ac` | **Neutro o inactivo**. Etiquetas secundarias, eyebrows y fechas no seleccionadas. |

*Nota de accesibilidad*: El ratio de contraste del amarillo `#ffc833` sobre la superficie oscura `#062319` supera los **10.7:1**, y el texto `#042018` sobre botón verde `#35d07f` alcanza **8.6:1**, pasando holgadamente WCAG 2.2 AAA.

---

## 5. Tipografía y Radios

- **Outfit**: Familia tipográfica exclusiva.
  - Titulares Display (`.md-display`): Peso 900 (Black), `letter-spacing: -0.042em`, `line-height: 0.98`. **Sin mayúsculas**, lo que le otorga un tono cercano, moderno y gastronómico.
  - Etiquetas (`.md-label`): Peso 800, `letter-spacing: 0.15em`, siempre en mayúsculas.
  - Eyebrows (`.md-eyebrow`): 10px, peso 800, color `--muted-foreground`.
- **Geist Mono**: Reservado para montos en pesos, tiempos de cocina, coordenadas y códigos de comanda.
- **Radios de Borde**:
  - Píldoras y botones de acción: `9999px` (`rounded-full`).
  - Inputs y controles: `16px` a `18px`.
  - Tarjetas y paneles: `24px` (`.md-panel`) a `28px` (`.md-rail`).

---

## 6. Funcionalidades del Ecosistema MarDelivery

1. **Carta Digital Inteligente**:
   - Carga de platos con fotos en alta resolución, modificadores (punto de carne, salsas, extras) y tiempo estimado de elaboración.
   - Envío de comanda directo a cocina por WhatsApp o panel web.
2. **Panel de Asignación de Turnos (Riel de Despacho)**:
   - Los locales publican turnos de cadetería (ej: Viernes 20:00 a 00:30hs).
   - Los turnos sin tomar brillan en **Azul `#4da3ff`**. En cuanto un repartidor lo toma, cambia a **Verde `#35d07f`**.
   - Si faltan menos de 2 horas y el turno sigue abierto, pasa a **Amarillo `#ffc833`** con alerta de alta prioridad.
3. **Mapa Nocturno en Vivo**:
   - Integración con OpenStreetMap invertido con filtros CSS para eliminar el resplandor blanco: `invert(1) hue-rotate(180deg) brightness(0.82) saturate(0.55)`.
   - Ubicación en vivo del repartidor mediante pulsos dinámicos (`.md-ping`).
4. **Liquidaciones Claras & Rendición**:
   - Historial de viajes, propinas digitales y rendición de efectivo en tiempo real.

---

## 7. Métricas de Impacto

- **+85 locales gastronómicos activos** en Mar del Plata.
- **32 minutos** de promedio de entrega punto a punto.
- **Ahorro promedio del 28%** en comisiones mensuales por sucursal gastronómica.
- **100% de trazabilidad** en envíos con soporte directo por WhatsApp.
