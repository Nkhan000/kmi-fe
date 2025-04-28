import Button from "@/app/_components/Button";

export default function VerifyNumAndEmail() {
  return (
    <section className=" flex flex-col gap-6 flex-shrink-0">
      <div className="py-2 px-4 flex flex-col gap-3">
        <span className="text-xl text-primary-500">
          A verification code has been sent to na*************j@gmail.com
        </span>

        <div className="flex gap-3 items-center">
          <input
            type="text"
            className="p-2 border rounded-md min-w-80"
            placeholder="Enter verification code here"
          />
          <button className="text-white hover:bg-green-500 ease-in duration-200 rounded-lg px-3 py-2 bg-green-400">
            Click to verify
          </button>
        </div>
        <button className="px-1 hover:text-green-400 max-w-fit text-sm text-primary-300 capitalize">
          Didn't recieve the code. click to resend
        </button>
      </div>
      <div className="py-2 px-4 flex flex-col gap-3">
        <span className="text-lg text-primary-500">
          An OTP code has been sent to +977-98xxxxxxxxxx1
        </span>

        <div className="flex gap-3 items-center">
          <input
            type="text"
            className="p-2 border rounded-md min-w-80"
            placeholder="Enter verification code here"
          />
          <button className="text-white hover:bg-green-500 ease-in duration-200 rounded-lg px-3 py-2 bg-green-400">
            Click to verify
          </button>
        </div>
        <button className="px-1 hover:text-green-400 max-w-fit text-sm text-primary-300 capitalize">
          Didn't recieve the code. click to resend
        </button>
      </div>

      {/* <div className="self-end flex items-center gap-4">
        <Button>Prev</Button>
        <Button>Next</Button>
      </div> */}
    </section>
  );
}
