import AnimatedFadeIn from "../../Animations/AnimatedFadeIn";
import Button from "../../Button";
import StyledTag from "../../StyledTag";

const data = [
  {
    name: "nepal rastriya bank ltd.",
    purpose: "kyc verification",
    requestedOn: 1740816696893,
    details: {},
  },
  {
    name: "Rastriya banijya bank.",
    purpose: "kyc verification",
    requestedOn: 1740816696893,
    details: {},
  },
  {
    name: "NEPSE TMS pvt. ltd.",
    purpose: "kyc verification",
    requestedOn: 1740816696893,
    details: {},
  },
  {
    name: "mero share",
    purpose: "kyc verification",
    requestedOn: 1740816696893,
    details: {},
  },
  {
    name: "Khalti Mobile App",
    purpose: "kyc verification",
    requestedOn: 1740816696893,
    details: {},
  },
  {
    name: "Rastriya banijya bank.",
    purpose: "kyc verification",
    requestedOn: 1740816696893,
    details: {},
  },
];
export default function VerificationRequest() {
  return (
    <AnimatedFadeIn>
      <ul className="grid grid-cols-1 gap-4 p-4">
        {data.map(({ name, purpose, requestedOn, details }, idx) => (
          <li
            key={idx}
            className="border border-green-200 rounded-lg p-4 flex items-center justify-between ease-in-out duration-200 hover:-translate-y-1 hover:bg-neutral-100"
          >
            <div className="flex flex-col">
              <span className="text-[0.65rem] text-primary-300 italic">
                {Date(requestedOn)}
              </span>

              <span className="text-xl text-primary-800 font-semibold capitalize">
                {name}
              </span>

              <span className="text-sm text-primary-600">
                For: {purpose}. click to see details
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" type="primary">
                Accept
              </Button>
              <Button size="sm">Reject</Button>
              <Button size="sm" type="tertiary">
                See details
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </AnimatedFadeIn>
  );
}

// ${
//     status == "revert"
//       ? "text-red-300"
//       : status == "pending"
//       ? "text-yellow-400"
//       : "text-green-400"
//   }
