import { Link } from "react-router-dom";

import {
  ArrowLeft,
  Users,
  CalendarDays,
  ClipboardList,
  MonitorSmartphone,
  Search,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

import "./Sprint1Subpages.css";

function MarketResearch() {
  return (
    <div className="s1-subpage">

      <section className="s1-subpage-hero">

        <div className="s1-subpage-hero-inner">

          <div>

            <Link
              to="/sprint-1"
              className="s1-subpage-back"
            >
              <ArrowLeft size={16} />
              Back to Sprint 1
            </Link>

            <span className="s1-subpage-label">
              SPRINT 1 · MARKET RESEARCH
            </span>

            <h1>
              Market Research
            </h1>

            <p>
              Our research helped identify recurring event-planning
              difficulties and provided evidence that users could benefit
              from a more centralized planning experience.
            </p>

          </div>


          <div className="s1-subpage-hero-icon">
            <Users size={66} />
          </div>

        </div>

      </section>


      <main className="s1-subpage-content">

        <nav className="s1-subpage-navigation">
          <a href="#overview">Overview</a>
          <a href="#findings">Research Findings</a>
          <a href="#problems">Identified Problems</a>
          <a href="#takeaway">Takeaway</a>
        </nav>


        {/* OVERVIEW */}
        <section
          id="overview"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              RESEARCH OVERVIEW
            </span>

            <h2>
              Understanding the problem first.
            </h2>

            <p>
              Research conducted during project discovery identified
              recurring difficulties involving scheduling, guest
              attendance, vendor research, food planning, communication,
              task coordination, and keeping event information organized.
            </p>

          </div>

        </section>


        {/* STATS */}
        <section
          id="findings"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              KEY FINDINGS
            </span>

            <h2>
              What the research showed.
            </h2>

          </div>


          <div className="s1-stat-grid">

            <article className="s1-stat-card">

              <strong>
                80%
              </strong>

              <span>
                Phase 1 participants identified scheduling as the
                hardest part of planning an event.
              </span>

            </article>


            <article className="s1-stat-card">

              <strong>
                62%
              </strong>

              <span>
                Phase 2 participants identified scheduling as a major
                consideration.
              </span>

            </article>


            <article className="s1-stat-card">

              <strong>
                77%
              </strong>

              <span>
                Participants reported writing down planning information.
              </span>

            </article>


            <article className="s1-stat-card">

              <strong>
                62%
              </strong>

              <span>
                Participants reported using electronic methods to
                manage planning information.
              </span>

            </article>

          </div>

        </section>


        {/* PROBLEMS */}
        <section
          id="problems"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              IDENTIFIED PROBLEMS
            </span>

            <h2>
              The patterns behind the numbers.
            </h2>

          </div>


          <div className="s1-card-grid">

            <article className="s1-info-card">

              <div className="s1-info-card-icon">
                <CalendarDays size={25} />
              </div>

              <h3>
                Scheduling
              </h3>

              <p>
                Scheduling emerged as the most consistently identified
                difficulty across the research summarized in the
                Business Strategy.
              </p>

            </article>


            <article className="s1-info-card">

              <div className="s1-info-card-icon">
                <ClipboardList size={25} />
              </div>

              <h3>
                Organization
              </h3>

              <p>
                Users often keep track of event-planning information
                separately, creating an opportunity for one centralized
                location.
              </p>

            </article>


            <article className="s1-info-card">

              <div className="s1-info-card-icon">
                <MonitorSmartphone size={25} />
              </div>

              <h3>
                Digital Planning
              </h3>

              <p>
                A substantial portion of participants already use
                electronic methods, supporting the viability of a
                digital planning solution.
              </p>

            </article>


            <article className="s1-info-card">

              <div className="s1-info-card-icon">
                <Search size={25} />
              </div>

              <h3>
                Fragmented Services
              </h3>

              <p>
                The project seeks to reduce the need to search across
                multiple websites for services and event information.
              </p>

            </article>

          </div>

        </section>


        {/* TAKEAWAY */}
        <section
          id="takeaway"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              RESEARCH TAKEAWAY
            </span>

            <h2>
              What did this tell us?
            </h2>

          </div>


          <div className="s1-info-card">

            <div className="s1-info-card-icon">
              <Lightbulb size={25} />
            </div>

            <h3>
              A centralized approach is worth exploring.
            </h3>

            <p>
              The research supports the need for an application that
              brings scheduling, attendance, venues, vendors, and other
              event-planning information together rather than requiring
              users to manage those activities across several separate
              locations.
            </p>


            <ul className="s1-check-list">

              <li className="s1-check-item">
                <CheckCircle2 size={17} />
                Scheduling is a recurring pain point.
              </li>

              <li className="s1-check-item">
                <CheckCircle2 size={17} />
                Users already document planning information.
              </li>

              <li className="s1-check-item">
                <CheckCircle2 size={17} />
                Many users already rely on digital methods.
              </li>

              <li className="s1-check-item">
                <CheckCircle2 size={17} />
                Centralization could reduce fragmented planning.
              </li>

            </ul>

          </div>

        </section>


        <div className="s1-next-page">

          <div>

            <span>
              SPRINT 1
            </span>

            <h3>
              Return to Sprint Overview
            </h3>

          </div>

          <Link
            to="/sprint-1"
            className="s1-next-button"
          >
            Sprint 1

            <ArrowLeft size={17} />
          </Link>

        </div>

      </main>

    </div>
  );
}

export default MarketResearch;