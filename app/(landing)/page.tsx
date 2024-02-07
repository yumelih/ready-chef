import AboutUs from "@/components/(landing)/AboutUs";
import Features from "@/components/(landing)/Features";
import Header from "@/components/(landing)/Header";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-[10rem,1fr,10rem] grid-rows-[min-content_80vh_repeat(8,minmax(min-content,1fr))] gap-12 bg-gray-100">
      <Navbar />
      <Header />
      <Features />
      <AboutUs />
    </main>
  );
}
