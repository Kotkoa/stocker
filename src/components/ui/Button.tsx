import { type AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "outline";
};

const variants = {
  primary:
    "bg-foreground text-background hover:opacity-90",
  outline:
    "border border-border text-foreground hover:bg-foreground/5",
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
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition ${variants[variant]}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </a>
  );
}
