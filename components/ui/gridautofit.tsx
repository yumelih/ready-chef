export default function GridAutoFit({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] items-center justify-items-center gap-8 " +
        className
      }
    >
      {children}
    </div>
  );
}
