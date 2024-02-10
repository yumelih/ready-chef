import AboutUs from "@/components/(landing)/AboutUs";
import ChefsShowcase from "@/components/(landing)/ChefsShowcase";
import Features from "@/components/(landing)/Features";
import Header from "@/components/(landing)/Header";
import Stories from "@/components/(landing)/Stories";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function Home() {
  return (
    <main className="grid grid-cols-[10rem,1fr,10rem] grid-rows-[repeat(6,min-content)] gap-y-40 bg-gray-100">
      <div className="col-span-full grid grid-rows-[min-content_80vh]">
        <Navbar />
        <Header />
      </div>
      <Features />
      <AboutUs />
      <ChefsShowcase />
      <Stories />
      <Footer />
    </main>
  );
}
2;
