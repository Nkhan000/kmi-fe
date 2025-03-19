import Button from "../../Button";
import StyledTag from "../../StyledTag";
import { RiExpandDiagonalLine } from "react-icons/ri";
import ProviderTemplate from "./ProviderTemplate";
import StartApplication from "./StartApplication";

export default function NewApplication() {
  const data = [
    {
      name: "Nabil bank private limited",
      img: "/",
      type: "private/bank",
      purpose: "customer verification",
    },
    {
      name: "Everest bank private limited",
      img: "/",
      type: "private/bank",
      purpose: "customer verification",
    },
    {
      name: "Nepal Investment Mega bank private limited",
      img: "/",
      type: "private/bank",
      purpose: "customer verification",
    },
    {
      name: "Mero Share",
      img: "/",
      type: "private/Service",
      purpose: "customer verification",
    },
    {
      name: "TMS Pvt. Limited",
      img: "/",
      type: "governmment/Service",
      purpose: "customer verification",
    },
    {
      name: "Naasa Securities",
      img: "/",
      type: "private/Broker",
      purpose: "customer verification",
    },
    {
      name: "Mohit Agro Company Limited",
      img: "/",
      type: "private/Business",
      purpose: "Employee verification",
    },
    {
      name: "test bank private limited",
      img: "/",
      type: "private/bank",
      purpose: "customer verification",
    },
    {
      name: "test bank private limited",
      img: "/",
      type: "private/bank",
      purpose: "customer verification",
    },
  ];

  return (
    <section className="max-h-full grid grid-cols-[65%_1fr] gap-6 relative">
      <div className="flex flex-col gap-4">
        <form className="min-w-full grid grid-cols-[80%_1fr] items-stretch gap-4 ">
          <input
            name="search-name"
            placeholder="Search by company/bank by name"
            type="text"
            className="border-2 text-primary-800 border-green-200 px-3 py-2 rounded-md focus:border-green-400 focus:outline-green-400"
          />
          <Button size="sm">Search</Button>
        </form>
        <div className="p-4 min-h-full flex flex-col gap-4">
          <ProviderTemplate />
          <ProviderTemplate />
        </div>
      </div>
      <StartApplication />
    </section>
  );
}
