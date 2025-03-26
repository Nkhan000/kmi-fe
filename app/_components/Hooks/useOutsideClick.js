import { useEffect, useRef } from "react";

export function useOutsideClick(handle, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        // if any element which is not inside the Modal window(ref) then close function will get trigerred
        if (ref.current && !ref.current.contains(e.target)) handle();
      }

      function handleKeydown(e) {
        // Close if "Escape" key is pressed
        if (e.key === "Escape") handle();
      }
      // TRUE is set to capture the event when event is moving down the DOM tree
      document.addEventListener("click", handleClick, listenCapturing);
      document.addEventListener("keydown", handleKeydown);

      return () => {
        document.removeEventListener("click", handleClick, listenCapturing);
        document.removeEventListener("keydown", handleKeydown);
      };
    },
    [handle, listenCapturing]
  );

  return ref;
}
