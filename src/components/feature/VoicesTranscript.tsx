import { aboutVoices } from "@/data/about";

export function VoicesTranscript() {
  return (
    <div className="flex flex-col gap-10">
      <dl className="flex flex-col border-y border-border">
        {aboutVoices.map((voice, index) => (
          <div
            key={voice.quote}
            className="grid grid-cols-[40px_1fr] items-baseline gap-x-6 gap-y-2 border-b border-border py-7 last:border-b-0 sm:grid-cols-[60px_220px_1fr] sm:gap-x-10 sm:py-9"
          >
            <dt className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </dt>
            <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:pt-1">
              {voice.speaker} says
            </dt>
            <dd className="col-span-2 font-display text-2xl italic leading-snug text-foreground sm:col-span-1 sm:text-[2rem] sm:leading-[1.15]">
              &ldquo;{voice.quote}&rdquo;
            </dd>
          </div>
        ))}
      </dl>

      <p className="font-mono text-xs italic text-muted-foreground">
        — that is normally where my work begins.
      </p>
    </div>
  );
}
