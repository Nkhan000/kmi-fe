"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import DashboardSideNavigation from "../_components/Dashboard/DashboardSideNavigation";
import ProfileOverview from "@/app/_components/Dashboard/Overview/ProfileOverview";
import { useCallback, useEffect } from "react";
import SharedInformationTable from "../_components/Dashboard/Shared Information/SharedInformationTable";
import UserVerification from "../_components/Dashboard/User Verification/UserVerification";
import NewApplication from "../_components/Dashboard/New Application/NewApplication";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currField = searchParams.get("field");

  function checkCurrField(currParam) {
    const includedFields = [
      "overview",
      "new-application",
      "shared-informations",
      "user-verification",
      "feedback-and-support",
      "logout",
    ];
    return includedFields.includes(currParam);
  }

  useEffect(() => {
    if (!currField) {
      router.replace("/dashboard?field=overview");
      return;
    }

    if (!checkCurrField(currField)) {
      throw new Error("Page could not be found");
    }
  }, [currField, router]);

  return (
    <main
      className="overflow-y-scroll max-h-screen grid grid-cols-[20rem_1fr]"
      role="main"
    >
      <aside className="relative h-full" role="complementary">
        <DashboardSideNavigation />
      </aside>
      <div className="">
        <div className="max-h-full bg-white py-6 px-10 flex flex-col gap-4">
          <div className="min-w-full h-16 flex justify-between items-center">
            <span className="inline-block text-5xl font-semibold text-primary-800 capitalize">
              {checkCurrField(currField) &&
                searchParams.get("field").split("-").join(" ")}
            </span>
          </div>
        </div>
        <div className="px-10">
          {currField == "overview" && <ProfileOverview />}
          {currField == "shared-informations" && <SharedInformationTable />}
          {currField == "user-verification" && <UserVerification />}
          {currField == "new-application" && <NewApplication />}
        </div>
      </div>
    </main>
  );
}
