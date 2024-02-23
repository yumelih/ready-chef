import Image from "next/image";

export default function TableNameImage({
  imageSrc,
  name,
  speciality,
}: {
  [key: string]: string;
}) {
  return (
    <div className="flex items-center">
      <div className="h-11 w-11 flex-shrink-0">
        <Image
          className="h-11 w-11 rounded-full"
          src={imageSrc}
          alt={`Photo of ${name}`}
          width={44}
          height={44}
        />
      </div>
      <div className="ml-4">
        <div className="font-medium text-gray-900">{name}</div>
        <div className="mt-1 text-gray-500">{speciality}</div>
      </div>
    </div>
  );
}
