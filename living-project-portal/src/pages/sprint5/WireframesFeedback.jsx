import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  LayoutTemplate,
  MessageSquare,
  MousePointerClick,
  PencilRuler,
  Split,
  UserRoundCheck,
  Users,
} from "lucide-react";

import "../sprint5/Sprint5SubPages.css";


const wireframes = [
  {
    title: "RSVP Creation & Sender",
    image: "/documents/sprint-5/wireframes/RSVPs Creation and Sender.png",
  },
  {
    title: "RSVP Recipient",
    image: "/documents/sprint-5/wireframes/RSVPs Recipient.png",
  },
  {
    title: "Vendor Search",
    image: "/documents/sprint-5/wireframes/Vendor Search.png",
  },
  {
    title: "Selected Vendor",
    image: "/documents/sprint-5/wireframes/vendor information.png",
  },
  {
    title: "Event Creation",
    image: "/documents/sprint-5/wireframes/Create Event.png",
  },
  {
    title: "Event Itinerary",
    image: "/documents/sprint-5/wireframes/Itinerary.png",
  },
];


const teamFeedback = [
  {
    team: "TEAM 4",
    title: "Make the wireframes more interactive.",
    response:
      "Show the input screens and the results of selecting buttons, opening forms, and triggering pop-ups.",
  },
  {
    team: "TEAM 8",
    title: "Show RSVP management from the itinerary.",
    response:
      "Make organizer controls for adding and removing RSVPs visible directly from the itinerary flow.",
  },
  {
    team: "TEAM 2",
    title: "The overall design direction looked good.",
    response:
      "Keep the visual direction while improving the interactions and completing the missing flows.",
  },
];


