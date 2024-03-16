import { ReviewType } from "@/types/types";
import GridAutoFit from "../ui/gridautofit";
import StarIcons from "../ui/star-icons";

type ReviewProps = {
  name: string;
  desc: string;
  numFilledStars: number;
};

function Review(props: ReviewProps) {
  return (
    <div className="mr-auto flex min-h-full basis-[30%] flex-col justify-between gap-2 bg-gray-200 p-4 shadow-lg">
      <h1 className=" text-xl font-semibold italic">{props.name} says:</h1>
      <p className="px-2">{props.desc}</p>
      <StarIcons numFilledStars={props.numFilledStars} />
    </div>
  );
}

export default function Reviews({ reviews }: { reviews: ReviewType[] }) {
  return (
    <section>
      <h1 className="pb-4 pt-8 text-2xl font-bold tracking-wide lg:self-start">
        Reviews
      </h1>
      <GridAutoFit>
        {reviews.map((elm) => {
          return (
            <Review
              key={elm._id.toString()}
              name={elm.user.name}
              desc={elm.review}
              numFilledStars={Number(elm.rating)}
            />
          );
        })}
      </GridAutoFit>
    </section>
  );
}
