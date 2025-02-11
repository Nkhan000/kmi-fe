import AnimatedText from "@/app/_components/Animations/AnimatedText";
import Button from "@/app/_components/Button";
import Steps from "@/app/_components/Home/Steps";
import SectionHead from "../SectionHead";

function HowItWorks() {
  return (
    <section className=" min-h-screen px-20 py-12 bg-brand-gradient-02 flex flex-col gap-20 justify-center">
      <SectionHead
        mainHead="How It Works"
        subHead="Get verified in three simple steps—fast, secure, and hassle-free!"
      />

      <div className="min-h-full">
        <Steps />
      </div>
      <div className="max-w-fit self-center">
        <Button>Gets Started</Button>
      </div>
    </section>
  );
}

export default HowItWorks;
