import AboutChef from "@/components/chefDetails/about-chef";
import Reviews from "@/components/chefDetails/reviews";
import Showcase from "@/components/chefDetails/showcase";
import HeaderWithImage from "@/components/shared/header-with-image";

import { getChef } from "@/lib/actions/chef.action";

export default async function Page({ params }: { params: { chefId: string } }) {
  const chef = await getChef("65e59f6c524c94c6a0bd157b");

  console.log(chef?.reviews[0]?.user);
  if (!chef) return <div>This page doesn&apos;t exists</div>;

  return (
    <div className="pb-8">
      <HeaderWithImage
        name={chef?.name}
        profilePhoto={chef?.profilePhoto}
        imageCover={chef?.imageCover}
      />
      <div className="mx-12 my-8 space-y-8 lg:mx-auto lg:max-w-5xl">
        <AboutChef name={chef?.name} desc={chef?.desc} />
        <Showcase images={chef?.images} />
        <Reviews reviews={chef?.reviews} />
      </div>
    </div>
  );
}
