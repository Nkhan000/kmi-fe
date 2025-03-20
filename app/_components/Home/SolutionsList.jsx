"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { MdLockPerson } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineCloudSync } from "react-icons/md";
import { LuKeyRound } from "react-icons/lu";
import { GoRocket } from "react-icons/go";
import { FaBuildingColumns } from "react-icons/fa6";

import Button from "../Button";
import Image from "next/image";
import AnimatedFadeIn from "../Animations/AnimatedFadeIn";

const Data = [
  {
    image: "/pp.jpg",
    head: "cetralized identity",
    headIcon: <MdLockPerson />,
    desc: "No more scattered accounts and endless verifications! 🚀 With our platform, you get a single, secure identity that works across multiple services, ensuring seamless access 🔄 while keeping your data protected 🔒.",
  },
  {
    image: "/oneTap.jpg",
    head: "easy verification",
    headIcon: <AiFillThunderbolt />,
    desc: "Forget long forms and repeated submissions! 😩 Our one-tap verification ☝️ ensures that proving your identity is quick ⏩, hassle-free 🎯, and accessible from anywhere 🌍",
  },
  {
    image: "/user-mobile.jpg",
    head: "smooth updates",
    headIcon: <MdOutlineCloudSync />,
    desc: "Change your details once, and let them sync everywhere! 🔃 Whether updating your 📞 phone number, 🏠 address, or 📄 documents, our system ensures instant, effortless updates across all linked services.",
  },
  {
    image: "/mobile.jpg",
    head: "control over data",
    headIcon: <LuKeyRound />,
    desc: "You decide who sees your information! 🛡️ Our platform gives you full control over your personal data, allowing you to share only what’s necessary 🔍 while keeping everything private & secure 🔏.",
  },
  {
    image: "/user.jpg",
    head: "fast and flawless",
    headIcon: <GoRocket />,
    desc: "Say goodbye to delays ⏳ and errors ❌! Our advanced verification algorithms ensure lightning-fast ⚡ processing with near-perfect accuracy 🎯, making transactions and approvals smoother than ever.",
  },
  {
    image: "/user.jpg",
    head: "recognized and trusted",
    headIcon: <FaBuildingColumns />,
    desc: "Built with compliance in mind ✅, our platform meets strict security standards 🔐 and is recognized by government bodies 🏢 & industry leaders 🌍. Enjoy seamless access 🔄 to services with a system that is secure, reliable, and widely accepted ✅.",
  },
];

function ContainerDiv({ image, head, headIcon, id, desc }) {
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
            <div className="flex flex-col gap-2">
              <div className="relative shrink-0 h-20 w-20 text-[3.2rem] flex items-center justify-center border-2 border-dashed rounded-full border-green-200 bg-green-50 text-green-500 *:svg:absolute *:svg:top-[50%] *:left-[50%] ">
                {headIcon}
              </div>

              <span className="text-8xl capitalize font-semibold text-green-400">
                {head}
              </span>
            </div>
            <span className="text-xl text-primary-800 leading-10">{desc}</span>
            <div>
              <Button size="xl">Get Started</Button>
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

        <div className="absolute bottom-0 rounded-l-full right-0 bg-green-100 h-28 w-40 z-50"></div>
        <div className="absolute bottom-0 rounded-l-full right-20 rounded-b-none bg-green-100 h-24 w-40 z-50"></div>
        <div className="absolute top-0 rounded-r-full left-0 bg-green-100 h-28 w-40 z-50"></div>
        <div className="absolute top-0 rounded-r-full left-20 rounded-b-none bg-green-100 h-24 w-40 z-50"></div>
      </div>
    </section>
  );
}

export default function SolutionsList() {
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
      {Data.map(({ image, headIcon, head, desc }, idx) => (
        <AnimatedFadeIn animateOnce={false} key={idx}>
          <ContainerDiv
            desc={desc}
            headIcon={headIcon}
            head={head}
            image={image}
            id={idx + 1}
          />
        </AnimatedFadeIn>
      ))}
    </div>
  );
}
