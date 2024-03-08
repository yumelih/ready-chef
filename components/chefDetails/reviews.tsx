import GridAutoFit from "../ui/gridautofit";
import StarIcons from "../ui/star-icons";

type ReviewProps = {
  name: string;
  desc: string;
  numFilledStars: number;
};

function Review(props: ReviewProps) {
  return (
    <div className="mr-auto flex basis-[30%] flex-col gap-2 bg-gray-200 p-4 shadow-lg">
      <h1 className=" text-xl font-semibold italic">Hello says:</h1>
      <p className="px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum
        bibendum lacus, sed pharetra orci viverra sit amet. Vestibulum rhoncus,
        lorem id consectetur elementum, ante risus dignissim nisl, nec tempus
        magna tellus eu magna. Integer.
      </p>
      <StarIcons numFilledStars={3} />
    </div>
  );
}

export default function Reviews() {
  return (
    <section>
      <h1 className="pb-4 pt-8 text-2xl font-bold tracking-wide lg:self-start">
        Reviews
      </h1>
      <GridAutoFit>
        <Review />
        <Review />
        <Review />
        <Review />
      </GridAutoFit>
    </section>
  );
}
