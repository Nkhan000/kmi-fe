import { FcGoogle } from "react-icons/fc";
import Button from "../Button";

export default function LoginForm() {
  return (
    <div className="">
      <h1 className="text-6xl font-semibold">LOGIN</h1>
      <form>
        <div>
          <label htmlFor="username">Enter user name</label>
          <input id="username" type="text" placeholder="Enter username" />
        </div>
        <div>
          <label htmlFor="email">Enter Email</label>
          <input id="email" type="email" placeholder="enter email" />
        </div>
        <div>
          <label htmlFor="paswword">Enter user password</label>
          <input id="paswword" type="password" placeholder="enter paswword" />
        </div>
        <div>
          <label htmlFor="confirm_password">Enter user name</label>
          <input
            id="confirm_password"
            type="password"
            placeholder="confirm password"
          />
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>

      <div>
        <span>Continue with gmail</span>{" "}
        <svg>
          <FcGoogle />
        </svg>
      </div>
    </div>
  );
}
