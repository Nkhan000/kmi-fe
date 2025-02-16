import DashboardSideNavigation from "../_components/Dashboard/DashboardSideNavigation";
import ProfileOverview from "@/app/_components/Dashboard/Profile/ProfileOverview";

export default function Dashboard() {
  return (
    <main
      className="max-h-screen overflow-y-scroll no-scrollbar grid grid-cols-[20rem_1fr]"
      role="main"
    >
      <aside role="complementary">
        <DashboardSideNavigation />
      </aside>
      <div>
        <ProfileOverview />
      </div>
    </main>
  );
}
