import { Link } from "react-router-dom";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock3,
  Coins,
  Download,
  Gauge,
  Layers3,
  Scale,
  Target,
  Users,
} from "lucide-react";

import "./Sprint2SubPages.css";

function EstimationDetails() {

  const stories = [
    {
      name: "Search Vendors",
      moscow: "Must",
      points: 8,
      percent: "25.8%",
      colorClass: "ed-story-1",
    },
    {
      name: "View Vendor Information",
      moscow: "Should",
      points: 5,
      percent: "16.1%",
      colorClass: "ed-story-2",
    },
    {
      name: "Save Vendor",
      moscow: "Could",
      points: 3,
      percent: "9.7%",
      colorClass: "ed-story-3",
    },
    {
      name: "Send Invitations",
      moscow: "Must",
      points: 8,
      percent: "25.8%",
      colorClass: "ed-story-4",
    },
    {
      name: "View Invitation Status",
      moscow: "Should",
      points: 5,
      percent: "16.1%",
      colorClass: "ed-story-5",
    },
    {
      name: "Notify Guests",
      moscow: "Could",
      points: 2,
      percent: "6.5%",
      colorClass: "ed-story-6",
    },
  ];


  const assumptions = [
    "Story point velocities of 5, 8, and 11 points per two-week sprint are assumed.",
    "Each team member is assumed to contribute 16 productive hours per sprint.",
    "The Use-Case Point technical and environmental adjustment factors are assumed values.",
    "The Use-Case Point productivity rate is assumed to be 20 hours per UCP.",
    "The final calculation assumes a five-person development team.",
    "The selected slice is assumed to remain unchanged during the estimate.",
  ];


  return (
    <div className="s2-subpage ed-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="ed-hero">

        <div className="ed-hero-inner">

          <div className="ed-hero-copy">

            <Link
              to="/sprint-2"
              className="s2-subpage-back"
            >
              <ArrowLeft size={16} />
              Back to Sprint 2
            </Link>


            <span className="s2-subpage-label">
              SPRINT 2 · ESTIMATION DETAILS
            </span>


            <h1>
              Estimation
              <span> Details.</span>
            </h1>


            <p>
              We selected a representative slice of Festivo and
              estimated the same work using two independent methods:
              Story Points and Use-Case Points. Comparing both estimates
              allowed us to identify uncertainty and develop a more
              defensible project estimate.
            </p>


            <div className="ed-hero-tags">

              <span>
                <Layers3 size={16} />
                2 Slice Areas
              </span>

              <span>
                <Target size={16} />
                31 Story Points
              </span>

              <span>
                <Scale size={16} />
                2 Estimation Methods
              </span>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="ed-hero-visual">

            <div className="ed-hero-blob"></div>

            <div className="ed-analysis-card">

              <div className="ed-analysis-chart">

                <span className="ed-bar-1"></span>
                <span className="ed-bar-2"></span>
                <span className="ed-bar-3"></span>
                <span className="ed-bar-4"></span>

              </div>

              <div className="ed-analysis-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>


            <div className="ed-floating-calculator">
              <Calculator size={44} />
            </div>


            <div className="ed-floating-clock">
              <Clock3 size={34} />
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          RESULTS AT A GLANCE
      ================================================== */}

      <section className="ed-overview-section">

        <div className="ed-section-heading">

          <span>
            ESTIMATE AT A GLANCE
          </span>

          <h2>
            Our slice estimate in
            <span> four numbers.</span>
          </h2>

          <p>
            The final estimate combines the results of both methods
            and converts the effort into expected time and cost.
          </p>

        </div>


        <div className="ed-metric-grid">

          <article className="ed-metric-card ed-metric-pink">

            <div className="ed-metric-icon">
              <Gauge size={26} />
            </div>

            <span>
              EXPECTED EFFORT
            </span>

            <strong>
              674.2
            </strong>

            <p>
              Team hours
            </p>

          </article>


          <article className="ed-metric-card ed-metric-purple">

            <div className="ed-metric-icon">
              <Clock3 size={26} />
            </div>

            <span>
              EXPECTED DURATION
            </span>

            <strong>
              16.9
            </strong>

            <p>
              Weeks
            </p>

          </article>


          <article className="ed-metric-card ed-metric-orange">

            <div className="ed-metric-icon">
              <Coins size={26} />
            </div>

            <span>
              EXPECTED COST
            </span>

            <strong className="ed-money-value">
              $49.2K
            </strong>

            <p>
              $49,216.60
            </p>

          </article>


          <article className="ed-metric-card ed-metric-blue">

            <div className="ed-metric-icon">
              <Users size={26} />
            </div>

            <span>
              TEAM SIZE
            </span>

            <strong>
              5
            </strong>

            <p>
              Members
            </p>

          </article>

        </div>

      </section>


      {/* ==================================================
          SELECTED SLICE
      ================================================== */}

      <section className="ed-slice-section">

        <div className="ed-section-heading">

          <span>
            STEP 01 · SELECT THE SLICE
          </span>

          <h2>
            What did we
            <span> estimate?</span>
          </h2>

          <p>
            We selected two connected parts of Festivo because vendor
            discovery and guest coordination represent central parts
            of the product's value.
          </p>

        </div>


        <div className="ed-slice-grid">

          <article className="ed-slice-card ed-slice-pink">

            <div className="ed-slice-number">
              01
            </div>

            <h3>
              Sourcing Relevant Businesses & Vendors
            </h3>

            <p>
              Allow users to search for and review businesses or
              vendors relevant to their event.
            </p>


            <div className="ed-slice-detail">

              <span>
                INPUTS
              </span>

              <p>
                Search bar, filters, location, event type,
                and service/category selection.
              </p>

            </div>


            <div className="ed-slice-detail">

              <span>
                OUTPUTS
              </span>

              <p>
                Relevant vendor results containing services,
                location, pricing, and contact information.
              </p>

            </div>

          </article>


          <article className="ed-slice-card ed-slice-purple">

            <div className="ed-slice-number">
              02
            </div>

            <h3>
              RSVP & Guest Management
            </h3>

            <p>
              Give event organizers a way to send invitations and
              coordinate attendance from one centralized location.
            </p>


            <div className="ed-slice-detail">

              <span>
                STORED DATA
              </span>

              <p>
                Guest names, invitation information,
                and RSVP status.
              </p>

            </div>


            <div className="ed-slice-detail">

              <span>
                INTEGRATIONS
              </span>

              <p>
                Maps/location services and outside
                business/vendor information.
              </p>

            </div>

          </article>

        </div>


        <div className="ed-out-of-scope">

          <AlertTriangle size={22} />

          <div>

            <span>
              OUT OF THIS SLICE
            </span>

            <p>
              Vendor booking, payments, user reviews, vendor messaging,
              and unrelated event-planning functionality were excluded
              from this estimate.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          STORY POINT DISTRIBUTION + METHODS
      ================================================== */}

      <section className="ed-analysis-section">

        <div className="ed-section-heading">

          <span>
            EFFORT & ESTIMATION
          </span>

          <h2>
            Breaking down the
            <span> selected work.</span>
          </h2>

          <p>
            The slice contains six user stories totaling 31 story
            points. Those stories were then evaluated with both
            Story Points and Use-Case Points.
          </p>

        </div>


        <div className="ed-analysis-dashboard">

          {/* ======================================
              DONUT
          ====================================== */}

          <article className="ed-story-chart-card">

            <div className="ed-dashboard-card-header">

              <div>
                <span>
                  STORY POINT DISTRIBUTION
                </span>

                <h3>
                  Slice Composition
                </h3>
              </div>

              <Layers3 size={26} />

            </div>


            <div className="ed-story-chart-layout">

              <div className="ed-story-donut">

                <div className="ed-story-donut-center">

                  <strong>
                    31
                  </strong>

                  <span>
                    TOTAL POINTS
                  </span>

                </div>

              </div>


              <div className="ed-story-legend">

                {stories.map((story) => (

                  <div key={story.name}>

                    <span
                      className={`ed-story-dot ${story.colorClass}`}
                    ></span>

                    <div>

                      <p>
                        {story.name}
                      </p>

                      <small>
                        {story.moscow}
                      </small>

                    </div>

                    <strong>
                      {story.points}
                    </strong>

                    <span className="ed-story-percent">
                      {story.percent}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </article>


          {/* ======================================
              METHOD COMPARISON
          ====================================== */}

          <article className="ed-method-comparison-card">

            <div className="ed-dashboard-card-header">

              <div>
                <span>
                  ESTIMATION METHODS
                </span>

                <h3>
                  Two Different Views
                </h3>
              </div>

              <Scale size={26} />

            </div>


            {/* STORY POINT METHOD */}

            <div className="ed-method-result ed-story-method">

              <div className="ed-method-result-heading">

                <div>

                  <span>
                    METHOD 01
                  </span>

                  <h4>
                    Story Points
                  </h4>

                </div>

                <strong>
                  225.6–496 h
                </strong>

              </div>


              <div className="ed-method-row">

                <span>
                  Low
                </span>

                <strong>
                  225.6 h
                </strong>

              </div>


              <div className="ed-method-row">

                <span>
                  Middle
                </span>

                <strong>
                  310 h
                </strong>

              </div>


              <div className="ed-method-row">

                <span>
                  High
                </span>

                <strong>
                  496 h
                </strong>

              </div>


              <div className="ed-method-assumption">
                Velocity assumption: 5 / 8 / 11 points per sprint
              </div>

            </div>


            {/* USE CASE METHOD */}

            <div className="ed-method-result ed-usecase-method">

              <div className="ed-method-result-heading">

                <div>

                  <span>
                    METHOD 02
                  </span>

                  <h4>
                    Use-Case Points
                  </h4>

                </div>

                <strong>
                  1,019.6 h
                </strong>

              </div>


              <div className="ed-method-row">

                <span>
                  Actor Weight
                </span>

                <strong>
                  11
                </strong>

              </div>


              <div className="ed-method-row">

                <span>
                  Use-Case Weight
                </span>

                <strong>
                  50
                </strong>

              </div>


              <div className="ed-method-row">

                <span>
                  Final UCP
                </span>

                <strong>
                  50.98
                </strong>

              </div>


              <div className="ed-method-assumption">
                Productivity assumption: 20 hours per UCP
              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ==================================================
          METHOD CALCULATIONS
      ================================================== */}

      <section className="ed-calculation-section">

        <div className="ed-section-heading">

          <span>
            STEP 03 · CALCULATE THE SLICE
          </span>

          <h2>
            How did each method
            <span> reach its result?</span>
          </h2>

        </div>


        <div className="ed-calculation-grid">

          {/* STORY POINT CALCULATION */}

          <article className="ed-calculation-card">

            <div className="ed-calculation-icon ed-calc-pink">
              <Gauge size={29} />
            </div>

            <span>
              STORY POINTS
            </span>

            <h3>
              Velocity-Based Estimate
            </h3>


            <div className="ed-calc-table">

              <div>
                <span>
                  Slice Points
                </span>

                <strong>
                  31
                </strong>
              </div>

              <div>
                <span>
                  Team Size
                </span>

                <strong>
                  5
                </strong>
              </div>

              <div>
                <span>
                  Hours / Person / Sprint
                </span>

                <strong>
                  16
                </strong>
              </div>

              <div>
                <span>
                  Velocity
                </span>

                <strong>
                  5 / 8 / 11
                </strong>
              </div>

            </div>


            <div className="ed-calc-result">

              <small>
                RESULT
              </small>

              <strong>
                225.6 – 496 hours
              </strong>

              <p>
                Middle estimate: 310 hours
              </p>

            </div>

          </article>


          {/* UCP CALCULATION */}

          <article className="ed-calculation-card">

            <div className="ed-calculation-icon ed-calc-purple">
              <Calculator size={29} />
            </div>

            <span>
              USE-CASE POINTS
            </span>

            <h3>
              Use-Case Complexity Estimate
            </h3>


            <div className="ed-calc-table">

              <div>
                <span>
                  UAW
                </span>

                <strong>
                  11
                </strong>
              </div>

              <div>
                <span>
                  UUCW
                </span>

                <strong>
                  50
                </strong>
              </div>

              <div>
                <span>
                  UUCP
                </span>

                <strong>
                  61
                </strong>
              </div>

              <div>
                <span>
                  TCF / ECF
                </span>

                <strong>
                  .61 / 1.37
                </strong>
              </div>

              <div>
                <span>
                  UCP
                </span>

                <strong>
                  50.98
                </strong>
              </div>

              <div>
                <span>
                  Hours / UCP
                </span>

                <strong>
                  20
                </strong>
              </div>

            </div>


            <div className="ed-calc-result ed-calc-result-purple">

              <small>
                RESULT
              </small>

              <strong>
                1,019.6 hours
              </strong>

            </div>

          </article>

        </div>

      </section>


      {/* ==================================================
          ESTIMATE GAP
      ================================================== */}

      <section className="ed-gap-section">

        <div className="ed-gap-card">

          <div className="ed-gap-number">

            <span>
              ESTIMATE GAP
            </span>

            <strong>
              3.29×
            </strong>

          </div>


          <div className="ed-gap-copy">

            <h2>
              Why are the two estimates
              <span> so different?</span>
            </h2>

            <p>
              The Story Point estimate depends heavily on assumed
              team velocity and productive hours per sprint. The
              Use-Case Point estimate instead depends on actor and
              use-case complexity, adjustment factors, and the assumed
              productivity rate of 20 hours per UCP.
            </p>

            <p>
              Actual sprint velocity and more detailed use-case
              definitions would allow the team to replace several
              assumptions with measured information.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          TEAM SIZE
      ================================================== */}

      <section className="ed-team-section">

        <div className="ed-section-heading">

          <span>
            STEP 04 · TEAM-SIZE CHECK
          </span>

          <h2>
            Accounting for
            <span> coordination.</span>
          </h2>

          <p>
            More people do not automatically produce proportional
            increases in output. Communication, integration, and
            handoffs must also be considered.
          </p>

        </div>


        <div className="ed-team-layout">

          <article className="ed-communication-card">

            <span>
              FIVE-PERSON TEAM
            </span>

            <strong>
              10
            </strong>

            <h3>
              Communication Paths
            </h3>

            <div className="ed-formula">
              n(n − 1) ÷ 2
            </div>

          </article>


          <article className="ed-team-check-card">

            <div className="ed-team-check">

              <CheckCircle2 size={20} />

              <p>
                Team contains five or fewer members.
              </p>

            </div>


            <div className="ed-team-check">

              <CheckCircle2 size={20} />

              <p>
                Communication paths were explicitly considered.
              </p>

            </div>


            <div className="ed-team-check">

              <CheckCircle2 size={20} />

              <p>
                Integration effort was included.
              </p>

            </div>


            <div className="ed-team-check">

              <CheckCircle2 size={20} />

              <p>
                Headcount was not assumed to scale output linearly.
              </p>

            </div>


            <div className="ed-team-check">

              <CheckCircle2 size={20} />

              <p>
                Estimates reflect the team that is actually available.
              </p>

            </div>


            <div className="ed-team-check">

              <CheckCircle2 size={20} />

              <p>
                Larger-team timelines were adjusted instead of copied.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* ==================================================
          FINAL ESTIMATE
      ================================================== */}

      <section className="ed-final-section">

        <div className="ed-section-heading">

          <span>
            STEP 06 · PRESENT THE RESULT
          </span>

          <h2>
            The final
            <span> estimation range.</span>
          </h2>

          <p>
            Rather than presenting one exact number, the final result
            communicates a range and an expected value based on the
            uncertainty still present in the project.
          </p>

        </div>


        <div className="ed-final-card">

          {/* RANGE HEADER */}

          <div className="ed-final-card-header">

            <div>

              <span>
                FESTIVO ESTIMATION APPENDIX
              </span>

              <h3>
                Vendor Sourcing + RSVP / Guest Management
              </h3>

            </div>

            <span className="ed-estimate-date">
              September 27
            </span>

          </div>


          {/* RANGE VISUAL */}

          <div className="ed-range">

            <div className="ed-range-track">

              <span className="ed-range-point ed-range-low"></span>

              <span className="ed-range-point ed-range-expected"></span>

              <span className="ed-range-point ed-range-high"></span>

            </div>


            <div className="ed-range-values">

              <div>

                <span>
                  LOW
                </span>

                <strong>
                  225.6
                </strong>

                <p>
                  hours
                </p>

              </div>


              <div className="ed-range-main">

                <span>
                  EXPECTED
                </span>

                <strong>
                  674.2
                </strong>

                <p>
                  hours
                </p>

              </div>


              <div>

                <span>
                  HIGH
                </span>

                <strong>
                  1,019.6
                </strong>

                <p>
                  hours
                </p>

              </div>

            </div>

          </div>


          {/* FINAL METRICS */}

          <div className="ed-final-metrics">

            <div>

              <Coins size={23} />

              <span>
                LOADED RATE
              </span>

              <strong>
                $73 / hr
              </strong>

            </div>


            <div>

              <Coins size={23} />

              <span>
                COST RANGE
              </span>

              <strong>
                $16,468.80 – $74,430.80
              </strong>

            </div>


            <div>

              <Coins size={23} />

              <span>
                EXPECTED COST
              </span>

              <strong>
                $49,216.60
              </strong>

            </div>


            <div>

              <Clock3 size={23} />

              <span>
                EXPECTED TIME
              </span>

              <strong>
                16.9 weeks
              </strong>

            </div>


            <div>

              <Clock3 size={23} />

              <span>
                CALENDAR RANGE
              </span>

              <strong>
                5.6 – 25.5 weeks
              </strong>

            </div>


            <div>

              <Users size={23} />

              <span>
                PRODUCTIVE CAPACITY
              </span>

              <strong>
                40 team hrs / week
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          ASSUMPTIONS
      ================================================== */}

      <section className="ed-assumptions-section">

        <div className="ed-assumptions-layout">

          <div>

            <span className="ed-small-label">
              KEY ASSUMPTIONS
            </span>

            <h2>
              What could change
              <span> this estimate?</span>
            </h2>

            <p>
              The estimate will continue to become more accurate as
              the team replaces assumptions with measured development
              data.
            </p>

          </div>


          <div className="ed-assumption-list">

            {assumptions.map((assumption) => (

              <div key={assumption}>

                <AlertTriangle size={17} />

                <p>
                  {assumption}
                </p>

              </div>

            ))}

          </div>

        </div>


        <div className="ed-change-note">

          <AlertTriangle size={22} />

          <p>
            The estimate could change if actual velocity differs,
            actors or use cases change, technical requirements evolve,
            vendor-data integration becomes more complex, or the
            selected slice changes.
          </p>

        </div>

      </section>


      {/* ==================================================
          ACTIONS
      ================================================== */}

      <section className="ed-actions-section">

        <div className="ed-actions-card">

          <div>

            <span>
              NEXT DELIVERABLE
            </span>

            <h2>
              One Page Budget
            </h2>

            <p>
              Next, the estimated project effort is translated into
              staffing, labor costs, operating expenses, and the final
              project budget.
            </p>

          </div>


          <div className="ed-actions">

            <Link
              to="/sprint-2/one-page-budget"
              className="ed-primary-button"
            >
              Continue to Budget

              <ArrowRight size={17} />
            </Link>


            <a
              href="/documents/sprint-2/Lesson 9 Part 2 Estimation Activity.pdf"
              download
              className="ed-secondary-button"
            >
              <Download size={17} />

              Download Estimation Details
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default EstimationDetails;