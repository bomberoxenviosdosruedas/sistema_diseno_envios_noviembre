import type { ChapterStepProps } from "../../registry/types";
import { MaskReveal } from "../../components/MaskReveal";
import "./Chapter4.css";

export default function Chapter4({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene-pad ch4-scene">
        <header className="masthead">
          <span className="brand">DosRuedas</span>
          <span className="issue">Chapter 04 — Rendimiento</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ch4-body">
          <div className="kicker">Arquitectura Web Moderna</div>
          <h1 className="ch4-h1">
            <MaskReveal show duration={900}>
              <span className="serif-cn">Cero </span>
            </MaskReveal>
            <MaskReveal show delay={300} duration={900}>
              <span className="serif-it ch4-em">Dependencias</span>
            </MaskReveal>
          </h1>
          <p className="ch4-p">
            HTML5 semántico puro y Tailwind CSS optimizado para una carga instantánea y rendimiento excepcional.
          </p>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene-pad ch4-scene">
        <header className="masthead">
          <span className="brand">DosRuedas</span>
          <span className="issue">Chapter 04 — Automatización</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ch4-split">
          <div className="hero-num">AI</div>
          <div className="ch4-split-content">
            <div className="kicker">Documentación Automatizada</div>
            <h2 className="ch4-h2">generate_repo_guide.js</h2>
            <p className="ch4-p">
              Scripts de automatización en Node.js que regeneran y sincronizan la guía técnica integral y la versión ejecutable interactiva en formato HTML y PDF.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="scene-pad ch4-scene">
      <header className="masthead">
        <span className="brand">DosRuedas</span>
        <span className="issue">Chapter 04 — Conclusión</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

      <div className="ch4-body center text-center">
        <div className="kicker">Envíos DosRuedas · 2026</div>
        <div className="pull-quote" style={{ maxWidth: "24ch", margin: "0 auto" }}>
          <MaskReveal show duration={900}>
            <span>El estándar de </span>
          </MaskReveal>
          <MaskReveal show delay={300} duration={900}>
            <span className="ch4-em">infraestructura logística </span>
          </MaskReveal>
          <MaskReveal show delay={600} duration={900}>
            <span>en Mar del Plata.</span>
          </MaskReveal>
        </div>
        <div className="badge-mono is-accent" style={{ marginTop: "var(--space-5)" }}>
          GitHub Repository · Sistema de Diseño
        </div>
      </div>
    </div>
  );
}
