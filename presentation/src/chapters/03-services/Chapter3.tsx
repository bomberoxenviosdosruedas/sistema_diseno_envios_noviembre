import type { ChapterStepProps } from "../../registry/types";
import { MaskReveal } from "../../components/MaskReveal";
import "./Chapter3.css";

export default function Chapter3({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene-pad ch3-scene">
        <header className="masthead">
          <span className="brand">DosRuedas</span>
          <span className="issue">Chapter 03 — Catálogo Logístico</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ch3-body">
          <div className="kicker">Ecosistema de 19 Landing Pages</div>
          <h1 className="ch3-h1">
            <MaskReveal show duration={900}>
              <span className="serif-cn">Soluciones </span>
            </MaskReveal>
            <MaskReveal show delay={300} duration={900}>
              <span className="serif-it ch3-em">Especializadas</span>
            </MaskReveal>
          </h1>
          <p className="ch3-p">
            Un despliegue de 19 páginas web diseñadas para cubrir cada necesidad logística en Mar del Plata.
          </p>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene-pad ch3-scene">
        <header className="masthead">
          <span className="brand">DosRuedas</span>
          <span className="issue">Chapter 03 — Última Milla</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ch3-body">
          <div className="kicker">Servicios Estrella</div>
          <h2 className="ch3-h2">Express &amp; LowCost</h2>
          <div className="ch3-grid">
            <div className="card" style={{ padding: "var(--space-5)" }}>
              <div className="badge-mono is-accent">Urgente &lt; 60 min</div>
              <div style={{ fontFamily: "Anton", fontSize: "32px", marginTop: "12px" }}>Envíos Express</div>
              <p className="ch3-p" style={{ marginTop: "8px" }}>Cadetería prioritaria punto a punto para documentos, llaves y urgencias urbanas.</p>
            </div>
            <div className="card" style={{ padding: "var(--space-5)" }}>
              <div className="badge-mono">Económico en el Día</div>
              <div style={{ fontFamily: "Anton", fontSize: "32px", marginTop: "12px" }}>Envíos LowCost</div>
              <p className="ch3-p" style={{ marginTop: "8px" }}>Reparto consolidado en franjas horarias optimizadas con tarifas altamente competitivas.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="scene-pad ch3-scene">
        <header className="masthead">
          <span className="brand">DosRuedas</span>
          <span className="issue">Chapter 03 — E-commerce</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ch3-body">
          <div className="kicker">Integración Oficial</div>
          <h2 className="ch3-h2">Mercado Envíos Flex</h2>
          <div className="card" style={{ padding: "var(--space-7)", display: "flex", flexDirection: "column", gap: "16px", marginTop: "var(--space-5)" }}>
            <div className="label-mono">Reputación Verde Asegurada</div>
            <div style={{ fontFamily: "Anton", fontSize: "48px" }}>Entregas el mismo día en Mar del Plata</div>
            <p className="ch3-p">
              Logística homologada para vendedores de Mercado Libre. Sincronización de rutas, retiro en tienda y entrega en puerta con rendición automática.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="scene-pad ch3-scene">
      <header className="masthead">
        <span className="brand">DosRuedas</span>
        <span className="issue">Chapter 03 — Corporativo &amp; 3PL</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

      <div className="ch3-body">
        <div className="kicker">Soluciones B2B</div>
        <h2 className="ch3-h2">Cuentas Corrientes, Fulfillment y Contrareembolso</h2>
        <div className="ch3-grid-3">
          <div className="card" style={{ padding: "var(--space-5)" }}>
            <div className="label-mono">Corporativo</div>
            <div style={{ fontFamily: "Bebas Neue", fontSize: "28px", marginTop: "8px" }}>Cuenta Corriente B2B</div>
            <p className="ch3-p" style={{ fontSize: "16px", marginTop: "8px" }}>Facturación mensual consolidada A o B y remito digital.</p>
          </div>
          <div className="card" style={{ padding: "var(--space-5)" }}>
            <div className="label-mono">Logística 3PL</div>
            <div style={{ fontFamily: "Bebas Neue", fontSize: "28px", marginTop: "8px" }}>Depósito &amp; Fulfillment</div>
            <p className="ch3-p" style={{ fontSize: "16px", marginTop: "8px" }}>Guardado seguro, picking, packing y despacho automático.</p>
          </div>
          <div className="card" style={{ padding: "var(--space-5)" }}>
            <div className="label-mono">Cobranzas</div>
            <div style={{ fontFamily: "Bebas Neue", fontSize: "28px", marginTop: "8px" }}>Contra Reembolso</div>
            <p className="ch3-p" style={{ fontSize: "16px", marginTop: "8px" }}>Cobro en destino en efectivo o transferencia con rendición inmediata.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
