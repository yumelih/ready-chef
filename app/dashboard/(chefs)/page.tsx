import Table from "@/components/ui/table";
import { getAllChefs } from "@/lib/actions/chef.action";

export default async function Page() {
  const chefs = await getAllChefs();

  console.log(chefs);

  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Table />
      </div>
    </main>
  );
}
