import {logoImage} from "../assets/logo.jpg"

export default function Haeder() {
  return (
    <header id="main-hreader">
      <div id="title">
        <img src={logoImage} alt="" />
        <h1>React Food</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  )
}
