import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open }) {
  useEffect(() => {
    if (open) {
    }
  }, []);

  return createPortal(
    <dialog>{children}</dialog>,
    document.getElementById("modal")
  );
}
