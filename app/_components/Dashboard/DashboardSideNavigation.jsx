"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import LogoWithName from "../LogoWithName";
import Link from "next/link";
import { GrOverview } from "react-icons/gr";
import { TbShare } from "react-icons/tb";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";

export default function DashboardSideNavigation() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleParamChange(currParam) {
    if (searchParams.get("field") !== currParam) {
      router.push(`/dashboard?field=${currParam}`);
    }
  }

  const links = [
    { param: "overview", label: "overview", icon: <GrOverview /> },
    {
      param: "shared-informations",
      label: "Shared informations",
      icon: <TbShare />,
    },
    {
      param: "user-verification",
      label: "Verifications / status",
      icon: <VscVerifiedFilled />,
    },
    {
      param: "feedback-and-support",
      label: "Feedback & Support",
      icon: <BiSupport />,
    },
    { param: "logout", label: "logout", icon: <TbLogout /> },
  ];
  return (
    <div className="min-h-screen max-h-screen top-0 sticky grid py-6 px-3">
      <div className="min-h-full bg-primary-900 rounded-lg">
        <div>
          <LogoWithName logoColor="white" size="md" content="dashboard" />
        </div>

        <ul className="flex flex-col gap-3 py-4 px-2">
          {links.map(({ label, param, icon }, idx) => (
            <li key={idx} onClick={() => handleParamChange(param)}>
              <Link
                href="/"
                className={`min-w-full flex items-center gap-4 px-4 py-2 rounded-lg ease-out duration-200  ${
                  searchParams.get("field") == param
                    ? " text-primary-50 bg-green-500 shadow-sm "
                    : "hover:bg-primary-800"
                } `}
              >
                <svg className="flex items-center h-5 w-5 text-xl text-white">
                  {icon}
                </svg>
                <div className="text-lg capitalize">{label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
