import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItems: (item) => {},
  removeIems: (id) => {},
});

function CartContextProvider({children}){
    return <CartContext.Provider></CartContext.Provider>
}