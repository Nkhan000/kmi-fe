import AnimatedFadeIn from "../../Animations/AnimatedFadeIn";
import Button from "../../Button";

export default function VerificationLogs() {
  return (
    <AnimatedFadeIn>
      <ul className="grid grid-cols-1 gap-4 p-4">
        <li className="border border-green-200 rounded-lg p-4 flex items-center justify-between ease-in-out duration-200 hover:-translate-y-1 hover:bg-neutral-100">
          <div className="flex flex-col">
            <span className="text-[0.65rem] text-primary-300 italic">
              Date : 2081/05/01 - 10:00
            </span>

            <span className="text-xl text-primary-800 font-semibold">
              Your KYC application has been approved by Nepal Rastriya Bank
            </span>

            <span className="text-sm text-primary-600">
              You saved almost a day 😉
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" type="tertiary">
              See details
            </Button>
            <Button size="sm" variation="danger" type="primary">
              Report an Issue
            </Button>
          </div>
        </li>
      </ul>
    </AnimatedFadeIn>
  );
}
