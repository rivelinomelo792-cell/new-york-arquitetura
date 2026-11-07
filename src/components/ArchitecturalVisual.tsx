import React from 'react';

interface ArchitecturalVisualProps {
  type: 'concert-hall' | 'paris-care' | 'london-hotel' | 'sao-paulo-villa' | 'concept-bw';
  className?: string;
  overlayOpacity?: string;
}

export const ArchitecturalVisual: React.FC<ArchitecturalVisualProps> = ({
  type,
  className = '',
  overlayOpacity = 'bg-black/35',
}) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#141414] select-none ${className}`}>
      {type === 'concert-hall' && (
        <svg
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full scale-[1.03] transition-transform duration-1000 ease-out hover:scale-105"
        >
          <defs>
            <linearGradient id="chSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2c3035" />
              <stop offset="40%" stopColor="#1e2124" />
              <stop offset="100%" stopColor="#121316" />
            </linearGradient>
            <linearGradient id="chGoldGlow" x1="0.3" y1="0.2" x2="0.8" y2="0.9">
              <stop offset="0%" stopColor="#e3ca9b" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c5a880" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#121212" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="chGlass1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3d434a" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#25292e" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#14171a" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="chSteel" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8d949c" />
              <stop offset="50%" stopColor="#c8ced4" />
              <stop offset="100%" stopColor="#555a60" />
            </linearGradient>
            <radialGradient id="chInteriorLight" cx="65%" cy="55%" r="45%">
              <stop offset="0%" stopColor="#ffe2b0" stopOpacity="0.35" />
              <stop offset="40%" stopColor="#c5a880" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Sky / Atmospheric backdrop */}
          <rect width="1200" height="800" fill="url(#chSky)" />

          {/* Distant skyline contours */}
          <path
            d="M 0,550 L 150,530 L 150,560 L 260,540 L 320,500 L 370,550 L 480,510 L 520,545 L 750,530 L 880,480 L 920,520 L 1200,510 L 1200,800 L 0,800 Z"
            fill="#0f1114"
            opacity="0.8"
          />

          {/* Warm interior lighting through glass */}
          <circle cx="750" cy="450" r="420" fill="url(#chInteriorLight)" />

          {/* Massive organic curved concert hall shell */}
          <path
            d="M 1200,800 L 350,800 C 420,680 480,520 540,430 C 650,280 820,180 1200,140 Z"
            fill="url(#chGlass1)"
          />

          {/* Dramatic foreground swooping steel rib arch (reminiscent of go.arch concert hall) */}
          <path
            d="M 0,0 C 250,50 450,220 520,450 C 580,640 680,740 1200,800 L 0,800 Z"
            fill="#181c20"
            opacity="0.9"
          />

          {/* Curved architectural mullions / glass structural grid */}
          <path
            d="M 180,0 C 360,180 480,380 540,800"
            stroke="url(#chSteel)"
            strokeWidth="3.5"
            fill="none"
            opacity="0.65"
          />
          <path
            d="M 280,0 C 440,160 560,340 660,800"
            stroke="url(#chSteel)"
            strokeWidth="3"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M 380,0 C 530,150 670,320 800,800"
            stroke="url(#chSteel)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M 500,0 C 640,130 800,290 960,800"
            stroke="url(#chSteel)"
            strokeWidth="2"
            fill="none"
            opacity="0.45"
          />
          <path
            d="M 680,0 C 800,120 950,260 1150,800"
            stroke="url(#chSteel)"
            strokeWidth="1.8"
            fill="none"
            opacity="0.4"
          />

          {/* Horizontal parametric contour rings */}
          <path
            d="M 100,200 C 380,240 700,220 1200,160"
            stroke="#c5a880"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M 180,380 C 450,420 820,380 1200,320"
            stroke="url(#chSteel)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M 280,560 C 540,580 880,520 1200,460"
            stroke="url(#chSteel)"
            strokeWidth="2.2"
            fill="none"
            opacity="0.55"
          />

          {/* Foreground plaza reflection / polished granite pavement */}
          <polygon
            points="0,720 1200,680 1200,800 0,800"
            fill="#0d0e10"
          />
          <line x1="0" y1="720" x2="1200" y2="680" stroke="#c5a880" strokeWidth="1" opacity="0.3" />
        </svg>
      )}

      {type === 'paris-care' && (
        <svg
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full scale-[1.03] transition-transform duration-1000 ease-out hover:scale-105"
        >
          <defs>
            <linearGradient id="parisSky" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1f2329" />
              <stop offset="50%" stopColor="#15171a" />
              <stop offset="100%" stopColor="#0c0d0e" />
            </linearGradient>
            <linearGradient id="concreteGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6e757d" />
              <stop offset="50%" stopColor="#9da3aa" />
              <stop offset="100%" stopColor="#3d4247" />
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#parisSky)" />
          {/* Sweeping dynamic residential canopy */}
          <path
            d="M 0,200 C 400,240 700,100 1200,280 L 1200,750 C 800,650 400,720 0,680 Z"
            fill="#1c1f24"
          />
          <path
            d="M 0,320 C 350,380 750,220 1200,420 L 1200,560 C 700,440 300,520 0,460 Z"
            fill="url(#concreteGrad)"
            opacity="0.4"
          />
          {/* Structural glass cantilevers & balconies */}
          <path
            d="M 120,400 L 480,450 L 460,520 L 100,470 Z"
            fill="#293038"
            stroke="#c5a880"
            strokeWidth="1.2"
            opacity="0.8"
          />
          <path
            d="M 520,380 L 920,350 L 900,430 L 500,460 Z"
            fill="#1e2329"
            stroke="#9ba2aa"
            strokeWidth="1.2"
            opacity="0.7"
          />
          {/* Vertical fins */}
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={i}
              x1={150 + i * 65}
              y1={300 + (i % 3) * 15}
              x2={170 + i * 65}
              y2={580 + (i % 4) * 10}
              stroke="#68707a"
              strokeWidth="2.5"
              opacity="0.45"
            />
          ))}
          <polygon points="0,680 1200,640 1200,800 0,800" fill="#0b0c0d" />
        </svg>
      )}

      {type === 'london-hotel' && (
        <svg
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full scale-[1.03] transition-transform duration-1000 ease-out hover:scale-105"
        >
          <defs>
            <linearGradient id="hotelSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1c20" />
              <stop offset="100%" stopColor="#0d0e10" />
            </linearGradient>
            <linearGradient id="bronzeReflect" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#544330" />
              <stop offset="50%" stopColor="#c5a880" />
              <stop offset="100%" stopColor="#2e251a" />
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#hotelSky)" />
          {/* Tower 1 */}
          <polygon points="200,100 480,180 440,780 160,700" fill="#181a1d" stroke="#33383f" strokeWidth="2" />
          {/* Tower 2 with faceted glass & bronze accents */}
          <polygon points="500,60 880,120 840,800 460,780" fill="#20242a" stroke="#464d57" strokeWidth="2" />
          <polygon points="680,100 860,130 820,790 640,760" fill="url(#bronzeReflect)" opacity="0.35" />
          {/* Windows / curtain wall grid */}
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={i}
              x1={500}
              y1={120 + i * 36}
              x2={860}
              y2={150 + i * 36}
              stroke="#5a636f"
              strokeWidth="1.2"
              opacity="0.5"
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`vert-${i}`}
              x1={520 + i * 34}
              y1={80}
              x2={490 + i * 34}
              y2={790}
              stroke="#c5a880"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}
        </svg>
      )}

      {type === 'sao-paulo-villa' && (
        <svg
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full scale-[1.03] transition-transform duration-1000 ease-out hover:scale-105"
        >
          <defs>
            <linearGradient id="interiorAmbience" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#252422" />
              <stop offset="60%" stopColor="#1a1816" />
              <stop offset="100%" stopColor="#0e0d0c" />
            </linearGradient>
            <radialGradient id="lampGlow" cx="50%" cy="30%" r="40%">
              <stop offset="0%" stopColor="#ebd6b5" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#c5a880" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#interiorAmbience)" />
          {/* Ceiling recessed light */}
          <circle cx="600" cy="180" r="300" fill="url(#lampGlow)" />
          {/* Architectural floating ceiling */}
          <polygon points="100,80 1100,80 1020,180 180,180" fill="#161514" stroke="#c5a880" strokeWidth="1" opacity="0.6" />
          {/* Floor to ceiling window showing landscape/water */}
          <rect x="250" y="180" width="700" height="340" fill="#1b2024" stroke="#3d444d" strokeWidth="2" />
          {/* Reflection of trees / garden */}
          <path d="M 280,500 C 350,380 420,460 480,360 C 560,450 640,340 720,440 C 800,370 880,480 940,510 Z" fill="#121815" opacity="0.65" />
          {/* Minimalist sofa / lounger silhouette */}
          <rect x="360" y="520" width="480" height="80" rx="6" fill="#2d2925" stroke="#4a423a" strokeWidth="1.5" />
          <rect x="420" y="470" width="360" height="60" rx="4" fill="#38332d" />
          {/* Dark marble low table */}
          <rect x="440" y="620" width="320" height="30" fill="#171717" stroke="#c5a880" strokeWidth="1" />
          {/* Polished stone floor reflection */}
          <polygon points="0,660 1200,660 1200,800 0,800" fill="#0d0c0b" />
          <line x1="0" y1="660" x2="1200" y2="660" stroke="#c5a880" strokeWidth="1" opacity="0.3" />
        </svg>
      )}

      {type === 'concept-bw' && (
        <svg
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full scale-[1.02] transition-transform duration-1000 ease-out hover:scale-108"
        >
          <rect width="800" height="800" fill="#0a0a0a" />
          {/* Black & White parametric acoustic shell spirals (inspired by the about section in go.arch) */}
          <g transform="translate(400, 400)">
            {Array.from({ length: 32 }).map((_, i) => {
              const angle = (i * 11.25 * Math.PI) / 180;
              const r1 = 60 + i * 9;
              const r2 = 120 + i * 14;
              const x1 = Math.cos(angle) * r1;
              const y1 = Math.sin(angle) * r1;
              const x2 = Math.cos(angle + 0.8) * r2;
              const y2 = Math.sin(angle + 0.8) * r2;
              const isAccent = i % 4 === 0;
              return (
                <path
                  key={i}
                  d={`M ${x1},${y1} Q ${x2 * 0.9},${y2 * 0.9} ${Math.cos(angle + 1.6) * (r2 + 70)},${
                    Math.sin(angle + 1.6) * (r2 + 70)
                  }`}
                  stroke={isAccent ? '#ffffff' : '#888888'}
                  strokeWidth={isAccent ? 3.5 : 1.8}
                  fill="none"
                  opacity={0.3 + (i / 32) * 0.65}
                />
              );
            })}
          </g>
          {/* Subtle vignette frame */}
          <rect
            width="800"
            height="800"
            fill="none"
            stroke="#262626"
            strokeWidth="2"
          />
        </svg>
      )}

      {/* Film grain / dark luxury vignette overlay */}
      <div className={`absolute inset-0 pointer-events-none ${overlayOpacity} transition-opacity duration-500`} />
    </div>
  );
};
