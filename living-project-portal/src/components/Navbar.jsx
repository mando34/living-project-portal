import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="brand">
          Party Planner
        </NavLink>

        <nav>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">
            About Us
          </NavLink>

          <NavLink to="/sprint-1">
            Sprint 1
          </NavLink>

          <NavLink to="/sprint-2">
            Sprint 2
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;