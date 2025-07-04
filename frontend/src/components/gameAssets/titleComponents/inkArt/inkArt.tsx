import "./inkArt.scss";

export default function InkArt() {
  return (
    <div
      id="ink-border"
    >
    <div
      className="glitch-title"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 170 43"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="ink-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 8,20
            Q 9,15 5,20
            Q 0,35 30,21
            Q 80,0 110,21
            Q 150,43 160,21
            Q 150,0 110,21
            Q 80,43 30,21"
          stroke="#922C23"
          strokeWidth="5"
          fill="transparent" 
          filter="url(#ink-glow)"
        />
      </svg>
    </div>
    </div>
  );
}
