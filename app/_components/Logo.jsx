import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-4">
        <div className="relative h-10 w-16 overflow-hidden">
          <Image fill src="/logo.png" className="" alt="logo" />
        </div>
      </div>
    </Link>
  );
}

export default Logo;
