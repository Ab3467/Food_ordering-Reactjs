import logoImage from "../assets/logo.jpg"; // Corrected import

export default function Header() {
  return (
    <header id="main-header">
      {" "}
      {/* Fixed the typo in the id name */}
      <div id="title">
        <img src={logoImage} alt="A restaurant" />
        <h1>React Food</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
