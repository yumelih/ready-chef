import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-lingr-withImg flex items-center">
      <div className="h-fit grid justify-center items-center lg:items-stretch lg:gap-12 max-w-[100rem] mx-auto p-14 grid-rows-2 lg:grid-rows-none lg:grid-cols-2">
        <div className="text-white flex flex-col justify-between items-start gap-4 lg:gap-0">
          <h1 className="text-7xl">Enjoy Our Delicous Meal</h1>
          <p className="text-2xl">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <button className="text-2xl bg-yellow-600 px-12 py-4 uppercase rounded-sm">
            Hire a Chef
          </button>
        </div>
        <Image
          src="https://media.giphy.com/media/l0MYyKbTCresSjrhK/giphy-downsized.gif"
          alt="food"
          width="800"
          height="800"
        />
      </div>

      {/* <Image */}
    </header>
  );
}
