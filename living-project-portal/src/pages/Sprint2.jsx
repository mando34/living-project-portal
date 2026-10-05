import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Calculator,
  ChartNoAxesCombined,
  ClipboardList,
  Clock3,
  Coins,
  Download,
  FileText,
  Lightbulb,
  Users,
  WalletCards,
  BarChart3,
  CheckCircle2,
  PieChart,
  Sparkles,
  Layers3,
} from "lucide-react";

import "../styles/Sprint2.css";

function Sprint2() {
  const [activeTab, setActiveTab] = useState("starter");

  const tabs = [
    {
      id: "starter",
      number: "01",
      title: "Project Estimation Starter",
      shortTitle: "Estimation Starter",
      subtitle: "Understanding the size of Festivo",
      description:
        "We reviewed our Release 1 scope, compared the project with previous team experience, and researched similar products to understand how long a realistic first release could take.",
      icon: ClipboardList,
      className: "s2-pink",
      link: "/sprint-2/project-estimation-starter",
      download:
        "/documents/sprint-2/Project Estimation Starter.pdf",
      topics: [
        "Release 1 capabilities",
        "Hidden development work",
        "Previous team experience",
        "Comparable applications",
        "First-release timeline",
      ],
      stat: "7–14",
      statLabel: "Estimated months for a focused first release",
    },

    {
      id: "details",
      number: "02",
      title: "Estimation Details",
      shortTitle: "Estimation Details",
      subtitle: "Estimating one slice at a time",
      description:
        "This activity breaks Festivo into a recognizable project slice, estimates it using two different methods, checks coordination costs, and reconciles the results into an honest range.",
      icon: Calculator,
      className: "s2-purple",
      link: "/sprint-2/estimation-details",
      download:
        "/documents/sprint-2/Lesson 9 Part 2 Estimation Activity.pdf",
      topics: [
        "Choose a project slice",
        "Select two estimation methods",
        "Convert estimates to team hours",
        "Check team-size effects",
        "Compare and reconcile estimates",
      ],
      stat: "2",
      statLabel: "Independent estimation methods",
    },

    {
      id: "budget",
      number: "03",
      title: "One Page Budget",
      shortTitle: "One Page Budget",
      subtitle: "From effort to cost",
      description:
        "Our final budget translates estimated project effort into staffing, labor, non-labor expenses, contingency, operating cost, and an overall build request.",
      icon: WalletCards,
      className: "s2-orange",
      link: "/sprint-2/one-page-budget",
      download:
        "/documents/sprint-2/One Page Budget.pdf",
      topics: [
        "4,045.2 delivery hours",
        "Staffing plan",
        "Labor and non-labor costs",
        "Contingency reserve",
        "Operating cost",
      ],
      stat: "$645K",
      statLabel: "Total estimated build budget request",
    },
  ];

  const activeDocument =
    tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const ActiveIcon = activeDocument.icon;

  return (
    <div className="sprint2-page">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="sprint2-hero">

        <span className="s2-confetti s2-confetti-1"></span>
        <span className="s2-confetti s2-confetti-2"></span>
        <span className="s2-confetti s2-confetti-3"></span>
        <span className="s2-confetti s2-confetti-4"></span>


        <div className="sprint2-hero-container">

          <div className="sprint2-hero-copy">

            <span className="sprint2-eyebrow">
              SPRINT 02
            </span>

            <h1>
              Project
              <span> Estimation.</span>
            </h1>

            <p>
              Sprint 2 moves Festivo from project definition into
              estimation. We evaluate scope, compare similar products,
              estimate the effort required to build the system, and
              translate that work into time, staffing, and cost.
            </p>


            <div className="sprint2-hero-pills">

              <div>
                <Clock3 size={17} />
                Time
              </div>

              <div>
                <Users size={17} />
                Resources
              </div>

              <div>
                <Coins size={17} />
                Cost
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

          {/* <div className="sprint2-hero-visual">

            <div className="s2-visual-blob"></div>

            <div className="s2-main-visual-card">

              <ChartNoAxesCombined size={72} />

              <div className="s2-chart-bars">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>

            <div className="s2-floating-calculator">
              <Calculator size={35} />
            </div>

            <div className="s2-floating-document">
              <FileText size={31} />
            </div>

          </div> */}

          {/* ==========================================
              HERO ESTIMATION VISUAL
          ========================================== */}

          <div className="s2-estimation-visual">

            {/* BACKGROUND BLOBS */}
            <div className="s2-estimation-blob s2-blob-one"></div>
            <div className="s2-estimation-blob s2-blob-two"></div>


            {/* MAIN CLIPBOARD */}
            <div className="s2-clipboard">

              {/* CLIP */}
              <div className="s2-clipboard-clip"></div>


              {/* CHART */}
              <div className="s2-clipboard-chart">

                <div className="s2-chart-arrow">
                  <BarChart3
                    size={54}
                    strokeWidth={2.2}
                  />
                </div>

                <div className="s2-custom-bars">

                  <span className="s2-bar-one"></span>

                  <span className="s2-bar-two"></span>

                  <span className="s2-bar-three"></span>

                </div>

              </div>


              {/* CHECKLIST */}
              <div className="s2-checklist">

                <div className="s2-check-row">

                  <CheckCircle2 size={24} />

                  <span></span>

                </div>


                <div className="s2-check-row">

                  <CheckCircle2 size={24} />

                  <span></span>

                </div>

              </div>

            </div>


            {/* COINS */}
            <div className="s2-coins-visual">

              <div className="s2-coin-stack s2-coin-stack-back">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="s2-coin-stack s2-coin-stack-front">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <Coins
                className="s2-coins-icon"
                size={55}
                strokeWidth={1.7}
              />

            </div>


            {/* CALCULATOR */}
            <div className="s2-calculator-card">

              <Calculator
                size={68}
                strokeWidth={1.8}
              />

            </div>


            {/* PIE CHART */}
            <div className="s2-pie-chart-card">

              <PieChart
                size={61}
                strokeWidth={2}
              />

            </div>


            {/* DECORATIVE SPARKLES */}
            <Sparkles
              className="s2-estimation-sparkle s2-sparkle-one"
              size={33}
            />

            <Sparkles
              className="s2-estimation-sparkle s2-sparkle-two"
              size={25}
            />

          </div>

        </div>

      </section>


      {/* ==========================================
          TIMELINE
      ========================================== */}

      <section className="sprint2-process-section">

        <div className="sprint2-section-heading">

          <span className="sprint2-eyebrow">
            OUR ESTIMATION PROCESS
          </span>

          <h2>
            From scope to
            <span> budget.</span>
          </h2>

          <p>
            Each document builds on the previous one, moving from
            understanding the size of Festivo to estimating specific
            work and finally pricing the overall project.
          </p>

        </div>


        <div className="sprint2-timeline">

          <div className="sprint2-timeline-line"></div>


          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`sprint2-timeline-step ${
                activeTab === tab.id
                  ? "sprint2-timeline-step-active"
                  : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >

              <div
                className={`sprint2-timeline-number ${tab.className}`}
              >
                {tab.number}
              </div>

              <h3>
                {tab.shortTitle}
              </h3>

              <p>
                {tab.subtitle}
              </p>

            </button>
          ))}

        </div>

      </section>


      {/* ==========================================
          INTERACTIVE DOCUMENT TABS
      ========================================== */}

      <section className="sprint2-document-section">

        <div className="sprint2-document-wrapper">

          {/* TABS */}

          <div className="sprint2-tabs">

            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={
                  activeTab === tab.id
                    ? `sprint2-tab sprint2-tab-active ${tab.className}`
                    : "sprint2-tab"
                }
              >
                {tab.shortTitle}
              </button>
            ))}

          </div>


          {/* ACTIVE DOCUMENT */}

          <article
            className={`sprint2-document-card ${activeDocument.className}`}
          >

            {/* ==========================================
    DOCUMENT ILLUSTRATION
========================================== */}

<div
  className={`sprint2-document-preview s2-preview-${activeDocument.id}`}
>

  {/* Decorative background */}
  <div className="s2-preview-blob"></div>

  <div className="s2-preview-spark s2-preview-spark-one">
    ✦
  </div>

  <div className="s2-preview-spark s2-preview-spark-two">
    ✦
  </div>


  {/* ========================================
      PROJECT ESTIMATION STARTER
  ======================================== */}

  {activeDocument.id === "starter" && (

    <div className="s2-starter-illustration">

      <div className="s2-illustration-document">

        <div className="s2-document-mini-chart">

          <BarChart3
            size={58}
            strokeWidth={2.2}
          />

        </div>


        <div className="s2-document-check-row">

          <CheckCircle2 size={21} />

          <span></span>

        </div>


        <div className="s2-document-check-row">

          <CheckCircle2 size={21} />

          <span></span>

        </div>


        <div className="s2-document-check-row">

          <CheckCircle2 size={21} />

          <span></span>

        </div>

      </div>

    </div>

  )}


  {/* ========================================
      ESTIMATION DETAILS
  ======================================== */}

  {activeDocument.id === "details" && (

    <div className="s2-details-illustration">

      {/* Main estimation card */}
      <div className="s2-details-main-card">

        <div className="s2-details-chart">

          <div className="s2-details-bar s2-details-bar-1"></div>
          <div className="s2-details-bar s2-details-bar-2"></div>
          <div className="s2-details-bar s2-details-bar-3"></div>
          <div className="s2-details-bar s2-details-bar-4"></div>

        </div>


        <div className="s2-details-lines">

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>


      {/* Calculator */}
      <div className="s2-details-calculator">

        <Calculator
          size={48}
          strokeWidth={1.8}
        />

      </div>


      {/* Work / slices */}
      <div className="s2-details-slices">

        <Layers3
          size={37}
          strokeWidth={1.9}
        />

      </div>


      {/* Time */}
      <div className="s2-details-clock">

        <Clock3
          size={31}
          strokeWidth={2}
        />

      </div>

    </div>

  )}


  {/* ========================================
      ONE PAGE BUDGET
  ======================================== */}

  {activeDocument.id === "budget" && (

    <div className="s2-budget-illustration">

      {/* Main budget document */}
      <div className="s2-budget-document">

        <div className="s2-budget-heading">
          <WalletCards
            size={34}
            strokeWidth={2}
          />
        </div>


        <div className="s2-budget-chart">

          <span className="budget-bar budget-bar-1"></span>
          <span className="budget-bar budget-bar-2"></span>
          <span className="budget-bar budget-bar-3"></span>

        </div>


        <div className="s2-budget-line"></div>
        <div className="s2-budget-line s2-budget-line-short"></div>

      </div>


      {/* Coins */}
      <div className="s2-budget-coins">

        <Coins
          size={54}
          strokeWidth={1.8}
        />

      </div>


      {/* Growth badge */}
      <div className="s2-budget-growth">

        <ChartNoAxesCombined
          size={37}
          strokeWidth={2}
        />

      </div>

    </div>

  )}


  {/* DOCUMENT NUMBER */}
  <div className="s2-document-number">
    {activeDocument.number}
  </div>

</div>


            <div className="sprint2-document-content">

              <div className="sprint2-document-heading">

                <div className="sprint2-document-icon">
                  <ActiveIcon size={29} />
                </div>

                <div>

                  <span>
                    SPRINT 2 DELIVERABLE
                  </span>

                  <h2>
                    {activeDocument.title}
                  </h2>

                </div>

              </div>


              <p className="sprint2-document-description">
                {activeDocument.description}
              </p>


              <div className="sprint2-topic-box">

                <span>
                  KEY TOPICS
                </span>

                <ul>
                  {activeDocument.topics.map((topic) => (
                    <li key={topic}>
                      {topic}
                    </li>
                  ))}
                </ul>

              </div>


              <div className="sprint2-highlight-stat">

                <strong>
                  {activeDocument.stat}
                </strong>

                <span>
                  {activeDocument.statLabel}
                </span>

              </div>


              <div className="sprint2-document-actions">

                <Link
                  to={activeDocument.link}
                  className="sprint2-primary-action"
                >
                  Explore Full Page

                  <ArrowRight size={18} />
                </Link>


                <a
                  href={activeDocument.download}
                  download
                  className="sprint2-secondary-action"
                >
                  <Download size={17} />

                  Download Document
                </a>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ==========================================
          SPRINT 2 OUTCOME
      ========================================== */}

      <section className="sprint2-outcome-section">

        <div className="sprint2-outcome-wrapper">

          <div className="sprint2-section-heading">

            <span className="sprint2-eyebrow">
              SPRINT 2 OUTCOMES
            </span>

            <h2>
              Estimation creates a
              <span> clearer path forward.</span>
            </h2>

            <p>
              This sprint gives the team a more realistic view of
              the time, people, effort, and money required to bring
              Festivo from concept to a production-ready system.
            </p>

          </div>


          <div className="sprint2-outcome-grid">

            <article>

              <div className="s2-outcome-icon">
                <Clock3 size={27} />
              </div>

              <h3>
                Clearer Timeline
              </h3>

              <p>
                Establish a realistic range for the work required to
                deliver Festivo.
              </p>

            </article>


            <article>

              <div className="s2-outcome-icon">
                <Users size={27} />
              </div>

              <h3>
                Defined Resources
              </h3>

              <p>
                Identify the roles and staffing levels required
                throughout development.
              </p>

            </article>


            <article>

              <div className="s2-outcome-icon">
                <WalletCards size={27} />
              </div>

              <h3>
                Estimated Cost
              </h3>

              <p>
                Translate project effort into development,
                contingency, and operating costs.
              </p>

            </article>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Sprint2;