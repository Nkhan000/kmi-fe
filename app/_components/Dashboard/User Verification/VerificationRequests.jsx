import AnimatedFadeIn from "../../Animations/AnimatedFadeIn";
import Button from "../../Button";

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

export default function VerificationRequests() {
  return (
    <div className="flex flex-col gap-3">
      <nav className="flex justify-end gap-4">
        <div className="flex items-center gap-2 border px-3 pr-0 rounded-md">
          <label className="text-primary-800 " htmlFor="show">
            Type :
          </label>
          <select
            className="capitalize px-2 py-1 text-primary-950 font-semibold focus:outline-green-400"
            id="show"
            defaultValue="all"
          >
            <option value="all">All</option>
            <option value="kyc verification">KYC verification</option>
            <option value="employee verification">employee verification</option>
            <option value="business verification">Business verification</option>
          </select>
        </div>
        <div className="flex items-center gap-2 border px-3 pr-0 rounded-md">
          <label className="text-primary-800 " htmlFor="recent">
            Sort By :
          </label>
          <select
            className="px-2 py-1 text-primary-950 font-semibold focus:outline-green-400"
            id="recent"
            defaultValue="most-recent"
          >
            <option value="most-recent">Most Recent</option>
            <option value="least-recent">Least Recent</option>
          </select>
        </div>
      </nav>
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
    </div>
  );
  // return (
  //   <AnimatedFadeIn>
  //     <ul className="grid grid-cols-1 gap-4 p-4">
  //       <li className="border border-green-200 rounded-lg p-4 flex items-center justify-between ease-in-out duration-200 hover:-translate-y-1 hover:bg-neutral-100">
  //         <div className="flex flex-col">
  //           <span className="text-[0.65rem] text-primary-300 italic">
  //             Date : 2081/05/01 - 10:00
  //           </span>

  //           <span className="text-xl text-primary-800 font-semibold">
  //             Your KYC application has been approved by Nepal Rastriya Bank
  //           </span>

  //           <span className="text-sm text-primary-600">
  //             You saved almost a day 😉
  //           </span>
  //         </div>

  //         <div className="flex items-center gap-2">
  //           <Button size="sm" type="tertiary">
  //             See details
  //           </Button>
  //           <Button size="sm" variation="danger" type="primary">
  //             Report an Issue
  //           </Button>
  //         </div>
  //       </li>
  //     </ul>
  //   </AnimatedFadeIn>
  // );
}
