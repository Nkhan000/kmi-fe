"use client";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button";
import LogoWithName from "../LogoWithName";
export default function SignupForm({ handleLoginState }) {
  return (
    <div className="flex flex-col items-center justify-between py-16 gap-3">
      <LogoWithName size="md" />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-primary-700 capitalize">
          let's get started 😊
        </h1>
        <span className="text-xs text-primary-700">
          Enter details to continue &#10140;
        </span>
      </div>
      <form className="min-w-full p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <input
            id="fullname"
            type="text"
            placeholder="Full name"
            className="text-primary-800 placeholder:text-primary-500 border-2 px-4 py-2 border-green-100 rounded-md outline-green-100 active:outline-green-300 focus:outline-green-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="text-primary-800 placeholder:text-primary-500 border-2 px-4 py-2 border-green-100 rounded-md outline-green-100 active:outline-green-300 focus:outline-green-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            id="paswword"
            type="password"
            placeholder="Paswword"
            className="text-primary-800 placeholder:text-primary-500 border-2 px-4 py-2 border-green-100 rounded-md outline-green-100 active:outline-green-300 focus:outline-green-300"
          />
        </div>

        <div className="self-center">
          <Button>Signup</Button>
        </div>
      </form>

      <div className="flex gap-2 items-center">
        <span className="text-primary-500">Already have an account ?</span>
        <button
          className="text-primary-950 hover:text-green-500 ease-in duration-150"
          onClick={handleLoginState}
        >
          Login
        </button>
      </div>

      <div className="flex gap-4 items-center justify-center px-4 py-2 border min-w-full rounded-lg">
        <span className="text-lg text-primary-900 font-light">
          Continue with gmail
        </span>{" "}
        <svg className="h-6 w-6 text-[1.5rem]">
          <FcGoogle />
        </svg>
      </div>
    </div>
  );
}
