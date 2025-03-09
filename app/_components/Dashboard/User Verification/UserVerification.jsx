"use client";

import { FaRegUserCircle } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { useRouter, useSearchParams } from "next/navigation";

import { useEffect } from "react";
import { LuLogs } from "react-icons/lu";
import ProfileStatus from "./ProfileStatus";
import VerificationRequests from "./VerificationRequests";
import VerificationLogs from "./VerificationLogs";
// import VerificationRequest from "./VerificationLogs";
// import VerificationLogs from "./VerificationRequests";
// import VerificationLogs from "./verificationLogs";
// import VerificationLogs from "./VerificationLogs";

export default function UserVerification() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (!searchParams.get("verification-tab")) {
      const fieldParam = searchParams.get("field");
      router.push(
        `/dashboard?field=${fieldParam}&verification-tab=profile-status`
      );
    }
  }, [searchParams]);

  function handleParamChange(currParam) {
    const fieldParam = searchParams.get("field");
    if (searchParams.get("verification-tab") !== currParam) {
      router.push(
        `/dashboard?field=${fieldParam}&verification-tab=${currParam}`
      );
    }
  }

  const links = [
    {
      label: "profile status",
      param: "profile-status",
      icon: <FaRegUserCircle />,
    },
    {
      label: "verification logs",
      param: "verification-logs",
      icon: <LuLogs />,
    },
    {
      label: "verification requests",
      param: "verification-requests",
      icon: <GrStatusGood />,
    },
  ];

  return (
    <section role="section overflow-y-scroll">
      <div className="grid gap-4">
        <ul className="flex gap-4 py-2 rounded-lg mt-4">
          {links.map(({ label, param, icon }, idx) => (
            <li
              key={idx}
              className={`border flex gap-4 items-center ease-in duration-200 cursor-pointer py-3 px-8 rounded-xl relative ${
                searchParams.get("verification-tab") == param
                  ? "bg-green-500"
                  : "bg-primary-200 hover:bg-green-400"
              }`}
              onClick={() => handleParamChange(param)}
            >
              <svg className="h-6 w-6 text-2xl text-white relative">{icon}</svg>
              <span className="text-white text-lg capitalize">{label}</span>
            </li>
          ))}
        </ul>
        {searchParams.get("verification-tab") === "profile-status" && (
          <ProfileStatus />
        )}
        {searchParams.get("verification-tab") === "verification-requests" && (
          <VerificationRequests />
        )}
        {searchParams.get("verification-tab") === "verification-logs" && (
          <VerificationLogs />
        )}
      </div>
    </section>
  );
}
