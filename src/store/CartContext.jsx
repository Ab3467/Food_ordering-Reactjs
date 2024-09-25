import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItems: (item) => {},
  removeIems: (id) => {},
});

function cartReducer(state, action){

}

export default function CartContextProvider({children}){
   

    return <CartContext.Provider>{children}</CartContext.Provider>
}