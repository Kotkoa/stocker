type SectionHeaderProps = {
  kicker?: string;
  title: React.ReactNode;
  deck?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  kicker,
  title,
  deck,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-[580px] mb-[clamp(48px,6vw,72px)]${centered ? " mx-auto text-center" : ""}${className ? ` ${className}` : ""}`}
    >
      {kicker && (
        <p className="mb-4.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          {kicker}
        </p>
      )}
      <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.2] text-foreground [&>em]:font-normal [&>em]:italic [&>em]:not-italic:text-accent [&>em]:text-accent">
        {title}
      </h2>
      {deck && (
        <p className="mt-5 text-base leading-[1.8] text-muted max-w-[520px]">
          {deck}
        </p>
      )}
    </div>
  );
}
