import Image from "next/image";

export default function Footer() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_rgba(246,255,245,1)_0%,_rgba(195,255,198,0.63)_35%,_rgba(195,255,198,0.63)_100%)] grid items-center justify-center">
      <div className="p-8 flex gap-4 h-fit items-center">
        <div className="relative min-h-[6rem] max-h-[6rem] max-w-[10rem] min-w-[10rem] p-4 overflow-hidden">
          <Image fill src="/logo.png" alt="user" className="object-cover" />
        </div>
        <div className="border-l-2 pl-4 border-l-primary-950">
          <h2 className="text-3xl text-primary-900 font-semibold">
            KNOW MY IDENTITY &reg;
          </h2>
          <span className="text-xl text-primary-950">
            Your Identity, Secured & Simplified.
          </span>
        </div>
      </div>
    </div>
  );
}
