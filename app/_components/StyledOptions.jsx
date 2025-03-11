"use client";

// import { useRouter } from "next/router";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function StyledOption({ name, valuesArr }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  function handleParamChange(newParamVal) {
    params.set(name, newParamVal);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-2 border px-3 pr-0 rounded-md">
      <label className="text-primary-800 capitalize" htmlFor={name}>
        {name.includes("-") ? name.split("-").join(" ") : name} :
      </label>
      <select
        className="px-2 py-1 text-left capitalize text-primary-950 font-semibold focus:outline-green-400"
        id={name}
        defaultValue={params.get(name)}
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
