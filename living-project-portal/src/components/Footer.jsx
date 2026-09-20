import { Link } from "react-router-dom";

import {
  PartyPopper,
  Camera,
  Code2,
  BriefcaseBusiness,
  Mail,
  Heart,
} from "lucide-react";

import "../styles/Footer.css";

function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="main-footer">

      <div className="footer-container">

        {/* =========================
            TOP
        ========================== */}
        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand-area">

            <Link
              to="/"
              className="footer-brand"
            >

              <div className="footer-logo">
                <PartyPopper
                  size={20}
                  strokeWidth={2.3}
                />
              </div>

              <span>
                Party <strong>Planner</strong>
              </span>

            </Link>

            <p>
              Plan smarter.
              <br />
              Celebrate together.
            </p>

          </div>


          <div className="footer-divider"></div>


          {/* LINKS */}
          <nav className="footer-navigation">

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/sprint-1">
              Sprint 1
            </Link>

            <Link to="/sprint-2">
              Sprint 2
            </Link>

          </nav>


          {/* SOCIALS */}
          <div className="footer-socials">

            <a
              href="#"
              aria-label="Instagram"
            >
              <Camera size={19} />
            </a>

            <a
              href="#"
              aria-label="GitHub"
            >
              <Code2 size={19} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={19} />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
            >
              <Mail size={19} />
            </a>

          </div>


          {/* END MESSAGE */}
          <div className="footer-message">

            <span>
              Good Times
            </span>

            <strong>
              Ahead
            </strong>

            <Heart
              size={18}
              strokeWidth={2}
            />

          </div>

        </div>


        {/* =========================
            BOTTOM
        ========================== */}
        <div className="footer-bottom">

          <p>
            © {currentYear} Party Planner.
            All rights reserved.
          </p>


          <p className="footer-built">

            Built by a team that loves
            bringing people together.

            <Heart
              size={14}
              fill="currentColor"
            />

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;