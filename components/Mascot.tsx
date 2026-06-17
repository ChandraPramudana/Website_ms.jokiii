type MascotProps = {
  className?: string;
};

export default function Mascot({ className }: MascotProps) {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Maskot ms.jokiii, burung hantu lucu bertopi wisuda sedang membuka laptop"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BFE5FA" />
          <stop offset="100%" stopColor="#7BC4EA" />
        </linearGradient>
        <linearGradient id="headGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D7EEFA" />
          <stop offset="100%" stopColor="#A4D9F3" />
        </linearGradient>
      </defs>

      {/* shadow */}
      <ellipse cx="240" cy="440" rx="120" ry="14" fill="#234F70" opacity="0.08" />

      {/* books stack */}
      <rect x="118" y="402" width="246" height="26" rx="8" fill="#FFD45C" />
      <rect x="138" y="378" width="204" height="24" rx="8" fill="#52A9DA" />
      <rect
        x="152"
        y="356"
        width="176"
        height="22"
        rx="8"
        fill="#FFFFFF"
        stroke="#C3E7F8"
        strokeWidth="3"
      />

      {/* body */}
      <ellipse cx="240" cy="288" rx="118" ry="124" fill="url(#bodyGrad)" />

      {/* wings */}
      <ellipse
        cx="132"
        cy="312"
        rx="34"
        ry="54"
        fill="#52A9DA"
        transform="rotate(-18 132 312)"
      />
      <ellipse
        cx="348"
        cy="312"
        rx="34"
        ry="54"
        fill="#52A9DA"
        transform="rotate(18 348 312)"
      />

      {/* belly */}
      <ellipse cx="240" cy="306" rx="74" ry="88" fill="#F4FAFE" />

      {/* laptop */}
      <g>
        <rect x="172" y="338" width="136" height="12" rx="5" fill="#2B3A4A" />
        <rect
          x="178"
          y="276"
          width="124"
          height="64"
          rx="10"
          fill="#FFFFFF"
          stroke="#A4D9F3"
          strokeWidth="4"
        />
        {/* mini spss-style chart on screen */}
        <rect x="194" y="312" width="10" height="18" rx="2" fill="#A4D9F3" />
        <rect x="210" y="302" width="10" height="28" rx="2" fill="#52A9DA" />
        <rect x="226" y="294" width="10" height="36" rx="2" fill="#3A8BC0" />
        <rect x="242" y="306" width="10" height="24" rx="2" fill="#52A9DA" />
        <polyline
          points="194,300 210,288 226,292 242,280 258,286"
          fill="none"
          stroke="#FFC233"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* head */}
      <circle cx="240" cy="182" r="100" fill="url(#headGrad)" />

      {/* ear tufts */}
      <path
        d="M168 118 C160 96 178 78 198 86 C188 100 182 112 178 126 Z"
        fill="#7BC4EA"
      />
      <path
        d="M312 118 C320 96 302 78 282 86 C292 100 298 112 302 126 Z"
        fill="#7BC4EA"
      />

      {/* blush */}
      <ellipse cx="186" cy="212" rx="16" ry="10" fill="#FFC8C8" opacity="0.7" />
      <ellipse cx="294" cy="212" rx="16" ry="10" fill="#FFC8C8" opacity="0.7" />

      {/* eyes */}
      <circle cx="204" cy="178" r="38" fill="#FFFFFF" />
      <circle cx="276" cy="178" r="38" fill="#FFFFFF" />
      <circle cx="210" cy="182" r="17" fill="#2B3A4A" />
      <circle cx="270" cy="182" r="17" fill="#2B3A4A" />
      <circle cx="216" cy="174" r="5" fill="#FFFFFF" />
      <circle cx="276" cy="174" r="5" fill="#FFFFFF" />

      {/* eyebrow accents for cute expression */}
      <path
        d="M180 142 Q204 128 226 140"
        stroke="#3F5266"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M254 140 Q276 128 300 142"
        stroke="#3F5266"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* beak */}
      <path
        d="M228 206 Q240 224 252 206 Q240 216 228 206 Z"
        fill="#FFC233"
      />

      {/* graduation cap */}
      <g transform="translate(240 96)">
        <polygon
          points="-92,0 0,-34 92,0 0,34"
          fill="#234F70"
        />
        <rect x="-10" y="-2" width="20" height="20" rx="3" fill="#1A3A53" />
        <circle cx="0" cy="6" r="7" fill="#FFD45C" />
        <path
          d="M58 -6 Q78 14 64 40 Q58 30 52 38 Q66 16 50 -2 Z"
          fill="#FFD45C"
        />
      </g>

      {/* feet */}
      <ellipse cx="208" cy="406" rx="16" ry="9" fill="#FFC233" />
      <ellipse cx="272" cy="406" rx="16" ry="9" fill="#FFC233" />
    </svg>
  );
}
