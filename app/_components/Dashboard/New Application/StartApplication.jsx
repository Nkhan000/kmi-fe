import Image from "next/image";
import Button from "../../Button";
import Modal, { ModalContext } from "../../Modal/ModalContext";
import { useContext } from "react";
import ApplicationForm from "./ApplicationForm";

export default function StartApplication() {
  const modalContext = useContext(ModalContext);
  // const close = modalContext.close;s
  return (
    <div className="sticky top-0 border rounded-lg border-primary-50">
      <div className="bg-primary-50 p-4">
        <span className="text-primary-800 font-semibold text-xl">
          Start Application
        </span>
      </div>

      {/* <div className="min-h-[25rem] flex items-center p-4">
        <p className="text-lg text-center italic text-primary-600">
          Search and select you desired service provider
        </p>
          </div> */}
      <div className="p-6 flex flex-col gap-6">
        <header className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image
              src="/pp.jpg"
              alt="company logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-primary-700">
              Nepal Bank Ltd.
            </span>
            <span className="text-sm text-primary-600">Government Bank</span>
          </div>
        </header>

        <div className="p-2 flex flex-col gap-5">
          <div className="flex flex-col gap-2 ">
            <label className="text-sm text-primary-600">
              Select Application Type
            </label>
            <select className="py-2 px-4 border rounded-md text-primary-800 capitalize border-primary-200">
              <option value="" disabled>
                -- select application type --
              </option>
              <option value="kyc-application">kyc application</option>
            </select>
          </div>
          <div className="self-end">
            <Modal>
              <Modal.Open opens="test">
                <Button size="sm">Start application</Button>
              </Modal.Open>
              <Modal.Window name="test">
                <ApplicationForm />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
