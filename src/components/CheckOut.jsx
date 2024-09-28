import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import useHttp from "../hooks/UseHttp";

const requestConfig = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
}
}

export default function CheckOut() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  useHttp("http://localhost:3000/orders");

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries);

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout </h2>
        <p>Total amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button textOnly type="button" onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
