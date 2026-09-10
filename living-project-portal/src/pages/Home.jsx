import { Link } from "react-router-dom";
import SprintCard from "../components/SprintCard";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            Software Project Management
          </p>

          <h1>
            Party Planner
          </h1>

          <p className="hero-description">
            A collaborative event-planning platform designed to simplify
            the process of organizing social gatherings by bringing
            scheduling, responsibilities, guest coordination, and planning
            information into one centralized experience.
          </p>

          <div className="hero-buttons">
            <Link to="/sprint-1" className="button primary">
              View Our Progress
            </Link>

            <Link to="/about" className="button secondary">
              Meet the Team
            </Link>
          </div>

        </div>

      </section>


      <section className="section">

        <div className="section-heading">

          <p className="eyebrow">
            The Problem
          </p>

          <h2>
            Planning an event shouldn't require five different tools.
          </h2>

        </div>

        <p className="section-text">
          Organizing parties and social gatherings commonly requires
          people to coordinate schedules, locations, food, invitations,
          budgets, responsibilities, and guest availability across
          multiple conversations, notes, and applications.
        </p>

        <p className="section-text">
          Our project explores how a centralized planning experience
          could make this process easier, clearer, and more collaborative.
        </p>

      </section>


      <section className="section alt-section">

        <div className="section-heading">

          <p className="eyebrow">
            Living Project Portal
          </p>

          <h2>
            Follow the project from idea to final product.
          </h2>

        </div>

        <p className="section-text">
          This portal documents how our team manages the project
          throughout the semester. Each sprint contains our objectives,
          research, decisions, deliverables, results, and lessons learned.
        </p>


        <div className="sprint-grid">

          <SprintCard
            number="01"
            title="Sprint 1"
            description="Problem exploration, user research, initial project direction, and early findings."
            link="/sprint-1"
          />

          <SprintCard
            number="02"
            title="Sprint 2"
            description="Project development continues as research and requirements influence our solution."
            link="/sprint-2"
          />

          <div className="sprint-card future-card">
            <span className="sprint-number">03</span>
            <h3>Future Sprint</h3>
            <p>
              Additional project progress will be documented here as the
              semester continues.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;