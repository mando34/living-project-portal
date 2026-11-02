import { Link } from "react-router-dom";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Gauge,
  RefreshCw,
  Server,
  ShieldCheck,
  Store,
  Target,
} from "lucide-react";

import "../sprint4/Sprint4SubPages.css";


function SLI() {
  return (
    <main className="s4sli-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s4sli-hero">

        <div className="s4sli-shell">

          <div className="s4sli-breadcrumb">

            <Link to="/sprint-4">
              Sprint 4
            </Link>

            <ArrowRight size={14} />

            <span>
              Service Levels
            </span>

          </div>


          <div className="s4sli-hero-layout">

            {/* LEFT */}

            <div className="s4sli-hero-copy">

              <span className="s4sli-eyebrow">
                SPRINT 4 · RELIABILITY & SERVICE QUALITY
              </span>


              <h1>
                Service Levels
                <span>
                  for <strong>Festivo.</strong>
                </span>
              </h1>


              <div className="s4sli-title-line"></div>


              <p>
                Festivo uses Service Level Indicators, Service
                Level Objectives, and Service Level Agreements
                to measure application performance, establish
                reliability targets, and define what happens
                when service expectations are not met.
              </p>


              <Link
                to="/sprint-4"
                className="s4sli-back"
              >
                <ArrowLeft size={16} />

                Back to Sprint 4
              </Link>

            </div>


            {/* ==================================================
                HERO GAUGE
            ================================================== */}

            <div className="s4sli-hero-art">

              <div className="s4sli-art-blob"></div>


              <div className="s4sli-gauge-card">

                <span className="s4sli-gauge-label">
                  SERVICE RELIABILITY
                </span>


                <div className="s4sli-gauge-window">

                  <div className="s4sli-gauge-ring">

                    <div className="s4sli-gauge-inner"></div>

                  </div>


                  <div className="s4sli-gauge-needle"></div>

                  <div className="s4sli-gauge-center"></div>

                </div>


                <strong>
                  Measure. Target. Commit.
                </strong>


                <span className="s4sli-gauge-subtitle">
                  SLI → SLO → SLA
                </span>

              </div>


              <div className="s4sli-check-badge">

                <CheckCircle2 size={34} />

              </div>


              <div className="s4sli-art-spark s4sli-spark-1"></div>

              <div className="s4sli-art-spark s4sli-spark-2"></div>

              <div className="s4sli-art-spark s4sli-spark-3"></div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          SLI / SLO / SLA CONCEPT OVERVIEW
      ================================================== */}

      <section className="s4sli-concepts-section">

        <div className="s4sli-shell">

          <div className="s4sli-concepts-heading">

            <span>
              THE SERVICE LEVEL FRAMEWORK
            </span>


            <h2>
              Measure it.
              <strong>
                {" "}Target it. Commit to it.
              </strong>
            </h2>


            <p>
              These three concepts work together to define how
              Festivo evaluates and manages service reliability.
            </p>

          </div>


          <div className="s4sli-concept-grid">

            {/* ==================================================
                SLI
            ================================================== */}

            <article className="s4sli-concept-card s4sli-concept-pink">

              <div className="s4sli-concept-number">
                01
              </div>


              <div className="s4sli-concept-icon">

                <Gauge size={30} />

              </div>


              <span>
                SLI
              </span>


              <h3>
                Service Level Indicator
              </h3>


              <p>
                The measurable value used to evaluate how well
                Festivo is performing.
              </p>


              <div className="s4sli-concept-summary">

                <strong>
                  What do we measure?
                </strong>

                <span>
                  Availability & Information Freshness
                </span>

              </div>

            </article>


            {/* ==================================================
                SLO
            ================================================== */}

            <article className="s4sli-concept-card s4sli-concept-purple">

              <div className="s4sli-concept-number">
                02
              </div>


              <div className="s4sli-concept-icon">

                <Target size={30} />

              </div>


              <span>
                SLO
              </span>


              <h3>
                Service Level Objective
              </h3>


              <p>
                The specific performance target that Festivo
                aims to achieve for each SLI.
              </p>


              <div className="s4sli-concept-summary">

                <strong>
                  What are our targets?
                </strong>

                <span>
                  99% availability & 95% freshness
                </span>

              </div>

            </article>


            {/* ==================================================
                SLA
            ================================================== */}

            <article className="s4sli-concept-card s4sli-concept-orange">

              <div className="s4sli-concept-number">
                03
              </div>


              <div className="s4sli-concept-icon">

                <FileCheck2 size={30} />

              </div>


              <span>
                SLA
              </span>


              <h3>
                Service Level Agreement
              </h3>


              <p>
                The service commitment and possible consequence
                when agreed reliability expectations are not met.
              </p>


              <div className="s4sli-concept-summary">

                <strong>
                  Who does it affect?
                </strong>

                <span>
                  Vendors advertising through Festivo
                </span>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          FESTIVO'S SLIs
      ================================================== */}

      <section className="s4sli-metrics-section">

        <div className="s4sli-shell">

          <div className="s4sli-section-heading">

            <span>
              FESTIVO'S SERVICE LEVEL INDICATORS
            </span>


            <h2>
              The two signals
              <strong>
                {" "}we monitor.
              </strong>
            </h2>


            <p>
              Festivo focuses on two indicators that directly
              affect whether users can reliably access the
              platform and receive current event information.
            </p>

          </div>


          <div className="s4sli-overview-grid s4sli-two-column-grid">

            {/* ==================================================
                AVAILABILITY
            ================================================== */}

            <article className="s4sli-overview-card s4sli-card-pink">

              <div className="s4sli-overview-icon">

                <Server size={30} />

              </div>


              <span className="s4sli-card-label">
                SLI 01
              </span>


              <h2>
                Availability
              </h2>


              <p>
                Measures the percentage of time Festivo is
                accessible and functioning properly. Users need
                reliable access to create events, manage guest
                lists, and view important information.
              </p>


              <div className="s4sli-target-chip">

                <span>
                  SLO TARGET
                </span>

                <strong>
                  ≥ 99%
                </strong>

              </div>

            </article>


            {/* ==================================================
                INFORMATION FRESHNESS
            ================================================== */}

            <article className="s4sli-overview-card s4sli-card-purple">

              <div className="s4sli-overview-icon">

                <RefreshCw size={30} />

              </div>


              <span className="s4sli-card-label">
                SLI 02
              </span>


              <h2>
                Information Freshness
              </h2>


              <p>
                Measures how quickly changes made by event
                organizers appear on guest-facing pages,
                including dates, locations, schedules, and
                other important event details.
              </p>


              <div className="s4sli-target-chip">

                <span>
                  SLO TARGET
                </span>

                <strong>
                  ≥ 95% within 30s
                </strong>

              </div>

            </article>

          </div>


          {/* ==================================================
              SUMMARY
          ================================================== */}

          <div className="s4sli-summary-strip">

            <div className="s4sli-summary-icon">

              <Target size={26} />

            </div>


            <strong>
              The relationship
            </strong>


            <div className="s4sli-summary-divider"></div>


            <p>
              The SLI tells the team what to measure. The SLO
              defines the target Festivo wants to achieve. The
              SLA turns those service expectations into a
              commitment for affected vendor partners.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          DETAILED SLI MEASUREMENTS
      ================================================== */}

      <section className="s4sli-details-section">

        <div className="s4sli-shell">

          <div className="s4sli-section-heading">

            <span>
              HOW THE SLIs ARE CALCULATED
            </span>


            <h2>
              Turning performance
              <strong>
                {" "}into measurable data.
              </strong>
            </h2>

          </div>


          <div className="s4sli-indicator-grid">

            {/* ==================================================
                AVAILABILITY DETAIL
            ================================================== */}

            <article className="s4sli-indicator-card s4sli-indicator-pink">

              <div className="s4sli-indicator-top">

                <div className="s4sli-indicator-icon">

                  <Server size={31} />

                </div>


                <div>

                  <span>
                    SLI 01
                  </span>

                  <h3>
                    Availability
                  </h3>

                </div>

              </div>


              <p className="s4sli-indicator-intro">
                Availability is measured by monitoring whether
                the application successfully responds to
                requests during a defined measurement period.
              </p>


              <div className="s4sli-formula">

                <span>
                  AVAILABILITY (%)
                </span>


                <strong>
                  Successful availability checks
                </strong>


                <div className="s4sli-formula-line"></div>


                <strong>
                  Total availability checks
                </strong>


                <small>
                  × 100
                </small>

              </div>


              <div className="s4sli-measurement-box">

                <Activity size={21} />


                <div>

                  <span>
                    WHY IT MATTERS
                  </span>


                  <p>
                    Users rely on Festivo to organize events,
                    manage guests, and access important event
                    information whenever they need it.
                  </p>

                </div>

              </div>

            </article>


            {/* ==================================================
                FRESHNESS DETAIL
            ================================================== */}

            <article className="s4sli-indicator-card s4sli-indicator-purple">

              <div className="s4sli-indicator-top">

                <div className="s4sli-indicator-icon">

                  <RefreshCw size={31} />

                </div>


                <div>

                  <span>
                    SLI 02
                  </span>

                  <h3>
                    Information Freshness
                  </h3>

                </div>

              </div>


              <p className="s4sli-indicator-intro">
                Freshness is measured by tracking the time from
                when an organizer saves an event update until
                the change becomes visible to guests.
              </p>


              <div className="s4sli-formula">

                <span>
                  INFORMATION FRESHNESS (%)
                </span>


                <strong>
                  Updates reflected within 30 seconds
                </strong>


                <div className="s4sli-formula-line"></div>


                <strong>
                  Total event information updates
                </strong>


                <small>
                  × 100
                </small>

              </div>


              <div className="s4sli-measurement-box">

                <Clock3 size={21} />


                <div>

                  <span>
                    WHY IT MATTERS
                  </span>


                  <p>
                    Guests need current information about
                    schedules, locations, dates, and other
                    event details without unnecessary delays.
                  </p>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          SERVICE LEVEL OBJECTIVES
      ================================================== */}

      <section className="s4sli-slo-section">

        <div className="s4sli-shell">

          <div className="s4sli-slo-heading">

            <span>
              SERVICE LEVEL OBJECTIVES · SLO
            </span>


            <h2>
              The reliability targets
              <strong>
                {" "}Festivo aims to meet.
              </strong>
            </h2>


            <p>
              SLOs establish the expected level of performance.
              The team compares actual SLI measurements against
              these targets to determine whether corrective
              action is necessary.
            </p>

          </div>


          <div className="s4sli-slo-grid">

            {/* ==================================================
                AVAILABILITY SLO
            ================================================== */}

            <article className="s4sli-slo-card s4sli-slo-pink">

              <div className="s4sli-slo-circle">

                <span>
                  ≥
                </span>

                <strong>
                  99%
                </strong>

              </div>


              <div className="s4sli-slo-copy">

                <span>
                  AVAILABILITY OBJECTIVE
                </span>


                <h3>
                  Maintain reliable access.
                </h3>


                <p>
                  Festivo aims to maintain at least 99%
                  application availability so users can
                  reliably access event planning and guest
                  management features.
                </p>


                <div className="s4sli-action-note">

                  <ShieldCheck size={20} />


                  <p>
                    If availability falls below 99%, the team
                    will investigate the cause and determine
                    which improvements are necessary to restore
                    reliable service.
                  </p>

                </div>

              </div>

            </article>


            {/* ==================================================
                FRESHNESS SLO
            ================================================== */}

            <article className="s4sli-slo-card s4sli-slo-purple">

              <div className="s4sli-slo-circle">

                <span>
                  ≥
                </span>

                <strong>
                  95%
                </strong>

                <small>
                  within 30s
                </small>

              </div>


              <div className="s4sli-slo-copy">

                <span>
                  INFORMATION FRESHNESS OBJECTIVE
                </span>


                <h3>
                  Keep information current.
                </h3>


                <p>
                  At least 95% of event information updates
                  should appear on guest-facing pages within
                  30 seconds after being saved.
                </p>


                <div className="s4sli-action-note">

                  <Clock3 size={20} />


                  <p>
                    Updates taking longer than 30 seconds count
                    as unsuccessful measurements. This
                    objective is measured each sprint.
                  </p>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          SERVICE LEVEL AGREEMENTS
      ================================================== */}

      <section className="s4sli-sla-section">

        <div className="s4sli-shell">

          <div className="s4sli-sla-layout">

            {/* LEFT */}

            <div className="s4sli-sla-copy">

              <span>
                SERVICE LEVEL AGREEMENTS · SLA
              </span>


              <h2>
                Reliability becomes a
                <strong>
                  {" "}service commitment.
                </strong>
              </h2>


              <p>
                Festivo's SLA primarily focuses on vendors and
                companies that pay to advertise their services
                and promotions through the platform. These
                partners depend on Festivo remaining available
                and reliably displaying their information.
              </p>

            </div>


            {/* RIGHT */}

            <div className="s4sli-sla-cards">

              {/* SERVICE COMMITMENT */}

              <article>

                <div className="s4sli-sla-icon">

                  <Target size={23} />

                </div>


                <div>

                  <span>
                    SERVICE COMMITMENT
                  </span>


                  <h3>
                    The SLOs define the expected service.
                  </h3>


                  <p>
                    Festivo aims to maintain 99% availability
                    and ensure that 95% of event information
                    updates appear within 30 seconds.
                  </p>

                </div>

              </article>


              {/* CONSEQUENCES */}

              <article>

                <div className="s4sli-sla-icon">

                  <Store size={23} />

                </div>


                <div>

                  <span>
                    IF SERVICE LEVELS ARE MISSED
                  </span>


                  <h3>
                    Affected vendors may receive compensation.
                  </h3>


                  <p>
                    A small discount or service credit may be
                    applied toward advertising fees depending
                    on how long the issue lasted and how much
                    it affected vendor advertisements.
                  </p>

                </div>

              </article>


              {/* MONITORING */}

              <article>

                <div className="s4sli-sla-icon">

                  <Activity size={23} />

                </div>


                <div>

                  <span>
                    MONITORING & EVALUATION
                  </span>


                  <h3>
                    Compare actual performance with the SLOs.
                  </h3>


                  <p>
                    If a target is not met, the team
                    investigates the issue and determines
                    whether affected vendors should receive
                    compensation.
                  </p>

                </div>

              </article>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          BOTTOM NAVIGATION
      ================================================== */}

      <section className="s4sli-navigation-section">

        <div className="s4sli-shell">

          <div className="s4sli-navigation-grid">

            <Link
              to="/sprint-4/delivery-metrics"
              className="s4sli-nav-card s4sli-nav-previous"
            >

              <ArrowLeft
                size={24}
                className="s4sli-nav-arrow"
              />


              <div>

                <span>
                  PREVIOUS
                </span>

                <strong>
                  Delivery Metrics
                </strong>

              </div>

            </Link>


            <Link
              to="/sprint-4/budget-postmortem"
              className="s4sli-nav-card s4sli-nav-next"
            >

              <div>

                <span>
                  NEXT IN SPRINT 4
                </span>

                <strong>
                  Budget & Postmortem
                </strong>

              </div>


              <ArrowRight
                size={24}
                className="s4sli-nav-arrow"
              />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


export default SLI;