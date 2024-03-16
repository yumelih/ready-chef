export default function AboutChef({ desc, name }: { [key: string]: string }) {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">About Chef {name}</h1>
      <p className="">{desc}</p>
    </section>
  );
}
