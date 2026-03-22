type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full bg-birch px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted${className ? ` ${className}` : ""}`}
    >
      {children}
    </span>
  );
}
