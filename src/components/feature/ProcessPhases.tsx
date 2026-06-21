import { processPhases } from "@/data/process";

export function ProcessPhases() {
  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      <ProcessArc />

      <ol className="flex flex-col">
        {processPhases.map((phase, index) => {
          const number = String(index + 1).padStart(2, "0");
          const isLast = index === processPhases.length - 1;
          return (
            <li
              key={phase.id}
              className="group relative grid grid-cols-[64px_1fr] items-start gap-x-5 gap-y-3 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[110px_220px_1fr] md:gap-x-10 md:py-10 lg:grid-cols-[140px_260px_1fr]"
            >
              <div className="relative flex flex-col items-start">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px]">
                  Phase
                </span>
                <span className="mt-1 font-display text-3xl leading-none text-foreground sm:text-4xl md:text-[2.75rem]">
                  {number}
                </span>
                {!isLast ? (
                  <span
                    aria-hidden
                    className="absolute left-3 top-14 hidden h-[calc(100%-2rem)] w-px bg-border md:block"
                  />
                ) : null}
              </div>

              <h3 className="flex items-baseline gap-3 font-display text-2xl leading-tight text-foreground sm:text-[1.75rem] md:text-[1.875rem]">
                <span
                  aria-hidden
                  className="inline-block size-2 translate-y-[-2px] bg-accent"
                />
                {phase.title}
              </h3>

              <p className="col-span-2 max-w-2xl text-base leading-relaxed text-foreground/85 md:col-span-1">
                {phase.body}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/**
 * Thin-line schematic of the engagement arc — a "map" of the six phases
 * sitting above the numbered list. Hidden on small screens where the line
 * would compress; appears from md upward.
 */
function ProcessArc() {
  // Six nodes evenly spaced across a 1200px viewBox.
  // Padding 60 each side; gaps of (1200 − 120) / 5 = 216.
  const positions = [60, 276, 492, 708, 924, 1140];
  const y = 56;

  const stroke = "var(--border-strong)";
  const accent = "var(--accent)";

  // Build the connecting path — slight wave for editorial feel.
  const pathD = positions
    .map((x, i) => {
      if (i === 0) return `M ${x} ${y}`;
      const prev = positions[i - 1];
      const mid = (prev + x) / 2;
      // Alternate small wave amplitude so the line isn't dead-flat.
      const dy = i % 2 === 0 ? -10 : 10;
      return `Q ${mid} ${y + dy}, ${x} ${y}`;
    })
    .join(" ");

  return (
    <figure
      role="img"
      aria-label="Process arc: a six-node line moving from listening, mapping, slicing, and surviving, through handoff, to staying reachable."
      className="hidden md:block"
    >
      <svg
        viewBox="0 0 1200 140"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* Connecting wave line */}
        <path d={pathD} stroke={stroke} strokeWidth="1.25" />

        {/* Nodes */}
        {positions.map((x, i) => {
          const isEdge = i === 0 || i === positions.length - 1;
          const node =
            i === 0 ? (
              // Open "intake" circle — the messy starting state
              <circle cx={x} cy={y} r="12" stroke={accent} strokeWidth="1.5" />
            ) : i === positions.length - 1 ? (
              // Filled circle — the steady state
              <circle cx={x} cy={y} r="9" fill={accent} />
            ) : (
              <circle cx={x} cy={y} r="10" stroke={stroke} strokeWidth="1.25" />
            );

          return (
            <g key={i}>
              {node}
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                className="fill-muted-foreground"
                fontFamily="var(--font-mono)"
                fontSize="9"
                style={
                  isEdge ? { fill: "var(--accent)", fontWeight: 600 } : undefined
                }
              >
                {String(i + 1).padStart(2, "0")}
              </text>
              <text
                x={x}
                y="100"
                textAnchor="middle"
                className="fill-foreground"
                fontFamily="var(--font-display)"
                fontSize="18"
              >
                {processPhases[i].title}
              </text>
            </g>
          );
        })}

        {/* End-marker labels — "messy" left, "reliable" right */}
        <text
          x={positions[0]}
          y="128"
          textAnchor="middle"
          className="fill-muted-foreground"
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="2"
        >
          MESSY
        </text>
        <text
          x={positions[positions.length - 1]}
          y="128"
          textAnchor="middle"
          className="fill-muted-foreground"
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="2"
        >
          RELIABLE
        </text>
      </svg>
    </figure>
  );
}
