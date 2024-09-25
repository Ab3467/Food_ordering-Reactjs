import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItems: (item) => {},
  removeIems: (item) => {},
});
