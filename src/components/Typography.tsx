import React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote';

type TypographyProps = {
  variant: TypographyVariant;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLQuoteElement>;

const variantStyles: Record<TypographyVariant, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6 text-xl",
  blockquote: "mt-6 border-l-2 pl-6 italic"
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  const Component = variant;
  return (
    <Component
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
