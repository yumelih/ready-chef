export default function GridAutoFit({
  children,
  className = "",
  alignment = " items-center justify-items-center ",
}: {
  children: React.ReactNode;
  className?: string;
  alignment?: string;
}) {
  return (
    <div
      className={
        `grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-8 ` +
        className +
        " " +
        alignment
      }
    >
      {children}
    </div>
  );
}
