import { Fragment, type ReactNode } from "react";

// Lightweight token components — hand-styled syntax tones on the paper palette.
// Not a real highlighter; deliberate so the code reads as a typographic spec,
// not a VS Code screenshot.
function K({ children }: { children: ReactNode }) {
  return <span className="text-accent">{children}</span>;
}
function S({ children }: { children: ReactNode }) {
  return <span className="text-[color:var(--color-success)]">{children}</span>;
}
function C({ children }: { children: ReactNode }) {
  return <span className="italic text-muted-foreground">{children}</span>;
}
function P({ children }: { children: ReactNode }) {
  return <span className="text-muted-foreground">{children}</span>;
}

/**
 * Operator object — code-as-introspection for §07.
 *
 * Inspired by the developer.ts pattern from peer portfolios, rewritten so
 * the *content* is substantive (not buzzword bio): what this engineer
 * builds, what they refuse to build, and what they refuse to skip.
 */
export function OperatorCodeBlock() {
  const lines: ReactNode[] = [
    <C key="c1">{"// operator — what this engineer does, and what they refuse to do"}</C>,
    "",
    <>
      <K>const</K> operator <P>=</P> {"{"}
    </>,
    <>
      {"  "}builds<P>:</P> [<S>&apos;custom CRMs&apos;</S><P>,</P> <S>&apos;internal ops tools&apos;</S><P>,</P> <S>&apos;workflow automation&apos;</S>]<P>,</P>
    </>,
    <>
      {"  "}doesNotBuild<P>:</P> [<S>&apos;big-bang platforms&apos;</S><P>,</P> <S>&apos;CV-driven architecture&apos;</S>]<P>,</P>
    </>,
    "",
    <>
      {"  "}startsWith<P>:</P> [<S>&apos;the spreadsheet&apos;</S><P>,</P> <S>&apos;the WhatsApp thread&apos;</S><P>,</P> <S>&apos;the workaround&apos;</S>]<P>,</P>
    </>,
    <>
      {"  "}shipsBy<P>:</P> <S>&apos;week 3&apos;</S><P>,</P>
    </>,
    "",
    <>
      {"  "}refusesToSkip<P>:</P> [
    </>,
    <>
      {"    "}<S>&apos;permissions&apos;</S><P>,</P> <S>&apos;mistake recovery&apos;</S><P>,</P> <S>&apos;audit trails&apos;</S><P>,</P>
    </>,
    <>
      {"    "}<S>&apos;follow-ups&apos;</S><P>,</P> <S>&apos;oversight&apos;</S><P>,</P> <S>&apos;the boring parts&apos;</S><P>,</P>
    </>,
    <>
      {"  "}]<P>,</P>
    </>,
    "",
    <>
      {"  "}workable<P>:</P> <K>function</K> () {"{"}
    </>,
    <>
      {"    "}<K>return</K> <K>this</K>.startsWith.length <P>&gt;</P> 0
    </>,
    <>
      {"        "}<P>&amp;&amp;</P> <K>this</K>.refusesToSkip.<K>every</K>((part) <P>=&gt;</P> <K>this</K>.cares(part))<P>;</P>
    </>,
    <>
      {"  "}{"}"}<P>,</P>
    </>,
    <>
      {"}"}<P>;</P>
    </>,
  ];

  return (
    <figure className="overflow-hidden border border-border-strong bg-surface">
      {/* Filename tab — paper-editorial chrome, no macOS dots */}
      <div className="flex items-center justify-between gap-3 border-b border-border bg-background px-4 py-2.5 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="inline-block size-1.5 bg-accent" />
          <span className="font-mono text-[11px] text-foreground/85">
            <span className="text-muted-foreground">{"//"}</span> operator.ts
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          read-only
        </span>
      </div>

      {/* Code — horizontally scrollable on narrow screens */}
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.7] text-foreground/90 sm:p-6 sm:text-[13px] lg:p-8 lg:text-[13.5px]">
        <code>
          {lines.map((line, i) => (
            <Fragment key={i}>
              {line === "" ? "" : line}
              {"\n"}
            </Fragment>
          ))}
        </code>
      </pre>
    </figure>
  );
}
