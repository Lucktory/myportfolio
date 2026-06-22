interface Props { label: string; color: string }

export default function SkillBackground({ label, color }: Props) {
  const op = 0.14;

  if (label === 'iOS / Mobile') return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* iPhone body */}
      <rect x="30" y="10" width="60" height="100" rx="12" stroke={color} strokeWidth="3" opacity={op} />
      {/* Home indicator */}
      <rect x="48" y="102" width="24" height="3" rx="1.5" fill={color} opacity={op} />
      {/* Speaker */}
      <rect x="48" y="18" width="24" height="4" rx="2" fill={color} opacity={op} />
      {/* Screen */}
      <rect x="36" y="28" width="48" height="68" rx="4" fill={color} opacity={op * 0.6} />
      {/* App icons grid */}
      <rect x="42" y="34" width="12" height="12" rx="3" fill={color} opacity={op * 1.5} />
      <rect x="58" y="34" width="12" height="12" rx="3" fill={color} opacity={op * 1.5} />
      <rect x="74" y="34" width="12" height="12" rx="3" fill={color} opacity={op * 1.5} />
      <rect x="42" y="50" width="12" height="12" rx="3" fill={color} opacity={op * 1.5} />
      <rect x="58" y="50" width="12" height="12" rx="3" fill={color} opacity={op * 1.5} />
      <rect x="74" y="50" width="12" height="12" rx="3" fill={color} opacity={op * 1.5} />
      <rect x="42" y="66" width="12" height="12" rx="3" fill={color} opacity={op * 1.5} />
      <rect x="58" y="66" width="12" height="12" rx="3" fill={color} opacity={op * 1.5} />
      <rect x="74" y="66" width="12" height="12" rx="3" fill={color} opacity={op * 1.5} />
    </svg>
  );

  if (label === 'Web Frontend') return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Browser window */}
      <rect x="10" y="20" width="100" height="80" rx="8" stroke={color} strokeWidth="3" opacity={op} />
      {/* Title bar */}
      <rect x="10" y="20" width="100" height="18" rx="8" fill={color} opacity={op * 0.7} />
      <rect x="10" y="30" width="100" height="8" fill={color} opacity={op * 0.7} />
      {/* Traffic lights */}
      <circle cx="24" cy="29" r="3.5" fill={color} opacity={op * 2} />
      <circle cx="36" cy="29" r="3.5" fill={color} opacity={op * 2} />
      <circle cx="48" cy="29" r="3.5" fill={color} opacity={op * 2} />
      {/* Code lines */}
      <text x="18" y="55" fontFamily="monospace" fontSize="9" fill={color} opacity={op * 2.5}>{'<div>'}</text>
      <rect x="26" y="60" width="40" height="3" rx="1.5" fill={color} opacity={op * 2} />
      <rect x="26" y="67" width="55" height="3" rx="1.5" fill={color} opacity={op * 2} />
      <rect x="26" y="74" width="32" height="3" rx="1.5" fill={color} opacity={op * 2} />
      <text x="18" y="87" fontFamily="monospace" fontSize="9" fill={color} opacity={op * 2.5}>{'</div>'}</text>
    </svg>
  );

  if (label === 'Backend') return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Server rack */}
      <rect x="20" y="15" width="80" height="20" rx="4" stroke={color} strokeWidth="2.5" opacity={op} />
      <rect x="20" y="40" width="80" height="20" rx="4" stroke={color} strokeWidth="2.5" opacity={op} />
      <rect x="20" y="65" width="80" height="20" rx="4" stroke={color} strokeWidth="2.5" opacity={op} />
      <rect x="20" y="90" width="80" height="20" rx="4" stroke={color} strokeWidth="2.5" opacity={op} />
      {/* Status lights */}
      <circle cx="88" cy="25" r="3" fill={color} opacity={op * 2.5} />
      <circle cx="80" cy="25" r="3" fill={color} opacity={op * 2.5} />
      <circle cx="88" cy="50" r="3" fill={color} opacity={op * 2.5} />
      <circle cx="80" cy="50" r="3" fill={color} opacity={op * 2.5} />
      <circle cx="88" cy="75" r="3" fill={color} opacity={op * 2.5} />
      <circle cx="80" cy="75" r="3" fill={color} opacity={op * 2.5} />
      <circle cx="88" cy="100" r="3" fill={color} opacity={op * 2.5} />
      {/* Slot lines */}
      <rect x="28" y="22" width="36" height="3" rx="1" fill={color} opacity={op * 2} />
      <rect x="28" y="47" width="36" height="3" rx="1" fill={color} opacity={op * 2} />
      <rect x="28" y="72" width="36" height="3" rx="1" fill={color} opacity={op * 2} />
      <rect x="28" y="97" width="36" height="3" rx="1" fill={color} opacity={op * 2} />
    </svg>
  );

  if (label === 'Infrastructure') return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud shape */}
      <path d="M85 55 Q95 55 95 45 Q95 35 85 35 Q83 25 73 25 Q65 20 57 27 Q47 22 43 32 Q33 32 33 42 Q33 52 43 52 Z"
        stroke={color} strokeWidth="2.5" opacity={op} fill={color} fillOpacity={op * 0.5} />
      {/* Connection lines going down */}
      <line x1="45" y1="52" x2="30" y2="75" stroke={color} strokeWidth="1.5" opacity={op * 2} />
      <line x1="60" y1="52" x2="60" y2="75" stroke={color} strokeWidth="1.5" opacity={op * 2} />
      <line x1="75" y1="52" x2="90" y2="75" stroke={color} strokeWidth="1.5" opacity={op * 2} />
      {/* Nodes */}
      <rect x="20" y="75" width="20" height="16" rx="3" fill={color} opacity={op * 2} />
      <rect x="50" y="75" width="20" height="16" rx="3" fill={color} opacity={op * 2} />
      <rect x="80" y="75" width="20" height="16" rx="3" fill={color} opacity={op * 2} />
      {/* Sub connections */}
      <line x1="30" y1="91" x2="25" y2="108" stroke={color} strokeWidth="1.5" opacity={op * 2} />
      <line x1="60" y1="91" x2="60" y2="108" stroke={color} strokeWidth="1.5" opacity={op * 2} />
      <line x1="90" y1="91" x2="95" y2="108" stroke={color} strokeWidth="1.5" opacity={op * 2} />
    </svg>
  );

  if (label === 'Databases') return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* DB cylinder 1 */}
      <ellipse cx="60" cy="28" rx="30" ry="8" stroke={color} strokeWidth="2.5" opacity={op} />
      <line x1="30" y1="28" x2="30" y2="52" stroke={color} strokeWidth="2.5" opacity={op} />
      <line x1="90" y1="28" x2="90" y2="52" stroke={color} strokeWidth="2.5" opacity={op} />
      <ellipse cx="60" cy="52" rx="30" ry="8" stroke={color} strokeWidth="2.5" opacity={op} fill={color} fillOpacity={op * 0.5} />
      {/* DB cylinder 2 */}
      <ellipse cx="60" cy="60" rx="30" ry="8" stroke={color} strokeWidth="2.5" opacity={op} />
      <line x1="30" y1="60" x2="30" y2="84" stroke={color} strokeWidth="2.5" opacity={op} />
      <line x1="90" y1="60" x2="90" y2="84" stroke={color} strokeWidth="2.5" opacity={op} />
      <ellipse cx="60" cy="84" rx="30" ry="8" stroke={color} strokeWidth="2.5" opacity={op} fill={color} fillOpacity={op * 0.5} />
      {/* DB cylinder 3 */}
      <ellipse cx="60" cy="92" rx="30" ry="8" stroke={color} strokeWidth="2.5" opacity={op} />
      <line x1="30" y1="92" x2="30" y2="108" stroke={color} strokeWidth="2.5" opacity={op} />
      <line x1="90" y1="92" x2="90" y2="108" stroke={color} strokeWidth="2.5" opacity={op} />
      <ellipse cx="60" cy="108" rx="30" ry="8" stroke={color} strokeWidth="2.5" opacity={op} fill={color} fillOpacity={op * 0.4} />
    </svg>
  );

  if (label === 'Android') return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Android head */}
      <path d="M35 60 Q35 35 60 35 Q85 35 85 60 L85 80 Q85 88 77 88 L43 88 Q35 88 35 80 Z"
        stroke={color} strokeWidth="2.5" opacity={op} fill={color} fillOpacity={op * 0.4} />
      {/* Eyes */}
      <circle cx="48" cy="56" r="4" fill={color} opacity={op * 3} />
      <circle cx="72" cy="56" r="4" fill={color} opacity={op * 3} />
      {/* Antennae */}
      <line x1="47" y1="35" x2="38" y2="20" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity={op * 2} />
      <line x1="73" y1="35" x2="82" y2="20" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity={op * 2} />
      {/* Arms */}
      <rect x="18" y="60" width="14" height="26" rx="7" stroke={color} strokeWidth="2.5" opacity={op} />
      <rect x="88" y="60" width="14" height="26" rx="7" stroke={color} strokeWidth="2.5" opacity={op} />
      {/* Legs */}
      <rect x="40" y="88" width="14" height="22" rx="7" stroke={color} strokeWidth="2.5" opacity={op} />
      <rect x="66" y="88" width="14" height="22" rx="7" stroke={color} strokeWidth="2.5" opacity={op} />
    </svg>
  );

  if (label === 'Practices') return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* CI/CD circular arrows */}
      <path d="M60 20 A40 40 0 0 1 95 50" stroke={color} strokeWidth="3" strokeLinecap="round" opacity={op * 2} />
      <path d="M95 50 A40 40 0 0 1 60 90" stroke={color} strokeWidth="3" strokeLinecap="round" opacity={op * 2} />
      <path d="M60 90 A40 40 0 0 1 25 60" stroke={color} strokeWidth="3" strokeLinecap="round" opacity={op * 2} />
      <path d="M25 60 A40 40 0 0 1 55 20" stroke={color} strokeWidth="3" strokeLinecap="round" opacity={op * 2} />
      {/* Arrow heads */}
      <polygon points="95,45 100,55 90,53" fill={color} opacity={op * 2.5} />
      <polygon points="55,90 65,93 62,83" fill={color} opacity={op * 2.5} />
      {/* Center stages */}
      <circle cx="60" cy="55" r="14" stroke={color} strokeWidth="2" opacity={op} fill={color} fillOpacity={op * 0.4} />
      <rect x="54" y="49" width="12" height="4" rx="2" fill={color} opacity={op * 3} />
      <rect x="54" y="56" width="12" height="4" rx="2" fill={color} opacity={op * 3} />
      <rect x="54" y="63" width="12" height="4" rx="2" fill={color} opacity={op * 3} />
    </svg>
  );

  return null;
}
