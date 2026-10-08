export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-14 max-w-3xl">
      <span className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.2em] uppercase">
        <span className="h-px w-8 bg-primary/60" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 tracking-tight text-balance">
        {title}
      </h2>
      {children && (
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          {children}
        </p>
      )}
    </div>
  );
}
