import { Link } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  LayoutTemplate,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "../styles/Sprint5.css";


const deliverables = [
  {
    number: "01",
    eyebrow: "INSIGHTS & ITERATION",
    title: "Wireframes & Feedback",
    description:
      "See how outside reviewers interpreted our early Festivo flows and how their feedback changed the experience.",
    detail:
      "Six reviewed flows, three teams, and the improvements carried into Figma.",
    icon: LayoutTemplate,
    link: "/sprint-5/wireframes-feedback",
    className: "s5-deliverable-pink",
  },
  {
    number: "02",
    eyebrow: "HIGH-FIDELITY DESIGN",
    title: "Figma Designs",
    description:
      "Explore the refined Festivo interface across account creation, events, RSVPs, vendors, costs, and planning.",
    detail:
      "A complete visual system built from the wireframe feedback.",
    icon: Palette,
    link: "/sprint-5/figma-designs",
    className: "s5-deliverable-purple",
  },
  {
    number: "03",
    eyebrow: "OPERATIONAL RESILIENCE",
    title: "Crisis Response",
    description:
      "See how Festivo responded when reliability, governance, staffing, budget, and scope were tested at once.",
    detail:
      "Triage, governance, recovery, knowledge transfer, and executive action.",
    icon: ShieldCheck,
    link: "/sprint-5/crisis-response",
    className: "s5-deliverable-orange",
  },
];


function Sprint5() {
  return (
    <main className="s5-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s5-hero">

        <div className="s5-hero-glow s5-hero-glow-one"></div>
        <div className="s5-hero-glow s5-hero-glow-two"></div>

        <div className="s5-hero-inner">

          <div className="s5-hero-copy">

            <span className="s5-hero-eyebrow">
              SPRINT 05 · DESIGN & RESILIENCE
            </span>

            <h1>
              Build. Validate.
              <span>Be Ready.</span>
            </h1>

            <p>
              Sprint 5 connects the evolution of the Festivo
              experience with the operational planning needed to
              protect it. We moved from early wireframes and outside
              feedback to high-fidelity Figma designs, then tested
              our project plans against a major crisis scenario.
            </p>

            <a
              href="#s5-deliverables"
              className="s5-hero-button"
            >
              Explore Sprint 5
              <ArrowRight size={19} />
            </a>

          </div>


          {/* HERO PHONE */}

          <div className="s5-hero-visual">

            <div className="s5-hero-orbit"></div>

            <div className="s5-phone-shadow"></div>

            <div className="s5-phone">

              <div className="s5-phone-notch"></div>

              <img
                src="/documents/sprint-5/figma/Landing.png"
                alt="Festivo Figma design preview"
              />

            </div>

            <div className="s5-ready-badge">
              <CheckCircle2 size={31} strokeWidth={3} />
            </div>

            <div className="s5-spark s5-spark-1"></div>
            <div className="s5-spark s5-spark-2"></div>
            <div className="s5-spark s5-spark-3"></div>
            <div className="s5-spark s5-spark-4"></div>

            <div className="s5-hero-note">

              <Sparkles size={19} />

              <div>
                <span>SPRINT 5</span>
                <strong>Design → Resilience</strong>
              </div>

            </div>

          </div>

        </div>


        {/* HERO LINKS */}

        <div className="s5-hero-links">

          {deliverables.map((page) => {
            const Icon = page.icon;

            return (
              <Link
                to={page.link}
                key={page.number}
                className="s5-hero-link"
              >
                <div className="s5-hero-link-icon">
                  <Icon size={25} />
                </div>

                <span>{page.title}</span>

                <ArrowRight size={18} />
              </Link>
            );
          })}

        </div>

      </section>


      {/* ==================================================
          STORY
      ================================================== */}

      <section className="s5-story-section">

        <div className="s5-section-shell">

          <div className="s5-story-heading">

            <span>THE SPRINT 5 STORY</span>

            <h2>
              Design gets stronger
              <strong> when it is tested.</strong>
            </h2>

            <p>
              This sprint captures three connected stages of the
              Festivo project: listening to feedback, applying that
              feedback to the product, and determining whether our
              project planning can withstand unexpected pressure.
            </p>

          </div>


          <div className="s5-story-flow">

            <article className="s5-story-step s5-story-step-pink">

              <span className="s5-story-number">01</span>

              <div className="s5-story-icon">
                <ClipboardCheck size={28} />
              </div>

              <span className="s5-story-label">
                REVIEW
              </span>

              <h3>
                Learn from real feedback.
              </h3>

              <p>
                Reviewers helped us identify unclear interactions,
                incomplete flows, and missing RSVP controls.
              </p>

            </article>


            <div className="s5-story-arrow">
              <ArrowRight size={25} />
            </div>


            <article className="s5-story-step s5-story-step-purple">

              <span className="s5-story-number">02</span>

              <div className="s5-story-icon">
                <Palette size={28} />
              </div>

              <span className="s5-story-label">
                REFINE
              </span>

              <h3>
                Turn insight into interface.
              </h3>

              <p>
                The feedback informed a more complete, interactive,
                and visually consistent Festivo design in Figma.
              </p>

            </article>


            <div className="s5-story-arrow">
              <ArrowRight size={25} />
            </div>


            <article className="s5-story-step s5-story-step-orange">

              <span className="s5-story-number">03</span>

              <div className="s5-story-icon">
                <ShieldCheck size={28} />
              </div>

              <span className="s5-story-label">
                RESPOND
              </span>

              <h3>
                Protect the project.
              </h3>

              <p>
                A crisis exercise tested our reliability,
                governance, staffing, financial, and scope decisions.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          DELIVERABLE CARDS
      ================================================== */}

      <section
        className="s5-deliverables-section"
        id="s5-deliverables"
      >

        <div className="s5-section-shell">

          <div className="s5-deliverables-heading">

            <span>EXPLORE SPRINT 5</span>

            <h2>
              Three deliverables.
              <strong> One resilience story.</strong>
            </h2>

          </div>


          <div className="s5-deliverables-grid">

            {deliverables.map((page) => {
              const Icon = page.icon;

              return (
                <Link
                  to={page.link}
                  key={page.number}
                  className={`s5-deliverable-card ${page.className}`}
                >

                  <div className="s5-deliverable-top">

                    <span className="s5-deliverable-number">
                      {page.number}
                    </span>

                    <div className="s5-deliverable-icon">
                      <Icon size={29} />
                    </div>

                  </div>

                  <span className="s5-deliverable-eyebrow">
                    {page.eyebrow}
                  </span>

                  <h3>{page.title}</h3>

                  <p>{page.description}</p>

                  <div className="s5-deliverable-bottom">

                    <span>{page.detail}</span>

                    <div>
                      <ArrowRight size={20} />
                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}


export default Sprint5;