import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Search,
  Users,
} from "lucide-react";

import "../sprint3/Sprint3SubPages.css";


function EvidenceLog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");


  const evidenceEntries = [
    {
      id: "E-01",
      type: "Interview",
      tone: "pink",

      title: "Interview 1",
      subtitle: "Wedding Travel Coordination",

      description:
        "Helped coordinate transportation from El Paso to California for a family wedding and personally transported about five people.",

      insight:
        "Cost was the strongest frustration. Shared expenses and travel costs were important parts of the planning process.",

      usedIn:
        "Problem Definition",
    },

    {
      id: "E-02",
      type: "Interview",
      tone: "pink",

      title: "Interview 2",
      subtitle: "Birthday Planning",

      description:
        "Helped prepare a nephew's birthday party, searched store-to-store, and relied on trusted local contacts for rentals.",

      insight:
        "Vendor and supply discovery remains fragmented across stores, contacts, and separate tools.",

      usedIn:
        "Solution Direction",
    },

    {
      id: "E-03",
      type: "Interview",
      tone: "pink",

      title: "Interview 3",
      subtitle: "Halloween Gathering",

      description:
        "Saved and forwarded an invitation while describing uncertainty around how many people would actually attend.",

      insight:
        "Reliable RSVP visibility can improve decisions around food, drinks, supplies, and preparation.",

      usedIn:
        "Feature Priority",
    },

    {
      id: "E-04",
      type: "Teardown",
      tone: "purple",

      title: "Partiful",
      subtitle: "Product Teardown",

      description:
        "Tested event creation, invitation sharing, RSVP tracking, guest controls, and cost-sharing features.",

      insight:
        "Competitors already perform RSVP and event-creation workflows well, reducing their value as standalone differentiators.",

      usedIn:
        "Positioning",
    },

    {
      id: "E-05",
      type: "Teardown",
      tone: "blue",

      title: "Canva",
      subtitle: "Product Teardown",

      description:
        "Created and customized an invitation, edited imagery, and downloaded the completed design.",

      insight:
        "Invitation design is well supported, but planning and guest coordination still remain separate.",

      usedIn:
        "Solution Direction",
    },
  ];


  const filteredEntries = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return evidenceEntries.filter((entry) => {
      const matchesType =
        filterType === "All" ||
        entry.type === filterType;

      const searchableContent = [
        entry.id,
        entry.type,
        entry.title,
        entry.subtitle,
        entry.description,
        entry.insight,
        entry.usedIn,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        search === "" ||
        searchableContent.includes(search);

      return matchesType && matchesSearch;
    });
  }, [searchTerm, filterType]);


  return (
    <main className="s3sub-page s3ev3-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="s3ev3-hero">

        <div className="s3ev3-shell s3ev3-hero-layout">

          {/* LEFT SIDE */}

          <div className="s3ev3-hero-copy">

            <Link
              to="/sprint-3"
              className="s3sub-back"
            >
              <ArrowLeft size={16} />
              Back to Sprint 3
            </Link>


            <span className="s3ev3-eyebrow">
              EVIDENCE LOG
            </span>


            <h1>
              Turning Research
              <span>
                Into Decisions
              </span>
            </h1>


            <p>
              A collection of user insights, product research,
              and competitor analysis that shaped our problem
              definition and solution direction.
            </p>

          </div>


          {/* ==================================================
              HERO ILLUSTRATION
          ================================================== */}

          <div className="s3ev3-hero-art">

            <svg
              viewBox="0 0 560 370"
              className="s3ev3-hero-svg"
              aria-hidden="true"
            >

              <defs>

                <filter
                  id="s3ev3PaperShadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="12"
                    stdDeviation="13"
                    floodColor="#111538"
                    floodOpacity="0.13"
                  />
                </filter>


                <filter
                  id="s3ev3SmallShadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="8"
                    floodColor="#111538"
                    floodOpacity="0.12"
                  />
                </filter>


                <linearGradient
                  id="s3ev3BlueBlob"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#dff3ff"
                  />

                  <stop
                    offset="100%"
                    stopColor="#cde8ff"
                  />
                </linearGradient>


                <linearGradient
                  id="s3ev3PinkBlob"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#ffe5f0"
                  />

                  <stop
                    offset="100%"
                    stopColor="#ffd1e6"
                  />
                </linearGradient>

              </defs>


              {/* BLUE CIRCLE */}

              <circle
                cx="318"
                cy="178"
                r="130"
                fill="url(#s3ev3BlueBlob)"
                opacity="0.83"
              />


              {/* PINK BLOB */}

              <ellipse
                cx="395"
                cy="220"
                rx="125"
                ry="87"
                fill="url(#s3ev3PinkBlob)"
                opacity="0.92"
                transform="rotate(-18 395 220)"
              />


              {/* LITTLE DECORATIVE MARKS */}

              <circle
                cx="187"
                cy="75"
                r="7"
                fill="#8057f5"
                opacity="0.2"
              />


              <rect
                x="205"
                y="67"
                width="19"
                height="6"
                rx="3"
                fill="#ff3e91"
                opacity="0.35"
                transform="rotate(35 205 67)"
              />


              <circle
                cx="462"
                cy="75"
                r="6"
                fill="#ff3e91"
                opacity="0.3"
              />


              {/* DOCUMENT */}

              <g
                transform="translate(220 77) rotate(-7 86 113)"
                filter="url(#s3ev3PaperShadow)"
              >

                <rect
                  width="172"
                  height="226"
                  rx="15"
                  fill="#ffffff"
                  stroke="#ece7eb"
                />


                <rect
                  x="28"
                  y="35"
                  width="82"
                  height="9"
                  rx="4.5"
                  fill="#d8d3da"
                />


                <rect
                  x="28"
                  y="79"
                  width="112"
                  height="8"
                  rx="4"
                  fill="#ebe7eb"
                />


                <rect
                  x="28"
                  y="102"
                  width="92"
                  height="8"
                  rx="4"
                  fill="#ebe7eb"
                />


                <rect
                  x="28"
                  y="125"
                  width="109"
                  height="8"
                  rx="4"
                  fill="#ebe7eb"
                />


                <rect
                  x="28"
                  y="148"
                  width="76"
                  height="8"
                  rx="4"
                  fill="#ebe7eb"
                />


                {/* PINK HIGHLIGHT */}

                <circle
                  cx="45"
                  cy="190"
                  r="15"
                  fill="#ff3e91"
                />


                <rect
                  x="40"
                  y="185"
                  width="10"
                  height="10"
                  rx="2"
                  fill="white"
                />

              </g>


              {/* MAGNIFYING GLASS */}

              <g
                transform="translate(337 80) rotate(-7 70 70)"
                filter="url(#s3ev3PaperShadow)"
              >

                <circle
                  cx="65"
                  cy="65"
                  r="49"
                  fill="rgba(255,255,255,0.28)"
                  stroke="#111538"
                  strokeWidth="10"
                />


                <line
                  x1="103"
                  y1="101"
                  x2="145"
                  y2="156"
                  stroke="#111538"
                  strokeWidth="15"
                  strokeLinecap="round"
                />

              </g>


              {/* PURPLE CHART CARD */}

              <g
                transform="translate(137 210) rotate(-3)"
                filter="url(#s3ev3SmallShadow)"
              >

                <rect
                  width="96"
                  height="74"
                  rx="13"
                  fill="#c3b0ff"
                />


                <rect
                  x="24"
                  y="39"
                  width="9"
                  height="17"
                  rx="3"
                  fill="#111538"
                />


                <rect
                  x="39"
                  y="29"
                  width="9"
                  height="27"
                  rx="3"
                  fill="#111538"
                />


                <rect
                  x="54"
                  y="19"
                  width="9"
                  height="37"
                  rx="3"
                  fill="#111538"
                />


                <rect
                  x="69"
                  y="33"
                  width="9"
                  height="23"
                  rx="3"
                  fill="#111538"
                />

              </g>


              {/* SMALL ORANGE NOTE */}

              <g
                transform="translate(463 82) rotate(7)"
                filter="url(#s3ev3SmallShadow)"
              >

                <rect
                  width="58"
                  height="68"
                  rx="9"
                  fill="#ffd989"
                />


                <polyline
                  points="17,23 24,31 39,16"
                  fill="none"
                  stroke="#ff3e91"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />


                <rect
                  x="15"
                  y="44"
                  width="27"
                  height="5"
                  rx="2.5"
                  fill="#e2af4d"
                />

              </g>

            </svg>

          </div>

        </div>

      </section>


      {/* ==================================================
          RESEARCH AT A GLANCE
      ================================================== */}

      <section className="s3ev3-glance">

        {/* DECORATIVE SHAPES */}

        <div className="s3ev3-glance-shape s3ev3-glance-left"></div>

        <div className="s3ev3-glance-shape s3ev3-glance-right"></div>


        <div className="s3ev3-shell s3ev3-glance-inner">

          <div className="s3ev3-glance-heading">

            <h2>
              Research at a Glance
            </h2>


            <p>
              A quick snapshot of the evidence that informed our work.
            </p>

          </div>


          <div className="s3ev3-stat-grid">

            {/* USER INTERVIEWS */}

            <article className="s3ev3-stat-card s3ev3-stat-pink">

              <div className="s3ev3-stat-icon">

                <Users size={28} />

              </div>


              <div>

                <strong>
                  3
                </strong>


                <h3>
                  User Interviews
                </h3>


                <p>
                  In-depth conversations
                  with target users
                </p>

              </div>

            </article>


            {/* TEARDOWNS */}

            <article className="s3ev3-stat-card s3ev3-stat-purple">

              <div className="s3ev3-stat-icon">

                <FileText size={28} />

              </div>


              <div>

                <strong>
                  2
                </strong>


                <h3>
                  Product Teardowns
                </h3>


                <p>
                  Hands-on product and
                  workflow research
                </p>

              </div>

            </article>


            {/* SOURCES */}

            <article className="s3ev3-stat-card s3ev3-stat-blue">

              <div className="s3ev3-stat-icon">

                <BookOpen size={28} />

              </div>


              <div>

                <strong>
                  5
                </strong>


                <h3>
                  Tier 1 Sources
                </h3>


                <p>
                  Direct evidence used
                  to refine Festivo
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          EVIDENCE LOG TABLE
      ================================================== */}

      <section className="s3ev3-log">

        <div className="s3ev3-shell">

          <div className="s3ev3-log-header">

            <div className="s3ev3-section-heading">

              <h2>
                Evidence Log
              </h2>


              <p>
                Explore all research inputs and how they informed our decisions.
              </p>

            </div>


            <div className="s3ev3-controls">

              <label className="s3ev3-search">

                <Search size={15} />


                <input
                  type="text"
                  placeholder="Search evidence..."
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                />

              </label>


              <select
                className="s3ev3-filter"
                value={filterType}
                onChange={(event) =>
                  setFilterType(event.target.value)
                }
              >

                <option value="All">
                  All Types
                </option>


                <option value="Interview">
                  Interview
                </option>


                <option value="Teardown">
                  Teardown
                </option>

              </select>

            </div>

          </div>


          <div className="s3ev3-table-card">

            <div className="s3ev3-table-scroll">

              <table className="s3ev3-table">

                <colgroup>

                  <col className="s3ev3-col-source" />

                  <col className="s3ev3-col-type" />

                  <col className="s3ev3-col-description" />

                  <col className="s3ev3-col-insight" />

                  <col className="s3ev3-col-used" />

                </colgroup>


                <thead>

                  <tr>

                    <th>
                      SOURCE
                    </th>


                    <th>
                      TYPE
                    </th>


                    <th>
                      TITLE / DESCRIPTION
                    </th>


                    <th>
                      KEY INSIGHTS
                    </th>


                    <th>
                      USED IN
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {filteredEntries.map((entry) => (

                    <tr key={entry.id}>

                      {/* SOURCE */}

                      <td>

                        <span className="s3ev3-source">
                          {entry.id}
                        </span>

                      </td>


                      {/* TYPE */}

                      <td>

                        <span
                          className={`
                            s3ev3-type-pill
                            ${
                              entry.type === "Interview"
                                ? "s3ev3-type-pink"
                                : entry.tone === "blue"
                                ? "s3ev3-type-blue"
                                : "s3ev3-type-purple"
                            }
                          `}
                        >
                          {entry.type}
                        </span>

                      </td>


                      {/* DESCRIPTION */}

                      <td>

                        <div className="s3ev3-description">

                          <strong>
                            {entry.title}
                          </strong>


                          <span>
                            {entry.subtitle}
                          </span>


                          <p>
                            {entry.description}
                          </p>

                        </div>

                      </td>


                      {/* INSIGHT */}

                      <td>

                        <p className="s3ev3-table-copy">
                          {entry.insight}
                        </p>

                      </td>


                      {/* USED IN */}

                      <td>

                        <span className="s3ev3-used">
                          {entry.usedIn}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>


            {/* {filteredEntries.length === 0 && (

              <div className="s3ev3-empty">

                <Search size={28} />


                <strong>
                  No matching evidence.
                </strong>


                <span>
                  Try a different search term or filter.
                </span>

              </div>

            )} */}


            {/* {filteredEntries.length > 0 && (

              <div className="s3ev3-pagination">

                <button
                  type="button"
                  disabled
                  aria-label="Previous page"
                >
                  <ChevronLeft size={14} />
                </button>


                <button
                  type="button"
                  className="s3ev3-current-page"
                >
                  1
                </button>


                <button
                  type="button"
                  disabled
                  aria-label="Next page"
                >
                  <ChevronRight size={14} />
                </button>

              </div>

            )} */}

          </div>

        </div>

      </section>


      {/* ==================================================
          DARK WAVE INSIGHT SECTION
      ================================================== */}

      <section className="s3ev3-insights-section">

        <div className="s3ev3-insights-wave-top">

          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0,75
                C180,15 350,5 530,52
                C720,102 850,108 1010,73
                C1180,37 1305,31 1440,55
                L1440,120
                L0,120
                Z
              "
              fill="#111538"
            />
          </svg>

        </div>


        <div className="s3ev3-insights-body">

          <div className="s3ev3-shell">

            <div className="s3ev3-insight-heading">

              <span>
                INSIGHT SYNTHESIS
              </span>


              <h2>
                Key Insights from
                <strong> the Evidence</strong>
              </h2>


              <p>
                The research consistently shows that event planning remains
                fragmented across separate tools, contacts, habits,
                and manual coordination.
              </p>

            </div>


            {/* DECORATIVE CONFETTI */}

            <div className="s3ev3-confetti s3ev3-confetti-left">
              <span></span>
              <span></span>
              <span></span>
            </div>


            <div className="s3ev3-confetti s3ev3-confetti-right">
              <span></span>
              <span></span>
              <span></span>
            </div>


            <div className="s3ev3-insight-grid">

              {/* USER NEEDS */}

              <article>

                <div className="s3ev3-insight-icon s3ev3-insight-pink">

                  <Users size={23} />

                </div>


                <div>

                  <h3>
                    User Needs
                  </h3>


                  <p>
                    Users want a more collaborative and effortless way
                    to coordinate event details.
                  </p>

                </div>

              </article>


              {/* MARKET CONTEXT */}

              <article>

                <div className="s3ev3-insight-icon s3ev3-insight-purple">

                  <BarChart3 size={23} />

                </div>


                <div>

                  <h3>
                    Market Context
                  </h3>


                  <p>
                    Existing products solve individual pieces,
                    but the complete workflow remains fragmented.
                  </p>

                </div>

              </article>


              {/* VALIDATION */}

              <article>

                <div className="s3ev3-insight-icon s3ev3-insight-blue">

                  <CheckCircle2 size={23} />

                </div>


                <div>

                  <h3>
                    Solution Validation
                  </h3>


                  <p>
                    Evidence supports a broader connected-planning
                    direction for Festivo.
                  </p>

                </div>

              </article>

            </div>

          </div>

        </div>


        <div className="s3ev3-insights-wave-bottom">

          <svg
            viewBox="0 0 1440 105"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0,0
                L1440,0
                L1440,53
                C1250,28 1080,18 920,48
                C720,84 555,95 365,61
                C200,31 110,35 0,57
                Z
              "
              fill="#111538"
            />
          </svg>

        </div>

      </section>


      {/* ==================================================
          DOWNLOAD
      ================================================== */}

      <section className="s3ev3-download-section">

        <div className="s3ev3-shell">

          <div className="s3ev3-download-card">

            <div className="s3ev3-download-info">

              <div className="s3ev3-download-icon">

                <FileText size={25} />

              </div>


              <div>

                <span>
                  DOWNLOAD
                </span>


                <h3>
                  View the Full Evidence Log
                </h3>


                <p>
                  Get the complete list of research sources,
                  notes, observations, and insights.
                </p>

              </div>

            </div>


            <a
              href="/documents/sprint-3/Sprint 3 - Evidence Log.pdf"
              download
            >
              Download Document

              <Download size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}


export default EvidenceLog;