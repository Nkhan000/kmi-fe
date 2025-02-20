"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import DashboardSideNavigation from "../_components/Dashboard/DashboardSideNavigation";
import ProfileOverview from "@/app/_components/Dashboard/Overview/ProfileOverview";
import { useEffect } from "react";
import SharedInformationTable from "../_components/Dashboard/Shared Information/SharedInformationTable";
import UserVerification from "../_components/Dashboard/User Verification/UserVerification";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (!searchParams.get("field")) router.replace("/dashboard?field=overview");
  }, [searchParams, router]);

  return (
    <main className="min-h-screen grid grid-cols-[20rem_1fr]" role="main">
      <aside role="complementary">
        <DashboardSideNavigation />
      </aside>
      <div>
        <div className="max-h-svh bg-white py-6 px-10 flex flex-col gap-4">
          <div className="min-w-full h-16 flex justify-between items-center">
            <span className="inline-block text-5xl font-semibold text-primary-800 capitalize">
              {searchParams.get("field")?.split("-").join(" ")}
            </span>
          </div>
        </div>
        <div className="px-10">
          {searchParams.get("field") == "overview" && <ProfileOverview />}
          {searchParams.get("field") == "shared-informations" && (
            <SharedInformationTable />
          )}
          {searchParams.get("field") == "user-verification" && (
            <UserVerification />
          )}
        </div>
      </div>
    </main>
  );
}
