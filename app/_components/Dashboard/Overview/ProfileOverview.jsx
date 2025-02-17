import { useSearchParams } from "next/navigation";
import ProfileDetails from "./ProfileDetails";

export default function ProfileOverview() {
  const searchParams = useSearchParams();
  return (
    <div className="overflow-y-scroll no-scrollbar ">
      <ProfileDetails />
    </div>
  );
}
