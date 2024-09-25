import { createContext } from "react"

 export const UserProgressContext = createContext({
  progress : '',
  showCart : ()=> {},
  hidecart : ()=> {},
  showCheckout : ()=> {},
  hideCheckout : ()=> {},
 });

 export function UserProgressContextProvider({children}){
    return <UserProgressContext.Provider>
      {children}
    </UserProgressContext.Provider>
 }