function WireframesFeedback() {
  return (
    <main className="s5wf-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s5sub-hero">

        <div className="s5sub-shell">

          <div className="s5sub-breadcrumb">
            <Link to="/sprint-5">Sprint 5</Link>
            <span>/</span>
            <span>Wireframes & Feedback</span>
          </div>


          <div className="s5sub-hero-layout">

            <div className="s5sub-hero-copy">

              <span className="s5sub-eyebrow">
                SPRINT 5 · INSIGHTS
              </span>

              <h1>
                Wireframes &
                <span>Feedback</span>
              </h1>

              <p>
                Before moving into high-fidelity design, we asked
                three other teams to review six core Festivo flows.
                Their feedback helped us identify where actions were
                unclear, which interactions were missing, and what
                needed to be completed before Figma.
              </p>

              <Link
                to="/sprint-5"
                className="s5sub-back"
              >
                <ArrowLeft size={18} />
                Back to Sprint 5
              </Link>

            </div>


            <div className="s5wf-hero-art">

              <div className="s5wf-art-blob"></div>

              <div className="s5wf-clipboard">

                <div className="s5wf-clipboard-handle"></div>

                <span>FEEDBACK REVIEW</span>

                <div className="s5wf-check-row">
                  <CheckCircle2 size={21} />
                  <span>Interactive flows</span>
                </div>

                <div className="s5wf-check-row">
                  <CheckCircle2 size={21} />
                  <span>Clear next steps</span>
                </div>

                <div className="s5wf-check-row">
                  <CheckCircle2 size={21} />
                  <span>Complete Split Costs</span>
                </div>

              </div>


              <div className="s5wf-comment-badge">
                <MessageSquare size={22} />

                <div>
                  <span>REVIEWERS</span>
                  <strong>3 Teams</strong>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          JOURNEY
      ================================================== */}

      <section className="s5wf-journey-section">

        <div className="s5sub-shell">

          <div className="s5sub-heading">

            <span>THE FEEDBACK JOURNEY</span>

            <h2>
              Review. Listen.
              <strong> Improve.</strong>
            </h2>

          </div>


          <div className="s5wf-journey">

            <div className="s5wf-journey-step">
              <strong>01</strong>
              <div>
                <span>REVIEW</span>
                <h3>Walk through the wireframes</h3>
              </div>
            </div>

            <ArrowRight size={23} />

            <div className="s5wf-journey-step">
              <strong>02</strong>
              <div>
                <span>LISTEN</span>
                <h3>Gather outside feedback</h3>
              </div>
            </div>

            <ArrowRight size={23} />

            <div className="s5wf-journey-step">
              <strong>03</strong>
              <div>
                <span>REFINE</span>
                <h3>Carry changes into Figma</h3>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          WIREFRAME GALLERY
      ================================================== */}

      <section className="s5wf-gallery-section">

        <div className="s5sub-shell">

          <div className="s5sub-heading">

            <span>SIX REVIEWED FLOWS</span>

            <h2>
              The wireframes
              <strong> reviewers saw.</strong>
            </h2>

            <p>
              The review covered sending and responding to an
              invitation, finding vendors, viewing vendor details,
              creating an event, and reviewing the event itinerary.
            </p>

          </div>


          <div className="s5wf-gallery">

            {wireframes.map((wireframe, index) => (
              <article
                className="s5wf-gallery-card"
                key={wireframe.title}
              >

                <div className="s5wf-gallery-image">

                  <img
                    src={wireframe.image}
                    alt={`${wireframe.title} wireframe`}
                    loading="lazy"
                  />

                </div>

                <div className="s5wf-gallery-caption">

                  <span>
                    FLOW {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{wireframe.title}</strong>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          TEAM FEEDBACK
      ================================================== */}

      <section className="s5wf-feedback-section">

        <div className="s5sub-shell">

          <div className="s5sub-heading">

            <span>WHAT WE HEARD</span>

            <h2>
              Feedback turned into
              <strong> design decisions.</strong>
            </h2>

          </div>


          <div className="s5wf-feedback-grid">

            {teamFeedback.map((feedback) => (
              <article
                className="s5wf-feedback-card"
                key={feedback.team}
              >

                <div className="s5wf-feedback-team">
                  <Users size={20} />
                  <span>{feedback.team}</span>
                </div>

                <h3>{feedback.title}</h3>

                <div className="s5wf-response">

                  <span>OUR RESPONSE</span>

                  <p>{feedback.response}</p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          CHANGES
      ================================================== */}

      <section className="s5wf-changes-section">

        <div className="s5sub-shell">

          <div className="s5sub-heading">

            <span>WHAT CHANGED</span>

            <h2>
              From feedback
              <strong> to Figma.</strong>
            </h2>

          </div>


          <div className="s5wf-change-grid">

            <article className="s5wf-change-card">

              <div>
                <MousePointerClick size={25} />
              </div>

              <span>01</span>

              <h3>Show the steps between screens</h3>

              <p>
                Forms, pop-ups, editing states, and button results
                should be visible instead of implied.
              </p>

            </article>


            <article className="s5wf-change-card">

              <div>
                <UserRoundCheck size={25} />
              </div>

              <span>02</span>

              <h3>Support RSVP editing</h3>

              <p>
                Guests need a clear way to reopen, change, and save
                an RSVP after submitting it.
              </p>

            </article>


            <article className="s5wf-change-card">

              <div>
                <ClipboardCheck size={25} />
              </div>

              <span>03</span>

              <h3>Expose organizer RSVP controls</h3>

              <p>
                Organizers should be able to manage event attendees
                from the itinerary without confusing that flow with
                guest RSVP editing.
              </p>

            </article>


            <article className="s5wf-change-card">

              <div>
                <PencilRuler size={25} />
              </div>

              <span>04</span>

              <h3>Clarify interactive elements</h3>

              <p>
                Input fields, buttons, and selectable controls need
                clear labels and consistent visual treatment.
              </p>

            </article>


            <article className="s5wf-change-card s5wf-change-featured">

              <div>
                <Split size={25} />
              </div>

              <span>05</span>

              <h3>Complete Split Costs</h3>

              <p>
                The unfinished cost-splitting flow needed to become
                a complete part of the event-planning experience.
              </p>

            </article>

          </div>


          <a
            href="../../documents/sprint-5/Wireframe Write Up.pdf"
            download
            className="s5sub-document"
          >
            <FileText size={22} />

            <div>
              <span>SOURCE DOCUMENT</span>
              <strong>Wireframe Feedback Write-Up</strong>
            </div>

            <Download size={20} />
          </a>

        </div>

      </section>


      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <section className="s5sub-navigation">

        <div className="s5sub-shell">

          <div className="s5sub-navigation-grid">

            <Link
              to="/sprint-5"
              className="s5sub-nav-card"
            >
              <ArrowLeft size={21} />

              <div>
                <span>BACK</span>
                <strong>Sprint 5 Overview</strong>
              </div>
            </Link>


            <Link
              to="/sprint-5/figma-designs"
              className="s5sub-nav-card s5sub-nav-next"
            >
              <div>
                <span>NEXT</span>
                <strong>Figma Designs</strong>
              </div>

              <ArrowRight size={21} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


export default WireframesFeedback;