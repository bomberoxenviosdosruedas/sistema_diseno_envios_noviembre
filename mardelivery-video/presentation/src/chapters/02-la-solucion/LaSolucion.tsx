import type { ChapterStepProps } from "../../registry/types";
import "./LaSolucion.css";

export default function LaSolucion({ step }: ChapterStepProps) {
  // Step 0: Revelación de MarDelivery y Soberanía Gastronómica
  if (step === 0) {
    return (
      <div className="ls-container">
        <div className="ls-ambient-glow" />
        <div className="ls-ambient-gold" />

        <div className="ls-kicker">
          <span className="ls-kicker-dot" />
          <span>Capítulo 02 · La Alternativa Soberana</span>
        </div>

        <div className="ls-step0-grid">
          <div className="ls-brand-lead">
            <h1 className="ls-brand-title">
              La respuesta se llama <br />
              <span className="ls-brand-accent">MarDelivery</span>
            </h1>

            <p className="ls-brand-desc">
              Una plataforma diseñada exclusivamente para los locales gastronómicos
              de Mar del Plata. Desarrollada por <strong>Envíos DosRuedas</strong> para
              devolverle el margen y los clientes a sus verdaderos dueños.
            </p>

            <div className="ls-pillar-grid">
              <div className="ls-pillar-card">
                <span className="ls-pillar-num">01</span>
                <span className="ls-pillar-title">0% Comisiones</span>
                <span className="ls-pillar-text">
                  Sin retenciones sobre tus ventas ni cobros porcentuales ocultos.
                </span>
              </div>

              <div className="ls-pillar-card">
                <span className="ls-pillar-num">02</span>
                <span className="ls-pillar-title">Carta QR Propia</span>
                <span className="ls-pillar-text">
                  Tus comensales piden directo desde la mesa o tu cuenta de Instagram.
                </span>
              </div>

              <div className="ls-pillar-card">
                <span className="ls-pillar-num">03</span>
                <span className="ls-pillar-title">Flota Homologada</span>
                <span className="ls-pillar-text">
                  Repartidores propios de DosRuedas con seguro y cajas térmicas.
                </span>
              </div>
            </div>
          </div>

          <div className="ls-badge-showcase">
            <div className="ls-badge-glow-ring" />
            <div className="ls-badge-img-wrapper">
              <img
                src="/assets/mardelivery-badge.jpg"
                alt="MarDelivery Emblema 3D"
                className="ls-badge-img"
              />
            </div>
            <div className="ls-badge-tagline">
              <span>✦</span>
              <span>Envíos DosRuedas · Red Gastronómica Mar del Plata</span>
            </div>
          </div>
        </div>

        <div />
      </div>
    );
  }

  // Step 1: 0% Comisiones vs 35% Apps
  if (step === 1) {
    return (
      <div className="ls-container">
        <div className="ls-ambient-glow" />

        <div className="ls-kicker">
          <span className="ls-kicker-dot" />
          <span>Canon Plano · Cero Comisiones por Ticket</span>
        </div>

        <div className="ls-step1-container">
          <div className="ls-step1-header">
            <h1 className="ls-step1-title">El 100% de cada ticket queda en tu caja</h1>
            <p className="ls-step1-sub">
              Basta de regalar un tercio de la facturación en comisiones abusivas de marketplaces.
            </p>
          </div>

          <div className="ls-compare-grid">
            {/* Apps Tradicionales */}
            <div className="ls-compare-card ls-card-marketplace">
              <div className="ls-compare-top">
                <span className="ls-compare-badge ls-badge-bad">Marketplaces Tradicionales</span>
                <span style={{ fontSize: 13, color: "var(--text-mute)" }}>Apps de intermediación</span>
              </div>

              <div className="ls-commission-big">
                <span className="ls-comm-red">−35%</span>
                <span className="ls-comm-label">de comisión por plato</span>
              </div>

              <div className="ls-checklist">
                <div className="ls-check-item">
                  <span className="ls-item-icon-bad">✕</span>
                  <span>Te cobran entre el 25% y 35% de cada venta</span>
                </div>
                <div className="ls-check-item">
                  <span className="ls-item-icon-bad">✕</span>
                  <span>Secuestran la base de datos de tus clientes</span>
                </div>
                <div className="ls-check-item">
                  <span className="ls-item-icon-bad">✕</span>
                  <span>Liquidación diferida a 14 o 21 días</span>
                </div>
                <div className="ls-check-item">
                  <span className="ls-item-icon-bad">✕</span>
                  <span>Si llueve, te suspenden la zona sin previo aviso</span>
                </div>
              </div>
            </div>

            {/* MarDelivery */}
            <div className="ls-compare-card ls-card-mardelivery">
              <div className="ls-compare-top">
                <span className="ls-compare-badge ls-badge-good">Modelo MarDelivery</span>
                <span style={{ fontSize: 13, color: "var(--accent)" }}>Soberanía comercial</span>
              </div>

              <div className="ls-commission-big">
                <span className="ls-comm-green">0%</span>
                <span className="ls-comm-label">comisión por venta</span>
              </div>

              <div className="ls-checklist">
                <div className="ls-check-item">
                  <span className="ls-item-icon-good">✓</span>
                  <span>Canon plano mensual predecible y transparente</span>
                </div>
                <div className="ls-check-item">
                  <span className="ls-item-icon-good">✓</span>
                  <span>Los datos, teléfonos y pedidos son 100% de tu local</span>
                </div>
                <div className="ls-check-item">
                  <span className="ls-item-icon-good">✓</span>
                  <span>Cobro directo e instantáneo a tu cuenta bancaria</span>
                </div>
                <div className="ls-check-item">
                  <span className="ls-item-icon-good">✓</span>
                  <span>Flota DosRuedas activa con Modo Lluvia garantizado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Simulador financiero mensual */}
          <div className="ls-simulator-bar">
            <div className="ls-sim-metric">
              <span className="ls-sim-label">Ventas Mensuales Ejemplo</span>
              <span className="ls-sim-val">$ 12.000.000 ARS</span>
            </div>

            <div style={{ width: 1, height: 40, background: "rgba(196,235,211,0.15)" }} />

            <div className="ls-sim-metric">
              <span className="ls-sim-label">Comisión que te quitaban</span>
              <span className="ls-sim-val" style={{ color: "var(--md-red)" }}>−$ 4.200.000 ARS</span>
            </div>

            <div style={{ width: 1, height: 40, background: "rgba(196,235,211,0.15)" }} />

            <div className="ls-sim-metric">
              <span className="ls-sim-label">Recuperado con MarDelivery</span>
              <span className="ls-sim-val ls-sim-saved">+$ 4.200.000 ARS / mes</span>
            </div>

            <div style={{ width: 1, height: 40, background: "rgba(196,235,211,0.15)" }} />

            <div className="ls-sim-metric">
              <span className="ls-sim-label">Ahorro Anual Proyectado</span>
              <span className="ls-sim-val" style={{ color: "var(--md-gold)" }}>$ 50.400.000 ARS</span>
            </div>
          </div>
        </div>

        <div />
      </div>
    );
  }

  // Step 2: Mockup interactivo Carta Digital QR
  if (step === 2) {
    return (
      <div className="ls-container">
        <div className="ls-ambient-glow" />

        <div className="ls-kicker">
          <span className="ls-kicker-dot" />
          <span>Experiencia Web Ultrarrápida · Carta QR</span>
        </div>

        <div className="ls-step2-grid">
          <div className="ls-qr-sidebar">
            <h1 className="ls-qr-headline">
              Tus comensales piden en{" "}
              <span className="ls-qr-highlight">segundos</span> sin bajar apps
            </h1>

            <div className="ls-qr-card-wrapper">
              <div className="ls-qr-visual-box">
                <div className="ls-qr-scan-line" />
                <svg
                  className="ls-qr-svg"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Patrón QR decorativo */}
                  <rect x="10" y="10" width="28" height="28" rx="4" stroke="#031811" strokeWidth="6" />
                  <rect x="19" y="19" width="10" height="10" fill="#031811" />
                  <rect x="62" y="10" width="28" height="28" rx="4" stroke="#031811" strokeWidth="6" />
                  <rect x="71" y="19" width="10" height="10" fill="#031811" />
                  <rect x="10" y="62" width="28" height="28" rx="4" stroke="#031811" strokeWidth="6" />
                  <rect x="19" y="71" width="10" height="10" fill="#031811" />

                  <rect x="46" y="15" width="8" height="18" fill="#031811" />
                  <rect x="46" y="44" width="8" height="8" fill="#35d07f" />
                  <rect x="15" y="46" width="18" height="8" fill="#031811" />
                  <rect x="62" y="48" width="14" height="8" fill="#031811" />
                  <rect x="80" y="48" width="10" height="18" fill="#031811" />
                  <rect x="46" y="72" width="18" height="8" fill="#031811" />
                  <rect x="70" y="72" width="20" height="18" fill="#031811" />
                </svg>
              </div>

              <div className="ls-qr-bullets">
                <div className="ls-bullet-item">
                  <span className="ls-bullet-dot" />
                  <span>Escaneo en mesa 4 o bio de Instagram</span>
                </div>
                <div className="ls-bullet-item">
                  <span className="ls-bullet-dot" />
                  <span>Carga ultrarrápida en 0.4s (Web App)</span>
                </div>
                <div className="ls-bullet-item">
                  <span className="ls-bullet-dot" />
                  <span>Modificadores de cocción y salsas en 1 click</span>
                </div>
                <div className="ls-bullet-item">
                  <span className="ls-bullet-dot" />
                  <span>Sin registros tediosos ni spam de cupones</span>
                </div>
              </div>
            </div>
          </div>

          {/* Smartphone Mockup */}
          <div className="ls-phone-frame">
            <div className="ls-phone-notch" />

            <div className="ls-phone-header">
              <div>
                <div className="ls-phone-store-name">Antares Gourmet · Güemes</div>
                <div style={{ fontSize: 11, color: "var(--text-mute)" }}>Mar del Plata · Mesa 04</div>
              </div>
              <span className="ls-phone-store-status">🟢 Cocina Activa</span>
            </div>

            <div className="ls-phone-tabs">
              <span className="ls-phone-tab ls-tab-active">🍔 Smash Burgers</span>
              <span className="ls-phone-tab ls-tab-inactive">🍕 Pizzas Horno</span>
              <span className="ls-phone-tab ls-tab-inactive">🍺 Cervezas IPA</span>
            </div>

            <div className="ls-phone-body">
              {/* Item 1: Burger */}
              <div className="ls-menu-card">
                <img
                  src="/assets/burger-gourmet.jpg"
                  alt="Smash Marplatense Doble"
                  className="ls-menu-thumb"
                />
                <div className="ls-menu-info">
                  <h4 className="ls-menu-title">Smash Marplatense Doble</h4>
                  <p className="ls-menu-desc">Doble medallón novillo 120g, cheddar, cebolla crispy.</p>
                  <div className="ls-menu-bottom">
                    <span className="ls-menu-price">$ 8.500</span>
                    <button className="ls-menu-btn">+ Agregar</button>
                  </div>
                </div>
              </div>

              {/* Item 2: Pizza */}
              <div className="ls-menu-card">
                <img
                  src="/assets/pizza-artesanal.jpg"
                  alt="Margherita Costera"
                  className="ls-menu-thumb"
                />
                <div className="ls-menu-info">
                  <h4 className="ls-menu-title">Margherita Costera</h4>
                  <p className="ls-menu-desc">Fior di latte, pomodoro italiano, albahaca de quintas.</p>
                  <div className="ls-menu-bottom">
                    <span className="ls-menu-price">$ 11.200</span>
                    <button className="ls-menu-btn">+ Agregar</button>
                  </div>
                </div>
              </div>

              {/* Item 3: Beer */}
              <div className="ls-menu-card">
                <img
                  src="/assets/cerveza-tirada.jpg"
                  alt="IPA Playa Grande"
                  className="ls-menu-thumb"
                />
                <div className="ls-menu-info">
                  <h4 className="ls-menu-title">IPA Playa Grande (Pinta)</h4>
                  <p className="ls-menu-desc">Tirada artesanal, lúpulos frescos cítricos, 5.8% ABV.</p>
                  <div className="ls-menu-bottom">
                    <span className="ls-menu-price">$ 4.200</span>
                    <button className="ls-menu-btn">+ Agregar</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="ls-phone-checkout">
              <div>
                <div className="ls-checkout-summary">1x Smash Doble + 1x IPA</div>
                <div className="ls-checkout-price">$ 12.700 ARS</div>
              </div>
              <button className="ls-checkout-btn">Pedir sin comisión →</button>
            </div>
          </div>
        </div>

        <div />
      </div>
    );
  }

  // Step 3: Diagrama de flujo continuo
  if (step === 3) {
    return (
      <div className="ls-container">
        <div className="ls-ambient-glow" />

        <div className="ls-kicker">
          <span className="ls-kicker-dot" />
          <span>Flujo Operativo Integrado · Sin Intermediarios</span>
        </div>

        <div className="ls-step3-container">
          <div className="ls-step3-header">
            <h1 className="ls-step3-title">
              De la mesa a la cocina y a la calle en un solo pulso
            </h1>
            <p className="ls-step3-sub">
              Toda la cadena de valor conectada directamente sin servidores en Silicon Valley ni cobros fantasmas.
            </p>
          </div>

          <div className="ls-pipeline-track">
            <div className="ls-pipeline-connector-line" />
            <div className="ls-pipeline-connector-pulse" />

            {/* Nodo 1 */}
            <div className="ls-pipe-node ls-node-active">
              <span className="ls-node-badge-num">01</span>
              <div className="ls-node-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12" y2="18.01" />
                </svg>
              </div>
              <h3 className="ls-node-name">Escaneo & Pedido</h3>
              <p className="ls-node-detail">Comensal elige opciones en la Carta QR desde su teléfono.</p>
              <span className="ls-node-tag">21:14:02 hs</span>
            </div>

            {/* Nodo 2 */}
            <div className="ls-pipe-node ls-node-active">
              <span className="ls-node-badge-num">02</span>
              <div className="ls-node-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                  <line x1="6" y1="17" x2="18" y2="17" />
                </svg>
              </div>
              <h3 className="ls-node-name">KDS en Cocina</h3>
              <p className="ls-node-detail">Comanda entra directa a la pantalla de cocina y despachador.</p>
              <span className="ls-node-tag">Marcha: 8 min</span>
            </div>

            {/* Nodo 3 */}
            <div className="ls-pipe-node ls-node-active">
              <span className="ls-node-badge-num">03</span>
              <div className="ls-node-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18.5" cy="17.5" r="3.5" />
                  <circle cx="5.5" cy="17.5" r="3.5" />
                  <circle cx="15" cy="5" r="1" />
                  <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                </svg>
              </div>
              <h3 className="ls-node-name">Moto DosRuedas</h3>
              <p className="ls-node-detail">Chofer local con caja térmica homologada y GPS en tiempo real.</p>
              <span className="ls-node-tag">En Ruta · Lucas M.</span>
            </div>

            {/* Nodo 4 */}
            <div className="ls-pipe-node ls-node-active">
              <span className="ls-node-badge-num">04</span>
              <div className="ls-node-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="ls-node-name">Entrega Caliente</h3>
              <p className="ls-node-detail">Comida perfecta en mano del cliente en menos de 30 minutos.</p>
              <span className="ls-node-tag">Promedio: 26 min</span>
            </div>
          </div>

          <div className="ls-pipeline-footer">
            <div className="ls-footer-item">
              <span className="ls-footer-dot" />
              <span>Cero intermediación financiera</span>
            </div>
            <div className="ls-footer-item">
              <span className="ls-footer-dot" />
              <span>Base de comensales 100% privada para el restaurante</span>
            </div>
            <div className="ls-footer-item">
              <span className="ls-footer-dot" />
              <span>Flota profesional marplatense con seguro de bulto</span>
            </div>
          </div>
        </div>

        <div />
      </div>
    );
  }

  return null;
}
