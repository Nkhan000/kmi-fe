import Button from "@/app/_components/Button";
import GeneralInfoForm from "./GeneralInfoForm";
import LegalInfoForm from "./LegalInfoForm";

export default function NewProfileForm() {
  return (
    <section className="min-h-[90vh] min-w-[70vw] p-4 flex flex-col gap-6">
      <header className="flex flex-col gap-3">
        <h1 className="text-5xl font-semibold text-primary-200">
          Setup Your New Profile
        </h1>
        <span className="text-primary-700 text-xl">
          You must upload and verify your details to continue using our platform
          😉
        </span>
      </header>

      <div className="relative min-h-full m-2 px-3 py-8 pb-4 border-2 rounded-lg border-dashed">
        <div className="absolute flex flex-col gap-2 -top-5 left-8 bg-white px-2">
          <span className="text-3xl text-primary-400 font-semibold">
            Legal Documents
          </span>
          <span className="text-md text-primary-400">
            Please upload your following documents for further verifications
          </span>
        </div>
        {/* <GeneralInfoForm /> */}
        <LegalInfoForm />
      </div>
    </section>
  );
}
