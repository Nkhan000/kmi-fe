import StyledTag from "../../StyledTag";

const mockData = [
  {
    name: "general Information",
    status: "revert",
    verifiedNum: "08/10",
    message: "Primary contact, email not verified or selected. Click to edit.",
  },
  {
    name: "Documents",
    status: "pending",
    verifiedNum: "07/10",
    message: "Pending to verify 03 documents. Click to View Status",
  },
  {
    name: "Contact Numbers",
    status: "verified",
    verifiedNum: "05/05",
    message: "All Provided Numbers has been verified. Click to add more.",
  },
  {
    name: "Email Addresses",
    status: "verified",
    verifiedNum: "05/05",
    message: "All Provided Emails has been verified. Click to add more.",
  },
  {
    name: "Addresses",
    status: "pending",
    verifiedNum: "04/05",
    message: "Pending to verify 01 address. Click to View Status",
  },
];

export default function ProfileStatus() {
  return (
    <ul className="grid grid-cols-2 gap-4 p-4">
      {mockData.map(({ name, status, verifiedNum, message }, idx) => (
        <li
          key={idx}
          className="border border-green-200 rounded-lg p-4 flex flex-col gap-2 ease-in-out duration-200 hover:-translate-y-1 hover:bg-neutral-100"
        >
          <div className="flex items-center gap-4">
            <span className="text-xl text-primary-800 font-semibold capitalize">
              {name}
            </span>
            <StyledTag
              type={
                status == "revert"
                  ? "danger"
                  : status == "pending"
                  ? "warning"
                  : "verified"
              }
            >
              {status}
            </StyledTag>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-primary-600">{verifiedNum}</span>
            <button
              className={`text-sm italic ${
                status == "revert"
                  ? "text-red-300"
                  : status == "pending"
                  ? "text-yellow-400"
                  : "text-green-400"
              } hover:underline`}
            >
              {message}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
