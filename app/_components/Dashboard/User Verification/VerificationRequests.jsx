import Image from "next/image";
import AnimatedFadeIn from "../../Animations/AnimatedFadeIn";
import Button from "../../Button";
import StyledOption from "../../StyledOptions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const data = [
  {
    name: "nepal rastriya bank ltd.",
    purpose: "kyc verification",
    requestedOn: Date(1741678587979),
    details: {},
  },
  {
    name: "Rastriya banijya bank.",
    purpose: "kyc verification",
    requestedOn: Date(1741678587979),
    details: {},
  },
  {
    name: "NEPSE TMS pvt. ltd.",
    purpose: "kyc verification",
    requestedOn: Date(1741678587979),
    details: {},
  },
  {
    name: "mero share",
    purpose: "kyc verification",
    requestedOn: Date(1741678587979),
    details: {},
  },
  {
    name: "Khalti Mobile App",
    purpose: "kyc verification",
    requestedOn: Date(1741678587979),
    details: {},
  },
  {
    name: "Rastriya banijya bank.",
    purpose: "kyc verification",
    requestedOn: Date(1741678587979),
    details: {},
  },
];

export default function VerificationRequests() {
  const typeValuesArr = [
    "all requests",
    "kyc verification",
    "employee verification",
    "business verification",
  ];
  const sortbyValuesArr = ["most recent", "least recent"];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const typeParam = searchParams.get("type");
    const sortParam = searchParams.get("sort-by");
    if (!typeParam || !typeValuesArr.includes(typeParam)) {
      params.set("type", "all requests");
    }
    if (!sortParam || !sortbyValuesArr.includes(sortParam)) {
      params.set("sort-by", "most recent");
    }

    router.push(`${pathname}?${params.toString()}`);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <nav className="flex justify-end gap-4">
        <StyledOption name="type" valuesArr={typeValuesArr} />
        <StyledOption name="sort-by" valuesArr={sortbyValuesArr} />
      </nav>
      <ul className="grid grid-cols-1 gap-4 p-4">
        {data.map(({ name, purpose, requestedOn, details }, idx) => (
          <li
            key={idx}
            className="border border-green-200 rounded-lg py-2 px-4 flex items-center justify-between ease-in-out duration-200 hover:-translate-y-1 hover:bg-neutral-100"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[0.65rem] text-primary-300 italic">
                Date: {new Date(requestedOn).toLocaleDateString()}
              </span>
              <div className="flex items-center gap-2">
                <div className="overflow-hidden h-12 w-12 rounded-full relative">
                  <Image
                    src="/pp.jpg"
                    fill
                    className="object-cover"
                    alt="company-img"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-lg capitalize text-primary-800 font-semibold">
                    {name}
                  </span>
                  <span className=" capitalize text-sm text-primary-800">
                    Requested for: {purpose}
                  </span>
                </div>
              </div>
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
}
