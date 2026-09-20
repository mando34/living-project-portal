import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Users,
  CalendarDays,
  CakeSlice,
  Clock3,
  NotebookPen,
  Smartphone,
  MapPin,
  Wallet,
  Utensils,
  Music2,
  CheckCircle2,
  Lightbulb,
  Search,
  PartyPopper,
  ClipboardList,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import "./Sprint1SubPages.css";

function MarketResearch() {

  const phase1Challenges = [
    {
      rank: "01",
      label: "Scheduling",
      value: "4 / 5",
      percent: "80%",
    },
    {
      rank: "02",
      label: "Late Deliveries",
      value: "2 / 5",
      percent: "40%",
    },
    {
      rank: "03",
      label: "Food",
      value: "1 / 5",
      percent: "20%",
    },
  ];


  const phase2Challenges = [
    {
      rank: "01",
      label: "Scheduling",
      value: "8 / 13",
      percent: "62%",
    },
    {
      rank: "02",
      label: "Getting People On Time",
      value: "4 / 13",
      percent: "31%",
    },
    {
      rank: "03",
      label: "Agreeing on a Time",
      value: "3 / 13",
      percent: "23%",
    },
    {
      rank: "04",
      label: "Confirming Attendance",
      value: "2 / 13",
      percent: "15%",
    },
  ];


  const planningFactors = [
    {
      icon: CalendarDays,
      title: "Scheduling",
      value: "8 / 13",
      percent: "62%",
      className: "factor-pink",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "5 / 13",
      percent: "38%",
      className: "factor-blue",
    },
    {
      icon: Wallet,
      title: "Budget",
      value: "5 / 13",
      percent: "38%",
      className: "factor-purple",
    },
    {
      icon: Utensils,
      title: "Food",
      value: "4 / 13",
      percent: "31%",
      className: "factor-orange",
    },
    {
      icon: PartyPopper,
      title: "Activities",
      value: "3 / 13",
      percent: "23%",
      className: "factor-green",
    },
    {
      icon: Sparkles,
      title: "Theme",
      value: "3 / 13",
      percent: "23%",
      className: "factor-yellow",
    },
  ];


  const conclusions = [
    "Birthday parties were the most common event type across both research phases.",
    "Scheduling consistently emerged as the largest event-planning challenge.",
    "People prefer to keep planning information written down, with electronic methods becoming especially common.",
    "Location, budget, food, activities, and theme also influence the planning experience.",
    "Entertainment and environment strongly influence whether attendees consider a party successful.",
    "Many events are planned collaboratively rather than entirely by one person.",
  ];


  return (
    <div className="market-research-page">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="market-hero">

        <span className="market-confetti market-c1"></span>
        <span className="market-confetti market-c2"></span>
        <span className="market-confetti market-c3"></span>
        <span className="market-confetti market-c4"></span>

        <div className="market-hero-container">

          {/* LEFT */}
          <div className="market-hero-copy">

            <Link
              to="/sprint-1"
              className="market-back-link"
            >
              <ArrowLeft size={16} />
              Back to Sprint 1
            </Link>

            <span className="market-eyebrow">
              SPRINT 1 · MARKET RESEARCH
            </span>

            <h1>
              Listening.
              <br />
              Learning.
              <br />
              <span>Improving.</span>
            </h1>

            <p>
              We conducted two phases of user research to better understand
              how people plan events, what makes the process difficult,
              and which parts of the experience matter most.
            </p>

            <div className="market-hero-stats">

              <div>
                <strong>18</strong>
                <span>Total Participants</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Research Phases</span>
              </div>

              <div>
                <strong>6</strong>
                <span>Core Questions</span>
              </div>

            </div>

            

          </div>


          {/* RIGHT — PHASE PREVIEW */}
          <div className="market-phase-preview">

            {/* PHASE 1 */}
            <article className="phase-preview-card phase-preview-one">

              <div className="phase-preview-header">

                <div className="phase-preview-icon">
                  <Users size={25} />
                </div>

                <div>
                  <span>
                    PHASE 1
                  </span>

                  <h3>
                    5 Participants
                  </h3>
                </div>

              </div>


              <div className="phase-preview-chart-row">

                <div className="market-donut phase1-donut">

                  <div className="market-donut-center">
                    <CakeSlice size={24} />
                  </div>

                </div>


                <div className="donut-legend">

                  <div>
                    <span className="legend-dot pink-dot"></span>

                    <p>
                      Birthday Parties

                      <strong>
                        80%
                      </strong>
                    </p>
                  </div>


                  <div>
                    <span className="legend-dot light-pink-dot"></span>

                    <p>
                      Holiday Parties

                      <strong>
                        20%
                      </strong>
                    </p>
                  </div>

                </div>

              </div>


              <div className="phase-preview-divider"></div>


              <h4>
                Top Challenges
              </h4>


              <div className="preview-challenge-list">

                {phase1Challenges.map((challenge) => (

                  <div
                    className="preview-challenge"
                    key={challenge.label}
                  >

                    <span className="preview-rank">
                      {challenge.rank}
                    </span>

                    <span className="preview-label">
                      {challenge.label}
                    </span>

                    <strong>
                      {challenge.percent}
                    </strong>

                  </div>

                ))}

              </div>

            </article>


            {/* PHASE 2 */}
            <article className="phase-preview-card phase-preview-two">

              <div className="phase-preview-header">

                <div className="phase-preview-icon">
                  <Users size={25} />
                </div>

                <div>
                  <span>
                    PHASE 2
                  </span>

                  <h3>
                    13 Participants
                  </h3>
                </div>

              </div>


              <div className="phase-preview-chart-row">

                <div className="market-donut phase2-donut">

                  <div className="market-donut-center">
                    <CakeSlice size={24} />
                  </div>

                </div>


                <div className="donut-legend">

                  <div>
                    <span className="legend-dot purple-dot"></span>

                    <p>
                      Birthday Parties

                      <strong>
                        69%
                      </strong>
                    </p>
                  </div>


                  <div>
                    <span className="legend-dot light-purple-dot"></span>

                    <p>
                      Other Events

                      <strong>
                        31%
                      </strong>
                    </p>
                  </div>

                </div>

              </div>


              <div className="phase-preview-divider"></div>


              <h4>
                Top Challenges
              </h4>


              <div className="preview-challenge-list">

                {phase2Challenges
                  .slice(0, 3)
                  .map((challenge) => (

                    <div
                      className="preview-challenge"
                      key={challenge.label}
                    >

                      <span className="preview-rank">
                        {challenge.rank}
                      </span>

                      <span className="preview-label">
                        {challenge.label}
                      </span>

                      <strong>
                        {challenge.percent}
                      </strong>

                    </div>

                  ))}

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==========================================
          RESEARCH APPROACH
      ========================================== */}

      <section className="market-section research-approach-section">

        <div className="market-section-heading">

          <span className="market-eyebrow">
            OUR APPROACH
          </span>

          <h2>
            Two phases.
            <span> One clearer picture.</span>
          </h2>

          <p>
            Phase 1 gave us an initial understanding of common planning
            behaviors. Phase 2 expanded the participant pool and allowed
            us to see which themes continued to appear.
          </p>

        </div>


        <div className="research-phase-grid">

          {/* PHASE 1 */}
          <article className="research-phase-card research-phase-one">

            <div className="research-phase-number">
              01
            </div>

            <div className="research-phase-heading">

              <span>
                PHASE ONE
              </span>

              <h3>
                Initial Discovery
              </h3>

              <p>
                5 participants
              </p>

            </div>


            <div className="research-phase-content">

              <div className="research-point">

                <CakeSlice size={19} />

                <p>
                  <strong>4 of 5</strong> participants discussed
                  birthday parties.
                </p>

              </div>


              <div className="research-point">

                <Clock3 size={19} />

                <p>
                  <strong>4 of 5</strong> identified scheduling as
                  the hardest part of planning.
                </p>

              </div>


              <div className="research-point">

                <NotebookPen size={19} />

                <p>
                  <strong>5 of 5</strong> kept relevant planning
                  information written down.
                </p>

              </div>


              <div className="research-point">

                <Users size={19} />

                <p>
                  Most participants described planning with help from
                  other people instead of working completely alone.
                </p>

              </div>

            </div>

          </article>


          {/* CONNECTOR */}
          <div className="phase-connector">

            <ArrowRight size={30} />

            <span>
              Expand
            </span>

          </div>


          {/* PHASE 2 */}
          <article className="research-phase-card research-phase-two">

            <div className="research-phase-number">
              02
            </div>

            <div className="research-phase-heading">

              <span>
                PHASE TWO
              </span>

              <h3>
                Expanded Research
              </h3>

              <p>
                13 participants
              </p>

            </div>


            <div className="research-phase-content">

              <div className="research-point">

                <CakeSlice size={19} />

                <p>
                  <strong>9 of 13</strong> participants discussed
                  birthday parties.
                </p>

              </div>


              <div className="research-point">

                <Clock3 size={19} />

                <p>
                  <strong>8 of 13</strong> identified scheduling as
                  the hardest planning challenge.
                </p>

              </div>


              <div className="research-point">

                <NotebookPen size={19} />

                <p>
                  <strong>10 of 13</strong> reported writing down
                  planning information.
                </p>

              </div>


              <div className="research-point">

                <Smartphone size={19} />

                <p>
                  <strong>8 of 13</strong> used electronic methods
                  to keep track of details.
                </p>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ==========================================
          BIGGEST CHALLENGE
      ========================================== */}

      <section className="market-section challenge-section">

        <div className="challenge-layout">

          <div className="challenge-copy">

            <span className="market-eyebrow">
              THE CLEAREST PATTERN
            </span>

            <h2>
              Scheduling remained the
              <span> biggest challenge.</span>
            </h2>

            <p>
              Scheduling appeared as the strongest recurring pain point
              in both phases of research.
            </p>

            <p>
              Phase 2 helped reveal why: planners were not only trying
              to select a date, but also trying to get people to agree
              on a time, arrive on time, and confirm attendance.
            </p>

          </div>


          <div className="challenge-comparison">

            <article className="challenge-stat-card">

              <span>
                PHASE 1
              </span>

              <strong>
                80%
              </strong>

              <p>
                4 of 5 participants identified scheduling as the hardest
                part of planning.
              </p>

              <div className="challenge-progress">

                <div
                  className="challenge-progress-fill phase1-progress"
                  style={{ width: "80%" }}
                ></div>

              </div>

            </article>


            <article className="challenge-stat-card">

              <span>
                PHASE 2
              </span>

              <strong>
                62%
              </strong>

              <p>
                8 of 13 participants identified scheduling as the hardest
                part of planning.
              </p>

              <div className="challenge-progress">

                <div
                  className="challenge-progress-fill phase2-progress"
                  style={{ width: "62%" }}
                ></div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==========================================
          PLANNING FACTORS
      ========================================== */}

      {/* ==========================================
    PLANNING FACTORS
========================================== */}

