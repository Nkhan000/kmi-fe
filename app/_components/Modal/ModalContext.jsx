"use client";
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../Hooks/useOutsideClick";

export const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState(""); // State to track open modal

  const close = () => setOpenName(""); // Close the modal
  const open = setOpenName; // Open the modal with a specific name

  console.log(openName);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  return <div onClick={() => open(opens)}>{children}</div>;
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null; // Only render if the modal should be open

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg relative" ref={ref}>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
