import { departments, faculty } from "../data/dummyData";
import { apiRequest } from "./client";

function normalizeDepartment(department) {
  return {
    ...department,
    id: Number(department.id),
    image: department.image || department.imageUrl || department.image_url,
    imageAlt:
      department.imageAlt ||
      department.image_alt ||
      `${department.name} department image`,
  };
}

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

export async function getDepartments() {
  const data = await apiRequest("/departments", departments);

  return data.map(normalizeDepartment);
}

export async function getDepartment(id) {
  const fallbackDepartment = departments.find((department) => {
    return department.id === Number(id);
  });

  const data = await apiRequest(`/departments/${id}`, fallbackDepartment);

  return data ? normalizeDepartment(data) : null;
}

export async function getDepartmentFaculty(departmentId) {
  const fallbackFaculty = faculty.filter((professor) => {
    return professor.departmentId === Number(departmentId);
  });

  const data = await apiRequest(
    `/departments/${departmentId}/faculty`,
    fallbackFaculty,
  );

  return data.map(normalizeFaculty);
}
