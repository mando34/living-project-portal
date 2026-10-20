import { Link } from "react-router-dom";

import {
  ArrowLeft,
  CheckCircle2,
  CircleDollarSign,
  Download,
  FileText,
  Lightbulb,
  Search,
  ShieldAlert,
  Store,
  Users,
} from "lucide-react";

import "../sprint3/Sprint3SubPages.css";


function CandidateRiskEntries() {

  const risks = [
    {
      number: "01",
      category: "USER / ADOPTION",
      eyebrow: "USER ENGAGEMENT RISK",
      title: "Low RSVP Adoption",
      icon: Users,
      tone: "pink",
      priority: "High",

      statement:
        "Users may not adopt Festivo's RSVP functionality if it does not provide enough value beyond tools they already use.",

      evidence:
        "User interviews and competitor research showed that invitation and RSVP capabilities are already available in existing planning platforms.",

      impact:
        "Low adoption could weaken guest coordination and make the RSVP experience feel like another isolated feature instead of part of a connected planning workflow.",

      owner:
        "Product Team",

      mitigation:
        "Keep RSVP interactions simple and connect attendance information to guest counts, planning tasks, event details, and the broader Festivo workflow.",
    },

    {
      number: "02",
      category: "VENDOR / MARKETPLACE",
      eyebrow: "VENDOR & SUPPLY RISK",
      title: "Limited Vendor Supply",
      icon: Store,
      tone: "purple",
      priority: "Medium",

      statement:
        "Vendor discovery may provide limited value if there are not enough useful local vendors or service providers available to users.",

      evidence:
        "Research showed that event organizers often combine online searches, physical stores, personal contacts, and existing vendor relationships.",

      impact:
        "Insufficient vendor coverage could make the discovery experience feel incomplete and reduce confidence in Festivo as a centralized planning resource.",

      owner:
        "Product / Partnerships Team",

      mitigation:
        "Begin with focused vendor categories and reliable local options, then expand coverage as usage and marketplace participation increase.",
    },

    {
      number: "03",
      category: "FEATURE / SCOPE",
      eyebrow: "FEATURE & SCOPE RISK",
      title: "Budget Tracking Complexity",
      icon: CircleDollarSign,
      tone: "orange",
      priority: "Medium",

      statement:
        "Financial-planning capabilities could become too complicated for the initial release if budgeting expands into payments, reimbursements, or transaction processing.",

      evidence:
        "Sprint 3 interviews increased the importance of shared expenses and contribution visibility while the existing project scope continues to defer direct payments.",

      impact:
        "Adding too much financial functionality could increase development scope, make the experience harder to understand, and distract from the initial MVP.",

      owner:
        "Product Team",

      mitigation:
        "Focus the first release on simple budgeting, manual expense tracking, and contribution visibility while keeping payment processing outside the MVP.",
    },
  ];


  return (
    <main className="s3sub-page s3risk-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s3risk-editorial-hero">

        <div className="s3risk-editorial-hero-inner">

          {/* LEFT */}

          <div className="s3risk-editorial-copy">

            <Link
              to="/sprint-3"
              className="s3sub-back"
            >
              <ArrowLeft size={16} />
              Back to Sprint 3
            </Link>


            <span className="s3risk-editorial-eyebrow">
              SPRINT 3 · RISK MANAGEMENT
            </span>


            <h1>
              Candidate
              <span>Risk Entries.</span>
            </h1>


            <p>
              Sprint 3 research revealed several areas of uncertainty
              that could affect Festivo as the project continues.
              Rather than treating those findings as problems after
              they occur, the team documented them as candidate risks
              that can be monitored and managed.
            </p>


            <div className="s3risk-editorial-tags">

              <span>
                <ShieldAlert size={17} />
                3 Candidate Risks
              </span>

              <span>
                <Search size={17} />
                Research Based
              </span>

              <span>
                <Lightbulb size={17} />
                Planned Mitigations
              </span>

            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="s3risk-hero-map">

            <div className="s3risk-map-shape s3risk-map-shape-pink"></div>

            <div className="s3risk-map-shape s3risk-map-shape-purple"></div>


            <div className="s3risk-map-core">

              <ShieldAlert size={37} />

              <span>
                SPRINT 3
              </span>

              <strong>
                Risk Review
              </strong>

              <small>
                Evidence → Uncertainty → Response
              </small>

            </div>


            <div className="s3risk-orbit-card s3risk-orbit-pink">

              <Users size={21} />

              <div>
                <span>01</span>
                <strong>Adoption</strong>
              </div>

            </div>


            <div className="s3risk-orbit-card s3risk-orbit-purple">

              <Store size={21} />

              <div>
                <span>02</span>
                <strong>Vendors</strong>
              </div>

            </div>


            <div className="s3risk-orbit-card s3risk-orbit-orange">

              <CircleDollarSign size={21} />

              <div>
                <span>03</span>
                <strong>Scope</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="s3risk-intro-section">

        <div className="s3risk-intro-inner">

          <span>
            FROM EVIDENCE TO RISK
          </span>


          <h2>
            Research does more than validate ideas.
            <strong>
              It reveals uncertainty.
            </strong>
          </h2>


          <p>
            Each candidate risk below comes from something the team
            learned during Sprint 3. Grouping the risks by area makes
            it easier to see what could affect users, the marketplace,
            and the scope of the product.
          </p>

        </div>

      </section>


      {/* ==================================================
          RISK STORIES
      ================================================== */}

      <div className="s3risk-story-wrapper">

        {risks.map((risk) => {

          const RiskIcon = risk.icon;

          return (

            <section
              key={risk.number}
              className={`s3risk-story-section s3risk-story-${risk.tone}`}
            >

              <div className="s3risk-story-inner">

                {/* ========================================
                    CATEGORY SIDE
                ======================================== */}

                <aside className="s3risk-story-category">

                  <div className="s3risk-story-number">
                    {risk.number}
                  </div>


                  <div className="s3risk-story-icon">

                    <RiskIcon size={30} />

                  </div>


                  <span>
                    {risk.eyebrow}
                  </span>


                  <h2>
                    {risk.category}
                  </h2>


                  <div className="s3risk-category-line"></div>

                </aside>


                {/* ========================================
                    RISK PANEL
                ======================================== */}

                <article className="s3risk-story-card">

                  <div className="s3risk-story-card-top">

                    <div>

                      <span>
                        CANDIDATE RISK
                      </span>

                      <h3>
                        {risk.title}
                      </h3>

                    </div>


                    <div
                      className={`
                        s3risk-story-priority
                        ${
                          risk.priority === "High"
                            ? "s3risk-story-priority-high"
                            : "s3risk-story-priority-medium"
                        }
                      `}
                    >
                      {risk.priority} Priority
                    </div>

                  </div>


                  {/* RISK STATEMENT */}

                  <div className="s3risk-story-statement">

                    <ShieldAlert size={23} />

                    <div>

                      <span>
                        RISK STATEMENT
                      </span>

                      <p>
                        {risk.statement}
                      </p>

                    </div>

                  </div>


                  {/* DETAILS */}

                  <div className="s3risk-story-details">

                    <div className="s3risk-story-detail">

                      <div className="s3risk-story-detail-icon">
                        <Search size={20} />
                      </div>


                      <div>

                        <span>
                          EVIDENCE / TRIGGER
                        </span>

                        <p>
                          {risk.evidence}
                        </p>

                      </div>

                    </div>


                    <div className="s3risk-story-detail">

                      <div className="s3risk-story-detail-icon">
                        <ShieldAlert size={20} />
                      </div>


                      <div>

                        <span>
                          POTENTIAL IMPACT
                        </span>

                        <p>
                          {risk.impact}
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* OWNER */}

                  <div className="s3risk-story-owner">

                    <Users size={19} />

                    <div>

                      <span>
                        RISK OWNER
                      </span>

                      <strong>
                        {risk.owner}
                      </strong>

                    </div>

                  </div>


                  {/* MITIGATION */}

                  <div className="s3risk-story-mitigation">

                    <div className="s3risk-mitigation-heading">

                      <div>
                        <CheckCircle2 size={21} />
                      </div>


                      <span>
                        MITIGATION STRATEGY
                      </span>

                    </div>


                    <p>
                      {risk.mitigation}
                    </p>

                  </div>

                </article>

              </div>

            </section>

          );
        })}

      </div>


      {/* ==================================================
          SUMMARY
      ================================================== */}

      <section className="s3risk-summary-section">

        <div className="s3risk-summary-inner">

          <div className="s3risk-summary-copy">

            <span>
              WHAT WE CARRY FORWARD
            </span>


            <h2>
              Three risks.
              <strong>
                Three things to keep watching.
              </strong>
            </h2>


            <p>
              Candidate risks are not predictions that the project
              will fail. They give the team specific uncertainties
              to monitor as Festivo moves into later design and
              development work.
            </p>

          </div>


          <div className="s3risk-summary-items">

            <div className="s3risk-summary-item s3risk-summary-pink">

              <span>
                01
              </span>

              <div>

                <strong>
                  Adoption
                </strong>

                <p>
                  Will users see enough value in the connected experience?
                </p>

              </div>

            </div>


            <div className="s3risk-summary-item s3risk-summary-purple">

              <span>
                02
              </span>

              <div>

                <strong>
                  Availability
                </strong>

                <p>
                  Can vendor discovery provide useful local coverage?
                </p>

              </div>

            </div>


            <div className="s3risk-summary-item s3risk-summary-orange">

              <span>
                03
              </span>

              <div>

                <strong>
                  Scope
                </strong>

                <p>
                  Can financial coordination remain useful without overcomplicating the MVP?
                </p>

              </div>

            </div>

          </div>

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
              Sprint 3 Candidate Risk Entries
            </h2>


            <p>
              Download the original risk-management document used
              to support this Living Project Portal page.
            </p>

          </div>


          <a
            href="/documents/sprint-3/Sprint 3 Candidate Risk Entries.pdf"
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


export default CandidateRiskEntries;