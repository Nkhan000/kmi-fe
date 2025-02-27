import Hero from "@/app/_components/Home/Hero";
import HowItWorks from "@/app/_components/Home/HowItWorks";
import WhoWeAre from "@/app/_components/Home/WhoWeAre";
import OurSolutions from "./_components/Home/OurSolutions";
import JoinUs from "./_components/Home/JoinUs";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <Header />
      <Hero />
      <WhoWeAre />
      <HowItWorks />
      <OurSolutions />
      <JoinUs />
      <Footer />
    </main>
  );
}
