"use client";
import Button from "../../Button";
import StyledTag from "../../StyledTag";
import Image from "next/image";
import StyledOption from "../../StyledOptions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function VerificationLogs() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const showValuesArr = ["all", "verified", "pending", "rejected"];
  const sortbyValuesArr = ["most recent", "least recent"];

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const showParam = searchParams.get("show");
    const sortParam = searchParams.get("sort-by");
    if (!showParam || !showValuesArr.includes(showParam)) {
      params.set("show", "all");
    }
    if (!sortParam || !sortbyValuesArr.includes(sortParam)) {
      params.set("sort-by", "most recent");
    }

    router.push(`${pathname}?${params.toString()}`);
  }, []);

  const logs = [
    {
      updatedOn: 1741678587979,
      status: "verified",
      message: "application has been approved 😉",
      type: "kyc verification",
      orgName: "nepal rastriya bank",
    },
    {
      updatedOn: 1741678587979,
      status: "pending",
      message:
        "application under verification. See details for more information",
      type: "kyc verification",
      orgName: "Mero share",
    },
    {
      updatedOn: 1741678587979,
      status: "verified",
      message: "application has been approved 😉",
      type: "kyc verification",
      orgName: "Esewa Wallet",
    },
    {
      updatedOn: 1741678587979,
      status: "rejected",
      message: "application was rejected. See details for more information",
      type: "Employee verification",
      orgName: "Test Organizations",
    },
    {
      updatedOn: 1741678587979,
      status: "verified",
      message: "application has been approved 😉",
      type: "kyc verification",
      orgName: "nepal mega bank limited bank",
    },
    {
      updatedOn: 1741678587979,
      status: "rejected",
      message: "application was rejected. See details for more information",
      type: "Employee verification",
      orgName: "Test Organizations",
    },
    {
      updatedOn: 1741678587979,
      status: "verified",
      message: "application has been approved 😉",
      type: "kyc verification",
      orgName: "nepal mega bank limited bank",
    },
    {
      updatedOn: 1741678587979,
      status: "rejected",
      message: "application was rejected. See details for more information",
      type: "Employee verification",
      orgName: "Test Organizations",
    },
    {
      updatedOn: 1741678587979,
      status: "verified",
      message: "application has been approved 😉",
      type: "kyc verification",
      orgName: "nepal mega bank limited bank",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <nav className="flex justify-end gap-4">
        <StyledOption name="show" valuesArr={showValuesArr} />
        <StyledOption name="sort-by" valuesArr={sortbyValuesArr} />
      </nav>
      <ul className="grid grid-cols-1 gap-4 p-4">
        {logs.map(({ status, message, updatedOn, orgName, type }, idx) => (
          <ListItem
            status={status}
            updatedOn={updatedOn}
            orgName={orgName}
            message={message}
            type={type}
            key={idx}
          />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ status, orgName, type, message, updatedOn }) {
  const listClass =
    status === "verified"
      ? "border border-green-300 hover:border-green-500"
      : status === "pending"
      ? "border border-yellow-300  hover:border-yellow-500"
      : "border border-red-300  hover:border-red-500";

  return (
    <li
      className={`rounded-lg p-4 flex items-center justify-between ease-in-out duration-200 hover:-translate-y-1 hover:bg-neutral-100 ${listClass}`}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-[0.7rem] text-primary-300 italic">
            Date : {new Date(updatedOn).toLocaleDateString()}{" "}
            {new Date(updatedOn).toLocaleTimeString()}
          </span>
          <StyledTag size="sm" type={status}>
            {status}
          </StyledTag>
        </div>

        <div className="flex items-center gap-2">
          <div className="overflow-hidden h-10 w-10 rounded-full relative">
            <Image
              src="/pp.jpg"
              fill
              className="object-cover"
              alt="company-img"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <span className="text-lg capitalize text-primary-800 font-semibold">
                {orgName}: &nbsp;
              </span>
              <span className=" capitalize text-lg text-primary-800 font-semibold">
                {type}{" "}
              </span>
              <span className="text-lg text-primary-800">{message} </span>
            </div>
            <div>
              <span className="text-sm italic text-primary-800">
                Click to see more details
              </span>
            </div>
          </div>
        </div>
      </div>

      <Button size="sm" type="tertiary">
        See details
      </Button>
    </li>
  );
}
