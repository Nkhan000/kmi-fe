import Button from "@/app/_components/Button";
import GeneralInfoForm from "./GeneralInfoForm";
import LegalInfoForm from "./LegalInfoForm";
import FormCompletePage from "./FormCompletePage";
import VerifyNumAndEmail from "./VerifyNumAndEmail";

export default function NewProfileForm() {
  return (
    <section className="max-h-[85vh] min-h-[85vh] min-w-[80vw] max-w-[80vw] no-scrollbar overflow-y-scroll p-4 flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <h1 className="text-5xl font-semibold text-primary-200">
          Setup Your New Profile
        </h1>
        <span className="text-primary-700 text-xl">
          You must upload and verify your details to continue using our platform
          😉
        </span>
      </header>

      <div className="relative flex min-h-fit m-2 px-3 py-8 pb-4 border-2 border-green-300 rounded-lg border-dashed">
        <div className="absolute flex flex-col gap-2 -top-6 left-8 bg-white px-2">
          <span className="text-4xl text-primary-700 font-semibold">
            Step 1 : General Informations
          </span>
        </div>
        <GeneralInfoForm />
        <LegalInfoForm />
        <VerifyNumAndEmail />
      </div>
      <div className="self-end flex items-center gap-4">
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
      {/* <FormCompletePage /> */}
    </section>
  );
}
