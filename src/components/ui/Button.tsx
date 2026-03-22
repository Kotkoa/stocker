import { type AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "ghost" | "outline";
};

const variants = {
  primary:
    "bg-foreground text-background border-foreground hover:bg-charcoal-soft hover:border-charcoal-soft hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(61,56,51,0.18)]",
  ghost:
    "bg-transparent text-foreground border-border hover:bg-birch hover:border-birch-deep hover:-translate-y-0.5",
  outline:
    "bg-transparent text-foreground border-birch-deep hover:bg-birch hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(61,56,51,0.08)]",
} as const;

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-[1.5px] px-6.5 py-3.5 text-sm font-semibold tracking-[0.02em] transition-all duration-350 ease-warm ${variants[variant]}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </a>
  );
}
