import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";

export default function CheckOut() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  return (
    <Modal>
      <form action="">
        <h2>Checkout </h2>
        <p>Total amount: {currencyFormatter.format(cartTotal)}</p>
        
      </form>
    </Modal>
  );
}
