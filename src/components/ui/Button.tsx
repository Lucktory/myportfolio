import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { externalLinkProps } from "@/lib/url";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-50 disabled:pointer-events-none";

const variantMap: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:opacity-90 border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:bg-surface-hover",
  ghost:
    "bg-transparent text-foreground border border-transparent hover:bg-surface-hover",
};

const sizeMap: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(baseClasses, variantMap[variant], sizeMap[size], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props as AsLink;
    const external = externalLinkProps(href);
    return (
      <Link href={href} className={classes} {...external} {...rest}>
        {children}
      </Link>
    );
  }

  const { href: _ignored, ...rest } = props as AsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
