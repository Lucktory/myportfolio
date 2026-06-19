import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "narrow" | "default" | "wide";
};

const sizeMap = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
} as const;

export function Container({
  size = "default",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12", sizeMap[size], className)}
      {...rest}
    >
      {children}
    </div>
  );
}
