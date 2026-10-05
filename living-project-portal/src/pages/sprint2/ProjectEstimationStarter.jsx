import { Link } from "react-router-dom";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Download,
  Lightbulb,
  Search,
  Sparkles,
  TestTube2,
  Users,
} from "lucide-react";

import "./Sprint2SubPages.css";

function ProjectEstimationStarter() {

  const releaseCapabilities = [
    {
      number: "01",
      title: "User Accounts & Authentication",
      work: ["T", "S", "U", "D"],
    },
    {
      number: "02",
      title: "Create Events & Social Gatherings",
      work: ["T", "U", "D"],
    },
    {
      number: "03",
      title: "Event Details & Planning Information",
      work: ["T", "U", "D"],
    },
    {
      number: "04",
      title: "Search Local Vendors",
      work: ["T", "U", "D"],
    },
    {
      number: "05",
      title: "Vendor Information",
      work: ["T", "U", "D", "I"],
    },
    {
      number: "06",
      title: "Update Event Information",
      work: ["T", "U", "D"],
    },
    {
      number: "07",
      title: "Vendor Categories",
      work: ["T", "U"],
    },
    {
      number: "08",
      title: "Save Vendors & Services",
      work: ["T", "U", "D"],
    },
  ];


  const comparableProjects = [
    {
      name: "Hooray! Party Planner",
      type: "Party Planning",
      timeline: "370 days",
      team: "Not disclosed",
      worked:
        "Combined invitations, RSVPs, tracking, checklists, and budgeting in one place.",
      challenge:
        "User reviews reported bugs, reliability issues, and usability problems.",
    },
    {
      name: "TimeTree",
      type: "Shared Scheduling",
      timeline: "199 days",
      team: "Small startup",
      worked:
        "Focused on shared calendars and event creation for groups.",
      challenge:
        "Quality reportedly took additional time to reach expectations after release.",
    },
    {
      name: "Partiful",
      type: "Event Management",
      timeline: "≈ 2+ years",
      team: "≈ 30",
      worked:
        "Made invitations, RSVPs, updates, and event pages simple and accessible.",
      challenge:
        "Reviews raised concerns about notification abuse, contact access, and crashes.",
    },
  ];


  const insights = [
    {
      icon: TestTube2,
      title: "Testing Cannot Be an Afterthought",
      text:
        "Testing appeared repeatedly in our hidden-work analysis, while comparable products showed how bugs and reliability problems can hurt an otherwise useful product.",
      className: "pes-insight-pink",
    },
    {
      icon: Users,
      title: "Usability Matters",
      text:
        "Usability was another recurring hidden-work category. A feature is not valuable if users struggle to understand or reliably use it.",
      className: "pes-insight-purple",
    },
    {
      icon: ClipboardList,
      title: "Keep Release 1 Focused",
      text:
        "Comparable applications suggest that a smaller first release centered on essential capabilities is more realistic than attempting every possible feature at launch.",
      className: "pes-insight-blue",
    },
    {
      icon: AlertTriangle,
      title: "Social Features Need Guardrails",
      text:
        "The team identified risks such as overly aggressive notifications and misuse of social communication features that should be considered during design.",
      className: "pes-insight-orange",
    },
  ];


  return (
    <div className="s2-subpage pes-page">

      {/* ==================================================
          HERO / PAGE INTRO
      ================================================== */}

      <section className="pes-hero">

        <div className="pes-hero-inner">

          <div className="pes-hero-copy">

            <Link
              to="/sprint-2"
              className="s2-subpage-back"
            >
              <ArrowLeft size={16} />
              Back to Sprint 2
            </Link>


            <span className="s2-subpage-label">
              SPRINT 2 · PROJECT ESTIMATION STARTER
            </span>


            <h1>
              Project Estimation
              <span> Starter.</span>
            </h1>


            <p>
              Before estimating Festivo's total effort, cost, or
              schedule, our team first reviewed the Release 1 scope,
              examined previous development experience, and researched
              comparable products.
            </p>


            <div className="pes-hero-tags">

              <span>
                <ClipboardList size={16} />
                Scope Review
              </span>

              <span>
                <Users size={16} />
                Team Experience
              </span>

              <span>
                <Search size={16} />
                Product Research
              </span>

            </div>

          </div>


          {/* KEY TAKEAWAY */}

          <aside className="pes-hero-takeaway">

            <div className="pes-takeaway-icon">
              <Lightbulb size={36} />
            </div>

            <span>
              KEY TAKEAWAY
            </span>

            <h2>
              Start focused.
              <br />
              Estimate realistically.
            </h2>

            <p>
              Our outside-view research suggests that Festivo should
              prioritize its core features first rather than attempting
              every possible capability in the initial release.
            </p>

            <div className="pes-estimate-badge">

              <strong>
                7–14
              </strong>

              <div>
                <span>
                  MONTHS
                </span>

                <p>
                  Focused first release
                </p>
              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* ==================================================
          RELEASE 1 INPUT
      ================================================== */}

      <section className="pes-section pes-scope-section">

        <div className="pes-section-heading">

          <span>
            OUR STARTING POINT
          </span>

          <h2>
            What does Release 1
            <span> actually need?</span>
          </h2>

          <p>
            We started from the Project Charter and interview research
            to identify the primary capabilities Festivo must support.
            We also identified the hidden work each capability introduces.
          </p>

        </div>


        <div className="pes-scope-summary">

          <div className="pes-scope-metric">

            <strong>
              8
            </strong>

            <span>
              Release 1 Capabilities
            </span>

          </div>


          <div className="pes-hidden-work-legend">

            <span>
              HIDDEN WORK
            </span>

            <div>

              <strong>T</strong>
              Testing

            </div>

            <div>

              <strong>S</strong>
              Security

            </div>

            <div>

              <strong>I</strong>
              Integration

            </div>

            <div>

              <strong>D</strong>
              Data

            </div>

            <div>

              <strong>U</strong>
              Usability

            </div>

          </div>

        </div>


        <div className="pes-capability-grid">

          {releaseCapabilities.map((capability) => (

            <article
              className="pes-capability-card"
              key={capability.number}
            >

              <div className="pes-capability-number">
                {capability.number}
              </div>


              <h3>
                {capability.title}
              </h3>


              <div className="pes-work-tags">

                {capability.work.map((tag) => (

                  <span key={tag}>
                    {tag}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ==================================================
          PREVIOUS TEAM EXPERIENCE
      ================================================== */}

      <section className="pes-section pes-experience-section">

        <div className="pes-section-heading pes-heading-left">

          <span>
            OUR OWN EXPERIENCE
          </span>

          <h2>
            What have we
            <span> built before?</span>
          </h2>

        </div>


        <div className="pes-experience-layout">

          <article className="pes-experience-main">

            <div className="pes-experience-icon">
              <Users size={31} />
            </div>

            <span className="pes-card-eyebrow">
              RELATED TEAM PROJECT
            </span>

            <h3>
              UTEP IA / TA / PL Web Application
            </h3>

            <p>
              The closest previous team experience involved a web
              application used by students and professors to manage
              IA, TA, and PL applications.
            </p>


            <div className="pes-experience-features">

              <span>
                Application workflows
              </span>

              <span>
                Scheduling
              </span>

              <span>
                Course history
              </span>

              <span>
                Status tracking
              </span>

              <span>
                Professor interface
              </span>

            </div>

          </article>


          <div className="pes-experience-stats">

            <article>

              <Clock3 size={25} />

              <strong>
                2–3
              </strong>

              <span>
                Months originally expected
              </span>

            </article>


            <article>

              <Clock3 size={25} />

              <strong>
                ~2
              </strong>

              <span>
                Months to complete
              </span>

            </article>


            <article>

              <AlertTriangle size={25} />

              <strong>
                ~15
              </strong>

              <span>
                Days spent stabilizing schedule updates
              </span>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          COMPARABLE PRODUCT RESEARCH
      ================================================== */}

      <section className="pes-section pes-comparison-section">

        <div className="pes-section-heading">

          <span>
            OUTSIDE VIEW
          </span>

          <h2>
            What can similar products
            <span> teach us?</span>
          </h2>

          <p>
            We compared real products with functionality related to
            event planning, scheduling, invitations, RSVPs, and social
            coordination.
          </p>

        </div>


        <div className="pes-comparison-layout">

          {/* TABLE */}

          <div className="pes-comparison-card">

            <div className="pes-comparison-header">

              <div>

                <span>
                  SIMILAR PROJECTS
                </span>

                <h3>
                  Product Comparison
                </h3>

              </div>


              <Search size={26} />

            </div>


            <div className="pes-table-wrapper">

              <table className="pes-comparison-table">

                <thead>

                  <tr>
                    <th>
                      Product
                    </th>

                    <th>
                      Focus
                    </th>

                    <th>
                      Time to Release
                    </th>

                    <th>
                      Team
                    </th>
                  </tr>

                </thead>


                <tbody>

                  {comparableProjects.map((project) => (

                    <tr key={project.name}>

                      <td>
                        <strong>
                          {project.name}
                        </strong>
                      </td>

                      <td>
                        {project.type}
                      </td>

                      <td>
                        {project.timeline}
                      </td>

                      <td>
                        {project.team}
                      </td>

                    </tr>

                  ))}


                  <tr className="pes-festivo-row">

                    <td>
                      <strong>
                        Festivo
                      </strong>
                    </td>

                    <td>
                      Event Planning
                    </td>

                    <td>
                      7–14 months
                    </td>

                    <td>
                      5
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>


          {/* COMPARISON TAKEAWAY */}

          <aside className="pes-comparison-takeaway">

            <Sparkles size={29} />

            <span>
              WHAT THIS SUGGESTS
            </span>

            <h3>
              First releases take time.
            </h3>

            <p>
              The comparable products varied significantly in team size
              and development timeline. That reinforces the importance
              of adjusting comparisons rather than copying another
              product's schedule directly.
            </p>


            <div className="pes-comparison-result">

              <strong>
                5
              </strong>

              <span>
                Team members assumed for Festivo
              </span>

            </div>

          </aside>

        </div>


        {/* WHAT WORKED / WHAT DID NOT */}

        <div className="pes-product-details">

          {comparableProjects.map((project) => (

            <article
              className="pes-product-detail-card"
              key={project.name}
            >

              <h3>
                {project.name}
              </h3>


              <div className="pes-product-result pes-result-positive">

                <CheckCircle2 size={18} />

                <div>

                  <span>
                    WHAT WORKED
                  </span>

                  <p>
                    {project.worked}
                  </p>

                </div>

              </div>


              <div className="pes-product-result pes-result-negative">

                <AlertTriangle size={18} />

                <div>

                  <span>
                    WHAT DIDN'T
                  </span>

                  <p>
                    {project.challenge}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ==================================================
          COMMON INSIGHTS
      ================================================== */}

      <section className="pes-section pes-insights-section">

        <div className="pes-section-heading">

          <span>
            COMMON INSIGHTS
          </span>

          <h2>
            What should Festivo
            <span> learn from this?</span>
          </h2>

        </div>


        <div className="pes-insights-grid">

          {insights.map((insight) => {

            const Icon = insight.icon;

            return (

              <article
                className={`pes-insight-card ${insight.className}`}
                key={insight.title}
              >

                <div className="pes-insight-icon">

                  <Icon size={27} />

                </div>


                <h3>
                  {insight.title}
                </h3>


                <p>
                  {insight.text}
                </p>

              </article>

            );
          })}

        </div>

      </section>


      {/* ==================================================
          FINAL INITIAL ESTIMATE
      ================================================== */}

      <section className="pes-section pes-final-estimate-section">

        <div className="pes-final-estimate-card">

          <div className="pes-final-estimate-copy">

            <span>
              INITIAL ESTIMATION DIRECTION
            </span>

            <h2>
              A realistic first release starts
              <strong> smaller.</strong>
            </h2>

            <p>
              Based on our scope, team experience, and comparable
              product research, our initial outside-view estimate
              suggests that a focused Festivo first release could
              require approximately seven to fourteen months with
              a five-person team.
            </p>


            <div className="pes-final-actions">

              <Link
                to="/sprint-2/estimation-details"
                className="pes-next-button"
              >
                Continue to Estimation Details

                <ArrowRight size={17} />
              </Link>


              <a
                href="/documents/sprint-2/Project Estimation Starter.pdf"
                download
                className="pes-download-button"
              >
                <Download size={17} />

                Download Document
              </a>

            </div>

          </div>


          <div className="pes-final-number">

            <span>
              ESTIMATED FIRST RELEASE
            </span>

            <strong>
              7–14
            </strong>

            <p>
              months
            </p>

            <div>
              Team of 5
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProjectEstimationStarter;