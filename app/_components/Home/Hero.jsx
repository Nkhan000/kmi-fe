import Link from "next/link";
import HeroExampleDiv from "@/app/_components/Home/HeroExampleDiv";
import Button from "@/app/_components/Button";
import HeroFloatingImgs from "./HeroFloatingImgs";

function Hero() {
  return (
    <section className="relative z-10 px-20 py-12 flex flex-col gap-8 items-center bg-[linear-gradient(180deg,_rgba(246,255,245,1)_0%,_rgba(195,255,198,0.63)_35%,_rgba(195,255,198,0.63)_100%)] bottom-[2px]">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-8xl text-primary-900 tracking-tight font-normal">
          Verify Once
        </h1>
        <h2 className="text-3xl text-primary-900 tracking-tight font-normal">
          We&apos;ll handle the rest
        </h2>
      </div>
      <div className="relative max-w-[55%]shadow-lg shadow-green-400  rounded-lg hover:shadow-xl hover:shadow-green-500 hover:-translate-y-1 ease-in duration-150 overflow-hidden">
        <div className="min-h-full min-w-full bg-white rounded-md p-6 before:content-[ ] before:absolute before:min-w-full before:min-h-20 before:bg-green-200 before:top-0 before:left-0 hover:before:bg-green-300 before:ease-in before:duration-150 z-10">
          <HeroExampleDiv />
        </div>
      </div>
      <div>
        <p className="text-lg text-primary-700">
          Trusted by 500+ organizations, we simplify online KYC and document
          verification, eliminating redundant processes for a seamless
          experience.
        </p>
      </div>

      <div className="flex gap-6">
        <Link href="/">
          <Button>Verify Now</Button>
        </Link>

        <Link href="/">
          <Button type="secondary">How It Works?</Button>
        </Link>
      </div>
      <HeroFloatingImgs />
    </section>
  );
}

export default Hero;
