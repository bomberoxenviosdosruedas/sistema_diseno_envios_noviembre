import type { ChapterStepProps } from "../../registry/types";
import { MaskReveal } from "../../components/MaskReveal";
import "./Chapter1.css";

export default function Chapter1({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene-pad ch1-scene">
        <header className="masthead">
          <span className="brand">DosRuedas</span>
          <span className="issue">Chapter 01 — Introducción</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ch1-body">
          <div className="kicker">Logística de Alta Velocidad · Mar del Plata</div>
          <h1 className="ch1-h1">
            <MaskReveal show duration={900}>
              <span className="serif-cn">Revolución&nbsp;</span>
            </MaskReveal>
            <MaskReveal show delay={300} duration={900}>
              <span className="serif-it ch1-em">Logística</span>
            </MaskReveal>
          </h1>
          <p className="ch1-p">
            El sistema de diseño integral y la plataforma web que redefine cómo se mueve Mar del Plata.
          </p>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene-pad ch1-scene">
        <header className="masthead">
          <span className="brand">DosRuedas</span>
          <span className="issue">Chapter 01 — Métricas</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ch1-split">
          <div className="hero-num">19</div>
          <div className="ch1-split-content">
            <div className="kicker">Ecosistema Especializado</div>
            <h2 className="ch1-h2">Landing Pages de Servicios</h2>
            <p className="ch1-p">
              Desde envíos exprés en moto hasta fulfillment 3PL y cuentas corporativas, todo centralizado en una plataforma de alto rendimiento.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="scene-pad ch1-scene">
      <header className="masthead">
        <span className="brand">DosRuedas</span>
        <span className="issue">Chapter 01 — Conversión</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

      <div className="ch1-body center text-center">
        <div className="kicker">Acceso Directo</div>
        <div className="pull-quote" style={{ maxWidth: "20ch", margin: "0 auto" }}>
          <MaskReveal show duration={900}>
            <span>Velocidad, </span>
          </MaskReveal>
          <MaskReveal show delay={300} duration={900}>
            <span className="ch1-em">confianza y </span>
          </MaskReveal>
          <MaskReveal show delay={600} duration={900}>
            <span>conversión.</span>
          </MaskReveal>
        </div>
        <div className="badge-mono is-accent" style={{ marginTop: "var(--space-5)" }}>
          Noviembre 2026 · Mar del Plata
        </div>
      </div>
    </div>
  );
}
