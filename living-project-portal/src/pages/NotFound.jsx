import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section page-section">

      <div className="page-header">

        <p className="eyebrow">
          404
        </p>

        <h1>
          Page Not Found
        </h1>

        <p>
          The page you're looking for does not exist.
        </p>

        <Link to="/" className="button primary">
          Return Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;