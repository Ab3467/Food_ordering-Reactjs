import logoImage from "../assets/logo.jpg"; // Corrected import
import Button from "../UI/button";

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
        <Button textOnly={true}>Cart (0)</Button>
      </nav>
    </header>
  );
}
