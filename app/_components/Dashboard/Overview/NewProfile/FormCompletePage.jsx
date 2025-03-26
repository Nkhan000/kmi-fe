import AnimatedImgFloat from "@/app/_components/Animations/AnimatedImgFloat";
import Button from "@/app/_components/Button";
import Link from "next/link";
import { TbCircleDashedCheck } from "react-icons/tb";

export default function FormCompletePage() {
  return (
    <section className="min-w-full min-h-full flex justify-center flex-col items-center gap-6 py-16">
      <header>
        <AnimatedImgFloat>
          <div className="h-40 w-40 bg-green-50 border grid items-center justify-center rounded-full text-[9rem] text-green-400">
            <TbCircleDashedCheck />
          </div>
        </AnimatedImgFloat>
      </header>
      <div className="flex shrink-0 flex-col items-center gap-4">
        <span className="text-6xl font-extrabold text-primary-700 family">
          WELL DONE !
        </span>
        <span className="text-xl font-semibold text-primary-500">
          Your application has been successfully submitted.🥳
        </span>

        <span className="text-md text-primary-400 ">
          Note: You can edit and add further information to your profile from
          the{" "}
          <strong>
            <Link target="_blank" href="/dashboard?field=overview">
              Overview
            </Link>
          </strong>{" "}
          page once verified
        </span>
      </div>
      <div>
        <Button size="lg">See application status</Button>
      </div>
    </section>
  );
}
