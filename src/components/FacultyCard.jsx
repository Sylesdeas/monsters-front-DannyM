export default function FacultyCard({ professor, departmentName }) {
  return (
    <article className="directory-card faculty-card">
      <h2>{professor.name}</h2>

      <p className="faculty-title">{professor.title}</p>

      {departmentName && <p className="faculty-department">{departmentName}</p>}

      <p>{professor.bio}</p>

      <p className="faculty-email">
        <strong>Email:</strong> {professor.email}
      </p>
    </article>
  );
}
