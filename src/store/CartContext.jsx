import { act, createContext, useReducer } from "react";

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
    const updatedItems = [...state, existingCartIndex];

    if (existingCartIndex < -1) {
      const existingItems = state.items[existingCartIndex];
      const updatedItem = {
        ...existingItems,
        quanitity: existingItems.quanitity + 1,
      };
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.items, quanitity: 1 });
    }

    return {};
  }
  if (action.type === "REMOVE_ITEM") {
  }
  return state;
}

export default function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}
