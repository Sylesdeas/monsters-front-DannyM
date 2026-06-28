import { Link, useParams } from "react-router-dom";

import FacultyCard from "../components/FacultyCard";
import { departments, faculty } from "../data/dummyData";
import "../styles/directory.css";

export default function DepartmentDetails() {
  const { id } = useParams();

  const department = departments.find((department) => {
    return department.id === Number(id);
  });

  if (!department) {
    return (
      <section className="department-details-page">
        <div className="department-hero">
          <p className="page-eyebrow">MU DEPARTMENT</p>
          <h1>Department Not Found</h1>
          <p>We could not find that department.</p>
        </div>

        <div className="department-content single-column">
          <Link className="card-link" to="/departments">
            Back to Departments
          </Link>
        </div>
      </section>
    );
  }

  const departmentFaculty = faculty.filter((professor) => {
    return professor.departmentId === department.id;
  });

  return (
    <section className="department-details-page">
      <div className="department-hero">
        <p className="page-eyebrow">MU DEPARTMENT</p>
        <h1>{department.name}</h1>
        <p>{department.description}</p>
      </div>

      <div className="department-content">
        <section className="department-info">
          <img
            className="department-featured-image"
            src={department.image}
            alt={department.imageAlt}
          />

          <h2>About This Department</h2>
          <p>{department.description}</p>

          <Link className="card-link" to="/departments">
            Back to Departments
          </Link>
        </section>

        <aside className="contact-panel">
          <h2>Contact</h2>

          <p>
            <strong>Email</strong>
            <br />
            <a href={`mailto:${department.email}`}>{department.email}</a>
          </p>

          <p>
            <strong>Phone</strong>
            <br />
            {department.phone}
          </p>

          <p>
            <strong>Location</strong>
            <br />
            {department.location}
          </p>
        </aside>
      </div>

      <section className="department-faculty-section">
        <div className="section-heading">
          <p className="page-eyebrow">FACULTY</p>
          <h2>{department.name} Faculty</h2>
        </div>

        <div className="directory-grid compact-grid">
          {departmentFaculty.map((professor) => {
            return <FacultyCard professor={professor} key={professor.id} />;
          })}
        </div>
      </section>
    </section>
  );
}
