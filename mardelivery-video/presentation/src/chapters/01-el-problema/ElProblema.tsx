import type { ChapterStepProps } from "../../registry/types";
import "./ElProblema.css";

export default function ElProblema({ step }: ChapterStepProps) {
  // Step 0: El mordisco del 35%
  if (step === 0) {
    return (
      <div className="ep-container">
        <div className="ep-ambient-glow" />
        <div className="ep-kicker">
          <span className="ep-kicker-dot" />
          <span>Comisiones de Marketplace · Mar del Plata</span>
        </div>

        <div className="ep-hero-grid">
          <div>
            <h1 className="ep-display-headline">
              Las apps de delivery se quedan con hasta el{" "}
              <span className="ep-highlight-red">35%</span> de cada plato.
            </h1>
            <div className="ep-stat-callout">35%</div>
            <div className="ep-stat-sub">
              Uno de cada tres pesos que genera tu cocina se esfuma en comisiones
              abusivas antes de pagar sueldos o insumos.
            </div>
          </div>

          <div className="ep-burger-card">
            <span className="ep-cut-badge">−35% RETENIDO</span>
            {/* SVG ilustrado del plato/hamburguesa partido */}
            <svg
              className="ep-burger-svg"
              viewBox="0 0 320 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pan superior cortado */}
              <path
                d="M50 110 C50 50, 270 50, 270 110 Z"
                fill="#ffc833"
                opacity="0.9"
              />
              {/* Corte que separa el 35% */}
              <line
                x1="190"
                y1="30"
                x2="190"
                y2="230"
                stroke="#ff5247"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
              {/* Porción del restaurante (65%) */}
              <rect x="50" y="125" width="135" height="24" rx="12" fill="#35d07f" />
              <rect x="50" y="155" width="135" height="18" rx="9" fill="#2ECC85" />
              <path d="M50 180 C50 215, 185 215, 185 180 Z" fill="#ffc833" opacity="0.9" />

              {/* Porción mordida por la app (35%) */}
              <g transform="translate(15, -10)">
                <rect x="195" y="125" width="75" height="24" rx="12" fill="#ff5247" />
                <rect x="195" y="155" width="75" height="18" rx="9" fill="#ff8a80" />
                <path d="M195 180 C195 215, 270 215, 270 180 Z" fill="#ff5247" opacity="0.8" />
              </g>

              {/* Semillas sésamo */}
              <circle cx="100" cy="80" r="3" fill="#fff" opacity="0.8" />
              <circle cx="140" cy="70" r="3" fill="#fff" opacity="0.8" />
              <circle cx="170" cy="85" r="3" fill="#fff" opacity="0.8" />
              <circle cx="230" cy="80" r="3" fill="#ff5247" />
            </svg>

            <div className="ep-split-bar">
              <div className="ep-bar-rest" />
              <div className="ep-bar-app" />
            </div>

            <div className="ep-bar-labels">
              <span style={{ color: "var(--accent)" }}>65% Para el Gastronómico</span>
              <span style={{ color: "var(--md-red)", fontWeight: 700 }}>
                35% Comisión App
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: El dilema del polo gastronómico en Mar del Plata
  if (step === 1) {
    return (
      <div className="ep-container">
        <div className="ep-kicker">
          <span className="ep-kicker-dot" />
          <span>Mar del Plata · Desglose Operativo</span>
        </div>

        <div className="ep-map-grid">
          <div>
            <h1 className="ep-display-headline" style={{ fontSize: "56px" }}>
              Tener un local en Mar del Plata es difícil. <br />
              <span className="ep-highlight-red">Regalar un tercio</span>, inviable.
            </h1>
            <p style={{ fontSize: "20px", color: "var(--text-2)", lineHeight: "1.6" }}>
              El costo de alquileres, gas, servicios y salarios en temporada baja
              deja a los restaurantes marplatenses al borde del break-even.
            </p>

            <div className="ep-nodes-list">
              <div className="ep-node-item">
                <div>
                  <div className="ep-node-name">Polo Güemes & Alem</div>
                  <div className="ep-node-type">Hamburgueserías, Brunch & Cafés</div>
                </div>
                <div className="ep-node-loss">−35% Margen</div>
              </div>

              <div className="ep-node-item">
                <div>
                  <div className="ep-node-name">Calle Olavarría</div>
                  <div className="ep-node-type">Cervecerías Artesanales & Piqueos</div>
                </div>
                <div className="ep-node-loss">−32% Margen</div>
              </div>

              <div className="ep-node-item">
                <div>
                  <div className="ep-node-name">Centro & La Perla</div>
                  <div className="ep-node-type">Pizzerías Tradicionales & Pastas</div>
                </div>
                <div className="ep-node-loss">−35% Margen</div>
              </div>
            </div>
          </div>

          <div className="ep-ticket-box">
            <div className="ep-ticket-header">
              <span>TICKET COMÚN DE PEDIDO</span>
              <span>VIERNES 21:30 HS</span>
            </div>

            <div className="ep-ticket-row">
              <span>Hamburguesa Doble c/ Papas</span>
              <span>$12.500</span>
            </div>
            <div className="ep-ticket-row">
              <span>Bebida artesanal</span>
              <span>$3.500</span>
            </div>
            <div className="ep-ticket-row" style={{ fontWeight: 700 }}>
              <span>Subtotal Comanda</span>
              <span>$16.000</span>
            </div>

            <div
              className="ep-ticket-row ep-ticket-red"
              style={{
                marginTop: "12px",
                paddingTop: "12px",
                borderTop: "1px dashed rgba(255,82,71,0.3)",
              }}
            >
              <span>Comisión Marketplace (35%)</span>
              <span>−$5.600</span>
            </div>

            <div className="ep-ticket-row" style={{ color: "var(--text-2)", fontSize: "14px" }}>
              <span>Costo insumos + Cocineros</span>
              <span>−$8.200</span>
            </div>

            <div className="ep-ticket-total">
              <span>GANANCIA NETA REAL</span>
              <span>$2.200 (13%)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Clientes Rehenes de la App
  if (step === 2) {
    return (
      <div className="ep-container">
        <div className="ep-kicker">
          <span className="ep-kicker-dot" />
          <span>Pérdida de Identidad · Clientes Rehenes</span>
        </div>

        <h1
          className="ep-display-headline"
          style={{ fontSize: "56px", textAlign: "center", marginBottom: "32px" }}
        >
          Lo peor no es la comisión: <br />
          <span className="ep-highlight-red">tus clientes no son tuyos</span>.
        </h1>

        <div className="ep-comparison-container">
          <div className="ep-compare-card">
            <div className="ep-compare-title" style={{ color: "var(--text-mute)" }}>
              <span>TU RESTAURANTE</span>
            </div>
            <div className="ep-pill-stat">
              <span>Base de datos retenida</span>
              <span style={{ color: "var(--md-red)", fontWeight: 700 }}>0 contactos</span>
            </div>
            <div className="ep-pill-stat">
              <span>Contacto para promociones</span>
              <span style={{ color: "var(--md-red)", fontWeight: 700 }}>Bloqueado</span>
            </div>
            <div className="ep-pill-stat">
              <span>Fidelización y marca propia</span>
              <span style={{ color: "var(--md-red)", fontWeight: 700 }}>Nula</span>
            </div>
          </div>

          <div className="ep-compare-card danger">
            <div className="ep-compare-title" style={{ color: "var(--md-red)" }}>
              <span>EL MARKETPLACE TRADICIONAL</span>
            </div>
            <div className="ep-pill-stat">
              <span>Control del comprador</span>
              <span style={{ color: "var(--md-gold)", fontWeight: 700 }}>100% Cautivo</span>
            </div>
            <div className="ep-pill-stat">
              <span>Venta cruzada</span>
              <span style={{ color: "var(--md-gold)", fontWeight: 700 }}>A tu competencia</span>
            </div>
            <div className="ep-pill-stat">
              <span>Algoritmo de visibilidad</span>
              <span style={{ color: "var(--md-gold)", fontWeight: 700 }}>Te cobra por aparecer</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Viernes a la noche, lluvia en la costa y zona suspendida
  if (step === 3) {
    return (
      <div className="ep-container">
        <div className="ep-kicker">
          <span className="ep-kicker-dot" />
          <span>Viernes en la Costa · Sudestada</span>
        </div>

        <div className="ep-rain-stage">
          {/* Lluvia generada con CSS */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="ep-rain-drop"
              style={{
                left: `${(i * 3.4) % 100}%`,
                animationDelay: `${(i * 120) % 1200}ms`,
                animationDuration: `${700 + ((i * 80) % 400)}ms`,
              }}
            />
          ))}

          <div className="ep-emergency-modal">
            <svg
              className="ep-emergency-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>

            <div className="ep-emergency-title">ZONA TEMPORALMENTE NO DISPONIBLE</div>
            <div className="ep-emergency-body">
              "Temporal costero en Mar del Plata. No hay repartidores disponibles en tu radio.
              Se suspende la toma de pedidos hasta nuevo aviso."
            </div>
            <div
              style={{
                marginTop: "16px",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--md-gold)",
              }}
            >
              VIERNES 21:45 HS · HORA PICO GASTRONÓMICA
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 4: Comandas tiradas y pérdida acumulada
  return (
    <div className="ep-container">
      <div className="ep-kicker">
        <span className="ep-kicker-dot" />
        <span>Cocina Varada · Pérdida Acumulativa</span>
      </div>

      <div className="ep-orders-grid">
        <div className="ep-ticket-stack">
          <div className="ep-cold-order">
            <div>
              <div className="ep-order-num">Comanda #104 · 2 Burgers Dobles</div>
              <div style={{ fontSize: "12px", color: "var(--text-2)" }}>Mesa de despacho</div>
            </div>
            <div className="ep-order-timer">⏱️ Hace 38 min</div>
          </div>

          <div className="ep-cold-order">
            <div>
              <div className="ep-order-num">Comanda #105 · 1 Pizza Especial + Empanadas</div>
              <div style={{ fontSize: "12px", color: "var(--text-2)" }}>Enfriándose</div>
            </div>
            <div className="ep-order-timer">⏱️ Hace 31 min</div>
          </div>

          <div className="ep-cold-order">
            <div>
              <div className="ep-order-num">Comanda #106 · Combo Cervezas + Papas</div>
              <div style={{ fontSize: "12px", color: "var(--text-2)" }}>Cliente quejándose</div>
            </div>
            <div className="ep-order-timer">⏱️ Hace 24 min</div>
          </div>
        </div>

        <div className="ep-loss-box">
          <div className="ep-loss-label">Pérdida Estimada por Noche</div>
          <div className="ep-loss-number">−$48.500</div>
          <div className="ep-loss-quote">
            "Tu cocina pierde plata, comida y reputación cada minuto que la app no responde."
          </div>
        </div>
      </div>
    </div>
  );
}
