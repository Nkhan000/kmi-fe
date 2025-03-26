"use client";

// import { useRouter } from "next/router";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function StyledOption({ oreintation = "row", name, valuesArr }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  function handleParamChange(newParamVal) {
    params.set(name, newParamVal);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div
      className={`flex ${
        oreintation == "row" ? "items-center border" : "flex-col justify-center"
      } min-w-fit px-2 py-0 gap-2 rounded-md`}
    >
      <label className="text-primary-600 capitalize" htmlFor={name}>
        {name.includes("-") ? name.split("-").join(" ") : name}{" "}
        {oreintation == "row" ? ":" : ""}
      </label>
      <select
        className={`${
          oreintation == "row" ? "" : "border"
        } px-3 py-2 text-left capitalize text-primary-700 font-semibold focus:outline-green-400`}
        id={name}
        defaultValue={params.get(name) || `-- select ${name}--`}
        onChange={(e) => {
          handleParamChange(e.target.value);
        }}
      >
        {valuesArr.map((value, idx) => (
          <option key={idx} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
