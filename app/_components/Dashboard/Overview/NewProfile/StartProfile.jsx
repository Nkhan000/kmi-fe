import Button from "../../../Button";
import Modal from "../../../Modal/ModalContext";
import NewProfileForm from "./NewProfileForm";

export default function StartProfile() {
  return (
    <div className="border-2 min-w-screen min-h-[80vh] rounded-xl border-dashed border-green-300 flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-6">
        <span className="text-2xl text-primary-700 font-semibold capitalize">
          You haven't set up your account yet 🤨
        </span>
        <div>
          <Modal>
            <Modal.Open opens="new-application">
              <Button size="lg">Start Setting Up</Button>
            </Modal.Open>
            <Modal.Window name="new-application">
              <NewProfileForm />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
}
