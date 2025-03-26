import Button from "@/app/_components/Button";
import StyledTag from "@/app/_components/StyledTag";
import { LuCircleDashed } from "react-icons/lu";
import { TbCircleDashedCheck } from "react-icons/tb";

export default function LegalInfoForm() {
  const data = [
    {
      name: "Profile Picture",
      required: true,
    },
    {
      name: "National ID card",
      required: true,
    },
    {
      name: "Citizenship Certificate",
      required: true,
    },
    {
      name: "Birth Certificate",
      required: true,
    },
    {
      name: "passport",
      required: false,
    },
    {
      name: "NOC ceritificate",
      required: false,
    },
  ];
  return (
    <form className="flex flex-col gap-4 px-4">
      <header className="flex flex-col gap-1">
        <span className="text-xl text-primary-600 ">
          Please upload your following documents for further verifications
        </span>
        <span className="px-1 text-sm text-primary-400">
          If has two sides then Upload both sides of a document in a single
          frame
        </span>
      </header>

      <div className="flex flex-col gap-4">
        {data.map(({ name, required }, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[2rem_15rem_6rem] gap-1 items-center"
          >
            <svg className="h-6 w-6 text-[1.5rem] text-green-400">
              <LuCircleDashed />
            </svg>
            <span className=" capitalize text-xl text-primary-300">{name}</span>
            <div className="relative">
              <label
                className="px-3 py-2 cursor-pointer ease-in duration-200 bg-green-400 hover:bg-green-500 text-white rounded-lg font-semibold"
                htmlFor={name}
              >
                Upload +
              </label>
              <input id={name} className="hidden" type="file" />
              {required && (
                <div className="absolute top-0 -right-[100%]">
                  <StyledTag size="sm">required</StyledTag>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="self-end flex items-center gap-4">
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </form>
  );
}
