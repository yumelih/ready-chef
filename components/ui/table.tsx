import { ChefType } from "@/types/types";
import { Button } from "./button";
import TableNameImage from "./table-name-image";
import { Tag } from "./tag";

const chefHeaders = [
  "Name",
  "Location",
  "Experience",
  "Rating",
  "Signature Dish",
  "Looking for Work",
];

async function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <th
      scope="col"
      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
    >
      {children}
    </th>
  );
}

function TableDoubleLines({ lineOne, lineTwo }: { [key: string]: string }) {
  return (
    <>
      <div className="text-gray-900">{lineOne}</div>
      <div className="mt-1 text-gray-500">{lineTwo}</div>
    </>
  );
}

function TableElement({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td className={`whitespace-nowrap py-5 text-sm text-gray-500 ${className}`}>
      {children}
    </td>
  );
}

export default function Table({ data }: { data: ChefType[] }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button variant="table" size="table">
            Add User
          </Button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  {chefHeaders.map((elm) => {
                    return <TableHeader key={elm}>{elm}</TableHeader>;
                  })}

                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((chef) => (
                  <tr key={chef.name}>
                    <TableElement>
                      <TableNameImage
                        imageSrc={chef.profilePhoto}
                        name={chef.name}
                        speciality={chef.speciality}
                      />
                    </TableElement>
                    <TableElement>{chef.chefLocation.address}</TableElement>
                    <TableElement>
                      {chef.experienceYear}{" "}
                      <span className=" font-semibold">years</span>
                    </TableElement>
                    <TableElement>{chef.ratingsAverage}</TableElement>
                    <TableElement>{chef.signatureDish}</TableElement>
                    <TableElement>
                      <Tag />
                    </TableElement>

                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {chef.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
