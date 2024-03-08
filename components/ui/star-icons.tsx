import { StarIcon as StarIconFilled } from "@heroicons/react/24/solid";
import { StarIcon as StarIconEmpty } from "@heroicons/react/24/outline";

export default function StarIcons({
  color = "text-yellow-600",
  sizes = "w-8 h-8",
  numFilledStars,
  numStars = 5,
}: {
  color?: string;
  sizes?: string;
  numFilledStars: number;
  numStars?: number;
}) {
  if (numFilledStars > numStars) return <div></div>;

  return (
    <div className="flex">
      {Array.from({ length: numFilledStars }).map((elm, i) => {
        return (
          <StarIconFilled key={`${i}+filled`} className={`${color} ${sizes}`} />
        );
      })}
      {Array.from({ length: numStars - numFilledStars }).map((elm, i) => {
        return (
          <StarIconEmpty key={`${i}+filled`} className={`${color} ${sizes}`} />
        );
      })}
    </div>
  );
}
