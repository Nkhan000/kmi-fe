"use client";

import AnimatedFadeIn from "../../Animations/AnimatedFadeIn";
import Button from "../../Button";
import StyledTag from "../../StyledTag";
import { MdVerified } from "react-icons/md";
import { MdCancel } from "react-icons/md";

import { IoMdStopwatch } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";
// import { ImCross } from "react-icons/im";

export default function VerificationLogs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  function handleParamChange(paramName, newParamVal) {}

  const logs = [
    {
      updatedOn: Date.now(),
      status: "verified",
      message: "application has been approved 😉",
      type: "kyc verification",
      orgName: "nepal rastriya bank",
    },
    {
      updatedOn: Date.now(),
      status: "pending",
      message:
        "application under verification. See details for more information",
      type: "kyc verification",
      orgName: "Mero share",
    },
    {
      updatedOn: Date.now(),
      status: "verified",
      message: "application has been approved 😉",
      type: "kyc verification",
      orgName: "Esewa Wallet",
    },
    {
      updatedOn: Date.now(),
      status: "rejected",
      message: "application was rejected. See details for more information",
      type: "Employee verification",
      orgName: "Test Organizations",
    },
    {
      updatedOn: Date.now(),
      status: "verified",
      message: "application has been approved 😉",
      type: "kyc verification",
      orgName: "nepal mega bank limited bank",
    },
    {
      updatedOn: Date.now(),
      status: "rejected",
      message: "application was rejected. See details for more information",
      type: "Employee verification",
      orgName: "Test Organizations",
    },
    {
      updatedOn: Date.now(),
      status: "verified",
      message: "application has been approved 😉",
      type: "kyc verification",
      orgName: "nepal mega bank limited bank",
    },
    {
      updatedOn: Date.now(),
      status: "rejected",
      message: "application was rejected. See details for more information",
      type: "Employee verification",
      orgName: "Test Organizations",
    },
    {
      updatedOn: Date.now(),
      status: "verified",
      message: "application has been approved 😉",
      type: "kyc verification",
      orgName: "nepal mega bank limited bank",
    },
  ];

  const liClassBorder = ``;

  return (
    <div className="flex flex-col gap-3">
      <nav className="flex justify-end gap-4">
        <div className="flex items-center gap-2 border px-3 pr-0 rounded-md">
          <label className="text-primary-800 " htmlFor="show">
            Show :
          </label>
          <select
            className="px-2 py-1 text-left text-primary-950 font-semibold focus:outline-green-400"
            id="show"
            defaultValue="all"
            onChange={(e) => {
              handleParamChange("show", e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="verified">Verified</option>
            <option value="pending">Pending</option>
            <option value="Rejected">Rejected</option>
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
            onChange={(e) => {
              handleParamChange("order", e.target.value);
            }}
          >
            <option value="most-recent">Most Recent</option>
            <option value="least-recent">Least Recent</option>
          </select>
        </div>
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

  const iconClass =
    status === "verified"
      ? "text-green-400"
      : status === "pending"
      ? "text-yellow-500"
      : "text-red-500";
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
          <svg className={`h-6 w-6 text-2xl ${iconClass}`}>
            {status === "verified" ? (
              <MdVerified />
            ) : status === "pending" ? (
              <IoMdStopwatch />
            ) : (
              <MdCancel />
            )}
          </svg>
          <div>
            {/* <span className="text-xl text-primary-800">Your </span> */}
            <span className="text-lg capitalize text-primary-800 font-semibold">
              {orgName}: &nbsp;
            </span>
            <span className=" capitalize text-lg text-primary-800 font-semibold">
              {type}{" "}
            </span>
            <span className="text-lg text-primary-800">{message} </span>
          </div>
        </div>
      </div>

      <Button size="sm" type="tertiary">
        See details
      </Button>
    </li>
  );
}

// ${
//     status == "revert"
//       ? "text-red-300"
//       : status == "pending"
//       ? "text-yellow-400"
//       : "text-green-400"
//   }
