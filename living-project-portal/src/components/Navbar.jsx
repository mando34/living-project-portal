import { NavLink, Link } from "react-router-dom";

import {
  Home,
  Users,
  ClipboardList,
  BarChart3,
  Heart,
  PartyPopper,
} from "lucide-react";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="main-navbar">
      <div className="navbar-container">

        {/* =========================
            BRAND
        ========================== */}
        <Link to="/" className="navbar-brand">

          <div className="navbar-logo">
            <PartyPopper size={23} strokeWidth={2.3} />
          </div>

          <span>
            Living Project Portal
          </span>

        </Link>


        {/* =========================
            NAVIGATION
        ========================== */}
        <nav className="navbar-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `navbar-link ${
                isActive ? "navbar-link-active" : ""
              }`
            }
          >
            <Home size={19} strokeWidth={2} />

            <span>
              Home
            </span>
          </NavLink>


          <NavLink
            to="/about"
            className={({ isActive }) =>
              `navbar-link ${
                isActive ? "navbar-link-active" : ""
              }`
            }
          >
            <Users size={19} strokeWidth={2} />

            <span>
              About Us
            </span>
          </NavLink>


          <NavLink
            to="/sprint-1"
            className={({ isActive }) =>
              `navbar-link ${
                isActive ? "navbar-link-active" : ""
              }`
            }
          >
            <ClipboardList size={19} strokeWidth={2} />

            <span>
              Sprint 1
            </span>
          </NavLink>


          <NavLink
            to="/sprint-2"
            className={({ isActive }) =>
              `navbar-link ${
                isActive ? "navbar-link-active" : ""
              }`
            }
          >
            <BarChart3 size={19} strokeWidth={2} />

            <span>
              Sprint 2
            </span>
          </NavLink>

        </nav>


        {/* =========================
            CTA
        ========================== */}
        {/* <div className="navbar-cta-wrapper">

          <div className="navbar-divider"></div>

          <Link
            to="/sprint-1"
            className="navbar-cta"
          >
            <Heart
              size={18}
              strokeWidth={2.2}
            />

            <span>
              Plan Happier
            </span>
          </Link>

        </div> */}

      </div>
    </header>
  );
}

export default Navbar;