import { Link } from "react-router-dom";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Gauge,
  ListChecks,
  MessageSquare,
  ShieldAlert,
  Sparkles,
  Target,
  TimerReset,
  Users,
  Wrench,
  Lightbulb,
    RefreshCw,
    TrendingUp,
} from "lucide-react";

import "../sprint4/Sprint4SubPages.css";


function BudgetPostmortem() {

  const timeline = [
    {
      date: "TUE · 10/12",
      time: "4:20 PM",
      title: "Assignment Received",
      text:
        "Assignment given in class. Questionnaire created and interview date established.",
    },

    {
      date: "TUE–THU",
      time: "",
      title: "Interview Planning",
      text:
        "Team members planned potential interview locations and how they would approach participants.",
    },

    {
      date: "THU · 10/14",
      time: "3:00 PM",
      title: "Interviews Conducted",
      text:
        "Interviews took place, notes were collected, and the team briefly discussed the rest of the sprint.",
    },

    {
      date: "SUN · 10/17",
      time: "",
      title: "First Team Meeting",
      text:
        "Workload was finalized, but contradiction memos and field notes still needed to be completed.",
    },

    {
      date: "MON · 10/18",
      time: "5:31 PM",
      title: "Research Artifacts Finalized",
      text:
        "Contradiction memos and field notes were finalized.",
    },

    {
      date: "TUE · 10/19",
      time: "6:08 PM",
      title: "Portal Updated",
      text:
        "Documents were compiled and the Living Project Portal was updated to reflect Sprint 3.",
    },

    {
      date: "TUE · 10/19",
      time: "6:20 PM",
      title: "Sprint Submitted",
      text:
        "Sprint documents were submitted before the 11:59 PM deadline.",
    },
  ];


  const causes = [
    "Tasks were primarily worked on during the live meeting rather than beforehand.",

    "Several tasks depended on interviews being completed first.",

    "The team did not establish an internal deadline ahead of the official deadline.",

    "Other coursework priorities reduced available project time.",

    "Communication was not kept consistent throughout the sprint.",
  ];


  const actions = [
    {
      action: "Set a weekly team meeting",
      owner: "Anaiah",
      date: "11/3",
    },

    {
      action: "Assign tasks in the team chat",
      owner: "Armando",
      date: "11/5",
    },

    {
      action: "Set an internal deadline before each due date",
      owner: "Angel",
      date: "11/5",
    },

    {
      action: "Announce team members' availability",
      owner: "Whole Team",
      date: "11/3",
    },
  ];


  const severityLevels = [
    {
      level: "Severity 1",
      tone: "pink",
      icon: AlertTriangle,

      example:
        "Portal is down or won't load.",

      response:
        "Within 2 hours",

      notify:
        "Within 3 hours",
    },

    {
      level: "Severity 2",
      tone: "orange",
      icon: AlertTriangle,

      example:
        "Content is missing from one of the pages.",

      response:
        "Within 24 hours",

      notify:
        "During the weekly update",
    },

    {
      level: "Severity 3",
      tone: "purple",
      icon: CheckCircle2,

      example:
        "Content is out of date or incorrect.",

      response:
        "By the next submission deadline",

      notify:
        "Only if it repeats",
    },
  ];


  const roles = [
    {
      role: "Incident Commander",
      owner: "Anaiah",
      job: "Decides and assigns",
      icon: ShieldAlert,
    },

    {
      role: "Fixer",
      owner: "Armando",
      job: "Only one who changes the site",
      icon: Wrench,
    },

    {
      role: "Communicator",
      owner: "Gabriel",
      job: "Updates stakeholders at set times",
      icon: MessageSquare,
    },
  ];


  return (
    <main className="s4budget-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s4budget-hero">

        <div className="s4budget-shell">

          <div className="s4budget-breadcrumb">

            <Link to="/sprint-4">
              Sprint 4
            </Link>

            <span>
              /
            </span>

            <span>
              Budget & Postmortem
            </span>

          </div>


          <div className="s4budget-hero-layout">

            {/* LEFT */}

            <div className="s4budget-hero-copy">

              <span className="s4budget-eyebrow">
                SPRINT 4 · RELIABILITY & RETROSPECTIVE
              </span>


              <h1>

                Budget &

                <span>
                  Postmortem
                </span>

              </h1>


              <div className="s4budget-title-line"></div>


              <p>
                A retrospective on how Sprint 3 unfolded, what
                compressed the team's schedule, and what will
                change going forward — paired with Festivo's
                error-budget policies, escalation path, and
                incident-response responsibilities.
              </p>


              <Link
                to="/sprint-4"
                className="s4budget-back"
              >

                <ArrowLeft size={16} />

                Back to Sprint 4

              </Link>

            </div>


            {/* ==================================================
                HERO ART
            ================================================== */}

            <div className="s4budget-hero-art">

  {/* BACKGROUND SHAPES */}

  <div className="s4budget-cycle-blob"></div>

  <div className="s4budget-cycle-blob-small"></div>


  {/* ==================================================
      LEARN
  ================================================== */}

  <div className="s4budget-cycle-card s4budget-cycle-learn">

    <div className="s4budget-cycle-icon">

      <Lightbulb size={32} />

    </div>


    <span>
      01
    </span>


    <strong>
      Learn
    </strong>


    <small>
      Review what happened
    </small>

  </div>


  {/* ==================================================
      IMPROVE
  ================================================== */}

  <div className="s4budget-cycle-card s4budget-cycle-improve">

    <div className="s4budget-cycle-icon">

      <TrendingUp size={32} />

    </div>


    <span>
      02
    </span>


    <strong>
      Improve
    </strong>


    <small>
      Turn lessons into action
    </small>

  </div>


  {/* ==================================================
      REPEAT
  ================================================== */}

  <div className="s4budget-cycle-card s4budget-cycle-repeat">

    <div className="s4budget-cycle-icon">

      <RefreshCw size={32} />

    </div>


    <span>
      03
    </span>


    <strong>
      Repeat
    </strong>


    <small>
      Apply changes next sprint
    </small>

  </div>


  {/* ==================================================
      CONNECTING ARROWS
  ================================================== */}

  <div className="s4budget-cycle-arrow s4budget-arrow-learn-improve">

    <ArrowRight size={28} />

  </div>


  <div className="s4budget-cycle-arrow s4budget-arrow-improve-repeat">

    <ArrowRight size={28} />

  </div>


  <div className="s4budget-cycle-arrow s4budget-arrow-repeat-learn">

    <ArrowRight size={28} />

  </div>


  {/* CENTER */}

  <div className="s4budget-cycle-center">

    <Sparkles size={20} />

    <span>
      RETROSPECTIVE
    </span>

  </div>


  {/* DECORATION */}

  <div className="s4budget-hero-spark s4budget-spark-1"></div>

  <div className="s4budget-hero-spark s4budget-spark-2"></div>

  <div className="s4budget-hero-spark s4budget-spark-3"></div>

</div>

          </div>

        </div>

      </section>


      {/* ==================================================
          OVERVIEW
      ================================================== */}

      <section className="s4budget-overview-section">

        <div className="s4budget-shell">

          <div className="s4budget-overview-heading">

            <span>
              SPRINT 3 REVIEW
            </span>


            <h2>

              What happened,

              <strong>
                {" "}and what we learned.
              </strong>

            </h2>


            <p>
              The work was completed before the deadline, but
              delayed task assignment compressed much of the
              sprint's work into the final portion of the
              schedule.
            </p>

          </div>


          <div className="s4budget-overview-grid">

            {/* ==================================================
                ERROR BUDGET SUMMARY
            ================================================== */}

            <article className="s4budget-budget-card">

              <div className="s4budget-card-heading">

                <div
                  className="
                    s4budget-card-icon
                    s4budget-icon-pink
                  "
                >

                  <Gauge size={27} />

                </div>


                <div>

                  <span>
                    RELIABILITY
                  </span>

                  <h3>
                    Error Budget Summary
                  </h3>

                </div>

              </div>


              <p className="s4budget-card-intro">
                The error budget connects Festivo's service
                objectives to specific actions when reliability
                targets are missed.
              </p>


              {/* AVAILABILITY */}

              <div className="s4budget-objective">

                <div className="s4budget-objective-top">

                  <span>
                    OBJECTIVE 01
                  </span>

                  <strong>
                    99%
                  </strong>

                </div>


                <h4>
                  Availability
                </h4>


                <p>
                  At least 99% of availability checks should
                  succeed each sprint.
                </p>


                <div className="s4budget-budget-meter">

                  <span></span>

                </div>


                <div className="s4budget-budget-detail">

                  <span>
                    ERROR BUDGET
                  </span>

                  <strong>
                    ~40 failed checks / sprint
                  </strong>

                </div>

              </div>


              {/* INFORMATION FRESHNESS */}

              <div
                className="
                  s4budget-objective
                  s4budget-objective-purple
                "
              >

                <div className="s4budget-objective-top">

                  <span>
                    OBJECTIVE 02
                  </span>

                  <strong>
                    95%
                  </strong>

                </div>


                <h4>
                  Information Freshness
                </h4>


                <p>
                  At least 95% of event updates should appear
                  on guest pages within 30 seconds each sprint.
                </p>


                <div className="s4budget-budget-meter">

                  <span></span>

                </div>


                <div className="s4budget-budget-detail">

                  <span>
                    ERROR BUDGET
                  </span>

                  <strong>
                    Not specified in submitted document
                  </strong>

                </div>

              </div>

            </article>


            {/* ==================================================
                POSTMORTEM TIMELINE
            ================================================== */}

            <article className="s4budget-timeline-card">

              <div className="s4budget-card-heading">

                <div
                  className="
                    s4budget-card-icon
                    s4budget-icon-purple
                  "
                >

                  <CalendarDays size={27} />

                </div>


                <div>

                  <span>
                    POSTMORTEM
                  </span>

                  <h3>
                    Sprint Timeline
                  </h3>

                </div>

              </div>


              <div className="s4budget-timeline">

                {timeline.map((item, index) => (

                  <div
                    className="s4budget-timeline-item"
                    key={`${item.date}-${index}`}
                  >

                    <div className="s4budget-timeline-marker">

                      <span></span>

                    </div>


                    <div className="s4budget-timeline-content">

                      <div className="s4budget-timeline-meta">

                        <span>
                          {item.date}
                        </span>

                        {item.time && (

                          <small>
                            {item.time}
                          </small>

                        )}

                      </div>


                      <h4>
                        {item.title}
                      </h4>


                      <p>
                        {item.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          POSTMORTEM INSIGHTS
      ================================================== */}

      <section className="s4budget-insights-section">

        <div className="s4budget-shell">

          <div className="s4budget-insights-heading">

            <span>
              POSTMORTEM INSIGHTS
            </span>


            <h2>

              The issue was the

              <strong>
                {" "}process, not the team's ability.
              </strong>

            </h2>

          </div>


          <div className="s4budget-insights-grid">

            {/* SUMMARY */}

            <article
              className="
                s4budget-insight-card
                s4budget-insight-pink
              "
            >

              <div className="s4budget-insight-icon">

                <Clock3 size={28} />

              </div>


              <span>
                SUMMARY
              </span>


              <h3>
                Work was compressed into the final day.
              </h3>


              <p>
                Task assignment happened late, which reduced
                the amount of time available for completing
                and reviewing the Sprint 3 deliverables.
              </p>

            </article>


            {/* WHAT WENT WELL */}

            <article
              className="
                s4budget-insight-card
                s4budget-insight-green
              "
            >

              <div className="s4budget-insight-icon">

                <CheckCircle2 size={28} />

              </div>


              <span>
                WHAT WENT WELL
              </span>


              <h3>
                Once assigned, the work moved quickly.
              </h3>


              <p>
                After responsibilities were distributed, the
                team was able to make rapid progress and
                complete the required work before submission.
              </p>

            </article>


            {/* IMPROVEMENT */}

            <article
              className="
                s4budget-insight-card
                s4budget-insight-orange
              "
            >

              <div className="s4budget-insight-icon">

                <TimerReset size={28} />

              </div>


              <span>
                MAIN IMPROVEMENT
              </span>


              <h3>
                Start coordination earlier.
              </h3>


              <p>
                Earlier task assignment, internal deadlines,
                recurring meetings, and more consistent
                communication should reduce last-minute work.
              </p>

            </article>

          </div>


          {/* ==================================================
              CONTRIBUTING CAUSES
          ================================================== */}

          <div className="s4budget-causes">

            <div className="s4budget-causes-copy">

              <span>
                CONTRIBUTING CAUSES
              </span>


              <h3>
                What created the schedule pressure?
              </h3>


              <p>
                The postmortem identified several process and
                coordination factors that contributed to the
                compressed work window.
              </p>

            </div>


            <div className="s4budget-causes-list">

              {causes.map((cause, index) => (

                <div key={cause}>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  <p>
                    {cause}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          ACTION ITEMS
      ================================================== */}

      <section className="s4budget-actions-section">

        <div className="s4budget-shell">

          <div className="s4budget-section-heading">

            <span>
              ACTION ITEMS
            </span>


            <h2>

              Turn the retrospective

              <strong>
                {" "}into changes.
              </strong>

            </h2>


            <p>
              The team assigned concrete process improvements
              with owners and target dates.
            </p>

          </div>


          <div className="s4budget-actions-table">

            <div className="s4budget-actions-header">

              <span>
                ACTION
              </span>

              <span>
                OWNER
              </span>

              <span>
                DATE
              </span>

            </div>


            {actions.map((item, index) => (

              <div
                className="s4budget-action-row"
                key={item.action}
              >

                <div className="s4budget-action-name">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  <strong>
                    {item.action}
                  </strong>

                </div>


                <div className="s4budget-action-owner">

                  <Users size={18} />

                  {item.owner}

                </div>


                <div className="s4budget-action-date">

                  <CalendarDays size={18} />

                  {item.date}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          ERROR BUDGET POLICY
      ================================================== */}

      <section className="s4budget-policy-section">

        <div className="s4budget-shell">

          <div className="s4budget-policy-heading">

            <span>
              ERROR BUDGET POLICY
            </span>


            <h2>

              When a target is missed,

              <strong>
                {" "}the response is already defined.
              </strong>

            </h2>


            <p>
              Reliability targets only become actionable when
              the team agrees on what changes once the error
              budget has been spent.
            </p>

          </div>


          <div className="s4budget-policy-grid">

            {/* AVAILABILITY */}

            <article
              className="
                s4budget-policy-card
                s4budget-policy-pink
              "
            >

              <div className="s4budget-policy-top">

                <div>

                  <span>
                    OBJECTIVE 01
                  </span>

                  <h3>
                    Availability
                  </h3>

                </div>


                <strong>
                  ≥ 99%
                </strong>

              </div>


              <div className="s4budget-policy-row">

                <span>
                  BUDGET
                </span>

                <p>
                  Approximately 40 failed checks per sprint.
                </p>

              </div>


              <div className="s4budget-policy-row">

                <span>
                  POLICY ACTION
                </span>

                <p>
                  Pause feature work and find and fix the cause
                  of the downtime.
                </p>

              </div>


              <div className="s4budget-policy-row">

                <span>
                  OWNER
                </span>

                <p>
                  Incident Commander
                </p>

              </div>


              <div className="s4budget-policy-row">

                <span>
                  NOTIFY
                </span>

                <p>
                  Instructor in the Friday update.
                </p>

              </div>

            </article>


            {/* FRESHNESS */}

            <article
              className="
                s4budget-policy-card
                s4budget-policy-purple
              "
            >

              <div className="s4budget-policy-top">

                <div>

                  <span>
                    OBJECTIVE 02
                  </span>

                  <h3>
                    Information Freshness
                  </h3>

                </div>


                <strong>
                  ≥ 95%
                </strong>

              </div>


              <div className="s4budget-policy-row">

                <span>
                  BUDGET
                </span>

                <p>
                  No explicit count is listed in the submitted
                  document.
                </p>

              </div>


              <div className="s4budget-policy-row">

                <span>
                  POLICY ACTION
                </span>

                <p>
                  Hold event updates until slow-updating event
                  pages are reviewed and fixed.
                </p>

              </div>


              <div className="s4budget-policy-row">

                <span>
                  OWNER
                </span>

                <p>
                  Incident Commander
                </p>

              </div>


              <div className="s4budget-policy-row">

                <span>
                  NOTIFY
                </span>

                <p>
                  Instructor in the Friday update.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          ESCALATION PATH
          OPTION 3 — PRIORITY GAUGE
      ================================================== */}

      <section className="s4budget-escalation-section">

        <div className="s4budget-shell">

          <div className="s4budget-escalation-top">

            {/* HEADING */}

            <div className="s4budget-escalation-heading">

              <span>
                ESCALATION PATH
              </span>


              <h2>

                Severity determines

                <strong>
                  {" "}how fast we respond.
                </strong>

              </h2>


              <p>
                Each severity level defines how quickly the
                team begins fixing the issue and when the
                instructor should be notified.
              </p>

            </div>


            {/* ==================================================
                PRIORITY GAUGE
            ================================================== */}

            <div className="s4budget-priority-visual">

              <span className="s4budget-priority-label">
                RESPONSE PRIORITY
              </span>


              <div className="s4budget-priority-gauge">

                <div className="s4budget-priority-arc">

                  <div className="s4budget-priority-arc-inner"></div>

                </div>


                <div className="s4budget-priority-needle"></div>


                <div className="s4budget-priority-center"></div>

              </div>


              <div className="s4budget-priority-scale">

                <span>
                  LOW
                </span>

                <span>
                  MEDIUM
                </span>

                <span>
                  HIGH
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              SEVERITY CARDS
          ================================================== */}

          <div className="s4budget-severity-grid">

            {severityLevels.map((item) => {

              const Icon = item.icon;

              return (

                <article
                  key={item.level}
                  className={`
                    s4budget-severity-card
                    s4budget-severity-${item.tone}
                  `}
                >

                  <div className="s4budget-severity-card-top">

                    <div className="s4budget-severity-icon">

                      <Icon size={23} />

                    </div>


                    <span className="s4budget-severity-label">
                      {item.level}
                    </span>

                  </div>


                  <h3>
                    {item.example}
                  </h3>


                  <div className="s4budget-severity-info">

                    <div>

                      <Clock3 size={21} />

                      <span>
                        START FIXING
                      </span>

                      <strong>
                        {item.response}
                      </strong>

                    </div>


                    <div>

                      <MessageSquare size={21} />

                      <span>
                        TELL INSTRUCTOR
                      </span>

                      <strong>
                        {item.notify}
                      </strong>

                    </div>

                  </div>

                </article>

              );
            })}

          </div>


          {/* ==================================================
              INCIDENT ROLES
          ================================================== */}

          <div className="s4budget-roles">

            <div className="s4budget-roles-heading">

              <span>
                INCIDENT ROLES
              </span>


              <h3>
                Responsibilities are assigned before an incident.
              </h3>


              <p>
                Each role has a specific responsibility so the
                team can respond without confusion when an
                issue occurs.
              </p>

            </div>


            <div className="s4budget-role-grid">

              {roles.map((item) => {

                const Icon = item.icon;

                return (

                  <article key={item.role}>

                    <div className="s4budget-role-icon">

                      <Icon size={25} />

                    </div>


                    <span>
                      {item.role}
                    </span>


                    <h4>
                      {item.owner}
                    </h4>


                    <p>
                      {item.job}
                    </p>

                  </article>

                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          BOTTOM NAVIGATION
      ================================================== */}

      <section className="s4budget-navigation-section">

        <div className="s4budget-shell">

          <div className="s4budget-navigation-grid">

            <Link
              to="/sprint-4/sli"
              className="s4budget-nav-card"
            >

              <ArrowLeft size={23} />


              <div>

                <span>
                  PREVIOUS
                </span>

                <strong>
                  Service Levels
                </strong>

              </div>

            </Link>


            <Link
              to="/sprint-4"
              className="
                s4budget-nav-card
                s4budget-nav-home
              "
            >

              <div>

                <span>
                  SPRINT 4
                </span>

                <strong>
                  Return to Sprint 4 Overview
                </strong>

              </div>


              <Sparkles size={23} />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


export default BudgetPostmortem;