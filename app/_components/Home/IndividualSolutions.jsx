import Image from "next/image";
import { PiUserCircleCheckFill } from "react-icons/pi";
import { CgController } from "react-icons/cg";

import Button from "../Button";

export default function IndividiualSolution() {
  const gridData = [
    {
      id: 1,
      gridPosition: `col-start-1 col-end-3 row-start-1 row-end-3`,
      svgClass: `text-primary-800 h-20 w-20 text-[5rem]`,
      head: "One Tap verification",
      image: "/oneTap.jpg",
      text: "",
      icon: <PiUserCircleCheckFill />,
    },
    {
      id: 2,
      gridPosition: `col-start-3 -col-end-1`,
      svgClass: "text-primary-800 h-10 w-10 text-[2.5rem]",
      head: "Centralized Identity",
      image: "/user.jpg",
      text: "",
      icon: <PiUserCircleCheckFill />,
    },
    {
      id: 3,
      gridPosition: `row-start-3`,
      svgClass: "text-primary-800 h-10 w-10 text-[2.5rem]",
      head: "Controll over data",
      image: "/user-mobile.jpg",
      text: "",
      icon: <CgController />,
    },
    {
      id: 4,
      gridPosition: `col-start-3`,
      svgClass: "text-primary-800 h-10 w-10 text-[2.5rem]",
      head: "Verification History",
      image: "/user-mobile.jpg",
      text: "",
      icon: <PiUserCircleCheckFill />,
    },
    {
      id: 5,
      gridPosition: `row-start-3 col-start-2 -col-end-1`,
      svgClass: "text-primary-800 h-10 w-10 text-[2.5rem]",
      head: "Global reputation score",
      image: "/mobile.jpg",
      text: "",
      icon: <PiUserCircleCheckFill />,
    },
  ];

  const headBg = `capitalize font-semibold text-5xl text-primary-900 group-hover:text-primary-800 ease-in duration-500`;
  const headSm = `capitalize font-semibold text-3xl text-primary-900 group-hover:text-primary-800 ease-in duration-500`;

  const textSm = `z-[100] p-4 text-center text-primary-600 text-lg flex flex-col gap-3 items-center min-w-full justify-center`;
  const textBg = `z-[100] p-6 text-center text-primary-600 text-lg flex flex-col gap-3 items-center min-w-full justify-center`;

  return (
    <div className="min-h-[60vh] mx-auto w-[80%]">
      <div className="grid grid-cols-3 grid-rows-[13rem_13rem_13rem] gap-2">
        {gridData.map(({ gridPosition, svgClass, head, icon, image }, idx) => (
          <div
            key={idx}
            className={`group cursor-pointer relative border-4 rounded-xl ${gridPosition} overflow-hidden min-h-full items-center grid border-green-100 hover:border-green-300`}
          >
            <Image
              fill
              src={image}
              alt="userimg"
              className="object-cover z-[50] "
            />

            <div className="z-[100] flex flex-col gap-3 items-center min-w-full text-white justify-center">
              <svg
                className={`${svgClass} group-hover:text-green-400 ease-in duration-500`}
              >
                {icon}
              </svg>
              <span className={idx == 0 ? headBg : headSm}>{head}</span>
            </div>

            <div className={idx == 0 ? textBg : textSm}>
              <span className={`${idx == 0 ? "text-2xl px-6" : "text-xs"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quidem aspernatur veritatis suscipit numquam vitae quia sunt
              </span>
            </div>
            {/* <div className="min-w-full min-h-full absolute top-[0%] opacity-85 bg-primary-50 rounded-tr-2xl rounded-tl-3xl overflow-hidden group-hover:top-0 group-hover:rounded-tr-none group-hover:bg-primary-50 group-hover:opacity-85 group-hover:rounded-tl-none ease-in duration-300 py-6 z-[90] "></div> */}
            <div className="min-w-full bg-white min-h-full absolute top-[55%] rounded-tr-2xl rounded-tl-3xl overflow-hidden group-hover:top-0 group-hover:rounded-tr-none group-hover:bg-primary-50 group-hover:opacity-85 group-hover:rounded-tl-none ease-in duration-300 py-6 z-[90] "></div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="group cursor-pointer relative border-4 rounded-xl col-start-1 col-end-3 row-start-1 row-end-3 overflow-hidden min-h-full items-center grid hover:border-green-300">
  <Image
    fill
    src="/user-mobile.jpg"
    alt="userimg"
    className="object-cover z-[50] "
  />

  <div className="z-[100] flex flex-col gap-3 items-center min-w-full justify-center">
    <svg className="h-20 w-20 text-[5rem] text-white group-hover:text-green-400 ease-in duration-500">
      <PiUserCircleCheckFill />
    </svg>
    <span className="text-primary-50 font-semibold text-5xl group-hover:text-primary-800 ease-in duration-500">
      EASY KYC Verifications
    </span>
  </div>

  <div className="z-[100] pb-6 px-6 text-center text-primary-600 text-lg flex flex-col gap-3 items-center min-w-full justify-center">
    <span className="text-2xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
      quidem aspernatur veritatis suscipit numquam vitae quia sunt
    </span>
  </div>
  <div className="min-w-full bg-white min-h-full absolute top-[50%] rounded-tr-3xl rounded-tl-3xl overflow-hidden group-hover:top-0 group-hover:rounded-tr-none group-hover:bg-primary-50 group-hover:opacity-85 group-hover:rounded-tl-none ease-in duration-300 py-6 z-[90] "></div>
</div>

<div className="group cursor-pointer overflow-hidden relative border-4 rounded-xl col-start-3 -col-end-1 min-h-full items-center grid hover:border-green-300">
  <Image
    fill
    src="/user-mobile.jpg"
    alt="userimg"
    className="object-cover z-[50] "
  />

  <div className="z-[100] flex flex-col gap-3 items-center min-w-full justify-center">
    <svg className="h-10 w-10 text-[2.5rem] text-white group-hover:text-green-400 ease-in duration-500">
      <PiUserCircleCheckFill />
    </svg>
    <span className="text-primary-50 font-semibold text-2xl group-hover:text-primary-800 ease-in duration-500">
      EASY KYC Verifications
    </span>
  </div>

  <div className="z-[100] pb-6 px-4 text-center text-primary-600 text-lg flex flex-col gap-3 items-center min-w-full justify-center">
    <span className="text-xs">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
      quidem aspernatur veritatis suscipit numquam vitae quia sunt
    </span>
  </div>
  <div className="min-w-full bg-white min-h-full absolute top-[50%] rounded-tr-3xl rounded-tl-3xl overflow-hidden group-hover:top-0 group-hover:rounded-tr-none group-hover:bg-primary-50 group-hover:opacity-85 group-hover:rounded-tl-none ease-in duration-300 py-6 z-[90] "></div>
</div>
<div className="border-4 rounded-xl row-start-3 relative overflow-hidden"></div>
<div className="border-4 rounded-xl col-start-3 relative overflow-hidden"></div>
<div className="border-4 rounded-xl row-start-3 col-start-2 -col-end-1 relative overflow-hidden"></div> */
}
