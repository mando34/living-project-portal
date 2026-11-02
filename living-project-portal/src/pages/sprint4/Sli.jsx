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

import "./Sprint4SubPages.css";


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

            <span>/</span>

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
                Service Level
                <span>
                  Indicators (SLI)
                </span>
              </h1>


              <div className="s4sli-title-line"></div>


              <p>
                Key measures that tell us how reliably Festivo
                delivers a good experience, including service
                availability, information freshness, and the
                targets we aim to meet.
              </p>


              <Link
                to="/sprint-4"
                className="s4sli-back"
              >

                <ArrowLeft size={18} />

                Back to Sprint 4

              </Link>

            </div>


            {/* RIGHT — GAUGE */}

            <div className="s4sli-hero-art">

              <div className="s4sli-art-blob"></div>


              <div className="s4sli-gauge-card">

                <span className="s4sli-gauge-label">
                  SERVICE RELIABILITY
                </span>


                <div className="s4sli-gauge">

                  <div className="s4sli-gauge-arc">

                    <div className="s4sli-gauge-inner"></div>

                  </div>


                  <div className="s4sli-gauge-needle"></div>

                  <div className="s4sli-gauge-center"></div>

                </div>


                <strong>
                  Reliability Targets
                </strong>


                <p>
                  Measuring availability and information
                  freshness against defined objectives.
                </p>

              </div>


              <div className="s4sli-check-badge">

                <CheckCircle2 size={21} />

                <div>

                  <span>
                    TARGETS
                  </span>

                  <strong>
                    Defined
                  </strong>

                </div>

              </div>


              <div className="s4sli-spark s4sli-spark-1"></div>
              <div className="s4sli-spark s4sli-spark-2"></div>
              <div className="s4sli-spark s4sli-spark-3"></div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          METRIC DASHBOARD
          ORIGINAL OPTION 2
      ================================================== */}

      <section className="s4sli-dashboard-section">

        <div className="s4sli-shell">

          <div className="s4sli-dashboard-heading">

            <span>
              THE FESTIVO SLIs
            </span>


            <h2>
              Reliability at a
              <strong>
                {" "}glance.
              </strong>
            </h2>


            <p>
              These measures give the team a clear way to
              evaluate whether Festivo is meeting the level
              of service expected by its users.
            </p>

          </div>


          <div className="s4sli-dashboard-grid">

            {/* AVAILABILITY */}

            <article className="s4sli-metric-card s4sli-metric-pink">

              <div className="s4sli-metric-top">

                <div className="s4sli-metric-icon">

                  <Server size={28} />

                </div>


                <span>
                  SLI 01
                </span>

              </div>


              <h3>
                Availability
              </h3>


              <p>
                Measures how often Festivo's core services
                are operational and accessible when users
                attempt to use them.
              </p>


              <div className="s4sli-target-strip">

                <span>
                  TARGET
                </span>

                <strong>
                  ≥ 99%
                </strong>

              </div>

            </article>


            {/* FRESHNESS */}

            <article className="s4sli-metric-card s4sli-metric-purple">

              <div className="s4sli-metric-top">

                <div className="s4sli-metric-icon">

                  <RefreshCw size={28} />

                </div>


                <span>
                  SLI 02
                </span>

              </div>


              <h3>
                Information Freshness
              </h3>


              <p>
                Measures whether event information updates
                become visible to guests quickly enough to
                keep the Festivo experience current.
              </p>


              <div className="s4sli-target-strip">

                <span>
                  TARGET
                </span>

                <strong>
                  ≥ 95% within 30 sec
                </strong>

              </div>

            </article>


            {/* TARGETS */}

            <article className="s4sli-metric-card s4sli-metric-orange">

              <div className="s4sli-metric-top">

                <div className="s4sli-metric-icon">

                  <Target size={28} />

                </div>


                <span>
                  OBJECTIVES
                </span>

              </div>


              <h3>
                Service-Level Targets
              </h3>


              <p>
                The SLIs become measurable objectives that
                define what acceptable Festivo reliability
                should look like during each sprint.
              </p>


              <div className="s4sli-target-strip">

                <span>
                  TARGETS
                </span>

                <strong>
                  Defined per SLI
                </strong>

              </div>

            </article>

          </div>


          {/* ORIGINAL DARK INFO STRIP */}

          <div className="s4sli-inshort">

            <div className="s4sli-inshort-title">

              <Target size={24} />

              <div>

                <span>
                  IN SHORT
                </span>

                <strong>
                  Why SLIs matter
                </strong>

              </div>

            </div>


            <div className="s4sli-inshort-divider"></div>


            <p>
              SLIs give us a measurable way to evaluate
              Festivo's reliability, set clear goals, and
              know when to take action if service quality drops.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          SLI → SLO → SLA
      ================================================== */}

      <section className="s4sli-framework-section">

        <div className="s4sli-shell">

          <div className="s4sli-section-heading">

            <span>
              SERVICE LEVEL FRAMEWORK
            </span>


            <h2>
              From measurement to
              <strong>
                {" "}commitment.
              </strong>
            </h2>


            <p>
              Festivo uses SLIs to measure service quality,
              SLOs to establish internal targets, and SLAs
              when those expectations become commitments
              to vendors or other external parties.
            </p>

          </div>


          <div className="s4sli-framework-grid">

            <article className="s4sli-framework-card s4sli-framework-pink">

              <div className="s4sli-framework-number">
                01
              </div>


              <div className="s4sli-framework-icon">

                <Activity size={27} />

              </div>


              <span>
                SLI
              </span>


              <h3>
                Service Level Indicator
              </h3>


              <p>
                The actual measurement used to evaluate
                service reliability.
              </p>


              <strong>
                Availability + Information Freshness
              </strong>

            </article>


            <article className="s4sli-framework-card s4sli-framework-purple">

              <div className="s4sli-framework-number">
                02
              </div>


              <div className="s4sli-framework-icon">

                <Target size={27} />

              </div>


              <span>
                SLO
              </span>


              <h3>
                Service Level Objective
              </h3>


              <p>
                The internal reliability goal Festivo aims
                to achieve for each indicator.
              </p>


              <strong>
                99% Availability · 95% Freshness
              </strong>

            </article>


            <article className="s4sli-framework-card s4sli-framework-orange">

              <div className="s4sli-framework-number">
                03
              </div>


              <div className="s4sli-framework-icon">

                <FileCheck2 size={27} />

              </div>


              <span>
                SLA
              </span>


              <h3>
                Service Level Agreement
              </h3>


              <p>
                A formal service commitment, particularly
                for vendors paying to advertise on Festivo.
              </p>


              <strong>
                Commitment + consequence
              </strong>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          HOW THE SLIs ARE CALCULATED
      ================================================== */}

      <section className="s4sli-calculation-section">

        <div className="s4sli-shell">

          <div className="s4sli-section-heading">

            <span>
              SLI DETAILS
            </span>


            <h2>
              What we measure
              <strong>
                {" "}and how.
              </strong>
            </h2>


            <p>
              Each indicator uses a repeatable calculation
              so reliability can be evaluated consistently
              from sprint to sprint.
            </p>

          </div>


          <div className="s4sli-calculation-grid">

            {/* AVAILABILITY */}

            <article className="s4sli-calculation-card s4sli-calc-pink">

              <div className="s4sli-calculation-header">

                <div>

                  <Server size={27} />

                </div>


                <div>

                  <span>
                    AVAILABILITY
                  </span>

                  <h3>
                    Successful service checks
                  </h3>

                </div>

              </div>


              <div className="s4sli-formula">

                <span>
                  FORMULA
                </span>

                <strong>
                  Successful availability checks
                  <br />
                  ÷ Total availability checks × 100
                </strong>

              </div>


              <div className="s4sli-measurement-box">

                <Clock3 size={20} />

                <div>

                  <span>
                    SLO TARGET
                  </span>

                  <p>
                    Festivo should maintain at least
                    99% availability.
                  </p>

                </div>

              </div>

            </article>


            {/* FRESHNESS */}

            <article className="s4sli-calculation-card s4sli-calc-purple">

              <div className="s4sli-calculation-header">

                <div>

                  <RefreshCw size={27} />

                </div>


                <div>

                  <span>
                    INFORMATION FRESHNESS
                  </span>

                  <h3>
                    Updates visible within 30 seconds
                  </h3>

                </div>

              </div>


              <div className="s4sli-formula">

                <span>
                  FORMULA
                </span>

                <strong>
                  Updates reflected within 30 seconds
                  <br />
                  ÷ Total event information updates × 100
                </strong>

              </div>


              <div className="s4sli-measurement-box">

                <Clock3 size={20} />

                <div>

                  <span>
                    SLO TARGET
                  </span>

                  <p>
                    At least 95% of guest-facing updates
                    should appear within 30 seconds.
                  </p>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          SLO TARGETS
      ================================================== */}

      <section className="s4sli-slo-section">

        <div className="s4sli-shell">

          <div className="s4sli-section-heading">

            <span>
              SERVICE LEVEL OBJECTIVES
            </span>


            <h2>
              The targets Festivo
              <strong>
                {" "}aims to meet.
              </strong>
            </h2>

          </div>


          <div className="s4sli-slo-grid">

            <article className="s4sli-slo-card s4sli-slo-pink">

              <div className="s4sli-slo-circle">

                <strong>
                  99%
                </strong>

                <span>
                  AVAILABILITY
                </span>

              </div>


              <div>

                <span className="s4sli-slo-label">
                  OBJECTIVE 01
                </span>


                <h3>
                  Keep Festivo accessible.
                </h3>


                <p>
                  Core Festivo services should remain
                  available at least 99% of the time during
                  the measurement window.
                </p>

              </div>

            </article>


            <article className="s4sli-slo-card s4sli-slo-purple">

              <div className="s4sli-slo-circle">

                <strong>
                  95%
                </strong>

                <span>
                  WITHIN 30 SEC
                </span>

              </div>


              <div>

                <span className="s4sli-slo-label">
                  OBJECTIVE 02
                </span>


                <h3>
                  Keep event information current.
                </h3>


                <p>
                  At least 95% of event-information updates
                  should appear on guest-facing experiences
                  within 30 seconds.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          SLA
      ================================================== */}

      <section className="s4sli-sla-section">

        <div className="s4sli-shell">

          <div className="s4sli-sla-layout">

            <div className="s4sli-sla-copy">

              <span>
                SERVICE LEVEL AGREEMENT
              </span>


              <h2>
                When targets become
                <strong>
                  {" "}commitments.
                </strong>
              </h2>


              <p>
                Festivo's SLA would mainly apply to vendors
                or companies paying to advertise through
                the platform. The agreement uses the same
                availability and information-freshness
                targets defined by the SLOs.
              </p>

            </div>


            <div className="s4sli-sla-grid">

              <article>

                <div className="s4sli-sla-icon">

                  <Store size={24} />

                </div>


                <span>
                  WHO IT APPLIES TO
                </span>


                <h3>
                  Advertising vendors
                </h3>


                <p>
                  Businesses paying for Festivo advertising
                  are the primary audience for a formal
                  service agreement.
                </p>

              </article>


              <article>

                <div className="s4sli-sla-icon">

                  <Gauge size={24} />

                </div>


                <span>
                  COMMITMENTS
                </span>


                <h3>
                  Same reliability targets
                </h3>


                <p>
                  The SLA uses 99% availability and 95%
                  freshness within 30 seconds.
                </p>

              </article>


              <article>

                <div className="s4sli-sla-icon">

                  <ShieldCheck size={24} />

                </div>


                <span>
                  IF TARGETS ARE MISSED
                </span>


                <h3>
                  Service credit
                </h3>


                <p>
                  Affected vendors may receive a small
                  discount or service credit based on the
                  duration and impact of the issue.
                </p>

              </article>


              <article>

                <div className="s4sli-sla-icon">

                  <Activity size={24} />

                </div>


                <span>
                  MONITORING
                </span>


                <h3>
                  Compare actual vs. target
                </h3>


                <p>
                  The team evaluates actual service
                  performance against the SLOs to decide
                  corrective action or compensation.
                </p>

              </article>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <section className="s4sli-navigation-section">

        <div className="s4sli-shell">

          <div className="s4sli-navigation-grid">

            <Link
              to="/sprint-4/delivery-metrics"
              className="s4sli-nav-card"
            >

              <ArrowLeft size={21} />

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
                  NEXT
                </span>

                <strong>
                  Budget & Postmortem
                </strong>

              </div>


              <ArrowRight size={21} />

            </Link>

          </div>

        </div>

      </section>

    </main>

  );

}


export default SLI;