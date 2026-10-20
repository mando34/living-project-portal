import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Download,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import "../sprint3/Sprint3SubPages.css";


function ChangeNote() {

  /* ========================================================
     ORIGINAL ASSUMPTIONS
  ======================================================== */

  const originalAssumptions = [
    {
      icon: CalendarDays,
      text:
        "Festivo was primarily framed around parties and social gatherings.",
    },
    {
      icon: Users,
      text:
        "Invitations and RSVP functionality could help differentiate Festivo.",
    },
    {
      icon: Store,
      text:
        "Vendor discovery would be one of the strongest standalone features.",
    },
    {
      icon: CircleDollarSign,
      text:
        "Basic budgeting would be enough for the initial release.",
    },
  ];


  /* ========================================================
     EVIDENCE SOURCES
  ======================================================== */

  const evidenceSources = [
    "User interviews",
    "Product teardowns",
    "Contradiction memos",
    "Observed planning behaviors",
    "Existing product analysis",
  ];


  /* ========================================================
     UPDATED DIRECTION
  ======================================================== */

  const updatedDirection = [
    {
      icon: CalendarDays,
      text:
        "Support a broader range of events including parties, weddings, graduations, birthdays, and other gatherings.",
    },
    {
      icon: Users,
      text:
        "Differentiate through connected planning rather than invitation or RSVP functionality alone.",
    },
    {
      icon: Store,
      text:
        "Keep vendor discovery, but integrate it into the larger event-planning workflow.",
    },
    {
      icon: CircleDollarSign,
      text:
        "Increase the focus on budgeting and contribution tracking while keeping direct payments deferred.",
    },
  ];


  /* ========================================================
     WHAT STAYS THE SAME
  ======================================================== */

  const staysTheSame = [
    "Festivo still addresses a fragmented event-planning process.",
    "Centralized event information remains part of the product direction.",
    "Guest coordination and RSVP visibility remain useful capabilities.",
    "Vendor discovery still provides value when connected to the wider workflow.",
    "Direct payment processing remains outside the initial MVP.",
  ];


  return (
    <main className="s3sub-page change-note-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="change-note-hero">

        <div className="change-note-hero-inner">

          {/* LEFT */}

          <div className="change-note-hero-copy">

            <Link
              to="/sprint-3"
              className="s3sub-back"
            >
              <ArrowLeft size={16} />
              Back to Sprint 3
            </Link>


            <span className="change-note-eyebrow">
              SPRINT 3 · CHANGE NOTE
            </span>


            <h1>
              What Changed
              <br />

              and <span>Why?</span>
            </h1>


            <p>
              Sprint 3 gave our team an opportunity to compare our
              original assumptions about Festivo against real evidence.
              Interviews, product research, and contradiction analysis
              helped us refine the product without abandoning its core
              purpose.
            </p>


            <div className="change-note-tags">

              <span>
                <Users size={16} />
                User Research
              </span>


              <span>
                <Search size={16} />
                Evidence Review
              </span>


              <span>
                <Sparkles size={16} />
                Updated Direction
              </span>

            </div>

          </div>


          {/* ==================================================
              RIGHT HERO VISUAL
          ================================================== */}

          <div className="change-note-hero-visual">

            {/* Background shapes */}

            <div className="change-note-visual-shape change-note-shape-pink"></div>

            <div className="change-note-visual-shape change-note-shape-purple"></div>


            {/* Main document */}

            <div className="change-note-document">

              <div className="change-note-document-top">

                <div className="change-note-document-icon">
                  <FileText size={26} />
                </div>


                <span>
                  CHANGE NOTE
                </span>

              </div>


              <h3>
                Evidence changed
                <br />
                our direction.
              </h3>


              <div className="change-note-document-flow">

                <div className="change-note-document-step change-note-doc-before">

                  <span>
                    BEFORE
                  </span>

                  <strong>
                    Party Planning
                  </strong>

                </div>


                <ArrowRight
                  size={20}
                  className="change-note-document-arrow"
                />


                <div className="change-note-document-step change-note-doc-after">

                  <span>
                    AFTER
                  </span>

                  <strong>
                    Event Coordination
                  </strong>

                </div>

              </div>


              <div className="change-note-document-lines">

                <span></span>

                <span></span>

              </div>

            </div>


            {/* Floating evidence */}

            <div className="change-note-floating-evidence">

              <Search size={22} />

              <div>

                <span>
                  EVIDENCE
                </span>

                <strong>
                  Interviews
                  <br />
                  + Research
                </strong>

              </div>

            </div>


            {/* Floating note */}

            <div className="change-note-floating-note">

              <Sparkles size={19} />

              <p>
                Same idea.
                <br />
                Better direction.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          SIDE-BY-SIDE COMPARISON
      ================================================== */}

      <section className="change-note-comparison-section">

        <div className="change-note-section-heading">

          <span>
            BEFORE → EVIDENCE → AFTER
          </span>


          <h2>
            How our thinking
            <span> evolved.</span>
          </h2>


          <p>
            Instead of treating Sprint 3 as a complete change in
            direction, we used the evidence to refine four important
            assumptions about the product.
          </p>

        </div>


        <div className="change-note-comparison">

          {/* ==================================================
              ORIGINAL ASSUMPTIONS
          ================================================== */}

          <article className="change-note-comparison-panel change-note-original">

            <div className="change-note-panel-heading">

              <div className="change-note-panel-icon">
                <FileText size={25} />
              </div>


              <div>

                <span>
                  BEFORE
                </span>

                <h3>
                  Original Assumptions
                </h3>

                <p>
                  What we believed
                </p>

              </div>

            </div>


            <div className="change-note-item-list">

              {originalAssumptions.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    className="change-note-item"
                    key={index}
                  >

                    <div className="change-note-item-icon">

                      <Icon size={19} />

                    </div>


                    <p>
                      {item.text}
                    </p>

                  </div>

                );
              })}

            </div>

          </article>


          {/* ==================================================
              EVIDENCE
          ================================================== */}

          <div className="change-note-evidence-column">

            <div className="change-note-evidence-arrow change-note-arrow-left">
              ←
            </div>


            <div className="change-note-evidence-circle">

              <Search size={32} />

              <strong>
                EVIDENCE
              </strong>

            </div>


            <div className="change-note-evidence-arrow change-note-arrow-right">
              →
            </div>


            <div className="change-note-evidence-list">

              {evidenceSources.map((source) => (

                <div key={source}>

                  <CheckCircle2 size={14} />

                  <span>
                    {source}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* ==================================================
              UPDATED DIRECTION
          ================================================== */}

          <article className="change-note-comparison-panel change-note-updated">

            <div className="change-note-panel-heading">

              <div className="change-note-panel-icon">
                <Sparkles size={25} />
              </div>


              <div>

                <span>
                  AFTER
                </span>

                <h3>
                  Updated Direction
                </h3>

                <p>
                  Where we're going
                </p>

              </div>

            </div>


            <div className="change-note-item-list">

              {updatedDirection.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    className="change-note-item"
                    key={index}
                  >

                    <div className="change-note-item-icon">

                      <Icon size={19} />

                    </div>


                    <p>
                      {item.text}
                    </p>

                  </div>

                );
              })}

            </div>

          </article>

        </div>

      </section>


      {/* ==================================================
          BIGGEST SHIFT
      ================================================== */}

      <section className="change-note-shift-section">

        <div className="change-note-shift-inner">

          {/* LEFT */}

          <div className="change-note-shift-copy">

            <span>
              THE BIGGEST SHIFT
            </span>


            <h2>
              From individual features
              <strong>
                to connected coordination.
              </strong>
            </h2>


            <p>
              The research suggests that Festivo should not rely on
              any single feature as its primary differentiator.
              Invitations, RSVP tracking, vendor discovery, budgeting,
              and guest coordination become more valuable when they
              work together as part of one connected planning
              experience.
            </p>

          </div>


          {/* RIGHT VISUAL */}

          <div className="change-note-shift-visual">

            <div className="change-note-isolated-features">

              <span>
                RSVP
              </span>

              <span>
                Vendors
              </span>

              <span>
                Budget
              </span>

              <span>
                Guests
              </span>

            </div>


            <ArrowRight
              className="change-note-shift-arrow"
            />


            <div className="change-note-connected-circle">

              <Sparkles size={36} />

              <strong>
                FESTIVO
              </strong>

              <span>
                Connected
                <br />
                Planning
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHAT STAYED THE SAME
      ================================================== */}

      <section className="change-note-stays-section">

        <div className="change-note-stays-layout">

          <div className="change-note-stays-heading">

            <span>
              WHAT STAYED THE SAME?
            </span>


            <h2>
              Not everything
              <span>
                needed to change.
              </span>
            </h2>


            <p>
              Sprint 3 refined the business case, but several parts
              of Festivo's original direction were still supported
              by the research.
            </p>

          </div>


          <div className="change-note-stays-list">

            {staysTheSame.map((item) => (

              <div key={item}>

                <div className="change-note-check">

                  <CheckCircle2 size={18} />

                </div>


                <p>
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          MVP BOUNDARY
      ================================================== */}

      <section className="change-note-boundary-section">

        <div className="change-note-boundary-card">

          <div className="change-note-boundary-icon">

            <ShieldCheck size={31} />

          </div>


          <div>

            <span>
              AN IMPORTANT BOUNDARY
            </span>


            <h2>
              Financial coordination does not mean direct payments.
            </h2>


            <p>
              Sprint 3 increases the importance of budgeting,
              contribution tracking, and shared-expense visibility.
              However, payment processing, ticket sales, refunds,
              and host payouts remain outside the initial MVP.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          FINAL TAKEAWAY
      ================================================== */}

      <section className="change-note-takeaway-section">

        <div className="change-note-takeaway">

          <span>
            CHANGE NOTE TAKEAWAY
          </span>


          <h2>
            Same problem.
            <strong>
              Better informed solution.
            </strong>
          </h2>


          <p>
            Festivo still aims to reduce the fragmentation and
            coordination challenges involved in planning events.
            Sprint 3 gives the team a clearer understanding of who
            the product is for and where it should create the most
            value.
          </p>

        </div>

      </section>


      {/* ==================================================
          DOWNLOAD
      ================================================== */}

      <section className="s3sub-download-section">

        <div className="s3sub-download-card">

          <div>

            <span>
              ORIGINAL ARTIFACT
            </span>


            <h2>
              Sprint 3 Business Case Change Note
            </h2>


            <p>
              Download the original team document used to support
              this Living Project Portal page.
            </p>

          </div>


          <a
            href="/documents/sprint-3/Sprint 3 Change Note.pdf"
            download
          >
            <Download size={18} />

            Download Document
          </a>

        </div>

      </section>

    </main>
  );
}


export default ChangeNote;