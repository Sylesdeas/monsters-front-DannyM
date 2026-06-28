import { Link } from "react-router-dom";

export default function DepartmentCard({ department }) {
  return (
    <article className="directory-card department-card">
      <img
        className="card-image"
        src={department.image}
        alt={department.imageAlt}
      />

      <div className="card-content">
        <h2>{department.name}</h2>

        <p className="department-description">{department.description}</p>

        <Link className="card-link" to={`/departments/${department.id}`}>
          View Department
        </Link>
      </div>
    </article>
  );
}
