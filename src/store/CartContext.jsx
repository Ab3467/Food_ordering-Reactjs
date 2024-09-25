import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItems: (item) => {},
  removeIems: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items, existingCartIndex];

    if (existingCartIndex > -1) {
      const existingItems = state.items[existingCartIndex];
      const updatedItem = {
        ...existingItems,
        quanitity: existingItems.quanitity + 1,
      };
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.items, quanitity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartIndex];
    const updatedItems = [...state.items];

    if (existingCartItem.quanitity === 1) {
      updatedItems.splice(existingCartIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quanitity: existingCartItem.quanitity - 1,
      };
      updatedItems[existingCartIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
