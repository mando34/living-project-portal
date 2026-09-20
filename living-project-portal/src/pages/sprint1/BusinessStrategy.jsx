import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Target,
  Lightbulb,
  Search,
  CheckCircle2,
  Layers3,
} from "lucide-react";

import "./Sprint1Subpages.css";

function BusinessStrategy() {
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
              SPRINT 1 · BUSINESS STRATEGY
            </span>

            <h1>
              Business Strategy
            </h1>

            <p>
              This section defines the business strategy behind Festivo 
              and establishes how the project supports its overall goals. 
              It connects the organization’s strategy to a measurable 
              business objective, provides market research to justify 
              the need for the project, and defines the scope of what 
              Festivo will deliver.
            </p>

          </div>


          <div className="s1-subpage-hero-icon">
            <BarChart3 size={66} />
          </div>

        </div>

      </section>


      <main className="s1-subpage-content">

        <nav className="s1-subpage-navigation">
          <a href="#organization">Organization Strategy</a>
          <a href="#objective">Business Objective</a>
          <a href="#justification">Project Justification</a>
          <a href="#scope">Scope</a>
        </nav>


        {/* ORGANIZATION STRATEGY */}
        <section
          id="organization"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              ORGANIZATION STRATEGY
            </span>

            <h2>
              Simplify the planning experience.
            </h2>

          </div>


          <div className="s1-info-card">

            <div className="s1-info-card-icon">
              <Lightbulb size={25} />
            </div>

            <p>
              Festivo's strategy is to simplify and improve the
              event-planning experience by providing users with one
              centralized platform for organizing and coordinating
              event-related services.
            </p>

          </div>

        </section>


        {/* OBJECTIVE */}
        <section
          id="objective"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              BUSINESS OBJECTIVE
            </span>

            <h2>
              A measurable goal.
            </h2>

          </div>


          <div className="s1-card-grid">

            <div className="s1-info-card">

              <div className="s1-info-card-icon">
                <Target size={25} />
              </div>

              <h3>
                Reduce Planning Friction
              </h3>

              <p>
                Reduce the amount of time users spend searching across
                multiple websites when planning an event.
              </p>

            </div>


            <div className="s1-info-card">

              <div className="s1-info-card-icon">
                <BarChart3 size={25} />
              </div>

              <h3>
                85% Satisfaction
              </h3>

              <p>
                The project establishes a goal of achieving at least
                an 85% user satisfaction score by the end of the semester.
              </p>

            </div>

          </div>

        </section>


        {/* JUSTIFICATION */}
        <section
          id="justification"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              PROJECT JUSTIFICATION
            </span>

            <h2>
              What supports the need?
            </h2>

            <p>
              Research identified scheduling and fragmented planning
              information as recurring event-planning problems.
            </p>

          </div>


          <div className="s1-stat-grid">

            <div className="s1-stat-card">
              <strong>
                80%
              </strong>

              <span>
                Phase 1 participants who identified scheduling as the
                hardest part of event planning.
              </span>
            </div>


            <div className="s1-stat-card">
              <strong>
                62%
              </strong>

              <span>
                Phase 2 participants who identified scheduling as a
                major consideration.
              </span>
            </div>


            <div className="s1-stat-card">
              <strong>
                77%
              </strong>

              <span>
                Participants who reported writing down planning
                information.
              </span>
            </div>


            <div className="s1-stat-card">
              <strong>
                62%
              </strong>

              <span>
                Participants who reported using electronic methods to
                keep track of planning information.
              </span>
            </div>

          </div>


          <div
            className="s1-info-card"
            style={{ marginTop: "25px" }}
          >

            <div className="s1-info-card-icon">
              <Search size={25} />
            </div>

            <h3>
              Why this matters
            </h3>

            <p>
              These findings support the need for a centralized
              application where users can organize scheduling,
              attendance, venues, event information, and related services
              in one place.
            </p>

          </div>

        </section>


        {/* SCOPE */}
        <section
          id="scope"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              BUSINESS SCOPE
            </span>

            <h2>
              What will Festivo deliver?
            </h2>

          </div>


          <div className="s1-info-card">

            <div className="s1-info-card-icon">
              <Layers3 size={25} />
            </div>

            <p>
              Festivo is planned as a cross-platform mobile event-planning
              application that centralizes:
            </p>

            <ul className="s1-check-list">

              <li className="s1-check-item">
                <CheckCircle2 size={17} />
                Scheduling
              </li>

              <li className="s1-check-item">
                <CheckCircle2 size={17} />
                RSVPs
              </li>

              <li className="s1-check-item">
                <CheckCircle2 size={17} />
                Venue availability and capacity
              </li>

              <li className="s1-check-item">
                <CheckCircle2 size={17} />
                Party-supply ordering
              </li>

              <li className="s1-check-item">
                <CheckCircle2 size={17} />
                Vendors
              </li>

              <li className="s1-check-item">
                <CheckCircle2 size={17} />
                Catering
              </li>

            </ul>

            <p>
              Direct payment processing is excluded, while weather
              considerations and reservation or order tracking are
              deferred.
            </p>

          </div>

        </section>


        <div className="s1-next-page">

          <div>

            <span>
              NEXT
            </span>

            <h3>
              Market Research
            </h3>

          </div>

          <Link
            to="/sprint-1/market-research"
            className="s1-next-button"
          >
            Continue

            <ArrowRight size={17} />
          </Link>

        </div>

      </main>

    </div>
  );
}

export default BusinessStrategy;