const teamMembers = [
  {
    name: "Armando Cabrera",
    role: "Team Role",
    bio: "Computer Science and Software Engineering student contributing to the design, development, and management of the project.",
    responsibility:
      "Responsible for [insert primary project responsibility].",
  },

  {
    name: "Team Member 2",
    role: "Team Role",
    bio: "Short biography about the team member.",
    responsibility:
      "Responsible for [insert primary project responsibility].",
  },

  {
    name: "Team Member 3",
    role: "Team Role",
    bio: "Short biography about the team member.",
    responsibility:
      "Responsible for [insert primary project responsibility].",
  },

  {
    name: "Team Member 4",
    role: "Team Role",
    bio: "Short biography about the team member.",
    responsibility:
      "Responsible for [insert primary project responsibility].",
  },
];

function About() {
  return (
    <section className="section page-section">

      <div className="page-header">

        <p className="eyebrow">
          Our Team
        </p>

        <h1>
          About Us
        </h1>

        <p>
          Meet the team responsible for researching, designing,
          developing, and managing the Party Planner project.
        </p>

      </div>


      <div className="team-grid">

        {teamMembers.map((member) => (
          <article
            className="team-card"
            key={member.name}
          >

            <div className="team-avatar">
              {member.name.charAt(0)}
            </div>

            <h2>
              {member.name}
            </h2>

            <span className="role">
              {member.role}
            </span>

            <p>
              {member.bio}
            </p>

            <h3>
              Project Ownership
            </h3>

            <p>
              {member.responsibility}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default About;