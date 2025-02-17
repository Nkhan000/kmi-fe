"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function DashboardSideNavigation() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleParamChange(currParam) {
    if (searchParams.get("field") !== currParam) {
      router.push(`/dashboard?field=${currParam}`);
    }
  }

  const links = [
    { param: "overview", label: "overview" },
    { param: "shared-informations", label: "Shared informations" },
    { param: "user-settings", label: "User Settings" },
    { param: "feedback-and-support", label: "Feedback & Support" },
    { param: "logout", label: "logout" },
  ];
  return (
    <div className="min-h-full bg-brand-gradient-03 py-20">
      <ul className="flex flex-col">
        {links.map(({ label, param }, idx) => (
          <li
            key={idx}
            onClick={() => handleParamChange(param)}
            className={`text-xl relative capitalize px-12 py-5 hover:cursor-pointer before:absolute before:content-[""] after:absolute after:content-[""] before:h-8 before:w-8 after:w-8 after:h-8  ${
              searchParams.get("field") == param
                ? "bg-white text-primary-700  before:bg-transparent before:-top-8 before:-right-2 before:[border-bottom-right-radius:8rem] before:shadow-[12px_12px_5px_5px_white]"
                : ""
            } hover:bg-white ease-out duration-200 hover:text-primary-700`}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
