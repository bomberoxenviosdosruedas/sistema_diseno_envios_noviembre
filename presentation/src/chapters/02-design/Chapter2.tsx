import type { ChapterStepProps } from "../../registry/types";
import { MaskReveal } from "../../components/MaskReveal";
import "./Chapter2.css";

export default function Chapter2({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene-pad ch2-scene">
        <header className="masthead">
          <span className="brand">DosRuedas</span>
          <span className="issue">Chapter 02 — Identidad Visual</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ch2-body">
          <div className="kicker">Paleta Cromática Oficial</div>
          <h1 className="ch2-h1">
            <MaskReveal show duration={900}>
              <span className="serif-cn">Bicolor de </span>
            </MaskReveal>
            <MaskReveal show delay={300} duration={900}>
              <span className="serif-it ch2-em">Alto Impacto</span>
            </MaskReveal>
          </h1>
          <div className="ch2-palette-row">
            <div className="ch2-color-card" style={{ background: "#0950F6", color: "#fff" }}>
              <span className="ch2-color-name">Azul Eléctrico</span>
              <span className="ch2-color-hex">#0950F6</span>
            </div>
            <div className="ch2-color-card" style={{ background: "#FFEC01", color: "#0950F6" }}>
              <span className="ch2-color-name">Amarillo Acento</span>
              <span className="ch2-color-hex">#FFEC01</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene-pad ch2-scene">
        <header className="masthead">
          <span className="brand">DosRuedas</span>
          <span className="issue">Chapter 02 — Tipografía</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ch2-body">
          <div className="kicker">Sistemas Tipográficos</div>
          <h2 className="ch2-h2">Anton · Bebas Neue · Outfit · Geist Mono</h2>
          <div className="ch2-grid-fonts">
            <div className="card" style={{ padding: "var(--space-5)" }}>
              <div className="label-mono">Titulares (H1/H2)</div>
              <div style={{ fontFamily: "Anton", fontSize: "36px", marginTop: "8px" }}>ANTON DISPLAY</div>
            </div>
            <div className="card" style={{ padding: "var(--space-5)" }}>
              <div className="label-mono">Botones &amp; Pills</div>
              <div style={{ fontFamily: "Bebas Neue", fontSize: "36px", marginTop: "8px" }}>BEBAS NEUE CTA</div>
            </div>
            <div className="card" style={{ padding: "var(--space-5)" }}>
              <div className="label-mono">Cuerpo de Texto</div>
              <div style={{ fontFamily: "Outfit", fontSize: "24px", fontWeight: "600", marginTop: "8px" }}>Outfit Sans</div>
            </div>
            <div className="card" style={{ padding: "var(--space-5)" }}>
              <div className="label-mono">Métricas &amp; Precios</div>
              <div className="mono" style={{ fontSize: "24px", fontWeight: "700", marginTop: "8px" }}>$4.500 / Zona</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="scene-pad ch2-scene">
      <header className="masthead">
        <span className="brand">DosRuedas</span>
        <span className="issue">Chapter 02 — Microinteracciones</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

      <div className="ch2-body center text-center">
        <div className="kicker">Componentes de Conversión</div>
        <div className="pull-quote" style={{ maxWidth: "24ch", margin: "0 auto" }}>
          <MaskReveal show duration={900}>
            <span>Botones píldora y </span>
          </MaskReveal>
          <MaskReveal show delay={300} duration={900}>
            <span className="ch2-em">efectos de elevación </span>
          </MaskReveal>
          <MaskReveal show delay={600} duration={900}>
            <span>cinemática.</span>
          </MaskReveal>
        </div>
        <div className="badge-mono is-accent" style={{ marginTop: "var(--space-5)" }}>
          .cta-nested-pill &amp; .kinetic-font-stretch
        </div>
      </div>
    </div>
  );
}