<section className="market-section planning-factors-section">

  {/* SECTION HEADING */}
  <div className="market-section-heading">

    <span className="market-eyebrow">
      WHAT PEOPLE CONSIDER
    </span>

    <h2>
      Planning is more than
      <span> choosing a date.</span>
    </h2>

    <p>
      Phase 2 showed several factors that influence how people
      approach an event. Scheduling received the most responses,
      followed by location and budget.
    </p>

  </div>


  {/* ==========================================
      PLANNING FACTORS CHART
  ========================================== */}

  <div className="planning-chart-wrapper">

    <article className="planning-chart-card">

      {/* CHART HEADER */}
      <div className="planning-chart-heading">

        <div>

          <span>
            PHASE 2 RESULTS
          </span>

          <h3>
            Factors Considered When Planning Events
          </h3>

          <p>
            Participants were asked which factors they consider
            when organizing an event. Scheduling stood out as the
            most frequently mentioned consideration.
          </p>

        </div>


        <div className="planning-chart-badge">
          13 Participants
        </div>

      </div>


      {/* CHART IMAGE */}
      <div className="planning-chart-image-wrapper">

        <img
          src="../../public/market-research-graph.png"
          alt="Bar chart showing responses for factors participants consider when planning events"
          className="planning-chart-image"
        />

      </div>


      {/* CHART TAKEAWAY */}
      <div className="planning-chart-note">

        <span>
          ✦
        </span>

        <p>
          Scheduling was the most commonly considered factor,
          followed by location and budget.
        </p>

      </div>

    </article>

  </div>


  {/* ==========================================
      INDIVIDUAL FACTOR BREAKDOWN
  ========================================== */}

  <div className="factor-breakdown-heading">

    <span>
      A CLOSER LOOK
    </span>

    <h3>
      Breaking down the responses
    </h3>

    <p>
      The cards below provide a closer look at the most commonly
      identified planning considerations.
    </p>

  </div>


  <div className="planning-factor-grid">

    {planningFactors.map((factor) => {

      const Icon = factor.icon;

      return (
        <article
          className={`planning-factor-card ${factor.className}`}
          key={factor.title}
        >

          <div className="planning-factor-icon">

            <Icon
              size={25}
              strokeWidth={2}
            />

          </div>


          <div>

            <h3>
              {factor.title}
            </h3>

            <span>
              {factor.value}
            </span>

          </div>


          <strong>
            {factor.percent}
          </strong>

        </article>
      );
    })}

  </div>

