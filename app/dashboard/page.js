import DashboardSideNavigation from "../_components/Dashboard/DashboardSideNavigation";

export default function Dashboard() {
  return (
    <main className="min-h-screen grid grid-cols-[20rem_1fr]" role="main">
      <aside role="complementary">
        <DashboardSideNavigation />
      </aside>
      <div className="min-h-full bg-primary-50">&nbsp;</div>
    </main>
  );
}
