import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  const teamMembers = [
    {
      name: "Armando Cabrera",
      role: "Team Role",
      roleClass: "pink-role",
      image: "/armando.jpeg",
      fallback: "AC",
      icon: "💻",
      bio: "Software Engineering student contributing to the design, development, and management of the project.",
      responsibility:
        "Responsible for the Project Charter.",
    },

    {
      name: "Anaiah E. Quinn",
      role: "Team Role",
      roleClass: "purple-role",
      image: "/anaiah.jpg",
      fallback: "T2",
      icon: "👥",
      bio: "Software Engineering student contributing to the system requirements, software architecture, and development of the project",
      responsibility:
        "Responsible for the Business Strategy",
    },

    {
      name: "Miguel E. Renteria",
      role: "Team Role",
      roleClass: "blue-role",
      image: "/miguel.jpg",
      fallback: "T3",
      icon: "⚙️",
      bio: "Software Engineering student contributing to system requirements, software architecture, and project development.",
      responsibility:
        "Responsible for the Market Research.",
    },

    {
      name: "Gabriel Trevino",
      role: "Team Role",
      roleClass: "orange-role",
      image: "/gabriel.jpg",
      fallback: "T4",
      icon: "🎨",
      bio: "Software Engineering graduate student concentrating in Cybersecurity. Currently developing my skills in programming, software development, and computer security. Contributing to the planning and development by helping define the project scope, requirements, and core features of the application.",
      responsibility:
        "Responsible for the Project Charter.",
    },

    {
      name: "Angel J. Bautista",
      role: "Team Role",
      roleClass: "green-role",
      image: "../../public/angel.jpg",
      fallback: "T5",
      icon: "📋",
      bio: "Software Engineering student contributing to the design and analysis of market sentiment of the project.",
      responsibility:
        "Responsible for the Market Research.",
    },
  ];

  return (
    <div className="about-page">

      {/* ======================================
          HERO
      ======================================= */}
      <section className="about-hero">

        {/* Decorative Confetti */}
        <span className="about-confetti confetti-a1"></span>
        <span className="about-confetti confetti-a2"></span>
        <span className="about-confetti confetti-a3"></span>
        <span className="about-confetti confetti-a4"></span>
        <span className="about-confetti confetti-a5"></span>
        <span className="about-confetti confetti-a6"></span>
        <span className="about-confetti confetti-a7"></span>
        <span className="about-confetti confetti-a8"></span>

        <div className="about-hero-container">

          {/* LEFT */}
          <div className="about-hero-content">

            <span className="about-eyebrow">
              THE TEAM
            </span>

            <h1>
              People Behind
              <br />
              the <span>Plans.</span>
            </h1>

            {/* <p className="about-hero-description">
              We're a team of students working together to research,
              design, manage, and build a better way to plan social
              gatherings.
            </p> */}

            {/* <div className="about-quick-values">

              <div className="quick-value">
                <div className="quick-icon pink-quick">
                  ❤️
                </div>

                <strong>
                  Different
                  <br />
                  Backgrounds
                </strong>
              </div>


              <div className="quick-divider"></div>


              <div className="quick-value">
                <div className="quick-icon purple-quick">
                  👥
                </div>

                <strong>
                  One
                  <br />
                  Common Goal
                </strong>
              </div>


              <div className="quick-divider"></div>


              <div className="quick-value">
                <div className="quick-icon orange-quick">
                  🚀
                </div>

                <strong>
                  Exciting
                  <br />
                  Things Ahead
                </strong>
              </div>

            </div> */}

          </div>


          {/* RIGHT */}
          <div className="about-hero-visual">

            <div className="about-blob"></div>

            <div className="about-quote-card">

              <span className="quote-top">
                Creative
              </span>

              <span className="quote-main">
                Minds,
              </span>

              <span className="quote-top">
                One
              </span>

              <span className="quote-main">
                Vision
              </span>

              <span className="quote-heart">
                ♡
              </span>

            </div>


            <div className="event-photo-card">

              <div className="event-photo-placeholder">

                {/* <span>🎉</span> */}
                <img src="/pay-dirt-pete-posed.png" alt="Event Photo" width="100%" height="100%" />

                {/* <p>
                  Add a team or event photo here
                </p> */}

              </div>

              <p>
                Better Plans.
                <br />
                Brighter Memories.
              </p>

            </div>


            <div className="sticky-note">

              <span>
                ✦
              </span>

              Teamwork
              <br />
              makes the
              <br />
              party work!

              <div>
                ☺
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================
          MISSION / VISION / VALUES
      ======================================= */}
      {/* <section className="about-principles-section">

        <div className="about-principles">

          <article className="principle-card">

            <div className="principle-icon target-icon">
              🎯
            </div>

            <h2>
              Our Mission
            </h2>

            <p>
              To explore and develop a collaborative event-planning
              experience that makes organizing gatherings simpler,
              clearer, and less stressful.
            </p>

          </article>


          <div className="principle-divider"></div>


          <article className="principle-card">

            <div className="principle-icon idea-icon">
              💡
            </div>

            <h2>
              Our Vision
            </h2>

            <p>
              A world where people can focus more on creating meaningful
              experiences and less on managing scattered planning
              information.
            </p>

          </article>


          <div className="principle-divider"></div>


          <article className="principle-card">

            <div className="principle-icon star-icon">
              ⭐
            </div>

            <h2>
              Our Values
            </h2>

            <p>
              Collaboration, creativity, thoughtful research,
              user-focused design, and a shared commitment to building
              something useful.
            </p>

          </article>

        </div>

      </section> */}


      {/* ======================================
          TEAM
      ======================================= */}
      <section className="about-team-section">

        <div className="about-section-heading">

          <span className="about-eyebrow">
            MEET THE TEAM
          </span>

          <h2>
            The People Making It
            <span> Happen.</span>
          </h2>

          <p>
            Each member brings different skills, experiences, and
            perspectives to the project.
          </p>
          <p>Together, we turn ideas into
            progress.</p>

        </div>


        <div className="about-team-grid">

          {teamMembers.map((member) => (

            <article
              className="about-member-card"
              key={member.name}
            >

              <div className="member-image-wrapper">

                <div className="member-image-background"></div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="member-photo"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";

                    const fallback =
                      event.currentTarget.nextElementSibling;

                    if (fallback) {
                      fallback.style.display = "grid";
                    }
                  }}
                />

                <div className="member-fallback">
                  {member.fallback}
                </div>

                <div className="member-decoration">
                  {member.icon}
                </div>

              </div>


              <div className="member-content">

                <h3>
                  {member.name}
                </h3>

                {/* <span
                  className={`member-role ${member.roleClass}`}
                >
                  {member.role}
                </span> */}

                <p>
                  {member.bio}
                </p>


                <div className="ownership">

                  <span>
                    PROJECT OWNERSHIP
                  </span>

                  <p>
                    {member.responsibility}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ======================================
          TEAM MESSAGE
      ======================================= */}
      {/* <section className="about-team-message-section">

        <div className="team-message-card">

          <div className="team-message-icon">
            🎉
          </div>


          <div className="team-message-content">

            <span className="about-eyebrow">
              BUILT TOGETHER
            </span>

            <h2>
              Same Team. Bigger
              <span> Celebrations.</span>
            </h2>

            <p>
              We're excited to keep learning, building, and sharing our
              progress throughout the semester.
            </p>

          </div>


          <Link
            to="/sprint-1"
            className="about-journey-button"
          >
            Follow Our Journey
            <span>→</span>
          </Link>

        </div>

      </section> */}

    </div>
  );
}

export default About;