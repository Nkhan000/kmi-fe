import Image from "next/image";
import AnimatedText from "@/app/_components/Animations/AnimatedText";

function WhoWeAre() {
  return (
    <section className=" min-h-screen px-20 py-12 flex flex-col gap-20">
      <div className="flex items-center flex-col gap-12 ">
        <div className="">
          <h1 className="text-lg text-green-500 font-semibold">WHO WE ARE ?</h1>
        </div>

        <div className="flex flex-col gap-6 items-center px-40 text-center ">
          <AnimatedText
            text="Tired of endless verification processes? 😤"
            className="text-4xl text-primary-700"
          />

          <AnimatedText
            text="We are too."
            className="text-4xl text-primary-700"
          />
          <div className="relative flex gap-4">
            <AnimatedText text="At" className="text-5xl text-primary-700" />
            <AnimatedText
              text="Know My Identity"
              className="text-5xl text-green-500"
            />
            <div className="absolute h-8 w-12 -top-2 -right-12">
              <Image fill src="/logo.png" alt="logo-img" />
            </div>
          </div>
          <AnimatedText
            text="We're revolutionizing identity verification 😎. Our secure platform let's you upload your documents once, and then leverage that verified status across numerous platforms ➡️. We handle the 🤹‍♂️ tedious KYC updates🤵‍♂️, so you don't have to 😊."
            className="text-4xl text-primary-700 leading-[4.5rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
