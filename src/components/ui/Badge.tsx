import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "outline" | "solid" | "success" | "mono";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantMap: Record<BadgeVariant, string> = {
  default: "bg-muted text-foreground/85 border-border",
  outline: "border-border-strong text-muted-foreground bg-transparent",
  solid: "bg-accent text-accent-foreground border-transparent",
  success:
    "border-transparent bg-[color-mix(in_oklab,var(--color-success)_18%,transparent)] text-[var(--color-success)]",
  mono: "border-border bg-transparent text-muted-foreground font-mono uppercase tracking-[0.14em]",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] font-medium leading-none tracking-tight",
        variantMap[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
