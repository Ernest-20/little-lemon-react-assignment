import logo from "./assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <h1>Little Lemon</h1>
    </header>
  );
}

export default Header;