import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__logo">
        <img src="/images/logo-nohover.svg" alt="" className="navigation__logo" />
      </Link>

      <div className="navigation__links">
        <Link to="/#projects">Projects</Link>
        <Link to="/#about">About</Link>
      </div>
    </nav>
  );
}

export default Navigation;