import AnimatedText from "./Animations/AnimatedText";

function SectionHead({ mainHead, subHead }) {
  return (
    <div className="flex items-center flex-col gap-3  bottom-[2px]">
      <div className="">
        <h1 className="text-lg text-green-500 font-semibold uppercase">
          {mainHead}
        </h1>
      </div>

      <div>
        <AnimatedText text={subHead} className="text-4xl text-primary-700" />
      </div>
    </div>
  );
}
export default SectionHead;
