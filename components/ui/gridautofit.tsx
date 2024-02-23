export default function GridAutoFit({
  children,
  className = "",
  alignment = "items-center justify-items-center",
}: {
  children: React.ReactNode;
  className?: string;
  alignment?: string;
}) {
  return (
    <div
      className={
        `grid gap-8 sm:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] ` +
        className +
        " " +
        alignment
      }
    >
      {children}
    </div>
  );
}
