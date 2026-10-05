import { Link } from "react-router-dom";

import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Cloud,
  Coins,
  Database,
  Download,
  Gauge,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  WalletCards,
  Wrench,
} from "lucide-react";

import "./Sprint2SubPages.css";


function OnePageBudget() {

  /* ========================================================
     DATA
  ======================================================== */

  const workPackages = [
    {
      name: "Customer App, Authentication, Event Creation & Dashboard",
      role: "Developers",
      hours: "1,100",
      icon: Smartphone,
    },
    {
      name: "Backend, Database, Accounts & APIs",
      role: "Developers",
      hours: "850",
      icon: Database,
    },
    {
      name: "Vendor Search, Location Services & Vendor Data",
      role: "Developers",
      hours: "450",
      icon: Layers3,
    },
    {
      name: "Invitations, RSVP & Attendance Planning",
      role: "Developers",
      hours: "400",
      icon: Users,
    },
    {
      name: "Testing & Quality Assurance",
      role: "QA",
      hours: "600",
      icon: ShieldCheck,
    },
    {
      name: "User Research, Interface Design & UX",
      role: "UX",
      hours: "300",
      icon: Sparkles,
    },
    {
      name: "CI/CD, Deployment & Launch",
      role: "DevOps",
      hours: "345.2",
      icon: Cloud,
    },
  ];


  const staffing = [
    {
      role: "Project Manager",
      fte: "7.00",
      cost: "$91,000",
    },
    {
      role: "Developers",
      fte: "21.54",
      cost: "$280,020",
    },
    {
      role: "Quality Assurance",
      fte: "4.62",
      cost: "$60,060",
    },
    {
      role: "User Experience",
      fte: "2.31",
      cost: "$30,030",
    },
    {
      role: "DevOps",
      fte: "2.66",
      cost: "$34,580",
    },
  ];


  const budgetBreakdown = [
    {
      label: "Labor",
      amount: "$495,690",
      width: "88.4%",
      note: "88.4% of the base build",
      className: "opb-budget-pink",
    },
    {
      label: "Non-Labor",
      amount: "$65,000",
      width: "11.6%",
      note: "11.6% of the base build",
      className: "opb-budget-purple",
    },
  ];


  const monthlyBudget = [
    {
      month: "M1",
      labor: "$64,350",
      nonLabor: "$18,000",
      total: "$82,350",
      cumulative: "$82,350",
      width: "94.6%",
    },
    {
      month: "M2",
      labor: "$69,550",
      nonLabor: "$7,000",
      total: "$76,550",
      cumulative: "$158,900",
      width: "87.9%",
    },
    {
      month: "M3",
      labor: "$72,150",
      nonLabor: "$7,000",
      total: "$79,150",
      cumulative: "$238,050",
      width: "90.9%",
    },
    {
      month: "M4",
      labor: "$73,450",
      nonLabor: "$7,000",
      total: "$80,450",
      cumulative: "$318,500",
      width: "92.4%",
    },
    {
      month: "M5",
      labor: "$74,880",
      nonLabor: "$7,000",
      total: "$81,880",
      cumulative: "$400,380",
      width: "94.1%",
    },
    {
      month: "M6",
      labor: "$76,050",
      nonLabor: "$11,000",
      total: "$87,050",
      cumulative: "$487,430",
      width: "100%",
    },
    {
      month: "M7",
      labor: "$65,260",
      nonLabor: "$8,000",
      total: "$73,260",
      cumulative: "$560,690",
      width: "84.2%",
    },
  ];


  const operatingCosts = [
    {
      name: "Support & Maintenance",
      amount: "$117,000",
      icon: Wrench,
    },
    {
      name: "Hosting, Database & Storage",
      amount: "$30,000",
      icon: Cloud,
    },
    {
      name: "Maps / Vendor APIs",
      amount: "$18,000",
      icon: Database,
    },
    {
      name: "Email / SMS / Notifications",
      amount: "$9,000",
      icon: Smartphone,
    },
    {
      name: "Monitoring / Licenses / Services",
      amount: "$12,000",
      icon: Gauge,
    },
  ];


  const risks = [
    {
      title: "Vendor / location / API integration complexity",
      chance: "40%",
      impact: "$50,000",
      emv: "$20,000",
    },
    {
      title: "Scope expansion into booking, payments, or vendor features",
      chance: "30%",
      impact: "$75,000",
      emv: "$22,500",
    },
    {
      title: "Scaling, app-store, security, or deployment rework",
      chance: "25%",
      impact: "$45,000",
      emv: "$11,250",
    },
  ];


  const assumptions = [
    {
      text: "Seven-month build with a two-year benefit horizon.",
      owner: "Sponsor",
    },
    {
      text: "Apple and Android support from one shared codebase.",
      owner: "Technical Lead",
    },
    {
      text: "Initial launch limited to one regional/local market.",
      owner: "Sponsor / Product Owner",
    },
    {
      text: "Vendor onboarding remains limited during initial launch.",
      owner: "Project Manager",
    },
    {
      text: "Peak usage is about 5,000 daily active users and up to 500 concurrent users.",
      owner: "Technical Lead",
    },
  ];


  return (
    <div className="s2-subpage opb-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="opb-hero">

        <div className="opb-hero-inner">

          <div className="opb-hero-copy">

            <Link
              to="/sprint-2"
              className="s2-subpage-back"
            >
              <ArrowLeft size={16} />
              Back to Sprint 2
            </Link>


            <span className="s2-subpage-label">
              SPRINT 2 · ONE PAGE BUDGET
            </span>


            <h1>
              From Estimate
              <span> to Investment.</span>
            </h1>


            <p>
              The One Page Budget converts Festivo's estimated
              project effort into staffing, labor, infrastructure,
              risk reserves, operating expenses, and the final
              funding request required to deliver the first release.
            </p>


            <div className="opb-hero-tags">

              <span>
                <Gauge size={16} />
                4,045.2 Delivery Hours
              </span>

              <span>
                <Users size={16} />
                38.13 FTE-Months
              </span>

              <span>
                <Clock3 size={16} />
                7-Month Build
              </span>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="opb-hero-visual">

            <div className="opb-hero-blob"></div>


            <div className="opb-budget-sheet">

              <div className="opb-sheet-icon">
                <WalletCards size={38} />
              </div>


              <div className="opb-sheet-line opb-sheet-long"></div>

              <div className="opb-sheet-line opb-sheet-short"></div>


              <div className="opb-sheet-bars">

                <span></span>
                <span></span>
                <span></span>

              </div>

            </div>


            <div className="opb-floating-coins">
              <Coins size={48} />
            </div>


            <div className="opb-floating-rocket">
              <Rocket size={35} />
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          MAIN BUDGET SUMMARY
      ================================================== */}

      <section className="opb-main-summary">

        <div className="opb-main-budget-card">

          <span>
            TOTAL BUILD BUDGET REQUEST
          </span>

          <strong>
            $645,162
          </strong>

          <p>
            Estimated funding required to build and protect
            the Festivo first release.
          </p>


          <div className="opb-main-budget-metrics">

            <div>
              <span>
                BASE BUILD
              </span>

              <strong>
                $560,690
              </strong>
            </div>


            <div>
              <span>
                COST BASELINE
              </span>

              <strong>
                $614,440
              </strong>
            </div>


            <div>
              <span>
                OPERATING COST
              </span>

              <strong>
                $186K / yr
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          HOW WE BUILT THE BUDGET
      ================================================== */}

      <section className="opb-process-section">

        <div className="opb-section-heading">

          <span>
            HOW WE BUILT THE BUDGET
          </span>

          <h2>
            From project work to a
            <span> defendable budget.</span>
          </h2>

          <p>
            The budget builds on the estimation work completed earlier
            in Sprint 2. Each stage turns project knowledge into a more
            concrete financial commitment.
          </p>

        </div>


        <div className="opb-process-flow">

          {/* STEP 1 */}

          <article className="opb-process-card opb-process-pink">

            <div className="opb-process-number">
              01
            </div>

            <Target size={29} />

            <span>
              DEFINE THE WORK
            </span>

            <h3>
              Assumptions & Work Packages
            </h3>

            <p>
              Identify what must remain true and divide Festivo
              into pieces small enough to estimate.
            </p>


            <div className="opb-process-result">

              <strong>
                7
              </strong>

              <span>
                Work Packages
              </span>

            </div>

          </article>


          <div className="opb-process-arrow">
            →
          </div>


          {/* STEP 2 */}

          <article className="opb-process-card opb-process-purple">

            <div className="opb-process-number">
              02
            </div>

            <Users size={29} />

            <span>
              SIZE THE PEOPLE
            </span>

            <h3>
              Effort → FTE-Months
            </h3>

            <p>
              Convert estimated project hours into realistic
              productive staffing requirements.
            </p>


            <div className="opb-process-result">

              <strong>
                38.13
              </strong>

              <span>
                FTE-Months
              </span>

            </div>

          </article>


          <div className="opb-process-arrow">
            →
          </div>


          {/* STEP 3 */}

          <article className="opb-process-card opb-process-orange">

            <div className="opb-process-number">
              03
            </div>

            <Coins size={29} />

            <span>
              PRICE THE PROJECT
            </span>

            <h3>
              Labor + Non-Labor
            </h3>

            <p>
              Price the people needed to deliver Festivo and
              everything else required to build it.
            </p>


            <div className="opb-process-result">

              <strong>
                $560.7K
              </strong>

              <span>
                Base Build
              </span>

            </div>

          </article>


          <div className="opb-process-arrow">
            →
          </div>


          {/* STEP 4 */}

          <article className="opb-process-card opb-process-blue">

            <div className="opb-process-number">
              04
            </div>

            <ShieldCheck size={29} />

            <span>
              PROTECT & TRACK
            </span>

            <h3>
              Reserves & Time-Phasing
            </h3>

            <p>
              Price known risk, protect against unforeseen work,
              and place expected spending into the project schedule.
            </p>


            <div className="opb-process-result">

              <strong>
                $645.2K
              </strong>

              <span>
                Total Request
              </span>

            </div>

          </article>

        </div>

      </section>


      {/* ==================================================
          THREE IMPORTANT NUMBERS
      ================================================== */}

      <section className="opb-three-numbers-section">

        <div className="opb-section-heading">

          <span>
            THREE DIFFERENT NUMBERS
          </span>

          <h2>
            Estimate, baseline, and
            <span> budget request.</span>
          </h2>

          <p>
            These values represent different stages of the budgeting
            process and should not be treated as interchangeable.
          </p>

        </div>


        <div className="opb-number-flow">

          <article>

            <span>
              BASE BUILD ESTIMATE
            </span>

            <strong>
              $560,690
            </strong>

            <p>
              Labor plus the non-labor resources expected
              to complete the build.
            </p>

          </article>


          <div>
            +
            <small>
              $53,750
              <br />
              contingency
            </small>
          </div>


          <article className="opb-number-featured">

            <span>
              COST BASELINE
            </span>

            <strong>
              $614,440
            </strong>

            <p>
              Base build plus contingency for named project risks.
            </p>

          </article>


          <div>
            +
            <small>
              $30,722
              <br />
              management reserve
            </small>
          </div>


          <article className="opb-number-final">

            <span>
              TOTAL BUDGET REQUEST
            </span>

            <strong>
              $645,162
            </strong>

            <p>
              Full requested funding including protection
              for unforeseen work.
            </p>

          </article>

        </div>

      </section>


      {/* ==================================================
          EFFORT ESTIMATION
      ================================================== */}

      <section className="opb-effort-section">

        <div className="opb-section-heading">

          <span>
            STARTING WITH EFFORT
          </span>

          <h2>
            Before pricing the project,
            <span> we sized the work.</span>
          </h2>

        </div>


        <div className="opb-effort-comparison">

          <article>

            <span>
              BOTTOM-UP
            </span>

            <strong>
              4,045.2
            </strong>

            <p>
              hours
            </p>

          </article>


          <div className="opb-estimate-vs">
            VS
          </div>


          <article>

            <span>
              PERT EXPECTED VALUE
            </span>

            <strong>
              4,100
            </strong>

            <p>
              hours
            </p>

          </article>


          <div className="opb-estimate-match">

            <CheckCircle2 size={23} />

            <strong>
              ~1.4%
            </strong>

            <span>
              difference
            </span>

          </div>

        </div>


        <div className="opb-work-grid">

          {workPackages.map((item) => {

            const Icon = item.icon;

            return (

              <article
                className="opb-work-card"
                key={item.name}
              >

                <div className="opb-work-icon">
                  <Icon size={23} />
                </div>


                <span>
                  {item.role}
                </span>


                <h3>
                  {item.name}
                </h3>


                <div>

                  <strong>
                    {item.hours}
                  </strong>

                  <small>
                    hrs
                  </small>

                </div>

              </article>

            );
          })}

        </div>

      </section>


      {/* ==================================================
          STAFFING
      ================================================== */}

      <section className="opb-staffing-section">

        <div className="opb-section-heading">

          <span>
            SIZE THE PEOPLE
          </span>

          <h2>
            From hours to
            <span> staffing.</span>
          </h2>

          <p>
            Festivo uses 130 productive project hours per FTE-month,
            then adds one full-time Project Manager across the
            seven-month build.
          </p>

        </div>


        <div className="opb-staffing-wrapper">

          <div className="opb-staffing-card">

            <div className="opb-staffing-header">

              <span>
                ROLE
              </span>

              <span>
                FTE-MONTHS
              </span>

              <span>
                LABOR COST
              </span>

            </div>


            {staffing.map((role) => (

              <div
                className="opb-staffing-row"
                key={role.role}
              >

                <strong>
                  {role.role}
                </strong>

                <span>
                  {role.fte}
                </span>

                <span>
                  {role.cost}
                </span>

              </div>

            ))}


            <div className="opb-staffing-total">

              <strong>
                TOTAL
              </strong>

              <strong>
                38.13
              </strong>

              <strong>
                $495,690
              </strong>

            </div>

          </div>


          <aside className="opb-productivity-card">

            <Users size={34} />

            <span>
              PRODUCTIVE MONTH
            </span>

            <strong>
              130
            </strong>

            <p>
              productive project hours per FTE-month
            </p>


            <div>
              160 nominal hours
              <br />
              − meetings, support, email & time off
            </div>

          </aside>

        </div>

      </section>


      {/* ==================================================
          PRICE THE PROJECT
      ================================================== */}

      <section className="opb-price-section">

        <div className="opb-section-heading">

          <span>
            PRICE THE PROJECT
          </span>

          <h2>
            Where does the
            <span> $560,690</span> come from?
          </h2>

        </div>


        <div className="opb-price-layout">

          <div className="opb-budget-bars-card">

            {budgetBreakdown.map((item) => (

              <div
                className="opb-budget-row"
                key={item.label}
              >

                <div className="opb-budget-row-heading">

                  <span>
                    {item.label}
                  </span>

                  <strong>
                    {item.amount}
                  </strong>

                </div>


                <div className="opb-budget-track">

                  <div
                    className={`opb-budget-fill ${item.className}`}
                    style={{ width: item.width }}
                  ></div>

                </div>


                <small>
                  {item.note}
                </small>

              </div>

            ))}

          </div>


          <article className="opb-base-build-card">

            <span>
              BASE BUILD
            </span>

            <h3>
              $560,690
            </h3>


            <div>

              <span>
                Labor
              </span>

              <strong>
                $495,690
              </strong>

            </div>


            <div>

              <span>
                Non-Labor
              </span>

              <strong>
                $65,000
              </strong>

            </div>


            <p>
              Software delivery is primarily a people cost:
              labor represents 88.4% of Festivo's base build.
            </p>

          </article>

        </div>

      </section>


      {/* ==================================================
          RISK / RESERVES
      ================================================== */}

      <section className="opb-risk-section">

        <div className="opb-section-heading">

          <span>
            PROTECT THE BUDGET
          </span>

          <h2>
            Known risk versus
            <span> unforeseen risk.</span>
          </h2>

        </div>


        <div className="opb-reserve-comparison">

          <article className="opb-reserve-card opb-reserve-contingency">

            <ShieldCheck size={30} />

            <span>
              CONTINGENCY RESERVE
            </span>

            <strong>
              $53,750
            </strong>

            <h3>
              Known Unknowns
            </h3>

            <p>
              Covers risks the team has already identified
              and priced using expected monetary value.
            </p>

            <small>
              Included inside the cost baseline
            </small>

          </article>


          <article className="opb-reserve-card opb-reserve-management">

            <AlertTriangle size={30} />

            <span>
              MANAGEMENT RESERVE
            </span>

            <strong>
              $30,722
            </strong>

            <h3>
              Unknown Unknowns
            </h3>

            <p>
              Protects the project against significant
              unforeseen work that was not identified in advance.
            </p>

            <small>
              Added outside the cost baseline
            </small>

          </article>

        </div>


        <div className="opb-risk-grid">

          {risks.map((risk, index) => (

            <article
              className="opb-risk-card"
              key={risk.title}
            >

              <div className="opb-risk-number">
                0{index + 1}
              </div>


              <AlertTriangle size={23} />


              <h3>
                {risk.title}
              </h3>


              <div className="opb-risk-values">

                <div>
                  <span>
                    Chance
                  </span>

                  <strong>
                    {risk.chance}
                  </strong>
                </div>


                <div>
                  <span>
                    Impact
                  </span>

                  <strong>
                    {risk.impact}
                  </strong>
                </div>


                <div>
                  <span>
                    EMV
                  </span>

                  <strong>
                    {risk.emv}
                  </strong>
                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ==================================================
          TIME-PHASE THE BUDGET
      ================================================== */}

      <section className="opb-time-section">

        <div className="opb-section-heading">

          <span>
            TIME-PHASE THE BUDGET
          </span>

          <h2>
            When will the money
            <span> be spent?</span>
          </h2>

          <p>
            The base build is distributed across the seven-month
            development schedule so actual spending can later be
            compared against the plan.
          </p>

        </div>


        <div className="opb-time-layout">

          <div className="opb-time-chart">

            {monthlyBudget.map((month) => (

              <div
                className="opb-month-row"
                key={month.month}
              >

                <strong>
                  {month.month}
                </strong>


                <div className="opb-month-bar-track">

                  <div
                    className="opb-month-bar"
                    style={{ width: month.width }}
                  ></div>

                </div>


                <span>
                  {month.total}
                </span>

              </div>

            ))}

          </div>


          <div className="opb-time-table">

            <div className="opb-time-table-header">

              <span>
                Month
              </span>

              <span>
                Labor
              </span>

              <span>
                Non-Labor
              </span>

              <span>
                Cumulative
              </span>

            </div>


            {monthlyBudget.map((month) => (

              <div
                className="opb-time-table-row"
                key={month.month}
              >

                <strong>
                  {month.month}
                </strong>

                <span>
                  {month.labor}
                </span>

                <span>
                  {month.nonLabor}
                </span>

                <strong>
                  {month.cumulative}
                </strong>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          OPERATING COST
      ================================================== */}

      <section className="opb-operating-section">

        <div className="opb-operating-card">

          <div className="opb-operating-copy">

            <span>
              COST OF OWNERSHIP
            </span>

            <h2>
              The project does not stop costing money at launch.
            </h2>

            <p>
              Festivo must continue to be hosted, supported,
              monitored, maintained, and connected to external
              services after the initial build is complete.
            </p>

          </div>


          <div className="opb-operating-number">

            <span>
              ANNUAL OPERATING COST
            </span>

            <strong>
              $186,000
            </strong>

            <p>
              per year
            </p>

          </div>

        </div>


        <div className="opb-operating-grid">

          {operatingCosts.map((item) => {

            const Icon = item.icon;

            return (

              <article key={item.name}>

                <Icon size={22} />

                <span>
                  {item.name}
                </span>

                <strong>
                  {item.amount}
                </strong>

              </article>

            );
          })}

        </div>

      </section>


      {/* ==================================================
          VALUE
      ================================================== */}

      <section className="opb-value-section">

        <div className="opb-section-heading">

          <span>
            INVESTMENT → VALUE
          </span>

          <h2>
            What does this investment
            <span> make possible?</span>
          </h2>

        </div>


        <div className="opb-value-layout">

          <article className="opb-investment-card">

            <Coins size={37} />

            <span>
              INVESTMENT
            </span>

            <strong>
              $645,162
            </strong>

            <p>
              Total build budget request
            </p>

          </article>


          <div className="opb-value-arrow">
            →
          </div>


          <article className="opb-value-card">

            <span>
              FIRST RELEASE CAPABILITY
            </span>

            <div className="opb-value-list">

              <div>
                <CheckCircle2 size={18} />
                <p>Cross-platform customer application</p>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <p>Authentication, dashboard, and event creation</p>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <p>Backend, database, accounts, and APIs</p>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <p>Vendor search and location services</p>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <p>Invitations, RSVPs, and attendance workflows</p>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <p>Testing, UX, deployment, and launch support</p>
              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ==================================================
          ASSUMPTIONS
      ================================================== */}

      <section className="opb-assumptions-section">

        <div className="opb-assumptions-layout">

          <div>

            <span className="opb-small-label">
              OWNED ASSUMPTIONS
            </span>

            <h2>
              What must remain
              <span> true?</span>
            </h2>

            <p>
              If one of these cost-driving assumptions changes,
              the budget should be revisited.
            </p>

          </div>


          <div className="opb-assumption-list">

            {assumptions.map((assumption) => (

              <div key={assumption.text}>

                <CheckCircle2 size={18} />

                <div>

                  <p>
                    {assumption.text}
                  </p>

                  <span>
                    Owner: {assumption.owner}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          SANITY CHECKS
      ================================================== */}

      <section className="opb-check-section">

        <div className="opb-section-heading">

          <span>
            FINAL SANITY CHECK
          </span>

          <h2>
            Does the budget
            <span> hold together?</span>
          </h2>

        </div>


        <div className="opb-check-grid">

          <article className="opb-check-pass">

            <CheckCircle2 size={24} />

            <span>
              PASS
            </span>

            <h3>
              Totals Match
            </h3>

            <p>
              The staffing plan totals 38.13 FTE-months,
              matching the conversion from project effort.
            </p>

          </article>


          <article className="opb-check-pass">

            <CheckCircle2 size={24} />

            <span>
              PASS
            </span>

            <h3>
              Labor Share Is Plausible
            </h3>

            <p>
              Labor is 88.4% of the base build, which is
              reasonable for software delivery.
            </p>

          </article>


          <article className="opb-check-pass">

            <CheckCircle2 size={24} />

            <span>
              PASS
            </span>

            <h3>
              Estimates Agree
            </h3>

            <p>
              4,045.2 bottom-up hours and 4,100 PERT hours
              differ by only about 1.4%.
            </p>

          </article>


          <article className="opb-check-pass">

            <CheckCircle2 size={24} />

            <span>
              PASS
            </span>

            <h3>
              Reserves Trace to Risks
            </h3>

            <p>
              All $53,750 of contingency is tied directly
              to three named risks.
            </p>

          </article>


          <article className="opb-check-pending">

            <Clock3 size={24} />

            <span>
              PENDING
            </span>

            <h3>
              Top-Down Comparison
            </h3>

            <p>
              Compare the $645,162 request against a sponsor
              or team target budget once one is established.
            </p>

          </article>

        </div>

      </section>


      {/* ==================================================
          FINAL
      ================================================== */}

      <section className="opb-final-section">

        <div className="opb-final-card">

          <div>

            <span>
              BUDGET TAKEAWAY
            </span>

            <h2>
              $645,162 funds the build.
              <br />

              <strong>
                $186,000/year sustains it.
              </strong>
            </h2>

            <p>
              Festivo's budget connects project scope and estimation
              directly to staffing, cost, risk, and long-term ownership.
            </p>

          </div>


          <div className="opb-final-actions">

            <Link
              to="/sprint-2"
              className="opb-primary-button"
            >
              <ArrowLeft size={17} />
              Return to Sprint 2
            </Link>


            <a
              href="/documents/sprint-2/One Page Budget.pdf"
              download
              className="opb-secondary-button"
            >
              <Download size={17} />

              Download Budget
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}


export default OnePageBudget;