import { Button } from "./button";
import TableNameImage from "./table-name-image";
import { Tag } from "./tag";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

const chefHeaders = ["name", "speciality", "chefLocation", "experienceYear"];

function TableHeader({ children }: { children: React.ReactNode }) {
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

export default function Table() {
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
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Name</TableHeader>

                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <TableElement>
                      <TableNameImage
                        imageSrc={person.image}
                        name={person.name}
                        speciality={person.email}
                      />
                    </TableElement>
                    <TableElement>
                      <TableDoubleLines
                        lineOne={person.title}
                        lineTwo={person.department}
                      />
                    </TableElement>

                    <TableElement>
                      <Tag />
                    </TableElement>
                    <TableElement>{person.role}</TableElement>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {person.name}</span>
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
