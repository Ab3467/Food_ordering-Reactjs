import Header from "./components/Header";
import Meals from "./components/Meals";
import "./index.css";
import CartContextProvider from "./store/CartContext";
import { useContext } from "react";
import { CartContext } from "./store/CartContext";

function App() {
  return (
    <>
      <Header />
      <Meals />
    </>
  );
}

export default App;
