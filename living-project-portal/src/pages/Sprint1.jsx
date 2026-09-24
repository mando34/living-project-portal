import { Link } from "react-router-dom";

import {
  BookOpen,
  BarChart3,
  Users,
  ArrowRight,
  CalendarDays,
  Target,
  Search,
  CheckCircle2,
  PartyPopper,
  Sparkles,
  Download,
} from "lucide-react";

import "../styles/Sprint1.css";

function Sprint1() {
  const sprintSections = [
    {
      number: "01",
      title: "Project Charter",
      subtitle: "What are we building?",
      description:
        "Define Festivo, establish the project objective, determine scope, identify constraints and assumptions, and define what success means.",
      icon: BookOpen,
      className: "timeline-pink",
      link: "/sprint-1/project-charter",
    },
    {
      number: "02",
      title: "Business Strategy",
      subtitle: "Why does the project matter?",
      description:
        "Connect the project to a broader strategy, define a measurable business objective, justify the need, and establish the business scope.",
      icon: BarChart3,
      className: "timeline-purple",
      link: "/sprint-1/business-strategy",
    },
    {
      number: "03",
      title: "Market Research",
      subtitle: "What did potential users tell us?",
      description:
        "Examine the event-planning problems identified through research and use those findings to validate the need for a centralized solution.",
      icon: Users,
      className: "timeline-blue",
      link: "/sprint-1/market-research",
    },
  ];

  return (
    <div className="sprint1-page">

      {/* ===================================
          HERO
      ==================================== */}
      <section className="sprint1-hero">

        <span className="s1-confetti s1-c1"></span>
        <span className="s1-confetti s1-c2"></span>
        <span className="s1-confetti s1-c3"></span>
        <span className="s1-confetti s1-c4"></span>
        <span className="s1-confetti s1-c5"></span>
        <span className="s1-confetti s1-c6"></span>

        <div className="sprint1-hero-container">

          <div className="sprint1-hero-copy">

            <span className="sprint1-eyebrow">
              SPRINT 01
            </span>

            <h1>
              From Ideas
              <br />
              to <span>Direction.</span>
            </h1>

            <p>
              Sprint 1 established the foundation for Festivo by defining
              what the project is, connecting it to a business strategy,
              and validating the problem through market and user research.
            </p>

            <div className="sprint1-hero-tags">

              <div>
                <CalendarDays size={17} />
                Foundation Sprint
              </div>

              <div>
                <Target size={17} />
                Project Definition
              </div>

              <div>
                <Search size={17} />
                Research & Validation
              </div>

            </div>

          </div>


          {/* ROAD VISUAL */}
          <div className="sprint1-road">

            <div className="road-shape"></div>

            <div className="road-marker marker-one">
              <span>1</span>
              <p>Define</p>
            </div>

            <div className="road-marker marker-two">
              <span>2</span>
              <p>Strategize</p>
            </div>

            <div className="road-marker marker-three">
              <span>3</span>
              <p>Research</p>
            </div>

            <div className="road-finish">
              <PartyPopper size={40} />
              <p>
                Strong
                <br />
                Start!
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ===================================
          INTRO
      ==================================== */}
      <section className="sprint1-intro">

        <div className="sprint1-section-heading">

          <span className="sprint1-eyebrow">
            THE FOUNDATION
          </span>

          <h2>
            Three pieces shaped our
            <span> first sprint.</span>
          </h2>

          <p>
            Each stage answered a different question about Festivo:
            what are we building, why should we build it, and what
            evidence supports the need?
          </p>

        </div>

      </section>


      {/* ===================================
          INTERACTIVE TIMELINE
      ==================================== */}
      <section className="sprint1-timeline-section">

        <div className="sprint1-timeline">

          <div className="timeline-line"></div>

          {sprintSections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                className={`sprint1-timeline-card ${section.className}`}
                key={section.title}
              >

                <div className="timeline-step-number">
                  {section.number}
                </div>

                <div className="timeline-card-icon">
                  <Icon size={31} />
                </div>

                <span className="timeline-subtitle">
                  {section.subtitle}
                </span>

                <h3>
                  {section.title}
                </h3>

                <p>
                  {section.description}
                </p>

                <Link
                  to={section.link}
                  className="timeline-link"
                >
                  Explore

                  <ArrowRight size={17} />
                </Link>

              </article>
            );
          })}

        </div>

      </section>


      {/* ===================================
          WHAT WE ACCOMPLISHED
      ==================================== */}
      <section className="sprint1-accomplished-section">

        <div className="sprint1-section-heading">

          <span className="sprint1-eyebrow">
            WHAT WE ACCOMPLISHED
          </span>

          <h2>
            Building the
            <span> big picture.</span>
          </h2>

        </div>


        <div className="accomplishment-grid">

          <article className="accomplishment-card">

            <div className="accomplishment-icon pink-accomplishment">
              <Target size={25} />
            </div>

            <h3>
              Defined the Project
            </h3>

            <p>
              Established Festivo's purpose, objective, initial scope,
              assumptions, constraints, and success criteria.
            </p>

          </article>


          <article className="accomplishment-card">

            <div className="accomplishment-icon purple-accomplishment">
              <BarChart3 size={25} />
            </div>

            <h3>
              Built the Strategy
            </h3>

            <p>
              Connected the project to a measurable business objective
              and documented why a centralized solution provides value.
            </p>

          </article>


          <article className="accomplishment-card">

            <div className="accomplishment-icon blue-accomplishment">
              <Users size={25} />
            </div>

            <h3>
              Researched User Needs
            </h3>

            <p>
              Used research findings to identify recurring issues involving
              scheduling, organization, and digital event planning.
            </p>

          </article>


          <article className="accomplishment-card">

            <div className="accomplishment-icon orange-accomplishment">
              <CheckCircle2 size={25} />
            </div>

            <h3>
              Established Scope
            </h3>

            <p>
              Determined what belongs in the first version of Festivo,
              what remains outside the project, and what may come later.
            </p>

          </article>

        </div>

      </section>

            {/* ==========================================
          SPRINT 1 DELIVERABLES
      ========================================== */}

      <section className="sprint1-deliverables-section">

        <div className="sprint1-section-heading">

          <span className="sprint1-eyebrow">
            SPRINT 1 DELIVERABLES
          </span>

          <h2>
            Want the
            <span> full documents?</span>
          </h2>

          <p>
            Download the original Sprint 1 deliverables used to document
            our project's charter, strategy, and market research.
          </p>

        </div>


        <div className="sprint1-download-grid">

          {/* PROJECT CHARTER */}
          <article className="sprint-download-card">

            <div className="sprint-download-icon download-pink">
              <BookOpen size={27} />
            </div>

            <div className="sprint-download-content">

              <span>
                PROJECT FOUNDATION
              </span>

              <h3>
                Project Charter
              </h3>

              <p>
                Project objective, scope, assumptions, constraints,
                success criteria, and PM authority.
              </p>

            </div>

            <a
              href="/documents/sprint-1/Project Charter.pdf"
              download
              className="sprint-download-button"
              aria-label="Download Project Charter PDF"
            >
              <Download size={19} />
            </a>

          </article>


          {/* BUSINESS STRATEGY */}
          <article className="sprint-download-card">

            <div className="sprint-download-icon download-purple">
              <BarChart3 size={27} />
            </div>

            <div className="sprint-download-content">

              <span>
                PROJECT STRATEGY
              </span>

              <h3>
                Business Strategy
              </h3>

              <p>
                Business objectives, project justification,
                organization strategy, and business scope.
              </p>

            </div>

            <a
              href="/documents/sprint-1/Business Strategy.pdf"
              download
              className="sprint-download-button"
              aria-label="Download Business Strategy PDF"
            >
              <Download size={19} />
            </a>

          </article>


          {/* MARKET RESEARCH PHASE 1 */}
          <article className="sprint-download-card">

            <div className="sprint-download-icon download-orange">
              <Users size={27} />
            </div>

            <div className="sprint-download-content">

              <span>
                MARKET RESEARCH
              </span>

              <h3>
                Phase 1 Research
              </h3>

              <p>
                The initial set of interviews used during project
                discovery and problem exploration.
              </p>

            </div>

            <a
              href="/documents/sprint-1/Phase 1 Market Research.pdf"
              download
              className="sprint-download-button"
              aria-label="Download Phase 1 Market Research PDF"
            >
              <Download size={19} />
            </a>

          </article>


          {/* MARKET RESEARCH PHASE 2 */}
          <article className="sprint-download-card">

            <div className="sprint-download-icon download-blue">
              <Search size={27} />
            </div>

            <div className="sprint-download-content">

              <span>
                MARKET RESEARCH
              </span>

              <h3>
                Phase 2 Research
              </h3>

              <p>
                Expanded interviews used to validate and further
                investigate the patterns found in Phase 1.
              </p>

            </div>

            <a
              href="/documents/sprint-1/Phase 2 Market Research.pdf"
              download
              className="sprint-download-button"
              aria-label="Download Phase 2 Market Research PDF"
            >
              <Download size={19} />
            </a>

          </article>

        </div>

      </section>


      {/* ===================================
          CLOSING
      ==================================== */}
      <section className="sprint1-closing-section">

        <div className="sprint1-closing-card">

          <Sparkles
            className="closing-spark"
            size={35}
          />

          <span className="sprint1-eyebrow">
            THE RESULT
          </span>

          <h2>
            Research today.
            <span> Better events tomorrow.</span>
          </h2>

          <p>
            Sprint 1 gave our team a shared understanding of Festivo,
            the problem it addresses, and the boundaries of the first
            version of the project.
          </p>

          <Link
            to="/sprint-1/project-charter"
            className="sprint1-primary-button"
          >
            Start With the Project Charter

            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Sprint1;