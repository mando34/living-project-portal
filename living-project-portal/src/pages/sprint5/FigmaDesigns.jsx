import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers3,
  MonitorSmartphone,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";

import "../sprint5/Sprint5SubPages.css";


const designs = [
  {
    title: "Landing Page",
    category: "ACCESS",
    image: "/documents/sprint-5/figma/Landing.png",
  },
  {
    title: "Create Account",
    category: "ACCESS",
    image: "/documents/sprint-5/figma/Create Account.png",
  },
  {
    title: "Login Page",
    category: "ACCESS",
    image: "/documents/sprint-5/figma/Login.png",
  },
  {
    title: "Main Menu",
    category: "NAVIGATION",
    image: "/documents/sprint-5/figma/Main Menu.png",
  },
  {
    title: "Event Creation",
    category: "EVENTS",
    image: "/documents/sprint-5/figma/Create Event.png",
  },
  {
    title: "RSVP Creation & Sender",
    category: "RSVP",
    image: "/documents/sprint-5/figma/Create RSVP.png",
  },
  {
    title: "RSVP Recipient",
    category: "RSVP",
    image: "/documents/sprint-5/figma/RSVP Recipient.png",
  },
  {
    title: "Inbox",
    category: "RSVP",
    image: "/documents/sprint-5/figma/Inbox.png",
  },
  {
    title: "Itinerary",
    category: "EVENTS",
    image: "/documents/sprint-5/figma/Itinerary.png",
  },
  {
    title: "My Events",
    category: "EVENTS",
    image: "/documents/sprint-5/figma/My Events.png",
  },
  {
    title: "Profile Page",
    category: "ACCOUNT",
    image: "/documents/sprint-5/figma/Profile.png",
  },
  {
    title: "Vendor Search",
    category: "VENDORS",
    image: "/documents/sprint-5/figma/Vendor Search.png",
  },
  {
    title: "Vendor Page",
    category: "VENDORS",
    image: "/documents/sprint-5/figma/Selected Vendor.png",
  },
  {
    title: "Event Cost Splitting",
    category: "COSTS",
    image: "/documents/sprint-5/figma/Splitting Cost.png",
  },
  {
    title: "Cost Split — Guest",
    category: "COSTS",
    image:
      "/documents/sprint-5/figma/Splitting Cost (Guest).png",
  },
];


function FigmaDesigns() {
  return (
    <main className="s5figma-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s5sub-hero">

        <div className="s5sub-shell">

          <div className="s5sub-breadcrumb">
            <Link to="/sprint-5">Sprint 5</Link>
            <span>/</span>
            <span>Figma Designs</span>
          </div>


          <div className="s5sub-hero-layout">

            <div className="s5sub-hero-copy">

              <span className="s5sub-eyebrow">
                SPRINT 5 · DESIGN PORTFOLIO
              </span>

              <h1>
                Figma
                <span>Designs</span>
              </h1>

              <p>
                The wireframe feedback was transformed into a
                high-fidelity Festivo experience covering account
                access, event creation, RSVPs, vendors, itineraries,
                profiles, and event cost splitting.
              </p>

              <a
                href="#s5figma-gallery"
                className="s5figma-view-button"
              >
                View Designs
                <ArrowRight size={19} />
              </a>

            </div>


            <div className="s5figma-hero-art">

              <div className="s5figma-blob"></div>

              <div className="s5figma-phone">

                <div className="s5figma-phone-notch"></div>

                <div className="s5figma-phone-screen">

                  <img
                    src="/documents/sprint-5/figma/Landing.png"
                    alt="Festivo landing page"
                  />

                </div>

              </div>

              <div className="s5figma-floating-card">

                <Palette size={24} />

                <div>
                  <span>HIGH FIDELITY</span>
                  <strong>Festivo Design System</strong>
                </div>

              </div>


              <div className="s5figma-rays">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          DESIGN PRINCIPLES
      ================================================== */}

      <section className="s5figma-principles-section">

        <div className="s5sub-shell">

          <div className="s5sub-heading">

            <span>DESIGN EVOLUTION</span>

            <h2>
              Feedback became
              <strong> interface decisions.</strong>
            </h2>

          </div>


          <div className="s5figma-principles-grid">

            <article>

              <div>
                <MonitorSmartphone size={27} />
              </div>

              <span>01</span>

              <h3>Complete flows</h3>

              <p>
                The designs show the screens users encounter as
                they move through Festivo rather than only isolated
                destination screens.
              </p>

            </article>


            <article>

              <div>
                <Layers3 size={27} />
              </div>

              <span>02</span>

              <h3>Consistent interaction</h3>

              <p>
                Buttons, forms, cards, navigation, and selectable
                controls use a more consistent visual language.
              </p>

            </article>


            <article>

              <div>
                <Palette size={27} />
              </div>

              <span>03</span>

              <h3>Festivo identity</h3>

              <p>
                Purple, cream, pink, orange, rounded surfaces, and
                celebratory imagery create a recognizable product
                identity.
              </p>

            </article>


            <article>

              <div>
                <CheckCircle2 size={27} />
              </div>

              <span>04</span>

              <h3>Feedback incorporated</h3>

              <p>
                RSVP controls, clearer flows, interactive steps,
                and the completed Split Costs experience are
                represented in the refined designs.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          GALLERY
      ================================================== */}

      <section
        className="s5figma-gallery-section"
        id="s5figma-gallery"
      >

        <div className="s5sub-shell">

          <div className="s5sub-heading s5figma-gallery-heading">

            <span>DESIGN GALLERY</span>

            <h2>
              The Festivo
              <strong> experience.</strong>
            </h2>

            <p>
              These screens show the high-fidelity direction for
              the app across the primary user journeys developed by
              the team.
            </p>

          </div>


          <div className="s5figma-gallery">

            {designs.map((design, index) => (
              <article
                className="s5figma-design-card"
                key={design.title}
              >

                <div className="s5figma-design-image">

                  <img
                    src={design.image}
                    alt={`${design.title} Festivo design`}
                    loading="lazy"
                  />

                </div>


                <div className="s5figma-design-caption">

                  <div>
                    <span>{design.category}</span>
                    <strong>{design.title}</strong>
                  </div>

                  <span className="s5figma-design-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          DESIGN SYSTEM STRIP
      ================================================== */}

      <section className="s5figma-summary-section">

        <div className="s5sub-shell">

          <div className="s5figma-summary">

            <Sparkles size={27} />

            <div>
              <span>THE RESULT</span>

              <h2>
                A clearer path from idea to interaction.
              </h2>

              <p>
                Sprint 5 turns the earlier static concepts into a
                more complete visual representation of how Festivo
                should feel and behave.
              </p>
            </div>

            <Smartphone size={55} />

          </div>

        </div>

      </section>


      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <section className="s5sub-navigation">

        <div className="s5sub-shell">

          <div className="s5sub-navigation-grid">

            <Link
              to="/sprint-5/wireframes-feedback"
              className="s5sub-nav-card"
            >
              <ArrowLeft size={21} />

              <div>
                <span>PREVIOUS</span>
                <strong>Wireframes & Feedback</strong>
              </div>
            </Link>


            <Link
              to="/sprint-5/crisis-response"
              className="s5sub-nav-card s5sub-nav-next"
            >
              <div>
                <span>NEXT</span>
                <strong>Crisis Response</strong>
              </div>

              <ArrowRight size={21} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


export default FigmaDesigns;