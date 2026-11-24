import type { TrafficSignCode } from '../types/exam';

interface TrafficSignProps {
  code: TrafficSignCode;
}

const SIGN_LABELS: Record<TrafficSignCode, string> = {
  'R-1': 'Placa R-1: Parada obrigatória',
  'R-2': 'Placa R-2: Dê a preferência',
  'R-6a': 'Placa R-6a: Proibido estacionar',
  'R-6c': 'Placa R-6c: Proibido parar e estacionar',
  'R-7': 'Placa R-7: Proibido ultrapassar',
  'R-15': 'Placa R-15: Altura máxima permitida 4,5 metros',
  'R-19': 'Placa R-19: Velocidade máxima permitida 60 km/h',
  'R-25a': 'Placa R-25a: Vire à esquerda',
  'R-27': 'Placa R-27: Ônibus, caminhões e veículos de grande porte mantenham-se à direita',
  'R-32': 'Placa R-32: Circulação exclusiva de ônibus',
  'A-18': 'Placa A-18: Saliência ou lombada',
  'A-20a': 'Placa A-20a: Declive acentuado',
  'A-28': 'Placa A-28: Pista escorregadia',
  'A-30a': 'Placa A-30a: Trânsito de ciclistas',
  'A-32b': 'Placa A-32b: Passagem sinalizada de pedestres',
  'A-33a': 'Placa A-33a: Área escolar',
};

function RegCircle({ children }: { children: React.ReactNode }) {
  return (
    <g>
      <circle cx="60" cy="60" r="54" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
      {children}
    </g>
  );
}

function WarnDiamond({ children }: { children: React.ReactNode }) {
  return (
    <g>
      <polygon
        points="60,6 114,60 60,114 6,60"
        fill="#FACC15"
        stroke="#111827"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <polygon
        points="60,13 107,60 60,107 13,60"
        fill="none"
        stroke="#111827"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {children}
    </g>
  );
}

