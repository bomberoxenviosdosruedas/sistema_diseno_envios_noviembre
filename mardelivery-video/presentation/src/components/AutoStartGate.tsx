import "./AutoStartGate.css";

interface Props {
  visible: boolean;
  onStart(): void;
}

export function AutoStartGate({ visible, onStart }: Props) {
  if (!visible) return null;
  return (
    <div
      className="auto-gate"
      data-no-advance
      onClick={onStart}
      role="button"
      tabIndex={0}
    >
      <div className="auto-gate-card">
        <div className="auto-gate-kicker">AUTO PLAYBACK</div>
        <div className="auto-gate-title">Presioná ESPACIO para iniciar</div>
        <div className="auto-gate-sub">
          El audio avanza de manera sincronizada por paso.
          <br />
          Presioná <kbd>M</kbd> en cualquier momento para alternar modos.
        </div>
      </div>
    </div>
  );
}
