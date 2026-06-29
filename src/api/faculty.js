import { faculty } from "../data/dummyData";
import { apiRequest } from "./client";

function normalizeFaculty(professor) {
  return {
    ...professor,
    id: Number(professor.id),
    departmentId: Number(
      professor.departmentId ||
        professor.department_id ||
        professor.department?.id,
    ),
  };
}

export async function getFaculty() {
  const data = await apiRequest("/faculty", faculty);

  return data.map(normalizeFaculty);
}
