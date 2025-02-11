import Image from "next/image";
import LogoWithName from "./LogoWithName";

export default function Footer() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_rgba(246,255,245,1)_0%,_rgba(195,255,198,0.63)_35%,_rgba(195,255,198,0.63)_100%)] grid items-center justify-center">
      <LogoWithName />
    </div>
  );
}
