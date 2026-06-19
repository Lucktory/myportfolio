import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "outline" | "solid" | "success";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantMap: Record<BadgeVariant, string> = {
  default: "bg-muted text-foreground/80 border-transparent",
  outline: "border-border text-muted-foreground bg-transparent",
  solid: "bg-accent text-accent-foreground border-transparent",
  success:
    "border-transparent bg-[color-mix(in_oklab,var(--color-success)_18%,transparent)] text-[var(--color-success)]",
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
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium leading-none tracking-tight",
        variantMap[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
