import { Link } from "react-router-dom";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  Gauge,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "../styles/Sprint4.css";


function Sprint4() {

  const sprintPages = [
    {
      number: "01",
      eyebrow: "DELIVERY PERFORMANCE",
      title: "Delivery Metrics",
      description:
        "Track how changes move from development to production using delivery-focused measures for Festivo.",
      detail:
        "Lead time, deployment frequency, change failures, rework, and recovery.",
      icon: BarChart3,
      link: "/sprint-4/delivery-metrics",
      className: "s4-page-card-pink",
    },

    {
      number: "02",
      eyebrow: "SERVICE RELIABILITY",
      title: "SLI Doc",
      description:
        "Define measurable indicators and targets that describe what reliable service should look like for Festivo.",
      detail:
        "Availability, information freshness, SLO targets, and service commitments.",
      icon: Gauge,
      link: "/sprint-4/sli",
      className: "s4-page-card-purple",
    },

    {
      number: "03",
      eyebrow: "INCIDENT RESPONSE",
      title: "Budget & Postmortem",
      description:
        "Connect reliability targets to error budgets, escalation decisions, recovery expectations, and lessons learned.",
      detail:
        "Postmortem findings, error budgets, severity levels, and ownership.",
      icon: ClipboardCheck,
      link: "/sprint-4/budget-postmortem",
      className: "s4-page-card-orange",
    },
  ];


  return (
    <main className="s4-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s4-hero">

        <div className="s4-hero-inner">

          {/* LEFT SIDE */}

          <div className="s4-hero-copy">

            <span className="s4-hero-eyebrow">
              SPRINT 04
            </span>


            <h1>
              Performance,
              <span>
                Reliability & Operations.
              </span>
            </h1>


            <p>
              Sprint 4 turns our project from something we plan and
              build into something we can measure, operate, and
              improve. Our team defined delivery metrics, service
              expectations, and operational practices that help
              Festivo become more reliable and measurable.
            </p>


            <div className="s4-hero-tags">

              <span>
                <BarChart3 size={17} />
                Delivery Metrics
              </span>


              <span>
                <Gauge size={17} />
                Service Levels
              </span>


              <span>
                <ShieldCheck size={17} />
                Error Budgets
              </span>

            </div>

          </div>


          {/* ==================================================
              RIGHT-SIDE COLLAGE
          ================================================== */}

          <div className="s4-hero-collage">

            {/* BACKGROUND SHAPES */}

            <div className="s4-collage-shape s4-shape-pink"></div>

            <div className="s4-collage-shape s4-shape-purple"></div>


            {/* MAIN PAPER */}

            <div className="s4-operations-paper">

              <div className="s4-paper-header">

                <div className="s4-paper-header-icon">
                  <BarChart3 size={24} />
                </div>


                <span>
                  SPRINT 4 OPERATIONS
                </span>

              </div>


              <h2>
                Measure what
                <br />
                happens after
                <br />
                the plan ships.
              </h2>


              <div className="s4-paper-graphic">

                {/* BAR GRAPH */}

                <div className="s4-mini-chart">

                  <span className="s4-bar s4-bar-1"></span>

                  <span className="s4-bar s4-bar-2"></span>

                  <span className="s4-bar s4-bar-3"></span>

                </div>


                {/* RELIABILITY CIRCLE */}

                <div className="s4-reliability-check">

                  <CheckCircle2 size={52} />

                </div>

              </div>

            </div>


            {/* FLOATING CARD */}

            <div className="s4-floating-note">

              <Sparkles size={20} />

              <span>
                MEASURE
              </span>

              <strong>
                Improve
              </strong>

            </div>


            {/* TAPE */}

            <div className="s4-paper-tape"></div>

          </div>

        </div>

      </section>


      {/* ==================================================
          EXPLORE SPRINT 4
      ================================================== */}

      <section className="s4-explore-section">

        <div className="s4-explore-heading">

          <span>
            EXPLORE SPRINT 4
          </span>


          <h2>
            Three deliverables.
            <strong>
              {" "}One operational story.
            </strong>
          </h2>


          <p>
            Each Sprint 4 artifact adds another layer of operational
            discipline to Festivo — from measuring delivery, to defining
            reliability, to deciding how the team responds when
            expectations are missed.
          </p>

        </div>


        {/* ==================================================
            SUBPAGE CARDS
        ================================================== */}

        <div className="s4-page-grid">

          {sprintPages.map((page) => {

            const Icon = page.icon;

            return (

              <Link
                to={page.link}
                className={`s4-page-card ${page.className}`}
                key={page.number}
              >

                {/* LARGE BACKGROUND NUMBER */}

                <div className="s4-page-number">
                  {page.number}
                </div>


                {/* ICON */}

                <div className="s4-page-icon">

                  <Icon size={30} />

                </div>


                {/* EYEBROW */}

                <span className="s4-page-eyebrow">
                  {page.eyebrow}
                </span>


                {/* TITLE */}

                <h3>
                  {page.title}
                </h3>


                {/* DESCRIPTION */}

                <p>
                  {page.description}
                </p>


                {/* BOTTOM */}

                <div className="s4-page-bottom">

                  <span>
                    {page.detail}
                  </span>


                  <div className="s4-page-arrow">

                    <ArrowRight size={20} />

                  </div>

                </div>

              </Link>

            );
          })}

        </div>

        {/* ==================================================
    DOWNLOADABLE DOCUMENTS
================================================== */}

<div className="s4-document-downloads">

  <div className="s4-document-downloads-header">

    <span>
      SOURCE DOCUMENTS
    </span>

    <p>
      Download the original Sprint 4 deliverables.
    </p>

  </div>


  <div className="s4-document-downloads-grid">

    {/* DELIVERY METRICS */}

    <a
      href="/documents/sprint-4/Delivery Metrics.pdf"
      download
      className="s4-document-download s4-document-download-pink"
    >

      <div className="s4-document-download-icon">

        <FileText size={21} />

      </div>


      <div className="s4-document-download-copy">

        <span>
          PDF DOCUMENT
        </span>

        <strong>
          Delivery Metrics
        </strong>

      </div>


      <div className="s4-document-download-action">

        <span>
          Download
        </span>

        <Download size={18} />

      </div>

    </a>


    {/* SERVICE LEVELS */}

    <a
      href="/documents/sprint-4/Festivo SLI.pdf"
      download
      className="s4-document-download s4-document-download-purple"
    >

      <div className="s4-document-download-icon">

        <FileText size={21} />

      </div>


      <div className="s4-document-download-copy">

        <span>
          PDF DOCUMENT
        </span>

        <strong>
          SLI Doc
        </strong>

      </div>


      <div className="s4-document-download-action">

        <span>
          Download
        </span>

        <Download size={18} />

      </div>

    </a>


    {/* BUDGET & POSTMORTEM */}

    <a
      href="/documents/sprint-4/Budget_Postmortem.pdf"
      download
      className="s4-document-download s4-document-download-orange"
    >

      <div className="s4-document-download-icon">

        <FileText size={21} />

      </div>


      <div className="s4-document-download-copy">

        <span>
          PDF DOCUMENT
        </span>

        <strong>
          Budget & Postmortem
        </strong>

      </div>


      <div className="s4-document-download-action">

        <span>
          Download
        </span>

        <Download size={18} />

      </div>

    </a>

  </div>

</div>

      </section>


      {/* ==================================================
          SPRINT 4 CLOSING STRIP
      ================================================== */}

      {/* ==================================================
    SPRINT 4 CLOSING STRIP
    TEAM SKETCH MOODBOARD
================================================== */}

<section className="s4-closing-section">

  <div className="s4-closing-inner">

    {/* LARGE BACKGROUND NUMBER */}

    <div className="s4-closing-number">
      04
    </div>


    {/* ==================================================
        LEFT COPY
    ================================================== */}

    <div className="s4-closing-copy">

      <span>
        OPERATING FESTIVO
      </span>


      <h2>
        Measure the work.
        <strong>
          Protect the experience.
        </strong>
      </h2>


      <p>
        Sprint 4 connects delivery performance with service
        reliability. The goal is not simply to release features,
        but to understand how safely changes reach users, what
        reliable service means, and how the team responds when
        something goes wrong.
      </p>

    </div>


    {/* ==================================================
        RIGHT SIDE — TEAM SKETCH MOODBOARD
    ================================================== */}

    <div className="s4-sketch-board">

      {/* NOTEBOOK EDGE */}

      <div className="s4-sketch-rings">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>


      {/* HEADER */}

      <div className="s4-sketch-board-header">

        <div>

          <span>
            EARLY CONCEPTS
          </span>

          <h3>
            Festivo App Sketches
          </h3>

        </div>


        <div className="s4-sketch-board-badge">
          Team Ideas
        </div>

      </div>


      {/* ==================================================
          SKETCH GRID
      ================================================== */}

      <div className="s4-sketch-grid">

        {/* VENDOR SEARCH */}

        <article className="s4-sketch-card s4-sketch-card-vendor">

          <div className="s4-sketch-label">
            Vendor Search
          </div>


          <div className="s4-sketch-image-frame s4-sketch-search-frame">

            <img
              src="../public/documents/sprint-4/Sketch 5.png"
              alt="Festivo vendor search sketch"
              className="s4-sketch-search-image"
            />

          </div>

        </article>


        {/* RSVP FLOW */}

        <article className="s4-sketch-card s4-sketch-card-rsvp">

          <div className="s4-sketch-label s4-sketch-label-pink">
            RSVP Flow
          </div>


          <div className="s4-rsvp-sketches">

            <div className="s4-sketch-image-frame s4-sketch-send-frame">

              <img
                src="../public/documents/sprint-4/Sketch 2.jpg"
                alt="Festivo RSVP send sketch"
                className="s4-sketch-send-image"
              />

            </div>


            <div className="s4-sketch-image-frame">

              <img
                src="../public/documents/sprint-4/Sketch 3.jpg"
                alt="Festivo RSVP receive sketch"
              />

            </div>

          </div>

        </article>


        {/* VENDOR DETAIL */}

        <article className="s4-sketch-card s4-sketch-card-detail">

          <div className="s4-sketch-label s4-sketch-label-blue">
            Vendor Detail
          </div>


          <div className="s4-sketch-image-frame">

            <img
              src="../public/documents/sprint-4/Sketch 4.png"
              alt="Festivo vendor detail sketch"
            />

          </div>

        </article>


        {/* ITINERARY */}

        <article className="s4-sketch-card s4-sketch-card-itinerary">

          <div className="s4-sketch-label s4-sketch-label-purple">
            Itinerary
          </div>


          <div className="s4-sketch-image-frame">

            <img
              src="../public/documents/sprint-4/Sketch 1.png"
              alt="Festivo itinerary sketch"
            />

          </div>

        </article>

      </div>


      {/* SMALL NOTE */}

      <div className="s4-sketch-board-note">

        <Sparkles size={16} />

        <span>
          Early ideas for how the Festivo experience could look.
        </span>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}


export default Sprint4;