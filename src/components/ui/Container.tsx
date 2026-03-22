type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-max-width px-[clamp(20px,4vw,40px)]${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
