import Button from "../../Button";

export default function SharedInformationTable() {
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
    <section className="max-h-svh flex flex-col gap-6">
      <form className="self-end flex items-stretch gap-4 ">
        <input
          name="search-name"
          placeholder="Search by name"
          type="text"
          className="border-2 text-primary-800 border-green-200 px-3 py-2 rounded-md focus:border-green-400 focus:outline-green-400"
        />
        <Button size="sm">Search</Button>
      </form>

      <div className="max-h-svh rounded-lg overflow-y-scroll no-scrollbar border border-primary-50">
        <div className="bg-primary-50 grid grid-cols-[30rem_1fr_1fr] px-8 py-4">
          <span className="text-primary-800 font-semibold text-lg">
            Name of Company
          </span>
          <span className="text-primary-800 font-semibold text-lg">Type</span>
          <span className="text-primary-800 font-semibold text-lg">
            Purpose
          </span>
        </div>
        {data.map(({ name, type, purpose }, idx) => (
          <div
            key={idx}
            className="hover:bg-gray-100 ease-out duration-100 grid grid-cols-[30rem_1fr_1fr] items-center px-8 py-4"
          >
            <div className="flex  items-center gap-4">
              <div className="rounded-full bg-green-300 h-7 w-7"></div>
              <span className="text-primary-800 capitalize">{name}</span>
            </div>
            <span className="text-primary-800 capitalize">{type}</span>
            <div className="flex items-center justify-between">
              <span className="text-primary-800 capitalize">{purpose}</span>
              <Button size="sm">See Details</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
