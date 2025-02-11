import Image from "next/image";

export default function LogoWithName({ size = "lg" }) {
  const imgHeight =
    size === "lg" ? "max-h-[6rem] min-h-[6rem]" : "max-h-[3rem] min-h-[3rem]";
  const imgWidht =
    size === "lg" ? "max-w-[10rem] min-w-[10rem]" : "max-w-[5rem] min-w-[5rem]";

  return (
    <div className="p-4 flex gap-4 h-fit items-center">
      <div
        className={`relative ${imgHeight} ${imgWidht} p-4 flex items-center justify-center`}
      >
        <Image fill src="/logo.png" alt="user" className="object-cover" />
      </div>

      <div className="border-l-2 pl-4 border-l-primary-950">
        <h2
          className={`text-${
            size == "lg" ? "3xl" : "lg"
          } text-primary-900 font-semibold`}
        >
          KNOW MY IDENTITY &reg;
        </h2>
        <span className="text-md text-primary-950">
          Your Identity, Secured & Simplified.
        </span>
      </div>
    </div>
  );
}