export function TrafficSign({ code }: TrafficSignProps) {
  const label = SIGN_LABELS[code];

  return (
    <figure className="inline-flex flex-col items-center rounded border border-[#CBD5E1] bg-[#F8FAFC] p-3">
      <svg
        viewBox="0 0 120 120"
        className="h-28 w-28 sm:h-32 sm:w-32"
        role="img"
        aria-label={label}
      >
        {code === 'R-1' && (
          <g>
            <polygon
              points="37,8 83,8 112,37 112,83 83,112 37,112 8,83 8,37"
              fill="#DC2626"
              stroke="#FFFFFF"
              strokeWidth="3"
            />
            <polygon
              points="39,13 81,13 107,39 107,81 81,107 39,107 13,81 13,39"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
            />
            <text
              x="60"
              y="69"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="26"
              fontWeight="700"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              PARE
            </text>
          </g>
        )}

        {code === 'R-2' && (
          <polygon
            points="10,18 110,18 60,106"
            fill="#FFFFFF"
            stroke="#DC2626"
            strokeWidth="12"
            strokeLinejoin="round"
          />
        )}

        {code === 'R-6a' && (
          <RegCircle>
            <text
              x="60"
              y="79"
              textAnchor="middle"
              fill="#111827"
              fontSize="54"
              fontWeight="700"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              E
            </text>
            <line x1="25" y1="25" x2="95" y2="95" stroke="#DC2626" strokeWidth="9" />
          </RegCircle>
        )}

        {code === 'R-6c' && (
          <RegCircle>
            <text
              x="60"
              y="79"
              textAnchor="middle"
              fill="#111827"
              fontSize="54"
              fontWeight="700"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              E
            </text>
            <line x1="25" y1="25" x2="95" y2="95" stroke="#DC2626" strokeWidth="9" />
            <line x1="95" y1="25" x2="25" y2="95" stroke="#DC2626" strokeWidth="9" />
          </RegCircle>
        )}

        {code === 'R-7' && (
          <RegCircle>
            {/* Left car overtaking (red) */}
            <rect x="27" y="47" width="24" height="28" rx="4" fill="#DC2626" />
            <rect x="31" y="42" width="16" height="9" rx="2" fill="#DC2626" />
            <rect x="30" y="75" width="5" height="6" fill="#DC2626" />
            <rect x="43" y="75" width="5" height="6" fill="#DC2626" />
            {/* Right car (black) */}
            <rect x="69" y="47" width="24" height="28" rx="4" fill="#111827" />
            <rect x="73" y="42" width="16" height="9" rx="2" fill="#111827" />
            <rect x="72" y="75" width="5" height="6" fill="#111827" />
            <rect x="85" y="75" width="5" height="6" fill="#111827" />
            <line x1="25" y1="25" x2="95" y2="95" stroke="#DC2626" strokeWidth="9" />
          </RegCircle>
        )}

        {code === 'R-15' && (
          <RegCircle>
            <polygon points="52,18 68,18 60,31" fill="#111827" />
            <polygon points="52,102 68,102 60,89" fill="#111827" />
            <text
              x="60"
              y="67"
              textAnchor="middle"
              fill="#111827"
              fontSize="24"
              fontWeight="700"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              4,5 m
            </text>
          </RegCircle>
        )}

        {code === 'R-19' && (
          <RegCircle>
            <text
              x="60"
              y="66"
              textAnchor="middle"
              fill="#111827"
              fontSize="38"
              fontWeight="700"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              60
            </text>
            <text
              x="60"
              y="88"
              textAnchor="middle"
              fill="#111827"
              fontSize="15"
              fontWeight="700"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              km/h
            </text>
          </RegCircle>
        )}

        {code === 'R-25a' && (
          <RegCircle>
            <path
              d="M72 88 V54 H44"
              fill="none"
              stroke="#111827"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polygon points="27,54 49,38 49,70" fill="#111827" />
          </RegCircle>
        )}

        {code === 'R-27' && (
          <RegCircle>
            {/* Dashed lane divider */}
            <line
              x1="46"
              y1="26"
              x2="46"
              y2="94"
              stroke="#111827"
              strokeWidth="3"
              strokeDasharray="6 5"
            />
            {/* Arrow on right side keeping right */}
            <path
              d="M27 72 C27 56 36 52 50 52"
              fill="none"
              stroke="#111827"
              strokeWidth="4"
            />
            {/* Truck/bus icon on right lane */}
            <rect x="57" y="39" width="32" height="36" rx="4" fill="#111827" />
            <rect x="61" y="44" width="24" height="12" rx="1" fill="#FFFFFF" />
            <circle cx="64" cy="79" r="4" fill="#111827" />
            <circle cx="82" cy="79" r="4" fill="#111827" />
            <polygon points="48,79 34,79 34,69 24,82 34,94 34,84 48,84" fill="#111827" />
          </RegCircle>
        )}

        {code === 'R-32' && (
          <RegCircle>
            {/* Front view of bus */}
            <rect x="34" y="30" width="52" height="50" rx="7" fill="#111827" />
            <rect x="40" y="38" width="40" height="20" rx="2" fill="#FFFFFF" />
            <circle cx="44" cy="69" r="4" fill="#FFFFFF" />
            <circle cx="76" cy="69" r="4" fill="#FFFFFF" />
            <rect x="40" y="80" width="9" height="8" rx="1.5" fill="#111827" />
            <rect x="71" y="80" width="9" height="8" rx="1.5" fill="#111827" />
          </RegCircle>
        )}

        {code === 'A-18' && (
          <WarnDiamond>
            <path
              d="M28 72 H43 Q60 44 77 72 H92"
              fill="#111827"
              stroke="#111827"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </WarnDiamond>
        )}

        {code === 'A-20a' && (
          <WarnDiamond>
            {/* Steep descent triangle */}
            <polygon points="28,84 92,84 28,48" fill="#111827" />
            {/* Vehicle descending */}
            <g transform="translate(52,38) rotate(29)">
              <rect x="0" y="0" width="28" height="14" rx="2" fill="#111827" />
              <circle cx="6" cy="15" r="3" fill="#111827" />
              <circle cx="22" cy="15" r="3" fill="#111827" />
            </g>
          </WarnDiamond>
        )}

        {code === 'A-28' && (
          <WarnDiamond>
            {/* Car skidding with curved tire tracks */}
            <rect x="48" y="34" width="24" height="16" rx="3" fill="#111827" />
            <rect x="52" y="37" width="16" height="6" fill="#FACC15" />
            <path
              d="M46 53 C38 63 58 70 42 84"
              fill="none"
              stroke="#111827"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M72 53 C64 63 84 70 68 84"
              fill="none"
              stroke="#111827"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </WarnDiamond>
        )}

        {code === 'A-30a' && (
          <WarnDiamond>
            <circle cx="42" cy="70" r="11" fill="none" stroke="#111827" strokeWidth="4" />
            <circle cx="78" cy="70" r="11" fill="none" stroke="#111827" strokeWidth="4" />
            <path
              d="M42 70 L56 54 H70 L78 70 M56 54 L60 70 H42"
              fill="none"
              stroke="#111827"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <circle cx="61" cy="39" r="5" fill="#111827" />
          </WarnDiamond>
        )}

        {code === 'A-32b' && (
          <WarnDiamond>
            {/* Pedestrian on crosswalk */}
            <circle cx="60" cy="34" r="6" fill="#111827" />
            <path
              d="M60 41 L58 60 L49 78 M58 60 L69 78 M47 52 L60 46 L73 54"
              fill="none"
              stroke="#111827"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="34" y="83" width="10" height="5" fill="#111827" />
            <rect x="50" y="83" width="10" height="5" fill="#111827" />
            <rect x="66" y="83" width="10" height="5" fill="#111827" />
            <rect x="82" y="83" width="8" height="5" fill="#111827" />
          </WarnDiamond>
        )}

        {code === 'A-33a' && (
          <WarnDiamond>
            {/* Adult and child crossing */}
            <circle cx="48" cy="36" r="5.5" fill="#111827" />
            <path
              d="M48 43 L46 65 L39 84 M46 65 L54 84 M37 54 L48 47 L62 56"
              fill="none"
              stroke="#111827"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="71" cy="48" r="4.5" fill="#111827" />
            <path
              d="M71 54 L70 70 L65 84 M70 70 L76 84 M62 56 L71 58 L79 65"
              fill="none"
              stroke="#111827"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </WarnDiamond>
        )}
      </svg>
      <figcaption className="font-mono-terminal mt-1.5 text-terminal-small font-semibold text-[#374151]">
        Sinal {code}
      </figcaption>
    </figure>
  );
}
