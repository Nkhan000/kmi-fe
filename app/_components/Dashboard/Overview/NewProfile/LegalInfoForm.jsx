import Button from "@/app/_components/Button";

export default function LegalInfoForm() {
  return (
    <form className="flex flex-col gap-6">
      <div className="self-end flex items-center gap-4">
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </form>
  );
}
