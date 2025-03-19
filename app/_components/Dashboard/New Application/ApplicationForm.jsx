import Image from "next/image";
import StyledTag from "../../StyledTag";
import { MdCancel } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import Button from "../../Button";
import Link from "next/link";

export default function ApplicationForm() {
  const data = [
    {
      status: "verified",
      message: "citizenship is verified",
    },
    {
      status: "verified",
      message: "passport is verified",
    },
    {
      status: "unverified",
      message: "location is not verified",
    },
    {
      status: "verified",
      message: "contact number is verified",
    },
    {
      status: "verified",
      message: "email is verified",
    },
  ];

  return (
    <main className="grid grid-rows-[2.8rem_1fr] h-[80vh] w-[75vw] gap-8">
      <header>
        <h1 className="text-5xl font-semibold text-primary-400">
          Application for KYC Verification
        </h1>
      </header>
      <section className="grid gap-6 grid-cols-[60%_1fr] overflow-hidden px-6">
        <div className="flex flex-col gap-5 py-4">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                fill
                src="/pp.jpg"
                alt="company-logo"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl text-primary-700 font-semibold">
                Nepal Bank Limited
              </span>
              <span className="text-xl text-primary-700">Government Bank</span>
            </div>
          </div>
          <div className="pl-2">
            <span className="font-semibold text-primary-600">About : </span>
            <p className="text-primary-800 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              harum! Maxime reprehenderit qui alias dolor quas, facere repellat
              ex voluptatum non quisquam tenetur illum natus mollitia, saepe
              dolores asperiores expedita. Lorem ipsum dolor sit amet,
              <br />
              <br />
              consectetur adipisicing elit. Sit ducimus nobis, facilis omnis
              recusandae voluptates. Cupiditate possimus officiis vero vel illo
              neque ipsa explicabo, laudantium reiciendis. Quis quas maxime qui.
            </p>
          </div>
        </div>

        {/* <div className="border-4 flex flex-col gap-4 p-4 bg-green-50 border-green-200 rounded-xl min-h-full"> */}
        <div className="border-4 flex flex-col gap-4 p-4 bg-red-50 border-red-200 rounded-xl min-h-full">
          <div className="flex flex-col gap-4 items-center">
            <span className="text-primary-700 text-5xl font-semibold">
              {/* All Set 😉✅ */}
              OOPS !😢
            </span>
            <span className="text-primary-600 text-lg">
              {/* You are all set to go. Below listed documents are required for
              your application verification. */}
              Looks like there are few documents yet to be verified. Verify them
              first
            </span>
          </div>

          <div className="flex flex-col gap-2 ">
            <span className="text-primary-600 text-sm font-semibold">
              Required Documents :
            </span>
            <ul className="flex flex-col gap-2">
              {data.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <svg
                    className={`h-5 w-5 text-xl ${
                      item.status == "verified"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.status == "verified" ? (
                      <MdCheckCircle />
                    ) : (
                      <MdCancel />
                    )}
                  </svg>
                  <div className="flex items-center gap-3">
                    <span className="text-primary-800 text-lg capitalize">
                      {item.message}
                    </span>
                    {item.status != "verified" && (
                      <Link href="/">
                        <span className="text-sm text-primary-500 italic hover:underline hover:text-primary-400 hover:translate-x-6">
                          Update here -&gt;
                        </span>
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto pb-1 self-end">
            <Button isDisabled={true} size="lg">
              Continue Application
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
