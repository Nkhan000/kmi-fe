import Button from "../../Button";
import StyledTag from "../../StyledTag";
import { RiExpandDiagonalLine } from "react-icons/ri";

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
        <div className="border min-h-full"></div>
      </div>

      <div className="sticky top-0 border rounded-lg border-primary-50">
        <div className="bg-primary-50 px-4 py-2">
          <span className="text-primary-800 font-semibold text-xl">
            Pending Applications
          </span>
        </div>

        <div className="p-2 ">
          <div className="relative rounded-md border-2 border-yellow-100 p-3 px-6 flex justify-center flex-col gap-2 hover:border-yellow-300 ease-in duration-150 group">
            <div className="flex gap-3 items-center">
              <div className="h-12 w-12 border shrink-0 rounded-full row-start-1 row-end-3"></div>
              <div>
                <span className="inline-block font-semibold text-lg text-primary-800">
                  KYC Verification Request
                </span>
                <span className="inline-block text-primary-700 text-md font-semibold justify-start">
                  Nepal Rastriya Bank
                </span>
              </div>
            </div>
            <span className="inline-block text-primary-700 text-sm font-semibold">
              Applied on : 2081/11/22
            </span>
            <div className="flex items-center gap-4">
              <span className="inline-block text-primary-700 text-sm font-semibold">
                Status :
              </span>
              <StyledTag type="warning">Pending</StyledTag>
            </div>
            <button className="top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute">
              <svg className="h-5 w-5 flex items-center justify-center text-primary-700 ">
                <RiExpandDiagonalLine />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
