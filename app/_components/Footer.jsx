import Image from "next/image";
import LogoWithName from "./LogoWithName";

export default function Footer() {
  return (
    <div className="min-h-screen bg-brand-gradient-02 grid items-center justify-center">
      <LogoWithName />
    </div>
  );
}
