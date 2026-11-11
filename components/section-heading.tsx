export function SectionHeading({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-12 max-w-3xl ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
        {title}
      </h2>
      {children && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {children}
        </p>
      )}
    </div>
  );
}
