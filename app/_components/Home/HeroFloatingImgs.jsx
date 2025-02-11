import Image from "next/image";
import AnimatedImgFloat from "../Animations/AnimatedImgFloat";

function HeroFloatingImgs() {
  const imagesData = [
    {
      img: "/secure-id.png",
      alt: "card-icon",
      parentClassName: "flex flex-col absolute top-[10rem] left-[5rem]",
      childClassName:
        "relative h-40 w-40 overflow-hidden p-4 border-green-500 shadow-xl shadow-green-100 flex items-start justify-start",
    },
    {
      img: "/secure-folder.png",
      alt: "secure-icon",
      parentClassName: "flex flex-col absolute top-20 left-[20rem]",
      childClassName:
        "relative h-28 w-28 rounded-full p-4 flex justify-center border-green-500 shadow-lg shadow-white",
    },
    {
      img: "/id-card.png",
      alt: "id-card-icon",
      parentClassName: "flex flex-col absolute top-[10rem] right-[5rem]",
      childClassName:
        "relative h-40 w-40  overflow-hidden  p-4 border-green-500 shadow-xl shadow-green-100 flex items-start justify-start",
    },
    {
      img: "/time-3d.png",
      alt: "time-icon",
      parentClassName: "flex flex-col absolute top-20 right-[20rem]",
      childClassName:
        "relative h-28 w-28 rounded-full p-4 flex justify-center border-green-500 shadow-lg shadow-white",
    },
  ];
  return (
    <>
      {imagesData.map(({ parentClassName, childClassName, img, alt }, idx) => (
        <div key={idx} className={parentClassName}>
          <AnimatedImgFloat num={idx + 1}>
            <div className={childClassName}>
              <Image fill src={img} alt={alt} className="object-cover" />
            </div>
          </AnimatedImgFloat>
        </div>
      ))}
    </>
  );
}

export default HeroFloatingImgs;
