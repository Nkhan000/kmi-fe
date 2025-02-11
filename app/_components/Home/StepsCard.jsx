import AnimatedFadeIn from "../Animations/AnimatedFadeIn";

function StepsCard({ item }) {
  const { name, description, id } = item;
  return (
    <AnimatedFadeIn xCord={id}>
      <div
        className={`relative h-96 w-96 hover:shadow-xl ${
          id == 1
            ? "bg-yellow-400  hover:shadow-yellow-300"
            : id == 2
            ? "bg-orange-400 hover:shadow-orange-300"
            : "bg-green-400 hover:shadow-green-300"
        } rounded-lg px-6  flex flex-col justify-between ease-in duration-150 hover:-translate-y-2`}
      >
        <div className="flex items-center relative py-9">
          <span className="text-[12rem] font-semibold  text-primary-50 absolute -top-14 right-0">
            {id}
          </span>
          <h1 className="text-4xl text-primary-800 font-semibold capitalize z-20 pr-14">
            {name}
          </h1>
        </div>

        <div className="py-12 pr-14 flex justify-center">
          <span className="text-2xl text-white ">{description}</span>
        </div>
      </div>
    </AnimatedFadeIn>
  );
}

export default StepsCard;
