import { Link } from "react-router-dom";

function SprintCard({ number, title, description, link }) {
  return (
    <Link to={link} className="sprint-card">

      <span className="sprint-number">
        {number}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="card-link">
        Explore Sprint →
      </span>

    </Link>
  );
}

export default SprintCard;