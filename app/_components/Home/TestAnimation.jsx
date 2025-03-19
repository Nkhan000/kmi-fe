"use client";

"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import Button from "../Button";
import Image from "next/image";
import AnimatedFadeIn from "../Animations/AnimatedFadeIn";

const Data = [
  { image: "/pp.jpg", head: "cetralized identity" },
  { image: "/oneTap.jpg", head: "easy verification" },
  { image: "/user-mobile.jpg", head: "smooth updates" },
  { image: "/mobile.jpg", head: "control over data" },
  { image: "/user.jpg", head: "fast and flawless" },
];

// function useParallax(MotionValue, distance) {
//   return useTransform(MotionValue, [0, 1], [-distance, distance]);
// }

function ContainerDiv({ image, head, id }) {
  //   const ref = useRef(null);
  //   const { scrollYProgress } = useScroll({ target: ref });
  //   const y = useParallax(scrollYProgress, 800);

  const textClass = `${id % 2 == 0 ? "flex-row-reverse" : ""} `;

  return (
    <section
      className={`relative grid grid-cols-2 gap-8 items-center h-screen snap-start`}
    >
      <div className="w-full m-5 flex">
        <div
          className={`${id % 2 == 0 ? "col-start-2 -col-end-1" : ""} w-[40vw]`}
        >
          <div
            className={
              "min-h-full flex flex-col gap-14 justify-center overflow-hidden"
            }
          >
            <span className="text-8xl capitalize font-semibold text-green-400">
              {head}
            </span>
            <span className="text-lg text-primary-800 leading-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              voluptate quasi quis sed quae corrupti similique veniam quam ad!
              Quibusdam magnam, sapiente natus aut maxime qui expedita veritatis
              amet accusantium.
            </span>
            <div>
              <Button size="3xl">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative ${
          id % 2 == 0 ? "row-start-1" : ""
        }  rounded-xl overflow-hidden flex h-[35rem] font-extrabold tracking-tight `}
      >
        <Image
          fill
          src={image}
          alt="A London skyscraper"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 rounded-l-full right-0 bg-green-50 h-28 w-40 z-50"></div>
        <div className="absolute bottom-0 rounded-l-full right-20 rounded-b-none bg-green-50 h-24 w-40 z-50"></div>
      </div>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 15,
    restDelta: 0.0001,
  });

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-12 h-1 bg-green-400 transform scale-x-0 z-[100]"
        style={{ scaleX }}
      />
      {Data.map(({ image, head }, idx) => (
        <AnimatedFadeIn key={idx}>
          <ContainerDiv head={head} image={image} id={idx + 1} />
        </AnimatedFadeIn>
      ))}
    </div>
  );
}

// import {
//   motion,
//   MotionValue,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "motion/react";
// import { useRef } from "react";
// import Button from "../Button";
// import Image from "next/image";

// const Data = [
//   { image: "/pp.jpg", head: "cetralized identity" },
//   { image: "/oneTap.jpg", head: "easy verification" },
//   { image: "/user-mobile.jpg", head: "smooth updates" },
//   { image: "/mobile.jpg", head: "control over data" },
//   { image: "/user.jpg", head: "fast and flawless" },
// ];

// function useParallax(MotionValue, distance) {
//   return useTransform(MotionValue, [0, 1], [-distance, distance]);
// }

// function ContainerDiv({ image, head, id }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 800);

//   const textStyles = `${
//     id % 2 == 0 ? "justify-end" : "justify-start"
//   } w-full m-5 flex`;

//   return (
//     <section className="relative flex justify-center items-center h-screen snap-start">
//       <div ref={ref} className={textStyles}>
//         <div className="w-[40vw]">
//           <div className="min-h-full flex flex-col gap-14 justify-center">
//             <span className="text-8xl capitalize font-semibold text-green-400">
//               {head}
//             </span>
//             <span className="text-lg text-primary-800 leading-10">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
//               voluptate quasi quis sed quae corrupti similique veniam quam ad!
//               Quibusdam magnam, sapiente natus aut maxime qui expedita veritatis
//               amet accusantium.
//             </span>
//             <div>
//               <Button size="3xl">Get Started</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <motion.div
//         initial={{ visibility: "hidden" }}
//         animate={{ visibility: "visible" }}
//         className={`absolute top-[calc(70%-25px)] overflow-hidden h-[40rem] w-[40rem]  rounded-xl ${
//           id % 2 == 0 ? "right-[calc(50%+100px)]" : "left-[calc(50%+100px)]"
//         } text-[#75847f] text-5xl font-extrabold tracking-tight leading-snug`}
//         style={{ y }}
//       >
//         <Image
//           fill
//           src={image}
//           alt="A London skyscraper"
//           className="w-full h-full object-cover"
//         />

//         <div className="absolute bottom-0 rounded-l-full right-0 bg-green-50 h-28 w-40 z-50"></div>
//         <div className="absolute bottom-0 rounded-l-full right-20 rounded-b-none bg-green-50 h-24 w-40 z-50"></div>
//       </motion.div>
//     </section>
//   );
// }

// export default function Parallax({ id }) {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 40,
//     damping: 15,
//     restDelta: 0.0001,
//   });

//   return (
//     <div>
//       <motion.div
//         className="fixed top-0 left-0 right-0 bottom-12 h-1 bg-green-400 transform scale-x-0 z-[100]"
//         style={{ scaleX }}
//       />
//       {Data.map(({ image, head }, idx) => (
//         <ContainerDiv head={head} image={image} key={idx} id={idx + 1} />
//       ))}
//     </div>
//   );
// }
