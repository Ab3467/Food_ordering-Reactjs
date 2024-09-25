import { act, createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItems: (item) => {},
  removeIems: (id) => {},
});

function cartReducer(state, action){
  if(action.type === 'ADD_ITEM'){
    //...
  }
  if(action.type === 'REMOVE_ITEM'){
    // ...
  }
}

export default function CartContextProvider({children}){
    useReducer();
    
    return <CartContext.Provider>{children}</CartContext.Provider>
}