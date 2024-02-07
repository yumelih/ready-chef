import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-lingr-withImg flex items-start lg:items-center">
      <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-0 lg:gap-12 justify-center items-center lg:justify-center lg:items-stretch max-w-[100rem] mx-auto px-4 lg:p-14">
        <div className="text-white flex flex-col justify-between items-center lg:items-start gap-4 max-w-[40rem] lg:max-w-fit lg:gap-4">
          <h1 className="text-5xl lg:text-7xl">Enjoy Our Delicous Meal</h1>
          <p className="text-xl lg:text-2xl">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <button className="text-xl lg:text-2xl bg-yellow-600 px-8 py-2 lg:px-12 lg:py-4 uppercase rounded-sm">
            Hire a Chef
          </button>
        </div>
        <div className="relative w-[32rem] h-80 lg:w-full lg:h-full lg:aspect-video mx-auto">
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
