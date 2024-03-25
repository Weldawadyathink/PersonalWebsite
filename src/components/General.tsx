import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react"; // Import HTMLAttributes

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  // Extend for headings
  children?: React.ReactNode; // Allow any React children
  level?: 1 | 2 | 3 | 4 | 5 | 6; // Limit heading levels
  className?: string;
}

export function Heading({
  children,
  level = 1,
  className,
  ...otherProps
}: HeadingProps) {
  const HeadingTag = `h${level}` as const;

  const textSizes = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  };

  return (
    <HeadingTag className={cn(textSizes[level], className)} {...otherProps}>
      {children}
    </HeadingTag>
  );
}

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export function P({ children, className, ...otherProps }: PProps) {
  return (
    <p className={cn("text-base", className)} {...otherProps}>
      {children}
    </p>
  );
}
