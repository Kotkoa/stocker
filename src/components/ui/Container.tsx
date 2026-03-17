type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-(--container-max-width) px-4 sm:px-6 lg:px-8${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
