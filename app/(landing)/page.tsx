import Features from "@/components/(landing)/Features";
import Header from "@/components/(landing)/Header";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-rows-[min-content_80vh_repeat(8,minmax(min-content,1fr))] bg-gray-100">
      <Navbar />
      <Header />
      <Features />
    </main>
  );
}
