import Image from "next/image";
import Link from "next/link";

export default function LogoWithName({
  size = "lg",
  logoColor = "dark",
  content = "Dashboard",
}) {
  const imgHeight =
    size === "lg"
      ? "max-h-[6rem] min-h-[6rem]"
      : "max-h-[2.5rem] min-h-[2.5rem]";
  const imgWidht =
    size === "lg" ? "max-w-[10rem] min-w-[10rem]" : "max-w-[4rem] min-w-[4rem]";

  return (
    <div className="p-4 flex gap-4 h-fit items-center">
      <Link
        href="/"
        className={`relative ${imgHeight} ${imgWidht} p-4 flex items-center justify-center`}
      >
        <Image
          fill
          src={`${logoColor == "dark" ? "/logo.png" : "/logo-white.png"}`}
          alt="user"
          className="object-cover"
        />
      </Link>

      <div className="border-l-2 pl-4 border-l-primary-950">
        <h2
          className={`text-${
            size == "lg" ? "3xl" : "xl"
          } text-primary-900 font-semibold uppercase`}
        >
          {content ? `${content}` : "Know my identity &reg;"}
        </h2>
        {!content && (
          <span className="text-md text-primary-950">
            Your Identity, Secured & Simplified.
          </span>
        )}
      </div>
    </div>
  );
}
