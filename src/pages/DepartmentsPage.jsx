import DepartmentCard from "../components/DepartmentCard";
import { departments } from "../data/dummyData";
import "../styles/directory.css";

export default function DepartmentsPage() {
  return (
    <section className="directory-page">
      <div className="page-heading">
        <p className="page-eyebrow">ACADEMICS AT MU</p>
        <h1>Departments</h1>
        <p>
          Browse the Monsters University departments preparing students for
          scaring, energy work, door systems, and monster-world leadership.
        </p>
      </div>

      <div className="directory-grid">
        {departments.map((department) => {
          return (
            <DepartmentCard department={department} key={department.id} />
          );
        })}
      </div>
    </section>
  );
}
