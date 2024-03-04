import Table from "@/components/ui/table";
import { getAllChefs } from "@/lib/actions/chef.action";
import { ChefType } from "@/types/types";

export default async function Page() {
  const chefs: ChefType[] = await getAllChefs();

  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Table data={chefs} />
      </div>
    </main>
  );
}
