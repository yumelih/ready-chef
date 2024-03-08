import AboutChef from "@/components/chefDetails/about-chef";
import Reviews from "@/components/chefDetails/reviews";
import Showcase from "@/components/chefDetails/showcase";
import HeaderWithImage from "@/components/shared/header-with-image";
import { getChef } from "@/lib/actions/chef.action";

export default async function Page({ params }: { params: { chefId: string } }) {
  const chef = await getChef(params.chefId);

  return (
    <div className="pb-8">
      <HeaderWithImage data={chef} />
      <div className="mx-12 my-8 space-y-8 lg:mx-auto lg:max-w-5xl">
        <AboutChef />
        <Showcase />
        <Reviews />
      </div>
    </div>
  );
}
