import Link from "next/link";
// import { auth } from "@/app/_lib/auth";

export default async function NavigationMenu() {
  //   const session = await auth();

  return (
    <nav className="z-10 text-lg">
      <ul className="flex gap-16 items-center text-primary-800">
        <li>
          <Link
            href="/cabins"
            className="hover:text-primary-500 transition-colors"
          >
            Who we are ?
          </Link>
        </li>
        <li>
          <Link
            href="/cabins"
            className="hover:text-primary-500 transition-colors"
          >
            Solutions
          </Link>
        </li>
        <li>
          <Link
            href="/cabins"
            className="hover:text-primary-500 transition-colors"
          >
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
}
