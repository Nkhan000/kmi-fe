import { BsTextParagraph } from "react-icons/bs";
import ProfileOrbit from "@/app/_components/Animations/AnimatedProfileOrbit";
import { SiGrapheneos } from "react-icons/si";
import ProfileDetails from "./ProfileDetails";

export default function ProfileOverview() {
  return (
    <div className="min-h-screen bg-white py-6 px-10 flex flex-col gap-4">
      <div className="min-w-full h-16 flex justify-between items-center">
        <span className="inline-block text-5xl font-semibold text-primary-800">
          Overview
        </span>

        <div className="flex items-center border rounded-sm">
          <button className="border rounded-sm bg-brand-gradient-03 px-4 py-2">
            <svg className="h-6 w-6 text-2xl text-primary-50 flex items-center justify-center">
              <SiGrapheneos />
            </svg>
          </button>
          <button className="border rounded-sm px-4 py-2">
            <svg className="h-6 w-6 text-2xl text-primary-50 flex items-center justify-center">
              <BsTextParagraph />
            </svg>
          </button>
        </div>
      </div>
      <div className="min-h-full px-2">
        {/* <ProfileOrbit /> */}
        <ProfileDetails />
      </div>
      {/* <div className="max-h-max overflow-y-scroll">
        <ProfileOrbit />
      </div> */}
    </div>
  );
}
