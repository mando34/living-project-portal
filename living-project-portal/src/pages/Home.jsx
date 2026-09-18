import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="party-hero">

        {/* Decorative Confetti */}
        <div className="confetti confetti-1"></div>
        <div className="confetti confetti-2"></div>
        <div className="confetti confetti-3"></div>
        <div className="confetti confetti-4"></div>
        <div className="confetti confetti-5"></div>
        <div className="confetti confetti-6"></div>
        <div className="confetti confetti-7"></div>
        <div className="confetti confetti-8"></div>
        <div className="confetti confetti-9"></div>
        <div className="confetti confetti-10"></div>

        <div className="hero-container">

          {/* LEFT SIDE */}
          <div className="hero-content">

            <div className="hero-badge">
              <h1>🎉 Festivo</h1>
            </div>

            <h1 className="hero-title">
              Plan Less.
              <span>Party More.</span>
            </h1>

            <p className="hero-description">
              A collaborative event-planning project designed to make
              organizing social gatherings simpler, clearer, and a lot
              less stressful.
            </p>

            <div className="hero-actions">

              <Link
                to="/sprint-1"
                className="home-button primary-button"
              >
                Explore Our Journey
                <span>→</span>
              </Link>

              <Link
                to="/about"
                className="home-button secondary-button"
              >
                Meet the Team
              </Link>

            </div>

            {/* <div className="hero-mini-info">

              <div>
                <strong>01</strong>
                <span>Discover</span>
              </div>

              <div className="mini-divider"></div>

              <div>
                <strong>02</strong>
                <span>Design</span>
              </div>

              <div className="mini-divider"></div>

              <div>
                <strong>03</strong>
                <span>Build</span>
              </div>

              <div className="mini-divider"></div>

              <div>
                <strong>04</strong>
                <span>Celebrate</span>
              </div>

            </div> */}

          </div>


          {/* RIGHT SIDE */}
          <div className="hero-visual">

            <div className="visual-circle circle-pink"></div>
            <div className="visual-circle circle-yellow"></div>
            <div className="visual-circle circle-blue"></div>

            <div className="party-message-card">

              <span className="message-small">
                GOOD
              </span>

              <span className="message-large">
                People
              </span>

              <div className="message-spark">
                ✦
              </div>

              <span className="message-small">
                GREAT
              </span>

              <span className="message-large">
                Events
              </span>

              <span className="message-bottom">
                🎉
              </span>

            </div>

            <div className="floating-note note-one">
              ✨ Make memories
            </div>

            <div className="floating-note note-two">
              🎈 Plan together
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WHAT WE'RE BUILDING
      ========================== */}
      <section className="home-section intro-section">

        <div className="section-heading">

          <span className="section-tag">
            THE IDEA
          </span>

          <h2>
            Event planning should feel
            <span className="pink-text"> exciting.</span>
          </h2>

          <p>
            Planning a social gathering can quickly become complicated.
            Dates, guests, food, responsibilities, budgets, locations,
            and conversations often end up spread across several different
            tools.
          </p>

          <p>
            Our project explores how one collaborative platform could bring
            those pieces together and make the process easier for everyone.
          </p>

        </div>

      </section>


      {/* =========================
          FEATURE CARDS
      ========================== */}
      <section className="home-section feature-section">

        <div className="section-heading centered">

          <span className="section-tag">
            OUR FOCUS
          </span>

          <h2>
            Everything needed to turn an
            <span className="pink-text"> idea into an event.</span>
          </h2>

        </div>


        <div className="party-feature-grid">

          <article className="party-feature-card pink-card">

            <div className="feature-icon pink-icon">
              📅
            </div>

            <h3>
              Organize
            </h3>

            <p>
              Keep dates, details, plans, and important information
              organized in one place.
            </p>

            {/* <span className="feature-number">
              01
            </span> */}

          </article>


          <article className="party-feature-card purple-card">

            <div className="feature-icon purple-icon">
              👥
            </div>

            <h3>
              Collaborate
            </h3>

            <p>
              Make it easier for friends, family, or groups to stay
              coordinated throughout the planning process.
            </p>

            {/* <span className="feature-number">
              02
            </span> */}

          </article>


          <article className="party-feature-card orange-card">

            <div className="feature-icon orange-icon">
              🎉
            </div>

            <h3>
              Celebrate
            </h3>

            <p>
              Spend less time worrying about logistics and more time
              enjoying the event itself.
            </p>

            {/* <span className="feature-number">
              03
            </span> */}

          </article>


          <article className="party-feature-card blue-card">

            <div className="feature-icon blue-icon">
              📖
            </div>

            <h3>
              Follow Along
            </h3>

            <p>
              See how our team's research, ideas, and product evolve
              sprint by sprint.
            </p>

            {/* <span className="feature-number">
              04
            </span> */}

          </article>

        </div>

      </section>


      {/* =========================
          PROJECT JOURNEY
      ========================== */}
      <section className="home-section journey-section">

        <div className="journey-wrapper">

          <div className="journey-heading">

            <span className="section-tag light-tag">
              OUR JOURNEY
            </span>

            <h2>
              Follow the party from
              <span> idea to reality.</span>
            </h2>

            <p>
              This Living Project Portal documents how our team manages
              the project throughout the semester. Each sprint adds new
              research, decisions, deliverables, and lessons learned.
            </p>

          </div>


          <div className="journey-cards">

            <Link
              to="/sprint-1"
              className="journey-card"
            >

              <div className="journey-number">
                01
              </div>

              <div>

                <span className="journey-label">
                  SPRINT ONE
                </span>

                <h3>
                  Understanding the Problem
                </h3>

                <p>
                  User interviews, research, problem discovery,
                  and early project direction.
                </p>

              </div>

              <span className="journey-arrow">
                →
              </span>

            </Link>


            <Link
              to="/sprint-2"
              className="journey-card"
            >

              <div className="journey-number">
                02
              </div>

              <div>

                <span className="journey-label">
                  SPRINT TWO
                </span>

                <h3>
                  Turning Research Into Direction
                </h3>

                <p>
                  Converting what we learned into requirements,
                  priorities, and project decisions.
                </p>

              </div>

              <span className="journey-arrow">
                →
              </span>

            </Link>


            <div className="journey-card coming-soon">

              <div className="journey-number">
                03
              </div>

              <div>

                <span className="journey-label">
                  COMING SOON
                </span>

                <h3>
                  The Next Chapter
                </h3>

                <p>
                  More sprint pages will appear here as our project
                  continues to evolve.
                </p>

              </div>

              <span className="journey-arrow">
                ✦
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================== */}
      {/* <section className="home-section closing-section">

        <div className="closing-card">

          <div className="closing-decoration">
            🎊
          </div>

          <span className="section-tag">
            LET'S GET STARTED
          </span>

          <h2>
            Good plans make
            <span> great memories.</span>
          </h2>

          <p>
            See how our team is researching, designing, and developing
            a better way to plan events.
          </p>

          <Link
            to="/sprint-1"
            className="home-button primary-button"
          >
            See Our Progress
            <span>→</span>
          </Link>

        </div>

      </section> */}

    </div>
  );
}

export default Home;