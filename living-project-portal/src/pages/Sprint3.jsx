import { Link } from "react-router-dom";

import {
  ArrowRight,
  CircleDollarSign,
  Download,
  FileText,
  Lightbulb,
  Search,
  ShieldAlert,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import "../styles/Sprint3.css";


function Sprint3() {

  /* ========================================================
     CONTRADICTION MEMO
  ======================================================== */

  const contradictions = [
    {
      number: "01",
      label: "AUDIENCE",
      assumption:
        "Festivo was primarily framed around parties and social gatherings.",
      evidence:
        "The same planning problems appeared across weddings, birthdays, graduations, and other gatherings.",
      direction:
        "Position Festivo as a broader event-planning and coordination platform.",
      className: "s3-contradiction-pink",
    },
    {
      number: "02",
      label: "DIFFERENTIATION",
      assumption:
        "Invitations and RSVP management could help distinguish Festivo.",
      evidence:
        "Existing platforms already handle invitation creation and RSVP tracking effectively.",
      direction:
        "Differentiate through connected planning instead of RSVP functionality alone.",
      className: "s3-contradiction-purple",
    },
    {
      number: "03",
      label: "VENDOR DISCOVERY",
      assumption:
        "Vendor discovery would be one of Festivo's strongest standalone value propositions.",
      evidence:
        "Some organizers rely on trusted contacts while others still experience fragmented searching.",
      direction:
        "Keep vendor discovery, but connect it to the rest of the planning workflow.",
      className: "s3-contradiction-orange",
    },
    {
      number: "04",
      label: "FINANCES",
      assumption:
        "Basic budgeting would be enough for the initial planning experience.",
      evidence:
        "Cost, shared expenses, and contribution coordination emerged as meaningful concerns.",
      direction:
        "Give budgeting and contribution tracking greater attention while keeping direct payments deferred.",
      className: "s3-contradiction-blue",
    },
  ];


  /* ========================================================
     INTERVIEW FINDINGS
  ======================================================== */

  const interviews = [
    {
      icon: CircleDollarSign,
      number: "INTERVIEW 01",
      title: "Cost & Shared Expenses",
      description:
        "Wedding travel coordination made cost and informal expense sharing stand out.",
    },
    {
      icon: Store,
      number: "INTERVIEW 02",
      title: "Fragmented Searching",
      description:
        "Birthday preparation required multiple stores and existing personal rental contacts.",
    },
    {
      icon: Users,
      number: "INTERVIEW 03",
      title: "Attendance Visibility",
      description:
        "Guest-count uncertainty affects food, drinks, supplies, and preparation.",
    },
  ];


  /* ========================================================
     SPRINT 3 SUBPAGES
  ======================================================== */

  const sprintPages = [
    {
      number: "01",
      eyebrow: "BUSINESS CASE",
      icon: FileText,
      title: "Change Note",
      description:
        "See how Sprint 3 evidence changed Festivo's audience, positioning, and product priorities.",
      detail:
        "What changed — and what stayed the same.",
      link: "/sprint-3/change-note",
      className: "s3-story-card-pink",
    },
    {
      number: "02",
      eyebrow: "RISK MANAGEMENT",
      icon: ShieldAlert,
      title: "Candidate Risk Entries",
      description:
        "Review adoption, trust, and differentiation risks revealed by interviews and product research.",
      detail:
        "Evidence transformed into risks and mitigations.",
      link: "/sprint-3/candidate-risk-entries",
      className: "s3-story-card-purple",
    },
    {
      number: "03",
      eyebrow: "RESEARCH",
      icon: Search,
      title: "Evidence Log",
      description:
        "Explore the behaviors, current alternatives, frustrations, and implications collected during research.",
      detail:
        "The evidence behind our decisions.",
      link: "/sprint-3/evidence-log",
      className: "s3-story-card-blue",
    },
  ];


  /* ========================================================
     DOWNLOADABLE ARTIFACTS
  ======================================================== */

  const downloads = [
    {
      name: "Business Case Change Note",
      type: "PDF",
      href: "/documents/sprint-3/Sprint 3 Change Note.pdf",
    },
    {
      name: "Candidate Risk Entries",
      type: "PDF",
      href: "/documents/sprint-3/Sprint 3 Candidate Risk Entries.pdf",
    },
    {
      name: "Evidence Log",
      type: "PDF",
      href: "/documents/sprint-3/Sprint 3 - Evidence Log.pdf",
    },
    {
      name: "Compiled Contradiction Memos",
      type: "PDF",
      href: "/documents/sprint-3/Team 7- Sprint 3 Compiled Contradiction Memos.pdf",
    },
    {
      name: "Compiled Field Notes",
      type: "PDF",
      href: "/documents/sprint-3/Team 7- Sprint 3 Compiled Field Notes.pdf",
    },
  ];


  return (
    <main className="s3-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s3-editorial-hero">

        <div className="s3-editorial-hero-inner">

          {/* LEFT SIDE */}

          <div className="s3-editorial-hero-copy">

            <span className="s3-editorial-eyebrow">
              SPRINT 03
            </span>


            <h1>
              Evidence, Risks &
              <span>
                Project Evolution.
              </span>
            </h1>


            <p>
              Sprint 3 focused on testing our earlier assumptions
              against real evidence. Interviews, hands-on product
              research, contradiction memos, and risk analysis helped
              us understand where Festivo should stay the course and
              where the idea needs to evolve.
            </p>


            <div className="s3-editorial-hero-tags">

              <span>
                <Users size={17} />
                3 Interviews
              </span>


              <span>
                <Search size={17} />
                2 Product Teardowns
              </span>


              <span>
                <ShieldAlert size={17} />
                3 Candidate Risks
              </span>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="s3-editorial-collage">

            <div className="s3-collage-shape s3-collage-purple"></div>

            <div className="s3-collage-shape s3-collage-yellow"></div>


            <div className="s3-research-paper">

              <span className="s3-paper-small">
                LIVING PROJECT PORTAL
              </span>


              <h2>
                Sprint 3
              </h2>


              <div className="s3-paper-rule s3-rule-large"></div>

              <div className="s3-paper-rule s3-rule-medium"></div>


              <div className="s3-paper-topic s3-paper-topic-pink">
                Evidence
              </div>


              <div className="s3-paper-topic s3-paper-topic-purple">
                Risks
              </div>


              <div className="s3-paper-topic s3-paper-topic-yellow">
                Change
              </div>

            </div>


            <div className="s3-collage-note">

              <Sparkles size={21} />

              <p>
                Real insights.
                <br />
                Better decisions.
              </p>

            </div>


            <div className="s3-collage-tape"></div>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHAT CHANGED
      ================================================== */}

      <section className="s3-change-story-section">

        <div className="s3-section-heading">

          <span>
            CONTRADICTION MEMO
          </span>


          <h2>
            What happened when our assumptions
            <span>
              {" "}met real evidence?
            </span>
          </h2>


          <p>
            Sprint 3 did not invalidate Festivo. Instead, the research
            showed where the original concept was too narrow and where
            individual features were not enough to differentiate the
            product.
          </p>

        </div>


        {/* ORIGINAL → EVIDENCE → UPDATED */}

        <div className="s3-change-story">

          <article className="s3-change-story-panel s3-assumption-panel">

            <span>
              WHERE WE STARTED
            </span>


            <h3>
              A party-planning platform centered around useful
              individual features.
            </h3>


            <p>
              Our earlier direction emphasized parties, vendor
              discovery, invitations, RSVP management, and relatively
              basic budgeting.
            </p>

          </article>


          <div className="s3-change-story-middle">

            <span className="s3-change-story-line"></span>


            <div className="s3-evidence-circle">

              <Search size={27} />

              <strong>
                REAL
                <br />
                EVIDENCE
              </strong>

            </div>


            <span className="s3-change-story-line"></span>

          </div>


          <article className="s3-change-story-panel s3-direction-panel">

            <span>
              WHERE THE EVIDENCE LED
            </span>


            <h3>
              A broader event-coordination platform built around
              connected planning.
            </h3>


            <p>
              Festivo's opportunity is connecting guests, vendors,
              expenses, schedules, and event information into one
              coordinated planning experience.
            </p>

          </article>

        </div>


        {/* ==================================================
            CONTRADICTION DETAILS
        ================================================== */}

        <div className="s3-mini-heading">

          <span>
            KEY CONTRADICTIONS WE FOUND
          </span>

        </div>


        <div className="s3-contradiction-grid">

          {contradictions.map((item) => (

            <article
              key={item.number}
              className={`s3-contradiction-card ${item.className}`}
            >

              <div className="s3-contradiction-top">

                <span className="s3-contradiction-number">
                  {item.number}
                </span>


                <span className="s3-contradiction-label">
                  {item.label}
                </span>

              </div>


              <div className="s3-contradiction-step">

                <span>
                  WE THOUGHT
                </span>

                <p>
                  {item.assumption}
                </p>

              </div>


              <div className="s3-vertical-arrow">
                ↓
              </div>


              <div className="s3-contradiction-step">

                <span>
                  WE LEARNED
                </span>

                <p>
                  {item.evidence}
                </p>

              </div>


              <div className="s3-vertical-arrow">
                ↓
              </div>


              <div className="s3-contradiction-step s3-direction-step">

                <span>
                  UPDATED DIRECTION
                </span>

                <p>
                  {item.direction}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ==================================================
          INTERVIEW EVIDENCE
      ================================================== */}

      <section className="s3-dark-evidence">

        <div className="s3-dark-evidence-inner">

          {/* LEFT */}

          <div className="s3-dark-copy">

            <span>
              WHAT THE INTERVIEWS REVEALED
            </span>


            <h2>
              Different events.
              <strong>
                Connected problems.
              </strong>
            </h2>


            <p>
              No participant described using one application for the
              entire planning process. Instead, people relied on
              combinations of specialized apps, physical stores,
              trusted contacts, invitations, and informal coordination.
            </p>


            <div className="s3-dark-quote">

              The opportunity is not replacing every tool. It is
              connecting the planning work those tools leave scattered.

            </div>

          </div>


          {/* RIGHT */}

          <div className="s3-interview-stack">

            {interviews.map((interview) => {

              const Icon = interview.icon;

              return (

                <article
                  className="s3-interview-row"
                  key={interview.number}
                >

                  <div className="s3-interview-icon">

                    <Icon size={24} />

                  </div>


                  <div className="s3-interview-number">

                    {interview.number}

                  </div>


                  <div className="s3-interview-content">

                    <h3>
                      {interview.title}
                    </h3>


                    <p>
                      {interview.description}
                    </p>

                  </div>

                </article>

              );
            })}

          </div>

        </div>

      </section>


      {/* ==================================================
          EXPLORE SPRINT 3
      ================================================== */}

      <section className="s3-story-pages-section">

        <div className="s3-story-heading">

          <span>
            EXPLORE SPRINT 3
          </span>


          <h2>
            Follow the
            <strong>
              {" "}evidence trail.
            </strong>
          </h2>


          <p>
            Each Sprint 3 artifact represents another step in how
            research became project decisions.
          </p>

        </div>


        <div className="s3-story-page-grid">

          {sprintPages.map((page) => {

            const Icon = page.icon;

            return (

              <Link
                to={page.link}
                className={`s3-story-page-card ${page.className}`}
                key={page.number}
              >

                <div className="s3-story-page-number">
                  {page.number}
                </div>


                <div className="s3-story-page-icon">

                  <Icon size={28} />

                </div>


                <span className="s3-story-page-eyebrow">
                  {page.eyebrow}
                </span>


                <h3>
                  {page.title}
                </h3>


                <p>
                  {page.description}
                </p>


                <div className="s3-story-page-bottom">

                  <span>
                    {page.detail}
                  </span>


                  <div className="s3-story-page-arrow">

                    <ArrowRight size={20} />

                  </div>

                </div>

              </Link>

            );
          })}

        </div>

      </section>


      {/* ==================================================
          UPDATED FESTIVO DIRECTION
      ================================================== */}

      <section className="s3-direction-section">

        <div className="s3-direction-inner">

          <div className="s3-direction-number">
            03
          </div>


          <div className="s3-direction-copy">

            <span>
              UPDATED FESTIVO DIRECTION
            </span>


            <h2>
              The value is not one feature.
              <strong>
                It is everything working together.
              </strong>
            </h2>


            <p>
              Sprint 3 reinforces a broader vision for Festivo:
              a centralized event-planning experience that connects
              attendance, vendors, costs, schedules, and event details
              while avoiding unnecessary complexity such as direct
              payments in the initial release.
            </p>

          </div>


          <aside className="s3-direction-note">

            <Lightbulb size={25} />

            <span>
              THE SHIFT
            </span>


            <p>
              From isolated features
              <br />
              to connected coordination.
            </p>

          </aside>

        </div>

      </section>


      {/* ==================================================
          DOWNLOADS
      ================================================== */}

      <section className="s3-artifacts-section">

        <div className="s3-section-heading">

          <span>
            SPRINT 3 ARTIFACTS
          </span>


          <h2>
            Research &
            <span>
              {" "}deliverables.
            </span>
          </h2>


          <p>
            All original Sprint 3 documents are available for download
            as part of the Living Project Portal.
          </p>

        </div>


        <div className="s3-artifact-shelf">

          {downloads.map((file, index) => (

            <a
              href={file.href}
              download
              className="s3-artifact-item"
              key={file.name}
            >

              <span className="s3-artifact-index">
                0{index + 1}
              </span>


              <div className="s3-artifact-icon">

                <FileText size={22} />

              </div>


              <div className="s3-artifact-copy">

                <strong>
                  {file.name}
                </strong>

                <span>
                  {file.type}
                </span>

              </div>


              <div className="s3-artifact-download">

                <Download size={19} />

              </div>

            </a>

          ))}

        </div>

      </section>

    </main>
  );
}


export default Sprint3;