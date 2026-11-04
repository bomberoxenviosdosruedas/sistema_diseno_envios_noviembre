import type { PlaybackMode } from "../hooks/useAudioPlayer";
import "./AutoToggle.css";

interface Props {
  mode: PlaybackMode;
  onCycle(): void;
}

const LABEL: Record<PlaybackMode, string> = {
  manual: "MANUAL",
  audio: "AUDIO",
  auto: "AUTO",
};

export function AutoToggle({ mode, onCycle }: Props) {
  return (
    <div className="at-hover" data-no-advance>
      <button
        className={`at-btn at-${mode}`}
        onClick={(e) => {
          e.stopPropagation();
          onCycle();
        }}
        title="Cambiar modo de reproducción (M)"
      >
        <span className="at-dot" />
        <span className="at-label">{LABEL[mode]}</span>
      </button>
    </div>
  );
}
