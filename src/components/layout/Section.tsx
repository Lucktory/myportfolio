import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  spacing?: "tight" | "default" | "loose" | "xl";
  as?: "section" | "article" | "div";
};

const spacingMap = {
  tight: "py-12 sm:py-16",
  default: "py-16 sm:py-24",
  loose: "py-24 sm:py-32",
  xl: "py-28 sm:py-36 lg:py-44",
} as const;

export function Section({
  id,
  spacing = "default",
  as: Tag = "section",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("relative scroll-mt-24", spacingMap[spacing], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
