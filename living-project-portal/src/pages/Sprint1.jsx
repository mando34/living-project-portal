import { Link } from "react-router-dom";

import {
  Target,
  Search,
  ClipboardList,
  Trophy,
  Users,
  MessageSquareText,
  Lightbulb,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Sparkles,
  PartyPopper,
} from "lucide-react";

import "../styles/Sprint1.css";

function Sprint1() {
  const sprintSteps = [
    {
      number: "01",
      title: "Goals",
      description:
        "Define the problem, establish our objectives, and align the team around what we wanted to learn.",
      icon: Target,
      className: "step-pink",
    },
    {
      number: "02",
      title: "Research",
      description:
        "Interview potential users and explore how people currently plan parties, events, and social gatherings.",
      icon: Search,
      className: "step-purple",
    },
    {
      number: "03",
      title: "Planning",
      description:
        "Organize our findings, identify patterns, and begin shaping the direction of our proposed solution.",
      icon: ClipboardList,
      className: "step-blue",
    },
    {
      number: "04",
      title: "Outcome",
      description:
        "Finish the sprint with a clearer problem definition, shared direction, and stronger foundation for Sprint 2.",
      icon: Trophy,
      className: "step-orange",
    },
  ];

  const findings = [
    {
      icon: CalendarDays,
      title: "Scheduling Matters",
      description:
        "Coordinating a date and time that works for everyone can become one of the earliest challenges when planning an event.",
      color: "finding-pink",
    },
    {
      icon: MessageSquareText,
      title: "Information Gets Scattered",
      description:
        "Event details are commonly spread across conversations, messages, notes, and other tools.",
      color: "finding-purple",
    },
    {
      icon: Users,
      title: "Coordination Is Important",
      description:
        "Planners need an easier way to coordinate guests, responsibilities, contributions, and changing plans.",
      color: "finding-blue",
    },
    {
      icon: Lightbulb,
      title: "Flexibility Is Valuable",
      description:
        "Backup plans and the ability to adapt are important when availability, food, locations, or other details change.",
      color: "finding-orange",
    },
  ];

  const deliverables = [
    "Initial problem statement",
    "Five user interviews",
    "Interview findings and analysis",
    "Identified user pain points",
    "Initial project direction",
    "Sprint 1 documentation",
  ];

  return (
    <div className="sprint-one-page">

      {/* =========================================
          HERO
      ========================================== */}
      <section className="sprint-one-hero">

        {/* CONFETTI */}
        <span className="s1-confetti s1-confetti-1"></span>
        <span className="s1-confetti s1-confetti-2"></span>
        <span className="s1-confetti s1-confetti-3"></span>
        <span className="s1-confetti s1-confetti-4"></span>
        <span className="s1-confetti s1-confetti-5"></span>
        <span className="s1-confetti s1-confetti-6"></span>
        <span className="s1-confetti s1-confetti-7"></span>
        <span className="s1-confetti s1-confetti-8"></span>

        <div className="sprint-one-hero-container">

          {/* HERO COPY */}
          <div className="sprint-one-hero-copy">

            <span className="sprint-one-label">
              SPRINT 01
            </span>

            <h1>
              From Ideas
              <br />
              to <span>Direction.</span>
            </h1>

            <p>
              Our first sprint focused on understanding the event-planning
              problem, learning from potential users, and using those
              insights to establish a stronger direction for the project.
            </p>

            <div className="sprint-one-meta">

              <div>
                <CalendarDays size={17} />
                <span>
                  Sprint 1
                </span>
              </div>

              <div>
                <Users size={17} />
                <span>
                  5 User Interviews
                </span>
              </div>

              <div>
                <MapPin size={17} />
                <span>
                  Foundation Phase
                </span>
              </div>

            </div>

          </div>


          {/* VISUAL ROAD */}
          <div className="sprint-road-visual">

            <div className="road-background"></div>

            <div className="road-stop road-stop-one">

              <div className="road-pin pink-pin">
                <Target size={21} />
              </div>

              <span>
                Understand
              </span>

            </div>


            <div className="road-stop road-stop-two">

              <div className="road-pin orange-pin">
                <Search size={21} />
              </div>

              <span>
                Explore
              </span>

            </div>


            <div className="road-stop road-stop-three">

              <div className="road-pin purple-pin">
                <ClipboardList size={21} />
              </div>

              <span>
                Plan
              </span>

            </div>


            <div className="road-finish">

              <PartyPopper size={42} />

              <span>
                Strong
                <br />
                Start!
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          TIMELINE OVERVIEW
      ========================================== */}
      <section className="sprint-timeline-section">

        <div className="sprint-section-heading">

          <span className="sprint-section-label">
            OUR PROCESS
          </span>

          <h2>
            How Sprint 1
            <span> unfolded.</span>
          </h2>

          <p>
            We approached the sprint as a sequence: establish what we
            needed to understand, gather evidence, organize what we
            learned, and use those findings to guide the project.
          </p>

        </div>


        <div className="sprint-timeline">

          <div className="timeline-connector"></div>

          {sprintSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                className={`timeline-step ${step.className}`}
                key={step.number}
              >

                <div className="timeline-number">
                  {step.number}
                </div>

                <div className="timeline-icon">
                  <Icon
                    size={28}
                    strokeWidth={2}
                  />
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </article>
            );
          })}

        </div>

      </section>


      {/* =========================================
          GOALS
      ========================================== */}
      <section className="sprint-content-section">

        <div className="sprint-content-wrapper">

          <div className="sprint-content-heading">

            <div className="content-heading-icon pink-content-icon">
              <Target size={27} />
            </div>

            <div>

              <span>
                STEP 01
              </span>

              <h2>
                Setting Our Goals
              </h2>

            </div>

          </div>


          <div className="sprint-two-column">

            <div className="sprint-copy">

              <h3>
                What were we trying to understand?
              </h3>

              <p>
                Before thinking about features or implementation, our team
                needed to better understand the actual process people go
                through when organizing parties and social gatherings.
              </p>

              <p>
                Sprint 1 helped us establish the problem space and avoid
                designing a solution based only on our own assumptions.
              </p>

            </div>


            <div className="goal-card">

              <span className="mini-card-label">
                SPRINT GOALS
              </span>

              <div className="goal-item">
                <CheckCircle2 size={20} />
                <p>
                  Understand how people currently plan events.
                </p>
              </div>

              <div className="goal-item">
                <CheckCircle2 size={20} />
                <p>
                  Identify common planning frustrations.
                </p>
              </div>

              <div className="goal-item">
                <CheckCircle2 size={20} />
                <p>
                  Compare different users' planning processes.
                </p>
              </div>

              <div className="goal-item">
                <CheckCircle2 size={20} />
                <p>
                  Identify opportunities for a centralized solution.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          RESEARCH
      ========================================== */}
      <section className="sprint-research-section">

        <div className="sprint-content-wrapper">

          <div className="sprint-content-heading">

            <div className="content-heading-icon purple-content-icon">
              <Search size={27} />
            </div>

            <div>

              <span>
                STEP 02
              </span>

              <h2>
                Exploring Through
                <span> Research.</span>
              </h2>

            </div>

          </div>


          <div className="research-highlight">

            <div className="research-number">
              <span>5</span>

              <p>
                User
                <br />
                Interviews
              </p>
            </div>


            <div className="research-copy">

              <h3>
                Learning from real planning experiences
              </h3>

              <p>
                Our team interviewed five individuals about their
                experiences planning parties, events, and social
                gatherings.
              </p>

              <p>
                Rather than asking whether they would use a specific app,
                the interviews focused on their existing behavior: what
                they planned, how they organized information, what they
                considered important, and which parts of the process were
                the most difficult.
              </p>

            </div>


            <div className="research-note">

              <Sparkles size={24} />

              <span>
                Ask about the
                <strong>
                  problem
                </strong>
                before designing the
                <strong>
                  solution.
                </strong>
              </span>

            </div>

          </div>


          <div className="research-questions">

            <div className="research-question-card">

              <span>
                01
              </span>

              <p>
                How do people currently plan parties and events?
              </p>

            </div>


            <div className="research-question-card">

              <span>
                02
              </span>

              <p>
                How do they keep track of all the moving pieces?
              </p>

            </div>


            <div className="research-question-card">

              <span>
                03
              </span>

              <p>
                What makes an event feel successful or unsuccessful?
              </p>

            </div>


            <div className="research-question-card">

              <span>
                04
              </span>

              <p>
                Which parts of the planning process are most difficult?
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          FINDINGS
      ========================================== */}
      <section className="sprint-findings-section">

        <div className="sprint-section-heading">

          <span className="sprint-section-label">
            WHAT WE LEARNED
          </span>

          <h2>
            Patterns started to
            <span> emerge.</span>
          </h2>

          <p>
            While every person approached event planning differently,
            several recurring themes appeared across the interviews.
          </p>

        </div>


        <div className="finding-grid">

          {findings.map((finding) => {
            const Icon = finding.icon;

            return (
              <article
                className={`finding-card ${finding.color}`}
                key={finding.title}
              >

                <div className="finding-icon">
                  <Icon
                    size={26}
                    strokeWidth={2}
                  />
                </div>

                <h3>
                  {finding.title}
                </h3>

                <p>
                  {finding.description}
                </p>

              </article>
            );
          })}

        </div>

      </section>


      {/* =========================================
          PLANNING
      ========================================== */}
      <section className="sprint-planning-section">

        <div className="sprint-content-wrapper">

          <div className="sprint-content-heading">

            <div className="content-heading-icon blue-content-icon">
              <ClipboardList size={27} />
            </div>

            <div>

              <span>
                STEP 03
              </span>

              <h2>
                Turning Insights Into
                <span> Direction.</span>
              </h2>

            </div>

          </div>


          <div className="planning-board">

            <div className="planning-column">

              <span className="planning-column-label">
                WE HEARD
              </span>

              <div className="planning-note pink-note">
                Scheduling groups can be difficult.
              </div>

              <div className="planning-note orange-note">
                Information becomes scattered.
              </div>

              <div className="planning-note purple-note">
                Responsibilities aren't always clear.
              </div>

            </div>


            <div className="planning-arrow">
              <ArrowRight size={35} />
            </div>


            <div className="planning-column">

              <span className="planning-column-label">
                SO WE STARTED EXPLORING
              </span>

              <div className="planning-result">
                <CheckCircle2 size={20} />
                Centralized event information
              </div>

              <div className="planning-result">
                <CheckCircle2 size={20} />
                Easier collaboration
              </div>

              <div className="planning-result">
                <CheckCircle2 size={20} />
                Better task visibility
              </div>

              <div className="planning-result">
                <CheckCircle2 size={20} />
                Flexible planning tools
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          OUTCOME + DELIVERABLES
      ========================================== */}
      <section className="sprint-outcome-section">

        <div className="sprint-outcome-wrapper">

          <div className="outcome-copy">

            <span className="sprint-section-label light-label">
              STEP 04 · OUTCOME
            </span>

            <h2>
              A clearer direction and a
              <span> stronger foundation.</span>
            </h2>

            <p>
              Sprint 1 did not give us every answer — and that wasn't the
              goal. It gave our team a better understanding of the people
              we're designing for and a more informed foundation for the
              decisions that follow.
            </p>

          </div>


          <div className="deliverable-card">

            <div className="deliverable-heading">

              <div>
                <CheckCircle2 size={27} />
              </div>

              <div>
                <span>
                  SPRINT 1
                </span>

                <h3>
                  Key Deliverables
                </h3>
              </div>

            </div>


            <div className="deliverable-list">

              {deliverables.map((deliverable) => (
                <div
                  className="deliverable-item"
                  key={deliverable}
                >
                  <CheckCircle2 size={18} />

                  <span>
                    {deliverable}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          REFLECTION
      ========================================== */}
      <section className="sprint-reflection-section">

        <div className="reflection-card">

          <div className="reflection-decoration">
            ✦
          </div>

          <span className="sprint-section-label">
            LOOKING AHEAD
          </span>

          <h2>
            Sprint 1 gave us the
            <span> starting point.</span>
          </h2>

          <p>
            The next step is to use what we learned to refine our
            requirements, prioritize the problems worth solving, and
            continue shaping the Party Planner experience.
          </p>


          <Link
            to="/sprint-2"
            className="next-sprint-button"
          >
            Continue to Sprint 2

            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Sprint1;