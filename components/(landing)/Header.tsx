import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-start bg-lingr-withImg lg:items-center">
      <div className="mx-auto grid max-w-[100rem] grid-rows-2 items-center justify-center gap-0 px-4 lg:grid-cols-2 lg:grid-rows-none lg:items-stretch lg:justify-center lg:gap-12 lg:p-14">
        <div className="flex max-w-[40rem] flex-col items-center justify-between gap-4 text-white lg:max-w-fit lg:items-start lg:gap-4">
          <h1 className="text-5xl lg:text-7xl">Enjoy Our Delicous Meal</h1>
          <p className="text-xl lg:text-2xl">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <button className="rounded-sm bg-yellow-600 px-8 py-2 text-xl uppercase lg:px-12 lg:py-4 lg:text-2xl">
            Hire a Chef
          </button>
        </div>
        <div className="relative mx-auto h-80 w-[32rem] lg:aspect-video lg:h-full lg:w-full">
          <Image
            src="https://media.giphy.com/media/l0MYyKbTCresSjrhK/giphy-downsized.gif"
            alt="food"
            fill={true}
            // sizes="(min-width: 1024px) 40rem"
          />
        </div>
      </div>

      {/* <Image */}
    </header>
  );
}
