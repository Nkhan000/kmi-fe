import Link from "next/link";
import Button from "./Button";

export default async function NavigationLogin() {
  return (
    <nav className="z-10 text-lg">
      <ul className="flex gap-10 items-center text-primary-800">
        <li>
          <Link
            href="/login"
            className="hover:text-primary-500 transition-colors"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className="hover:text-primary-500 transition-colors"
          >
            <Button>Login</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
