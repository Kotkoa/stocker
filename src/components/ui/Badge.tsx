type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full bg-foreground/5 px-3 py-1 text-xs uppercase tracking-wider text-muted${className ? ` ${className}` : ""}`}
    >
      {children}
    </span>
  );
}
