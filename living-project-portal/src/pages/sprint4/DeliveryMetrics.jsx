import { Link } from "react-router-dom";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Clock3,
  Layers3,
  RefreshCw,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import "../sprint4/Sprint4SubPages.css";


function DeliveryMetrics() {

  const metrics = [
    {
      id: "01",

      title: "Change Lead Time",

      shortDescription:
        "Time from the first code commit for a change until it is available to users.",

      meaning:
        "Time from the first code commit for a change until it is available to users. For example, adding the ability to reorder itinerary items on the event dashboard.",

      measurement:
        "Record the first commit timestamp and the production availability timestamp. Include testing, release preparation, and app-store review when required. Calculate average lead time each sprint.",

      decision:
        "If average change lead time exceeds 7 days in a sprint, we will divide upcoming features into smaller changes and review testing and release blockers twice a week.",

      icon: Clock3,

      tone: "pink",
    },

    {
      id: "02",

      title: "Deployment Frequency",

      shortDescription:
        "How often we release production changes to Festivo.",

      meaning:
        "How often we release changes to Festivo's production environment, such as improvements to vendor search, service requests, or RSVP management.",

      measurement:
        "Count production releases each week. Track mobile app releases and backend deployments separately because they have different release processes.",

      decision:
        "If no mobile app release occurs over two weeks while completed mobile changes are waiting, we will review release blockers and prepare a smaller release.",

      icon: Rocket,

      tone: "purple",
    },

    {
      id: "03",

      title: "Change Fail Rate",

      shortDescription:
        "Percentage of releases that introduce a production problem.",

      meaning:
        "Percentage of production releases that introduce a problem requiring a corrective release, rollback, or feature disablement.",

      measurement:
        "Divide the number of releases causing failures by total production releases, then multiply by 100. Calculate separately for mobile and backend releases.",

      decision:
        "If change fail rate exceeds 10% in a sprint, we will require additional regression checks of the affected workflows before the next release.",

      icon: ShieldCheck,

      tone: "violet",
    },

    {
      id: "04",

      title: "Rework Rate",

      shortDescription:
        "Percentage of releases containing unplanned corrective work.",

      meaning:
        "Percentage of production releases that are unplanned corrections to problems introduced by earlier releases.",

      measurement:
        "Divide unplanned corrective releases by total production releases, then multiply by 100. Count mobile and backend releases separately.",

      decision:
        "If rework rate exceeds 20% in a sprint, we will prioritize recurring defects and strengthen regression checks before starting lower-priority features.",

      icon: Layers3,

      tone: "orange",
    },

    {
      id: "05",

      title: "Recovery Time",

      shortDescription:
        "Time required to restore functionality after a release-related issue.",

      meaning:
        "Time needed to restore affected functionality after detecting a release-related failure. Recovery could involve reverting a backend change, disabling a faulty feature, or distributing a corrected mobile version.",

      measurement:
        "Record the detection timestamp and the timestamp when the affected workflow is verified as working again. For mobile updates, track whether users on the affected version still experience the failure.",

      decision:
        "If recovery takes more than 4 hours, we will add or improve a recovery option for the affected workflow, such as a backend rollback or remotely controlled feature switch.",

      icon: RefreshCw,

      tone: "blue",
    },
  ];


  return (
    <main className="s4metrics-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s4metrics-hero">

        <div className="s4metrics-shell">

          {/* BREADCRUMB */}

          <div className="s4metrics-breadcrumb">

            <Link to="/sprint-4">
              Sprint 4
            </Link>


            <ArrowRight size={14} />


            <span>
              Delivery Metrics
            </span>

          </div>


          <div className="s4metrics-hero-layout">

            {/* LEFT SIDE */}

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
                Using DORA metrics to understand how quickly,
                safely, and reliably we deliver changes to Festivo.
                These measures help our team identify bottlenecks,
                quality risks, and opportunities to improve our
                release process.
              </p>


              <Link
                to="/sprint-4"
                className="s4metrics-back"
              >
                <ArrowLeft size={16} />

                Back to Sprint 4
              </Link>

            </div>


            {/* HERO ILLUSTRATION */}

            <div className="s4metrics-hero-art">

                {/* BACKGROUND SHAPES */}

                <div className="s4metrics-art-blob s4metrics-art-blob-purple"></div>

                <div className="s4metrics-art-blob s4metrics-art-blob-pink"></div>


                {/* MAIN DASHBOARD */}

                <div className="s4metrics-dashboard">

                    <div className="s4metrics-dashboard-top">

                    <div>

                        <span>
                        DELIVERY PERFORMANCE
                        </span>

                        <strong>
                        Sprint Metrics
                        </strong>

                    </div>


                    <div className="s4metrics-dashboard-status">

                        <Activity size={17} />

                        Tracking

                    </div>

                    </div>


                    {/* GRAPH AREA */}

                    <div className="s4metrics-dashboard-graph">

                    <div className="s4metrics-graph-grid">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>


                    <div className="s4metrics-graph-bars">

                        <span className="s4metrics-graph-bar s4metrics-graph-bar-1"></span>

                        <span className="s4metrics-graph-bar s4metrics-graph-bar-2"></span>

                        <span className="s4metrics-graph-bar s4metrics-graph-bar-3"></span>

                        <span className="s4metrics-graph-bar s4metrics-graph-bar-4"></span>

                        <span className="s4metrics-graph-bar s4metrics-graph-bar-5"></span>

                    </div>

                    </div>


                    {/* BOTTOM METRICS */}

                    <div className="s4metrics-dashboard-bottom">

                    <div>

                        <TrendingUp size={18} />

                        <span>
                        Lead Time
                        </span>

                    </div>


                    <div>

                        <Rocket size={18} />

                        <span>
                        Releases
                        </span>

                    </div>


                    <div>

                        <ShieldCheck size={18} />

                        <span>
                        Stability
                        </span>

                    </div>

                    </div>

                </div>


                {/* FLOATING LEFT CARD */}

                <div className="s4metrics-floating-card s4metrics-floating-speed">

                    <div className="s4metrics-floating-icon">

                    <Rocket size={20} />

                    </div>


                    <div>

                    <span>
                        THROUGHPUT
                    </span>

                    <strong>
                        Faster delivery
                    </strong>

                    </div>

                </div>


                {/* FLOATING RIGHT CARD */}

                <div className="s4metrics-floating-card s4metrics-floating-quality">

                    <div className="s4metrics-floating-icon">

                    <ShieldCheck size={20} />

                    </div>


                    <div>

                    <span>
                        STABILITY
                    </span>

                    <strong>
                        Safer releases
                    </strong>

                    </div>

                </div>


                {/* SMALL DECORATION */}

                <div className="s4metrics-art-spark s4metrics-art-spark-1"></div>

                <div className="s4metrics-art-spark s4metrics-art-spark-2"></div>

                <div className="s4metrics-art-spark s4metrics-art-spark-3"></div>

                </div>

          </div>


          {/* ==================================================
              FIVE METRIC CARDS
          ================================================== */}

          <div className="s4metrics-overview-grid">

            {metrics.map((metric) => {

              const Icon = metric.icon;

              return (

                <article
                  key={metric.id}
                  className={`s4metrics-overview-card s4metrics-overview-${metric.tone}`}
                >

                  <div className="s4metrics-overview-icon">

                    <Icon
                      size={29}
                      strokeWidth={2}
                    />

                  </div>


                  <h2>
                    {metric.title}
                  </h2>


                  <p>
                    {metric.shortDescription}
                  </p>

                </article>

              );
            })}

          </div>

        </div>

      </section>


      {/* ==================================================
          WHAT WE MEASURE
      ================================================== */}

      <section className="s4metrics-details-section">

        <div className="s4metrics-shell">

          <div className="s4metrics-section-heading">

            <span>
              HOW WE USE THE METRICS
            </span>


            <h2>
              From measurement
              <strong>
                {" "}to action.
              </strong>
            </h2>


            <p>
              Each metric has a specific meaning for Festivo,
              a defined measurement method, and a decision threshold
              that tells our team when action is needed.
            </p>

          </div>


          <div className="s4metrics-detail-list">

            {metrics.map((metric) => {

              const Icon = metric.icon;

              return (

                <article
                  key={metric.id}
                  className={`s4metrics-detail-card s4metrics-detail-${metric.tone}`}
                >

                  {/* ==================================================
                      LEFT IDENTITY
                  ================================================== */}

                  <div className="s4metrics-detail-heading">

                    <span className="s4metrics-detail-number">
                      {metric.id}
                    </span>


                    <div className="s4metrics-detail-heading-icon">

                      <Icon size={30} />

                    </div>


                    <div>

                      <span className="s4metrics-detail-label">
                        DORA METRIC
                      </span>


                      <h3>
                        {metric.title}
                      </h3>

                    </div>

                  </div>


                  {/* ==================================================
                      MEANING
                  ================================================== */}

                  <div className="s4metrics-detail-column">

                    <span className="s4metrics-column-label">
                      MEANING FOR FESTIVO
                    </span>


                    <p>
                      {metric.meaning}
                    </p>

                  </div>


                  {/* ==================================================
                      MEASUREMENT
                  ================================================== */}

                  <div className="s4metrics-detail-column">

                    <span className="s4metrics-column-label">
                      HOW WE MEASURE IT
                    </span>


                    <p>
                      {metric.measurement}
                    </p>

                  </div>


                  {/* ==================================================
                      DECISION
                  ================================================== */}

                  <div className="s4metrics-decision">

                    <span className="s4metrics-column-label">
                      DECISION IT WOULD TRIGGER
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
          WHY THESE METRICS MATTER
      ================================================== */}

      <section className="s4metrics-purpose-section">

        <div className="s4metrics-shell">

          <div className="s4metrics-purpose-layout">

            <div className="s4metrics-purpose-copy">

              <span>
                WHY THESE METRICS MATTER
              </span>


              <h2>
                Better delivery starts with
                <strong>
                  {" "}better visibility.
                </strong>
              </h2>


              <p>
                These five measures give the Festivo team a way to
                evaluate both delivery speed and release stability.
                Instead of relying on assumptions, the team can use
                measurable signals to decide when to reduce release
                size, strengthen regression checks, address recurring
                defects, or improve recovery options.
              </p>

            </div>


            <div className="s4metrics-purpose-list">

              <div>

                <span className="s4metrics-purpose-check">
                  ✓
                </span>

                <p>
                  Track how quickly completed work reaches users.
                </p>

              </div>


              <div>

                <span className="s4metrics-purpose-check">
                  ✓
                </span>

                <p>
                  Monitor how frequently Festivo releases changes.
                </p>

              </div>


              <div>

                <span className="s4metrics-purpose-check">
                  ✓
                </span>

                <p>
                  Identify releases that introduce quality problems.
                </p>

              </div>


              <div>

                <span className="s4metrics-purpose-check">
                  ✓
                </span>

                <p>
                  Understand how much capacity is spent on rework.
                </p>

              </div>


              <div>

                <span className="s4metrics-purpose-check">
                  ✓
                </span>

                <p>
                  Measure how quickly the team restores affected functionality.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
    NEXT SPRINT 4 SUBPAGE
================================================== */}

<section className="s4metrics-next-section">

  <div className="s4metrics-shell">

    <Link
      to="/sprint-4/sli"
      className="s4metrics-next-card"
    >

      <div className="s4metrics-next-copy">

        <span>
          NEXT IN SPRINT 4
        </span>


        <h2>
          Service Level
          <strong>
            {" "}Indicators
          </strong>
        </h2>


        <p>
          Continue to the SLI document to see how Festivo
          defines measurable service reliability through
          availability, information freshness, and
          service-level targets.
        </p>

      </div>


      <div className="s4metrics-next-action">

        <div className="s4metrics-next-icon">

          <ShieldCheck size={26} />

        </div>


        <div>

          <span>
            CONTINUE
          </span>

          <strong>
            View SLI Doc
          </strong>

        </div>


        <ArrowRight
          size={25}
          className="s4metrics-next-arrow"
        />

      </div>

    </Link>

  </div>

</section>

    </main>
  );
}


export default DeliveryMetrics;