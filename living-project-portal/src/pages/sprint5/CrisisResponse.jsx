import { Link } from "react-router-dom";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Cloud,
  Database,
  Download,
  FileText,
  Gauge,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  UserMinus,
} from "lucide-react";

import "../sprint5/Sprint5SubPages.css";


const handoff = [
  {
    days: "DAYS 1–2",
    title: "Document the critical component",
    text:
      "Document vendor database architecture, synchronization, provider dependencies, and unfinished critical-path work.",
  },
  {
    days: "DAYS 3–4",
    title: "Walk through the implementation",
    text:
      "Review code, database connections, testing environments, and deployment procedures.",
  },
  {
    days: "DAYS 5–6",
    title: "Practice diagnosis and recovery",
    text:
      "Demonstrate how to identify incorrect vendor data, validate the provider fix, and execute recovery.",
  },
  {
    days: "DAYS 7–8",
    title: "Shift responsibility",
    text:
      "Receiving developers perform maintenance and testing while Waldo observes and answers questions.",
  },
  {
    days: "DAYS 9–10",
    title: "Verify independent operation",
    text:
      "Complete an independent deployment/recovery exercise, review documentation, permissions, risks, and outstanding work.",
  },
];


function CrisisResponse() {
  return (
    <main className="s5crisis-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s5sub-hero">

        <div className="s5sub-shell">

          <div className="s5sub-breadcrumb">
            <Link to="/sprint-5">Sprint 5</Link>
            <span>/</span>
            <span>Crisis Response</span>
          </div>


          <div className="s5sub-hero-layout">

            <div className="s5sub-hero-copy">

              <span className="s5sub-eyebrow">
                SPRINT 5 · OPERATIONS
              </span>

              <h1>
                Crisis
                <span>Response</span>
              </h1>

              <p>
                A 24-hour project crisis tested Festivo's
                reliability, governance, staffing, financial
                planning, risk management, and ability to make
                difficult scope decisions under pressure.
              </p>

              <a
                href="/documents/sprint-5/Festivo_Crisis_Response_Memo_Team+7.pdf"
                download
                className="s5crisis-memo-button"
              >
                Read the Memo
                <Download size={19} />
              </a>

            </div>


            <div className="s5crisis-hero-art">

              <div className="s5crisis-art-blob"></div>

              <div className="s5crisis-document">

                <div className="s5crisis-document-fold"></div>

                <span>FESTIVO</span>

                <strong>
                  CRISIS
                  <br />
                  PLAN
                </strong>

                <div className="s5crisis-document-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>


              <div className="s5crisis-shield">
                <ShieldCheck size={39} />
              </div>


              <div className="s5crisis-warning">
                <AlertTriangle size={25} />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          TRIAGE
      ================================================== */}

      <section className="s5crisis-triage-section">

        <div className="s5sub-shell">

          <div className="s5sub-heading">

            <span>SITUATION & TRIAGE</span>

            <h2>
              Three emergencies.
              <strong> One response.</strong>
            </h2>

            <p>
              The team ranked the emergencies based on immediate
              impact to Festivo's workflow and the dependencies
              created by the loss of the lead developer.
            </p>

          </div>


          <div className="s5crisis-priority-grid">

            <article className="s5crisis-priority-card s5crisis-priority-one">

              <div className="s5crisis-priority-top">
                <strong>01</strong>
                <Cloud size={29} />
              </div>

              <span>HIGHEST PRIORITY</span>

              <h3>Cloud Service Provider Update</h3>

              <p>
                The provider update caused the vendor database to
                return incorrect search and vendor results,
                effectively disrupting a core Festivo workflow.
              </p>

            </article>


            <article className="s5crisis-priority-card s5crisis-priority-two">

              <div className="s5crisis-priority-top">
                <strong>02</strong>
                <UserMinus size={29} />
              </div>

              <span>CRITICAL DEPENDENCY</span>

              <h3>Waldo's Departure</h3>

              <p>
                The lead developer has ten business days remaining,
                creating an urgent need to balance immediate
                recovery work with knowledge transfer.
              </p>

            </article>


            <article className="s5crisis-priority-card s5crisis-priority-three">

              <div className="s5crisis-priority-top">
                <strong>03</strong>
                <Database size={29} />
              </div>

              <span>GOVERNANCE IMPACT</span>

              <h3>Disproportionate Vendor Impact</h3>

              <p>
                One vendor group experienced a higher rate of
                incorrect data, requiring isolation, segmented
                validation, and a governance response.
              </p>

            </article>

          </div>


          <div className="s5crisis-missed-risk">

            <ShieldAlert size={26} />

            <div>
              <span>RISK REGISTER FINDING</span>

              <strong>
                None of the three crisis conditions had been
                anticipated in the existing risk register.
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          GOVERNANCE
      ================================================== */}

      <section className="s5crisis-governance-section">

        <div className="s5sub-shell">

          <div className="s5sub-heading s5crisis-light-heading">

            <span>GOVERNANCE RESPONSE</span>

            <h2>
              Manage the risk.
              <strong> Verify the data.</strong>
            </h2>

          </div>


          <div className="s5crisis-governance-layout">

            <article className="s5crisis-framework-card">

              <span>FRAMEWORK</span>

              <h3>NIST AI RMF</h3>

              <div className="s5crisis-framework-primary">
                MANAGE
              </div>

              <div className="s5crisis-framework-support">
                <span>Supported by MAP</span>
                <span>Supported by MEASURE</span>
              </div>

              <p>
                MANAGE was selected as the primary function because
                Festivo had already identified incorrect output and
                needed to contain the risk, validate the database,
                and determine when functionality could safely return.
              </p>

            </article>


            <div className="s5crisis-governance-cards">

              <article>

                <Database size={25} />

                <div>
                  <span>AFFECTED COMPONENT</span>
                  <strong>Festivo Database</strong>
                  <p>
                    Vendor information, client information, event
                    records, and private user data depend on it.
                  </p>
                </div>

              </article>


              <article>

                <Gauge size={25} />

                <div>
                  <span>MONITORING</span>
                  <strong>Compare group error rates</strong>
                  <p>
                    Segmented validation is used to determine
                    whether one group is experiencing materially
                    higher error rates.
                  </p>
                </div>

              </article>


              <article>

                <ShieldCheck size={25} />

                <div>
                  <span>RESTORATION</span>
                  <strong>Validate before release</strong>
                  <p>
                    Database-dependent functionality stays
                    restricted until the provider fix and affected
                    records are validated.
                  </p>
                </div>

              </article>


              <article>

                <AlertTriangle size={25} />

                <div>
                  <span>TRANSPARENCY</span>
                  <strong>No unverified breach claim</strong>
                  <p>
                    The memo confirms a data-integrity issue but does
                    not claim the unverified exposure allegation is
                    a confirmed confidentiality breach.
                  </p>
                </div>

              </article>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          RELIABILITY & MONEY
      ================================================== */}

      <section className="s5crisis-impact-section">

        <div className="s5sub-shell">

          <div className="s5sub-heading">

            <span>DELIVERY & RELIABILITY IMPACT</span>

            <h2>
              Recovery has
              <strong> measurable consequences.</strong>
            </h2>

          </div>


          <div className="s5crisis-impact-grid">

            <article>

              <div className="s5crisis-impact-icon">
                <Gauge size={27} />
              </div>

              <span>FRESHNESS TARGET</span>

              <strong>95%</strong>

              <p>
                Published target: at least 95% of updates appear on
                guest-facing pages within 30 seconds each sprint.
              </p>

            </article>


            <article>

              <div className="s5crisis-impact-icon">
                <Clock3 size={27} />
              </div>

              <span>ESTIMATED DELAY</span>

              <strong>2–3 Days</strong>

              <p>
                Additional business days estimated for investigation,
                validation, segmented testing, restoration, and
                approval.
              </p>

            </article>


            <article>

              <div className="s5crisis-impact-icon">
                <RefreshCw size={27} />
              </div>

              <span>REPAIR & SUPPORT</span>

              <strong>$17,916.67</strong>

              <p>
                Emergency repair and support costs are taken from
                the existing contingency reserve.
              </p>

            </article>


            <article>

              <div className="s5crisis-impact-icon">
                <ShieldCheck size={27} />
              </div>

              <span>RESERVE REMAINING</span>

              <strong>$8,958.33</strong>

              <p>
                Remaining contingency after the approved emergency
                scope change and repair costs.
              </p>

            </article>

          </div>


          <div className="s5crisis-data-note">

            <AlertTriangle size={23} />

            <p>
              The team could not calculate the exact freshness
              shortfall because the dashboard did not contain the
              update counts and timestamps needed for the
              calculation.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          HANDOFF
      ================================================== */}

      <section className="s5crisis-handoff-section">

        <div className="s5sub-shell">

          <div className="s5sub-heading">

            <span>PERSONNEL TRANSITION</span>

            <h2>
              Ten days to
              <strong> transfer critical knowledge.</strong>
            </h2>

          </div>


          <div className="s5crisis-handoff">

            {handoff.map((step, index) => (
              <article
                className="s5crisis-handoff-row"
                key={step.days}
              >

                <div className="s5crisis-handoff-marker">
                  <span>{index + 1}</span>
                </div>

                <div className="s5crisis-handoff-days">
                  {step.days}
                </div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          UPDATED RISKS
      ================================================== */}

      <section className="s5crisis-risks-section">

        <div className="s5sub-shell">

          <div className="s5sub-heading">

            <span>UPDATED RISK REGISTER</span>

            <h2>
              The crisis changed
              <strong> what Festivo watches.</strong>
            </h2>

          </div>


          <div className="s5crisis-risk-grid">

            <article>

              <Cloud size={26} />

              <span>HIGH / HIGH</span>

              <h3>
                External provider change produces incorrect results
              </h3>

              <p>
                Watch provider changes, validation mismatches, and
                sudden output or error changes.
              </p>

            </article>


            <article>

              <Database size={26} />

              <span>MEDIUM / HIGH</span>

              <h3>
                Automated output disproportionately affects a group
              </h3>

              <p>
                Watch for group-level error rates that materially
                differ from the overall population.
              </p>

            </article>


            <article>

              <UserMinus size={26} />

              <span>HIGH / HIGH</span>

              <h3>
                Loss of key developer creates a knowledge gap
              </h3>

              <p>
                Watch resignations, documentation backlog,
                unfinished tasks, and single-owner components.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          EXECUTIVE DECISION
      ================================================== */}

      <section className="s5crisis-recommendation-section">

        <div className="s5sub-shell">

          <div className="s5crisis-recommendation">

            <span>EXECUTIVE RECOMMENDATION</span>

            <h2>
              Cut scope.
              <strong> Protect the core experience.</strong>
            </h2>

            <p>
              Keep event creation and management available, defer
              nonessential vendor-search improvements, and restore
              basic vendor search and saving only after validation.
              This gives the team time to test the fix and complete
              Waldo's handoff.
            </p>


            <div className="s5crisis-recommendation-points">

              <div>
                <CheckCircle2 size={19} />
                <span>Keep event creation & management</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Validate basic vendor functionality</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Defer nonessential vendor improvements</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Prioritize recovery & handoff</span>
              </div>

            </div>


            <a
              href="/documents/sprint-5/Festivo_Crisis_Response_Memo_Team+7.pdf"
              download
            >
              <FileText size={19} />
              Download Full Crisis Memo
              <Download size={18} />
            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <section className="s5sub-navigation">

        <div className="s5sub-shell">

          <div className="s5sub-navigation-grid">

            <Link
              to="/sprint-5/figma-designs"
              className="s5sub-nav-card"
            >
              <ArrowLeft size={21} />

              <div>
                <span>PREVIOUS</span>
                <strong>Figma Designs</strong>
              </div>
            </Link>


            <Link
              to="/sprint-5"
              className="s5sub-nav-card s5sub-nav-next"
            >
              <div>
                <span>SPRINT 5</span>
                <strong>Back to Overview</strong>
              </div>

              <ArrowRight size={21} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


export default CrisisResponse;