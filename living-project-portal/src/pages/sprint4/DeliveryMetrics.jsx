import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Layers3,
  RefreshCw,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import "./Sprint4SubPages.css";


function DeliveryMetrics() {

  const metrics = [
    {
      number: "01",
      title: "Change Lead Time",
      eyebrow: "DELIVERY SPEED",
      description:
        "How long it takes a change to move from its first commit until it becomes available to Festivo users.",
      icon: Clock3,
      className: "s4metrics-card-pink",
    },
    {
      number: "02",
      title: "Deployment Frequency",
      eyebrow: "RELEASE FLOW",
      description:
        "How often the Festivo team releases completed changes into the production environment.",
      icon: Rocket,
      className: "s4metrics-card-purple",
    },
    {
      number: "03",
      title: "Change Fail Rate",
      eyebrow: "RELEASE QUALITY",
      description:
        "The percentage of production releases that introduce problems requiring corrective action.",
      icon: ShieldCheck,
      className: "s4metrics-card-blue",
    },
    {
      number: "04",
      title: "Rework Rate",
      eyebrow: "CORRECTIVE WORK",
      description:
        "The percentage of releases that are unplanned corrections instead of planned improvements.",
      icon: Layers3,
      className: "s4metrics-card-orange",
    },
    {
      number: "05",
      title: "Recovery Time",
      eyebrow: "SERVICE RECOVERY",
      description:
        "How long it takes to restore affected Festivo functionality after a release-related problem.",
      icon: RefreshCw,
      className: "s4metrics-card-green",
    },
  ];


  const metricDetails = [
    {
      title: "Change Lead Time",
      eyebrow: "DELIVERY SPEED",
      icon: Clock3,
      meaning:
        "Time from the first code commit for a change until that change is available to users.",
      measurement:
        "Record the first commit timestamp and the production availability timestamp. The measurement includes testing, release preparation, and any required release review.",
      decision:
        "If average change lead time exceeds 7 days in a sprint, divide upcoming features into smaller changes and review testing and release blockers twice a week.",
    },
    {
      title: "Deployment Frequency",
      eyebrow: "RELEASE FLOW",
      icon: Rocket,
      meaning:
        "How often the team releases changes to Festivo's production environment.",
      measurement:
        "Count production releases each week. Mobile application releases and backend deployments should be tracked separately.",
      decision:
        "If no mobile release occurs for more than two weeks while completed changes are waiting, review release blockers and prepare a smaller release.",
    },
    {
      title: "Change Fail Rate",
      eyebrow: "RELEASE QUALITY",
      icon: ShieldCheck,
      meaning:
        "Percentage of production releases that introduce a problem requiring a corrective release, rollback, or disablement.",
      measurement:
        "Divide the number of failed releases by the total number of production releases and multiply by 100. Track mobile and backend releases separately.",
      decision:
        "If the change fail rate exceeds 10% during a sprint, require additional regression checks before the next release.",
    },
    {
      title: "Rework Rate",
      eyebrow: "CORRECTIVE WORK",
      icon: Layers3,
      meaning:
        "Percentage of releases made primarily to correct previously released functionality.",
      measurement:
        "Divide unplanned corrective releases by total production releases and multiply by 100.",
      decision:
        "If rework exceeds 20%, prioritize recurring defects and strengthen regression testing before continuing with additional feature work.",
    },
    {
      title: "Recovery Time",
      eyebrow: "SERVICE RECOVERY",
      icon: RefreshCw,
      meaning:
        "The amount of time required to restore affected functionality after a release-related issue.",
      measurement:
        "Record the time the failure is detected and the time the affected workflow is verified as working again.",
      decision:
        "If recovery takes longer than 4 hours, improve the team's recovery option such as rollback procedures or feature switches.",
    },
  ];


  return (

    <main className="s4metrics-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s4metrics-hero">

        <div className="s4metrics-shell">

          <div className="s4metrics-breadcrumb">

            <Link to="/sprint-4">
              Sprint 4
            </Link>

            <span>/</span>

            <span>
              Delivery Metrics
            </span>

          </div>


          <div className="s4metrics-hero-layout">

            {/* LEFT */}

            <div className="s4metrics-hero-copy">

              <span className="s4metrics-eyebrow">
                SPRINT 4 · DELIVERY PERFORMANCE
              </span>


              <h1>
                Delivery
                <span>
                  Metrics
                </span>
              </h1>


              <div className="s4metrics-title-line"></div>


              <p>
                Using delivery-focused metrics to understand how
                quickly, safely, and reliably changes move through
                Festivo. These measures help the team identify
                bottlenecks, release instability, corrective work,
                and recovery performance.
              </p>


              <Link
                to="/sprint-4"
                className="s4metrics-back"
              >

                <ArrowLeft size={18} />

                Back to Sprint 4

              </Link>

            </div>


            {/* RIGHT — DELIVERY PERFORMANCE DASHBOARD */}

            <div className="s4metrics-hero-art">

              <div className="s4metrics-art-blob-purple"></div>
              <div className="s4metrics-art-blob-pink"></div>


              <div className="s4metrics-dashboard">

                <div className="s4metrics-dashboard-top">

                  <div>

                    <span>
                      FESTIVO OPERATIONS
                    </span>

                    <strong>
                      Delivery Performance
                    </strong>

                  </div>


                  <div className="s4metrics-dashboard-status">

                    <CheckCircle2 size={15} />

                    Tracking

                  </div>

                </div>


                <div className="s4metrics-dashboard-graph">

                  <div className="s4metrics-graph-grid"></div>


                  <div className="s4metrics-graph-bars">

                    <span className="s4metrics-graph-bar-1"></span>
                    <span className="s4metrics-graph-bar-2"></span>
                    <span className="s4metrics-graph-bar-3"></span>
                    <span className="s4metrics-graph-bar-4"></span>
                    <span className="s4metrics-graph-bar-5"></span>

                  </div>

                </div>


                <div className="s4metrics-dashboard-bottom">

                  <span>
                    Five delivery measures
                  </span>

                  <strong>
                    Sprint 4
                  </strong>

                </div>

              </div>


              <div className="s4metrics-floating-speed">

                <TrendingUp size={23} />

                <div>

                  <span>
                    THROUGHPUT
                  </span>

                  <strong>
                    Measure speed
                  </strong>

                </div>

              </div>


              <div className="s4metrics-floating-quality">

                <ShieldCheck size={23} />

                <div>

                  <span>
                    STABILITY
                  </span>

                  <strong>
                    Reduce failures
                  </strong>

                </div>

              </div>


              <div className="s4metrics-art-spark s4metrics-spark-1"></div>
              <div className="s4metrics-art-spark s4metrics-spark-2"></div>
              <div className="s4metrics-art-spark s4metrics-spark-3"></div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          METRIC OVERVIEW
      ================================================== */}

      <section className="s4metrics-overview-section">

        <div className="s4metrics-shell">

          <div className="s4metrics-overview-heading">

            <span>
              THE FIVE METRICS
            </span>


            <h2>
              Measure the way
              <strong>
                {" "}change moves.
              </strong>
            </h2>


            <p>
              Each metric looks at a different part of Festivo's
              delivery process — how quickly changes move, how often
              releases happen, how frequently releases cause issues,
              and how efficiently the team responds.
            </p>

          </div>


          <div className="s4metrics-overview-grid">

            {metrics.map((metric) => {

              const Icon = metric.icon;

              return (

                <article
                  key={metric.number}
                  className={`s4metrics-overview-card ${metric.className}`}
                >

                  <div className="s4metrics-overview-icon">

                    <Icon size={27} />

                  </div>


                  <span>
                    {metric.eyebrow}
                  </span>


                  <h3>
                    {metric.title}
                  </h3>


                  <p>
                    {metric.description}
                  </p>

                </article>

              );

            })}

          </div>

        </div>

      </section>


      {/* ==================================================
          METRIC DETAILS
      ================================================== */}

      <section className="s4metrics-details-section">

        <div className="s4metrics-shell">

          <div className="s4metrics-section-heading">

            <span>
              METRIC DETAILS
            </span>


            <h2>
              What we measure
              <strong>
                {" "}and what happens next.
              </strong>
            </h2>


            <p>
              Each metric has a Festivo-specific definition,
              measurement approach, and decision rule so that
              collecting data leads to an actual team response.
            </p>

          </div>


          <div className="s4metrics-detail-list">

            {metricDetails.map((metric) => {

              const Icon = metric.icon;

              return (

                <article
                  className="s4metrics-detail-card"
                  key={metric.title}
                >

                  <div className="s4metrics-detail-heading">

                    <div>

                      <Icon size={23} />

                    </div>


                    <div>

                      <span>
                        {metric.eyebrow}
                      </span>

                      <h3>
                        {metric.title}
                      </h3>

                    </div>

                  </div>


                  <div className="s4metrics-detail-column">

                    <span>
                      MEANING FOR FESTIVO
                    </span>

                    <p>
                      {metric.meaning}
                    </p>

                  </div>


                  <div className="s4metrics-detail-column">

                    <span>
                      HOW WE MEASURE IT
                    </span>

                    <p>
                      {metric.measurement}
                    </p>

                  </div>


                  <div className="s4metrics-decision">

                    <span>
                      DECISION IT TRIGGERS
                    </span>

                    <p>
                      {metric.decision}
                    </p>

                  </div>

                </article>

              );

            })}

          </div>

        </div>

      </section>


      {/* ==================================================
          WHY THIS MATTERS
      ================================================== */}

      <section className="s4metrics-purpose-section">

        <div className="s4metrics-shell">

          <div className="s4metrics-purpose-layout">

            <div className="s4metrics-purpose-copy">

              <span>
                WHY IT MATTERS
              </span>


              <h2>
                Metrics should guide
                <strong>
                  {" "}better decisions.
                </strong>
              </h2>


              <p>
                The purpose of these measures is not simply to
                collect numbers. They give the Festivo team a
                repeatable way to identify delivery problems and
                decide when a workflow, release process, or recovery
                practice should change.
              </p>

            </div>


            <div className="s4metrics-purpose-list">

              <div>

                <div className="s4metrics-purpose-check">

                  <CheckCircle2 size={22} />

                </div>

                <p>
                  Identify when completed work is taking too long
                  to reach Festivo users.
                </p>

              </div>


              <div>

                <div className="s4metrics-purpose-check">

                  <CheckCircle2 size={22} />

                </div>

                <p>
                  Monitor whether releases are introducing too many
                  problems or corrective deployments.
                </p>

              </div>


              <div>

                <div className="s4metrics-purpose-check">

                  <CheckCircle2 size={22} />

                </div>

                <p>
                  Track whether the team can restore affected
                  functionality quickly after a deployment issue.
                </p>

              </div>


              <div>

                <div className="s4metrics-purpose-check">

                  <CheckCircle2 size={22} />

                </div>

                <p>
                  Turn delivery measurements into specific actions
                  instead of collecting metrics without a response.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          BOTTOM NAVIGATION
          FIXED TO MATCH SLI / BUDGET
      ================================================== */}

      <section className="s4metrics-navigation-section">

        <div className="s4metrics-shell">

          <div className="s4metrics-navigation-grid">

            <Link
              to="/sprint-4/sli"
              className="s4metrics-nav-card s4metrics-nav-next"
            >

              <div className="s4metrics-nav-copy">

                <span>
                  NEXT
                </span>

                <strong>
                  Service Level Indicators
                </strong>

              </div>


              <ArrowRight size={24} />

            </Link>

          </div>

        </div>

      </section>

    </main>

  );

}


export default DeliveryMetrics;