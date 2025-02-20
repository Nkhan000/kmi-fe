import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { MdNotificationsActive } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

export default async function NavigationLogin() {
  return (
    <nav className="z-10 text-lg">
      <ul className="flex gap-4 items-center text-primary-800">
        {/* <li>
          <Link
            href="/login"
            className="hover:text-primary-500 transition-colors"
          >
            <Button>Login</Button>
          </Link>
        </li> */}

        {/* if user is logged in */}
        <li>
          <Link
            href="/dashboard"
            className="gap-4 flex border h-12 w-12 items-center justify-center rounded-full hover:bg-primary-50 ease-in duration-150"
          >
            <svg className="h-6 w-6 text-2xl flex items-center justify-center">
              <CgMenuGridO />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className="gap-4 flex border h-12 w-12 items-center justify-center rounded-full hover:bg-primary-50 ease-in duration-150"
          >
            <svg className="h-6 w-6 text-2xl flex items-center justify-center">
              <MdNotificationsActive />
            </svg>
          </Link>
        </li>

        <li>
          <Link href="/dashboard" className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-300">
              <Image src="/pp.jpg" alt="userImg" fill className="objec-cover" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
