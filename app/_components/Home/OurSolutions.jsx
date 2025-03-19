import SectionHead from "../SectionHead";
import ExpandableGrid from "../Animations/AnimationExpanding";
import { HiOutlineUser, HiOutlineUserCircle } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import { SiTicktick } from "react-icons/si";
import AnimatedText from "../Animations/AnimatedText";
import AnimatedFadeIn from "../Animations/AnimatedFadeIn";
import Button from "../Button";
import IndividiualSolution from "./IndividualSolutions";
import ScrollAnimation from "./TestAnimation";

function OurSolutions() {
  const data = [
    {
      id: 1,
      title: "Individual Solutions",
      solutionsList: [
        "Centralized Digital Identity",
        "One Tap Verification",
        "Controll over data sharing ",
        "Verification History and Logs ",
        "Global Reputation Score",
      ],
      icon: <HiOutlineUser />,
    },
    {
      id: 2,
      title: "Business Solutions",
      solutionsList: [
        "Easy KYC verifications",
        "Multi-Channel Verification Support",
        "Seamless Integration with CRM & Enterprise Systems",
        "Identity Recovery & Dispute Resolution Services",
        "Privacy & Fairness Measures",
      ],
      icon: <HiUserGroup />,
    },
  ];
  return (
    <section className="min-h-screen px-20 py-12 pb-0 flex flex-col gap-14 bottom-[2px]">
      <SectionHead
        mainHead="our solutions"
        subHead="Get high qualities solutions for all of your personal requirements"
      />
      {/* <IndividiualSolution /> */}
      <ScrollAnimation />

      {/* <div className="max-w-fit self-center">
        <Button>Gets Started</Button>
      </div> */}
    </section>
  );
}

export default OurSolutions;

/*

 {/* <AnimatedFadeIn>
        <div className="min-h-[30rem] max-h-[55rem] grid grid-cols-2 gap-10">
          {data.map(({ title, solutionsList, icon }, index) => (
            <div
              key={index}
              className="min-h-full min-w-full border-4 rounded-xl border-green-500 bg-white p-4"
            >
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <svg className="h-[4rem] w-[4rem] text-[4rem] text-green-500 flex items-center justify-center">
                    {icon}
                  </svg>

                  <p className="text-4xl capitalize text-primary-800 font-semibold">
                    {title}
                  </p>
                </div>

                <ul className="px-4 py-6 flex flex-col gap-6">
                  {solutionsList.map((solution, idx) => (
                    <li key={idx} className="flex gap-4 items-center">
                      <svg className="h-6 w-6 text-2xl text-green-400">
                        <SiTicktick />
                      </svg>
                      <AnimatedText
                        text={solution}
                        className="text-2xl text-primary-700"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </AnimatedFadeIn> */
