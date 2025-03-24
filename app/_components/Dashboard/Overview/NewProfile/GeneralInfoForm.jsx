import Button from "@/app/_components/Button";
import InputDiv from "@/app/_components/InputDiv";

export default function GeneralInfoForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <InputDiv id="full-name" label="Full Name" />
        <InputDiv id="mid-name" label="Middle Name" />
        <InputDiv id="last-name" label="last Name" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputDiv id="nationality" label="nationality" />
        <InputDiv id="contact" label="contact number" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <InputDiv
          className="col-start-1 col-end-3"
          id="perm-address"
          label="permanent address"
        />
        <InputDiv
          className="gap-2 row-start-2 col-start-1 col-end-3"
          id="Email"
          label="Email"
          type="email"
        />

        <div className="flex flex-col gap-2 row-span-2 items-center">
          <label
            htmlFor="add-img"
            className="text-primary-600 border-2 rounded-lg flex items-center justify-center max-w-[75%] min-h-full hover:bg-primary-100 ease-in duration-300 cursor-pointer"
          >
            <span className="text-md capitalize p-2">Click to add Image</span>
          </label>
          <input
            type="file"
            id="add-img"
            name="add-img"
            className="hidden"
            placeholder="Email Address"
          />
        </div>
      </div>
      <div className="self-end flex items-center gap-4">
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </form>
  );
}
