export default function GridAutoFit({
  children,
  className = "",
  alignment = " items-center justify-items-center ",
  gridWidths = ["20rem", "1fr"],
}: {
  children: React.ReactNode;
  className?: string;
  alignment?: string;
  gridWidths?: string[];
}) {
  return (
    <div
      className={
        `grid grid-cols-[repeat(auto-fit,minmax(${gridWidths.join(",")}))] gap-8 ` +
        className +
        " " +
        alignment
      }
    >
      {children}
    </div>
  );
}
