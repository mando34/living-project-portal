import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Target,
  CheckCircle2,
  CircleX,
  Clock3,
  ShieldAlert,
  Lightbulb,
  Trophy,
  UserCog,
  CalendarCheck,
  Wifi,
  CreditCard,
  BarChart3,
  Users,
  MessageCircle,
  Sparkles,
  PackageCheck,
    ClipboardCheck,
  UsersRound,
  CalendarDays,
  PlayCircle,
  TrendingUp,
  CalendarClock,
  Layers3,
  FilePenLine,
  MessagesSquare
} from "lucide-react";

import "./Sprint1Subpages.css";

function ProjectCharter() {
  const [activeDeferredTab, setActiveDeferredTab] =
    useState("All");

  /* ==========================================
     SCOPE IN
  ========================================== */

  const scopeIn = [
    "User account creation and authentication",

    "Creation of a new party, event, or social gathering",

    "Event information including event name, date, time, location, expected number of guests, event type, and estimated budget",

    "Event planning checklist",

    "Centralized event dashboard",

    "Search and display of local vendors or service providers",

    "Vendor categories including Food & Catering, Entertainment, Tables & Chairs, Decorations, and Venues",

    "Vendor information including business name, services offered, estimated pricing, contact information, location, and availability when accessible",

    "Ability to save vendors or services being considered",

    "Invitation creation",

    "Shareable event invitation or invitation link",

    "Guest RSVP functionality",

    "Ability for the event organizer to update event information",
  ];

  /* ==========================================
     SCOPE OUT
  ========================================== */

  const scopeOut = [
    "Direct payment processing",

    "Processing financial transactions between users and vendors",

    "Guaranteeing vendor availability or pricing",

    "Contract negotiations between users and vendors",

    "Acting as the legal representative of a vendor or event organizer",

    "Providing catering, entertainment, venue, or rental services directly",

    "Transportation or ride sharing coordination",

    "Hotel or travel reservations",

    "Full professional event-management services",

    "Automatic purchasing of food or supplies",

    "Management of very large professional events such as conventions, concerts, or festivals",

    "Full accounting or financial-management functionality",

    "Guaranteeing that invited guests will attend after submitting an RSVP",
  ];

  /* ==========================================
     DEFERRED FEATURES
  ========================================== */

  const deferredFeatures = [
    {
      title: "Direct vendor booking",
      category: "Vendor Features",
      icon: CalendarCheck,
    },

    {
      title: "Real-time vendor availability",
      category: "Vendor Features",
      icon: Wifi,
    },

    {
      title: "Online payments and deposits",
      category: "Payments & Budgeting",
      icon: CreditCard,
    },

    {
      title: "Advanced budget tracking",
      category: "Payments & Budgeting",
      icon: BarChart3,
    },

    {
      title: "Expense splitting between attendees",
      category: "Payments & Budgeting",
      icon: Users,
    },

    {
      title: "Collaborative planning",
      subtitle: "Multiple organizers",
      category: "Collaboration",
      icon: Users,
    },

    {
      title: "Vendor to customer messaging",
      category: "Collaboration",
      icon: MessageCircle,
    },

    {
      title: "AI-generated event themes",
      subtitle: "Based on local vendor services",
      category: "AI & Automation",
      icon: Sparkles,
    },

    {
      title: "Reservation and order tracking",
      category: "Other",
      icon: PackageCheck,
    },
  ];

  const deferredTabs = [
    "All",
    "Vendor Features",
    "Payments & Budgeting",
    "Collaboration",
    "AI & Automation",
    "Other",
  ];

  const filteredDeferredFeatures =
    activeDeferredTab === "All"
      ? deferredFeatures
      : deferredFeatures.filter(
          (feature) =>
            feature.category === activeDeferredTab
        );

  return (
    <div className="s1-subpage">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="s1-subpage-hero">

        <div className="s1-subpage-hero-inner">

          <div>

            <Link
              to="/sprint-1"
              className="s1-subpage-back"
            >
              <ArrowLeft size={16} />

              Back to Sprint 1
            </Link>


            <span className="s1-subpage-label">
              SPRINT 1 · PROJECT CHARTER
            </span>


            <h1>
              Project Charter
            </h1>


            <p>
              The Project Charter defines Festivo,
              its business objective, initial project
              boundaries, assumptions, constraints,
              success criteria, and project-management
              authority.
            </p>

          </div>


          <div className="s1-subpage-hero-icon">
            <BookOpen size={66} />
          </div>

        </div>

      </section>


      {/* ==========================================
          PAGE CONTENT
      ========================================== */}

      <main className="s1-subpage-content">


        {/* ==========================================
            PAGE NAVIGATION
        ========================================== */}

        <nav className="s1-subpage-navigation">

          <a href="#overview">
            Overview
          </a>

          <a href="#objective">
            Objective
          </a>

          <a href="#scope">
            Scope
          </a>

          <a href="#constraints">
            Constraints
          </a>

          <a href="#assumptions">
            Assumptions
          </a>

          <a href="#success">
            Success Criteria
          </a>

          <a href="#authority">
            PM Authority
          </a>

        </nav>


        {/* ==========================================
            OVERVIEW
        ========================================== */}

        <section
          id="overview"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              OVERVIEW
            </span>

            <h2>
              What is Festivo?
            </h2>

            <p>
              Festivo is a centralized platform
              designed to help individuals organize
              parties, social gatherings, and other
              events by bringing common planning
              activities and tasks into one location.
            </p>

          </div>

        </section>


        {/* ==========================================
            BUSINESS OBJECTIVE
        ========================================== */}

        <section
          id="objective"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              BUSINESS OBJECTIVE
            </span>

            <h2>
              Simplify event planning.
            </h2>

          </div>


          <div className="s1-info-card">

            <div className="s1-info-card-icon">
              <Target size={25} />
            </div>


            <h3>
              Centralize the planning process
            </h3>


            <p>
              The objective of Festivo is to simplify
              event planning by centralizing guest
              coordination, vendor research, event
              information, and resource estimates that
              would otherwise be managed across
              multiple tools.
            </p>

          </div>

        </section>


        {/* ==========================================
            PROJECT BOUNDARIES / SCOPE
        ========================================== */}

        <section
          id="scope"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              PROJECT BOUNDARIES
            </span>

            <h2>
              Scope
            </h2>

            <p>
              The Project Charter separates Festivo
              into functionality included in the
              initial release, functionality outside
              the initial project, and features that
              may be considered in future versions.
            </p>

          </div>


          {/* ==========================================
              SCOPE IN / OUT
          ========================================== */}

          <div className="scope-boundary-grid">


            {/* SCOPE IN */}

            <article
              className="
                scope-boundary-card
                scope-in-card
              "
            >

              <div className="scope-card-header">

                <div
                  className="
                    scope-header-icon
                    scope-in-icon
                  "
                >
                  <CheckCircle2 size={28} />
                </div>


                <div>

                  <h3>
                    Scope In
                  </h3>

                  <p>
                    What will be included in
                    the initial version
                  </p>

                </div>

              </div>


              <div className="scope-card-divider"></div>


              <ul className="scope-list">

                {scopeIn.map((item) => (

                  <li key={item}>

                    <span
                      className="
                        scope-list-icon
                        scope-list-in
                      "
                    >
                      <CheckCircle2 size={15} />
                    </span>

                    <span>
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            </article>


            {/* SCOPE OUT */}

            <article
              className="
                scope-boundary-card
                scope-out-card
              "
            >

              <div className="scope-card-header">

                <div
                  className="
                    scope-header-icon
                    scope-out-icon
                  "
                >
                  <CircleX size={28} />
                </div>


                <div>

                  <h3>
                    Scope Out
                  </h3>

                  <p>
                    What will not be included
                    in the initial version
                  </p>

                </div>

              </div>


              <div className="scope-card-divider"></div>


              <ul className="scope-list">

                {scopeOut.map((item) => (

                  <li key={item}>

                    <span
                      className="
                        scope-list-icon
                        scope-list-out
                      "
                    >
                      <CircleX size={15} />
                    </span>

                    <span>
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            </article>

          </div>


          {/* ==========================================
              DEFERRED
          ========================================== */}

          <div className="deferred-section">


            {/* HEADER */}

            <div className="deferred-header">

              <div className="deferred-heading">

                <div className="deferred-icon">
                  <Clock3 size={29} />
                </div>


                <div>

                  <h3>
                    Deferred
                  </h3>

                  <p>
                    Features that may be considered
                    for future versions
                  </p>

                </div>

              </div>


              <div className="deferred-message">

                <Sparkles size={18} />

                <span>
                  Ideas for what's next!
                </span>

              </div>

            </div>


            {/* ==========================================
                TABS
            ========================================== */}

            {/* <div className="deferred-tabs">

              {deferredTabs.map((tab) => (

                <button
                  key={tab}
                  type="button"
                  onClick={() =>
                    setActiveDeferredTab(tab)
                  }
                  className={
                    activeDeferredTab === tab
                      ? `
                          deferred-tab
                          deferred-tab-active
                        `
                      : "deferred-tab"
                  }
                >
                  {tab}
                </button>

              ))}

            </div> */}


            {/* ==========================================
                FEATURE CARDS
            ========================================== */}

            <div className="deferred-grid">

              {filteredDeferredFeatures.map(
                (feature) => {

                  const Icon = feature.icon;

                  return (
                    <article
                      className="deferred-feature-card"
                      key={feature.title}
                    >

                      <div className="deferred-feature-icon">
                        <Icon
                          size={24}
                          strokeWidth={2}
                        />
                      </div>


                      <div>

                        <h4>
                          {feature.title}
                        </h4>


                        {feature.subtitle && (

                          <p>
                            {feature.subtitle}
                          </p>

                        )}

                      </div>

                    </article>
                  );
                }
              )}

            </div>


            {/* ==========================================
                DEFERRED FOOTER
            ========================================== */}

            {/* <div className="deferred-footer">

              <span className="deferred-footer-confetti">
                ✦
              </span>

              <p>
                Same vision.

                <strong>
                  {" "}
                  Even bigger possibilities.
                </strong>
              </p>

              <span className="deferred-footer-heart">
                ♡
              </span>

            </div> */}

          </div>

        </section>


        {/* ==========================================
            CONSTRAINTS
        ========================================== */}

        <section
          id="constraints"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              CONSTRAINTS
            </span>

            <h2>
              What limits the project?
            </h2>

            <p>
              Festivo must be developed within
              several practical limitations related
              to the semester, available personnel,
              and vendor information.
            </p>

          </div>


          <div className="s1-card-grid">


            {/* ACADEMIC SCHEDULE */}

            <article className="s1-info-card">

              <div className="s1-info-card-icon">
                <ShieldAlert size={25} />
              </div>

              <h3>
                Academic Schedule
              </h3>

              <p>
                Development must occur within the
                timeframe established by the course
                and semester.
              </p>

            </article>


            {/* TEAM SIZE */}

            <article className="s1-info-card">

              <div className="s1-info-card-icon">
                <Users size={25} />
              </div>

              <h3>
                Team Size
              </h3>

              <p>
                The application will be designed and
                developed by a student project team
                with limited personnel and
                development time.
              </p>

            </article>


            {/* VENDOR DATA */}

            <article className="s1-info-card">

              <div className="s1-info-card-icon">
                <BookOpen size={25} />
              </div>

              <h3>
                Vendor Data
              </h3>

              <p>
                The team may not have access to
                real-time vendor pricing or
                availability. Information may depend on publicly
                available sources, manually entered
                information, sample data, or
                accessible APIs.
              </p>

            </article>

            {/* DATA ACCURACY */}
             <article className="s1-info-card">

              <div className="s1-info-card-icon">
                <ClipboardCheck size={25} />
              </div>

              <h3>
                Data Accuracy
              </h3>

              <p>
                Vendor pricing, availability, business hours, and services can change. 
                The application may not always be to guarantee that displayed vendor 
                information is correct
              </p>

            </article>

            

          </div>

        </section>


        {/* ==========================================
            ASSUMPTIONS
        ========================================== */}

        <section
          id="assumptions"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              ASSUMPTIONS
            </span>

            <h2>
              What are we assuming?
            </h2>

            <p>
              Development and planning decisions for
              Festivo are based on several expected
              conditions about users, vendors, and
              the development environment.
            </p>

          </div>


          <div className="s1-info-card">

            <div className="s1-info-card-icon">
              <Lightbulb size={25} />
            </div>


            <ul className="s1-check-list">

              <li className="s1-check-item">
                <CheckCircle2 size={17} />

                Users have access to an
                internet-connected device.
              </li>


              <li className="s1-check-item">
                <CheckCircle2 size={17} />

                Users are willing to organize event
                information digitally.
              </li>


              <li className="s1-check-item">
                <CheckCircle2 size={17} />

                Event organizers will enter
                reasonably accurate event
                information.
              </li>


              <li className="s1-check-item">
                <CheckCircle2 size={17} />

                Local vendors have enough publicly
                available information to allow users
                to research basic services.
              </li>


              <li className="s1-check-item">
                <CheckCircle2 size={17} />

                Users will contact vendors directly
                when confirmation of pricing,
                services, or availability is
                required.
              </li>


              <li className="s1-check-item">
                <CheckCircle2 size={17} />

                The majority of users will be
                planning small to medium-sized social
                gatherings rather than large
                professional events.
              </li>


              <li className="s1-check-item">
                <CheckCircle2 size={17} />

                The initial version does not need
                every possible event-planning feature
                to provide value.
              </li>


              <li className="s1-check-item">
                <CheckCircle2 size={17} />

                Development tools and hosting
                platforms required for the project
                will remain available throughout
                development.
              </li>

            </ul>

          </div>

        </section>


        {/* ==========================================
            SUCCESS CRITERIA
        ========================================== */}

        <section
          id="success"
          className="s1-sub-section"
        >

          <div className="s1-sub-section-heading">

            <span>
              SUCCESS CRITERIA
            </span>

            <h2>
              What does success look like?
            </h2>

            <p>
              Festivo will be considered successful
              if the completed application allows a
              user to perform the core
              event-planning workflow from beginning
              to end.
            </p>

          </div>


          <div className="s1-info-card">

            <div className="s1-info-card-icon">
              <Trophy size={25} />
            </div>


            <div className="success-workflow">

              <div className="success-step">
                <span>01</span>
                Create an event
              </div>

              <div className="success-step">
                <span>02</span>
                Enter and modify event details
              </div>

              <div className="success-step">
                <span>03</span>
                Organize information from one dashboard
              </div>

              <div className="success-step">
                <span>04</span>
                Search local vendors and services
              </div>

              <div className="success-step">
                <span>05</span>
                Save vendors being considered
              </div>

              <div className="success-step">
                <span>06</span>
                Create an invitation
              </div>

              <div className="success-step">
                <span>07</span>
                Share the invitation
              </div>

              <div className="success-step">
                <span>08</span>
                Allow guests to submit an RSVP
              </div>

              <div className="success-step">
                <span>09</span>
                View updated attendance information
              </div>

              <div className="success-step">
                <span>10</span>
                Estimate resources such as food,
                tables, or chairs
              </div>

            </div>

          </div>

        </section>


        {/* ==========================================
            PM AUTHORITY
        ========================================== */}

<section
  id="authority"
  className="s1-sub-section"
>

  <div className="s1-sub-section-heading">

    <span>
      PROJECT MANAGEMENT
    </span>

    <h2>
      PM Authority
    </h2>

    <p>
      The Project Manager coordinates the project team and maintains
      alignment between the project's objectives, approved scope,
      schedule, and deliverables.
    </p>

  </div>


  <div className="pm-authority-layout">

    {/* ==========================================
        LEFT HIGHLIGHT CARD
    ========================================== */}

    <aside className="pm-authority-highlight">

      <span className="pm-highlight-label">
        PROJECT MANAGER
      </span>

      <h3>
        Keep the team aligned.
        <span> Keep the project moving.</span>
      </h3>

      <p>
        The Project Manager is responsible for coordinating the team,
        maintaining project direction, and helping ensure that work stays
        aligned with the approved scope, schedule, priorities, and
        deliverables.
      </p>


      {/* <div className="pm-highlight-visual">

        <div className="pm-highlight-icon">
          <UserCog
            size={58}
            strokeWidth={1.7}
          />
        </div>

        <div className="pm-highlight-quote">
          “Drive the team.
          <br />
          Keep the project on track.”
        </div>

      </div> */}

    </aside>


    {/* ==========================================
        RIGHT RESPONSIBILITIES
    ========================================== */}

    <div className="pm-authority-responsibilities">

      <div className="pm-responsibilities-header">

        <span>
          KEY AUTHORITIES & RESPONSIBILITIES
        </span>

        <h3>
          What the Project Manager can coordinate
        </h3>

      </div>


      <div className="pm-responsibility-list">

        {/* 01 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            01
          </div>

          <div className="pm-responsibility-icon pm-icon-pink">
            <ClipboardCheck size={20} />
          </div>

          <div>
            <h4>
              Assign Project Tasks
            </h4>

            <p>
              Assign and coordinate project tasks among team members.
            </p>
          </div>

        </article>


        {/* 02 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            02
          </div>

          <div className="pm-responsibility-icon pm-icon-purple">
            <UsersRound size={20} />
          </div>

          <div>
            <h4>
              Coordinate Team Members
            </h4>

            <p>
              Coordinate work between team members and keep responsibilities
              aligned.
            </p>
          </div>

        </article>


        {/* 03 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            03
          </div>

          <div className="pm-responsibility-icon pm-icon-blue">
            <CalendarDays size={20} />
          </div>

          <div>
            <h4>
              Schedule Project Sprints
            </h4>

            <p>
              Establish sprint timing and coordinate the team's sprint schedule.
            </p>
          </div>

        </article>


        {/* 04 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            04
          </div>

          <div className="pm-responsibility-icon pm-icon-green">
            <PlayCircle size={20} />
          </div>

          <div>
            <h4>
              Conduct Project Sprints
            </h4>

            <p>
              Guide sprint execution and coordinate project work throughout each sprint.
            </p>
          </div>

        </article>


        {/* 05 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            05
          </div>

          <div className="pm-responsibility-icon pm-icon-orange">
            <TrendingUp size={20} />
          </div>

          <div>
            <h4>
              Track Project Progress
            </h4>

            <p>
              Monitor project progress and identify work that needs attention.
            </p>
          </div>

        </article>


        {/* 06 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            06
          </div>

          <div className="pm-responsibility-icon pm-icon-teal">
            <Clock3 size={20} />
          </div>

          <div>
            <h4>
              Track Upcoming Deadlines
            </h4>

            <p>
              Monitor upcoming project deadlines and important milestones.
            </p>
          </div>

        </article>


        {/* 07 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            07
          </div>

          <div className="pm-responsibility-icon pm-icon-orange">
            <CalendarClock size={20} />
          </div>

          <div>
            <h4>
              Maintain the Project Schedule
            </h4>

            <p>
              Keep the project schedule current and aligned with expected deliverables.
            </p>
          </div>

        </article>


        {/* 08 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            08
          </div>

          <div className="pm-responsibility-icon pm-icon-pink">
            <Target size={20} />
          </div>

          <div>
            <h4>
              Coordinate Project Priorities
            </h4>

            <p>
              Coordinate decisions involving project priorities and current needs.
            </p>
          </div>

        </article>


        {/* 09 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            09
          </div>

          <div className="pm-responsibility-icon pm-icon-blue">
            <Layers3 size={20} />
          </div>

          <div>
            <h4>
              Maintain Scope Alignment
            </h4>

            <p>
              Ensure development activities remain aligned with the approved project scope.
            </p>
          </div>

        </article>


        {/* 10 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            10
          </div>

          <div className="pm-responsibility-icon pm-icon-purple">
            <FilePenLine size={20} />
          </div>

          <div>
            <h4>
              Document Scope Changes
            </h4>

            <p>
              Document proposed changes to the project's approved scope.
            </p>
          </div>

        </article>


        {/* 11 */}
        <article className="pm-responsibility-item">

          <div className="pm-responsibility-number">
            11
          </div>

          <div className="pm-responsibility-icon pm-icon-teal">
            <MessagesSquare size={20} />
          </div>

          <div>
            <h4>
              Coordinate Stakeholder Communication
            </h4>

            <p>
              Coordinate communication between team members and project stakeholders.
            </p>
          </div>

        </article>

      </div>

    </div>

  </div>

</section>


        {/* ==========================================
            NEXT SUBPAGE
        ========================================== */}

        <div className="s1-next-page">

          <div>

            <span>
              NEXT
            </span>

            <h3>
              Business Strategy
            </h3>

          </div>


          <Link
            to="/sprint-1/business-strategy"
            className="s1-next-button"
          >
            Continue

            <ArrowRight size={17} />
          </Link>

        </div>

      </main>

    </div>
  );
}

export default ProjectCharter;