</section>


      {/* ==========================================
          HOW PEOPLE KEEP TRACK
      ========================================== */}

      <section className="market-section tracking-section">

        <div className="tracking-layout">

          <div className="tracking-heading">

            <span className="market-eyebrow">
              PLANNING HABITS
            </span>

            <h2>
              People like to
              <span> write things down.</span>
            </h2>

            <p>
              Both phases showed that keeping a written record is an
              important part of planning. Phase 2 also showed a clear
              use of digital tools.
            </p>

          </div>


          <div className="tracking-stat-grid">

            <article className="tracking-stat-card">

              <div className="tracking-stat-icon">
                <NotebookPen size={27} />
              </div>

              <strong>
                10 / 13
              </strong>

              <h3>
                Written Notes
              </h3>

              <p>
                Participants who reported writing planning information down.
              </p>

            </article>


            <article className="tracking-stat-card">

              <div className="tracking-stat-icon">
                <Smartphone size={27} />
              </div>

              <strong>
                8 / 13
              </strong>

              <h3>
                Electronic
              </h3>

              <p>
                Participants who used electronic methods to keep track
                of event details.
              </p>

            </article>


            <article className="tracking-stat-card">

              <div className="tracking-stat-icon">
                <ClipboardList size={27} />
              </div>

              <strong>
                5 / 13
              </strong>

              <h3>
                Physical
              </h3>

              <p>
                Participants who still used physical notes to manage
                event information.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* ==========================================
          GOOD PARTY
      ========================================== */}

      <section className="market-section good-party-section">

        <div className="good-party-card">

          <div className="good-party-copy">

            <span className="market-eyebrow light-market-eyebrow">
              WHAT MAKES A GREAT EVENT?
            </span>

            <h2>
              Planning matters.
              <span> The experience matters more.</span>
            </h2>

            <p>
              Participants consistently connected successful parties
              with enjoyable environments, entertainment, and food.
            </p>

          </div>


          <div className="good-party-stats">

            <div className="good-party-stat">

              <Music2 size={31} />

              <strong>
                9 / 13
              </strong>

              <span>
                Environment / Entertainment
              </span>

            </div>


            <div className="good-party-divider"></div>


            <div className="good-party-stat">

              <Utensils size={31} />

              <strong>
                6 / 13
              </strong>

              <span>
                Food
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          OVERALL CONCLUSIONS
      ========================================== */}

      <section className="market-section conclusion-section">

        <div className="market-section-heading">

          <span className="market-eyebrow">
            WHAT WE LEARNED
          </span>

          <h2>
            The bigger
            <span> picture.</span>
          </h2>

        </div>


        <div className="conclusion-layout">

          <div className="conclusion-list">

            {conclusions.map((conclusion, index) => (

              <div
                className="conclusion-item"
                key={conclusion}
              >

                <div className="conclusion-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <CheckCircle2 size={20} />

                <p>
                  {conclusion}
                </p>

              </div>

            ))}

          </div>


          <aside className="research-takeaway-card">

            <div className="takeaway-icon">
              <Lightbulb size={38} />
            </div>

            <span>
              OUR TAKEAWAY
            </span>

            <h3>
              People need a simpler way to keep event planning together.
            </h3>

            <p>
              The research supports Festivo's direction toward one
              centralized planning experience for scheduling, attendance,
              event information, services, and other planning details.
            </p>

          </aside>

        </div>

      </section>


      {/* ==========================================
          CONNECTION TO FESTIVO
      ========================================== */}

      <section className="market-section festivo-connection-section">

        <div className="festivo-connection-card">

          <Search size={32} />

          <span className="market-eyebrow">
            FROM RESEARCH TO PRODUCT
          </span>

          <h2>
            Turning feedback into
            <span> direction.</span>
          </h2>

          <p>
            These findings give our team evidence for which problems
            Festivo should prioritize as we continue defining the
            project's requirements and features.
          </p>


          <div className="research-to-feature-grid">

            <div>
              <Clock3 size={21} />

              <span>
                Scheduling Challenges
              </span>

              <ArrowRight size={17} />

              <strong>
                Better Coordination
              </strong>
            </div>


            <div>
              <NotebookPen size={21} />

              <span>
                Scattered Information
              </span>

              <ArrowRight size={17} />

              <strong>
                Centralized Planning
              </strong>
            </div>


            <div>
              <Users size={21} />

              <span>
                Attendance Uncertainty
              </span>

              <ArrowRight size={17} />

              <strong>
                RSVP Tracking
              </strong>
            </div>


            <div>
              <MapPin size={21} />

              <span>
                Venue & Service Decisions
              </span>

              <ArrowRight size={17} />

              <strong>
                Easier Research
              </strong>
            </div>

          </div>


          <Link
            to="/sprint-1"
            className="market-return-button"
          >
            Return to Sprint 1

            <ArrowLeft size={17} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default MarketResearch;